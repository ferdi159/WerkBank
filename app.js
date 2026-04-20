// ============================================================
// WerkBank – Professionelle Tischlerei-Software
// ============================================================

// ==================== MATERIAL-DATENBANK ====================
const materialDaten = {
    spanplatte: {
        name: 'Spanplatte',
        typen: {
            'egger-eurodekor-uni': { name: 'Egger Eurodekor Uni weiß', basisPreis: 12 },
            'egger-eurodekor-holz': { name: 'Egger Eurodekor Holzdekor', basisPreis: 16 },
            'egger-perfectsense-matt': { name: 'Egger PerfectSense Matt', basisPreis: 28 },
            'kronospan-standard-roh': { name: 'Kronospan Standard roh', basisPreis: 6 },
            'kronospan-kronodesign': { name: 'Kronospan Kronodesign Dekor', basisPreis: 15 },
            'pfleiderer-primeboard': { name: 'Pfleiderer Primeboard roh', basisPreis: 7 },
            'pfleiderer-decoboard': { name: 'Pfleiderer DecoBoard Dekor', basisPreis: 17 },
            'sonae-innovus': { name: 'Sonae Arauco Innovus Dekor', basisPreis: 14 }
        },
        staerken: [8, 10, 12, 16, 19, 22, 25],
        preisProMm: 0.3
    },
    mdf: {
        name: 'MDF / HDF',
        typen: {
            'egger-mdf-roh': { name: 'Egger MDF Standard roh', basisPreis: 9 },
            'egger-mdf-lackiert': { name: 'Egger MDF lackiert', basisPreis: 22 },
            'kronospan-mdf-roh': { name: 'Kronospan MDF roh', basisPreis: 8 },
            'kronospan-mdf-feuchte': { name: 'Kronospan MDF feuchtefest', basisPreis: 12 },
            'pfleiderer-mdf-plus': { name: 'Pfleiderer DecoBoard MDF plus', basisPreis: 15 },
            'hdf-standard': { name: 'HDF Standard 3mm', basisPreis: 10 },
            'mdf-schwarz': { name: 'MDF schwarz durchgefärbt', basisPreis: 28 }
        },
        staerken: [3, 6, 8, 10, 12, 16, 19, 22, 25],
        preisProMm: 0.4
    },
    multiplex: {
        name: 'Multiplex / Sperrholz',
        typen: {
            'pappel': { name: 'Sperrholz Pappel', basisPreis: 18 },
            'birke-bb': { name: 'Multiplex Birke B/BB', basisPreis: 38 },
            'birke-ab': { name: 'Multiplex Birke A/B', basisPreis: 52 },
            'buche': { name: 'Multiplex Buche', basisPreis: 48 },
            'eiche': { name: 'Multiplex Eiche', basisPreis: 75 },
            'siebdruck': { name: 'Siebdruckplatte', basisPreis: 32 }
        },
        staerken: [4, 6, 9, 12, 15, 18, 21, 24, 27, 30],
        preisProMm: 0.8
    },
    osb: {
        name: 'OSB',
        typen: {
            'egger-osb3': { name: 'Egger OSB/3 Standard', basisPreis: 7 },
            'egger-osb3-gesch': { name: 'Egger OSB/3 geschliffen', basisPreis: 9 },
            'kronospan-osb4': { name: 'Kronospan OSB/4 hochbelastbar', basisPreis: 11 },
            'sonae-agepan': { name: 'Sonae Arauco Agepan OSB', basisPreis: 8 }
        },
        staerken: [9, 12, 15, 18, 22, 25],
        preisProMm: 0.25
    },
    tischlerplatte: {
        name: 'Tischlerplatte',
        typen: {
            'fichte': { name: 'Tischlerplatte Fichte', basisPreis: 28 },
            'pappel': { name: 'Tischlerplatte Pappel', basisPreis: 24 },
            'buche': { name: 'Tischlerplatte Buche', basisPreis: 42 }
        },
        staerken: [13, 16, 19, 22, 25, 28],
        preisProMm: 0.6
    },
    leimholz: {
        name: 'Leimholz / Massivholz',
        typen: {
            'rettenmeier-fichte': { name: 'Rettenmeier Leimholz Fichte', basisPreis: 26 },
            'rettenmeier-kiefer': { name: 'Rettenmeier Leimholz Kiefer', basisPreis: 30 },
            'binderholz-fichte-3s': { name: 'Binderholz 3-Schichtplatte Fichte', basisPreis: 22 },
            'pollmeier-buche': { name: 'Pollmeier Leimholz Buche', basisPreis: 45 },
            'pollmeier-baubuche': { name: 'Pollmeier BauBuche LVL', basisPreis: 48 },
            'eiche-kgz': { name: 'Leimholz Eiche keilgezinkt', basisPreis: 85 },
            'eiche-dl': { name: 'Leimholz Eiche durchgehend', basisPreis: 140 },
            'nussbaum': { name: 'Leimholz Nussbaum', basisPreis: 180 },
            'esche': { name: 'Leimholz Esche', basisPreis: 65 },
            'ahorn': { name: 'Leimholz Ahorn', basisPreis: 70 }
        },
        staerken: [18, 20, 26, 27, 30, 38, 40, 45, 50],
        preisProMm: 1.2
    },
    vollholz: {
        name: 'Vollholz (Bohlen/Bretter)',
        typen: {
            'fichte-brett': { name: 'Fichtenholz gehobelt', basisPreis: 22 },
            'eiche-brett': { name: 'Eichenholz gehobelt', basisPreis: 95 },
            'eiche-rustikal': { name: 'Eiche rustikal/Altholz', basisPreis: 120 },
            'nussbaum-brett': { name: 'Nussbaum Bohle', basisPreis: 200 },
            'thermoesche': { name: 'Thermoesche', basisPreis: 85 }
        },
        staerken: [20, 25, 30, 40, 50, 60, 80],
        preisProMm: 1.5
    },
    hpl: {
        name: 'HPL / Schichtstoff',
        typen: {
            'egger-hpl-standard': { name: 'Egger HPL Standard 0.8mm', basisPreis: 22 },
            'egger-hpl-compact': { name: 'Egger HPL Compact', basisPreis: 90 },
            'pfleiderer-duropal': { name: 'Pfleiderer Duropal HPL', basisPreis: 25 },
            'pfleiderer-duropal-xtreme': { name: 'Pfleiderer Duropal XTreme', basisPreis: 32 },
            'pfleiderer-compact': { name: 'Pfleiderer Duropal Compact', basisPreis: 95 }
        },
        staerken: [0.8, 2, 3, 4, 6, 8, 10, 12],
        preisProMm: 4
    }
};

const oberflaecheOptionen = [
    { group: 'Hesse Lignal 2K-PU-Lacke', items: [
        { value: 'hesse-unapur-matt', name: 'UNA-PUR DE 425 matt', price: 42, coverage: 10 },
        { value: 'hesse-unapur-seidenmatt', name: 'UNA-PUR DE 425 seidenmatt', price: 42, coverage: 10 },
        { value: 'hesse-unapur-glaenzend', name: 'UNA-PUR DE 425 glänzend', price: 45, coverage: 10 },
        { value: 'hesse-fantastic', name: 'FANTASTIC-CLEAR DE 4877', price: 48, coverage: 9 },
    ]},
    { group: 'Hesse Lignal 1K-Lacke', items: [
        { value: 'hesse-1k-siegel', name: '1K-PU-Siegel DE 41', price: 35, coverage: 12 },
        { value: 'hesse-hydro-top', name: 'HYDRO-TOP Wasserlack', price: 32, coverage: 12 },
    ]},
    { group: 'Hesse Lignal Füller & Grundierung', items: [
        { value: 'hesse-fueller', name: '2K-Acryl-Füller DP 492', price: 28, coverage: 8 },
        { value: 'hesse-iso-grund', name: 'ISO-Grund Sperrgrund', price: 25, coverage: 10 },
    ]},
    { group: 'Hesse Lignal Farblacke', items: [
        { value: 'hesse-duco', name: 'DUCO-ENAMEL Buntlack', price: 38, coverage: 10 },
        { value: 'hesse-brillant', name: 'BRILLANT-PUR hochglanz', price: 52, coverage: 9 },
    ]},
    { group: 'Adler Lacke', items: [
        { value: 'adler-bluefin-terra', name: 'Bluefin Terra-Diamond', price: 22, coverage: 10 },
        { value: 'adler-bluefin-resist', name: 'Bluefin Resist 1K Möbellack', price: 20, coverage: 10 },
        { value: 'adler-acryl', name: 'Acryl-Möbellack', price: 16, coverage: 13 },
        { value: 'adler-legnopur', name: 'Legnopur 2K PU-Klarlack', price: 28, coverage: 10 },
    ]},
    { group: 'Osmo', items: [
        { value: 'osmo-hartwachs-original', name: 'Hartwachs-Öl Original 3032', price: 38, coverage: 24 },
        { value: 'osmo-hartwachs-rapid', name: 'Hartwachs-Öl Rapid', price: 40, coverage: 24 },
        { value: 'osmo-dekorwachs', name: 'Dekorwachs transparent', price: 32, coverage: 20 },
        { value: 'osmo-topoil', name: 'TopOil Arbeitsplattenöl', price: 28, coverage: 12 },
    ]},
    { group: 'Remmers', items: [
        { value: 'remmers-hartwachsoel', name: 'Hartwachs-Öl', price: 30, coverage: 25 },
        { value: 'remmers-hartwachsoel-eco', name: 'Hartwachs-Öl eco', price: 33, coverage: 22 },
        { value: 'remmers-moebellack', name: 'Möbellack PU wasserbasiert', price: 22, coverage: 12 },
    ]},
    { group: 'Sikkens (AkzoNobel)', items: [
        { value: 'sikkens-cetol-tgl', name: 'Cetol TGL Satin Plus', price: 30, coverage: 12 },
        { value: 'sikkens-cetol-bl', name: 'Cetol BL wasserbasiert', price: 34, coverage: 10 },
        { value: 'sikkens-cetol-novatech', name: 'Cetol Novatech Dickschicht-Lasur', price: 28, coverage: 14 },
    ]},
    { group: 'Teknos (Industrie)', items: [
        { value: 'teknos-aquafine', name: 'Aquafine 8336', price: 15, coverage: 10 },
        { value: 'teknos-antistain', name: 'Antistain Aqua 5300', price: 12, coverage: 10 },
    ]},
    { group: 'Öle (Generisch)', items: [
        { value: 'holzoel', name: 'Holzöl natur', price: 18, coverage: 20 },
        { value: 'hartoel', name: 'Hartöl', price: 28, coverage: 16 },
        { value: 'teakoel', name: 'Teaköl', price: 22, coverage: 18 },
    ]},
    { group: 'Lasuren & Wachse', items: [
        { value: 'lasur', name: 'Holzlasur', price: 20, coverage: 15 },
        { value: 'wachs', name: 'Möbelwachs', price: 18, coverage: 25 },
    ]}
];

// Flat lookup for oberflaeche
const oberflaecheLookup = {};
oberflaecheOptionen.forEach(g => g.items.forEach(i => { oberflaecheLookup[i.value] = i; }));

const beschlagOptionen = [
    { group: 'Topfbänder aufschlagend', items: [
        { value: 'blum-clip-bm-110-auf', name: 'Blum CLIP top BLUMOTION 110° aufschl.', price: 4.20 },
        { value: 'blum-clip-std-110-auf', name: 'Blum CLIP top Standard 110° aufschl.', price: 2.80 },
        { value: 'blum-clip-bm-155-auf', name: 'Blum CLIP top BLUMOTION 155° aufschl.', price: 6.50 },
        { value: 'hettich-sensys-sc-110-auf', name: 'Hettich Sensys 110° Soft-close aufschl.', price: 4.00 },
        { value: 'hettich-sensys-std-110-auf', name: 'Hettich Sensys 110° Standard aufschl.', price: 2.50 },
        { value: 'grass-tiomos-sc-110-auf', name: 'Grass Tiomos 110° Soft-close aufschl.', price: 4.50 },
        { value: 'grass-tiomos-std-110-auf', name: 'Grass Tiomos 110° Standard aufschl.', price: 3.00 },
    ]},
    { group: 'Topfbänder einschlagend', items: [
        { value: 'blum-clip-bm-110-ein', name: 'Blum CLIP top BLUMOTION 110° einschl.', price: 4.20 },
        { value: 'blum-clip-std-110-ein', name: 'Blum CLIP top Standard 110° einschl.', price: 2.80 },
        { value: 'hettich-sensys-sc-110-ein', name: 'Hettich Sensys 110° Soft-close einschl.', price: 4.00 },
        { value: 'hettich-sensys-std-110-ein', name: 'Hettich Sensys 110° Standard einschl.', price: 2.50 },
        { value: 'grass-tiomos-sc-110-ein', name: 'Grass Tiomos 110° Soft-close einschl.', price: 4.50 },
        { value: 'grass-tiomos-std-110-ein', name: 'Grass Tiomos 110° Standard einschl.', price: 3.00 },
    ]},
    { group: 'Montageplatten', items: [
        { value: 'blum-kreuzmp-0', name: 'Blum Kreuzmontageplatte 0mm', price: 1.00 },
        { value: 'blum-kreuzmp-3', name: 'Blum Kreuzmontageplatte 3mm Distanz', price: 1.20 },
        { value: 'hettich-mp-0', name: 'Hettich Montageplatte 0mm', price: 0.90 },
        { value: 'grass-mp-0', name: 'Grass Montageplatte 0mm', price: 1.10 },
    ]},
    { group: 'Schubkastensysteme', items: [
        { value: '19.00', name: 'Blum TANDEMBOX antaro M 30kg', price: 19.00 },
        { value: '17.00', name: 'Blum TANDEMBOX antaro K 30kg', price: 17.00 },
        { value: '40.00', name: 'Blum LEGRABOX pure M 40kg', price: 40.00 },
        { value: '30.00', name: 'Hettich ArciTech 40kg Silent System', price: 30.00 },
        { value: '22.00', name: 'Hettich InnoTech Atira 30kg', price: 22.00 },
        { value: '28.00', name: 'Grass Nova Pro Scala 40kg', price: 28.00 },
        { value: '29.00', name: 'Hettich Quadro V6 30kg Vollauszug', price: 29.00 },
    ]},
    { group: 'Klappenbeschläge', items: [
        { value: '95.00', name: 'Blum AVENTOS HF Faltklappe', price: 95.00 },
        { value: '75.00', name: 'Blum AVENTOS HL Hochklappe', price: 75.00 },
        { value: '18.00_kl', name: 'Blum AVENTOS HK-XS Kleinklappe', price: 18.00 },
        { value: '65.00', name: 'Hettich Lift Advanced', price: 65.00 },
    ]},
    { group: 'Griffe & Knöpfe (Häfele)', items: [
        { value: '6.00', name: 'Häfele Möbelknopf Edelstahl', price: 6.00 },
        { value: '12.00', name: 'Häfele Bügelgriff Standard', price: 12.00 },
        { value: '22.00_bg', name: 'Häfele Bügelgriff Edelstahl gebürstet', price: 22.00 },
        { value: '15.00', name: 'Häfele Muschelgriff', price: 15.00 },
        { value: '18.00_gl', name: 'Häfele Griffleiste Aluminium', price: 18.00 },
    ]},
    { group: 'Kesseböhmer Spezialbeschläge', items: [
        { value: '320.00', name: 'Kesseböhmer LeMans II Eckschrank', price: 320.00 },
        { value: '400.00', name: 'Kesseböhmer Dispensa Apothekerschrank', price: 400.00 },
        { value: '250.00', name: 'Kesseböhmer Revo Drehboden', price: 250.00 },
    ]},
    { group: 'Verbinder & Sonstiges', items: [
        { value: '1.00_ex', name: 'Exzenter-Verbinder', price: 1.00 },
        { value: '0.50', name: 'Regalbodenträger', price: 0.50 },
        { value: '3.00', name: 'Soft-Close Dämpfer', price: 3.00 },
        { value: '15.00_ks', name: 'Kleiderstange inkl. Halter', price: 15.00 },
        { value: '6.00_sa', name: 'Häfele Schrankaufhänger', price: 6.00 },
        { value: '45.00', name: 'Möbelschloss', price: 45.00 },
    ]}
];

// Flat lookup for beschlaege
const beschlagLookup = {};
beschlagOptionen.forEach(g => g.items.forEach(i => { beschlagLookup[i.value] = i; }));

// Legacy-Aliase für alte gespeicherte Projekte
beschlagLookup['4.20'] = { value: '4.20', name: 'Blum CLIP top BLUMOTION 110°', price: 4.20 };
beschlagLookup['2.80'] = { value: '2.80', name: 'Blum CLIP top Standard 110°', price: 2.80 };
beschlagLookup['4.00'] = { value: '4.00', name: 'Hettich Sensys 110° Soft-close', price: 4.00 };
beschlagLookup['2.50'] = { value: '2.50', name: 'Hettich Sensys 110° Standard', price: 2.50 };
beschlagLookup['4.50'] = { value: '4.50', name: 'Grass Tiomos 110° Soft-close', price: 4.50 };
beschlagLookup['1.00_mp'] = { value: '1.00_mp', name: 'Blum Kreuzmontageplatte', price: 1.00 };

// ==================== VERBINDUNGSMITTEL ====================
const verbindungsmittelOptionen = [
    { group: 'Dübel', items: [
        { value: 'holzduebel-6x30', name: 'Holzdübel 6×30mm', price: 0.03 },
        { value: 'holzduebel-8x40', name: 'Holzdübel 8×40mm', price: 0.04 },
        { value: 'holzduebel-10x40', name: 'Holzdübel 10×40mm', price: 0.05 },
        { value: 'riffelduebel-6x30', name: 'Riffeldübel 6×30mm', price: 0.04 },
        { value: 'riffelduebel-8x40', name: 'Riffeldübel 8×40mm', price: 0.05 },
    ]},
    { group: 'Schrauben', items: [
        { value: 'spax-3x30', name: 'SPAX 3×30mm Senkkopf', price: 0.04 },
        { value: 'spax-3.5x35', name: 'SPAX 3,5×35mm Senkkopf', price: 0.05 },
        { value: 'spax-4x40', name: 'SPAX 4×40mm Senkkopf', price: 0.06 },
        { value: 'spax-4x50', name: 'SPAX 4×50mm Senkkopf', price: 0.07 },
        { value: 'spax-5x60', name: 'SPAX 5×60mm Senkkopf', price: 0.09 },
        { value: 'spax-5x80', name: 'SPAX 5×80mm Senkkopf', price: 0.12 },
        { value: 'spax-6x100', name: 'SPAX 6×100mm Senkkopf', price: 0.18 },
        { value: 'konf-4x50', name: 'Konfirmatsschraube 5×50mm', price: 0.08 },
        { value: 'konf-7x50', name: 'Konfirmatsschraube 7×50mm', price: 0.10 },
        { value: 'konf-7x70', name: 'Konfirmatsschraube 7×70mm', price: 0.12 },
    ]},
    { group: 'Exzenter & Bolzen', items: [
        { value: 'exzenter-15', name: 'Exzenter Ø15mm komplett', price: 0.85 },
        { value: 'exzenter-25', name: 'Exzenter Ø25mm komplett', price: 1.20 },
        { value: 'rastex-15', name: 'Häfele Rastex 15 Verbinder', price: 1.50 },
        { value: 'vb-36-bolzen', name: 'VB 36 Bolzen + Hülse', price: 0.90 },
        { value: 'minifix-15', name: 'Minifix 15 Verbinder', price: 1.10 },
    ]},
    { group: 'Leimverbindungen', items: [
        { value: 'holzleim-d3', name: 'Holzleim D3 (pro Fuge)', price: 0.10 },
        { value: 'holzleim-d4', name: 'Holzleim D4 wasserfest (pro Fuge)', price: 0.15 },
        { value: 'pu-leim', name: 'PU-Leim (pro Fuge)', price: 0.25 },
    ]},
    { group: 'Flachdübel (Lamello)', items: [
        { value: 'lamello-0', name: 'Flachdübel Nr. 0 (47mm)', price: 0.06 },
        { value: 'lamello-10', name: 'Flachdübel Nr. 10 (53mm)', price: 0.07 },
        { value: 'lamello-20', name: 'Flachdübel Nr. 20 (56mm)', price: 0.08 },
        { value: 'domino-4x20', name: 'Festool Domino 4×20mm', price: 0.12 },
        { value: 'domino-5x30', name: 'Festool Domino 5×30mm', price: 0.15 },
        { value: 'domino-6x40', name: 'Festool Domino 6×40mm', price: 0.18 },
        { value: 'domino-8x50', name: 'Festool Domino 8×50mm', price: 0.22 },
        { value: 'domino-10x50', name: 'Festool Domino 10×50mm', price: 0.30 },
    ]},
    { group: 'Winkel & Eckverbinder', items: [
        { value: 'winkel-40', name: 'Winkelverbinder 40×40mm verzinkt', price: 0.35 },
        { value: 'winkel-60', name: 'Winkelverbinder 60×60mm verzinkt', price: 0.50 },
        { value: 'eckwinkel-50', name: 'Eckwinkel 50×50mm Stahl', price: 0.45 },
        { value: 'trapezverbinder', name: 'Trapezverbinder AP', price: 1.80 },
        { value: 'moebel-winkel-kunststoff', name: 'Möbelwinkel Kunststoff weiß', price: 0.15 },
    ]},
    { group: 'Nägel & Stifte', items: [
        { value: 'stift-23ga-25', name: 'Mikrostift 23GA 25mm', price: 0.01 },
        { value: 'stift-23ga-35', name: 'Mikrostift 23GA 35mm', price: 0.01 },
        { value: 'nagel-1.2x25', name: 'Stauchkopfnagel 1,2×25mm', price: 0.02 },
        { value: 'nagel-1.2x35', name: 'Stauchkopfnagel 1,2×35mm', price: 0.02 },
    ]},
];

const verbindungsmittelLookup = {};
verbindungsmittelOptionen.forEach(g => g.items.forEach(i => { verbindungsmittelLookup[i.value] = i; }));

// ==================== KANTENMATERIAL ====================
const kantenMaterial = [
    { group: 'ABS-Kanten 0,4 mm', items: [
        { value: 'abs-04-weiss', name: 'ABS 0,4mm weiß glatt', price: 0.35 },
        { value: 'abs-04-weiss-perl', name: 'ABS 0,4mm weiß Perlstruktur', price: 0.40 },
        { value: 'abs-04-dekor', name: 'ABS 0,4mm Dekor passend', price: 0.55 },
        { value: 'abs-04-schwarz', name: 'ABS 0,4mm schwarz', price: 0.38 },
    ]},
    { group: 'ABS-Kanten 2 mm', items: [
        { value: 'abs-2-weiss', name: 'ABS 2mm weiß glatt', price: 0.85 },
        { value: 'abs-2-weiss-perl', name: 'ABS 2mm weiß Perlstruktur', price: 0.95 },
        { value: 'abs-2-dekor', name: 'ABS 2mm Dekor passend', price: 1.20 },
        { value: 'abs-2-schwarz', name: 'ABS 2mm schwarz', price: 0.90 },
    ]},
    { group: 'PP-Kanten', items: [
        { value: 'pp-04', name: 'PP 0,4mm uni', price: 0.30 },
        { value: 'pp-2', name: 'PP 2mm uni', price: 0.75 },
    ]},
    { group: 'Massivholz-Kanten', items: [
        { value: 'massiv-buche', name: 'Massivholz Buche', price: 2.80 },
        { value: 'massiv-eiche', name: 'Massivholz Eiche', price: 3.50 },
        { value: 'massiv-nussbaum', name: 'Massivholz Nussbaum', price: 5.20 },
        { value: 'massiv-ahorn', name: 'Massivholz Ahorn', price: 3.20 },
        { value: 'massiv-fichte', name: 'Massivholz Fichte', price: 1.80 },
    ]},
    { group: 'Furnier-Kanten', items: [
        { value: 'furnier-buche', name: 'Furnierkante Buche', price: 1.20 },
        { value: 'furnier-eiche', name: 'Furnierkante Eiche', price: 1.60 },
        { value: 'furnier-nussbaum', name: 'Furnierkante Nussbaum', price: 2.40 },
    ]},
    { group: 'Aluminium-Kanten', items: [
        { value: 'alu-natur', name: 'Alu-Kante natur eloxiert', price: 4.50 },
        { value: 'alu-schwarz', name: 'Alu-Kante schwarz eloxiert', price: 5.20 },
    ]}
];

const kantenLookup = {};
kantenMaterial.forEach(g => g.items.forEach(i => { kantenLookup[i.value] = i; }));

function buildKantenOptions() {
    let html = '<option value="">-- Auswählen --</option>';
    kantenMaterial.forEach(g => {
        html += '<optgroup label="' + escapeHtml(g.group) + '">';
        g.items.forEach(i => {
            html += '<option value="' + i.value + '">' + escapeHtml(i.name) + ' (' + i.price.toFixed(2).replace('.', ',') + '\u20ac/lfm)</option>';
        });
        html += '</optgroup>';
    });
    return html;
}

// ==================== VORLAGEN ====================
// Eigene Vorlagen werden aus IndexedDB geladen
let eigeneVorlagen = [];

// ==================== IndexedDB ====================
const DB_NAME = 'TischlerKalkPro';
const DB_VERSION = 4;
let db = null;

// Eigene Artikel Arrays
let eigeneArtikelBeschlaege = [];
let eigeneArtikelOberflaechen = [];
let eigeneArtikelMaterialien = [];

function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = (e) => {
            const database = e.target.result;
            if (!database.objectStoreNames.contains('projekte')) {
                database.createObjectStore('projekte', { keyPath: 'id' });
            }
            if (!database.objectStoreNames.contains('kunden')) {
                database.createObjectStore('kunden', { keyPath: 'id' });
            }
            if (!database.objectStoreNames.contains('einstellungen')) {
                database.createObjectStore('einstellungen', { keyPath: 'key' });
            }
            // V2: Eigene Artikel Stores
            if (!database.objectStoreNames.contains('eigeneBeschlaege')) {
                database.createObjectStore('eigeneBeschlaege', { keyPath: 'id' });
            }
            if (!database.objectStoreNames.contains('eigeneOberflaechen')) {
                database.createObjectStore('eigeneOberflaechen', { keyPath: 'id' });
            }
            if (!database.objectStoreNames.contains('eigeneMaterialien')) {
                database.createObjectStore('eigeneMaterialien', { keyPath: 'id' });
            }
            // V3/V4: Zeiterfassung & Termine Store
            if (!database.objectStoreNames.contains('zeiten')) {
                database.createObjectStore('zeiten', { keyPath: 'id' });
            }
            if (!database.objectStoreNames.contains('termine')) {
                database.createObjectStore('termine', { keyPath: 'id' });
            }
        };
        request.onsuccess = (e) => { db = e.target.result; resolve(db); };
        request.onerror = (e) => { console.error('DB Fehler:', e.target.error); reject(e.target.error); };
        request.onblocked = () => { console.warn('DB blockiert - bitte andere Tabs mit WerkBank schließen'); };
    });
}

function dbPut(store, data) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(store, 'readwrite');
        tx.objectStore(store).put(data);
        tx.oncomplete = () => resolve();
        tx.onerror = (e) => reject(e.target.error);
    });
}

function dbGet(store, key) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(store, 'readonly');
        const req = tx.objectStore(store).get(key);
        req.onsuccess = () => resolve(req.result);
        req.onerror = (e) => reject(e.target.error);
    });
}

function dbGetAll(store) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(store, 'readonly');
        const req = tx.objectStore(store).getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror = (e) => reject(e.target.error);
    });
}

function dbDelete(store, key) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(store, 'readwrite');
        tx.objectStore(store).delete(key);
        tx.oncomplete = () => resolve();
        tx.onerror = (e) => reject(e.target.error);
    });
}

// Settings helpers
async function getSetting(key, defaultValue) {
    const row = await dbGet('einstellungen', key);
    return row ? row.value : defaultValue;
}

async function setSetting(key, value) {
    return dbPut('einstellungen', { key, value });
}

// ==================== EIGENE ARTIKEL ====================
async function loadEigeneArtikel() {
    eigeneArtikelBeschlaege = await dbGetAll('eigeneBeschlaege');
    eigeneArtikelOberflaechen = await dbGetAll('eigeneOberflaechen');
    eigeneArtikelMaterialien = await dbGetAll('eigeneMaterialien');

    // Extend beschlagLookup with eigene
    eigeneArtikelBeschlaege.forEach(b => {
        beschlagLookup['eigen_' + b.id] = { value: 'eigen_' + b.id, name: b.name, price: b.price };
    });

    // Extend oberflaecheLookup with eigene
    eigeneArtikelOberflaechen.forEach(o => {
        oberflaecheLookup['eigen_' + o.id] = { value: 'eigen_' + o.id, name: o.name, price: o.price, coverage: o.coverage };
    });
}

// CRUD: Eigene Beschläge
async function saveEigenerBeschlag(id, name, price) {
    const item = { id: id || generateId(), name, price: parseFloat(price) };
    await dbPut('eigeneBeschlaege', item);
    await loadEigeneArtikel();
    refreshAllDropdowns('beschlag');
    return item;
}

async function deleteEigenerBeschlag(id) {
    await dbDelete('eigeneBeschlaege', id);
    delete beschlagLookup['eigen_' + id];
    await loadEigeneArtikel();
    refreshAllDropdowns('beschlag');
}

// CRUD: Eigene Oberflächen
async function saveEigeneOberflaeche(id, name, price, coverage) {
    const item = { id: id || generateId(), name, price: parseFloat(price), coverage: parseFloat(coverage) };
    await dbPut('eigeneOberflaechen', item);
    await loadEigeneArtikel();
    refreshAllDropdowns('oberflaeche');
    return item;
}

async function deleteEigeneOberflaeche(id) {
    await dbDelete('eigeneOberflaechen', id);
    delete oberflaecheLookup['eigen_' + id];
    await loadEigeneArtikel();
    refreshAllDropdowns('oberflaeche');
}

// CRUD: Eigene Materialien
async function saveEigenesMaterial(id, kategorie, name, basisPreis) {
    const item = { id: id || generateId(), kategorie, name, basisPreis: parseFloat(basisPreis) };
    await dbPut('eigeneMaterialien', item);
    await loadEigeneArtikel();
    refreshAllDropdowns('material');
    return item;
}

async function deleteEigenesMaterial(id) {
    await dbDelete('eigeneMaterialien', id);
    await loadEigeneArtikel();
    refreshAllDropdowns('material');
}

// Refresh all open position dropdowns
function refreshAllDropdowns(type) {
    document.querySelectorAll('.position-block').forEach(block => {
        if (type === 'beschlag') {
            block.querySelectorAll('.beschlag-row').forEach(row => {
                const sel = row.querySelector('.beschlag-typ');
                const currentVal = sel.value;
                sel.innerHTML = buildBeschlagOptions();
                sel.value = currentVal;
            });
        }
        if (type === 'oberflaeche') {
            const sel = block.querySelector('.pos-oberflaeche-typ');
            if (sel) {
                const currentVal = sel.value;
                sel.innerHTML = buildOberflaecheOptions();
                sel.value = currentVal;
            }
        }
        if (type === 'material') {
            const katSel = block.querySelector('.pos-kategorie');
            const typSel = block.querySelector('.pos-typ');
            if (katSel && katSel.value) {
                const currentTyp = typSel.value;
                populateTypSelect(katSel, currentTyp);
            }
        }
    });
}

// Einstellungen: Render-Funktionen
function renderEigeneBeschlaege() {
    const container = document.getElementById('eigene-beschlaege-content');
    if (!container) return;
    let html = '<table class="article-table"><thead><tr><th>Name</th><th>Preis</th><th></th></tr></thead><tbody>';
    eigeneArtikelBeschlaege.forEach(b => {
        html += `<tr>
            <td>${escapeHtml(b.name)}</td>
            <td>${b.price.toFixed(2).replace('.', ',')} \u20ac</td>
            <td>
                <button class="btn-icon btn-icon-danger" onclick="deleteEigenerBeschlag('${b.id}').then(() => { renderEigeneBeschlaege(); showToast('Beschlag gelöscht'); })" title="Löschen">&#128465;</button>
            </td>
        </tr>`;
    });
    html += '</tbody></table>';
    html += `<div class="article-add-form">
        <div class="form-grid-3" style="margin-bottom:0">
            <div class="form-group"><label>Name</label><input type="text" id="ea-beschlag-name" placeholder="z.B. Spezial-Scharnier"></div>
            <div class="form-group"><label>Preis (\u20ac)</label><input type="number" id="ea-beschlag-preis" min="0" step="0.01" placeholder="7.50"></div>
            <div class="form-group" style="display:flex;align-items:flex-end"><button class="btn btn-primary btn-sm" onclick="handleAddEigenerBeschlag()">Hinzufügen</button></div>
        </div>
    </div>`;
    container.innerHTML = html;
}

function renderEigeneOberflaechen() {
    const container = document.getElementById('eigene-oberflaechen-content');
    if (!container) return;
    let html = '<table class="article-table"><thead><tr><th>Name</th><th>Preis/L</th><th>m\u00b2/L</th><th></th></tr></thead><tbody>';
    eigeneArtikelOberflaechen.forEach(o => {
        html += `<tr>
            <td>${escapeHtml(o.name)}</td>
            <td>${o.price.toFixed(2).replace('.', ',')} \u20ac</td>
            <td>${o.coverage}</td>
            <td>
                <button class="btn-icon btn-icon-danger" onclick="deleteEigeneOberflaeche('${o.id}').then(() => { renderEigeneOberflaechen(); showToast('Oberfläche gelöscht'); })" title="Löschen">&#128465;</button>
            </td>
        </tr>`;
    });
    html += '</tbody></table>';
    html += `<div class="article-add-form">
        <div class="form-grid-2" style="margin-bottom:8px">
            <div class="form-group"><label>Name</label><input type="text" id="ea-oberflaeche-name" placeholder="z.B. Speziallack"></div>
            <div class="form-group"><label>Preis (\u20ac/Liter)</label><input type="number" id="ea-oberflaeche-preis" min="0" step="0.01" placeholder="35.00"></div>
        </div>
        <div class="form-grid-2" style="margin-bottom:0">
            <div class="form-group"><label>Ergiebigkeit (m\u00b2/Liter)</label><input type="number" id="ea-oberflaeche-coverage" min="0.1" step="0.1" placeholder="10"></div>
            <div class="form-group" style="display:flex;align-items:flex-end"><button class="btn btn-primary btn-sm" onclick="handleAddEigeneOberflaeche()">Hinzufügen</button></div>
        </div>
    </div>`;
    container.innerHTML = html;
}

function renderEigeneMaterialien() {
    const container = document.getElementById('eigene-materialien-content');
    if (!container) return;
    let html = '<table class="article-table"><thead><tr><th>Kategorie</th><th>Name</th><th>Basispreis</th><th></th></tr></thead><tbody>';
    eigeneArtikelMaterialien.forEach(m => {
        const katName = materialDaten[m.kategorie] ? materialDaten[m.kategorie].name : m.kategorie;
        html += `<tr>
            <td>${escapeHtml(katName)}</td>
            <td>${escapeHtml(m.name)}</td>
            <td>${m.basisPreis.toFixed(2).replace('.', ',')} \u20ac/m\u00b2</td>
            <td>
                <button class="btn-icon btn-icon-danger" onclick="deleteEigenesMaterial('${m.id}').then(() => { renderEigeneMaterialien(); showToast('Material gelöscht'); })" title="Löschen">&#128465;</button>
            </td>
        </tr>`;
    });
    html += '</tbody></table>';
    html += `<div class="article-add-form">
        <div class="form-grid-3" style="margin-bottom:0">
            <div class="form-group"><label>Kategorie</label><select id="ea-material-kategorie">${buildKategorieOptions()}</select></div>
            <div class="form-group"><label>Name</label><input type="text" id="ea-material-name" placeholder="z.B. Spezialplatte"></div>
            <div class="form-group"><label>Basispreis (\u20ac/m\u00b2)</label><input type="number" id="ea-material-preis" min="0" step="0.01" placeholder="25.00"></div>
        </div>
        <div style="margin-top:8px"><button class="btn btn-primary btn-sm" onclick="handleAddEigenesMaterial()">Hinzufügen</button></div>
    </div>`;
    container.innerHTML = html;
}

// Handler-Funktionen für Inline-Add
async function handleAddEigenerBeschlag() {
    const name = document.getElementById('ea-beschlag-name').value.trim();
    const preis = document.getElementById('ea-beschlag-preis').value;
    if (!name || !preis) { showToast('Bitte Name und Preis eingeben', 'warning'); return; }
    await saveEigenerBeschlag(null, name, preis);
    renderEigeneBeschlaege();
    showToast('Eigener Beschlag gespeichert');
}

async function handleAddEigeneOberflaeche() {
    const name = document.getElementById('ea-oberflaeche-name').value.trim();
    const preis = document.getElementById('ea-oberflaeche-preis').value;
    const coverage = document.getElementById('ea-oberflaeche-coverage').value;
    if (!name || !preis || !coverage) { showToast('Bitte alle Felder ausfüllen', 'warning'); return; }
    await saveEigeneOberflaeche(null, name, preis, coverage);
    renderEigeneOberflaechen();
    showToast('Eigene Oberfläche gespeichert');
}

async function handleAddEigenesMaterial() {
    const kategorie = document.getElementById('ea-material-kategorie').value;
    const name = document.getElementById('ea-material-name').value.trim();
    const preis = document.getElementById('ea-material-preis').value;
    if (!kategorie || !name || !preis) { showToast('Bitte alle Felder ausfüllen', 'warning'); return; }
    await saveEigenesMaterial(null, kategorie, name, preis);
    renderEigeneMaterialien();
    showToast('Eigenes Material gespeichert');
}

// Eigene Artikel Tab-Navigation
function switchArticleTab(tabName) {
    const settingsCard = document.querySelector('#view-einstellungen .article-tabs');
    if (!settingsCard) return;
    settingsCard.querySelectorAll('.article-tab').forEach(t => t.classList.remove('article-tab-active'));
    document.querySelectorAll('.article-tab-content').forEach(c => c.classList.add('hidden'));
    const tab = settingsCard.querySelector('[data-article-tab="' + tabName + '"]');
    if (tab) tab.classList.add('article-tab-active');
    const content = document.getElementById('eigene-' + tabName + '-content');
    if (content) content.classList.remove('hidden');
}

// Quick-Add: Inline-Formular neben Dropdown
function openQuickAdd(type, button) {
    // Remove any existing quick-add forms
    document.querySelectorAll('.quick-add-form').forEach(f => f.remove());

    const wrap = button.closest('.quick-add-wrap');
    const form = document.createElement('div');
    form.className = 'quick-add-form';

    if (type === 'beschlag') {
        form.innerHTML = `
            <input type="text" class="qa-name" placeholder="Name" style="flex:2">
            <input type="number" class="qa-preis" placeholder="Preis \u20ac" min="0" step="0.01" style="flex:1">
            <button class="btn btn-primary btn-sm qa-save">OK</button>
            <button class="btn btn-secondary btn-sm qa-cancel">&times;</button>
        `;
    } else if (type === 'material') {
        form.innerHTML = `
            <input type="text" class="qa-name" placeholder="Materialname" style="flex:2">
            <input type="number" class="qa-preis" placeholder="\u20ac/m\u00b2" min="0" step="0.01" style="flex:1">
            <button class="btn btn-primary btn-sm qa-save">OK</button>
            <button class="btn btn-secondary btn-sm qa-cancel">&times;</button>
        `;
    } else {
        form.innerHTML = `
            <input type="text" class="qa-name" placeholder="Name" style="flex:2">
            <input type="number" class="qa-preis" placeholder="\u20ac/L" min="0" step="0.01" style="flex:1">
            <input type="number" class="qa-coverage" placeholder="m\u00b2/L" min="0.1" step="0.1" style="flex:1">
            <button class="btn btn-primary btn-sm qa-save">OK</button>
            <button class="btn btn-secondary btn-sm qa-cancel">&times;</button>
        `;
    }

    wrap.appendChild(form);

    form.querySelector('.qa-cancel').addEventListener('click', () => form.remove());
    form.querySelector('.qa-save').addEventListener('click', async () => {
        const name = form.querySelector('.qa-name').value.trim();
        const preis = form.querySelector('.qa-preis').value;
        if (!name || !preis) { showToast('Bitte ausfüllen', 'warning'); return; }

        let newItem;
        if (type === 'beschlag') {
            newItem = await saveEigenerBeschlag(null, name, preis);
            const sel = wrap.querySelector('.beschlag-typ');
            sel.innerHTML = buildBeschlagOptions();
            sel.value = 'eigen_' + newItem.id;
        } else if (type === 'material') {
            const block = wrap.closest('.position-block');
            const katSel = block.querySelector('.pos-kategorie');
            const kategorie = katSel.value;
            if (!kategorie) { showToast('Bitte zuerst Kategorie wählen', 'warning'); return; }
            newItem = await saveEigenesMaterial(null, kategorie, name, preis);
            const typSel = wrap.querySelector('.pos-typ');
            populateTypSelect(katSel, 'eigen_' + newItem.id);
        } else {
            const coverage = form.querySelector('.qa-coverage').value;
            if (!coverage) { showToast('Bitte Ergiebigkeit angeben', 'warning'); return; }
            newItem = await saveEigeneOberflaeche(null, name, preis, coverage);
            const sel = wrap.querySelector('.pos-oberflaeche-typ');
            sel.innerHTML = buildOberflaecheOptions();
            sel.value = 'eigen_' + newItem.id;
        }
        form.remove();
        showToast('Eigener Artikel gespeichert');
    });

    form.querySelector('.qa-name').focus();
}

// ==================== UTILITIES ====================
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 6);
}

// Kundennummer als Zahl extrahieren (z.B. "KD-0003" → 3)
function extractKundenNummer(kundenNr) {
    if (!kundenNr) return 0;
    const match = kundenNr.match(/(\d+)$/);
    return match ? parseInt(match[1]) : 0;
}

// Zählt wie viele Projekte ein Kunde hat, gibt die nächste Nummer zurück
async function getNextProjektNrForKunde(kundeId, year, excludeProjektId) {
    const projekte = await dbGetAll('projekte');
    let maxNr = 0;
    let countForKunde = 0;

    projekte.forEach(p => {
        if (p.kundeId === kundeId && p.id !== excludeProjektId) {
            countForKunde++;

            if (p.angebotNr) {
                // Neues Format: AG-2026-003-02 → letzte Zahl extrahieren
                const match = p.angebotNr.match(/^(?:AG|RE)-(\d{4})-\d{3}-(\d+)$/);
                if (match && parseInt(match[1]) === year) {
                    const nr = parseInt(match[2]);
                    if (nr > maxNr) maxNr = nr;
                }
            }
        }
    });

    // Wenn alte Projekte existieren aber keine neue Nummer haben,
    // starte nach der Anzahl bestehender Projekte
    if (maxNr === 0 && countForKunde > 0) {
        maxNr = countForKunde;
    }

    return maxNr + 1;
}

// Generiert AG-JJJJ-KKK-PP oder RE-JJJJ-KKK-PP
async function generateDokumentNr(prefix, kundeId, excludeProjektId) {
    const year = new Date().getFullYear();
    let kundenNummer = 0;

    if (kundeId) {
        const kunde = await dbGet('kunden', kundeId);
        if (kunde) {
            kundenNummer = extractKundenNummer(kunde.kundenNr);
            // Fallback: Wenn Kunde keine Nummer hat, Position in Kundenliste nutzen
            if (kundenNummer === 0) {
                const alleKunden = await dbGetAll('kunden');
                const sorted = alleKunden.sort((a, b) => (a.erstelltAm || '').localeCompare(b.erstelltAm || ''));
                const idx = sorted.findIndex(k => k.id === kundeId);
                kundenNummer = idx >= 0 ? idx + 1 : 1;
            }
        }
    }

    const projektNr = await getNextProjektNrForKunde(kundeId, year, excludeProjektId);

    return prefix + year + '-'
        + String(kundenNummer).padStart(3, '0') + '-'
        + String(projektNr).padStart(2, '0');
}

function formatCurrency(value, symbol) {
    symbol = symbol || '\u20ac';
    return value.toFixed(2).replace('.', ',') + ' ' + symbol;
}

function formatDate(iso) {
    if (!iso) return '-';
    const d = new Date(iso);
    return d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
}

// ==================== TOAST ====================
function showToast(message, type) {
    type = type || 'success';
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    toast.textContent = message;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('toast-show'));
    setTimeout(() => {
        toast.classList.remove('toast-show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== CONFIRM MODAL ====================
let confirmResolve = null;

function showConfirm(title, message, options) {
    const opts = options || {};
    const okLabel = opts.okLabel || 'Löschen';
    const okClass = opts.okClass || 'btn btn-danger btn-sm';
    return new Promise((resolve) => {
        confirmResolve = resolve;
        document.getElementById('confirm-title').textContent = title;
        document.getElementById('confirm-message').textContent = message;
        const okBtn = document.getElementById('confirm-ok');
        okBtn.textContent = okLabel;
        okBtn.className = okClass;
        document.getElementById('modal-confirm').classList.remove('hidden');
    });
}

// ==================== ROUTER ====================
const views = ['dashboard', 'projekte', 'projekt-editor', 'kunden', 'zeiterfassung', 'kalender', 'finanzen', 'einstellungen', 'hilfe', 'impressum', 'datenschutz'];

function hideAllViews() {
    views.forEach(v => {
        const el = document.getElementById('view-' + v);
        if (el) el.classList.add('hidden');
    });
}

function showView(name) {
    hideAllViews();
    const el = document.getElementById('view-' + name);
    if (el) el.classList.remove('hidden');
    // Update nav active state
    document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
    const navMap = {
        'dashboard': 'dashboard',
        'projekte': 'projekte',
        'projekt-editor': 'projekte',
        'kunden': 'kunden',
        'zeiterfassung': 'zeiterfassung',
        'kalender': 'kalender',
        'finanzen': 'finanzen',
        'einstellungen': 'einstellungen',
        'hilfe': 'hilfe'
    };
    const navKey = navMap[name];
    if (navKey) {
        const link = document.querySelector('[data-nav="' + navKey + '"]');
        if (link) link.classList.add('active');
    }
    window.scrollTo(0, 0);
}

let currentProjektId = null;

function parseHashParams(hash) {
    const qIdx = hash.indexOf('?');
    if (qIdx === -1) return {};
    const params = {};
    hash.substring(qIdx + 1).split('&').forEach(p => {
        const [k, v] = p.split('=');
        if (k) params[decodeURIComponent(k)] = decodeURIComponent(v || '');
    });
    return params;
}

async function router() {
    const hash = window.location.hash || '#/dashboard';
    const hashPath = hash.split('?')[0];
    const params = parseHashParams(hash);
    const parts = hashPath.replace('#/', '').split('/');
    const route = parts[0];

    switch (route) {
        case 'dashboard':
            showView('dashboard');
            await renderDashboard();
            break;
        case 'projekte':
            showView('projekte');
            if (params.status) {
                document.getElementById('filter-status').value = params.status;
            } else if (params.monat === 'aktuell') {
                document.getElementById('filter-status').value = '';
            }
            await renderProjekteListe(params.monat === 'aktuell');
            break;
        case 'projekt':
            showView('projekt-editor');
            if (parts[1] === 'neu') {
                currentProjektId = null;
                await initProjektEditor(null);
                if (params.kunde) {
                    document.getElementById('proj-kunde').value = params.kunde;
                    await fillKundeDetails(params.kunde);
                }
            } else if (parts[1]) {
                currentProjektId = parts[1];
                const projekt = await dbGet('projekte', parts[1]);
                if (projekt) {
                    await initProjektEditor(projekt);
                } else {
                    showToast('Projekt nicht gefunden', 'error');
                    window.location.hash = '#/projekte';
                }
            }
            break;
        case 'kunden':
            showView('kunden');
            await renderKundenListe();
            break;
        case 'einstellungen':
            showView('einstellungen');
            await loadSettings();
            break;
        case 'zeiterfassung':
            showView('zeiterfassung');
            await renderZeiterfassung();
            break;
        case 'kalender':
            showView('kalender');
            await renderKalender();
            break;
        case 'finanzen':
            showView('finanzen');
            await renderFinanzen();
            break;
        case 'hilfe':
            showView('hilfe');
            break;
        case 'impressum':
            showView('impressum');
            break;
        case 'datenschutz':
            showView('datenschutz');
            break;
        default:
            showView('dashboard');
            await renderDashboard();
    }
}

// ==================== DASHBOARD ====================
async function renderDashboard() {
    const projekte = await dbGetAll('projekte');
    const kunden = await dbGetAll('kunden');
    const now = new Date();

    // Workflow Pipeline
    updateWorkflowPipeline();

    // KPIs
    const offene = projekte.filter(p => p.status === 'angeboten');
    const beauftragt = projekte.filter(p => p.status === 'beauftragt');
    const inProduktion = projekte.filter(p => p.status === 'in_produktion');
    const abgeschlossen = projekte.filter(p => p.status === 'abgeschlossen');
    const monat = projekte.filter(p => {
        const d = new Date(p.erstelltAm);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    });

    document.getElementById('kpi-offene-anzahl').textContent = offene.length;
    document.getElementById('kpi-offene-summe').textContent = formatCurrency(offene.reduce((s, p) => s + (p.brutto || 0), 0));
    document.getElementById('kpi-beauftragt-anzahl').textContent = beauftragt.length;
    document.getElementById('kpi-beauftragt-summe').textContent = formatCurrency(beauftragt.reduce((s, p) => s + (p.brutto || 0), 0));
    document.getElementById('kpi-produktion-anzahl').textContent = inProduktion.length;
    document.getElementById('kpi-produktion-summe').textContent = formatCurrency(inProduktion.reduce((s, p) => s + (p.brutto || 0), 0));
    document.getElementById('kpi-abgeschlossen-anzahl').textContent = abgeschlossen.length;
    document.getElementById('kpi-abgeschlossen-summe').textContent = formatCurrency(abgeschlossen.reduce((s, p) => s + (p.brutto || 0), 0));
    document.getElementById('kpi-monat-anzahl').textContent = monat.length;
    const monatUmsatzEl = document.getElementById('kpi-monat-umsatz');
    if (monatUmsatzEl) monatUmsatzEl.textContent = formatCurrency(monat.reduce((s, p) => s + (p.brutto || 0), 0));

    // Revenue banner
    const gesamtUmsatz = projekte.filter(p => ['beauftragt', 'in_produktion', 'rechnung_gestellt', 'bezahlt', 'abgeschlossen'].includes(p.status))
        .reduce((s, p) => s + (p.brutto || 0), 0);
    const gUmsatzEl = document.getElementById('kpi-gesamt-umsatz');
    if (gUmsatzEl) gUmsatzEl.textContent = formatCurrency(gesamtUmsatz);
    const gKundenEl = document.getElementById('kpi-gesamt-kunden');
    if (gKundenEl) gKundenEl.textContent = kunden.length;
    const gProjekteEl = document.getElementById('kpi-gesamt-projekte');
    if (gProjekteEl) gProjekteEl.textContent = projekte.length;

    // Greeting
    const hour = now.getHours();
    let greeting = 'Guten Tag';
    if (hour < 12) greeting = 'Guten Morgen';
    else if (hour >= 17) greeting = 'Guten Abend';
    const greetEl = document.getElementById('dash-greeting');
    if (greetEl) greetEl.textContent = greeting + ' \u2014 Ihr WerkBank-Cockpit auf einen Blick';

    // Year label
    const yearEl = document.getElementById('chart-year-label');
    if (yearEl) yearEl.textContent = String(now.getFullYear());

    // ===== CHARTS =====
    renderUmsatzChart(projekte, now);
    renderStatusDonut(projekte);
    renderTopKunden(projekte, kunden);
    renderKostenDonut(projekte);

    // Last 8 projects
    const sorted = [...projekte].sort((a, b) => new Date(b.erstelltAm) - new Date(a.erstelltAm)).slice(0, 8);
    const tbody = document.getElementById('dashboard-projekte-body');
    if (sorted.length === 0) {
        tbody.innerHTML = '<tr class="empty-row"><td colspan="8">Noch keine Projekte vorhanden.</td></tr>';
    } else {
        tbody.innerHTML = sorted.map(p => {
            const kunde = kunden.find(k => k.id === p.kundeId);
            const kundeName = kunde ? ((kunde.vorname || '') + ' ' + (kunde.nachname || '')).trim() : '-';
            return `<tr data-projekt-href="#/projekt/${p.id}" class="clickable-row">
                <td>${escapeHtml(p.angebotNr || '-')}</td>
                <td><a href="#/projekt/${p.id}" class="table-link">${escapeHtml(p.titel)}</a></td>
                <td>${escapeHtml(kundeName)}</td>
                <td>${buildStatusInlineSelect(p.id, p.status)}</td>
                <td>${p.brutto ? formatCurrency(p.brutto) : '-'}</td>
                <td>${formatDate(p.erstelltAm)}</td>
                <td>${buildTableActions(p)}</td>
                <td><a href="#/projekt/${p.id}" class="btn-icon" title="Bearbeiten">&#9998;</a></td>
            </tr>`;
        }).join('');
    }
}

// ==================== CHART HELPERS ====================
function renderUmsatzChart(projekte, now) {
    const container = document.getElementById('chart-umsatz');
    if (!container) return;
    const year = now.getFullYear();
    const monatNamen = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
    const monatUmsatz = new Array(12).fill(0);

    projekte.forEach(p => {
        if (!p.brutto || !['beauftragt', 'rechnung_gestellt', 'bezahlt', 'abgeschlossen'].includes(p.status)) return;
        const d = new Date(p.erstelltAm);
        if (d.getFullYear() === year) {
            monatUmsatz[d.getMonth()] += p.brutto;
        }
    });

    const maxVal = Math.max(...monatUmsatz, 1);

    let html = '<div class="chart-bars">';
    monatUmsatz.forEach((val, i) => {
        const pct = (val / maxVal) * 100;
        const isCurrentMonth = i === now.getMonth();
        const barColor = isCurrentMonth
            ? 'background: linear-gradient(180deg, #f59e0b, #d97706);'
            : 'background: linear-gradient(180deg, var(--accent), var(--wood-2));';
        html += `<div class="chart-bar-col">
            <span class="chart-bar-value">${val > 0 ? (val >= 1000 ? (val/1000).toFixed(1) + 'k' : Math.round(val)) : ''}</span>
            <div class="chart-bar" style="height:${Math.max(pct, 1)}%;${barColor}${isCurrentMonth ? 'box-shadow:0 0 12px rgba(245,158,11,0.4);' : ''}"></div>
            <span class="chart-bar-label">${monatNamen[i]}</span>
        </div>`;
    });
    html += '</div>';
    container.innerHTML = html;
}

function renderStatusDonut(projekte) {
    const container = document.getElementById('chart-status');
    if (!container) return;

    const counts = {
        entwurf: projekte.filter(p => p.status === 'entwurf').length,
        angeboten: projekte.filter(p => p.status === 'angeboten').length,
        beauftragt: projekte.filter(p => p.status === 'beauftragt').length,
        rechnung_gestellt: projekte.filter(p => p.status === 'rechnung_gestellt').length,
        bezahlt: projekte.filter(p => p.status === 'bezahlt').length,
        abgeschlossen: projekte.filter(p => p.status === 'abgeschlossen').length
    };
    const total = projekte.length || 1;
    const colors = { entwurf: '#94a3b8', angeboten: '#f59e0b', beauftragt: '#10b981', rechnung_gestellt: '#8e44ad', bezahlt: '#27ae60', abgeschlossen: '#3b82f6' };
    const labels = { entwurf: 'Entwurf', angeboten: 'Angeboten', beauftragt: 'Beauftragt', rechnung_gestellt: 'Rechnung gestellt', bezahlt: 'Bezahlt', abgeschlossen: 'Abgeschlossen' };

    const r = 60;
    const circumference = 2 * Math.PI * r;
    let offset = 0;
    let circles = '';

    for (const [key, count] of Object.entries(counts)) {
        const pct = count / total;
        const dashLen = pct * circumference;
        circles += `<circle cx="80" cy="80" r="${r}" stroke="${colors[key]}" stroke-dasharray="${dashLen} ${circumference - dashLen}" stroke-dashoffset="${-offset}" />`;
        offset += dashLen;
    }

    let legend = '<div class="chart-legend">';
    for (const [key, count] of Object.entries(counts)) {
        legend += `<div class="legend-item">
            <div class="legend-dot" style="background:${colors[key]}"></div>
            <span class="legend-label">${labels[key]}</span>
            <span class="legend-value">${count}</span>
        </div>`;
    }
    legend += '</div>';

    container.innerHTML = `
        <div class="donut-chart">
            <svg viewBox="0 0 160 160">${circles}</svg>
            <div class="donut-center">
                <div class="donut-center-value">${projekte.length}</div>
                <div class="donut-center-label">Projekte</div>
            </div>
        </div>
        ${legend}
    `;
}

function renderTopKunden(projekte, kunden) {
    const container = document.getElementById('chart-top-kunden');
    if (!container) return;

    const kundeUmsatz = {};
    projekte.forEach(p => {
        if (!p.kundeId || !p.brutto) return;
        kundeUmsatz[p.kundeId] = (kundeUmsatz[p.kundeId] || 0) + p.brutto;
    });

    const sorted = Object.entries(kundeUmsatz)
        .map(([id, umsatz]) => {
            const k = kunden.find(c => c.id === id);
            return { name: k ? ((k.vorname || '') + ' ' + (k.nachname || '')).trim() : 'Unbekannt', umsatz };
        })
        .sort((a, b) => b.umsatz - a.umsatz)
        .slice(0, 5);

    if (sorted.length === 0) {
        container.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-muted);font-style:italic">Noch keine Kundendaten</div>';
        return;
    }

    const maxUmsatz = sorted[0].umsatz || 1;
    const barColors = ['linear-gradient(90deg, #1e40af, #2563eb)', 'linear-gradient(90deg, #1e3a8a, #1e40af)', 'linear-gradient(90deg, #1e3a8a, #3b82f6)', 'linear-gradient(90deg, #172554, #1e3a8a)', 'linear-gradient(90deg, #172554, #1e40af)'];

    let html = '<div class="hbar-chart">';
    sorted.forEach((item, i) => {
        const pct = (item.umsatz / maxUmsatz) * 100;
        html += `<div class="hbar-item">
            <span class="hbar-label">${escapeHtml(item.name)}</span>
            <div class="hbar-track">
                <div class="hbar-fill" style="width:${pct}%;background:${barColors[i] || barColors[4]}">
                    <span class="hbar-fill-text">${formatCurrency(item.umsatz)}</span>
                </div>
            </div>
        </div>`;
    });
    html += '</div>';
    container.innerHTML = html;
}

function renderKostenDonut(projekte) {
    const container = document.getElementById('chart-kosten');
    if (!container) return;

    let totalMaterial = 0;
    let totalArbeit = 0;

    projekte.forEach(p => {
        if (!p.positionen) return;
        p.positionen.forEach(pos => {
            // Estimate from saved position data
            const katData = materialDaten[pos.kategorie];
            if (katData && katData.typen[pos.typ]) {
                const flaecheNetto = (pos.laenge / 1000) * (pos.breite / 1000) * (pos.anzahl || 1);
                totalMaterial += flaecheNetto * (1 + (pos.verschnitt || 15) / 100) * (katData.typen[pos.typ].basisPreis || 0);
            }
            if (pos.arbeitszeiten) {
                pos.arbeitszeiten.forEach(a => {
                    totalArbeit += (a.stundensatz || 0) * (a.stunden || 0);
                });
            }
        });
    });

    const total = totalMaterial + totalArbeit || 1;
    const matPct = totalMaterial / total;
    const arbPct = totalArbeit / total;

    const r = 60;
    const circ = 2 * Math.PI * r;
    const matDash = matPct * circ;
    const arbDash = arbPct * circ;

    container.innerHTML = `
        <div class="donut-chart">
            <svg viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="${r}" stroke="#2563eb" stroke-dasharray="${matDash} ${circ - matDash}" stroke-dashoffset="0" />
                <circle cx="80" cy="80" r="${r}" stroke="#1e3a8a" stroke-dasharray="${arbDash} ${circ - arbDash}" stroke-dashoffset="${-matDash}" />
            </svg>
            <div class="donut-center">
                <div class="donut-center-value">${Math.round(matPct * 100)}%</div>
                <div class="donut-center-label">Material</div>
            </div>
        </div>
        <div class="chart-legend">
            <div class="legend-item">
                <div class="legend-dot" style="background:#2563eb"></div>
                <span class="legend-label">Material</span>
                <span class="legend-value">${formatCurrency(totalMaterial)}</span>
            </div>
            <div class="legend-item">
                <div class="legend-dot" style="background:#1e3a8a"></div>
                <span class="legend-label">Arbeitszeit</span>
                <span class="legend-value">${formatCurrency(totalArbeit)}</span>
            </div>
        </div>
    `;
}

function statusLabel(s) {
    const map = { entwurf: 'Entwurf', angeboten: 'Angeboten', beauftragt: 'Beauftragt', in_produktion: 'In Produktion', rechnung_gestellt: 'Rechnung gestellt', bezahlt: 'Bezahlt', abgeschlossen: 'Abgeschlossen' };
    return map[s] || s;
}

function buildStatusInlineSelect(projektId, currentStatus) {
    const statuses = ['entwurf', 'angeboten', 'beauftragt', 'in_produktion', 'rechnung_gestellt', 'bezahlt', 'abgeschlossen'];
    const options = statuses.map(s =>
        `<option value="${s}" ${s === currentStatus ? 'selected' : ''}>${statusLabel(s)}</option>`
    ).join('');
    return `<select class="status-inline status-${currentStatus}" data-projekt-id="${projektId}">${options}</select>`;
}

async function handleInlineStatusChange(e) {
    const sel = e.target;
    if (!sel.classList.contains('status-inline')) return;
    const projektId = sel.dataset.projektId;
    const newStatus = sel.value;
    const projekt = await dbGet('projekte', projektId);
    if (!projekt) return;
    const oldStatus = projekt.status;

    // Smart transition: setting to rechnung_gestellt without invoice
    if (newStatus === 'rechnung_gestellt' && !projekt.rechnung) {
        const ok = await showConfirm('Rechnung erstellen', 'Für dieses Projekt existiert noch keine Rechnung. Soll automatisch eine Rechnung erstellt werden?', { okLabel: 'Erstellen', okClass: 'btn btn-primary btn-sm' });
        if (ok) {
            await createRechnungForProjekt(projekt);
            await renderProjekteListe();
            await renderKundenListe();
            await renderDashboard();
            return;
        } else {
            // Reset to old status
            sel.value = oldStatus;
            sel.className = 'status-inline status-' + oldStatus;
            return;
        }
    }

    // Smart transition: leaving beauftragt without invoice
    if (oldStatus === 'beauftragt' && !projekt.rechnung && !['entwurf', 'angeboten', 'beauftragt'].includes(newStatus)) {
        const ok = await showConfirm('Ohne Rechnung fortfahren?', 'Für dieses Projekt wurde noch keine Rechnung erstellt. Trotzdem den Status ändern?', { okLabel: 'Fortfahren', okClass: 'btn btn-primary btn-sm' });
        if (!ok) {
            sel.value = oldStatus;
            sel.className = 'status-inline status-' + oldStatus;
            return;
        }
    }

    projekt.status = newStatus;
    projekt.geaendertAm = new Date().toISOString();
    await dbPut('projekte', projekt);
    // Update select styling
    sel.className = 'status-inline status-' + newStatus;
    showToast('Status geändert: ' + statusLabel(newStatus));
    // Re-render to update action buttons
    await renderProjekteListe();
    await renderKundenListe();
    await renderDashboard();
}

// ==================== PROJEKTE LISTE ====================
let projekteViewMode = 'cards'; // 'cards' or 'table'

function filterProjekte(projekte, kunden, filterMonat) {
    const filterStatus = document.getElementById('filter-status').value;
    const filterKunde = document.getElementById('filter-kunde') ? document.getElementById('filter-kunde').value : '';
    const sucheInput = document.getElementById('projekte-suche');
    const suchbegriff = sucheInput ? sucheInput.value.trim().toLowerCase() : '';

    let filtered = projekte;
    if (filterStatus) filtered = filtered.filter(p => p.status === filterStatus);
    if (filterKunde) filtered = filtered.filter(p => p.kundeId === filterKunde);
    if (suchbegriff) {
        filtered = filtered.filter(p => {
            const kunde = kunden.find(k => k.id === p.kundeId);
            const kundeName = kunde ? ((kunde.vorname || '') + ' ' + (kunde.nachname || '') + ' ' + (kunde.firma || '')).trim() : '';
            const rechnungNr = (p.rechnung && p.rechnung.rechnungNr) ? p.rechnung.rechnungNr : '';
            const text = [p.titel, p.angebotNr, rechnungNr, kundeName].filter(Boolean).join(' ').toLowerCase();
            return text.includes(suchbegriff);
        });
    }
    if (filterMonat) {
        const now = new Date();
        filtered = filtered.filter(p => {
            const d = new Date(p.erstelltAm);
            return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
        });
    }
    const statusReihenfolge = { abgeschlossen: 0, bezahlt: 1, rechnung_gestellt: 2, beauftragt: 3, angeboten: 4, entwurf: 5 };
    return filtered.sort((a, b) => {
        const sDiff = (statusReihenfolge[a.status] ?? 9) - (statusReihenfolge[b.status] ?? 9);
        if (sDiff !== 0) return sDiff;
        return new Date(b.erstelltAm) - new Date(a.erstelltAm);
    });
}

function populateKundenFilter(kunden) {
    const sel = document.getElementById('filter-kunde');
    if (!sel) return;
    const current = sel.value;
    const opts = '<option value="">Alle Kunden</option>' + kunden
        .filter(k => k.nachname || k.firma)
        .sort((a, b) => (a.nachname || '').localeCompare(b.nachname || ''))
        .map(k => {
            const label = ((k.vorname || '') + ' ' + (k.nachname || '')).trim() + (k.firma ? ' (' + k.firma + ')' : '');
            return `<option value="${k.id}" ${k.id === current ? 'selected' : ''}>${escapeHtml(label)}</option>`;
        }).join('');
    sel.innerHTML = opts;
}

function buildDokumentChips(p) {
    let html = '';
    // Angebot chip
    if (p.angebotNr) {
        html += `<span class="chip-angebot">Angebot ${escapeHtml(p.angebotNr)}`;
        if (p.brutto) {
            html += ` <button class="chip-action" data-angebot-pdf="${p.id}" title="Angebot PDF">PDF</button>`;
        }
        html += '</span>';
    }
    // Rechnung chip
    const st = p.status;
    if (st === 'beauftragt' && !p.rechnung) {
        html += `<button class="chip-action chip-action-create" data-create-rechnung="${p.id}">Rechnung erstellen</button>`;
    } else if (p.rechnung) {
        const r = p.rechnung;
        const bezahlt = r.bezahltAm;
        html += `<span class="chip-rechnung ${bezahlt ? 'chip-bezahlt' : ''}">`;
        html += bezahlt ? '&#10003; ' : '';
        html += `RE ${escapeHtml(r.rechnungNr || '')}`;
        if (r.faelligDatum && !bezahlt) html += ` (fällig ${formatDate(r.faelligDatum)})`;
        if (bezahlt) html += ` (${formatCurrency(r.bezahltBetrag)})`;
        html += ` <button class="chip-action" data-rechnung-pdf="${p.id}" title="Rechnung PDF">PDF</button>`;
        if (!bezahlt) {
            html += ` <button class="chip-action chip-action-payment" data-zahlung-verbuchen="${p.id}">Zahlung</button>`;
        }
        html += '</span>';
    }
    return html;
}

function buildCardFooterActions(p) {
    let html = '';
    if (p.brutto) {
        html += `<button class="btn-card-action" data-angebot-pdf="${p.id}" title="Angebot PDF">&#128196; A-PDF</button>`;
    }
    if (p.status === 'beauftragt' && !p.rechnung) {
        html += `<button class="btn-card-action-create" data-create-rechnung="${p.id}">&#128203; Rechnung erstellen</button>`;
    }
    if (p.rechnung) {
        html += `<button class="btn-card-action" data-rechnung-pdf="${p.id}" title="Rechnung PDF">&#128196; R-PDF</button>`;
    }
    if (p.rechnung && !p.rechnung.bezahltAm) {
        html += `<button class="btn-card-action-payment" data-zahlung-verbuchen="${p.id}">&#128176; Zahlung</button>`;
    }
    return html;
}

function buildTableActions(p) {
    let html = '<span class="td-actions">';
    if (p.brutto) {
        html += `<button class="chip-action" data-angebot-pdf="${p.id}" title="Angebot PDF">A-PDF</button>`;
    }
    if (p.status === 'beauftragt' && !p.rechnung) {
        html += `<button class="chip-action chip-action-create" data-create-rechnung="${p.id}">+RE</button>`;
    }
    if (p.rechnung) {
        html += `<button class="chip-action" data-rechnung-pdf="${p.id}" title="Rechnung PDF">R-PDF</button>`;
    }
    if (p.rechnung && !p.rechnung.bezahltAm) {
        html += `<button class="chip-action chip-action-payment" data-zahlung-verbuchen="${p.id}">Zahlung</button>`;
    }
    html += '</span>';
    return html;
}


function renderProjektCard(p, kunde) {
    const kundeName = kunde ? ((kunde.vorname || '') + ' ' + (kunde.nachname || '')).trim() : '';
    const firmaLabel = kunde && kunde.firma ? ' (' + escapeHtml(kunde.firma) + ')' : '';
    return `<div class="projekt-card status-${p.status}">
        <div class="projekt-card-header">
            <div class="projekt-card-header-left">
                <div class="projekt-card-title"><a href="#/projekt/${p.id}">${escapeHtml(p.titel)}</a></div>
            </div>
            <div class="projekt-card-header-right">
                ${buildStatusInlineSelect(p.id, p.status)}
                <span class="projekt-card-betrag">${p.brutto ? formatCurrency(p.brutto) : '-'}</span>
            </div>
        </div>
        <div class="projekt-card-meta">
            ${kundeName ? `<span>&#128100; ${escapeHtml(kundeName)}${firmaLabel}</span>` : ''}
            <span>&#128197; ${formatDate(p.erstelltAm)}</span>
            ${p.angebotNr ? `<span>&#128196; ${escapeHtml(p.angebotNr)}</span>` : ''}
        </div>
        <div class="projekt-card-footer">
            <div class="card-footer-actions">${buildCardFooterActions(p)}</div>
            <div class="card-footer-right">
                <a href="#/projekt/${p.id}" class="btn-icon" title="Bearbeiten">&#9998;</a>
                <button class="btn-icon btn-icon-delete" title="Löschen" data-delete-projekt="${p.id}">&#128465;</button>
            </div>
        </div>
    </div>`;
}

async function renderProjekteListe(filterMonat) {
    const projekte = await dbGetAll('projekte');
    const kunden = await dbGetAll('kunden');
    populateKundenFilter(kunden);
    const sorted = filterProjekte(projekte, kunden, filterMonat);

    // Cards view
    const cardsContainer = document.getElementById('projekte-cards-container');
    if (cardsContainer) {
        if (sorted.length === 0) {
            cardsContainer.innerHTML = '<div class="empty-cards-message">Keine Projekte gefunden.</div>';
        } else {
            cardsContainer.innerHTML = sorted.map(p => {
                const kunde = kunden.find(k => k.id === p.kundeId);
                return renderProjektCard(p, kunde);
            }).join('');
        }
    }

    // Table view
    const tbody = document.getElementById('projekte-liste-body');
    if (tbody) {
        if (sorted.length === 0) {
            tbody.innerHTML = '<tr class="empty-row"><td colspan="8">Keine Projekte gefunden.</td></tr>';
        } else {
            tbody.innerHTML = sorted.map(p => {
                const kunde = kunden.find(k => k.id === p.kundeId);
                const kundeName = kunde ? ((kunde.vorname || '') + ' ' + (kunde.nachname || '')).trim() : '-';
                return `<tr>
                    <td>${escapeHtml(p.angebotNr || '-')}</td>
                    <td><a href="#/projekt/${p.id}" class="table-link">${escapeHtml(p.titel)}</a></td>
                    <td>${escapeHtml(kundeName)}</td>
                    <td>${buildStatusInlineSelect(p.id, p.status)}</td>
                    <td>${p.brutto ? formatCurrency(p.brutto) : '-'}</td>
                    <td>${formatDate(p.erstelltAm)}</td>
                    <td>${buildTableActions(p)}</td>
                    <td>
                        <a href="#/projekt/${p.id}" class="btn-icon" title="Bearbeiten">&#9998;</a>
                        <button class="btn-icon btn-icon-danger" title="Löschen" data-delete-projekt="${p.id}">&#128465;</button>
                    </td>
                </tr>`;
            }).join('');
        }
    }
}

function switchProjekteView(mode) {
    projekteViewMode = mode;
    const cardsC = document.getElementById('projekte-cards-container');
    const tableC = document.getElementById('projekte-table-container');
    const btnCards = document.getElementById('projekte-view-cards');
    const btnTable = document.getElementById('projekte-view-table');
    if (mode === 'cards') {
        if (cardsC) cardsC.classList.remove('hidden');
        if (tableC) tableC.classList.add('hidden');
        if (btnCards) btnCards.classList.add('active');
        if (btnTable) btnTable.classList.remove('active');
    } else {
        if (cardsC) cardsC.classList.add('hidden');
        if (tableC) tableC.classList.remove('hidden');
        if (btnCards) btnCards.classList.remove('active');
        if (btnTable) btnTable.classList.add('active');
    }
}

// Helper: Create invoice for a project (reusable)
async function createRechnungForProjekt(projekt) {
    const now = new Date();
    const zahlungsziel = await getSetting('standardZahlungsziel', 30);

    // Rechnungsnummer: RE-JJJJ-KKK-PP (gleiche Kunden/Projekt-Zuordnung wie Angebot)
    let rechnungNr;
    if (projekt.angebotNr && projekt.angebotNr.startsWith('AG-')) {
        // Aus Angebotsnummer ableiten: AG-2026-003-02 → RE-2026-003-02
        rechnungNr = 'RE-' + projekt.angebotNr.substring(3);
    } else {
        rechnungNr = await generateDokumentNr('RE-', projekt.kundeId, projekt.id);
    }

    const faelligDatum = new Date(now.getTime() + zahlungsziel * 86400000).toISOString().split('T')[0];
    projekt.rechnung = { rechnungNr, rechnungDatum: now.toISOString().split('T')[0], faelligDatum, bezahltAm: null, bezahltBetrag: null };
    projekt.status = 'rechnung_gestellt';
    projekt.geaendertAm = now.toISOString();
    await dbPut('projekte', projekt);
    showToast('Rechnung ' + rechnungNr + ' erstellt');
    await generateRechnungPDF(projekt);
    return projekt;
}

// Shared handler for card action buttons (Rechnung erstellen, PDF, Zahlung)
async function handleCardActions(e) {
    // Rechnung erstellen from card
    const createBtn = e.target.closest('[data-create-rechnung]');
    if (createBtn) {
        const projektId = createBtn.dataset.createRechnung;
        const ok = await showConfirm('Rechnung erstellen', 'Soll für dieses Projekt eine Rechnung erstellt werden?', { okLabel: 'Erstellen', okClass: 'btn btn-primary btn-sm' });
        if (!ok) return;
        const projekt = await dbGet('projekte', projektId);
        if (!projekt) return;
        await createRechnungForProjekt(projekt);
        await renderProjekteListe();
        await renderKundenListe();
        await renderDashboard();
        return;
    }

    // Angebot PDF from card
    const angebotPdfBtn = e.target.closest('[data-angebot-pdf]');
    if (angebotPdfBtn) {
        const projektId = angebotPdfBtn.dataset.angebotPdf;
        // Navigate to project editor to generate PDF (requires full calculation context)
        window.location.hash = '#/projekt/' + projektId;
        showToast('Projekt wird geöffnet - bitte PDF dort generieren');
        return;
    }

    // Rechnung PDF from card
    const rechnungPdfBtn = e.target.closest('[data-rechnung-pdf]');
    if (rechnungPdfBtn) {
        const projektId = rechnungPdfBtn.dataset.rechnungPdf;
        const projekt = await dbGet('projekte', projektId);
        if (projekt && projekt.rechnung) {
            await generateRechnungPDF(projekt);
        } else {
            showToast('Keine Rechnungsdaten vorhanden', 'warning');
        }
        return;
    }

    // Zahlung verbuchen from card
    const zahlungBtn = e.target.closest('[data-zahlung-verbuchen]');
    if (zahlungBtn) {
        const projektId = zahlungBtn.dataset.zahlungVerbuchen;
        // Set currentProjektId temporarily so openZahlungModal works
        const prevId = currentProjektId;
        currentProjektId = projektId;
        await openZahlungModal();
        // After modal close, the verbucheZahlung will handle the rest
        // We restore after a small delay - the modal sets it back
        return;
    }
}

// ==================== KUNDEN DRINGLICHKEIT ====================
function getKundeDringlichkeit(kundenProjekte) {
    const heute = new Date();
    heute.setHours(0, 0, 0, 0);
    let fruehesteFaelligkeit = null;

    for (const p of kundenProjekte) {
        if (p.status === 'rechnung_gestellt' && p.rechnung && !p.rechnung.bezahltAm && p.rechnung.faelligDatum) {
            const fd = new Date(p.rechnung.faelligDatum);
            if (!fruehesteFaelligkeit || fd < fruehesteFaelligkeit) {
                fruehesteFaelligkeit = fd;
            }
        }
    }

    if (!fruehesteFaelligkeit) {
        return { level: 'none', score: 3, tageBisFaellig: null };
    }

    const diffMs = fruehesteFaelligkeit.getTime() - heute.getTime();
    const tageBisFaellig = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (tageBisFaellig < 0) {
        return { level: 'overdue', score: 0, tageBisFaellig };
    } else if (tageBisFaellig <= 7) {
        return { level: 'urgent', score: 1, tageBisFaellig };
    } else {
        return { level: 'open', score: 2, tageBisFaellig };
    }
}

// ==================== KUNDEN LISTE ====================
let kundenViewMode = 'cards';

function switchKundenView(mode) {
    kundenViewMode = mode;
    const cardsC = document.getElementById('kunden-cards-container');
    const tableC = document.getElementById('kunden-table-container');
    const btnCards = document.getElementById('kunden-view-cards');
    const btnTable = document.getElementById('kunden-view-table');
    if (mode === 'cards') {
        if (cardsC) cardsC.classList.remove('hidden');
        if (tableC) tableC.classList.add('hidden');
        if (btnCards) btnCards.classList.add('active');
        if (btnTable) btnTable.classList.remove('active');
    } else {
        if (cardsC) cardsC.classList.add('hidden');
        if (tableC) tableC.classList.remove('hidden');
        if (btnCards) btnCards.classList.remove('active');
        if (btnTable) btnTable.classList.add('active');
    }
}

async function renderKundenListe() {
    const kunden = await dbGetAll('kunden');
    const projekte = await dbGetAll('projekte');
    const searchInput = document.getElementById('kunden-suche');
    const suchbegriff = searchInput ? searchInput.value.trim().toLowerCase() : '';

    let filtered = kunden;
    if (suchbegriff) {
        filtered = kunden.filter(k => {
            const text = [k.kundenNr, k.vorname, k.nachname, k.firma, k.ort, k.email, k.telefon, k.strasse].filter(Boolean).join(' ').toLowerCase();
            return text.includes(suchbegriff);
        });
    }
    // Dringlichkeit pro Kunde berechnen
    const kundenMitDringlichkeit = filtered.map(k => {
        const kundenProjekte = projekte.filter(p => p.kundeId === k.id);
        return { kunde: k, kundenProjekte, dringlichkeit: getKundeDringlichkeit(kundenProjekte) };
    });

    // Sortierung: erst nach Dringlichkeits-Score, dann alphabetisch
    kundenMitDringlichkeit.sort((a, b) => {
        const scoreDiff = a.dringlichkeit.score - b.dringlichkeit.score;
        if (scoreDiff !== 0) return scoreDiff;
        return (a.kunde.nachname || '').localeCompare(b.kunde.nachname || '');
    });

    // Cards View
    const container = document.getElementById('kunden-cards-container');
    if (container) {
        if (kundenMitDringlichkeit.length === 0) {
            container.innerHTML = '<div class="empty-cards-message">' + (suchbegriff ? 'Keine Kunden gefunden für "' + escapeHtml(suchbegriff) + '"' : 'Noch keine Kunden vorhanden.') + '</div>';
        } else {
            container.innerHTML = kundenMitDringlichkeit.map(({ kunde, kundenProjekte, dringlichkeit }) => {
                return renderKundeCard(kunde, kundenProjekte, dringlichkeit);
            }).join('');
        }
    }

    // Table View
    const tbody = document.getElementById('kunden-liste-body');
    if (tbody) {
        if (kundenMitDringlichkeit.length === 0) {
            tbody.innerHTML = '<tr class="empty-row"><td colspan="9">' + (suchbegriff ? 'Keine Kunden gefunden für "' + escapeHtml(suchbegriff) + '"' : 'Noch keine Kunden vorhanden.') + '</td></tr>';
        } else {
            tbody.innerHTML = kundenMitDringlichkeit.map(({ kunde, kundenProjekte, dringlichkeit }) => {
                return renderKundeTableRow(kunde, kundenProjekte, dringlichkeit);
            }).join('');
        }
    }
}

function renderKundeTableRow(k, kundenProjekte, dringlichkeit) {
    const name = ((k.vorname || '') + ' ' + (k.nachname || '')).trim() || 'Unbenannt';
    const anzahlProjekte = kundenProjekte.length;
    const bezahlt = kundenProjekte.filter(p => p.rechnung && p.rechnung.bezahltAm);
    const gesamtumsatz = bezahlt.reduce((s, p) => s + (p.rechnung.bezahltBetrag || p.brutto || 0), 0);
    const offeneRechnungen = kundenProjekte.filter(p => p.status === 'rechnung_gestellt' && p.rechnung && !p.rechnung.bezahltAm);
    const urgencyClass = dringlichkeit.level === 'overdue' ? ' row-overdue' : (dringlichkeit.level === 'urgent' ? ' row-urgent' : '');

    return `<tr class="kunden-table-row${urgencyClass}" data-kunde-id="${k.id}">
        <td><span class="kunde-table-nr">${escapeHtml(k.kundenNr || '-')}</span></td>
        <td><strong>${escapeHtml(name)}</strong></td>
        <td>${escapeHtml(k.firma || '-')}</td>
        <td>${escapeHtml(k.ort || '-')}</td>
        <td>${k.telefon ? '<a href="tel:' + escapeHtml(k.telefon) + '">' + escapeHtml(k.telefon) + '</a>' : '-'}</td>
        <td>${k.email ? '<a href="mailto:' + escapeHtml(k.email) + '">' + escapeHtml(k.email) + '</a>' : '-'}</td>
        <td style="text-align:center">${anzahlProjekte}${offeneRechnungen.length > 0 ? ' <span style="color:var(--danger);font-weight:600" title="' + offeneRechnungen.length + ' offene Rechnung(en)">(' + offeneRechnungen.length + ' RE)</span>' : ''}</td>
        <td style="text-align:right;font-weight:600">${gesamtumsatz > 0 ? formatCurrency(gesamtumsatz) : '-'}</td>
        <td>
            <div style="display:flex;gap:4px;justify-content:flex-end">
                <a href="#/projekt/neu?kunde=${k.id}" class="btn-xs btn-xs-primary" title="Neues Projekt">+ Projekt</a>
                <button class="btn-xs btn-xs-secondary" data-edit-kunde="${k.id}" title="Bearbeiten">Bearb.</button>
                <button class="btn-xs btn-xs-danger" data-delete-kunde="${k.id}" title="Löschen">Lösch.</button>
            </div>
        </td>
    </tr>`;
}

function renderKundeCard(k, kundenProjekte, dringlichkeit) {
    dringlichkeit = dringlichkeit || getKundeDringlichkeit(kundenProjekte);
    const name = ((k.anrede ? k.anrede + ' ' : '') + (k.vorname || '') + ' ' + (k.nachname || '')).trim();
    const adresse = [k.strasse, (k.plz || '') + ' ' + (k.ort || '')].filter(s => s && s.trim()).join(', ');

    // KPIs
    const anzahlProjekte = kundenProjekte.length;
    const offeneAngebote = kundenProjekte.filter(p => ['entwurf', 'angeboten'].includes(p.status));
    const offeneAngeboteSumme = offeneAngebote.reduce((s, p) => s + (p.brutto || 0), 0);
    const offeneRechnungen = kundenProjekte.filter(p => p.status === 'rechnung_gestellt' && p.rechnung && !p.rechnung.bezahltAm);
    const offeneRechnungenSumme = offeneRechnungen.reduce((s, p) => s + (p.brutto || 0), 0);
    const bezahlt = kundenProjekte.filter(p => p.rechnung && p.rechnung.bezahltAm);
    const gesamtumsatz = bezahlt.reduce((s, p) => s + (p.rechnung.bezahltBetrag || p.brutto || 0), 0);

    // Project rows
    let projektRows = '';
    if (kundenProjekte.length > 0) {
        const statusReihenfolge = { abgeschlossen: 0, bezahlt: 1, rechnung_gestellt: 2, beauftragt: 3, angeboten: 4, entwurf: 5 };
        projektRows = kundenProjekte
            .sort((a, b) => (statusReihenfolge[a.status] ?? 9) - (statusReihenfolge[b.status] ?? 9))
            .map(p => {
                const rNr = p.rechnung ? p.rechnung.rechnungNr : '';
                return `<div class="kunde-projekt-row">
                    <span class="kunde-projekt-title"><a href="#/projekt/${p.id}">${escapeHtml(p.titel)}</a></span>
                    <span class="kunde-projekt-anr">${escapeHtml(p.angebotNr || '-')}</span>
                    ${buildStatusInlineSelect(p.id, p.status)}
                    <span class="kunde-projekt-betrag">${p.brutto ? formatCurrency(p.brutto) : '-'}</span>
                    <span class="kunde-projekt-actions">
                        ${p.brutto ? `<button class="chip-action" data-angebot-pdf="${p.id}" title="Angebot PDF">A-PDF</button>` : ''}
                        ${p.rechnung ? `<button class="chip-action" data-rechnung-pdf="${p.id}" title="Rechnung PDF">R-PDF</button>` : ''}
                        ${p.status === 'beauftragt' && !p.rechnung ? `<button class="chip-action chip-action-create" data-create-rechnung="${p.id}">RE erstellen</button>` : ''}
                        ${p.rechnung && !p.rechnung.bezahltAm ? `<button class="chip-action chip-action-payment" data-zahlung-verbuchen="${p.id}">Zahlung</button>` : ''}
                    </span>
                </div>`;
            }).join('');
    } else {
        projektRows = '<div style="padding:8px 0;color:var(--text-muted);font-size:0.82rem;font-style:italic">Keine Projekte</div>';
    }

    // Dringlichkeits-Badge
    let dringlichkeitBadge = '';
    if (dringlichkeit.level === 'overdue') {
        dringlichkeitBadge = `<span class="kunde-card-badge-urgency kunde-badge-overdue">\u26A0 Überfällig seit ${Math.abs(dringlichkeit.tageBisFaellig)} Tagen</span>`;
    } else if (dringlichkeit.level === 'urgent') {
        dringlichkeitBadge = `<span class="kunde-card-badge-urgency kunde-badge-urgent">\u23F0 Fällig in ${dringlichkeit.tageBisFaellig} Tagen</span>`;
    }

    // KPI-Klasse für offene RE
    const offeneReKpiClass = dringlichkeit.level === 'overdue' ? ' kunde-kpi-danger' : (dringlichkeit.level === 'urgent' ? ' kunde-kpi-warning' : '');

    return `<div class="kunde-card" data-kunde-id="${k.id}" data-urgency="${dringlichkeit.level}">
        <div class="kunde-card-header">
            <span class="kunde-card-name">${escapeHtml(name || 'Unbenannt')}</span>
            <span class="kunde-card-badges">
                ${k.kundenNr ? `<span class="kunde-card-badge-nr">${escapeHtml(k.kundenNr)}</span>` : ''}
                ${k.firma ? `<span class="kunde-card-badge-firma">${escapeHtml(k.firma)}</span>` : ''}
                ${dringlichkeitBadge}
            </span>
        </div>
        <div class="kunde-card-contact">
            ${adresse ? `<span>&#127968; ${escapeHtml(adresse)}</span>` : ''}
            ${k.telefon ? `<span>&#128222; <a href="tel:${escapeHtml(k.telefon)}">${escapeHtml(k.telefon)}</a></span>` : ''}
            ${k.email ? `<span>&#9993; <a href="mailto:${escapeHtml(k.email)}">${escapeHtml(k.email)}</a></span>` : ''}
        </div>
        <div class="kunde-card-kpis">
            <div class="kunde-kpi"><div class="kunde-kpi-value">${anzahlProjekte}</div><div class="kunde-kpi-label">Projekte</div></div>
            <div class="kunde-kpi"><div class="kunde-kpi-value">${offeneAngeboteSumme > 0 ? formatCurrency(offeneAngeboteSumme) : '-'}</div><div class="kunde-kpi-label">Offene Ang.</div></div>
            <div class="kunde-kpi${offeneReKpiClass}"><div class="kunde-kpi-value">${offeneRechnungenSumme > 0 ? formatCurrency(offeneRechnungenSumme) : '-'}</div><div class="kunde-kpi-label">Offene RE</div></div>
            <div class="kunde-kpi"><div class="kunde-kpi-value">${gesamtumsatz > 0 ? formatCurrency(gesamtumsatz) : '-'}</div><div class="kunde-kpi-label">Umsatz</div></div>
        </div>
        <div class="kunde-card-projekte">
            <button class="kunde-projekte-toggle" data-toggle-projekte="${k.id}">
                Projekte (${anzahlProjekte}) <span class="toggle-arrow">&#9660;</span>
            </button>
            <div class="kunde-projekte-list" id="kunde-projekte-${k.id}">
                ${projektRows}
            </div>
        </div>
        <div class="kunde-card-footer">
            <a href="#/projekt/neu?kunde=${k.id}" class="btn-xs btn-xs-primary">+ Projekt</a>
            <button class="btn-xs btn-xs-secondary" data-edit-kunde="${k.id}">Bearbeiten</button>
            <button class="btn-xs btn-xs-danger" data-delete-kunde="${k.id}">Löschen</button>
        </div>
    </div>`;
}

// ==================== KUNDEN MODAL ====================
function openKundeModal(kunde) {
    const modal = document.getElementById('modal-kunde');
    document.getElementById('modal-kunde-title').textContent = kunde ? 'Kunde bearbeiten' : 'Neuer Kunde';
    document.getElementById('kunde-id').value = kunde ? kunde.id : '';
    document.getElementById('kunde-anrede').value = kunde ? (kunde.anrede || '') : '';
    document.getElementById('kunde-firma').value = kunde ? (kunde.firma || '') : '';
    document.getElementById('kunde-vorname').value = kunde ? (kunde.vorname || '') : '';
    document.getElementById('kunde-nachname').value = kunde ? (kunde.nachname || '') : '';
    document.getElementById('kunde-strasse').value = kunde ? (kunde.strasse || '') : '';
    document.getElementById('kunde-plz').value = kunde ? (kunde.plz || '') : '';
    document.getElementById('kunde-ort').value = kunde ? (kunde.ort || '') : '';
    document.getElementById('kunde-telefon').value = kunde ? (kunde.telefon || '') : '';
    document.getElementById('kunde-email').value = kunde ? (kunde.email || '') : '';
    document.getElementById('kunde-notizen').value = kunde ? (kunde.notizen || '') : '';
    clearFieldErrors('kunde-form');
    modal.classList.remove('hidden');
}

function closeKundeModal() {
    document.getElementById('modal-kunde').classList.add('hidden');
}

async function saveKunde() {
    const vorname = document.getElementById('kunde-vorname').value.trim();
    const nachname = document.getElementById('kunde-nachname').value.trim();

    // Validate
    let valid = true;
    clearFieldErrors('kunde-form');
    if (!vorname) { showFieldError('err-kunde-vorname', 'Bitte Vorname eingeben'); valid = false; }
    if (!nachname) { showFieldError('err-kunde-nachname', 'Bitte Nachname eingeben'); valid = false; }
    if (!valid) return;

    const existingId = document.getElementById('kunde-id').value;

    // Auto-generate Kundennummer for new customers
    let kundenNr = '';
    if (!existingId) {
        const prefix = await getSetting('kundenNrPrefix', 'KD-');
        const counter = await getSetting('kundenNrCounter', 1);
        kundenNr = prefix + String(counter).padStart(4, '0');
        await setSetting('kundenNrCounter', counter + 1);
    }

    const kunde = {
        id: existingId || generateId(),
        kundenNr: kundenNr || undefined,
        anrede: document.getElementById('kunde-anrede').value,
        firma: document.getElementById('kunde-firma').value.trim(),
        vorname,
        nachname,
        strasse: document.getElementById('kunde-strasse').value.trim(),
        plz: document.getElementById('kunde-plz').value.trim(),
        ort: document.getElementById('kunde-ort').value.trim(),
        telefon: document.getElementById('kunde-telefon').value.trim(),
        email: document.getElementById('kunde-email').value.trim(),
        notizen: document.getElementById('kunde-notizen').value.trim(),
        erstelltAm: existingId ? undefined : new Date().toISOString()
    };

    if (existingId) {
        const existing = await dbGet('kunden', existingId);
        if (existing) {
            kunde.erstelltAm = existing.erstelltAm;
            kunde.kundenNr = existing.kundenNr || '';
        }
    }

    await dbPut('kunden', kunde);
    closeKundeModal();
    showToast(existingId ? 'Kunde aktualisiert' : 'Kunde angelegt');

    // Refresh current view
    const hash = window.location.hash;
    if (hash.includes('kunden')) await renderKundenListe();
    if (hash.includes('dashboard')) await renderDashboard();
    // Refresh kunde dropdown if in editor
    if (hash.includes('projekt')) await refreshKundeDropdown();
}

// ==================== VALIDATION HELPERS ====================
function showFieldError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
}

function clearFieldErrors(formId) {
    const form = document.getElementById(formId);
    if (form) form.querySelectorAll('.field-error').forEach(el => el.textContent = '');
}

// ==================== PROJEKT EDITOR ====================
let positionCounter = 0;

async function refreshKundeDropdown() {
    const kunden = await dbGetAll('kunden');
    const select = document.getElementById('proj-kunde');
    const currentVal = select.value;
    select.innerHTML = '<option value="">-- Kein Kunde --</option>';
    kunden.sort((a, b) => (a.nachname || '').localeCompare(b.nachname || '')).forEach(k => {
        const name = ((k.vorname || '') + ' ' + (k.nachname || '')).trim() + (k.firma ? ' (' + k.firma + ')' : '');
        const opt = document.createElement('option');
        opt.value = k.id;
        opt.textContent = name;
        select.appendChild(opt);
    });
    if (currentVal) select.value = currentVal;
}

async function fillKundeDetails(kundeId) {
    if (!kundeId) return;
    const adressFeld = document.getElementById('proj-objekt-adresse');
    if (adressFeld.value.trim()) return; // Nicht überschreiben wenn schon befüllt
    const kunde = await dbGet('kunden', kundeId);
    if (!kunde) return;
    const parts = [kunde.strasse, (kunde.plz ? kunde.plz + ' ' : '') + (kunde.ort || '')].filter(s => s && s.trim());
    if (parts.length > 0) {
        adressFeld.value = parts.join(', ');
    }
}

async function initProjektEditor(projekt) {
    document.getElementById('projekt-editor-title').textContent = projekt ? 'Projekt bearbeiten' : 'Neues Projekt';
    document.getElementById('ergebnis').classList.add('hidden');
    document.getElementById('ergebnis-actions').classList.add('hidden');

    // Reset to Angebot tab
    switchEditorTab('angebot');
    document.getElementById('rechnung-positionen-container').innerHTML = '';
    document.getElementById('rechnung-ergebnis').classList.add('hidden');
    letzteRechnungsBerechnung = null;

    await refreshKundeDropdown();

    // Load default KLR surcharges from settings
    const stdMgk = await getSetting('standardKLR_mgk', 10);
    const stdFgk = await getSetting('standardKLR_fgk', 120);
    const stdVwgk = await getSetting('standardKLR_vwgk', 10);
    const stdVtgk = await getSetting('standardKLR_vtgk', 8);
    const stdWug = await getSetting('standardKLR_wug', 15);
    const stdSkontoProzent = await getSetting('standardSkontoProzent', 2);
    const stdSkontoTage = await getSetting('standardSkontoTage', 10);

    // Projekttitel-Überschrift sync
    const schraenkeTitelEl = document.getElementById('schraenke-titel');

    if (projekt) {
        document.getElementById('proj-titel').value = projekt.titel || '';
        schraenkeTitelEl.textContent = projekt.titel || '';
        schraenkeTitelEl.classList.toggle('hidden', !projekt.titel);
        document.getElementById('proj-kunde').value = projekt.kundeId || '';
        document.getElementById('proj-status').value = projekt.status || 'entwurf';
        document.getElementById('proj-angebot-nr').value = projekt.angebotNr || '';
        document.getElementById('proj-objekt-adresse').value = projekt.objektAdresse || '';
        document.getElementById('proj-notizen').value = projekt.notizen || '';
        document.getElementById('proj-leistungszeitraum').value = projekt.leistungszeitraum || '';

        const z = projekt.zuschlaege || {};
        document.getElementById('z-mgk').value = z.mgk != null ? z.mgk : stdMgk;
        document.getElementById('z-fgk').value = z.fgk != null ? z.fgk : stdFgk;
        document.getElementById('z-vwgk').value = z.vwgk != null ? z.vwgk : stdVwgk;
        document.getElementById('z-vtgk').value = z.vtgk != null ? z.vtgk : stdVtgk;
        document.getElementById('z-wug').value = z.wug != null ? z.wug : stdWug;
        setRabattCombo(z.rabatt || 0);
        document.getElementById('z-skonto-prozent').value = z.skontoProzent != null ? z.skontoProzent : stdSkontoProzent;
        document.getElementById('z-skonto-tage').value = z.skontoTage != null ? z.skontoTage : stdSkontoTage;

        const m = projekt.montage || {};
        document.getElementById('proj-anfahrtpauschale').value = m.anfahrtpauschale || m.anfahrtKm * 2 * (m.kmSatz || 0.45) || 0;
        document.getElementById('proj-gebrauchsmittel').value = m.gebrauchsmittel || 0;
        document.getElementById('proj-montage-personal-container').innerHTML = '';
        if (m.personal && m.personal.length > 0) {
            m.personal.forEach(p => addMontageWorkerRow('proj-montage-personal-container', p));
        } else {
            addMontageWorkerRow('proj-montage-personal-container');
        }

        // Rebuild schraenke
        document.getElementById('schraenke-container').innerHTML = '';
        schrankCounter = 0;
        if (projekt.schraenke && projekt.schraenke.length > 0) {
            projekt.schraenke.forEach(s => addSchrankBlock(s));
        } else if (projekt.positionen && projekt.positionen.length > 0) {
            // Legacy conversion: alte Positionen als Schränke laden
            projekt.positionen.forEach(pos => addSchrankBlock(convertLegacyPosition(pos)));
        } else {
            addSchrankBlock();
        }

        // Global Arbeitszeit
        const globalArbeitContainer = document.getElementById('global-arbeitszeit-container');
        if (globalArbeitContainer) {
            globalArbeitContainer.innerHTML = '';
            if (projekt.arbeitszeiten && projekt.arbeitszeiten.length > 0) {
                projekt.arbeitszeiten.forEach(a => {
                    globalArbeitContainer.insertAdjacentHTML('beforeend', buildArbeitszeitRow(a));
                });
            } else if (projekt.positionen && projekt.positionen.length > 0) {
                // Legacy: sammle Arbeitszeiten aus alten Positionen
                const allAz = [];
                projekt.positionen.forEach(pos => {
                    if (pos.arbeitszeiten) allAz.push(...pos.arbeitszeiten);
                });
                if (allAz.length > 0) {
                    allAz.forEach(a => globalArbeitContainer.insertAdjacentHTML('beforeend', buildArbeitszeitRow(a)));
                } else {
                    globalArbeitContainer.insertAdjacentHTML('beforeend', buildArbeitszeitRow());
                }
            } else {
                globalArbeitContainer.insertAdjacentHTML('beforeend', buildArbeitszeitRow());
            }
            bindMitarbeiterSelects(globalArbeitContainer);
        }

        // Legacy positions for Rechnung-Tab reference
        document.getElementById('positionen-container').innerHTML = '';
        positionCounter = 0;
    } else {
        document.getElementById('proj-titel').value = '';
        schraenkeTitelEl.textContent = '';
        schraenkeTitelEl.classList.add('hidden');
        document.getElementById('proj-kunde').value = '';
        document.getElementById('proj-status').value = 'entwurf';
        document.getElementById('proj-objekt-adresse').value = '';
        document.getElementById('proj-notizen').value = '';
        document.getElementById('proj-leistungszeitraum').value = '';

        // Generate Angebotsnummer: AG-JJJJ-KKK-PP
        document.getElementById('proj-angebot-nr').value = '(wird beim Speichern vergeben)';

        document.getElementById('z-mgk').value = stdMgk;
        document.getElementById('z-fgk').value = stdFgk;
        document.getElementById('z-vwgk').value = stdVwgk;
        document.getElementById('z-vtgk').value = stdVtgk;
        document.getElementById('z-wug').value = stdWug;
        setRabattCombo(0);
        document.getElementById('z-skonto-prozent').value = stdSkontoProzent;
        document.getElementById('z-skonto-tage').value = stdSkontoTage;

        document.getElementById('proj-anfahrtpauschale').value = 0;
        document.getElementById('proj-gebrauchsmittel').value = 0;
        document.getElementById('proj-montage-personal-container').innerHTML = '';
        addMontageWorkerRow('proj-montage-personal-container');

        // Schraenke
        document.getElementById('schraenke-container').innerHTML = '';
        schrankCounter = 0;
        addSchrankBlock();

        // Global Arbeitszeit
        const globalArbeitContainer = document.getElementById('global-arbeitszeit-container');
        if (globalArbeitContainer) {
            globalArbeitContainer.innerHTML = '';
            globalArbeitContainer.insertAdjacentHTML('beforeend', buildArbeitszeitRow());
            bindMitarbeiterSelects(globalArbeitContainer);
        }

        document.getElementById('positionen-container').innerHTML = '';
        positionCounter = 0;
    }

    clearFieldErrors('projekt-form');

    // Update Rechnungs-UI
    if (projekt) {
        updateRechnungUI(projekt);
    } else {
        updateRechnungUI(null);
    }
}

function setSlider(sliderId, displayId, value) {
    const slider = document.getElementById(sliderId);
    const display = document.getElementById(displayId);
    if (slider) slider.value = value;
    if (display) display.textContent = value + '%';
}

function setRabattCombo(value) {
    const input = document.getElementById('z-rabatt');
    const presets = document.getElementById('z-rabatt-presets');
    if (input) input.value = value;
    if (presets) {
        const matchOpt = Array.from(presets.options).find(o => o.value === String(value));
        presets.value = matchOpt ? String(value) : 'custom';
    }
}

// ==================== SCHRANK SYSTEM ====================
let schrankCounter = 0;

// --- DRY Helpers for Material/Oberfläche/Kanten inside Schrank sub-sections ---

function buildMaterialSelectGroup(prefix) {
    return `<div class="form-grid-3">
        <div class="form-group">
            <label>Kategorie</label>
            <select class="${prefix}-kategorie">${buildKategorieOptions()}</select>
        </div>
        <div class="form-group">
            <label>Typ</label>
            <select class="${prefix}-typ" disabled><option value="">-- Erst Kategorie --</option></select>
        </div>
        <div class="form-group">
            <label>Stärke</label>
            <select class="${prefix}-staerke" disabled><option value="">-- Erst Typ --</option></select>
        </div>
    </div>`;
}

function buildOberflaecheGroup(prefix) {
    return `<div class="sub-section">
        <label class="toggle-label">
            <input type="checkbox" class="${prefix}-oberflaeche-aktiv">
            <span class="toggle-text">Oberflächenbehandlung</span>
        </label>
        <div class="${prefix}-oberflaeche-details hidden">
            <div class="${prefix}-oberflaeche-rows" style="margin-top:8px">
                ${buildOberflaecheRow(prefix)}
            </div>
            <button type="button" class="btn-add btn-add-sm ${prefix}-add-oberflaeche" style="margin-top:6px">
                <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
                Produkt hinzufügen
            </button>
        </div>
    </div>`;
}

function buildOberflaecheRow(prefix, data) {
    const typ = data ? data.typ : '';
    const anstriche = data ? data.anstriche : 2;
    return `<div class="oberflaeche-row">
        <div class="form-grid-3" style="align-items:end">
            <div class="form-group">
                <label>Produkt</label>
                <select class="${prefix}-oberflaeche-typ">${buildOberflaecheOptions(typ)}</select>
            </div>
            <div class="form-group">
                <label>Anstriche</label>
                <select class="${prefix}-oberflaeche-anstriche">
                    <option value="1" ${anstriche == 1 ? 'selected' : ''}>1 Anstrich</option>
                    <option value="2" ${anstriche == 2 ? 'selected' : ''}>2 Anstriche</option>
                    <option value="3" ${anstriche == 3 ? 'selected' : ''}>3 Anstriche</option>
                </select>
            </div>
            <div class="form-group oberflaeche-liter-display">
                <span class="oberflaeche-liter-value">—</span>
                <button type="button" class="btn-remove-oberflaeche" title="Entfernen">&times;</button>
            </div>
        </div>
    </div>`;
}

function buildKantenGroup(prefix) {
    // Korpus hat spezielle Plattenseiten-Checkboxen
    const isKorpus = prefix === 'korpus';
    const kantenCheckboxes = isKorpus ? `
            <div class="kanten-platten-grid">
                <div class="kanten-platte-group">
                    <span class="kanten-platte-label">Seiten (2×)</span>
                    <label class="kanten-cb"><input type="checkbox" class="${prefix}-kante-cb" data-kante="seite-vorne" checked> vorne</label>
                    <label class="kanten-cb"><input type="checkbox" class="${prefix}-kante-cb" data-kante="seite-hinten"> hinten</label>
                    <label class="kanten-cb"><input type="checkbox" class="${prefix}-kante-cb" data-kante="seite-oben"> oben</label>
                    <label class="kanten-cb"><input type="checkbox" class="${prefix}-kante-cb" data-kante="seite-unten"> unten</label>
                </div>
                <div class="kanten-platte-group">
                    <span class="kanten-platte-label">Boden</span>
                    <label class="kanten-cb"><input type="checkbox" class="${prefix}-kante-cb" data-kante="boden-vorne" checked> vorne</label>
                    <label class="kanten-cb"><input type="checkbox" class="${prefix}-kante-cb" data-kante="boden-hinten"> hinten</label>
                    <label class="kanten-cb"><input type="checkbox" class="${prefix}-kante-cb" data-kante="boden-links"> links</label>
                    <label class="kanten-cb"><input type="checkbox" class="${prefix}-kante-cb" data-kante="boden-rechts"> rechts</label>
                </div>
                <div class="kanten-platte-group">
                    <span class="kanten-platte-label">Deckel</span>
                    <label class="kanten-cb"><input type="checkbox" class="${prefix}-kante-cb" data-kante="deckel-vorne" checked> vorne</label>
                    <label class="kanten-cb"><input type="checkbox" class="${prefix}-kante-cb" data-kante="deckel-hinten"> hinten</label>
                    <label class="kanten-cb"><input type="checkbox" class="${prefix}-kante-cb" data-kante="deckel-links"> links</label>
                    <label class="kanten-cb"><input type="checkbox" class="${prefix}-kante-cb" data-kante="deckel-rechts"> rechts</label>
                </div>
            </div>
            <div class="kanten-lfm-display">
                <small>Berechnete Laufmeter: <strong><span class="${prefix}-kanten-lfm-auto">0,00</span> m</strong></small>
            </div>` : '';

    return `<div class="sub-section">
        <label class="toggle-label">
            <input type="checkbox" class="${prefix}-kanten-aktiv">
            <span class="toggle-text">Kantenbearbeitung</span>
        </label>
        <div class="${prefix}-kanten-details hidden">
            <div class="form-grid-2" style="margin-top:12px">
                <div class="form-group">
                    <label>Kantenmaterial</label>
                    <select class="${prefix}-kanten-typ">${buildKantenOptions()}</select>
                </div>
                <div class="form-group">
                    <label>Zusätzl. Laufmeter</label>
                    <div class="input-unit-wrap"><input type="number" class="${prefix}-kanten-lfm-extra" min="0" step="0.1" value="0" placeholder="0"><span class="input-unit">m</span></div>
                </div>
            </div>${kantenCheckboxes}
        </div>
    </div>`;
}

function populateTypSelectGeneric(katSelect, typEl, staerkeEl, preselect) {
    const kategorie = katSelect.value;
    typEl.innerHTML = '<option value="">-- Auswählen --</option>';
    staerkeEl.innerHTML = '<option value="">-- Erst Typ --</option>';
    staerkeEl.disabled = true;

    if (kategorie && materialDaten[kategorie]) {
        typEl.disabled = false;
        const eigeneMats = eigeneArtikelMaterialien.filter(m => m.kategorie === kategorie);
        if (eigeneMats.length > 0) {
            const optgroup = document.createElement('optgroup');
            optgroup.label = 'Eigene Materialien';
            eigeneMats.forEach(m => {
                const option = document.createElement('option');
                option.value = 'eigen_' + m.id;
                option.textContent = m.name + ' (ab ' + m.basisPreis + '\u20ac/m\u00b2)';
                option.dataset.basispreis = m.basisPreis;
                optgroup.appendChild(option);
            });
            typEl.appendChild(optgroup);
        }
        const typen = materialDaten[kategorie].typen;
        for (const [key, data] of Object.entries(typen)) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = data.name + ' (ab ' + data.basisPreis + '\u20ac/m\u00b2)';
            option.dataset.basispreis = data.basisPreis;
            typEl.appendChild(option);
        }
        if (preselect) typEl.value = preselect;
    } else {
        typEl.disabled = true;
    }
}

function populateStaerkeSelectGeneric(typSelect, katEl, staerkeEl, preselect) {
    const kategorie = katEl.value;
    staerkeEl.innerHTML = '<option value="">-- Auswählen --</option>';

    if (kategorie && typSelect.value && materialDaten[kategorie]) {
        staerkeEl.disabled = false;
        const staerken = materialDaten[kategorie].staerken;
        const basisPreis = parseFloat(typSelect.options[typSelect.selectedIndex].dataset.basispreis);
        const preisProMm = materialDaten[kategorie].preisProMm;
        const basisStaerke = staerken[Math.floor(staerken.length / 2)];

        staerken.forEach(s => {
            const option = document.createElement('option');
            option.value = s;
            const preisAufschlag = (s - basisStaerke) * preisProMm;
            const endpreis = Math.max(basisPreis + preisAufschlag, basisPreis * 0.6);
            option.dataset.preis = endpreis.toFixed(2);
            option.textContent = s + ' mm (' + endpreis.toFixed(2) + '\u20ac/m\u00b2)';
            staerkeEl.appendChild(option);
        });
        if (preselect) staerkeEl.value = String(preselect);
    } else {
        staerkeEl.disabled = true;
    }
}

// --- Schrank-Extra-Row (Zwischenboden, Einlegeboden, Mittelseite) ---
function buildExtraRow(type, data) {
    const labels = {
        zwischenboden: 'Zwischenboden',
        einlegeboden: 'Einlegeboden',
        mittelseite: 'Mittelseite'
    };
    const label = labels[type] || type;
    const isBoden = (type === 'zwischenboden' || type === 'einlegeboden');
    // Böden: vorne/hinten/links/rechts, Mittelseite: vorne/hinten/oben/unten
    const kantenLabels = isBoden
        ? [['vorne', true], ['hinten', false], ['links', false], ['rechts', false]]
        : [['vorne', true], ['hinten', false], ['oben', false], ['unten', false]];
    const kantenHtml = kantenLabels.map(([seite, checked]) => {
        const isChecked = data && data.kanten ? data.kanten[seite] : checked;
        return `<label class="kanten-cb"><input type="checkbox" class="extra-kante-cb" data-kante="${seite}" ${isChecked ? 'checked' : ''}> ${seite}</label>`;
    }).join('');

    return `<div class="korpus-extra-row" data-extra-type="${type}">
        <div class="extra-row-header">
            <span class="extra-label">${escapeHtml(label)}</span>
            <button type="button" class="btn-remove-extra" title="Entfernen">&times;</button>
        </div>
        <div class="form-grid-3">
            <div class="form-group">
                <label>Anzahl</label>
                <div class="input-unit-wrap"><input type="number" class="extra-anzahl" min="1" value="${data ? data.anzahl : 1}"><span class="input-unit">Stk.</span></div>
            </div>
            <div class="form-group">
                <label>Materialpreisaufschlag</label>
                <input type="checkbox" class="extra-eigenes-material" ${data && data.eigenesMaterial ? 'checked' : ''}>
                <small>Eigenes Material</small>
            </div>
        </div>
        <div class="extra-kanten-section">
            <span class="extra-kanten-label">Kanten:</span>
            ${kantenHtml}
            <small class="extra-kanten-lfm">(<span class="extra-kanten-lfm-value">0,00</span> m)</small>
        </div>
    </div>`;
}

// --- addSchrankBlock ---
function addSchrankBlock(data) {
    schrankCounter++;
    const idx = schrankCounter;
    const container = document.getElementById('schraenke-container');

    const block = document.createElement('div');
    block.className = 'calc-card schrank-block';
    block.dataset.schrankIdx = idx;
    block.innerHTML = `
        <div class="calc-header schrank-header" data-toggle-schrank="${idx}">
            <span class="calc-step">${idx}</span>
            <div class="position-title-wrap">
                <h3 class="schrank-title-display">${escapeHtml(data ? data.bezeichnung : 'Schrank ' + idx)}</h3>
                <p class="pos-subtitle">Klicken zum Auf-/Zuklappen</p>
            </div>
            <span class="pos-sum schrank-sum" id="schrank-sum-${idx}">0,00 \u20ac</span>
            <button type="button" class="btn-remove-pos btn-remove-schrank" data-remove-schrank="${idx}" title="Schrank entfernen">&times;</button>
        </div>
        <div class="calc-body schrank-body${data ? '' : ' hidden'}" id="schrank-body-${idx}">
            <div class="form-grid-3">
                <div class="form-group" style="grid-column: 1 / -1">
                    <label class="label-required">Bezeichnung</label>
                    <input type="text" class="schrank-bezeichnung" value="${escapeHtml(data ? data.bezeichnung : '')}" placeholder="z.B. Unterschrank Spüle">
                </div>
            </div>

            <!-- KORPUS -->
            <div class="schrank-section">
                <div class="schrank-section-header${data ? '' : ' collapsed'}" data-toggle-section="korpus-${idx}">
                    <h4>Korpus</h4>
                    <svg class="section-chevron" viewBox="0 0 24 24" width="18" height="18"><polyline points="6 9 12 15 18 9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </div>
                <div class="schrank-section-body${data ? '' : ' hidden'}" id="section-korpus-${idx}">
                    <div class="korpus-layout-split">
                      <div class="korpus-form-side">
                        <div class="form-grid-3">
                            <div class="form-group">
                                <label>Höhe</label>
                                <div class="input-unit-wrap"><input type="number" class="korpus-hoehe" min="1" step="1" value="${data && data.korpus ? data.korpus.hoehe : ''}" placeholder="z.B. 720"><span class="input-unit">mm</span></div>
                            </div>
                            <div class="form-group">
                                <label>Breite</label>
                                <div class="input-unit-wrap"><input type="number" class="korpus-breite" min="1" step="1" value="${data && data.korpus ? data.korpus.breite : ''}" placeholder="z.B. 600"><span class="input-unit">mm</span></div>
                            </div>
                            <div class="form-group">
                                <label>Tiefe</label>
                                <div class="input-unit-wrap"><input type="number" class="korpus-tiefe" min="1" step="1" value="${data && data.korpus ? data.korpus.tiefe : ''}" placeholder="z.B. 560"><span class="input-unit">mm</span></div>
                            </div>
                        </div>
                        <div class="form-group" style="margin-top:8px">
                            <label>Konstruktion</label>
                            <div class="konstruktion-toggle">
                                <button type="button" class="konstruktion-btn${!data || !data.korpus || !data.korpus.konstruktion || data.korpus.konstruktion === 'seiten' ? ' active' : ''}" data-konstruktion="seiten" title="Seiten durchgehend – Böden liegen zwischen den Seiten">
                                    <svg viewBox="0 0 48 48" width="32" height="32">
                                        <rect x="4" y="2" width="4" height="44" fill="currentColor" rx="1"/>
                                        <rect x="40" y="2" width="4" height="44" fill="currentColor" rx="1"/>
                                        <rect x="8" y="6" width="32" height="3" fill="currentColor" opacity="0.5" rx="0.5"/>
                                        <rect x="8" y="39" width="32" height="3" fill="currentColor" opacity="0.5" rx="0.5"/>
                                    </svg>
                                    <span>Seiten durch</span>
                                </button>
                                <button type="button" class="konstruktion-btn${data && data.korpus && data.korpus.konstruktion === 'boeden' ? ' active' : ''}" data-konstruktion="boeden" title="Böden durchgehend – Seiten stehen auf den Böden">
                                    <svg viewBox="0 0 48 48" width="32" height="32">
                                        <rect x="2" y="4" width="44" height="4" fill="currentColor" rx="1"/>
                                        <rect x="2" y="40" width="44" height="4" fill="currentColor" rx="1"/>
                                        <rect x="6" y="8" width="3" height="32" fill="currentColor" opacity="0.5" rx="0.5"/>
                                        <rect x="39" y="8" width="3" height="32" fill="currentColor" opacity="0.5" rx="0.5"/>
                                    </svg>
                                    <span>Böden durch</span>
                                </button>
                            </div>
                        </div>
                        <div class="form-group" style="margin-top:4px">
                            <label>Verschnitt</label>
                            <div class="pct-combo">
                                <select class="pct-presets korpus-verschnitt-presets">
                                    <option value="5">5%</option>
                                    <option value="10">10%</option>
                                    <option value="15" selected>15%</option>
                                    <option value="20">20%</option>
                                    <option value="25">25%</option>
                                    <option value="30">30%</option>
                                    <option value="custom">Eigener Wert</option>
                                </select>
                                <input type="number" class="klr-input korpus-verschnitt" min="0" max="40" step="1" value="${data && data.korpus ? data.korpus.verschnitt : 15}">
                                <span class="pct-unit">%</span>
                            </div>
                        </div>
                      </div>
                      <div class="korpus-preview-side">
                        <div class="korpus-svg-preview" id="korpus-svg-${idx}">
                            <svg viewBox="0 0 200 240" width="100%" class="korpus-svg"></svg>
                        </div>
                        <div class="korpus-platten-preview" id="korpus-preview-${idx}">
                            <div class="preview-items">Bitte Maße eingeben</div>
                        </div>
                      </div>
                    </div>

                    ${buildMaterialSelectGroup('korpus')}
                    ${buildOberflaecheGroup('korpus')}
                    ${buildKantenGroup('korpus')}

                    <!-- Extras -->
                    <div class="extras-section">
                        <h5>Extras</h5>
                        <div class="korpus-extras-container"></div>
                        <div class="extras-add-buttons">
                            <button type="button" class="btn-add btn-add-sm btn-add-extra" data-extra="zwischenboden">+ Zwischenboden</button>
                            <button type="button" class="btn-add btn-add-sm btn-add-extra" data-extra="einlegeboden">+ Einlegeboden</button>
                            <button type="button" class="btn-add btn-add-sm btn-add-extra" data-extra="mittelseite">+ Mittelseite</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- FRONT -->
            <div class="schrank-section">
                <div class="schrank-section-header${data ? '' : ' collapsed'}" data-toggle-section="front-${idx}">
                    <h4>Front</h4>
                    <svg class="section-chevron" viewBox="0 0 24 24" width="18" height="18"><polyline points="6 9 12 15 18 9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </div>
                <div class="schrank-section-body${data ? '' : ' hidden'}" id="section-front-${idx}">
                    <div class="form-grid-3">
                        <div class="form-group">
                            <label>Typ</label>
                            <select class="front-typ-art">
                                <option value="aufschlagend" ${data && data.front && data.front.typArt === 'einschlagend' ? '' : 'selected'}>Aufschlagend</option>
                                <option value="einschlagend" ${data && data.front && data.front.typArt === 'einschlagend' ? 'selected' : ''}>Einschlagend</option>
                            </select>
                        </div>
                    </div>
                    <div class="front-dim-grid">
                        <div class="front-dim-row">
                            <span class="front-dim-label">Höhe</span>
                            <span class="front-dim-basis"><span class="front-basis-hoehe">—</span> mm</span>
                            <span class="front-dim-op">+</span>
                            <div class="input-unit-wrap"><input type="number" class="front-luft-hoehe" step="1" value="${data && data.front && data.front.luftHoehe != null ? data.front.luftHoehe : 0}" placeholder="0"><span class="input-unit">mm Luft</span></div>
                            <span class="front-dim-eq">=</span>
                            <span class="front-dim-result"><strong><span class="front-result-hoehe">—</span> mm</strong></span>
                            <input type="hidden" class="front-hoehe" value="${data && data.front ? data.front.hoehe : ''}">
                        </div>
                        <div class="front-dim-row">
                            <span class="front-dim-label">Breite</span>
                            <span class="front-dim-basis"><span class="front-basis-breite">—</span> mm</span>
                            <span class="front-dim-op">+</span>
                            <div class="input-unit-wrap"><input type="number" class="front-luft-breite" step="1" value="${data && data.front && data.front.luftBreite != null ? data.front.luftBreite : 0}" placeholder="0"><span class="input-unit">mm Luft</span></div>
                            <span class="front-dim-eq">=</span>
                            <span class="front-dim-result"><strong><span class="front-result-breite">—</span> mm</strong></span>
                            <input type="hidden" class="front-breite" value="${data && data.front ? data.front.breite : ''}">
                        </div>
                    </div>
                    <div class="front-split-section" style="margin-top:8px">
                        <div class="form-grid-3">
                            <div class="form-group">
                                <label>Anzahl Fronten</label>
                                <div class="input-unit-wrap"><input type="number" class="front-anzahl" min="1" value="${data && data.front ? data.front.anzahl : 1}"><span class="input-unit">Stk.</span></div>
                            </div>
                            <div class="form-group">
                                <label>Fuge zwischen Fronten</label>
                                <div class="input-unit-wrap"><input type="number" class="front-fuge" min="0" step="1" value="${data && data.front && data.front.fuge != null ? data.front.fuge : 3}" placeholder="3"><span class="input-unit">mm</span></div>
                            </div>
                        </div>
                        <div class="front-split-info hidden">
                            <small>Breite pro Front: <strong><span class="front-split-breite">—</span> mm</strong> (Gesamtbreite abzgl. Fugen, geteilt durch Anzahl)</small>
                        </div>
                    </div>
                    ${buildMaterialSelectGroup('front')}
                    ${buildOberflaecheGroup('front')}
                    ${buildKantenGroup('front')}
                </div>
            </div>

            <!-- RÜCKWAND -->
            <div class="schrank-section">
                <div class="schrank-section-header${data ? '' : ' collapsed'}" data-toggle-section="rueckwand-${idx}">
                    <h4>Rückwand</h4>
                    <svg class="section-chevron" viewBox="0 0 24 24" width="18" height="18"><polyline points="6 9 12 15 18 9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </div>
                <div class="schrank-section-body${data ? '' : ' hidden'}" id="section-rueckwand-${idx}">
                    <div class="form-grid-3">
                        <div class="form-group">
                            <label>Befestigung</label>
                            <select class="rueckwand-typ-art">
                                <option value="aufschlagend" ${data && data.rueckwand && data.rueckwand.typArt === 'eingenutet' ? '' : (data && data.rueckwand && data.rueckwand.typArt === 'gefaelzt' ? '' : 'selected')}>Aufschlagend</option>
                                <option value="eingenutet" ${data && data.rueckwand && data.rueckwand.typArt === 'eingenutet' ? 'selected' : ''}>Eingenutet</option>
                                <option value="gefaelzt" ${data && data.rueckwand && data.rueckwand.typArt === 'gefaelzt' ? 'selected' : ''}>Gefälzt</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-grid-3">
                        <div class="form-group">
                            <label>Höhe</label>
                            <div class="input-unit-wrap"><input type="number" class="rueckwand-hoehe" min="1" step="1" value="${data && data.rueckwand ? data.rueckwand.hoehe : ''}" placeholder="Auto aus Korpus"><span class="input-unit">mm</span></div>
                        </div>
                        <div class="form-group">
                            <label>Breite</label>
                            <div class="input-unit-wrap"><input type="number" class="rueckwand-breite" min="1" step="1" value="${data && data.rueckwand ? data.rueckwand.breite : ''}" placeholder="Auto aus Korpus"><span class="input-unit">mm</span></div>
                        </div>
                    </div>
                    ${buildMaterialSelectGroup('rueckwand')}
                    ${buildOberflaecheGroup('rueckwand')}
                    ${buildKantenGroup('rueckwand')}
                </div>
            </div>

            <!-- BESCHLÄGE -->
            <div class="schrank-section">
                <div class="schrank-section-header${data ? '' : ' collapsed'}" data-toggle-section="beschlaege-${idx}">
                    <h4>Beschläge</h4>
                    <svg class="section-chevron" viewBox="0 0 24 24" width="18" height="18"><polyline points="6 9 12 15 18 9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </div>
                <div class="schrank-section-body${data ? '' : ' hidden'}" id="section-beschlaege-${idx}">
                    <div class="schrank-beschlaege-container">
                        ${data && data.beschlaege && data.beschlaege.length > 0
                            ? data.beschlaege.map(b => buildBeschlagRow(b)).join('')
                            : buildBeschlagRow()
                        }
                    </div>
                    <button type="button" class="btn-add btn-add-sm schrank-add-beschlag">
                        <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
                        Beschlag hinzufügen
                    </button>
                </div>
            </div>

            <!-- VERBINDUNGSMITTEL -->
            <div class="schrank-section">
                <div class="schrank-section-header${data ? '' : ' collapsed'}" data-toggle-section="verbindungsmittel-${idx}">
                    <h4>Verbindungsmittel</h4>
                    <svg class="section-chevron" viewBox="0 0 24 24" width="18" height="18"><polyline points="6 9 12 15 18 9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </div>
                <div class="schrank-section-body${data ? '' : ' hidden'}" id="section-verbindungsmittel-${idx}">
                    <div class="schrank-verbindungsmittel-container">
                        ${data && data.verbindungsmittel && data.verbindungsmittel.length > 0
                            ? data.verbindungsmittel.map(v => buildVerbindungsmittelRow(v)).join('')
                            : buildVerbindungsmittelRow()
                        }
                    </div>
                    <button type="button" class="btn-add btn-add-sm schrank-add-verbindungsmittel">
                        <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
                        Verbindungsmittel hinzufügen
                    </button>
                </div>
            </div>
        </div>
    `;

    container.appendChild(block);

    // Set cascading select values if data provided
    if (data) {
        setSchrankComponentData(block, 'korpus', data.korpus);
        setSchrankComponentData(block, 'front', data.front);
        setSchrankComponentData(block, 'rueckwand', data.rueckwand);

        // Extras
        if (data.korpus && data.korpus.extras) {
            data.korpus.extras.forEach(ex => {
                const extrasContainer = block.querySelector('.korpus-extras-container');
                extrasContainer.insertAdjacentHTML('beforeend', buildExtraRow(ex.type, ex));
            });
        }

        // Verschnitt
        if (data.korpus && data.korpus.verschnitt) {
            const vInput = block.querySelector('.korpus-verschnitt');
            const vPresets = block.querySelector('.korpus-verschnitt-presets');
            vInput.value = data.korpus.verschnitt;
            const matchOpt = Array.from(vPresets.options).find(o => o.value === String(data.korpus.verschnitt));
            vPresets.value = matchOpt ? String(data.korpus.verschnitt) : 'custom';
        }
    }

    bindSchrankEvents(block, idx);

    // Front-Anzeige initialisieren (Basis + Luft + Split) + Vorschau
    setTimeout(() => {
        autoFillFromKorpus(block);
        updatePlattenPreview(block, idx);
    }, 50);
}

function setSchrankComponentData(block, prefix, compData) {
    if (!compData) return;
    const katSel = block.querySelector('.' + prefix + '-kategorie');
    const typSel = block.querySelector('.' + prefix + '-typ');
    const staerkeSel = block.querySelector('.' + prefix + '-staerke');

    if (compData.kategorie) {
        katSel.value = compData.kategorie;
        populateTypSelectGeneric(katSel, typSel, staerkeSel, compData.typ);
        if (compData.typ) {
            setTimeout(() => populateStaerkeSelectGeneric(typSel, katSel, staerkeSel, compData.staerke), 0);
        }
    }

    // Oberfläche
    if (compData.oberflaecheAktiv) {
        const obAktiv = block.querySelector('.' + prefix + '-oberflaeche-aktiv');
        obAktiv.checked = true;
        block.querySelector('.' + prefix + '-oberflaeche-details').classList.remove('hidden');

        if (compData.oberflaecheProdukte && compData.oberflaecheProdukte.length > 0) {
            // Multi-Produkte laden
            const rowsContainer = block.querySelector('.' + prefix + '-oberflaeche-rows');
            rowsContainer.innerHTML = '';
            compData.oberflaecheProdukte.forEach(p => {
                rowsContainer.insertAdjacentHTML('beforeend', buildOberflaecheRow(prefix, p));
            });
        } else if (compData.oberflaecheTyp) {
            // Legacy: Einzelprodukt
            block.querySelector('.' + prefix + '-oberflaeche-typ').value = compData.oberflaecheTyp;
            if (compData.oberflaecheAnstriche) {
                block.querySelector('.' + prefix + '-oberflaeche-anstriche').value = compData.oberflaecheAnstriche;
            }
        }
    }

    // Kanten
    if (compData.kantenAktiv) {
        const kAktiv = block.querySelector('.' + prefix + '-kanten-aktiv');
        kAktiv.checked = true;
        block.querySelector('.' + prefix + '-kanten-details').classList.remove('hidden');
        if (compData.kantenTyp) {
            block.querySelector('.' + prefix + '-kanten-typ').value = compData.kantenTyp;
        }
        if (compData.kantenLfmExtra) {
            block.querySelector('.' + prefix + '-kanten-lfm-extra').value = compData.kantenLfmExtra;
        }
        // Kanten-Checkboxen wiederherstellen
        if (compData.kantenCheckboxen) {
            Object.entries(compData.kantenCheckboxen).forEach(([kante, checked]) => {
                const cb = block.querySelector(`.${prefix}-kante-cb[data-kante="${kante}"]`);
                if (cb) cb.checked = checked;
            });
        }
    }

    // Front Luft + Fuge wiederherstellen
    if (compData.luftHoehe != null) {
        const el = block.querySelector('.' + prefix + '-luft-hoehe');
        if (el) el.value = compData.luftHoehe;
    }
    if (compData.luftBreite != null) {
        const el = block.querySelector('.' + prefix + '-luft-breite');
        if (el) el.value = compData.luftBreite;
    }
    if (compData.fuge != null) {
        const el = block.querySelector('.' + prefix + '-fuge');
        if (el) el.value = compData.fuge;
    }
}

// --- bindSchrankEvents ---
function bindSchrankEvents(block, idx) {
    // Toggle main accordion
    block.querySelector('.schrank-header').addEventListener('click', (e) => {
        if (e.target.closest('.btn-remove-schrank')) return;
        block.querySelector('.schrank-body').classList.toggle('hidden');
    });

    // Remove schrank
    block.querySelector('.btn-remove-schrank').addEventListener('click', () => {
        const container = block.parentElement;
        if (container.querySelectorAll('.schrank-block').length <= 1) {
            showToast('Mindestens ein Schrank erforderlich', 'warning');
            return;
        }
        block.remove();
        renumberSchraenke();
    });

    // Bezeichnung sync
    const bezInput = block.querySelector('.schrank-bezeichnung');
    bezInput.addEventListener('input', () => {
        block.querySelector('.schrank-title-display').textContent = bezInput.value || 'Schrank ' + idx;
    });

    // Sub-section toggles
    block.querySelectorAll('.schrank-section-header').forEach(header => {
        header.addEventListener('click', () => {
            const sectionId = header.dataset.toggleSection;
            const body = document.getElementById('section-' + sectionId);
            if (body) body.classList.toggle('hidden');
            header.classList.toggle('collapsed');
        });
    });

    // Konstruktions-Toggle (Seiten durch / Böden durch)
    block.querySelectorAll('.konstruktion-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            block.querySelectorAll('.konstruktion-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updatePlattenPreview(block, idx);
            triggerSchrankCalc(block);
        });
    });

    // Bind material cascades for all components
    ['korpus', 'front', 'rueckwand'].forEach(prefix => {
        const katSel = block.querySelector('.' + prefix + '-kategorie');
        const typSel = block.querySelector('.' + prefix + '-typ');
        const staerkeSel = block.querySelector('.' + prefix + '-staerke');

        katSel.addEventListener('change', () => {
            populateTypSelectGeneric(katSel, typSel, staerkeSel);
            triggerSchrankCalc(block);
        });
        typSel.addEventListener('change', () => {
            populateStaerkeSelectGeneric(typSel, katSel, staerkeSel);
            triggerSchrankCalc(block);
        });
        staerkeSel.addEventListener('change', () => triggerSchrankCalc(block));

        // Oberfläche toggle
        const obAktiv = block.querySelector('.' + prefix + '-oberflaeche-aktiv');
        obAktiv.addEventListener('change', () => {
            block.querySelector('.' + prefix + '-oberflaeche-details').classList.toggle('hidden', !obAktiv.checked);
            triggerSchrankCalc(block);
        });

        // Oberfläche: Produkt hinzufügen
        const addObBtn = block.querySelector('.' + prefix + '-add-oberflaeche');
        if (addObBtn) {
            addObBtn.addEventListener('click', () => {
                block.querySelector('.' + prefix + '-oberflaeche-rows').insertAdjacentHTML('beforeend', buildOberflaecheRow(prefix));
                triggerSchrankCalc(block);
            });
        }

        // Oberfläche: delegierte Events für Rows (change + remove)
        const obRowsContainer = block.querySelector('.' + prefix + '-oberflaeche-rows');
        if (obRowsContainer) {
            obRowsContainer.addEventListener('change', () => triggerSchrankCalc(block));
            obRowsContainer.addEventListener('click', (e) => {
                if (e.target.closest('.btn-remove-oberflaeche')) {
                    const rows = obRowsContainer.querySelectorAll('.oberflaeche-row');
                    if (rows.length > 1) {
                        e.target.closest('.oberflaeche-row').remove();
                        triggerSchrankCalc(block);
                    }
                }
            });
        }

        // Kanten toggle
        const kAktiv = block.querySelector('.' + prefix + '-kanten-aktiv');
        kAktiv.addEventListener('change', () => {
            block.querySelector('.' + prefix + '-kanten-details').classList.toggle('hidden', !kAktiv.checked);
            triggerSchrankCalc(block);
        });
        block.querySelector('.' + prefix + '-kanten-typ').addEventListener('change', () => triggerSchrankCalc(block));
        block.querySelector('.' + prefix + '-kanten-lfm-extra').addEventListener('input', () => triggerSchrankCalc(block));

        // Kanten-Checkboxen (nur Korpus hat diese)
        block.querySelectorAll('.' + prefix + '-kante-cb').forEach(cb => {
            cb.addEventListener('change', () => triggerSchrankCalc(block));
        });
    });

    // Korpus dimensions → auto-fill Front/Rückwand + preview
    ['korpus-hoehe', 'korpus-breite', 'korpus-tiefe'].forEach(cls => {
        block.querySelector('.' + cls).addEventListener('input', () => {
            autoFillFromKorpus(block);
            updatePlattenPreview(block, idx);
            triggerSchrankCalc(block);
        });
    });

    // Front-Typ (aufschlagend/einschlagend) → re-autofill
    const frontTypArtSel = block.querySelector('.front-typ-art');
    if (frontTypArtSel) {
        frontTypArtSel.addEventListener('change', () => {
            autoFillFromKorpus(block);
            triggerSchrankCalc(block);
        });
    }

    // Rückwand-Typ (aufschlagend/eingenutet/gefälzt) → re-autofill
    const rwTypArtSel = block.querySelector('.rueckwand-typ-art');
    if (rwTypArtSel) {
        rwTypArtSel.addEventListener('change', () => {
            const rwH = block.querySelector('.rueckwand-hoehe');
            const rwB = block.querySelector('.rueckwand-breite');
            rwH.dataset.autoFilled = '1';
            rwB.dataset.autoFilled = '1';
            autoFillFromKorpus(block);
            triggerSchrankCalc(block);
        });
    }

    // Front Luft + Anzahl + Fuge + Rückwand dimension changes
    ['front-luft-hoehe', 'front-luft-breite', 'front-anzahl', 'front-fuge', 'rueckwand-hoehe', 'rueckwand-breite'].forEach(cls => {
        const el = block.querySelector('.' + cls);
        if (el) el.addEventListener('input', () => {
            if (cls.startsWith('front-')) autoFillFromKorpus(block);
            triggerSchrankCalc(block);
        });
    });

    // Verschnitt combo
    const verschnittPresets = block.querySelector('.korpus-verschnitt-presets');
    const verschnittInput = block.querySelector('.korpus-verschnitt');
    verschnittPresets.addEventListener('change', () => {
        if (verschnittPresets.value !== 'custom') {
            verschnittInput.value = verschnittPresets.value;
            triggerSchrankCalc(block);
        }
    });
    verschnittInput.addEventListener('input', () => {
        const val = verschnittInput.value;
        const m = Array.from(verschnittPresets.options).find(o => o.value === val);
        verschnittPresets.value = m ? val : 'custom';
        triggerSchrankCalc(block);
    });

    // Extras buttons
    block.querySelectorAll('.btn-add-extra').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.extra;
            const extrasContainer = block.querySelector('.korpus-extras-container');
            extrasContainer.insertAdjacentHTML('beforeend', buildExtraRow(type));
            triggerSchrankCalc(block);
        });
    });

    // Extras remove delegation
    block.querySelector('.korpus-extras-container').addEventListener('click', (e) => {
        if (e.target.closest('.btn-remove-extra')) {
            e.target.closest('.korpus-extra-row').remove();
            triggerSchrankCalc(block);
        }
    });

    // Extras input delegation
    block.querySelector('.korpus-extras-container').addEventListener('input', () => triggerSchrankCalc(block));
    // Extras kanten checkbox delegation
    block.querySelector('.korpus-extras-container').addEventListener('change', () => triggerSchrankCalc(block));

    // Beschlag add
    block.querySelector('.schrank-add-beschlag').addEventListener('click', () => {
        block.querySelector('.schrank-beschlaege-container').insertAdjacentHTML('beforeend', buildBeschlagRow());
    });

    // Beschlag changes delegation
    block.addEventListener('change', (e) => {
        if (e.target.matches('.beschlag-typ, .beschlag-anzahl')) triggerSchrankCalc(block);
    });
    block.addEventListener('input', (e) => {
        if (e.target.matches('.beschlag-anzahl')) triggerSchrankCalc(block);
    });

    // Verbindungsmittel add
    block.querySelector('.schrank-add-verbindungsmittel').addEventListener('click', () => {
        block.querySelector('.schrank-verbindungsmittel-container').insertAdjacentHTML('beforeend', buildVerbindungsmittelRow());
    });

    // Verbindungsmittel changes delegation
    block.addEventListener('change', (e) => {
        if (e.target.matches('.verbindungsmittel-typ, .verbindungsmittel-anzahl')) triggerSchrankCalc(block);
    });
    block.addEventListener('input', (e) => {
        if (e.target.matches('.verbindungsmittel-anzahl')) triggerSchrankCalc(block);
    });

    // Initial calc
    triggerSchrankCalc(block);
}

function autoFillFromKorpus(block) {
    const h = parseFloat(block.querySelector('.korpus-hoehe').value) || 0;
    const b = parseFloat(block.querySelector('.korpus-breite').value) || 0;
    const t = parseFloat(block.querySelector('.korpus-tiefe').value) || 0;

    // Korpus Stärke für einschlagende Front/Rückwand
    const staerkeSel = block.querySelector('.korpus-staerke');
    const staerke = parseFloat(staerkeSel?.value) || 19;

    // Front: abhängig von Typ (aufschlagend/einschlagend) + Luft
    const frontTypArt = block.querySelector('.front-typ-art')?.value || 'aufschlagend';
    const frontH = block.querySelector('.front-hoehe');
    const frontB = block.querySelector('.front-breite');
    const luftH = parseFloat(block.querySelector('.front-luft-hoehe')?.value) || 0;
    const luftB = parseFloat(block.querySelector('.front-luft-breite')?.value) || 0;
    const basisH = frontTypArt === 'einschlagend' ? Math.max(h - 2 * staerke, 0) : h;
    const basisB = frontTypArt === 'einschlagend' ? Math.max(b - 2 * staerke, 0) : b;

    // Basismaße anzeigen
    const basisHEl = block.querySelector('.front-basis-hoehe');
    const basisBEl = block.querySelector('.front-basis-breite');
    if (basisHEl) basisHEl.textContent = basisH || '—';
    if (basisBEl) basisBEl.textContent = basisB || '—';

    // Endmaße berechnen (Basis + Luft)
    const endH = basisH ? basisH + luftH : 0;
    const endB = basisB ? basisB + luftB : 0;

    // Front-Aufteilung berechnen
    const frontAnzahl = parseInt(block.querySelector('.front-anzahl')?.value) || 1;
    const frontFuge = parseFloat(block.querySelector('.front-fuge')?.value) || 3;
    const splitInfoEl = block.querySelector('.front-split-info');
    const splitBreiteEl = block.querySelector('.front-split-breite');
    let frontEinzelBreite = endB;

    if (frontAnzahl > 1 && endB > 0) {
        // Gesamtbreite minus Fugen, geteilt durch Anzahl
        frontEinzelBreite = Math.round((endB - (frontAnzahl - 1) * frontFuge) / frontAnzahl);
        if (splitInfoEl) splitInfoEl.classList.remove('hidden');
        if (splitBreiteEl) splitBreiteEl.textContent = frontEinzelBreite;
    } else {
        if (splitInfoEl) splitInfoEl.classList.add('hidden');
    }

    // Für Berechnung: Einzelfront-Breite setzen
    frontH.value = endH || '';
    frontB.value = frontEinzelBreite || '';

    // Ergebnis anzeigen
    const resHEl = block.querySelector('.front-result-hoehe');
    const resBEl = block.querySelector('.front-result-breite');
    if (resHEl) resHEl.textContent = endH || '—';
    if (resBEl) resBEl.textContent = endB || '—';

    // Rückwand: abhängig von Befestigungsart
    const rwTypArt = block.querySelector('.rueckwand-typ-art')?.value || 'aufschlagend';
    const rwH = block.querySelector('.rueckwand-hoehe');
    const rwB = block.querySelector('.rueckwand-breite');
    if (!rwH.value || rwH.dataset.autoFilled) {
        if (rwTypArt === 'eingenutet') {
            rwH.value = Math.max(h - 2 * 8, 0); // 8mm Nuttiefe
        } else if (rwTypArt === 'gefaelzt') {
            rwH.value = Math.max(h - 8, 0); // 8mm Falztiefe
        } else {
            rwH.value = h;
        }
        rwH.dataset.autoFilled = '1';
    }
    if (!rwB.value || rwB.dataset.autoFilled) {
        if (rwTypArt === 'eingenutet') {
            rwB.value = Math.max(b - 2 * 8, 0);
        } else if (rwTypArt === 'gefaelzt') {
            rwB.value = Math.max(b - 8, 0);
        } else {
            rwB.value = b;
        }
        rwB.dataset.autoFilled = '1';
    }
}

function getKonstruktionsart(block) {
    const activeBtn = block.querySelector('.konstruktion-btn.active');
    return activeBtn ? activeBtn.dataset.konstruktion : 'seiten';
}

function updatePlattenPreview(block, idx) {
    const h = parseFloat(block.querySelector('.korpus-hoehe').value) || 0;
    const b = parseFloat(block.querySelector('.korpus-breite').value) || 0;
    const t = parseFloat(block.querySelector('.korpus-tiefe').value) || 0;
    const previewEl = block.querySelector('.korpus-platten-preview .preview-items');
    const svgEl = block.querySelector('.korpus-svg');

    if (!h || !b || !t) {
        previewEl.innerHTML = 'Bitte Maße eingeben';
        if (svgEl) svgEl.innerHTML = '<text x="100" y="120" text-anchor="middle" fill="#94a3b8" font-size="13">Maße eingeben</text>';
        return;
    }

    const staerkeSel = block.querySelector('.korpus-staerke');
    const staerke = parseFloat(staerkeSel.value) || 19;
    const konstruktion = getKonstruktionsart(block);
    const istSeitenDurch = konstruktion === 'seiten';

    let seiteH, seiteT, bodenB, bodenT;
    if (istSeitenDurch) {
        seiteH = h;
        seiteT = t;
        bodenB = Math.max(b - 2 * staerke, 0);
        bodenT = t;
    } else {
        bodenB = b;
        bodenT = t;
        seiteH = Math.max(h - 2 * staerke, 0);
        seiteT = t;
    }

    previewEl.innerHTML = `
        <div class="preview-platte">2× Seite: ${seiteH.toFixed(0)} × ${seiteT} mm</div>
        <div class="preview-platte">1× Boden: ${bodenB.toFixed(0)} × ${bodenT} mm</div>
        <div class="preview-platte">1× Deckel: ${bodenB.toFixed(0)} × ${bodenT} mm</div>
        <div class="preview-total">Gesamt: ${((2 * seiteH * seiteT + 2 * bodenB * bodenT) / 1000000).toFixed(3)} m²</div>
    `;

    // SVG-Vorschau rendern
    if (svgEl) renderKorpusSVG(svgEl, h, b, staerke, konstruktion);
}

function renderKorpusSVG(svgEl, h, b, staerke, konstruktion) {
    const pad = 30;
    const maxW = 140, maxH = 170;
    const ratio = Math.min(maxW / b, maxH / h);
    const drawW = b * ratio;
    const drawH = h * ratio;
    const sW = staerke * ratio;
    const ox = (200 - drawW) / 2;
    const oy = pad;
    const istSeitenDurch = konstruktion === 'seiten';

    const seitenColor = '#b45309';
    const boedenColor = '#d97706';
    const dimColor = '#64748b';

    let svg = '';

    if (istSeitenDurch) {
        // Seiten durchgehend (volle Höhe), Böden zwischen den Seiten
        svg += `<rect x="${ox}" y="${oy}" width="${sW}" height="${drawH}" fill="${seitenColor}" rx="1" stroke="#92400e" stroke-width="0.5"/>`;
        svg += `<rect x="${ox + drawW - sW}" y="${oy}" width="${sW}" height="${drawH}" fill="${seitenColor}" rx="1" stroke="#92400e" stroke-width="0.5"/>`;
        svg += `<rect x="${ox + sW}" y="${oy}" width="${drawW - 2 * sW}" height="${sW}" fill="${boedenColor}" rx="0.5" stroke="#92400e" stroke-width="0.5"/>`;
        svg += `<rect x="${ox + sW}" y="${oy + drawH - sW}" width="${drawW - 2 * sW}" height="${sW}" fill="${boedenColor}" rx="0.5" stroke="#92400e" stroke-width="0.5"/>`;
    } else {
        // Böden durchgehend (volle Breite), Seiten stehen auf den Böden
        svg += `<rect x="${ox}" y="${oy}" width="${drawW}" height="${sW}" fill="${boedenColor}" rx="1" stroke="#92400e" stroke-width="0.5"/>`;
        svg += `<rect x="${ox}" y="${oy + drawH - sW}" width="${drawW}" height="${sW}" fill="${boedenColor}" rx="1" stroke="#92400e" stroke-width="0.5"/>`;
        svg += `<rect x="${ox}" y="${oy + sW}" width="${sW}" height="${drawH - 2 * sW}" fill="${seitenColor}" rx="0.5" stroke="#92400e" stroke-width="0.5"/>`;
        svg += `<rect x="${ox + drawW - sW}" y="${oy + sW}" width="${sW}" height="${drawH - 2 * sW}" fill="${seitenColor}" rx="0.5" stroke="#92400e" stroke-width="0.5"/>`;
    }

    // Bemaßung Breite (oben)
    const arrY = oy - 8;
    svg += `<line x1="${ox}" y1="${arrY}" x2="${ox + drawW}" y2="${arrY}" stroke="${dimColor}" stroke-width="0.8" marker-start="url(#arr)" marker-end="url(#arr)"/>`;
    svg += `<text x="${ox + drawW / 2}" y="${arrY - 3}" text-anchor="middle" fill="${dimColor}" font-size="10" font-weight="600">${b} mm</text>`;

    // Bemaßung Höhe (rechts)
    const arrX = ox + drawW + 10;
    svg += `<line x1="${arrX}" y1="${oy}" x2="${arrX}" y2="${oy + drawH}" stroke="${dimColor}" stroke-width="0.8" marker-start="url(#arr)" marker-end="url(#arr)"/>`;
    svg += `<text x="${arrX + 4}" y="${oy + drawH / 2}" text-anchor="start" fill="${dimColor}" font-size="10" font-weight="600" dominant-baseline="middle">${h} mm</text>`;

    // Legende
    const legY = oy + drawH + 16;
    svg += `<rect x="${ox}" y="${legY}" width="10" height="10" fill="${seitenColor}" rx="1"/>`;
    svg += `<text x="${ox + 14}" y="${legY + 8}" fill="${dimColor}" font-size="9">Seiten${istSeitenDurch ? ' (durch)' : ''}</text>`;
    svg += `<rect x="${ox + 80}" y="${legY}" width="10" height="10" fill="${boedenColor}" rx="1"/>`;
    svg += `<text x="${ox + 94}" y="${legY + 8}" fill="${dimColor}" font-size="9">Böden${istSeitenDurch ? '' : ' (durch)'}</text>`;

    // Arrow marker definition
    const defs = `<defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,1 L3,3 L0,5" fill="none" stroke="${dimColor}" stroke-width="0.8"/></marker></defs>`;

    svgEl.innerHTML = defs + svg;
}

function renumberSchraenke() {
    const container = document.getElementById('schraenke-container');
    container.querySelectorAll('.schrank-block').forEach((block, i) => {
        block.querySelector('.calc-step').textContent = i + 1;
    });
}

// --- berechneSchrank ---
function berechneSchrank(block) {
    const bezeichnung = block.querySelector('.schrank-bezeichnung').value || 'Schrank';

    // Korpus
    const korpusResult = berechneKorpus(block);

    // Front
    const frontResult = berechneKomponente(block, 'front');

    // Rückwand
    const rueckwandResult = berechneKomponente(block, 'rueckwand');

    // Beschläge
    let beschlaegeKosten = 0;
    const beschlaegeDetails = [];
    block.querySelectorAll('.schrank-beschlaege-container .beschlag-row').forEach(row => {
        const sel = row.querySelector('.beschlag-typ');
        const val = sel.value;
        const info = beschlagLookup[val];
        const menge = parseInt(row.querySelector('.beschlag-anzahl').value) || 0;
        if (info && menge > 0) {
            beschlaegeKosten += info.price * menge;
            beschlaegeDetails.push({ name: info.name, menge, preis: info.price, summe: info.price * menge });
        }
    });

    // Verbindungsmittel
    let verbindungsmittelKosten = 0;
    const verbindungsmittelDetails = [];
    block.querySelectorAll('.schrank-verbindungsmittel-container .verbindungsmittel-row').forEach(row => {
        const sel = row.querySelector('.verbindungsmittel-typ');
        const val = sel.value;
        const info = verbindungsmittelLookup[val];
        const menge = parseInt(row.querySelector('.verbindungsmittel-anzahl').value) || 0;
        if (info && menge > 0) {
            verbindungsmittelKosten += info.price * menge;
            verbindungsmittelDetails.push({ name: info.name, menge, preis: info.price, summe: info.price * menge });
        }
    });

    const materialGesamt = korpusResult.kosten + frontResult.kosten + rueckwandResult.kosten + beschlaegeKosten + verbindungsmittelKosten;

    return {
        bezeichnung,
        korpus: korpusResult,
        front: frontResult,
        rueckwand: rueckwandResult,
        beschlaegeDetails,
        beschlaegeKosten,
        verbindungsmittelDetails,
        verbindungsmittelKosten,
        materialGesamt,
        schrankSumme: materialGesamt
    };
}

function berechneKorpus(block) {
    const h = parseFloat(block.querySelector('.korpus-hoehe').value) || 0;
    const b = parseFloat(block.querySelector('.korpus-breite').value) || 0;
    const t = parseFloat(block.querySelector('.korpus-tiefe').value) || 0;
    const verschnitt = parseFloat(block.querySelector('.korpus-verschnitt').value) / 100 || 0.15;

    const staerkeSel = block.querySelector('.korpus-staerke');
    const staerkeOpt = staerkeSel.options[staerkeSel.selectedIndex];
    const materialPreis = parseFloat(staerkeOpt?.dataset?.preis) || 0;
    const staerke = parseFloat(staerkeSel.value) || 19;
    const staerkeText = staerkeOpt?.textContent || (staerke + ' mm');
    const typSel = block.querySelector('.korpus-typ');
    const materialName = typSel ? (typSel.options[typSel.selectedIndex]?.textContent || '') : '';

    // Konstruktionsart: Seiten oder Böden durchgehend
    const konstruktion = getKonstruktionsart(block);
    const istSeitenDurch = konstruktion === 'seiten';
    const innerB = istSeitenDurch ? Math.max(b - 2 * staerke, 0) : b;
    const seitenH = istSeitenDurch ? h : Math.max(h - 2 * staerke, 0);
    const seitenFlaeche = 2 * (seitenH / 1000) * (t / 1000);
    const bodenDeckelFlaeche = 2 * (innerB / 1000) * (t / 1000);
    const flaecheNetto = seitenFlaeche + bodenDeckelFlaeche;
    const flaecheBrutto = flaecheNetto * (1 + verschnitt);
    let materialkosten = flaecheBrutto * materialPreis;

    // Oberfläche (Mehrfach-Produkte)
    let oberflaecheKosten = 0;
    let oberflaecheName = '';
    const oberflaecheDetails = [];
    if (block.querySelector('.korpus-oberflaeche-aktiv').checked) {
        block.querySelectorAll('.korpus-oberflaeche-rows .oberflaeche-row').forEach(row => {
            const obTyp = row.querySelector('.korpus-oberflaeche-typ').value;
            const obInfo = oberflaecheLookup[obTyp];
            if (obInfo) {
                const anstriche = parseInt(row.querySelector('.korpus-oberflaeche-anstriche').value) || 2;
                const literBedarf = (flaecheNetto * anstriche) / obInfo.coverage;
                const kosten = literBedarf * obInfo.price;
                oberflaecheKosten += kosten;
                oberflaecheDetails.push({ name: obInfo.name, liter: literBedarf, kosten });
                // Update liter display
                const literDisplay = row.querySelector('.oberflaeche-liter-value');
                if (literDisplay) literDisplay.textContent = literBedarf.toFixed(2).replace('.', ',') + ' L';
            }
        });
        oberflaecheName = oberflaecheDetails.map(d => d.name).join(', ');
    }

    // Kanten (mit Plattenseiten-Checkboxen)
    let kantenKosten = 0;
    let kantenName = '';
    let kantenAutoLfm = 0;
    if (block.querySelector('.korpus-kanten-aktiv').checked) {
        const kTyp = block.querySelector('.korpus-kanten-typ').value;
        const kInfo = kantenLookup[kTyp];
        if (kInfo) {
            // Kanten aus Checkboxen berechnen
            const isChecked = (kante) => {
                const cb = block.querySelector(`.korpus-kante-cb[data-kante="${kante}"]`);
                return cb ? cb.checked : false;
            };

            // Seiten (2 Stück): Höhe je nach Konstruktion, Tiefe T
            if (isChecked('seite-vorne'))  kantenAutoLfm += 2 * seitenH / 1000;
            if (isChecked('seite-hinten')) kantenAutoLfm += 2 * seitenH / 1000;
            if (isChecked('seite-oben'))   kantenAutoLfm += 2 * t / 1000;
            if (isChecked('seite-unten'))  kantenAutoLfm += 2 * t / 1000;

            // Boden (1 Stück): Breite je nach Konstruktion, Tiefe T
            if (isChecked('boden-vorne'))  kantenAutoLfm += innerB / 1000;
            if (isChecked('boden-hinten')) kantenAutoLfm += innerB / 1000;
            if (isChecked('boden-links'))  kantenAutoLfm += t / 1000;
            if (isChecked('boden-rechts')) kantenAutoLfm += t / 1000;

            // Deckel (1 Stück): Breite je nach Konstruktion, Tiefe T
            if (isChecked('deckel-vorne'))  kantenAutoLfm += innerB / 1000;
            if (isChecked('deckel-hinten')) kantenAutoLfm += innerB / 1000;
            if (isChecked('deckel-links'))  kantenAutoLfm += t / 1000;
            if (isChecked('deckel-rechts')) kantenAutoLfm += t / 1000;

            // Extras - Kanten pro Extra-Row berechnen
            block.querySelectorAll('.korpus-extras-container .korpus-extra-row').forEach(row => {
                const type = row.dataset.extraType;
                const anz = parseInt(row.querySelector('.extra-anzahl').value) || 1;
                const isBoden = (type === 'zwischenboden' || type === 'einlegeboden');
                let extraLfm = 0;

                row.querySelectorAll('.extra-kante-cb:checked').forEach(cb => {
                    const seite = cb.dataset.kante;
                    if (isBoden) {
                        // Zwischenboden/Einlegeboden: vorne/hinten = innerB, links/rechts = T
                        if (seite === 'vorne' || seite === 'hinten') extraLfm += anz * innerB / 1000;
                        if (seite === 'links' || seite === 'rechts') extraLfm += anz * t / 1000;
                    } else {
                        // Mittelseite: vorne/hinten = H, oben/unten = T
                        if (seite === 'vorne' || seite === 'hinten') extraLfm += anz * h / 1000;
                        if (seite === 'oben' || seite === 'unten')   extraLfm += anz * t / 1000;
                    }
                });

                kantenAutoLfm += extraLfm;

                // Update Extra-Kanten-Anzeige
                const lfmVal = row.querySelector('.extra-kanten-lfm-value');
                if (lfmVal) lfmVal.textContent = extraLfm.toFixed(2).replace('.', ',');
            });

            const extraLfm = parseFloat(block.querySelector('.korpus-kanten-lfm-extra').value) || 0;
            kantenKosten = (kantenAutoLfm + extraLfm) * kInfo.price;
            kantenName = kInfo.name;

            // Update display
            const lfmDisplay = block.querySelector('.korpus-kanten-lfm-auto');
            if (lfmDisplay) lfmDisplay.textContent = kantenAutoLfm.toFixed(2).replace('.', ',');
        }
    }

    // Extras (Breitenabzug bei einschlagender Front)
    const frontTypArt = block.querySelector('.front-typ-art')?.value || 'aufschlagend';
    const frontStaerke = parseFloat(block.querySelector('.front-staerke')?.value) || 19;
    let extrasKosten = 0;
    const extrasDetails = [];
    block.querySelectorAll('.korpus-extras-container .korpus-extra-row').forEach(row => {
        const type = row.dataset.extraType;
        const anzahl = parseInt(row.querySelector('.extra-anzahl').value) || 1;
        let extraFlaeche = 0;
        let extraBreite = innerB;
        // Bei einschlagender Front: Böden schmaler (Frontstärke abziehen)
        if (frontTypArt === 'einschlagend' && (type === 'zwischenboden' || type === 'einlegeboden')) {
            extraBreite = Math.max(innerB - frontStaerke, 0);
        }
        if (type === 'zwischenboden' || type === 'einlegeboden') {
            extraFlaeche = anzahl * (extraBreite / 1000) * (t / 1000);
        } else if (type === 'mittelseite') {
            extraFlaeche = anzahl * (h / 1000) * (t / 1000);
        }
        const extraMat = extraFlaeche * (1 + verschnitt) * materialPreis;
        extrasKosten += extraMat;
        extrasDetails.push({ type, anzahl, flaeche: extraFlaeche, kosten: extraMat });
    });

    const kosten = materialkosten + oberflaecheKosten + kantenKosten + extrasKosten;

    return {
        hoehe: h, breite: b, tiefe: t,
        materialName, staerkeText,
        flaecheNetto, flaecheBrutto,
        materialkosten, oberflaecheKosten, oberflaecheName,
        kantenKosten, kantenName,
        extrasKosten, extrasDetails,
        kosten
    };
}

function berechneKomponente(block, prefix) {
    const hEl = block.querySelector('.' + prefix + '-hoehe');
    const bEl = block.querySelector('.' + prefix + '-breite');
    const h = parseFloat(hEl ? hEl.value : 0) || 0;
    const b = parseFloat(bEl ? bEl.value : 0) || 0;
    const anzahlEl = block.querySelector('.' + prefix + '-anzahl');
    const anzahl = anzahlEl ? (parseInt(anzahlEl.value) || 1) : 1;

    const staerkeSel = block.querySelector('.' + prefix + '-staerke');
    const staerkeOpt = staerkeSel.options[staerkeSel.selectedIndex];
    const materialPreis = parseFloat(staerkeOpt?.dataset?.preis) || 0;
    const staerkeText = staerkeOpt?.textContent || '';
    const typSel = block.querySelector('.' + prefix + '-typ');
    const materialName = typSel ? (typSel.options[typSel.selectedIndex]?.textContent || '') : '';

    const flaecheNetto = (h / 1000) * (b / 1000) * anzahl;
    const flaecheBrutto = flaecheNetto * 1.15; // 15% standard für Front/Rückwand
    let materialkosten = flaecheBrutto * materialPreis;

    // Oberfläche (Mehrfach-Produkte)
    let oberflaecheKosten = 0;
    let oberflaecheName = '';
    if (block.querySelector('.' + prefix + '-oberflaeche-aktiv').checked) {
        block.querySelectorAll('.' + prefix + '-oberflaeche-rows .oberflaeche-row').forEach(row => {
            const obTyp = row.querySelector('.' + prefix + '-oberflaeche-typ').value;
            const obInfo = oberflaecheLookup[obTyp];
            if (obInfo) {
                const anstriche = parseInt(row.querySelector('.' + prefix + '-oberflaeche-anstriche').value) || 2;
                const literBedarf = (flaecheNetto * anstriche) / obInfo.coverage;
                oberflaecheKosten += literBedarf * obInfo.price;
                oberflaecheName += (oberflaecheName ? ', ' : '') + obInfo.name;
                const literDisplay = row.querySelector('.oberflaeche-liter-value');
                if (literDisplay) literDisplay.textContent = literBedarf.toFixed(2).replace('.', ',') + ' L';
            }
        });
    }

    // Kanten
    let kantenKosten = 0;
    let kantenName = '';
    if (block.querySelector('.' + prefix + '-kanten-aktiv').checked) {
        const kTyp = block.querySelector('.' + prefix + '-kanten-typ').value;
        const kInfo = kantenLookup[kTyp];
        if (kInfo) {
            // Auto-Kanten für Front/Rückwand: Umfang = 2×H + 2×B
            const autoLfm = (2 * h + 2 * b) / 1000 * anzahl;
            const extraLfm = parseFloat(block.querySelector('.' + prefix + '-kanten-lfm-extra').value) || 0;
            kantenKosten = (autoLfm + extraLfm) * kInfo.price;
            kantenName = kInfo.name;
        }
    }

    const kosten = materialkosten + oberflaecheKosten + kantenKosten;

    return {
        hoehe: h, breite: b, anzahl,
        materialName, staerkeText,
        flaecheNetto, flaecheBrutto,
        materialkosten, oberflaecheKosten, oberflaecheName,
        kantenKosten, kantenName,
        kosten
    };
}

function triggerSchrankCalc(block) {
    try {
        const result = berechneSchrank(block);
        const sumEl = block.querySelector('.schrank-sum');
        if (sumEl) {
            sumEl.textContent = formatCurrency(result.schrankSumme);
            sumEl.classList.toggle('pos-sum-zero', result.schrankSumme === 0);
        }
    } catch (e) { /* ignore partial data errors */ }
}

// --- collectSchrankData ---
function collectSchrankData(block) {
    const collectComponent = (prefix) => {
        const hEl = block.querySelector('.' + prefix + '-hoehe');
        const bEl = block.querySelector('.' + prefix + '-breite');
        const anzahlEl = block.querySelector('.' + prefix + '-anzahl');
        const typArtEl = block.querySelector('.' + prefix + '-typ-art');
        const luftHEl = block.querySelector('.' + prefix + '-luft-hoehe');
        const luftBEl = block.querySelector('.' + prefix + '-luft-breite');
        const fugeEl = block.querySelector('.' + prefix + '-fuge');
        return {
            kategorie: block.querySelector('.' + prefix + '-kategorie').value,
            typ: block.querySelector('.' + prefix + '-typ').value,
            staerke: parseFloat(block.querySelector('.' + prefix + '-staerke').value) || 0,
            hoehe: hEl ? parseFloat(hEl.value) || 0 : 0,
            breite: bEl ? parseFloat(bEl.value) || 0 : 0,
            anzahl: anzahlEl ? parseInt(anzahlEl.value) || 1 : 1,
            typArt: typArtEl ? typArtEl.value : undefined,
            luftHoehe: luftHEl ? parseFloat(luftHEl.value) || 0 : undefined,
            luftBreite: luftBEl ? parseFloat(luftBEl.value) || 0 : undefined,
            fuge: fugeEl ? parseFloat(fugeEl.value) || 0 : undefined,
            oberflaecheAktiv: block.querySelector('.' + prefix + '-oberflaeche-aktiv').checked,
            oberflaecheProdukte: Array.from(block.querySelectorAll('.' + prefix + '-oberflaeche-rows .oberflaeche-row')).map(row => ({
                typ: row.querySelector('.' + prefix + '-oberflaeche-typ').value,
                anstriche: parseInt(row.querySelector('.' + prefix + '-oberflaeche-anstriche').value) || 2
            })),
            // Legacy compat
            oberflaecheTyp: block.querySelector('.' + prefix + '-oberflaeche-typ')?.value || '',
            oberflaecheAnstriche: parseInt(block.querySelector('.' + prefix + '-oberflaeche-anstriche')?.value) || 2,
            kantenAktiv: block.querySelector('.' + prefix + '-kanten-aktiv').checked,
            kantenTyp: block.querySelector('.' + prefix + '-kanten-typ').value,
            kantenLfmExtra: parseFloat(block.querySelector('.' + prefix + '-kanten-lfm-extra').value) || 0,
        };
    };

    const korpusData = collectComponent('korpus');
    korpusData.tiefe = parseFloat(block.querySelector('.korpus-tiefe').value) || 0;
    korpusData.verschnitt = parseInt(block.querySelector('.korpus-verschnitt').value) || 15;
    korpusData.konstruktion = getKonstruktionsart(block);

    // Kanten-Checkboxen sammeln
    const kantenCbs = {};
    block.querySelectorAll('.korpus-kante-cb').forEach(cb => {
        kantenCbs[cb.dataset.kante] = cb.checked;
    });
    korpusData.kantenCheckboxen = kantenCbs;

    // Extras
    const extras = [];
    block.querySelectorAll('.korpus-extras-container .korpus-extra-row').forEach(row => {
        const kanten = {};
        row.querySelectorAll('.extra-kante-cb').forEach(cb => {
            kanten[cb.dataset.kante] = cb.checked;
        });
        extras.push({
            type: row.dataset.extraType,
            anzahl: parseInt(row.querySelector('.extra-anzahl').value) || 1,
            eigenesMaterial: row.querySelector('.extra-eigenes-material') ? row.querySelector('.extra-eigenes-material').checked : false,
            kanten
        });
    });
    korpusData.extras = extras;

    // Beschläge
    const beschlaege = [];
    block.querySelectorAll('.schrank-beschlaege-container .beschlag-row').forEach(row => {
        const sel = row.querySelector('.beschlag-typ');
        const val = sel.value;
        const anzahl = parseInt(row.querySelector('.beschlag-anzahl').value) || 0;
        if (val && anzahl > 0) {
            beschlaege.push({ typ: val, anzahl });
        }
    });

    // Verbindungsmittel
    const verbindungsmittel = [];
    block.querySelectorAll('.schrank-verbindungsmittel-container .verbindungsmittel-row').forEach(row => {
        const sel = row.querySelector('.verbindungsmittel-typ');
        const val = sel.value;
        const anzahl = parseInt(row.querySelector('.verbindungsmittel-anzahl').value) || 0;
        if (val && anzahl > 0) {
            verbindungsmittel.push({ typ: val, anzahl });
        }
    });

    return {
        bezeichnung: block.querySelector('.schrank-bezeichnung').value.trim(),
        korpus: korpusData,
        front: collectComponent('front'),
        rueckwand: collectComponent('rueckwand'),
        beschlaege,
        verbindungsmittel
    };
}

// --- Legacy conversion ---
function convertLegacyPosition(pos) {
    return {
        bezeichnung: pos.bezeichnung || 'Position',
        korpus: {
            kategorie: pos.kategorie,
            typ: pos.typ,
            staerke: pos.staerke,
            hoehe: pos.laenge || 0,
            breite: pos.breite || 0,
            tiefe: 0,
            verschnitt: pos.verschnitt || 15,
            oberflaecheAktiv: pos.oberflaecheAktiv || false,
            oberflaecheTyp: pos.oberflaecheTyp || '',
            oberflaecheAnstriche: pos.oberflaecheAnstriche || 2,
            kantenAktiv: false,
            kantenTyp: '',
            kantenLfmExtra: 0,
            extras: []
        },
        front: { kategorie: '', typ: '', staerke: 0, hoehe: 0, breite: 0, anzahl: 1, oberflaecheAktiv: false, oberflaecheTyp: '', oberflaecheAnstriche: 2, kantenAktiv: false, kantenTyp: '', kantenLfmExtra: 0 },
        rueckwand: { kategorie: '', typ: '', staerke: 0, hoehe: 0, breite: 0, anzahl: 1, oberflaecheAktiv: false, oberflaecheTyp: '', oberflaecheAnstriche: 2, kantenAktiv: false, kantenTyp: '', kantenLfmExtra: 0 },
        beschlaege: pos.beschlaege || []
    };
}

// ==================== POSITION BLOCK ====================
function buildOberflaecheOptions(preselect) {
    let html = '<option value="">-- Auswählen --</option>';
    // Eigene Oberflächen zuerst
    if (eigeneArtikelOberflaechen.length > 0) {
        html += '<optgroup label="Eigene Oberflächen">';
        eigeneArtikelOberflaechen.forEach(o => {
            html += '<option value="eigen_' + o.id + '">' + escapeHtml(o.name) + ' (' + o.price + '\u20ac/L, ' + o.coverage + 'm\u00b2/L)</option>';
        });
        html += '</optgroup>';
    }
    oberflaecheOptionen.forEach(g => {
        html += '<optgroup label="' + escapeHtml(g.group) + '">';
        g.items.forEach(i => {
            html += '<option value="' + i.value + '">' + escapeHtml(i.name) + ' (' + i.price + '\u20ac/L, ' + i.coverage + 'm\u00b2/L)</option>';
        });
        html += '</optgroup>';
    });
    return html;
}

function buildBeschlagOptions() {
    let html = '<option value="">Kein Beschlag</option>';
    // Eigene Beschläge zuerst
    if (eigeneArtikelBeschlaege.length > 0) {
        html += '<optgroup label="Eigene Beschläge">';
        eigeneArtikelBeschlaege.forEach(b => {
            html += '<option value="eigen_' + b.id + '">' + escapeHtml(b.name) + ' (' + b.price.toFixed(2).replace('.', ',') + '\u20ac)</option>';
        });
        html += '</optgroup>';
    }
    beschlagOptionen.forEach(g => {
        html += '<optgroup label="' + escapeHtml(g.group) + '">';
        g.items.forEach(i => {
            html += '<option value="' + i.value + '">' + escapeHtml(i.name) + ' (' + i.price.toFixed(2).replace('.', ',') + '\u20ac)</option>';
        });
        html += '</optgroup>';
    });
    return html;
}

function buildKategorieOptions() {
    // Material categories grouped logically
    const gruppen = {
        'Plattenwerkstoffe': ['spanplatte', 'mdf', 'osb', 'hpl'],
        'Massivholz & Leimholz': ['leimholz', 'vollholz'],
        'Sperrholz & Platten': ['multiplex', 'tischlerplatte']
    };
    let html = '<option value="">-- Auswählen --</option>';
    for (const [gruppenName, keys] of Object.entries(gruppen)) {
        html += '<optgroup label="' + escapeHtml(gruppenName) + '">';
        keys.forEach(key => {
            if (materialDaten[key]) {
                html += '<option value="' + key + '">' + escapeHtml(materialDaten[key].name) + '</option>';
            }
        });
        html += '</optgroup>';
    }
    return html;
}

function addPositionBlock(data, targetContainerId) {
    positionCounter++;
    const idx = positionCounter;
    const container = document.getElementById(targetContainerId || 'positionen-container');

    const block = document.createElement('div');
    block.className = 'calc-card position-block';
    block.dataset.posIdx = idx;
    block.innerHTML = `
        <div class="calc-header position-header" data-toggle-pos="${idx}">
            <span class="calc-step">${idx}</span>
            <div class="position-title-wrap">
                <h3 class="pos-title-display">${escapeHtml(data ? data.bezeichnung : 'Position ' + idx)}</h3>
                <p class="pos-subtitle">Klicken zum Auf-/Zuklappen</p>
            </div>
            <span class="pos-sum" id="pos-sum-${idx}">0,00 \u20ac</span>
            <button type="button" class="btn-remove-pos" data-remove-pos="${idx}" title="Position entfernen">&times;</button>
        </div>
        <div class="calc-body position-body" id="pos-body-${idx}">
            <div class="form-grid-3">
                <div class="form-group">
                    <label class="label-required">Bezeichnung</label>
                    <input type="text" class="pos-bezeichnung" value="${escapeHtml(data ? data.bezeichnung : '')}" placeholder="z.B. Korpus">
                </div>
                <div class="form-group">
                    <label class="label-required">Kategorie</label>
                    <select class="pos-kategorie ${!data || !data.kategorie ? 'field-required' : ''}">${buildKategorieOptions()}</select>
                </div>
                <div class="form-group">
                    <label class="label-required">Typ</label>
                    <div class="quick-add-wrap">
                        <select class="pos-typ ${!data || !data.typ ? 'field-required' : ''}" disabled><option value="">-- Erst Kategorie --</option></select>
                        <button type="button" class="btn-quick-add" onclick="openQuickAdd('material', this)" title="Eigenes Material hinzufügen">+</button>
                    </div>
                </div>
            </div>
            <div class="form-grid-3">
                <div class="form-group">
                    <label class="label-required">Stärke</label>
                    <select class="pos-staerke ${!data || !data.staerke ? 'field-required' : ''}" disabled><option value="">-- Erst Typ --</option></select>
                </div>
                <div class="form-group">
                    <label>Länge (mm)</label>
                    <input type="number" class="pos-laenge" min="1" step="1" value="${data ? data.laenge : ''}" placeholder="z.B. 2000">
                </div>
                <div class="form-group">
                    <label>Breite (mm)</label>
                    <input type="number" class="pos-breite" min="1" step="1" value="${data ? data.breite : ''}" placeholder="z.B. 600">
                </div>
            </div>
            <div class="form-grid-3">
                <div class="form-group">
                    <label>Anzahl</label>
                    <input type="number" class="pos-anzahl" min="1" value="${data ? data.anzahl : 1}">
                </div>
                <div class="form-group">
                    <label>Verschnitt</label>
                    <div class="pct-combo">
                        <select class="pct-presets pos-verschnitt-presets">
                            <option value="5" ${data && data.verschnitt == 5 ? 'selected' : ''}>5%</option>
                            <option value="10" ${data && data.verschnitt == 10 ? 'selected' : ''}>10%</option>
                            <option value="15" ${(!data || data.verschnitt == 15) ? 'selected' : ''}>15%</option>
                            <option value="20" ${data && data.verschnitt == 20 ? 'selected' : ''}>20%</option>
                            <option value="25" ${data && data.verschnitt == 25 ? 'selected' : ''}>25%</option>
                            <option value="30" ${data && data.verschnitt == 30 ? 'selected' : ''}>30%</option>
                            <option value="custom" ${data && ![5,10,15,20,25,30].includes(data.verschnitt) ? 'selected' : ''}>Eigener Wert</option>
                        </select>
                        <input type="number" class="klr-input pos-verschnitt" min="0" max="40" step="1" value="${data ? data.verschnitt : 15}">
                        <span class="pct-unit">%</span>
                    </div>
                </div>
            </div>

            <!-- Oberfläche -->
            <div class="sub-section">
                <label class="toggle-label">
                    <input type="checkbox" class="pos-oberflaeche-aktiv" ${data && data.oberflaecheAktiv ? 'checked' : ''}>
                    <span class="toggle-text">Oberflächenbehandlung</span>
                </label>
                <div class="pos-oberflaeche-details ${data && data.oberflaecheAktiv ? '' : 'hidden'}">
                    <div class="form-grid-2" style="margin-top:12px">
                        <div class="form-group">
                            <label>Produkt</label>
                            <div class="quick-add-wrap">
                                <select class="pos-oberflaeche-typ">${buildOberflaecheOptions()}</select>
                                <button type="button" class="btn-quick-add" onclick="openQuickAdd('oberflaeche', this)" title="Eigene Oberfläche hinzufügen">+</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Anzahl Anstriche</label>
                            <select class="pos-oberflaeche-anstriche">
                                <option value="1" ${data && data.oberflaecheAnstriche == 1 ? 'selected' : ''}>1 Anstrich</option>
                                <option value="2" ${!data || data.oberflaecheAnstriche == 2 ? 'selected' : ''}>2 Anstriche</option>
                                <option value="3" ${data && data.oberflaecheAnstriche == 3 ? 'selected' : ''}>3 Anstriche</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Beschläge -->
            <div class="sub-section">
                <h4 class="sub-section-title">Beschläge</h4>
                <div class="pos-beschlaege-container">
                    ${data && data.beschlaege && data.beschlaege.length > 0
                        ? data.beschlaege.map(b => buildBeschlagRow(b)).join('')
                        : buildBeschlagRow()
                    }
                </div>
                <button type="button" class="btn-add btn-add-sm pos-add-beschlag">
                    <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
                    Beschlag hinzufügen
                </button>
            </div>

            <!-- Arbeitszeit -->
            <div class="sub-section">
                <h4 class="sub-section-title">Arbeitszeit</h4>
                <div class="arbeitszeit-header">
                    <span>Mitarbeiter</span>
                    <span>\u20ac/Std</span>
                    <span>Stunden</span>
                </div>
                <div class="pos-arbeitszeit-container">
                    ${data && data.arbeitszeiten && data.arbeitszeiten.length > 0
                        ? data.arbeitszeiten.map(a => buildArbeitszeitRow(a)).join('')
                        : buildArbeitszeitRow()
                    }
                </div>
                <button type="button" class="btn-add btn-add-sm pos-add-arbeitszeit">
                    <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
                    Person hinzufügen
                </button>
            </div>
        </div>
    `;

    container.appendChild(block);

    // Set values that need DOM (selects with cascading)
    if (data) {
        const katSel = block.querySelector('.pos-kategorie');
        katSel.value = data.kategorie || '';
        if (data.kategorie) {
            populateTypSelect(katSel, data.typ);
            if (data.typ) {
                const typSel = block.querySelector('.pos-typ');
                setTimeout(() => populateStaerkeSelect(typSel, data.staerke), 0);
            }
        }
        if (data.oberflaecheTyp) {
            block.querySelector('.pos-oberflaeche-typ').value = data.oberflaecheTyp;
        }
    }

    // Bind position events
    bindPositionEvents(block, idx);
}

function buildBeschlagRow(data) {
    const options = buildBeschlagOptions();
    const selectedTyp = data ? data.typ : '';
    // Setze selected-Attribut auf die richtige Option
    let processedOptions = options;
    if (selectedTyp) {
        processedOptions = options.replace(
            'value="' + selectedTyp + '"',
            'value="' + selectedTyp + '" selected'
        );
    }
    return `<div class="inline-row beschlag-row">
        <div class="quick-add-wrap" style="flex:1">
            <select class="beschlag-typ">${processedOptions}</select>
            <button type="button" class="btn-quick-add" onclick="openQuickAdd('beschlag', this)" title="Eigenen Beschlag hinzufügen">+</button>
        </div>
        <div class="input-unit-wrap"><input type="number" class="beschlag-anzahl" min="0" value="${data ? data.anzahl : 0}" placeholder="Anzahl"><span class="input-unit">Stk.</span></div>
    </div>`;
}

function buildVerbindungsmittelOptions() {
    let html = '<option value="">Kein Verbindungsmittel</option>';
    verbindungsmittelOptionen.forEach(g => {
        html += '<optgroup label="' + escapeHtml(g.group) + '">';
        g.items.forEach(i => {
            html += '<option value="' + i.value + '">' + escapeHtml(i.name) + ' (' + i.price.toFixed(2).replace('.', ',') + '\u20ac)</option>';
        });
        html += '</optgroup>';
    });
    return html;
}

function buildVerbindungsmittelRow(data) {
    const options = buildVerbindungsmittelOptions();
    const selectedTyp = data ? data.typ : '';
    let processedOptions = options;
    if (selectedTyp) {
        processedOptions = options.replace(
            'value="' + selectedTyp + '"',
            'value="' + selectedTyp + '" selected'
        );
    }
    return `<div class="inline-row verbindungsmittel-row">
        <select class="verbindungsmittel-typ" style="flex:1">${processedOptions}</select>
        <div class="input-unit-wrap"><input type="number" class="verbindungsmittel-anzahl" min="0" value="${data ? data.anzahl : 0}" placeholder="Anzahl"><span class="input-unit">Stk.</span></div>
    </div>`;
}

function buildMontageWorkerRow(data) {
    const typ = data ? data.mitarbeiterTyp : 'Geselle';
    const satz = data ? data.stundensatz : 52;
    const std = data ? data.stunden : 0;
    const anz = data ? (data.anzahl || 1) : 1;
    return `<div class="montage-worker-row">
        <div class="input-unit-wrap"><input type="number" class="montage-anzahl" min="1" value="${anz}" placeholder="Anzahl"><span class="input-unit">Pers.</span></div>
        <select class="montage-typ">
            <option value="42" ${typ === 'Helfer / Azubi' || satz == 42 ? 'selected' : ''}>Helfer / Azubi (42 €/Std)</option>
            <option value="52" ${typ === 'Geselle' || satz == 52 ? 'selected' : ''}>Geselle (52 €/Std)</option>
            <option value="58" ${typ === 'Fachgeselle' || satz == 58 ? 'selected' : ''}>Fachgeselle (58 €/Std)</option>
            <option value="68" ${typ === 'Meister Werkstatt' || satz == 68 ? 'selected' : ''}>Meister Werkstatt (68 €/Std)</option>
            <option value="75" ${typ === 'Meister Baustelle' || satz == 75 ? 'selected' : ''}>Meister Baustelle (75 €/Std)</option>
        </select>
        <div class="input-unit-wrap"><input type="number" class="montage-satz" min="0" step="1" value="${satz}" placeholder="\u20ac/Std"><span class="input-unit">\u20ac/Std</span></div>
        <div class="input-unit-wrap"><input type="number" class="montage-stunden" min="0" step="0.5" value="${std}" placeholder="Std"><span class="input-unit">h</span></div>
        <button type="button" class="btn-remove-worker" onclick="removeMontageWorker(this)" title="Entfernen">&times;</button>
    </div>`;
}

function addMontageWorkerRow(containerId, data) {
    const container = document.getElementById(containerId);
    container.insertAdjacentHTML('beforeend', buildMontageWorkerRow(data));
    const row = container.lastElementChild;
    const typSelect = row.querySelector('.montage-typ');
    typSelect.addEventListener('change', function () {
        row.querySelector('.montage-satz').value = this.value;
    });
}

function removeMontageWorker(btn) {
    const container = btn.closest('.montage-worker-row').parentElement;
    if (container.querySelectorAll('.montage-worker-row').length <= 1) {
        showToast('Mindestens ein Mitarbeiter erforderlich', 'warning');
        return;
    }
    btn.closest('.montage-worker-row').remove();
}

function collectMontagePersonal(containerId) {
    const rows = document.querySelectorAll('#' + containerId + ' .montage-worker-row');
    const personal = [];
    rows.forEach(row => {
        const typSelect = row.querySelector('.montage-typ');
        personal.push({
            anzahl: parseInt(row.querySelector('.montage-anzahl').value) || 1,
            mitarbeiterTyp: typSelect.options[typSelect.selectedIndex].text,
            stundensatz: parseFloat(row.querySelector('.montage-satz').value) || 0,
            stunden: parseFloat(row.querySelector('.montage-stunden').value) || 0
        });
    });
    return personal;
}

function calcMontageKosten(prefix) {
    const anfahrt = parseFloat(document.getElementById(prefix + '-anfahrtpauschale').value) || 0;
    const gebrauchsmittel = parseFloat(document.getElementById(prefix + '-gebrauchsmittel').value) || 0;
    const containerId = prefix + '-montage-personal-container';
    const personal = collectMontagePersonal(containerId);
    let personalKosten = 0;
    const personalDetails = [];
    personal.forEach(p => {
        const kosten = p.anzahl * p.stundensatz * p.stunden;
        personalKosten += kosten;
        if (p.stunden > 0) {
            personalDetails.push({
                anzahl: p.anzahl,
                typ: p.mitarbeiterTyp,
                stundensatz: p.stundensatz,
                stunden: p.stunden,
                kosten: kosten
            });
        }
    });
    return {
        anfahrt,
        personalKosten,
        personalDetails,
        gebrauchsmittel,
        gesamt: anfahrt + personalKosten + gebrauchsmittel
    };
}

function buildArbeitszeitRow(data) {
    const typ = data ? data.mitarbeiterTyp : 'Fachgeselle';
    const satz = data ? data.stundensatz : 58;
    const std = data ? data.stunden : 0;
    return `<div class="arbeitszeit-row-new">
        <select class="mitarbeiter-typ" title="Mitarbeitertyp">
            <option value="42" ${typ === 'Helfer / Azubi' || satz == 42 ? 'selected' : ''}>Helfer / Azubi (42 €/Std)</option>
            <option value="52" ${typ === 'Geselle' || satz == 52 ? 'selected' : ''}>Geselle (52 €/Std)</option>
            <option value="58" ${typ === 'Fachgeselle' || satz == 58 ? 'selected' : ''}>Fachgeselle (58 €/Std)</option>
            <option value="68" ${typ === 'Meister Werkstatt' || satz == 68 ? 'selected' : ''}>Meister Werkstatt (68 €/Std)</option>
            <option value="75" ${typ === 'Meister Baustelle' || satz == 75 ? 'selected' : ''}>Meister Baustelle (75 €/Std)</option>
            <option value="72" ${typ === 'Arbeitsvorbereitung' || satz == 72 ? 'selected' : ''}>Arbeitsvorbereitung (72 €/Std)</option>
            <option value="85" ${typ === 'Planung / Techniker' || satz == 85 ? 'selected' : ''}>Planung / Techniker (85 €/Std)</option>
        </select>
        <div class="input-unit-wrap"><input type="number" class="mitarbeiter-satz" min="0" step="1" value="${satz}" placeholder="\u20ac/Std" title="Stundensatz"><span class="input-unit">\u20ac/Std</span></div>
        <div class="input-unit-wrap"><input type="number" class="stunden" min="0" step="0.5" value="${std}" placeholder="Stunden" title="Stunden"><span class="input-unit">h</span></div>
    </div>`;
}

function bindPositionEvents(block, idx) {
    // Toggle accordion
    block.querySelector('.position-header').addEventListener('click', (e) => {
        if (e.target.closest('.btn-remove-pos')) return;
        block.querySelector('.position-body').classList.toggle('hidden');
    });

    // Remove position
    block.querySelector('.btn-remove-pos').addEventListener('click', () => {
        const parentContainer = block.parentElement;
        if (parentContainer.querySelectorAll('.position-block').length <= 1) {
            showToast('Mindestens eine Position erforderlich', 'warning');
            return;
        }
        block.remove();
        renumberPositions(parentContainer);
    });

    // Bezeichnung sync
    const bezInput = block.querySelector('.pos-bezeichnung');
    bezInput.addEventListener('input', () => {
        block.querySelector('.pos-title-display').textContent = bezInput.value || 'Position ' + idx;
    });

    // Material cascading + live calc
    const katSel = block.querySelector('.pos-kategorie');
    katSel.addEventListener('change', () => { populateTypSelect(katSel); triggerLiveCalc(block); });

    const typSel = block.querySelector('.pos-typ');
    typSel.addEventListener('change', () => { populateStaerkeSelect(typSel); triggerLiveCalc(block); });

    // Staerke change
    block.querySelector('.pos-staerke').addEventListener('change', () => {
        block.querySelector('.pos-staerke').classList.toggle('field-required', !block.querySelector('.pos-staerke').value);
        triggerLiveCalc(block);
    });

    // Dimensions + Anzahl live calc
    ['pos-laenge', 'pos-breite', 'pos-anzahl'].forEach(cls => {
        const el = block.querySelector('.' + cls);
        if (el) el.addEventListener('input', () => triggerLiveCalc(block));
    });

    // Oberflaeche changes live calc
    block.querySelector('.pos-oberflaeche-typ').addEventListener('change', () => triggerLiveCalc(block));
    block.querySelector('.pos-oberflaeche-anstriche').addEventListener('change', () => triggerLiveCalc(block));

    // Verschnitt combo sync
    const verschnittPresets = block.querySelector('.pos-verschnitt-presets');
    const verschnittInput = block.querySelector('.pos-verschnitt');
    if (verschnittPresets && verschnittInput) {
        // Set initial preset
        const initVal = verschnittInput.value;
        const matchOpt = Array.from(verschnittPresets.options).find(o => o.value === initVal);
        if (matchOpt) verschnittPresets.value = initVal; else verschnittPresets.value = 'custom';

        verschnittPresets.addEventListener('change', () => {
            if (verschnittPresets.value !== 'custom') {
                verschnittInput.value = verschnittPresets.value;
                triggerLiveCalc(block);
            }
        });
        verschnittInput.addEventListener('input', () => {
            const val = verschnittInput.value;
            const m = Array.from(verschnittPresets.options).find(o => o.value === val);
            verschnittPresets.value = m ? val : 'custom';
            triggerLiveCalc(block);
        });
    }

    // Oberfläche toggle
    const obAktiv = block.querySelector('.pos-oberflaeche-aktiv');
    obAktiv.addEventListener('change', () => {
        block.querySelector('.pos-oberflaeche-details').classList.toggle('hidden', !obAktiv.checked);
        triggerLiveCalc(block);
    });

    // Add Beschlag
    block.querySelector('.pos-add-beschlag').addEventListener('click', () => {
        const container = block.querySelector('.pos-beschlaege-container');
        container.insertAdjacentHTML('beforeend', buildBeschlagRow());
    });

    // Add Arbeitszeit
    block.querySelector('.pos-add-arbeitszeit').addEventListener('click', () => {
        const container = block.querySelector('.pos-arbeitszeit-container');
        container.insertAdjacentHTML('beforeend', buildArbeitszeitRow());
        bindMitarbeiterSelects(container);
    });

    // Bind mitarbeiter selects
    bindMitarbeiterSelects(block.querySelector('.pos-arbeitszeit-container'));

    // Live calc on beschlag/arbeitszeit changes via delegation
    block.addEventListener('change', (e) => {
        if (e.target.matches('.beschlag-typ, .beschlag-anzahl, .mitarbeiter-typ, .mitarbeiter-satz, .stunden')) {
            triggerLiveCalc(block);
        }
    });
    block.addEventListener('input', (e) => {
        if (e.target.matches('.beschlag-anzahl, .mitarbeiter-satz, .stunden')) {
            triggerLiveCalc(block);
        }
    });

    // Initial live calc
    triggerLiveCalc(block);
}

function bindMitarbeiterSelects(container) {
    container.querySelectorAll('.mitarbeiter-typ').forEach(sel => {
        sel.removeEventListener('change', mitarbeiterChangeHandler);
        sel.addEventListener('change', mitarbeiterChangeHandler);
    });
}

function mitarbeiterChangeHandler() {
    const satzInput = this.closest('.arbeitszeit-row-new').querySelector('.mitarbeiter-satz');
    satzInput.value = this.value;
}

function populateTypSelect(katSelect, preselect) {
    const block = katSelect.closest('.position-block');
    const typSelect = block.querySelector('.pos-typ');
    const staerkeSelect = block.querySelector('.pos-staerke');
    const kategorie = katSelect.value;

    katSelect.classList.toggle('field-required', !kategorie);
    typSelect.innerHTML = '<option value="">-- Auswählen --</option>';
    staerkeSelect.innerHTML = '<option value="">-- Erst Typ --</option>';
    staerkeSelect.disabled = true;
    typSelect.classList.add('field-required');
    staerkeSelect.classList.add('field-required');

    if (kategorie && materialDaten[kategorie]) {
        typSelect.disabled = false;
        // Eigene Materialien der gewählten Kategorie oben einfügen
        const eigeneMats = eigeneArtikelMaterialien.filter(m => m.kategorie === kategorie);
        if (eigeneMats.length > 0) {
            const optgroup = document.createElement('optgroup');
            optgroup.label = 'Eigene Materialien';
            eigeneMats.forEach(m => {
                const option = document.createElement('option');
                option.value = 'eigen_' + m.id;
                option.textContent = m.name + ' (ab ' + m.basisPreis + '\u20ac/m\u00b2)';
                option.dataset.basispreis = m.basisPreis;
                optgroup.appendChild(option);
            });
            typSelect.appendChild(optgroup);
        }
        const typen = materialDaten[kategorie].typen;
        for (const [key, data] of Object.entries(typen)) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = data.name + ' (ab ' + data.basisPreis + '\u20ac/m\u00b2)';
            option.dataset.basispreis = data.basisPreis;
            typSelect.appendChild(option);
        }
        if (preselect) {
            typSelect.value = preselect;
            typSelect.classList.toggle('field-required', !preselect);
        }
    } else {
        typSelect.disabled = true;
    }
}

function populateStaerkeSelect(typSelect, preselect) {
    const block = typSelect.closest('.position-block');
    const katSelect = block.querySelector('.pos-kategorie');
    const staerkeSelect = block.querySelector('.pos-staerke');
    const kategorie = katSelect.value;

    typSelect.classList.toggle('field-required', !typSelect.value);
    staerkeSelect.innerHTML = '<option value="">-- Auswählen --</option>';
    staerkeSelect.classList.add('field-required');

    if (kategorie && typSelect.value && materialDaten[kategorie]) {
        staerkeSelect.disabled = false;
        const staerken = materialDaten[kategorie].staerken;
        const basisPreis = parseFloat(typSelect.options[typSelect.selectedIndex].dataset.basispreis);
        const preisProMm = materialDaten[kategorie].preisProMm;
        const basisStaerke = staerken[Math.floor(staerken.length / 2)];

        staerken.forEach(s => {
            const option = document.createElement('option');
            option.value = s;
            const preisAufschlag = (s - basisStaerke) * preisProMm;
            const endpreis = Math.max(basisPreis + preisAufschlag, basisPreis * 0.6);
            option.dataset.preis = endpreis.toFixed(2);
            option.textContent = s + ' mm (' + endpreis.toFixed(2) + '\u20ac/m\u00b2)';
            staerkeSelect.appendChild(option);
        });
        if (preselect) {
            staerkeSelect.value = String(preselect);
            staerkeSelect.classList.toggle('field-required', !preselect);
        }
    } else {
        staerkeSelect.disabled = true;
    }
}

function renumberPositions(container) {
    const root = container || document.getElementById('positionen-container');
    root.querySelectorAll('.position-block').forEach((block, i) => {
        block.querySelector('.calc-step').textContent = i + 1;
    });
}

// ==================== BERECHNUNG ====================
let letzteBerechnung = null;

function berechneAlles() {
    // Schrank-basierte Berechnung
    const schrankBlocks = document.querySelectorAll('#schraenke-container .schrank-block');
    const schraenkeErgebnisse = [];
    let materialEinzelkosten = 0;
    let fertigungsEinzelkosten = 0;

    schrankBlocks.forEach((block) => {
        const result = berechneSchrank(block);
        schraenkeErgebnisse.push(result);
        materialEinzelkosten += result.materialGesamt;
    });

    // Globale Arbeitszeit
    const globalArbeitContainer = document.getElementById('global-arbeitszeit-container');
    if (globalArbeitContainer) {
        globalArbeitContainer.querySelectorAll('.arbeitszeit-row-new').forEach(row => {
            const select = row.querySelector('.mitarbeiter-typ');
            const stundensatz = parseFloat(row.querySelector('.mitarbeiter-satz').value) || 0;
            const stunden = parseFloat(row.querySelector('.stunden').value) || 0;
            if (stunden > 0) {
                fertigungsEinzelkosten += stundensatz * stunden;
            }
        });
    }

    // Legacy: also check old position blocks if any remain (Rechnung-Tab uses these)
    const legacyBlocks = document.querySelectorAll('#positionen-container .position-block');
    const positionenErgebnisse = [];
    legacyBlocks.forEach((block) => {
        const result = berechnePosition(block);
        positionenErgebnisse.push(result);
        materialEinzelkosten += result.materialGesamt;
        fertigungsEinzelkosten += result.arbeitGesamt;
    });

    // KLR-Kalkulation
    const mgkProzent = parseFloat(document.getElementById('z-mgk').value) / 100 || 0;
    const fgkProzent = parseFloat(document.getElementById('z-fgk').value) / 100 || 0;
    const vwgkProzent = parseFloat(document.getElementById('z-vwgk').value) / 100 || 0;
    const vtgkProzent = parseFloat(document.getElementById('z-vtgk').value) / 100 || 0;
    const wugProzent = parseFloat(document.getElementById('z-wug').value) / 100 || 0;

    const mgkBetrag = materialEinzelkosten * mgkProzent;
    const materialKosten = materialEinzelkosten + mgkBetrag;

    const fgkBetrag = fertigungsEinzelkosten * fgkProzent;
    const fertigungsKosten = fertigungsEinzelkosten + fgkBetrag;

    const herstellKosten = materialKosten + fertigungsKosten;

    const vwgkBetrag = herstellKosten * vwgkProzent;
    const vtgkBetrag = herstellKosten * vtgkProzent;

    let anfahrtKosten = 0;
    let montageResult = calcMontageKosten('proj');
    if (montageResult && montageResult.gesamt > 0) {
        anfahrtKosten = montageResult.gesamt;
    }

    const selbstKosten = herstellKosten + vwgkBetrag + vtgkBetrag + anfahrtKosten;

    const wugBetrag = selbstKosten * wugProzent;
    const angebotspreis = selbstKosten + wugBetrag;

    const rabattProzent = parseFloat(document.getElementById('z-rabatt').value) / 100;
    const rabattBetrag = angebotspreis * rabattProzent;
    const netto = angebotspreis - rabattBetrag;

    const mwstSatz = currentMwstSatz / 100;
    const mwst = netto * mwstSatz;
    const brutto = netto + mwst;

    const skontoProzent = parseFloat(document.getElementById('z-skonto-prozent').value) || 0;
    const skontoTage = parseInt(document.getElementById('z-skonto-tage').value) || 10;
    const skontoBetrag = brutto * (skontoProzent / 100);
    const bruttoMitSkonto = brutto - skontoBetrag;

    const datumStr = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });

    // Collect global Arbeitszeit details
    const arbeitDetails = [];
    if (globalArbeitContainer) {
        globalArbeitContainer.querySelectorAll('.arbeitszeit-row-new').forEach(row => {
            const select = row.querySelector('.mitarbeiter-typ');
            const name = select.options[select.selectedIndex].text;
            const stundensatz = parseFloat(row.querySelector('.mitarbeiter-satz').value) || 0;
            const stunden = parseFloat(row.querySelector('.stunden').value) || 0;
            if (stunden > 0) {
                arbeitDetails.push({ name, stunden, stundensatz, kosten: stundensatz * stunden });
            }
        });
    }

    letzteBerechnung = {
        schraenke: schraenkeErgebnisse,
        positionen: positionenErgebnisse,
        arbeitDetails,
        materialEinzelkosten,
        fertigungsEinzelkosten,
        mgkBetrag,
        mgkProzent: parseFloat(document.getElementById('z-mgk').value),
        materialKosten,
        fgkBetrag,
        fgkProzent: parseFloat(document.getElementById('z-fgk').value),
        fertigungsKosten,
        herstellKosten,
        vwgkBetrag,
        vwgkProzent: parseFloat(document.getElementById('z-vwgk').value),
        vtgkBetrag,
        vtgkProzent: parseFloat(document.getElementById('z-vtgk').value),
        selbstKosten,
        wugBetrag,
        wugProzent: parseFloat(document.getElementById('z-wug').value),
        angebotspreis,
        anfahrtKosten,
        montageResult,
        rabattBetrag,
        rabattProzent: parseFloat(document.getElementById('z-rabatt').value),
        netto,
        mwstSatz: currentMwstSatz,
        mwst,
        brutto,
        skontoProzent,
        skontoTage,
        skontoBetrag,
        bruttoMitSkonto,
        datumStr,
        // Legacy compat
        gesamtMaterial: materialEinzelkosten,
        gesamtArbeit: fertigungsEinzelkosten
    };

    // Update schrank sums
    schrankBlocks.forEach((block, i) => {
        const sumEl = block.querySelector('.schrank-sum');
        if (sumEl) sumEl.textContent = formatCurrency(schraenkeErgebnisse[i].schrankSumme);
    });
    // Update legacy position sums
    legacyBlocks.forEach((block, i) => {
        const sumEl = block.querySelector('.pos-sum');
        if (sumEl) sumEl.textContent = formatCurrency(positionenErgebnisse[i].positionSumme);
    });

    renderErgebnis(letzteBerechnung);
    return letzteBerechnung;
}

function berechnePosition(block) {
    const bezeichnung = block.querySelector('.pos-bezeichnung').value || 'Position';
    const staerkeSelect = block.querySelector('.pos-staerke');
    const staerkeOption = staerkeSelect.options[staerkeSelect.selectedIndex];
    const materialPreis = parseFloat(staerkeOption?.dataset?.preis) || 0;
    const laenge = parseFloat(block.querySelector('.pos-laenge').value) / 1000 || 0;  // mm → m
    const breite = parseFloat(block.querySelector('.pos-breite').value) / 1000 || 0;  // mm → m
    const anzahl = parseInt(block.querySelector('.pos-anzahl').value) || 1;
    const verschnitt = parseFloat(block.querySelector('.pos-verschnitt').value) / 100;

    const flaecheNetto = laenge * breite * anzahl;
    const flaecheBrutto = flaecheNetto * (1 + verschnitt);
    const materialkosten = flaecheBrutto * materialPreis;

    const typSel = block.querySelector('.pos-typ');
    const materialName = typSel.options[typSel.selectedIndex]?.textContent || '';
    const staerkeText = staerkeOption?.value ? staerkeOption.value + 'mm' : '';

    let oberflaecheKosten = 0;
    let oberflaecheName = '';
    if (block.querySelector('.pos-oberflaeche-aktiv').checked) {
        const obTyp = block.querySelector('.pos-oberflaeche-typ').value;
        const obInfo = oberflaecheLookup[obTyp];
        if (obInfo) {
            const anstriche = parseInt(block.querySelector('.pos-oberflaeche-anstriche').value) || 2;
            const literBedarf = (flaecheNetto * anstriche) / obInfo.coverage;
            oberflaecheKosten = literBedarf * obInfo.price;
            oberflaecheName = obInfo.name;
        }
    }

    let beschlaegeKosten = 0;
    const beschlaegeDetails = [];
    block.querySelectorAll('.beschlag-row').forEach(row => {
        const sel = row.querySelector('.beschlag-typ');
        const val = sel.value;
        const info = beschlagLookup[val];
        const menge = parseInt(row.querySelector('.beschlag-anzahl').value) || 0;
        if (info && menge > 0) {
            beschlaegeKosten += info.price * menge;
            beschlaegeDetails.push({ name: info.name, menge, preis: info.price, summe: info.price * menge });
        }
    });

    let arbeitGesamt = 0;
    const arbeitDetails = [];
    block.querySelectorAll('.arbeitszeit-row-new').forEach(row => {
        const select = row.querySelector('.mitarbeiter-typ');
        const name = select.options[select.selectedIndex].text;
        const stundensatz = parseFloat(row.querySelector('.mitarbeiter-satz').value) || 0;
        const stunden = parseFloat(row.querySelector('.stunden').value) || 0;
        if (stunden > 0) {
            const kosten = stundensatz * stunden;
            arbeitGesamt += kosten;
            arbeitDetails.push({ name, stunden, stundensatz, kosten });
        }
    });

    const materialGesamt = materialkosten + oberflaecheKosten + beschlaegeKosten;
    const positionSumme = materialGesamt + arbeitGesamt;

    // Raw dimensions for PDF description (mm values from inputs)
    const laengeMm = parseFloat(block.querySelector('.pos-laenge').value) || 0;
    const breiteMm = parseFloat(block.querySelector('.pos-breite').value) || 0;
    const oberflaecheAnstriche = block.querySelector('.pos-oberflaeche-aktiv').checked ? (parseInt(block.querySelector('.pos-oberflaeche-anstriche')?.value) || 2) : 0;

    return {
        bezeichnung, materialName, staerkeText, flaecheBrutto,
        laengeMm, breiteMm, anzahl,
        materialkosten, oberflaecheName, oberflaecheKosten, oberflaecheAnstriche,
        beschlaegeDetails, beschlaegeKosten,
        arbeitDetails, arbeitGesamt,
        materialGesamt, positionSumme
    };
}

function triggerLiveCalc(block) {
    try {
        const result = berechnePosition(block);
        const sumEl = block.querySelector('.pos-sum');
        if (sumEl) {
            sumEl.textContent = formatCurrency(result.positionSumme);
            sumEl.classList.toggle('pos-sum-zero', result.positionSumme === 0);
        }
    } catch (e) { /* ignore partial data errors */ }
}

function renderErgebnis(calc) {
    const bodyEl = document.getElementById('ergebnis-body');
    const footerEl = document.getElementById('ergebnis-footer');
    document.getElementById('res-date').textContent = calc.datumStr;

    let bodyHtml = '';

    // Schränke
    if (calc.schraenke && calc.schraenke.length > 0) {
        calc.schraenke.forEach((s, i) => {
            bodyHtml += `<div class="result-section">
                <h4>Schrank ${i + 1}: ${escapeHtml(s.bezeichnung)}</h4>
                ${s.korpus.materialkosten > 0 ? `<div class="result-row"><span>Korpus Material (${s.korpus.flaecheBrutto.toFixed(2)} m²)</span><span>${formatCurrency(s.korpus.materialkosten)}</span></div>` : ''}
                ${s.korpus.oberflaecheKosten > 0 ? `<div class="result-row sub"><span>Korpus Oberfläche: ${escapeHtml(s.korpus.oberflaecheName)}</span><span>${formatCurrency(s.korpus.oberflaecheKosten)}</span></div>` : ''}
                ${s.korpus.kantenKosten > 0 ? `<div class="result-row sub"><span>Korpus Kanten: ${escapeHtml(s.korpus.kantenName)}</span><span>${formatCurrency(s.korpus.kantenKosten)}</span></div>` : ''}
                ${s.korpus.extrasKosten > 0 ? `<div class="result-row sub"><span>Korpus Extras</span><span>${formatCurrency(s.korpus.extrasKosten)}</span></div>` : ''}
                ${s.korpus.extrasDetails.map(ex => `<div class="result-row sub"><span>${ex.anzahl}× ${ex.type}</span><span>${formatCurrency(ex.kosten)}</span></div>`).join('')}
                ${s.front.materialkosten > 0 ? `<div class="result-row"><span>Front Material (${s.front.flaecheBrutto.toFixed(2)} m²)</span><span>${formatCurrency(s.front.materialkosten)}</span></div>` : ''}
                ${s.front.oberflaecheKosten > 0 ? `<div class="result-row sub"><span>Front Oberfläche: ${escapeHtml(s.front.oberflaecheName)}</span><span>${formatCurrency(s.front.oberflaecheKosten)}</span></div>` : ''}
                ${s.front.kantenKosten > 0 ? `<div class="result-row sub"><span>Front Kanten: ${escapeHtml(s.front.kantenName)}</span><span>${formatCurrency(s.front.kantenKosten)}</span></div>` : ''}
                ${s.rueckwand.materialkosten > 0 ? `<div class="result-row"><span>Rückwand Material (${s.rueckwand.flaecheBrutto.toFixed(2)} m²)</span><span>${formatCurrency(s.rueckwand.materialkosten)}</span></div>` : ''}
                ${s.rueckwand.oberflaecheKosten > 0 ? `<div class="result-row sub"><span>Rückwand Oberfläche: ${escapeHtml(s.rueckwand.oberflaecheName)}</span><span>${formatCurrency(s.rueckwand.oberflaecheKosten)}</span></div>` : ''}
                ${s.rueckwand.kantenKosten > 0 ? `<div class="result-row sub"><span>Rückwand Kanten: ${escapeHtml(s.rueckwand.kantenName)}</span><span>${formatCurrency(s.rueckwand.kantenKosten)}</span></div>` : ''}
                ${s.beschlaegeKosten > 0 ? `<div class="result-row"><span>Beschläge</span><span>${formatCurrency(s.beschlaegeKosten)}</span></div>` : ''}
                ${s.beschlaegeDetails.map(d => `<div class="result-row sub"><span>${escapeHtml(d.name)} × ${d.menge}</span><span>${formatCurrency(d.summe)}</span></div>`).join('')}
                ${s.verbindungsmittelKosten > 0 ? `<div class="result-row"><span>Verbindungsmittel</span><span>${formatCurrency(s.verbindungsmittelKosten)}</span></div>` : ''}
                ${(s.verbindungsmittelDetails || []).map(d => `<div class="result-row sub"><span>${escapeHtml(d.name)} × ${d.menge}</span><span>${formatCurrency(d.summe)}</span></div>`).join('')}
                <div class="result-row bold"><span>Schrank-Summe</span><span>${formatCurrency(s.schrankSumme)}</span></div>
            </div>`;
        });
    }

    // Globale Arbeitszeit
    if (calc.arbeitDetails && calc.arbeitDetails.length > 0) {
        bodyHtml += `<div class="result-section">
            <h4>Arbeitszeit</h4>
            ${calc.arbeitDetails.map(a => `<div class="result-row"><span>${escapeHtml(a.name)} (${a.stunden}h × ${a.stundensatz}€)</span><span>${formatCurrency(a.kosten)}</span></div>`).join('')}
            <div class="result-row bold"><span>Arbeitszeit gesamt</span><span>${formatCurrency(calc.fertigungsEinzelkosten)}</span></div>
        </div>`;
    }

    // Legacy Positionen (falls noch vorhanden)
    calc.positionen.forEach((pos, i) => {
        bodyHtml += `<div class="result-section">
            <h4>Position ${i + 1}: ${escapeHtml(pos.bezeichnung)}</h4>
            <div class="result-row"><span>Material ${pos.materialName} ${pos.staerkeText} (${pos.flaecheBrutto.toFixed(2)} m²)</span><span>${formatCurrency(pos.materialkosten)}</span></div>
            ${pos.oberflaecheKosten > 0 ? `<div class="result-row"><span>Oberfläche: ${escapeHtml(pos.oberflaecheName)}</span><span>${formatCurrency(pos.oberflaecheKosten)}</span></div>` : ''}
            ${pos.beschlaegeKosten > 0 ? `<div class="result-row"><span>Beschläge</span><span>${formatCurrency(pos.beschlaegeKosten)}</span></div>` : ''}
            ${pos.beschlaegeDetails.map(d => `<div class="result-row sub"><span>${escapeHtml(d.name)} × ${d.menge}</span><span>${formatCurrency(d.summe)}</span></div>`).join('')}
            ${pos.arbeitGesamt > 0 ? `<div class="result-row"><span>Arbeitszeit</span><span>${formatCurrency(pos.arbeitGesamt)}</span></div>` : ''}
            ${pos.arbeitDetails.map(a => `<div class="result-row sub"><span>${escapeHtml(a.name)} (${a.stunden}h × ${a.stundensatz}€)</span><span>${formatCurrency(a.kosten)}</span></div>`).join('')}
            <div class="result-row bold"><span>Positions-Summe</span><span>${formatCurrency(pos.positionSumme)}</span></div>
        </div>`;
    });

    bodyHtml += `<div class="result-section klr-section">
        <h4>Kalkulation (KLR)</h4>
        <div class="result-row"><span>Materialeinzelkosten</span><span>${formatCurrency(calc.materialEinzelkosten)}</span></div>
        <div class="result-row light"><span>+ Materialgemeinkosten (${calc.mgkProzent}%)</span><span>${formatCurrency(calc.mgkBetrag)}</span></div>
        <div class="result-row bold"><span>= Materialkosten</span><span>${formatCurrency(calc.materialKosten)}</span></div>

        <div class="result-row" style="margin-top:8px"><span>Fertigungseinzelkosten</span><span>${formatCurrency(calc.fertigungsEinzelkosten)}</span></div>
        <div class="result-row light"><span>+ Fertigungsgemeinkosten (${calc.fgkProzent}%)</span><span>${formatCurrency(calc.fgkBetrag)}</span></div>
        <div class="result-row bold"><span>= Fertigungskosten</span><span>${formatCurrency(calc.fertigungsKosten)}</span></div>

        <div class="result-row bold" style="margin-top:8px;border-top:1px solid var(--border);padding-top:8px"><span>Herstellkosten</span><span>${formatCurrency(calc.herstellKosten)}</span></div>
        <div class="result-row light"><span>+ Verwaltungs-GK (${calc.vwgkProzent}%)</span><span>${formatCurrency(calc.vwgkBetrag)}</span></div>
        <div class="result-row light"><span>+ Vertriebs-GK (${calc.vtgkProzent}%)</span><span>${formatCurrency(calc.vtgkBetrag)}</span></div>
        ${calc.montageResult ? `
            <div class="result-row light"><span>+ Montagekosten gesamt</span><span>${formatCurrency(calc.anfahrtKosten)}</span></div>
            ${calc.montageResult.anfahrt > 0 ? `<div class="result-row sub"><span>Anfahrtpauschale</span><span>${formatCurrency(calc.montageResult.anfahrt)}</span></div>` : ''}
            ${calc.montageResult.personalDetails.map(p => `<div class="result-row sub"><span>${p.anzahl}× ${escapeHtml(p.typ)} (${p.stunden}h × ${p.stundensatz}€)</span><span>${formatCurrency(p.kosten)}</span></div>`).join('')}
            ${calc.montageResult.gebrauchsmittel > 0 ? `<div class="result-row sub"><span>Gebrauchsmittel</span><span>${formatCurrency(calc.montageResult.gebrauchsmittel)}</span></div>` : ''}
        ` : ''}
        <div class="result-row bold"><span>= Selbstkosten</span><span>${formatCurrency(calc.selbstKosten)}</span></div>

        <div class="result-row light" style="margin-top:8px"><span>+ Wagnis & Gewinn (${calc.wugProzent}%)</span><span>${formatCurrency(calc.wugBetrag)}</span></div>
        <div class="result-row bold"><span>= Angebotspreis</span><span>${formatCurrency(calc.angebotspreis)}</span></div>
        ${calc.rabattBetrag > 0 ? `<div class="result-row light text-danger"><span>- Rabatt (${calc.rabattProzent}%)</span><span>-${formatCurrency(calc.rabattBetrag)}</span></div>` : ''}
    </div>`;

    bodyEl.innerHTML = bodyHtml;

    let skontoHtml = '';
    if (calc.skontoProzent > 0) {
        skontoHtml = `
        <div class="result-row skonto-hint-box">
            <span class="text-success">Bei Zahlung innerhalb ${calc.skontoTage} Tagen: ${formatCurrency(calc.skontoBetrag)} Skonto (${calc.skontoProzent}%)</span>
            <span class="text-success" style="font-weight:700">${formatCurrency(calc.bruttoMitSkonto)}</span>
        </div>`;
    }

    footerEl.innerHTML = `
        <div class="result-row total-netto"><span>Nettosumme</span><span>${formatCurrency(calc.netto)}</span></div>
        <div class="result-row mwst"><span>MwSt. ${calc.mwstSatz}%</span><span>${formatCurrency(calc.mwst)}</span></div>
        <div class="result-row total-brutto"><span>Brutto-Angebotspreis</span><span>${formatCurrency(calc.brutto)}</span></div>
        ${skontoHtml}
    `;

    document.getElementById('ergebnis').classList.remove('hidden');
    document.getElementById('ergebnis-actions').classList.remove('hidden');
    document.getElementById('ergebnis').scrollIntoView({ behavior: 'smooth' });
}

// ==================== PROJEKT SPEICHERN ====================
async function saveProjekt() {
    const titel = document.getElementById('proj-titel').value.trim();
    clearFieldErrors('projekt-form');
    if (!titel) {
        showFieldError('err-proj-titel', 'Bitte Projekttitel eingeben');
        showToast('Bitte Pflichtfelder ausfüllen', 'error');
        return;
    }

    // Collect schraenke
    const schraenke = [];
    document.querySelectorAll('#schraenke-container .schrank-block').forEach(block => {
        schraenke.push(collectSchrankData(block));
    });

    // Collect global Arbeitszeiten
    const arbeitszeiten = [];
    const globalArbeitContainer = document.getElementById('global-arbeitszeit-container');
    if (globalArbeitContainer) {
        globalArbeitContainer.querySelectorAll('.arbeitszeit-row-new').forEach(row => {
            const sel = row.querySelector('.mitarbeiter-typ');
            const mitarbeiterTyp = sel.options[sel.selectedIndex].text;
            const stundensatz = parseFloat(row.querySelector('.mitarbeiter-satz').value) || 0;
            const stunden = parseFloat(row.querySelector('.stunden').value) || 0;
            if (stunden > 0) {
                arbeitszeiten.push({ mitarbeiterTyp, stundensatz, stunden });
            }
        });
    }

    // Collect legacy positions (only from Angebot container, if any remain)
    const positionen = [];
    document.querySelectorAll('#positionen-container .position-block').forEach(block => {
        const pos = collectPositionData(block);
        positionen.push(pos);
    });

    const projekt = {
        id: currentProjektId || generateId(),
        titel,
        kundeId: document.getElementById('proj-kunde').value || null,
        status: document.getElementById('proj-status').value,
        objektAdresse: document.getElementById('proj-objekt-adresse').value.trim(),
        notizen: document.getElementById('proj-notizen').value.trim(),
        angebotNr: document.getElementById('proj-angebot-nr').value.trim() || '',
        leistungszeitraum: document.getElementById('proj-leistungszeitraum').value.trim(),
        schraenke,
        arbeitszeiten,
        positionen,
        zuschlaege: {
            mgk: parseFloat(document.getElementById('z-mgk').value) || 0,
            fgk: parseFloat(document.getElementById('z-fgk').value) || 0,
            vwgk: parseFloat(document.getElementById('z-vwgk').value) || 0,
            vtgk: parseFloat(document.getElementById('z-vtgk').value) || 0,
            wug: parseFloat(document.getElementById('z-wug').value) || 0,
            rabatt: parseInt(document.getElementById('z-rabatt').value),
            skontoProzent: parseFloat(document.getElementById('z-skonto-prozent').value) || 0,
            skontoTage: parseInt(document.getElementById('z-skonto-tage').value) || 10
        },
        montage: {
            aktiv: true,
            anfahrtpauschale: parseFloat(document.getElementById('proj-anfahrtpauschale').value) || 0,
            personal: collectMontagePersonal('proj-montage-personal-container'),
            gebrauchsmittel: parseFloat(document.getElementById('proj-gebrauchsmittel').value) || 0
        },
        brutto: letzteBerechnung ? letzteBerechnung.brutto : null,
        netto: letzteBerechnung ? letzteBerechnung.netto : null,
        fertigungsEinzelkosten: letzteBerechnung ? letzteBerechnung.fertigungsEinzelkosten : null,
        erstelltAm: null,
        geaendertAm: new Date().toISOString()
    };

    if (currentProjektId) {
        const existing = await dbGet('projekte', currentProjektId);
        if (existing) {
            projekt.erstelltAm = existing.erstelltAm;
            if (existing.rechnung) projekt.rechnung = existing.rechnung;
            if (existing.rechnungsDaten) projekt.rechnungsDaten = existing.rechnungsDaten;
        }
    } else {
        projekt.erstelltAm = new Date().toISOString();
    }

    // Angebotsnummer automatisch vergeben wenn noch keine vorhanden oder Platzhalter
    if (!projekt.angebotNr || projekt.angebotNr === '(wird beim Speichern vergeben)') {
        projekt.angebotNr = await generateDokumentNr('AG-', projekt.kundeId, projekt.id);
        document.getElementById('proj-angebot-nr').value = projekt.angebotNr;
    }

    await dbPut('projekte', projekt);
    currentProjektId = projekt.id;

    // Also save rechnungsDaten if the Rechnung tab has data
    if (projekt.rechnungsDaten && document.querySelectorAll('#rechnung-positionen-container .position-block').length > 0) {
        await saveRechnungsDaten();
    }

    showToast('Projekt gespeichert');
    window.location.hash = '#/projekt/' + projekt.id;
}

function collectPositionData(block) {
    const beschlaege = [];
    block.querySelectorAll('.beschlag-row').forEach(row => {
        const sel = row.querySelector('.beschlag-typ');
        const val = sel.value;
        const anzahl = parseInt(row.querySelector('.beschlag-anzahl').value) || 0;
        if (val && anzahl > 0) {
            beschlaege.push({ typ: val, anzahl });
        }
    });

    const arbeitszeiten = [];
    block.querySelectorAll('.arbeitszeit-row-new').forEach(row => {
        const sel = row.querySelector('.mitarbeiter-typ');
        const mitarbeiterTyp = sel.options[sel.selectedIndex].text;
        const stundensatz = parseFloat(row.querySelector('.mitarbeiter-satz').value) || 0;
        const stunden = parseFloat(row.querySelector('.stunden').value) || 0;
        if (stunden > 0) {
            arbeitszeiten.push({ mitarbeiterTyp, stundensatz, stunden });
        }
    });

    return {
        bezeichnung: block.querySelector('.pos-bezeichnung').value.trim(),
        kategorie: block.querySelector('.pos-kategorie').value,
        typ: block.querySelector('.pos-typ').value,
        staerke: parseFloat(block.querySelector('.pos-staerke').value) || 0,
        laenge: parseFloat(block.querySelector('.pos-laenge').value) || 0,
        breite: parseFloat(block.querySelector('.pos-breite').value) || 0,
        anzahl: parseInt(block.querySelector('.pos-anzahl').value) || 1,
        verschnitt: parseInt(block.querySelector('.pos-verschnitt').value) || 15,
        oberflaecheAktiv: block.querySelector('.pos-oberflaeche-aktiv').checked,
        oberflaecheTyp: block.querySelector('.pos-oberflaeche-typ').value,
        oberflaecheAnstriche: parseInt(block.querySelector('.pos-oberflaeche-anstriche').value) || 2,
        beschlaege,
        arbeitszeiten
    };
}

// ==================== EINSTELLUNGEN ====================
let currentMwstSatz = 19;

async function loadSettings() {
    const mwst = await getSetting('mwstSatz', 19);
    currentMwstSatz = mwst;
    const mwstSel = document.getElementById('set-mwst');
    if ([0, 7, 19].includes(mwst)) {
        mwstSel.value = String(mwst);
        document.getElementById('set-mwst-custom-wrap').classList.add('hidden');
    } else {
        mwstSel.value = 'custom';
        document.getElementById('set-mwst-custom-wrap').classList.remove('hidden');
        document.getElementById('set-mwst-custom').value = mwst;
    }

    const kleinunternehmerEl = document.getElementById('set-kleinunternehmer');
    if (kleinunternehmerEl) kleinunternehmerEl.checked = await getSetting('kleinunternehmer', false);
    document.getElementById('set-waehrung').value = await getSetting('waehrung', 'EUR');
    document.getElementById('set-angebot-prefix').value = await getSetting('angebotNrPrefix', 'ANG-');
    document.getElementById('set-zahlungsbedingung').value = await getSetting('zahlungsbedingung', 14);
    document.getElementById('set-gueltigkeit').value = await getSetting('gueltigkeitsTage', 30);
    document.getElementById('set-skonto-prozent').value = await getSetting('standardSkontoProzent', 2);
    document.getElementById('set-skonto-tage').value = await getSetting('standardSkontoTage', 10);

    // Rechnungs-Einstellungen
    document.getElementById('set-rechnung-prefix').value = await getSetting('rechnungNrPrefix', 'RE-');
    document.getElementById('set-zahlungsziel').value = await getSetting('standardZahlungsziel', 30);
    const bank = await getSetting('bankverbindung', {});
    document.getElementById('set-bank-inhaber').value = bank.inhaber || '';
    document.getElementById('set-bank-iban').value = bank.iban || '';
    document.getElementById('set-bank-bic').value = bank.bic || '';
    document.getElementById('set-bank-name').value = bank.bankname || '';

    // Kunden-Prefix + Ausführungszeitraum
    document.getElementById('set-kunden-prefix').value = await getSetting('kundenNrPrefix', 'KD-');
    document.getElementById('set-ausfuehrungszeitraum').value = await getSetting('ausfuehrungszeitraum', 'ca. 6-8 Wochen nach Auftragserteilung');

    // Firmendaten
    const firma = await getSetting('firmendaten', {});
    document.getElementById('set-firma-name').value = firma.name || '';
    document.getElementById('set-firma-rechtsform').value = firma.rechtsform || '';
    document.getElementById('set-firma-ansprechpartner').value = firma.ansprechpartner || '';
    document.getElementById('set-firma-strasse').value = firma.strasse || '';
    document.getElementById('set-firma-plz').value = firma.plz || '';
    document.getElementById('set-firma-ort').value = firma.ort || '';
    document.getElementById('set-firma-telefon').value = firma.telefon || '';
    document.getElementById('set-firma-fax').value = firma.fax || '';
    document.getElementById('set-firma-email').value = firma.email || '';
    document.getElementById('set-firma-website').value = firma.website || '';
    document.getElementById('set-firma-steuernr').value = firma.steuernr || '';
    document.getElementById('set-firma-ustid').value = firma.ustid || '';

    // Logo
    const logo = await getSetting('firmenlogo', null);
    if (logo) {
        document.getElementById('set-logo-img').src = logo;
        document.getElementById('set-logo-preview').classList.remove('hidden');
    } else {
        document.getElementById('set-logo-preview').classList.add('hidden');
    }

    // Standard-KLR-Zuschläge
    document.getElementById('set-std-mgk').value = await getSetting('standardKLR_mgk', 10);
    document.getElementById('set-std-fgk').value = await getSetting('standardKLR_fgk', 120);
    document.getElementById('set-std-vwgk').value = await getSetting('standardKLR_vwgk', 10);
    document.getElementById('set-std-vtgk').value = await getSetting('standardKLR_vtgk', 8);
    document.getElementById('set-std-wug').value = await getSetting('standardKLR_wug', 15);

    // Kalkulatorische Kosten
    document.getElementById('set-kalk-unternehmerlohn').value = await getSetting('kalkKosten_unternehmerlohn', 0);
    document.getElementById('set-kalk-miete').value = await getSetting('kalkKosten_miete', 0);
    document.getElementById('set-kalk-abschreibung').value = await getSetting('kalkKosten_abschreibung', 0);
    document.getElementById('set-kalk-zinsen').value = await getSetting('kalkKosten_zinsen', 0);
    document.getElementById('set-kalk-produktivstunden').value = await getSetting('kalkKosten_produktivstunden', 140);
    berechneKalkKosten();

    // Standard-Stundensätze
    document.getElementById('set-std-helfer').value = await getSetting('standardStundensaetze_helfer', 42);
    document.getElementById('set-std-geselle').value = await getSetting('standardStundensaetze_geselle', 52);
    document.getElementById('set-std-fachgeselle').value = await getSetting('standardStundensaetze_fachgeselle', 58);
    document.getElementById('set-std-meister').value = await getSetting('standardStundensaetze_meister', 68);
    document.getElementById('set-std-meister-bau').value = await getSetting('standardStundensaetze_meisterBau', 75);
    document.getElementById('set-std-planung').value = await getSetting('standardStundensaetze_planung', 85);

    // Eigene Artikel rendern
    renderEigeneBeschlaege();
    renderEigeneOberflaechen();
    renderEigeneMaterialien();

    // Eigene Vorlagen rendern
    renderEigeneVorlagen();
}

async function saveSettings() {
    const mwstSel = document.getElementById('set-mwst');
    let mwst;
    if (mwstSel.value === 'custom') {
        mwst = parseFloat(document.getElementById('set-mwst-custom').value) || 19;
    } else {
        mwst = parseInt(mwstSel.value);
    }
    currentMwstSatz = mwst;

    await setSetting('mwstSatz', mwst);
    const kleinunternehmerEl = document.getElementById('set-kleinunternehmer');
    await setSetting('kleinunternehmer', kleinunternehmerEl ? kleinunternehmerEl.checked : false);
    await setSetting('waehrung', document.getElementById('set-waehrung').value);
    await setSetting('angebotNrPrefix', document.getElementById('set-angebot-prefix').value);
    await setSetting('zahlungsbedingung', parseInt(document.getElementById('set-zahlungsbedingung').value) || 14);
    await setSetting('gueltigkeitsTage', parseInt(document.getElementById('set-gueltigkeit').value) || 30);
    await setSetting('standardSkontoProzent', parseFloat(document.getElementById('set-skonto-prozent').value) || 2);
    await setSetting('standardSkontoTage', parseInt(document.getElementById('set-skonto-tage').value) || 10);

    // Rechnungs-Einstellungen
    await setSetting('rechnungNrPrefix', document.getElementById('set-rechnung-prefix').value || 'RE-');
    await setSetting('standardZahlungsziel', parseInt(document.getElementById('set-zahlungsziel').value) || 30);
    await setSetting('bankverbindung', {
        inhaber: document.getElementById('set-bank-inhaber').value.trim(),
        iban: document.getElementById('set-bank-iban').value.trim(),
        bic: document.getElementById('set-bank-bic').value.trim(),
        bankname: document.getElementById('set-bank-name').value.trim()
    });

    await setSetting('kundenNrPrefix', document.getElementById('set-kunden-prefix').value || 'KD-');
    await setSetting('ausfuehrungszeitraum', document.getElementById('set-ausfuehrungszeitraum').value.trim() || 'ca. 6-8 Wochen nach Auftragserteilung');

    await setSetting('firmendaten', {
        name: document.getElementById('set-firma-name').value.trim(),
        rechtsform: document.getElementById('set-firma-rechtsform').value.trim(),
        ansprechpartner: document.getElementById('set-firma-ansprechpartner').value.trim(),
        strasse: document.getElementById('set-firma-strasse').value.trim(),
        plz: document.getElementById('set-firma-plz').value.trim(),
        ort: document.getElementById('set-firma-ort').value.trim(),
        telefon: document.getElementById('set-firma-telefon').value.trim(),
        fax: document.getElementById('set-firma-fax').value.trim(),
        email: document.getElementById('set-firma-email').value.trim(),
        website: document.getElementById('set-firma-website').value.trim(),
        steuernr: document.getElementById('set-firma-steuernr').value.trim(),
        ustid: document.getElementById('set-firma-ustid').value.trim()
    });

    await setSetting('standardKLR_mgk', parseFloat(document.getElementById('set-std-mgk').value) || 10);
    await setSetting('standardKLR_fgk', parseFloat(document.getElementById('set-std-fgk').value) || 120);
    await setSetting('standardKLR_vwgk', parseFloat(document.getElementById('set-std-vwgk').value) || 10);
    await setSetting('standardKLR_vtgk', parseFloat(document.getElementById('set-std-vtgk').value) || 8);
    await setSetting('standardKLR_wug', parseFloat(document.getElementById('set-std-wug').value) || 15);

    await setSetting('kalkKosten_unternehmerlohn', parseFloat(document.getElementById('set-kalk-unternehmerlohn').value) || 0);
    await setSetting('kalkKosten_miete', parseFloat(document.getElementById('set-kalk-miete').value) || 0);
    await setSetting('kalkKosten_abschreibung', parseFloat(document.getElementById('set-kalk-abschreibung').value) || 0);
    await setSetting('kalkKosten_zinsen', parseFloat(document.getElementById('set-kalk-zinsen').value) || 0);
    await setSetting('kalkKosten_produktivstunden', parseFloat(document.getElementById('set-kalk-produktivstunden').value) || 140);

    await setSetting('standardStundensaetze_helfer', parseInt(document.getElementById('set-std-helfer').value));
    await setSetting('standardStundensaetze_geselle', parseInt(document.getElementById('set-std-geselle').value));
    await setSetting('standardStundensaetze_fachgeselle', parseInt(document.getElementById('set-std-fachgeselle').value));
    await setSetting('standardStundensaetze_meister', parseInt(document.getElementById('set-std-meister').value));
    await setSetting('standardStundensaetze_meisterBau', parseInt(document.getElementById('set-std-meister-bau').value));
    await setSetting('standardStundensaetze_planung', parseInt(document.getElementById('set-std-planung').value));

    showToast('Einstellungen gespeichert');
}

// ==================== KALKULATORISCHE KOSTEN HILFSRECHNER ====================
function berechneKalkKosten() {
    const unternehmerlohn = parseFloat(document.getElementById('set-kalk-unternehmerlohn')?.value) || 0;
    const miete = parseFloat(document.getElementById('set-kalk-miete')?.value) || 0;
    const abschreibung = parseFloat(document.getElementById('set-kalk-abschreibung')?.value) || 0;
    const zinsen = parseFloat(document.getElementById('set-kalk-zinsen')?.value) || 0;
    const produktivstunden = parseFloat(document.getElementById('set-kalk-produktivstunden')?.value) || 140;

    const gesamt = unternehmerlohn + miete + abschreibung + zinsen;
    const proStunde = produktivstunden > 0 ? gesamt / produktivstunden : 0;

    const el = document.getElementById('kalk-pro-stunde');
    if (el) el.textContent = formatCurrency(proStunde);
}

// ==================== PDF EXPORT ====================
async function generatePDF() {
    if (!letzteBerechnung) {
        showToast('Bitte erst "Angebot berechnen" klicken', 'warning');
        return;
    }
    if (typeof window.jspdf === 'undefined') {
        showToast('PDF-Bibliothek wird geladen...', 'warning');
        try {
            await ensureJsPDF();
            showToast('PDF-Bibliothek geladen, bitte erneut klicken');
        } catch (e) {
            showToast('PDF-Bibliothek konnte nicht geladen werden. Internetverbindung prüfen.', 'error');
        }
        return;
    }

    const b = letzteBerechnung;
    const firma = await getSetting('firmendaten', {});
    const logo = await getSetting('firmenlogo', null);
    const bank = await getSetting('bankverbindung', {});
    const zahlungsbedingung = await getSetting('zahlungsbedingung', 14);
    const gueltigkeit = await getSetting('gueltigkeitsTage', 30);
    const ausfuehrungszeitraum = await getSetting('ausfuehrungszeitraum', 'ca. 6-8 Wochen nach Auftragserteilung');

    const kundeId = document.getElementById('proj-kunde').value;
    let kunde = null;
    if (kundeId) kunde = await dbGet('kunden', kundeId);

    const projektTitel = document.getElementById('proj-titel').value || 'Tischlerprojekt';
    const angebotNr = document.getElementById('proj-angebot-nr').value || '';

    const kleinunternehmer = await getSetting('kleinunternehmer', false);

    const pdfData = {
        typ: 'angebot',
        titel: 'ANGEBOT',
        betreff: 'Fertigung und Montage: ' + projektTitel,
        angebotNr,
        einleitungsText: 'vielen Dank für Ihr Interesse. Wir erlauben uns, Ihnen folgendes Angebot zu unterbreiten:',
        schlussText: 'Wir freuen uns auf Ihren Auftrag und stehen für Rückfragen gerne zur Verfügung.',
        gueltigkeit,
        zahlungsbedingung,
        ausfuehrungszeitraum,
        kleinunternehmer,
        firma, logo, bank, kunde, berechnung: b
    };

    _generateProfessionalPDF(pdfData);
}

// --- PDF detail helpers ---
function _buildSchrankPdfDetails(s) {
    const lines = [];
    if (s.korpus && s.korpus.materialkosten > 0) {
        let line = 'Korpus: ' + (s.korpus.materialName || 'Material');
        if (s.korpus.staerkeText) line += ', ' + s.korpus.staerkeText;
        if (s.korpus.flaecheBrutto) line += ' (' + s.korpus.flaecheBrutto.toFixed(2) + ' m\u00b2)';
        lines.push(line);
    }
    if (s.korpus && s.korpus.oberflaecheKosten > 0) {
        lines.push('Korpus Oberfläche: ' + (s.korpus.oberflaecheName || ''));
    }
    if (s.front && s.front.materialkosten > 0) {
        let line = 'Front: ' + (s.front.materialName || 'Material');
        if (s.front.staerkeText) line += ', ' + s.front.staerkeText;
        if (s.front.flaecheBrutto) line += ' (' + s.front.flaecheBrutto.toFixed(2) + ' m\u00b2)';
        lines.push(line);
    }
    if (s.front && s.front.oberflaecheKosten > 0) {
        lines.push('Front Oberfläche: ' + (s.front.oberflaecheName || ''));
    }
    if (s.rueckwand && s.rueckwand.materialkosten > 0) {
        let line = 'Rückwand: ' + (s.rueckwand.materialName || 'Material');
        if (s.rueckwand.flaecheBrutto) line += ' (' + s.rueckwand.flaecheBrutto.toFixed(2) + ' m\u00b2)';
        lines.push(line);
    }
    if (s.beschlaegeDetails && s.beschlaegeDetails.length > 0) {
        s.beschlaegeDetails.forEach(d => {
            lines.push('inkl. ' + d.menge + '\u00d7 ' + d.name);
        });
    }
    if (s.verbindungsmittelDetails && s.verbindungsmittelDetails.length > 0) {
        s.verbindungsmittelDetails.forEach(d => {
            lines.push('inkl. ' + d.menge + '\u00d7 ' + d.name);
        });
    }
    return lines;
}

function _buildLegacyPosPdfDetails(pos) {
    const lines = [];
    if (pos.materialName && pos.materialkosten > 0) {
        let matLine = pos.materialName;
        if (pos.staerkeText) matLine += ', ' + pos.staerkeText;
        if (pos.laengeMm && pos.breiteMm) matLine += ', ' + pos.laengeMm + ' \u00d7 ' + pos.breiteMm + ' mm';
        lines.push(matLine);
    }
    if (pos.oberflaecheName && pos.oberflaecheKosten > 0) {
        lines.push('Oberfläche: ' + pos.oberflaecheAnstriche + 'x ' + pos.oberflaecheName);
    }
    if (pos.beschlaegeDetails && pos.beschlaegeDetails.length > 0) {
        pos.beschlaegeDetails.forEach(d => {
            lines.push('inkl. ' + d.menge + '\u00d7 ' + d.name);
        });
    }
    return lines;
}

// ==================== SHARED PROFESSIONAL PDF GENERATOR ====================
function _generateProfessionalPDF(data) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    const b = data.berechnung;
    const firma = data.firma || {};
    const logo = data.logo;
    const bank = data.bank || {};
    const kunde = data.kunde;

    // Design constants
    const PRIMARY = [44, 62, 80];       // #2c3e50
    const ACCENT = [127, 140, 141];     // #7f8c8d
    const ZEBRA = [248, 249, 250];      // #f8f9fa
    const WHITE = [255, 255, 255];
    const BLACK = [0, 0, 0];
    const GREEN = [22, 101, 52];

    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 20;
    const rightEdge = pageWidth - margin;
    const contentWidth = pageWidth - 2 * margin;
    let y = 0;

    const firmaName = firma.name || 'Tischlerei Mustermann';
    const firmaNameFull = firmaName + (firma.rechtsform ? ' ' + firma.rechtsform : '');

    // --- Footer on every page ---
    function drawFooter() {
        const footerY = pageHeight - 15;
        doc.setDrawColor(...ACCENT);
        doc.setLineWidth(0.3);
        doc.line(margin, footerY - 2, rightEdge, footerY - 2);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7);
        doc.setTextColor(...ACCENT);

        // Three columns
        const col1X = margin;
        const col2X = margin + contentWidth / 3;
        const col3X = margin + 2 * contentWidth / 3;

        // Col 1: Firma
        const firmaLines = [firmaNameFull, firma.strasse, ((firma.plz || '') + ' ' + (firma.ort || '')).trim()].filter(Boolean);
        firmaLines.forEach((line, i) => { doc.text(line, col1X, footerY + i * 3); });

        // Col 2: Steuer
        const steuerLines = [];
        if (firma.steuernr) steuerLines.push('Steuer-Nr.: ' + firma.steuernr);
        if (firma.ustid) steuerLines.push('USt-IdNr.: ' + firma.ustid);
        if (firma.telefon) steuerLines.push('Tel: ' + firma.telefon);
        steuerLines.forEach((line, i) => { doc.text(line, col2X, footerY + i * 3); });

        // Col 3: Bank
        const bankLines = [];
        if (bank.bankname) bankLines.push(bank.bankname);
        if (bank.iban) bankLines.push('IBAN: ' + bank.iban);
        if (bank.bic) bankLines.push('BIC: ' + bank.bic);
        bankLines.forEach((line, i) => { doc.text(line, col3X, footerY + i * 3); });

        doc.setTextColor(...BLACK);
    }

    // --- Page break check ---
    function checkPage(needed) {
        needed = needed || 10;
        if (y > pageHeight - 30 - needed) {
            doc.addPage();
            drawFooter();
            y = 20;
        }
    }

    // --- Briefkopf ---
    drawFooter();
    y = 18;

    // Logo left, Firma info right
    let logoEndY = y;
    if (logo) {
        try {
            doc.addImage(logo, 'PNG', margin, y, 28, 14);
            logoEndY = y + 16;
        } catch (e) { /* skip */ }
    }

    // Firma name + contact right-aligned
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(...PRIMARY);
    doc.text(firmaNameFull, rightEdge, y + 4, { align: 'right' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...ACCENT);
    let headerY = y + 9;
    const adressLine = [firma.strasse, ((firma.plz || '') + ' ' + (firma.ort || '')).trim()].filter(Boolean).join(', ');
    if (adressLine) { doc.text(adressLine, rightEdge, headerY, { align: 'right' }); headerY += 3.5; }
    const kontaktParts = [];
    if (firma.telefon) kontaktParts.push('Tel: ' + firma.telefon);
    if (firma.fax) kontaktParts.push('Fax: ' + firma.fax);
    if (firma.email) kontaktParts.push(firma.email);
    if (kontaktParts.length) { doc.text(kontaktParts.join(' | '), rightEdge, headerY, { align: 'right' }); headerY += 3.5; }
    if (firma.website) { doc.text(firma.website, rightEdge, headerY, { align: 'right' }); headerY += 3.5; }

    y = Math.max(logoEndY, headerY) + 2;

    // Thin line under header
    doc.setDrawColor(...PRIMARY);
    doc.setLineWidth(0.5);
    doc.line(margin, y, rightEdge, y);
    y += 5;

    // --- Absenderzeile (klein) ---
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(...ACCENT);
    const absenderzeile = [firmaNameFull, firma.strasse, ((firma.plz || '') + ' ' + (firma.ort || '')).trim()].filter(Boolean).join(' \u2022 ');
    doc.text(absenderzeile, margin, y);
    y += 6;

    // --- Empfänger ---
    doc.setTextColor(...BLACK);
    if (kunde) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        const kundeName = ((kunde.anrede ? kunde.anrede + ' ' : '') + (kunde.vorname || '') + ' ' + (kunde.nachname || '')).trim();
        doc.text(kundeName, margin, y); y += 5;
        if (kunde.firma) { doc.text(kunde.firma, margin, y); y += 5; }
        if (kunde.strasse) { doc.text(kunde.strasse, margin, y); y += 5; }
        if (kunde.plz || kunde.ort) { doc.text(((kunde.plz || '') + ' ' + (kunde.ort || '')).trim(), margin, y); y += 5; }
    } else {
        y += 15;
    }
    y += 4;

    // --- Infoblock rechts (auf Höhe des Empfängers) ---
    const infoBlockX = rightEdge;
    let infoY = y - (kunde ? 19 : 15);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...ACCENT);

    if (data.angebotNr) {
        doc.text('Angebots-Nr.:', infoBlockX - 55, infoY);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...BLACK);
        doc.text(data.angebotNr, infoBlockX, infoY, { align: 'right' });
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...ACCENT);
        infoY += 4.5;
    }
    if (data.rechnungNr) {
        doc.text('Rechnungs-Nr.:', infoBlockX - 55, infoY);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...BLACK);
        doc.text(data.rechnungNr, infoBlockX, infoY, { align: 'right' });
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...ACCENT);
        infoY += 4.5;
    }
    doc.text('Datum:', infoBlockX - 55, infoY);
    doc.setTextColor(...BLACK);
    doc.text(b.datumStr || new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }), infoBlockX, infoY, { align: 'right' });
    doc.setTextColor(...ACCENT);
    infoY += 4.5;
    if (kunde && kunde.kundenNr) {
        doc.text('Kunden-Nr.:', infoBlockX - 55, infoY);
        doc.setTextColor(...BLACK);
        doc.text(kunde.kundenNr, infoBlockX, infoY, { align: 'right' });
        doc.setTextColor(...ACCENT);
        infoY += 4.5;
    }
    if (data.leistungszeitraum) {
        doc.text('Leistungszeitraum:', infoBlockX - 55, infoY);
        doc.setTextColor(...BLACK);
        doc.text(data.leistungszeitraum, infoBlockX, infoY, { align: 'right' });
        doc.setTextColor(...ACCENT);
        infoY += 4.5;
    }
    if (firma.ansprechpartner) {
        doc.text('Ansprechpartner:', infoBlockX - 55, infoY);
        doc.setTextColor(...BLACK);
        doc.text(firma.ansprechpartner, infoBlockX, infoY, { align: 'right' });
        infoY += 4.5;
    }

    // --- Dokumenttyp-Überschrift (prominent für Rechnung) ---
    if (data.typ === 'rechnung') {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.setTextColor(...PRIMARY);
        doc.text('RECHNUNG', margin, y);
        y += 6;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(...BLACK);
        doc.text(data.betreff || '', margin, y);
        y += 8;
    } else {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(...PRIMARY);
        doc.text(data.betreff || data.titel, margin, y);
        doc.setTextColor(...BLACK);
        y += 8;
    }

    // --- Einleitung ---
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    const anrede = kunde ? ('Sehr geehrte' + (kunde.anrede === 'Frau' ? ' Frau ' : kunde.anrede === 'Herr' ? 'r Herr ' : '/r ') + (kunde.nachname || '') + ',') : 'Sehr geehrte Damen und Herren,';
    doc.text(anrede, margin, y); y += 5;
    doc.text(data.einleitungsText, margin, y); y += 8;

    // --- Calculate customer-facing position prices ---
    // Combine schraenke + legacy positionen for PDF output
    const pdfPositionen = [];
    if (b.schraenke && b.schraenke.length > 0) {
        b.schraenke.forEach(s => {
            pdfPositionen.push({
                bezeichnung: s.bezeichnung,
                summe: s.schrankSumme,
                anzahl: 1,
                details: _buildSchrankPdfDetails(s)
            });
        });
    }
    if (b.positionen && b.positionen.length > 0) {
        b.positionen.forEach(pos => {
            pdfPositionen.push({
                bezeichnung: pos.bezeichnung,
                summe: pos.positionSumme,
                anzahl: pos.anzahl || 1,
                details: _buildLegacyPosPdfDetails(pos)
            });
        });
    }

    const summePositionen = pdfPositionen.reduce((s, p) => s + p.summe, 0);
    const faktor = summePositionen > 0 ? b.netto / summePositionen : 1;

    // --- Positions-Tabelle ---
    const colPos = margin;
    const colBeschr = margin + 12;
    const colMenge = rightEdge - 72;
    const colEH = rightEdge - 58;
    const colEP = rightEdge - 38;
    const colGP = rightEdge;

    // Table header
    doc.setFillColor(...PRIMARY);
    doc.rect(margin, y, contentWidth, 7, 'F');
    doc.setTextColor(...WHITE);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text('Pos.', colPos + 2, y + 5);
    doc.text('Beschreibung', colBeschr + 2, y + 5);
    doc.text('Menge', colMenge, y + 5, { align: 'right' });
    doc.text('EH', colEH, y + 5);
    doc.text('Einzelpreis', colEP, y + 5, { align: 'right' });
    doc.text('Gesamtpreis', colGP, y + 5, { align: 'right' });
    doc.setTextColor(...BLACK);
    y += 13;

    // Position rows
    pdfPositionen.forEach((pos, idx) => {
        const kundenEP = pos.summe * faktor / (pos.anzahl || 1);
        const kundenGP = pos.summe * faktor;

        // Estimate height needed
        let linesNeeded = 1 + pos.details.length;
        checkPage(linesNeeded * 5.5 + 8);

        // Zebra stripe
        if (idx % 2 === 1) {
            doc.setFillColor(...ZEBRA);
            doc.rect(margin, y - 3, contentWidth, linesNeeded * 5.5 + 8, 'F');
        }

        // Position number + name (bold)
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.text(String(idx + 1), colPos + 2, y);
        doc.text(pos.bezeichnung, colBeschr + 2, y);
        doc.text(String(pos.anzahl || 1), colMenge, y, { align: 'right' });
        doc.setFont('helvetica', 'normal');
        doc.text('Stk', colEH, y);
        doc.text(formatCurrency(kundenEP), colEP, y, { align: 'right' });
        doc.setFont('helvetica', 'bold');
        doc.text(formatCurrency(kundenGP), colGP, y, { align: 'right' });
        y += 6;

        // Sub-details
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7);
        doc.setTextColor(100, 100, 100);
        pos.details.forEach(line => {
            checkPage(5);
            doc.text(line, colBeschr + 4, y);
            y += 4.5;
        });
        doc.setTextColor(...BLACK);
        y += 5;
    });

    // --- Summenblock ---
    y += 6;
    doc.setDrawColor(...ACCENT);
    doc.setLineWidth(0.3);
    doc.line(colMenge - 5, y, rightEdge, y);
    y += 8;

    checkPage(40);

    const isKleinunternehmer = data.kleinunternehmer || false;

    const sumLabelX = colEP - 5;
    const sumValueX = colGP;

    if (isKleinunternehmer) {
        // Kleinunternehmer: nur Gesamtbetrag, keine MwSt
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.text('Gesamtbetrag:', sumLabelX, y, { align: 'right' });
        doc.setFont('helvetica', 'bold');
        doc.text(formatCurrency(b.netto), sumValueX, y, { align: 'right' });
        y += 7;

        // Line above total
        doc.setDrawColor(...PRIMARY);
        doc.setLineWidth(0.5);
        doc.line(colMenge - 5, y - 1, rightEdge, y - 1);
        y += 2;

        // RECHNUNGSBETRAG Box
        doc.setFillColor(...PRIMARY);
        doc.rect(colMenge - 5, y - 1, rightEdge - colMenge + 5, 11, 'F');
        doc.setTextColor(...WHITE);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.text('RECHNUNGSBETRAG:', sumLabelX, y + 7, { align: 'right' });
        doc.text(formatCurrency(b.netto), sumValueX - 1, y + 7, { align: 'right' });
        doc.setTextColor(...BLACK);
        y += 18;
    } else {
        // Nettosumme
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.text('Nettosumme:', sumLabelX, y, { align: 'right' });
        doc.setFont('helvetica', 'bold');
        doc.text(formatCurrency(b.netto), sumValueX, y, { align: 'right' });
        y += 7;

        // MwSt
        doc.setFont('helvetica', 'normal');
        doc.text('zzgl. ' + b.mwstSatz + '% MwSt.:', sumLabelX, y, { align: 'right' });
        doc.text(formatCurrency(b.mwst), sumValueX, y, { align: 'right' });
        y += 7;

        // Line above Brutto
        doc.setDrawColor(...PRIMARY);
        doc.setLineWidth(0.5);
        doc.line(colMenge - 5, y - 1, rightEdge, y - 1);
        y += 2;

        // BRUTTOSUMME Box
        doc.setFillColor(...PRIMARY);
        doc.rect(colMenge - 5, y - 1, rightEdge - colMenge + 5, 11, 'F');
        doc.setTextColor(...WHITE);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.text('BRUTTOSUMME:', sumLabelX, y + 7, { align: 'right' });
        doc.text(formatCurrency(b.brutto), sumValueX - 1, y + 7, { align: 'right' });
        doc.setTextColor(...BLACK);
        y += 18;
    }

    // --- Skonto ---
    if (b.skontoProzent > 0) {
        checkPage(12);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(...GREEN);
        doc.text('Bei Zahlung innerhalb ' + b.skontoTage + ' Tagen erhalten Sie ' + b.skontoProzent + '% Skonto (' + formatCurrency(b.skontoBetrag) + ').', margin, y);
        y += 4;
        doc.text('Zahlbetrag mit Skonto: ' + formatCurrency(b.bruttoMitSkonto), margin, y);
        doc.setTextColor(...BLACK);
        y += 7;
    }

    // --- Kleinunternehmer §19 UStG Hinweis ---
    if (isKleinunternehmer) {
        checkPage(10);
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text('Kein Ausweis von Umsatzsteuer aufgrund der Anwendung der Kleinunternehmerregelung gem. \u00a7 19 UStG.', margin, y);
        doc.setTextColor(...BLACK);
        doc.setFont('helvetica', 'normal');
        y += 7;
    }

    // --- §35a EStG Lohnkostenhinweis ---
    if (b.fertigungsEinzelkosten > 0) {
        checkPage(18);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.text('Hinweis gem. \u00a7 35a EStG (Steuerbonus f\u00fcr Handwerkerleistungen):', margin, y);
        y += 4;
        doc.setFont('helvetica', 'normal');
        const lohnNetto = b.fertigungsEinzelkosten;
        const lohnBrutto = isKleinunternehmer ? lohnNetto : lohnNetto * (1 + (b.mwstSatz || 19) / 100);
        const docTyp = data.typ === 'rechnung' ? 'Rechnungsbetrag' : 'Angebotspreis';
        doc.text('In dem ' + docTyp + ' sind Lohnkosten in H\u00f6he von ' + formatCurrency(lohnNetto) + ' (netto)' +
            (isKleinunternehmer ? '' : ' / ' + formatCurrency(lohnBrutto) + ' (brutto)') + ' enthalten.', margin, y);
        y += 3.5;
        doc.text('Diese k\u00f6nnen gem\u00e4\u00df \u00a7 35a EStG steuerlich geltend gemacht werden.', margin, y);
        y += 7;
    }

    // --- Bedingungen ---
    checkPage(25);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);

    if (data.typ === 'angebot') {
        doc.text('G\u00fcltigkeitsdauer: ' + (data.gueltigkeit || 30) + ' Tage ab Angebotsdatum', margin, y); y += 4;
        doc.text('Ausf\u00fchrungszeitraum: ' + (data.ausfuehrungszeitraum || ''), margin, y); y += 4;
    }

    const zahlText = b.skontoProzent > 0
        ? 'Zahlungsbedingung: ' + b.skontoTage + ' Tage mit ' + b.skontoProzent + '% Skonto, ' + (data.zahlungsbedingung || 14) + ' Tage netto'
        : 'Zahlungsbedingung: ' + (data.zahlungsbedingung || 14) + ' Tage netto nach Rechnungseingang';
    doc.text(zahlText, margin, y); y += 4;

    // Fälligkeitsdatum (nur bei Rechnung)
    if (data.faelligDatum) {
        doc.text('F\u00e4llig am: ' + formatDate(data.faelligDatum), margin, y); y += 4;
    }

    // Bankverbindung (bei Rechnung prominent als Box)
    if (data.typ === 'rechnung' && bank.iban) {
        checkPage(28);
        y += 2;
        // Draw subtle box
        const boxH = 22 + (bank.inhaber ? 3.5 : 0) + (bank.bic ? 3.5 : 0) + (bank.bankname ? 3.5 : 0);
        doc.setDrawColor(...PRIMARY);
        doc.setLineWidth(0.5);
        doc.setFillColor(248, 249, 252);
        doc.roundedRect(margin, y - 2, contentWidth, boxH, 2, 2, 'FD');
        y += 4;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(...PRIMARY);
        doc.text('Bankverbindung', margin + 6, y);
        doc.setTextColor(...BLACK);
        y += 5;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        if (bank.inhaber) { doc.text('Kontoinhaber: ' + bank.inhaber, margin + 6, y); y += 3.5; }
        doc.text('IBAN: ' + bank.iban, margin + 6, y); y += 3.5;
        if (bank.bic) { doc.text('BIC: ' + bank.bic, margin + 6, y); y += 3.5; }
        if (bank.bankname) { doc.text('Bank: ' + bank.bankname, margin + 6, y); y += 3.5; }
        y += 6;
    }

    // --- Schlusstext ---
    checkPage(20);
    if (data.schlussText) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.text(data.schlussText, margin, y);
        y += 7;
    }

    doc.setFontSize(9);
    doc.text('Mit freundlichen Gr\u00fc\u00dfen', margin, y); y += 6;
    doc.setFont('helvetica', 'bold');
    doc.text(firma.ansprechpartner || firmaName, margin, y);

    // Save
    const filename = data.typ === 'rechnung'
        ? 'Rechnung_' + (data.rechnungNr || 'WerkBank') + '.pdf'
        : 'Angebot_' + (data.angebotNr || 'WerkBank') + '.pdf';
    doc.save(filename);
    showToast(data.typ === 'rechnung' ? 'Rechnung-PDF heruntergeladen' : 'PDF heruntergeladen');
}

// ==================== RECHNUNG ====================
async function erstelleRechnung() {
    if (!currentProjektId) { showToast('Bitte zuerst Projekt speichern', 'warning'); return; }
    const projekt = await dbGet('projekte', currentProjektId);
    if (!projekt) return;

    const now = new Date();
    const zahlungsziel = await getSetting('standardZahlungsziel', 30);

    // Rechnungsnummer: RE-JJJJ-KKK-PP (aus Angebotsnummer ableiten)
    let rechnungNr;
    if (projekt.angebotNr && projekt.angebotNr.startsWith('AG-')) {
        rechnungNr = 'RE-' + projekt.angebotNr.substring(3);
    } else {
        rechnungNr = await generateDokumentNr('RE-', projekt.kundeId, projekt.id);
    }

    const faelligDatum = new Date(now.getTime() + zahlungsziel * 86400000).toISOString().split('T')[0];

    projekt.rechnung = {
        rechnungNr: rechnungNr,
        rechnungDatum: now.toISOString().split('T')[0],
        faelligDatum: faelligDatum,
        bezahltAm: null,
        bezahltBetrag: null
    };

    // Also create rechnungsDaten (copy of Angebot data)
    if (!projekt.rechnungsDaten) {
        projekt.rechnungsDaten = {
            positionen: JSON.parse(JSON.stringify(projekt.positionen || [])),
            zuschlaege: JSON.parse(JSON.stringify(projekt.zuschlaege || {})),
            montage: JSON.parse(JSON.stringify(projekt.montage || {})),
            brutto: projekt.brutto || null,
            netto: projekt.netto || null,
            fertigungsEinzelkosten: projekt.fertigungsEinzelkosten || null
        };
    }

    projekt.status = 'rechnung_gestellt';
    projekt.geaendertAm = now.toISOString();
    await dbPut('projekte', projekt);

    document.getElementById('proj-status').value = 'rechnung_gestellt';
    showToast('Rechnung ' + rechnungNr + ' erstellt');
    updateRechnungUI(projekt);

    // Switch to Rechnung tab
    switchEditorTab('rechnung');
}

function updateRechnungUI(projekt) {
    const infoBox = document.getElementById('rechnung-info');
    const actionsBox = document.getElementById('rechnung-actions');
    const btnErstellen = document.getElementById('btn-rechnung-erstellen');
    const btnZahlung = document.getElementById('btn-zahlung-verbuchen');
    const btnRechnungPdf = document.getElementById('btn-rechnung-pdf');

    if (projekt && projekt.rechnung) {
        infoBox.classList.remove('hidden');
        actionsBox.classList.remove('hidden');
        actionsBox.style.display = 'flex';
        btnErstellen.classList.add('hidden');
        btnRechnungPdf.classList.remove('hidden');

        const r = projekt.rechnung;
        let infoHtml = '<div class="form-grid-2" style="margin-bottom:0">' +
            '<div><strong>Rechnungs-Nr.:</strong> ' + escapeHtml(r.rechnungNr) + '</div>' +
            '<div><strong>Rechnungsdatum:</strong> ' + formatDate(r.rechnungDatum) + '</div>' +
            '<div><strong>Fällig am:</strong> ' + formatDate(r.faelligDatum) + '</div>' +
            '<div><strong>Status:</strong> ' + (r.bezahltAm ? '<span class="text-success">Bezahlt am ' + formatDate(r.bezahltAm) + ' (' + formatCurrency(r.bezahltBetrag) + ')</span>' : '<span class="text-warning">Offen</span>') + '</div>' +
            '</div>';
        document.getElementById('rechnung-info-body').innerHTML = infoHtml;

        if (r.bezahltAm) {
            btnZahlung.classList.add('hidden');
        } else {
            btnZahlung.classList.remove('hidden');
        }
    } else {
        infoBox.classList.add('hidden');
        const status = document.getElementById('proj-status').value;
        if (status === 'beauftragt' && currentProjektId) {
            actionsBox.classList.remove('hidden');
            actionsBox.style.display = 'flex';
            btnErstellen.classList.remove('hidden');
            btnZahlung.classList.add('hidden');
            btnRechnungPdf.classList.add('hidden');
        } else {
            actionsBox.classList.add('hidden');
        }
    }
}

async function openZahlungModal() {
    const projekt = await dbGet('projekte', currentProjektId);
    if (!projekt || !projekt.rechnung) return;

    const modal = document.getElementById('modal-zahlung');
    document.getElementById('zahlung-datum').value = new Date().toISOString().split('T')[0];

    const brutto = projekt.brutto || 0;
    const z = projekt.zuschlaege || {};
    const skontoProzent = z.skontoProzent || 0;
    const skontoTage = z.skontoTage || 10;
    const skontoBetrag = brutto * (skontoProzent / 100);
    const bruttoMitSkonto = brutto - skontoBetrag;

    document.getElementById('zahlung-betrag').value = bruttoMitSkonto.toFixed(2);

    if (skontoProzent > 0) {
        document.getElementById('zahlung-skonto-hinweis').textContent =
            'Brutto: ' + formatCurrency(brutto) + ' | Mit Skonto (' + skontoProzent + '%): ' + formatCurrency(bruttoMitSkonto);
    } else {
        document.getElementById('zahlung-skonto-hinweis').textContent = '';
    }

    modal.classList.remove('hidden');
}

async function verbucheZahlung() {
    const projekt = await dbGet('projekte', currentProjektId);
    if (!projekt || !projekt.rechnung) return;

    const datum = document.getElementById('zahlung-datum').value;
    const betrag = parseFloat(document.getElementById('zahlung-betrag').value) || 0;

    if (!datum) { showToast('Bitte Datum eingeben', 'warning'); return; }
    if (betrag <= 0) { showToast('Bitte Betrag eingeben', 'warning'); return; }

    projekt.rechnung.bezahltAm = datum;
    projekt.rechnung.bezahltBetrag = betrag;
    projekt.status = 'bezahlt';
    projekt.geaendertAm = new Date().toISOString();
    await dbPut('projekte', projekt);

    const projStatusEl = document.getElementById('proj-status');
    if (projStatusEl) projStatusEl.value = 'bezahlt';
    document.getElementById('modal-zahlung').classList.add('hidden');
    showToast('Zahlung verbucht: ' + formatCurrency(betrag));
    updateRechnungUI(projekt);
    // Refresh card views if visible
    const cardsContainer = document.getElementById('projekte-cards-container');
    if (cardsContainer && !cardsContainer.classList.contains('hidden')) {
        await renderProjekteListe();
    }
    const kundenContainer = document.getElementById('kunden-cards-container');
    if (kundenContainer) {
        await renderKundenListe();
    }
}

async function generateRechnungPDF(projektOverride) {
    const projekt = projektOverride || (currentProjektId ? await dbGet('projekte', currentProjektId) : null);
    if (!projekt || !projekt.rechnung) {
        showToast('Keine Rechnungsdaten vorhanden', 'warning');
        return;
    }

    if (typeof window.jspdf === 'undefined') {
        showToast('PDF-Bibliothek wird geladen...', 'warning');
        try { await ensureJsPDF(); showToast('PDF-Bibliothek geladen, bitte erneut klicken'); } catch (e) { showToast('PDF-Bibliothek konnte nicht geladen werden', 'error'); }
        return;
    }

    const re = projekt.rechnung;
    const firma = await getSetting('firmendaten', {});
    const logo = await getSetting('firmenlogo', null);
    const bank = await getSetting('bankverbindung', {});
    const zahlungsbedingung = await getSetting('zahlungsbedingung', 14);

    const kundeId = projekt.kundeId;
    let kunde = null;
    if (kundeId) kunde = await dbGet('kunden', kundeId);

    // Build berechnung object
    // Priority: letzteRechnungsBerechnung > rechnungsDaten > letzteBerechnung > reconstruct from projekt
    let b = letzteRechnungsBerechnung || null;

    // If rechnungsDaten exists, use that as source for positions/amounts
    const rechnungsSource = projekt.rechnungsDaten || projekt;
    const rechnungsZuschlaege = (projekt.rechnungsDaten ? projekt.rechnungsDaten.zuschlaege : projekt.zuschlaege) || {};

    if (!b) {
        // Reconstruct positionen from saved project data (use rechnungsDaten if available)
        const sourcePositionen = rechnungsSource.positionen || [];
        const savedPositionen = sourcePositionen.map(p => ({
            bezeichnung: p.bezeichnung || 'Position',
            anzahl: p.anzahl || 1,
            positionSumme: 0,
            materialName: p.materialName || '',
            materialkosten: 0,
            oberflaecheName: p.oberflaecheName || '',
            oberflaecheKosten: 0,
            oberflaecheAnstriche: p.oberflaecheAnstriche || '',
            staerkeText: p.staerke ? (p.staerke + ' mm') : '',
            laengeMm: p.laenge || '',
            breiteMm: p.breite || '',
            beschlaegeDetails: (p.beschlaege || []).map(be => ({ name: be.name || '', menge: be.menge || 1 }))
        }));
        const netto = rechnungsSource.netto || projekt.netto || 0;
        const brutto = rechnungsSource.brutto || projekt.brutto || 0;
        if (savedPositionen.length > 0) {
            const perPos = netto / savedPositionen.length;
            savedPositionen.forEach(p => { p.positionSumme = perPos; });
        }
        b = {
            positionen: savedPositionen,
            brutto: brutto,
            netto: netto,
            mwst: brutto - netto,
            mwstSatz: currentMwstSatz,
            fertigungsEinzelkosten: rechnungsSource.fertigungsEinzelkosten || projekt.fertigungsEinzelkosten || 0,
            skontoProzent: rechnungsZuschlaege.skontoProzent || 0,
            skontoTage: rechnungsZuschlaege.skontoTage || 10,
            skontoBetrag: brutto * ((rechnungsZuschlaege.skontoProzent || 0) / 100),
            bruttoMitSkonto: brutto - brutto * ((rechnungsZuschlaege.skontoProzent || 0) / 100),
            datumStr: formatDate(re.rechnungDatum)
        };
    }

    const kleinunternehmer = await getSetting('kleinunternehmer', false);

    const pdfData = {
        typ: 'rechnung',
        titel: 'RECHNUNG',
        betreff: 'Rechnung: ' + (projekt.titel || 'Tischlerprojekt'),
        rechnungNr: re.rechnungNr,
        angebotNr: projekt.angebotNr || '',
        leistungszeitraum: projekt.leistungszeitraum || '',
        einleitungsText: 'wir stellen Ihnen folgende Leistungen in Rechnung:',
        schlussText: 'Vielen Dank f\u00fcr Ihren Auftrag. Bei Fragen stehen wir Ihnen gerne zur Verf\u00fcgung.',
        zahlungsbedingung,
        faelligDatum: re.faelligDatum,
        kleinunternehmer,
        firma, logo, bank, kunde, berechnung: b
    };

    _generateProfessionalPDF(pdfData);
}

// ==================== EDITOR TABS (Angebot / Rechnung) ====================
let currentEditorTab = 'angebot';
let letzteRechnungsBerechnung = null;

function switchEditorTab(tab) {
    currentEditorTab = tab;
    document.querySelectorAll('#projekt-editor-tabs .article-tab').forEach(btn => {
        btn.classList.toggle('article-tab-active', btn.dataset.editorTab === tab);
    });
    document.getElementById('tab-content-angebot').classList.toggle('hidden', tab !== 'angebot');
    document.getElementById('tab-content-rechnung').classList.toggle('hidden', tab !== 'rechnung');

    if (tab === 'rechnung') {
        initRechnungTab();
    }
}

async function initRechnungTab() {
    if (!currentProjektId) {
        document.getElementById('rechnung-tab-empty').classList.remove('hidden');
        document.getElementById('rechnung-tab-empty').querySelector('p').textContent = 'Bitte zuerst Projekt speichern.';
        document.getElementById('btn-rechnung-erstellen-tab').classList.add('hidden');
        hideRechnungTabEditing();
        return;
    }

    const projekt = await dbGet('projekte', currentProjektId);
    if (!projekt) return;

    if (projekt.rechnungsDaten) {
        document.getElementById('rechnung-tab-empty').classList.add('hidden');
        showRechnungTabEditing();
        loadRechnungPositionen(projekt);
        loadRechnungKLR(projekt);
        updateRechnungTabInfo(projekt);
    } else if (projekt.rechnung) {
        document.getElementById('rechnung-tab-empty').classList.remove('hidden');
        document.getElementById('btn-rechnung-erstellen-tab').classList.remove('hidden');
        document.getElementById('btn-rechnung-erstellen-tab').textContent = 'Rechnungsdaten initialisieren';
        hideRechnungTabEditing();
        updateRechnungTabInfo(projekt);
    } else {
        document.getElementById('rechnung-tab-empty').classList.remove('hidden');
        document.getElementById('btn-rechnung-erstellen-tab').classList.remove('hidden');
        document.getElementById('btn-rechnung-erstellen-tab').textContent = 'Rechnung erstellen';
        hideRechnungTabEditing();
    }
}

function showRechnungTabEditing() {
    document.getElementById('rechnung-klr-card').classList.remove('hidden');
    document.getElementById('btn-rechnung-berechnen').classList.remove('hidden');
    document.getElementById('btn-rechnung-position-add').classList.remove('hidden');
}

function hideRechnungTabEditing() {
    document.getElementById('rechnung-klr-card').classList.add('hidden');
    document.getElementById('btn-rechnung-berechnen').classList.add('hidden');
    document.getElementById('btn-rechnung-position-add').classList.add('hidden');
    document.getElementById('rechnung-ergebnis').classList.add('hidden');
    document.getElementById('rechnung-tab-actions').classList.add('hidden');
}

function loadRechnungPositionen(projekt) {
    const container = document.getElementById('rechnung-positionen-container');
    container.innerHTML = '';
    const rd = projekt.rechnungsDaten;
    if (rd && rd.positionen && rd.positionen.length > 0) {
        rd.positionen.forEach(pos => addPositionBlock(pos, 'rechnung-positionen-container'));
    }
}

function loadRechnungKLR(projekt) {
    const rd = projekt.rechnungsDaten;
    if (!rd) return;
    const z = rd.zuschlaege || {};
    document.getElementById('rz-mgk').value = z.mgk != null ? z.mgk : 10;
    document.getElementById('rz-fgk').value = z.fgk != null ? z.fgk : 120;
    document.getElementById('rz-vwgk').value = z.vwgk != null ? z.vwgk : 10;
    document.getElementById('rz-vtgk').value = z.vtgk != null ? z.vtgk : 8;
    document.getElementById('rz-wug').value = z.wug != null ? z.wug : 15;
    document.getElementById('rz-rabatt').value = z.rabatt != null ? z.rabatt : 0;
    document.getElementById('rz-skonto-prozent').value = z.skontoProzent != null ? z.skontoProzent : 2;
    document.getElementById('rz-skonto-tage').value = z.skontoTage != null ? z.skontoTage : 10;

    const m = rd.montage || {};
    document.getElementById('rz-montage-aktiv').checked = !!m.aktiv;
    document.getElementById('rz-montage-details').classList.toggle('hidden', !m.aktiv);
    document.getElementById('rz-anfahrtpauschale').value = m.anfahrtpauschale || m.anfahrtKm * 2 * (m.kmSatz || 0.45) || 0;
    document.getElementById('rz-gebrauchsmittel').value = m.gebrauchsmittel || 0;
    document.getElementById('rz-montage-personal-container').innerHTML = '';
    if (m.personal && m.personal.length > 0) {
        m.personal.forEach(p => addMontageWorkerRow('rz-montage-personal-container', p));
    } else {
        addMontageWorkerRow('rz-montage-personal-container');
    }
}

function updateRechnungTabInfo(projekt) {
    const infoBox = document.getElementById('rechnung-tab-info');
    const actionsBox = document.getElementById('rechnung-tab-actions');

    if (projekt && projekt.rechnung) {
        infoBox.classList.remove('hidden');
        actionsBox.classList.remove('hidden');
        actionsBox.style.display = 'flex';

        const r = projekt.rechnung;
        let infoHtml = '<div class="form-grid-2" style="margin-bottom:0">' +
            '<div><strong>Rechnungs-Nr.:</strong> ' + escapeHtml(r.rechnungNr) + '</div>' +
            '<div><strong>Rechnungsdatum:</strong> ' + formatDate(r.rechnungDatum) + '</div>' +
            '<div><strong>F\u00e4llig am:</strong> ' + formatDate(r.faelligDatum) + '</div>' +
            '<div><strong>Status:</strong> ' + (r.bezahltAm ? '<span class="text-success">Bezahlt am ' + formatDate(r.bezahltAm) + ' (' + formatCurrency(r.bezahltBetrag) + ')</span>' : '<span class="text-warning">Offen</span>') + '</div>' +
            '</div>';
        document.getElementById('rechnung-tab-info-body').innerHTML = infoHtml;

        if (r.bezahltAm) {
            document.getElementById('btn-zahlung-verbuchen-tab').classList.add('hidden');
        } else {
            document.getElementById('btn-zahlung-verbuchen-tab').classList.remove('hidden');
        }
    } else {
        infoBox.classList.add('hidden');
        actionsBox.classList.add('hidden');
    }
}

async function erstelleRechnungFromTab() {
    if (!currentProjektId) { showToast('Bitte zuerst Projekt speichern', 'warning'); return; }
    const projekt = await dbGet('projekte', currentProjektId);
    if (!projekt) return;

    // Copy Angebot positions to rechnungsDaten
    projekt.rechnungsDaten = {
        positionen: JSON.parse(JSON.stringify(projekt.positionen || [])),
        zuschlaege: JSON.parse(JSON.stringify(projekt.zuschlaege || {})),
        montage: JSON.parse(JSON.stringify(projekt.montage || {})),
        brutto: projekt.brutto || null,
        netto: projekt.netto || null,
        fertigungsEinzelkosten: projekt.fertigungsEinzelkosten || null
    };

    if (!projekt.rechnung) {
        const prefix = await getSetting('rechnungNrPrefix', 'RE-');
        const counter = await getSetting('rechnungNrCounter', 1);
        const now = new Date();
        const zahlungsziel = await getSetting('standardZahlungsziel', 30);

        const rechnungNr = prefix + now.getFullYear() + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(counter).padStart(4, '0');
        const faelligDatum = new Date(now.getTime() + zahlungsziel * 86400000).toISOString().split('T')[0];

        projekt.rechnung = {
            rechnungNr: rechnungNr,
            rechnungDatum: now.toISOString().split('T')[0],
            faelligDatum: faelligDatum,
            bezahltAm: null,
            bezahltBetrag: null
        };
        projekt.status = 'rechnung_gestellt';
        await setSetting('rechnungNrCounter', counter + 1);
        document.getElementById('proj-status').value = 'rechnung_gestellt';
        showToast('Rechnung ' + rechnungNr + ' erstellt');
    } else {
        showToast('Rechnungsdaten initialisiert');
    }

    projekt.geaendertAm = new Date().toISOString();
    await dbPut('projekte', projekt);

    initRechnungTab();
    updateRechnungUI(projekt);
}

function berechneRechnung() {
    const blocks = document.querySelectorAll('#rechnung-positionen-container .position-block');
    const positionenErgebnisse = [];
    let materialEinzelkosten = 0;
    let fertigungsEinzelkosten = 0;

    blocks.forEach((block) => {
        const result = berechnePosition(block);
        positionenErgebnisse.push(result);
        materialEinzelkosten += result.materialGesamt;
        fertigungsEinzelkosten += result.arbeitGesamt;
    });

    const mgkProzent = parseFloat(document.getElementById('rz-mgk').value) / 100 || 0;
    const fgkProzent = parseFloat(document.getElementById('rz-fgk').value) / 100 || 0;
    const vwgkProzent = parseFloat(document.getElementById('rz-vwgk').value) / 100 || 0;
    const vtgkProzent = parseFloat(document.getElementById('rz-vtgk').value) / 100 || 0;
    const wugProzent = parseFloat(document.getElementById('rz-wug').value) / 100 || 0;

    const mgkBetrag = materialEinzelkosten * mgkProzent;
    const materialKosten = materialEinzelkosten + mgkBetrag;
    const fgkBetrag = fertigungsEinzelkosten * fgkProzent;
    const fertigungsKosten = fertigungsEinzelkosten + fgkBetrag;
    const herstellKosten = materialKosten + fertigungsKosten;
    const vwgkBetrag = herstellKosten * vwgkProzent;
    const vtgkBetrag = herstellKosten * vtgkProzent;

    let anfahrtKosten = 0;
    let montageResult = null;
    if (document.getElementById('rz-montage-aktiv').checked) {
        montageResult = calcMontageKosten('rz');
        anfahrtKosten = montageResult.gesamt;
    }

    const selbstKosten = herstellKosten + vwgkBetrag + vtgkBetrag + anfahrtKosten;
    const wugBetrag = selbstKosten * wugProzent;
    const angebotspreis = selbstKosten + wugBetrag;

    const rabattProzent = parseFloat(document.getElementById('rz-rabatt').value) / 100;
    const rabattBetrag = angebotspreis * rabattProzent;
    const netto = angebotspreis - rabattBetrag;

    const mwstSatz = currentMwstSatz / 100;
    const mwst = netto * mwstSatz;
    const brutto = netto + mwst;

    const skontoProzent = parseFloat(document.getElementById('rz-skonto-prozent').value) || 0;
    const skontoTage = parseInt(document.getElementById('rz-skonto-tage').value) || 10;
    const skontoBetrag = brutto * (skontoProzent / 100);
    const bruttoMitSkonto = brutto - skontoBetrag;

    const datumStr = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });

    letzteRechnungsBerechnung = {
        positionen: positionenErgebnisse,
        materialEinzelkosten,
        fertigungsEinzelkosten,
        mgkBetrag,
        mgkProzent: parseFloat(document.getElementById('rz-mgk').value),
        materialKosten,
        fgkBetrag,
        fgkProzent: parseFloat(document.getElementById('rz-fgk').value),
        fertigungsKosten,
        herstellKosten,
        vwgkBetrag,
        vwgkProzent: parseFloat(document.getElementById('rz-vwgk').value),
        vtgkBetrag,
        vtgkProzent: parseFloat(document.getElementById('rz-vtgk').value),
        selbstKosten,
        wugBetrag,
        wugProzent: parseFloat(document.getElementById('rz-wug').value),
        angebotspreis,
        anfahrtKosten,
        montageResult,
        rabattBetrag,
        rabattProzent: parseFloat(document.getElementById('rz-rabatt').value),
        netto,
        mwstSatz: currentMwstSatz,
        mwst,
        brutto,
        skontoProzent,
        skontoTage,
        skontoBetrag,
        bruttoMitSkonto,
        datumStr,
        gesamtMaterial: materialEinzelkosten,
        gesamtArbeit: fertigungsEinzelkosten
    };

    blocks.forEach((block, i) => {
        const sumEl = block.querySelector('.pos-sum');
        if (sumEl) sumEl.textContent = formatCurrency(positionenErgebnisse[i].positionSumme);
    });

    renderRechnungErgebnis(letzteRechnungsBerechnung);
    return letzteRechnungsBerechnung;
}

function renderRechnungErgebnis(b) {
    const ergebnisEl = document.getElementById('rechnung-ergebnis');
    ergebnisEl.classList.remove('hidden');
    document.getElementById('rechnung-res-date').textContent = b.datumStr;

    const body = document.getElementById('rechnung-ergebnis-body');
    body.innerHTML = `
        <div class="result-grid">
            <div class="res-label">Materialeinzelkosten</div><div class="res-value">${formatCurrency(b.materialEinzelkosten)}</div>
            <div class="res-label">+ MGK (${b.mgkProzent}%)</div><div class="res-value">${formatCurrency(b.mgkBetrag)}</div>
            <div class="res-label">Fertigungseinzelkosten</div><div class="res-value">${formatCurrency(b.fertigungsEinzelkosten)}</div>
            <div class="res-label">+ FGK (${b.fgkProzent}%)</div><div class="res-value">${formatCurrency(b.fgkBetrag)}</div>
            <div class="res-label res-subtotal">Herstellkosten</div><div class="res-value res-subtotal">${formatCurrency(b.herstellKosten)}</div>
            <div class="res-label">+ VwGK (${b.vwgkProzent}%)</div><div class="res-value">${formatCurrency(b.vwgkBetrag)}</div>
            <div class="res-label">+ VtGK (${b.vtgkProzent}%)</div><div class="res-value">${formatCurrency(b.vtgkBetrag)}</div>
            ${b.montageResult ? `
                <div class="res-label">+ Montagekosten</div><div class="res-value">${formatCurrency(b.anfahrtKosten)}</div>
                ${b.montageResult.anfahrt > 0 ? `<div class="res-label res-sub">  Anfahrtpauschale</div><div class="res-value res-sub">${formatCurrency(b.montageResult.anfahrt)}</div>` : ''}
                ${b.montageResult.personalDetails.map(p => `<div class="res-label res-sub">  ${p.anzahl}\u00d7 ${escapeHtml(p.typ)} (${p.stunden}h)</div><div class="res-value res-sub">${formatCurrency(p.kosten)}</div>`).join('')}
                ${b.montageResult.gebrauchsmittel > 0 ? `<div class="res-label res-sub">  Gebrauchsmittel</div><div class="res-value res-sub">${formatCurrency(b.montageResult.gebrauchsmittel)}</div>` : ''}
            ` : ''}
            <div class="res-label res-subtotal">Selbstkosten</div><div class="res-value res-subtotal">${formatCurrency(b.selbstKosten)}</div>
            <div class="res-label">+ W&amp;G (${b.wugProzent}%)</div><div class="res-value">${formatCurrency(b.wugBetrag)}</div>
            ${b.rabattBetrag > 0 ? `<div class="res-label">- Rabatt (${b.rabattProzent}%)</div><div class="res-value">-${formatCurrency(b.rabattBetrag)}</div>` : ''}
        </div>
    `;

    const footer = document.getElementById('rechnung-ergebnis-footer');
    footer.innerHTML = `
        <div class="result-total">
            <div class="res-label">Netto</div><div class="res-value">${formatCurrency(b.netto)}</div>
            <div class="res-label">MwSt. (${b.mwstSatz}%)</div><div class="res-value">${formatCurrency(b.mwst)}</div>
            <div class="res-label res-brutto">Brutto</div><div class="res-value res-brutto">${formatCurrency(b.brutto)}</div>
            ${b.skontoProzent > 0 ? `<div class="res-label res-skonto">Mit Skonto (${b.skontoProzent}%)</div><div class="res-value res-skonto">${formatCurrency(b.bruttoMitSkonto)}</div>` : ''}
        </div>
    `;
}

async function saveRechnungsDaten() {
    if (!currentProjektId) return;
    const projekt = await dbGet('projekte', currentProjektId);
    if (!projekt || !projekt.rechnungsDaten) return;

    const positionen = [];
    document.querySelectorAll('#rechnung-positionen-container .position-block').forEach(block => {
        positionen.push(collectPositionData(block));
    });

    projekt.rechnungsDaten.positionen = positionen;
    projekt.rechnungsDaten.zuschlaege = {
        mgk: parseFloat(document.getElementById('rz-mgk').value) || 0,
        fgk: parseFloat(document.getElementById('rz-fgk').value) || 0,
        vwgk: parseFloat(document.getElementById('rz-vwgk').value) || 0,
        vtgk: parseFloat(document.getElementById('rz-vtgk').value) || 0,
        wug: parseFloat(document.getElementById('rz-wug').value) || 0,
        rabatt: parseFloat(document.getElementById('rz-rabatt').value) || 0,
        skontoProzent: parseFloat(document.getElementById('rz-skonto-prozent').value) || 0,
        skontoTage: parseInt(document.getElementById('rz-skonto-tage').value) || 10
    };
    projekt.rechnungsDaten.montage = {
        aktiv: document.getElementById('rz-montage-aktiv').checked,
        anfahrtpauschale: parseFloat(document.getElementById('rz-anfahrtpauschale').value) || 0,
        personal: collectMontagePersonal('rz-montage-personal-container'),
        gebrauchsmittel: parseFloat(document.getElementById('rz-gebrauchsmittel').value) || 0
    };

    if (letzteRechnungsBerechnung) {
        projekt.rechnungsDaten.brutto = letzteRechnungsBerechnung.brutto;
        projekt.rechnungsDaten.netto = letzteRechnungsBerechnung.netto;
        projekt.rechnungsDaten.fertigungsEinzelkosten = letzteRechnungsBerechnung.fertigungsEinzelkosten;
    }

    projekt.geaendertAm = new Date().toISOString();
    await dbPut('projekte', projekt);
}

// ==================== VORLAGEN ====================
async function loadEigeneVorlagen() {
    eigeneVorlagen = await getSetting('eigeneVorlagen', []);
}

async function saveEigeneVorlagen() {
    await setSetting('eigeneVorlagen', eigeneVorlagen);
}

async function addEigeneVorlage(titel, schraenke, zuschlaege) {
    const vorlage = {
        id: generateId(),
        titel: titel,
        schraenke: JSON.parse(JSON.stringify(schraenke)),
        zuschlaege: zuschlaege ? JSON.parse(JSON.stringify(zuschlaege)) : null,
        erstelltAm: new Date().toISOString()
    };
    eigeneVorlagen.push(vorlage);
    await saveEigeneVorlagen();
    return vorlage;
}

async function deleteEigeneVorlage(id) {
    eigeneVorlagen = eigeneVorlagen.filter(v => v.id !== id);
    await saveEigeneVorlagen();
}

function openVorlageModal() {
    const grid = document.getElementById('vorlage-grid');
    grid.innerHTML = '';

    if (eigeneVorlagen.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:30px;color:var(--text-muted)"><p style="font-size:1rem;margin-bottom:8px">Keine Vorlagen vorhanden.</p><p style="font-size:0.85rem">Erstellen Sie Vorlagen unter Einstellungen oder speichern Sie ein Projekt als Vorlage.</p></div>';
        document.getElementById('modal-vorlage').classList.remove('hidden');
        return;
    }

    eigeneVorlagen.forEach(vorlage => {
        const card = document.createElement('div');
        card.className = 'vorlage-card';
        card.innerHTML = `
            <h4>${escapeHtml(vorlage.titel)}</h4>
            <p>${vorlage.positionen.length} Position${vorlage.positionen.length !== 1 ? 'en' : ''}</p>
            <ul>${vorlage.positionen.map(p => '<li>' + escapeHtml(p.bezeichnung) + '</li>').join('')}</ul>
        `;
        card.addEventListener('click', () => {
            loadVorlage(vorlage);
            document.getElementById('modal-vorlage').classList.add('hidden');
        });
        grid.appendChild(card);
    });
    document.getElementById('modal-vorlage').classList.remove('hidden');
}

function loadVorlage(vorlage) {
    if (!vorlage) return;

    document.getElementById('proj-titel').value = vorlage.titel;
    document.getElementById('schraenke-container').innerHTML = '';
    schrankCounter = 0;
    if (vorlage.schraenke && vorlage.schraenke.length > 0) {
        vorlage.schraenke.forEach(s => addSchrankBlock(s));
    } else if (vorlage.positionen && vorlage.positionen.length > 0) {
        vorlage.positionen.forEach(pos => addSchrankBlock(convertLegacyPosition(pos)));
    } else {
        addSchrankBlock();
    }

    // Auch Zuschläge laden, falls in Vorlage gespeichert
    if (vorlage.zuschlaege) {
        const z = vorlage.zuschlaege;
        if (z.mgk != null) document.getElementById('z-mgk').value = z.mgk;
        if (z.fgk != null) document.getElementById('z-fgk').value = z.fgk;
        if (z.vwgk != null) document.getElementById('z-vwgk').value = z.vwgk;
        if (z.vtgk != null) document.getElementById('z-vtgk').value = z.vtgk;
        if (z.wug != null) document.getElementById('z-wug').value = z.wug;
        if (z.rabatt != null) setRabattCombo(z.rabatt);
        if (z.skontoProzent != null) document.getElementById('z-skonto-prozent').value = z.skontoProzent;
        if (z.skontoTage != null) document.getElementById('z-skonto-tage').value = z.skontoTage;
    }

    showToast('Vorlage "' + vorlage.titel + '" geladen');
}

async function saveProjektAlsVorlage() {
    const titel = document.getElementById('proj-titel').value.trim();
    if (!titel) {
        showToast('Bitte zuerst einen Projekttitel eingeben', 'warning');
        return;
    }

    const schraenke = [];
    document.querySelectorAll('#schraenke-container .schrank-block').forEach(block => {
        schraenke.push(collectSchrankData(block));
    });

    if (schraenke.length === 0) {
        showToast('Keine Schränke zum Speichern', 'warning');
        return;
    }

    const zuschlaege = {
        mgk: parseFloat(document.getElementById('z-mgk').value) || 0,
        fgk: parseFloat(document.getElementById('z-fgk').value) || 0,
        vwgk: parseFloat(document.getElementById('z-vwgk').value) || 0,
        vtgk: parseFloat(document.getElementById('z-vtgk').value) || 0,
        wug: parseFloat(document.getElementById('z-wug').value) || 0,
        rabatt: parseFloat(document.getElementById('z-rabatt').value) || 0,
        skontoProzent: parseFloat(document.getElementById('z-skonto-prozent').value) || 0,
        skontoTage: parseInt(document.getElementById('z-skonto-tage').value) || 10
    };

    await addEigeneVorlage(titel, schraenke, zuschlaege);
    showToast('Vorlage "' + titel + '" gespeichert');
}

let vorlageEditorOffen = false;

function renderEigeneVorlagen() {
    const container = document.getElementById('eigene-vorlagen-content');
    if (!container) return;

    let html = '';

    // Vorlagen-Liste
    if (eigeneVorlagen.length > 0) {
        html += '<div class="vorlagen-list">';
        eigeneVorlagen.forEach(v => {
            html += `<div class="vorlage-manage-card" data-vorlage-id="${v.id}">
                <div class="vorlage-manage-info">
                    <h4>${escapeHtml(v.titel)}</h4>
                    <p>${v.positionen.length} Position${v.positionen.length !== 1 ? 'en' : ''}${v.positionen.length > 0 ? ': ' + v.positionen.map(p => escapeHtml(p.bezeichnung)).join(', ') : ''}</p>
                </div>
                <div style="display:flex;gap:8px;align-items:center;flex-shrink:0">
                    <button class="btn btn-secondary btn-sm" onclick="handleEditVorlage('${v.id}')" title="Bearbeiten" style="padding:6px 10px;font-size:0.8rem">Bearbeiten</button>
                    <button class="btn-icon btn-icon-danger" onclick="handleDeleteVorlage('${v.id}')" title="L\u00f6schen">&#128465;</button>
                </div>
            </div>`;
        });
        html += '</div>';
    } else {
        html += '<p style="color:var(--text-muted);text-align:center;padding:16px 0">Noch keine Vorlagen erstellt.</p>';
    }

    // Button zum Öffnen des Editors (wenn nicht schon offen)
    if (!vorlageEditorOffen) {
        html += `<div style="margin-top:16px;text-align:center">
            <button class="btn btn-primary btn-sm" onclick="openVorlageEditor()">+ Neue Vorlage erstellen</button>
        </div>
        <p style="font-size:0.85rem;color:var(--text-muted);text-align:center;margin-top:8px">Tipp: Im Projekt-Editor k\u00f6nnen Sie auch \u00fcber "Als Vorlage speichern" ein fertiges Projekt direkt als Vorlage sichern.</p>`;
    }

    container.innerHTML = html;

    // Editor-Bereich anhängen wenn offen
    if (vorlageEditorOffen) {
        const editorDiv = document.createElement('div');
        editorDiv.id = 'vorlage-editor-wrap';
        editorDiv.innerHTML = `
            <div class="vorlage-editor" style="margin-top:20px;padding:20px;border:2px solid var(--accent);border-radius:var(--radius);background:var(--white)">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
                    <h4 style="color:var(--primary);margin:0" id="vorlage-editor-heading">Neue Vorlage erstellen</h4>
                    <button class="btn btn-secondary btn-sm" onclick="closeVorlageEditor()" style="padding:4px 12px">Abbrechen</button>
                </div>
                <div class="form-group" style="margin-bottom:16px">
                    <label for="ev-titel">Vorlagenname *</label>
                    <input type="text" id="ev-titel" placeholder="z.B. Standard-Einbauschrank, Esstisch Eiche, K\u00fcchenzeile...">
                </div>
                <input type="hidden" id="ev-edit-id" value="">
                <div id="vorlage-positionen-container"></div>
                <button type="button" class="btn-add btn-add-position" onclick="addPositionBlock(null, 'vorlage-positionen-container')" style="margin-bottom:16px">
                    <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
                    Position hinzuf\u00fcgen
                </button>
                <div style="display:flex;gap:12px">
                    <button class="btn btn-primary" onclick="handleSaveVorlageFromEditor()">Vorlage speichern</button>
                    <button class="btn btn-secondary" onclick="closeVorlageEditor()">Abbrechen</button>
                </div>
            </div>
        `;
        container.appendChild(editorDiv);
    }
}

function openVorlageEditor(vorlageToEdit) {
    vorlageEditorOffen = true;
    renderEigeneVorlagen();

    // Falls wir eine bestehende Vorlage bearbeiten
    if (vorlageToEdit) {
        document.getElementById('ev-titel').value = vorlageToEdit.titel;
        document.getElementById('ev-edit-id').value = vorlageToEdit.id;
        document.getElementById('vorlage-editor-heading').textContent = 'Vorlage bearbeiten';
        const posContainer = document.getElementById('vorlage-positionen-container');
        posContainer.innerHTML = '';
        if (vorlageToEdit.positionen && vorlageToEdit.positionen.length > 0) {
            vorlageToEdit.positionen.forEach(pos => addPositionBlock(pos, 'vorlage-positionen-container'));
        }
    } else {
        // Neue Vorlage: eine leere Position hinzufügen
        setTimeout(() => {
            addPositionBlock(null, 'vorlage-positionen-container');
        }, 0);
    }

    // Zum Editor scrollen
    setTimeout(() => {
        const editor = document.getElementById('vorlage-editor-wrap');
        if (editor) editor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
}

function closeVorlageEditor() {
    vorlageEditorOffen = false;
    document.getElementById('vorlage-positionen-container')?.replaceChildren();
    renderEigeneVorlagen();
}

async function handleSaveVorlageFromEditor() {
    const titel = document.getElementById('ev-titel').value.trim();
    if (!titel) { showToast('Bitte Vorlagennamen eingeben', 'warning'); return; }

    const positionen = [];
    document.querySelectorAll('#vorlage-positionen-container .position-block').forEach(block => {
        positionen.push(collectPositionData(block));
    });

    if (positionen.length === 0) {
        showToast('Bitte mindestens eine Position hinzuf\u00fcgen', 'warning');
        return;
    }

    const editId = document.getElementById('ev-edit-id').value;
    if (editId) {
        // Bestehende Vorlage aktualisieren
        const idx = eigeneVorlagen.findIndex(v => v.id === editId);
        if (idx !== -1) {
            eigeneVorlagen[idx].titel = titel;
            eigeneVorlagen[idx].positionen = JSON.parse(JSON.stringify(positionen));
            eigeneVorlagen[idx].geaendertAm = new Date().toISOString();
            await saveEigeneVorlagen();
            showToast('Vorlage "' + titel + '" aktualisiert');
        }
    } else {
        await addEigeneVorlage(titel, positionen, null);
        showToast('Vorlage "' + titel + '" erstellt');
    }

    closeVorlageEditor();
}

async function handleEditVorlage(id) {
    const vorlage = eigeneVorlagen.find(v => v.id === id);
    if (!vorlage) return;
    openVorlageEditor(vorlage);
}

async function handleDeleteVorlage(id) {
    const vorlage = eigeneVorlagen.find(v => v.id === id);
    if (!vorlage) return;

    const ok = await showConfirm('Vorlage l\u00f6schen', 'M\u00f6chten Sie die Vorlage "' + vorlage.titel + '" wirklich l\u00f6schen?');
    if (!ok) return;

    await deleteEigeneVorlage(id);
    renderEigeneVorlagen();
    showToast('Vorlage gel\u00f6scht');
}

// ==================== MIGRATE OLD LOCALSTORAGE DATA ====================
async function migrateLocalStorage() {
    const firmaData = localStorage.getItem('tischlerkalk-firma');
    if (firmaData) {
        try {
            const f = JSON.parse(firmaData);
            const existing = await getSetting('firmendaten', null);
            if (!existing) {
                await setSetting('firmendaten', {
                    name: f['firma-name'] || '',
                    strasse: f['firma-strasse'] || '',
                    plz: f['firma-plz'] || '',
                    ort: f['firma-ort'] || '',
                    telefon: f['firma-telefon'] || '',
                    email: f['firma-email'] || ''
                });
            }
            localStorage.removeItem('tischlerkalk-firma');
        } catch (e) { /* ignore */ }
    }
}

// ==================== EVENT BINDING ====================
function initEvents() {
    // Router
    window.addEventListener('hashchange', router);

    // Mobile nav toggle
    document.getElementById('nav-toggle').addEventListener('click', () => {
        document.getElementById('nav-links').classList.toggle('nav-open');
    });

    // Close mobile nav on link click
    document.querySelectorAll('.nav-link').forEach(a => {
        a.addEventListener('click', () => {
            document.getElementById('nav-links').classList.remove('nav-open');
        });
    });

    // KPI card clicks
    document.querySelectorAll('.kpi-clickable').forEach(card => {
        card.addEventListener('click', () => {
            const filter = card.dataset.kpiFilter;
            if (filter === 'monat') {
                window.location.hash = '#/projekte?monat=aktuell';
            } else {
                window.location.hash = '#/projekte?status=' + filter;
            }
        });
    });

    // Dashboard table row clicks
    document.getElementById('dashboard-projekte-body').addEventListener('click', async (e) => {
        // Handle card action buttons first (PDF, Rechnung, Zahlung)
        if (e.target.closest('[data-create-rechnung]') || e.target.closest('[data-angebot-pdf]') || e.target.closest('[data-rechnung-pdf]') || e.target.closest('[data-zahlung-verbuchen]')) {
            await handleCardActions(e);
            return;
        }
        const row = e.target.closest('tr');
        if (!row || row.classList.contains('empty-row')) return;
        const link = row.querySelector('.table-link');
        if (link && !e.target.closest('.btn-icon') && !e.target.closest('.status-inline') && !e.target.closest('.td-actions')) {
            window.location.hash = link.getAttribute('href').replace('#', '#');
        }
    });

    // Kunde dropdown -> auto-fill address + Angebotsnummer aktualisieren
    document.getElementById('proj-kunde').addEventListener('change', async function () {
        fillKundeDetails(this.value);
        // Bei neuem Projekt: Angebotsnummer mit neuem Kunden generieren
        const angebotInput = document.getElementById('proj-angebot-nr');
        if (!currentProjektId || angebotInput.value === '(wird beim Speichern vergeben)') {
            if (this.value) {
                angebotInput.value = await generateDokumentNr('AG-', this.value, null);
            } else {
                angebotInput.value = '(wird beim Speichern vergeben)';
            }
        }
    });

    // Montage personal add button
    document.getElementById('btn-add-montage-personal').addEventListener('click', function () {
        addMontageWorkerRow('proj-montage-personal-container');
    });

    // Rabatt preset + input sync
    const rabattPresets = document.getElementById('z-rabatt-presets');
    const rabattInput = document.getElementById('z-rabatt');
    if (rabattPresets && rabattInput) {
        rabattPresets.addEventListener('change', () => {
            if (rabattPresets.value !== 'custom') {
                rabattInput.value = rabattPresets.value;
            }
        });
        rabattInput.addEventListener('input', () => {
            const val = rabattInput.value;
            const matchOpt = Array.from(rabattPresets.options).find(o => o.value === val);
            rabattPresets.value = matchOpt ? val : 'custom';
        });
    }

    // Kalkulatorische Kosten Hilfsrechner in Einstellungen
    ['set-kalk-unternehmerlohn', 'set-kalk-miete', 'set-kalk-abschreibung', 'set-kalk-zinsen', 'set-kalk-produktivstunden'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', berechneKalkKosten);
    });

    // MwSt custom toggle
    document.getElementById('set-mwst').addEventListener('change', function () {
        document.getElementById('set-mwst-custom-wrap').classList.toggle('hidden', this.value !== 'custom');
    });

    // Settings save
    document.getElementById('btn-settings-save').addEventListener('click', saveSettings);

    // Data export/import
    document.getElementById('btn-export-data').addEventListener('click', exportAllData);
    document.getElementById('import-file-input').addEventListener('change', function () {
        const file = this.files[0];
        if (!file) return;
        if (confirm('Achtung: Alle bestehenden Daten werden durch die Sicherung ersetzt. Fortfahren?')) {
            importAllData(file);
        }
        this.value = '';
    });

    // Logo upload
    document.getElementById('set-firma-logo').addEventListener('change', function () {
        const file = this.files[0];
        if (!file) return;
        if (file.size > 500000) {
            showToast('Logo zu groß (max 500KB)', 'error');
            return;
        }
        const reader = new FileReader();
        reader.onload = async (e) => {
            const base64 = e.target.result;
            await setSetting('firmenlogo', base64);
            document.getElementById('set-logo-img').src = base64;
            document.getElementById('set-logo-preview').classList.remove('hidden');
            showToast('Logo gespeichert');
        };
        reader.readAsDataURL(file);
    });

    document.getElementById('set-logo-remove').addEventListener('click', async () => {
        await setSetting('firmenlogo', null);
        document.getElementById('set-logo-preview').classList.add('hidden');
        document.getElementById('set-firma-logo').value = '';
        showToast('Logo entfernt');
    });

    // Kunde modal
    document.getElementById('btn-neuer-kunde').addEventListener('click', () => openKundeModal(null));
    document.getElementById('btn-neuer-kunde-dash').addEventListener('click', () => openKundeModal(null));
    document.getElementById('modal-kunde-close').addEventListener('click', closeKundeModal);
    document.getElementById('modal-kunde-cancel').addEventListener('click', closeKundeModal);
    document.getElementById('modal-kunde-save').addEventListener('click', saveKunde);
    document.querySelector('#modal-kunde .modal-backdrop').addEventListener('click', closeKundeModal);

    // Kunden cards click delegation
    document.getElementById('kunden-cards-container').addEventListener('click', async (e) => {
        const editBtn = e.target.closest('[data-edit-kunde]');
        if (editBtn) {
            const kunde = await dbGet('kunden', editBtn.dataset.editKunde);
            if (kunde) openKundeModal(kunde);
            return;
        }
        const deleteBtn = e.target.closest('[data-delete-kunde]');
        if (deleteBtn) {
            const ok = await showConfirm('Kunde löschen', 'Möchten Sie diesen Kunden wirklich löschen?');
            if (ok) {
                await dbDelete('kunden', deleteBtn.dataset.deleteKunde);
                showToast('Kunde gelöscht');
                await renderKundenListe();
            }
            return;
        }
        // Toggle projekte list
        const toggleBtn = e.target.closest('[data-toggle-projekte]');
        if (toggleBtn) {
            const kundeId = toggleBtn.dataset.toggleProjekte;
            const list = document.getElementById('kunde-projekte-' + kundeId);
            if (list) {
                list.classList.toggle('open');
                toggleBtn.classList.toggle('open');
            }
            return;
        }
        // Card action buttons (Rechnung erstellen, PDF, Zahlung)
        await handleCardActions(e);
    });

    // Status inline change - Projekte liste, Dashboard, Cards & Kunden
    document.getElementById('projekte-liste-body').addEventListener('change', handleInlineStatusChange);
    document.getElementById('dashboard-projekte-body').addEventListener('change', handleInlineStatusChange);
    document.getElementById('projekte-cards-container').addEventListener('change', handleInlineStatusChange);
    document.getElementById('kunden-cards-container').addEventListener('change', handleInlineStatusChange);

    // Projekte table click delegation
    document.getElementById('projekte-liste-body').addEventListener('click', async (e) => {
        const deleteBtn = e.target.closest('[data-delete-projekt]');
        if (deleteBtn) {
            const ok = await showConfirm('Projekt löschen', 'Möchten Sie dieses Projekt wirklich löschen?');
            if (ok) {
                await dbDelete('projekte', deleteBtn.dataset.deleteProjekt);
                showToast('Projekt gelöscht');
                await renderProjekteListe();
            }
            return;
        }
        await handleCardActions(e);
    });

    // Projekte cards click delegation
    document.getElementById('projekte-cards-container').addEventListener('click', async (e) => {
        const deleteBtn = e.target.closest('[data-delete-projekt]');
        if (deleteBtn) {
            const ok = await showConfirm('Projekt löschen', 'Möchten Sie dieses Projekt wirklich löschen?');
            if (ok) {
                await dbDelete('projekte', deleteBtn.dataset.deleteProjekt);
                showToast('Projekt gelöscht');
                await renderProjekteListe();
            }
            return;
        }
        await handleCardActions(e);
    });

    // View toggle - Projekte
    document.getElementById('projekte-view-cards').addEventListener('click', () => switchProjekteView('cards'));
    document.getElementById('projekte-view-table').addEventListener('click', () => switchProjekteView('table'));

    // View toggle - Kunden
    document.getElementById('kunden-view-cards').addEventListener('click', () => switchKundenView('cards'));
    document.getElementById('kunden-view-table').addEventListener('click', () => switchKundenView('table'));

    // Kunden table click delegation
    document.getElementById('kunden-liste-body').addEventListener('click', async (e) => {
        const editBtn = e.target.closest('[data-edit-kunde]');
        if (editBtn) {
            const kunde = await dbGet('kunden', editBtn.dataset.editKunde);
            if (kunde) openKundeModal(kunde);
            return;
        }
        const deleteBtn = e.target.closest('[data-delete-kunde]');
        if (deleteBtn) {
            const ok = await showConfirm('Kunde löschen', 'Möchten Sie diesen Kunden wirklich löschen?');
            if (ok) {
                await dbDelete('kunden', deleteBtn.dataset.deleteKunde);
                showToast('Kunde gelöscht');
                await renderKundenListe();
            }
            return;
        }
    });
    document.getElementById('kunden-liste-body').addEventListener('change', handleInlineStatusChange);

    // Filter status + kunde + search
    document.getElementById('filter-status').addEventListener('change', () => renderProjekteListe());
    document.getElementById('filter-kunde').addEventListener('change', () => renderProjekteListe());
    document.getElementById('projekte-suche').addEventListener('input', () => renderProjekteListe());

    // Kunden search
    document.getElementById('kunden-suche').addEventListener('input', renderKundenListe);

    // Confirm modal
    document.getElementById('confirm-ok').addEventListener('click', () => {
        document.getElementById('modal-confirm').classList.add('hidden');
        if (confirmResolve) { confirmResolve(true); confirmResolve = null; }
    });
    document.getElementById('confirm-cancel').addEventListener('click', () => {
        document.getElementById('modal-confirm').classList.add('hidden');
        if (confirmResolve) { confirmResolve(false); confirmResolve = null; }
    });
    document.getElementById('modal-confirm-close').addEventListener('click', () => {
        document.getElementById('modal-confirm').classList.add('hidden');
        if (confirmResolve) { confirmResolve(false); confirmResolve = null; }
    });
    document.querySelector('#modal-confirm .modal-backdrop').addEventListener('click', () => {
        document.getElementById('modal-confirm').classList.add('hidden');
        if (confirmResolve) { confirmResolve(false); confirmResolve = null; }
    });

    // Project editor buttons
    document.getElementById('btn-schrank-add').addEventListener('click', () => addSchrankBlock());

    // Projekttitel → Überschrift über Schränke sync
    document.getElementById('proj-titel').addEventListener('input', () => {
        const titel = document.getElementById('proj-titel').value.trim();
        const titelEl = document.getElementById('schraenke-titel');
        titelEl.textContent = titel || '';
        titelEl.classList.toggle('hidden', !titel);
    });

    document.getElementById('btn-arbeitszeit-add').addEventListener('click', () => {
        const container = document.getElementById('global-arbeitszeit-container');
        container.insertAdjacentHTML('beforeend', buildArbeitszeitRow());
        bindMitarbeiterSelects(container);
    });
    document.getElementById('btn-berechnen').addEventListener('click', () => berechneAlles());
    document.getElementById('btn-projekt-speichern').addEventListener('click', () => saveProjekt());
    document.getElementById('btn-pdf').addEventListener('click', () => generatePDF());

    // Rechnung (Angebot-Tab legacy buttons)
    document.getElementById('btn-rechnung-erstellen').addEventListener('click', () => erstelleRechnung());
    document.getElementById('btn-zahlung-verbuchen').addEventListener('click', () => openZahlungModal());
    document.getElementById('btn-rechnung-pdf').addEventListener('click', () => generateRechnungPDF());

    // Rechnung-Tab buttons
    document.getElementById('btn-rechnung-erstellen-tab').addEventListener('click', () => erstelleRechnungFromTab());
    document.getElementById('btn-rechnung-position-add').addEventListener('click', () => addPositionBlock(null, 'rechnung-positionen-container'));
    document.getElementById('btn-rechnung-berechnen').addEventListener('click', () => berechneRechnung());
    document.getElementById('btn-rechnung-pdf-tab').addEventListener('click', () => generateRechnungPDF());
    document.getElementById('btn-zahlung-verbuchen-tab').addEventListener('click', () => openZahlungModal());

    // Rechnung-Tab montage toggle
    document.getElementById('rz-montage-aktiv').addEventListener('change', function() {
        document.getElementById('rz-montage-details').classList.toggle('hidden', !this.checked);
        if (this.checked && document.getElementById('rz-montage-personal-container').children.length === 0) {
            addMontageWorkerRow('rz-montage-personal-container');
        }
    });

    document.getElementById('btn-add-rz-montage-personal').addEventListener('click', function () {
        addMontageWorkerRow('rz-montage-personal-container');
    });

    // Zahlung Modal
    document.getElementById('modal-zahlung-ok').addEventListener('click', () => verbucheZahlung());
    document.getElementById('modal-zahlung-cancel').addEventListener('click', () => {
        document.getElementById('modal-zahlung').classList.add('hidden');
    });
    document.getElementById('modal-zahlung-close').addEventListener('click', () => {
        document.getElementById('modal-zahlung').classList.add('hidden');
    });
    document.querySelector('#modal-zahlung .modal-backdrop').addEventListener('click', () => {
        document.getElementById('modal-zahlung').classList.add('hidden');
    });

    // Status change -> update rechnung UI
    document.getElementById('proj-status').addEventListener('change', function() {
        if (currentProjektId) {
            dbGet('projekte', currentProjektId).then(p => updateRechnungUI(p));
        }
    });

    // Vorlage
    document.getElementById('btn-vorlage').addEventListener('click', openVorlageModal);
    document.getElementById('btn-als-vorlage').addEventListener('click', () => saveProjektAlsVorlage());
    document.getElementById('modal-vorlage-close').addEventListener('click', () => {
        document.getElementById('modal-vorlage').classList.add('hidden');
    });
    document.querySelector('#modal-vorlage .modal-backdrop').addEventListener('click', () => {
        document.getElementById('modal-vorlage').classList.add('hidden');
    });
}

// ==================== DEMO DATA SEED ====================
async function seedDemoData() {
    // Only seed if no data exists
    const existingKunden = await dbGetAll('kunden');
    const existingProjekte = await dbGetAll('projekte');
    if (existingKunden.length > 0 || existingProjekte.length > 0) return;

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    // Helper: create date N months ago + random days
    function monthsAgo(m, day) {
        const d = new Date(year, month - m, day || 1);
        return d.toISOString();
    }

    // ---------- KUNDEN ----------
    const kunden = [
        { id: 'demo-k1', anrede: 'Herr', firma: '', vorname: 'Thomas', nachname: 'Müller', strasse: 'Bergstraße 12', plz: '80331', ort: 'München', telefon: '089 12345678', email: 't.mueller@email.de', notizen: 'Stammkunde seit 2019', erstelltAm: monthsAgo(14, 5) },
        { id: 'demo-k2', anrede: 'Frau', firma: 'Praxis Dr. Weber', vorname: 'Sabine', nachname: 'Weber', strasse: 'Lindenallee 45', plz: '60322', ort: 'Frankfurt am Main', telefon: '069 87654321', email: 's.weber@praxis-weber.de', notizen: 'Zahnarztpraxis – Empfangsbereich + Behandlungsräume', erstelltAm: monthsAgo(11, 12) },
        { id: 'demo-k3', anrede: 'Herr', firma: 'Hotel Alpenblick GmbH', vorname: 'Markus', nachname: 'Brandner', strasse: 'Hauptplatz 3', plz: '83435', ort: 'Bad Reichenhall', telefon: '08651 98765', email: 'm.brandner@hotel-alpenblick.de', notizen: 'Hotelrenovierung, mehrere Phasen geplant', erstelltAm: monthsAgo(9, 20) },
        { id: 'demo-k4', anrede: 'Frau', firma: '', vorname: 'Claudia', nachname: 'Hoffmann', strasse: 'Am Rosengarten 8', plz: '70178', ort: 'Stuttgart', telefon: '0711 5554433', email: 'c.hoffmann@gmx.de', notizen: 'Altbauwohnung – denkmalgeschützt', erstelltAm: monthsAgo(7, 3) },
        { id: 'demo-k5', anrede: 'Herr', firma: 'Restaurant Zum Goldenen Hirsch', vorname: 'Stefan', nachname: 'Krämer', strasse: 'Marktgasse 22', plz: '91054', ort: 'Erlangen', telefon: '09131 445566', email: 'info@goldener-hirsch.de', notizen: 'Gastraum-Neugestaltung', erstelltAm: monthsAgo(6, 15) },
        { id: 'demo-k6', anrede: 'Herr', firma: 'Architekturbüro Schneider & Partner', vorname: 'Robert', nachname: 'Schneider', strasse: 'Friedrichstraße 101', plz: '10117', ort: 'Berlin', telefon: '030 22334455', email: 'r.schneider@schneider-architekten.de', notizen: 'Vermittelt regelmäßig Aufträge', erstelltAm: monthsAgo(12, 1) },
        { id: 'demo-k7', anrede: 'Frau', firma: '', vorname: 'Maria', nachname: 'Fischer', strasse: 'Waldweg 5', plz: '50937', ort: 'Köln', telefon: '0221 7788990', email: 'maria.fischer@web.de', notizen: 'Einbauküche + Garderobe', erstelltAm: monthsAgo(4, 8) },
        { id: 'demo-k8', anrede: 'Herr', firma: 'Weingut Becker', vorname: 'Johannes', nachname: 'Becker', strasse: 'Weinbergstraße 17', plz: '55116', ort: 'Mainz', telefon: '06131 112233', email: 'j.becker@weingut-becker.de', notizen: 'Verkostungsraum und Vinothek', erstelltAm: monthsAgo(3, 22) },
        { id: 'demo-k9', anrede: 'Frau', firma: 'Kanzlei Hartmann & Kollegen', vorname: 'Elisabeth', nachname: 'Hartmann', strasse: 'Königsallee 78', plz: '40212', ort: 'Düsseldorf', telefon: '0211 6677889', email: 'e.hartmann@kanzlei-hartmann.de', notizen: 'Anwaltskanzlei – repräsentative Büroeinrichtung', erstelltAm: monthsAgo(5, 10) },
        { id: 'demo-k10', anrede: 'Herr', firma: '', vorname: 'Andreas', nachname: 'Wagner', strasse: 'Seestraße 42', plz: '88131', ort: 'Lindau', telefon: '08382 334455', email: 'a.wagner@outlook.de', notizen: 'Neubau am Bodensee – komplette Innenausstattung geplant', erstelltAm: monthsAgo(2, 14) }
    ];

    for (const k of kunden) {
        await dbPut('kunden', k);
    }

    // ---------- PROJEKTE ----------
    // Position helper – uses correct field names matching collectPositionData()
    function pos(bezeichnung, kategorie, typ, staerke, laenge, breite, opts) {
        opts = opts || {};
        return {
            bezeichnung,
            kategorie: kategorie || 'spanplatte',
            typ: typ || 'egger-eurodekor-uni',
            staerke: staerke || 19,
            laenge: laenge || 2000,
            breite: breite || 600,
            anzahl: opts.anzahl || 1,
            verschnitt: opts.verschnitt || 15,
            oberflaecheAktiv: !!opts.oberflaecheTyp,
            oberflaecheTyp: opts.oberflaecheTyp || '',
            oberflaecheAnstriche: opts.oberflaecheAnstriche || 2,
            beschlaege: opts.beschlaege || [],
            arbeitszeiten: opts.arbeitszeiten || [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 3 }]
        };
    }

    const projekte = [
        // --- Abgeschlossene Projekte (vergangene Monate) ---
        {
            id: 'demo-p1', titel: 'Einbauschrank Schlafzimmer', kundeId: 'demo-k1', status: 'abgeschlossen',
            rechnung: { rechnungNr: 'RE-202501-0001', rechnungDatum: '2025-03-15', faelligDatum: '2025-04-14', bezahltAm: '2025-03-22', bezahltBetrag: 8280.20 },
            angebotNr: 'ANG-202501-0001', objektAdresse: 'Bergstraße 12, 80331 München',
            notizen: 'Einbauschrank mit Schiebetüren, Eiche furniert',
            positionen: [
                pos('Korpus links', 'multiplex', 'birke-bb', 18, 2400, 600),
                pos('Korpus rechts', 'multiplex', 'birke-bb', 18, 2400, 600),
                pos('Einlegeböden', 'spanplatte', 'egger-eurodekor-holz', 19, 980, 550, { anzahl: 6, arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 4 }] }),
                pos('Schiebetüren', 'mdf', 'egger-mdf-lackiert', 19, 2400, 1000, { anzahl: 2, oberflaecheTyp: 'lack-seidenmatt', arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 6 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 3, skontoProzent: 2, skontoTage: 10 },
            montage: { aktiv: true, anfahrtpauschale: 15, personal: [{ anzahl: 2, mitarbeiterTyp: 'Geselle', stundensatz: 52, stunden: 4 }], gebrauchsmittel: 25 },
            brutto: 8450.20, netto: 7101.01, erstelltAm: monthsAgo(10, 5), geaendertAm: monthsAgo(8, 12)
        },
        {
            id: 'demo-p2', titel: 'Empfangstheke Zahnarztpraxis', kundeId: 'demo-k2', status: 'abgeschlossen',
            rechnung: { rechnungNr: 'RE-202502-0002', rechnungDatum: '2025-05-10', faelligDatum: '2025-06-09', bezahltAm: '2025-05-18', bezahltBetrag: 12780.50 },
            angebotNr: 'ANG-202502-0002', objektAdresse: 'Lindenallee 45, 60322 Frankfurt am Main',
            notizen: 'Moderne Empfangstheke, weiß hochglanz mit LED-Beleuchtung',
            positionen: [
                pos('Thekenkorpus', 'mdf', 'egger-mdf-lackiert', 22, 3000, 700, { oberflaecheTyp: 'lack-hochglanz' }),
                pos('Thekenplatte', 'leimholz', 'eiche-kgz', 30, 3200, 450, { arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 8 }] }),
                pos('Rückwand mit Fächern', 'mdf', 'egger-mdf-lackiert', 19, 2200, 1800, { oberflaecheTyp: 'lack-hochglanz', arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 6 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 0 },
            montage: { aktiv: true, anfahrtpauschale: 45, personal: [{ anzahl: 2, mitarbeiterTyp: 'Geselle', stundensatz: 52, stunden: 8 }, { anzahl: 1, mitarbeiterTyp: 'Meister Baustelle', stundensatz: 75, stunden: 8 }], gebrauchsmittel: 40 },
            brutto: 12780.50, netto: 10739.92, erstelltAm: monthsAgo(9, 10), geaendertAm: monthsAgo(7, 5)
        },
        {
            id: 'demo-p3', titel: 'Hotelzimmer-Ausstattung Phase 1 (5 Zimmer)', kundeId: 'demo-k3', status: 'abgeschlossen',
            angebotNr: 'ANG-202503-0003', objektAdresse: 'Hauptplatz 3, 83435 Bad Reichenhall',
            notizen: 'Nachttische, Garderoben und Schreibtische für 5 Zimmer',
            positionen: [
                pos('Nachttische', 'leimholz', 'pollmeier-buche', 22, 500, 400, { anzahl: 10, oberflaecheTyp: 'oel-natur', beschlaege: [{ typ: 'topfband-110', anzahl: 20 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 20 }] }),
                pos('Garderoben', 'multiplex', 'birke-ab', 18, 1800, 350, { anzahl: 5, beschlaege: [{ typ: 'kleiderstange', anzahl: 5 }, { typ: 'garderobenhaken', anzahl: 20 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 15 }] }),
                pos('Schreibtische', 'leimholz', 'pollmeier-buche', 25, 1200, 600, { anzahl: 5, oberflaecheTyp: 'oel-natur', arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 12 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 5 },
            montage: { aktiv: true, anfahrtpauschale: 75, personal: [{ anzahl: 3, mitarbeiterTyp: 'Geselle', stundensatz: 52, stunden: 8 }, { anzahl: 1, mitarbeiterTyp: 'Meister Baustelle', stundensatz: 75, stunden: 8 }], gebrauchsmittel: 50 },
            brutto: 18950.00, netto: 15924.37, erstelltAm: monthsAgo(8, 1), geaendertAm: monthsAgo(5, 20)
        },
        {
            id: 'demo-p4', titel: 'Bücherregal Altbau', kundeId: 'demo-k4', status: 'bezahlt',
            rechnung: { rechnungNr: 'RE-202504-0003', rechnungDatum: '2025-09-12', faelligDatum: '2025-10-12', bezahltAm: '2025-09-20', bezahltBetrag: 6194.38 },
            angebotNr: 'ANG-202504-0004', objektAdresse: 'Am Rosengarten 8, 70178 Stuttgart',
            notizen: 'Raumhohes Bücherregal, Eiche massiv, denkmalschutzkonform',
            positionen: [
                pos('Seitenteile', 'leimholz', 'eiche-kgz', 25, 2800, 350, { anzahl: 2, oberflaecheTyp: 'oel-natur' }),
                pos('Einlegeböden', 'leimholz', 'eiche-kgz', 22, 1200, 320, { anzahl: 8, oberflaecheTyp: 'oel-natur', arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 8 }] }),
                pos('Rückwand', 'mdf', 'egger-mdf-roh', 6, 2800, 1260, { arbeitszeiten: [{ mitarbeiterTyp: 'Azubi', stundensatz: 15, stunden: 3 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 0 },
            montage: { aktiv: true, anfahrtpauschale: 25, personal: [{ anzahl: 2, mitarbeiterTyp: 'Geselle', stundensatz: 52, stunden: 5 }], gebrauchsmittel: 20 },
            brutto: 6320.80, netto: 5311.60, erstelltAm: monthsAgo(6, 18), geaendertAm: monthsAgo(4, 10)
        },
        {
            id: 'demo-p5', titel: 'Weinregal Vinothek', kundeId: 'demo-k8', status: 'abgeschlossen',
            angebotNr: 'ANG-202505-0005', objektAdresse: 'Weinbergstraße 17, 55116 Mainz',
            notizen: 'Großes Weinregal aus Eiche, Platz für 500 Flaschen',
            positionen: [
                pos('Hauptkonstruktion', 'leimholz', 'eiche-dl', 30, 3000, 400, { oberflaecheTyp: 'oel-natur', arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 16 }] }),
                pos('Facheinteilungen', 'leimholz', 'eiche-kgz', 18, 2800, 350, { arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 20 }] }),
                pos('Beleuchtungsleisten', 'mdf', 'mdf-schwarz', 12, 3000, 80, { arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 4 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 2 },
            montage: { aktiv: true, anfahrtpauschale: 55, personal: [{ anzahl: 2, mitarbeiterTyp: 'Geselle', stundensatz: 52, stunden: 8 }, { anzahl: 1, mitarbeiterTyp: 'Meister Baustelle', stundensatz: 75, stunden: 8 }], gebrauchsmittel: 45 },
            brutto: 14250.00, netto: 11974.79, erstelltAm: monthsAgo(4, 5), geaendertAm: monthsAgo(2, 15)
        },
        // --- Beauftragte Projekte (aktuell in Arbeit) ---
        {
            id: 'demo-p6', titel: 'Gastraumverkleidung & Bar', kundeId: 'demo-k5', status: 'rechnung_gestellt',
            rechnung: { rechnungNr: 'RE-202601-0004', rechnungDatum: '2026-01-20', faelligDatum: '2026-02-19', bezahltAm: null, bezahltBetrag: null },
            angebotNr: 'ANG-202506-0006', objektAdresse: 'Marktgasse 22, 91054 Erlangen',
            notizen: 'Wandverkleidung aus Altholz-Optik + neue Bar mit Messingdetails',
            positionen: [
                pos('Wandverkleidung (18m²)', 'tischlerplatte', 'fichte', 19, 2400, 1200, { oberflaecheTyp: 'oel-natur', arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 24 }] }),
                pos('Barkorpus', 'multiplex', 'birke-ab', 24, 4000, 650, { arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 14 }] }),
                pos('Barplatte', 'leimholz', 'eiche-dl', 40, 4200, 500, { oberflaecheTyp: 'oel-natur', arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 8 }] }),
                pos('Rückbuffet', 'multiplex', 'eiche', 21, 3000, 450, { beschlaege: [{ typ: 'topfband-110', anzahl: 12 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 12 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 0 },
            montage: { aktiv: true, anfahrtpauschale: 35, personal: [{ anzahl: 2, mitarbeiterTyp: 'Geselle', stundensatz: 52, stunden: 6 }, { anzahl: 1, mitarbeiterTyp: 'Meister Baustelle', stundensatz: 75, stunden: 6 }], gebrauchsmittel: 30 },
            brutto: 22400.00, netto: 18823.53, erstelltAm: monthsAgo(3, 10), geaendertAm: monthsAgo(1, 5),
            lieferDatum: monthsAgo(1, 15), montageDatum: monthsAgo(1, 18)
        },
        {
            id: 'demo-p7', titel: 'Einbauküche Loft-Wohnung', kundeId: 'demo-k7', status: 'beauftragt',
            angebotNr: 'ANG-202507-0007', objektAdresse: 'Waldweg 5, 50937 Köln',
            notizen: 'Moderne Küche mit Beton-Optik Fronten und Eiche-Arbeitsplatte',
            positionen: [
                pos('Unterschränke (4m)', 'spanplatte', 'egger-perfectsense-matt', 19, 2000, 600, { beschlaege: [{ typ: 'topfband-110', anzahl: 16 }, { typ: 'vollauszug', anzahl: 8 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 18 }] }),
                pos('Oberschränke (3m)', 'spanplatte', 'egger-perfectsense-matt', 19, 1500, 350, { beschlaege: [{ typ: 'topfband-110', anzahl: 12 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 12 }] }),
                pos('Arbeitsplatte', 'leimholz', 'eiche-dl', 40, 4500, 650, { oberflaecheTyp: 'oel-natur', arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 6 }] }),
                pos('Kücheninsel', 'spanplatte', 'egger-perfectsense-matt', 19, 1800, 900, { beschlaege: [{ typ: 'vollauszug', anzahl: 6 }], arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 10 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 0 },
            montage: { aktiv: true, anfahrtpauschale: 20, personal: [{ anzahl: 1, mitarbeiterTyp: 'Geselle', stundensatz: 52, stunden: 6 }], gebrauchsmittel: 15 },
            brutto: 16800.00, netto: 14117.65, erstelltAm: monthsAgo(2, 8), geaendertAm: monthsAgo(0, 15),
            lieferDatum: monthsAgo(0, 25), montageDatum: monthsAgo(0, 28)
        },
        {
            id: 'demo-p8', titel: 'Hotelzimmer-Ausstattung Phase 2 (5 Zimmer)', kundeId: 'demo-k3', status: 'beauftragt',
            angebotNr: 'ANG-202508-0008', objektAdresse: 'Hauptplatz 3, 83435 Bad Reichenhall',
            notizen: 'Folgeauftrag: Weitere 5 Zimmer + Flurbereich',
            positionen: [
                pos('Nachttische', 'leimholz', 'pollmeier-buche', 22, 500, 400, { anzahl: 10, oberflaecheTyp: 'oel-natur', beschlaege: [{ typ: 'topfband-110', anzahl: 20 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 20 }] }),
                pos('Flur-Garderobe', 'multiplex', 'birke-ab', 18, 3600, 400, { beschlaege: [{ typ: 'garderobenhaken', anzahl: 30 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 10 }] }),
                pos('Wandpaneele Flur', 'tischlerplatte', 'buche', 16, 2400, 1200, { oberflaecheTyp: 'oel-natur', arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 16 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 5 },
            montage: { aktiv: true, anfahrtpauschale: 75, personal: [{ anzahl: 3, mitarbeiterTyp: 'Geselle', stundensatz: 52, stunden: 8 }, { anzahl: 1, mitarbeiterTyp: 'Meister Baustelle', stundensatz: 75, stunden: 8 }], gebrauchsmittel: 50 },
            brutto: 15200.00, netto: 12773.11, erstelltAm: monthsAgo(1, 20), geaendertAm: monthsAgo(0, 10),
            lieferDatum: monthsAgo(0, 5), montageDatum: monthsAgo(0, 8)
        },
        // --- Angebotene Projekte (warten auf Zusage) ---
        {
            id: 'demo-p9', titel: 'Maßküche Villa', kundeId: 'demo-k6', status: 'angeboten',
            angebotNr: 'ANG-202509-0009', objektAdresse: 'Friedrichstraße 101, 10117 Berlin',
            notizen: 'Architekt vermittelt – exklusive Villenküche, Nussbaum + Marmor',
            positionen: [
                pos('Unterschränke Premium', 'leimholz', 'nussbaum', 22, 5000, 600, { oberflaecheTyp: 'oel-natur', beschlaege: [{ typ: 'topfband-110', anzahl: 24 }, { typ: 'vollauszug', anzahl: 12 }], arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 30 }] }),
                pos('Hochschränke', 'leimholz', 'nussbaum', 22, 2200, 600, { anzahl: 2, oberflaecheTyp: 'oel-natur', beschlaege: [{ typ: 'topfband-110', anzahl: 8 }], arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 16 }] }),
                pos('Kochinsel', 'leimholz', 'nussbaum', 25, 2400, 1100, { oberflaecheTyp: 'oel-natur', beschlaege: [{ typ: 'vollauszug', anzahl: 8 }], arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 20 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 0 },
            montage: { aktiv: true, anfahrtpauschale: 110, personal: [{ anzahl: 3, mitarbeiterTyp: 'Geselle', stundensatz: 52, stunden: 10 }, { anzahl: 1, mitarbeiterTyp: 'Meister Baustelle', stundensatz: 75, stunden: 10 }], gebrauchsmittel: 60 },
            brutto: 38500.00, netto: 32352.94, erstelltAm: monthsAgo(1, 5), geaendertAm: monthsAgo(0, 20)
        },
        {
            id: 'demo-p10', titel: 'Begehbarer Kleiderschrank', kundeId: 'demo-k4', status: 'angeboten',
            angebotNr: 'ANG-202510-0010', objektAdresse: 'Am Rosengarten 8, 70178 Stuttgart',
            notizen: 'Ankleidezimmer komplett – Folgeauftrag Bücherregal',
            positionen: [
                pos('Schrankwand links', 'spanplatte', 'egger-eurodekor-holz', 19, 2600, 600, { beschlaege: [{ typ: 'topfband-110', anzahl: 12 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 10 }] }),
                pos('Schrankwand rechts', 'spanplatte', 'egger-eurodekor-holz', 19, 2600, 600, { beschlaege: [{ typ: 'topfband-110', anzahl: 12 }, { typ: 'kleiderstange', anzahl: 4 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 10 }] }),
                pos('Mittelinsel mit Schubladen', 'mdf', 'egger-mdf-lackiert', 19, 1400, 700, { oberflaecheTyp: 'lack-seidenmatt', beschlaege: [{ typ: 'vollauszug', anzahl: 6 }], arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 8 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 3 },
            montage: { aktiv: true, anfahrtpauschale: 25, personal: [{ anzahl: 2, mitarbeiterTyp: 'Geselle', stundensatz: 52, stunden: 5 }], gebrauchsmittel: 20 },
            brutto: 11200.00, netto: 9411.76, erstelltAm: monthsAgo(0, 18), geaendertAm: monthsAgo(0, 18)
        },
        {
            id: 'demo-p11', titel: 'Verkostungstresen Vinothek', kundeId: 'demo-k8', status: 'angeboten',
            angebotNr: 'ANG-202511-0011', objektAdresse: 'Weinbergstraße 17, 55116 Mainz',
            notizen: 'Großer Verkostungstresen passend zum Weinregal',
            positionen: [
                pos('Tresenkorpus', 'multiplex', 'eiche', 24, 3500, 600, { beschlaege: [{ typ: 'topfband-110', anzahl: 8 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 14 }] }),
                pos('Tresenplatte', 'leimholz', 'eiche-dl', 40, 3800, 500, { oberflaecheTyp: 'oel-natur', arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 8 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 0 },
            montage: { aktiv: true, anfahrtpauschale: 55, personal: [{ anzahl: 2, mitarbeiterTyp: 'Geselle', stundensatz: 52, stunden: 8 }, { anzahl: 1, mitarbeiterTyp: 'Meister Baustelle', stundensatz: 75, stunden: 8 }], gebrauchsmittel: 45 },
            brutto: 9850.00, netto: 8277.31, erstelltAm: monthsAgo(0, 12), geaendertAm: monthsAgo(0, 12)
        },
        // --- Entwurf (in Planung) ---
        {
            id: 'demo-p12', titel: 'Konferenztisch Architekturbüro', kundeId: 'demo-k6', status: 'entwurf',
            angebotNr: 'ANG-202512-0012', objektAdresse: 'Friedrichstraße 101, 10117 Berlin',
            notizen: 'Großer Konferenztisch, 12 Personen, Nussbaum mit Stahlgestell',
            positionen: [
                pos('Tischplatte', 'leimholz', 'nussbaum', 40, 3600, 1200, { oberflaecheTyp: 'oel-natur', arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 12 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 0 },
            montage: { aktiv: false, anfahrtpauschale: 0, personal: [], gebrauchsmittel: 0 },
            brutto: 7200.00, netto: 6050.42, erstelltAm: monthsAgo(0, 5), geaendertAm: monthsAgo(0, 5)
        },
        {
            id: 'demo-p13', titel: 'Garderobe Eingangsbereich', kundeId: 'demo-k1', status: 'angeboten',
            angebotNr: 'ANG-202513-0013', objektAdresse: 'Bergstraße 12, 80331 München',
            notizen: 'Passend zum Einbauschrank – gleiche Materialien',
            positionen: [
                pos('Garderobe mit Schuhschrank', 'multiplex', 'birke-bb', 18, 1800, 400, { beschlaege: [{ typ: 'topfband-110', anzahl: 4 }, { typ: 'garderobenhaken', anzahl: 8 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 8 }] }),
                pos('Hutablage + Spiegel', 'multiplex', 'birke-bb', 15, 1800, 300, { arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 3 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 3 },
            montage: { aktiv: true, anfahrtpauschale: 15, personal: [{ anzahl: 2, mitarbeiterTyp: 'Geselle', stundensatz: 52, stunden: 4 }], gebrauchsmittel: 25 },
            brutto: 4850.00, netto: 4075.63, erstelltAm: monthsAgo(0, 8), geaendertAm: monthsAgo(0, 8)
        },
        // --- Kanzlei Hartmann (Kunde 9) ---
        {
            id: 'demo-p14', titel: 'Chefbüro-Einrichtung', kundeId: 'demo-k9', status: 'abgeschlossen',
            rechnung: { rechnungNr: 'RE-202503-0005', rechnungDatum: '2025-08-05', faelligDatum: '2025-09-04', bezahltAm: '2025-08-15', bezahltBetrag: 19450.00 },
            angebotNr: 'ANG-202514-0014', objektAdresse: 'Königsallee 78, 40212 Düsseldorf',
            notizen: 'Schreibtisch, Aktenschrank, Besprechungstisch – alles Nussbaum massiv',
            positionen: [
                pos('Chefschreibtisch', 'leimholz', 'nussbaum', 30, 2200, 1000, { oberflaecheTyp: 'oel-natur', beschlaege: [{ typ: 'vollauszug', anzahl: 6 }], arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 18 }] }),
                pos('Aktenschrank', 'leimholz', 'nussbaum', 22, 2400, 450, { oberflaecheTyp: 'oel-natur', beschlaege: [{ typ: 'topfband-110', anzahl: 8 }, { typ: 'vollauszug', anzahl: 4 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 14 }] }),
                pos('Besprechungstisch rund', 'leimholz', 'nussbaum', 35, 1400, 1400, { oberflaecheTyp: 'oel-natur', arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 10 }] }),
                pos('Sideboard', 'leimholz', 'nussbaum', 22, 2000, 500, { oberflaecheTyp: 'oel-natur', beschlaege: [{ typ: 'topfband-110', anzahl: 4 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 8 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 0 },
            montage: { aktiv: true, anfahrtpauschale: 50, personal: [{ anzahl: 2, mitarbeiterTyp: 'Geselle', stundensatz: 52, stunden: 6 }, { anzahl: 1, mitarbeiterTyp: 'Meister Baustelle', stundensatz: 75, stunden: 6 }], gebrauchsmittel: 30 },
            brutto: 19450.00, netto: 16344.54, erstelltAm: monthsAgo(5, 1), geaendertAm: monthsAgo(3, 8)
        },
        {
            id: 'demo-p15', titel: 'Empfangsbereich Kanzlei', kundeId: 'demo-k9', status: 'beauftragt',
            angebotNr: 'ANG-202515-0015', objektAdresse: 'Königsallee 78, 40212 Düsseldorf',
            notizen: 'Empfangstheke, Wartebereich-Möbel, Garderobe – Folgeauftrag',
            positionen: [
                pos('Empfangstheke', 'leimholz', 'nussbaum', 25, 2800, 700, { oberflaecheTyp: 'oel-natur', arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 16 }] }),
                pos('Garderobe mit Spiegel', 'multiplex', 'birke-bb', 18, 1600, 400, { beschlaege: [{ typ: 'garderobenhaken', anzahl: 12 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 6 }] }),
                pos('Beistelltische', 'leimholz', 'nussbaum', 22, 600, 600, { anzahl: 3, oberflaecheTyp: 'oel-natur', arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 6 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 2 },
            montage: { aktiv: true, anfahrtpauschale: 50, personal: [{ anzahl: 2, mitarbeiterTyp: 'Geselle', stundensatz: 52, stunden: 6 }, { anzahl: 1, mitarbeiterTyp: 'Meister Baustelle', stundensatz: 75, stunden: 6 }], gebrauchsmittel: 30 },
            brutto: 13500.00, netto: 11344.54, erstelltAm: monthsAgo(1, 12), geaendertAm: monthsAgo(0, 18)
        },
        // --- Andreas Wagner – Neubau Bodensee (Kunde 10) ---
        {
            id: 'demo-p16', titel: 'Wohnzimmer-Schrankwand', kundeId: 'demo-k10', status: 'angeboten',
            angebotNr: 'ANG-202516-0016', objektAdresse: 'Seestraße 42, 88131 Lindau',
            notizen: 'Neubau – raumhohe Schrankwand mit integriertem TV-Bereich und Kamin-Nische',
            positionen: [
                pos('Schrankwand links (TV)', 'spanplatte', 'egger-eurodekor-holz', 19, 2700, 500, { beschlaege: [{ typ: 'topfband-110', anzahl: 8 }, { typ: 'vollauszug', anzahl: 4 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 14 }] }),
                pos('Kamin-Nische Verkleidung', 'mdf', 'egger-mdf-lackiert', 19, 2700, 1200, { oberflaecheTyp: 'lack-seidenmatt', arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 8 }] }),
                pos('Schrankwand rechts', 'spanplatte', 'egger-eurodekor-holz', 19, 2700, 500, { beschlaege: [{ typ: 'topfband-110', anzahl: 8 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 14 }] }),
                pos('Hängeschränke oben', 'spanplatte', 'egger-eurodekor-holz', 19, 1200, 350, { anzahl: 4, beschlaege: [{ typ: 'topfband-110', anzahl: 8 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 8 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 0 },
            montage: { aktiv: true, anfahrtpauschale: 40, personal: [{ anzahl: 2, mitarbeiterTyp: 'Geselle', stundensatz: 52, stunden: 8 }], gebrauchsmittel: 35 },
            brutto: 12800.00, netto: 10756.30, erstelltAm: monthsAgo(0, 14), geaendertAm: monthsAgo(0, 14)
        },
        {
            id: 'demo-p17', titel: 'Badezimmer-Waschtisch', kundeId: 'demo-k10', status: 'entwurf',
            angebotNr: '', objektAdresse: 'Seestraße 42, 88131 Lindau',
            notizen: 'Doppel-Waschtischunterschrank, Eiche mit weißen Fronten – Maße folgen',
            positionen: [
                pos('Waschtischplatte', 'leimholz', 'eiche-kgz', 30, 1600, 550, { oberflaecheTyp: 'oel-natur', arbeitszeiten: [{ mitarbeiterTyp: 'Meister', stundensatz: 55, stunden: 6 }] }),
                pos('Unterschrank-Korpus', 'spanplatte', 'egger-eurodekor-uni', 19, 1500, 500, { beschlaege: [{ typ: 'topfband-110', anzahl: 4 }, { typ: 'vollauszug', anzahl: 4 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 8 }] }),
                pos('Spiegelschrank', 'mdf', 'egger-mdf-lackiert', 16, 1400, 200, { oberflaecheTyp: 'lack-seidenmatt', beschlaege: [{ typ: 'topfband-110', anzahl: 4 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 5 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 0 },
            montage: { aktiv: true, anfahrtpauschale: 40, personal: [{ anzahl: 2, mitarbeiterTyp: 'Geselle', stundensatz: 52, stunden: 8 }], gebrauchsmittel: 35 },
            brutto: 5400.00, netto: 4537.82, erstelltAm: monthsAgo(0, 3), geaendertAm: monthsAgo(0, 3)
        },
        // --- Weiteres Projekt Dr. Weber (Kunde 2) ---
        {
            id: 'demo-p18', titel: 'Behandlungsraum-Schränke', kundeId: 'demo-k2', status: 'rechnung_gestellt',
            rechnung: { rechnungNr: 'RE-202602-0006', rechnungDatum: '2026-02-10', faelligDatum: '2026-03-12', bezahltAm: null, bezahltBetrag: null },
            angebotNr: 'ANG-202518-0018', objektAdresse: 'Lindenallee 45, 60322 Frankfurt am Main',
            notizen: 'Einbauschränke für 3 Behandlungsräume – weiß matt, hygienisch versiegelt',
            positionen: [
                pos('Instrumentenschränke', 'mdf', 'egger-mdf-lackiert', 19, 1800, 500, { anzahl: 6, oberflaecheTyp: 'lack-seidenmatt', beschlaege: [{ typ: 'topfband-110', anzahl: 24 }, { typ: 'vollauszug', anzahl: 12 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 30 }] }),
                pos('Hängeschränke', 'mdf', 'egger-mdf-lackiert', 16, 900, 350, { anzahl: 6, oberflaecheTyp: 'lack-seidenmatt', beschlaege: [{ typ: 'topfband-110', anzahl: 12 }], arbeitszeiten: [{ mitarbeiterTyp: 'Geselle', stundensatz: 42, stunden: 12 }] }),
                pos('Ablagekonsolen', 'mdf', 'egger-mdf-lackiert', 22, 1200, 400, { anzahl: 3, oberflaecheTyp: 'lack-seidenmatt', arbeitszeiten: [{ mitarbeiterTyp: 'Azubi', stundensatz: 15, stunden: 6 }] })
            ],
            zuschlaege: { mgk: 10, fgk: 120, vwgk: 10, vtgk: 8, wug: 15, rabatt: 3 },
            montage: { aktiv: true, anfahrtpauschale: 45, personal: [{ anzahl: 2, mitarbeiterTyp: 'Geselle', stundensatz: 52, stunden: 8 }, { anzahl: 1, mitarbeiterTyp: 'Meister Baustelle', stundensatz: 75, stunden: 8 }], gebrauchsmittel: 40 },
            brutto: 16200.00, netto: 13613.45, erstelltAm: monthsAgo(2, 5), geaendertAm: monthsAgo(0, 12)
        }
    ];

    for (const p of projekte) {
        await dbPut('projekte', p);
    }

    // ---------- TERMINE ----------
    function daysFromNow(d) {
        const dt = new Date();
        dt.setDate(dt.getDate() + d);
        return dt.toISOString().slice(0, 10);
    }
    const termine = [
        { id: 'demo-t1', titel: 'Aufmaß Einbauküche', typ: 'aufmass', datum: daysFromNow(2), startZeit: '09:00', endZeit: '10:30', projektId: 'demo-p7', kundeId: 'demo-k7', ort: 'Waldweg 5, 50937 Köln', notizen: 'Wasserleitungen beachten', erstellt: new Date().toISOString(), geaendert: new Date().toISOString() },
        { id: 'demo-t2', titel: 'Montage Gastraum', typ: 'montage', datum: daysFromNow(5), startZeit: '07:30', endZeit: '16:00', projektId: 'demo-p6', kundeId: 'demo-k5', ort: 'Marktgasse 22, 91054 Erlangen', notizen: 'Werkzeug + 2 Gesellen', erstellt: new Date().toISOString(), geaendert: new Date().toISOString() },
        { id: 'demo-t3', titel: 'Kundenbesuch Villa', typ: 'kundenbesuch', datum: daysFromNow(3), startZeit: '14:00', endZeit: '15:30', projektId: 'demo-p9', kundeId: 'demo-k6', ort: 'Friedrichstraße 101, Berlin', notizen: 'Materialproben mitbringen', erstellt: new Date().toISOString(), geaendert: new Date().toISOString() },
        { id: 'demo-t4', titel: 'Werkstatt: Küchenfronten', typ: 'werkstatt', datum: daysFromNow(1), startZeit: '08:00', endZeit: '17:00', projektId: 'demo-p7', kundeId: 'demo-k7', ort: '', notizen: 'Beton-Optik Fronten fräsen', erstellt: new Date().toISOString(), geaendert: new Date().toISOString() },
        { id: 'demo-t5', titel: 'Lieferung Hotel', typ: 'lieferung', datum: daysFromNow(7), startZeit: '10:00', endZeit: '12:00', projektId: 'demo-p8', kundeId: 'demo-k3', ort: 'Hauptplatz 3, Bad Reichenhall', notizen: 'Spedition bestätigt', erstellt: new Date().toISOString(), geaendert: new Date().toISOString() },
        { id: 'demo-t6', titel: 'Werkstatt: Tresenplatte', typ: 'werkstatt', datum: daysFromNow(-2), startZeit: '08:00', endZeit: '16:00', projektId: 'demo-p11', kundeId: 'demo-k8', ort: '', notizen: 'Eiche hobeln + ölen', erstellt: new Date().toISOString(), geaendert: new Date().toISOString() },
        { id: 'demo-t7', titel: 'Aufmaß Kleiderschrank', typ: 'aufmass', datum: daysFromNow(10), startZeit: '11:00', endZeit: '12:00', projektId: 'demo-p10', kundeId: 'demo-k4', ort: 'Am Rosengarten 8, Stuttgart', notizen: 'Dachschräge beachten', erstellt: new Date().toISOString(), geaendert: new Date().toISOString() },
        { id: 'demo-t8', titel: 'Besprechung Konferenztisch', typ: 'kundenbesuch', datum: daysFromNow(4), startZeit: '16:00', endZeit: '17:00', projektId: 'demo-p12', kundeId: 'demo-k6', ort: 'Friedrichstraße 101, Berlin', notizen: 'Stahlgestell Details klären', erstellt: new Date().toISOString(), geaendert: new Date().toISOString() }
    ];
    for (const t of termine) {
        await dbPut('termine', t);
    }

    console.log('Demo-Daten erfolgreich angelegt: ' + kunden.length + ' Kunden, ' + projekte.length + ' Projekte, ' + termine.length + ' Termine');
}

// ==================== DATEN EXPORT / IMPORT ====================
async function exportAllData() {
    try {
        const storeNames = ['projekte', 'kunden', 'einstellungen', 'eigeneBeschlaege', 'eigeneOberflaechen', 'eigeneMaterialien', 'zeiten', 'termine'];
        const exportData = { _meta: { app: 'WerkBank', version: DB_VERSION, exportDate: new Date().toISOString() } };
        for (const name of storeNames) {
            exportData[name] = await dbGetAll(name);
        }
        const json = JSON.stringify(exportData, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const datum = new Date().toISOString().slice(0, 10);
        a.href = url;
        a.download = 'WerkBank_Backup_' + datum + '.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('Daten erfolgreich exportiert');
    } catch (err) {
        console.error('Export fehlgeschlagen:', err);
        showToast('Export fehlgeschlagen: ' + err.message, 'error');
    }
}

async function importAllData(file) {
    try {
        const text = await file.text();
        const data = JSON.parse(text);
        if (!data._meta || (data._meta.app !== 'WerkBank' && data._meta.app !== 'MeisterWerk' && data._meta.app !== 'TischlerKalkPro')) {
            showToast('Ung\u00fcltige Sicherungsdatei', 'error');
            return;
        }
        const storeNames = ['projekte', 'kunden', 'einstellungen', 'eigeneBeschlaege', 'eigeneOberflaechen', 'eigeneMaterialien', 'zeiten', 'termine'];
        for (const name of storeNames) {
            if (!data[name]) continue;
            // Clear existing store
            const clearTx = db.transaction(name, 'readwrite');
            clearTx.objectStore(name).clear();
            await new Promise((resolve, reject) => { clearTx.oncomplete = resolve; clearTx.onerror = (e) => reject(e.target.error); });
            // Write imported data
            for (const item of data[name]) {
                await dbPut(name, item);
            }
        }
        showToast('Daten erfolgreich importiert! Seite wird neu geladen...');
        setTimeout(() => window.location.reload(), 1500);
    } catch (err) {
        console.error('Import fehlgeschlagen:', err);
        showToast('Import fehlgeschlagen: ' + err.message, 'error');
    }
}

// ==================== THEME ====================
function applyTheme(theme) {
    if (theme === 'light') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', theme);
    }
    // Buttons aktualisieren
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('theme-btn-active', btn.dataset.theme === theme);
    });
}

function initThemeSwitcher() {
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            const theme = btn.dataset.theme;
            applyTheme(theme);
            await setSetting('theme', theme);
        });
    });
}

// ==================== FINANZEN / STEUER ====================
const MONATSNAMEN = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];

async function renderFinanzen() {
    const projekte = await dbGetAll('projekte');
    const kunden = await dbGetAll('kunden');

    // Jahrauswahl befüllen
    const jahreSet = new Set();
    const now = new Date();
    jahreSet.add(now.getFullYear());
    projekte.forEach(p => {
        if (p.rechnung && p.rechnung.rechnungDatum) {
            jahreSet.add(new Date(p.rechnung.rechnungDatum).getFullYear());
        }
        if (p.erstelltAm) jahreSet.add(new Date(p.erstelltAm).getFullYear());
    });
    const jahre = [...jahreSet].sort((a, b) => b - a);
    const jahrSelect = document.getElementById('finanzen-jahr');
    const aktJahr = parseInt(jahrSelect.value) || now.getFullYear();
    jahrSelect.innerHTML = jahre.map(j => `<option value="${j}"${j === aktJahr ? ' selected' : ''}>${j}</option>`).join('');
    jahrSelect.onchange = () => renderFinanzen();

    const gewähltesJahr = parseInt(jahrSelect.value) || now.getFullYear();

    // Projekte mit Rechnungen in diesem Jahr filtern
    const mitRechnung = projekte.filter(p => p.rechnung && p.rechnung.rechnungDatum);
    const imJahr = mitRechnung.filter(p => new Date(p.rechnung.rechnungDatum).getFullYear() === gewähltesJahr);

    // Bezahlt im gewählten Jahr (nach Zahlungsdatum)
    const bezahltImJahr = mitRechnung.filter(p =>
        p.rechnung.bezahltAm && new Date(p.rechnung.bezahltAm).getFullYear() === gewähltesJahr
    );

    // KPIs berechnen
    const nettoUmsatz = bezahltImJahr.reduce((s, p) => s + (p.netto || 0), 0);
    const bruttoUmsatz = bezahltImJahr.reduce((s, p) => s + (p.rechnung.bezahltBetrag || p.brutto || 0), 0);
    const mwstGesamt = bruttoUmsatz - nettoUmsatz;
    const offeneForderungen = mitRechnung
        .filter(p => !p.rechnung.bezahltAm)
        .reduce((s, p) => s + (p.brutto || 0), 0);

    document.getElementById('fin-netto-umsatz').textContent = formatCurrency(nettoUmsatz);
    document.getElementById('fin-brutto-umsatz').textContent = formatCurrency(bruttoUmsatz);
    document.getElementById('fin-mwst-gesamt').textContent = formatCurrency(mwstGesamt);
    document.getElementById('fin-offene-forderungen').textContent = formatCurrency(offeneForderungen);

    // Quartalsübersicht
    const quartale = [
        { label: 'Q1 (Jan–Mär)', monate: [0, 1, 2] },
        { label: 'Q2 (Apr–Jun)', monate: [3, 4, 5] },
        { label: 'Q3 (Jul–Sep)', monate: [6, 7, 8] },
        { label: 'Q4 (Okt–Dez)', monate: [9, 10, 11] }
    ];

    let qRows = '';
    let qNettoSum = 0, qMwstSum = 0, qBruttoSum = 0, qReSum = 0, qBezSum = 0;

    quartale.forEach(q => {
        const qRechnungen = imJahr.filter(p => q.monate.includes(new Date(p.rechnung.rechnungDatum).getMonth()));
        const qBezahlt = qRechnungen.filter(p => p.rechnung.bezahltAm);
        const qNetto = qBezahlt.reduce((s, p) => s + (p.netto || 0), 0);
        const qBrutto = qBezahlt.reduce((s, p) => s + (p.rechnung.bezahltBetrag || p.brutto || 0), 0);
        const qMwst = qBrutto - qNetto;

        qNettoSum += qNetto;
        qMwstSum += qMwst;
        qBruttoSum += qBrutto;
        qReSum += qRechnungen.length;
        qBezSum += qBezahlt.length;

        qRows += `<tr>
            <td><strong>${q.label}</strong></td>
            <td style="text-align:right">${formatCurrency(qNetto)}</td>
            <td style="text-align:right;font-weight:600;color:var(--danger)">${formatCurrency(qMwst)}</td>
            <td style="text-align:right">${formatCurrency(qBrutto)}</td>
            <td style="text-align:right">${qRechnungen.length}</td>
            <td style="text-align:right">${qBezahlt.length} / ${qRechnungen.length}</td>
        </tr>`;
    });

    document.getElementById('finanzen-quartal-body').innerHTML = qRows;
    document.getElementById('finanzen-quartal-foot').innerHTML = `<tr style="font-weight:700;border-top:2px solid var(--wood-3)">
        <td>Gesamt ${gewähltesJahr}</td>
        <td style="text-align:right">${formatCurrency(qNettoSum)}</td>
        <td style="text-align:right;color:var(--danger)">${formatCurrency(qMwstSum)}</td>
        <td style="text-align:right">${formatCurrency(qBruttoSum)}</td>
        <td style="text-align:right">${qReSum}</td>
        <td style="text-align:right">${qBezSum} / ${qReSum}</td>
    </tr>`;

    // Monatsübersicht
    let mRows = '';
    for (let m = 0; m < 12; m++) {
        const mRechnungen = imJahr.filter(p => new Date(p.rechnung.rechnungDatum).getMonth() === m);
        if (mRechnungen.length === 0 && m > now.getMonth() && gewähltesJahr === now.getFullYear()) continue;
        const mBezahlt = mRechnungen.filter(p => p.rechnung.bezahltAm);
        const mOffen = mRechnungen.filter(p => !p.rechnung.bezahltAm);
        const mNetto = mBezahlt.reduce((s, p) => s + (p.netto || 0), 0);
        const mBrutto = mBezahlt.reduce((s, p) => s + (p.rechnung.bezahltBetrag || p.brutto || 0), 0);
        const mMwst = mBrutto - mNetto;
        const mOffenSum = mOffen.reduce((s, p) => s + (p.brutto || 0), 0);

        mRows += `<tr>
            <td>${MONATSNAMEN[m]}</td>
            <td style="text-align:right">${formatCurrency(mNetto)}</td>
            <td style="text-align:right;color:var(--danger)">${formatCurrency(mMwst)}</td>
            <td style="text-align:right">${formatCurrency(mBrutto)}</td>
            <td style="text-align:right">${mRechnungen.length}</td>
            <td style="text-align:right">${mBezahlt.length}</td>
            <td style="text-align:right${mOffenSum > 0 ? ';color:var(--danger);font-weight:600' : ''}">${mOffenSum > 0 ? formatCurrency(mOffenSum) : '-'}</td>
        </tr>`;
    }
    document.getElementById('finanzen-monat-body').innerHTML = mRows || '<tr><td colspan="7" style="text-align:center;color:var(--text-muted)">Keine Rechnungen in diesem Jahr</td></tr>';

    // Offene Rechnungen (alle, nicht nur im Jahr)
    const offene = mitRechnung
        .filter(p => !p.rechnung.bezahltAm)
        .sort((a, b) => new Date(a.rechnung.faelligDatum) - new Date(b.rechnung.faelligDatum));

    if (offene.length === 0) {
        document.getElementById('finanzen-offene-body').innerHTML = '<tr><td colspan="8" style="text-align:center;color:var(--text-muted);padding:20px">Keine offenen Rechnungen – alles bezahlt!</td></tr>';
    } else {
        document.getElementById('finanzen-offene-body').innerHTML = offene.map(p => {
            const kunde = kunden.find(k => k.id === p.kundeId);
            const kundeName = kunde ? ((kunde.vorname || '') + ' ' + (kunde.nachname || '')).trim() : '-';
            const faellig = new Date(p.rechnung.faelligDatum);
            const heute = new Date();
            heute.setHours(0, 0, 0, 0);
            const tageUeber = Math.floor((heute - faellig) / 86400000);
            let statusBadge;
            if (tageUeber > 0) {
                statusBadge = `<span class="status-badge badge-overdue">${tageUeber} Tage überfällig</span>`;
            } else if (tageUeber > -7) {
                statusBadge = `<span class="status-badge badge-soon">${Math.abs(tageUeber)} Tagen fällig</span>`;
            } else {
                statusBadge = `<span class="status-badge badge-ok">Fällig in ${Math.abs(tageUeber)} Tagen</span>`;
            }
            return `<tr${tageUeber > 0 ? ' class="row-overdue"' : ''}>
                <td><strong>${escapeHtml(p.rechnung.rechnungNr)}</strong></td>
                <td><a href="#/projekt/${p.id}">${escapeHtml(p.titel)}</a></td>
                <td>${escapeHtml(kundeName)}</td>
                <td style="text-align:right;font-weight:600">${formatCurrency(p.brutto || 0)}</td>
                <td>${formatDate(p.rechnung.rechnungDatum)}</td>
                <td>${formatDate(p.rechnung.faelligDatum)}</td>
                <td>${statusBadge}</td>
                <td><button class="chip-action chip-action-payment" data-zahlung-verbuchen="${p.id}">Zahlung</button></td>
            </tr>`;
        }).join('');
    }
}

// ==================== GLOBALE SUCHE ====================
async function globalSearch(query) {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    const results = [];

    // --- Statische Seiten & Bereiche ---
    const staticPages = [
        { label: 'Dashboard', sub: 'Übersicht, KPIs, Umsatz, Statistiken', href: '#/dashboard', keywords: 'dashboard übersicht startseite home kpi statistik umsatz' },
        { label: 'Projekte', sub: 'Alle Projekte verwalten', href: '#/projekte', keywords: 'projekte liste aufträge angebote' },
        { label: 'Neues Projekt', sub: 'Neues Projekt anlegen', href: '#/projekt/neu', keywords: 'neues projekt erstellen anlegen neu' },
        { label: 'Kunden', sub: 'Kundenverwaltung', href: '#/kunden', keywords: 'kunden kontakte adressen verwaltung' },
        { label: 'Zeiterfassung', sub: 'Stoppuhr, Zeiteinträge, Arbeitszeiten', href: '#/zeiterfassung', keywords: 'zeiterfassung stoppuhr zeit arbeitszeit stunden timer zeiten' },
        { label: 'Kalender', sub: 'Termine & Fristen', href: '#/kalender', keywords: 'kalender termine fristen datum planung' },
        { label: 'Finanzen', sub: 'Umsatz, Rechnungen, Einnahmen, Ausgaben', href: '#/finanzen', keywords: 'finanzen umsatz rechnung rechnungen einnahmen ausgaben geld bilanz gewinn buchhaltung' },
        { label: 'Einstellungen', sub: 'Firmendaten, MwSt, Stundensätze, Vorlagen', href: '#/einstellungen', keywords: 'einstellungen settings konfiguration firma adresse mwst steuer stundensatz stundenlohn bank iban zahlungsziel skonto währung' },
        { label: 'Hilfe', sub: 'Anleitungen & FAQ', href: '#/hilfe', keywords: 'hilfe anleitung faq support fragen' },
        { label: 'Impressum', sub: 'Rechtliche Angaben', href: '#/impressum', keywords: 'impressum rechtlich' },
        { label: 'Datenschutz', sub: 'Datenschutzerklärung', href: '#/datenschutz', keywords: 'datenschutz dsgvo privacy' },
    ];

    // Einstellungs-Unterbereiche
    const settingsPages = [
        { label: 'Firmendaten', sub: 'Einstellungen → Name, Adresse, Logo', href: '#/einstellungen', keywords: 'firma firmenname betrieb adresse telefon email logo' },
        { label: 'MwSt & Steuern', sub: 'Einstellungen → Mehrwertsteuer, Kleinunternehmer', href: '#/einstellungen', keywords: 'mwst mehrwertsteuer steuer kleinunternehmer ust umsatzsteuer prozent 19' },
        { label: 'Zahlungsbedingungen', sub: 'Einstellungen → Skonto, Zahlungsziel, Fristen', href: '#/einstellungen', keywords: 'zahlung zahlungsbedingung zahlungsziel skonto frist tage rabatt nachlass' },
        { label: 'Bankverbindung', sub: 'Einstellungen → IBAN, BIC, Kontoinhaber', href: '#/einstellungen', keywords: 'bank bankverbindung iban bic konto kontoinhaber überweisung' },
        { label: 'Angebots-Einstellungen', sub: 'Einstellungen → Prefix, Gültigkeit, Ausführungszeitraum', href: '#/einstellungen', keywords: 'angebot prefix nummer gültigkeit ausführung zeitraum' },
        { label: 'Rechnungs-Einstellungen', sub: 'Einstellungen → Rechnungs-Prefix, Nummernkreis', href: '#/einstellungen', keywords: 'rechnung rechnungsnummer prefix nummernkreis' },
    ];

    // Kalkulations-Begriffe
    const calcPages = [
        { label: 'Kalkulation (KLR)', sub: 'Gemeinkosten, Wagnis & Gewinn, Rabatt', href: '#/projekt/neu', keywords: 'kalkulation klr gemeinkostenzuschlag material fertigungs verwaltungs vertriebsgemeinkosten wagnis gewinn zuschlag zuschlagssatz' },
        { label: 'Materialkosten', sub: 'Kalkulation → Holz, Platten, Preise', href: '#/projekt/neu', keywords: 'material materialkosten holz platte spanplatte mdf massivholz preis kosten' },
        { label: 'Arbeitszeit & Stundensätze', sub: 'Kalkulation → Geselle, Meister, Azubi', href: '#/projekt/neu', keywords: 'arbeitszeit stundensatz stundenlohn lohn geselle meister azubi helfer fachgeselle' },
        { label: 'Montage', sub: 'Kalkulation → Anfahrt, Personal, Gebrauchsmittel', href: '#/projekt/neu', keywords: 'montage anfahrt personal gebrauchsmittel einbau aufbau baustelle' },
        { label: 'Oberfläche', sub: 'Kalkulation → Lack, Öl, Lasur, Furnier', href: '#/projekt/neu', keywords: 'oberfläche oberflaeche lack öl lasur furnier anstrich lackierung ölung beschichtung' },
        { label: 'Kantenbearbeitung', sub: 'Kalkulation → Kantenmaterial, Laufmeter', href: '#/projekt/neu', keywords: 'kante kanten kantenbearbeitung kantenmaterial laufmeter umleimer abs' },
        { label: 'Beschläge', sub: 'Kalkulation → Scharniere, Griffe, Auszüge', href: '#/projekt/neu', keywords: 'beschlag beschläge scharnier topfband griff auszug schublade verbinder' },
    ];

    // Statische + Settings + Calc durchsuchen
    [...staticPages, ...settingsPages, ...calcPages].forEach(page => {
        const searchText = (page.label + ' ' + page.sub + ' ' + page.keywords).toLowerCase();
        if (searchText.includes(q)) {
            results.push({ type: 'seite', label: page.label, sub: page.sub, href: page.href });
        }
    });

    // --- Kunden ---
    const kunden = await dbGetAll('kunden');
    kunden.forEach(k => {
        const text = [k.kundenNr, k.vorname, k.nachname, k.firma, k.ort, k.email, k.telefon].filter(Boolean).join(' ').toLowerCase();
        if (text.includes(q)) {
            const name = ((k.vorname || '') + ' ' + (k.nachname || '')).trim() || 'Unbenannt';
            results.push({ type: 'kunde', label: name, sub: k.firma || k.ort || k.kundenNr || '', href: '#/kunden', id: k.id });
        }
    });

    // --- Projekte ---
    const projekte = await dbGetAll('projekte');
    projekte.forEach(p => {
        const text = [p.titel, p.angebotNr, p.notizen, p.objektAdresse].filter(Boolean).join(' ').toLowerCase();
        if (text.includes(q)) {
            const kunde = kunden.find(k => k.id === p.kundeId);
            const kundeName = kunde ? ((kunde.vorname || '') + ' ' + (kunde.nachname || '')).trim() : '';
            results.push({ type: 'projekt', label: p.titel, sub: (p.angebotNr || '') + (kundeName ? ' – ' + kundeName : ''), href: '#/projekt/' + p.id, id: p.id });
        }
    });

    // --- Zeiteinträge ---
    try {
        const zeiteintraege = await dbGetAll('zeiteintraege');
        if (zeiteintraege) {
            zeiteintraege.forEach(z => {
                const text = [z.beschreibung, z.projektName, z.kategorie].filter(Boolean).join(' ').toLowerCase();
                if (text.includes(q)) {
                    results.push({ type: 'zeit', label: z.beschreibung || 'Zeiteintrag', sub: (z.projektName || '') + (z.datum ? ' – ' + z.datum : ''), href: '#/zeiterfassung' });
                }
            });
        }
    } catch (e) { /* Store evtl. nicht vorhanden */ }

    return results.slice(0, 15);
}

function renderGlobalSearchResults(results, container) {
    if (results.length === 0) {
        container.innerHTML = '<div class="gs-no-results">Keine Ergebnisse</div>';
        return;
    }

    const icons = {
        kunde: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>',
        projekt: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
        seite: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
        zeit: '<svg viewBox="0 0 24 24" width="16" height="16"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><polyline points="12 6 12 12 16 14" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    };

    const typeLabels = {
        kunde: 'Kunde',
        projekt: 'Projekt',
        seite: 'Seite',
        zeit: 'Zeiteintrag',
    };

    // Gruppieren nach Typ
    const grouped = {};
    results.forEach(r => {
        if (!grouped[r.type]) grouped[r.type] = [];
        grouped[r.type].push(r);
    });

    const order = ['seite', 'projekt', 'kunde', 'zeit'];
    let html = '';
    order.forEach(type => {
        if (!grouped[type]) return;
        html += `<div class="gs-group-label">${typeLabels[type] || type}</div>`;
        html += grouped[type].map(r => `<a href="${r.href}" class="gs-result-item">
            <span class="gs-result-icon">${icons[r.type] || icons.seite}</span>
            <span class="gs-result-text">
                <span class="gs-result-label">${escapeHtml(r.label)}</span>
                <span class="gs-result-sub">${escapeHtml(r.sub)}</span>
            </span>
        </a>`).join('');
    });

    container.innerHTML = html;
}

function initGlobalSearch() {
    const input = document.getElementById('global-search-input');
    const dropdown = document.getElementById('global-search-results');
    if (!input || !dropdown) { console.warn('Globale Suche: Elemente nicht gefunden'); return; }

    let debounceTimer;
    input.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        const q = input.value.trim();
        if (q.length < 2) {
            dropdown.classList.add('hidden');
            return;
        }
        debounceTimer = setTimeout(() => {
            globalSearch(q).then(results => {
                renderGlobalSearchResults(results, dropdown);
                dropdown.classList.remove('hidden');
            }).catch(err => console.error('Suche fehlgeschlagen:', err));
        }, 200);
    });

    input.addEventListener('focus', () => {
        const q = input.value.trim();
        if (q.length >= 2) {
            globalSearch(q).then(results => {
                renderGlobalSearchResults(results, dropdown);
                dropdown.classList.remove('hidden');
            }).catch(() => {});
        }
    });

    // Klick auf Ergebnis: schließen und navigieren
    dropdown.addEventListener('click', (e) => {
        const item = e.target.closest('.gs-result-item');
        if (item) {
            input.value = '';
            dropdown.classList.add('hidden');
        }
    });

    // Click outside schließt Dropdown
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.global-search-wrap')) {
            dropdown.classList.add('hidden');
        }
    });

    // Escape schließt
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            dropdown.classList.add('hidden');
            input.blur();
        }
    });

    console.log('Globale Suche initialisiert.');
}

// ==================== ZEITERFASSUNG ====================
let timerInterval = null;
let timerStart = null;
let timerPausedMs = 0;
let timerPaused = false;

function formatDuration(ms) {
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}

function formatHours(minutes) {
    const h = Math.floor(minutes / 60);
    const m = Math.round(minutes % 60);
    return h + ':' + String(m).padStart(2, '0') + ' h';
}

function startTimer() {
    const display = document.getElementById('timer-display');
    timerStart = Date.now() - timerPausedMs;
    timerPaused = false;
    display.classList.add('timer-running');
    display.classList.remove('timer-paused');
    document.getElementById('btn-timer-start').style.display = 'none';
    document.getElementById('btn-timer-pause').style.display = '';
    document.getElementById('btn-timer-stop').style.display = '';
    timerInterval = setInterval(() => {
        display.textContent = formatDuration(Date.now() - timerStart);
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerPausedMs = Date.now() - timerStart;
    timerPaused = true;
    const display = document.getElementById('timer-display');
    display.classList.remove('timer-running');
    display.classList.add('timer-paused');
    document.getElementById('btn-timer-start').style.display = '';
    document.getElementById('btn-timer-start').innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/></svg> Weiter';
    document.getElementById('btn-timer-pause').style.display = 'none';
}

async function stopTimer() {
    clearInterval(timerInterval);
    const elapsed = timerStart ? Date.now() - timerStart : 0;
    const minutes = Math.round(elapsed / 60000);
    const display = document.getElementById('timer-display');
    display.classList.remove('timer-running', 'timer-paused');
    display.textContent = '00:00:00';
    document.getElementById('btn-timer-start').style.display = '';
    document.getElementById('btn-timer-start').innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16"><polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/></svg> Start';
    document.getElementById('btn-timer-pause').style.display = 'none';
    document.getElementById('btn-timer-stop').style.display = 'none';

    if (minutes < 1) { timerStart = null; timerPausedMs = 0; return; }

    const projektId = document.getElementById('timer-projekt').value;
    const now = new Date();
    const startTime = new Date(now.getTime() - elapsed);
    const eintrag = {
        id: crypto.randomUUID(),
        datum: now.toISOString().slice(0, 10),
        projektId: projektId || '',
        taetigkeit: 'Stoppuhr-Eintrag',
        typ: 'arbeit',
        startZeit: startTime.toTimeString().slice(0, 5),
        endZeit: now.toTimeString().slice(0, 5),
        dauerMin: minutes,
        erstellt: now.toISOString()
    };
    await dbPut('zeiten', eintrag);
    timerStart = null;
    timerPausedMs = 0;
    showToast('Zeiteintrag gespeichert (' + minutes + ' Min.)');
    await renderZeiterfassung();
}

async function renderZeiterfassung() {
    const zeiten = await dbGetAll('zeiten');
    const projekte = await dbGetAll('projekte');
    const projektMap = {};
    projekte.forEach(p => { projektMap[p.id] = p.titel || p.angebotNr || 'Unbenannt'; });

    // Fill project dropdowns
    const timerSelect = document.getElementById('timer-projekt');
    const filterSelect = document.getElementById('zeit-filter-projekt');
    const currentTimerVal = timerSelect.value;
    const currentFilterVal = filterSelect.value;
    const optHtml = '<option value="">Alle Projekte</option>' + projekte.map(p => '<option value="' + p.id + '">' + (p.titel || p.angebotNr || 'Unbenannt') + '</option>').join('');
    timerSelect.innerHTML = '<option value="">Projekt zuordnen...</option>' + projekte.map(p => '<option value="' + p.id + '">' + (p.titel || p.angebotNr || 'Unbenannt') + '</option>').join('');
    filterSelect.innerHTML = optHtml;
    timerSelect.value = currentTimerVal;
    filterSelect.value = currentFilterVal;

    // Filter
    const filterProjekt = filterSelect.value;
    const filterVon = document.getElementById('zeit-filter-von').value;
    const filterBis = document.getElementById('zeit-filter-bis').value;

    let filtered = zeiten.filter(z => {
        if (filterProjekt && z.projektId !== filterProjekt) return false;
        if (filterVon && z.datum < filterVon) return false;
        if (filterBis && z.datum > filterBis) return false;
        return true;
    });
    filtered.sort((a, b) => (b.datum + b.startZeit).localeCompare(a.datum + a.startZeit));

    // Summary
    const today = new Date().toISOString().slice(0, 10);
    const now = new Date();
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1));
    const weekStartStr = weekStart.toISOString().slice(0, 10);
    const monthStart = today.slice(0, 7) + '-01';

    let todayMin = 0, weekMin = 0, monthMin = 0;
    zeiten.forEach(z => {
        const d = z.dauerMin || 0;
        if (z.datum === today) todayMin += d;
        if (z.datum >= weekStartStr) weekMin += d;
        if (z.datum >= monthStart) monthMin += d;
    });

    document.getElementById('zeit-heute').textContent = formatHours(todayMin);
    document.getElementById('zeit-woche').textContent = formatHours(weekMin);
    document.getElementById('zeit-monat').textContent = formatHours(monthMin);
    document.getElementById('zeit-offen').textContent = formatHours(zeiten.reduce((s, z) => s + (z.dauerMin || 0), 0));

    // Table
    const tbody = document.getElementById('zeit-liste-body');
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr class="empty-row"><td colspan="8">Keine Zeiteinträge gefunden.</td></tr>';
        return;
    }
    const typLabels = { arbeit: 'Arbeit', fahrt: 'Fahrt', pause: 'Pause', planung: 'Planung' };
    tbody.innerHTML = filtered.map(z => {
        const pName = z.projektId ? (projektMap[z.projektId] || 'Gelöscht') : '—';
        return '<tr>' +
            '<td>' + (z.datum ? new Date(z.datum + 'T00:00').toLocaleDateString('de-DE') : '—') + '</td>' +
            '<td>' + pName + '</td>' +
            '<td>' + (z.taetigkeit || '—') + '</td>' +
            '<td><span class="status-badge status-' + (z.typ || 'arbeit') + '">' + (typLabels[z.typ] || z.typ || 'Arbeit') + '</span></td>' +
            '<td>' + (z.startZeit || '—') + '</td>' +
            '<td>' + (z.endZeit || '—') + '</td>' +
            '<td><strong>' + formatHours(z.dauerMin || 0) + '</strong></td>' +
            '<td><button class="btn-icon btn-delete-zeit" data-id="' + z.id + '" title="Löschen"><svg viewBox="0 0 24 24" width="16" height="16"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button></td>' +
            '</tr>';
    }).join('');

    // Delete handlers
    tbody.querySelectorAll('.btn-delete-zeit').forEach(btn => {
        btn.addEventListener('click', async () => {
            if (!confirm('Zeiteintrag wirklich löschen?')) return;
            await dbDelete('zeiten', btn.dataset.id);
            showToast('Zeiteintrag gelöscht');
            await renderZeiterfassung();
        });
    });
}

function showZeitModal() {
    const projSelect = document.getElementById('timer-projekt');
    const projOptions = projSelect.innerHTML.replace('Projekt zuordnen...', 'Kein Projekt');
    const html = '<div class="modal-overlay active" id="modal-zeit">' +
        '<div class="modal" style="max-width:480px">' +
        '<div class="modal-header"><h3>Neuer Zeiteintrag</h3><button class="modal-close" onclick="document.getElementById(\'modal-zeit\').remove()">&times;</button></div>' +
        '<div class="modal-body">' +
        '<div class="form-group"><label>Datum</label><input type="date" id="zeit-datum" value="' + new Date().toISOString().slice(0, 10) + '"></div>' +
        '<div class="form-group"><label>Projekt</label><select id="zeit-projekt">' + projOptions + '</select></div>' +
        '<div class="form-group"><label>Tätigkeit</label><input type="text" id="zeit-taetigkeit" placeholder="z.B. Zuschnitt, Montage, Oberflächenbehandlung..."></div>' +
        '<div class="form-group"><label>Typ</label><select id="zeit-typ"><option value="arbeit">Arbeit</option><option value="fahrt">Fahrt</option><option value="planung">Planung</option><option value="pause">Pause</option></select></div>' +
        '<div class="form-row" style="display:flex;gap:12px">' +
        '<div class="form-group" style="flex:1"><label>Startzeit</label><input type="time" id="zeit-start" value="08:00"></div>' +
        '<div class="form-group" style="flex:1"><label>Endzeit</label><input type="time" id="zeit-ende" value="16:00"></div>' +
        '</div>' +
        '<button class="btn btn-glow" id="btn-zeit-speichern" style="width:100%;margin-top:12px">Speichern</button>' +
        '</div></div></div>';
    document.body.insertAdjacentHTML('beforeend', html);

    document.getElementById('btn-zeit-speichern').addEventListener('click', async () => {
        const datum = document.getElementById('zeit-datum').value;
        const start = document.getElementById('zeit-start').value;
        const ende = document.getElementById('zeit-ende').value;
        if (!datum || !start || !ende) { showToast('Bitte alle Felder ausfüllen', 'error'); return; }
        const startMin = parseInt(start.split(':')[0]) * 60 + parseInt(start.split(':')[1]);
        const endeMin = parseInt(ende.split(':')[0]) * 60 + parseInt(ende.split(':')[1]);
        const dauer = endeMin - startMin;
        if (dauer <= 0) { showToast('Endzeit muss nach Startzeit liegen', 'error'); return; }

        const eintrag = {
            id: crypto.randomUUID(),
            datum: datum,
            projektId: document.getElementById('zeit-projekt').value || '',
            taetigkeit: document.getElementById('zeit-taetigkeit').value || '',
            typ: document.getElementById('zeit-typ').value || 'arbeit',
            startZeit: start,
            endZeit: ende,
            dauerMin: dauer,
            erstellt: new Date().toISOString()
        };
        await dbPut('zeiten', eintrag);
        document.getElementById('modal-zeit').remove();
        showToast('Zeiteintrag gespeichert');
        await renderZeiterfassung();
    });
}

function initZeiterfassung() {
    document.getElementById('btn-timer-start').addEventListener('click', startTimer);
    document.getElementById('btn-timer-pause').addEventListener('click', pauseTimer);
    document.getElementById('btn-timer-stop').addEventListener('click', stopTimer);
    document.getElementById('btn-zeit-neu').addEventListener('click', showZeitModal);
    document.getElementById('zeit-filter-projekt').addEventListener('change', () => renderZeiterfassung());
    document.getElementById('zeit-filter-von').addEventListener('change', () => renderZeiterfassung());
    document.getElementById('zeit-filter-bis').addEventListener('change', () => renderZeiterfassung());
}

// ==================== KALENDER ====================
let calYear, calMonth;
let calSelectedDate = null;

// Filter-State: Set mit aktiven Typen (default: alle aktiv)
const CAL_ALL_FILTERS = new Set(['aufmass','werkstatt','montage','lieferung','kundenbesuch','sonstiges','frist','projekt','zahlung']);
let calActiveFilters = new Set(CAL_ALL_FILTERS);

async function toggleCalFilter(typ) {
    if (calActiveFilters.has(typ)) {
        calActiveFilters.delete(typ);
    } else {
        calActiveFilters.add(typ);
    }
    updateFilterChipUI();
    await renderKalender();
    if (calSelectedDate) openTagesansicht(calSelectedDate);
}

async function resetCalFilter() {
    calActiveFilters = new Set(CAL_ALL_FILTERS);
    updateFilterChipUI();
    await renderKalender();
    if (calSelectedDate) openTagesansicht(calSelectedDate);
}

function updateFilterChipUI() {
    document.querySelectorAll('.cal-filter-chip[data-filter]').forEach(chip => {
        chip.classList.toggle('active', calActiveFilters.has(chip.dataset.filter));
    });
    // "Alle" button is active when all filters are on
    const alleBtn = document.querySelector('.cal-filter-alle');
    if (alleBtn) alleBtn.classList.toggle('active', calActiveFilters.size === CAL_ALL_FILTERS.size);
}

function showProjektDetail(projektId) {
    window.location.hash = '#/projekt/' + projektId;
}

const TERMIN_TYPEN = {
    aufmass: { label: 'Aufmaß', color: '#8b5cf6', icon: '📏' },
    werkstatt: { label: 'Werkstatt', color: '#3b82f6', icon: '🔨' },
    montage: { label: 'Montage', color: '#f59e0b', icon: '🔧' },
    lieferung: { label: 'Lieferung', color: '#10b981', icon: '🚚' },
    kundenbesuch: { label: 'Kundenbesuch', color: '#ec4899', icon: '👤' },
    sonstiges: { label: 'Sonstiges', color: '#6b7280', icon: '📌' }
};

async function renderKalender(year, month) {
    if (year !== undefined) calYear = year;
    if (month !== undefined) calMonth = month;
    if (calYear === undefined) { const now = new Date(); calYear = now.getFullYear(); calMonth = now.getMonth(); }

    const label = document.getElementById('cal-monat-label');
    const monatNamen = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    label.textContent = monatNamen[calMonth] + ' ' + calYear;

    const grid = document.getElementById('kalender-grid');
    grid.querySelectorAll('.cal-day').forEach(d => d.remove());

    const lastDay = new Date(calYear, calMonth + 1, 0);
    let startWeekday = new Date(calYear, calMonth, 1).getDay();
    if (startWeekday === 0) startWeekday = 7;

    const today = new Date().toISOString().slice(0, 10);

    // Previous month padding
    const prevMonthLast = new Date(calYear, calMonth, 0);
    for (let i = startWeekday - 1; i >= 1; i--) {
        const day = prevMonthLast.getDate() - i + 1;
        const cell = document.createElement('div');
        cell.className = 'cal-day cal-other-month';
        cell.innerHTML = '<span class="cal-day-number">' + day + '</span>';
        grid.appendChild(cell);
    }

    // Current month days
    for (let d = 1; d <= lastDay.getDate(); d++) {
        const dateStr = calYear + '-' + String(calMonth + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
        const cell = document.createElement('div');
        let cls = 'cal-day';
        if (dateStr === today) cls += ' cal-today';
        if (dateStr === calSelectedDate) cls += ' cal-day-selected';
        cell.className = cls;
        cell.innerHTML = '<span class="cal-day-number">' + d + '</span>';
        cell.dataset.date = dateStr;
        cell.addEventListener('click', () => openTagesansicht(dateStr));
        grid.appendChild(cell);
    }

    // Next month padding
    const totalCells = grid.querySelectorAll('.cal-day').length;
    const remaining = (totalCells % 7 === 0) ? 0 : 7 - (totalCells % 7);
    for (let i = 1; i <= remaining; i++) {
        const cell = document.createElement('div');
        cell.className = 'cal-day cal-other-month';
        cell.innerHTML = '<span class="cal-day-number">' + i + '</span>';
        grid.appendChild(cell);
    }

    try {
        await loadCalendarEvents();
    } catch(e) {
        console.error('loadCalendarEvents error:', e);
        showToast('Kalender-Events Fehler: ' + e.message, 'error');
    }
    try {
        await renderKommendeTermine();
    } catch(e) {
        console.error('renderKommendeTermine error:', e);
        showToast('Kommende Termine Fehler: ' + e.message, 'error');
    }
}

async function loadCalendarEvents() {
    const termine = await dbGetAll('termine');
    const projekte = await dbGetAll('projekte');
    const grid = document.getElementById('kalender-grid');
    if (!grid) { console.error('kalender-grid not found'); return; }
    const dayCells = grid.querySelectorAll('.cal-day[data-date]');
    const dateMap = {};
    dayCells.forEach(cell => { dateMap[cell.dataset.date] = cell; });
    let projektEventCount = 0;

    // Eigene Termine einfügen (gefiltert)
    const eventsPerDay = {};
    termine.forEach(t => {
        if (!t.datum || !dateMap[t.datum]) return;
        const terminTyp = t.typ || 'sonstiges';
        if (!calActiveFilters.has(terminTyp)) return;
        if (!eventsPerDay[t.datum]) eventsPerDay[t.datum] = 0;
        eventsPerDay[t.datum]++;
        if (eventsPerDay[t.datum] > 3) {
            const existing = dateMap[t.datum].querySelector('.cal-more');
            if (existing) {
                const count = eventsPerDay[t.datum] - 3;
                existing.textContent = '+' + count + ' mehr';
            } else {
                dateMap[t.datum].insertAdjacentHTML('beforeend', '<div class="cal-more">+1 mehr</div>');
            }
            return;
        }
        const typ = TERMIN_TYPEN[t.typ] || TERMIN_TYPEN.sonstiges;
        const zeitStr = t.startZeit ? t.startZeit + ' ' : '';
        dateMap[t.datum].insertAdjacentHTML('beforeend',
            '<div class="cal-event cal-event-' + (t.typ || 'sonstiges') + '" title="' + zeitStr + (t.titel || '') + '" data-termin-id="' + t.id + '">' +
            zeitStr + (t.titel || '').substring(0, 12) + '</div>'
        );
    });

    // Projekt-Events einfügen (gefiltert)
    function addProjektEvent(dateStr, cssClass, title, icon, label) {
        if (dateStr && dateMap[dateStr]) {
            dateMap[dateStr].insertAdjacentHTML('beforeend', '<div class="cal-event ' + cssClass + '" title="' + title + '">' + icon + ' ' + label + '</div>');
            projektEventCount++;
        }
    }

    projekte.forEach(p => {
        const label = (p.titel || p.angebotNr || 'Projekt').substring(0, 12);
        const re = p.rechnung || {};

        // Projekt-Erstellungsdatum
        if (calActiveFilters.has('projekt') && p.erstelltAm) {
            const erstStr = p.erstelltAm.slice(0, 10);
            const statusLabel = { entwurf: 'Entwurf', angeboten: 'Angeboten', beauftragt: 'Beauftragt', in_produktion: 'In Produktion', rechnung_gestellt: 'Rechnung', bezahlt: 'Bezahlt', abgeschlossen: 'Abgeschlossen' }[p.status] || p.status;
            addProjektEvent(erstStr, 'cal-event-projekt', 'Projekt erstellt: ' + (p.titel || '') + ' (' + statusLabel + ')', '📋', label);
        }

        // Angebotsfrist
        if (calActiveFilters.has('frist') && p.erstelltAm && p.status === 'angeboten') {
            const ablauf = new Date(p.erstelltAm);
            ablauf.setDate(ablauf.getDate() + 30);
            const ablaufStr = ablauf.toISOString().slice(0, 10);
            addProjektEvent(ablaufStr, 'cal-event-frist', 'Angebot läuft ab: ' + (p.titel || p.angebotNr), '⚠', label);
        }

        // Rechnungsdatum
        if (calActiveFilters.has('frist') && re.rechnungDatum) {
            addProjektEvent(re.rechnungDatum.slice(0, 10), 'cal-event-frist', 'Rechnung erstellt: ' + (re.rechnungNr || p.titel), '📄', (re.rechnungNr || label).substring(0, 12));
        }

        // Fälligkeitsdatum
        if (calActiveFilters.has('frist') && re.faelligDatum) {
            addProjektEvent(re.faelligDatum.slice(0, 10), 'cal-event-frist', 'Rechnung fällig: ' + (re.rechnungNr || p.titel), '💰', (re.rechnungNr || label).substring(0, 12));
        }

        // Bezahlt-Datum
        if (calActiveFilters.has('zahlung') && re.bezahltAm) {
            addProjektEvent(re.bezahltAm.slice(0, 10), 'cal-event-zahlung', 'Zahlung erhalten: ' + (p.titel || ''), '✓', label);
        }

        // Lieferdatum
        if (calActiveFilters.has('lieferung') && p.lieferDatum) {
            addProjektEvent(p.lieferDatum.slice(0, 10), 'cal-event-lieferung', 'Liefertermin: ' + (p.titel || ''), '🚚', label);
        }

        // Montage
        if (calActiveFilters.has('montage') && p.montageDatum) {
            addProjektEvent(p.montageDatum.slice(0, 10), 'cal-event-montage', 'Montage: ' + (p.titel || ''), '🔧', label);
        }
    });

    console.log('[Kalender] ' + projekte.length + ' Projekte, ' + termine.length + ' Termine, ' + projektEventCount + ' Events im Monat, ' + dayCells.length + ' Tage, Filter: ' + calActiveFilters.size + '/' + CAL_ALL_FILTERS.size);
}

async function openTagesansicht(dateStr) {
    calSelectedDate = dateStr;
    // Highlight selected day
    document.querySelectorAll('.cal-day').forEach(d => d.classList.remove('cal-day-selected'));
    const cell = document.querySelector('.cal-day[data-date="' + dateStr + '"]');
    if (cell) cell.classList.add('cal-day-selected');

    const container = document.getElementById('cal-tagesansicht');
    container.style.display = '';

    const dateObj = new Date(dateStr + 'T00:00');
    const wochentage = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    document.getElementById('cal-tag-titel').textContent = wochentage[dateObj.getDay()] + ', ' + dateObj.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });

    const termine = await dbGetAll('termine');
    const projekte = await dbGetAll('projekte');
    const kunden = await dbGetAll('kunden');

    const kundenMap = {};
    kunden.forEach(k => { kundenMap[k.id] = ((k.vorname || '') + ' ' + (k.nachname || '')).trim() || k.firma || 'Unbenannt'; });
    const projektMap = {};
    projekte.forEach(p => { projektMap[p.id] = p; });

    // Eigene Termine (gefiltert)
    const tagesTermine = termine.filter(t => {
        if (t.datum !== dateStr) return false;
        return calActiveFilters.has(t.typ || 'sonstiges');
    }).sort((a, b) => (a.startZeit || '').localeCompare(b.startZeit || ''));

    // Projekt-Events für diesen Tag sammeln
    const projektEvents = [];
    projekte.forEach(p => {
        const label = p.titel || p.angebotNr || 'Projekt';
        const kunde = p.kundeId ? kundenMap[p.kundeId] : '';
        const re = p.rechnung || {};

        if (calActiveFilters.has('projekt') && p.erstelltAm && p.erstelltAm.slice(0, 10) === dateStr) {
            projektEvents.push({ icon: '📋', titel: 'Projekt erstellt: ' + label, kunde: kunde, color: '#3b82f6', projektId: p.id, filterTyp: 'projekt' });
        }
        if (calActiveFilters.has('frist') && p.erstelltAm && p.status === 'angeboten') {
            const ablauf = new Date(p.erstelltAm);
            ablauf.setDate(ablauf.getDate() + 30);
            if (ablauf.toISOString().slice(0, 10) === dateStr) {
                projektEvents.push({ icon: '⚠', titel: 'Angebot läuft ab: ' + label, kunde: kunde, color: '#dc3545', projektId: p.id, filterTyp: 'frist' });
            }
        }
        if (calActiveFilters.has('frist') && re.rechnungDatum && re.rechnungDatum.slice(0, 10) === dateStr) {
            projektEvents.push({ icon: '📄', titel: 'Rechnung erstellt: ' + (re.rechnungNr || label), kunde: kunde, color: '#dc3545', projektId: p.id, filterTyp: 'frist' });
        }
        if (calActiveFilters.has('frist') && re.faelligDatum && re.faelligDatum.slice(0, 10) === dateStr) {
            projektEvents.push({ icon: '💰', titel: 'Rechnung fällig: ' + (re.rechnungNr || label), kunde: kunde, color: '#dc3545', projektId: p.id, filterTyp: 'frist' });
        }
        if (calActiveFilters.has('zahlung') && re.bezahltAm && re.bezahltAm.slice(0, 10) === dateStr) {
            projektEvents.push({ icon: '✓', titel: 'Zahlung erhalten: ' + label, kunde: kunde, color: '#10b981', projektId: p.id, filterTyp: 'zahlung' });
        }
        if (calActiveFilters.has('lieferung') && p.lieferDatum && p.lieferDatum.slice(0, 10) === dateStr) {
            projektEvents.push({ icon: '🚚', titel: 'Liefertermin: ' + label, kunde: kunde, color: '#f59e0b', projektId: p.id, filterTyp: 'lieferung' });
        }
        if (calActiveFilters.has('montage') && p.montageDatum && p.montageDatum.slice(0, 10) === dateStr) {
            projektEvents.push({ icon: '🔧', titel: 'Montage: ' + label, kunde: kunde, color: '#f59e0b', projektId: p.id, filterTyp: 'montage' });
        }
    });

    const listEl = document.getElementById('cal-tag-termine');
    let html = '';

    // Eigene Termine rendern
    if (tagesTermine.length > 0) {
        html += tagesTermine.map(t => {
            const typ = TERMIN_TYPEN[t.typ] || TERMIN_TYPEN.sonstiges;
            const projekt = t.projektId ? projektMap[t.projektId] : null;
            const kunde = t.kundeId ? kundenMap[t.kundeId] : (projekt && projekt.kundeId ? kundenMap[projekt.kundeId] : '');
            const zeitStr = t.startZeit ? (t.startZeit + (t.endZeit ? ' – ' + t.endZeit : '')) : 'Ganztägig';
            let details = [];
            if (typ.label) details.push(typ.label);
            if (projekt) details.push('Projekt: ' + (projekt.titel || projekt.angebotNr));
            if (kunde) details.push('Kunde: ' + kunde);
            if (t.ort) details.push('Ort: ' + t.ort);
            if (t.notizen) details.push(t.notizen);

            return '<div class="cal-termin-item">' +
                '<div class="cal-termin-dot" style="background:' + typ.color + '"></div>' +
                '<div class="cal-termin-info">' +
                '<div class="cal-termin-zeit">' + zeitStr + '</div>' +
                '<div class="cal-termin-titel">' + escapeHtml(t.titel || 'Ohne Titel') + '</div>' +
                '<div class="cal-termin-details">' + details.map(d => escapeHtml(d)).join(' · ') + '</div>' +
                '</div>' +
                '<div class="cal-termin-actions">' +
                '<button class="btn-icon btn-edit-termin" data-id="' + t.id + '" title="Bearbeiten"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" fill="none" stroke="currentColor" stroke-width="2"/></svg></button>' +
                '<button class="btn-icon btn-delete-termin" data-id="' + t.id + '" title="Löschen"><svg viewBox="0 0 24 24" width="16" height="16"><polyline points="3 6 5 6 21 6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" fill="none" stroke="currentColor" stroke-width="2"/></svg></button>' +
                '</div></div>';
        }).join('');
    }

    // Projekt-Events rendern (nicht-editierbar, mit Link)
    if (projektEvents.length > 0) {
        if (tagesTermine.length > 0) {
            html += '<div style="border-top:1px solid var(--border);margin:8px 0;padding-top:4px;font-size:0.75rem;color:var(--text-light);font-weight:600">Projekt-Events</div>';
        }
        html += projektEvents.map(pe => {
            const kundeStr = pe.kunde ? ' · Kunde: ' + escapeHtml(pe.kunde) : '';
            return '<div class="cal-termin-item cal-termin-projekt" style="--dot-color:' + pe.color + '">' +
                '<div class="cal-termin-dot" style="background:' + pe.color + '"></div>' +
                '<div class="cal-termin-info">' +
                '<div class="cal-termin-titel">' + pe.icon + ' ' + escapeHtml(pe.titel) + '</div>' +
                '<div class="cal-termin-details">' + kundeStr.replace(' · ', '') + '</div>' +
                '<span class="cal-termin-link" onclick="showProjektDetail(\'' + pe.projektId + '\')">Zum Projekt &rarr;</span>' +
                '</div></div>';
        }).join('');
    }

    if (tagesTermine.length === 0 && projektEvents.length === 0) {
        html = '<p style="color:var(--text-light);padding:8px 0">Keine Termine an diesem Tag. Klicken Sie auf "Termin für diesen Tag" um einen zu erstellen.</p>';
    }

    listEl.innerHTML = html;

    // Event listeners für eigene Termine
    listEl.querySelectorAll('.btn-delete-termin').forEach(btn => {
        btn.addEventListener('click', async () => {
            if (!confirm('Termin wirklich löschen?')) return;
            await dbDelete('termine', btn.dataset.id);
            showToast('Termin gelöscht');
            await renderKalender();
            openTagesansicht(dateStr);
        });
    });
    listEl.querySelectorAll('.btn-edit-termin').forEach(btn => {
        btn.addEventListener('click', async () => {
            const termin = await dbGet('termine', btn.dataset.id);
            if (termin) showTerminModal(termin.datum, termin);
        });
    });

    // Scroll to day view
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

async function renderKommendeTermine() {
    const termine = await dbGetAll('termine');
    const projekte = await dbGetAll('projekte');
    const kunden = await dbGetAll('kunden');
    const today = new Date().toISOString().slice(0, 10);
    const in14 = new Date();
    in14.setDate(in14.getDate() + 14);
    const in14Str = in14.toISOString().slice(0, 10);

    const kundenMap = {};
    kunden.forEach(k => { kundenMap[k.id] = ((k.vorname || '') + ' ' + (k.nachname || '')).trim() || k.firma || ''; });
    const projektMap = {};
    projekte.forEach(p => { projektMap[p.id] = p; });

    // Eigene Termine (gefiltert)
    const kommend = termine.filter(t => {
        if (t.datum < today || t.datum > in14Str) return false;
        return calActiveFilters.has(t.typ || 'sonstiges');
    }).sort((a, b) => (a.datum + (a.startZeit || '')).localeCompare(b.datum + (b.startZeit || '')));

    // Alle Projekt-Events sammeln (gefiltert, vollständig)
    const fristen = [];
    projekte.forEach(p => {
        const label = p.titel || p.angebotNr || 'Projekt';
        const kunde = p.kundeId ? kundenMap[p.kundeId] : '';
        const re = p.rechnung || {};

        // Projekt-Erstellung
        if (calActiveFilters.has('projekt') && p.erstelltAm) {
            const erstStr = p.erstelltAm.slice(0, 10);
            if (erstStr >= today && erstStr <= in14Str) {
                fristen.push({ datum: erstStr, titel: '📋 Projekt erstellt: ' + label, typ: 'projekt', isFrist: true, kundeLabel: kunde });
            }
        }

        // Angebotsfrist
        if (calActiveFilters.has('frist') && p.erstelltAm && p.status === 'angeboten') {
            const ablauf = new Date(p.erstelltAm);
            ablauf.setDate(ablauf.getDate() + 30);
            const ablStr = ablauf.toISOString().slice(0, 10);
            if (ablStr >= today && ablStr <= in14Str) {
                fristen.push({ datum: ablStr, titel: '⚠ Angebot läuft ab: ' + label, typ: 'frist', isFrist: true, kundeLabel: kunde });
            }
        }

        // Rechnungsdatum
        if (calActiveFilters.has('frist') && re.rechnungDatum) {
            const reStr = re.rechnungDatum.slice(0, 10);
            if (reStr >= today && reStr <= in14Str) {
                fristen.push({ datum: reStr, titel: '📄 Rechnung erstellt: ' + (re.rechnungNr || label), typ: 'frist', isFrist: true, kundeLabel: kunde });
            }
        }

        // Fälligkeitsdatum
        if (calActiveFilters.has('frist') && re.faelligDatum) {
            const fStr = re.faelligDatum.slice(0, 10);
            if (fStr >= today && fStr <= in14Str) {
                fristen.push({ datum: fStr, titel: '💰 Rechnung fällig: ' + (re.rechnungNr || label), typ: 'frist', isFrist: true, kundeLabel: kunde });
            }
        }

        // Bezahlt-Datum
        if (calActiveFilters.has('zahlung') && re.bezahltAm) {
            const bezStr = re.bezahltAm.slice(0, 10);
            if (bezStr >= today && bezStr <= in14Str) {
                fristen.push({ datum: bezStr, titel: '✓ Zahlung erhalten: ' + label, typ: 'zahlung', isFrist: true, kundeLabel: kunde });
            }
        }

        // Liefertermin
        if (calActiveFilters.has('lieferung') && p.lieferDatum) {
            if (p.lieferDatum >= today && p.lieferDatum <= in14Str) {
                fristen.push({ datum: p.lieferDatum, titel: '🚚 Liefertermin: ' + label, typ: 'lieferung', isFrist: true, kundeLabel: kunde });
            }
        }

        // Montage
        if (calActiveFilters.has('montage') && p.montageDatum) {
            if (p.montageDatum >= today && p.montageDatum <= in14Str) {
                fristen.push({ datum: p.montageDatum, titel: '🔧 Montage: ' + label, typ: 'montage', isFrist: true, kundeLabel: kunde });
            }
        }
    });

    const alle = [...kommend, ...fristen].sort((a, b) => a.datum.localeCompare(b.datum));

    const container = document.getElementById('cal-kommende-liste');
    if (alle.length === 0) {
        container.innerHTML = '<p style="color:var(--text-light)">Keine Termine in den nächsten 14 Tagen.</p>';
        return;
    }

    const wochentagKurz = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    container.innerHTML = alle.map(t => {
        const d = new Date(t.datum + 'T00:00');
        const typ = TERMIN_TYPEN[t.typ] || { label: 'Frist', color: '#dc3545' };
        const projekt = t.projektId ? projektMap[t.projektId] : null;
        const kunde = t.kundeId ? kundenMap[t.kundeId] : (projekt && projekt.kundeId ? kundenMap[projekt.kundeId] : '');
        let sub = [];
        if (t.startZeit) sub.push(t.startZeit + (t.endZeit ? '–' + t.endZeit : ''));
        if (typ.label) sub.push(typ.label);
        if (projekt) sub.push(projekt.titel || projekt.angebotNr);
        if (kunde) sub.push(kunde);
        if (t.kundeLabel) sub.push(t.kundeLabel);
        if (t.ort) sub.push(t.ort);

        return '<div class="cal-kommend-item" style="border-left-color:' + typ.color + '">' +
            '<div class="cal-kommend-datum"><span>' + d.getDate() + '</span>' + wochentagKurz[d.getDay()] + '</div>' +
            '<div class="cal-kommend-info">' +
            '<div class="cal-kommend-titel">' + escapeHtml(t.titel || 'Ohne Titel') + '</div>' +
            '<div class="cal-kommend-sub">' + sub.map(s => escapeHtml(s)).join(' · ') + '</div>' +
            '</div></div>';
    }).join('');
}

async function showTerminModal(datum, existing) {
    const projekte = await dbGetAll('projekte');
    const kunden = await dbGetAll('kunden');
    const isEdit = !!existing;
    const t = existing || {};

    const projektOptions = '<option value="">Kein Projekt</option>' +
        projekte.map(p => '<option value="' + p.id + '"' + (t.projektId === p.id ? ' selected' : '') + '>' + (p.titel || p.angebotNr || 'Unbenannt') + '</option>').join('');
    const kundenOptions = '<option value="">Kein Kunde</option>' +
        kunden.map(k => {
            const name = ((k.vorname || '') + ' ' + (k.nachname || '')).trim() || k.firma || 'Unbenannt';
            return '<option value="' + k.id + '"' + (t.kundeId === k.id ? ' selected' : '') + '>' + name + '</option>';
        }).join('');
    const typOptions = Object.entries(TERMIN_TYPEN).map(([key, val]) =>
        '<option value="' + key + '"' + ((t.typ || 'sonstiges') === key ? ' selected' : '') + '>' + val.label + '</option>'
    ).join('');

    const html = '<div class="modal" id="modal-termin">' +
        '<div class="modal-backdrop" onclick="document.getElementById(\'modal-termin\').remove()"></div>' +
        '<div class="modal-content" style="max-width:520px">' +
        '<div class="modal-header"><h3>' + (isEdit ? 'Termin bearbeiten' : 'Neuer Termin') + '</h3><button class="modal-close" onclick="document.getElementById(\'modal-termin\').remove()">&times;</button></div>' +
        '<div class="modal-body">' +
        '<div class="form-group"><label>Titel *</label><input type="text" id="termin-titel" value="' + escapeHtml(t.titel || '') + '" placeholder="z.B. Aufmaß bei Müller, Küchenmontage..."></div>' +
        '<div class="form-group"><label>Typ</label><select id="termin-typ">' + typOptions + '</select></div>' +
        '<div class="form-group"><label>Datum *</label><input type="date" id="termin-datum" value="' + (t.datum || datum || new Date().toISOString().slice(0, 10)) + '"></div>' +
        '<div class="form-row" style="display:flex;gap:12px">' +
        '<div class="form-group" style="flex:1"><label>Von</label><input type="time" id="termin-start" value="' + (t.startZeit || '08:00') + '"></div>' +
        '<div class="form-group" style="flex:1"><label>Bis</label><input type="time" id="termin-ende" value="' + (t.endZeit || '') + '"></div>' +
        '</div>' +
        '<div class="form-group"><label>Projekt zuordnen</label><select id="termin-projekt">' + projektOptions + '</select></div>' +
        '<div class="form-group"><label>Kunde</label><select id="termin-kunde">' + kundenOptions + '</select></div>' +
        '<div class="form-group"><label>Ort / Adresse</label><input type="text" id="termin-ort" value="' + escapeHtml(t.ort || '') + '" placeholder="z.B. Musterstraße 5, 12345 Berlin"></div>' +
        '<div class="form-group"><label>Notizen</label><textarea id="termin-notizen" rows="3" placeholder="Zusätzliche Informationen...">' + escapeHtml(t.notizen || '') + '</textarea></div>' +
        '<button class="btn btn-glow" id="btn-termin-speichern" style="width:100%;margin-top:12px">' + (isEdit ? 'Aktualisieren' : 'Termin erstellen') + '</button>' +
        '</div></div></div>';

    // Remove existing modal
    const old = document.getElementById('modal-termin');
    if (old) old.remove();
    document.body.insertAdjacentHTML('beforeend', html);

    // Auto-fill Kunde when Projekt selected
    document.getElementById('termin-projekt').addEventListener('change', () => {
        const pId = document.getElementById('termin-projekt').value;
        if (pId) {
            const p = projekte.find(x => x.id === pId);
            if (p && p.kundeId) document.getElementById('termin-kunde').value = p.kundeId;
        }
    });

    document.getElementById('btn-termin-speichern').addEventListener('click', async () => {
        const titel = document.getElementById('termin-titel').value.trim();
        const terminDatum = document.getElementById('termin-datum').value;
        if (!titel) { showToast('Bitte einen Titel eingeben', 'error'); return; }
        if (!terminDatum) { showToast('Bitte ein Datum wählen', 'error'); return; }

        const eintrag = {
            id: isEdit ? t.id : crypto.randomUUID(),
            titel: titel,
            typ: document.getElementById('termin-typ').value,
            datum: terminDatum,
            startZeit: document.getElementById('termin-start').value || '',
            endZeit: document.getElementById('termin-ende').value || '',
            projektId: document.getElementById('termin-projekt').value || '',
            kundeId: document.getElementById('termin-kunde').value || '',
            ort: document.getElementById('termin-ort').value || '',
            notizen: document.getElementById('termin-notizen').value || '',
            erstellt: isEdit ? t.erstellt : new Date().toISOString(),
            geaendert: new Date().toISOString()
        };

        await dbPut('termine', eintrag);
        document.getElementById('modal-termin').remove();
        showToast(isEdit ? 'Termin aktualisiert' : 'Termin erstellt');
        await renderKalender();
        if (calSelectedDate) openTagesansicht(eintrag.datum);
    });
}

function initKalender() {
    document.getElementById('cal-prev').addEventListener('click', async () => {
        calMonth--;
        if (calMonth < 0) { calMonth = 11; calYear--; }
        await renderKalender();
    });
    document.getElementById('cal-next').addEventListener('click', async () => {
        calMonth++;
        if (calMonth > 11) { calMonth = 0; calYear++; }
        await renderKalender();
    });
    document.getElementById('cal-heute').addEventListener('click', async () => {
        const now = new Date();
        calSelectedDate = now.toISOString().slice(0, 10);
        await renderKalender(now.getFullYear(), now.getMonth());
        openTagesansicht(calSelectedDate);
    });
    document.getElementById('btn-termin-neu').addEventListener('click', () => {
        showTerminModal(calSelectedDate || new Date().toISOString().slice(0, 10));
    });
    document.getElementById('cal-tag-schliessen').addEventListener('click', () => {
        document.getElementById('cal-tagesansicht').style.display = 'none';
        calSelectedDate = null;
        document.querySelectorAll('.cal-day').forEach(d => d.classList.remove('cal-day-selected'));
    });
    document.getElementById('btn-termin-tag').addEventListener('click', () => {
        if (calSelectedDate) showTerminModal(calSelectedDate);
    });
}

// ==================== DASHBOARD WORKFLOW ====================
async function updateWorkflowPipeline() {
    const projekte = await dbGetAll('projekte');
    let erfassen = 0, ausfuehren = 0, produktion = 0, abrechnen = 0, erledigt = 0;
    projekte.forEach(p => {
        switch (p.status) {
            case 'entwurf': case 'angeboten': erfassen++; break;
            case 'beauftragt': ausfuehren++; break;
            case 'in_produktion': produktion++; break;
            case 'rechnung_gestellt': abrechnen++; break;
            case 'bezahlt': case 'abgeschlossen': erledigt++; break;
        }
    });
    const el = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
    el('wf-erfassen', erfassen);
    el('wf-ausfuehren', ausfuehren);
    el('wf-produktion', produktion);
    el('wf-abrechnen', abrechnen);
    el('wf-erledigt', erledigt);
}

// ==================== INIT ====================
async function init() {
    try {
        await openDB();
        await migrateLocalStorage();
        await seedDemoData();
        await loadEigeneArtikel();
        await loadEigeneVorlagen();
        currentMwstSatz = await getSetting('mwstSatz', 19);
        // Theme laden
        const savedTheme = await getSetting('theme', 'light');
        applyTheme(savedTheme);
        initEvents();
        initThemeSwitcher();
        try { initGlobalSearch(); } catch(e) { console.error('GlobalSearch init error:', e); }
        try { initZeiterfassung(); } catch(e) { console.error('Zeiterfassung init error:', e); }
        try { initKalender(); } catch(e) { console.error('Kalender init error:', e); }

        // Finanzen: Zahlungs-Buttons
        const finOffene = document.getElementById('finanzen-offene-body');
        if (finOffene) {
            finOffene.addEventListener('click', async (e) => {
                await handleCardActions(e);
                if (e.target.closest('[data-zahlung-verbuchen]')) {
                    setTimeout(() => renderFinanzen(), 500);
                }
            });
        }

        // Navigate to current hash or default
        if (!window.location.hash || window.location.hash === '#') {
            window.location.hash = '#/dashboard';
        } else {
            await router();
        }
        // Projekt-Editor: Sektionen klappbar machen
        document.querySelectorAll('.section-toggle').forEach(header => {
            header.addEventListener('click', () => {
                const sectionId = header.dataset.section;
                const body = document.getElementById('section-' + sectionId);
                if (body) {
                    body.classList.toggle('hidden');
                    header.classList.toggle('section-open');
                }
            });
        });

        // Einstellungen-Cards standardmäßig einklappen
        document.querySelectorAll('#view-einstellungen .calc-card').forEach(card => {
            card.classList.add('collapsed');
            card.querySelector('.calc-header').addEventListener('click', () => {
                card.classList.toggle('collapsed');
            });
        });

        // Finanzen: Quartals- und Monatsübersicht einklappbar machen
        document.querySelectorAll('#view-finanzen .calc-card.collapsible').forEach(card => {
            card.querySelector('.calc-header').addEventListener('click', () => {
                card.classList.toggle('collapsed');
            });
        });

        // Hilfe-Cards standardmäßig einklappen (außer TOC)
        document.querySelectorAll('#view-hilfe .hilfe-card.calc-card').forEach(card => {
            card.classList.add('collapsed');
            card.querySelector('.calc-header').addEventListener('click', () => {
                card.classList.toggle('collapsed');
            });
        });

        console.log('WerkBank initialisiert.');
    } catch (err) {
        console.error('Fehler beim Initialisieren:', err);
        // Trotzdem Event-Binding versuchen
        try { initEvents(); } catch (e) { console.error('Event-Binding fehlgeschlagen:', e); }
    }
    // Globale Suche immer initialisieren, auch wenn oben etwas fehlschlägt
    try { initGlobalSearch(); } catch (e) { console.error('GlobalSearch fehlgeschlagen:', e); }
}

// jsPDF Fallback: Wenn CDN-Script nicht geladen, erneut versuchen
function ensureJsPDF() {
    return new Promise((resolve, reject) => {
        if (typeof window.jspdf !== 'undefined') { resolve(); return; }
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.2/jspdf.umd.min.js';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('jsPDF konnte nicht geladen werden'));
        document.head.appendChild(script);
    });
}

document.addEventListener('DOMContentLoaded', init);
