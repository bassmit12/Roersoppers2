/**
 * Fills an empty database with the content of the original Roersoppers site.
 *
 *   npm run seed        # only runs when there are no pages yet
 *   npm run seed:fresh  # deletes pages, groups, trainings and media first
 */
import { convertMarkdownToLexical, editorConfigFactory } from '@payloadcms/richtext-lexical'
import path from 'path'
import { type CollectionSlug, getPayload } from 'payload'
import { fileURLToPath } from 'url'

import config from '../payload.config'
import type { Page, SwimGroup } from '../payload-types'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const assetsDir = path.resolve(dirname, '../../seed/assets')
// A fresh object per call: Payload plugins keep per-request state on `context`
const context = () => ({ disableRevalidate: true })

const payload = await getPayload({ config })
const force = process.env.SEED_FORCE === 'true'

const { totalDocs } = await payload.count({ collection: 'pages' })
if (totalDocs > 0 && !force) {
  payload.logger.info(
    'Database already has content, skipping seed. Use `npm run seed:fresh` to reseed.',
  )
  process.exit(0)
}

if (force) {
  // The homepage's photo lists require an image, so they must let go of the
  // media before it can be deleted. They are filled again further down.
  const home = await payload.findGlobal({ slug: 'home', depth: 0 })
  if (home.hero?.title) {
    await payload.updateGlobal({
      slug: 'home',
      data: {
        hero: { video: null },
        about: { photos: [] },
        groups: { items: [] },
        pool: { photos: [] },
        events: { fallbackPosts: [] },
      },
      context: context(),
    })
  }

  const slugs: CollectionSlug[] = ['pages', 'training-sessions', 'swim-groups', 'media']
  for (const collection of slugs) {
    // Bulk deletes work in batches, so repeat until the collection is empty
    let remaining = (await payload.count({ collection })).totalDocs
    while (remaining > 0) {
      const { errors } = await payload.delete({
        collection,
        where: { id: { exists: true } },
        context: context(),
      })
      const left = (await payload.count({ collection })).totalDocs
      if (left >= remaining) {
        throw new Error(`Could not delete ${collection}: ${errors[0]?.message ?? 'unknown error'}`)
      }
      remaining = left
    }
  }
}

const editorConfig = await editorConfigFactory.default({ config: payload.config })
const md = (markdown: string) =>
  convertMarkdownToLexical({ editorConfig, markdown: markdown.trim() }) as never

// ---------------------------------------------------------------- media

const mediaFiles: Record<string, string> = {
  'hero_video2.mp4': 'Zwemmers in het zwembad van De Roersoppers',
  'KoenGeeftTraining.jpeg': 'Koen geeft les aan de jongste zwemmers',
  'training.jpg': 'Training bij De Roersoppers',
  'junioren.jpg': 'Jeugdzwemmers van De Roersoppers',
  'wedstrijdploeg.jpg': 'De wedstrijdploeg van De Roersoppers',
  'masters.jpg': 'Masterszwemmers van De Roersoppers',
  'zwembad_buiten.jpg': 'Het zwembadgebouw van buiten',
  'zwemmer_zwembad.jpg': 'Zwemmer in het binnenzwembad',
  'Wedstrijd.jpg': 'Zwemwedstrijd',
  'senioren.jpg': 'Seniorenzwemmers tijdens de competitie',
  'Jeugd_Wedstrijd_AI.png': 'Jeugd Wedstrijd',
  'Jeugd_Recreatief_Flippers.jpeg': 'Jeugd Recreatief',
  'jongeren_wedstrijd_2.jpg': 'Selectie',
  'slippers.jpg': 'Wedstrijdmasters',
  'Masters1.jpg': 'Masters 1',
  'masters_2.png': 'Masters 2',
  'jongeren_recreatief.jpg': 'Volwassene zwemt borstcrawl in het zwembad',
  'aanmeldingsformulier-roersoppers.pdf': 'Aanmeldingsformulier De Roersoppers',
  'privacy-policy-roersoppers.pdf': 'Privacybeleid De Roersoppers',
}

const media: Record<string, number> = {}
for (const [file, alt] of Object.entries(mediaFiles)) {
  const doc = await payload.create({
    collection: 'media',
    data: { alt },
    filePath: path.join(assetsDir, file),
    context: context(),
  })
  media[file] = doc.id
  payload.logger.info(`Uploaded ${file}`)
}

// ---------------------------------------------------------- swim groups

