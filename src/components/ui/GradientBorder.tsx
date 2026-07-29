import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GradientBorder({
  children,
  className = "",
}: Props) {
  return (
    <div className={`relative ${className}`}>
      {/* Animated Border */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute -inset-[1px] rounded-[32px] bg-conic-from-0 from-cyan-400 via-violet-500 via-sky-400 to-cyan-400"
      />

      {/* Blur Glow */}

      <div className="absolute -inset-2 rounded-[34px] bg-cyan-400/10 blur-2xl" />

      {/* Glass */}

      <div className="relative rounded-[32px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl">
        {children}
      </div>
    </div>
  );
}