import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function ProfitGauge() {
  const percent = 94;

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-3xl">

      {/* Background Glow */}

      <div className="absolute -top-24 right-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-[110px]" />
      <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative flex flex-col items-center">

        <div className="relative h-56 w-56">

          <svg
            viewBox="0 0 220 220"
            className="-rotate-90"
          >
            <circle
              cx="110"
              cy="110"
              r="90"
              stroke="rgba(255,255,255,.08)"
              strokeWidth="12"
              fill="none"
            />

            <motion.circle
              cx="110"
              cy="110"
              r="90"
              stroke="url(#gradient)"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={565}
              initial={{
                strokeDashoffset: 565,
              }}
              animate={{
                strokeDashoffset: 565 - (565 * percent) / 100,
              }}
              transition={{
                duration: 2,
              }}
            />

            <defs>
              <linearGradient
                id="gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="#00E5FF"
                />
                <stop
                  offset="100%"
                  stopColor="#8B5CF6"
                />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <span className="text-5xl font-black text-white">
              <CountUp end={percent} duration={2} />%
            </span>

            <span className="mt-2 text-sm uppercase tracking-[0.3em] text-cyan-300">
              Accuracy
            </span>

          </div>

        </div>

        <h3 className="mt-8 text-xl font-bold text-white">
          AI Performance
        </h3>

        <p className="mt-3 max-w-xs text-center text-sm leading-7 text-slate-400">
          Institutional-grade trading intelligence with continuously
          optimized machine learning models.
        </p>

      </div>

    </div>
  );
}