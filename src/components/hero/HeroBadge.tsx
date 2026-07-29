import { motion } from "framer-motion";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-white/10
      bg-white/[0.05]
      px-5
      py-2.5
      backdrop-blur-3xl
      shadow-[0_8px_30px_rgba(0,0,0,.25)]
      "
    >
      {/* Live Indicator */}

      <div className="relative flex items-center justify-center">

        <span className="absolute h-3 w-3 animate-ping rounded-full bg-emerald-400 opacity-60" />

        <span className="relative h-3 w-3 rounded-full bg-emerald-400" />

      </div>

      {/* Text */}

      <span className="text-sm font-medium tracking-wide text-slate-200">
        AI Engine Online
      </span>

      {/* Divider */}

      <div className="h-4 w-px bg-white/10" />

      {/* Version */}

      <span className="rounded-full bg-violet-500/15 px-2 py-1 text-xs font-semibold text-violet-300">
        GPT-Driven
      </span>

      {/* New */}

      <span className="rounded-full bg-cyan-500/15 px-2 py-1 text-xs font-semibold text-cyan-300">
        v2.0
      </span>
    </motion.div>
  );
}