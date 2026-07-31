import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Check,
  ChevronDown,
  Globe2,
} from "lucide-react";
import { useTranslation } from "react-i18next";

type LanguageOption = {
  code: string;
  name: string;
  nativeName: string;
  direction: "ltr" | "rtl";
};

const languages: LanguageOption[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    direction: "ltr",
  },
  {
    code: "fa",
    name: "Persian",
    nativeName: "فارسی",
    direction: "rtl",
  },
  {
    code: "tr",
    name: "Turkish",
    nativeName: "Türkçe",
    direction: "ltr",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    direction: "ltr",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    direction: "ltr",
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    direction: "ltr",
  },
  {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    direction: "ltr",
  },
  {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    direction: "ltr",
  },
  {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    direction: "ltr",
  },
  {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    direction: "ltr",
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    direction: "ltr",
  },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
    direction: "ltr",
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    direction: "rtl",
  },
];

const fallbackLanguage = languages[0];

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const [open, setOpen] = useState(false);

  const containerRef =
    useRef<HTMLDivElement>(null);

  const currentCode =
    i18n.resolvedLanguage?.split("-")[0] ??
    i18n.language?.split("-")[0] ??
    "en";

  const currentLanguage = useMemo(
    () =>
      languages.find(
        (language) =>
          language.code === currentCode,
      ) ?? fallbackLanguage,
    [currentCode],
  );

  useEffect(() => {
    const handlePointerDown = (
      event: PointerEvent,
    ) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(
          event.target as Node,
        )
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener(
      "pointerdown",
      handlePointerDown,
    );

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang =
      currentLanguage.code;

    document.documentElement.dir =
      currentLanguage.direction;

    document.body.dir =
      currentLanguage.direction;
  }, [currentLanguage]);

  const changeLanguage = async (
    language: LanguageOption,
  ) => {
    if (
      language.code === currentLanguage.code
    ) {
      setOpen(false);
      return;
    }

    try {
      await i18n.changeLanguage(
        language.code,
      );

      localStorage.setItem(
        "quantnova-language",
        language.code,
      );

      document.documentElement.lang =
        language.code;

      document.documentElement.dir =
        language.direction;

      document.body.dir =
        language.direction;
    } finally {
      setOpen(false);
    }
  };

  const handleToggle = (
    event: ReactMouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();

    setOpen((current) => !current);
  };

  return (
    <div
      ref={containerRef}
      className="
        relative
        z-[1000]
      "
    >
      <motion.button
        type="button"
        aria-label={t(
          "languageSwitcher.open",
          "Select language",
        )}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls="language-switcher-menu"
        onClick={handleToggle}
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -1,
                scale: 1.02,
              }
        }
        whileTap={{
          scale: 0.95,
        }}
        className="
          group
          relative
          flex
          h-11
          min-w-11
          items-center
          justify-center
          gap-2
          overflow-hidden
          rounded-full
          border
          border-cyan-300/25
          bg-white/[0.06]
          px-3
          text-cyan-300
          shadow-[inset_0_1px_0_rgba(255,255,255,.08),0_10px_30px_rgba(2,6,23,.22)]
          backdrop-blur-xl
          transition-colors
          duration-300
          hover:border-cyan-300/40
          hover:bg-white/[0.10]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-cyan-300/80
          focus-visible:ring-offset-4
          focus-visible:ring-offset-[#020617]
        "
      >
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-cyan-400/[0.06]
            via-transparent
            to-violet-500/[0.08]
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        <Globe2
          size={18}
          aria-hidden="true"
          className="
            relative
            z-10
            shrink-0
          "
        />

        <span
          className="
            relative
            z-10
            hidden
            max-w-24
            truncate
            text-xs
            font-bold
            text-white
            xl:block
          "
        >
          {currentLanguage.nativeName}
        </span>

        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`
            relative
            z-10
            hidden
            shrink-0
            transition-transform
            duration-300
            motion-reduce:transition-none
            xl:block

            ${
              open
                ? "rotate-180"
                : "rotate-0"
            }
          `}
        />
      </motion.button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="language-switcher-menu"
            role="listbox"
            aria-label={t(
              "languageSwitcher.menuLabel",
              "Available languages",
            )}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: -8,
                    scale: 0.97,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={
              reduceMotion
                ? undefined
                : {
                    opacity: 0,
                    y: -8,
                    scale: 0.97,
                  }
            }
            transition={{
              duration: 0.22,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className={`
              absolute
              top-14
              z-[100000]
              w-[290px]
              max-w-[calc(100vw-32px)]
              overflow-hidden
              rounded-[26px]
              border
              border-white/15
              bg-[#020617]/96
              p-3
              shadow-[0_30px_100px_rgba(0,0,0,.72)]
              backdrop-blur-[26px]

              ${
                currentLanguage.direction ===
                "rtl"
                  ? "left-0"
                  : "right-0"
              }
            `}
          >
            <div
              className="
                mb-3
                flex
                items-center
                justify-between
                gap-4
                border-b
                border-white/10
                px-1
                pb-3
              "
            >
              <div>
                <p
                  className="
                    text-sm
                    font-black
                    text-white
                  "
                >
                  {t(
                    "languageSwitcher.title",
                    "Language",
                  )}
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-slate-500
                  "
                >
                  {t(
                    "languageSwitcher.description",
                    "Choose your preferred language",
                  )}
                </p>
              </div>

              <span
                className="
                  max-w-28
                  truncate
                  rounded-full
                  border
                  border-cyan-300/15
                  bg-cyan-400/[0.08]
                  px-3
                  py-1.5
                  text-xs
                  font-bold
                  text-cyan-300
                "
              >
                {currentLanguage.nativeName}
              </span>
            </div>

            <div
              className="
                max-h-[320px]
                space-y-1
                overflow-y-auto
                overscroll-contain
                pr-1
                [scrollbar-color:rgba(103,232,249,.25)_transparent]
                [scrollbar-width:thin]
              "
            >
              {languages.map(
                (language) => {
                  const active =
                    currentLanguage.code ===
                    language.code;

                  return (
                    <motion.button
                      key={language.code}
                      type="button"
                      role="option"
                      aria-selected={active}
                      onClick={() =>
                        void changeLanguage(
                          language,
                        )
                      }
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              x:
                                currentLanguage.direction ===
                                "rtl"
                                  ? -3
                                  : 3,
                            }
                      }
                      whileTap={{
                        scale: 0.98,
                      }}
                      className={`
                        group
                        relative
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-3
                        overflow-hidden
                        rounded-xl
                        border
                        px-3
                        py-3
                        text-left
                        transition-colors
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
                      <span
                        className="
                          relative
                          z-10
                          min-w-0
                        "
                      >
                        <span
                          className="
                            block
                            truncate
                            text-sm
                            font-bold
                          "
                        >
                          {language.nativeName}
                        </span>

                        <span
                          className="
                            mt-0.5
                            block
                            truncate
                            text-[10px]
                            text-slate-500
                          "
                        >
                          {language.name}
                        </span>
                      </span>

                      <span
                        className="
                          relative
                          z-10
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.04]
                        "
                      >
                        {active && (
                          <Check
                            size={15}
                            aria-hidden="true"
                            className="text-cyan-300"
                          />
                        )}
                      </span>

                      {active && (
                        <span
                          aria-hidden="true"
                          className="
                            absolute
                            inset-y-2
                            left-0
                            w-0.5
                            rounded-r-full
                            bg-gradient-to-b
                            from-cyan-300
                            to-violet-500
                            shadow-[0_0_12px_rgba(34,211,238,.55)]
                          "
                        />
                      )}
                    </motion.button>
                  );
                },
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}