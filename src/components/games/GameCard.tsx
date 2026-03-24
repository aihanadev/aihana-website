import type { GameInfo } from '@/lib/constants';

const difficultyColors: Record<string, string> = {
  Easy: 'bg-green-500/20 text-green-400 border-green-500/30',
  Medium: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Hard: 'bg-red-500/20 text-red-400 border-red-500/30',
};

export function GameCard({ game }: { game: GameInfo }) {
  return (
    <div className="relative flex-shrink-0 w-[260px] snap-center group">
      <div
        className="h-[340px] rounded-3xl border border-aihana-indigo/30 overflow-hidden
          bg-aihana-midnight/80 backdrop-blur-sm
          transition-all duration-200
          group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:border-aihana-violet/50
          group-hover:shadow-[0_16px_40px_rgba(107,87,255,0.2)]"
        style={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }}
      >
        {/* Icon area */}
        <div className="relative h-[55%] flex items-center justify-center">
          {/* Thematic glow */}
          <div
            className="absolute w-32 h-32 rounded-full blur-3xl pointer-events-none transition-opacity duration-300 opacity-60 group-hover:opacity-100"
            style={{ background: game.glowColor }}
          />
          <span className="relative text-6xl">{game.icon}</span>
        </div>

        {/* Info area */}
        <div className="px-5 pb-5 transition-transform duration-200 group-hover:-translate-y-1">
          <h3 className="text-white font-bold text-lg mb-1">{game.name}</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-aihana-lilac text-xs">{game.playerCount}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${difficultyColors[game.difficulty]}`}>
              {game.difficulty}
            </span>
          </div>
          <p className="text-aihana-offwhite/60 text-xs leading-relaxed line-clamp-2">
            {game.description}
          </p>
        </div>
      </div>

      {/* Coming Soon overlay */}
      {game.comingSoon && (
        <div className="absolute inset-0 rounded-3xl bg-aihana-black/60 backdrop-blur-sm flex items-center justify-center">
          <span className="text-aihana-lavender font-semibold text-sm tracking-wider uppercase">
            Coming Soon
          </span>
        </div>
      )}
    </div>
  );
}
