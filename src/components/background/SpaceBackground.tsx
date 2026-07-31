export default function SpaceBackground() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        isolate
        overflow-hidden
      "
    >
      {/* MAIN SPACE GRADIENT */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#01030b]
          via-[#020617]
          to-[#000000]
        "
      />

      {/* STATIC STAR FIELD - SMALL STARS */}
      <div
        className="
          absolute
          inset-0
          opacity-40
        "
        style={{
          backgroundImage: `
            radial-gradient(
              circle,
              rgba(255,255,255,0.8) 0.7px,
              transparent 0.9px
            )
          `,
          backgroundSize: "46px 46px",
          backgroundPosition: "8px 12px",
        }}
      />

      {/* STATIC STAR FIELD - SECOND LAYER */}
      <div
        className="
          absolute
          inset-0
          opacity-25
        "
        style={{
          backgroundImage: `
            radial-gradient(
              circle,
              rgba(103,232,249,0.9) 0.8px,
              transparent 1px
            )
          `,
          backgroundSize: "83px 83px",
          backgroundPosition: "31px 19px",
        }}
      />

      {/* LARGE DISTANT STARS */}
      <div
        className="
          absolute
          inset-0
          hidden
          opacity-30
          sm:block
        "
        style={{
          backgroundImage: `
            radial-gradient(
              circle,
              rgba(255,255,255,0.95) 1px,
              transparent 1.5px
            )
          `,
          backgroundSize: "137px 137px",
          backgroundPosition: "72px 48px",
        }}
      />

      {/* CYAN GLOW */}
      <div
        className="
          absolute
          -left-28
          -top-20
          h-[260px]
          w-[260px]
          rounded-full
          bg-cyan-400/[0.07]
          blur-[65px]
          sm:-left-36
          sm:-top-28
          sm:h-[360px]
          sm:w-[360px]
          sm:bg-cyan-400/[0.08]
          sm:blur-[80px]
          lg:h-[420px]
          lg:w-[420px]
        "
      />

      {/* VIOLET GLOW */}
      <div
        className="
          absolute
          -bottom-20
          -right-28
          h-[280px]
          w-[280px]
          rounded-full
          bg-violet-500/[0.07]
          blur-[70px]
          sm:-right-36
          sm:h-[380px]
          sm:w-[380px]
          sm:bg-violet-500/[0.08]
          sm:blur-[85px]
          lg:h-[450px]
          lg:w-[450px]
        "
      />

      {/* CENTER AI LIGHT */}
      <div
        className="
          absolute
          left-1/2
          top-[30%]
          h-[220px]
          w-[220px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.05]
          blur-[60px]
          sm:h-[280px]
          sm:w-[280px]
          sm:bg-cyan-400/[0.07]
          sm:blur-[75px]
          lg:h-[340px]
          lg:w-[340px]
        "
      />

      {/* SUBTLE GRID */}
      <div
        className="
          absolute
          inset-0
          hidden
          opacity-[0.025]
          md:block
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(103,232,249,0.55) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(103,232,249,0.55) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* CINEMA VIGNETTE */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_15%,rgba(1,3,11,0.45)_55%,#01030b_100%)]
        "
      />

      {/* BOTTOM FADE */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-48
          bg-gradient-to-b
          from-transparent
          to-[#01030b]
        "
      />
    </div>
  );
}