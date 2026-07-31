import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ArrowUp,
  Instagram,
  Mail,
  Send,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import logo from "../../assets/logo/quantnova-logo.webp";

type FooterLink = {
  label: string;
  target?: string;
  href?: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const columns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      {
        label: "Features",
        target: "features",
      },
      {
        label: "AI Engine",
        target: "performance",
      },
      {
        label: "Dashboard",
        target: "hero",
      },
      {
        label: "Extension",
        target: "extension",
      },
      {
        label: "Pricing",
        target: "pricing",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About",
        target: "about",
      },
      {
        label: "Roadmap",
        href: "#",
      },
      {
        label: "Partners",
        href: "#",
      },
      {
        label: "Contact",
        target: "contact",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Documentation",
        href: "#",
      },
      {
        label: "API",
        href: "#",
      },
      {
        label: "Support",
        href: "#",
      },
      {
        label: "System Status",
        href: "#",
      },
    ],
  },
];

const socials: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/quantnova_ai?igsh=MWxycnB1czZwYzJ1cQ==",
    icon: Instagram,
  },
  {
    label: "Telegram",
    href: "https://t.me/Quantnovaai",
    icon: Send,
  },
  {
    label: "Email",
    href: "mailto:rashidzadeshayan@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const handleFooterLink = (link: FooterLink) => {
    if (link.target) {
      scrollTo(link.target);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        pt-28
      "
    >
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.12, 1],
                opacity: [0.16, 0.32, 0.16],
              }
        }
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/10
          blur-[110px]
          md:h-[520px]
          md:w-[520px]
          md:blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-24
          -right-28
          h-[420px]
          w-[420px]
          rounded-full
          bg-violet-500/10
          blur-[110px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.04),transparent_48%)]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          md:px-6
        "
      >
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-[38px]
            border
            border-cyan-300/20
            bg-[#050816]/75
            p-7
            text-center
            shadow-[0_30px_100px_rgba(0,0,0,0.48)]
            backdrop-blur-[24px]
            sm:p-10
            md:p-14
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-cyan-400/[0.09]
              via-transparent
              to-violet-600/[0.14]
            "
          />

          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: ["-150%", "220%"],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-10
              w-1/3
              skew-x-[-20deg]
              bg-gradient-to-r
              from-transparent
              via-white/[0.08]
              to-transparent
            "
          />

          <div className="relative z-20">
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-cyan-300/20
                bg-cyan-400/10
                shadow-[0_0_30px_rgba(34,211,238,0.15)]
              "
            >
              <Sparkles
                size={24}
                aria-hidden="true"
                className="text-cyan-300"
              />
            </div>

            <h2
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-4xl
                font-black
                leading-[1.05]
                tracking-[-0.04em]
                text-white
                md:text-5xl
                lg:text-6xl
              "
            >
              {t(
                "footer.title",
                "Ready To Trade Smarter?",
              )}
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-slate-400
                sm:text-base
                sm:leading-8
              "
            >
              {t(
                "footer.description",
                "Experience next-generation AI intelligence built for modern traders.",
              )}
            </p>

            <motion.button
              type="button"
              onClick={() => scrollTo("extension")}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      scale: 1.025,
                      y: -2,
                    }
              }
              whileTap={{
                scale: 0.97,
              }}
              className="
                relative
                mt-9
                overflow-hidden
                rounded-2xl
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-violet-600
                px-8
                py-4
                text-sm
                font-black
                text-white
                shadow-[0_0_50px_rgba(34,211,238,0.32)]
                transition-shadow
                duration-500
                hover:shadow-[0_0_56px_rgba(34,211,238,0.40)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-cyan-200
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[#020617]
              "
            >
              <span className="relative z-10">
                {t(
                  "footer.launch",
                  "Launch QuantNova",
                )}
              </span>

              <motion.span
                aria-hidden="true"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        x: ["-180%", "260%"],
                      }
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  w-1/3
                  skew-x-[-20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                "
              />
            </motion.button>
          </div>
        </motion.div>

        <div
          className="
            mt-20
            grid
            gap-14
            sm:grid-cols-2
            lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]
            lg:gap-10
          "
        >
          <motion.div
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
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  relative
                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  shadow-[0_0_30px_rgba(34,211,238,0.08)]
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-cyan-400/10
                    to-violet-500/10
                  "
                />

                <img
                  src={logo}
                  alt="QuantNova AI"
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="
                    relative
                    z-10
                    h-12
                    w-12
                    select-none
                    object-contain
                  "
                />
              </div>

              <div>
                <h2
                  className="
                    text-2xl
                    font-black
                    tracking-tight
                    text-white
                  "
                >
                  QuantNova AI
                </h2>

                <p
                  className="
                    mt-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.4em]
                    text-cyan-300
                  "
                >
                  BY SHAYAN
                </p>
              </div>
            </div>

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-slate-400
              "
            >
              {t(
                "footer.brand",
                "Next-generation AI trading intelligence designed for smarter market analysis and decision-making.",
              )}
            </p>

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              {socials.map((social) => {
                const Icon = social.icon;
                const opensInNewTab =
                  social.href.startsWith("http");

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    target={
                      opensInNewTab
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      opensInNewTab
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -3,
                            scale: 1.04,
                          }
                    }
                    whileTap={{
                      scale: 0.94,
                    }}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.035]
                      text-slate-300
                      transition-colors
                      duration-300
                      hover:border-cyan-300/30
                      hover:bg-cyan-400/10
                      hover:text-cyan-300
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-cyan-300/70
                    "
                  >
                    <Icon
                      size={18}
                      aria-hidden="true"
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {columns.map((column, columnIndex) => (
            <motion.div
              key={column.title}
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
              }}
              transition={{
                duration: 0.55,
                delay:
                  0.08 +
                  columnIndex * 0.07,
              }}
            >
              <h3
                className="
                  mb-6
                  text-sm
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-white
                "
              >
                {column.title}
              </h3>

              <div className="space-y-4">
                {column.links.map((link) =>
                  link.target ? (
                    <button
                      key={link.label}
                      type="button"
                      onClick={() =>
                        handleFooterLink(link)
                      }
                      className="
                        group
                        flex
                        items-center
                        gap-2
                        text-left
                        text-sm
                        text-slate-400
                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:text-cyan-300
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-cyan-300/70
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="
                          h-1
                          w-1
                          rounded-full
                          bg-cyan-300
                          opacity-0
                          transition-opacity
                          group-hover:opacity-100
                        "
                      />

                      {link.label}
                    </button>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href ?? "#"}
                      onClick={(event) => {
                        if (
                          !link.href ||
                          link.href === "#"
                        ) {
                          event.preventDefault();
                        }
                      }}
                      aria-disabled={
                        !link.href ||
                        link.href === "#"
                      }
                      className="
                        group
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-slate-400
                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:text-cyan-300
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-cyan-300/70
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="
                          h-1
                          w-1
                          rounded-full
                          bg-cyan-300
                          opacity-0
                          transition-opacity
                          group-hover:opacity-100
                        "
                      />

                      {link.label}
                    </a>
                  ),
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div
          className="
            mt-16
            flex
            flex-col
            items-center
            justify-between
            gap-5
            border-t
            border-white/10
            py-8
            md:flex-row
          "
        >
          <p
            className="
              text-center
              text-sm
              text-slate-500
              md:text-left
            "
          >
            © 2026 QuantNova AI. Built by Shayan.
          </p>

          <motion.button
            type="button"
            onClick={handleBackToTop}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -2,
                  }
            }
            whileTap={{
              scale: 0.96,
            }}
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.035]
              px-5
              py-3
              text-sm
              font-bold
              text-white
              transition-colors
              duration-300
              hover:border-cyan-300/30
              hover:bg-cyan-400/10
              hover:text-cyan-300
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-300/70
            "
          >
            {t(
              "footer.top",
              "Back To Top",
            )}

            <ArrowUp
              size={17}
              aria-hidden="true"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}