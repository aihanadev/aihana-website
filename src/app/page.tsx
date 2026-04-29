// Landing page — single paper-folio document. Reading order mirrors a
// printed folio: title page (hero) → table of contents (GameShowcase
// vertical TOC) → chapters (the three pillars) → demonstration plate
// (one tipped-in gameplay scene) → crown jewel (Free Play) → verse
// (Living Deck poem) → closing CTA → colophon (footer).
//
// Reviewer note: "make the homepage itself the paper folio. Not a
// hero with paper accents — the entire page as a single folio sheet,
// scrollable, with the eight-game TOC as the spine." The TOC has
// moved up to sit immediately under the hero — the spine.

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

      {/* Title page */}
      <HeroSection />

      {/* Table of contents — the spine. Sits directly under the hero
          per the reviewer's "TOC as the spine" call: a real folio
          opens with its index, and only then walks the chapters. */}
      <GameShowcase />

      {/* Chapters — the three pillars. */}
      <FeatureSection
        label="pillar I · the deck remembers"
        headline="cards that remember."
        body="Every card in Aihana carries its history. The Ace of Spades that won your last war? It remembers. Play a card today, and three days later, your dealer might recall the moment. This isn't a database — it's a living deck."
        technicalNote="memory uptime 99.5% · retrieval latency <150ms · patent pending"
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
        label="pillar II · the dealer listens"
        headline="a dealer who learns by hand."
        body="Speak naturally. Aihana's AI dealer understands what you mean, not just what you type. Say 'make 7s wild' during Crazy Eights, and the dealer interprets, validates, and applies — in real time. Teach by playing, not by programming."
        technicalNote="dual-LLM validation · 5-stage intent classification"
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
        label="pillar III · the table balances"
        headline="every table plays fair."
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

      {/* The demonstration plate — single tipped-in gameplay scene
          (collapsed from the previous dual-phone block). */}
      <DualPhoneShowcase />

      {/* The crown jewel chapter — Free Play. */}
      <FreeplaySection />

      {/* The verse — plate IV · the river. Marginalia treatment. */}
      <LivingDeckPoem />

      {/* Closing call. */}
      <DownloadCTA />

      {/* Colophon. */}
      <Footer />
    </main>
  );
}
