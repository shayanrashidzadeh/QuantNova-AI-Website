import { motion } from "framer-motion";
import {
  Activity,
  TrendingUp,
  Wallet,
  Target,
  Brain,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Balance",
    value: "$124,580",
    icon: Wallet,
    color: "from-cyan-400 to-sky-500",
  },
  {
    title: "PnL",
    value: "+12.48%",
    icon: TrendingUp,
    color: "from-emerald-400 to-cyan-400",
  },
  {
    title: "Win Rate",
    value: "97%",
    icon: Target,
    color: "from-violet-400 to-fuchsia-500",
  },
  {
    title: "AI Score",
    value: "98",
    icon: Brain,
    color: "from-sky-400 to-cyan-300",
  },
];

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: .9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full max-w-[580px] xl:max-w-[620px]"
    >
      <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.05] backdrop-blur-3xl shadow-[0_30px_120px_rgba(0,0,0,.55)]">

        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"/>

        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 px-8 py-6">

          <div>

            <h3 className="text-2xl font-bold text-white">
              Dashboard
            </h3>

            <p className="text-sm text-slate-400">
              AI Trading Overview
            </p>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-2">

            <div className="h-2 w-2 rounded-full bg-emerald-400"/>

            <span className="text-sm font-semibold text-emerald-300">
              LIVE
            </span>

          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-5 p-6">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                whileHover={{
                  scale:1.03,
                  y:-3,
                }}
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-400">
                      {item.title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-white">
                      {item.value}
                    </h2>

                  </div>

                  <div
                    className={`rounded-2xl bg-gradient-to-br ${item.color} p-4`}
                  >
                    <Icon className="h-6 w-6 text-white"/>
                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* Chart */}

        <div className="px-6 pb-6">

          <div className="rounded-[28px] border border-white/10 bg-[#07111d] p-6">

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h4 className="text-lg font-bold text-white">
                  BTC / USDT
                </h4>

                <p className="text-slate-400">
                  AI Smart Chart
                </p>

              </div>

              <ArrowUpRight className="text-cyan-400"/>

            </div>

            <div className="relative h-64 overflow-hidden rounded-2xl">

              <svg
                viewBox="0 0 600 220"
                className="absolute inset-0 h-full w-full"
              >
                <defs>

                  <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">

                    <stop offset="0%" stopColor="#00E5FF"/>

                    <stop offset="100%" stopColor="#7C3AED"/>

                  </linearGradient>

                </defs>

                <motion.path
                  initial={{ pathLength:0 }}
                  animate={{ pathLength:1 }}
                  transition={{ duration:2 }}
                  d="M0 170
                  C40 160 80 80 120 95
                  C160 110 180 50 240 60
                  C300 70 330 130 390 110
                  C430 95 480 40 520 55
                  C560 70 590 35 600 20"
                  fill="none"
                  stroke="url(#line)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

              </svg>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="grid grid-cols-2 gap-5 border-t border-white/10 p-6">

          <div className="rounded-3xl bg-white/[0.04] p-5">

            <p className="text-slate-400">
              AI Confidence
            </p>

            <h2 className="mt-3 text-5xl font-black text-cyan-300">
              98%
            </h2>

          </div>

          <div className="rounded-3xl bg-white/[0.04] p-5">

            <div className="flex items-center gap-3">

              <Activity className="text-emerald-400"/>

              <span className="font-semibold text-white">
                Market Bullish
              </span>

            </div>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              AI detected a strong continuation pattern with
              institutional accumulation.
            </p>

          </div>

        </div>

      </div>
    </motion.div>
  );
}