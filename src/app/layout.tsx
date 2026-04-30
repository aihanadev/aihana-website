import type { Metadata } from 'next';
import './globals.css';

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
  return (
    <html lang="en">
      <body className="bg-aihana-paper text-aihana-ink antialiased">
        {children}
      </body>
    </html>
  );
}
