import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata = { title: 'Privacy Policy — Aihana' };

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <div className="bg-aihana-paper paper-grain min-h-[60vh]">
        <div className="max-w-2xl mx-auto px-6 pt-32 pb-20 text-center">
          <span
            className="text-aihana-ink-faint uppercase block mb-4"
            style={{
              fontFamily: 'var(--font-folio)',
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              fontWeight: 600,
            }}
          >
            colophon · the small print
          </span>
          <h1
            className="text-aihana-ink mb-6"
            style={{
              fontFamily: 'var(--font-folio)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              letterSpacing: '0.005em',
            }}
          >
            privacy policy
          </h1>
          <div className="hairline-rule mb-8 max-w-xs mx-auto" />
          <p
            className="text-aihana-ink-soft italic"
            style={{ fontFamily: 'var(--font-folio)', fontSize: '1.05rem' }}
          >
            in preparation. the dealer keeps your hand to themselves.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
