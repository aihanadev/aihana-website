'use client';

// Paper-folio gameplay showcase — collapses the previous "two phones,
// one table" dual-mockup into a single tipped-in plate showing a
// trick-in-motion gameplay scene. Reviewer note: "the multiplayer
// demo as a tipped-in plate." Single artifact reads as one
// curated photograph in the folio rather than two redundant phones.
// Real-time-multiplayer story is now copy-driven — visually it's
// one frozen moment of play.

import { AnimatedOnScroll } from '@/components/shared/AnimatedOnScroll';
import { PhoneMockup } from './PhoneMockup';

export function DualPhoneShowcase() {
  return (
    <section
      id="showcase"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-6">
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
              plate · the table
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
              one table, in motion.
            </h2>
          </AnimatedOnScroll>
          <AnimatedOnScroll delay={0.2}>
            <p
              className="mt-4 text-aihana-ink-soft italic max-w-md mx-auto"
              style={{
                fontFamily: 'var(--font-folio)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
              }}
            >
              real-time multiplayer. four seats, one hand. your move, their move, no waiting.
            </p>
          </AnimatedOnScroll>
        </div>

        {/* Single tipped-in plate — Hearts trick-in-motion scene
            painted as a paper-folio mockup. Gentle tilt, photo
            corners, paper-low mat. The phone is the tipped-in
            artifact. */}
        <AnimatedOnScroll
          animation="scale"
          duration={0.7}
          easing={[0.22, 1, 0.36, 1]}
          className="flex justify-center"
        >
          <div className="relative" style={{ transform: 'rotate(-1deg)' }}>
            <PhoneMockup tilt="none" scene="trick" />
            {/* Italic caption beneath the plate, like a folio
                photo-credit. */}
            <p
              className="mt-6 italic text-center text-aihana-ink-soft"
              style={{ fontFamily: 'var(--font-folio)', fontSize: '0.9rem' }}
            >
              the trick · hearts · 8:42pm
            </p>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
}
