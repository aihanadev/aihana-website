import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { URLS } from '@/lib/constants';

export const metadata = {
  title: 'Partnerships — Aihana',
  description: 'Brand-hosted play experiences on Aihana. Not advertising.',
};

export default function PartnershipsPage() {
  return (
    <main>
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 pt-32 pb-20">
        <header className="text-center mb-16">
          <h1
            className="text-white font-semibold mb-3"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)', fontFamily: 'var(--font-display)' }}
          >
            Partnerships
          </h1>
          <p className="text-aihana-lilac/70 text-lg">Brand-hosted play, not advertising.</p>
        </header>

        <p className="text-aihana-offwhite leading-[1.7] mb-4 text-lg">
          Aihana is a premium social card platform where play feels human, calm, and remembered.
          We invite a small number of brands to explore brand-hosted play experiences that align
          with trust, shared moments, and intentional social rituals.
        </p>
        <p className="text-aihana-lilac/60 italic mb-12">This is not an ad network.</p>

        <div className="h-px w-full bg-aihana-indigo/20 mb-12" />

        <section className="mb-10">
          <h2 className="text-white font-semibold text-lg mb-4">What this is</h2>
          <ul className="space-y-2 text-aihana-offwhite/85">
            <li>Hosted tables or decks that persist across sessions</li>
            <li>Ritual moments at session start or event kickoff</li>
            <li>Opt-in experiences players choose to join</li>
          </ul>
          <p className="text-aihana-lilac/60 italic text-sm mt-3">Think: hosting a game night — not buying impressions.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-white font-semibold text-lg mb-4">What this is not</h2>
          <ul className="space-y-2 text-aihana-offwhite/85">
            <li>No interstitials or rewarded ads</li>
            <li>No behavioral targeting</li>
            <li>No CPM buying or performance optimization</li>
            <li>No infinite inventory</li>
          </ul>
          <p className="text-aihana-lilac/60 italic text-sm mt-3">If it interrupts play, we don&apos;t ship it.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-white font-semibold text-lg mb-4">How we work</h2>
          <ul className="space-y-2 text-aihana-offwhite/85">
            <li>Selective, founder-led discovery</li>
            <li>Small pilots designed to learn, not scale</li>
            <li>Hard caps and scarcity by design</li>
          </ul>
          <p className="text-aihana-lilac/60 italic text-sm mt-3">We prioritize trust and long-term association over reach.</p>
        </section>

        <div className="h-px w-full bg-aihana-indigo/20 mb-12" />

        <div className="text-center">
          <h2 className="text-white font-semibold text-xl mb-2">Partnerships</h2>
          <p className="text-aihana-lilac/70 text-sm mb-6">
            We work with a small number of brands at a time.<br />
            Responses are reviewed by the founder and are not guaranteed.
          </p>
          <a
            href={URLS.partnershipsForm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-xl font-semibold text-white
              bg-aihana-violet hover:bg-aihana-violet/90 transition-colors"
          >
            Inquiry Form
          </a>
          <p className="text-aihana-lilac/40 text-xs mt-6">
            Partnerships are by invitation and subject to brand-fit and experience constraints.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
