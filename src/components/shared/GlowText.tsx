interface Props {
  children: React.ReactNode;
  className?: string;
}

export function GlowText({ children, className = '' }: Props) {
  return (
    <span
      className={`font-extrabold text-white animate-glow-pulse ${className}`}
      style={{
        textShadow:
          '0 0 20px rgba(107,87,255,0.8), 0 0 40px rgba(107,87,255,0.5), 0 0 60px rgba(107,87,255,0.3)',
      }}
    >
      {children}
    </span>
  );
}
