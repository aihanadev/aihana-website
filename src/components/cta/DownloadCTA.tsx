'use client';

import { AnimatedOnScroll } from '@/components/shared/AnimatedOnScroll';
import { URLS } from '@/lib/constants';

export function DownloadCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Radial violet glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(107,87,255,0.1) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
        <AnimatedOnScroll>
          <h2
            className="font-bold text-white mb-4"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontFamily: 'var(--font-display)',
            }}
          >
            Play Your Way
          </h2>
        </AnimatedOnScroll>

        <AnimatedOnScroll delay={0.1}>
          <p className="text-aihana-offwhite mb-8">
            Available on iOS and Android. Download now and find your table.
          </p>
        </AnimatedOnScroll>

        <AnimatedOnScroll delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={URLS.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-2xl font-semibold text-white
                bg-gradient-to-r from-aihana-violet to-aihana-lavender
                shadow-[0_8px_30px_rgba(107,87,255,0.4)]
                hover:shadow-[0_12px_40px_rgba(107,87,255,0.6)] hover:-translate-y-0.5 hover:scale-[1.02]
                transition-all duration-200"
            >
              Download for iOS
            </a>
            <a
              href={URLS.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-2xl font-semibold text-white
                bg-gradient-to-r from-aihana-violet to-aihana-lavender
                shadow-[0_8px_30px_rgba(107,87,255,0.4)]
                hover:shadow-[0_12px_40px_rgba(107,87,255,0.6)] hover:-translate-y-0.5 hover:scale-[1.02]
                transition-all duration-200"
            >
              Download for Android
            </a>
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll delay={0.3}>
          <div className="mt-10">
            <p className="text-sm text-aihana-lilac mb-4">
              Or get notified when new games launch:
            </p>
            <a
              href={URLS.notifyForm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-2xl text-sm font-semibold text-aihana-violet
                border border-aihana-violet/40
                hover:bg-aihana-violet/10 hover:border-aihana-violet/60
                transition-all duration-300"
            >
              Get Notified
            </a>
          </div>
        </AnimatedOnScroll>

        <p className="text-aihana-lilac/40 text-xs mt-10">
          Free to download. No ads. No interruptions.
        </p>
      </div>
    </section>
  );
}
