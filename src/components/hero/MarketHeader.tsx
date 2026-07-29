import { motion } from "framer-motion";
import { TrendingUp, BellDot } from "lucide-react";

export default function MarketHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <div className="flex items-center gap-2">

          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Live Market
          </p>

        </div>

        <h2 className="mt-3 text-3xl font-black text-white">
          BTC / USD
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Real-time AI market analysis
        </p>

      </div>

      <div className="flex items-center gap-3">

        <button
          className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-white/5
          "
        >
          <BellDot className="h-5 w-5 text-slate-300" />
        </button>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="
          flex
          items-center
          gap-2
          rounded-full
          bg-emerald-500/15
          px-5
          py-2
          text-emerald-400
          border
          border-emerald-500/20
          "
        >
          <TrendingUp className="h-4 w-4" />

          BUY
        </motion.div>

      </div>

    </div>
  );
}