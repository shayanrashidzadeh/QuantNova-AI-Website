import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

import spaceBg from "../../assets/backgrounds/space-bg.webp";

export default function HeroBackground() {
  const reduceMotion = useReducedMotion();

  const stars = useMemo(() => {
    return Array.from({ length: 18 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() > 0.85 ? 2 : 1,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div
      className="
      absolute
      inset-0
      z-0
      overflow-hidden
      pointer-events-none
      "
    >
      <motion.img
        src={spaceBg}
        alt="QuantNova AI Galaxy"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        draggable={false}
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
        transition={{
          duration: 0.8,
        }}
        className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        brightness-[0.34]
        contrast-110
        saturate-110
        "
      />

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-[#01030b]/45
        via-[#020617]/78
        to-[#01030b]
        "
      />

      <div
        className="
        absolute
        left-1/2
        top-[42%]
        h-[260px]
        w-[260px]
        -translate-x-1/2
        rounded-full
        bg-cyan-400/15
        blur-[60px]
        sm:h-[320px]
        sm:w-[320px]
        sm:blur-[75px]
        "
      />

      <div
        className="
        absolute
        -left-20
        top-16
        hidden
        h-[260px]
        w-[260px]
        rounded-full
        bg-violet-500/12
        blur-[80px]
        lg:block
        "
      />

      <div
        className="
        absolute
        -right-20
        bottom-8
        hidden
        h-[260px]
        w-[260px]
        rounded-full
        bg-cyan-500/10
        blur-[80px]
        lg:block
        "
      />

      {stars.map((star, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0.15, 0.8, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: star.delay,
          }}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          className="
          absolute
          rounded-full
          bg-white
          "
        />
      ))}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,transparent_25%,#01030b_100%)]
        "
      />
    </div>
  );
}