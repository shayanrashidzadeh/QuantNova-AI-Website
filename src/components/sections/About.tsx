import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Activity,
  BrainCircuit,
  Code2,
  Cpu,
  Globe2,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

type AboutCard = {
  title: string;
  text: string;
};

type AboutStat = {
  value: string;
  text: string;
  icon: LucideIcon;
};

const cardIcons: LucideIcon[] = [
  Code2,
  BrainCircuit,
  TrendingUp,
];

const fallbackCards: AboutCard[] = [
  {
    title: "Built by a Developer",
    text: "QuantNova AI is engineered with a strong focus on performance, scalability, security, and long-term product quality.",
  },
  {
    title: "Powered by Intelligence",
    text: "The platform combines artificial intelligence, market structure, quantitative logic, and adaptive analysis.",
  },
  {
    title: "Designed for Traders",
    text: "Every feature is created to help traders understand markets faster and make more informed decisions.",
  },
];

const easing = [
  0.22,
  1,
  0.36,
  1,
] as const;

function isAboutCard(
  item: unknown,
): item is AboutCard {
  if (
    typeof item !== "object" ||
    item === null
  ) {
    return false;
  }

  const candidate =
    item as Partial<AboutCard>;

  return (
    typeof candidate.title === "string" &&
    typeof candidate.text === "string"
  );
}

