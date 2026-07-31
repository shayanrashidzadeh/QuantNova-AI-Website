import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowUpRight,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import logo from "../../assets/logo/quantnova-logo.webp";
import LanguageSwitcher from "../language/LanguageSwitcher";

interface NavbarLink {
  key: string;
  target: string;
}

const links: NavbarLink[] = [
  {
    key: "features",
    target: "features",
  },
  {
    key: "ai",
    target: "performance",
  },
  {
    key: "extension",
    target: "extension",
  },
  {
    key: "about",
    target: "about",
  },
  {
    key: "pricing",
    target: "pricing",
  },
];

const easing = [
  0.22,
  1,
  0.36,
  1,
] as const;

export default function Navbar() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] =
    useState("hero");

  const sectionIds = useMemo(
    () => [
      "hero",
      ...links.map((item) => item.target),
    ],
    [],
  );

  const scrollToSection = (id: string) => {
    const section =
      document.getElementById(id);

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

    setActiveSection(id);
    setOpen(false);
  };

  useEffect(() => {
    let ticking = false;

    const updateNavigationState = () => {
      setScrolled(window.scrollY > 24);

      const activationPoint =
        window.innerHeight * 0.25;

      let currentSection = "hero";
      let smallestDistance =
        Number.POSITIVE_INFINITY;

      sectionIds.forEach((id) => {
        const section =
          document.getElementById(id);

        if (!section) {
          return;
        }

        const rect =
          section.getBoundingClientRect();

        const distance = Math.abs(
          rect.top - activationPoint,
        );

        if (distance < smallestDistance) {
          smallestDistance = distance;
          currentSection = id;
        }
      });

      setActiveSection((current) =>
        current === currentSection
          ? current
          : currentSection,
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;

      window.requestAnimationFrame(
        updateNavigationState,
      );
    };

    updateNavigationState();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      handleScroll,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        handleScroll,
      );
    };
  }, [sectionIds]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [open]);

  useEffect(() => {
    const desktopQuery =
      window.matchMedia(
        "(min-width: 1024px)",
      );

    const handleDesktopChange = (
      event: MediaQueryListEvent,
    ) => {
      if (event.matches) {
        setOpen(false);
      }
    };

    desktopQuery.addEventListener(
      "change",
      handleDesktopChange,
    );

    return () => {
      desktopQuery.removeEventListener(
        "change",
        handleDesktopChange,
      );
    };
  }, []);

  return (
    <>
      <motion.nav
        aria-label={t(
          "navbar.ariaLabel",
          "Primary navigation",
        )}
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: -22,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.65,
          ease: easing,
        }}
        className="
          pointer-events-none
          fixed
          left-1/2
          top-3
          z-[9999]
          w-[calc(100%-20px)]
          max-w-7xl
          -translate-x-1/2
          sm:top-4
          sm:w-[calc(100%-32px)]
          lg:top-5
        "
      >
        <div
          className={`
            pointer-events-auto
            relative
            isolate
            overflow-visible
            rounded-[24px]
            border
            transition-all
            duration-500
            motion-reduce:transition-none
            sm:rounded-[28px]
            lg:rounded-[32px]

            ${
              scrolled
                ? `
                  border-white/15
                  bg-[#020617]/88
                  shadow-[0_18px_70px_rgba(0,0,0,.58),0_0_40px_rgba(34,211,238,.05)]
                  backdrop-blur-[24px]
                `
                : `
                  border-white/10
                  bg-[#020617]/68
                  shadow-[0_18px_60px_rgba(0,0,0,.42)]
                  backdrop-blur-[18px]
                `
            }
          `}
        >
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
              via-cyan-300/55
              to-transparent
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-16
              top-1/2
              hidden
              h-32
              w-32
              -translate-y-1/2
              rounded-full
              bg-cyan-400/10
              blur-[40px]
              sm:block
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-16
              top-1/2
              hidden
              h-32
              w-32
              -translate-y-1/2
              rounded-full
              bg-violet-500/10
              blur-[40px]
              sm:block
            "
          />

          <div
            className={`
              relative
              z-20
              flex
              items-center
              justify-between
              gap-3
              px-3
              transition-all
              duration-500
              motion-reduce:transition-none
              sm:px-4
              md:px-5
              lg:px-6

              ${
                scrolled
                  ? `
                    min-h-[64px]
                    py-2
                    sm:min-h-[68px]
                    sm:py-2.5
                  `
                  : `
                    min-h-[68px]
                    py-2.5
                    sm:min-h-[76px]
                    sm:py-3
                  `
              }
            `}
          >
            <motion.button
              type="button"
              aria-label={t(
                "navbar.homeAria",
                "Go to homepage",
              )}
              onClick={() =>
                scrollToSection("hero")
              }
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      scale: 1.01,
                    }
              }
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                relative
                z-20
                flex
                min-w-0
                shrink-0
                items-center
                gap-2.5
                rounded-2xl
                text-left
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-cyan-300/80
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[#020617]
                sm:gap-3
              "
            >
              <span
                className={`
                  relative
                  flex
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[15px]
                  border
                  border-cyan-300/20
                  bg-gradient-to-br
                  from-white/[0.10]
                  via-white/[0.04]
                  to-violet-500/[0.08]
                  shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_0_24px_rgba(34,211,238,.08)]
                  transition-all
                  duration-500
                  motion-reduce:transition-none
                  sm:rounded-2xl

                  ${
                    scrolled
                      ? `
                        h-10
                        w-10
                        sm:h-11
                        sm:w-11
                      `
                      : `
                        h-11
                        w-11
                        sm:h-12
                        sm:w-12
                      `
                  }
                `}
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-cyan-300/10
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                <img
                  src={logo}
                  alt="QuantNova AI"
                  title="QuantNova AI"
                  width={44}
                  height={44}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  draggable={false}
                  className={`
                    relative
                    z-10
                    select-none
                    object-contain
                    drop-shadow-[0_0_12px_rgba(34,211,238,.45)]
                    transition-all
                    duration-500
                    motion-reduce:transition-none

                    ${
                      scrolled
                        ? `
                          h-8
                          w-8
                          sm:h-9
                          sm:w-9
                        `
                        : `
                          h-9
                          w-9
                          sm:h-10
                          sm:w-10
                        `
                    }
                  `}
                />
              </span>

              <span className="min-w-0">
                <span
                  className="
                    block
                    truncate
                    bg-gradient-to-r
                    from-white
                    via-cyan-100
                    to-white
                    bg-clip-text
                    text-[15px]
                    font-black
                    tracking-[-0.025em]
                    text-transparent
                    sm:text-lg
                  "
                >
                  QuantNova AI
                </span>

                <span
                  className="
                    mt-0.5
                    block
                    truncate
                    text-[7px]
                    font-extrabold
                    tracking-[0.3em]
                    text-cyan-300
                    sm:text-[9px]
                    sm:tracking-[0.36em]
                  "
                >
                  {t(
                    "hero.creator",
                    "BY SHAYAN",
                  )}
                </span>
              </span>
            </motion.button>

            <div
              className="
                relative
                z-20
                hidden
                flex-1
                items-center
                justify-center
                px-3
                lg:flex
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-1
                  rounded-full
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-1.5
                "
              >
                {links.map((item) => {
                  const active =
                    activeSection ===
                    item.target;

                  return (
                    <button
                      type="button"
                      key={item.key}
                      aria-current={
                        active
                          ? "page"
                          : undefined
                      }
                      onClick={() =>
                        scrollToSection(
                          item.target,
                        )
                      }
                      className={`
                        relative
                        rounded-full
                        px-3.5
                        py-2.5
                        text-sm
                        font-semibold
                        transition-colors
                        duration-300
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-cyan-300/70
                        xl:px-4

                        ${
                          active
                            ? "text-white"
                            : "text-slate-400 hover:text-white"
                        }
                      `}
                    >
                      {active && (
                        <motion.span
                          layoutId="navbar-active-link"
                          transition={
                            reduceMotion
                              ? {
                                  duration: 0,
                                }
                              : {
                                  type: "spring",
                                  stiffness: 380,
                                  damping: 32,
                                }
                          }
                          className="
                            absolute
                            inset-0
                            -z-10
                            rounded-full
                            border
                            border-cyan-300/15
                            bg-gradient-to-r
                            from-cyan-400/10
                            via-blue-500/10
                            to-violet-500/10
                            shadow-[inset_0_1px_0_rgba(255,255,255,.08),0_8px_22px_rgba(0,0,0,.18)]
                          "
                        />
                      )}

                      <span className="relative z-10">
                        {t(
                          `navbar.${item.key}`,
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className="
                relative
                z-[80]
                hidden
                shrink-0
                items-center
                gap-2.5
                lg:flex
              "
            >
              <div className="relative z-[100]">
                <LanguageSwitcher />
              </div>

              <motion.button
                type="button"
                onClick={() =>
                  scrollToSection(
                    "extension",
                  )
                }
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -1.5,
                        scale: 1.01,
                      }
                }
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-2
                  overflow-hidden
                  whitespace-nowrap
                  rounded-full
                  border
                  border-cyan-200/20
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-violet-600
                  px-4
                  py-3
                  text-sm
                  font-black
                  text-white
                  shadow-[0_12px_35px_rgba(37,99,235,.28),0_0_25px_rgba(34,211,238,.12)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-cyan-200
                  focus-visible:ring-offset-4
                  focus-visible:ring-offset-[#020617]
                  xl:px-5
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                    transition-transform
                    duration-500
                    motion-reduce:transition-none
                    group-hover:translate-x-full
                  "
                />

                <Sparkles
                  size={16}
                  aria-hidden="true"
                  className="relative z-10"
                />

                <span className="relative z-10">
                  {t(
                    "navbar.launch",
                    "Launch",
                  )}
                </span>

                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    motion-reduce:transition-none
                    group-hover:translate-x-px
                  "
                />
              </motion.button>
            </div>

            <motion.button
              type="button"
              aria-label={
                open
                  ? t(
                      "navbar.closeMenu",
                      "Close navigation menu",
                    )
                  : t(
                      "navbar.openMenu",
                      "Open navigation menu",
                    )
              }
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() =>
                setOpen(
                  (current) => !current,
                )
              }
              whileTap={{
                scale: 0.92,
              }}
              className="
                relative
                z-[120]
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-[15px]
                border
                border-white/10
                bg-white/[0.055]
                text-white
                shadow-[inset_0_1px_0_rgba(255,255,255,.08)]
                backdrop-blur-xl
                transition-colors
                duration-300
                hover:border-cyan-300/25
                hover:bg-white/[0.09]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-cyan-300/80
                lg:hidden
              "
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                <motion.span
                  key={
                    open
                      ? "close"
                      : "menu"
                  }
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          rotate: -90,
                          scale: 0.7,
                        }
                  }
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          rotate: 90,
                          scale: 0.7,
                        }
                  }
                  transition={{
                    duration: 0.2,
                  }}
                >
                  {open ? (
                    <X
                      size={22}
                      aria-hidden="true"
                    />
                  ) : (
                    <Menu
                      size={22}
                      aria-hidden="true"
                    />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>

          <AnimatePresence
            mode="wait"
            initial={false}
          >
            {open && (
              <motion.div
                id="mobile-navigation"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        height: 0,
                        y: -8,
                      }
                }
                animate={{
                  opacity: 1,
                  height: "auto",
                  y: 0,
                }}
                exit={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        height: 0,
                        y: -8,
                      }
                }
                transition={{
                  duration: 0.32,
                  ease: easing,
                }}
                className="
                  relative
                  z-[200]
                  overflow-hidden
                  lg:hidden
                "
              >
                <div
                  className="
                    mx-3
                    mb-3
                    border-t
                    border-white/10
                    px-1
                    pb-1
                    pt-4
                    sm:mx-4
                  "
                >
                  <div
                    className="
                      relative
                      z-[220]
                      mb-3
                      rounded-2xl
                      border
                      border-white/[0.08]
                      bg-white/[0.035]
                      p-3
                      shadow-[inset_0_1px_0_rgba(255,255,255,.06)]
                    "
                  >
                    <LanguageSwitcher />
                  </div>

                  <div className="space-y-1.5">
                    {links.map(
                      (
                        item,
                        index,
                      ) => {
                        const active =
                          activeSection ===
                          item.target;

                        return (
                          <motion.button
                            type="button"
                            key={
                              item.key
                            }
                            aria-current={
                              active
                                ? "page"
                                : undefined
                            }
                            onClick={() =>
                              scrollToSection(
                                item.target,
                              )
                            }
                            initial={
                              reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    x: -12,
                                  }
                            }
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              delay:
                                reduceMotion
                                  ? 0
                                  : index *
                                    0.045,
                              duration: 0.25,
                            }}
                            className={`
                              group
                              relative
                              flex
                              w-full
                              items-center
                              justify-between
                              overflow-hidden
                              rounded-2xl
                              border
                              px-4
                              py-3.5
                              text-left
                              text-sm
                              font-semibold
                              transition-all
                              duration-300
                              focus-visible:outline-none
                              focus-visible:ring-2
                              focus-visible:ring-cyan-300/70

                              ${
                                active
                                  ? `
                                    border-cyan-300/20
                                    bg-gradient-to-r
                                    from-cyan-400/10
                                    via-blue-500/[0.08]
                                    to-violet-500/10
                                    text-white
                                  `
                                  : `
                                    border-transparent
                                    text-slate-300
                                    hover:border-white/[0.07]
                                    hover:bg-white/[0.05]
                                    hover:text-white
                                  `
                              }
                            `}
                          >
                            <span className="relative z-10">
                              {t(
                                `navbar.${item.key}`,
                              )}
                            </span>

                            <ArrowUpRight
                              size={16}
                              aria-hidden="true"
                              className={`
                                relative
                                z-10
                                transition-all
                                duration-300
                                motion-reduce:transition-none

                                ${
                                  active
                                    ? "text-cyan-300"
                                    : "text-slate-500 group-hover:translate-x-px group-hover:text-cyan-300"
                                }
                              `}
                            />

                            {active && (
                              <span
                                aria-hidden="true"
                                className="
                                  absolute
                                  left-0
                                  top-1/2
                                  h-7
                                  w-1
                                  -translate-y-1/2
                                  rounded-r-full
                                  bg-gradient-to-b
                                  from-cyan-300
                                  to-violet-500
                                  shadow-[0_0_14px_rgba(34,211,238,.65)]
                                "
                              />
                            )}
                          </motion.button>
                        );
                      },
                    )}
                  </div>

                  <motion.button
                    type="button"
                    onClick={() =>
                      scrollToSection(
                        "extension",
                      )
                    }
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      group
                      relative
                      mt-4
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2.5
                      overflow-hidden
                      rounded-2xl
                      border
                      border-cyan-200/20
                      bg-gradient-to-r
                      from-cyan-400
                      via-blue-500
                      to-violet-600
                      px-5
                      py-4
                      text-sm
                      font-black
                      text-white
                      shadow-[0_14px_35px_rgba(37,99,235,.24),0_0_25px_rgba(34,211,238,.10)]
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-cyan-200
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        inset-0
                        -translate-x-full
                        bg-gradient-to-r
                        from-transparent
                        via-white/30
                        to-transparent
                        transition-transform
                        duration-500
                        motion-reduce:transition-none
                        group-hover:translate-x-full
                      "
                    />

                    <Sparkles
                      size={17}
                      aria-hidden="true"
                      className="relative z-10"
                    />

                    <span className="relative z-10">
                      {t(
                        "navbar.launch",
                        "Launch",
                      )}
                    </span>

                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                      className="
                        relative
                        z-10
                        transition-transform
                        duration-300
                        motion-reduce:transition-none
                        group-hover:translate-x-px
                      "
                    />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      <AnimatePresence
        initial={false}
      >
        {open && (
          <motion.button
            type="button"
            aria-label={t(
              "navbar.closeMenu",
              "Close navigation menu",
            )}
            onClick={() =>
              setOpen(false)
            }
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                  }
            }
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              fixed
              inset-0
              z-[9990]
              bg-[#01030b]/72
              backdrop-blur-sm
              lg:hidden
            "
          />
        )}
      </AnimatePresence>
    </>
  );
}