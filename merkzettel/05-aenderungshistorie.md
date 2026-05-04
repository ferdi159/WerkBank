# 📜 Änderungshistorie (CHANGELOG)

Chronik aller wichtigen Änderungen. Bei jedem größeren Update hier
oben einen neuen Eintrag ergänzen.

> **Format pro Eintrag:** `## YYYY-MM-DD — Commit-Hash — Titel`
> + 2-3 Zeilen Beschreibung der Änderung + Begründung.

---

## 2026-05-04 — `7dbd399` — Hilfe-Sektion komplett überarbeitet

Alle Features der letzten Wochen in der Hilfe dokumentiert:
Stückliste-Import, Plattenstamm, Tastatur-Shortcuts, Auto-Save, Undo,
Personal & Zeiten, Kalender, Datensicherheit. FAQ um 7 neue Einträge
erweitert. Schnellstart auf 6 Schritte mit Stückliste-First-Workflow.

## 2026-05-04 — `4a3c1d0` — Yacht-Bezug entfernt

Im Welcome-Modal und README stand „für Tischler und Yacht-Innenausbauer".
User-Wunsch: nur Tischler.

## 2026-05-04 — `bf03219` — vercel.json-Routing-Fix

`cleanUrls: true` kollidierte mit dem Root-Rewrite. Auf `false` umgestellt
+ `/werkbank` als zusätzlichen Alias gemappt. Live-URL funktioniert jetzt
korrekt.

## 2026-05-04 — `881de20` — Production-Ready: Storage-Adapter, Demo-Reset, Welcome-Modal, Vercel-Config

**Großer Architektur- und UX-Schritt für die Live-Schaltung:**
- `WerkBankStorage`-Adapter eingezogen → spätere Cloud-Migration
  (Supabase, Firebase) ohne flächendeckendes Refactoring möglich
- Demo-Reset-Button in den Einstellungen
- Welcome-Modal beim ersten Besuch mit 4 Erklärpunkten
- Footer-Hinweis „Daten lokal · 100 % offline-fähig"
- vercel.json + README für Deployment

## 2026-05-03 — `2dc1bf3` — Stückliste-€ fließen in KLR-Materialkosten

Vorher: Material-Übersicht zeigte zwar €, aber das floss nicht in die
Kalkulation. Jetzt: `calcBomMaterialKosten()` als Single-Source-of-Truth,
in `berechneAlles()` integriert. Ergebnis-Anzeige zeigt „↳ davon aus
Stückliste".

## 2026-05-03 — `e1f348f` — Projekt-Editor: Wahl-Karten + Stückliste-First

Bei neuem Projekt erscheinen jetzt zwei Karten: „Stückliste importieren"
(empfohlen) oder „Möbel manuell anlegen". Die Schränke-Sektion ist nicht
mehr prominent über der Stückliste, sondern klappbar darunter.
Default-Schrank bei neuem Projekt entfernt.

## 2026-05-03 — `4cfdce2` — Audit-Fixes

Browser-Test ergab zwei reale Bugs:
1. Auto-Save erfasste nur 9 von 29 Editor-Feldern (Selektor `klr-*`
   existierte nicht, KLR-Felder heißen `z-*`/`rz-*`)
2. Doppelte Profil-ID `vectorworks` führte zu Profil-Verwirrung

## 2026-05-03 — `e10ce44` — UX Quick Wins B: Undo, Loading, Auto-Save

- `showUndoToast()` mit 8-Sekunden-Action-Button
- App-Boot-Spinner während IndexedDB lädt
- Auto-Save alle 30 Sek. + Crash-Recovery-Prompt

## 2026-05-03 — `a1e9f93` — UX Quick Wins A: Konsistenz, Shortcuts, Doppelklick-Schutz, Tooltips

- 5× `window.confirm` → `showConfirm` einheitlich
- Tastatur-Shortcuts: Esc/Strg+S/Strg+N/`/`
- `withButtonLock()` für Speichern/PDF/BOM-Commit
- Tooltips auf Modal-Close, Suche, Mobile-Toggle, View-Toggles

## 2026-05-02 — `914b58c` — BOM: Materialstamm + Fuzzy-Match + Plattenanzahl + €

**Großes Feature:** Material-Stamm um Stärke, Format und Plattenpreis
erweitert. BOM-Material-Übersicht matcht gegen Stamm (3 Strategien:
exakt, substring, token-overlap), berechnet Plattenanzahl (aufgerundet
mit Verschnittfaktor) und Σ €. „+ in Stamm anlegen"-Link bei kein Match.

## 2026-05-02 — `3b44862` — BOM: Vectorworks-Profil + Stärke-Parser + Material-Gruppierung

- Eigenes Vectorworks-Profil (vorher als cadwork erkannt)
- `parseDickeFromMaterial()` extrahiert Stärke aus Codes wie
  `HPL_..._18_ST9` → 18
- Material-Übersicht über Tabelle gruppiert nach Material × Stärke

## 2026-05-02 — `5486898` — BOM: cadwork-Fix, Encoding-Fallback, m²-Auswertung

- CSV-Encoding-Detection erweitert (U+FFFD-Pattern)
- Single-Char-Aliase nur exakt (kein Fuzzy) — fixt "Projekt
  **B**auvorhaben" → Breite-Bug
- m²-Spalte und Σ-m² in BOM-Tabelle ergänzt

## 2026-04-29 → 2026-04-29 — `dd9cc1c`, `6c4744a`, `00622c8` — BOM-Vereinfachung

Mehrere Iterationen, um den BOM-Import deutlich einfacher zu machen:
Mapping-Schritt übersprungen wenn Auto-Detection greift, Vorschau-Tabelle
radikal vereinfacht (nur Mengen + Größen), Header-Erkennung robuster.

## 2026-04-24 — `bf1b4b1` — Stücklisten-Import (Initial)

**Neues Major-Feature:** CSV/XLSX-Import aus AutoCAD, Vectorworks,
TopSolid, SolidWorks. Eigenes Modul `stuecklistenImport.js` mit 6-Layer-
Architektur (Parser → Fingerprint → Profile → Normalize → Canonical →
Match).

## Frühere Commits

Siehe `git log --oneline` — vor dem Stücklisten-Import gab es bereits:
- Personal & Zeiten, Kalender (`0195b7a`)
- Schrank-Redesign mit 5 Phasen + Verbindungsmittel (`c4f738e`)
- Status „In Produktion", klappbare Sektionen (`c73d7c9`)
- Montage-Karteikarte (`0d33e04`)
- Initial-Setup (`81585d5`, `b80c625`)

---

## Wann diese Datei aktualisieren?

✅ **Immer** wenn:
- Eine neue Live-Version deployed wurde
- Ein größeres Feature dazukam
- Ein wichtiger Bug gefixt wurde
- Sich am System / an der Architektur etwas ändert

⚠️ **Nicht zwingend** wenn:
- Reines Refactoring ohne sichtbare Änderung
- Doku-Updates (z.B. dieser Merkzettel selbst)

## Eintrag-Vorlage

```markdown
## YYYY-MM-DD — `commit-hash` — Kurzer Titel

Was wurde geändert? Warum war das nötig? Was ist die Auswirkung für
Tester / User?
```
