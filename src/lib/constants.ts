// ── External URLs ─────────────────────────────────────────
export const URLS = {
  notifyForm: 'https://docs.google.com/forms/d/e/1FAIpQLSelN0m0twI7-2TPMUUtK7pwDAveQ6raQnzOqSzC7a5owrTT0g/viewform',
  partnershipsForm: 'https://docs.google.com/forms/d/e/1FAIpQLSdVer40h-TM49JIdJ6-vDhOUGLgcGoL8vBZqWsEf23LkSaBpg/viewform',
  reddit: 'https://www.reddit.com/r/aihana/',
  appStore: 'https://apps.apple.com/app/aihana',
  googlePlay: 'https://play.google.com/store/apps/details?id=com.anonymous.aihana',
  email: 'team@aihana.io',
} as const;

// ── Game Data (from registry.ts) ──────────────────────────
export interface GameInfo {
  id: string;
  name: string;
  icon: string;
  playerCount: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  glowColor: string;
  comingSoon?: boolean;
}

export const GAMES: GameInfo[] = [
  {
    id: 'hearts',
    name: 'Hearts',
    icon: '♥️',
    playerCount: '4 Players',
    difficulty: 'Medium',
    description: 'Classic trick-taking strategy',
    glowColor: 'rgba(239, 68, 68, 0.3)',
  },
  {
    id: 'war',
    name: 'War',
    icon: '⚔️',
    playerCount: '2–6 Players',
    difficulty: 'Easy',
    description: 'Highest card wins the battle',
    glowColor: 'rgba(245, 158, 11, 0.3)',
  },
  {
    id: 'gofish',
    name: 'Go Fish',
    icon: '🎣',
    playerCount: '2–6 Players',
    difficulty: 'Easy',
    description: 'Ask, collect, remember',
    glowColor: 'rgba(59, 130, 246, 0.3)',
  },
  {
    id: 'crazy-eights',
    name: 'Crazy Eights',
    icon: '8️⃣',
    playerCount: '2–7 Players',
    difficulty: 'Easy',
    description: 'Match the suit or rank',
    glowColor: 'rgba(34, 197, 94, 0.3)',
  },
  {
    id: 'koikoi',
    name: 'Koi-Koi 花札',
    icon: '🎴',
    playerCount: '2 Players',
    difficulty: 'Medium',
    description: 'Japanese flower card matching',
    glowColor: 'rgba(236, 72, 153, 0.3)',
  },
  {
    id: 'ginrummy',
    name: 'Gin Rummy',
    icon: '🃏',
    playerCount: '2–4 Players',
    difficulty: 'Medium',
    description: 'Draw, meld, and knock',
    glowColor: 'rgba(234, 179, 8, 0.3)',
  },
  {
    id: 'big2',
    name: 'Big2 大老二',
    icon: '🎯',
    playerCount: '4 Players',
    difficulty: 'Hard',
    description: 'Chinese climbing poker',
    glowColor: 'rgba(234, 179, 8, 0.3)',
  },
  {
    id: 'holdem',
    name: "Texas Hold'em",
    icon: '🃏',
    playerCount: '2–10 Players',
    difficulty: 'Hard',
    description: "The world's most popular poker",
    glowColor: 'rgba(16, 185, 129, 0.3)',
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
