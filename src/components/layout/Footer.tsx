import Link from 'next/link';
import { URLS } from '@/lib/constants';

const gameLinks = [
  'Hearts', 'War', 'Go Fish', 'Crazy Eights',
  'Koi-Koi', 'Gin Rummy', 'Big2', "Texas Hold'em",
];

export function Footer() {
  return (
    <footer className="bg-aihana-black border-t border-aihana-indigo/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-aihana-violet font-extrabold text-xl mb-4">Aihana</h3>
            <p className="text-aihana-lilac text-sm leading-relaxed">
              A Dealer Who Remembers™
            </p>
            <p className="text-aihana-lilac/60 text-sm mt-1">
              The Living Deck™
            </p>
          </div>

          {/* Games */}
          <div>
            <h4 className="text-aihana-offwhite font-semibold text-sm mb-4 uppercase tracking-wider">
              Games
            </h4>
            <ul className="space-y-2">
              {gameLinks.map((game) => (
                <li key={game}>
                  <a href="#games" className="text-aihana-lilac hover:text-aihana-offwhite transition-colors text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-aihana-offwhite after:transition-all after:duration-300 hover:after:w-full">
                    {game}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-aihana-offwhite font-semibold text-sm mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2">
              <li><Link href="/partnerships" className="text-aihana-lilac hover:text-aihana-offwhite transition-colors text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-aihana-offwhite after:transition-all after:duration-300 hover:after:w-full">Partnerships</Link></li>
              <li><Link href="/community" className="text-aihana-lilac hover:text-aihana-offwhite transition-colors text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-aihana-offwhite after:transition-all after:duration-300 hover:after:w-full">Community</Link></li>
              <li><Link href="/terms" className="text-aihana-lilac hover:text-aihana-offwhite transition-colors text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-aihana-offwhite after:transition-all after:duration-300 hover:after:w-full">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-aihana-lilac hover:text-aihana-offwhite transition-colors text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-aihana-offwhite after:transition-all after:duration-300 hover:after:w-full">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-aihana-offwhite font-semibold text-sm mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2">
              <li><a href={`mailto:${URLS.email}`} className="text-aihana-lilac hover:text-aihana-offwhite transition-colors text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-aihana-offwhite after:transition-all after:duration-300 hover:after:w-full">{URLS.email}</a></li>
              <li><a href={URLS.reddit} target="_blank" rel="noopener noreferrer" className="text-aihana-lilac hover:text-aihana-offwhite transition-colors text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-aihana-offwhite after:transition-all after:duration-300 hover:after:w-full">Reddit r/aihana</a></li>
              <li><a href={URLS.appStore} target="_blank" rel="noopener noreferrer" className="text-aihana-lilac hover:text-aihana-offwhite transition-colors text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-aihana-offwhite after:transition-all after:duration-300 hover:after:w-full">App Store</a></li>
              <li><a href={URLS.googlePlay} target="_blank" rel="noopener noreferrer" className="text-aihana-lilac hover:text-aihana-offwhite transition-colors text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-aihana-offwhite after:transition-all after:duration-300 hover:after:w-full">Google Play</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-8"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(75,63,114,0.3), transparent)',
          }}
        />

        {/* Bottom Bar */}
        <div className="text-center space-y-2">
          <p className="text-aihana-lilac/50 text-xs">
            © 2025–{new Date().getFullYear()} Aihana, LLC. All rights reserved.
          </p>
          <p className="text-aihana-lilac/40 text-xs max-w-2xl mx-auto">
            AIHANA™, A Dealer Who Remembers™, and The Living Deck™ are trademarks of Aihana, LLC. Patent pending.
          </p>
        </div>
      </div>
    </footer>
  );
}
