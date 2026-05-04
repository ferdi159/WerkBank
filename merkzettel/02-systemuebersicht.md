# 🏗️ Systemübersicht (Architektur)

## Grundprinzip

WerkBank ist eine **statische Web-App** — drei Dateien plus Bibliotheken,
keine Server-Komponente, kein Build-Schritt, kein Framework.

```
WerkBank.html    ←  Markup, alle Views (~2400 Zeilen)
app.js           ←  gesamte Logik (~9300 Zeilen)
style.css        ←  alles Styling (~5800 Zeilen)
stuecklistenImport.js  ←  CAD-BOM-Parser-Modul
+ CDN-Libs       ←  jsPDF, SheetJS, PapaParse (laufen im Browser)
```

Beim Aufruf passiert: Browser lädt diese Dateien, läuft die Init-Funktion
in `app.js`, öffnet IndexedDB, seedet ggf. Demo-Daten — fertig.

## Datei-Struktur (Repo)

```
WerkBank/
├── WerkBank.html              # Haupt-HTML mit allen Views
├── app.js                     # gesamte App-Logik
├── style.css                  # Styling
├── stuecklistenImport.js      # BOM-Parser-Modul (eigenständig)
├── README.md                  # Doku für Entwickler / GitHub
├── vercel.json                # Vercel-Deployment-Config
├── .vercelignore              # was NICHT auf Vercel deployed wird
├── merkzettel/                # diese Wissensbasis (lokal + Git, nicht öffentlich)
└── .claude/                   # Claude-Code-Konfig (nicht öffentlich)
```

## Persistenz-Schicht (kritisch)

### Aktuell: IndexedDB

Alle Daten landen im IndexedDB des Browsers (`db = TischlerKalkPro`,
DB-Version 6). Kein Server, kein Konto.

### Storage-Adapter-Pattern (zukunftssicher)

Die App ruft NIE direkt IndexedDB auf — sondern immer über die Wrapper:

```js
dbGet(store, key)          → window.WerkBankStorage.get(...)
dbPut(store, data)         → window.WerkBankStorage.put(...)
dbDelete(store, key)       → window.WerkBankStorage.delete(...)
dbGetAll(store)            → window.WerkBankStorage.getAll(...)
dbClearStore(store)        → window.WerkBankStorage.clearStore(...)
```

`window.WerkBankStorage` ist heute auf `WerkBankStorageLocal` (IndexedDB).
**Migration zu Cloud (Supabase, Firebase) später:** einfach durch
`WerkBankStorageCloud` ersetzen mit gleicher Signatur — die ~60 Aufrufer
im Code müssen NICHT angefasst werden.

Die Adapter-Definition findest du in `app.js` am Anfang (suche nach
`STORAGE-ADAPTER`).

### Stores (Tabellen)

| Store | Inhalt | KeyPath |
|---|---|---|
| `projekte` | Projekte mit Schränken, Kalkulation, Rechnung | `id` |
| `kunden` | Kundenstammdaten | `id` |
| `einstellungen` | Firmendaten, KLR-Defaults, Theme, MwSt. | `key` |
| `eigeneBeschlaege` | Beschlag-Stamm | `id` |
| `eigeneOberflaechen` | Oberflächen-Stamm | `id` |
| `eigeneMaterialien` | Plattenwerkstoff-Stamm (mit Stärke, Format, €/Platte) | `id` |
| `zeiten` | Zeiterfassung | `id` |
| `termine` | Kalender-Termine | `id` |
| `mitarbeiter` | Mitarbeiter-Stamm | `id` |
| `importProfile` | Stücklisten-Mapping-Profile (User-defined) | `id` |

Bei späterer Cloud-Migration werden diese 1:1 zu PostgreSQL-Tabellen
(jeweils mit zusätzlicher `user_id`-Spalte und Row-Level-Security).

### LocalStorage (für kleinere Sachen)

