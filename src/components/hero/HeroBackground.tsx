import { useMemo } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import spaceBg from "../../assets/backgrounds/space-bg.webp";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface ShootingStar {
  id: number;
  top: number;
  left: number;
  width: number;
  delay: number;
  duration: number;
}

function seededRandom(seed: number) {
  const value =
    Math.sin(seed * 9999) * 43758.5453;

  return value - Math.floor(value);
}

function createStars(count: number): Star[] {
  return Array.from(
    {
      length: count,
    },
    (_, index) => {
      const seed = index + 1;

      return {
        id: index,
        x:
          seededRandom(
            seed * 1.13,
          ) * 100,
        y:
          seededRandom(
            seed * 2.27,
          ) * 100,
        size:
          seededRandom(
            seed * 3.91,
          ) > 0.86
            ? 2
            : seededRandom(
                  seed * 4.71,
                ) > 0.58
              ? 1.4
              : 1,
        opacity:
          0.24 +
          seededRandom(
            seed * 5.63,
          ) *
            0.55,
        duration:
          4 +
          seededRandom(
            seed * 6.43,
          ) *
            4,
        delay:
          seededRandom(
            seed * 7.31,
          ) * 6,
      };
    },
  );
}

function createShootingStars(
  count: number,
): ShootingStar[] {
  return Array.from(
    {
      length: count,
    },
    (_, index) => {
      const seed = index + 50;

      return {
        id: index,
        top:
          12 +
          seededRandom(
            seed * 1.37,
          ) *
            38,
        left:
          18 +
          seededRandom(
            seed * 2.41,
          ) *
            54,
        width:
          100 +
          seededRandom(
            seed * 3.59,
          ) *
            80,
        delay:
          3 +
          seededRandom(
            seed * 4.43,
          ) *
            8,
        duration:
          1.6 +
          seededRandom(
            seed * 5.11,
          ) *
            0.7,
      };
    },
  );
}

