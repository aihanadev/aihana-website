// /download — the QR-code landing for printed material (flyers, stickers).
//
// Point the flyer QR here (https://aihana.io/download), NOT the raw App Store
// URL: this page is the single thing you flip on launch day, so the print art
// never has to change. Until the app is publicly live it shows a "launching
// soon" state; flip APP_LIVE in DownloadClient and it auto-redirects scanners to
// the right store for their platform.

import DownloadClient from './DownloadClient';

export const metadata = {
  title: 'Get Aihana — the world’s card game app',
  description: 'Cards that remember. Scan to download Aihana.',
};

export default function DownloadPage() {
  return <DownloadClient />;
}
