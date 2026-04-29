'use client';

// Paper-folio LivingDeckPoem — replaces the indigo radial-vignette
// poem block with a folio-page reading rhythm. Paper substrate, ink
// type, gilt for the GLOW_WORDS instead of violet glow. The video
// background is removed (paper doesn't move with light); the poem
// stands on the page. Scroll-driven line reveal preserved — each
// line drifts in as the section enters the viewport.

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { POEM_LINES, GLOW_WORDS } from '@/lib/constants';

function PoemLine({
  line,
  progress,
  index,
  total,
}: {
  line: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const isEmpty = line.trim() === '';
  const start = index / total;
  const end = (index + 0.8) / total;

  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [12, 0]);

  if (isEmpty) {
    return <div className="h-6" />;
  }

  const hasGlow = GLOW_WORDS.some((word) => line.includes(word));

  return (
    <motion.p
      style={{ opacity, y }}
      className={`mb-2 ${hasGlow ? 'text-aihana-ink' : 'text-aihana-ink-soft'}`}
    >
      {hasGlow ? (
        <span style={{ color: 'var(--color-aihana-gilt-deep)' }}>{line}</span>
      ) : (
        line
      )}
    </motion.p>
  );
}

export function LivingDeckPoem() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const endOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-24 bg-aihana-paper paper-grain"
    >
      {/* Soft top-down warm gradient — paperHigh crowns the page,
          fading to the body paper. No video, no radial vignette. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, #FAF3DD 0%, #F4ECD3 70%, #F4ECD3 100%)',
        }}
      />

      {/* Hairline ink brackets — frame the poem like a chapter. */}
      <div className="absolute top-[8%] left-[8%] right-[8%] h-px bg-aihana-ink/12 pointer-events-none" />
      <div className="absolute bottom-[8%] left-[8%] right-[8%] h-px bg-aihana-ink/12 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div
          className="text-aihana-ink-faint uppercase mb-8"
          style={{
            fontFamily: 'var(--font-folio)',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            fontWeight: 600,
          }}
        >
          plate IV · the river
        </div>

        <div
          style={{
            fontFamily: 'var(--font-folio)',
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            fontStyle: 'italic',
            lineHeight: 1.85,
          }}
        >
          {POEM_LINES.map((line, i) => (
            <PoemLine
              key={i}
              line={line}
              progress={scrollYProgress}
              index={i}
              total={POEM_LINES.length}
            />
          ))}
        </div>

        {/* Closing colophon — gilt italic. "patent pending" reframed
            in folio voice. */}
        <motion.div style={{ opacity: endOpacity }} className="mt-12">
          <p
            className="italic"
            style={{
              fontFamily: 'var(--font-folio)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: 'var(--color-aihana-ink)',
              fontWeight: 400,
              letterSpacing: '0.01em',
            }}
          >
            The Living Deck<sup className="text-[0.5em] align-super opacity-70 ml-0.5">™</sup>
          </p>
          <p
            className="italic mt-3"
            style={{
              fontFamily: 'var(--font-folio)',
              fontSize: '0.85rem',
              color: 'var(--color-aihana-gilt-deep)',
              letterSpacing: '0.02em',
            }}
          >
            is patent pending.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
