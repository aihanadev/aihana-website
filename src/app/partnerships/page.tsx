import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { URLS } from '@/lib/constants';

export const metadata = {
  title: 'Partnerships — Aihana',
  description: 'Brand-hosted play experiences on Aihana. Not advertising.',
};

const FOLIO_FONT = 'var(--font-folio)';

export default function PartnershipsPage() {
  return (
    <main>
      <Navbar />
      <div className="bg-aihana-paper paper-grain min-h-screen">
        <div className="max-w-2xl mx-auto px-6 pt-32 pb-24">
          {/* Eyebrow + headline */}
          <header className="text-center mb-14">
            <span
              className="text-aihana-ink-faint uppercase block mb-4"
              style={{
                fontFamily: FOLIO_FONT,
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                fontWeight: 600,
              }}
            >
              the folio · partnerships
            </span>
            <h1
              className="text-aihana-ink mb-4"
              style={{
                fontFamily: FOLIO_FONT,
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: 'clamp(2.25rem, 4vw, 3rem)',
                letterSpacing: '0.005em',
              }}
            >
              brand-hosted play.
            </h1>
            <p
              className="text-aihana-ink-soft italic"
              style={{ fontFamily: FOLIO_FONT, fontSize: '1.05rem' }}
            >
              not advertising.
            </p>
          </header>

          <div className="hairline-rule mb-12" />

          <p
            className="text-aihana-ink-soft mb-4"
            style={{ fontFamily: FOLIO_FONT, fontSize: '1.05rem', lineHeight: 1.75 }}
          >
            Aihana is a premium social card platform where play feels human, calm, and remembered.
            We invite a small number of brands to explore brand-hosted play experiences that align
            with trust, shared moments, and intentional social rituals.
          </p>
          <p
            className="text-aihana-ink-faint italic mb-12"
            style={{ fontFamily: FOLIO_FONT, fontSize: '0.95rem' }}
          >
            this is not an ad network.
          </p>

          <div className="hairline-rule mb-12" />

          <PartSection
            label="what this is"
            footnote="think: hosting a game night — not buying impressions."
            items={[
              'Hosted tables or decks that persist across sessions',
              'Ritual moments at session start or event kickoff',
              'Opt-in experiences players choose to join',
            ]}
          />

          <PartSection
            label="what this is not"
            footnote="if it interrupts play, we don't ship it."
            items={[
              'No interstitials or rewarded ads',
              'No behavioral targeting',
              'No CPM buying or performance optimization',
              'No infinite inventory',
            ]}
          />

          <PartSection
            label="how we work"
            footnote="we prioritize trust and long-term association over reach."
            items={[
              'Selective, founder-led discovery',
              'Small pilots designed to learn, not scale',
              'Hard caps and scarcity by design',
            ]}
          />

          <div className="hairline-rule mb-12" />

          {/* Inquiry CTA — vermillion ribbon. */}
          <div className="text-center">
            <span
              className="text-aihana-ink-faint uppercase block mb-3"
              style={{
                fontFamily: FOLIO_FONT,
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                fontWeight: 600,
              }}
            >
              partnerships
            </span>
            <p
              className="text-aihana-ink-soft mb-7"
              style={{ fontFamily: FOLIO_FONT, fontSize: '1rem', lineHeight: 1.65 }}
            >
              We work with a small number of brands at a time.<br />
              Responses are reviewed by the founder and are not guaranteed.
            </p>
            <a
              href={URLS.partnershipsForm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 uppercase
                bg-aihana-vermillion text-aihana-paper-high
                border border-aihana-vermillion-deep
                hover:bg-aihana-vermillion-deep
                transition-colors duration-200"
              style={{
                fontFamily: FOLIO_FONT,
                letterSpacing: '0.18em',
                fontSize: '0.78rem',
                fontWeight: 500,
                borderRadius: 2,
              }}
            >
              inquiry form
            </a>
            <p
              className="italic mt-7"
              style={{
                fontFamily: FOLIO_FONT,
                fontSize: '0.78rem',
                color: 'var(--color-aihana-gilt-deep)',
                letterSpacing: '0.02em',
              }}
            >
              partnerships are by invitation and subject to brand-fit and experience constraints.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

// ── Section sub-component ─────────────────────────────────

function PartSection({
  label,
  items,
  footnote,
}: {
  label: string;
  items: string[];
  footnote?: string;
}) {
  return (
    <section className="mb-12">
      <h2
        className="text-aihana-ink-faint uppercase mb-5"
        style={{
          fontFamily: FOLIO_FONT,
          fontSize: '0.7rem',
          letterSpacing: '0.3em',
          fontWeight: 600,
        }}
      >
        {label}
      </h2>
      <ul
        className="space-y-2 text-aihana-ink-soft"
        style={{ fontFamily: FOLIO_FONT, fontSize: '1.02rem', lineHeight: 1.7 }}
      >
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {footnote && (
        <p
          className="italic mt-4"
          style={{
            fontFamily: FOLIO_FONT,
            fontSize: '0.85rem',
            color: 'var(--color-aihana-gilt-deep)',
            letterSpacing: '0.02em',
          }}
        >
          {footnote}
        </p>
      )}
    </section>
  );
}