const swimGroups: Omit<SwimGroup, 'id' | 'order' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'Jeugd Wedstrijd',
    image: media['Jeugd_Wedstrijd_AI.png'],
    accent: 'blue-cyan',
    description:
      'Heb jij je A-diploma op zak en wil je verder leren zwemmen? Dan is onze jeugdgroep perfect voor jou! Onze enthousiaste trainers leren je nieuwe zwemtechnieken en helpen je steeds beter te worden. Je zwemt met kinderen van jouw niveau en leeftijd, zodat je altijd goed kunt meedoen. Serieuze trainingen worden afgewisseld met spel en plezier, en wedstrijden zijn precies uitdagend genoeg voor jou!',
  },
  {
    title: 'Jeugd Recreatief',
    image: media['Jeugd_Recreatief_Flippers.jpeg'],
    accent: 'cyan-teal',
    description:
      'Heb jij je A-diploma op zak en wil je vooral plezier beleven in het water? Dan is onze recreatieve jeugdgroep precies wat je zoekt! Onze enthousiaste trainers helpen je om nieuwe zwemtechnieken onder de knie te krijgen, maar richten zich vooral op plezier en samenspel met leeftijdsgenootjes. Je traint op je eigen tempo, zonder de druk van wedstrijden. Wil je toch een keertje ervaren hoe het is om een echte zwemwedstrijd te zwemmen? Dat kan! Maar als je liever gewoon traint en lol maakt, ben je net zo welkom. Bij ons staat genieten van het zwemmen altijd voorop!',
  },
  {
    title: 'Selectie',
    image: media['jongeren_wedstrijd_2.jpg'],
    accent: 'yellow-orange',
    description:
      'Heb jij een passie voor zwemmen en wil je jezelf écht uitdagen? Sluit je dan aan bij dit team, waar je traint op techniek, snelheid en conditie, met als doel deel te nemen aan wedstrijden. Als lid van De Roersoppers vertegenwoordig je ons in de districtscompetitie, kampioenschappen en invitatiewedstrijden.',
    details:
      "Onze trainingen zijn afgestemd op het wedstrijdschema en bestaan uit techniek-, duur- en sprinttrainingen. Elk seizoen zwem je zo'n 10 tot 12 wedstrijden, waarbij de competitiewedstrijden het absolute hoogtepunt vormen. Samen gaan we voor de beste prestaties!",
  },
  {
    title: 'Wedstrijdmasters',
    image: media['slippers.jpg'],
    accent: 'purple-pink',
    description:
      'Ook op latere leeftijd kun je nog fanatiek blijven zwemmen. De Wedstrijdmasters doen mee aan speciale zwemwedstrijden waarin leeftijdscategorieën per vijf jaar oplopen. Iedereen die fit genoeg is kan meedoen. Er is een enthousiaste groep die écht voor de prestaties gaat. Zij trainen met de selectie mee om hun techniek en snelheid te blijven ontwikkelen.',
  },
  {
    title: 'Masters 1',
    image: media['Masters1.jpg'],
    accent: 'blue-indigo',
    description:
      'Wil je je conditie op peil houden, genieten van een fijne training en géén wedstrijden zwemmen? Dan is Masters 1 iets voor jou! Hier zwem je in een baan die past bij jouw niveau. Ben je een oud-wedstrijdzwemmer en zijn alle zwemtechnieken bekend, dan zwem je in baan 1 of 2. Wil je je zwemtechniek verbeteren of eindelijk eens goed leren de borstcrawl te zwemmen, dan hoor je thuis in baan 3 of 4. Af en toe een baantje overslaan om uit te puffen is geen probleem. Plezier en beweging staan centraal, maar vergis je niet: er wordt hier serieus getraind!',
  },
  {
    title: 'Masters 2',
    image: media['masters_2.png'],
    accent: 'rose-red',
    description:
      "Zwemmen is een gezonde sport ook al ben je een jaartje ouder. In deze groep wordt er niet alleen flink gezwommen, maar ook veel gelachen. De banen zijn verdeeld op niveau, zodat iedereen in zijn eigen tempo kan trainen. En ja, de kaakspieren krijgen hier net zo'n goede workout als de arm- en beenspieren – gezelligheid gegarandeerd!",
    details: '(Het zwemtempo ligt iets lager dan bij Masters 1).',
  },
]

const groups: Record<string, number> = {}
for (const [order, group] of swimGroups.entries()) {
  const doc = await payload.create({
    collection: 'swim-groups',
    data: { ...group, order },
    context: context(),
  })
  groups[group.title] = doc.id
}

// ------------------------------------------------------------ trainings

const selectie = [groups['Selectie'], groups['Wedstrijdmasters']]
const jeugd = [groups['Jeugd Recreatief'], groups['Jeugd Wedstrijd']]

const trainings = [
  { day: 'monday', startTime: '18:30', endTime: '20:00', groups: selectie },
  { day: 'tuesday', startTime: '18:30', endTime: '19:30', groups: jeugd },
  { day: 'tuesday', startTime: '19:30', endTime: '20:30', groups: [groups['Masters 1']] },
  { day: 'wednesday', startTime: '18:30', endTime: '20:00', groups: selectie },
  { day: 'thursday', startTime: '18:30', endTime: '19:30', groups: jeugd },
  { day: 'thursday', startTime: '19:30', endTime: '20:30', groups: selectie },
  { day: 'thursday', startTime: '20:30', endTime: '21:30', groups: [groups['Masters 1']] },
  { day: 'thursday', startTime: '21:30', endTime: '22:15', groups: [groups['Masters 2']] },
  {
    day: 'saturday',
    startTime: '08:00',
    endTime: '09:00',
    groups: [groups['Selectie'], groups['Masters 1']],
  },
  { day: 'saturday', startTime: '12:00', endTime: '13:15', groups: jeugd },
] as const

for (const training of trainings) {
  await payload.create({
    collection: 'training-sessions',
    data: { ...training, groups: [...training.groups] },
    context: context(),
  })
}

// ---------------------------------------------------------------- pages

type PageData = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>
type Layout = NonNullable<Page['layout']>
type Content = NonNullable<Extract<Layout[number], { blockType: 'card' }>['content']>

