import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Activity,
  ArrowDown,
  BrainCircuit,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import HeroBackground from "./HeroBackground";
import HeroButtons from "./HeroButtons";

import logo from "../../assets/logo/quantnova-logo.webp";

type HeroHighlight = {
  key: string;
  icon: LucideIcon;
  fallback: string;
};

const highlights: HeroHighlight[] = [
  {
    key: "ai",
    icon: BrainCircuit,
    fallback: "Advanced AI Engine",
  },
  {
    key: "live",
    icon: Activity,
    fallback: "Real-Time Analysis",
  },
  {
    key: "risk",
    icon: ShieldCheck,
    fallback: "Smart Risk Control",
  },
];

const transitionEase = [
  0.22,
  1,
  0.36,
  1,
] as const;

export default function Hero() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const scrollToNextSection = () => {
    const nextSection =
      document.getElementById("features") ??
      document.getElementById("performance");

    if (!nextSection) {
      return;
    }

    const navbarOffset =
      window.innerWidth >= 1024 ? 112 : 94;

    const targetPosition =
      nextSection.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="
        relative
        isolate
        flex
        min-h-[760px]
        scroll-mt-28
        items-center
        justify-center
        overflow-hidden
        bg-[#01030b]
        px-5
        pb-20
        pt-28
        sm:min-h-[860px]
        sm:px-6
        sm:pb-24
        sm:pt-36
        lg:min-h-screen
        lg:px-8
        lg:pb-28
        lg:pt-40
      "
    >
      <HeroBackground />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-10
          h-36
          bg-gradient-to-b
          from-[#01030b]
          via-[#01030b]/55
          to-transparent
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          z-10
          h-64
          w-[110%]
          -translate-x-1/2
          bg-gradient-to-t
          from-[#01030b]
          via-[#01030b]/75
          to-transparent
          sm:h-80
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[24%]
          z-10
          h-52
          w-52
          -translate-x-1/2
          rounded-full
          bg-cyan-400/10
          blur-[65px]
          sm:h-80
          sm:w-80
          sm:blur-[100px]
        "
      />

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          w-full
          max-w-[1180px]
          flex-col
          items-center
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
                  scale: 0.97,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.55,
            ease: transitionEase,
          }}
          className="
            relative
            mb-6
            inline-flex
            max-w-full
            items-center
            gap-2.5
            overflow-hidden
            rounded-full
            border
            border-cyan-300/15
            bg-white/[0.045]
            px-4
            py-2.5
            text-xs
            font-semibold
            text-slate-200
            shadow-[inset_0_1px_0_rgba(255,255,255,.07),0_12px_35px_rgba(2,6,23,.28)]
            backdrop-blur-xl
            sm:mb-8
            sm:px-5
            sm:text-sm
          "
        >
          <span
            aria-hidden="true"
            className="
              relative
              flex
              h-2.5
              w-2.5
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-emerald-400
              shadow-[0_0_12px_rgba(52,211,153,.75)]
            "
          >
            {!reduceMotion && (
              <span
                className="
                  absolute
                  inset-0
                  animate-ping
                  rounded-full
                  bg-emerald-400/50
                "
              />
            )}
          </span>

          <span
            className="
              relative
              z-10
              truncate
            "
          >
            {t(
              "hero.status",
              "QuantNova AI System Online",
            )}
          </span>

          <Sparkles
            size={14}
            aria-hidden="true"
            className="
              shrink-0
              text-cyan-300
            "
          />

          {!reduceMotion && (
            <span
              aria-hidden="true"
              className="
                absolute
                inset-y-0
                left-[-35%]
                hidden
                w-[30%]
                -skew-x-12
                bg-gradient-to-r
                from-transparent
                via-white/12
                to-transparent
                animate-[heroShimmer_6s_ease-in-out_infinite]
                sm:block
              "
            />
          )}
        </motion.div>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.94,
                  y: 16,
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            delay: reduceMotion ? 0 : 0.06,
            duration: 0.7,
            ease: transitionEase,
          }}
          className="
            relative
            flex
            items-center
            justify-center
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
              duration: 42,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              hidden
              h-[280px]
              w-[280px]
              rounded-full
              border
              border-cyan-300/15
              sm:block
              lg:h-[325px]
              lg:w-[325px]
            "
          >
            <span
              className="
                absolute
                left-1/2
                top-[-3px]
                h-1.5
                w-1.5
                -translate-x-1/2
                rounded-full
                bg-cyan-200
                shadow-[0_0_12px_rgba(103,232,249,.85)]
              "
            />

            <span
              className="
                absolute
                bottom-[-3px]
                left-1/2
                h-1.5
                w-1.5
                -translate-x-1/2
                rounded-full
                bg-violet-300
                shadow-[0_0_12px_rgba(196,181,253,.85)]
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
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              hidden
              h-[225px]
              w-[225px]
              rounded-full
              border
              border-dashed
              border-violet-300/15
              md:block
              lg:h-[270px]
              lg:w-[270px]
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
              bg-cyan-400/15
              blur-[45px]
              sm:h-64
              sm:w-64
              sm:blur-[70px]
              lg:h-72
              lg:w-72
              lg:blur-[85px]
            "
          />

          <motion.img
            src={logo}
            alt="QuantNova AI"
            title="QuantNova AI"
            width={256}
            height={256}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable={false}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -6, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              z-10
              h-40
              w-40
              select-none
              object-contain
              drop-shadow-[0_0_24px_rgba(34,211,238,.40)]
              sm:h-56
              sm:w-56
              sm:drop-shadow-[0_0_34px_rgba(34,211,238,.48)]
              lg:h-64
              lg:w-64
            "
          />
        </motion.div>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 10,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: reduceMotion ? 0 : 0.14,
            duration: 0.5,
          }}
          className="
            mt-6
            inline-flex
            items-center
            gap-3
            text-[9px]
            font-black
            uppercase
            tracking-[0.38em]
            text-cyan-300
            sm:mt-8
            sm:text-xs
            sm:tracking-[0.52em]
          "
        >
          <span
            aria-hidden="true"
            className="
              h-px
              w-7
              bg-gradient-to-r
              from-transparent
              to-cyan-300/70
              sm:w-12
            "
          />

          {t("hero.creator", "BY SHAYAN")}

          <span
            aria-hidden="true"
            className="
              h-px
              w-7
              bg-gradient-to-l
              from-transparent
              to-cyan-300/70
              sm:w-12
            "
          />
        </motion.div>

        <motion.h1
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 22,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: reduceMotion ? 0 : 0.2,
            duration: 0.7,
            ease: transitionEase,
          }}
          className="
            mt-5
            max-w-5xl
            text-balance
            text-4xl
            font-black
            leading-[1.03]
            tracking-[-0.045em]
            text-white
            sm:mt-6
            sm:text-6xl
            lg:text-7xl
            xl:text-[82px]
          "
        >
          <span className="block">
            {t(
              "hero.titlePrefix",
              "Trade Beyond",
            )}
          </span>

          <span
            className="
              relative
              mt-1
              inline-block
              bg-gradient-to-r
              from-cyan-200
              via-blue-400
              to-violet-400
              bg-clip-text
              text-transparent
            "
          >
            {t(
              "hero.titleHighlight",
              "Human Intelligence",
            )}

            <span
              aria-hidden="true"
              className="
                absolute
                -bottom-2
                left-1/2
                h-px
                w-[74%]
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-cyan-300/65
                to-transparent
                shadow-[0_0_10px_rgba(34,211,238,.45)]
              "
            />
          </span>
        </motion.h1>

        <motion.p
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 16,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: reduceMotion ? 0 : 0.28,
            duration: 0.6,
            ease: transitionEase,
          }}
          className="
            mt-7
            max-w-3xl
            text-pretty
            text-sm
            leading-7
            text-slate-300
            sm:mt-8
            sm:text-base
            sm:leading-8
            md:text-lg
            md:leading-9
          "
        >
          {t(
            "hero.subtitle",
            "An advanced AI trading ecosystem that analyzes markets, manages risk, and transforms complex data into intelligent trading decisions.",
          )}
        </motion.p>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 16,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: reduceMotion ? 0 : 0.36,
            duration: 0.6,
            ease: transitionEase,
          }}
          className="
            mt-9
            w-full
            sm:mt-10
            sm:w-auto
          "
        >
          <HeroButtons />
        </motion.div>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: reduceMotion ? 0 : 0.44,
            duration: 0.6,
          }}
          className="
            mt-9
            grid
            w-full
            max-w-3xl
            grid-cols-1
            gap-3
            sm:mt-11
            sm:grid-cols-3
          "
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.key}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -3,
                      }
                }
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  p-4
                  shadow-[inset_0_1px_0_rgba(255,255,255,.05),0_14px_35px_rgba(2,6,23,.22)]
                  backdrop-blur-lg
                  transition-colors
                  duration-300
                  hover:border-cyan-300/15
                  hover:bg-white/[0.05]
                "
              >
                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-center
                    gap-2.5
                  "
                >
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-cyan-300/15
                      bg-cyan-400/[0.08]
                      text-cyan-300
                    "
                  >
                    <Icon
                      size={16}
                      aria-hidden="true"
                    />
                  </span>

                  <span
                    className="
                      text-xs
                      font-semibold
                      text-slate-200
                      sm:text-sm
                    "
                  >
                    {t(
                      `hero.highlights.${item.key}`,
                      item.fallback,
                    )}
                  </span>
                </div>

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-x-6
                    bottom-0
                    h-px
                    scale-x-0
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-300/55
                    to-transparent
                    transition-transform
                    duration-500
                    motion-reduce:transition-none
                    group-hover:scale-x-100
                  "
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={scrollToNextSection}
        aria-label={t(
          "hero.scrollDown",
          "Scroll to the next section",
        )}
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 10,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: reduceMotion ? 0 : 0.7,
          duration: 0.5,
        }}
        className="
          absolute
          bottom-6
          left-1/2
          z-30
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          rounded-xl
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.3em]
          text-slate-500
          transition-colors
          duration-300
          hover:text-cyan-300
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-cyan-300/60
          lg:flex
        "
      >
        <span>
          {t("hero.scroll", "Explore")}
        </span>

        <motion.span
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, 6, 0],
                }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            h-9
            w-6
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.035]
            backdrop-blur-lg
          "
        >
          <ArrowDown
            size={13}
            aria-hidden="true"
          />
        </motion.span>
      </motion.button>
    </section>
  );
}