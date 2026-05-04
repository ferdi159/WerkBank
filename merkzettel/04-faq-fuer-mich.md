# 💬 FAQ für mich — Wenn Tester fragen

Sammlung typischer Fragen, die Tester stellen werden, mit fertigen
Antworten. So musst du nie überlegen.

## Daten & Sicherheit

### „Wo werden meine Daten gespeichert?"
Alles bleibt **lokal in deinem Browser** (IndexedDB). Es gibt keinen
Server, kein Konto, niemand außer dir kann sie sehen. Das gilt auch
für PDFs — die werden im Browser generiert und direkt zum Download
gegeben.

### „Was passiert wenn ich den Browser-Cache lösche?"
Dann sind die Daten weg. Deshalb in den Einstellungen regelmäßig
„Daten exportieren" → JSON-Datei sichern. Die kannst du jederzeit
wieder importieren.

### „Kann ich die App auf Handy + Laptop gleichzeitig nutzen?"
Aktuell nur eingeschränkt — die Daten sind pro Browser. Workaround:
JSON-Export auf einem Gerät, Import auf dem anderen. Echtes Cloud-Sync
mit Konto kommt eventuell später (siehe Roadmap).

### „Ist das DSGVO-konform?"
Ja. Die App speichert nichts auf einem Server. Hosting läuft über
Vercel (EU-Region möglich, Standardvertragsklauseln). CDN-Bibliotheken
laden über Cloudflare (auch DSGVO-konform). Keine Cookies, kein
Tracking, kein Analytics.

## Funktionen

### „Kann ich Stücklisten aus [CAD-Programm X] importieren?"
Ja, wenn das Programm CSV oder Excel exportieren kann. Direkt
unterstützt: AutoCAD (DATAEXTRACTION), Vectorworks/ElementsCAD,
TopSolid Wood, SolidWorks, cadwork, Inventor. Generischer Fallback
für alle anderen Tabellen — Auto-Mapping versucht die Spalten zu
erkennen, wenn nötig manuell zuordnen.

### „Die Plattenstärke wird nicht erkannt"
WerkBank versucht die Stärke aus dem Material-Code zu lesen
(z.B. `HPL_..._18_ST9` → 18 mm). Falls das nicht klappt: in der
Vorschau direkt eintragen oder Material im Stamm anlegen.

### „Mein Material ist nicht im Stamm — wie pflege ich das?"
Zwei Wege:
1. **In der BOM-Material-Übersicht** auf den roten Link „+ in Stamm
   anlegen" klicken → springt in die Einstellungen mit vorausgefülltem
   Namen + Stärke
2. **Direkt** unter Einstellungen → Eigene Artikel → Materialien →
   neues Material anlegen mit Name, Stärke, Format, €/Platte

### „Wie wird die Plattenanzahl berechnet?"
(Σ m² × Verschnittfaktor) ÷ Plattenformat-m², aufgerundet auf ganze
Platten. Verschnitt-Default ist 10 %, kann oben rechts in der
Material-Übersicht angepasst werden.

### „Was ist KLR? Was bedeuten MGK, FGK, VWGK, VTGK, W&G?"
KLR = Kosten- und Leistungsrechnung, das im Handwerk übliche
Kalkulationsschema:
- **MGK** = Materialgemeinkosten (Lager, Handling, Beschaffung — ~10 %)
- **FGK** = Fertigungsgemeinkosten (Maschinen, Energie — ~120 %)
- **VWGK** = Verwaltungsgemeinkosten (Büro, Buchhaltung — ~10 %)
- **VTGK** = Vertriebsgemeinkosten (Akquise, Angebot — ~8 %)
- **W&G** = Wagnis & Gewinn (Risiko + Unternehmerlohn — ~15 %)

Default-Werte sind in den Einstellungen einstellbar.

### „Wie ändere ich den MwSt-Satz?"
Einstellungen → Allgemein → MwSt-Satz. Standard 19 %, alternativ
7 % oder 0 % (Kleinunternehmerregelung §19 UStG).

### „Kann ich das Logo auf den PDFs ändern?"
Einstellungen → Logo hochladen (JPG/PNG, max 500 KB). Wird oben
links auf allen PDFs gedruckt.

### „Wie lege ich eine Rechnung an?"
Setze den Projekt-Status auf „Beauftragt". Dann erscheint im
Projekt-Editor der Tab „Rechnung". Daten werden automatisch aus dem
Angebot übernommen.

### „Kann ich Vorlagen für wiederkehrende Projekte anlegen?"
Ja. Im Projekt-Editor oben rechts „Als Vorlage speichern". Beim
neuen Projekt: „Vorlage laden" wählen.

## Tester-Erlebnis

### „Ich hab aus Versehen was gelöscht"
Bei Position/Zeit/Termin/Material erscheint nach dem Löschen ein
Toast mit „Rückgängig"-Button (8 Sek. Zeit). Falls verpasst:
JSON-Backup importieren (sofern eines existiert).

### „Mein Browser ist abgestürzt"
Auto-Save läuft alle 30 Sek. — beim nächsten Öffnen kommt die
Frage „Ungespeicherten Entwurf wiederherstellen?". Klick „Ja" →
alles zurück.

### „Ich will das nochmal komplett neu ausprobieren"
Einstellungen → „Auf Demo-Daten zurücksetzen" → alle eigenen
Eintr. weg, frische Demo-Daten.

### „Es kostet wirklich nichts?"
Ja, komplett kostenlos. Keine versteckten Kosten, kein Trial,
keine In-App-Käufe. Wenn sich die App durchsetzt, wird es vielleicht
eine optionale Cloud-Version mit Abo geben — aber die lokale Version
bleibt kostenlos.

### „Wird das weiterentwickelt?"
Ja, aktiv. Roadmap siehe [`06-naechste-schritte.md`](06-naechste-schritte.md).

## Technisches

### „Brauche ich Internet?"
Nur beim ersten Laden. Danach läuft alles offline — auch PDF-Erstellung.

### „Welcher Browser wird unterstützt?"
Alle modernen: Chrome, Firefox, Edge, Safari (auch iOS). IE 11 nicht.

### „Funktioniert das auf dem Handy?"
Grundsätzlich ja, aber die Tabellen sind für Desktop optimiert.
Mobile-Optimierung ist auf der Roadmap.

### „Kann ich PWA installieren?"
Aktuell nicht aktiv konfiguriert (kein Service-Worker). Steht auf
der Roadmap.

## Was wenn der Tester einen Bug findet?

1. **Genaue Schritte erfragen** (was geklickt, in welcher Reihenfolge)
2. **Browser + Version** (Chrome 130, Firefox 145, …)
3. **Konsole-Fehler** (F12 → Console → Screenshot)
4. **Daten-Sample** wenn's um Stücklisten-Import geht: die CSV/XLSX-Datei
5. Bei mir melden — ich fixe + deploye → Tester macht **Strg+F5** für
   Hard-Reload