const card = (
  title: string | null,
  icon: string | null,
  headerStyle: 'blue' | 'cyan' | 'teal',
  content: Content,
): Layout[number] => ({ blockType: 'card', title, icon: icon as never, headerStyle, content })

const text = (markdown: string, listStyle: 'bullet' | 'check' = 'bullet'): Content[number] => ({
  blockType: 'richText',
  content: md(markdown),
  listStyle,
  width: 'full',
})

const callout = (
  variant: 'blue' | 'cyan' | 'soft' | 'amber' | 'white' | 'slate' | 'solid' | 'tile' | 'note',
  markdown: string,
  options: {
    title?: string
    icon?: string
    width?: 'full' | 'half' | 'third'
    listStyle?: 'bullet' | 'check'
    align?: 'left' | 'center'
  } = {},
): Content[number] => ({
  blockType: 'callout',
  variant,
  content: md(markdown),
  title: options.title,
  icon: options.icon as never,
  width: options.width ?? 'full',
  listStyle: options.listStyle ?? 'bullet',
  align: options.align ?? 'left',
})

const table = (
  variant: 'blue' | 'cyan' | 'teal',
  columns: string[],
  rows: { value: string; colSpan?: number; emphasis?: boolean }[][],
  options: {
    title?: string
    titleNote?: string
    icon?: string
    style?: 'bordered' | 'lines'
  } = {},
): Content[number] => ({
  blockType: 'table',
  variant,
  title: options.title,
  titleNote: options.titleNote,
  icon: options.icon as never,
  style: options.style ?? 'bordered',
  width: 'full',
  columns: columns.map((label) => ({ label })),
  rows: rows.map((cells) => ({ cells })),
})

const cta = (title: string, url: string, icon?: string): Layout[number] => ({
  blockType: 'cta',
  title,
  text: 'Neem gerust contact op. We helpen je graag verder!',
  link: { label: 'Contact opnemen', url, icon: icon as never },
})

