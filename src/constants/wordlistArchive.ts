/**
 * SPOILER ALERT
 *
 * This file contains the solutions to each game of Pördl
 */

export const WORDS = [
    'faste',
    'nepal',
    'bafög',
    'nebst',
    'gurke',
    'zerrt',
    'uralt',
    'teint',
    'spion',
    'ampel',
    'siebt',
    'geben',
    'zunge',
    'bulle',
    'chefs',
    'abzug',
    'glück',
    'hirte',
    'abtes',
    'todes',
    'boden',
    'spiel',
    'segne',
    'musik',
    'frech',
    'dekor',
    'ozean',
    'boote',
    'forme',
    'bezog',
    'leite',
    'summe',
    'lachs',
    'garne',
    'tanzt',
    'beben',
    'zahns',
    'alter',
    'hackt',
    'kiste',
    'tagst',
    'wohle',
    'surrt',
    'heuer',
    'gasen',
    'hülse',
    'ernte',
    'schön',
    'flehe',
    'warst',
    'bannt',
    'raupe',
    'unter',
    'mault',
    'chors',
    'eiern',
    'rühmt',
    'zweig',
    'stumm',
    'kühlt',
    'endet',
    'augen',
    'hobel',
    'eimer',
    'traum',
    'ruder',
    'jacke',
    'wirkt',
    'socke',
    'malen',
    'watet',
    'atome',
    'birne',
    'irren',
    'birgt',
    'larve',
    'haupt',
    'kasse',
    'rammt',
    'nippt',
    'klage',
    'engte',
    'indiz',
    'bumst',
    'paffe',
    'zuruf',
    'tanks',
    'edlen',
    'asche',
    'jubel',
    'pilze',
    'enges',
    'ärmel',
    'umzog',
    'trans',
    'ahnde',
    'zupfe',
    'vogel',
    'impft',
    'stall',
    'diebe',
    'ungut',
    'mixte',
    'wacht',
    'liebe',
    'krach',
    'seide',
    'mönch',
    'rupft',
    'geile',
    'platz',
    'alarm',
    'tiefe',
    'widme',
    'motel',
    'zwang',
    'posen',
    'fauna',
    'acker',
    'tafel',
    'viola',
    'lache',
    'hinkt',
    'enorm',
    'womit',
    'sechs',
    'rinnt',
    'sogar',
    'lunte',
    'sprit',
    'adler',
    'penis',
    'schuh',
    'folgt',
    'beste',
    'swing',
    'lampe',
    'frack',
    'logen',
    'natur',
    'lebst',
    'tatze',
    'jenem',
    'grabt',
    'ziemt',
    'mulde',
    'tabak',
    'waise',
    'blieb',
    'falls',
    'eisig',
    'packe',
    'idols',
    'spalt',
    'kleid',
    'mokka',
    'aalen',
    'reist',
    'manko',
    'fisch',
    'konto',
    'dumpf',
    'klang',
    'sonst',
    'bogen',
    'antut',
    'typen',
    'wahns',
    'hymne',
    'walzt',
    'kerne',
    'brand',
    'dient',
    'rupfe',
    'theke',
    'alles',
    'fremd',
    'sitzt',
    'bauer',
    'disco',
    'jetzt',
    'herrn',
    'filmt',
    'pulli',
    'denkt',
    'welpe',
    'ahorn',
    'loben',
    'zucht',
    'etwas',
    'pafft',
    'stolz',
    'zahlt',
    'falle',
    'thron',
    'keins',
    'toben',
    'hinab',
    'erbte',
    'genug',
    'stahl',
    'anruf',
    'griff',
    'zyste',
    'truhe',
    'radio',
    'miese',
    'daher',
    'miete',
    'musst',
    'eines',
    'fusel',
    'asket',
    'exakt',
    'putze',
    'kegle',
    'ihres',
    'witze',
    'hafen',
    'bades',
    'malus',
    'würde',
    'anker',
    'pfote',
    'final',
    'hebel',
    'kilos',
    'erste',
    'rohen',
    'wende',
    'armen',
    'biere',
    'nahes',
    'trink',
    'nebel',
    'sahen',
    'puren',
    'ernst',
    'kamen',
    'hunde',
    'frust',
    'hufen',
    'opium',
    'idole',
    'mutes',
    'samts',
    'ehrst',
    'ledig',
    'belog',
    'ansah',
    'rares',
    'sonne',
    'formt',
    'votum',
    'teams',
    'forst',
    'melde',
    'kurvt',
    'thema',
    'karte',
    'kahle',
    'bleib',
    'achse',
    'trakt',
    'sogen',
    'bluts',
    'haken',
    'hefts',
    'chips',
    'boots',
    'raupe',
    'beile',
    'sowie',
    'nackt',
    'pablo',
    'lasst',
    'kolik',
    'party',
    'bohrt',
    'egels',
    'garns',
    'vital',
    'holte',
    'feuer',
    'buden',
    'eitel',
    'basen',
    'hahns',
    'etage',
    'krumm',
    'reben',
    'olymp',
    'merke',
    'erzog',
    'kennt',
    'mahlt',
    'erbst',
    'hefte',
    'reift',
    'hilfe',
    'rette',
    'tosen',
    'beton',
    'kette',
    'trotz',
    'meute',
    'pilot',
    'fasst',
    'neben',
    'boten',
    'kelch',
    'abbau',
    'anhob',
    'sargs',
    'baden',
    'liter',
    'raums',
    'lehnt',
    'ankam',
    'schaf',
    'zarte',
    'roman',
    'ewige',
    'drang',
    'snobs',
    'lesen',
    'weise',
    'eurem',
    'dreht',
    'blitz',
    'fleht',
    'arges',
    'fiele',
    'noble',
    'ahnen',
    'wehrt',
    'sekte',
    'knauf',
    'raubt',
    'breis',
    'kohle',
    'recht',
    'prunk',
    'werte',
    'sauna',
    'geize',
    'nenne',
    'zeuge',
    'folie',
    'sinnt',
    'trank',
    'lehre',
    'zimts',
    'hupen',
    'reihe',
    'dahin',
    'klaut',
    'noten',
    'kahns',
    'woche',
    'aktie',
    'binde',
    'abtun',
    'brate',
    'schon',
    'hotel',
    'wohne',
    'galas',
    'liefe',
    'flaue',
    'gross',
    'pfahl',
    'lifts',
    'zoten',
    'prosa',
    'ihnen',
    'drama',
    'sengt',
    'daune',
    'seele',
    'puppe',
    'lohnt',
    'rampe',
    'stift',
    'lecks',
    'schau',
    'figur',
    'belle',
    'nagen',
    'abtei',
    'pechs',
    'feure',
    'atoll',
    'suche',
    'sofas',
    'axiom',
    'sauen',
    'zusah',
    'mimen',
    'genau',
    'zuckt',
    'tilge',
    'sowas',
    'gafft',
    'schuf',
    'heile',
    'plane',
    'quirl',
    'hisst',
    'ikone',
    'wurme',
    'sende',
    'reiht',
    'piste',
    'laust',
    'balls',
    'loche',
    'herum',
    'zeile',
    'hafer',
    'zeche',
    'grips',
    'stegs',
    'abkam',
    'betet',
    'ruhms',
    'vorig',
    'motiv',
    'porno',
    'fjord',
    'braut',
    'finte',
    'knete',
    'bonze',
    'wohin',
    'tapse',
    'wehte',
    'abgas',
    'wirke',
    'clubs',
    'angab',
    'inner',
    'watte',
    'folge',
    'locht',
    'wolke',
    'armut',
    'saals',
    'fuhre',
    'artig',
    'linke',
    'lotto',
    'umher',
    'zehen',
    'falke',
    'seien',
    'leise',
    'gebot',
    'neuer',
    'otter',
    'stufe',
    'sumpf',
    'hexen',
    'beleg',
    'agile',
    'nudel',
    'dress',
    'zweck',
    'bonus',
    'sause',
    'adieu',
    'beige',
    'ziert',
    'neues',
    'autor',
    'kamin',
    'jedem',
    'ferse',
    'stoff',
    'gaudi',
    'anmut',
    'kerls',
    'eulen',
    'foren',
    'plant',
    'basar',
    'pokal',
    'filet',
    'werde',
    'zeigt',
    'reims',
    'empor',
    'vokal',
    'motte',
    'sohle',
    'schur',
    'hoden',
    'affig',
    'kurve',
    'kader',
    'wedle',
    'saats',
    'hochs',
    'keift',
    'spare',
    'felds',
    'nicht',
    'sands',
    'worts',
    'ponys',
    'fesch',
    'rotor',
    'losen',
    'zogst',
    'titel',
    'trage',
    'heber',
    'indem',
    'erhob',
    'neigt',
    'hegte',
    'leine',
    'walze',
    'stank',
    'neffe',
    'senkt',
    'quell',
    'pinie',
    'leert',
    'baron',
    'dogma',
    'halme',
    'pures',
    'crack',
    'altem',
    'dicht',
    'davon',
    'altes',
    'wurde',
    'pumps',
    'klaps',
    'unten',
    'geizt',
    'werbt',
    'bewog',
    'mixer',
    'trost',
    'krimi',
    'hakte',
    'liste',
    'wonne',
    'bares',
    'hemds',
    'fouls',
    'gatte',
    'woher',
    'reizt',
    'leger',
    'packt',
    'nacht',
    'weber',
    'innen',
    'tinte',
    'werks',
    'irrer',
    'dampf',
    'frage',
    'rades',
    'vetos',
    'phase',
    'tappe',
    'meist',
    'moden',
    'spuks',
    'wales',
    'spart',
    'pfiff',
    'roter',
    'waage',
    'atzen',
    'funke',
    'welle',
    'taten',
    'bahre',
    'fotos',
    'solch',
    'irres',
    'nasen',
    'ebben',
    'reich',
    'kunde',
    'comic',
    'anbau',
    'klees',
    'orten',
    'ihrem',
    'taute',
    'olive',
    'anbei',
    'hilft',
    'genen',
    'adlig',
    'keile',
    'kurze',
    'schal',
    'order',
    'motzt',
    'kohls',
    'dosis',
    'weder',
    'setze',
    'einem',
    'mogle',
    'tauen',
    'stiel',
    'hasen',
    'malst',
    'zotig',
    'spukt',
    'kleie',
    'allzu',
    'faule',
    'dorns',
    'efeus',
    'batik',
    'zwerg',
    'regem',
    'beine',
    'rates',
    'fragt',
    'stock',
    'kanon',
    'horns',
    'foyer',
    'fluid',
    'rennt',
    'haust',
    'legst',
    'sohns',
    'tasse',
    'helds',
    'enger',
    'lagst',
    'harke',
    'leckt',
    'stute',
    'gummi',
    'depot',
    'munde',
    'tango',
    'blind',
    'nonne',
    'raume',
    'lobby',
    'baren',
    'singt',
    'elend',
    'bekam',
    'fluor',
    'beruf',
    'ruins',
    'werke',
    'necke',
    'dankt',
    'karge',
    'perle',
    'rohes',
    'berge',
    'zankt',
    'wagst',
    'kekse',
    'lyrik',
]
