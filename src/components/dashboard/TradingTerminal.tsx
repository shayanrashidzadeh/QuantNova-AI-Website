import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  CandlestickChart,
} from "lucide-react";

const orders = [
  {
    pair: "BTC / USDT",
    side: "BUY",
    price: "$124,847",
    pnl: "+3.82%",
  },
  {
    pair: "ETH / USDT",
    side: "SELL",
    price: "$4,286",
    pnl: "+1.24%",
  },
  {
    pair: "SOL / USDT",
    side: "BUY",
    price: "$238",
    pnl: "+5.92%",
  },
  {
    pair: "XAU / USD",
    side: "BUY",
    price: "$3,482",
    pnl: "+2.17%",
  },
];

export default function TradingTerminal() {
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
        duration: 0.8,
      }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-[32px]
      border border-white/10
      bg-[#09111d]/90
      backdrop-blur-3xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5" />

      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">

        <div className="flex items-center gap-3">

          <CandlestickChart className="text-cyan-400" />

          <div>

            <h2 className="font-bold text-white">
              Trading Terminal
            </h2>

            <p className="text-sm text-slate-400">
              Live AI Positions
            </p>

          </div>

        </div>

        <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-300">
          LIVE
        </div>

      </div>

      {/* Table */}

      <div className="divide-y divide-white/5">

        {orders.map((order, index) => {

          const buy = order.side === "BUY";

          return (
            <motion.div
              key={order.pair}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="flex items-center justify-between px-7 py-5 transition-colors hover:bg-white/[0.03]"
            >
              <div>

                <p className="font-semibold text-white">
                  {order.pair}
                </p>

                <span className="text-sm text-slate-500">
                  {order.price}
                </span>

              </div>

              <div
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${
                  buy
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {buy ? (
                  <ArrowUpRight size={18} />
                ) : (
                  <ArrowDownRight size={18} />
                )}

                {order.side}
              </div>

              <div className="font-bold text-emerald-400">
                {order.pnl}
              </div>

            </motion.div>
          );
        })}

      </div>
    </motion.div>
  );
}