export default function HeroBackground() {
  const reduceMotion =
    useReducedMotion();

  const stars = useMemo(
    () => createStars(24),
    [],
  );

  const shootingStars = useMemo(
    () => createShootingStars(2),
    [],
  );

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
        bg-[#01030b]
        contain-paint
      "
    >
      <motion.img
        src={spaceBg}
        alt=""
        width={1920}
        height={1080}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        draggable={false}
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                scale: 1.025,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          opacity: {
            duration: 0.8,
            ease: "easeOut",
          },
          scale: {
            duration: 8,
            ease: "easeOut",
          },
        }}
        className="
          absolute
          inset-0
          h-full
          w-full
          select-none
          object-cover
          object-center
          brightness-[0.37]
          contrast-[1.12]
          saturate-[1.14]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#01030b]/35
          via-[#020617]/62
          to-[#01030b]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_34%,rgba(8,145,178,0.10),transparent_32%),radial-gradient(circle_at_14%_28%,rgba(124,58,237,0.09),transparent_30%),radial-gradient(circle_at_86%_64%,rgba(37,99,235,0.09),transparent_32%)]
        "
      />

      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.94,
              }
        }
        animate={
          reduceMotion
            ? {
                opacity: 0.58,
                scale: 1,
              }
            : {
                opacity: [
                  0.48,
                  0.66,
                  0.48,
                ],
                scale: [
                  0.98,
                  1.035,
                  0.98,
                ],
              }
        }
        transition={{
          duration: 11,
          repeat: reduceMotion
            ? 0
            : Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[36%]
          h-52
          w-52
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.11]
          blur-[52px]
          sm:h-80
          sm:w-80
          sm:blur-[72px]
          lg:h-[450px]
          lg:w-[450px]
          lg:blur-[96px]
        "
      />

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: [
                  0,
                  16,
                  0,
                ],
                y: [
                  0,
                  -10,
                  0,
                ],
              }
        }
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-28
          top-[9%]
          h-64
          w-64
          rounded-full
          bg-violet-600/[0.10]
          blur-[72px]
          sm:-left-36
          sm:h-[400px]
          sm:w-[400px]
          sm:blur-[95px]
          lg:-left-44
          lg:h-[540px]
          lg:w-[540px]
          lg:blur-[120px]
        "
      />

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: [
                  0,
                  -16,
                  0,
                ],
                y: [
                  0,
                  12,
                  0,
                ],
              }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-32
          bottom-[4%]
          h-64
          w-64
          rounded-full
          bg-blue-600/[0.09]
          blur-[74px]
          sm:-right-40
          sm:h-[410px]
          sm:w-[410px]
          sm:blur-[100px]
          lg:-right-48
          lg:h-[560px]
          lg:w-[560px]
          lg:blur-[125px]
        "
      />

      <div
        className="
          absolute
          right-[9%]
          top-[17%]
          hidden
          h-64
          w-64
          rounded-full
          bg-cyan-400/[0.07]
          blur-[80px]
          lg:block
        "
      />

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [
                  -9,
                  -6,
                  -9,
                ],
                x: [
                  "-1.5%",
                  "1.5%",
                  "-1.5%",
                ],
              }
        }
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[27%]
          hidden
          h-28
          w-[112%]
          -translate-x-1/2
          -rotate-[9deg]
          rounded-[50%]
          bg-gradient-to-r
          from-transparent
          via-cyan-400/[0.055]
          to-transparent
          blur-[28px]
          md:block
        "
      />

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [
                  7,
                  10,
                  7,
                ],
                x: [
                  "1.5%",
                  "-1.5%",
                  "1.5%",
                ],
              }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[53%]
          hidden
          h-32
          w-[116%]
          -translate-x-1/2
          rotate-[7deg]
          rounded-[50%]
          bg-gradient-to-r
          from-transparent
          via-violet-500/[0.05]
          to-transparent
          blur-[32px]
          lg:block
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-[0.045]
          [background-image:linear-gradient(rgba(255,255,255,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.10)_1px,transparent_1px)]
          [background-size:72px_72px]
          [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_72%,transparent)]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-[42%]
          hidden
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          opacity-[0.055]
          [background-image:repeating-radial-gradient(circle_at_center,rgba(103,232,249,.35)_0,rgba(103,232,249,.35)_1px,transparent_1px,transparent_58px)]
          [mask-image:radial-gradient(circle,black,transparent_72%)]
          md:block
        "
      />

      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.span
            key={star.id}
            initial={{
              opacity: 0,
            }}
            animate={
              reduceMotion
                ? {
                    opacity:
                      star.opacity *
                      0.7,
                  }
                : {
                    opacity: [
                      star.opacity *
                        0.35,
                      star.opacity,
                      star.opacity *
                        0.45,
                    ],
                  }
            }
            transition={{
              duration: star.duration,
              repeat: reduceMotion
                ? 0
                : Infinity,
              delay: star.delay,
              ease: "easeInOut",
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
              shadow-[0_0_4px_rgba(255,255,255,.6)]
            "
          />
        ))}
      </div>

      <motion.span
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [
                  0.3,
                  0.9,
                  0.3,
                ],
                scale: [
                  0.88,
                  1.12,
                  0.88,
                ],
              }
        }
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[18%]
          top-[24%]
          hidden
          h-[3px]
          w-[3px]
          rounded-full
          bg-cyan-100
          shadow-[0_0_8px_rgba(103,232,249,.8)]
          sm:block
        "
      />

      <motion.span
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [
                  0.25,
                  0.8,
                  0.25,
                ],
                scale: [
                  0.88,
                  1.1,
                  0.88,
                ],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 1.2,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[19%]
          top-[31%]
          hidden
          h-[3px]
          w-[3px]
          rounded-full
          bg-violet-100
          shadow-[0_0_8px_rgba(221,214,254,.8)]
          md:block
        "
      />

      {!reduceMotion &&
        shootingStars.map(
          (star) => (
            <motion.span
              key={star.id}
              initial={{
                opacity: 0,
                x: -100,
                y: -60,
              }}
              animate={{
                opacity: [
                  0,
                  0,
                  0.8,
                  0,
                ],
                x: [
                  -100,
                  -100,
                  70,
                  190,
                ],
                y: [
                  -60,
                  -60,
                  35,
                  110,
                ],
              }}
              transition={{
                duration:
                  star.duration,
                repeat: Infinity,
                repeatDelay:
                  14 + star.delay,
                delay: star.delay,
                ease: "easeOut",
              }}
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                width: `${star.width}px`,
              }}
              className="
                absolute
                hidden
                h-px
                -rotate-[32deg]
                origin-left
                bg-gradient-to-r
                from-transparent
                via-cyan-100/75
                to-transparent
                shadow-[0_0_6px_rgba(103,232,249,.5)]
                md:block
              "
            />
          ),
        )}

      <div
        className="
          absolute
          left-1/2
          top-0
          hidden
          h-[70%]
          w-[42%]
          -translate-x-1/2
          bg-gradient-to-b
          from-cyan-300/[0.03]
          via-blue-500/[0.018]
          to-transparent
          blur-[20px]
          [clip-path:polygon(42%_0,58%_0,100%_100%,0_100%)]
          sm:block
        "
      />

      <div
        className="
          absolute
          bottom-[8%]
          left-1/2
          h-px
          w-[72%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-cyan-300/25
          to-transparent
          shadow-[0_0_20px_rgba(34,211,238,.12)]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(1,3,11,.18)_50%,rgba(1,3,11,.88)_100%)]
        "
      />

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[34%]
          bg-gradient-to-b
          from-transparent
          via-[#01030b]/70
          to-[#01030b]
        "
      />

      <div
        className="
          absolute
          inset-0
          hidden
          opacity-[0.02]
          mix-blend-soft-light
          [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_140_140%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noise%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.75%22_numOctaves=%222%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22_opacity=%220.35%22/%3E%3C/svg%3E')]
          sm:block
        "
      />
    </div>
  );
}