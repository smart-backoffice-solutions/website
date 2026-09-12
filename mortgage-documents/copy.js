// Mortgage Documents page copy. The mechanism that applies it lives in ../i18n.js.
window.SBO_COPY = {
  en: {
    tbl: { doc: 'Document', code: 'Type', fields: 'Fields' },
    nav: { home: 'Smart Backoffice Solutions', modules: 'Modules', api: 'API', contact: 'Contact' },
    hero: {
      eyebrow: 'An API by Smart Backoffice Solutions',
      title: 'A document goes in. The facts come out.',
      lead: 'An API for Dutch mortgage documents. Submit one document, receive every relevant field as structured data, each with its own confidence score. Seven document types. It just works.',
      cta: 'Talk to us',
      more: 'See the modules'
    },
    strip: {
      p1a: 'One payslip. How long will this take?',
      p2cap: 'reads · cross-checks · votes · confirms',
      p3a: 'Done. 34 fields, each with a confidence score.',
      p3b: 'That’s it?',
      p3c: 'That’s it.'
    },
    how: {
      eyebrow: 'How it works',
      title: 'Three steps. Nothing to configure.',
      s1t: 'Upload',
      s1c: 'One call with the document and its type. You get a document ID back immediately.',
      s2t: 'Wait a moment',
      s2c: 'Processing runs in the background. Correctness comes before speed: a slow, right answer beats a fast, wrong one.',
      s3t: 'Collect',
      s3c: 'Poll with the ID and receive every field as a name, a value and a confidence.',
      codecap: 'Trimmed example. Field names and formats are documented per module.'
    },
    modules: {
      eyebrow: 'Modules',
      title: 'Seven document types, each with its own module.',
      intro: 'Every document type gets the treatment it needs. Standardised forms lean on layout models; documents that look different every time lean on several language models that vote. What comes out is the same for all: a flat list of fields.',
      fields: 'fields',
      inLabel: 'What goes in',
      outLabel: 'What comes out',
      checkLabel: 'Worth noticing'
    },
    m1: {
      name: 'Employer declaration', doc: 'Werkgeversverklaring, NHG model', code: 'wgv', count: '74',
      in: 'A scanned or digital employer declaration, filled in by hand or typed.',
      out: 'Employee and employer details, contract type, probation, reorganisation, the full income table, private loans and wage garnishment, the signature block and the NHG model number.',
      check: 'Two visual checks most people would not expect from software: are there strikethroughs or corrections, and was the form filled in with more than one ink colour.',
      b1: 'Filled in with a blue pen. Signed with a black one. And something crossed out.',
      b2: 'Two ink colours. One strikethrough. Both flagged.',
      b3: 'You noticed?',
      b4: 'Fields 73 and 74.'
    },
    m2: {
      name: 'Identity document', doc: 'Passport or identity card', code: 'legi', count: '17',
      in: 'A scan of a passport or identity card, front and back.',
      out: 'Name, date and place of birth, nationality as an ISO code, document number, issue and expiry date, issuing authority.',
      check: 'Whether the citizen service number is visible, whether the scan is in colour, and for passports whether the opposite page with the perforated document number is included. The machine-readable zone is verified with its own check digits.',
      b1: 'Passport scan, as requested.',
      b2: 'Black and white. And the page with the perforated number is missing.',
      b3: 'I’ll ask for a new one.'
    },
    m3: {
      name: 'Purchase agreement', doc: 'Koopovereenkomst', code: 'kovk', count: '43',
      in: 'A signed purchase agreement for a home, often twenty pages or more.',
      out: 'Both buyers, the property, purchase price, movable goods, completion date, notary, bank guarantee and the financing condition.',
      check: 'Amounts appear twice in a Dutch purchase agreement: in digits and written out. Both are extracted and compared, and the comparison feeds the confidence score.',
      b1: 'Purchase price € 407.000. In words: vierhonderdzevenduizend.',
      b2: 'Digits and words agree. Confidence 0.99.',
      b3: 'You read the words too?',
      b4: 'Always.'
    },
    m4: {
      name: 'Payslip', doc: 'Loonstrook', code: 'ls', count: '34',
      in: 'A payslip from any employer or payroll provider, in any layout.',
      out: 'Employee and employer, IBAN, hours and part-time factor, contract flags, pay period, salary components, pension contribution, end-of-year bonus, thirteenth month, individual choice budget and net paid.',
      check: 'Payslips are the least standardised document in the set. Several models read every payslip independently and vote on each field. What they agree on is then confirmed against the text of the document.',
      b1: 'Every employer has its own payslip layout.',
      b2: 'Same 34 fields. Every time.'
    },
    m5: {
      name: 'Appraisal report', doc: 'Taxatierapport', code: 'taxrap', count: '112',
      in: 'A residential appraisal report, typically fifty pages or more.',
      out: 'Client, property, market value, valuation date, leasehold, homeowners’ association, energy label, a sustainability block covering insulation, heating, energy generation and improvement potential, and the foundation report.',
      check: 'Fields only appear where they apply: leasehold details for leasehold properties, association details for apartments. The sustainability block is the newest part and is still being refined.',
      b1: 'Sixty pages.',
      b2: 'Energy label on page 12. Foundation on page 58. 112 fields.'
    },
    m6: {
      name: 'DUO student loan statement', doc: 'Overzicht studieschuld', code: 'duo', count: '51',
      in: 'A DUO statement as a PDF, a screenshot or a forwarded e-mail.',
      out: 'Borrower details, total balance, and for each of up to five separate loans the type, start and current balance, interest, remaining term and repayment rules.',
      check: 'A statement that explicitly says there is no student debt is recognised as such. That is different from a statement where the loan fields are simply empty.',
      b1: 'Student debt?',
      b2: 'Two loans. Balance, interest and term for each.'
    },
    m7: {
      name: 'Chamber of Commerce extract', doc: 'KVK-uittreksel', code: 'kvk', count: '29',
      in: 'A KVK extract for a company or a sole proprietorship.',
      out: 'Trade name, legal form, KVK and RSIN numbers, SBI codes, start date, shareholders and directors, and up to five natural persons with their role.',
      check: 'Roles come back as stated on the extract: owner, partner, shareholder, director. That is what a lender needs in order to know who may sign.',
      b1: 'Who is allowed to sign for this company?',
      b2: 'Three persons, each with their role.'
    },
    reliable: {
      eyebrow: 'What makes it reliable',
      title: 'Extract first. Verify. Normalise last.',
      intro: 'A single model reading a document is a guess. The module around it is what turns a guess into a result you can build a process on.',
      s1t: 'Extract as is',
      s1c: 'Values are taken exactly as they appear in the document. Nothing is interpreted yet.',
      s2t: 'Cross-check',
      s2c: 'Where a document says the same thing twice, both are compared: an amount in digits and in words, a date here and a date there.',
      s3t: 'Vote',
      s3c: 'For documents with many layouts, several models read the same document with different settings. The answer is what they agree on.',
      s4t: 'Confirm',
      s4c: 'Every extracted value is searched for in the raw text of the document. A value that cannot be found there loses confidence.',
      s5t: 'Normalise last',
      s5c: 'Only at the end are dates, country codes, postcodes and names brought into a fixed format, so that you never have to.',
      conft: 'One confidence per field',
      hi: '0.95 and up. Several methods agreed and the value was found in the document text.',
      mid: 'Around 0.80. Most methods agreed. Suitable for most automated workflows.',
      low: '0.60 and below. Methods disagreed. Have a person look.'
    },
    who: {
      eyebrow: 'Who it is for',
      title: 'Advisers, intermediaries and lenders.',
      at: 'Advisers and intermediaries',
      ac: 'Prepare a complete application faster, and see at intake which documents will not do: a black-and-white passport scan, a payslip from the wrong period, an unsigned declaration.',
      bt: 'Lenders',
      bc: 'Support checks, assessment and acceptance with fields you can compare against the application, each with a confidence you can set thresholds on.',
      note: 'The API processes one document at a time and returns what that document says. Comparing documents with each other and with the application stays in your process, where your business rules live.'
    },
    practical: {
      eyebrow: 'Practicalities',
      title: 'Built to be boring to integrate.',
      p1: 'Hosted in the European Union.',
      p2: 'One API key per client, sent as a header. Two keys are valid at any time, so a key rotation needs no maintenance window.',
      p3: 'Results are retrievable for a limited window after processing and then deleted. That limits what a leaked key would be worth.',
      p4: 'Volumes by agreement. Terms and a service level agreement are available on request.'
    },
    contact: {
      eyebrow: 'Try it',
      title: 'Want to see it with your own documents?',
      copy: 'Send us a message. We set you up with a key and the documentation, and you can be processing documents the same week.'
    },
    footer: { home: 'Smart Backoffice Solutions', fm: 'Food Moments' }
  },

  nl: {
    tbl: { doc: 'Document', code: 'Type', fields: 'Velden' },
    nav: { home: 'Smart Backoffice Solutions', modules: 'Modules', api: 'API', contact: 'Contact' },
    hero: {
      eyebrow: 'Een API van Smart Backoffice Solutions',
      title: 'Er gaat een document in. De feiten komen eruit.',
      lead: 'Een API voor Nederlandse hypotheekdocumenten. Stuur één document in en ontvang ieder relevant veld als gestructureerde data, elk met een eigen betrouwbaarheidsscore. Zeven documenttypen. Het werkt gewoon.',
      cta: 'Neem contact op',
      more: 'Bekijk de modules'
    },
    strip: {
      p1a: 'Eén loonstrook. Hoe lang gaat dit duren?',
      p2cap: 'leest · controleert · stemt · bevestigt',
      p3a: 'Klaar. 34 velden, elk met een betrouwbaarheidsscore.',
      p3b: 'Is dat alles?',
      p3c: 'Dat is alles.'
    },
    how: {
      eyebrow: 'Hoe het werkt',
      title: 'Drie stappen. Niets in te stellen.',
      s1t: 'Insturen',
      s1c: 'Eén aanroep met het document en het documenttype. U krijgt direct een document-ID terug.',
      s2t: 'Even wachten',
      s2c: 'De verwerking draait op de achtergrond. Juistheid gaat voor snelheid: een langzaam, juist antwoord wint van een snel, fout antwoord.',
      s3t: 'Ophalen',
      s3c: 'Vraag het resultaat op met het ID en ontvang ieder veld als naam, waarde en betrouwbaarheid.',
      codecap: 'Ingekort voorbeeld. Veldnamen en formaten zijn per module gedocumenteerd.'
    },
    modules: {
      eyebrow: 'Modules',
      title: 'Zeven documenttypen, elk met een eigen module.',
      intro: 'Ieder documenttype krijgt de behandeling die het nodig heeft. Gestandaardiseerde formulieren leunen op layoutmodellen; documenten die er iedere keer anders uitzien leunen op meerdere taalmodellen die stemmen. Wat eruit komt is voor allemaal hetzelfde: een platte lijst velden.',
      fields: 'velden',
      inLabel: 'Wat erin gaat',
      outLabel: 'Wat eruit komt',
      checkLabel: 'Het opmerken waard'
    },
    m1: {
      name: 'Werkgeversverklaring', doc: 'NHG-model', code: 'wgv', count: '74',
      in: 'Een gescande of digitale werkgeversverklaring, met de hand ingevuld of getypt.',
      out: 'Gegevens van werknemer en werkgever, aard van het dienstverband, proeftijd, reorganisatie, de volledige inkomenstabel, onderhandse leningen en loonbeslag, het ondertekeningsblok en het NHG-modelnummer.',
      check: 'Twee visuele controles die je niet van software verwacht: zijn er doorhalingen of correcties, en is het formulier met meer dan één inktkleur ingevuld.',
      b1: 'Ingevuld met een blauwe pen. Ondertekend met een zwarte. En iets doorgestreept.',
      b2: 'Twee inktkleuren. Eén doorhaling. Allebei gemarkeerd.',
      b3: 'Dat zag je?',
      b4: 'Veld 73 en 74.'
    },
    m2: {
      name: 'Legitimatie', doc: 'Paspoort of identiteitskaart', code: 'legi', count: '17',
      in: 'Een scan van een paspoort of identiteitskaart, voor- en achterkant.',
      out: 'Naam, geboortedatum en -plaats, nationaliteit als ISO-code, documentnummer, datum van afgifte en geldigheid, instantie van afgifte.',
      check: 'Of het BSN zichtbaar is, of de scan in kleur is, en bij paspoorten of de tegenoverliggende pagina met het geperforeerde documentnummer is meegestuurd. De machineleesbare zone wordt met de eigen controlecijfers geverifieerd.',
      b1: 'De paspoortscan, zoals gevraagd.',
      b2: 'Zwart-wit. En de pagina met het geperforeerde nummer ontbreekt.',
      b3: 'Ik vraag een nieuwe.'
    },
    m3: {
      name: 'Koopovereenkomst', doc: 'Getekende koopakte', code: 'kovk', count: '43',
      in: 'Een getekende koopovereenkomst voor een woning, vaak twintig pagina’s of meer.',
      out: 'Beide kopers, het object, de koopsom, roerende zaken, datum van levering, notaris, bankgarantie en het financieringsvoorbehoud.',
      check: 'Bedragen staan twee keer in een koopovereenkomst: in cijfers en voluit geschreven. Beide worden uitgelezen en vergeleken, en die vergelijking telt mee in de betrouwbaarheidsscore.',
      b1: 'Koopsom € 407.000. Voluit: vierhonderdzevenduizend.',
      b2: 'Cijfers en woorden komen overeen. Betrouwbaarheid 0,99.',
      b3: 'Lees je de woorden ook?',
      b4: 'Altijd.'
    },
    m4: {
      name: 'Loonstrook', doc: 'Salarisspecificatie', code: 'ls', count: '34',
      in: 'Een loonstrook van welke werkgever of salarisverwerker dan ook, in welke opmaak dan ook.',
      out: 'Werknemer en werkgever, IBAN, uren en deeltijdfactor, contractkenmerken, periode, salariscomponenten, pensioenpremie, eindejaarsuitkering, dertiende maand, individueel keuzebudget en netto uitbetaald.',
      check: 'Loonstroken zijn het minst gestandaardiseerde document in de set. Meerdere modellen lezen iedere loonstrook onafhankelijk en stemmen per veld. Waar ze het over eens zijn wordt vervolgens bevestigd in de tekst van het document.',
      b1: 'Iedere werkgever heeft zijn eigen loonstrook.',
      b2: 'Dezelfde 34 velden. Iedere keer.'
    },
    m5: {
      name: 'Taxatierapport', doc: 'Woningtaxatie', code: 'taxrap', count: '112',
      in: 'Een taxatierapport van een woning, meestal vijftig pagina’s of meer.',
      out: 'Opdrachtgever, object, marktwaarde, waardepeildatum, erfpacht, VvE, energielabel, een verduurzamingsblok met isolatie, verwarming, energieopwekking en verbeterpotentieel, en het funderingsrapport.',
      check: 'Velden verschijnen alleen waar ze van toepassing zijn: erfpachtgegevens bij erfpacht, VvE-gegevens bij appartementen. Het verduurzamingsblok is het nieuwste deel en wordt nog verfijnd.',
      b1: 'Zestig pagina’s.',
      b2: 'Energielabel op pagina 12. Fundering op pagina 58. 112 velden.'
    },
    m6: {
      name: 'DUO-overzicht studieschuld', doc: 'Overzicht studieschuld', code: 'duo', count: '51',
      in: 'Een DUO-overzicht als pdf, schermafbeelding of doorgestuurde e-mail.',
      out: 'Gegevens van de lener, het totale saldo, en per lening, tot vijf afzonderlijke leningen, het type, begin- en huidig saldo, rente, resterende looptijd en aflossingsregels.',
      check: 'Een overzicht dat expliciet meldt dat er geen studieschuld is, wordt als zodanig herkend. Dat is iets anders dan een overzicht waarin de leningvelden gewoon leeg zijn.',
      b1: 'Studieschuld?',
      b2: 'Twee leningen. Saldo, rente en looptijd van elk.'
    },
    m7: {
      name: 'KVK-uittreksel', doc: 'Uittreksel Handelsregister', code: 'kvk', count: '29',
      in: 'Een KVK-uittreksel van een onderneming of eenmanszaak.',
      out: 'Handelsnaam, rechtsvorm, KVK- en RSIN-nummer, SBI-codes, startdatum, aandeelhouders en bestuurders, en tot vijf natuurlijke personen met hun rol.',
      check: 'Rollen komen terug zoals ze op het uittreksel staan: eigenaar, vennoot, aandeelhouder, bestuurder. Dat is wat een geldverstrekker nodig heeft om te weten wie mag tekenen.',
      b1: 'Wie mag er tekenen voor dit bedrijf?',
      b2: 'Drie personen, elk met hun rol.'
    },
    reliable: {
      eyebrow: 'Wat het betrouwbaar maakt',
      title: 'Eerst uitlezen. Dan verifiëren. Als laatste normaliseren.',
      intro: 'Eén model dat een document leest, is een gok. De module eromheen maakt van die gok een resultaat waar u een proces op kunt bouwen.',
      s1t: 'Letterlijk uitlezen',
      s1c: 'Waarden worden overgenomen precies zoals ze in het document staan. Er wordt nog niets geïnterpreteerd.',
      s2t: 'Kruiselings controleren',
      s2c: 'Waar een document hetzelfde twee keer zegt, worden beide vergeleken: een bedrag in cijfers en in woorden, een datum hier en een datum daar.',
      s3t: 'Stemmen',
      s3c: 'Bij documenten met veel opmaakvarianten lezen meerdere modellen hetzelfde document met verschillende instellingen. Het antwoord is waar ze het over eens zijn.',
      s4t: 'Bevestigen',
      s4c: 'Iedere uitgelezen waarde wordt teruggezocht in de ruwe tekst van het document. Een waarde die daar niet te vinden is, verliest betrouwbaarheid.',
      s5t: 'Als laatste normaliseren',
      s5c: 'Pas aan het eind worden datums, landcodes, postcodes en namen in een vast formaat gezet, zodat u dat nooit hoeft te doen.',
      conft: 'Eén betrouwbaarheidsscore per veld',
      hi: '0,95 en hoger. Meerdere methoden waren het eens en de waarde is in de documenttekst teruggevonden.',
      mid: 'Rond 0,80. De meeste methoden waren het eens. Geschikt voor de meeste geautomatiseerde processen.',
      low: '0,60 en lager. De methoden spraken elkaar tegen. Laat er iemand naar kijken.'
    },
    who: {
      eyebrow: 'Voor wie',
      title: 'Adviseurs, ketens en geldverstrekkers.',
      at: 'Adviseurs en ketens',
      ac: 'Bereid een complete aanvraag sneller voor, en zie al bij intake welke documenten niet voldoen: een zwart-witte paspoortscan, een loonstrook uit de verkeerde periode, een niet-ondertekende verklaring.',
      bt: 'Geldverstrekkers',
      bc: 'Ondersteun controles, beoordeling en acceptatie met velden die u naast de aanvraag kunt leggen, elk met een betrouwbaarheid waar u drempels op kunt zetten.',
      note: 'De API verwerkt één document tegelijk en geeft terug wat dat document zegt. Documenten onderling en met de aanvraag vergelijken blijft in uw proces, waar uw bedrijfsregels leven.'
    },
    practical: {
      eyebrow: 'Praktisch',
      title: 'Gebouwd om saai te integreren.',
      p1: 'Gehost in de Europese Unie.',
      p2: 'Eén API-sleutel per klant, meegestuurd als header. Er zijn altijd twee sleutels geldig, dus een sleutelrotatie vraagt geen onderhoudsvenster.',
      p3: 'Resultaten zijn een beperkte tijd na verwerking op te halen en worden daarna verwijderd. Dat beperkt wat een gelekte sleutel waard zou zijn.',
      p4: 'Volumes in overleg. Algemene voorwaarden en een SLA zijn op aanvraag beschikbaar.'
    },
    contact: {
      eyebrow: 'Probeer het',
      title: 'Wilt u het zien met uw eigen documenten?',
      copy: 'Stuur ons een bericht. We zorgen voor een sleutel en de documentatie, en u kunt dezelfde week nog documenten verwerken.'
    },
    footer: { home: 'Smart Backoffice Solutions', fm: 'Food Moments' }
  },

  de: {
    tbl: { doc: 'Dokument', code: 'Typ', fields: 'Felder' },
    nav: { home: 'Smart Backoffice Solutions', modules: 'Module', api: 'API', contact: 'Kontakt' },
    hero: {
      eyebrow: 'Eine API von Smart Backoffice Solutions',
      title: 'Ein Dokument geht hinein. Die Fakten kommen heraus.',
      lead: 'Eine API für niederländische Hypothekendokumente. Ein Dokument einreichen, jedes relevante Feld als strukturierte Daten zurückerhalten, jedes mit eigenem Konfidenzwert. Sieben Dokumenttypen. Es funktioniert einfach.',
      cta: 'Kontakt aufnehmen',
      more: 'Die Module ansehen'
    },
    strip: {
      p1a: 'Eine Gehaltsabrechnung. Wie lange dauert das?',
      p2cap: 'liest · prüft · stimmt ab · bestätigt',
      p3a: 'Fertig. 34 Felder, jedes mit Konfidenzwert.',
      p3b: 'Das ist alles?',
      p3c: 'Das ist alles.'
    },
    how: {
      eyebrow: 'So funktioniert es',
      title: 'Drei Schritte. Nichts zu konfigurieren.',
      s1t: 'Hochladen',
      s1c: 'Ein Aufruf mit dem Dokument und seinem Typ. Sie erhalten sofort eine Dokument-ID zurück.',
      s2t: 'Kurz warten',
      s2c: 'Die Verarbeitung läuft im Hintergrund. Richtigkeit geht vor Geschwindigkeit: eine langsame, richtige Antwort schlägt eine schnelle, falsche.',
      s3t: 'Abholen',
      s3c: 'Mit der ID abfragen und jedes Feld als Name, Wert und Konfidenz erhalten.',
      codecap: 'Gekürztes Beispiel. Feldnamen und Formate sind je Modul dokumentiert.'
    },
    modules: {
      eyebrow: 'Module',
      title: 'Sieben Dokumenttypen, jeder mit eigenem Modul.',
      intro: 'Jeder Dokumenttyp bekommt die Behandlung, die er braucht. Standardisierte Formulare stützen sich auf Layoutmodelle; Dokumente, die jedes Mal anders aussehen, auf mehrere Sprachmodelle, die abstimmen. Heraus kommt bei allen dasselbe: eine flache Liste von Feldern.',
      fields: 'Felder',
      inLabel: 'Was hineingeht',
      outLabel: 'Was herauskommt',
      checkLabel: 'Bemerkenswert'
    },
    m1: {
      name: 'Arbeitgeberbescheinigung', doc: 'Werkgeversverklaring, NHG-Modell', code: 'wgv', count: '74',
      in: 'Eine gescannte oder digitale Arbeitgeberbescheinigung, handschriftlich ausgefüllt oder getippt.',
      out: 'Angaben zu Arbeitnehmer und Arbeitgeber, Vertragsart, Probezeit, Umstrukturierung, die vollständige Einkommenstabelle, Privatdarlehen und Lohnpfändung, der Unterschriftenblock und die NHG-Modellnummer.',
      check: 'Zwei visuelle Prüfungen, die man von Software nicht erwartet: Gibt es Durchstreichungen oder Korrekturen, und wurde das Formular mit mehr als einer Tintenfarbe ausgefüllt.',
      b1: 'Mit blauem Stift ausgefüllt. Mit schwarzem unterschrieben. Und etwas durchgestrichen.',
      b2: 'Zwei Tintenfarben. Eine Durchstreichung. Beides markiert.',
      b3: 'Das ist dir aufgefallen?',
      b4: 'Feld 73 und 74.'
    },
    m2: {
      name: 'Ausweisdokument', doc: 'Reisepass oder Personalausweis', code: 'legi', count: '17',
      in: 'Ein Scan eines Reisepasses oder Personalausweises, Vorder- und Rückseite.',
      out: 'Name, Geburtsdatum und -ort, Staatsangehörigkeit als ISO-Code, Dokumentnummer, Ausstellungs- und Ablaufdatum, ausstellende Behörde.',
      check: 'Ob die Bürgerservicenummer sichtbar ist, ob der Scan farbig ist, und bei Reisepässen, ob die gegenüberliegende Seite mit der perforierten Dokumentnummer enthalten ist. Die maschinenlesbare Zone wird mit ihren eigenen Prüfziffern verifiziert.',
      b1: 'Der Pass-Scan, wie gewünscht.',
      b2: 'Schwarz-weiß. Und die Seite mit der perforierten Nummer fehlt.',
      b3: 'Ich fordere einen neuen an.'
    },
    m3: {
      name: 'Kaufvertrag', doc: 'Koopovereenkomst', code: 'kovk', count: '43',
      in: 'Ein unterschriebener Kaufvertrag für eine Wohnimmobilie, oft zwanzig Seiten oder mehr.',
      out: 'Beide Käufer, das Objekt, Kaufpreis, bewegliche Sachen, Übergabetermin, Notar, Bankgarantie und Finanzierungsvorbehalt.',
      check: 'Beträge stehen in einem niederländischen Kaufvertrag zweimal: in Ziffern und ausgeschrieben. Beide werden extrahiert und verglichen, und der Vergleich fließt in den Konfidenzwert ein.',
      b1: 'Kaufpreis € 407.000. In Worten: vierhonderdzevenduizend.',
      b2: 'Ziffern und Worte stimmen überein. Konfidenz 0,99.',
      b3: 'Du liest auch die Worte?',
      b4: 'Immer.'
    },
    m4: {
      name: 'Gehaltsabrechnung', doc: 'Loonstrook', code: 'ls', count: '34',
      in: 'Eine Gehaltsabrechnung von beliebigem Arbeitgeber oder Lohnbüro, in beliebigem Layout.',
      out: 'Arbeitnehmer und Arbeitgeber, IBAN, Stunden und Teilzeitfaktor, Vertragsmerkmale, Abrechnungszeitraum, Gehaltsbestandteile, Pensionsbeitrag, Jahresendzulage, dreizehntes Gehalt, individuelles Wahlbudget und Nettoauszahlung.',
      check: 'Gehaltsabrechnungen sind das am wenigsten standardisierte Dokument der Reihe. Mehrere Modelle lesen jede Abrechnung unabhängig und stimmen je Feld ab. Worin sie sich einig sind, wird anschließend im Text des Dokuments bestätigt.',
      b1: 'Jeder Arbeitgeber hat sein eigenes Abrechnungslayout.',
      b2: 'Dieselben 34 Felder. Jedes Mal.'
    },
    m5: {
      name: 'Wertgutachten', doc: 'Taxatierapport', code: 'taxrap', count: '112',
      in: 'Ein Wertgutachten für eine Wohnimmobilie, meist fünfzig Seiten oder mehr.',
      out: 'Auftraggeber, Objekt, Marktwert, Bewertungsstichtag, Erbpacht, Eigentümergemeinschaft, Energielabel, ein Nachhaltigkeitsblock mit Dämmung, Heizung, Energieerzeugung und Verbesserungspotenzial sowie der Fundamentbericht.',
      check: 'Felder erscheinen nur dort, wo sie zutreffen: Erbpachtangaben bei Erbpacht, Angaben zur Eigentümergemeinschaft bei Wohnungen. Der Nachhaltigkeitsblock ist der neueste Teil und wird noch verfeinert.',
      b1: 'Sechzig Seiten.',
      b2: 'Energielabel auf Seite 12. Fundament auf Seite 58. 112 Felder.'
    },
    m6: {
      name: 'DUO-Studienkreditübersicht', doc: 'Overzicht studieschuld', code: 'duo', count: '51',
      in: 'Eine DUO-Übersicht als PDF, Screenshot oder weitergeleitete E-Mail.',
      out: 'Angaben zum Kreditnehmer, Gesamtsaldo, und für jedes von bis zu fünf Darlehen Art, Anfangs- und aktueller Saldo, Zins, Restlaufzeit und Tilgungsregeln.',
      check: 'Eine Übersicht, die ausdrücklich sagt, dass keine Studienschulden bestehen, wird als solche erkannt. Das ist etwas anderes als eine Übersicht, in der die Darlehensfelder einfach leer sind.',
      b1: 'Studienschulden?',
      b2: 'Zwei Darlehen. Saldo, Zins und Laufzeit für jedes.'
    },
    m7: {
      name: 'Handelsregisterauszug', doc: 'KVK-uittreksel', code: 'kvk', count: '29',
      in: 'Ein KVK-Auszug für ein Unternehmen oder ein Einzelunternehmen.',
      out: 'Handelsname, Rechtsform, KVK- und RSIN-Nummer, SBI-Codes, Gründungsdatum, Gesellschafter und Geschäftsführer sowie bis zu fünf natürliche Personen mit ihrer Rolle.',
      check: 'Rollen kommen so zurück, wie sie im Auszug stehen: Inhaber, Gesellschafter, Anteilseigner, Geschäftsführer. Das braucht ein Kreditgeber, um zu wissen, wer unterschreiben darf.',
      b1: 'Wer darf für dieses Unternehmen unterschreiben?',
      b2: 'Drei Personen, jede mit ihrer Rolle.'
    },
    reliable: {
      eyebrow: 'Was es zuverlässig macht',
      title: 'Erst extrahieren. Dann prüfen. Zuletzt normalisieren.',
      intro: 'Ein einzelnes Modell, das ein Dokument liest, ist eine Vermutung. Das Modul darum herum macht aus der Vermutung ein Ergebnis, auf das Sie einen Prozess bauen können.',
      s1t: 'Wörtlich extrahieren',
      s1c: 'Werte werden genau so übernommen, wie sie im Dokument stehen. Noch wird nichts interpretiert.',
      s2t: 'Gegenprüfen',
      s2c: 'Wo ein Dokument dasselbe zweimal sagt, werden beide verglichen: ein Betrag in Ziffern und in Worten, ein Datum hier und ein Datum dort.',
      s3t: 'Abstimmen',
      s3c: 'Bei Dokumenten mit vielen Layouts lesen mehrere Modelle dasselbe Dokument mit verschiedenen Einstellungen. Die Antwort ist das, worin sie sich einig sind.',
      s4t: 'Bestätigen',
      s4c: 'Jeder extrahierte Wert wird im Rohtext des Dokuments gesucht. Ein Wert, der dort nicht zu finden ist, verliert Konfidenz.',
      s5t: 'Zuletzt normalisieren',
      s5c: 'Erst am Ende werden Daten, Ländercodes, Postleitzahlen und Namen in ein festes Format gebracht, damit Sie es nie tun müssen.',
      conft: 'Ein Konfidenzwert je Feld',
      hi: '0,95 und höher. Mehrere Methoden waren sich einig und der Wert wurde im Dokumenttext gefunden.',
      mid: 'Um 0,80. Die meisten Methoden waren sich einig. Für die meisten automatisierten Abläufe geeignet.',
      low: '0,60 und darunter. Die Methoden widersprachen sich. Lassen Sie jemanden draufschauen.'
    },
    who: {
      eyebrow: 'Für wen',
      title: 'Berater, Vermittler und Kreditgeber.',
      at: 'Berater und Vermittler',
      ac: 'Einen vollständigen Antrag schneller vorbereiten und schon bei der Aufnahme sehen, welche Dokumente nicht taugen: ein Schwarz-weiß-Pass-Scan, eine Gehaltsabrechnung aus dem falschen Zeitraum, eine nicht unterschriebene Bescheinigung.',
      bt: 'Kreditgeber',
      bc: 'Kontrollen, Prüfung und Annahme mit Feldern unterstützen, die Sie mit dem Antrag abgleichen können, jedes mit einer Konfidenz, auf die Sie Schwellenwerte setzen können.',
      note: 'Die API verarbeitet ein Dokument nach dem anderen und gibt zurück, was dieses Dokument sagt. Der Abgleich von Dokumenten untereinander und mit dem Antrag bleibt in Ihrem Prozess, wo Ihre Geschäftsregeln leben.'
    },
    practical: {
      eyebrow: 'Praktisches',
      title: 'Gebaut, um langweilig zu integrieren.',
      p1: 'Gehostet in der Europäischen Union.',
      p2: 'Ein API-Schlüssel je Kunde, als Header gesendet. Zwei Schlüssel sind jederzeit gültig, sodass eine Schlüsselrotation kein Wartungsfenster braucht.',
      p3: 'Ergebnisse sind nach der Verarbeitung für ein begrenztes Zeitfenster abrufbar und werden dann gelöscht. Das begrenzt, was ein geleakter Schlüssel wert wäre.',
      p4: 'Volumen nach Vereinbarung. Geschäftsbedingungen und ein Service Level Agreement sind auf Anfrage erhältlich.'
    },
    contact: {
      eyebrow: 'Ausprobieren',
      title: 'Möchten Sie es mit Ihren eigenen Dokumenten sehen?',
      copy: 'Schreiben Sie uns. Wir richten einen Schlüssel und die Dokumentation ein, und Sie können noch in derselben Woche Dokumente verarbeiten.'
    },
    footer: { home: 'Smart Backoffice Solutions', fm: 'Food Moments' }
  }
};
