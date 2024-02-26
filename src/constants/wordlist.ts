/**
 * SPOILER ALERT
 *
 * This file contains the solutions to each game of Pördl
 */

export const WORDS = [
    'hinge',
    'april',
    'sippe',
    'linse',
    'krume',
    'zuber',
    'heult',
    'pakte',
    'eklat',
    'stieg',
    'lecke',
    'hofes',
    'zange',
    'eures',
    'phono',
    'jäger',
    'huste',
    'honig',
    'porto',
    'guter',
    'fazit',
    'wippt',
    'kocht',
    'kombi',
    'visum',
    'zelle',
    'leier',
    'junge',
    'fuchs',
    'linkt',
    'woran',
    'eseln',
    'ziele',
    'warnt',
    'milde',
    'böser',
    'nippe',
    'stabs',
    'grell',
    'lagen',
    'sitte',
    'blond',
    'leber',
    'badet',
    'ritze',
    'hemmt',
    'atmet',
    'laute',
    'kurse',
    'damen',
    'turne',
    'ödest',
    'marge',
    'darin',
    'komet',
    'wille',
    'zeugt',
    'ehrte',
    'diele',
    'angle',
    'umweg',
    'breie',
    'ahmen',
    'messe',
    'lande',
    'punkt',
    'modem',
    'borge',
    'leben',
    'salto',
    'hirns',
    'reife',
    'gegen',
    'angst',
    'kante',
    'reibe',
    'jenes',
    'mumie',
    'lochs',
    'agave',
    'regte',
    'zupft',
    'kreis',
    'staub',
    'unser',
    'salze',
    'lunge',
    'krame',
    'steak',
    'kufen',
    'sämig',
    'helfe',
    'durch',
    'akten',
    'diene',
    'davor',
    'traum',
    'sagst',
    'zwick',
    'kugel',
    'raufe',
    'mobil',
    'fades',
    'devot',
    'akkus',
    'bongo',
    'zitat',
    'minze',
    'droht',
    'münze',
    'summa',
    'luden',
    'pixel',
    'circa',
    'mehrt',
    'unken',
    'hexer',
    'flott',
    'doofe',
    'warum',
    'tenor',
    'haars',
    'zeuge',
    'spreu',
    'fehlt',
    'fasan',
    'nährt',
    'lides',
    'gellt',
    'zunft',
    'setzt',
    'rippe',
    'vater',
    'borgt',
    'silbe',
    'magst',
    'herbe',
    'hauen',
    'bohle',
    'stuss',
    'nahmt',
    'gusto',
    'focht',
    'nagst',
    'wiegt',
    'wenig',
    'dauer',
    'rafft',
    'halbe',
    'dünen',
    'tupfe',
    'bowle',
    'nette',
    'flora',
    'intim',
    'desto',
    'speie',
    'gehst',
    'ziels',
    'kanne',
    'image',
    'union',
    'idiot',
    'reise',
    'agent',
    'grund',
    'kalks',
    'seite',
    'astes',
    'feind',
    'runde',
    'tatst',
    'hagel',
    'lauge',
    'löwen',
    'seife',
    'remis',
    'verse',
    'spüle',
    'druck',
    'teure',
    'schub',
    'wecke',
    'höhne',
    'alpen',
    'hecke',
    'beute',
    'domes',
    'labil',
    'winde',
    'irrte',
    'rotem',
    'siebe',
    'rache',
    'tiere',
    'venen',
    'raffe',
    'kabel',
    'busch',
    'kämen',
    'heute',
    'famos',
    'grase',
    'zwirn',
    'films',
    'ulkig',
    'rings',
    'neuem',
    'niete',
    'steht',
    'lasso',
    'luxus',
    'adern',
    'asche',
    'fahne',
    'dehnt',
    'treff',
    'ethik',
    'magie',
    'klima',
    'umbau',
    'drehe',
    'kakao',
    'innig',
    'sehne',
    'brett',
    'ödete',
    'enkel',
    'juwel',
    'viren',
    'pfuhl',
    'weins',
    'kniff',
    'kehle',
    'umhin',
    'minus',
    'locke',
    'gnome',
    'kappe',
    'fleck',
    'maden',
    'dusel',
    'kraus',
    'steif',
    'eifre',
    'pulle',
    'knabe',
    'zuges',
    'kippe',
    'rumpf',
    'harfe',
    'trend',
    'eklig',
    'chlor',
    'riese',
    'seile',
    'kiosk',
    'zehrt',
    'nehmt',
    'kurde',
    'zebra',
    'zieme',
    'weser',
    'warme',
    'sigma',
    'roste',
    'dünen',
    'zinne',
    'saudi',
    'kubus',
    'docks',
    'ebene',
    'santa',
    'akute',
    'herde',
    'sound',
    'wehen',
    'unbar',
    'taiga',
    'funkt',
    'hauch',
    'leibe',
    'braun',
    'abend',
    'idyll',
    'talon',
    'fidel',
    'eisen',
    'elfte',
    'badet',
    'siehe',
    'segel',
    'teilt',
    'lader',
    'menüs',
    'fegst',
    'immun',
    'liefe',
    'helle',
    'ergab',
    'argen',
    'brote',
    'salon',
    'geben',
    'ohren',
    'viele',
    'besen',
    'pfade',
    'wiese',
    'gören',
    'braue',
    'lider',
    'trafo',
    'guten',
    'bange',
    'apfel',
    'brise',
    'vasen',
    'reell',
    'notar',
    'gleis',
    'nimmt',
    'quere',
    'rarer',
    'sport',
    'puder',
    'hofft',
    'moral',
    'furie',
    'näher',
    'büros',
    'sauer',
    'bangt',
    'wovor',
    'prall',
    'aktiv',
    'stadt',
    'tunkt',
    'jenen',
    'wippe',
    'wusch',
    'human',
    'heran',
    'recke',
    'spitz',
    'ihren',
    'tages',
    'wisse',
    'krise',
    'milan',
    'sosse',
    'ringe',
    'lügen',
    'faden',
    'redet',
    'risse',
    'teste',
    'regie',
    'liehe',
    'juble',
    'lange',
    'wobei',
    'eifer',
    'umsah',
    'pippi',
    'erlen',
    'danke',
    'semit',
    'immer',
    'übler',
    'halme',
    'weide',
    'webte',
    'adelt',
    'legen',
    'ginge',
    'eifel',
    'obere',
    'auges',
    'reckt',
    'joker',
    'karos',
    'markt',
    'ducke',
    'umzug',
    'bilde',
    'zirpt',
    'piano',
    'galle',
    'kicke',
    'makel',
    'aasen',
    'erbin',
    'meint',
    'tutet',
    'rüben',
    'biene',
    'spott',
    'stern',
    'milch',
    'taugt',
    'trunk',
    'sturm',
    'bauen',
    'draht',
    'lenze',
    'feine',
    'könig',
    'wallt',
    'saufe',
    'ficke',
    'hirne',
    'pedal',
    'somit',
    'sackt',
    'sinke',
    'essig',
    'glied',
    'gagen',
    'getue',
    'syrer',
    'heiss',
    'brust',
    'breit',
    'kitte',
    'sucht',
    'stuhl',
    'eilen',
    'klare',
    'taufe',
    'pries',
    'sinne',
    'demut',
    'weist',
    'fegte',
    'helft',
    'statt',
    'winkt',
    'pfand',
    'gesät',
    'stets',
    'tobte',
    'wurst',
    'weben',
    'felge',
    'weich',
    'typus',
    'blöde',
    'duett',
    'dänen',
    'hatte',
    'gaben',
    'koche',
    'video',
    'kampf',
    'kurie',
    'hiess',
    'nabel',
    'extra',
    'kluft',
    'anzog',
    'ekelt',
    'staue',
    'edlem',
    'abort',
    'algen',
    'grobe',
    'waben',
    'spass',
    'omega',
    'sehen',
    'still',
    'knien',
    'hasse',
    'pferd',
    'orgel',
    'senat',
    'impfe',
    'vorab',
    'hebst',
    'bütte',
    'blatt',
    'käfig',
    'beugt',
    'pulte',
    'masse',
    'helme',
]

