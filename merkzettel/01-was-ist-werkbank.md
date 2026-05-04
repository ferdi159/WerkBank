# 🛠️ Was ist WerkBank?

## In einem Satz

**WerkBank ist eine Kalkulations- und Projekt-App für Tischler — von
der Stückliste aus dem CAD-Programm bis zur fertigen Angebots-PDF in
unter 5 Minuten.**

## Für wen?

- **Selbstständige Tischler** und kleine Tischlereien (1–10 Mitarbeiter)
- Die mit CAD arbeiten (AutoCAD, Vectorworks, TopSolid Wood, SolidWorks,
  cadwork, Inventor) und die Materiallisten nicht jedes Mal manuell
  abtippen wollen
- Die ihre Angebote nach **KLR-Schema** kalkulieren (das im Handwerk
  übliche Verfahren mit MGK, FGK, VWGK, VTGK, W&G)
- Die kein 1.000 €/Jahr-Programm wollen, aber trotzdem professionell
  arbeiten

## Was es kann (alle Features im Überblick)

### Projektverwaltung
- Projekte mit Kunden, Status-Workflow (Entwurf → Angeboten → Beauftragt
  → Rechnung → Bezahlt → Abgeschlossen)
- Kundenstammdaten mit allen Kontakt-Infos
- Wahl-Karten beim neuen Projekt: **Stückliste importieren** (empfohlen)
  oder **Möbel manuell anlegen**

### Stücklisten-Import (das Highlight)
- Unterstützte Formate: **CSV, TXT, XLSX, XLS**
- Unterstützte CAD-Systeme: AutoCAD (DATAEXTRACTION), Vectorworks /
  ElementsCAD, TopSolid Wood, SolidWorks, cadwork, Inventor + generischer
  Fallback für beliebige Tabellen
- **Auto-Mapping**: Profil-Erkennung anhand der Spaltenstruktur
- **Stärke-Parser**: extrahiert Plattenstärke aus Material-Codes
  (z.B. `HPL_..._18_ST9` → 18 mm)
- **Encoding-Detection**: erkennt UTF-8 vs. Windows-1252 automatisch
- **Material-Übersicht**: gruppiert nach Material × Stärke, zeigt
  Σ m², Plattenanzahl (aufgerundet), Σ €
- **Manuell korrigierbar**: jede Zeile in der Vorschau editierbar

### Materialstamm
- Eigene Plattenwerkstoffe mit:
  - Name, Stärke (mm)
  - Plattenformat L × B (mm)
  - Preis pro Platte ODER €/m²
  - Auto-Berechnung €/m² aus Plattenpreis ÷ Format
- Beim BOM-Import: Fuzzy-Match-Strategie (3 Stufen):
  1. Exakt (Name = Name)
  2. Substring (eines im anderen, ≥ 4 Zeichen)
  3. Token-Overlap (gemeinsame Wörter, ≥ 50 %)
- Bei kein Match: roter Link „+ in Stamm anlegen" → Sprung in Einstellungen
  mit vorausgefülltem Namen + Stärke

### Kalkulation (KLR)
- Vollständiges Schema: Materialeinzelkosten + MGK + Fertigungseinzel-
  kosten + FGK + VWGK + VTGK + Montage + W&G + Rabatt + MwSt. + Skonto
- Zuschläge pro Projekt anpassbar, mit Default-Werten aus Einstellungen
- BOM-Materialkosten fließen automatisch in materialEinzelkosten ein
  (mit Hinweis-Zeile „↳ davon aus Stückliste")

### PDF-Generierung
- Angebot-PDF mit Firmenlogo, Kundendaten, Positionen, Kalkulation,
  Skonto-Hinweis, Zahlungsbedingungen
- Rechnungs-PDF mit Rechnungsnummer, Bankverbindung, §35a-Hinweis
- Komplett im Browser generiert (jsPDF), kein Server

### Personal & Zeiten
- Mitarbeiter-Stamm mit Qualifikation + Stundensatz
- Zeiteintrag pro Tag/Mitarbeiter/Projekt
- Statistik: Wochen-/Monatsübersicht
- Zeiten fließen optional in Projekt-Kalkulation

### Kalender
- Termine mit Datum, Uhrzeit, Ort, Projekt-Zuordnung
- „Kommende Termine" auf dem Dashboard

### Komfort-Features
- **Auto-Save** alle 30 Sek. (Crash-Recovery via localStorage)
- **Undo-Toasts** bei Lösch-Aktionen (8 Sek. Zeit zum Rückgängig-Machen)
- **Doppelklick-Schutz** bei Speichern/PDF/Backup
- **Tastatur-Shortcuts**: `Strg+S` (speichern), `Strg+N` (neues Projekt),
  `/` (Suche), `Esc` (Modal schließen)
- **Welcome-Modal** beim 1. Besuch
- **Demo-Reset-Button** in den Einstellungen
- **Globale Suche** im Header

### Datensicherheit
- Alles lokal in IndexedDB (kein Server, kein Konto)
- Export aller Daten als JSON jederzeit möglich
- Import einer JSON-Sicherung jederzeit möglich
- Footer-Hinweis „Daten lokal · 100 % offline-fähig"

## USP (was kann es besser als die Konkurrenz)

| | WerkBank | Tischler-Software-Paket | Excel |
|---|---|---|---|
| Kosten | **0 €** | 1.000–5.000 €/Jahr | 0 € (mit MS-365) |
| Stücklisten-Import aus CAD | **✓** | je nach Anbieter | manuell |
| KLR-Schema | **✓** | ✓ | ❌ ohne Eigenbau |
| PDF-Erstellung | **✓** | ✓ | ❌ |
| Cloud-Sync | später möglich | ✓ | ✓ |
| Datenschutz | **alles lokal** | je nach Anbieter | je nach Tenant |
| Setup-Aufwand | **0** (URL öffnen) | Installer + Schulung | Vorlage selbst bauen |

## Aktueller Stand

- **Live unter:** https://werkbank-black.vercel.app
- **Phase:** Beta-Test mit Bekannten
- **Nutzerkonten:** noch keine — Daten sind pro Browser
- **Nächster großer Schritt:** Cloud-Sync mit Login (Phase B, optional)

## Tech-Kurzform

Statische HTML/CSS/JS-Anwendung, kein Build, kein Backend, IndexedDB
als Speicher, jsPDF/SheetJS/PapaParse als CDN-Libs.
