'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedOnScroll } from '@/components/shared/AnimatedOnScroll';
import { FloatingCards } from './FloatingCards';
import { URLS } from '@/lib/constants';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const orbX = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative h-svh flex items-center justify-center overflow-hidden noise-overlay"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #1a0b2e 0%, #0A0612 100%)',
        }}
      />

      {/* Radial violet orb — scroll-driven */}
      <motion.div
        className="absolute top-[10%] right-[15%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(107,87,255,0.12) 0%, transparent 70%)',
          x: orbX,
          y: orbY,
        }}
      />

      {/* Floating card silhouettes — scroll-driven parallax */}
      <FloatingCards scrollYProgress={scrollYProgress} />

      {/* Content — fades on scroll */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <AnimatedOnScroll delay={0.1} duration={0.4} easing={[0.34, 1.56, 0.64, 1]}>
          <span className="uppercase tracking-[0.2em] text-xs text-aihana-lilac/80 font-medium">
            Patent Pending
          </span>
        </AnimatedOnScroll>

        <AnimatedOnScroll delay={0.2} duration={0.7} easing={[0.22, 1, 0.36, 1]}>
          <h1
            className="mt-6 mb-4 font-extrabold text-white leading-[1.05] tracking-tight"
            style={{
              fontSize: 'clamp(2.75rem, 6vw, 5rem)',
              fontFamily: 'var(--font-display)',
            }}
          >
            A Dealer Who{' '}
            <span
              style={{
                textShadow: '0 0 40px rgba(107,87,255,0.4), 0 0 80px rgba(107,87,255,0.2)',
              }}
            >
              Remembers
            </span>
            <sup className="text-[0.4em] align-super opacity-60 ml-1">™</sup>
          </h1>
        </AnimatedOnScroll>

        <AnimatedOnScroll delay={0.35} duration={0.5} easing={[0.22, 1, 0.36, 1]}>
          <p
            className="text-aihana-offwhite font-normal mb-6"
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}
          >
            Our Tables. Infinite Card Games.
          </p>
        </AnimatedOnScroll>

        <AnimatedOnScroll delay={0.5} duration={0.6} easing={[0.22, 1, 0.36, 1]}>
          <p className="text-aihana-lilac text-base leading-[1.7] max-w-xl mx-auto mb-10">
            The first card game platform where every card remembers its journey,
            every dealer learns your house rules, and every table plays fair.
          </p>
        </AnimatedOnScroll>

        <AnimatedOnScroll delay={0.7} duration={0.5} easing={[0.34, 1.56, 0.64, 1]}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={URLS.notifyForm}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl font-semibold text-white
                bg-gradient-to-r from-aihana-violet to-aihana-lavender
                shadow-[0_8px_30px_rgba(107,87,255,0.4)]
                hover:shadow-[0_12px_40px_rgba(107,87,255,0.6)] hover:-translate-y-0.5 hover:scale-[1.02]
                transition-all duration-200 w-full sm:w-auto text-center"
            >
              Get Notified
            </a>
            <a
              href="#showcase"
              className="px-8 py-4 rounded-2xl font-semibold text-aihana-violet
                border border-aihana-violet/40
                hover:bg-aihana-violet/10 hover:border-aihana-violet/60
                transition-all duration-200 w-full sm:w-auto text-center"
            >
              Watch Demo
            </a>
          </div>
        </AnimatedOnScroll>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 opacity-40">
        <div className="w-px h-10 bg-aihana-indigo animate-bounce-gentle" />
        <div className="w-2 h-2 rounded-full bg-aihana-indigo" />
        <span className="text-[11px] text-aihana-indigo tracking-wider">Scroll</span>
      </div>
    </section>
  );
}
