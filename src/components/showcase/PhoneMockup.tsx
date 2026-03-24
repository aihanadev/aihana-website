'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  videoSrc?: string;
  className?: string;
  tilt?: 'left' | 'right' | 'none';
}

export function PhoneMockup({ videoSrc, className = '', tilt = 'none' }: Props) {
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
        animate={isInView ? { rotateY: restingRotateY } : { rotateY: initialRotateY }}
        whileHover={{ rotateY: 0, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        style={{
          transformStyle: 'preserve-3d',
          filter: 'drop-shadow(0 20px 60px rgba(107,87,255,0.15))',
        }}
      >
        {/* Phone frame */}
        <div
          className="rounded-[3rem] border-2 border-aihana-indigo/40 bg-aihana-midnight/60 p-2"
          style={{
            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.4)',
          }}
        >
          {/* Notch */}
          <div className="flex justify-center mb-2">
            <div className="w-24 h-5 rounded-full bg-aihana-midnight" />
          </div>

          {/* Screen */}
          <div className="rounded-[2.2rem] overflow-hidden bg-aihana-black aspect-[9/19.5]">
            {videoSrc ? (
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center px-6">
                  <span className="text-4xl mb-3 block">🎴</span>
                  <p className="text-aihana-lilac/50 text-xs">Gameplay preview</p>
                </div>
              </div>
            )}
          </div>

          {/* Home bar */}
          <div className="flex justify-center mt-2">
            <div className="w-28 h-1 rounded-full bg-aihana-indigo/30" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
