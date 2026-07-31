import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Brain,
  Zap,
  ShieldCheck,
  Activity,
} from "lucide-react";
import GlowCard from "../ui/GlowCard";

const icons = [Brain, Zap, ShieldCheck, Activity];

export default function Features() {
  const { t } = useTranslation();

  const cards = t("features.cards", {
    returnObjects: true,
  }) as {
    title: string;
    text: string;
  }[];

  return (
    <section
      id="features"
      className="relative overflow-hidden px-5 py-24 md:px-6 md:py-32"
    >
      <div
        className="
          absolute
          left-1/2
          top-10
          h-[520px]
          w-[520px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/10
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.45em] text-cyan-300"
        >
          {t("features.tag")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-5 text-4xl font-black text-white sm:text-5xl lg:text-6xl"
        >
          {t("features.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-lg"
        >
          {t("features.description")}
        </motion.p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                }}
              >
                <GlowCard className="h-full text-left">
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
                      from-cyan-400/15
                      to-violet-500/20
                      text-cyan-300
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-7 text-xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}