// AB HIER SIND DIE WÖRTER NICHT GEPRÜFT.
// Die Wortliste enthält englische Wörter oder Ortsnamen
// und Doppelvokale statt Umlaute. Diese Wörter sollten entfernt werden.
/*
    'annie',
    'addis',
    'quasi',
    'kriti',
    'neckt',
    'gnade',
    'wallt',
    'kasse',
    'hoher',
    'qualm',
    'unmut',
    'herrs',
    'stile',
    'luchs',
    'hohle',
    'arena',
    'flohe',
    'meile',
    'wagte',
    'echos',
    'chaos',
    'pfeil',
    'antik',
    'jeder',
    'kegel',
    'busse',
    'hinzu',
    'meere',
    'wrang',
    'indes',
    'faser',
    'zeige',
    'paare',
    'dinar',
    'macke',
    'brief',
    'bring',
    'eilig',
    'eckig',
    'wohnt',
    'nagte',
    'hilfs',
    'peilt',
    'lause',
    'toent',
    'solds',
    'starr',
    'jause',
    'tauft',
    'taler',
    'floez',
    'zweit',
    'bosch',
    'italo',
    'kille',
    'angel',
    'carle',
    'tuten',
    'wider',
    'hocke',
    'seoul',
    'deute',
    'serie',
    'zahle',
    'stopp',
    'pirat',
    'norme',
    'solid',
    'vatis',
    'droge',
    'taras',
    'hawai',
    'zivil',
    'enzym',
    'turms',
    'walen',
    'laden',
    'ruhen',
    'weile',
    'ziege',
    'lotse',
    'eprom',
    'scheu',
    'antat',
    'strom',
    'potis',
    'stunk',
    'edeka',
    'hielt',
    'judas',
    'petro',
    'boewe',
    'exils',
    'schob',
    'halle',
    'rinds',
    'essen',
    'genie',
    'achte',
    'denen',
    'naive',
    'getan',
    'julia',
    'rival',
    'wieso',
    'korea',
    'safts',
    'murks',
    'traff',
    'mamba',
    'fasse',
    'selig',
    'treue',
    'klagt',
    'satin',
    'hitze',
    'eiter',
    'pakts',
    'ladet',
    'szene',
    'latte',
    'haste',
    'rolls',
    'gaebe',
    'darum',
    'bluff',
    'modul',
    'gelbe',
    'turnt',
    'kafka',
    'volke',
    'daran',
    'surre',
    'zitze',
    'opake',
    'glitt',
    'elite',
    'hetzt',
    'krahe',
    'ehren',
    'heizt',
    'beule',
    'fadem',
    'ohren',
    'knick',
    'anllo',
    'fluch',
    'raten',
    'fahrt',
    'beere',
    'wahre',
    'biwak',
    'heuss',
    'funks',
    'fiber',
    'welch',
    'isaak',
    'toene',
    'liebt',
    'arsen',
    'sorge',
    'stirn',
    'keine',
    'neger',
    'reges',
    'blech',
    'offen',
    'heike',
    'speck',
    'hellt',
    'midas',
    'ragst',
    'venus',
    'pumpt',
    'sache',
    'pacht',
    'mobel',
    'erbse',
    'heinz',
    'behob',
    'melke',
    'kluge',
    'nutzt',
    'parks',
    'teere',
    'rubik',
    'amtet',
    'dicke',
    'panik',
    'tobak',
    'oscar',
    'ordne',
    'story',
    'schar',
    'luder',
    'teigs',
    'rufen',
    'melkt',
    'diwan',
    'seins',
    'bebte',
    'dance',
    'zuppa',
    'frass',
    'texte',
    'legal',
    'dhabi',
    'label',
    'regal',
    'polig',
    'buben',
    'fahle',
    'tippe',
    'fuder',
    'after',
    'weite',
    'pflug',
    'aebte',
    'mieke',
    'klick',
    'daten',
    'sauce',
    'kupon',
    'holen',
    'nicke',
    'klebt',
    'gucci',
    'faruk',
    'tippt',
    'plage',
    'enden',
    'glatt',
    'peggy',
    'fache',
    'armee',
    'keife',
    'pocht',
    'aller',
    'monat',
    'taxis',
    'skk24',
    'teuer',
    'hurra',
    'warte',
    'fusse',
    'loggt',
    'finde',
    'glanz',
    'mauer',
    'kerbt',
    'solde',
    'weges',
    'mafia',
    'erlag',
    'denke',
    'happy',
    'kaese',
    'rufst',
    'sagte',
    'knapp',
    'duell',
    'kloss',
    'funde',
    'rotzt',
    'rosen',
    'heine',
    'heben',
    'total',
    'grabe',
    'pille',
    'kunst',
    'ringt',
    'hesse',
    'emsig',
    'filme',
    'zicke',
    'hause',
    'vagen',
    'saegt',
    'solls',
    'werfe',
    'banjo',
    'biber',
    'power',
    'knaur',
    'david',
    'baust',
    'saeue',
    'lauch',
    'totos',
    'hufte',
    'engel',
    'dinge',
    'saure',
    'sporn',
    'bernd',
    'gramm',
    'haben',
    'nadel',
    'niele',
    'stand',
    'liess',
    'veuve',
    'guckt',
    'misst',
    'dritt',
    'ragte',
    'dills',
    'tafle',
    'blies',
    'rente',
    'elias',
    'hasch',
    'ubung',
    'namen',
    'neuen',
    'tisch',
    'orkan',
    'laude',
    'ranke',
    'kerbe',
    'farbe',
    'karre',
    'rauhe',
    'eiche',
    'kniee',
    'kreml',
    'gruft',
    'nahte',
    'udssr',
    'pfund',
    'klaue',
    'paten',
    'choke',
    'corps',
    'oktav',
    'jeden',
    'vorne',
    'leder',
    'kalte',
    'safte',
    'zumal',
    'igeln',
    'nagel',
    'bogst',
    'durst',
    'laune',
    'seato',
    'staat',
    'sorgt',
    'scala',
    'mater',
    'klamm',
    'royce',
    'rabat',
    'skala',
    'barst',
    'mixed',
    'sushi',
    'saust',
    'gunst',
    'boxen',
    'peter',
    'gizeh',
    'roten',
    'tuete',
    'zofen',
    'nervt',
    'feder',
    'album',
    'kraut',
    'sense',
    'opern',
    'dafur',
    'ballt',
    'ahnte',
    'frank',
    'kreuz',
    'krieg',
    'lokal',
    'talgs',
    'einig',
    'linie',
    'tapst',
    'fuers',
    'uhren',
    'ratet',
    'voran',
    'leide',
    'echte',
    'leute',
    'codes',
    'kerle',
    'stola',
    'tempo',
    'klotz',
    'lernt',
    'ziehe',
    'zinns',
    'gruen',
    'huber',
    'paket',
    'bosse',
    'wovon',
    'sesam',
    'feier',
    'brady',
    'etats',
    'satze',
    'wegen',
    'ocram',
    'seils',
    'geber',
    'korns',
    'volle',
    'gosse',
    'igels',
    'wucht',
    'macht',
    'satan',
    'obhut',
    'skier',
    'yacht',
    'lauem',
    'ufers',
    'tones',
    'fangs',
    'zorns',
    'aktor',
    'fides',
    'kojen',
    'dreck',
    'selbe',
    'lilie',
    'ecken',
    'traue',
    'epcot',
    'biegt',
    'kanns',
    'mensa',
    'email',
    'meise',
    'brown',
    'hohes',
    'burma',
    'ihrer',
    'miene',
    'rocht',
    'julis',
    'jagte',
    'haifa',
    'wirft',
    'wunde',
    'hohen',
    'ganze',
    'lobes',
    'golde',
    'mimik',
    'zudem',
    'kpdsu',
    'husum',
    'rasse',
    'prima',
    'rugby',
    'zinke',
    'trenn',
    'fange',
    'woyna',
    'becon',
    'spann',
    'these',
    'hanse',
    'engen',
    'fixte',
    'knall',
    'kopie',
    'hohem',
    'feige',
    'ortes',
    'basel',
    'toste',
    'fette',
    'gerte',
    'bauch',
    'lacke',
    'diese',
    'allwo',
    'zieht',
    'witwe',
    'sanft',
    'fielt',
    'kelle',
    'exile',
    'stamm',
    'trane',
    'kehre',
    'jahrs',
    'liegt',
    'bebop',
    'lugen',
    'fromm',
    'tilgt',
    'kaute',
    'kleve',
    'nahst',
    'hoble',
    'worin',
    'limes',
    'niste',
    'allee',
    'oheim',
    'dekan',
    'stich',
    'gaffe',
    'garbe',
    'korso',
    'fiako',
    'maske',
    'horen',
    'eiben',
    'gilde',
    'ruhst',
    'girls',
    'alice',
    'eises',
    'forum',
    'talks',
    'ufern',
    'mosel',
    'koran',
    'lepra',
    'probt',
    'troja',
    'untat',
    'biete',
    'papas',
    'zinse',
    'siege',
    'sturz',
    'wachs',
    'bevor',
    'mutig',
    'china',
    'abweg',
    'takts',
    'hegen',
    'arsch',
    'amtes',
    'wisst',
    'tiger',
    'henne',
    'wesen',
    'preis',
    'boeck',
    'tands',
    'engem',
    'keimt',
    'buchs',
    'stroh',
    'knopf',
    'rs422',
    'karin',
    'geste',
    'zuzug',
    'stoss',
    'leiht',
    'kater',
    'kerns',
    'obige',
    'prags',
    'ebnen',
    'dufte',
    'reale',
    'creme',
    'grast',
    'rolle',
    'kamel',
    'scher',
    'drauf',
    'arosa',
    'gutem',
    'nikon',
    'zwist',
    'sagen',
    'bazar',
    'riege',
    'coupe',
    'marco',
    'freue',
    'niere',
    'tuend',
    'polle',
    'wankt',
    'sicht',
    'babys',
    'klubs',
    'zuvor',
    'stils',
    'rohem',
    'reine',
    'kamst',
    'senke',
    'gifte',
    'organ',
    'platt',
    'geist',
    'lacht',
    'steil',
    'leibe',
    'ticks',
    'anzug',
    'musse',
    'kinos',
    'lasse',
    'anwar',
    'sitze',
    'tutor',
    'ethos',
    'kupee',
    'bande',
    'tappt',
    'riedl',
    'humus',
    'kuche',
    'tadel',
    'aurel',
    'kongo',
    'ideen',
    'menge',
    'dosen',
    'baute',
    'touch',
    'pisse',
    'saege',
    'geiss',
    'negro',
    'ocker',
    'tritt',
    'zuege',
    'suite',
    'stege',
    'super',
    'taube',
    'trete',
    'jaffa',
    'puste',
    'tauge',
    'marke',
    'notiz',
    'fluss',
    'greis',
    'ferne',
    'oesen',
    'discs',
    'tuben',
    'lasen',
    'harte',
    'motor',
    'komik',
    'hupst',
    'shell',
    'ritus',
    'huebe',
    'moewe',
    'rohre',
    'fabel',
    'ritzt',
    'eides',
    'mache',
    'rasta',
    'parat',
    'purem',
    'hoere',
    'boxte',
    'liege',
    'passt',
    'makro',
    'foppe',
    'flair',
    'duckt',
    'taste',
    'sande',
    'crash',
    'reibt',
    'villa',
    'kopfe',
    'oelte',
    'huren',
    'kubas',
    'wache',
    'insel',
    'haare',
    'wurms',
    'civil',
    'kuehl',
    'wedel',
    'apsis',
    'chase',
    'falbe',
    'euler',
    'ungar',
    'abart',
    'lobte',
    'logis',
    'apart',
    'arien',
    'ponte',
    'busen',
    'krach',
    'magen',
    'ruhig',
    'netal',
    'munze',
    'vegas',
    'lippe',
    'sirup',
    'grete',
    'giant',
    'gutes',
    'fehde',
    'salve',
    'tenne',
    'reger',
    'lager',
    'erzes',
    'felix',
    'blase',
    'dumme',
    'flugs',
    'wanke',
    'botet',
    'titan',
    'wanze',
    'fusst',
    'maori',
    'helme',
    'urans',
    'pumpe',
    'mitte',
    'tagen',
    'haute',
    'koord',
    'foppt',
    'erdol',
    'kings',
    'wenns',
    'nennt',
    'deine',
    'petra',
    'nehru',
    'wiege',
    'meine',
    'canon',
    'marge',
    'foens',
    'saite',
    'paste',
    'takle',
    'takte',
    'amors',
    'aspik',
    'gicht',
    'knien',
    'stout',
    'karat',
    'turme',
    'gelde',
    'stark',
    'derer',
    'novum',
    'nehme',
    'knast',
    'raunt',
    'letzt',
    'brave',
    'slums',
    'feilt',
    'autos',
    'heino',
    'logik',
    'pfaue',
    'merkt',
    'bezug',
    'garni',
    'blick',
    'wirst',
    'prinz',
    'wuste',
    'kinns',
    'opfer',
    'trieb',
    'halte',
    'klipp',
    'lerne',
    'faust',
    'keule',
    'sinus',
    'monde',
    'zakel',
    'kochs',
    'sehnt',
    'mager',
    'liest',
    'hockt',
    'fluge',
    'orgie',
    'atari',
    'labor',
    'deren',
    'zogen',
    'arten',
    'homer',
    'tatet',
    'gouda',
    'ochse',
    'walls',
    'wagen',
    'sankt',
    'quitt',
    'wollt',
    'siegs',
    'kommt',
    'flohs',
    'dunst',
    'licht',
    'allem',
    'robbe',
    'viert',
    'bucht',
    'tunke',
    'hoert',
    'kauft',
    'kabul',
    'kraft',
    'teils',
    'klein',
    'roete',
    'flink',
    'kreta',
    'banal',
    'duese',
    'volks',
    'lauer',
    'links',
    'hirse',
    'verdi',
    'joerg',
    'kokon',
    'dakar',
    'tulpe',
    'salem',
    'maeht',
    'rosig',
    'piper',
    'lotus',
    'radau',
    'index',
    'dolch',
    'junis',
    'eupen',
    'nahen',
    'backe',
    'datei',
    'ekzem',
    'geier',
    'apfel',
    'krank',
    'wetzt',
    'ulmen',
    'russe',
    'quarz',
    'croix',
    'zucke',
    'hupte',
    'gotts',
    'leser',
    'gabel',
    'harns',
    'rangt',
    'reite',
    'scham',
    'gibst',
    'edler',
    'nutze',
    'genre',
    'palme',
    'ulkst',
    'parke',
    'assen',
    'tests',
    'mikro',
    'ricke',
    'bitte',
    'adels',
    'floss',
    'lockt',
    'hafte',
    'firma',
    'slave',
    'jahre',
    'flach',
    'armem',
    'arher',
    'hobet',
    'irrst',
    'leimt',
    'jemen',
    'kanal',
    'kobra',
    'abzog',
    'dachs',
    'worum',
    'fango',
    'plump',
    'waren',
    'poker',
    'sofia',
    'reimt',
    'banne',
    'kaffs',
    'prado',
    'adeln',
    'gauda',
    'urins',
    'reime',
    'rollt',
    'fatal',
    'sorte',
    'trick',
    'orion',
    'stier',
    'keime',
    'salat',
    'codex',
    'komme',
    'bombe',
    'teert',
    'meter',
    'doris',
    'dover',
    'celle',
    'blume',
    'gehen',
]
*/
