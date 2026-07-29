import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

type Props = {
  title: string;
  value: string;
  className?: string;
};

export default function FloatingCard({
  title,
  value,
  className = "",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -12, 0],
      }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        y: {
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.05,
        y: -6,
      }}
      className={`
        group
        absolute
        overflow-hidden
        rounded-[26px]
        border
        border-white/10
        bg-white/[0.06]
        p-5
        backdrop-blur-3xl
        shadow-[0_20px_50px_rgba(0,0,0,.35)]
        transition-all
        duration-300
        ${className}
      `}
    >
      {/* Glow */}

      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-500/20 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-black text-white">
            {value}
          </h3>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15">
          <TrendingUp className="h-5 w-5 text-emerald-400" />
        </div>

      </div>

      {/* Footer */}

      <div className="mt-5 flex items-center justify-between">

        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
          +12.8%
        </span>

        <span className="text-xs text-slate-500">
          Last 24h
        </span>

      </div>
    </motion.div>
  );
}