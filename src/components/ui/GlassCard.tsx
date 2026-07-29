import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        rotateX: 2,
        rotateY: -2,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setMouse({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
      className={`group relative overflow-hidden rounded-[32px]
      border border-white/10
      bg-white/[0.05]
      backdrop-blur-3xl
      shadow-[0_20px_90px_rgba(0,0,0,.45)]
      ${className}`}
    >
      {/* Reflection */}

      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%,
          rgba(255,255,255,.22),
          transparent 45%)`,
        }}
      />

      {/* Top Highlight */}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

      {/* Bottom Glow */}

      <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Ambient Glow */}

      <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-violet-500/10 blur-[90px]" />

      {/* Content */}

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}