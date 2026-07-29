import { motion } from "framer-motion";
import {
  Brain,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const signals = [
  {
    title: "Market Bias",
    value: "Bullish",
    color: "text-emerald-400",
  },
  {
    title: "Trend Strength",
    value: "Strong",
    color: "text-cyan-300",
  },
  {
    title: "Risk Level",
    value: "Low",
    color: "text-yellow-300",
  },
];

export default function AIAnalysis() {
  return (
    <div className="px-6 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl"
      >
        <div className="border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 p-3">
              <Brain className="text-white" size={22} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">
                AI Analysis
              </h3>

              <p className="text-sm text-slate-400">
                Institutional Decision Engine
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 p-6">
          {signals.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
            >
              <span className="text-sm text-slate-400">
                {item.title}
              </span>

              <span className={`font-semibold ${item.color}`}>
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="px-6">
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-5">
            <div className="flex items-center gap-3">
              <Sparkles className="text-cyan-300" size={20} />

              <h4 className="font-semibold text-white">
                AI Recommendation
              </h4>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Momentum, volume and liquidity analysis indicate a high
              probability continuation. Pullbacks into demand zones are
              considered favorable entries while maintaining disciplined
              risk management.
            </p>

            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 py-3 font-semibold text-white transition hover:scale-[1.02]">
              Buy Signal
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <TrendingUp className="mb-3 text-emerald-400" />

            <p className="text-sm text-slate-400">
              Probability
            </p>

            <h2 className="mt-2 text-3xl font-black text-white">
              98%
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <ShieldCheck className="mb-3 text-cyan-400" />

            <p className="text-sm text-slate-400">
              Risk / Reward
            </p>

            <h2 className="mt-2 text-3xl font-black text-white">
              1 : 4.6
            </h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
}