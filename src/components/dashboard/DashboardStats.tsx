import { motion } from "framer-motion";
import {
  Wallet,
  TrendingUp,
  Target,
 Brain,
} from "lucide-react";

const stats = [
  {
    title: "Balance",
    value: "$124,580",
    change: "+4.21%",
    icon: Wallet,
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "Today's PnL",
    value: "+$8,942",
    change: "+12.3%",
    icon: TrendingUp,
    color: "from-emerald-500 to-green-400",
  },
  {
    title: "Win Rate",
    value: "97.4%",
    change: "Last 100",
    icon: Target,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "AI Score",
    value: "98 / 100",
    change: "Excellent",
    icon: Brain,
    color: "from-sky-500 to-cyan-400",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.12,
              duration: 0.45,
            }}
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.05]
              p-5
              backdrop-blur-2xl
            "
          >
            {/* Glow */}
            <div
              className={`
                absolute
                -right-8
                -top-8
                h-24
                w-24
                rounded-full
                bg-gradient-to-br
                ${item.color}
                opacity-20
                blur-3xl
                transition
                duration-500
                group-hover:opacity-40
              `}
            />

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {item.value}
                </h2>

                <p className="mt-2 text-sm text-emerald-300">
                  {item.change}
                </p>
              </div>

              <div
                className={`
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  ${item.color}
                  shadow-lg
                `}
              >
                <Icon size={24} className="text-white" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}