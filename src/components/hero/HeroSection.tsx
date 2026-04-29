'use client';

// Paper-folio HeroSection — replaces the indigo glow + parallax orb hero
// with the lobby/splash vocabulary: paper substrate, italic eyebrow,
// serif AIHANA wordmark, hairline-bracketed Whisper line, ceremonial
// CTAs (vermillion ribbon + ink ghost). Reuses the cascade-and-settle
// motion grammar so the website's first frame echoes the app's foyer.

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { URLS } from '@/lib/constants';

// Cascade timing — mirrors WelcomeSplash. Soft easing, no spring
// overshoot. Cards drift in and rest.
const EASE = [0.25, 0.1, 0.25, 1] as const;
const KICKER_DELAY = 0.15;
const WHISPER_DELAY = 0.55;
const CARD_FIRST_DELAY = 0.95;
const CARD_STAGGER = 0.18;
const WORDMARK_DELAY = 1.95;

// Three plates — Hearts (left), Free Play (center forward), War
// (right). Same trio that landed in the app's v1 splash (commit
// 3d9b4f8). Source images are the cropped splash variants from
// /public/games/splash/ — same 500×800 ink-on-parchment commissions
// shipped with the mobile splash so the website storefront and the
// app foyer share visual identity card-for-card.
const PLATES = [
  { src: '/games/splash/hearts.png',     alt: 'Hearts',    tilt: -8, x: -84, y: 4 },
  { src: '/games/splash/free_play.png',  alt: 'Free Play', tilt: 0,  x: 0,   y: -10 },
  { src: '/games/splash/war.png',        alt: 'War',       tilt: 8,  x: 84,  y: 4 },
] as const;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Subtle scroll fade — paper doesn't parallax, just dissolves out
  // gracefully to the next section.
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], [0, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative h-svh flex items-center justify-center overflow-hidden bg-aihana-paper paper-grain"
    >
      {/* Top-down warmth — paper-high crowns the masthead area, fading
          to the body paper. Mirrors LobbyPaper's PAPER_HIGH gradient. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, #FAF3DD 0%, #F4ECD3 60%, #F4ECD3 100%)',
        }}
      />

      {/* Hairline ink bracket — top + bottom of viewport, very faint.
          Frames the hero like a folio page. */}
      <div className="absolute top-[6%] left-[6%] right-[6%] h-px bg-aihana-ink/15 pointer-events-none" />
      <div className="absolute bottom-[6%] left-[6%] right-[6%] h-px bg-aihana-ink/15 pointer-events-none" />

      <motion.div
        className="relative z-10 px-6 max-w-3xl mx-auto text-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Italic kicker — folio eyebrow. */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: KICKER_DELAY, duration: 0.7, ease: EASE }}
          className="text-aihana-ink-soft italic"
          style={{
            fontFamily: 'var(--font-folio)',
            fontSize: 'clamp(0.78rem, 1vw, 0.92rem)',
            letterSpacing: '0.04em',
          }}
        >
          a dealer who remembers
          <sup className="text-[0.6em] align-super opacity-70 ml-0.5">™</sup>
        </motion.div>

        {/* Wordmark — settles last, after the cards land. Serif, 400
            weight, tracked. The brand standing alone, no decoration. */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: WORDMARK_DELAY, duration: 0.7, ease: EASE }}
          className="mt-6 text-aihana-ink"
          style={{
            fontFamily: 'var(--font-folio)',
            fontWeight: 400,
            fontSize: 'clamp(3.5rem, 8vw, 6.25rem)',
            letterSpacing: '0.12em',
            lineHeight: 1.05,
          }}
        >
          AIHANA
        </motion.h1>

        {/* Date line — folio masthead detail. Static set-dressing. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: WORDMARK_DELAY + 0.2, duration: 0.6, ease: EASE }}
          className="mt-3 text-aihana-ink-faint uppercase"
          style={{
            fontSize: 'clamp(0.6rem, 0.85vw, 0.75rem)',
            letterSpacing: '0.3em',
            fontWeight: 600,
          }}
        >
          tonight · the rain · november nineteenth
        </motion.div>

        {/* Cascade-and-settle — three plates fan in below the dateline.
            Same motion as the app splash; the website's first frame
            echoes the foyer the user enters. */}
        <div
          className="relative mx-auto mt-12 mb-12"
          style={{ height: 200, maxWidth: 360 }}
        >
          {PLATES.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80, rotate: 0 }}
              animate={{ opacity: 1, y: p.y, rotate: p.tilt }}
              transition={{
                delay: CARD_FIRST_DELAY + i * CARD_STAGGER,
                duration: 0.7,
                ease: EASE,
              }}
              className="absolute left-1/2 top-1/2 overflow-hidden"
              style={{
                width: 100,
                height: 160,
                marginLeft: -50 + p.x,
                marginTop: -80,
                borderRadius: 4,
                backgroundColor: 'var(--color-aihana-ink)',
                padding: 3,
                boxShadow: '0 8px 24px rgba(26,18,40,0.22)',
                zIndex: i === 1 ? 3 : 1,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                className="block w-full h-full object-cover"
                style={{ borderRadius: 2 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Whisper — italic dealer-voice line, hairline-bracketed.
            Mirrors the splash whisper; ties the storefront and foyer
            together with one sentence. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: WHISPER_DELAY, duration: 0.7, ease: EASE }}
          className="mx-auto mt-2 mb-10 max-w-md"
        >
          <div className="hairline-rule" />
          <p
            className="text-aihana-ink-soft italic py-3"
            style={{
              fontFamily: 'var(--font-folio)',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              letterSpacing: '0.01em',
              lineHeight: 1.5,
            }}
          >
            “the deck remembers.”
          </p>
          <div className="hairline-rule" />
        </motion.div>

        {/* CTAs — vermillion ribbon (primary) + ink-ghost (secondary).
            Replaces the violet gradient buttons. */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: WORDMARK_DELAY + 0.4, duration: 0.6, ease: EASE }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a
            href={URLS.notifyForm}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 font-medium uppercase
              bg-aihana-vermillion text-aihana-paper-high
              border border-aihana-vermillion-deep
              hover:bg-aihana-vermillion-deep
              transition-colors duration-200 w-full sm:w-auto text-center"
            style={{
              fontFamily: 'var(--font-folio)',
              letterSpacing: '0.18em',
              fontSize: '0.78rem',
              borderRadius: 2,
            }}
          >
            be notified
          </a>
          <a
            href="#showcase"
            className="px-8 py-3 font-medium uppercase
              text-aihana-ink
              border border-aihana-ink/40
              hover:bg-aihana-ink/5 hover:border-aihana-ink/70
              transition-colors duration-200 w-full sm:w-auto text-center"
            style={{
              fontFamily: 'var(--font-folio)',
              letterSpacing: '0.18em',
              fontSize: '0.78rem',
              borderRadius: 2,
            }}
          >
            watch demo
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue — italic serif, no animated bounce (paper doesn't
          shimmer). Just a quiet hint. */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-aihana-ink-faint"
        style={{ fontFamily: 'var(--font-folio)' }}
      >
        <div className="w-px h-8 bg-aihana-ink-faint/60" />
        <span
          className="italic"
          style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}
        >
          turn the page
        </span>
      </div>
    </section>
  );
}
