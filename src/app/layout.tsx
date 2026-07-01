import type { Metadata } from 'next';
import './globals.css';
import { URLS, SOCIALS } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL('https://aihana.io'),
  title: 'Aihana — A Dealer Who Remembers™',
  description:
    'The first card game platform where every card remembers, every dealer learns, and every table plays fair. 8 classic games. Real-time multiplayer. Patent pending.',
  keywords: [
    'card games', 'multiplayer', 'AI dealer', 'hanafuda', 'hearts',
    'war', 'go fish', 'crazy eights', 'living deck',
  ],
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    type: 'website',
    title: 'Aihana — A Dealer Who Remembers™',
    description: 'Cards that remember. A dealer who learns. Tables that play fair.',
    siteName: 'Aihana',
    images: [
      { url: '/og-image.png', width: 1500, height: 500, alt: 'Aihana — A Dealer Who Remembers' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aihana_cards',
    creator: '@aihana_cards',
    title: 'Aihana — A Dealer Who Remembers™',
    description: 'Cards that remember. A dealer who learns. Tables that play fair.',
    images: ['/og-image.png'],
  },
  other: {
    'theme-color': '#F4ECD3',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Organization schema — declares our official social
  // accounts via `sameAs` so search engines and social crawlers
  // treat these channels as canonically ours (knowledge-panel links,
  // verified-account association).
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aihana',
    url: 'https://aihana.io',
    logo: 'https://aihana.io/apple-touch-icon.png',
    email: URLS.email,
    sameAs: SOCIALS.map((s) => s.href),
  };

  return (
    <html lang="en">
      <body className="bg-aihana-paper text-aihana-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
