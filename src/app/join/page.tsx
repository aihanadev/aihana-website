// /join — invite landing page (static-export friendly).
//
// The invite token rides in the PATH (aihana.io/join/<token>) — the form the
// app + backend already use, and what the AASA `paths: ["/join/*"]` matches for
// Universal Links. This site uses `output: export`, which can't build a dynamic
// `/join/[token]` route (no generateStaticParams for arbitrary tokens). So this
// is a single STATIC page, and a Netlify rewrite (netlify.toml) serves it for
// any `/join/*` URL; JoinClient reads the token from the live pathname.
//
// When the app is installed + AASA resolves, iOS opens the app directly and
// this page never renders. It's the fallback for app-not-installed / Android /
// contexts where the Universal Link didn't fire: it tries the custom scheme,
// then sends the visitor to the App Store.

import JoinClient from './JoinClient';

export const metadata = {
  title: 'Join a game on Aihana',
  description: 'Your invite is waiting. Opening Aihana…',
};

export default function JoinPage() {
  return <JoinClient />;
}