export default function About() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const translatedCards = t(
    "about.cards",
    {
      returnObjects: true,
    },
  );

  const validatedCards =
    Array.isArray(translatedCards)
      ? translatedCards.filter(
          isAboutCard,
        )
      : [];

  const cards =
    validatedCards.length > 0
      ? validatedCards
      : fallbackCards;

  const stats: AboutStat[] = [
    {
      value: "24/7",
      text: t(
        "about.stats.analysis",
        "Continuous Analysis",
      ),
      icon: Activity,
    },
    {
      value: "Global",
      text: t(
        "about.stats.markets",
        "Market Coverage",
      ),
      icon: Globe2,
    },
    {
      value: "AI",
      text: t(
        "about.stats.powered",
        "Intelligence Powered",
      ),
      icon: Cpu,
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        isolate
        overflow-hidden
        px-5
        py-28
        sm:px-6
        md:py-32
        lg:px-8
        lg:py-36
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          top-20
          h-64
          w-64
          rounded-full
          bg-violet-500/[0.08]
          blur-[80px]
          sm:h-80
          sm:w-80
          sm:blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-28
          bottom-20
          hidden
          h-[380px]
          w-[380px]
          rounded-full
          bg-cyan-400/[0.08]
          blur-[110px]
          md:block
          lg:h-[420px]
          lg:w-[420px]
          lg:blur-[125px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03),transparent_60%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-14
          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-20
        "
      >
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: -36,
                  y: 14,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: easing,
          }}
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-white/10
              bg-[#050816]/75
              p-6
              shadow-[0_28px_80px_rgba(0,0,0,0.42)]
              backdrop-blur-[22px]
              md:p-8
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-cyan-400/[0.06]
                via-transparent
                to-violet-500/[0.10]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-8
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-cyan-300/50
                to-transparent
              "
            />

            <div className="relative z-10">
              <div
                className="
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
                  backdrop-blur-lg
                "
              >
                <Sparkles
                  size={16}
                  aria-hidden="true"
                  className="text-cyan-300"
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.35em]
                    text-cyan-300
                    sm:text-xs
                  "
                >
                  {t(
                    "about.tag",
                    "About QuantNova",
                  )}
                </span>
              </div>

              <h3
                className="
                  mt-6
                  max-w-xl
                  text-3xl
                  font-black
                  leading-tight
                  tracking-[-0.035em]
                  text-white
                  md:text-4xl
                  lg:text-5xl
                "
              >
                {t(
                  "about.title",
                  "Built for the Future of Trading",
                )}
              </h3>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-sm
                  leading-8
                  text-slate-400
                  sm:text-base
                "
              >
                {t(
                  "about.description",
                  "QuantNova AI combines advanced artificial intelligence, quantitative analysis, and trader-focused design to create a smarter financial intelligence platform.",
                )}
              </p>

              <div className="mt-9 space-y-4">
                {cards.map(
                  (
                    item,
                    index,
                  ) => {
                    const Icon =
                      cardIcons[
                        index %
                          cardIcons.length
                      ];

                    return (
                      <motion.article
                        key={`${item.title}-${index}`}
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                x: -18,
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
                          duration: 0.48,
                          delay:
                            reduceMotion
                              ? 0
                              : 0.12 +
                                index *
                                  0.07,
                          ease: easing,
                        }}
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                x: 5,
                              }
                        }
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-[22px]
                          border
                          border-white/10
                          bg-black/20
                          p-4
                          transition-colors
                          duration-300
                          hover:border-cyan-300/20
                          hover:bg-white/[0.05]
                        "
                      >
                        <div
                          aria-hidden="true"
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-r
                            from-cyan-400/[0.045]
                            to-transparent
                            opacity-0
                            transition-opacity
                            duration-300
                            group-hover:opacity-100
                          "
                        />

                        <div
                          className="
                            relative
                            z-10
                            flex
                            gap-4
                          "
                        >
                          <div
                            className="
                              flex
                              h-12
                              w-12
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              border
                              border-cyan-300/15
                              bg-cyan-400/10
                              text-cyan-300
                              shadow-[0_0_18px_rgba(34,211,238,0.07)]
                              transition-transform
                              duration-300
                              motion-reduce:transition-none
                              md:group-hover:-rotate-3
                              md:group-hover:scale-[1.04]
                            "
                          >
                            <Icon
                              size={23}
                              strokeWidth={1.8}
                              aria-hidden="true"
                            />
                          </div>

                          <div>
                            <h4
                              className="
                                font-black
                                tracking-tight
                                text-white
                              "
                            >
                              {item.title}
                            </h4>

                            <p
                              className="
                                mt-1.5
                                text-sm
                                leading-6
                                text-slate-400
                              "
                            >
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </motion.article>
                    );
                  },
                )}
              </div>

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  items-center
                  gap-3
                  border-t
                  border-white/10
                  pt-6
                "
              >
                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-slate-500
                  "
                >
                  {t(
                    "about.createdBy",
                    "Created by",
                  )}
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-violet-400/20
                    bg-violet-400/10
                    px-4
                    py-2
                    text-xs
                    font-black
                    tracking-[0.15em]
                    text-violet-200
                  "
                >
                  SHAYAN
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 36,
                  scale: 0.97,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.75,
            ease: easing,
          }}
          className="
            flex
            justify-center
          "
        >
          <div
            className="
              relative
              flex
              h-[370px]
              w-full
              max-w-[370px]
              items-center
              justify-center
              sm:h-[450px]
              sm:max-w-[450px]
            "
          >
            <motion.div
              aria-hidden="true"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 38,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                hidden
                h-full
                w-full
                rounded-full
                border
                border-cyan-400/20
                shadow-[0_0_55px_rgba(34,211,238,0.035)]
                sm:block
              "
            >
              <span
                className="
                  absolute
                  left-1/2
                  top-[-4px]
                  h-2.5
                  w-2.5
                  -translate-x-1/2
                  rounded-full
                  bg-cyan-300
                  shadow-[0_0_14px_rgba(103,232,249,0.9)]
                "
              />
            </motion.div>

            <motion.div
              aria-hidden="true"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: -360,
                    }
              }
              transition={{
                duration: 44,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                hidden
                h-[76%]
                w-[76%]
                rounded-full
                border
                border-violet-500/25
                md:block
              "
            >
              <span
                className="
                  absolute
                  bottom-[11%]
                  right-[4%]
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-violet-400
                  shadow-[0_0_14px_rgba(167,139,250,0.85)]
                "
              />
            </motion.div>

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                h-[58%]
                w-[58%]
                rounded-full
                border
                border-white/[0.06]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                h-44
                w-44
                rounded-full
                bg-cyan-400/20
                blur-[65px]
                sm:h-52
                sm:w-52
                sm:blur-[80px]
              "
            />

            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      scale: 1.04,
                      rotate: 2,
                    }
              }
              className="
                relative
                z-10
                flex
                h-32
                w-32
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/[0.08]
                shadow-[0_0_65px_rgba(34,211,238,0.32)]
                backdrop-blur-xl
                sm:h-40
                sm:w-40
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-3
                  rounded-full
                  border
                  border-cyan-300/10
                "
              />

              <BrainCircuit
                size={62}
                aria-hidden="true"
                className="
                  relative
                  z-10
                  text-cyan-300
                  drop-shadow-[0_0_14px_rgba(34,211,238,0.55)]
                "
              />
            </motion.div>

            <div
              className="
                absolute
                bottom-0
                z-20
                grid
                w-full
                grid-cols-3
                gap-2
                sm:gap-3
              "
            >
              {stats.map(
                (
                  item,
                  index,
                ) => {
                  const Icon =
                    item.icon;

                  return (
                    <motion.div
                      key={`${item.text}-${index}`}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 18,
                            }
                      }
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.48,
                        delay:
                          reduceMotion
                            ? 0
                            : 0.2 +
                              index *
                                0.07,
                      }}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -4,
                            }
                      }
                      className="
                        rounded-[18px]
                        border
                        border-white/10
                        bg-black/50
                        px-2
                        py-3
                        text-center
                        shadow-[0_12px_32px_rgba(0,0,0,0.26)]
                        backdrop-blur-lg
                        sm:rounded-2xl
                        sm:px-3
                        sm:py-4
                      "
                    >
                      <Icon
                        size={18}
                        aria-hidden="true"
                        className="
                          mx-auto
                          text-cyan-300
                        "
                      />

                      <h4
                        className="
                          mt-2
                          text-sm
                          font-black
                          text-white
                          sm:text-base
                        "
                      >
                        {item.value}
                      </h4>

                      <p
                        className="
                          mt-1
                          line-clamp-1
                          text-[9px]
                          text-slate-400
                          sm:text-[10px]
                        "
                      >
                        {item.text}
                      </p>
                    </motion.div>
                  );
                },
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}