// Paper-folio GameCard — replaces the indigo glass card (radial glow,
// emoji-on-violet, gradient hover) with a folio TOC row entry. Roman
// numeral + tipped-in plate + serif italic title + ink-soft meta. Hover
// raises the plate slightly and gilts the numeral. Coming-soon overlay
// is a paper sheet with a serif italic stamp, not a backdrop blur.

import Image from 'next/image';
import type { GameInfo } from '@/lib/constants';

const difficultyTag: Record<string, string> = {
  Easy: 'brisk',
  Medium: 'considered',
  Hard: 'patient',
};

export function GameCard({ game }: { game: GameInfo }) {
  return (
    <div className="relative flex-shrink-0 w-[260px] snap-center group">
      <div
        className="h-[400px] overflow-hidden bg-aihana-paper-high
          border border-aihana-ink/20
          transition-all duration-300
          group-hover:-translate-y-1.5
          group-hover:border-aihana-ink/45"
        style={{
          borderRadius: 4,
          boxShadow: '0 6px 18px rgba(26,18,40,0.12)',
        }}
      >
        {/* Plate area — ink-matted tipped-in image, takes the upper
            ~62% of the card. Falls back to a plain ink slate with
            the icon glyph if no art is shipped (holdem). */}
        <div
          className="relative w-full"
          style={{ height: '62%' }}
        >
          {game.art ? (
            <div
              className="absolute inset-0 m-3 bg-aihana-ink overflow-hidden"
              style={{ padding: 4, borderRadius: 2 }}
            >
              <div
                className="relative w-full h-full overflow-hidden"
                style={{ borderRadius: 1 }}
              >
                <Image
                  src={game.art}
                  alt={game.name}
                  fill
                  sizes="260px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ) : (
            <div
              className="absolute inset-0 m-3 bg-aihana-ink flex items-center justify-center"
              style={{ borderRadius: 2 }}
            >
              <span className="text-5xl">{game.icon}</span>
            </div>
          )}
        </div>

        {/* Caption area — Roman numeral + serif italic title +
            ink-soft meta line. */}
        <div className="px-5 pt-3 pb-5">
          <div className="flex items-baseline gap-3 mb-1.5">
            <span
              className="text-aihana-ink-faint group-hover:text-aihana-gilt-deep transition-colors"
              style={{
                fontFamily: 'var(--font-folio)',
                fontSize: '0.85rem',
                fontStyle: 'italic',
                letterSpacing: '0.05em',
              }}
            >
              {game.numeral}
            </span>
            <h3
              className="text-aihana-ink"
              style={{
                fontFamily: 'var(--font-folio)',
                fontSize: '1.15rem',
                fontWeight: 500,
                letterSpacing: '0.005em',
              }}
            >
              {game.name}
            </h3>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-aihana-ink-soft italic"
              style={{
                fontFamily: 'var(--font-folio)',
                fontSize: '0.78rem',
              }}
            >
              {game.playerCount}
            </span>
            <span
              className="text-aihana-ink-faint"
              style={{ fontFamily: 'var(--font-folio)', fontSize: '0.78rem' }}
            >
              ·
            </span>
            <span
              className="uppercase"
              style={{
                fontFamily: 'var(--font-folio)',
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                color: 'var(--color-aihana-gilt-deep)',
                fontWeight: 600,
              }}
            >
              {difficultyTag[game.difficulty]}
            </span>
          </div>

          <p
            className="text-aihana-ink-soft italic line-clamp-2"
            style={{
              fontFamily: 'var(--font-folio)',
              fontSize: '0.85rem',
              lineHeight: 1.5,
            }}
          >
            {game.description}
          </p>
        </div>
      </div>

      {/* Coming-soon paper overlay — italic serif stamp, no blur. */}
      {game.comingSoon && (
        <div
          className="absolute inset-0 bg-aihana-paper/85 flex items-center justify-center"
          style={{ borderRadius: 4 }}
        >
          <span
            className="uppercase"
            style={{
              fontFamily: 'var(--font-folio)',
              fontSize: '0.78rem',
              letterSpacing: '0.3em',
              color: 'var(--color-aihana-gilt-deep)',
              fontWeight: 600,
              border: '1px solid var(--color-aihana-gilt-deep)',
              padding: '6px 14px',
              borderRadius: 2,
              transform: 'rotate(-3deg)',
            }}
          >
            in the next folio
          </span>
        </div>
      )}
    </div>
  );
}
