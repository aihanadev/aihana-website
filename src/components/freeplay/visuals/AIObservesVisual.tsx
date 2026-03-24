'use client';

// Pre-computed positions to avoid SSR/client floating-point hydration mismatch
const cards = [
  { label: 'A♠', x: 110, y: 0 },
  { label: 'K♦', x: 34, y: 104.6 },
  { label: '7♣', x: -89, y: 64.66 },
  { label: 'Q♥', x: -89, y: -64.66 },
  { label: '3♠', x: 34, y: -104.6 },
];

export function AIObservesVisual() {
  return (
    <div
      className="relative w-full aspect-square max-w-[320px] rounded-2xl border border-aihana-indigo/20 overflow-hidden flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #2A1D4C 0%, #120721 100%)',
      }}
    >
      {/* Pulse rings */}
      {[0, 0.5, 1].map((delay, i) => (
        <div
          key={i}
          className="absolute w-20 h-20 rounded-full border border-aihana-violet/30"
          style={{
            animation: `observe-pulse 2s ease-out ${delay}s infinite`,
          }}
        />
      ))}

      {/* Dealer center */}
      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-aihana-violet to-aihana-lavender flex items-center justify-center z-10">
        <span className="text-xl">🎩</span>
      </div>

      {/* Cards around the perimeter with connection lines */}
      {cards.map((card, i) => (
        <div key={i}>
          {/* Connection line */}
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            width="280"
            height="280"
            viewBox="-140 -140 280 280"
          >
            <line
              x1="0"
              y1="0"
              x2={card.x}
              y2={card.y}
              stroke="rgba(107,87,255,0.2)"
              strokeWidth="1"
              strokeDasharray="4 4"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-8"
                dur="1s"
                repeatCount="indefinite"
              />
            </line>
            {/* Traveling dot */}
            <circle r="2.5" fill="#6B57FF" opacity="0.7">
              <animateMotion
                dur={`${1.5 + i * 0.3}s`}
                repeatCount="indefinite"
                path={`M0,0 L${card.x},${card.y}`}
              />
            </circle>
          </svg>

          {/* Card */}
          <div
            className="absolute w-10 h-14 rounded-lg border border-aihana-indigo/30 bg-aihana-midnight/60 flex items-center justify-center"
            style={{
              left: `calc(50% + ${card.x}px - 20px)`,
              top: `calc(50% + ${card.y}px - 28px)`,
            }}
          >
            <span className="text-aihana-lilac/40 text-[9px] font-bold">{card.label}</span>
          </div>
        </div>
      ))}

      {/* Label */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <span className="text-aihana-lilac/40 text-[10px] tracking-wider">
          Analyzing patterns...
        </span>
      </div>
    </div>
  );
}
