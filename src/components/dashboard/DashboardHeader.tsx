import { motion } from "framer-motion";
import {
  Activity,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

      <div>

        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-bold text-white"
        >
          BTC / USDT
        </motion.h2>

        <p className="mt-1 text-xs text-slate-400">
          AI Trading Dashboard
        </p>

      </div>

      <div className="flex items-center gap-3">

        <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2">

          <div className="flex items-center gap-2">

            <Activity
              size={15}
              className="text-emerald-400"
            />

            <span className="text-xs font-semibold tracking-wide text-emerald-300">
              LIVE
            </span>

          </div>

        </div>

        <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">

          <Search
            size={18}
            className="text-slate-300"
          />

        </button>

        <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">

          <Bell
            size={18}
            className="text-slate-300"
          />

        </button>

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2">

          <img
            src="/logo.png"
            className="h-9 w-9 rounded-full"
          />

          <div>

            <p className="text-sm font-semibold text-white">
              Shayan
            </p>

            <span className="text-xs text-slate-400">
              Pro Trader
            </span>

          </div>

          <ChevronDown
            size={18}
            className="text-slate-400"
          />

        </div>

      </div>

    </div>
  );
}