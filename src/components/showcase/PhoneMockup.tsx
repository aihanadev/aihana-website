'use client';

// Paper-folio PhoneMockup — replaces the indigo phone (midnight bezel,
// violet drop-shadow) with an ink-on-paper phone. Phone bezel is ink
// on paper with a paper-high screen behind. Drop shadow is paper-
// realistic (warm dark, no violet). The optional video preview still
// renders inside the screen, but unsupplied screens fall back to a
// paper-folio splash mock instead of an emoji.

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
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

// TrickScene — animated. The reviewer's "one contrasting section that
// proves the system is alive" lands here: cards arrive into the trick
// lane sequentially, the dealer's whisper cycles in step, and on each
// completion the winning card glows briefly before the lane clears
// and the cycle restarts. Deliberately slow paced (~9s loop) so the
// motion feels ceremonial rather than arcade — paper-folio voice.

function TrickScene() {
  // Phase 0: empty lane (the table opens)
  // Phase 1: West plays the lead (2♣)
  // Phase 2: North follows (5♣)
  // Phase 3: East joins (Q♣)
  // Phase 4: South completes (K♣) — winner glow on the highest club
  // Phase 5: trick collected, brief pause, then back to 0
  const [phase, setPhase] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    // Each phase advances on its own delay so the rhythm has breath.
    const delays = [1000, 1500, 1500, 1500, 2400, 1100]; // total ~9s
    const t = setTimeout(() => {
      setPhase((p) => (p + 1) % 6);
    }, delays[phase]);
    return () => clearTimeout(t);
  }, [phase, inView]);

  // Dealer whisper line — cycles in step with the trick. Each line
  // advances when phase advances. AnimatePresence cross-fades.
  const whispers = [
    'tonight. the rain. the table opens.',
    'bot bob leads with the two of clubs.',
    'bot alice answers.',
    'bot carol joins.',
    'you take the trick. no points.',
    'the cards return to the deck.',
  ];

  // Cards in the trick lane — appear in order. Winner is the K♣ at S.
  type Slot = 'W' | 'N' | 'E' | 'S';
  const trickCards: Array<{
    suit: Slot;
    rank: string;
    sym: string;
    appearAt: number;
  }> = [
    { suit: 'W', rank: '2', sym: '♣', appearAt: 1 },
    { suit: 'N', rank: '5', sym: '♣', appearAt: 2 },
    { suit: 'E', rank: 'Q', sym: '♣', appearAt: 3 },
    { suit: 'S', rank: 'K', sym: '♣', appearAt: 4 },
  ];

  return (
    <div ref={ref} className="w-full h-full flex flex-col paper-grain px-3 pt-8">
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

      {/* Compass seat — top */}
      <div className="flex justify-center mb-1">
        <div
          className="text-aihana-ink-soft italic"
          style={{ fontFamily: 'var(--font-folio)', fontSize: '0.45rem' }}
        >
          NaRhee · {Math.max(13 - phase, 9)}c
        </div>
      </div>

      {/* Trick lane diamond — cards animate in by phase. */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Empty slots (always rendered) */}
        <SlotFrame position="N" />
        <SlotFrame position="W" />
        <SlotFrame position="E" />
        <SlotFrame position="S" />

        {/* Animated cards — appear when phase >= card.appearAt */}
        <AnimatePresence>
          {trickCards.map((c) => {
            // Hide when phase < appearAt OR phase 5 (collecting)
            if (phase < c.appearAt || phase === 5) return null;
            const isWinner = c.suit === 'S' && phase === 4;
            return (
              <motion.div
                key={c.suit}
                initial={{ opacity: 0, scale: 0.6, y: -8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  boxShadow: isWinner
                    ? '0 0 8px rgba(201,162,75,0.8), 0 0 14px rgba(201,162,75,0.4)'
                    : '0 1px 2px rgba(26,18,40,0.18)',
                }}
                exit={{ opacity: 0, scale: 0.85, y: 8 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className={`absolute w-5 h-7 rounded-sm flex flex-col items-center justify-start pt-0.5 ${slotPos(c.suit)}`}
                style={{
                  backgroundColor: '#FAF3DD',
                  border: '0.5px solid rgba(26,18,40,0.5)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-folio)',
                    fontSize: '0.36rem',
                    color: 'var(--color-aihana-ink)',
                    lineHeight: 1,
                  }}
                >
                  {c.rank}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-folio)',
                    fontSize: '0.36rem',
                    color: 'var(--color-aihana-ink)',
                    lineHeight: 1,
                  }}
                >
                  {c.sym}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Whisper — cross-fades on phase change. */}
      <div
        className="border-y border-aihana-ink/10 py-1 mb-2 relative"
        style={{ minHeight: '0.9rem' }}
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={phase}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-aihana-ink-soft italic text-center"
            style={{ fontFamily: 'var(--font-folio)', fontSize: '0.5rem' }}
          >
            “{whispers[phase]}”
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Hand fan — playable clubs lifted slightly, others dimmed.
          As phase advances and clubs are played, their copies in
          the hand fade out (state changing — the reviewer's third
          alive-signal alongside cards-moving + dealer-speaking). */}
      <div className="flex justify-center items-end gap-px mb-3">
        {[
          { c: '2♣', played: phase >= 1 },
          { c: '5♣', played: phase >= 2 },
          { c: 'Q♣', played: phase >= 3 },
          { c: 'K♣', played: phase >= 4 },
          { c: '4♥', played: false },
          { c: '9♥', played: false },
          { c: 'J♥', played: false },
          { c: 'A♥', played: false },
          { c: '8♠', played: false },
        ].map((entry, i) => {
          const card = entry.c;
          const isRed = card.includes('♥') || card.includes('♦');
          const isPlayable = card.includes('♣');
          return (
            <motion.div
              key={i}
              animate={{
                opacity: entry.played ? 0.18 : isPlayable ? 1 : 0.5,
                y: entry.played ? 4 : 0,
              }}
              transition={{ duration: 0.4 }}
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
                  color: isRed
                    ? 'var(--color-aihana-vermillion)'
                    : 'var(--color-aihana-ink)',
                  lineHeight: 1,
                }}
              >
                {card}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ── TrickLane sub-helpers ─────────────────────────────────

function SlotFrame({ position }: { position: 'N' | 'W' | 'E' | 'S' }) {
  return (
    <div
      className={`absolute w-5 h-7 border border-aihana-ink/22 rounded-sm ${slotPos(position)}`}
    />
  );
}

function slotPos(p: 'N' | 'W' | 'E' | 'S'): string {
  // Compass diamond: N top, S bottom, W/E sides.
  switch (p) {
    case 'N':
      return 'top-1 left-1/2 -translate-x-1/2';
    case 'S':
      return 'bottom-1 left-1/2 -translate-x-1/2';
    case 'W':
      return 'left-2 top-1/2 -translate-y-1/2';
    case 'E':
      return 'right-2 top-1/2 -translate-y-1/2';
  }
}