const pages: PageData[] = [
  {
    title: 'Zwemgroepen',
    slug: 'zwemgroepen',
    hero: {
      icon: 'waves',
      titleLead: 'Onze',
      title: 'Zwemgroepen',
      subtitle: 'Voor elk niveau en elke leeftijd de perfecte zwemgroep',
    },
    layout: [{ blockType: 'swimGroups' }],
  },
  {
    title: 'Trainingsschema',
    slug: 'trainingsschema',
    hero: {
      icon: 'calendar',
      titleLead: 'Ons',
      title: 'Trainingsschema',
      subtitle: 'Bekijk hier ons wekelijks trainingsschema voor alle zwemgroepen',
    },
    layout: [
      { blockType: 'trainingSchedule', title: 'Weekoverzicht' },
      {
        blockType: 'infoPanel',
        content: md(
          'We zijn een startgemeenschap en daarom zijn er ook trainingsmogelijkheden bij  \n**zv-patrick** in Echt',
        ),
        link: { label: 'Bezoek zv-patrick.nl', url: 'https://www.zv-patrick.nl' },
      },
    ],
  },
  {
    title: 'Over ons',
    slug: 'informatie/over-ons',
    hero: {
      icon: 'heart',
      title: 'Over De Roersoppers',
      subtitle: 'Plezier, prestatie en verbondenheid sinds 1970',
    },
    layout: [
      card('Onze Vereniging', 'heart', 'blue', [
        text(
          'Sinds 1970 is Zwemvereniging De Roersoppers een bruisende zwemvereniging in Roerdalen waar plezier, prestatie en verbondenheid samenkomen. We zijn trots op onze hechte clubcultuur en zetten ons met hart en ziel in voor jong en oud, recreatief én in wedstrijdverband.',
        ),
      ]),
      card('Vrijwilligers maken het verschil', 'users', 'cyan', [
        text(
          'Onze vereniging draait op de kracht van vrijwilligers. Van activiteitenbegeleiders tot juryleden bij wedstrijden. Jouw inzet maakt écht verschil. Wil je iets betekenen? Spreek ons gerust aan bij het zwembad of stuur een mailtje. We kunnen je hulp goed gebruiken!',
        ),
        callout('blue', '[voorzitter@roersoppers.nl](mailto:voorzitter@roersoppers.nl)', {
          icon: 'mail',
        }),
      ]),
      card('Bestuur', 'briefcase', 'teal', [
        text('Een betrokken team dat zorgt voor organisatie, ontwikkeling en toekomstvisie:'),
        table(
          'teal',
          ['Naam', 'Functie', 'E-mail'],
          [
            [
              { value: 'Charles Bos', emphasis: true },
              { value: 'Voorzitter' },
              { value: 'voorzitter@roersoppers.nl\ninfo@roersoppers.nl' },
            ],
            [
              { value: 'Koen Wijnands', emphasis: true },
              { value: 'TC-zaken & Trainerszaken' },
              { value: 'tc@roersoppers.nl\ntrainers@roersoppers.nl' },
            ],
            [
              { value: 'Joep Thewissen', emphasis: true },
              { value: 'Penningmeester' },
              { value: 'penningmeester@roersoppers.nl' },
            ],
            [
              { value: 'Jeroen Meuleners', emphasis: true },
              { value: 'Algemeen lid & secretaris' },
              { value: 'secretaris@roersoppers.nl' },
            ],
            [
              { value: 'Saskia Ramakers', emphasis: true },
              { value: 'Algemeen lid & PR-zaken' },
              { value: 'pr@roersoppers.nl' },
            ],
            [
              { value: 'Boekhouding & Ledenadministratie', emphasis: true, colSpan: 2 },
              { value: 'admin@roersoppers.nl' },
            ],
          ],
        ),
      ]),
      card('Onze Trainers', 'users', 'blue', [
        text(`
### Deskundig, Enthousiast en Betrokken

Bij De Roersoppers draait training om meer dan alleen techniek. Onze trainers begeleiden zwemmers op ieder niveau met persoonlijke aandacht, creativiteit en plezier. Of je nu net begint of traint voor een persoonlijk record, wij zorgen dat je blijft groeien én genieten.
`),
        {
          blockType: 'nameGrid',
          title: 'Ons trainersteam bestaat uit:',
          width: 'full',
          names: [
            'Charles Bos',
            'Arno Schrauwen',
            'Ernest Smit',
            'Koen Wijnands',
            'Senna Bongartz',
            'Mike Jansen',
            'Marco Moers',
            'René Zenden',
            'Loes Slebe',
            'Jeroen Meuleners',
            'Jules Gribling',
            'Max Martens',
          ].map((name) => ({ name })),
        },
        callout('cyan', '[trainers@roersoppers.nl](mailto:trainers@roersoppers.nl)', {
          title: 'Vragen aan één van onze trainers?',
          icon: 'mail',
        }),
      ]),
      {
        ...cta(
          'Vragen of interesse in vrijwilligerswerk?',
          'mailto:voorzitter@roersoppers.nl',
          'mail',
        ),
      },
    ],
  },
  {
    title: 'Startgemeenschap',
    slug: 'informatie/startgemeenschap',
    hero: {
      icon: 'users',
      title: 'Startgemeenschap Patrick – De Roersoppers',
      subtitle: 'Samen sterker in het water!',
    },
    layout: [
      card('Samen Sterker', 'heart', 'blue', [
        text(`
Sinds het seizoen 2016-2017 bundelen ZV De Roersoppers en ZV Patrick hun krachten in **Startgemeenschap Patrick – De Roersoppers**. Tijdens wedstrijden treden we op als één team, gedreven door een gedeelde passie voor zwemsport en de ambitie om het beste uit onszelf te halen.

Door samen te werken op het gebied van trainingen, trainers en accommodaties, vormen we een krachtig zwemcollectief in Midden-Limburg.
`),
      ]),
      card('Wat betekent dit in de praktijk?', 'trophy', 'cyan', [
        callout(
          'soft',
          'ZV De Roersoppers en ZV Patrick blijven zelfstandig, maar staan tijdens wedstrijden zij aan zij.',
          { title: 'Twee verenigingen, één wedstrijdteam', icon: 'users', width: 'third' },
        ),
        callout(
          'soft',
          'We geloven in verbinding, plezier in de sport, persoonlijke ontwikkeling en een gezonde leefstijl.',
          { title: 'Eén gedeelde visie', icon: 'heart', width: 'third' },
        ),
        callout('soft', 'Samen brengen we ongeveer 80 fanatieke zwemmers op het startblok.', {
          title: 'Wedstrijdzwemmers',
          icon: 'trophy',
          width: 'third',
        }),
      ]),
      card('Lidmaatschap & Startvergunning', 'check-circle', 'teal', [
        text(
          'Om deel te nemen aan wedstrijden, heeft iedere wedstrijdzwemmer een startvergunning nodig. Deze wordt aangevraagd bij de KNZB, onder de gezamenlijke vlag van de startgemeenschap Patrick – De Roersoppers.',
        ),
        callout(
          'blue',
          'Leden met een doorlopende startvergunning maken automatisch deel uit van de startgemeenschap, maar blijven gewoon lid van hun eigen vereniging.',
        ),
      ]),
      cta('Vragen over de startgemeenschap?', 'mailto:info@roersoppers.nl'),
    ],
  },
  {
    title: 'Aan / Afmelden',
    slug: 'informatie/aanmelden',
    hero: {
      icon: 'file-text',
      title: 'Lid worden bij De Roersoppers',
      subtitle:
        'Wil je ontdekken of zwemmen bij De Roersoppers bij jou past? Zwem vrijblijvend vier keer mee en ervaar het zelf! Samen kiezen we de groep die het beste bij je past.\n\nStuur een mailtje naar [info@roersoppers.nl](mailto:info@roersoppers.nl) of loop gewoon eens binnen tijdens een van onze trainingen. We heten je van harte welkom!',
    },
    layout: [
      card('Aanmelden', 'check-circle', 'blue', [
        text(
          'Ben je overtuigd en klaar om lid te worden? Download dan hieronder het aanmeldingsformulier:',
        ),
        {
          blockType: 'download',
          title: 'Aanmeldingsformulier',
          file: media['aanmeldingsformulier-roersoppers.pdf'],
          buttonLabel: 'Download aanmeldingsformulier De Roersoppers',
          style: 'button',
          width: 'full',
        },
        text(`
Vul het formulier in, onderteken het en:

- Mail het naar: [info@roersoppers.nl](mailto:info@roersoppers.nl), of
- Lever het uitgeprint in bij je trainer.
`),
        callout(
          'amber',
          '**Let op:** aanmelding is voor minimaal één jaar en alleen geldig met een ingevulde incasso-machtiging.',
        ),
      ]),
      card('Belangrijk om te weten', 'alert-circle', 'cyan', [
        text(`
- Bij leden onder de 18 jaar moet een ouder/verzorger het formulier ondertekenen.
- Tijdens de trainingsdagen zijn papieren aanmeldformulieren ook beschikbaar in het zwembad.
- De actuele contributiebedragen vind je onderaan deze pagina.
- Er zijn subsidies mogelijk: [Jeugdfonds Sport & Cultuur](https://jeugdfondssportencultuur.nl/wp-content/uploads/Spelregels-Jeugdfonds-Sport-Cultuur-Limburg-gemeente-Roerdalen-2025.v3.pdf)
`),
      ]),
      card('Opzeggen van je lidmaatschap', 'x-circle', 'blue', [
        text('Opzeggen kan op elk moment per e-mail of met een brief:'),
        callout(
          'soft',
          `
- E-mail: [admin@roersoppers.nl](mailto:admin@roersoppers.nl)
- Of lever een brief in bij de trainer tijdens de training.
`,
        ),
        text(`
### Houd rekening met deze deadlines:

- Opzeggen vóór **1 november** óf **1 juli**.
`),
        callout(
          'amber',
          `
#### Bij te late afmelding worden de volgende kosten alsnog in rekening gebracht:

- Afdracht aan de KNZB
- Contributie over de verstreken maanden
- Eventuele kosten van de startvergunning
`,
        ),
        callout(
          'blue',
          'Bij langdurige ziekte (langer dan 3 maanden), én als dit tijdig is gemeld, wordt de contributie tijdelijk opgeschort.',
        ),
      ]),
      card('Contributiestructuur 2025–2026', 'euro', 'teal', [
        text(
          'Bij De Roersoppers geloven we in betaalbaar zwemmen met kwaliteit. Hieronder vind je een helder overzicht van de kosten. Inclusief verplichte KNZB-afdrachten en de lidmaatschapstarieven voor verschillende doelgroepen. Binnen de samenwerking met ZV Patrick zijn de tarieven voor wedstrijdzwemmers afgestemd op elkaar. Er blijven echter kleine verschillen bestaan tussen beide verenigingen.',
        ),
        table(
          'cyan',
          ['Groep', 'Aantal trainingen/week*', 'Jaarbedrag'],
          [
            [{ value: 'Masters 2' }, { value: '1x per week' }, { value: '€130', emphasis: true }],
            [
              { value: 'Masters 1' },
              { value: 'Max. 3x per week' },
              { value: '€217', emphasis: true },
            ],
            [
              { value: 'Jeugd Recreatief' },
              { value: 'Max. 3x per week' },
              { value: '€254', emphasis: true },
            ],
            [
              { value: 'Studenten (uitwonend)**' },
              { value: 'Max. 1x per week' },
              { value: '€90', emphasis: true },
            ],
          ],
          { title: 'Tarieven voor Niet-Wedstrijdzwemmers', icon: 'users', style: 'lines' },
        ),
        callout(
          'blue',
          '**\\*\\*Studentenregeling:** Studeer je op kamers en woon je meer dan 30 km van Melick? Dan kun je gebruikmaken van onze studentenregeling om toch lid te blijven. Mail ons voor de mogelijkheden via [admin@roersoppers.nl](mailto:admin@roersoppers.nl).',
        ),
        table(
          'blue',
          ['Groep', 'Aantal trainingen/week*', 'Jaarbedrag'],
          [
            [
              { value: 'Wedstrijdmasters' },
              { value: 'Max. 4x per week' },
              { value: '€290', emphasis: true },
            ],
            [
              { value: 'Jeugd Wedstrijd' },
              { value: 'Max. 3x per week' },
              { value: '€254', emphasis: true },
            ],
            [
              { value: 'Selectie' },
              { value: 'Max. 4x per week' },
              { value: '€290', emphasis: true },
            ],
          ],
          {
            title: 'Tarieven voor Wedstrijdzwemmers',
            titleNote: '(startvergunning inbegrepen)',
            icon: 'users',
            style: 'lines',
          },
        ),
        callout(
          'note',
          '\\*Het aantal trainingen in de tabel betreft het aantal trainingen bij de Roersoppers. Vanwege de samenwerking is het ook mogelijk om extra trainingen te volgen bij [Patrick Echt](https://www.zv-patrick.nl).',
        ),
        text(`
### Verplichte KNZB-afdrachten

Deze bedragen zijn verplicht voor iedereen die zwemt bij een aangesloten vereniging, en worden jaarlijks door de KNZB vastgesteld. Ze zijn opgenomen in onze lidmaatschapsprijzen (tenzij anders vermeld). Voor exacte bedragen zie [knzb.nl](https://www.knzb.nl)

- Algemene bijdrage voor iedere zwemmer: **+/- €25,00**
- Startvergunning t/m 12 jaar: **+/- €2,50**
- Startvergunning vanaf 13 jaar: **+/- €45,00**
`),
      ]),
      card('Betaling & Incasso', 'credit-card', 'cyan', [
        text(`
- Betaling verloopt via automatische incasso
- Je ontvangt geen voorafgaande melding, afschrijvingen zijn in maart en september. (Masters 2 en Studenten jaarlijks in maart)
- Bij aanmelding is een ondertekende incasso-machtiging verplicht
- Voor aanmeldingen gelden dezelfde voorwaarden als voor bestaande leden

Vragen over je lidmaatschap of contributie? Mail ons gerust via: [admin@roersoppers.nl](mailto:admin@roersoppers.nl)
`),
      ]),
      {
        blockType: 'cta',
        title: 'Wil je lid worden of heb je vragen?',
        text: 'Wil je lid worden of heb je vragen over welk lidmaatschap het beste bij jou past? We helpen je graag op weg!',
        link: {
          label: 'Neem contact op via info@roersoppers.nl',
          url: 'mailto:info@roersoppers.nl',
          icon: 'mail',
        },
      },
    ],
  },
  {
    title: 'Borstcrawl Training',
    slug: 'zwemmen/borstcrawl-training',
    hero: {
      icon: 'waves',
      titleLead: 'Borstcrawl',
      title: 'Training',
      subtitle: 'Leer borstcrawl zwemmen in 10 gerichte lessen',
    },
    layout: [
      {
        blockType: 'mediaCard',
        image: media['jongeren_recreatief.jpg'],
        badge: 'Volwassenen',
        listStyle: 'check',
        content: md(`
## Borstcrawl Training voor Volwassenen

Wil je eindelijk goed borstcrawl leren zwemmen? Train je voor een triatlon? Of staat het al jaren op je lijstje om dit eens écht onder de knie te krijgen?

**Dan is dit jouw moment.**

- 10 lessen voor €175
- Begeleiding door een ervaren trainer
- Kleine groep, persoonlijke aandacht

In 10 gerichte trainingen werk je aan techniek, ademhaling en efficiëntie in het water. Geen verplicht lidmaatschap. Gewoon een duidelijke reeks lessen waarin jij stappen zet.
`),
      },
      card('Voor wie is deze training?', 'users', 'blue', [
        text(`
Deze borstcrawl training is speciaal voor volwassenen:

- Die zich voorbereiden op een triatlon
- Die hun techniek willen verbeteren
- Of die gewoon voor hun plezier borstcrawl willen leren
`),
        callout('cyan', '**Je hoeft geen topsporter te zijn. Motivatie is genoeg.**'),
      ]),
      card('Praktische informatie', 'clock', 'cyan', [
        callout(
          'tile',
          'Tijdens dit uur traint een kleine jeugdgroep (12.00 – 13.15 uur), maar één baan is speciaal vrijgemaakt voor de borstcrawltraining. Je hoeft niet om 13.00 uur uit het water. Het laatste kwartier mag je zelfstandig uitzwemmen.',
          { title: 'Zaterdag van 12.00 – 13.00 uur', icon: 'clock' },
        ),
        callout(
          'tile',
          'Zwemvereniging De Roersoppers\n\nFeel Fit Center Roerdalen\n\nApollolaan 2, 6074 EH, Melick',
          { title: 'Locatie', icon: 'map-pin' },
        ),
        callout('tile', '**€175 voor 10 lessen**', { title: 'Kosten', icon: 'euro' }),
      ]),
      card('Meedoen?', 'mail', 'blue', [
        text(
          'Wil je weten of er nog plek is? Stuur dan een mail naar [info@roersoppers.nl](mailto:info@roersoppers.nl) en vraag naar de beschikbaarheid.',
        ),
        callout('blue', '**Wacht niet te lang, we werken met kleine groepen.**'),
        {
          blockType: 'button',
          label: 'Stuur een mail',
          url: 'mailto:info@roersoppers.nl?subject=Borstcrawl%20Training%20-%20Beschikbaarheid',
          icon: 'mail',
          align: 'center',
          width: 'full',
        },
      ]),
    ],
  },
  {
    title: 'Code Blauw',
    slug: 'informatie/code-blauw',
    hero: {
      icon: 'shield',
      title: 'Code Blauw',
      subtitle: 'Samen voor een sportief en veilig zwemklimaat',
    },
    layout: [
      card(null, null, 'blue', [
        callout(
          'blue',
          'Met Code Blauw laten de KNZB, zwemverenigingen en zwembaden zien dat we ons samen sterk maken voor een sportief en veilig zwem-klimaat. Het is onze ambitie om een blauwe golf te creëren, waarbij iedereen elkaar aansteekt om op een positieve manier met elkaar, met de sport en de faciliteiten om te gaan.',
          { title: 'Wat is Code Blauw?', icon: 'check-circle' },
        ),
        callout('soft', '🤝 Respect\n\n⚡ Sportiviteit\n\n🛡️ Veiligheid\n\n🎉 Plezier!', {
          title: 'Code Blauw staat voor:',
          width: 'half',
        }),
        callout(
          'soft',
          'Wij streven naar een zwemsport-klimaat, waarin iedereen respectvol met elkaar omgaat, zich houdt aan de regels, zich inzet om grensoverschrijdend gedrag te voorkomen en vooral veel plezier maakt samen.',
          { title: 'Onze inzet:', width: 'half' },
        ),
        callout(
          'slate',
          'Onze trainers, vrijwilligers, coaches en officials onderschrijven de gedragsregels voor begeleiders in de sport, die zijn vastgesteld door de NOC\\*NSF. Daarnaast beschikt onze vereniging over een door justitie afgegeven VOG (Verklaring Omtrent Gedrag) van de personen die omgaan met minderjarigen binnen onze vereniging.',
          { title: 'Professionele Standaarden' },
        ),
        callout(
          'amber',
          `
In dit kader heeft onze vereniging tevens een vertrouwenspersoon aangesteld. De vertrouwenspersoon is er voor de eerste opvang van vragen, vermoedens, meldingen, klachten en aangifte van seksuele intimidatie en ander ongewenst gedrag voor leden, ouders van leden, trainers, vrijwilligers en bestuur.

Verder kan de vertrouwenspersoon doorverwijzen naar andere instanties zoals bijvoorbeeld maatschappelijk werk, huisarts of politie. Uiteraard worden hierbij de privacyregels in acht genomen.
`,
          { title: 'Vertrouwenscontactpersoon', icon: 'users' },
        ),
        callout(
          'white',
          'Momenteel zijn wij op zoek naar een nieuwe vertrouwenscontactpersoon. Mensen die hiervoor belangstelling hebben kunnen zich melden bij onze voorzitter.',
        ),
        callout(
          'solid',
          'Code Blauw is niet alleen een symbool, het is een belofte aan alle zwemmers en hun families voor een veilige, respectvolle en plezierige zwemomgeving.',
          { title: 'Samen maken we het verschil', align: 'center' },
        ),
      ]),
    ],
  },
]

