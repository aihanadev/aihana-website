'use client';

import { AnimatedOnScroll } from '@/components/shared/AnimatedOnScroll';
import { GameCard } from './GameCard';
import { GAMES } from '@/lib/constants';

export function GameShowcase() {
  return (
    <section id="games" className="relative py-24 md:py-32 noise-overlay">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 px-6">
          <AnimatedOnScroll>
            <span className="uppercase tracking-[0.2em] text-xs text-aihana-lavender font-medium">
              The Table
            </span>
          </AnimatedOnScroll>
          <AnimatedOnScroll delay={0.1}>
            <h2
              className="mt-4 font-bold text-white"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: 'var(--font-display)',
              }}
            >
              Eight Games. One Platform.
            </h2>
          </AnimatedOnScroll>
          <AnimatedOnScroll delay={0.2}>
            <p className="mt-3 text-aihana-lilac max-w-md mx-auto">
              From casual to competitive. Western classics to Japanese tradition.
            </p>
          </AnimatedOnScroll>
        </div>

        {/* Game cards — horizontal scroll on mobile, grid on desktop */}
        <div
          className="flex gap-6 px-6 pb-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory
            lg:grid lg:grid-cols-4 lg:gap-8 lg:px-6 lg:overflow-visible"
        >
          {GAMES.map((game, i) => (
            <AnimatedOnScroll key={game.id} animation="scale" delay={i * 0.1} duration={0.5} easing={[0.22, 1, 0.36, 1]}>
              <GameCard game={game} />
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
