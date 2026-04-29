'use client';

// Paper-folio PhoneMockup — replaces the indigo phone (midnight bezel,
// violet drop-shadow) with an ink-on-paper phone. Phone bezel is ink
// on paper with a paper-high screen behind. Drop shadow is paper-
// realistic (warm dark, no violet). The optional video preview still
// renders inside the screen, but unsupplied screens fall back to a
// paper-folio splash mock instead of an emoji.

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface Props {
  videoSrc?: string;
  className?: string;
  tilt?: 'left' | 'right' | 'none';
  /** Optional path to a still image rendered inside the screen.
   *  Used when no video is supplied. Defaults to a paper-folio splash
   *  mock — the foyer the user sees on app open. */
  fallbackSrc?: string;
  fallbackAlt?: string;
  /** Which fallback "scene" to render when no video/image is supplied.
   *  Lets DualPhoneShowcase show two visually-distinct paper-folio
   *  states — splash (foyer), passing (PASSING-phase Hearts hand),
   *  trick (PLAYING-phase trick lane). Reviewer flagged that both
   *  phones rendering the same splash mock undersold the multiplayer
   *  story. */
  scene?: 'splash' | 'passing' | 'trick';
}

export function PhoneMockup({
  videoSrc,
  className = '',
  tilt = 'none',
  fallbackSrc,
  fallbackAlt,
  scene = 'splash',
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const initialRotateY = tilt === 'left' ? -15 : tilt === 'right' ? 15 : 0;
  const restingRotateY = tilt === 'left' ? -5 : tilt === 'right' ? 5 : 0;

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{
        width: 280,
        perspective: 1000,
      }}
    >
      <motion.div
        initial={{ rotateY: initialRotateY }}
        animate={
          isInView ? { rotateY: restingRotateY } : { rotateY: initialRotateY }
        }
        whileHover={{ rotateY: 0, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        style={{
          transformStyle: 'preserve-3d',
          filter: 'drop-shadow(0 18px 40px rgba(26,18,40,0.22))',
        }}
      >
        {/* Phone frame — ink-on-paper. The bezel is ink, the inside is
            the paper screen. */}
        <div
          className="rounded-[3rem] bg-aihana-ink p-2"
          style={{
            border: '1px solid rgba(26,18,40,0.85)',
            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.4)',
          }}
        >
          {/* Notch / dynamic island */}
          <div className="flex justify-center mb-2">
            <div className="w-24 h-5 rounded-full bg-aihana-ink" />
          </div>

          {/* Screen — paper-high so the phone reads as showing the
              actual app's paper substrate. */}
          <div
            className="rounded-[2.2rem] overflow-hidden bg-aihana-paper-high aspect-[9/19.5]"
            style={{ borderRadius: '2.2rem' }}
          >
            {videoSrc ? (
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : fallbackSrc ? (
              <div className="relative w-full h-full">
                <Image
                  src={fallbackSrc}
                  alt={fallbackAlt ?? 'App preview'}
                  fill
                  sizes="280px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ) : (
              <SceneFallback scene={scene} />
            )}
          </div>

          {/* Home bar */}
          <div className="flex justify-center mt-2">
            <div className="w-28 h-1 rounded-full bg-aihana-ink/60" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ── Scene fallbacks ────────────────────────────────────────────
// Three paper-folio mockups rendered when no video/image is supplied.
// Used by DualPhoneShowcase to show two visually-distinct app states
// instead of identical splash mocks. Each scene is a stripped-down
// recreation of an actual app surface (lobby splash / Hearts PASSING
// / Hearts trick-in-motion) painted in HTML+CSS.

function SceneFallback({ scene }: { scene: 'splash' | 'passing' | 'trick' }) {
  if (scene === 'passing') return <PassingScene />;
  if (scene === 'trick') return <TrickScene />;
  return <SplashScene />;
}

function SplashScene() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 paper-grain">
      <span
        className="text-aihana-ink-faint uppercase mb-3"
        style={{
          fontFamily: 'var(--font-folio)',
          fontSize: '0.62rem',
          letterSpacing: '0.3em',
          fontWeight: 600,
        }}
      >
        a dealer who remembers
      </span>
      <span
        className="text-aihana-ink"
        style={{
          fontFamily: 'var(--font-folio)',
          fontWeight: 400,
          fontSize: '1.6rem',
          letterSpacing: '0.14em',
        }}
      >
        AIHANA
      </span>
      <span
        className="text-aihana-ink-faint italic mt-3 text-center"
        style={{ fontFamily: 'var(--font-folio)', fontSize: '0.7rem' }}
      >
        “the deck remembers.”
      </span>
    </div>
  );
}

function PassingScene() {
  return (
    <div className="w-full h-full flex flex-col paper-grain px-3 pt-8">
      {/* TopBar eyebrow */}
      <div className="text-center mb-2">
        <div
          className="text-aihana-gilt-deep uppercase"
          style={{
            fontFamily: 'var(--font-folio)',
            fontSize: '0.45rem',
            letterSpacing: '0.3em',
            fontWeight: 600,
          }}
        >
          Hearts
        </div>
        <div
          className="text-aihana-ink-soft italic mt-0.5"
          style={{ fontFamily: 'var(--font-folio)', fontSize: '0.5rem' }}
        >
          passing left
        </div>
      </div>

      {/* Direction ribbon */}
      <div className="flex justify-center mb-3">
        <span
          className="text-aihana-ink-faint italic"
          style={{ fontFamily: 'var(--font-folio)', fontSize: '0.55rem' }}
        >
          ◆ pass three to the left
        </span>
      </div>

      {/* Three pass slots */}
      <div className="flex justify-center gap-1.5 mb-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-7 h-10 border border-aihana-ink/30 rounded-sm flex items-center justify-center"
            style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
          >
            <span
              className="text-aihana-ink-faint"
              style={{ fontFamily: 'var(--font-folio)', fontSize: '0.5rem' }}
            >
              {i + 1}
            </span>
          </div>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Whisper */}
      <div className="border-y border-aihana-ink/10 py-1 mb-2">
        <p
          className="text-aihana-ink-soft italic text-center"
          style={{ fontFamily: 'var(--font-folio)', fontSize: '0.5rem' }}
        >
          “tap three to pass.”
        </p>
      </div>

      {/* Hand fan */}
      <div className="flex justify-center items-end gap-px mb-3">
        {['2♣', '5♣', 'Q♣', '7♥', '4♥', 'K♦', '6♦', 'A♠', '10♠'].map(
          (card, i) => {
            const isRed = card.includes('♥') || card.includes('♦');
            return (
              <div
                key={i}
                className="w-3.5 h-6 rounded-[1px] flex flex-col items-center justify-start pt-0.5"
                style={{
                  backgroundColor: '#FAF3DD',
                  border: '0.5px solid rgba(26,18,40,0.35)',
                  transform: `rotate(${(i - 4) * 5}deg) translateY(${
                    Math.abs(i - 4) * 1
                  }px)`,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-folio)',
                    fontSize: '0.32rem',
                    color: isRed ? 'var(--color-aihana-vermillion)' : 'var(--color-aihana-ink)',
                    lineHeight: 1,
                  }}
                >
                  {card}
                </span>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

function TrickScene() {
  return (
    <div className="w-full h-full flex flex-col paper-grain px-3 pt-8">
      {/* TopBar */}
      <div className="text-center mb-3">
        <div
          className="text-aihana-gilt-deep uppercase"
          style={{
            fontFamily: 'var(--font-folio)',
            fontSize: '0.45rem',
            letterSpacing: '0.3em',
            fontWeight: 600,
          }}
        >
          Hearts
        </div>
        <div
          className="text-aihana-ink-soft italic mt-0.5"
          style={{ fontFamily: 'var(--font-folio)', fontSize: '0.5rem' }}
        >
          a trick in motion
        </div>
      </div>

      {/* Compass seats — top */}
      <div className="flex justify-center mb-1">
        <div
          className="text-aihana-ink-soft italic"
          style={{ fontFamily: 'var(--font-folio)', fontSize: '0.45rem' }}
        >
          NaRhee · 9c
        </div>
      </div>

      {/* Trick lane diamond */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* North slot */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-5 h-7 border border-aihana-ink/25 rounded-sm" />
        {/* West slot — face-up A♣ */}
        <div
          className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-7 rounded-sm flex flex-col items-center justify-start pt-0.5"
          style={{
            backgroundColor: '#FAF3DD',
            border: '0.5px solid rgba(26,18,40,0.5)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-folio)',
              fontSize: '0.4rem',
              color: 'var(--color-aihana-ink)',
              lineHeight: 1,
            }}
          >
            A♣
          </span>
        </div>
        {/* East slot — face-up K♣ */}
        <div
          className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-7 rounded-sm flex flex-col items-center justify-start pt-0.5"
          style={{
            backgroundColor: '#FAF3DD',
            border: '0.5px solid rgba(26,18,40,0.5)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-folio)',
              fontSize: '0.4rem',
              color: 'var(--color-aihana-ink)',
              lineHeight: 1,
            }}
          >
            K♣
          </span>
        </div>
        {/* South slot — empty (you to play) */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-7 border border-aihana-ink/25 rounded-sm" />
      </div>

      {/* Whisper */}
      <div className="border-y border-aihana-ink/10 py-1 mb-2">
        <p
          className="text-aihana-ink-soft italic text-center"
          style={{ fontFamily: 'var(--font-folio)', fontSize: '0.5rem' }}
        >
          “bot bob leads with the ace.”
        </p>
      </div>

      {/* Hand fan */}
      <div className="flex justify-center items-end gap-px mb-3">
        {['2♣', '5♣', '7♣', 'Q♣', '4♥', '9♥', 'J♥', 'A♥', '8♠'].map(
          (card, i) => {
            const isRed = card.includes('♥') || card.includes('♦');
            const isPlayable = card.includes('♣');
            return (
              <div
                key={i}
                className="w-3.5 h-6 rounded-[1px] flex flex-col items-center justify-start pt-0.5"
                style={{
                  backgroundColor: '#FAF3DD',
                  border: '0.5px solid rgba(26,18,40,0.35)',
                  opacity: isPlayable ? 1 : 0.45,
                  transform: `rotate(${(i - 4) * 5}deg) translateY(${
                    Math.abs(i - 4) * 1
                  }px)`,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-folio)',
                    fontSize: '0.32rem',
                    color: isRed ? 'var(--color-aihana-vermillion)' : 'var(--color-aihana-ink)',
                    lineHeight: 1,
                  }}
                >
                  {card}
                </span>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
