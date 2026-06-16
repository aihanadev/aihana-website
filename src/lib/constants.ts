// ── External URLs ─────────────────────────────────────────
export const URLS = {
  notifyForm: 'https://docs.google.com/forms/d/e/1FAIpQLSelN0m0twI7-2TPMUUtK7pwDAveQ6raQnzOqSzC7a5owrTT0g/viewform',
  partnershipsForm: 'https://docs.google.com/forms/d/e/1FAIpQLSdVer40h-TM49JIdJ6-vDhOUGLgcGoL8vBZqWsEf23LkSaBpg/viewform',
  reddit: 'https://www.reddit.com/r/aihana/',
  appStore: 'https://apps.apple.com/app/id6749252997',
  // Android not yet shipped — package id matches app.json (io.aihana.app) for when it does.
  googlePlay: 'https://play.google.com/store/apps/details?id=io.aihana.app',
  email: 'team@aihana.io',
} as const;

// ── Game Data (from registry.ts) ──────────────────────────
export interface GameInfo {
  id: string;
  name: string;
  icon: string;
  // Path to the game's tipped-in art under /public. Where the app
  // ships dedicated commissioned art (hearts/war/go_fish/crazy_eights/
  // gin_rummy/free_play), use /games/full/. Where the app uses a
  // hanafuda card (Koi-Koi: jan_crane; Big 2: dec_phoenix until
  // dedicated art arrives), use /hanafuda/. holdem has no art yet
  // (coming-soon).
  art?: string;
  playerCount: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  // Roman numeral for the folio TOC ordering — matches the app
  // lobby's TOC (commit 868d155 reorder: Koi-Koi I, War II, CE III,
  // Go Fish IV, Gin Rummy V, Big 2 VI, Hearts VII, Free Play VIII /
  // here we omit Free Play since it's the sandbox grammar position).
  numeral: string;
  comingSoon?: boolean;
}

export const GAMES: GameInfo[] = [
  {
    id: 'koikoi',
    name: 'Koi-Koi 花札',
    icon: '🎴',
    art: '/hanafuda/jan_crane.png',
    playerCount: 'two players',
    difficulty: 'Medium',
    description: 'japanese flower-card matching · twelve months, twelve flowers.',
    numeral: 'I',
  },
  {
    id: 'war',
    name: 'War',
    icon: '⚔️',
    art: '/games/full/war.png',
    playerCount: 'head-to-head',
    difficulty: 'Easy',
    description: 'highest card takes the trick · brisk and unforgiving.',
    numeral: 'II',
  },
  {
    id: 'crazy-eights',
    name: 'Crazy Eights',
    icon: '8️⃣',
    art: '/games/full/crazy_eights.png',
    playerCount: 'two to seven',
    difficulty: 'Easy',
    description: 'match the suit or rank · eights are wild · teach the dealer.',
    numeral: 'III',
  },
  {
    id: 'gofish',
    name: 'Go Fish',
    icon: '🎣',
    art: '/games/full/go_fish.png',
    playerCount: 'two to six',
    difficulty: 'Easy',
    description: 'ask, collect, remember · the simplest hand in the folio.',
    numeral: 'IV',
  },
  {
    id: 'ginrummy',
    name: 'Gin Rummy',
    icon: '🃏',
    art: '/games/full/gin_rummy.png',
    playerCount: 'two to four',
    difficulty: 'Medium',
    description: 'draw, meld, knock · the patient hand wins.',
    numeral: 'V',
  },
  {
    id: 'big2',
    name: 'Big 2 大老二',
    icon: '🎯',
    art: '/hanafuda/dec_phoenix.png',
    playerCount: 'four players',
    difficulty: 'Hard',
    description: 'cascading combinations · climb out of the deal.',
    numeral: 'VI',
  },
  {
    id: 'hearts',
    name: 'Hearts',
    icon: '♥️',
    art: '/games/full/hearts.png',
    playerCount: 'four players',
    difficulty: 'Medium',
    description: 'avoid the points · the black lady waits.',
    numeral: 'VII',
  },
  {
    id: 'sandbox',
    name: 'Free Play',
    icon: '🃏',
    art: '/games/full/free_play.png',
    playerCount: 'open canvas',
    difficulty: 'Easy',
    description: 'no rules · just cards · together.',
    numeral: 'VIII',
  },
  {
    id: 'holdem',
    name: "Texas Hold'em",
    icon: '🃏',
    playerCount: 'two to ten',
    difficulty: 'Hard',
    description: "the world's most-played poker · arriving in the next folio.",
    numeral: '—',
    comingSoon: true,
  },
];

// ── Poem Lines ────────────────────────────────────────────
export const POEM_LINES = [
  'Cards in hand are like drops in a river.',
  'Each one, when cast, ripples into forever.',
  '',
  'The foolish dealer forgets the stream —',
  'deals again as though the water were still.',
  'But the true dealer remembers.',
  'Each current, each stone, each bend of the flow.',
  '',
  'The Living Deck™ is no mere game.',
  'It is memory embodied,',
  'teaching carried in silence,',
  'a path revealed in play.',
  '',
  'The dealer who remembers',
  'does not hold power —',
  'he holds story.',
  'And through story,',
  'players find their way back to one another.',
];

export const GLOW_WORDS = ['river', 'forever', 'remembers', 'Living Deck', 'story'];

// ── Freeplay Steps ────────────────────────────────────────
export const FREEPLAY_STEPS = [
  {
    number: 1,
    label: 'Play Freely',
    headline: 'No Rules. Just Cards.',
    description: 'Drag cards on an open table. No constraints, no turn order, no judgment. Play like you would at home.',
  },
  {
    number: 2,
    label: 'AI Observes',
    headline: 'The Dealer Watches Silently',
    description: "While you play, Aihana's AI analyzes every move, every pattern, every sequence. It doesn't interrupt — it learns.",
  },
  {
    number: 3,
    label: 'Rules Emerge',
    headline: 'Your Game, Decoded',
    description: 'Tap "What am I playing?" and watch: card archetype detection, individual rules with confidence scores, all synthesized from observation alone.',
  },
  {
    number: 4,
    label: 'Your Game',
    headline: 'Named. Saved. Enforced.',
    description: 'Name your creation. The rules go live. From freeplay to governed gameplay in one tap.',
  },
] as const;
