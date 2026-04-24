/* ============================================================
 * WerkBank – Stücklisten-Import
 * Universeller BOM-Importer für CAD-Exporte
 * Unterstützt: AutoCAD, Vectorworks/ElementsCAD, TopSolid Wood,
 *              SolidWorks, Inventor, cadwork + Generic CSV/XLSX
 *
 * Architektur (6 Schichten):
 *   1. PARSER        -> CSV (PapaParse) + XLSX (SheetJS) → Rohzeilen
 *   2. FINGERPRINT   -> Erkennt CAD-System an Header-Muster
 *   3. PROFILE       -> Vordefinierte + User-Profile (Mapping)
 *   4. NORMALIZE     -> Einheiten, Dezimaltrenner, Encoding
 *   5. CANONICAL     -> Einheitliches WerkBank-BOM-Modell
 *   6. MATCH         -> Abgleich mit eigeneMaterialien-Store
 * ============================================================ */

(function() {
    'use strict';

    // ============================================================
    // KANONISCHES FELD-SCHEMA (WerkBank-BOM-Modell)
    // ============================================================
    const CANONICAL_FIELDS = {
        pos:         { label: 'Pos.',          type: 'string',  required: false },
        bezeichnung: { label: 'Bezeichnung',   type: 'string',  required: true  },
        material:    { label: 'Material',      type: 'string',  required: false },
        menge:       { label: 'Menge',         type: 'number',  required: true  },
        einheit:     { label: 'Einheit',       type: 'unit',    required: false },
        laenge_mm:   { label: 'Länge (mm)',    type: 'length',  required: false },
        breite_mm:   { label: 'Breite (mm)',   type: 'length',  required: false },
        dicke_mm:    { label: 'Dicke (mm)',    type: 'length',  required: false },
        artikelNr:   { label: 'Artikel-Nr.',   type: 'string',  required: false },
        kommentar:   { label: 'Kommentar',     type: 'string',  required: false },
        preis:       { label: 'Preis (€)',     type: 'number',  required: false }
    };

    // ============================================================
    // HEADER-NORMALISIERUNG
    // ============================================================
    // Wandelt rohe Header-Strings in eine Form um, die robust mit
    // Alias-Listen verglichen werden kann.
    //
    // Beispiele:
    //   "Länge (mm)"     → "länge"
    //   "L / mm"         → "l"
    //   "Width [mm]"     → "width"
    //   "Dicke in mm"    → "dicke"
    //   "Part # / PartNo"→ "part # / partno"
    //   "Qty."           → "qty"
    function normalizeHeader(s) {
        if (s === null || s === undefined) return '';
        let h = String(s).toLowerCase().trim();
        // Einheit-Suffixe und -Klammer-Zusätze entfernen
        h = h.replace(/[\s\-_/]*\(\s*(mm|cm|m|inch|in|"|kg|stk|pcs|pieces?|€|eur|euro)\s*\)\s*$/i, '');
        h = h.replace(/[\s\-_/]*\[\s*(mm|cm|m|inch|in|"|kg|stk|pcs|pieces?|€|eur|euro)\s*\]\s*$/i, '');
        h = h.replace(/[\s\-_/]+(in\s+)?(mm|cm|m|inch|in|kg|stk|pcs|pieces?|€|eur|euro)\s*$/i, '');
        h = h.replace(/[._:;]+$/, '');
        h = h.replace(/\s+/g, ' ').trim();
        return h;
    }

    // ============================================================
    // VORDEFINIERTE PROFILE (mit Fingerprint-Regeln)
    // ============================================================
    // Matching-Regeln sind Listen von Header-Aliassen (lowercase).
    // Alle Aliasse für ein Feld werden versucht – erste Übereinstimmung gewinnt.
    const DEFAULT_PROFILES = [
        {
            id: 'solidworks',
            name: 'SolidWorks (Bomtemp)',
            description: 'Standard-BOM-Templates Bomtemp.xls / Bomtemp-Material.xls / -All.xls',
            fingerprint: {
                // SolidWorks verwendet feste Pflichtnamen laut Doku:
                // "Partno" und "quantity" müssen exakt so heißen
                requireAny: [['partno'], ['part no'], ['part number']],
                requireAll: [],
                score: 100
            },
            mapping: {
                pos:         ['itemno', 'item no', 'item', 'item number', 'pos', 'pos.'],
                bezeichnung: ['description', 'beschreibung', 'name', 'designation'],
                material:    ['material', 'werkstoff'],
                menge:       ['quantity', 'qty', 'qty.', 'menge', 'stück', 'stueck', 'stk'],
                einheit:     ['unit', 'uom', 'einheit'],
                laenge_mm:   ['length', 'stock size', 'länge', 'laenge', 'l'],
                breite_mm:   ['width', 'breite', 'b'],
                dicke_mm:    ['thickness', 'dicke', 'stärke', 'staerke', 't'],
                artikelNr:   ['partno', 'part no', 'part number', 'artikelnummer', 'artikel-nr', 'artikel nr'],
                kommentar:   ['vendor', 'note', 'notes', 'kommentar', 'bemerkung'],
                preis:       ['price', 'preis', 'ep', 'einzelpreis']
            },
            defaults: { einheit: 'Stk', unit_length: 'mm' }
        },
        {
            id: 'topsolid_wood',
            name: 'TopSolid Wood',
            description: 'CSV/TXT-Export aus TopSolid Wood BOM',
            fingerprint: {
                requireAny: [['designation', 'thickness'], ['designation', 'quantity']],
                requireAll: [],
                score: 90
            },
            mapping: {
                pos:         ['index', 'idx', 'item', 'no', 'no.', 'nr', 'position'],
                bezeichnung: ['designation', 'description', 'name'],
                material:    ['material', 'matter'],
                menge:       ['quantity', 'qty', 'count'],
                einheit:     ['unit', 'uom'],
                laenge_mm:   ['length', 'l (mm)', 'l'],
                breite_mm:   ['width', 'w (mm)', 'w'],
                dicke_mm:    ['thickness', 't (mm)', 't'],
                artikelNr:   ['reference', 'ref', 'code', 'part number', 'partno'],
                kommentar:   ['comment', 'remark', 'note'],
                preis:       ['price', 'cost']
            },
            defaults: { einheit: 'Stk', unit_length: 'mm' }
        },
        {
            id: 'vectorworks',
            name: 'Vectorworks / ElementsCAD',
            description: 'Berichte/Reports aus Vectorworks, v.a. ElementsCAD für Tischlerei',
            fingerprint: {
                requireAny: [['bezeichnung', 'material'], ['bauteil', 'stück'], ['bauteil', 'stueck'], ['bezeichnung', 'stärke']],
                requireAll: [],
                score: 95
            },
            mapping: {
                pos:         ['pos', 'pos.', 'position', 'nr', 'nr.', 'teil-nr'],
                bezeichnung: ['bezeichnung', 'bauteil', 'name', 'teil'],
                material:    ['material', 'werkstoff', 'holzart'],
                menge:       ['stück', 'stueck', 'stk', 'anzahl', 'menge'],
                einheit:     ['einheit', 'unit'],
                laenge_mm:   ['länge', 'laenge', 'l', 'länge (mm)', 'länge/mm'],
                breite_mm:   ['breite', 'b', 'breite (mm)', 'breite/mm'],
                dicke_mm:    ['stärke', 'staerke', 'dicke', 'd', 'stärke (mm)', 'staerke (mm)'],
                artikelNr:   ['artikelnr', 'artikel-nr', 'artikel nr', 'artikelnummer', 'id'],
                kommentar:   ['bemerkung', 'kommentar', 'notiz', 'info'],
                preis:       ['preis', 'ep', 'einzelpreis', '€/stk', 'preis (€)']
            },
            defaults: { einheit: 'Stk', unit_length: 'mm' }
        },
        {
            id: 'autocad_dx',
            name: 'AutoCAD (DATAEXTRACTION)',
            description: 'Datenextraktion (DX) aus AutoCAD, CSV/XLS/TXT',
            fingerprint: {
                // AutoCAD DX hat per Default "Count" und "Name" Spalten
                requireAll: [['count', 'name']],
                requireAny: [],
                score: 85
            },
            mapping: {
                pos:         ['handle', 'block name', 'pos'],
                bezeichnung: ['name', 'description', 'bezeichnung', 'text'],
                material:    ['material', 'layer', 'werkstoff'],
                menge:       ['count', 'anzahl', 'qty', 'quantity'],
                einheit:     ['unit', 'einheit'],
                laenge_mm:   ['length', 'länge', 'l'],
                breite_mm:   ['width', 'breite', 'b'],
                dicke_mm:    ['thickness', 'dicke', 'stärke', 't'],
                artikelNr:   ['tag', 'part number', 'artikelnr'],
                kommentar:   ['comment', 'notes', 'bemerkung'],
                preis:       ['price', 'preis']
            },
            defaults: { einheit: 'Stk', unit_length: 'mm' }
        },
        {
            id: 'inventor',
            name: 'Autodesk Inventor',
            description: 'BOM-Export aus Inventor (XLS/XML)',
            fingerprint: {
                requireAny: [['part number', 'qty'], ['partnumber', 'qty']],
                requireAll: [],
                score: 80
            },
            mapping: {
                pos:         ['item', 'item number', 'pos'],
                bezeichnung: ['description', 'title', 'bezeichnung'],
                material:    ['material', 'werkstoff'],
                menge:       ['qty', 'quantity', 'menge'],
                einheit:     ['unit', 'einheit', 'unit of measure'],
                laenge_mm:   ['length', 'länge', 'l'],
                breite_mm:   ['width', 'breite', 'b'],
                dicke_mm:    ['thickness', 'dicke', 't'],
                artikelNr:   ['part number', 'partnumber', 'artikelnr'],
                kommentar:   ['comment', 'notes'],
                preis:       ['unit price', 'price', 'preis']
            },
            defaults: { einheit: 'Stk', unit_length: 'mm' }
        },
        {
            id: 'cadwork',
            name: 'cadwork',
            description: 'Stücklisten-Export aus cadwork (Holzbau/Tischlerei)',
            fingerprint: {
                requireAny: [['nr', 'bauteil'], ['bauteil', 'länge', 'breite']],
                requireAll: [],
                score: 85
            },
            mapping: {
                pos:         ['nr', 'nr.', 'pos', 'pos.', 'teil-nr'],
                bezeichnung: ['bauteil', 'bezeichnung', 'name'],
                material:    ['material', 'holzart', 'werkstoff'],
                menge:       ['anzahl', 'stück', 'stueck', 'stk'],
                einheit:     ['einheit'],
                laenge_mm:   ['länge', 'laenge', 'l'],
                breite_mm:   ['breite', 'b'],
                dicke_mm:    ['dicke', 'stärke', 'staerke', 'd', 'h'],
                artikelNr:   ['artikel', 'artikelnr', 'code'],
                kommentar:   ['info', 'bemerkung', 'kommentar'],
                preis:       ['preis', 'ep']
            },
            defaults: { einheit: 'Stk', unit_length: 'mm' }
        },
        {
            id: 'generic',
            name: 'Generisch (automatische Erkennung)',
            description: 'Fallback-Profil mit intelligenter Heuristik',
            fingerprint: { requireAny: [], requireAll: [], score: 10 },
            mapping: {
                pos:         ['pos', 'position', 'nr', 'item', 'itemno', 'index', 'teil-nr', 'teil nr', 'teilnr', 'no'],
                bezeichnung: ['bezeichnung', 'name', 'description', 'bauteil', 'designation', 'title', 'teil', 'benennung', 'artikel', 'part'],
                material:    ['material', 'werkstoff', 'holzart', 'matter', 'mat', 'werkst', 'holz'],
                menge:       ['menge', 'anzahl', 'stück', 'stueck', 'stk', 'qty', 'quantity', 'count', 'num', 'number'],
                einheit:     ['einheit', 'unit', 'uom', 'me'],
                laenge_mm:   ['länge', 'laenge', 'length', 'l', 'teillänge', 'teil länge', 'zuschnitt länge', 'panel length', 'cut length', 'long', 'höhe', 'hoehe', 'height', 'h', 'part length'],
                breite_mm:   ['breite', 'width', 'b', 'w', 'teilbreite', 'teil breite', 'zuschnitt breite', 'panel width', 'cut width', 'tiefe', 'depth', 'part width'],
                dicke_mm:    ['dicke', 'stärke', 'staerke', 'thickness', 'd', 't', 'th', 'thick', 'stock size', 'plate thickness', 'materialstärke', 'plattenstärke', 'plattenstaerke', 'strength'],
                artikelNr:   ['artikelnr', 'artikel-nr', 'artikel nr', 'artikelnummer', 'part number', 'partno', 'partnumber', 'part #', 'code', 'reference', 'ref', 'art-nr', 'artnr', 'sku'],
                kommentar:   ['kommentar', 'bemerkung', 'comment', 'notes', 'note', 'info', 'remark', 'hinweis', 'anmerkung'],
                preis:       ['preis', 'price', 'ep', 'einzelpreis', 'unit price', 'cost', 'stückpreis', 'stueckpreis', 'preis pro stk']
            },
            defaults: { einheit: 'Stk', unit_length: 'mm' }
        }
    ];

    // ============================================================
    // 1. PARSER-LAYER
    // ============================================================
    async function parseFile(file) {
        const name = (file.name || '').toLowerCase();
        const isCsv = name.endsWith('.csv') || name.endsWith('.txt') || name.endsWith('.tsv') || file.type === 'text/csv';
        const isXlsx = name.endsWith('.xlsx') || name.endsWith('.xls') || name.endsWith('.xlsm') || name.endsWith('.ods');

        if (isXlsx) return parseXlsx(file);
        if (isCsv)  return parseCsv(file);

        // Fallback: erst XLSX, dann CSV
        try { return await parseXlsx(file); } catch (_) { return parseCsv(file); }
    }

    function parseXlsx(file) {
        return new Promise((resolve, reject) => {
            if (typeof XLSX === 'undefined') {
                reject(new Error('SheetJS (XLSX) nicht geladen. Bitte Seite neu laden.'));
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = new Uint8Array(e.target.result);
                    const wb = XLSX.read(data, { type: 'array', cellDates: true });
                    // Nimm erstes Sheet mit Daten
                    let sheet = null, sheetName = '';
                    for (const sn of wb.SheetNames) {
                        const s = wb.Sheets[sn];
                        const ref = s['!ref'];
                        if (ref) { sheet = s; sheetName = sn; break; }
                    }
                    if (!sheet) { reject(new Error('Keine Daten in der Excel-Datei gefunden.')); return; }
                    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '', blankrows: false });
                    if (!rows.length) { reject(new Error('Tabelle ist leer.')); return; }
                    const headerRowIdx = detectHeaderRow(rows);
                    const headers = (rows[headerRowIdx] || []).map(h => String(h).trim());
                    const dataRows = rows.slice(headerRowIdx + 1).filter(r => r.some(c => String(c).trim() !== ''));
                    const objects = dataRows.map(r => {
                        const o = {};
                        headers.forEach((h, i) => { if (h) o[h] = r[i] !== undefined ? r[i] : ''; });
                        return o;
                    });
                    resolve({ headers, rows: objects, format: 'xlsx', sheetName, sheets: wb.SheetNames });
                } catch (err) { reject(err); }
            };
            reader.onerror = () => reject(reader.error || new Error('Datei konnte nicht gelesen werden.'));
            reader.readAsArrayBuffer(file);
        });
    }

    function parseCsv(file) {
        return new Promise((resolve, reject) => {
            if (typeof Papa === 'undefined') {
                reject(new Error('PapaParse nicht geladen. Bitte Seite neu laden.'));
                return;
            }
            // Encoding-Erkennung: erst UTF-8, bei Umlaut-Problemen ISO-8859-1
            const tryParse = (encoding) => {
                Papa.parse(file, {
                    header: true,
                    skipEmptyLines: true,
                    delimiter: '', // Auto-Erkennung
                    dynamicTyping: false,
                    encoding: encoding,
                    complete: (result) => {
                        if (encoding === 'UTF-8' && detectEncodingProblems(result)) {
                            tryParse('ISO-8859-1'); return;
                        }
                        const headers = result.meta.fields || [];
                        resolve({
                            headers,
                            rows: result.data,
                            format: 'csv',
                            delimiter: result.meta.delimiter,
                            encoding
                        });
                    },
                    error: (err) => reject(err)
                });
            };
            tryParse('UTF-8');
        });
    }

    // Heuristik: Header-Zeile finden (meist Zeile 0, aber manche CAD-Systeme packen Titel/Metadaten davor)
    function detectHeaderRow(rows) {
        const maxCheck = Math.min(rows.length, 10);
        let bestIdx = 0, bestScore = -1;
        for (let i = 0; i < maxCheck; i++) {
            const row = rows[i] || [];
            let score = 0;
            for (const cell of row) {
                const s = String(cell).trim();
                if (!s) continue;
                // Header-Zellen: kurze Strings, keine reinen Zahlen
                if (s.length > 0 && s.length < 40 && isNaN(Number(s.replace(',', '.')))) score += 2;
                // Bonus für typische Header-Wörter
                if (/^(pos|item|nr|name|bezeichnung|material|menge|qty|quantity|stück|stueck|länge|breite|dicke|length|width|thickness|designation|description|partno|count)/i.test(s)) score += 5;
            }
            if (score > bestScore) { bestScore = score; bestIdx = i; }
        }
        return bestIdx;
    }

    function detectEncodingProblems(result) {
        // Typische UTF-8-Fehlinterpretation von Latin-1: "Ã¤" statt "ä"
        const text = JSON.stringify(result.data).slice(0, 5000) + JSON.stringify(result.meta.fields || []);
        return /Ã[¤¶¼Ÿ„–œŸ]|Ã\u009f/.test(text);
    }

    // ============================================================
    // 2. FINGERPRINT-LAYER
    // ============================================================
    function detectProfile(headers, customProfiles) {
        const normHeaders = headers.map(h => normalizeHeader(h));
        const all = [].concat(DEFAULT_PROFILES, customProfiles || []);
        let best = null, bestScore = -1;
        for (const p of all) {
            const fp = p.fingerprint || {};
            let matched = true;
            // requireAll: Jedes Alias-Set muss mindestens ein Match haben
            for (const set of (fp.requireAll || [])) {
                const ok = set.every(alias => normHeaders.some(h => h === alias || h.includes(alias)));
                if (!ok) { matched = false; break; }
            }
            if (!matched) continue;
            // requireAny: Mindestens ein Set muss komplett matchen
            if (fp.requireAny && fp.requireAny.length) {
                const anyOk = fp.requireAny.some(set => set.every(alias => normHeaders.some(h => h === alias || h.includes(alias))));
                if (!anyOk) continue;
            }
            const score = (fp.score || 0) + countAliasMatches(normHeaders, p.mapping);
            if (score > bestScore) { bestScore = score; best = p; }
        }
        return best || DEFAULT_PROFILES.find(p => p.id === 'generic');
    }

    function countAliasMatches(normHeaders, mapping) {
        let n = 0;
        for (const field in mapping) {
            const aliases = mapping[field] || [];
            if (aliases.some(a => normHeaders.includes(a) || normHeaders.some(h => h.includes(a)))) n++;
        }
        return n;
    }

    // ============================================================
    // 3. MAPPING-LAYER (Profile → konkretes Header-Mapping)
    // ============================================================
    function buildMapping(headers, profile) {
        const normHeaders = headers.map(h => ({ raw: h, norm: normalizeHeader(h) }));
        const mapping = {};
        // "Exklusiv-Set" nur für EXAKTE Alias-Treffer: verhindert, dass eine
        // eindeutig identifizierte Spalte (z.B. "Länge") per Fuzzy-Match auch
        // noch einem zweiten Feld zugeordnet wird.
        const exactClaim = new Set();
        const fieldOrder = ['artikelNr', 'bezeichnung', 'material', 'menge', 'einheit', 'laenge_mm', 'breite_mm', 'dicke_mm', 'pos', 'kommentar', 'preis'];
        // ----- Runde 1: nur Exakt-Match -----
        for (const field of fieldOrder) {
            if (!CANONICAL_FIELDS[field]) continue;
            const aliases = (profile.mapping && profile.mapping[field]) || [];
            const found = normHeaders.find(h => !exactClaim.has(h.raw) && aliases.includes(h.norm));
            if (found) { mapping[field] = found.raw; exactClaim.add(found.raw); }
            else mapping[field] = '';
        }
        // ----- Runde 2: Fuzzy-Match für noch unbesetzte Felder -----
        // Hier KEIN usedRaw mehr: eine Spalte darf mehreren Feldern zugeordnet
        // werden, wenn die Aliase überlappen. Der User korrigiert im Dialog.
        for (const field of fieldOrder) {
            if (!CANONICAL_FIELDS[field]) continue;
            if (mapping[field]) continue;
            const aliases = (profile.mapping && profile.mapping[field]) || [];
            // 2a. Header enthält Alias (z.B. "cut length" enthält "length")
            let found = normHeaders.find(h => aliases.some(a => h.norm === a || h.norm.includes(a)));
            // 2b. Alias enthält Header (z.B. Alias "panel length", Header "length")
            if (!found) found = normHeaders.find(h => aliases.some(a => a.includes(h.norm) && h.norm.length >= 2));
            if (found) mapping[field] = found.raw;
        }
        // Sicherstellen, dass alle Canonical-Felder einen Schlüssel haben
        for (const field in CANONICAL_FIELDS) { if (!(field in mapping)) mapping[field] = ''; }
        return mapping;
    }

    // ============================================================
    // 4. NORMALIZE-LAYER
    // ============================================================
    function parseNumber(val) {
        if (val === null || val === undefined || val === '') return null;
        if (typeof val === 'number') return val;
        let s = String(val).trim();
        if (!s) return null;
        // Entferne Einheiten-Suffixe
        s = s.replace(/\s*(mm|cm|m|inch|in|"|kg|stk|pcs|pieces?)\s*$/i, '');
        // Tausendertrenner entfernen
        const hasComma = s.indexOf(',') !== -1;
        const hasDot   = s.indexOf('.') !== -1;
        if (hasComma && hasDot) {
            // Letztes Zeichen (, oder .) ist Dezimaltrenner
            const lastComma = s.lastIndexOf(',');
            const lastDot   = s.lastIndexOf('.');
            if (lastComma > lastDot) { s = s.replace(/\./g, '').replace(',', '.'); }
            else { s = s.replace(/,/g, ''); }
        } else if (hasComma) {
            // Deutsch: Komma als Dezimaltrenner
            s = s.replace(/\./g, '').replace(',', '.');
        }
        const n = parseFloat(s);
        return isNaN(n) ? null : n;
    }

    function toMillimeters(val, unitHint) {
        if (val === null) return null;
        const u = (unitHint || 'mm').toLowerCase();
        if (u === 'mm') return val;
        if (u === 'cm') return val * 10;
        if (u === 'm')  return val * 1000;
        if (u === 'in' || u === 'inch' || u === '"') return val * 25.4;
        return val;
    }

    function detectLengthUnit(rawValue, profileDefault) {
        if (typeof rawValue === 'string') {
            const m = rawValue.match(/(mm|cm|m|inch|in|")\s*$/i);
            if (m) return m[1].toLowerCase();
        }
        return profileDefault || 'mm';
    }

    function normalizeRow(row, mapping, profile) {
        const get = (field) => {
            const src = mapping[field];
            if (!src) return '';
            return row[src] !== undefined ? row[src] : '';
        };
        const defaults = profile.defaults || {};

        const out = {
            pos:         String(get('pos')).trim(),
            bezeichnung: String(get('bezeichnung')).trim(),
            material:    String(get('material')).trim(),
            menge:       parseNumber(get('menge')) || 1,
            einheit:     String(get('einheit') || defaults.einheit || 'Stk').trim(),
            laenge_mm:   null,
            breite_mm:   null,
            dicke_mm:    null,
            artikelNr:   String(get('artikelNr')).trim(),
            kommentar:   String(get('kommentar')).trim(),
            preis:       parseNumber(get('preis')),
            _rohZeile:   row
        };
        ['laenge_mm', 'breite_mm', 'dicke_mm'].forEach(f => {
            const raw = get(f);
            const n = parseNumber(raw);
            if (n !== null) {
                const unit = detectLengthUnit(raw, defaults.unit_length);
                out[f] = Math.round(toMillimeters(n, unit));
            }
        });
        return out;
    }

    // ============================================================
    // 5. PIPELINE
    // ============================================================
    async function runImport(file, options) {
        options = options || {};
        const parsed = await parseFile(file);
        const profile = options.profile || detectProfile(parsed.headers, options.customProfiles);
        const mapping = options.mapping || buildMapping(parsed.headers, profile);
        const canonical = parsed.rows
            .map(r => normalizeRow(r, mapping, profile))
            .filter(item => item.bezeichnung || item.artikelNr || item.material);
        return {
            source: { fileName: file.name, fileSize: file.size, format: parsed.format, sheetName: parsed.sheetName, delimiter: parsed.delimiter, encoding: parsed.encoding },
            headers: parsed.headers,
            detectedProfile: profile,
            mapping,
            rawRows: parsed.rows,
            items: canonical,
            importedAt: new Date().toISOString()
        };
    }

    // ============================================================
    // 6. MATERIAL-MATCHER (gegen eigeneMaterialien-Store)
    // ============================================================
    function matchMaterials(items, eigeneMaterialien) {
        if (!eigeneMaterialien || !eigeneMaterialien.length) return items;
        return items.map(item => {
            const enriched = Object.assign({}, item);
            const matName = (item.material || '').toLowerCase().trim();
            const art = (item.artikelNr || '').toLowerCase().trim();
            if (!matName && !art) return enriched;

            // 1. Artikelnummer exakt
            if (art) {
                const byArt = eigeneMaterialien.find(m => (m.artikelNr || '').toLowerCase() === art);
                if (byArt) { enriched._matchedMaterial = byArt; enriched._matchType = 'artikelnr'; return enriched; }
            }
            // 2. Material-Name exakt
            if (matName) {
                const byName = eigeneMaterialien.find(m => (m.name || '').toLowerCase() === matName);
                if (byName) { enriched._matchedMaterial = byName; enriched._matchType = 'name_exact'; return enriched; }
                // 3. Fuzzy: Name enthält oder ist enthalten
                const byFuzzy = eigeneMaterialien.find(m => {
                    const mn = (m.name || '').toLowerCase();
                    return mn && (mn.includes(matName) || matName.includes(mn));
                });
                if (byFuzzy) { enriched._matchedMaterial = byFuzzy; enriched._matchType = 'name_fuzzy'; return enriched; }
            }
            return enriched;
        });
    }

    // ============================================================
    // EXPORT ins globale Namespace
    // ============================================================
    window.StuecklistenImport = {
        CANONICAL_FIELDS,
        DEFAULT_PROFILES,
        parseFile,
        detectProfile,
        buildMapping,
        normalizeRow,
        runImport,
        matchMaterials,
        // Utilities
        normalizeHeader,
        parseNumber,
        toMillimeters
    };
})();
