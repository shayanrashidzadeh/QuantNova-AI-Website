import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Activity,
  Brain,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

import GlowCard from "../ui/GlowCard";

type FeatureCard = {
  title: string;
  text: string;
};

type FeatureItem = FeatureCard & {
  icon: LucideIcon;
};

const fallbackCards: FeatureCard[] = [
  {
    title: "AI Decision Engine",
    text: "Advanced artificial intelligence analyzes market structure, momentum, and trading opportunities in real time.",
  },
  {
    title: "Lightning Execution",
    text: "High-speed signal processing helps identify and respond to market opportunities with minimal delay.",
  },
  {
    title: "Smart Risk Control",
    text: "Adaptive risk management protects capital using intelligent position sizing, stop-loss, and exposure controls.",
  },
  {
    title: "24/7 Market Analysis",
    text: "QuantNova AI continuously monitors market behavior, volatility, momentum, and emerging trading patterns.",
  },
];

const icons: LucideIcon[] = [
  Brain,
  Zap,
  ShieldCheck,
  Activity,
];

const easing = [
  0.22,
  1,
  0.36,
  1,
] as const;

function isFeatureCard(
  item: unknown,
): item is FeatureCard {
  if (
    typeof item !== "object" ||
    item === null
  ) {
    return false;
  }

  const candidate =
    item as Partial<FeatureCard>;

  return (
    typeof candidate.title === "string" &&
    typeof candidate.text === "string"
  );
}

export default function Features() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const translatedCards = t(
    "features.cards",
    {
      returnObjects: true,
    },
  );

  const validatedCards =
    Array.isArray(translatedCards)
      ? translatedCards.filter(
          isFeatureCard,
        )
      : [];

  const cards =
    validatedCards.length > 0
      ? validatedCards
      : fallbackCards;

  const featureItems: FeatureItem[] =
    cards.map((card, index) => ({
      ...card,
      icon: icons[index % icons.length],
    }));

  return (
    <section
      id="features"
      className="
        relative
        isolate
        overflow-hidden
        px-5
        py-24
        sm:px-6
        md:py-28
        lg:px-8
        lg:py-32
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.08]
          blur-[75px]
          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[105px]
          lg:h-[520px]
          lg:w-[520px]
          lg:blur-[125px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-12
          hidden
          h-[380px]
          w-[380px]
          rounded-full
          bg-violet-500/[0.08]
          blur-[110px]
          md:block
          lg:h-[440px]
          lg:w-[440px]
          lg:blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.035),transparent_58%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          text-center
        "
      >
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 14,
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
            duration: 0.45,
            ease: easing,
          }}
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-cyan-300/15
            bg-cyan-400/[0.055]
            px-4
            py-2
            shadow-[inset_0_1px_0_rgba(255,255,255,.05)]
            backdrop-blur-lg
          "
        >
          <span
            aria-hidden="true"
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-300
              shadow-[0_0_10px_rgba(103,232,249,.75)]
            "
          />

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.35em]
              text-cyan-300
              sm:text-xs
              sm:tracking-[0.4em]
            "
          >
            {t(
              "features.tag",
              "Core Intelligence",
            )}
          </p>
        </motion.div>

        <motion.h2
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.55,
            delay: reduceMotion
              ? 0
              : 0.06,
            ease: easing,
          }}
          className="
            mx-auto
            mt-6
            max-w-4xl
            text-balance
            text-4xl
            font-black
            leading-[1.05]
            tracking-[-0.04em]
            text-white
            sm:text-5xl
            lg:text-6xl
          "
        >
          {t(
            "features.title",
            "Intelligence Built for Every Market",
          )}
        </motion.h2>

        <motion.p
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.55,
            delay: reduceMotion
              ? 0
              : 0.1,
            ease: easing,
          }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-pretty
            text-sm
            leading-7
            text-slate-400
            sm:text-base
            sm:leading-8
            lg:text-lg
          "
        >
          {t(
            "features.description",
            "A powerful combination of artificial intelligence, market analysis, execution speed, and adaptive risk management.",
          )}
        </motion.p>

        <div
          className="
            mt-14
            grid
            gap-5
            sm:grid-cols-2
            lg:mt-16
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {featureItems.map(
            (
              {
                title,
                text,
                icon: Icon,
              },
              index,
            ) => (
              <motion.article
                key={`${title}-${index}`}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 26,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                  amount: 0.2,
                }}
                transition={{
                  delay: reduceMotion
                    ? 0
                    : index * 0.06,
                  duration: 0.5,
                  ease: easing,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                      }
                }
                className="h-full"
              >
                <GlowCard
                  className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    text-left
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-cyan-400/[0.035]
                      via-transparent
                      to-violet-500/[0.045]
                      opacity-0
                      transition-opacity
                      duration-300
                      motion-reduce:transition-none
                      md:group-hover:opacity-100
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12
                      hidden
                      h-28
                      w-28
                      rounded-full
                      bg-cyan-400/[0.07]
                      blur-3xl
                      transition-opacity
                      duration-300
                      md:block
                      md:opacity-60
                      md:group-hover:opacity-100
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-full
                      flex-col
                    "
                  >
                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-cyan-300/20
                          bg-gradient-to-br
                          from-cyan-400/[0.12]
                          to-violet-500/[0.16]
                          text-cyan-300
                          shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_10px_25px_rgba(2,6,23,.22)]
                          transition-transform
                          duration-300
                          motion-reduce:transition-none
                          sm:h-16
                          sm:w-16
                          md:group-hover:-rotate-3
                          md:group-hover:scale-[1.04]
                        "
                      >
                        <Icon
                          size={26}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>

                      <span
                        aria-hidden="true"
                        className="
                          text-xs
                          font-black
                          tracking-[0.2em]
                          text-white/[0.12]
                        "
                      >
                        {String(
                          index + 1,
                        ).padStart(2, "0")}
                      </span>
                    </div>

                    <h3
                      className="
                        mt-7
                        text-xl
                        font-black
                        tracking-tight
                        text-white
                      "
                    >
                      {title}
                    </h3>

                    <p
                      className="
                        mt-4
                        flex-1
                        text-sm
                        leading-7
                        text-slate-400
                      "
                    >
                      {text}
                    </p>

                    <div
                      aria-hidden="true"
                      className="
                        mt-7
                        h-px
                        w-full
                        overflow-hidden
                        bg-white/[0.08]
                      "
                    >
                      <motion.div
                        initial={
                          reduceMotion
                            ? false
                            : {
                                scaleX: 0,
                              }
                        }
                        whileInView={{
                          scaleX: 1,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.8,
                        }}
                        transition={{
                          duration: 0.65,
                          delay: reduceMotion
                            ? 0
                            : 0.15 +
                              index *
                                0.05,
                          ease: easing,
                        }}
                        className="
                          h-full
                          w-1/2
                          origin-left
                          bg-gradient-to-r
                          from-cyan-400
                          to-transparent
                        "
                      />
                    </div>
                  </div>
                </GlowCard>
              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}