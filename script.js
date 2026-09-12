// Landing page copy. The mechanism that applies it lives in i18n.js.
// Values inside the readout (names, amounts, confidences) are data and live in the HTML.
window.SBO_COPY = {
  en: {
    nav: { build: 'What we built', expertise: 'What we know', approach: 'Working with us', contact: 'Contact' },
    hero: {
      title: 'AI can do far more than chat. We make it do the work.',
      lead1: 'Most people meet AI as an assistant they talk to. That is the front of it. The work starts when several models are combined, made to check each other, and wired into a process that has to be right.',
      lead2: 'We build those back ends, and the domain knowledge that tells them what right means. Submit a payslip and every field comes back, each one carrying how far it can be trusted.',
      cta: 'Get in touch',
      more: 'See what we built'
    },
    readout: {
      doc: 'payslip.pdf',
      count: '34 fields returned',
      k1: 'Employee', k2: 'Employer', k3: 'Part-time factor', k4: 'Gross salary', k5: 'Net paid', k6: 'Individual choice budget',
      note: 'Every value is searched for in the document text, compared against the other methods that read it, and returned with a confidence. A field the methods disagree on says so.'
    },
    range: {
      line: 'Smart Backoffice Solutions works on Dutch mortgage and banking processes, information extraction from documents, iOS and desktop applications, and on economic, econometric and competition analysis for companies, lawyers and courts. Based in Tilburg, the Netherlands.'
    },
    ends: {
      kicker: 'Why we are called Backoffice',
      title: 'The smart part happens where you don’t see it.',
      copy1: 'The app, the website, the whole software package someone works with is the front end. What it can offer them depends entirely on the back end behind it. The smarter the back end, the more the front end can do and the better the experience for the person using it.',
      copy2: 'In the back end, vision models read documents and photos, language models interpret them, OCR confirms what was read, and checks and domain rules catch what a single model gets wrong. Combine those well and the front end can stay simple: one call, one photo, one question.',
      copy3: 'We build both ends, and the back end is the unusual part. Most developers work on the front end. This company began by building a back office for mortgage documents that could work smarter, and the same combination of domain knowledge, engineering, economics and econometrics has since proved useful well beyond it.',
      frontT: 'Front end',
      frontC: 'The app, the website, the screen in the process. What someone sees and works with.',
      backT: 'Back end',
      backC: 'Models, checks, rules and data working together out of sight. What decides how much the front end can offer, and whether its answers hold up.'
    },
    built: {
      kicker: 'In use today',
      title: 'Two things we built, at opposite ends of the spectrum.',
      intro: 'One is an interface for other software, used inside a regulated process. The other is a consumer app that has to feel effortless. Both are mostly back end.'
    },
    md: {
      role: 'API for Dutch mortgage documents',
      title: 'Mortgage Documents',
      copy1: 'Submit one document and receive every relevant field as structured data, each with its own confidence. Payslips, employer declarations, identity documents, purchase agreements, appraisal reports, DUO statements and Chamber of Commerce extracts.',
      copy2: 'It helps advisers and intermediaries prepare a complete application faster, and supports lenders with controls, assessment and acceptance. Each document type has its own module, because a payslip that looks different at every employer needs different treatment from a standardised form.',
      s1l: 'document types', s2l: 'fields defined across them', s3l: 'call per document',
      link: 'How it works'
    },
    fm: {
      role: 'iPhone app',
      store: 'Coming soon to the App Store',
      title: 'Food Moments',
      copy1: 'Photograph what you eat, say a few words if you like, and see what is in it. It reads like a personal feed rather than a food ledger, which is the whole point: almost no effort in, a lot of understanding out.',
      copy2: 'Underneath it are vision models reading up to ten photos of one meal, speech transcription that streams in while you talk, nutrition labels and barcodes read straight from the shot, and the context of your recent meals so that “my usual shake” resolves to yours. Estimates carry a confidence here too.',
      s1l: 'languages', s2l: 'photos per meal', s3l: 'trackers or ads',
      link: 'About the app'
    },
    know: {
      kicker: 'What we know',
      title: 'Knowing how to build something is not enough.',
      intro: 'It gets much better when you also understand what you are building and why. Domain knowledge is what tells a system what a right answer looks like, and it is what tells us which problem is worth solving at all. Building AI that does real work takes engineering that holds up in production, a serious approach to data, and enough domain knowledge to recognise a wrong answer. Most teams have one of the three.',
      head1: 'What we understand', head2: 'Where it makes the difference',
      a1: 'Econometrics', b1: 'Work where data analysis is involved, and any number that has to survive being checked.',
      a2: 'The mortgage industry, and risk management in banking', b2: 'Anything to do with mortgages: what a document has to prove, and what a lender needs to see before saying yes.',
      a3: 'Competition economics and regulation', b3: 'Compliance, where the rules and the incentives behind them both matter.',
      a4: 'Marketing', b4: 'Front ends that work for the people using them, because we know what they came to do.'
    },
    ai: {
      title: 'AI and back-end engineering',
      copy: 'We build the whole stack, but our strength is the part most developers avoid. Python services, pipelines that run several models and let them check each other, APIs other systems depend on, and the applications in front of them. The interesting problems are rarely in the interface.',
      tags: 'Python and back ends / Document AI and vision / Information extraction / Combining and checking models / APIs / iOS and desktop / Speech transcription'
    },
    econ: {
      title: 'Economics, econometrics and marketing',
      copy: 'Economics is about how people, firms and markets behave and what that means for a decision. We work on credible conclusions from data, and on competition economics: how markets and platforms function, mergers and acquisitions, and the estimation of damages. We support companies, lawyers and courts with analysis that has to survive scrutiny. Marketing expertise sits alongside it, which is what keeps a solution pointed at something a customer actually needs.',
      tags: 'Competition economics / Platform economics / Mergers and acquisitions / Damages estimation / Econometric analysis / Expert witness work / Marketing and customer needs / Compliance, and AI for compliance'
    },
    fin: {
      title: 'Finance, banking and mortgages',
      copy: 'We know the Dutch mortgage chain from advice and application through underwriting, acceptance and servicing, and the lender side with it: risk management, Dutch and European regulation, compliance. That is why our software knows that an employer declaration filled in with two ink colours is worth flagging.',
      tags: 'Mortgage advice and applications / Underwriting and acceptance / Document controls / Credit assessment / Risk management / Regulation and compliance'
    },
    metrics: {
      kicker: 'Where the confidence comes from',
      title: 'An estimate without an interval is an opinion.',
      copy1: 'Econometrics is the data side of economics: the discipline of extracting value from data without fooling yourself about what the data supports. It is the habit of asking how wrong a number could be before acting on it.',
      copy2: 'That habit is also what makes a back end trustworthy. Measure, validate, let several methods read the same document and compare them, confirm each value against the source, and report what could not be confirmed. Solving hard problems with AI turns out, to a surprising degree, to be an econometrics problem.',
      market: 'Economics and marketing shape what gets built in the first place, so that a solution addresses a real need and works in practice. Econometric technique and current AI technology are how we then create value from the data itself.',
      ivcap: 'point estimate and interval',
      chair: 'The Netherlands has a long tradition here, going back to Jan Tinbergen. One of our team members is a full professor in the Department of Econometrics and Operations Research at Tilburg University.'
    },
    start: {
      kicker: 'Working with us',
      title: 'Small team. Short lines. Built around the problem.',
      copy: 'We are based in the Netherlands and work closely with our clients. We do not start from a standard package or a preferred technology; we work out what the problem actually requires and build or analyse exactly that. No more complicated than it needs to be, and no simpler than the problem allows.',
      t1: 'A conversation', c1: 'You describe the problem. We say what we think it really is, what we would build, and what we would not. If we are the wrong firm for it, that is a useful hour for both of us.',
      t2: 'A trial on your own material', c2: 'For document work, we run your documents and show you the fields and the confidences. You see the failure cases, not a demo that was chosen to succeed.',
      t3: 'Into production', c3: 'A key, documentation, and an interface that stays stable. We keep working on the part behind it, which is where the improvements come from.'
    },
    contact: {
      kicker: 'Contact',
      title: 'Tell us what you are working on.',
      copy: 'From mortgage processes and AI to economics, econometrics and compliance: if this combination of expertise could be useful, we would like to hear about it.',
      note: 'Smart Backoffice Solutions B.V. is registered in Tilburg, the Netherlands.'
    },
    footer: { md: 'Mortgage Documents', fm: 'Food Moments' }
  },

  nl: {
    nav: { build: 'Wat we bouwden', expertise: 'Wat we weten', approach: 'Samenwerken', contact: 'Contact' },
    hero: {
      title: 'AI kan veel meer dan chatten. Wij laten het werk doen.',
      lead1: 'De meeste mensen kennen AI als een assistent waarmee je praat. Dat is de voorkant. Het werk begint wanneer meerdere modellen worden gecombineerd, elkaar controleren en worden ingebouwd in een proces dat gewoon moet kloppen.',
      lead2: 'Wij bouwen die back-ends, en de domeinkennis die ze vertelt wat kloppen betekent. Stuur een loonstrook in en ieder veld komt terug, elk met hoever het te vertrouwen is.',
      cta: 'Neem contact op',
      more: 'Wat we bouwden'
    },
    readout: {
      doc: 'loonstrook.pdf',
      count: '34 velden terug',
      k1: 'Werknemer', k2: 'Werkgever', k3: 'Deeltijdfactor', k4: 'Brutosalaris', k5: 'Netto uitbetaald', k6: 'Individueel keuzebudget',
      note: 'Iedere waarde wordt teruggezocht in de tekst van het document, vergeleken met de andere methoden die het lazen, en teruggegeven met een betrouwbaarheid. Een veld waarover de methoden het oneens zijn, zegt dat.'
    },
    range: {
      line: 'Smart Backoffice Solutions werkt aan Nederlandse hypotheek- en bankprocessen, informatie-extractie uit documenten, iOS- en desktoptoepassingen, en aan economische, econometrische en mededingingsanalyse voor bedrijven, advocaten en rechtbanken. Gevestigd in Tilburg.'
    },
    ends: {
      kicker: 'Waarom we Backoffice heten',
      title: 'Het slimme deel gebeurt waar je het niet ziet.',
      copy1: 'De app, de website, het hele softwarepakket waarmee iemand werkt: dat is de front-end. Wat die kan bieden hangt volledig af van de back-end erachter. Hoe slimmer de back-end, hoe meer de front-end kan en hoe beter de ervaring voor degene die ermee werkt.',
      copy2: 'In de back-end lezen vision-modellen documenten en foto’s, interpreteren taalmodellen ze, bevestigt OCR wat er is gelezen, en vangen controles en domeinregels op wat één model verkeerd doet. Combineer dat goed en de front-end kan eenvoudig blijven: één aanroep, één foto, één vraag.',
      copy3: 'We bouwen beide kanten, en de back-end is het ongewone deel. De meeste ontwikkelaars werken aan de front-end. Dit bedrijf begon met een backoffice voor hypotheekdocumenten die slimmer kon, en dezelfde combinatie van domeinkennis, engineering, economie en econometrie bleek daarna ook ver daarbuiten bruikbaar.',
      frontT: 'Front-end',
      frontC: 'De app, de website, het scherm in het proces. Wat iemand ziet en gebruikt.',
      backT: 'Back-end',
      backC: 'Modellen, controles, regels en data die uit het zicht samenwerken. Wat bepaalt hoeveel de front-end kan bieden, en of de antwoorden standhouden.'
    },
    built: {
      kicker: 'Nu in gebruik',
      title: 'Twee dingen die we bouwden, aan weerszijden van het spectrum.',
      intro: 'Het ene is een koppeling voor andere software, gebruikt binnen een gereguleerd proces. Het andere is een consumenten-app die moeiteloos moet aanvoelen. Beide zijn vooral back-end.'
    },
    md: {
      role: 'API voor Nederlandse hypotheekdocumenten',
      title: 'Mortgage Documents',
      copy1: 'Stuur één document in en ontvang ieder relevant veld als gestructureerde data, elk met een eigen betrouwbaarheid. Loonstroken, werkgeversverklaringen, legitimaties, koopovereenkomsten, taxatierapporten, DUO-overzichten en KVK-uittreksels.',
      copy2: 'Het helpt adviseurs en ketens een complete aanvraag sneller voor te bereiden, en ondersteunt geldverstrekkers bij controles, beoordeling en acceptatie. Ieder documenttype heeft een eigen module, omdat een loonstrook die er bij iedere werkgever anders uitziet een andere behandeling nodig heeft dan een gestandaardiseerd formulier.',
      s1l: 'documenttypen', s2l: 'velden gedefinieerd', s3l: 'aanroep per document',
      link: 'Hoe het werkt'
    },
    fm: {
      role: 'iPhone-app',
      store: 'Binnenkort in de App Store',
      title: 'Food Moments',
      copy1: 'Fotografeer wat je eet, zeg er eventueel iets bij, en zie wat erin zit. Het leest als een persoonlijke feed in plaats van een voedingsboekhouding, en dat is precies de bedoeling: bijna geen moeite erin, veel begrip eruit.',
      copy2: 'Daaronder lezen vision-modellen tot tien foto’s van één maaltijd, wordt spraak uitgeschreven terwijl je praat, worden voedingswaardelabels en barcodes rechtstreeks uit de foto gelezen, en zorgt de context van je recente maaltijden dat “mijn gebruikelijke shake” de jouwe is. Ook hier hebben schattingen een betrouwbaarheid.',
      s1l: 'talen', s2l: 'foto’s per maaltijd', s3l: 'trackers of advertenties',
      link: 'Over de app'
    },
    know: {
      kicker: 'Wat we weten',
      title: 'Weten hóé je iets bouwt is niet genoeg.',
      intro: 'Het wordt veel beter als je ook begrijpt wát je bouwt en waarom. Domeinkennis vertelt een systeem hoe een goed antwoord eruitziet, en vertelt ons welk probleem überhaupt de moeite waard is. AI bouwen die echt werk doet vraagt engineering die het in productie volhoudt, een serieuze omgang met data, en genoeg domeinkennis om een fout antwoord te herkennen. De meeste teams hebben er één van de drie.',
      head1: 'Wat we begrijpen', head2: 'Waar het het verschil maakt',
      a1: 'Econometrie', b1: 'Werk waarin data-analyse zit, en ieder getal dat een controle moet doorstaan.',
      a2: 'De hypotheekbranche, en risk management bij banken', b2: 'Alles rond hypotheken: wat een document moet aantonen, en wat een geldverstrekker wil zien voordat hij ja zegt.',
      a3: 'Mededingingseconomie en regelgeving', b3: 'Compliance, waar zowel de regels als de prikkels erachter tellen.',
      a4: 'Marketing', b4: 'Front-ends die werken voor de mensen die ze gebruiken, omdat we weten waarvoor ze kwamen.'
    },
    ai: {
      title: 'AI en back-end engineering',
      copy: 'We bouwen de hele stack, maar onze kracht zit in het deel dat de meeste ontwikkelaars vermijden. Python-services, pipelines die meerdere modellen draaien en elkaar laten controleren, API’s waar andere systemen van afhangen, en de toepassingen ervoor. De interessante problemen zitten zelden in de interface.',
      tags: 'Python en back-ends / Document-AI en vision / Informatie-extractie / Modellen combineren en controleren / API’s / iOS en desktop / Spraaktranscriptie'
    },
    econ: {
      title: 'Economie, econometrie en marketing',
      copy: 'Economie gaat over hoe mensen, bedrijven en markten zich gedragen en wat dat betekent voor een beslissing. We werken aan betrouwbare conclusies uit data, en aan mededingingseconomie: de werking van markten en platforms, fusies en overnames, en het schatten van schade. We ondersteunen bedrijven, advocaten en rechtbanken met analyses die kritiek moeten doorstaan. Marketingexpertise hoort daarbij, en die houdt een oplossing gericht op iets wat een klant werkelijk nodig heeft.',
      tags: 'Mededingingseconomie / Platformeconomie / Fusies en overnames / Schadeberekening / Econometrische analyse / Deskundigenwerk / Marketing en klantbehoefte / Compliance, en AI voor compliance'
    },
    fin: {
      title: 'Financiële sector, banken en hypotheken',
      copy: 'We kennen de Nederlandse hypotheekketen van advies en aanvraag tot acceptatie en beheer, en de bankzijde erbij: risk management, Nederlandse en Europese regelgeving, compliance. Daarom weet onze software dat een werkgeversverklaring die met twee inktkleuren is ingevuld het signaleren waard is.',
      tags: 'Hypotheekadvies en aanvraag / Acceptatie / Documentcontroles / Kredietbeoordeling / Risk management / Regelgeving en compliance'
    },
    metrics: {
      kicker: 'Waar de betrouwbaarheid vandaan komt',
      title: 'Een schatting zonder interval is een mening.',
      copy1: 'Econometrie is de datakant van de economie: de discipline om waarde uit data te halen zonder jezelf voor de gek te houden over wat die data onderbouwt. Het is de gewoonte om te vragen hoe fout een getal kan zijn voordat je ernaar handelt.',
      copy2: 'Diezelfde gewoonte maakt een back-end betrouwbaar. Meten, valideren, meerdere methoden hetzelfde document laten lezen en vergelijken, iedere waarde bevestigen in de bron, en melden wat niet bevestigd kon worden. Moeilijke problemen oplossen met AI blijkt in verrassende mate een econometrisch probleem.',
      market: 'Economie en marketing bepalen allereerst wát er gebouwd wordt, zodat een oplossing aansluit bij een echte behoefte en in de praktijk werkt. Econometrische technieken en de nieuwste AI-technologie zijn vervolgens hoe we waarde creëren uit de data zelf.',
      ivcap: 'puntschatting en interval',
      chair: 'Nederland heeft hierin een lange traditie, die teruggaat tot Jan Tinbergen. Een van onze teamleden is hoogleraar bij het departement Econometrie en Operations Research van Tilburg University.'
    },
    start: {
      kicker: 'Samenwerken',
      title: 'Klein team. Korte lijnen. Het vraagstuk staat centraal.',
      copy: 'We zijn gevestigd in Nederland en werken nauw met onze klanten samen. We beginnen niet met een standaardpakket of een favoriete technologie; we bepalen wat het vraagstuk werkelijk vraagt en bouwen of analyseren precies dat. Niet ingewikkelder dan nodig, en niet eenvoudiger dan het probleem toelaat.',
      t1: 'Een gesprek', c1: 'U beschrijft het vraagstuk. Wij zeggen wat het volgens ons werkelijk is, wat we zouden bouwen en wat niet. Als wij het verkeerde bureau zijn, is dat voor allebei een nuttig uur.',
      t2: 'Een proef op uw eigen materiaal', c2: 'Bij documentwerk draaien we uw documenten en laten we de velden en de betrouwbaarheden zien. U ziet de gevallen die misgaan, niet een demo die is uitgekozen om te slagen.',
      t3: 'Naar productie', c3: 'Een sleutel, documentatie en een koppeling die stabiel blijft. Wij blijven werken aan het deel erachter, want daar komen de verbeteringen vandaan.'
    },
    contact: {
      kicker: 'Contact',
      title: 'Vertel ons waar u aan werkt.',
      copy: 'Van hypotheekprocessen en AI tot economie, econometrie en compliance: als deze combinatie van expertise nuttig kan zijn, horen we er graag over.',
      note: 'Smart Backoffice Solutions B.V. is gevestigd in Tilburg.'
    },
    footer: { md: 'Mortgage Documents', fm: 'Food Moments' }
  },

  de: {
    nav: { build: 'Was wir gebaut haben', expertise: 'Was wir können', approach: 'Zusammenarbeit', contact: 'Kontakt' },
    hero: {
      title: 'KI kann weit mehr als chatten. Wir lassen sie arbeiten.',
      lead1: 'Die meisten kennen KI als Assistenten, mit dem man spricht. Das ist die Vorderseite. Die Arbeit beginnt, wenn mehrere Modelle kombiniert werden, sich gegenseitig prüfen und in einen Prozess eingebaut sind, der stimmen muss.',
      lead2: 'Wir bauen diese Back-ends und das Fachwissen, das ihnen sagt, was stimmen bedeutet. Reichen Sie eine Gehaltsabrechnung ein, und jedes Feld kommt zurück, jeweils mit dem Grad an Vertrauen, den es verdient.',
      cta: 'Kontakt aufnehmen',
      more: 'Was wir gebaut haben'
    },
    readout: {
      doc: 'gehaltsabrechnung.pdf',
      count: '34 Felder zurück',
      k1: 'Arbeitnehmer', k2: 'Arbeitgeber', k3: 'Teilzeitfaktor', k4: 'Bruttogehalt', k5: 'Nettoauszahlung', k6: 'Wahlbudget',
      note: 'Jeder Wert wird im Dokumenttext gesucht, mit den anderen Methoden verglichen, die ihn gelesen haben, und mit einer Konfidenz zurückgegeben. Ein Feld, über das die Methoden uneins sind, sagt das.'
    },
    range: {
      line: 'Smart Backoffice Solutions arbeitet an niederländischen Hypotheken- und Bankprozessen, an Informationsextraktion aus Dokumenten, an iOS- und Desktop-Anwendungen sowie an ökonomischer, ökonometrischer und wettbewerbsrechtlicher Analyse für Unternehmen, Anwälte und Gerichte. Sitz in Tilburg, Niederlande.'
    },
    ends: {
      kicker: 'Warum wir Backoffice heißen',
      title: 'Der kluge Teil passiert dort, wo man ihn nicht sieht.',
      copy1: 'Die App, die Website, das ganze Softwarepaket, mit dem jemand arbeitet: das ist das Front-end. Was es bieten kann, hängt vollständig vom Back-end dahinter ab. Je klüger das Back-end, desto mehr kann das Front-end und desto besser die Erfahrung für den Menschen davor.',
      copy2: 'Im Back-end lesen Vision-Modelle Dokumente und Fotos, Sprachmodelle interpretieren sie, OCR bestätigt das Gelesene, und Prüfungen und Fachregeln fangen auf, was ein einzelnes Modell falsch macht. Kombiniert man das gut, kann das Front-end einfach bleiben: ein Aufruf, ein Foto, eine Frage.',
      copy3: 'Wir bauen beide Seiten, und das Back-end ist der ungewöhnliche Teil. Die meisten Entwickler arbeiten am Front-end. Dieses Unternehmen begann mit einem Backoffice für Hypothekendokumente, das intelligenter arbeiten konnte, und dieselbe Kombination aus Fachwissen, Engineering, Ökonomie und Ökonometrie erwies sich danach auch weit darüber hinaus als nützlich.',
      frontT: 'Front-end',
      frontC: 'Die App, die Website, der Bildschirm im Prozess. Was jemand sieht und bedient.',
      backT: 'Back-end',
      backC: 'Modelle, Prüfungen, Regeln und Daten, die im Verborgenen zusammenarbeiten. Was bestimmt, wie viel das Front-end bieten kann und ob seine Antworten halten.'
    },
    built: {
      kicker: 'Heute im Einsatz',
      title: 'Zwei Dinge, die wir gebaut haben, an entgegengesetzten Enden.',
      intro: 'Das eine ist eine Schnittstelle für andere Software, eingesetzt in einem regulierten Prozess. Das andere ist eine Verbraucher-App, die sich mühelos anfühlen muss. Beide sind überwiegend Back-end.'
    },
    md: {
      role: 'API für niederländische Hypothekendokumente',
      title: 'Mortgage Documents',
      copy1: 'Ein Dokument einreichen und jedes relevante Feld als strukturierte Daten zurückerhalten, jeweils mit eigener Konfidenz. Gehaltsabrechnungen, Arbeitgeberbescheinigungen, Ausweise, Kaufverträge, Wertgutachten, DUO-Übersichten und Handelsregisterauszüge.',
      copy2: 'Es hilft Beratern und Vermittlern, einen vollständigen Antrag schneller vorzubereiten, und unterstützt Kreditgeber bei Kontrollen, Prüfung und Annahme. Jeder Dokumenttyp hat ein eigenes Modul, denn eine Gehaltsabrechnung, die bei jedem Arbeitgeber anders aussieht, braucht eine andere Behandlung als ein standardisiertes Formular.',
      s1l: 'Dokumenttypen', s2l: 'definierte Felder', s3l: 'Aufruf pro Dokument',
      link: 'So funktioniert es'
    },
    fm: {
      role: 'iPhone-App',
      store: 'Bald im App Store',
      title: 'Food Moments',
      copy1: 'Fotografieren Sie, was Sie essen, sagen Sie ein paar Worte dazu, und sehen Sie, was drin ist. Es liest sich wie ein persönlicher Feed statt wie eine Ernährungsbuchhaltung, und genau darum geht es: fast keine Mühe hinein, viel Verständnis heraus.',
      copy2: 'Darunter lesen Vision-Modelle bis zu zehn Fotos einer Mahlzeit, Sprache wird transkribiert, während man spricht, Nährwertetiketten und Barcodes werden direkt aus der Aufnahme gelesen, und der Kontext der letzten Mahlzeiten sorgt dafür, dass „mein üblicher Shake“ Ihrer ist. Auch hier tragen Schätzungen eine Konfidenz.',
      s1l: 'Sprachen', s2l: 'Fotos pro Mahlzeit', s3l: 'Tracker oder Werbung',
      link: 'Über die App'
    },
    know: {
      kicker: 'Was wir können',
      title: 'Zu wissen, wie man etwas baut, reicht nicht.',
      intro: 'Es wird deutlich besser, wenn man auch versteht, was man baut und warum. Fachwissen sagt einem System, wie eine richtige Antwort aussieht, und es sagt uns, welches Problem überhaupt lohnt. KI zu bauen, die echte Arbeit leistet, braucht Engineering, das im Betrieb hält, einen ernsthaften Umgang mit Daten und genug Fachwissen, um eine falsche Antwort zu erkennen. Die meisten Teams haben eines der drei.',
      head1: 'Was wir verstehen', head2: 'Wo es den Unterschied macht',
      a1: 'Ökonometrie', b1: 'Arbeit, in der Datenanalyse steckt, und jede Zahl, die einer Prüfung standhalten muss.',
      a2: 'Die Hypothekenbranche und Risikomanagement in Banken', b2: 'Alles rund um Hypotheken: was ein Dokument belegen muss und was ein Kreditgeber sehen will, bevor er zustimmt.',
      a3: 'Wettbewerbsökonomie und Regulierung', b3: 'Compliance, wo sowohl die Regeln als auch die Anreize dahinter zählen.',
      a4: 'Marketing', b4: 'Front-ends, die für die Menschen funktionieren, die sie benutzen, weil wir wissen, weswegen sie gekommen sind.'
    },
    ai: {
      title: 'KI und Back-end-Engineering',
      copy: 'Wir bauen den gesamten Stack, aber unsere Stärke liegt in dem Teil, den die meisten Entwickler meiden. Python-Services, Pipelines, die mehrere Modelle laufen lassen und sich gegenseitig prüfen, APIs, von denen andere Systeme abhängen, und die Anwendungen davor. Die interessanten Probleme liegen selten in der Oberfläche.',
      tags: 'Python und Back-ends / Dokumenten-KI und Vision / Informationsextraktion / Modelle kombinieren und prüfen / APIs / iOS und Desktop / Sprachtranskription'
    },
    econ: {
      title: 'Ökonomie, Ökonometrie und Marketing',
      copy: 'Ökonomie handelt davon, wie sich Menschen, Unternehmen und Märkte verhalten und was das für eine Entscheidung bedeutet. Wir arbeiten an belastbaren Schlussfolgerungen aus Daten und an Wettbewerbsökonomie: wie Märkte und Plattformen funktionieren, Fusionen und Übernahmen und die Schätzung von Schäden. Wir unterstützen Unternehmen, Anwälte und Gerichte mit Analysen, die einer Prüfung standhalten müssen. Marketing-Expertise gehört dazu und hält eine Lösung auf das gerichtet, was ein Kunde tatsächlich braucht.',
      tags: 'Wettbewerbsökonomie / Plattformökonomie / Fusionen und Übernahmen / Schadensschätzung / Ökonometrische Analyse / Sachverständigentätigkeit / Marketing und Kundenbedürfnisse / Compliance, und KI für Compliance'
    },
    fin: {
      title: 'Finanzen, Banken und Hypotheken',
      copy: 'Wir kennen die niederländische Hypothekenkette von Beratung und Antrag bis zu Annahme und Verwaltung, und die Bankseite dazu: Risikomanagement, niederländische und europäische Regulierung, Compliance. Deshalb weiß unsere Software, dass eine Arbeitgeberbescheinigung, die mit zwei Tintenfarben ausgefüllt wurde, eine Markierung wert ist.',
      tags: 'Hypothekenberatung und Antrag / Kreditprüfung / Dokumentkontrollen / Bonitätsbeurteilung / Risikomanagement / Regulierung und Compliance'
    },
    metrics: {
      kicker: 'Woher die Konfidenz kommt',
      title: 'Eine Schätzung ohne Intervall ist eine Meinung.',
      copy1: 'Ökonometrie ist die Datenseite der Ökonomie: die Disziplin, Wert aus Daten zu gewinnen, ohne sich darüber zu täuschen, was diese Daten belegen. Es ist die Gewohnheit zu fragen, wie falsch eine Zahl sein kann, bevor man danach handelt.',
      copy2: 'Dieselbe Gewohnheit macht ein Back-end vertrauenswürdig. Messen, validieren, mehrere Methoden dasselbe Dokument lesen lassen und vergleichen, jeden Wert an der Quelle bestätigen und melden, was sich nicht bestätigen ließ. Schwierige Probleme mit KI zu lösen ist in überraschendem Maß ein ökonometrisches Problem.',
      market: 'Ökonomie und Marketing bestimmen zuerst, was überhaupt gebaut wird, damit eine Lösung einem echten Bedürfnis entspricht und in der Praxis funktioniert. Ökonometrische Technik und aktuelle KI-Technologie sind dann der Weg, auf dem wir aus den Daten selbst Wert schaffen.',
      ivcap: 'Punktschätzung und Intervall',
      chair: 'Die Niederlande haben hier eine lange Tradition, die bis auf Jan Tinbergen zurückgeht. Eines unserer Teammitglieder ist ordentlicher Professor am Department of Econometrics and Operations Research der Tilburg University.'
    },
    start: {
      kicker: 'Zusammenarbeit',
      title: 'Kleines Team. Kurze Wege. Das Problem steht im Mittelpunkt.',
      copy: 'Wir sind in den Niederlanden ansässig und arbeiten eng mit unseren Kunden zusammen. Wir beginnen weder mit einem Standardpaket noch mit einer bevorzugten Technologie; wir bestimmen, was das Problem tatsächlich erfordert, und bauen oder analysieren genau das. Nicht komplizierter als nötig und nicht einfacher, als das Problem erlaubt.',
      t1: 'Ein Gespräch', c1: 'Sie beschreiben das Problem. Wir sagen, was es unserer Ansicht nach wirklich ist, was wir bauen würden und was nicht. Sind wir die falsche Firma dafür, war die Stunde für beide nützlich.',
      t2: 'Ein Test mit Ihrem eigenen Material', c2: 'Bei Dokumentarbeit lassen wir Ihre Dokumente laufen und zeigen Ihnen die Felder und die Konfidenzen. Sie sehen die Fälle, die schiefgehen, nicht eine Demo, die zum Gelingen ausgewählt wurde.',
      t3: 'In den Betrieb', c3: 'Ein Schlüssel, Dokumentation und eine Schnittstelle, die stabil bleibt. Wir arbeiten weiter an dem Teil dahinter, denn dort entstehen die Verbesserungen.'
    },
    contact: {
      kicker: 'Kontakt',
      title: 'Erzählen Sie uns, woran Sie arbeiten.',
      copy: 'Von Hypothekenprozessen und KI bis zu Ökonomie, Ökonometrie und Compliance: Wenn diese Kombination von Expertise nützlich sein könnte, hören wir gern davon.',
      note: 'Smart Backoffice Solutions B.V. hat ihren Sitz in Tilburg, Niederlande.'
    },
    footer: { md: 'Mortgage Documents', fm: 'Food Moments' }
  }
};
