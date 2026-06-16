'use client';

// Paper-folio DownloadCTA — replaces the radial-violet-glow CTA with
// a folio-page closing rhythm. Hairline rule above, italic eyebrow,
// serif headline, vermillion ribbon CTAs, gilt italic colophon line
// at the bottom. The voice is "the table is open" — invitational,
// not "Play Your Way" / SaaS-imperative.

import { AnimatedOnScroll } from '@/components/shared/AnimatedOnScroll';
import { URLS } from '@/lib/constants';

export function DownloadCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
        {/* Eyebrow — italic uppercase serif. */}
        <AnimatedOnScroll>
          <span
            className="text-aihana-ink-faint uppercase block mb-5"
            style={{
              fontFamily: 'var(--font-folio)',
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              fontWeight: 600,
            }}
          >
            tonight · the table is open
          </span>
        </AnimatedOnScroll>

        {/* Headline — serif italic, the dealer's invitation. */}
        <AnimatedOnScroll delay={0.05}>
          <h2
            className="text-aihana-ink mb-5"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.4rem)',
              fontFamily: 'var(--font-folio)',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.2,
              letterSpacing: '0.005em',
            }}
          >
            find your seat.
          </h2>
        </AnimatedOnScroll>

        <AnimatedOnScroll delay={0.1}>
          <p
            className="text-aihana-ink-soft mb-10 max-w-md mx-auto"
            style={{
              fontFamily: 'var(--font-folio)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
            }}
          >
            available on iOS — android arrives soon. eight games tonight — Texas Hold'em arrives in tomorrow's folio.
          </p>
        </AnimatedOnScroll>

        {/* Vermillion ribbon CTAs — primary download buttons. */}
        <AnimatedOnScroll delay={0.18}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={URLS.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 uppercase
                bg-aihana-vermillion text-aihana-paper-high
                border border-aihana-vermillion-deep
                hover:bg-aihana-vermillion-deep
                transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-folio)',
                letterSpacing: '0.18em',
                fontSize: '0.78rem',
                fontWeight: 500,
                borderRadius: 2,
              }}
            >
              download for iOS
            </a>
            {/* Android not yet shipped — inert ghosted affordance so the
                copy stays honest until the Play release lands. */}
            <span
              aria-disabled="true"
              className="px-8 py-3 uppercase
                text-aihana-ink-faint
                border border-aihana-ink/20
                cursor-default select-none"
              style={{
                fontFamily: 'var(--font-folio)',
                letterSpacing: '0.18em',
                fontSize: '0.78rem',
                fontWeight: 500,
                borderRadius: 2,
              }}
            >
              android · coming soon
            </span>
          </div>
        </AnimatedOnScroll>

        {/* Secondary affordance — italic invitation, ink-ghost button. */}
        <AnimatedOnScroll delay={0.28}>
          <div className="mt-12">
            <p
              className="italic text-aihana-ink-faint mb-4"
              style={{ fontFamily: 'var(--font-folio)', fontSize: '0.95rem' }}
            >
              or be notified when new games arrive in the folio:
            </p>
            <a
              href={URLS.notifyForm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-2.5 uppercase
                text-aihana-ink
                border border-aihana-ink/40
                hover:bg-aihana-ink/5 hover:border-aihana-ink/70
                transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-folio)',
                letterSpacing: '0.18em',
                fontSize: '0.7rem',
                fontWeight: 500,
                borderRadius: 2,
              }}
            >
              be notified
            </a>
          </div>
        </AnimatedOnScroll>

        {/* Colophon line — gilt italic, low alpha. The folio's
            footnote register. */}
        <p
          className="italic mt-12"
          style={{
            fontFamily: 'var(--font-folio)',
            fontSize: '0.78rem',
            color: 'var(--color-aihana-gilt-deep)',
            letterSpacing: '0.04em',
          }}
        >
          free to download · no ads · no interruptions
        </p>
      </div>

    </section>
  );
}
