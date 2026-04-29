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
}

export function PhoneMockup({
  videoSrc,
  className = '',
  tilt = 'none',
  fallbackSrc,
  fallbackAlt,
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
                  style={{
                    fontFamily: 'var(--font-folio)',
                    fontSize: '0.7rem',
                  }}
                >
                  “the deck remembers.”
                </span>
              </div>
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