for (const data of pages) {
  await payload.create({ collection: 'pages', data, context: context() })
  payload.logger.info(`Created page /${data.slug}`)
}

// -------------------------------------------------------------- globals

await payload.updateGlobal({
  slug: 'home',
  context: context(),
  data: {
    hero: {
      title: 'De Roersoppers',
      subtitle: 'Meer dan zwemmen alleen',
      description:
        'Of je nu je eerste meters maakt, traint voor competitie of gewoon met een grote glimlach het water in duikt, bij De Roersoppers voelt iedereen zich thuis. Hier leer je niet alleen zwemmen, maar groei je ook als sporter én als mens.',
      video: media['hero_video2.mp4'],
      primaryButton: { label: 'Word lid', url: '/informatie/aanmelden' },
      secondaryButton: { label: 'Trainings Schema', url: '/trainingsschema' },
      socialLinks: [
        { platform: 'facebook', url: 'https://www.facebook.com/profile.php?id=61578718554072' },
        { platform: 'instagram', url: 'https://www.instagram.com/patrickderoersopperssg/' },
      ],
    },
    about: {
      headingLead: 'Zwemmen met',
      heading: 'Passie & Plezier',
      intro:
        'Al meer dan 50 jaar in Roerdalen. Bij ons draait het om **plezier in het water**, persoonlijke groei en een hechte teamgeest!',
      features: [
        {
          icon: 'target',
          color: 'red',
          title: 'Sportieve Training',
          description:
            'Van beginners tot gevorderden - onze ervaren trainers helpen jou jouw zwemtechniek te verbeteren en doelen te bereiken.',
        },
        {
          icon: 'users',
          color: 'green',
          title: 'Gezellig Team',
          description:
            'Word onderdeel van onze hechte zwemfamilie waar vriendschap en teamgeest centraal staan.',
        },
        {
          icon: 'trophy',
          color: 'yellow',
          title: 'Wedstrijdzwemmen',
          description:
            'Neem deel aan regionale en nationale wedstrijden en ontdek je competitieve kant.',
        },
        {
          icon: 'heart',
          color: 'purple',
          title: 'Voor Iedereen',
          description: 'Alle leeftijden en niveaus zijn welkom - van recreatie tot topsport.',
        },
      ],
      photos: [
        {
          image: media['KoenGeeftTraining.jpeg'],
          title: 'Lesgeven',
          caption: 'Koen geeft les aan onze jongste zwemmers',
        },
        {
          image: media['training.jpg'],
          title: 'Training in Actie',
          caption: 'De Roersoppers aan het werk',
        },
      ],
    },
    groups: {
      headingLead: 'Onze',
      heading: 'Zwemgroepen',
      intro:
        'Voor elke leeftijd en elk niveau hebben we de perfecte groep waar je je thuis zult voelen. [Check ze hier!](/zwemgroepen)',
      items: [
        {
          image: media['junioren.jpg'],
          title: 'Jeugd',
          accent: 'blue-cyan',
          description:
            'Voor jonge zwemmers die de basis technieken leren en plezier hebben in het water',
        },
        {
          image: media['wedstrijdploeg.jpg'],
          title: 'Selectie',
          accent: 'yellow-orange',
          description: 'Competitieve zwemmers die deelnemen aan regionale en nationale wedstrijden',
        },
        {
          image: media['masters.jpg'],
          title: 'Masters',
          accent: 'purple-pink',
          description: 'Ervaren zwemmers die blijven trainen voor fitness en plezier',
        },
      ],
    },
    pool: {
      headingLead: 'Ons',
      heading: 'Zwembad',
      intro:
        'Wij trainen in een nostalgisch binnenzwembad met uitstekende faciliteiten. Onze locatie biedt optimale omstandigheden voor zwemmers van alle niveaus.',
      photos: [
        {
          image: media['zwembad_buiten.jpg'],
          title: 'Ons Gebouw',
          caption: 'Een modern en goed bereikbaar zwembadcomplex',
        },
        {
          image: media['zwemmer_zwembad.jpg'],
          title: 'Binnenzwembad',
          caption: 'Trainingen het hele jaar door',
        },
      ],
    },
    events: {
      headingLead: 'Volg Ons',
      heading: 'Verhaal',
      intro:
        "Ontdek de laatste updates, foto's en verhalen van **De Roersoppers** via onze Instagram!",
      instagramUsername: 'patrickderoersopperssg',
      postCount: 3,
      followLabel: 'Volg ons op Instagram',
      fallbackPosts: [
        {
          image: media['training.jpg'],
          caption:
            'Clubkampioenschappen - Op zondag 30 maart vonden de clubkampioenschappen van SG Patrick – de Roersoppers plaats in Melick. Het was een super gezellige en sportieve middag. Naast het zwemmen werd ook het traditionele munten duiken georganiseerd.',
        },
        {
          image: media['Wedstrijd.jpg'],
          caption:
            '200m KST - Waar de meeste zwemmers en zwemsters van SG Patrick – de Roersoppers aanwezig waren op de eigen Clubkampioenschappen, kozen Jana en Gido voor een wedstrijd in het buitenland. Deze twee reisden af naar het Optimum Energy Race in Eindhoven.',
        },
        {
          image: media['senioren.jpg'],
          caption:
            'Competitie Deel 5 - De eerste vier wedstrijden in de Nationale Zwemcompetitie gingen voor onze startgemeenschap meer dan goed. Op 6 april was het tijd voor de laatste ronde.',
        },
      ],
    },
    contact: {
      headingLead: 'Neem',
      heading: 'Contact Op',
      intro:
        'Neem contact met ons op, zwem 4 keer gratis mee en word onderdeel van onze zwemfamilie!',
      items: [
        { icon: 'map-pin', title: 'Locatie', lines: 'Feel Fit Center\nRoerdalen, Nederland' },
        { icon: 'phone', title: 'Telefoon', lines: '06-12847980' },
        { icon: 'mail', title: 'Email', lines: 'info@roersoppers.nl' },
      ],
      successMessage: 'Bedankt voor je bericht! We nemen snel contact met je op.',
    },
  },
})

