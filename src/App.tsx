import {
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import SmoothScroll from "./components/effects/SmoothScroll";

const IntroLoader = lazy(
  () =>
    import(
      "./components/intro/IntroLoader"
    ),
);

const Home = lazy(
  () => import("./pages/Home"),
);

const INTRO_DURATION = 3200;
const INTRO_STORAGE_KEY =
  "quantnova-intro-seen";

function IntroScreen() {
  return (
    <Suspense
      fallback={
        <div
          className="
            flex
            min-h-screen
            items-center
            justify-center
            bg-[#020617]
          "
        >
          <div
            aria-hidden="true"
            className="
              h-10
              w-10
              animate-spin
              rounded-full
              border-2
              border-white/10
              border-r-violet-400
              border-t-cyan-300
              shadow-[0_0_24px_rgba(34,211,238,0.18)]
              motion-reduce:animate-none
            "
          />
        </div>
      }
    >
      <IntroLoader />
    </Suspense>
  );
}

function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading QuantNova AI"
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#020617]
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-40
          w-40
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/10
          blur-[70px]
        "
      />

      <div
        className="
          relative
          flex
          flex-col
          items-center
          gap-4
        "
      >
        <div
          aria-hidden="true"
          className="
            h-10
            w-10
            animate-spin
            rounded-full
            border-2
            border-white/10
            border-r-violet-400
            border-t-cyan-300
            shadow-[0_0_24px_rgba(34,211,238,0.18)]
            motion-reduce:animate-none
          "
        />

        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.3em]
            text-slate-500
          "
        >
          Loading QuantNova AI
        </span>
      </div>
    </div>
  );
}

function shouldShowIntro() {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    return (
      sessionStorage.getItem(
        INTRO_STORAGE_KEY,
      ) !== "true"
    );
  } catch {
    return true;
  }
}

export default function App() {
  const reduceMotion = useReducedMotion();

  const [showIntro, setShowIntro] =
    useState(shouldShowIntro);

  useEffect(() => {
    if (!showIntro) {
      return;
    }

    if (reduceMotion) {
      setShowIntro(false);

      try {
        sessionStorage.setItem(
          INTRO_STORAGE_KEY,
          "true",
        );
      } catch {
        // Ignore storage errors.
      }

      return;
    }

    const timer = window.setTimeout(() => {
      setShowIntro(false);

      try {
        sessionStorage.setItem(
          INTRO_STORAGE_KEY,
          "true",
        );
      } catch {
        // Ignore storage errors.
      }
    }, INTRO_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, [reduceMotion, showIntro]);

  useEffect(() => {
    if (!showIntro) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [showIntro]);

  return (
    <SmoothScroll>
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 1,
            }}
            exit={
              reduceMotion
                ? {
                    opacity: 0,
                  }
                : {
                    opacity: 0,
                    scale: 1.015,
                  }
            }
            transition={{
              duration: reduceMotion
                ? 0
                : 0.65,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              fixed
              inset-0
              z-[99999]
              bg-[#020617]
            "
          >
            <IntroScreen />
          </motion.div>
        ) : (
          <motion.div
            key="website"
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
              duration: reduceMotion
                ? 0
                : 0.7,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <Suspense
              fallback={<PageLoader />}
            >
              <Home />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </SmoothScroll>
  );
}