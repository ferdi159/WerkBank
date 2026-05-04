# WerkBank

Kalkulations- und Projekt-App für Tischler und Yacht-Innenausbauer.
Statische PWA (HTML/CSS/JS), kein Backend nötig, kein Build-Step.

## Quickstart (lokal)

```bash
# Einfach im Browser öffnen — kein Build, keine Dependencies
start WerkBank.html        # Windows
open WerkBank.html         # macOS

# Oder via lokalem Static-Server (für saubere Pfade)
npx http-server -p 8080
# → http://localhost:8080/WerkBank.html
```

## Deployment auf Vercel (kostenlos)

1. **Repo bei GitHub haben** (ist bereits eingerichtet)
2. Auf [vercel.com](https://vercel.com) anmelden mit GitHub-Account
3. **"New Project"** → dieses Repo importieren
4. Framework-Preset: **"Other"** (Vercel erkennt `vercel.json` automatisch)
5. **Deploy** klicken — fertig nach ~30 Sekunden
6. Eigene Domain hinzufügen (optional): Settings → Domains

Bei jedem `git push` auf `main` wird automatisch neu deployed.

## Alternativen zu Vercel

| Hoster | Kostenlos? | Custom Domain | Empfehlung |
|---|---|---|---|
| **Vercel** | ✓ Hobby-Tier | ✓ inkl. SSL | Einfachste Integration |
| **Netlify** | ✓ Starter-Tier | ✓ inkl. SSL | Sehr ähnlich |
| **Cloudflare Pages** | ✓ unlimited | ✓ inkl. SSL | Hohe Bandbreite |
| **GitHub Pages** | ✓ public Repos | ✓ inkl. SSL | Funktioniert, kein Routing |

## Architektur

### Persistenz-Schicht

Alle Daten werden in **IndexedDB** im Browser des Nutzers gespeichert
(`db = TischlerKalkPro`, Version 6). Es gibt keinen Server, keine Cloud,
kein Konto.

Die Persistenz ist über `window.WerkBankStorage` abstrahiert
(siehe `app.js`, Suche nach `STORAGE-ADAPTER`):

```js
window.WerkBankStorage = {
  put(store, data),
  get(store, key),
  getAll(store),
  delete(store, key),
  clearStore(store)
};
```

Aufrufer im App-Code nutzen die Wrapper `dbGet` / `dbPut` / `dbDelete` /
`dbGetAll`. Damit ist eine spätere Migration zu einem Cloud-Backend
(Supabase, Firebase, eigenes Node-Backend) **ohne flächendeckendes
Refactoring** möglich: einfach `WerkBankStorage` durch eine andere
Implementierung ersetzen.

### Stores (entspricht künftigen DB-Tabellen)

| Store | Inhalt |
|---|---|
| `projekte` | Projekte mit Kunden, Schränken, Kalkulation, Rechnung |
| `kunden` | Kundenstammdaten |
| `einstellungen` | Firmendaten, KLR-Default-Sätze, Theme, MwSt. |
| `eigeneBeschlaege` | Eigener Beschlag-Stamm |
| `eigeneOberflaechen` | Eigene Oberflächen-Stamm |
| `eigeneMaterialien` | Eigener Plattenwerkstoff-Stamm (Stärke, Format, €/Platte) |
| `zeiten` | Zeiterfassung |
| `termine` | Kalender-Termine |
| `mitarbeiter` | Mitarbeiter-Stamm |
| `importProfile` | Stücklisten-Mapping-Profile |

### Externe Bibliotheken (CDN, kein Lock-In)

- **jsPDF** 2.5.2 — PDF-Generierung
- **SheetJS** 0.18.5 — XLSX-Parser für Stücklisten-Import
- **PapaParse** 5.4.1 — CSV-Parser für Stücklisten-Import

Alle drei werden via CDN geladen, Fallback-Logik im Code falls CDN nicht
erreichbar.

## Migration zu Cloud (geplant, optional)

Wenn echte Multi-User-Cloud-Sync gewünscht ist:

1. **Backend wählen** — empfohlen: [Supabase](https://supabase.com)
   (PostgreSQL + Auth + DSGVO-konform mit EU-Server, kostenloses Tier)
2. **Schema spiegeln** — die o.g. Stores 1:1 als Tabellen mit `user_id`
   und Row-Level-Security
3. **Adapter erstellen** — `WerkBankStorageCloud` mit gleicher Signatur
4. **Login-Flow** ergänzen — Auth-Modal vor App-Start
5. **Migrations-Logik** — beim ersten Login die lokalen IndexedDB-Daten
   in die Cloud hochladen

Aufwand: ~60–80 Stunden bei "Lokal-First mit Cloud-Sync"-Pattern (App
funktioniert offline, syncht beim nächsten Online-Status).

## Datenschutz

- **Keine Cookies, keine Tracker, kein Analytics**
- **Daten bleiben lokal** im Browser des Nutzers (IndexedDB + localStorage)
- **Kein Konto nötig** — die App ist sofort nutzbar
- Datenschutzerklärung → `#/datenschutz`-Route in der App
- Externe CDN-Anfragen für jsPDF/SheetJS/PapaParse — IP-Adresse wird vom
  CDN-Anbieter ggf. geloggt; alternativ können diese Libs lokal mit
  ausgeliefert werden

## Lizenz

Alle Rechte vorbehalten — Ferdi (privates Projekt).