await payload.updateGlobal({
  slug: 'navigation',
  context: context(),
  data: {
    items: [
      {
        label: 'Home',
        url: '/',
        children: [
          { label: 'Over Ons', url: '/#about' },
          { label: 'Zwemgroepen', url: '/#groups' },
          { label: 'Nieuws', url: '/#events' },
          { label: 'Contact', url: '/#contact' },
        ],
      },
      {
        label: 'Zwemmen',
        children: [
          { label: 'Zwemgroepen', url: '/zwemgroepen' },
          { label: 'Trainingsschema', url: '/trainingsschema' },
          { label: 'BorstCrawl Training', url: '/zwemmen/borstcrawl-training' },
        ],
      },
      {
        label: 'Informatie',
        children: [
          { label: 'Over Ons', url: '/informatie/over-ons' },
          { label: 'Startgemeenschap', url: '/informatie/startgemeenschap' },
          { label: 'Aan / Afmelden', url: '/informatie/aanmelden' },
          { label: 'Code Blauw', url: '/informatie/code-blauw' },
        ],
      },
    ],
  },
})

// Footer links point at the uploaded file's URL
const privacyPolicy = await payload.findByID({
  collection: 'media',
  id: media['privacy-policy-roersoppers.pdf'],
})
const privacyPolicyUrl = privacyPolicy.url ?? '/'

