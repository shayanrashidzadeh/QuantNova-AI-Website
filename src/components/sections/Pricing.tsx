import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Check,
  Crown,
  Rocket,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  icon: LucideIcon;
  popular: boolean;
  features: string[];
};

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$35",
    description:
      "Essential AI market intelligence for traders getting started.",
    icon: Rocket,
    popular: false,
    features: [
      "Basic AI Analysis",
      "Market Overview",
      "Limited Signals",
      "Essential Risk Tools",
      "Email Support",
    ],
  },
  {
    name: "Pro AI",
    price: "$99",
    description:
      "Advanced intelligence, signals, and automation for active traders.",
    icon: Sparkles,
    popular: true,
    features: [
      "Advanced AI Engine",
      "Unlimited Analysis",
      "Smart Trading Signals",
      "Adaptive Risk Management",
      "Priority Updates",
      "Multi-Market Access",
    ],
  },
  {
    name: "Elite Quant",
    price: "$499",
    description:
      "Institutional-grade analytics and premium automation capabilities.",
    icon: Crown,
    popular: false,
    features: [
      "Full AI Trading Assistant",
      "Premium Indicators",
      "Advanced Quant Analytics",
      "Custom Strategy Models",
      "Private Community",
      "24/7 Priority Support",
    ],
  },
];

