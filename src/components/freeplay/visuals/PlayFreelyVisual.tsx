'use client';

export function PlayFreelyVisual() {
  const cards = [
    { x: '15%', y: '20%', rotate: -12, drag: false },
    { x: '55%', y: '15%', rotate: 8, drag: false },
    { x: '35%', y: '55%', rotate: -3, drag: true, animClass: 'animate-card-drag-1' },
    { x: '65%', y: '50%', rotate: 15, drag: true, animClass: 'animate-card-drag-2' },
    { x: '20%', y: '65%', rotate: -8, drag: false },
    { x: '75%', y: '30%', rotate: 5, drag: false },
  ];

  return (
    <div
      className="relative w-full aspect-square max-w-[320px] rounded-2xl border border-aihana-indigo/20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2A1D4C 0%, #120721 100%)',
      }}
    >
      {/* Table felt texture line */}
      <div className="absolute inset-4 rounded-xl border border-dashed border-aihana-indigo/15" />

      {/* Cards */}
      {cards.map((card, i) => (
        <div
          key={i}
          className={`absolute w-12 h-16 rounded-lg border ${
            card.drag
              ? 'border-aihana-violet/40 bg-aihana-midnight/80'
              : 'border-aihana-indigo/25 bg-aihana-midnight/50'
          }`}
          style={{
            left: card.x,
            top: card.y,
            transform: `rotate(${card.rotate}deg)`,
            animation: card.drag
              ? `${card.animClass === 'animate-card-drag-1' ? 'card-drag-1' : 'card-drag-2'} ${
                  card.animClass === 'animate-card-drag-1' ? '4s' : '5s'
                } ease-in-out infinite`
              : undefined,
          }}
        >
          {/* Card face detail */}
          <div className="absolute inset-1 rounded border border-aihana-indigo/10 flex items-center justify-center">
            <span className="text-aihana-lilac/30 text-[10px] font-bold">
              {['A♠', 'K♦', '7♣', 'Q♥', '3♠', 'J♦'][i]}
            </span>
          </div>
        </div>
      ))}

      {/* Cursor indicator following a dragged card */}
      <div
        className="absolute w-3 h-3 rounded-full bg-aihana-violet/40 blur-sm"
        style={{
          left: '40%',
          top: '58%',
          animation: 'card-drag-1 4s ease-in-out infinite',
        }}
      />

      {/* "No rules" label */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <span className="text-aihana-lilac/30 text-[10px] tracking-wider uppercase">
          No rules active
        </span>
      </div>
    </div>
  );
}
