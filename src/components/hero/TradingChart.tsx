import { motion } from "framer-motion";

const candles = [
  65, 95, 70, 120, 88, 145, 110, 170,
  130, 190, 165, 210, 185, 235, 205,
];

export default function TradingChart() {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]">

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Candles */}

      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">

        {candles.map((h, i) => {

          const green = i % 3 !== 0;

          return (

            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: h }}
              transition={{
                delay: i * .04,
                duration: .5,
              }}
              className="relative w-3"
            >

              <div
                className={`absolute left-1/2 h-full w-[2px] -translate-x-1/2 ${
                  green
                    ? "bg-emerald-400"
                    : "bg-red-400"
                }`}
              />

              <div
                className={`absolute bottom-4 w-3 rounded ${
                  green
                    ? "bg-emerald-400"
                    : "bg-red-400"
                }`}
                style={{
                  height: h * .45,
                }}
              />

            </motion.div>

          );

        })}

      </div>

    </div>
  );
}