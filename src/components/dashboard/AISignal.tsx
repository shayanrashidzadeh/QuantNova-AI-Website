import { motion } from "framer-motion";
import {
  Brain,
  TrendingUp,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function AISignal() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-[30px]
      border border-cyan-400/20
      bg-white/[0.05]
      backdrop-blur-3xl
      p-7"
    >
      {/* Glow */}

      <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="absolute -bottom-28 left-0 h-60 w-60 rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-500 p-3">

          <Brain className="h-6 w-6 text-white" />

        </div>

        <div>

          <h2 className="text-xl font-bold text-white">
            QuantNova AI Signal
          </h2>

          <p className="text-sm text-slate-400">
            Institutional Analysis Engine
          </p>

        </div>

      </div>

      {/* Confidence */}

      <div className="mt-8">

        <div className="flex items-center justify-between">

          <span className="text-slate-400">
            Confidence
          </span>

          <span className="font-bold text-cyan-300">
            98%
          </span>

        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "98%" }}
            transition={{
              duration: 2,
            }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500"
          />

        </div>

      </div>

      {/* Signals */}

      <div className="mt-8 space-y-4">

        <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] p-4">

          <div className="flex items-center gap-3">

            <TrendingUp className="text-emerald-400" />

            <span className="text-white">
              Trend Direction
            </span>

          </div>

          <span className="font-bold text-emerald-400">
            Bullish
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] p-4">

          <div className="flex items-center gap-3">

            <ShieldCheck className="text-cyan-300" />

            <span className="text-white">
              Risk Level
            </span>

          </div>

          <span className="font-bold text-cyan-300">
            Low
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] p-4">

          <div className="flex items-center gap-3">

            <Sparkles className="text-violet-400" />

            <span className="text-white">
              AI Decision
            </span>

          </div>

          <span className="font-bold text-violet-300">
            Strong Buy
          </span>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5">

        <p className="text-sm leading-7 text-slate-300">
          AI has detected institutional accumulation, increasing volume,
          liquidity sweep confirmation and bullish continuation structure.
        </p>

      </div>
    </motion.div>
  );
}