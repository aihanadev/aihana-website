'use client';

import { motion, useInView, type TargetAndTransition, type Easing } from 'framer-motion';
import { useRef } from 'react';

type Animation = 'fadeUp' | 'fadeIn' | 'slideFromLeft' | 'slideFromRight' | 'scale';

const variants: Record<Animation, { initial: TargetAndTransition; animate: TargetAndTransition }> = {
  fadeUp: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideFromLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  },
  slideFromRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  },
};

interface Props {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  easing?: Easing;
  className?: string;
}

export function AnimatedOnScroll({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.6,
  easing,
  className,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const v = variants[animation];

  return (
    <motion.div
      ref={ref}
      initial={v.initial}
      animate={isInView ? v.animate : v.initial}
      transition={{ duration, delay, ease: easing ?? [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
