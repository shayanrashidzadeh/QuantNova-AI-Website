import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  BarChart3,
  Target,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";

type PerformanceStat = {
  title: string;
  value: string;
  detail: string;
  icon: LucideIcon;
};

const chartData = [20, 35, 28, 55, 45, 72, 62, 88, 75, 100];

export default function Performance() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const stats: PerformanceStat[] = [
    {
      title: t("performance.stats.monthly"),
      value: "+42.8%",
      detail: "Last 30 days",
      icon: TrendingUp,
    },
    {
      title: t("performance.stats.win"),
      value: "97.4%",
      detail: "High-accuracy signals",
      icon: Target,
    },
    {
      title: t("performance.stats.trades"),
      value: "12,847",
      detail: "Executed positions",
      icon: BarChart3,
    },
    {
      title: t("performance.stats.score"),
      value: "98/100",
      detail: "AI confidence score",
      icon: Zap,
    },
  ];

  return (
    <section
      id="performance"
      className="
        relative
        overflow-hidden
        px-5
        py-28
        md:px-6
        md:py-36
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-violet-500/10
          blur-[120px]
          md:h-[550px]
          md:w-[550px]
          md:blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-10
          h-80
          w-80
          rounded-full
          bg-cyan-400/10
          blur-[90px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_60%)]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
        "
      >
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 16,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mx-auto
            flex
            w-fit
            items-center
            gap-3
            rounded-full
            border
            border-cyan-300/15
            bg-cyan-400/[0.06]
            px-4
            py-2
            backdrop-blur-xl
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-300
              shadow-[0_0_12px_rgba(103,232,249,0.9)]
            "
          />

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.4em]
              text-cyan-300
              sm:text-xs
            "
          >
            {t("performance.tag")}
          </p>
        </motion.div>

        <motion.h2
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.6,
            delay: 0.08,
          }}
          className="
            mx-auto
            mt-6
            max-w-4xl
            text-center
            text-4xl
            font-black
            leading-[1.05]
            tracking-[-0.04em]
            text-white
            sm:text-5xl
            lg:text-6xl
          "
        >
          {t("performance.title")}
        </motion.h2>

        <motion.p
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.6,
            delay: 0.14,
          }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-center
            text-sm
            leading-7
            text-slate-400
            sm:text-base
            sm:leading-8
            lg:text-lg
          "
        >
          {t("performance.description")}
        </motion.p>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 42,
                  scale: 0.97,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-14
            overflow-hidden
            rounded-[38px]
            border
            border-white/10
            bg-[#050816]/75
            p-4
            shadow-[0_35px_100px_rgba(0,0,0,0.48)]
            backdrop-blur-[30px]
            sm:p-5
            md:p-8
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-white/[0.07]
              via-transparent
              to-violet-500/[0.04]
            "
          />

          <motion.div
            animate={undefined}
            transition={{
              duration: 12,
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
              via-white/[0.06]
              to-transparent
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-5
              lg:grid-cols-[1.25fr_0.75fr]
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-black/25
                p-5
                shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                md:p-7
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
                  bg-[size:38px_38px]
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  sm:items-start
                  sm:justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-slate-500
                    "
                  >
                    {t("performance.prediction")}
                  </p>

                  <h3
                    className="
                      mt-2
                      text-xl
                      font-black
                      tracking-tight
                      text-white
                      md:text-2xl
                    "
                  >
                    {t("performance.engine")}
                  </h3>

                  <div
                    className="
                      mt-4
                      flex
                      items-end
                      gap-3
                    "
                  >
                    <span
                      className="
                        text-3xl
                        font-black
                        tracking-tight
                        text-white
                        sm:text-4xl
                      "
                    >
                      +42.8%
                    </span>

                    <span
                      className="
                        pb-1
                        text-xs
                        font-bold
                        text-emerald-300
                      "
                    >
                      +8.6% this week
                    </span>
                  </div>
                </div>

                <div
                  className="
                    flex
                    w-fit
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-emerald-400/20
                    bg-emerald-400/10
                    px-4
                    py-2
                    text-xs
                    font-bold
                    text-emerald-300
                    shadow-[0_0_20px_rgba(52,211,153,0.1)]
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

                  {t("performance.live")}
                </div>
              </div>

              <div
                className="
                  relative
                  z-10
                  mt-10
                  h-52
                  md:h-72
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    justify-between
                  "
                >
                  {[0, 1, 2, 3].map((line) => (
                    <div
                      key={line}
                      className="
                        h-px
                        w-full
                        bg-white/[0.05]
                      "
                    />
                  ))}
                </div>

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    items-end
                    gap-2
                    sm:gap-3
                  "
                >
                  {chartData.map((value, index) => (
                    <motion.div
                      key={`${value}-${index}`}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              height: 0,
                              opacity: 0,
                            }
                      }
                      whileInView={{
                        height: `${value}%`,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        delay: 0.2 + index * 0.06,
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              
                              
                            }
                      }
                      className="
                        group
                        relative
                        flex-1
                        origin-bottom
                        overflow-hidden
                        rounded-t-xl
                        bg-gradient-to-t
                        from-cyan-400
                        via-blue-500
                        to-violet-500
                        shadow-[0_0_20px_rgba(34,211,238,0.12)]
                      "
                    >
                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-b
                          from-white/25
                          to-transparent
                          opacity-0
                          transition-opacity
                          duration-300
                          group-hover:opacity-100
                        "
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div
                className="
                  relative
                  z-10
                  mt-4
                  flex
                  items-center
                  justify-between
                  text-[10px]
                  uppercase
                  tracking-[0.14em]
                  text-slate-600
                "
              >
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Dec</span>
              </div>
            </div>

            <div
              className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
                lg:grid-cols-1
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
                            x: 24,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.08,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -3,
                            
                          }
                    }
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[24px]
                      border
                      border-white/10
                      bg-black/25
                      p-5
                      transition-colors
                      duration-500
                      hover:border-cyan-300/20
                      hover:bg-white/[0.055]
                    "
                  >
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-cyan-400/[0.05]
                        via-transparent
                        to-violet-500/[0.05]
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
                        gap-4
                      "
                    >
                      <div>
                        <p
                          className="
                            text-xs
                            font-medium
                            text-slate-400
                          "
                        >
                          {item.title}
                        </p>

                        <h3
                          className="
                            mt-2
                            text-2xl
                            font-black
                            tracking-tight
                            text-white
                            md:text-3xl
                          "
                        >
                          {item.value}
                        </h3>

                        <p
                          className="
                            mt-2
                            text-[11px]
                            text-slate-500
                          "
                        >
                          {item.detail}
                        </p>
                      </div>

                      <motion.div
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                
                                scale: 1.04,
                              }
                        }
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-cyan-300/15
                          bg-cyan-400/10
                          shadow-[0_0_20px_rgba(34,211,238,0.1)]
                        "
                      >
                        <Icon
                          size={23}
                          className="text-cyan-300"
                        />
                      </motion.div>
                    </div>

                    <div
                      className="
                        relative
                        z-10
                        mt-5
                        h-1
                        overflow-hidden
                        rounded-full
                        bg-white/[0.06]
                      "
                    >
                      <motion.div
                        initial={
                          reduceMotion
                            ? false
                            : {
                                width: 0,
                              }
                        }
                        whileInView={{
                          width: `${74 + index * 7}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: 0.3 + index * 0.08,
                        }}
                        className="
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          from-cyan-400
                          to-violet-500
                        "
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}