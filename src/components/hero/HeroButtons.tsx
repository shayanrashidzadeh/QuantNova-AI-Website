import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";
import {
  useRef,
  useState,
  type MouseEvent,
} from "react";

const transitionEase = [
  0.22,
  1,
  0.36,
  1,
] as const;

export default function HeroButtons() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const buttonRef =
    useRef<HTMLButtonElement>(null);

  const [hovered, setHovered] =
    useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useSpring(mouseX, {
    stiffness: 220,
    damping: 28,
    mass: 0.45,
  });

  const glowY = useSpring(mouseY, {
    stiffness: 220,
    damping: 28,
    mass: 0.45,
  });

  const scrollToSection = (
    sectionId: string,
  ) => {
    const section =
      document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const navbarOffset =
      window.innerWidth >= 1024
        ? 112
        : 94;

    const targetPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: reduceMotion
        ? "auto"
        : "smooth",
    });
  };

  const handleMove = (
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    if (
      reduceMotion ||
      !buttonRef.current
    ) {
      return;
    }

    const rect =
      buttonRef.current.getBoundingClientRect();

    mouseX.set(
      event.clientX - rect.left,
    );

    mouseY.set(
      event.clientY - rect.top,
    );
  };

  const handleMouseEnter = () => {
    if (!buttonRef.current) {
      return;
    }

    const rect =
      buttonRef.current.getBoundingClientRect();

    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);

    if (!reduceMotion) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);

    if (!buttonRef.current) {
      return;
    }

    const rect =
      buttonRef.current.getBoundingClientRect();

    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);
  };

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 28,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.65,
        delay: reduceMotion
          ? 0
          : 0.3,
        ease: transitionEase,
      }}
      className="
        flex
        w-full
        flex-col
        items-stretch
        justify-center
        gap-4
        pt-4
        sm:w-auto
        sm:flex-row
        sm:flex-wrap
        sm:items-center
        sm:gap-5
      "
    >
      <motion.button
        ref={buttonRef}
        type="button"
        aria-label={t(
          "hero.button",
          "Launch QuantNova AI",
        )}
        onClick={() =>
          scrollToSection("extension")
        }
        onMouseMove={handleMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={
          reduceMotion
            ? undefined
            : {
                scale: 1.025,
                y: -3,
              }
        }
        whileTap={{
          scale: 0.97,
        }}
        className="
          group
          relative
          isolate
          w-full
          overflow-hidden
          rounded-full
          p-[2px]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-cyan-200
          focus-visible:ring-offset-4
          focus-visible:ring-offset-[#01030b]
          sm:w-auto
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
            repeat: Infinity,
            duration: 14,
            ease: "linear",
          }}
          className="
            absolute
            inset-0
            hidden
            rounded-full
            bg-[conic-gradient(from_0deg,#06b6d4,#3b82f6,#8b5cf6,#06b6d4)]
            sm:block
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-violet-600
            sm:hidden
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            inset-[1px]
            rounded-full
            bg-[#050816]
          "
        />

        {!reduceMotion && (
          <motion.div
            aria-hidden="true"
            style={{
              left: glowX,
              top: glowY,
            }}
            animate={{
              opacity: hovered ? 1 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              pointer-events-none
              absolute
              hidden
              h-36
              w-36
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-300/25
              blur-3xl
              md:block
            "
          />
        )}

        <div
          className="
            relative
            z-20
            flex
            min-h-[72px]
            w-full
            items-center
            justify-center
            gap-3
            overflow-hidden
            rounded-full
            bg-white/[0.06]
            px-6
            py-3.5
            shadow-[inset_0_1px_0_rgba(255,255,255,.08)]
            backdrop-blur-xl
            sm:min-h-0
            sm:w-auto
            sm:justify-start
            sm:gap-4
            sm:px-8
            sm:py-4
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
              rounded-full
              bg-gradient-to-br
              from-cyan-400
              to-violet-500
              shadow-[0_0_24px_rgba(34,211,238,.35)]
              transition-transform
              duration-300
              motion-reduce:transition-none
              md:group-hover:-rotate-3
              md:group-hover:scale-[1.04]
            "
          >
            <Sparkles
              size={18}
              aria-hidden="true"
              className="text-white"
            />
          </div>

          <div
            className="
              flex
              min-w-0
              flex-col
              items-start
            "
          >
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-cyan-300
                sm:text-[11px]
                sm:tracking-[0.28em]
              "
            >
              QuantNova AI
            </span>

            <span
              className="
                whitespace-nowrap
                text-sm
                font-black
                text-white
                sm:text-base
              "
            >
              {t(
                "hero.button",
                "Launch QuantNova",
              )}
            </span>
          </div>

          <div
            className="
              ml-auto
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-white/10
              transition-transform
              duration-300
              motion-reduce:transition-none
              sm:ml-2
              md:group-hover:translate-x-1
            "
          >
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="text-white"
            />
          </div>

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-[-45%]
              hidden
              w-1/3
              skew-x-[-20deg]
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent
              transition-transform
              duration-700
              motion-reduce:transition-none
              sm:block
              md:group-hover:translate-x-[440%]
            "
          />

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-full
              bg-cyan-400/[0.06]
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          />
        </div>

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -inset-2
            -z-10
            rounded-full
            bg-cyan-400/15
            opacity-60
            blur-[32px]
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />
      </motion.button>

      <motion.button
        type="button"
        aria-label={t(
          "hero.performance",
          "View AI performance",
        )}
        onClick={() =>
          scrollToSection("performance")
        }
        whileHover={
          reduceMotion
            ? undefined
            : {
                scale: 1.02,
                y: -3,
              }
        }
        whileTap={{
          scale: 0.97,
        }}
        className="
          group
          relative
          w-full
          overflow-hidden
          rounded-full
          border
          border-white/15
          bg-white/[0.055]
          px-6
          py-3.5
          shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_12px_30px_rgba(2,6,23,.22)]
          backdrop-blur-xl
          transition-colors
          duration-300
          hover:border-cyan-300/30
          hover:bg-white/[0.085]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-cyan-300/70
          focus-visible:ring-offset-4
          focus-visible:ring-offset-[#01030b]
          sm:w-auto
          sm:px-8
          sm:py-4
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-cyan-400/[0.06]
            via-violet-500/[0.07]
            to-cyan-400/[0.06]
            opacity-70
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
            min-h-[44px]
            items-center
            justify-center
            gap-4
          "
        >
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-cyan-400/25
              bg-cyan-400/10
              shadow-[0_0_18px_rgba(34,211,238,.2)]
              transition-transform
              duration-300
              motion-reduce:transition-none
              md:group-hover:scale-[1.04]
            "
          >
            <Play
              size={16}
              aria-hidden="true"
              className="
                fill-cyan-300
                text-cyan-300
              "
            />
          </div>

          <div
            className="
              flex
              flex-col
              items-start
            "
          >
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-slate-400
                sm:text-[11px]
                sm:tracking-[0.25em]
              "
            >
              {t(
                "hero.live",
                "Live",
              )}
            </span>

            <span
              className="
                whitespace-nowrap
                text-sm
                font-bold
                text-white
                sm:text-base
              "
            >
              {t(
                "hero.performance",
                "View Performance",
              )}
            </span>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-[-45%]
            hidden
            w-1/3
            skew-x-[-18deg]
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            transition-transform
            duration-700
            motion-reduce:transition-none
            sm:block
            md:group-hover:translate-x-[440%]
          "
        />

        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -inset-px
            rounded-full
            border
            border-cyan-300/0
            transition-colors
            duration-300
            group-hover:border-cyan-300/35
          "
        />
      </motion.button>
    </motion.div>
  );
}