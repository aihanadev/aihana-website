'use client';

import { motion, useTransform, type MotionValue } from 'framer-motion';

const cards = [
  { top: '15%', left: '8%', rotate: '-12deg', delay: '0s', size: 'w-16 h-24', parallaxRate: -120 },
  { top: '60%', right: '6%', rotate: '18deg', delay: '2s', size: 'w-14 h-20', parallaxRate: -60 },
  { top: '25%', right: '15%', rotate: '-6deg', delay: '4s', size: 'w-12 h-18', parallaxRate: -180 },
];

interface Props {
  scrollYProgress: MotionValue<number>;
}

export function FloatingCards({ scrollYProgress }: Props) {
  const y0 = useTransform(scrollYProgress, [0, 1], [0, cards[0].parallaxRate]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, cards[1].parallaxRate]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, cards[2].parallaxRate]);
  const yValues = [y0, y1, y2];

  return (
    <>
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={`absolute ${card.size} rounded-xl border border-aihana-indigo/10 opacity-[0.08] hidden sm:block`}
          style={{
            top: card.top,
            left: card.left,
            right: card.right,
            rotate: card.rotate,
            animation: `float 6s ease-in-out ${card.delay} infinite`,
            y: yValues[i],
          }}
        />
      ))}
    </>
  );
}
