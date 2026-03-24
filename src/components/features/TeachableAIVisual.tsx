'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function TeachableAIVisual() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="w-full max-w-sm space-y-4">
      {/* Player message */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-end"
      >
        <div className="bg-aihana-indigo/40 border border-aihana-indigo/30 rounded-2xl rounded-br-md px-5 py-3 max-w-[75%]">
          <p className="text-aihana-offwhite text-sm">&ldquo;make 7s wild too&rdquo;</p>
        </div>
      </motion.div>

      {/* Dealer response */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 200, damping: 20 }}
        className="flex justify-start"
      >
        <div
          className="rounded-2xl rounded-bl-md px-5 py-3 max-w-[85%] border border-aihana-violet/20"
          style={{
            background: 'linear-gradient(135deg, rgba(107,87,255,0.15), rgba(155,140,255,0.05))',
          }}
        >
          <p className="text-aihana-offwhite text-sm font-medium mb-1">Dealer</p>
          <p className="text-aihana-offwhite/80 text-sm">
            Got it — 7s are now wild. All players will be notified and must agree.
          </p>
        </div>
      </motion.div>

      {/* Typing indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="flex justify-start"
      >
        <motion.div
          animate={isInView ? { opacity: [0.3, 0.6, 0.3] } : {}}
          transition={{ delay: 0.5, duration: 1.2, repeat: 1, ease: 'easeInOut' }}
          className="flex gap-1.5 px-4 py-2"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-aihana-violet/40"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
