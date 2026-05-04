# 🗺️ Nächste Schritte (Roadmap)

Was kommt als nächstes — sortiert nach Priorität / Wert. Wenn dir
neue Ideen einfallen: einfach hier ergänzen.

---

## Priorität 1 — Polish vor erstem echten Tester-Schwung

Diese Sachen würde ich noch erledigen, **bevor** du die App an mehr
als 5 Leute schickst:

### Eigene Domain
- ~10 €/Jahr bei Namecheap / IONOS / Cloudflare
- Vorschläge: `werkbank.app` · `werk-bank.de` · `tischler-werkbank.de`
- Setup: 10 Min (Domain kaufen → Vercel-Settings → DNS-Records setzen)

### Datenschutzerklärung mit Kontaktdaten
- Aktuell steht „[Bitte vor Veröffentlichung Name & Kontakt eintragen]"
- Du musst Name + Anschrift in `view-datenschutz` ergänzen (DSGVO-Pflicht)
- Auch Impressum: aktuell Platzhalter `[Firmenname]`, `[Straße Nr.]`

### Auto-Deploy via GitHub
- 3 Klicks im Vercel-Dashboard (siehe `03-deployment-und-tester.md`)
- Danach pushe ich nach `main` → Vercel deployt automatisch
- Du musst nichts mehr manuell triggern

### Feedback-Button in der App
- Smiley-Button unten rechts → Modal mit Smileys + Textfeld
- Schickt Mail an dich via Formspree (kostenlos bis 50/Monat)
- Dauer: ~30 Min

---

## Priorität 2 — Mittelgroße Features

### Mobile-Optimierung (Tabellen-Card-Layout)
- Aktuell sind alle großen Tabellen (Projekte-Liste, Kunden, BOM,
  Materialstamm) auf Desktop optimiert
- Auf Handy/Tablet → horizontales Scrollen oder unleserlich
- Lösung: bei `< 600px` als Karten-Layout darstellen (ähnlich wie
  bereits in der Projektliste)
- Aufwand: ~3-4 Stunden für alle Tabellen

### PDF-Vorschau vor Download
- Aktuell: PDF wird sofort als Download angeboten
- Wenn Druckfehler → ärgerlich + Tester muss neu generieren
- Modal mit `<iframe>`-Vorschau VOR dem endgültigen Download
- Aufwand: ~2 Stunden

### „Material aus Stamm anlegen" inline statt Settings-Sprung
- Aktuell: Klick auf „+ in Stamm anlegen" → Sprung in Einstellungen +
  Tab-Wechsel + Scrollen → klobig
- Besser: Inline-Modal direkt aus der BOM-Material-Übersicht öffnen,
  Material anlegen, BOM refresht sich automatisch
- Aufwand: ~2 Stunden

### Onboarding-Wizard für Erstnutzer
- Bei leerer Datenbank: 3-4-Schritt-Wizard durch Firmendaten →
  KLR-Sätze → erstes Material → Kunde
- Aktuell wirft die Hilfe-Seite eine Wand aus Text auf den User
- Aufwand: ~4-5 Stunden

---

## Priorität 3 — Großer Sprung: Cloud-Sync mit Accounts

### Phase B: Supabase-Integration

**Was:** Echte Multi-Device-Synchronisation, Login mit E-Mail/Passwort
oder Google.

**Tech-Stack:**
- **Supabase** (PostgreSQL + Auth + Realtime + EU-Server, DSGVO-konform,
  kostenloses Tier reicht für sehr lange)
- Oder Firebase (Google), PocketBase (self-hosted)

**Wie:**
1. Supabase-Account anlegen
2. PostgreSQL-Schema spiegeln (10 Tabellen entsprechend der Stores)
3. Row-Level-Security pro `user_id` einrichten
4. `WerkBankStorageCloud` als Adapter mit gleicher Signatur wie
   `WerkBankStorageLocal` schreiben
5. Login-Modal vor App-Start
6. Beim ersten Login: lokale Daten in die Cloud hochladen
7. Datenschutzerklärung erweitern (Auftragsverarbeitung mit Supabase)

**Aufwand:**
- ~30 Stunden für „direkt in die Cloud"-Variante
- ~60-80 Stunden für „lokal-first mit Sync" (App auch offline nutzbar)

**Wann sinnvoll:**
- Wenn Tester konkret sagen „ich will das auf Handy + Laptop nutzen"
- Wenn du die App monetarisieren willst (siehe Phase C)

---

## Priorität 4 — Monetarisierung (Phase C)

Erst sinnvoll wenn die App regelmäßig genutzt wird:

- Stripe-Integration für Bezahlung
- Trial-Phase (z.B. 14 Tage kostenlos)
- Tarife (z.B. 9 €/Monat Solo, 29 €/Monat Team)
- Mehrere Mitarbeiter pro Firma
- Admin-Backend für dich (Kunden verwalten, Stripe-Daten einsehen)
- AGB, AVV-Vorlage, ggf. Cookie-Banner

Aufwand: 100+ Stunden plus laufende Wartung.

**Alternative**: Open Source machen + Self-Hosting-Anleitung →
keine Monetarisierung, aber maximale Reichweite + Community.

---

## Ideen-Sammlung (unsortiert)

Hier landet alles was mir während der Arbeit einfällt — kann später
priorisiert werden.

- [ ] **Kantenumleimer-Auswertung** aus BOM (die 4 Kanten-Spalten der
      Vectorworks-Stückliste werden aktuell ignoriert)
- [ ] **Preis-Übersicht im Kalenderblatt** (Monatsumsatz live)
- [ ] **Plattenoptimierungs-Vorschlag** (Verschnitt minimieren — könnte
      OptiCutter-Algorithmus integriert werden)
- [ ] **Lieferanten-Verknüpfung im Materialstamm** (eine Platte hat
      einen Hauptlieferanten + Bestellnummer)
- [ ] **Mehrwertsteuer für Schweiz/Österreich** (aktuell hardcoded auf
      DE, aber MwSt-Satz schon einstellbar)
- [ ] **Druck-CSS** für direktes Drucken aus dem Browser ohne PDF
- [ ] **PWA-Manifest + Service-Worker** für „Zur Startseite hinzufügen"
- [ ] **Dark-Mode-Toggle** im Header (Themes existieren schon, sind
      aber tief in den Einstellungen versteckt)
- [ ] **Such-Erweiterung**: aktuell findet die globale Suche Projekte/
      Kunden — sollte auch BOM-Items und Materialien finden
- [ ] **Demo-Video** (Loom o.ä.) für Tester die nicht lesen wollen
- [ ] **„Ähnliche Projekte"-Vorschlag** beim neuen Projekt: „Hat was
      mit Einbauküche zu tun, hier die letzten 3 Projekte"
- [ ] **Lieferzeit-Tracking** (Bestellt am, Geliefert am)
- [ ] **Mahnwesen** (1./2./3. Mahnung mit eskalierenden Fristen)

---

## Wann diese Datei aktualisieren?

✅ **Immer** wenn:
- Eine neue Idee einfällt → unten unter „Ideen-Sammlung"
- Ein Punkt umgesetzt wurde → Eintrag löschen + in `05-aenderungshistorie.md`
- Sich Prioritäten ändern → Punkte verschieben

⚠️ **Tipp:** Punkte die hier monatelang ungetan stehen sind wahrscheinlich
nicht wichtig genug. Lieber konsequent löschen als aufblähen lassen.
