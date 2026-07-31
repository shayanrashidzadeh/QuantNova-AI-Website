import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({
  children,
  className = "",
}: GlowCardProps) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.035]
        p-6
        shadow-[0_16px_45px_rgba(0,0,0,.28)]
        transition-[transform,border-color,background-color,box-shadow]
        duration-300
        md:p-8
        md:hover:-translate-y-1
        md:hover:border-cyan-300/25
        md:hover:bg-white/[0.05]
        md:hover:shadow-[0_22px_65px_rgba(0,0,0,.34)]
        ${className}
      `}
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-6
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-300/45
          to-transparent
          opacity-70
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
          bg-cyan-400/10
          opacity-0
          blur-3xl
          transition-opacity
          duration-300
          md:block
          md:group-hover:opacity-100
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-20
          -left-20
          hidden
          h-44
          w-44
          rounded-full
          bg-violet-500/10
          opacity-0
          blur-3xl
          transition-opacity
          duration-300
          md:block
          md:group-hover:opacity-100
        "
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}