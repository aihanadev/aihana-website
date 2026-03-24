'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { GlowText } from '@/components/shared/GlowText';
import { POEM_LINES, GLOW_WORDS } from '@/lib/constants';

function PoemLine({ line, progress, index, total }: {
  line: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const isEmpty = line.trim() === '';

  // Map each line to a portion of the scroll progress
  const start = index / total;
  const end = (index + 0.8) / total;

  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [12, 0]);

  if (isEmpty) {
    return <div className="h-6" />;
  }

  // Check if line contains glow words
  const hasGlow = GLOW_WORDS.some((word) => line.includes(word));

  return (
    <motion.p
      style={{ opacity, y }}
      className={`mb-2 leading-relaxed ${
        hasGlow
          ? 'text-white'
          : 'text-aihana-offwhite/90'
      }`}
    >
      {hasGlow ? (
        <span
          style={{
            textShadow: '0 0 15px rgba(107,87,255,0.5), 0 0 30px rgba(107,87,255,0.2)',
          }}
        >
          {line}
        </span>
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
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-24"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        <source src="/videos/mystical-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(26,11,46,0.5) 0%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* Poem content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div
          style={{
            fontFamily: 'var(--font-poem)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            fontStyle: 'italic',
            lineHeight: 1.8,
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

        <motion.div
          style={{
            opacity: endOpacity,
          }}
          className="mt-12"
        >
          <GlowText className="text-2xl md:text-3xl">
            The Living Deck™
          </GlowText>
          <p className="text-aihana-lilac/50 text-sm mt-3">is patent pending.</p>
        </motion.div>
      </div>
    </section>
  );
}
