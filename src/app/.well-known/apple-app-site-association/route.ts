// Apple App Site Association — enables iOS Universal Links for aihana.io.
// Served at https://aihana.io/.well-known/apple-app-site-association as JSON
// (Apple fetches this with no redirects). A route handler (vs a static public
// file) guarantees the application/json content-type on any host.
//
// appID = <TeamID>.<bundleId>  (Team X5G8MPUDKV from eas.json, bundle
// io.aihana.app from app.json). paths covers the invite links the app shares
// (https://aihana.io/join/<token>); app.json declares associatedDomains
// applinks:aihana.io to match.

import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export function GET() {
  return NextResponse.json(
    {
      applinks: {
        apps: [],
        details: [
          {
            appID: 'X5G8MPUDKV.io.aihana.app',
            paths: ['/join/*'],
          },
        ],
      },
    },
    { headers: { 'content-type': 'application/json' } },
  );
}
