// Mortgage Documents page copy. tools/render-languages.mjs renders it into /mortgage-documents/, /nl/mortgage-documents/ and /de/mortgage-documents/.
window.SBO_COPY = {
  en: {
    meta: {
      title: 'Dutch mortgage document extraction API - Smart Backoffice',
      description: 'API for Dutch payslips, employer declarations, IDs, purchase agreements, appraisal reports, DUO and KVK extracts. Every field has a confidence score.'
    },
    nav: { home: 'Smart Backoffice Solutions', modules: 'Modules', api: 'API', contact: 'Contact', product: 'Mortgage Documents', terms: 'Terms and conditions' },
    termsMeta: {
      title: 'Terms and conditions - Mortgage Documents - Smart Backoffice',
      description: 'Terms and conditions of Smart Backoffice Solutions B.V. for Mortgage Documents, with the data processing agreement. English translation; the Dutch text is binding.'
    },
    hero: {
      eyebrow: 'Mortgage Documents · API',
      title: 'Upload a document. Get structured data back.',
      lead: 'Built for Dutch mortgage documents. The API returns the relevant fields in a consistent format, each with its own confidence score. Seven document types are available.',
      cta: 'Talk to us',
      more: 'See the modules'
    },
    strip: {
      p1a: 'Uploading the PDF.',
      p2cap: 'reads · checks · structures',
      p3a: 'Done. 34 fields, each with a confidence score.',
      p3b: 'Already?',
      p3c: 'Ready.'
    },
    how: {
      eyebrow: 'How it works',
      title: 'A straightforward three-step flow.',
      s1t: 'Upload',
      s1c: 'One call with the document and its type. You get a document ID back immediately.',
      s2t: 'Wait a moment',
      s2c: 'Processing runs in the background. The API takes the time needed to check the result before returning it.',
      s3t: 'Collect',
      s3c: 'Poll with the ID and receive every field as a name, a value and a confidence.',
      codecap: 'Trimmed example. Field names and formats are documented per module.'
    },
    modules: {
      eyebrow: 'Modules',
      title: 'Seven document types, each with its own module.',
      intro: 'The extraction approach varies by document type. Standardised forms use layout-aware models; documents with many layouts are read by several language models and compared. The result has the same simple shape: a flat list of fields.',
      fields: 'fields',
      inLabel: 'What goes in',
      outLabel: 'What comes out',
      checkLabel: 'Worth noticing'
    },
    m1: {
      name: 'Employer declaration', doc: 'Werkgeversverklaring, NHG model', code: 'wgv', count: '76',
      in: 'A scanned or digital employer declaration, filled in by hand or typed.',
      out: 'Employee and employer details, contract type, probation, reorganisation, the full income table, private loans and wage garnishment, the signature block — who signed, where, when, and whether it is signed — and the NHG model number.',
      check: 'The module also performs two visual checks: whether there are strikethroughs or corrections, and whether the form was filled in with more than one ink colour.',
      b1: 'Filled in with a blue pen. Signed with a black one. And something crossed out.',
      b2: 'Two ink colours. One strikethrough. Both flagged.',
      b3: 'You noticed?',
      b4: 'Fields 73 and 74.'
    },
    m2: {
      name: 'Identity document', doc: 'Passport or identity card', code: 'legi', count: '17',
      in: 'A scan of a passport or identity card, front and back.',
      out: 'Name, date and place of birth, nationality as an ISO code, document number, issue and expiry date, issuing authority.',
      check: 'Whether the citizen service number is visible, whether the scan is in colour, for identity cards whether both front and back are included, and for Dutch passports whether the opposite page with the perforated document number is included. The machine-readable zone is verified with its own check digits.',
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
      b2: 'One consistent set of 34 fields.'
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
      intro: 'A model output is a starting point. The checks around it are what make the result useful in a document process.',
      s1t: 'Extract as is',
      s1c: 'Values are taken exactly as they appear in the document. Nothing is interpreted yet.',
      s2t: 'Cross-check',
      s2c: 'Where a document says the same thing twice, both are compared: an amount in digits and in words, a date here and a date there.',
      s3t: 'Vote',
      s3c: 'For documents with many layouts, several models read the same document independently. Agreement between them contributes to confidence.',
      s4t: 'Confirm',
      s4c: 'Every extracted value is searched for in the raw text of the document. A value that cannot be found there loses confidence.',
      s5t: 'Normalise last',
      s5c: 'Only at the end are dates, country codes, postcodes and names brought into a fixed format, giving downstream systems consistent values.',
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
      title: 'A small, predictable API surface.',
      p1: 'Hosted in the European Union.',
      p2: 'One API key per client, sent as a header. Two keys are valid at any time, so a key rotation needs no maintenance window.',
      p3: 'Results can be collected for one hour after processing; after that the API no longer returns them. That limits what a leaked key would be worth.',
      p4: 'Volumes by agreement. A service level agreement is available on request.'
    },
    privacy: {
      eyebrow: 'Privacy and GDPR',
      title: 'Personal data, handled with care.',
      c1t: 'You stay in control',
      c1c: 'You remain the controller and we act as your processor, under a data processing agreement that is part of our terms. Ask us to delete your documents and they are deleted.',
      c2t: 'Only in the EEA',
      c2c: 'Documents are processed and stored in Microsoft Azure data centres within the European Economic Area. Microsoft is our only sub-processor.',
      c3t: 'Less exposed by design',
      c3c: 'API keys are stored only as hashes, each client sees only its own documents, and results can be collected for one hour. For an ID document the API reports whether the citizen service number is visible, never the number itself.',
      c4t: 'Clear agreements',
      c4c: 'Retention, deletion, security measures and data breach notification are set out in writing. We may use documents to improve the service, under strict conditions, and you can opt out with one email.',
      note: 'The terms and the data processing agreement apply to trials too.',
      link: 'Read the terms and data processing agreement'
    },
    contact: {
      eyebrow: 'Try it',
      title: 'Would you like to try it yourself?',
      copy: 'Send us a message. We can provide a key and documentation, and help you run a small test with your own material.',
      terms: 'Our general terms and conditions, including the data processing agreement, apply to every use of Mortgage Documents, trials included. By submitting a document, you accept them on behalf of your organisation.',
      termsLink: 'Read the terms'
    },
    footer: {
      privacy: 'Privacy',
      cookies: 'Cookie settings',
      madeBy: 'Mortgage Documents is made by',
      home: 'Smart Backoffice Solutions B.V.'
    }
  },

  nl: {
    meta: {
      title: 'Hypotheekdocumenten uitlezen via API - Smart Backoffice',
      description: 'API voor loonstroken, werkgeversverklaringen, ID\'s, koopovereenkomsten, taxatierapporten, DUO- en KVK-uittreksels. Elk veld met betrouwbaarheidsscore.'
    },
    nav: { home: 'Smart Backoffice Solutions', modules: 'Modules', api: 'API', contact: 'Contact', product: 'Mortgage Documents', terms: 'Algemene voorwaarden' },
    termsMeta: {
      title: 'Algemene voorwaarden - Mortgage Documents - Smart Backoffice',
      description: 'Algemene voorwaarden van Smart Backoffice Solutions B.V. voor Mortgage Documents, met de verwerkersovereenkomst en bijlagen over persoonsgegevens en beveiliging.'
    },
    hero: {
      eyebrow: 'Mortgage Documents · API',
      title: 'Document uploaden. Gestructureerde data terug.',
      lead: 'Voor Nederlandse hypotheekdocumenten. De API geeft de relevante velden terug in een consistent formaat, elk met een eigen betrouwbaarheidsscore. Er zijn zeven documenttypen beschikbaar.',
      cta: 'Neem contact op',
      more: 'Bekijk de modules'
    },
    strip: {
      p1a: 'Ik upload de pdf.',
      p2cap: 'leest · controleert · structureert',
      p3a: 'Klaar. 34 velden, elk met een betrouwbaarheidsscore.',
      p3b: 'Nu al?',
      p3c: 'Klaar.'
    },
    how: {
      eyebrow: 'Hoe het werkt',
      title: 'Een overzichtelijke flow in drie stappen.',
      s1t: 'Insturen',
      s1c: 'Eén aanroep met het document en het documenttype. U krijgt direct een document-ID terug.',
      s2t: 'Even wachten',
      s2c: 'De verwerking draait op de achtergrond. De API neemt de tijd om het resultaat te controleren voordat het wordt teruggestuurd.',
      s3t: 'Ophalen',
      s3c: 'Vraag het resultaat op met het ID en ontvang ieder veld als naam, waarde en betrouwbaarheid.',
      codecap: 'Ingekort voorbeeld. Veldnamen en formaten zijn per module gedocumenteerd.'
    },
    modules: {
      eyebrow: 'Modules',
      title: 'Zeven documenttypen, elk met een eigen module.',
      intro: 'De manier van uitlezen verschilt per documenttype. Gestandaardiseerde formulieren gebruiken layoutmodellen; documenten met veel opmaakvarianten worden door meerdere taalmodellen gelezen en vergeleken. Het resultaat heeft steeds dezelfde eenvoudige vorm: een platte lijst velden.',
      fields: 'velden',
      inLabel: 'Wat erin gaat',
      outLabel: 'Wat eruit komt',
      checkLabel: 'Het opmerken waard'
    },
    m1: {
      name: 'Werkgeversverklaring', doc: 'NHG-model', code: 'wgv', count: '76',
      in: 'Een gescande of digitale werkgeversverklaring, met de hand ingevuld of getypt.',
      out: 'Gegevens van werknemer en werkgever, aard van het dienstverband, proeftijd, reorganisatie, de volledige inkomenstabel, onderhandse leningen en loonbeslag, het ondertekeningsblok — wie, waar, wanneer en óf er is ondertekend — en het NHG-modelnummer.',
      check: 'De module voert ook twee visuele controles uit: of er doorhalingen of correcties zijn, en of het formulier met meer dan één inktkleur is ingevuld.',
      b1: 'Ingevuld met een blauwe pen. Ondertekend met een zwarte. En iets doorgestreept.',
      b2: 'Twee inktkleuren. Eén doorhaling. Allebei gemarkeerd.',
      b3: 'Dat zag je?',
      b4: 'Veld 73 en 74.'
    },
    m2: {
      name: 'Legitimatie', doc: 'Paspoort of identiteitskaart', code: 'legi', count: '17',
      in: 'Een scan van een paspoort of identiteitskaart, voor- en achterkant.',
      out: 'Naam, geboortedatum en -plaats, nationaliteit als ISO-code, documentnummer, datum van afgifte en geldigheid, instantie van afgifte.',
      check: 'Of het BSN zichtbaar is, of de scan in kleur is, bij identiteitskaarten of voor- en achterkant zijn meegestuurd, en bij Nederlandse paspoorten of de tegenoverliggende pagina met het geperforeerde documentnummer is meegestuurd. De machineleesbare zone wordt met de eigen controlecijfers geverifieerd.',
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
      b2: 'Eén consistente set van 34 velden.'
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
      intro: 'De uitvoer van een model is een beginpunt. De controles eromheen maken het resultaat bruikbaar in een documentproces.',
      s1t: 'Letterlijk uitlezen',
      s1c: 'Waarden worden overgenomen precies zoals ze in het document staan. Er wordt nog niets geïnterpreteerd.',
      s2t: 'Kruiselings controleren',
      s2c: 'Waar een document hetzelfde twee keer zegt, worden beide vergeleken: een bedrag in cijfers en in woorden, een datum hier en een datum daar.',
      s3t: 'Stemmen',
      s3c: 'Bij documenten met veel opmaakvarianten lezen meerdere modellen hetzelfde document onafhankelijk. De mate van overeenstemming telt mee in de betrouwbaarheid.',
      s4t: 'Bevestigen',
      s4c: 'Iedere uitgelezen waarde wordt teruggezocht in de ruwe tekst van het document. Een waarde die daar niet te vinden is, verliest betrouwbaarheid.',
      s5t: 'Als laatste normaliseren',
      s5c: 'Pas aan het eind worden datums, landcodes, postcodes en namen in een vast formaat gezet, zodat vervolgsystemen consistente waarden ontvangen.',
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
      title: 'Een kleine, voorspelbare API.',
      p1: 'Gehost in de Europese Unie.',
      p2: 'Eén API-sleutel per klant, meegestuurd als header. Er zijn altijd twee sleutels geldig, dus een sleutelrotatie vraagt geen onderhoudsvenster.',
      p3: 'Resultaten zijn tot één uur na verwerking op te halen; daarna geeft de API ze niet meer terug. Dat beperkt wat een gelekte sleutel waard zou zijn.',
      p4: 'Volumes in overleg. Een SLA is op aanvraag beschikbaar.'
    },
    privacy: {
      eyebrow: 'Privacy en AVG',
      title: 'Zorgvuldig met persoonsgegevens.',
      c1t: 'U houdt de regie',
      c1c: 'U blijft verwerkingsverantwoordelijke en wij zijn uw verwerker, met een verwerkersovereenkomst die deel uitmaakt van onze voorwaarden. Vraagt u ons uw documenten te verwijderen, dan worden ze verwijderd.',
      c2t: 'Alleen in de EER',
      c2c: 'Documenten worden verwerkt en opgeslagen in datacenters van Microsoft Azure binnen de Europese Economische Ruimte. Microsoft is onze enige sub-verwerker.',
      c3t: 'Minder blootgesteld, by design',
      c3c: 'API-sleutels bewaren we alleen als hash, iedere klant ziet alleen de eigen documenten, en resultaten zijn één uur op te halen. Van een identiteitsbewijs meldt de API of het BSN zichtbaar is, nooit het nummer zelf.',
      c4t: 'Heldere afspraken',
      c4c: 'Bewaartermijnen, verwijdering, beveiligingsmaatregelen en het melden van datalekken zijn schriftelijk vastgelegd. We kunnen documenten onder strikte voorwaarden gebruiken om de dienst te verbeteren; met één e-mail zegt u daar nee tegen.',
      note: 'De voorwaarden en de verwerkersovereenkomst gelden ook bij een proef.',
      link: 'Lees de voorwaarden en de verwerkersovereenkomst'
    },
    contact: {
      eyebrow: 'Probeer het',
      title: 'Wilt u het zelf proberen?',
      copy: 'Stuur ons een bericht. We kunnen een sleutel en documentatie beschikbaar stellen en helpen met een kleine test op eigen materiaal.',
      terms: 'Op ieder gebruik van Mortgage Documents, ook op een proef, zijn onze algemene voorwaarden met de verwerkersovereenkomst van toepassing. Door een document in te sturen aanvaardt u deze namens uw organisatie.',
      termsLink: 'Lees de voorwaarden'
    },
    footer: {
      privacy: 'Privacy',
      cookies: 'Cookie-instellingen',
      madeBy: 'Mortgage Documents wordt gemaakt door',
      home: 'Smart Backoffice Solutions B.V.'
    }
  },

  de: {
    meta: {
      title: 'Hypothekendokumente per API auslesen - Smart Backoffice',
      description: 'API für Gehaltsabrechnungen, Arbeitgeberbescheinigungen, Ausweise, Kaufverträge, Wertgutachten, DUO- und KVK-Auszüge. Jedes Feld mit Konfidenzwert.'
    },
    nav: { home: 'Smart Backoffice Solutions', modules: 'Module', api: 'API', contact: 'Kontakt', product: 'Mortgage Documents', terms: 'AGB' },
    termsMeta: {
      title: 'AGB - Mortgage Documents - Smart Backoffice',
      description: 'AGB der Smart Backoffice Solutions B.V. für Mortgage Documents mit Auftragsverarbeitungsvertrag. Deutsche Übersetzung; verbindlich ist die niederländische Fassung.'
    },
    hero: {
      eyebrow: 'Mortgage Documents · API',
      title: 'Dokument hochladen. Strukturierte Daten erhalten.',
      lead: 'Für niederländische Hypothekendokumente. Die API gibt die relevanten Felder in einem einheitlichen Format zurück, jedes mit eigenem Konfidenzwert. Sieben Dokumenttypen sind verfügbar.',
      cta: 'Kontakt aufnehmen',
      more: 'Die Module ansehen'
    },
    strip: {
      p1a: 'Ich lade das PDF hoch.',
      p2cap: 'liest · prüft · strukturiert',
      p3a: 'Fertig. 34 Felder, jedes mit Konfidenzwert.',
      p3b: 'Schon fertig?',
      p3c: 'Fertig.'
    },
    how: {
      eyebrow: 'So funktioniert es',
      title: 'Ein übersichtlicher Ablauf in drei Schritten.',
      s1t: 'Hochladen',
      s1c: 'Ein Aufruf mit dem Dokument und seinem Typ. Sie erhalten sofort eine Dokument-ID zurück.',
      s2t: 'Kurz warten',
      s2c: 'Die Verarbeitung läuft im Hintergrund. Die API nimmt sich die nötige Zeit, das Ergebnis vor der Rückgabe zu prüfen.',
      s3t: 'Abholen',
      s3c: 'Mit der ID abfragen und jedes Feld als Name, Wert und Konfidenz erhalten.',
      codecap: 'Gekürztes Beispiel. Feldnamen und Formate sind je Modul dokumentiert.'
    },
    modules: {
      eyebrow: 'Module',
      title: 'Sieben Dokumenttypen, jeder mit eigenem Modul.',
      intro: 'Der Extraktionsansatz unterscheidet sich je nach Dokumenttyp. Standardisierte Formulare nutzen Layoutmodelle; Dokumente mit vielen Layoutvarianten werden von mehreren Sprachmodellen gelesen und verglichen. Das Ergebnis hat immer dieselbe einfache Form: eine flache Liste von Feldern.',
      fields: 'Felder',
      inLabel: 'Was hineingeht',
      outLabel: 'Was herauskommt',
      checkLabel: 'Bemerkenswert'
    },
    m1: {
      name: 'Arbeitgeberbescheinigung', doc: 'Werkgeversverklaring, NHG-Modell', code: 'wgv', count: '76',
      in: 'Eine gescannte oder digitale Arbeitgeberbescheinigung, handschriftlich ausgefüllt oder getippt.',
      out: 'Angaben zu Arbeitnehmer und Arbeitgeber, Vertragsart, Probezeit, Umstrukturierung, die vollständige Einkommenstabelle, Privatdarlehen und Lohnpfändung, der Unterschriftenblock — wer, wo, wann und ob unterschrieben wurde — und die NHG-Modellnummer.',
      check: 'Das Modul führt außerdem zwei visuelle Prüfungen durch: ob es Durchstreichungen oder Korrekturen gibt und ob das Formular mit mehr als einer Tintenfarbe ausgefüllt wurde.',
      b1: 'Mit blauem Stift ausgefüllt. Mit schwarzem unterschrieben. Und etwas durchgestrichen.',
      b2: 'Zwei Tintenfarben. Eine Durchstreichung. Beides markiert.',
      b3: 'Das ist dir aufgefallen?',
      b4: 'Feld 73 und 74.'
    },
    m2: {
      name: 'Ausweisdokument', doc: 'Reisepass oder Personalausweis', code: 'legi', count: '17',
      in: 'Ein Scan eines Reisepasses oder Personalausweises, Vorder- und Rückseite.',
      out: 'Name, Geburtsdatum und -ort, Staatsangehörigkeit als ISO-Code, Dokumentnummer, Ausstellungs- und Ablaufdatum, ausstellende Behörde.',
      check: 'Ob die Bürgerservicenummer sichtbar ist, ob der Scan farbig ist, bei Personalausweisen, ob Vorder- und Rückseite enthalten sind, und bei niederländischen Reisepässen, ob die gegenüberliegende Seite mit der perforierten Dokumentnummer enthalten ist. Die maschinenlesbare Zone wird mit ihren eigenen Prüfziffern verifiziert.',
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
      b2: 'Ein einheitlicher Satz von 34 Feldern.'
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
      intro: 'Die Ausgabe eines Modells ist ein Ausgangspunkt. Die Prüfungen darum herum machen das Ergebnis für einen Dokumentprozess brauchbar.',
      s1t: 'Wörtlich extrahieren',
      s1c: 'Werte werden genau so übernommen, wie sie im Dokument stehen. Noch wird nichts interpretiert.',
      s2t: 'Gegenprüfen',
      s2c: 'Wo ein Dokument dasselbe zweimal sagt, werden beide verglichen: ein Betrag in Ziffern und in Worten, ein Datum hier und ein Datum dort.',
      s3t: 'Abstimmen',
      s3c: 'Bei Dokumenten mit vielen Layouts lesen mehrere Modelle dasselbe Dokument unabhängig voneinander. Der Grad ihrer Übereinstimmung fließt in die Konfidenz ein.',
      s4t: 'Bestätigen',
      s4c: 'Jeder extrahierte Wert wird im Rohtext des Dokuments gesucht. Ein Wert, der dort nicht zu finden ist, verliert Konfidenz.',
      s5t: 'Zuletzt normalisieren',
      s5c: 'Erst am Ende werden Daten, Ländercodes, Postleitzahlen und Namen in ein festes Format gebracht, damit nachgelagerte Systeme konsistente Werte erhalten.',
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
      title: 'Eine kleine, vorhersehbare API.',
      p1: 'Gehostet in der Europäischen Union.',
      p2: 'Ein API-Schlüssel je Kunde, als Header gesendet. Zwei Schlüssel sind jederzeit gültig, sodass eine Schlüsselrotation kein Wartungsfenster braucht.',
      p3: 'Ergebnisse sind bis eine Stunde nach der Verarbeitung abrufbar; danach gibt die API sie nicht mehr zurück. Das begrenzt, was ein geleakter Schlüssel wert wäre.',
      p4: 'Volumen nach Vereinbarung. Ein Service Level Agreement ist auf Anfrage erhältlich.'
    },
    privacy: {
      eyebrow: 'Datenschutz und DSGVO',
      title: 'Sorgfältig mit personenbezogenen Daten.',
      c1t: 'Sie behalten die Kontrolle',
      c1c: 'Sie bleiben Verantwortlicher, wir sind Ihr Auftragsverarbeiter, mit einem Auftragsverarbeitungsvertrag als Teil unserer AGB. Bitten Sie uns, Ihre Dokumente zu löschen, werden sie gelöscht.',
      c2t: 'Nur im EWR',
      c2c: 'Dokumente werden in Rechenzentren von Microsoft Azure im Europäischen Wirtschaftsraum verarbeitet und gespeichert. Microsoft ist unser einziger Unterauftragsverarbeiter.',
      c3t: 'Weniger angreifbar durch Design',
      c3c: 'API-Schlüssel speichern wir nur als Hash, jeder Kunde sieht nur seine eigenen Dokumente, und Ergebnisse sind eine Stunde lang abrufbar. Bei einem Ausweis meldet die API, ob die Bürgerservicenummer sichtbar ist, nie die Nummer selbst.',
      c4t: 'Klare Vereinbarungen',
      c4c: 'Aufbewahrung, Löschung, Sicherheitsmaßnahmen und die Meldung von Datenpannen sind schriftlich geregelt. Wir können Dokumente unter strengen Bedingungen zur Verbesserung des Dienstes nutzen; mit einer E-Mail widersprechen Sie.',
      note: 'AGB und Auftragsverarbeitungsvertrag gelten auch bei einer Testnutzung.',
      link: 'AGB und Auftragsverarbeitungsvertrag lesen'
    },
    contact: {
      eyebrow: 'Ausprobieren',
      title: 'Möchten Sie es selbst ausprobieren?',
      copy: 'Schreiben Sie uns. Wir können einen Schlüssel und die Dokumentation bereitstellen und Sie bei einem kleinen Test mit eigenem Material unterstützen.',
      terms: 'Für jede Nutzung von Mortgage Documents, auch zum Test, gelten unsere Allgemeinen Geschäftsbedingungen einschließlich des Auftragsverarbeitungsvertrags. Mit dem Einreichen eines Dokuments akzeptieren Sie diese im Namen Ihrer Organisation.',
      termsLink: 'Zu den AGB'
    },
    footer: {
      privacy: 'Datenschutz',
      cookies: 'Cookie-Einstellungen',
      madeBy: 'Mortgage Documents wird entwickelt von',
      home: 'Smart Backoffice Solutions B.V.'
    }
  }
};
