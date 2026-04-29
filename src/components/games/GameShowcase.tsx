'use client';

// Paper-folio GameShowcase — replaces the indigo header + grid with a
// folio TOC. Eyebrow + serif italic headline + body, then the GameCard
// list arranged horizontally on mobile (snap-carousel) and as a
// 4-column grid on desktop. Hairline ink rule frames the section like
// every other paper page on the storefront.

import { AnimatedOnScroll } from '@/components/shared/AnimatedOnScroll';
import { GameCard } from './GameCard';
import { GAMES } from '@/lib/constants';

export function GameShowcase() {
  return (
    <section
      id="games"
      className="relative py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header — eyebrow + serif italic headline + body. */}
        <div className="text-center mb-16 px-6">
          <AnimatedOnScroll>
            <span
              className="text-aihana-ink-faint uppercase"
              style={{
                fontFamily: 'var(--font-folio)',
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                fontWeight: 600,
              }}
            >
              the table of contents
            </span>
          </AnimatedOnScroll>
          <AnimatedOnScroll delay={0.1}>
            <h2
              className="mt-4 text-aihana-ink"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: 'var(--font-folio)',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.2,
                letterSpacing: '0.005em',
              }}
            >
              eight ways to play.
            </h2>
          </AnimatedOnScroll>
          <AnimatedOnScroll delay={0.2}>
            <p
              className="mt-4 text-aihana-ink-soft max-w-md mx-auto"
              style={{
                fontFamily: 'var(--font-folio)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
              }}
            >
              from casual to considered. western classics to japanese tradition. one folio.
            </p>
          </AnimatedOnScroll>
        </div>

        {/* Game cards — snap carousel on mobile, 4-col grid on
            desktop. Each card is a tipped-in plate + Roman numeral +
            italic title + meta. */}
        <div
          className="flex gap-6 px-6 pb-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory
            lg:grid lg:grid-cols-4 lg:gap-8 lg:px-6 lg:overflow-visible"
        >
          {GAMES.map((game, i) => (
            <AnimatedOnScroll
              key={game.id}
              animation="scale"
              delay={i * 0.08}
              duration={0.5}
              easing={[0.22, 1, 0.36, 1]}
            >
              <GameCard game={game} />
            </AnimatedOnScroll>
          ))}
        </div>
      </div>

    </section>
  );
}
