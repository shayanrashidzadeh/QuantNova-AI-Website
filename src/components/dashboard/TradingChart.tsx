import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CandlestickChart,
} from "lucide-react";

const candles = [
  { x: 25, open: 165, close: 130, high: 115, low: 180, green: true },
  { x: 55, open: 130, close: 145, high: 120, low: 160, green: false },
  { x: 85, open: 145, close: 100, high: 90, low: 160, green: true },
  { x: 115, open: 100, close: 115, high: 90, low: 135, green: false },
  { x: 145, open: 115, close: 70, high: 60, low: 130, green: true },
  { x: 175, open: 70, close: 82, high: 65, low: 95, green: false },
  { x: 205, open: 82, close: 55, high: 40, low: 95, green: true },
  { x: 235, open: 55, close: 72, high: 48, low: 90, green: false },
  { x: 265, open: 72, close: 35, high: 25, low: 90, green: true },
  { x: 295, open: 35, close: 48, high: 30, low: 70, green: false },
  { x: 325, open: 48, close: 25, high: 15, low: 60, green: true },
  { x: 355, open: 25, close: 38, high: 18, low: 55, green: false },
];

export default function TradingChart() {
  return (
    <div className="px-6 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="overflow-hidden rounded-[30px] border border-white/10 bg-[#07121e]"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold text-white">
              <CandlestickChart size={20} />
              BTC / USDT
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              AI Market Structure
            </p>
          </div>

          <div className="rounded-xl bg-cyan-500/10 p-3">
            <ArrowUpRight className="text-cyan-300" />
          </div>
        </div>

        <div className="relative h-[310px] overflow-hidden">
          {/* Grid */}

          <svg
            className="absolute inset-0 h-full w-full opacity-20"
            viewBox="0 0 400 250"
            preserveAspectRatio="none"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={i * 25}
                x2="400"
                y2={i * 25}
                stroke="white"
                strokeWidth=".4"
              />
            ))}

            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1={i * 35}
                y1="0"
                x2={i * 35}
                y2="250"
                stroke="white"
                strokeWidth=".4"
              />
            ))}
          </svg>

          {/* Candles */}

          <svg
            viewBox="0 0 400 220"
            className="absolute inset-0 h-full w-full"
          >
            {candles.map((c, index) => (
              <motion.g
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                }}
              >
                <line
                  x1={c.x}
                  x2={c.x}
                  y1={c.high}
                  y2={c.low}
                  stroke={c.green ? "#22c55e" : "#ef4444"}
                  strokeWidth="2"
                />

                <rect
                  x={c.x - 6}
                  y={Math.min(c.open, c.close)}
                  width="12"
                  height={Math.abs(c.close - c.open)}
                  rx="2"
                  fill={c.green ? "#22c55e" : "#ef4444"}
                />
              </motion.g>
            ))}

            {/* AI Trend */}

            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
              }}
              d="M0 180
                 C40 175 70 150 100 145
                 C130 135 150 120 185 118
                 C220 110 250 90 290 82
                 C320 75 350 55 400 30"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          {/* Glow */}

          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[90px]" />
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">
          <div>
            <p className="text-xs text-slate-400">AI Forecast</p>

            <h3 className="mt-1 text-xl font-bold text-emerald-400">
              Bullish Continuation
            </h3>
          </div>

          <div className="text-right">
            <p className="text-xs text-slate-400">Confidence</p>

            <h3 className="mt-1 text-2xl font-black text-cyan-300">
              98%
            </h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
}