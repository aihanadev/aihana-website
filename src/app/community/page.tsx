import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { URLS } from '@/lib/constants';

export const metadata = {
  title: 'Community — Aihana',
  description: 'Join the Aihana community. Share custom card game rules and connect with players.',
};

export default function CommunityPage() {
  return (
    <main>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <header className="text-center mb-12">
          <h1
            className="text-white font-bold mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-display)' }}
          >
            Community
          </h1>
          <p className="text-aihana-lilac text-lg">Submit your custom card game rules. Our Dealer is listening.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Submit Your Game',
              desc: 'Share your custom card game rules with the community',
              href: `${URLS.reddit}submit`,
              label: 'Create Post',
            },
            {
              title: 'Join Discussions',
              desc: 'Read what others are saying and participate',
              href: URLS.reddit,
              label: 'Browse Community',
            },
            {
              title: 'Latest Rules',
              desc: 'Check out the newest rule submissions',
              href: `${URLS.reddit}new`,
              label: 'View Recent',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-aihana-indigo/30 p-6 text-center
                bg-aihana-midnight/30 hover:-translate-y-1 transition-all duration-300
                hover:border-aihana-violet/40 hover:shadow-[0_8px_24px_rgba(107,87,255,0.15)]"
            >
              <h3 className="text-aihana-offwhite font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-aihana-lilac/70 text-sm mb-5">{card.desc}</p>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 rounded-xl text-sm font-semibold text-white
                  bg-aihana-violet hover:bg-aihana-violet/90 transition-colors"
              >
                {card.label} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
