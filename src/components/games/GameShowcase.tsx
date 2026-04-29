'use client';

// Paper-folio GameShowcase — restructured as a vertical TOC list,
// mirroring LobbyPaper.TocRow exactly. Roman numeral + tipped-in
// plate thumbnail + serif italic title + dotted-leader rule + meta.
// Reviewer note: "the eight-game TOC as the spine" — replaces the
// 4-column card grid with the same TOC vocabulary the app lobby
// uses, so the website's central index reads as a real folio
// table of contents instead of a SaaS feature grid.
//
// Coming-soon games render with a "in the next folio" stamp
// inline rather than as an overlay.

import Image from 'next/image';
import { AnimatedOnScroll } from '@/components/shared/AnimatedOnScroll';
import { GAMES } from '@/lib/constants';

const FOLIO_FONT = 'var(--font-folio)';

const difficultyTag: Record<string, string> = {
  Easy: 'brisk',
  Medium: 'considered',
  Hard: 'patient',
};

export function GameShowcase() {
  return (
    <section
      id="games"
      className="relative py-24 md:py-32"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <AnimatedOnScroll>
            <span
              className="text-aihana-ink-faint uppercase"
              style={{
                fontFamily: FOLIO_FONT,
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                fontWeight: 600,
              }}
            >
              in tonight's folio
            </span>
          </AnimatedOnScroll>
          <AnimatedOnScroll delay={0.1}>
            <h2
              className="mt-4 text-aihana-ink"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: FOLIO_FONT,
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.2,
                letterSpacing: '0.005em',
              }}
            >
              the table of contents.
            </h2>
          </AnimatedOnScroll>
          <AnimatedOnScroll delay={0.2}>
            <div className="flex items-baseline justify-center gap-3 mt-3">
              <div className="hairline-rule flex-1 max-w-[120px]" />
              <span
                className="text-aihana-ink-faint uppercase"
                style={{
                  fontFamily: FOLIO_FONT,
                  fontSize: '0.62rem',
                  letterSpacing: '0.3em',
                  fontWeight: 600,
                }}
              >
                eight ways to play
              </span>
              <div className="hairline-rule flex-1 max-w-[120px]" />
            </div>
          </AnimatedOnScroll>
        </div>

        {/* TOC list */}
        <div className="mt-10">
          {GAMES.map((game, i) => (
            <AnimatedOnScroll
              key={game.id}
              delay={i * 0.04}
              duration={0.5}
              easing={[0.22, 1, 0.36, 1]}
            >
              <TocRow game={game} isFirst={i === 0} />
            </AnimatedOnScroll>
          ))}
          {/* Closing rule */}
          <div className="hairline-rule mt-2" />
        </div>
      </div>
    </section>
  );
}

// ── TocRow ────────────────────────────────────────────────
// Roman numeral + tipped-in plate thumbnail + serif title + meta.
// Mirrors LobbyPaper's TocRow exactly so the website spine and the
// app TOC are visually interchangeable.

function TocRow({ game, isFirst }: { game: typeof GAMES[number]; isFirst: boolean }) {
  return (
    <div
      className={`flex items-center gap-4 py-4 ${
        isFirst ? '' : 'border-t border-aihana-ink/15'
      }`}
      style={{ opacity: game.comingSoon ? 0.55 : 1 }}
    >
      {/* Plate thumbnail — paper-low mat, photo corners, slight tilt
          per row so each entry feels placed by hand. */}
      <div
        className="relative flex-shrink-0"
        style={{
          width: 36,
          height: 56,
          transform: `rotate(${
            ((game.numeral.length + game.name.length) % 5) - 2
          }deg)`,
          padding: 3,
          borderRadius: 2,
          backgroundColor: 'var(--color-aihana-paper-low)',
          border: '1px solid rgba(26,18,40,0.18)',
          boxShadow: '0 2px 6px rgba(26,18,40,0.1)',
        }}
      >
        {game.art ? (
          <div
            className="relative w-full h-full overflow-hidden"
            style={{ borderRadius: 1 }}
          >
            <Image
              src={game.art}
              alt={game.name}
              fill
              sizes="36px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span style={{ fontSize: '0.85rem', opacity: 0.55 }}>
              {game.icon}
            </span>
          </div>
        )}
      </div>

      {/* Roman numeral — italic, ink-faint */}
      <span
        className="text-aihana-ink-faint italic flex-shrink-0"
        style={{
          fontFamily: FOLIO_FONT,
          fontSize: '0.95rem',
          letterSpacing: '0.05em',
          width: 32,
        }}
      >
        {game.numeral}
      </span>

      {/* Title */}
      <h3
        className="text-aihana-ink flex-shrink-0"
        style={{
          fontFamily: FOLIO_FONT,
          fontSize: '1.1rem',
          fontWeight: 500,
          letterSpacing: '0.005em',
        }}
      >
        {game.name}
      </h3>

      {/* Tag — vermillion stamp for "in the next folio" or rotated
          gilt italic for difficulty, depending on state. */}
      {game.comingSoon ? (
        <span
          className="uppercase"
          style={{
            fontFamily: FOLIO_FONT,
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            color: 'var(--color-aihana-gilt-deep)',
            fontWeight: 600,
            border: '1px solid var(--color-aihana-gilt-deep)',
            padding: '2px 6px',
            borderRadius: 2,
            transform: 'rotate(-2deg)',
            display: 'inline-block',
          }}
        >
          in the next folio
        </span>
      ) : (
        <span
          className="uppercase"
          style={{
            fontFamily: FOLIO_FONT,
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            color: 'var(--color-aihana-gilt-deep)',
            fontWeight: 600,
          }}
        >
          {difficultyTag[game.difficulty]}
        </span>
      )}

      {/* Dotted leader */}
      <div
        className="flex-1 self-end"
        style={{
          marginBottom: 5,
          marginLeft: 4,
          marginRight: 4,
          height: 1,
          borderBottom: '1px dotted var(--color-aihana-ink-faint)',
          opacity: 0.65,
        }}
      />

      {/* Meta — italic serif, ink-soft. */}
      <span
        className="text-aihana-ink-soft italic flex-shrink-0 hidden sm:inline-block"
        style={{
          fontFamily: FOLIO_FONT,
          fontSize: '0.85rem',
          textAlign: 'right',
        }}
      >
        {game.playerCount}
      </span>
    </div>
  );
}
