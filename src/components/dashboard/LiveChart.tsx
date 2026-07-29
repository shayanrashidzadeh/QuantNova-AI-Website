import { motion } from "framer-motion";

const points = [
  [0, 180],
  [35, 172],
  [70, 150],
  [105, 158],
  [140, 115],
  [175, 126],
  [210, 82],
  [245, 98],
  [280, 72],
  [315, 84],
  [350, 48],
  [385, 66],
  [420, 42],
  [455, 58],
  [490, 30],
  [525, 46],
  [560, 18],
  [600, 24],
];

const line = points
  .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`)
  .join(" ");

const area =
  line + " L 600 220 L 0 220 Z";

export default function LiveChart() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-3xl bg-[#071019]">

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glow */}

      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-violet-500/5" />

      <svg
        viewBox="0 0 600 220"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>

          <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,229,255,.35)" />
            <stop offset="100%" stopColor="rgba(0,229,255,0)" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d={area}
          fill="url(#fill)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />

        <motion.path
          d={line}
          stroke="url(#stroke)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2.4,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Live Pulse */}

      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1"
      >
        <div className="h-2 w-2 rounded-full bg-emerald-400" />

        <span className="text-xs font-semibold tracking-wider text-emerald-300">
          LIVE
        </span>
      </motion.div>

      {/* Price */}

      <div className="absolute left-6 top-5">
        <p className="text-sm text-slate-400">
          BTC / USDT
        </p>

        <h2 className="mt-1 text-3xl font-black text-white">
          $124,847
        </h2>

        <span className="text-sm font-semibold text-emerald-400">
          +8.42%
        </span>
      </div>
    </div>
  );
}