'use client';

// Paper-folio FreeplaySection — replaces the indigo sticky-scroll
// AI-learns-rules demo with a folio chapter. The four steps render as
// a numbered-Roman list, italic eyebrow, serif italic headline, body
// copy, hairline rule between steps. No animated visualizations — the
// actual demo lives in the app; the website's job is to set the
// concept clean.
//
// The previous implementation imported four PlayFreelyVisual /
// AIObservesVisual / RulesEmergeVisual / GameNamedVisual components
// plus FreeplayStep. All five are now orphaned and removed.

import { AnimatedOnScroll } from '@/components/shared/AnimatedOnScroll';
import { FREEPLAY_STEPS } from '@/lib/constants';

const ROMAN = ['I', 'II', 'III', 'IV'];

export function FreeplaySection() {
  return (
    <section className="relative paper-grain bg-aihana-paper">
      {/* Hairline ink bracket — top */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="hairline-rule mt-8 md:mt-12" />
      </div>

      {/* Section header */}
      <div className="text-center pt-20 pb-12 px-6">
        <AnimatedOnScroll duration={0.5} easing={[0.34, 1.56, 0.64, 1]}>
          <span
            className="text-aihana-ink-faint uppercase"
            style={{
              fontFamily: 'var(--font-folio)',
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              fontWeight: 600,
            }}
          >
            the crown jewel
          </span>
        </AnimatedOnScroll>
        <AnimatedOnScroll delay={0.1} duration={0.7} easing={[0.22, 1, 0.36, 1]}>
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
            teach by playing.
          </h2>
        </AnimatedOnScroll>
        <AnimatedOnScroll delay={0.2} duration={0.5} easing={[0.22, 1, 0.36, 1]}>
          <p
            className="mt-4 text-aihana-ink-soft max-w-xl mx-auto"
            style={{
              fontFamily: 'var(--font-folio)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
            }}
          >
            play any card game freely. the dealer watches, learns, and synthesizes the rules — from nothing. no programming. no rule books. just play.
          </p>
        </AnimatedOnScroll>
      </div>

      {/* Step list — numbered Roman, italic eyebrow, serif headline,
          body. Hairline rule between steps. */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        {FREEPLAY_STEPS.map((step, i) => (
          <AnimatedOnScroll
            key={i}
            delay={i * 0.06}
            duration={0.6}
            easing={[0.22, 1, 0.36, 1]}
          >
            <div className="flex gap-8 md:gap-12 py-10 md:py-12">
              {/* Roman numeral — gilt italic, the chapter number. */}
              <div
                className="italic flex-shrink-0"
                style={{
                  fontFamily: 'var(--font-folio)',
                  fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                  fontWeight: 400,
                  color: 'var(--color-aihana-gilt-deep)',
                  letterSpacing: '0.04em',
                  lineHeight: 1,
                }}
              >
                {ROMAN[i]}
              </div>

              {/* Body */}
              <div className="flex-1">
                <span
                  className="text-aihana-ink-faint uppercase block mb-2"
                  style={{
                    fontFamily: 'var(--font-folio)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.3em',
                    fontWeight: 600,
                  }}
                >
                  {step.label.toLowerCase()}
                </span>
                <h3
                  className="text-aihana-ink mb-3"
                  style={{
                    fontFamily: 'var(--font-folio)',
                    fontSize: 'clamp(1.4rem, 2.6vw, 1.8rem)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    lineHeight: 1.25,
                    letterSpacing: '0.005em',
                  }}
                >
                  {step.headline.toLowerCase()}
                </h3>
                <p
                  className="text-aihana-ink-soft"
                  style={{
                    fontFamily: 'var(--font-folio)',
                    fontSize: '1.02rem',
                    lineHeight: 1.7,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>

            {i < FREEPLAY_STEPS.length - 1 && <div className="hairline-rule" />}
          </AnimatedOnScroll>
        ))}
      </div>

      {/* Hairline ink bracket — bottom */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="hairline-rule mb-12" />
      </div>
    </section>
  );
}