await payload.updateGlobal({
  slug: 'site-settings',
  context: context(),
  data: {
    siteName: 'De Roersoppers',
    meta: {
      title: 'De Roersoppers - Zwemvereniging Melick',
      description:
        'Al meer dan 40 jaar de gezelligste zwemvereniging van Melick. Van beginners tot wedstrijdzwemmers, iedereen is welkom bij De Roersoppers!',
      keywords:
        'zwemmen, zwemvereniging, Melick, zwemles, wedstrijdzwemmen, junioren, senioren, Roersoppers',
    },
    footer: {
      quickLinks: [
        { label: 'Home', url: '/' },
        { label: 'Zwemgroepen', url: '/zwemgroepen' },
        { label: 'Trainingsschema', url: '/trainingsschema' },
        { label: 'Over Ons', url: '/informatie/over-ons' },
        { label: 'Startgemeenschap', url: '/informatie/startgemeenschap' },
        { label: 'Aan / Afmelden', url: '/informatie/aanmelden' },
        { label: 'Code Blauw', url: '/informatie/code-blauw' },
      ],
      contact: {
        location: 'Apollolaan 2, 6074 EH Melick',
        phone: '06-12847980',
        email: 'info@roersoppers.nl',
      },
      socialLinks: [
        { platform: 'facebook', url: 'https://www.facebook.com/profile.php?id=61578718554072' },
        { platform: 'instagram', url: 'https://www.instagram.com/patrickderoersopperssg/' },
      ],
      legalLinks: [
        { label: 'Privacy Beleid', url: privacyPolicyUrl },
        { label: 'Algemene Voorwaarden', url: '/informatie/code-blauw' },
      ],
      credit: { name: 'Bas Smit', email: 'bas.smit@live.nl', phone: '+31 6 31279994' },
    },
  },
})

payload.logger.info('Seed complete')
process.exit(0)
