export default function Noise() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.035] mix-blend-soft-light"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255,255,255,.08) 1px, transparent 1px),
          radial-gradient(circle at 80% 40%, rgba(255,255,255,.06) 1px, transparent 1px),
          radial-gradient(circle at 30% 80%, rgba(255,255,255,.08) 1px, transparent 1px),
          radial-gradient(circle at 70% 70%, rgba(255,255,255,.05) 1px, transparent 1px)
        `,
        backgroundSize: "120px 120px",
      }}
    />
  );
}