export default function Pricing() {
  const reduceMotion = useReducedMotion();

  const scrollToExtension = () => {
    const section =
      document.getElementById("extension");

    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: reduceMotion
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="pricing"
      className="
        relative
        overflow-hidden
        px-5
        py-28
        md:px-6
        md:py-36
      "
    >
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.12, 1],
                opacity: [0.16, 0.34, 0.16],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-10
          h-[360px]
          w-[360px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/10
          blur-[100px]
          sm:h-[440px]
          sm:w-[440px]
          sm:blur-[120px]
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
          -right-32
          bottom-0
          hidden
          h-[420px]
          w-[420px]
          rounded-full
          bg-violet-500/10
          blur-[120px]
          md:block
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.04),transparent_60%)]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
        "
      >
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 16,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mx-auto
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
          <span
            aria-hidden="true"
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-300
              shadow-[0_0_10px_rgba(103,232,249,0.8)]
            "
          />

          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.4em]
              text-cyan-300
              sm:text-xs
            "
          >
            Pricing
          </p>
        </motion.div>

        <motion.h2
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
            amount: 0.35,
          }}
          transition={{
            duration: 0.6,
            delay: reduceMotion ? 0 : 0.08,
          }}
          className="
            mx-auto
            mt-6
            max-w-4xl
            text-center
            text-4xl
            font-black
            leading-[1.05]
            tracking-[-0.04em]
            text-white
            sm:text-5xl
            lg:text-6xl
          "
        >
          Choose Your Intelligence Level
        </motion.h2>

        <motion.p
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
            amount: 0.35,
          }}
          transition={{
            duration: 0.6,
            delay: reduceMotion ? 0 : 0.14,
          }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-center
            text-sm
            leading-7
            text-slate-400
            sm:text-base
            sm:leading-8
            lg:text-lg
          "
        >
          Unlock next-generation AI trading intelligence with a plan built for
          your trading style.
        </motion.p>

        <div
          className="
            mt-14
            grid
            gap-6
            lg:mt-16
            lg:grid-cols-3
            lg:items-stretch
          "
        >
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.article
                key={plan.name}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 42,
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
                    : index * 0.1,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -7,
                      }
                }
                className={`
                  group
                  relative
                  h-full
                  overflow-hidden
                  rounded-[36px]
                  border
                  p-6
                  backdrop-blur-[22px]
                  transition-colors
                  duration-300
                  sm:p-8

                  ${
                    plan.popular
                      ? `
                        border-cyan-300/40
                        bg-cyan-400/[0.08]
                        shadow-[0_26px_80px_rgba(34,211,238,0.16)]
                        lg:-translate-y-4
                      `
                      : `
                        border-white/10
                        bg-white/[0.045]
                        hover:border-white/20
                        hover:bg-white/[0.06]
                      `
                  }
                `}
              >
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-cyan-400/[0.08]
                    via-transparent
                    to-violet-600/[0.12]
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    hidden
                    h-40
                    w-40
                    rounded-full
                    bg-cyan-400/[0.08]
                    opacity-70
                    blur-[60px]
                    md:block
                  "
                />

                {plan.popular && (
                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      z-20
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      to-violet-600
                      px-3
                      py-2
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.12em]
                      text-white
                      shadow-[0_0_24px_rgba(34,211,238,0.3)]
                      sm:right-6
                      sm:top-6
                      sm:px-4
                      sm:text-[10px]
                    "
                  >
                    <Zap
                      size={13}
                      aria-hidden="true"
                    />

                    Most Powerful
                  </div>
                )}

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
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-cyan-300/20
                      bg-gradient-to-br
                      from-cyan-400/20
                      to-violet-500/30
                      shadow-[0_0_26px_rgba(34,211,238,0.08)]
                      transition-transform
                      duration-300
                      motion-reduce:transition-none
                      md:group-hover:-rotate-3
                      md:group-hover:scale-[1.04]
                    "
                  >
                    <Icon
                      size={29}
                      aria-hidden="true"
                      className="text-cyan-300"
                    />
                  </div>

                  <h3
                    className="
                      mt-8
                      text-2xl
                      font-black
                      tracking-tight
                      text-white
                      sm:text-3xl
                    "
                  >
                    {plan.name}
                  </h3>

                  <p
                    className="
                      mt-3
                      min-h-[56px]
                      text-sm
                      leading-7
                      text-slate-400
                    "
                  >
                    {plan.description}
                  </p>

                  <div
                    className="
                      mt-8
                      flex
                      items-end
                      gap-2
                    "
                  >
                    <span
                      className="
                        text-5xl
                        font-black
                        tracking-tight
                        text-white
                      "
                    >
                      {plan.price}
                    </span>

                    <span
                      className="
                        pb-1.5
                        text-sm
                        text-slate-400
                      "
                    >
                      / month
                    </span>
                  </div>

                  <div
                    aria-hidden="true"
                    className="
                      my-8
                      h-px
                      w-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/10
                      to-transparent
                    "
                  />

                  <div
                    className="
                      flex-1
                      space-y-4
                    "
                  >
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="
                          flex
                          items-start
                          gap-3
                        "
                      >
                        <div
                          className="
                            mt-0.5
                            flex
                            h-6
                            w-6
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-cyan-300/15
                            bg-cyan-400/10
                          "
                        >
                          <Check
                            size={13}
                            aria-hidden="true"
                            className="text-cyan-300"
                          />
                        </div>

                        <span
                          className="
                            text-sm
                            leading-6
                            text-slate-300
                          "
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    type="button"
                    aria-label={`Get started with ${plan.name}`}
                    onClick={scrollToExtension}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -2,
                            scale: 1.015,
                          }
                    }
                    whileTap={{
                      scale: 0.97,
                    }}
                    className={`
                      group/button
                      relative
                      mt-10
                      w-full
                      overflow-hidden
                      rounded-2xl
                      px-5
                      py-4
                      text-sm
                      font-black
                      text-white
                      transition-all
                      duration-300
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-cyan-300/80
                      focus-visible:ring-offset-4
                      focus-visible:ring-offset-[#020617]

                      ${
                        plan.popular
                          ? `
                            bg-gradient-to-r
                            from-cyan-400
                            via-blue-500
                            to-violet-600
                            shadow-[0_0_40px_rgba(34,211,238,0.26)]
                            hover:shadow-[0_0_52px_rgba(34,211,238,0.38)]
                          `
                          : `
                            border
                            border-white/10
                            bg-white/[0.06]
                            hover:border-cyan-300/25
                            hover:bg-white/[0.1]
                          `
                      }
                    `}
                  >
                    <span
                      className="
                        relative
                        z-10
                      "
                    >
                      Get Started
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-y-0
                        left-[-40%]
                        hidden
                        w-1/3
                        skew-x-[-20deg]
                        bg-gradient-to-r
                        from-transparent
                        via-white/25
                        to-transparent
                        transition-transform
                        duration-700
                        md:block
                        md:group-hover/button:translate-x-[430%]
                      "
                    />
                  </motion.button>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.p
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
          }}
          transition={{
            duration: 0.5,
            delay: reduceMotion ? 0 : 0.3,
          }}
          className="
            mt-10
            text-center
            text-xs
            leading-6
            text-slate-500
          "
        >
          All plans include secure access, continuous platform updates, and
          encrypted account protection.
        </motion.p>
      </div>
    </section>
  );
}