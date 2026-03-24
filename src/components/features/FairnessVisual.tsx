'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function FairnessVisual() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="w-full max-w-xs">
      {/* Voting card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-aihana-indigo/30 p-6"
        style={{
          background: 'linear-gradient(135deg, rgba(42,29,76,0.8), rgba(10,6,18,0.9))',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        }}
      >
        <p className="text-aihana-lavender text-xs uppercase tracking-wider mb-3 font-medium">
          Rule Vote
        </p>
        <p className="text-aihana-offwhite text-sm mb-5">
          &ldquo;Make 7s wild&rdquo;
        </p>

        {/* Voters */}
        <div className="space-y-3">
          {[
            { name: 'Player 1', vote: true, delay: 0.3 },
            { name: 'Player 2', vote: true, delay: 0.5 },
            { name: 'Player 3', vote: false, delay: 0.7 },
            { name: 'Player 4', vote: true, delay: 0.9 },
          ].map((voter) => (
            <motion.div
              key={voter.name}
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: voter.delay, duration: 0.4 }}
              className="flex items-center justify-between"
            >
              <span className="text-aihana-lilac text-sm">{voter.name}</span>
              <span className={`text-sm font-medium ${voter.vote ? 'text-green-400' : 'text-red-400'}`}>
                {voter.vote ? '✓ Yes' : '✗ No'}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Result */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-5 pt-4 border-t border-aihana-indigo/20 text-center"
        >
          <span className="text-green-400 font-semibold text-sm">Approved (3/4)</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
