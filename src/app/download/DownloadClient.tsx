'use client';

import { useEffect, useState } from 'react';
import { URLS } from '@/lib/constants';

// ─────────────────────────────────────────────────────────────────────────────
// LAUNCH SWITCH — flip this to `true` the moment the app is PUBLICLY live on the
// App Store (status "Ready for Sale"/"Available" in App Store Connect, not just
// TestFlight). When true, scanners auto-redirect to the right store for their
// platform. When false, they see the "launching soon" state below. This is the
// ONLY change needed on launch day — the printed QR keeps pointing at /download.
const APP_LIVE = false;
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
      // Send mobile scanners straight to their store; desktop sees the buttons.
      if (p === 'ios') window.location.href = URLS.appStore;
      else if (p === 'android') window.location.href = URLS.googlePlay;
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
          {/* Mobile already redirected in the effect; this is the desktop /
              fallback view (and the moment before a mobile redirect fires). */}
          <a href={URLS.appStore} style={giltBtn}>Get it on the App Store</a>
          {platform === 'android' && (
            <a href={URLS.googlePlay} style={ghostLink}>or on Google Play</a>
          )}
          <p style={{ fontSize: 13, opacity: 0.55, maxWidth: 320, lineHeight: 1.5 }}>
            If the App Store doesn’t open automatically, tap the button above.
          </p>
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
