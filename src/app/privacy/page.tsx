import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { URLS } from '@/lib/constants';

export const metadata = {
  title: 'Privacy Policy — Aihana',
  description: 'What Aihana collects, why, who we share it with, and how to have it forgotten.',
};

const FOLIO = 'var(--font-folio)';
const EFFECTIVE = 'June 14, 2026';

type Section = { heading: string; body: (string | string[])[] };

// Accurate to what the app actually does. Plain language on purpose — a
// privacy policy nobody can read protects nobody.
const SECTIONS: Section[] = [
  {
    heading: 'the short version',
    body: [
      'Aihana is a multiplayer card-game app. To let you play with friends, remember your games, and let the dealer respond to you, we collect a small amount of information — your phone number (to sign in), the name you play under, and a record of the games you play.',
      'We do not sell your data. We do not track you across other apps or show you ads. You can delete your history — a single session or everything — at any time. The card-game memory that powers the “Living Deck” can be turned off entirely.',
    ],
  },
  {
    heading: 'what we collect',
    body: [
      'Account information. When you sign in, we collect your phone number and send a one-time code to it to verify it’s you. You choose a display name that other players at your table can see.',
      'Gameplay. As you play, we record game events — the moves made, cards played, rounds and outcomes — so games can resume, so the dealer can recall what happened, and so your card history (the “Living Deck”) can tell the story of your play. We also keep basic device and session information (a device identifier, app version, and timing) to run the multiplayer connection and understand engagement.',
      'What you say to the dealer. When you ask the dealer a question, teach the table a rule, or chat during a game, we process that text to generate a response (see “the dealer, and your words” below).',
      'Diagnostics. If the app crashes or hits an error, we collect a crash report with technical details so we can fix it.',
    ],
  },
  {
    heading: 'how we use what we collect',
    body: [
      'To run the games — sign you in, connect you to other players, keep games in sync, and let you reconnect if your connection drops.',
      'To remember — so the dealer can recall past hands and your card history can form a continuous story across sessions. This is the heart of what Aihana is; it’s also the part you can switch off.',
      'To respond — to interpret what you ask or teach and reply in the dealer’s voice.',
      'To keep the table fair and safe — to enforce the rules of play and review chat for harmful content.',
      'To keep the app working — to diagnose crashes and understand, in aggregate, how the app is used.',
    ],
  },
  {
    heading: 'the dealer, and your words',
    body: [
      'When you talk to the dealer or teach the table a new rule, the text you send is processed by third-party AI providers (OpenAI and/or Anthropic) so we can understand it and respond. We send them the message and the context needed to answer it; we do not send them your phone number.',
      'These providers process the text on our behalf to return a response. We don’t use your conversations to advertise to you, and the rules you teach apply only within your session unless you choose to save them.',
    ],
  },
  {
    heading: 'who we work with',
    body: [
      'We share data only with the service providers that make the app run, and only as needed:',
      [
        'Supabase — our database, authentication, and storage (where your account and game data live).',
        'Our messaging provider — to deliver the one-time sign-in code by SMS to your phone.',
        'OpenAI and/or Anthropic — to process what you say to the dealer and the rules you teach.',
        'Sentry — to collect crash and error reports.',
        'Our hosting provider — to run the backend that serves the games.',
      ],
      'Each of these processes data for us under their own terms; none of them are permitted to use your data to advertise to you. We may also disclose information if the law requires it, or to protect the safety of our players.',
    ],
  },
  {
    heading: 'what we don’t do',
    body: [
      'We don’t sell your personal information. We don’t use third-party advertising or ad-tracking SDKs, and we don’t track you across other companies’ apps or websites — so the app does not ask for tracking permission. We collect only what the game needs to work and to remember.',
    ],
  },
  {
    heading: 'how long we keep things',
    body: [
      'Game and card-history events are kept for up to 90 days, then automatically deleted. Your account information (phone number, display name) is kept while your account exists, until you ask us to delete it. Crash reports are retained only as long as needed to investigate issues.',
    ],
  },
  {
    heading: 'your choices',
    body: [
      'Forget a session. You can have a single game session forgotten from within the app.',
      'Delete everything. You can request deletion of all of your data — your history and your account — and we will erase it.',
      'Turn off memory. You can disable card-history storage entirely, so the Living Deck stops recording your play.',
      `To exercise any of these, use the in-app controls or write to us at ${URLS.email}. We honor verified requests from the account that owns the data.`,
    ],
  },
  {
    heading: 'children',
    body: [
      'Aihana is not directed to children under 13, and we do not knowingly collect personal information from them. If you believe a child has provided us information, contact us and we will delete it.',
    ],
  },
  {
    heading: 'security',
    body: [
      'Connections to our servers are encrypted in transit. Access to your data is authenticated, and the game server — not your device — is the authority on game state. No system is perfectly secure, but we work to protect your information and to limit what we collect in the first place.',
    ],
  },
  {
    heading: 'where your data is processed',
    body: [
      'Our providers operate primarily in the United States, so your information may be processed there. By using Aihana you understand your data may be handled in the U.S. and other countries where our providers operate.',
    ],
  },
  {
    heading: 'changes to this policy',
    body: [
      'If we make a material change, we’ll update this page and the date above. Continued use after a change means you accept the updated policy.',
    ],
  },
  {
    heading: 'contact',
    body: [
      `Questions, requests, or concerns about your privacy — write to us at ${URLS.email}.`,
    ],
  },
];

export default function PrivacyPage() {
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
              privacy policy
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
