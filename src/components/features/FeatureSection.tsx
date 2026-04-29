'use client';

// Paper-folio FeatureSection — replaces the indigo-on-dark feature
// block with a folio-page rhythm. Italic uppercase eyebrow, serif
// display headline, paper-toned body copy, italic gilt technical
// note. Hairline rule above and below the section bracket it like a
// chapter in a book. Visual side is treated as a tipped-in plate
// (passed in as a child by callers).

import { AnimatedOnScroll } from '@/components/shared/AnimatedOnScroll';

interface Props {
  label: string;
  headline: string;
  body: string;
  technicalNote: string;
  visual: React.ReactNode;
  layout: 'visual-left' | 'visual-right';
}

export function FeatureSection({ label, headline, body, technicalNote, visual, layout }: Props) {
  const isLeft = layout === 'visual-left';

  return (
    <section className="relative py-20 md:py-28 paper-grain bg-aihana-paper">
      {/* Hairline bracket — top */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="hairline-rule mb-16 md:mb-20" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
          {/* Visual side — tipped-in plate */}
          <AnimatedOnScroll
            animation={isLeft ? 'slideFromLeft' : 'slideFromRight'}
            duration={0.7}
            easing={[0.22, 1, 0.36, 1]}
            className="flex-1 flex justify-center"
          >
            {visual}
          </AnimatedOnScroll>

          {/* Text side */}
          <AnimatedOnScroll
            animation={isLeft ? 'slideFromRight' : 'slideFromLeft'}
            delay={0.1}
            duration={0.7}
            easing={[0.22, 1, 0.36, 1]}
            className="flex-1"
          >
            {/* Eyebrow — small uppercase, ink-faint, wide tracking.
                Mirrors LobbyPaper folioLabel + tocHeadCount. */}
            <span
              className="text-aihana-ink-faint uppercase"
              style={{
                fontFamily: 'var(--font-folio)',
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                fontWeight: 600,
              }}
            >
              {label}
            </span>

            {/* Headline — serif italic, 400 weight. The rhetoric of
                a chapter title, not a SaaS landing-page H2. */}
            <h2
              className="mt-4 mb-5 text-aihana-ink"
              style={{
                fontSize: 'clamp(1.85rem, 3.6vw, 2.6rem)',
                fontFamily: 'var(--font-folio)',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.18,
                letterSpacing: '0.005em',
              }}
            >
              {headline}
            </h2>

            {/* Body — paper-readable serif, ink-soft for warmth. */}
            <p
              className="text-aihana-ink-soft mb-6 max-w-lg"
              style={{
                fontFamily: 'var(--font-folio)',
                fontSize: '1.05rem',
                lineHeight: 1.75,
              }}
            >
              {body}
            </p>

            {/* Technical note — gilt-toned italic, smaller, tracked.
                The folio's footnote register. */}
            <p
              className="italic"
              style={{
                fontFamily: 'var(--font-folio)',
                fontSize: '0.78rem',
                lineHeight: 1.6,
                color: 'var(--color-aihana-gilt-deep)',
                letterSpacing: '0.02em',
              }}
            >
              {technicalNote}
            </p>
          </AnimatedOnScroll>
        </div>
      </div>

      {/* Hairline bracket — bottom */}
      <div className="max-w-6xl mx-auto px-6 mt-16 md:mt-20">
        <div className="hairline-rule" />
      </div>
    </section>
  );
}
