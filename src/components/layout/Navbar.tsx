'use client';

// Paper-folio Navbar — replaces the violet/lavender glass nav with
// folio masthead grammar. Logo as serif AIHANA wordmark, nav links as
// italic ink, "get the app" as vermillion ribbon CTA. Scrolled state
// shows a paper-high overlay with hairline ink rule, no backdrop-blur
// (paper doesn't shimmer). Mobile overlay opens onto a paper sheet,
// not an indigo midnight.

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
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          scrolled
            ? 'bg-aihana-paper-high/95 border-b border-aihana-ink/15'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Wordmark — serif, 400 weight, tracked. The brand standing
              alone, no gradient, no glow. */}
          <Link
            href="/"
            className="text-aihana-ink"
            style={{
              fontFamily: 'var(--font-folio)',
              fontWeight: 400,
              fontSize: '1.4rem',
              letterSpacing: '0.14em',
            }}
          >
            AIHANA
          </Link>

          {/* Desktop nav — italic serif links, vermillion ribbon CTA. */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#games"
              className="text-aihana-ink-soft hover:text-aihana-ink transition-colors italic"
              style={{ fontFamily: 'var(--font-folio)', fontSize: '0.95rem' }}
            >
              games
            </a>
            <Link
              href="/partnerships"
              className="text-aihana-ink-soft hover:text-aihana-ink transition-colors italic"
              style={{ fontFamily: 'var(--font-folio)', fontSize: '0.95rem' }}
            >
              partnerships
            </Link>
            <Link
              href="/community"
              className="text-aihana-ink-soft hover:text-aihana-ink transition-colors italic"
              style={{ fontFamily: 'var(--font-folio)', fontSize: '0.95rem' }}
            >
              community
            </Link>
            <a
              href={URLS.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 uppercase
                bg-aihana-vermillion text-aihana-paper-high
                border border-aihana-vermillion-deep
                hover:bg-aihana-vermillion-deep
                transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-folio)',
                letterSpacing: '0.18em',
                fontSize: '0.7rem',
                fontWeight: 500,
                borderRadius: 2,
              }}
            >
              get the app
            </a>
          </div>

          {/* Mobile hamburger — ink lines on paper. */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-aihana-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-aihana-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-aihana-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay — full paper sheet with paper-grain. Same
          hierarchy as desktop: italic serif links + vermillion CTA. */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-aihana-paper-high paper-grain flex flex-col items-center justify-center gap-7">
          <a
            href="#games"
            onClick={() => setMenuOpen(false)}
            className="text-aihana-ink italic"
            style={{ fontFamily: 'var(--font-folio)', fontSize: '1.6rem' }}
          >
            games
          </a>
          <Link
            href="/partnerships"
            onClick={() => setMenuOpen(false)}
            className="text-aihana-ink italic"
            style={{ fontFamily: 'var(--font-folio)', fontSize: '1.6rem' }}
          >
            partnerships
          </Link>
          <Link
            href="/community"
            onClick={() => setMenuOpen(false)}
            className="text-aihana-ink italic"
            style={{ fontFamily: 'var(--font-folio)', fontSize: '1.6rem' }}
          >
            community
          </Link>
          <a
            href={URLS.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-8 py-3 uppercase
              bg-aihana-vermillion text-aihana-paper-high
              border border-aihana-vermillion-deep"
            style={{
              fontFamily: 'var(--font-folio)',
              letterSpacing: '0.18em',
              fontSize: '0.85rem',
              fontWeight: 500,
              borderRadius: 2,
            }}
          >
            get the app
          </a>
        </div>
      )}
    </>
  );
}
