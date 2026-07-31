import { useState } from "react";
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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <nav
      aria-label="Primary navigation"
      className="
        pointer-events-none
        fixed
        left-1/2
        top-4
        z-[9999]
        w-[calc(100%-24px)]
        max-w-7xl
        -translate-x-1/2
        sm:top-5
        sm:w-[94%]
        lg:top-6
      "
    >
      <div
        className="
          pointer-events-auto
          relative
          isolate
          rounded-[26px]
          border
          border-white/10
          bg-[#020617]/95
          px-4
          py-3
          shadow-[0_16px_45px_rgba(0,0,0,.4)]
          sm:rounded-[30px]
          sm:px-5
          sm:py-4
          md:px-6
          lg:rounded-[34px]
          lg:bg-[#020617]/88
          lg:px-7
          lg:backdrop-blur-xl
          lg:shadow-[0_22px_70px_rgba(0,0,0,.5)]
        "
      >
        <div
          className="
            relative
            z-10
            flex
            min-h-12
            items-center
            justify-between
            gap-3
          "
        >
          <button
            type="button"
            aria-label="Go to home"
            onClick={() => scrollToSection("hero")}
            className="
              relative
              z-10
              flex
              min-w-0
              shrink-0
              items-center
              gap-2.5
              text-left
              sm:gap-3
            "
          >
            <span
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-[15px]
                border
                border-cyan-300/20
                bg-white/[0.05]
                sm:h-12
                sm:w-12
                sm:rounded-2xl
              "
            >
              <img
                src={logo}
                alt="QuantNova AI"
                width={40}
                height={40}
                draggable={false}
                className="
                  h-9
                  w-9
                  select-none
                  object-contain
                  sm:h-10
                  sm:w-10
                "
              />
            </span>

            <span className="min-w-0">
              <span
                className="
                  block
                  truncate
                  text-base
                  font-black
                  text-white
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
                  text-[8px]
                  font-bold
                  tracking-[0.28em]
                  text-cyan-300
                  sm:text-[10px]
                  sm:tracking-[0.35em]
                "
              >
                {t("hero.creator", "BY SHAYAN")}
              </span>
            </span>
          </button>

          <div
            className="
              relative
              z-10
              hidden
              flex-1
              items-center
              justify-center
              gap-5
              px-4
              lg:flex
              xl:gap-7
            "
          >
            {links.map((item) => (
              <button
                type="button"
                key={item.key}
                onClick={() => scrollToSection(item.target)}
                className="
                  whitespace-nowrap
                  text-sm
                  font-medium
                  text-slate-300
                  transition-colors
                  duration-200
                  hover:text-white
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-cyan-300/70
                  focus-visible:ring-offset-4
                  focus-visible:ring-offset-[#020617]
                "
              >
                {t(`navbar.${item.key}`)}
              </button>
            ))}
          </div>

          <div
            className="
              relative
              z-[100]
              hidden
              shrink-0
              items-center
              gap-3
              lg:flex
            "
          >
            <div className="relative z-[120]">
              <LanguageSwitcher />
            </div>

            <button
              type="button"
              onClick={() => scrollToSection("extension")}
              className="
                relative
                z-10
                flex
                items-center
                gap-2
                whitespace-nowrap
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-violet-600
                px-5
                py-3
                text-sm
                font-black
                text-white
                shadow-[0_12px_30px_rgba(37,99,235,.25)]
                transition-transform
                duration-200
                hover:-translate-y-0.5
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-cyan-200
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[#020617]
                xl:px-7
              "
            >
              <Sparkles size={17} aria-hidden="true" />

              <span>{t("navbar.launch")}</span>

              <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="
              relative
              z-20
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.05]
              text-white
              transition-colors
              duration-200
              hover:bg-white/[0.09]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-300/70
              lg:hidden
            "
          >
            {open ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>

        {open && (
          <div
            className="
              relative
              z-[200]
              mt-4
              border-t
              border-white/10
              pt-4
              lg:hidden
            "
          >
            <div
              className="
                relative
                z-[220]
                mb-3
                rounded-2xl
                border
                border-white/10
                bg-white/[0.035]
                p-3
              "
            >
              <LanguageSwitcher />
            </div>

            <div className="space-y-1">
              {links.map((item) => (
                <button
                  type="button"
                  key={item.key}
                  onClick={() => scrollToSection(item.target)}
                  className="
                    block
                    w-full
                    rounded-xl
                    px-4
                    py-3
                    text-left
                    text-sm
                    font-medium
                    text-slate-300
                    transition-colors
                    duration-200
                    hover:bg-white/[0.06]
                    hover:text-white
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-cyan-300/70
                  "
                >
                  {t(`navbar.${item.key}`)}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToSection("extension")}
              className="
                mt-4
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-violet-600
                px-5
                py-3.5
                text-sm
                font-black
                text-white
              "
            >
              <Sparkles size={17} aria-hidden="true" />

              <span>{t("navbar.launch")}</span>

              <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}