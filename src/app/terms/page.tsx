import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata = { title: 'Terms of Service — Aihana' };

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-white font-bold text-3xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Terms of Service
        </h1>
        <p className="text-aihana-lilac">Coming soon.</p>
      </div>
      <Footer />
    </main>
  );
}
