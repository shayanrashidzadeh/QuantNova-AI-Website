import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Carter",
    role: "Professional Trader",
    profit: "+312% ROI",
    text: "After switching to Shayan AI Trader, my trading became fully automated and much more consistent.",
  },
  {
    name: "Sarah Wilson",
    role: "Crypto Investor",
    profit: "97% Win Rate",
    text: "The AI risk management alone saved me thousands of dollars during volatile markets.",
  },
  {
    name: "Alex Morgan",
    role: "Day Trader",
    profit: "+214% Growth",
    text: "This is by far the most advanced trading assistant I've ever used.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Trusted by Traders Worldwide
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Thousands of traders rely on Shayan AI Trader every day.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition"
            >
              <div className="mb-6 flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-slate-300 leading-7">
                "{item.text}"
              </p>

              <div className="mt-8">
                <h4 className="font-semibold text-white">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-400">
                  {item.role}
                </p>
              </div>

              <div className="mt-6 inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300">
                {item.profit}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}