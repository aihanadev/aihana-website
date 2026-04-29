// TippedInPlate — paper-folio visual primitive used as the FeatureSection
// `visual` prop. Mirrors the lobby's HeroPlate component (LobbyPaper.tsx
// HeroPlate function) — ink mat, photo corners at all four corners,
// slight tilt, italic serif eyebrow caption, optional gilt verse below.
//
// Replaces the indigo-era LivingDeckVisual / TeachableAIVisual /
// FairnessVisual components which relied on glow/pulse animations.
// Paper doesn't shimmer; the plate is static, the meaning comes from
// the image plus its position in the page rhythm.

import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  eyebrow: string;     // e.g., "plate I · the rain"
  caption?: string;    // optional italic verse below the plate
  attribution?: string; // e.g., "— h.k." (lobby's heroAttribution voice)
  tilt?: number;       // degrees, default ±1.2 ceremonial
  width?: number;      // plate width in px (defaults to 280)
}

export function TippedInPlate({
  src,
  alt,
  eyebrow,
  caption,
  attribution,
  tilt = -1.2,
  width = 280,
}: Props) {
  const height = Math.round(width * 1.6); // 5:8 aspect

  return (
    <div className="flex flex-col items-center max-w-sm">
      {/* Eyebrow — italic uppercase serif, ink-faint */}
      <div
        className="uppercase mb-4 text-aihana-ink-faint"
        style={{
          fontFamily: 'var(--font-folio)',
          fontSize: '0.7rem',
          letterSpacing: '0.3em',
          fontWeight: 600,
        }}
      >
        {eyebrow}
      </div>

      {/* Plate — ink mat with photo corners. */}
      <div
        className="relative"
        style={{
          width,
          height,
          transform: `rotate(${tilt}deg)`,
          boxShadow: '0 12px 32px rgba(26,18,40,0.22)',
        }}
      >
        <div
          className="absolute inset-0 bg-aihana-ink overflow-hidden"
          style={{ padding: 5, borderRadius: 4 }}
        >
          <div
            className="relative w-full h-full overflow-hidden"
            style={{ borderRadius: 2 }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes={`${width}px`}
              style={{ objectFit: 'cover' }}
              priority={false}
            />
          </div>
        </div>

        {/* Photo corners — small ink-tinted squares at each corner.
            Same vocabulary as LobbyPaper.PhotoCorners. */}
        <PhotoCorner top={-4} left={-4} />
        <PhotoCorner top={-4} right={-4} />
        <PhotoCorner bottom={-4} left={-4} />
        <PhotoCorner bottom={-4} right={-4} />
      </div>

      {/* Caption + attribution — italic serif under the plate. */}
      {(caption || attribution) && (
        <div className="mt-6 text-center">
          {caption && (
            <p
              className="italic text-aihana-ink-soft"
              style={{
                fontFamily: 'var(--font-folio)',
                fontSize: '0.95rem',
                lineHeight: 1.55,
                maxWidth: 280,
              }}
            >
              “{caption}”
            </p>
          )}
          {attribution && (
            <p
              className="uppercase mt-2 text-aihana-ink-faint"
              style={{
                fontFamily: 'var(--font-folio)',
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                fontWeight: 600,
              }}
            >
              {attribution}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ── Photo corner ─────────────────────────────────────────

function PhotoCorner({
  top,
  bottom,
  left,
  right,
}: {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}) {
  return (
    <div
      className="absolute"
      style={{
        top,
        bottom,
        left,
        right,
        width: 14,
        height: 14,
        backgroundColor: 'rgba(26,18,40,0.18)',
        border: '1px solid var(--color-aihana-ink-faint)',
        borderRadius: 1,
      }}
    />
  );
}
