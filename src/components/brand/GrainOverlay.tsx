export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.06] mix-blend-soft-light"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.22), transparent 38%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.1), transparent 30%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08), transparent 35%)",
      }}
    />
  );
}
