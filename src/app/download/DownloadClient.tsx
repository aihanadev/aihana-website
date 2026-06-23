'use client';

import { useEffect, useState } from 'react';
import { URLS } from '@/lib/constants';

// ─────────────────────────────────────────────────────────────────────────────
// LAUNCH SWITCH — `true` once the flyer goes out for the World Cup event. iOS
// scanners auto-redirect to the App Store listing; the listing resolves once the
// build is approved + released (Manual release, submitted 2026-06-22). Android
// has no app yet, so Android/desktop see the App Store button + an "iOS only"
// note rather than a dead Play Store link.
const APP_LIVE = true;
// ─────────────────────────────────────────────────────────────────────────────

type Platform = 'ios' | 'android' | 'other';

function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'other';
  const ua = navigator.userAgent || '';
  // iPadOS 13+ reports as Mac; the touch check disambiguates.
  if (/iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && 'ontouchend' in document)) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  return 'other';
}

export default function DownloadClient() {
  const [platform, setPlatform] = useState<Platform>('other');

  useEffect(() => {
    const p = detectPlatform();
    setPlatform(p);

    if (APP_LIVE) {
      // Only iOS auto-redirects — that's the only store we're live on. Android +
      // desktop fall through to the button/note view below.
      if (p === 'ios') window.location.href = URLS.appStore;
    }
  }, []);

  const wrap: React.CSSProperties = {
    minHeight: '100dvh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
    padding: 28,
    background: '#0e0824',
    color: '#f5f0e6',
    fontFamily: 'Georgia, serif',
    textAlign: 'center',
  };
  const giltBtn: React.CSSProperties = {
    marginTop: 6,
    padding: '13px 26px',
    borderRadius: 999,
    background: '#c9a24b',
    color: '#0e0824',
    fontWeight: 600,
    textDecoration: 'none',
    fontFamily: 'Georgia, serif',
  };
  const ghostLink: React.CSSProperties = {
    fontSize: 14,
    color: '#c9a24b',
    textDecoration: 'underline',
  };

  return (
    <main style={wrap}>
      <div style={{ fontSize: 30, letterSpacing: 4, fontWeight: 700 }}>
        AIHANA <span style={{ fontSize: 18, verticalAlign: 'super' }}>♠</span>
      </div>
      <p style={{ fontSize: 13, letterSpacing: 2, opacity: 0.6, textTransform: 'uppercase', margin: 0 }}>
        the world’s card game app
      </p>
      <p style={{ fontSize: 19, fontStyle: 'italic', opacity: 0.9, marginTop: 2 }}>
        Cards that remember.
      </p>

      {APP_LIVE ? (
        <>
          {/* iOS already redirected in the effect; this is the desktop / Android
              fallback view (and the moment before an iOS redirect fires). */}
          <a href={URLS.appStore} style={giltBtn}>Get it on the App Store</a>
          {platform === 'android' ? (
            <p style={{ fontSize: 13, opacity: 0.55, maxWidth: 320, lineHeight: 1.5 }}>
              iPhone only for now — Android is coming. Tap above on an iPhone, or
              leave your number and we’ll tell you when Android lands.
            </p>
          ) : (
            <p style={{ fontSize: 13, opacity: 0.55, maxWidth: 320, lineHeight: 1.5 }}>
              If the App Store doesn’t open automatically, tap the button above.
            </p>
          )}
          {platform === 'android' && (
            <a href={URLS.notifyForm} style={ghostLink}>Notify me about Android</a>
          )}
        </>
      ) : (
        <>
          <p style={{ fontSize: 16, opacity: 0.85, maxWidth: 340, lineHeight: 1.55, marginTop: 4 }}>
            Launching soon. Be the first to play the dealer that remembers.
          </p>
          <a href={URLS.notifyForm} style={giltBtn}>Notify me at launch</a>
          <a href="/" style={ghostLink}>Explore Aihana</a>
        </>
      )}
    </main>
  );
}
