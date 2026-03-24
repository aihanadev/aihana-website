export function GradientDivider({ className = '' }: { className?: string }) {
  return (
    <div
      className={`h-px w-full max-w-md mx-auto ${className}`}
      style={{
        background:
          'linear-gradient(to right, transparent, rgba(75,63,114,0.3), transparent)',
      }}
    />
  );
}
