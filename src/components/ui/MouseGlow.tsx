import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 18,
    mass: 0.3,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 18,
    mass: 0.3,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        style={{
          x,
          y,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[2] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[140px]"
      />

      <motion.div
        style={{
          x,
          y,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[1] h-[280px] w-[280px] rounded-full bg-violet-500/10 blur-[100px]"
      />

      <motion.div
        style={{
          x,
          y,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[3] h-[120px] w-[120px] rounded-full bg-white/5 blur-3xl"
      />
    </>
  );
}