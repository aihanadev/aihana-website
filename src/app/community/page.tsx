import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { URLS } from '@/lib/constants';

export const metadata = {
  title: 'Community — Aihana',
  description: 'Join the Aihana community. Share custom card game rules and connect with players.',
};

const FOLIO_FONT = 'var(--font-folio)';

const COMMUNITY_CARDS = [
  {
    title: 'submit your game',
    desc: 'share your custom card-game rules with the community.',
    href: `${URLS.reddit}submit`,
    label: 'create post',
  },
  {
    title: 'join discussions',
    desc: 'read what others are saying and join in.',
    href: URLS.reddit,
    label: 'browse community',
  },
  {
    title: 'latest rules',
    desc: 'check out the newest rule submissions.',
    href: `${URLS.reddit}new`,
    label: 'view recent',
  },
];

export default function CommunityPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
          {/* Header */}
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
              the folio · community
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
              the dealer is listening.
            </h1>
            <p
              className="text-aihana-ink-soft italic"
              style={{ fontFamily: FOLIO_FONT, fontSize: '1.05rem' }}
            >
              submit your custom card-game rules. join the table.
            </p>
          </header>

          <div className="hairline-rule mb-14" />

          {/* Three plates — paper cards with vermillion CTA. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMMUNITY_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-aihana-paper-high p-6 text-center
                  border border-aihana-ink/20
                  hover:-translate-y-1 hover:border-aihana-ink/40
                  transition-all duration-300"
                style={{
                  borderRadius: 4,
                  boxShadow: '0 4px 14px rgba(26,18,40,0.08)',
                }}
              >
                <h3
                  className="text-aihana-ink mb-3"
                  style={{
                    fontFamily: FOLIO_FONT,
                    fontWeight: 400,
                    fontStyle: 'italic',
                    fontSize: '1.2rem',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-aihana-ink-soft mb-6"
                  style={{ fontFamily: FOLIO_FONT, fontSize: '0.95rem', lineHeight: 1.6 }}
                >
                  {card.desc}
                </p>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 uppercase
                    bg-aihana-vermillion text-aihana-paper-high
                    border border-aihana-vermillion-deep
                    hover:bg-aihana-vermillion-deep
                    transition-colors duration-200"
                  style={{
                    fontFamily: FOLIO_FONT,
                    letterSpacing: '0.18em',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    borderRadius: 2,
                  }}
                >
                  {card.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
