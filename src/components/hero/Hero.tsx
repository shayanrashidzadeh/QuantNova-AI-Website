import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

import HeroBackground from "./HeroBackground";
import HeroButtons from "./HeroButtons";

import logo from "../../assets/logo/quantnova-logo.webp";

export default function Hero() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="
        relative
        flex
        min-h-[760px]
        scroll-mt-28
        items-center
        justify-center
        overflow-hidden
        px-5
        pb-20
        pt-32
        sm:min-h-[820px]
        sm:px-6
        sm:pt-36
        lg:min-h-screen
        lg:pb-24
        lg:pt-40
      "
    >
      <HeroBackground />

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          w-full
          max-w-5xl
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
                  scale: 0.92,
                  y: 12,
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            flex
            items-center
            justify-center
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              hidden
              h-[330px]
              w-[330px]
              rounded-full
              border
              border-cyan-300/15
              lg:block
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              hidden
              h-[280px]
              w-[280px]
              rounded-full
              border
              border-violet-400/15
              lg:block
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              h-48
              w-48
              rounded-full
              bg-cyan-400/15
              blur-[50px]
              sm:h-60
              sm:w-60
              lg:h-72
              lg:w-72
              lg:bg-cyan-400/20
              lg:blur-[65px]
            "
          />

          <img
            src={logo}
            alt="QuantNova AI"
            width={256}
            height={256}
            fetchPriority="high"
            decoding="async"
            draggable={false}
            className="
              relative
              h-44
              w-44
              select-none
              object-contain
              drop-shadow-[0_0_28px_rgba(34,211,238,.45)]
              sm:h-56
              sm:w-56
              sm:drop-shadow-[0_0_38px_rgba(34,211,238,.55)]
              lg:h-64
              lg:w-64
            "
          />
        </motion.div>

        <motion.h1
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
            delay: reduceMotion ? 0 : 0.12,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
            max-w-4xl
            bg-gradient-to-r
            from-white
            via-cyan-300
            to-violet-400
            bg-clip-text
            text-4xl
            font-black
            leading-[1.08]
            tracking-[-0.035em]
            text-transparent
            sm:mt-10
            sm:text-6xl
            lg:text-7xl
          "
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
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
            delay: reduceMotion ? 0 : 0.22,
            duration: 0.5,
          }}
          className="
            mt-4
            text-[10px]
            font-bold
            tracking-[0.38em]
            text-cyan-300
            sm:text-sm
            sm:tracking-[0.5em]
          "
        >
          {t("hero.creator", "BY SHAYAN")}
        </motion.p>

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
            delay: reduceMotion ? 0 : 0.3,
            duration: 0.55,
          }}
          className="
            mt-5
            max-w-2xl
            text-sm
            leading-7
            text-slate-300
            sm:mt-6
            sm:text-base
            sm:leading-8
            md:text-lg
          "
        >
          {t("hero.subtitle")}
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
            delay: reduceMotion ? 0 : 0.38,
            duration: 0.55,
          }}
          className="
            mt-8
            w-full
            sm:w-auto
          "
        >
          <HeroButtons />
        </motion.div>
      </div>
    </section>
  );
}