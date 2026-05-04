# 🚀 Deployment & Tester-Onboarding

## URLs

| Was | URL |
|---|---|
| **Live-App** | https://werkbank-black.vercel.app |
| **Vercel-Dashboard** | https://vercel.com/ferdiwinter1996-5099s-projects/werkbank |
| **GitHub-Repo** | https://github.com/ferdi159/WerkBank |

## Wie deploye ich eine neue Version?

### Variante 1: Manuell (aktuell)

```bash
cd C:\Users\ferdi\WerkBank
git add .
git commit -m "Beschreibung der Änderung"
git push origin main
npx --yes vercel deploy --prod --yes --name werkbank
```

Nach ~30 Sek. ist die Änderung live unter werkbank-black.vercel.app.

**Wichtig:** Bei jeder Änderung am HTML/JS/CSS auch den **Cache-Bust**
hochzählen (in `WerkBank.html`, suche nach `v=`-Strings):

```bash
node -e "const fs=require('fs');let s=fs.readFileSync('WerkBank.html','utf8');s=s.replaceAll('v=20260504c','v=20260505a');fs.writeFileSync('WerkBank.html',s,'utf8');"
```

Sonst sehen Tester die alte Version aus dem Browser-Cache.

### Variante 2: Auto-Deploy via GitHub (empfohlen, einmalig einrichten)

1. https://vercel.com/ferdiwinter1996-5099s-projects/werkbank
2. **Settings → Git**
3. **Connect Git Repository** → `ferdi159/WerkBank` → main-Branch

Danach: **jeder `git push` auf main** triggert automatisch ein neues
Deployment. Du sparst dir den `vercel deploy`-Schritt.

## Cache-Bust-Strategie

In `WerkBank.html` werden CSS/JS mit Versions-Suffix geladen:

```html
<link rel="stylesheet" href="style.css?v=20260504c">
<script src="stuecklistenImport.js?v=20260504c"></script>
<script src="app.js?v=20260504c"></script>
```

Format: `v=YYYYMMDDx` (z.B. `20260504c` für 4. Mai 2026, dritte
Version des Tages). Bei Bug-Fixes am gleichen Tag: Buchstabe hochzählen
(`a` → `b` → `c`).

**Vercel-Cache-Header** in `vercel.json`:
- HTML: `no-cache` (immer frisch)
- JS/CSS: `max-age=31536000, immutable` (1 Jahr Cache, geht
  durch Cache-Bust-URL trotzdem)

## Tester-Anschreiben (Vorlage)

> Hi [Name],
>
> ich hab eine kleine Web-App gebaut, mit der man als Tischler
> Angebote nach KLR-Schema kalkulieren kann — und wollte fragen ob
> du sie mal kurz testen könntest.
>
> 🔗 https://werkbank-black.vercel.app
>
> Was du wissen solltest:
> - **Komplett kostenlos**, kein Login, kein Konto, keine Daten an
>   irgendwen geschickt
> - Deine Daten bleiben **lokal in deinem Browser** — nichts geht zu
>   einem Server
> - Beim Öffnen siehst du die App mit ein paar Demo-Projekten
> - Du kannst alles ausprobieren, nichts kaputtmachen — bei Bedarf
>   gibt's einen „Demo-Daten zurücksetzen"-Button in den Einstellungen
>
> **Was wäre für mich besonders wertvoll:**
> - Hast du eine Stückliste aus deinem CAD-Programm? Probier mal den
>   Import (Projekt-Editor → „Stückliste importieren")
> - Kommt die Kalkulation hin?
> - Ist irgendwas verwirrend?
>
> Schick mir gern Screenshots oder eine kurze Sprachnachricht zu
> allem was dir auffällt.
>
> Danke! 🙏

## Was Tester sehen wenn sie die URL öffnen

1. **Boot-Spinner** „WerkBank wird geladen…"
2. **Welcome-Modal** mit 4 Erklärpunkten (kann „Nicht mehr anzeigen")
3. **Dashboard** mit 18 Demo-Projekten + 10 Demo-Kunden
4. **Footer-Hinweis** 🔒 „Daten lokal · 100 % offline-fähig"

## Hosting-Kosten

| Was | Kosten |
|---|---|
| Vercel Hobby-Plan | **0 €/Monat** (100 GB Bandbreite) |
| Domain (optional) | ~10 €/Jahr (z.B. werkbank.app, werk-bank.de) |
| Vercel Web Analytics | $20/Monat → **NICHT nötig**, Server-Logs reichen erstmal |
| Cloudflare Web Analytics | 0 € (Alternative, DSGVO-konform) |
| **Gesamt aktuell** | **0 €/Monat** |

Erst ab ~10.000 Besuchern/Monat oder echtem Cloud-Backend würden
Kosten anfallen.

## Was Tester NICHT sehen sollten

- `merkzettel/` (in `.vercelignore`)
- `.claude/` (in `.vercelignore`)
- Konfigurationen mit `*.local.json` (in `.vercelignore`)

Falls du sicher gehen willst: in [Vercel-Dashboard → Deployments →
View Source](https://vercel.com/ferdiwinter1996-5099s-projects/werkbank)
prüfen welche Files ausgeliefert wurden.

## Tester-Feedback einsammeln

**Aktuelle Möglichkeit:** direktes Anschreiben (WhatsApp, Mail, …)

**Falls du systematisch Feedback willst:**
- Feedback-Button in der App → Mail an dich (über Formspree, kostenlos
  bis 50 Mails/Monat) → das wäre der nächste sinnvolle Schritt, sag
  bescheid wenn ich das einbauen soll
- Oder einfach Tally-Form / Google-Form verlinken

## Custom Domain einrichten

Wenn du eine eigene Domain willst (z.B. `werkbank.app`):

1. Domain bei Namecheap / IONOS / Cloudflare kaufen (~10 €/Jahr)
2. Vercel-Dashboard → werkbank → **Settings → Domains**
3. Domain eintragen, Vercel zeigt dir die DNS-Records die du beim
   Registrar setzen musst (CNAME oder A-Record)
4. Nach DNS-Propagation (5 Min – 24 Std.) ist die Domain live mit SSL
