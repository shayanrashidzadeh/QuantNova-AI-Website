import type {
  HTMLAttributes,
  ReactNode,
} from "react";

interface GlowCardProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({
  children,
  className = "",
  ...props
}: GlowCardProps) {
  return (
    <div
      {...props}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/[0.08]
        bg-white/[0.03]
        p-6
        shadow-[0_14px_38px_rgba(0,0,0,.24)]
        transition-[transform,border-color,background-color,box-shadow]
        duration-300
        ease-out
        motion-reduce:transition-none
        md:p-8
        md:hover:-translate-y-1
        md:hover:border-cyan-300/[0.18]
        md:hover:bg-white/[0.045]
        md:hover:shadow-[0_20px_52px_rgba(0,0,0,.30)]
        ${className}
      `}
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-7
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-300/40
          to-transparent
          opacity-70
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white/[0.025]
          via-transparent
          to-transparent
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-14
          -top-14
          hidden
          h-32
          w-32
          rounded-full
          bg-cyan-400/[0.07]
          opacity-0
          blur-3xl
          transition-opacity
          duration-300
          motion-reduce:transition-none
          md:block
          md:group-hover:opacity-100
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-16
          hidden
          h-36
          w-36
          rounded-full
          bg-violet-500/[0.065]
          opacity-0
          blur-3xl
          transition-opacity
          duration-300
          motion-reduce:transition-none
          md:block
          md:group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}