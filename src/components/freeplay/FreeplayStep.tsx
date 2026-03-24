'use client';

import { AnimatedOnScroll } from '@/components/shared/AnimatedOnScroll';

interface Props {
  stepNumber: number;
  label: string;
  headline: string;
  description: string;
  visual: React.ReactNode;
  isLast?: boolean;
}

export function FreeplayStep({ stepNumber, label, headline, description, visual, isLast }: Props) {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Step indicator */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-aihana-violet/20 border border-aihana-violet/40 flex items-center justify-center">
          <span className="text-aihana-violet text-xs font-bold">{stepNumber}</span>
        </div>
        <span className="text-aihana-lavender text-xs uppercase tracking-widest font-medium">
          {label}
        </span>
      </div>

      {/* Visual */}
      <AnimatedOnScroll animation="scale" duration={0.5} easing={[0.22, 1, 0.36, 1]}>
        <div className="flex justify-center">{visual}</div>
      </AnimatedOnScroll>

      {/* Text */}
      <AnimatedOnScroll delay={0.1} duration={0.5} easing={[0.22, 1, 0.36, 1]}>
        <div className="text-center max-w-sm">
          <h3
            className="text-white font-bold text-lg mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {headline}
          </h3>
          <p className="text-aihana-lilac/80 text-sm leading-relaxed">{description}</p>
        </div>
      </AnimatedOnScroll>

      {/* Connector line */}
      {!isLast && (
        <div className="w-px h-8 bg-gradient-to-b from-aihana-violet/30 to-transparent" />
      )}
    </div>
  );
}
