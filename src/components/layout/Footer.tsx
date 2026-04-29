// Paper-folio Footer — replaces the indigo bottom bar with a folio
// colophon. Hairline ink rule on top, four columns of italic serif
// links arranged like a small-press masthead, and a plate I-style
// numeral colophon at the bottom carrying the trademark notice (per
// memory rule "Registered trademarks: Living Deck + Dealer Who
// Remembers — Don't recommend re-filing. Use as proper nouns").

import Link from 'next/link';
import { URLS } from '@/lib/constants';

const gameLinks = [
  'Hearts', 'War', 'Go Fish', 'Crazy Eights',
  'Koi-Koi', 'Gin Rummy', 'Big2', "Texas Hold'em",
];

export function Footer() {
  return (
    <footer className="bg-aihana-paper paper-grain border-t border-aihana-ink/15">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Columns — italic serif headers + ink links. Eyebrow style
            mirrors the lobby's TOC head ("contents · eight ways to play"). */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand colophon */}
          <div>
            <h3
              className="text-aihana-ink mb-3"
              style={{
                fontFamily: 'var(--font-folio)',
                fontWeight: 400,
                fontSize: '1.6rem',
                letterSpacing: '0.12em',
              }}
            >
              AIHANA
            </h3>
            <p
              className="text-aihana-ink-soft italic"
              style={{
                fontFamily: 'var(--font-folio)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
              }}
            >
              a dealer who remembers
              <sup className="text-[0.6em] align-super opacity-70 ml-0.5">™</sup>
            </p>
            <p
              className="text-aihana-ink-faint italic mt-1"
              style={{ fontFamily: 'var(--font-folio)', fontSize: '0.85rem' }}
            >
              the deck that remembers
              <sup className="text-[0.6em] align-super opacity-70 ml-0.5">™</sup>
            </p>
          </div>

          {/* Games column */}
          <div>
            <ColumnHeader>games</ColumnHeader>
            <ul className="space-y-1.5">
              {gameLinks.map((game) => (
                <li key={game}>
                  <a href="#games" className={linkClass}>
                    {game}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <ColumnHeader>company</ColumnHeader>
            <ul className="space-y-1.5">
              <li><Link href="/partnerships" className={linkClass}>Partnerships</Link></li>
              <li><Link href="/community" className={linkClass}>Community</Link></li>
              <li><Link href="/terms" className={linkClass}>Terms of Service</Link></li>
              <li><Link href="/privacy" className={linkClass}>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <ColumnHeader>connect</ColumnHeader>
            <ul className="space-y-1.5">
              <li><a href={`mailto:${URLS.email}`} className={linkClass}>{URLS.email}</a></li>
              <li><a href={URLS.reddit} target="_blank" rel="noopener noreferrer" className={linkClass}>Reddit r/aihana</a></li>
              <li><a href={URLS.appStore} target="_blank" rel="noopener noreferrer" className={linkClass}>App Store</a></li>
              <li><a href={URLS.googlePlay} target="_blank" rel="noopener noreferrer" className={linkClass}>Google Play</a></li>
            </ul>
          </div>
        </div>

        {/* Hairline ink rule — separates content from colophon. */}
        <div className="hairline-rule mb-8" />

        {/* Colophon — italic serif, low alpha, centered. Matches the
            lobby Colophon component's voice ("printed in aihana, on
            paper that remembers"). */}
        <div className="text-center space-y-2" style={{ fontFamily: 'var(--font-folio)' }}>
          <p
            className="italic text-aihana-ink-faint"
            style={{ fontSize: '0.78rem', letterSpacing: '0.04em' }}
          >
            © 2025–{new Date().getFullYear()} Aihana, LLC. all rights reserved.
          </p>
          <p
            className="italic text-aihana-ink-faint/80 max-w-2xl mx-auto"
            style={{ fontSize: '0.72rem', lineHeight: 1.7, letterSpacing: '0.02em' }}
          >
            AIHANA<sup className="text-[0.7em] align-super">™</sup>, A Dealer Who Remembers<sup className="text-[0.7em] align-super">™</sup>, and The Living Deck<sup className="text-[0.7em] align-super">™</sup> are trademarks of Aihana, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── Sub-components ────────────────────────────────────────

function ColumnHeader({ children }: { children: React.ReactNode }) {
  return (
    <h4
      className="text-aihana-ink-faint uppercase mb-4"
      style={{
        fontFamily: 'var(--font-folio)',
        fontSize: '0.65rem',
        letterSpacing: '0.3em',
        fontWeight: 600,
      }}
    >
      {children}
    </h4>
  );
}

const linkClass = `
  text-aihana-ink-soft hover:text-aihana-ink transition-colors
  relative after:absolute after:bottom-0 after:left-0 after:w-0
  after:h-px after:bg-aihana-ink after:transition-all
  after:duration-300 hover:after:w-full
`;
