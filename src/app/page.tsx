import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/hero/HeroSection';
import { DualPhoneShowcase } from '@/components/showcase/DualPhoneShowcase';
import { FeatureSection } from '@/components/features/FeatureSection';
import { LivingDeckVisual } from '@/components/features/LivingDeckVisual';
import { TeachableAIVisual } from '@/components/features/TeachableAIVisual';
import { FairnessVisual } from '@/components/features/FairnessVisual';
import { FreeplaySection } from '@/components/freeplay/FreeplaySection';
import { LivingDeckPoem } from '@/components/poem/LivingDeckPoem';
import { GameShowcase } from '@/components/games/GameShowcase';
import { DownloadCTA } from '@/components/cta/DownloadCTA';
import { GradientDivider } from '@/components/shared/GradientDivider';

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <GradientDivider className="my-0" />
      <DualPhoneShowcase />

      <FeatureSection
        label="THE LIVING DECK™"
        headline="Cards That Remember"
        body="Every card in Aihana carries its history. The Ace of Spades that won your last war? It remembers. Play a card today, and three days later, your dealer might recall the moment. This isn't a database — it's a living deck."
        technicalNote="Memory uptime: 99.5%. Retrieval latency: <150ms."
        visual={<LivingDeckVisual />}
        layout="visual-left"
      />

      <FeatureSection
        label="TEACHABLE INTELLIGENCE"
        headline="A Dealer Who Listens"
        body="Speak naturally. Aihana's AI dealer understands what you mean, not just what you type. Say 'make 7s wild' during Crazy Eights, and the dealer interprets, validates, and applies — in real time. Teach by playing, not by programming."
        technicalNote="Dual-LLM validation. 5-stage intent classification. Patent pending."
        visual={<TeachableAIVisual />}
        layout="visual-right"
      />

      <FeatureSection
        label="FAIRNESS AS FLOW"
        headline="Every Table Plays Fair"
        body="Rule changes require consensus. Win rates are monitored. RNG is auditable. Aihana doesn't just shuffle cards — it ensures the game stays balanced, transparent, and respectful. When someone proposes a house rule, everyone votes."
        technicalNote="Cryptographic RNG. <70% dominance threshold. Real-time fairness index."
        visual={<FairnessVisual />}
        layout="visual-left"
      />

      <GradientDivider className="my-0" />
      <FreeplaySection />
      <GradientDivider className="my-0" />
      <LivingDeckPoem />
      <GameShowcase />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
