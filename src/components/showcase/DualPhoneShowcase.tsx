'use client';

// Paper-folio DualPhoneShowcase — replaces the indigo radial-violet
// glow + dual phone block with a folio chapter. Eyebrow + serif italic
// headline, two ink-on-paper phone mockups tilted toward each other,
// italic caption below. Hairline brackets frame the section.

import { AnimatedOnScroll } from '@/components/shared/AnimatedOnScroll';
import { PhoneMockup } from './PhoneMockup';

export function DualPhoneShowcase() {
  return (
    <section
      id="showcase"
      className="relative py-24 md:py-32 paper-grain bg-aihana-paper overflow-hidden"
    >
      {/* Hairline ink bracket — top */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="hairline-rule mb-16 md:mb-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
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
              live multiplayer
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
              two phones. one table.
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
              the deal opens on both seats at once. real-time multiplayer.
            </p>
          </AnimatedOnScroll>
        </div>

        {/* Phone pair — distinct scenes per seat (reviewer note:
            previous identical splash mocks undersold the multiplayer
            story). Left phone shows the PASSING phase (seat tapping
            three to pass left). Right phone shows the same hand a
            moment later, in trick play (the bot leads, the human's
            playable clubs lift in their fan). The viewer reads the
            two phones as one match unfolding from both sides. */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
          <AnimatedOnScroll animation="slideFromLeft" className="text-center">
            <PhoneMockup tilt="left" scene="passing" />
            <p
              className="mt-4 text-aihana-ink-faint italic"
              style={{ fontFamily: 'var(--font-folio)', fontSize: '0.85rem' }}
            >
              the pass
            </p>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="slideFromRight" delay={0.15} className="text-center">
            <PhoneMockup tilt="right" scene="trick" />
            <p
              className="mt-4 text-aihana-ink-faint italic"
              style={{ fontFamily: 'var(--font-folio)', fontSize: '0.85rem' }}
            >
              the trick
            </p>
          </AnimatedOnScroll>
        </div>

        {/* Caption */}
        <AnimatedOnScroll delay={0.3}>
          <p
            className="mt-12 text-center text-aihana-ink-soft italic max-w-lg mx-auto"
            style={{ fontFamily: 'var(--font-folio)', fontSize: '1rem' }}
          >
            real-time multiplayer. no waiting. your move, their move, one table.
          </p>
        </AnimatedOnScroll>
      </div>

      {/* Hairline ink bracket — bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-20">
        <div className="hairline-rule" />
      </div>
    </section>
  );
}
