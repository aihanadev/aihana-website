'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { URLS } from '@/lib/constants';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-aihana-void/80 backdrop-blur-xl border-b border-aihana-indigo/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-aihana-violet font-extrabold text-2xl tracking-tight transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(107,87,255,0.5)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Aihana
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#games" className="text-aihana-lilac hover:text-aihana-offwhite transition-colors text-sm font-medium">
              Games
            </a>
            <Link href="/partnerships" className="text-aihana-lilac hover:text-aihana-offwhite transition-colors text-sm font-medium">
              Partnerships
            </Link>
            <Link href="/community" className="text-aihana-lilac hover:text-aihana-offwhite transition-colors text-sm font-medium">
              Community
            </Link>
            <a
              href={URLS.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-2xl text-sm font-semibold text-white
                bg-gradient-to-r from-aihana-violet to-aihana-lavender
                shadow-[0_4px_20px_rgba(107,87,255,0.3)]
                hover:shadow-[0_6px_28px_rgba(107,87,255,0.5)] hover:-translate-y-0.5
                transition-all duration-300"
            >
              Get the App
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-aihana-offwhite transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-aihana-offwhite transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-aihana-offwhite transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-aihana-midnight/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8">
          <a href="#games" onClick={() => setMenuOpen(false)} className="text-aihana-offwhite text-2xl font-medium">Games</a>
          <Link href="/partnerships" onClick={() => setMenuOpen(false)} className="text-aihana-offwhite text-2xl font-medium">Partnerships</Link>
          <Link href="/community" onClick={() => setMenuOpen(false)} className="text-aihana-offwhite text-2xl font-medium">Community</Link>
          <a
            href={URLS.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-8 py-3 rounded-2xl text-lg font-semibold text-white
              bg-gradient-to-r from-aihana-violet to-aihana-lavender"
          >
            Get the App
          </a>
        </div>
      )}
    </>
  );
}
