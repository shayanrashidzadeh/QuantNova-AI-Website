import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Brain,
  Target,
  TrendingUp,
  Wallet,
} from "lucide-react";

const stats = [
  {
    title: "Balance",
    value: "$124,580",
    change: "+8.4%",
    icon: Wallet,
  },
  {
    title: "PnL",
    value: "+12.48%",
    change: "+2.1%",
    icon: TrendingUp,
  },
  {
    title: "Win Rate",
    value: "97%",
    change: "+4.7%",
    icon: Target,
  },
  {
    title: "AI Score",
    value: "98",
    change: "Excellent",
    icon: Brain,
  },
];

const chartPath =
  "M0 170 C40 160 80 80 120 95 C160 110 180 50 240 60 C300 70 330 130 390 110 C430 95 480 40 520 55 C560 70 590 35 600 20";

const areaPath = `${chartPath} L600 220 L0 220 Z`;

export default function DashboardMockup() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 30,
              scale: 0.96,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -8,
              rotateX: -1.5,
              rotateY: 1.5,
            }
      }
      className="
        relative
        w-full
        max-w-[560px]
        [perspective:1200px]
      "
    >
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.25, 0.55, 0.25],
                scale: [0.95, 1.05, 0.95],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-16
          top-20
          h-56
          w-56
          rounded-full
          bg-cyan-400/20
          blur-[90px]
        "
      />

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.2, 0.45, 0.2],
                scale: [1.05, 0.95, 1.05],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-10
          -right-16
          h-64
          w-64
          rounded-full
          bg-violet-500/20
          blur-[100px]
        "
      />

      <div
        className="
          relative
          overflow-hidden
          rounded-[34px]
          border
          border-white/10
          bg-[#050816]/80
          shadow-[0_35px_100px_rgba(0,0,0,0.55)]
          backdrop-blur-[30px]
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-white/[0.08]
            via-transparent
            to-cyan-400/[0.04]
          "
        />

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: ["-140%", "180%"],
                }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-20
            w-1/3
            skew-x-[-20deg]
            bg-gradient-to-r
            from-transparent
            via-white/[0.08]
            to-transparent
          "
        />

        <div
          className="
            relative
            z-10
            flex
            items-center
            justify-between
            border-b
            border-white/10
            px-5
            py-5
            sm:px-6
          "
        >
          <div>
            <div
              className="
                mb-2
                flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-cyan-300
                "
              >
                QuantNova AI
              </span>

              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-slate-500
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-slate-500
                "
              >
                Terminal
              </span>
            </div>

            <h3
              className="
                text-xl
                font-black
                tracking-tight
                text-white
                sm:text-2xl
              "
            >
              Trading Dashboard
            </h3>

            <p
              className="
                mt-1
                text-xs
                text-slate-400
                sm:text-sm
              "
            >
              Real-time AI market intelligence
            </p>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-400/20
              bg-emerald-400/10
              px-3
              py-2
              shadow-[0_0_20px_rgba(52,211,153,0.12)]
            "
          >
            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.4, 1, 0.4],
                      scale: [0.8, 1.15, 0.8],
                    }
              }
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-400
                shadow-[0_0_12px_rgba(52,211,153,0.9)]
              "
            />

            <span
              className="
                text-[10px]
                font-black
                tracking-[0.18em]
                text-emerald-300
              "
            >
              LIVE
            </span>
          </div>
        </div>

        <div
          className="
            relative
            z-10
            grid
            grid-cols-2
            gap-3
            p-4
            sm:p-5
          "
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.3 + index * 0.08,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                        scale: 1.02,
                      }
                }
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-white/10
                  bg-white/[0.045]
                  p-4
                  transition-colors
                  duration-500
                  hover:border-cyan-300/20
                  hover:bg-white/[0.07]
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-cyan-400/[0.05]
                    to-violet-500/[0.03]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-start
                    justify-between
                    gap-3
                  "
                >
                  <div>
                    <p
                      className="
                        text-[11px]
                        font-medium
                        text-slate-400
                      "
                    >
                      {item.title}
                    </p>

                    <h4
                      className="
                        mt-2
                        text-xl
                        font-black
                        tracking-tight
                        text-white
                        sm:text-2xl
                      "
                    >
                      {item.value}
                    </h4>

                    <span
                      className="
                        mt-2
                        inline-flex
                        text-[10px]
                        font-bold
                        text-emerald-300
                      "
                    >
                      {item.change}
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-cyan-300/15
                      bg-cyan-400/10
                      shadow-[0_0_20px_rgba(34,211,238,0.12)]
                    "
                  >
                    <Icon
                      className="
                        h-[18px]
                        w-[18px]
                        text-cyan-300
                      "
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div
          className="
            relative
            z-10
            px-4
            pb-4
            sm:px-5
            sm:pb-5
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[26px]
              border
              border-white/10
              bg-[#07111d]/90
              p-4
              shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
              sm:p-5
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
                bg-[size:32px_32px]
              "
            />

            <div
              className="
                relative
                z-10
                mb-5
                flex
                items-start
                justify-between
              "
            >
              <div>
                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <h4
                    className="
                      text-base
                      font-black
                      text-white
                    "
                  >
                    BTC / USDT
                  </h4>

                  <span
                    className="
                      rounded-md
                      bg-cyan-400/10
                      px-2
                      py-1
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-cyan-300
                    "
                  >
                    Perpetual
                  </span>
                </div>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      text-xl
                      font-black
                      text-white
                    "
                  >
                    $104,842
                  </span>

                  <span
                    className="
                      text-xs
                      font-bold
                      text-emerald-300
                    "
                  >
                    +4.28%
                  </span>
                </div>
              </div>

              <motion.div
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: 8,
                        scale: 1.08,
                      }
                }
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-cyan-300/15
                  bg-cyan-400/10
                "
              >
                <ArrowUpRight
                  className="
                    h-5
                    w-5
                    text-cyan-300
                  "
                />
              </motion.div>
            </div>

            <div
              className="
                relative
                z-10
                h-44
                w-full
                sm:h-48
              "
            >
              <svg
                viewBox="0 0 600 220"
                preserveAspectRatio="none"
                className="
                  h-full
                  w-full
                  overflow-visible
                "
                role="img"
                aria-label="BTC USDT price chart"
              >
                <defs>
                  <linearGradient
                    id="chartAreaGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#22d3ee"
                      stopOpacity="0.28"
                    />
                    <stop
                      offset="100%"
                      stopColor="#22d3ee"
                      stopOpacity="0"
                    />
                  </linearGradient>

                  <filter id="chartGlow">
                    <feGaussianBlur
                      stdDeviation="5"
                      result="blur"
                    />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path
                  d={areaPath}
                  fill="url(#chartAreaGradient)"
                />

                <motion.path
                  d={chartPath}
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="url(#chartGlow)"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          pathLength: 0,
                          opacity: 0,
                        }
                  }
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.8,
                    delay: 0.55,
                    ease: "easeInOut",
                  }}
                />

                <motion.circle
                  cx="600"
                  cy="20"
                  r="6"
                  fill="#67e8f9"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          r: [5, 9, 5],
                          opacity: [1, 0.45, 1],
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </svg>
            </div>

            <div
              className="
                relative
                z-10
                mt-3
                flex
                items-center
                justify-between
                text-[10px]
                text-slate-500
              "
            >
              <span>09:00</span>
              <span>12:00</span>
              <span>15:00</span>
              <span>18:00</span>
              <span>21:00</span>
            </div>
          </div>
        </div>

        <div
          className="
            relative
            z-10
            grid
            grid-cols-1
            gap-3
            border-t
            border-white/10
            p-4
            sm:grid-cols-2
            sm:p-5
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[22px]
              border
              border-white/10
              bg-white/[0.04]
              p-4
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-8
                -top-8
                h-24
                w-24
                rounded-full
                bg-cyan-400/15
                blur-3xl
              "
            />

            <div
              className="
                relative
                z-10
                flex
                items-end
                justify-between
                gap-4
              "
            >
              <div>
                <p
                  className="
                    text-[11px]
                    font-medium
                    text-slate-400
                  "
                >
                  AI Confidence
                </p>

                <h4
                  className="
                    mt-2
                    text-4xl
                    font-black
                    tracking-tight
                    text-cyan-300
                  "
                >
                  98%
                </h4>
              </div>

              <div
                className="
                  relative
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[conic-gradient(#22d3ee_0deg,#8b5cf6_352deg,rgba(255,255,255,0.08)_352deg)]
                  p-[5px]
                "
              >
                <div
                  className="
                    flex
                    h-full
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    bg-[#09111d]
                  "
                >
                  <Brain
                    className="
                      h-6
                      w-6
                      text-cyan-300
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="
              relative
              overflow-hidden
              rounded-[22px]
              border
              border-white/10
              bg-white/[0.04]
              p-4
            "
          >
            <div
              className="
                relative
                z-10
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-400/10
                "
              >
                <Activity
                  className="
                    h-5
                    w-5
                    text-emerald-400
                  "
                />
              </div>

              <div>
                <span
                  className="
                    text-sm
                    font-black
                    text-white
                  "
                >
                  Bullish Signal
                </span>

                <p
                  className="
                    mt-1
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-emerald-300
                  "
                >
                  Strong continuation
                </p>
              </div>
            </div>

            <p
              className="
                relative
                z-10
                mt-4
                text-xs
                leading-5
                text-slate-400
              "
            >
              AI detected increasing momentum and a high-probability breakout
              continuation pattern.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}