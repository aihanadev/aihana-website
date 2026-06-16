import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { URLS } from '@/lib/constants';

export const metadata = {
  title: 'Terms of Service — Aihana',
  description: 'The agreement for using Aihana — what you can expect, and what we ask of you.',
};

const FOLIO = 'var(--font-folio)';
const EFFECTIVE = 'June 14, 2026';

type Section = { heading: string; body: (string | string[])[] };

const SECTIONS: Section[] = [
  {
    heading: 'the agreement',
    body: [
      'These terms are the agreement between you and Aihana for your use of the app and its services. By creating an account or playing, you agree to them. If you don’t agree, please don’t use Aihana.',
    ],
  },
  {
    heading: 'what aihana is',
    body: [
      'Aihana is a multiplayer card-game app with a dealer that remembers your games, responds to you, and can be taught new rules. We offer it for personal, non-commercial enjoyment.',
    ],
  },
  {
    heading: 'your account',
    body: [
      'You sign in with your phone number. You’re responsible for keeping access to it secure and for activity on your account. Choose a display name that isn’t misleading, offensive, or someone else’s.',
      'You must be at least 13 years old to use Aihana.',
    ],
  },
  {
    heading: 'play kindly',
    body: [
      'Aihana is a shared table. When you use it, you agree not to:',
      [
        'harass, threaten, or abuse other players, including in chat;',
        'cheat, exploit bugs, or manipulate the game state;',
        'attempt to disrupt, overload, reverse-engineer, or gain unauthorized access to the service;',
        'use Aihana for anything unlawful, or to post content that is illegal, hateful, or harmful.',
      ],
      'We may remove content or suspend accounts that break these rules, to keep the table fair for everyone.',
    ],
  },
  {
    heading: 'what you teach and say',
    body: [
      'You keep ownership of the custom rules you create, the names you choose, and what you say at the table. By using Aihana, you grant us the permission needed to host, process, and display that content so the service can work — for example, showing your moves to other players at your table, processing a rule you teach, or generating a dealer reply.',
      'A rule you teach the table applies within your session. The dealer cannot override the core integrity of the game — shuffling, scoring, and the fairness layer are locked and cannot be taught away.',
    ],
  },
  {
    heading: 'the dealer',
    body: [
      'The dealer is an AI feature for play. Its commentary and interpretations are part of the game, not professional, legal, or financial advice. It does its best to understand you, but it can misread; it never changes the odds or the strength of a card, only how the game is narrated and which taught rules apply.',
    ],
  },
  {
    heading: 'fair play',
    body: [
      'Our server — not your device — is the authority on game state. Attempting to act as another player, forge moves, or otherwise cheat is a breach of these terms and may end your access.',
    ],
  },
  {
    heading: 'our work',
    body: [
      'The app, the games, the artwork, and the software are owned by Aihana or our licensors and are protected by intellectual-property laws. “Living Deck” and “Dealer Who Remembers” are our trademarks. These terms don’t give you rights to our marks or software beyond using the app as intended.',
    ],
  },
  {
    heading: 'the service, as it is',
    body: [
      'Aihana is provided “as is” and “as available,” without warranties of any kind. We don’t promise the service will always be uninterrupted, error-free, or that the dealer will always interpret you correctly. To the fullest extent the law allows, we disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
    ],
  },
  {
    heading: 'limits',
    body: [
      'To the fullest extent permitted by law, Aihana will not be liable for indirect, incidental, or consequential damages arising from your use of the service. Some places don’t allow these limits, so parts of this section may not apply to you.',
    ],
  },
  {
    heading: 'ending things',
    body: [
      'You can stop using Aihana at any time and request that your account and data be deleted. We may suspend or end access if you break these terms or to protect the service and its players. You can delete your data as described in our Privacy Policy.',
    ],
  },
  {
    heading: 'changes',
    body: [
      'We may update these terms; if we make a material change, we’ll update this page and the date above. Continued use after a change means you accept the updated terms.',
    ],
  },
  {
    heading: 'apple app store',
    body: [
      'When you use Aihana on an Apple device, the following also applies:',
      [
        'These terms are between you and Aihana only — not with Apple. Aihana, not Apple, is solely responsible for the app and its content.',
        'Your license to use Aihana is a non-transferable license to use it on any Apple-branded device that you own or control, as permitted by the App Store’s Usage Rules (including Family Sharing where applicable).',
        'Apple has no obligation to provide any maintenance or support for the app.',
        'If the app fails to conform to any applicable warranty, you may notify Apple, and Apple may refund the purchase price (if any); to the maximum extent permitted by law, Apple has no other warranty obligation for the app.',
        'Apple is not responsible for addressing any claims you or a third party may have relating to the app, including product-liability, regulatory, or consumer-protection claims.',
        'If a third party claims that the app or your use of it infringes their intellectual-property rights, Aihana, not Apple, is responsible for the investigation, defense, settlement, and discharge of that claim.',
        'Apple and its subsidiaries are third-party beneficiaries of these terms and may enforce them against you.',
        'You represent that you are not located in a country subject to a U.S. Government embargo, and that you are not on any U.S. Government list of prohibited or restricted parties.',
      ],
    ],
  },
  {
    heading: 'governing law',
    body: [
      'These terms are governed by the laws of the State of California, United States, without regard to its conflict-of-laws rules. Any dispute that is not otherwise resolved will be brought in the state or federal courts located in California, and you consent to their jurisdiction.',
    ],
  },
  {
    heading: 'the rest',
    body: [
      'If any part of these terms is found unenforceable, the rest stays in effect. These terms, together with our Privacy Policy, are the entire agreement between you and Aihana about the app. Our not enforcing a provision is not a waiver of it. You may not transfer your rights under these terms; we may transfer ours in connection with a merger, acquisition, or sale of assets.',
    ],
  },
  {
    heading: 'contact',
    body: [
      `Questions about these terms — write to us at ${URLS.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen">
        <div className="max-w-2xl mx-auto px-6 pt-32 pb-24">
          <header className="text-center mb-12">
            <span
              className="text-aihana-ink-faint uppercase block mb-4"
              style={{ fontFamily: FOLIO, fontSize: '0.7rem', letterSpacing: '0.3em', fontWeight: 600 }}
            >
              colophon · the small print
            </span>
            <h1
              className="text-aihana-ink mb-6"
              style={{
                fontFamily: FOLIO,
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                letterSpacing: '0.005em',
              }}
            >
              terms of service
            </h1>
            <div className="hairline-rule mb-5 max-w-xs mx-auto" />
            <p
              className="text-aihana-ink-faint"
              style={{ fontFamily: FOLIO, fontSize: '0.8rem', letterSpacing: '0.05em' }}
            >
              effective {EFFECTIVE}
            </p>
          </header>

          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <section key={s.heading}>
                <h2
                  className="text-aihana-ink mb-3 italic"
                  style={{ fontFamily: FOLIO, fontWeight: 400, fontSize: '1.3rem', letterSpacing: '0.01em' }}
                >
                  {s.heading}
                </h2>
                {s.body.map((b, i) =>
                  Array.isArray(b) ? (
                    <ul key={i} className="mb-3 space-y-1.5 list-none">
                      {b.map((item, j) => (
                        <li
                          key={j}
                          className="text-aihana-ink-soft pl-4 border-l border-aihana-ink-faint/30"
                          style={{ fontFamily: FOLIO, fontSize: '1rem', lineHeight: 1.7 }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      key={i}
                      className="text-aihana-ink-soft mb-3"
                      style={{ fontFamily: FOLIO, fontSize: '1rem', lineHeight: 1.75 }}
                    >
                      {b}
                    </p>
                  )
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
