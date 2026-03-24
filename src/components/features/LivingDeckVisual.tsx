'use client';

export function LivingDeckVisual() {
  return (
    <div className="relative w-48 h-64">
      {/* Ghost trails — memory echoes */}
      {[0.06, 0.12, 0.04].map((opacity, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-2xl border border-aihana-violet/20"
          style={{
            opacity,
            transform: `translate(${(i + 1) * 8}px, ${(i + 1) * -6}px) rotate(${(i + 1) * 2}deg)`,
            animation: `glow-pulse 4s ease-in-out ${i * 0.5}s infinite alternate`,
          }}
        />
      ))}

      {/* Main card */}
      <div
        className="relative w-full h-full rounded-2xl border-2 border-aihana-violet/30
          bg-gradient-to-br from-aihana-midnight to-aihana-void
          flex flex-col items-center justify-center gap-3"
        style={{
          boxShadow: '0 0 40px rgba(107,87,255,0.15), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        <span className="text-5xl">♠️</span>
        <span className="text-aihana-offwhite font-bold text-lg">A♠</span>
        <span className="text-aihana-lilac/50 text-[10px] uppercase tracking-wider">Remembers</span>
      </div>
    </div>
  );
}
