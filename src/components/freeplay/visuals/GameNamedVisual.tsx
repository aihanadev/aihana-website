'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const confettiPieces = Array.from({ length: 10 }, (_, i) => ({
  x: 15 + Math.random() * 70,
  delay: Math.random() * 0.8,
  duration: 2 + Math.random() * 1,
  color: ['#6B57FF', '#9b8cff', '#22c55e', '#f59e0b', '#B4A6FF'][i % 5],
  size: 3 + Math.random() * 3,
  rotate: Math.random() * 360,
}));

export function GameNamedVisual() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div
      ref={ref}
      className="relative w-full max-w-[320px] rounded-2xl border border-aihana-indigo/30 p-5 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2A1D4C 0%, #120721 100%)',
      }}
    >
      {/* Confetti */}
      {isInView &&
        confettiPieces.map((piece, i) => (
          <div
            key={i}
            className="absolute rounded-sm pointer-events-none"
            style={{
              left: `${piece.x}%`,
              top: '-8px',
              width: piece.size,
              height: piece.size,
              backgroundColor: piece.color,
              transform: `rotate(${piece.rotate}deg)`,
              animation: `confetti-fall ${piece.duration}s ease-out ${piece.delay}s forwards`,
              opacity: 0,
              animationFillMode: 'forwards',
            }}
          />
        ))}

      {/* Game name "input" */}
      <div className="mb-4">
        <span className="text-aihana-lilac/50 text-[10px] uppercase tracking-wider">
          Name your game
        </span>
        <motion.div
          className="mt-2 rounded-xl bg-aihana-black/60 border border-aihana-indigo/30 px-4 py-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <motion.span
            className="text-white font-semibold text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            Crazy Eights+
          </motion.span>
          <motion.span
            className="inline-block w-0.5 h-4 bg-aihana-violet ml-0.5 align-middle"
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          />
        </motion.div>
      </div>

      {/* Rules Active badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        className="flex items-center gap-2 mb-4"
      >
        <div className="bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-500/30 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          Rules Active
        </div>
        <span className="text-aihana-lilac/40 text-[10px]">3 rules enforced</span>
      </motion.div>

      {/* Success message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="text-center"
      >
        <p className="text-aihana-lilac/50 text-[11px]">
          Your game is saved. Play anytime.
        </p>
      </motion.div>
    </div>
  );
}
