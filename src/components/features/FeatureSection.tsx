'use client';

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
    <section className="relative py-20 md:py-28 noise-overlay">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
          {/* Visual */}
          <AnimatedOnScroll
            animation={isLeft ? 'slideFromLeft' : 'slideFromRight'}
            duration={0.7}
            easing={[0.22, 1, 0.36, 1]}
            className="flex-1 flex justify-center"
          >
            {visual}
          </AnimatedOnScroll>

          {/* Text */}
          <AnimatedOnScroll
            animation={isLeft ? 'slideFromRight' : 'slideFromLeft'}
            delay={0.1}
            duration={0.7}
            easing={[0.22, 1, 0.36, 1]}
            className="flex-1"
          >
            <span className="uppercase tracking-[0.15em] text-xs text-aihana-lavender font-medium">
              {label}
            </span>
            <h2
              className="mt-4 mb-5 font-bold text-white"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontFamily: 'var(--font-display)',
                lineHeight: 1.15,
              }}
            >
              {headline}
            </h2>
            <p className="text-aihana-offwhite/90 leading-[1.7] mb-6 max-w-lg">
              {body}
            </p>
            <p className="text-aihana-lilac/60 text-[13px] italic">
              {technicalNote}
            </p>
          </AnimatedOnScroll>
        </div>
      </div>
    </section>
  );
}
