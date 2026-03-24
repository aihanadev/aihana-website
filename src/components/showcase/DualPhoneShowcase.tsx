'use client';

import { AnimatedOnScroll } from '@/components/shared/AnimatedOnScroll';
import { PhoneMockup } from './PhoneMockup';

export function DualPhoneShowcase() {
  return (
    <section id="showcase" className="relative py-24 md:py-32 overflow-hidden">
      {/* Violet glow between phones */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(107,87,255,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedOnScroll>
            <span className="uppercase tracking-[0.2em] text-xs text-aihana-lavender font-medium">
              Live Multiplayer
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
              Two phones. One table.
            </h2>
          </AnimatedOnScroll>
          <AnimatedOnScroll delay={0.2}>
            <p className="mt-3 text-aihana-lilac max-w-md mx-auto">
              Watch a real match unfold from both sides.
            </p>
          </AnimatedOnScroll>
        </div>

        {/* Phone pair */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
          <AnimatedOnScroll animation="slideFromLeft" className="text-center">
            <PhoneMockup tilt="left" />
            <p className="mt-4 text-aihana-lilac/60 text-sm font-medium">Player 1</p>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="slideFromRight" delay={0.15} className="text-center">
            <PhoneMockup tilt="right" />
            <p className="mt-4 text-aihana-lilac/60 text-sm font-medium">Player 2</p>
          </AnimatedOnScroll>
        </div>

        {/* Caption */}
        <AnimatedOnScroll delay={0.3}>
          <p className="mt-12 text-center text-aihana-lilac/70 text-sm max-w-lg mx-auto">
            Real-time multiplayer. No turns waiting. Your move, their move, one table.
          </p>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}
