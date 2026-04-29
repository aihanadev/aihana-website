// Landing page — paper-folio brand surfaces (hero / nav / feature
// template / footer / CTA) plus existing indigo-era surfaces below
// the fold (DualPhoneShowcase, FreeplaySection, GameShowcase, poem).
// The handoff is intentional for now — the brand-defining surfaces
// flip first; the rest are scoped for a follow-up if the paper hero
// proves out.

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/hero/HeroSection';
import { DualPhoneShowcase } from '@/components/showcase/DualPhoneShowcase';
import { FeatureSection } from '@/components/features/FeatureSection';
import { TippedInPlate } from '@/components/features/TippedInPlate';
import { FreeplaySection } from '@/components/freeplay/FreeplaySection';
import { LivingDeckPoem } from '@/components/poem/LivingDeckPoem';
import { GameShowcase } from '@/components/games/GameShowcase';
import { DownloadCTA } from '@/components/cta/DownloadCTA';

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      {/* Indigo-era showcase — kept until the photo-mockup section is
          re-cut for the paper substrate. Scope-limited to keep this PR
          focused on brand-defining surfaces. */}
      <DualPhoneShowcase />

      <FeatureSection
        label="THE LIVING DECK"
        headline="cards that remember"
        body="Every card in Aihana carries its history. The Ace of Spades that won your last war? It remembers. Play a card today, and three days later, your dealer might recall the moment. This isn't a database — it's a living deck."
        technicalNote="memory uptime: 99.5% · retrieval latency: <150ms"
        visual={
          <TippedInPlate
            src="/hanafuda/nov_rainman.png"
            alt="The rain-man card — emblem of memory across sessions"
            eyebrow="plate I · the rain"
            caption="the deck remembers."
            attribution="— the dealer"
            tilt={-1.5}
          />
        }
        layout="visual-left"
      />

      <FeatureSection
        label="TEACHABLE INTELLIGENCE"
        headline="a dealer who listens"
        body="Speak naturally. Aihana's AI dealer understands what you mean, not just what you type. Say 'make 7s wild' during Crazy Eights, and the dealer interprets, validates, and applies — in real time. Teach by playing, not by programming."
        technicalNote="dual-LLM validation · 5-stage intent classification · patent pending"
        visual={
          <TippedInPlate
            src="/games/full/free_play.png"
            alt="The Ace of Clubs floating in an ink-curl — open canvas"
            eyebrow="plate II · the open canvas"
            caption="say it. the dealer hears."
            attribution="— the table"
            tilt={1.2}
          />
        }
        layout="visual-right"
      />

      <FeatureSection
        label="FAIRNESS AS FLOW"
        headline="every table plays fair"
        body="Rule changes require consensus. Win rates are monitored. RNG is auditable. Aihana doesn't just shuffle cards — it ensures the game stays balanced, transparent, and respectful. When someone proposes a house rule, everyone votes."
        technicalNote="cryptographic RNG · <70% dominance threshold · real-time fairness index"
        visual={
          <TippedInPlate
            src="/games/full/war.png"
            alt="King of Clubs and Queen of Hearts collide — balance held in motion"
            eyebrow="plate III · the balance"
            caption="fairness is not enforcement. it is equilibrium maintained in motion."
            attribution="— the table"
            tilt={-0.8}
          />
        }
        layout="visual-left"
      />

      {/* Below-the-fold surfaces — still on indigo glass for now.
          Will paper in a follow-up if the brand surfaces validate. */}
      <FreeplaySection />
      <LivingDeckPoem />
      <GameShowcase />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