| Key | Inhalt |
|---|---|
| `werkbank_welcome_seen` | Hat User Welcome-Modal weggeklickt mit „Nicht mehr anzeigen"? |
| `werkbank_draft_*` | Auto-Save-Entwürfe pro Projekt-ID |

## Routing

Hash-basiertes SPA-Routing:

| Hash | View |
|---|---|
| `#/dashboard` | KPIs, Workflow-Pipeline, Top-Kunden |
| `#/projekte` | Projektliste mit Filter |
| `#/projekt/neu` | Neuer Projekt-Editor (mit Wahl-Karten) |
| `#/projekt/<id>` | Projekt bearbeiten |
| `#/kunden` | Kundenliste |
| `#/zeiterfassung` | Personal & Zeiten |
| `#/kalender` | Termine |
| `#/finanzen` | Umsatz/Rechnungen-Übersicht |
| `#/einstellungen` | Firmendaten, Stamm, KLR-Defaults, Backup, Reset |
| `#/hilfe` | Anleitung |
| `#/impressum`, `#/datenschutz` | Legal |

## Externe Bibliotheken (CDN)

| Lib | Zweck | Quelle |
|---|---|---|
| **jsPDF** 2.5.2 | PDF-Generierung | cdnjs.cloudflare.com |
| **SheetJS** 0.18.5 | XLSX-Parser für BOM-Import | cdnjs.cloudflare.com |
| **PapaParse** 5.4.1 | CSV-Parser für BOM-Import | cdnjs.cloudflare.com |

Alle drei haben Fallback-Logik im Code. Werden als `<script src>` aus
dem CDN geladen.

## Stücklisten-Import (eigenes Modul)

`stuecklistenImport.js` (~700 Zeilen) ist ein eigenständiges Modul mit:

- **DEFAULT_PROFILES**: 8 Profile für CAD-Systeme
  (solidworks, topsolid_wood, vectorworks_elementscad, autocad_dx,
  inventor, vectorworks, cadwork, generic)
- **detectProfile()**: erkennt CAD-System anhand Header-Struktur
- **buildMapping()**: ordnet Spalten zu kanonischen Feldern
  (Bezeichnung, Material, Länge, Breite, Dicke, Menge, Pos, Artikel-Nr)
- **normalizeRow()**: konvertiert in Standard-Format,
  parst Stärke aus Material-Code wenn aktiviert
- **matchMaterials()**: matcht gegen Stammdaten (3 Stufen)
- **parseDickeFromMaterial()**: extrahiert Plattenstärke aus Codes
  wie `HPL_..._18_ST9` → 18

## Wichtige In-Memory-States

| Variable | Bedeutung |
|---|---|
| `currentProjektId` | Aktuell offenes Projekt im Editor |
| `eigeneArtikelMaterialien` | Cache der Material-Stammdaten |
| `window.currentBomItems` | BOM-Positionen des aktuellen Projekts |
| `window.currentBomMeta` | Meta-Info (Profil, Datei, Datum) |
| `window.bomVerschnittPct` | Verschnitt-Prozentsatz für Plattenanzahl |
| `letzteBerechnung` | Letztes Kalkulations-Ergebnis (für PDF) |
| `autoSaveIntervalId` | Handle des Auto-Save-Timers |

## Build/Deploy

- **Lokal entwickeln**: HTML-Datei direkt im Browser öffnen
  (`start WerkBank.html` auf Windows)
- **Deploy**: `npx vercel deploy --prod --yes --name werkbank`
  (oder GitHub-Auto-Deploy aktivieren, siehe `03-deployment-und-tester.md`)
- **Kein Build** — direkt die Source-Files werden ausgeliefert

## Sicherheit

- Keine Server-API → keine Auth-Probleme
- IndexedDB ist Same-Origin → andere Websites können nicht zugreifen
- Bei `innerHTML` wird `escapeHtml()` für User-Daten genutzt (XSS-Schutz)
- Keine Cookies, keine Tracker, keine externen Tracking-Pixel
