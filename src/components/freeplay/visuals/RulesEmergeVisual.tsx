'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const rules = [
  { text: 'Match suit or rank', confidence: 95, color: 'from-green-500/60 to-green-400/40' },
  { text: '8s are wild', confidence: 88, color: 'from-green-500/60 to-green-400/40' },
  { text: 'Draw on no match', confidence: 72, color: 'from-amber-500/60 to-amber-400/40' },
];

export function RulesEmergeVisual() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div
      ref={ref}
      className="w-full max-w-[320px] rounded-2xl border border-aihana-indigo/30 p-5 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2A1D4C 0%, #120721 100%)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-aihana-lilac/50 text-[10px] uppercase tracking-wider">
            Detected
          </span>
          <h4 className="text-white font-bold text-sm mt-0.5">Crazy Eights</h4>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="bg-green-500/20 text-green-400 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-green-500/30"
        >
          94% match
        </motion.div>
      </div>

      {/* Rules with animated confidence bars */}
      <div className="space-y-3">
        {rules.map((rule, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-aihana-offwhite/80 text-xs">{rule.text}</span>
              <span className={`text-[10px] font-medium ${
                rule.confidence >= 80 ? 'text-green-400' : 'text-amber-400'
              }`}>
                {rule.confidence}%
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-aihana-midnight/80 overflow-hidden">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${rule.color}`}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${rule.confidence}%` } : { width: 0 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Rule count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.0, duration: 0.4 }}
        className="mt-4 pt-3 border-t border-aihana-indigo/20"
      >
        <span className="text-aihana-lilac/40 text-[10px]">3 rules detected from 23 actions</span>
      </motion.div>
    </div>
  );
}
