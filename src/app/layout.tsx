import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aihana — A Dealer Who Remembers™',
  description:
    'The first card game platform where every card remembers, every dealer learns, and every table plays fair. 8 classic games. Real-time multiplayer. Patent pending.',
  keywords: [
    'card games', 'multiplayer', 'AI dealer', 'hanafuda', 'hearts',
    'war', 'go fish', 'crazy eights', 'living deck',
  ],
  openGraph: {
    type: 'website',
    title: 'Aihana — A Dealer Who Remembers™',
    description: 'Cards that remember. A dealer who learns. Tables that play fair.',
    siteName: 'Aihana',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aihana — A Dealer Who Remembers™',
    description: 'Cards that remember. A dealer who learns. Tables that play fair.',
  },
  other: {
    'theme-color': '#2A1D4C',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-aihana-black text-aihana-offwhite antialiased">
        {children}
      </body>
    </html>
  );
}
