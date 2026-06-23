'use client';

import { useEffect, useState } from 'react';
import { URLS } from '@/lib/constants';

// Deferred deep-link: try the app, fall back to the App Store if it's absent.
// Reads the invite token from the URL itself (client-side) rather than a route
// param, so the whole thing is one static page — see page.tsx for why.
export default function JoinClient() {
  const [code, setCode] = useState('');

  useEffect(() => {
    // Token can arrive two ways: the path form (/join/<token>, served here via
    // the Netlify rewrite) or the query form (?invite=<token>). Support both.
    const fromPath = window.location.pathname.match(/\/join\/([A-Za-z0-9]+)/);
    const fromQuery = new URLSearchParams(window.location.search).get('invite');
    const token = (fromPath?.[1] || fromQuery || '').toUpperCase();
    setCode(token);
    if (!token) return;

    const deepLink = `aihana://join?invite=${encodeURIComponent(token)}`;

    // If the app opens, the page is hidden/backgrounded — cancel the App Store
    // redirect so we don't bounce an installed user to the store.
    let bailed = false;
    const cancel = () => { bailed = true; };
    document.addEventListener('visibilitychange', () => { if (document.hidden) cancel(); });
    window.addEventListener('pagehide', cancel);

    const t = setTimeout(() => {
      if (!bailed) window.location.href = URLS.appStore;
    }, 1400);

    // Attempt to hand off to the app.
    window.location.href = deepLink;

    return () => clearTimeout(t);
  }, []);

  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: 24,
        background: '#0e0824',
        color: '#f5f0e6',
        fontFamily: 'Georgia, serif',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: 22, letterSpacing: 0.3 }}>opening aihana…</p>
      <p style={{ fontSize: 15, opacity: 0.7, maxWidth: 360, lineHeight: 1.5 }}>
        if nothing happens, you don&apos;t have the app yet — get it and your invite will be waiting.
      </p>
      <a
        href={URLS.appStore}
        style={{
          marginTop: 8,
          padding: '12px 22px',
          borderRadius: 999,
          background: '#c9a24b',
          color: '#0e0824',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        Get Aihana
      </a>
      {code ? (
        <a
          href={`aihana://join?invite=${encodeURIComponent(code)}`}
          style={{ fontSize: 14, color: '#c9a24b', textDecoration: 'underline' }}
        >
          Open in app
        </a>
      ) : null}
    </main>
  );
}
