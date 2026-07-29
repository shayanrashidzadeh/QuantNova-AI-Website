import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({
  children,
  className = "",
}: GlowCardProps) {
  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setMouse({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 transition-all duration-300 ${className}`}
    >
      {/* Mouse Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%,
          rgba(34,211,238,.20),
          transparent 45%)`,
        }}
      />

      {/* Border */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}