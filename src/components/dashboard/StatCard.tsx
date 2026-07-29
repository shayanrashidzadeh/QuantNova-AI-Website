import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Activity,
  DollarSign,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const cards = [
  {
    title: "Win Rate",
    value: 94,
    suffix: "%",
    icon: TrendingUp,
    color: "text-cyan-400",
  },
  {
    title: "Trades",
    value: 1284,
    suffix: "",
    icon: Activity,
    color: "text-violet-400",
  },
  {
    title: "Profit",
    value: 182.4,
    prefix: "$",
    suffix: "K",
    icon: DollarSign,
    color: "text-emerald-400",
  },
  {
    title: "Risk Score",
    value: 2,
    suffix: "/10",
    icon: ShieldCheck,
    color: "text-sky-400",
  },
];

export default function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-3xl"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h3 className="mt-3 text-3xl font-black text-white">
                  {card.prefix ?? ""}
                  <CountUp
                    end={card.value}
                    decimals={card.value % 1 ? 1 : 0}
                    duration={2}
                  />
                  {card.suffix}
                </h3>
              </div>

              <div
                className={`rounded-2xl bg-white/5 p-4 ${card.color}`}
              >
                <Icon size={26} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}