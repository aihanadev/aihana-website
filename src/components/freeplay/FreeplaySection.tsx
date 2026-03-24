'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedOnScroll } from '@/components/shared/AnimatedOnScroll';
import { FreeplayStep } from './FreeplayStep';
import { PlayFreelyVisual } from './visuals/PlayFreelyVisual';
import { AIObservesVisual } from './visuals/AIObservesVisual';
import { RulesEmergeVisual } from './visuals/RulesEmergeVisual';
import { GameNamedVisual } from './visuals/GameNamedVisual';
import { FREEPLAY_STEPS } from '@/lib/constants';

const visuals = [
  <PlayFreelyVisual key="play" />,
  <AIObservesVisual key="observe" />,
  <RulesEmergeVisual key="rules" />,
  <GameNamedVisual key="named" />,
];

function DesktopStickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll progress to active step (0-3)
  const activeStepRaw = useTransform(scrollYProgress, [0, 1], [0, 3.99]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const unsubscribe = activeStepRaw.on('change', (v) => {
      setActiveStep(Math.min(3, Math.floor(v)));
    });
    return unsubscribe;
  }, [activeStepRaw]);

  // Progress bar width
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative" style={{ minHeight: '300vh' }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-6">
          {/* Progress bar */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-aihana-indigo/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-aihana-violet rounded-full"
              style={{ width: progressWidth }}
            />
          </div>

          {/* Step indicators */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-16">
            {FREEPLAY_STEPS.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    i <= activeStep
                      ? 'bg-aihana-violet/20 border-aihana-violet/60'
                      : 'border-aihana-indigo/30'
                  }`}
                >
                  <span
                    className={`text-[10px] font-bold transition-colors duration-300 ${
                      i <= activeStep ? 'text-aihana-violet' : 'text-aihana-indigo/50'
                    }`}
                  >
                    {step.number}
                  </span>
                </div>
                <span
                  className={`text-[10px] uppercase tracking-wider font-medium transition-colors duration-300 hidden xl:block ${
                    i <= activeStep ? 'text-aihana-lavender' : 'text-aihana-indigo/40'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          {/* Main content: visual + text */}
          <div className="flex items-center gap-16 lg:gap-20 mt-8">
            {/* Visual panel */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-[320px] h-[320px]">
                {visuals.map((visual, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={false}
                    animate={{
                      opacity: activeStep === i ? 1 : 0,
                      scale: activeStep === i ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ pointerEvents: activeStep === i ? 'auto' : 'none' }}
                  >
                    {visual}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Text panel */}
            <div className="flex-1">
              {FREEPLAY_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={false}
                  animate={{
                    opacity: activeStep === i ? 1 : 0,
                    y: activeStep === i ? 0 : 20,
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ pointerEvents: activeStep === i ? 'auto' : 'none' }}
                >
                  <span className="uppercase tracking-[0.15em] text-xs text-aihana-lavender font-medium">
                    Step {step.number}
                  </span>
                  <h3
                    className="mt-3 mb-4 font-bold text-white"
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      fontFamily: 'var(--font-display)',
                      lineHeight: 1.2,
                    }}
                  >
                    {step.headline}
                  </h3>
                  <p className="text-aihana-offwhite/80 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileStackedLayout() {
  return (
    <div className="py-16 space-y-12 px-6">
      {FREEPLAY_STEPS.map((step, i) => (
        <FreeplayStep
          key={i}
          stepNumber={step.number}
          label={step.label}
          headline={step.headline}
          description={step.description}
          visual={visuals[i]}
          isLast={i === FREEPLAY_STEPS.length - 1}
        />
      ))}
    </div>
  );
}

export function FreeplaySection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <section className="relative noise-overlay">
      {/* Section header */}
      <div className="text-center pt-24 pb-8 px-6">
        <AnimatedOnScroll duration={0.5} easing={[0.34, 1.56, 0.64, 1]}>
          <span className="uppercase tracking-[0.2em] text-xs text-aihana-lavender font-medium">
            The Crown Jewel
          </span>
        </AnimatedOnScroll>
        <AnimatedOnScroll delay={0.1} duration={0.7} easing={[0.22, 1, 0.36, 1]}>
          <h2
            className="mt-4 font-bold text-white"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'var(--font-display)',
            }}
          >
            Teach by Playing
          </h2>
        </AnimatedOnScroll>
        <AnimatedOnScroll delay={0.2} duration={0.5} easing={[0.22, 1, 0.36, 1]}>
          <p className="mt-3 text-aihana-lilac max-w-lg mx-auto">
            Play any card game freely. The AI watches, learns, and synthesizes
            the rules — from zero. No programming. No rule books. Just play.
          </p>
        </AnimatedOnScroll>
      </div>

      {isDesktop ? <DesktopStickyScroll /> : <MobileStackedLayout />}
    </section>
  );
}
