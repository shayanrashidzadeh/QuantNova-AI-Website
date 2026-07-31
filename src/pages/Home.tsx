import {
  lazy,
  Suspense,
  type ReactNode,
} from "react";

import SpaceBackground from "../components/background/SpaceBackground";
import Hero from "../components/hero/Hero";
import Navbar from "../components/layout/Navbar";

const Features = lazy(
  () =>
    import(
      "../components/sections/Features"
    ),
);

const Performance = lazy(
  () =>
    import(
      "../components/sections/Performance"
    ),
);

const Extension = lazy(
  () =>
    import(
      "../components/sections/Extension"
    ),
);

const Pricing = lazy(
  () =>
    import(
      "../components/sections/Pricing"
    ),
);

const About = lazy(
  () =>
    import(
      "../components/sections/About"
    ),
);

const FAQ = lazy(
  () =>
    import(
      "../components/sections/FAQ"
    ),
);

const Footer = lazy(
  () =>
    import(
      "../components/layout/Footer"
    ),
);

type LazySectionProps = {
  children: ReactNode;
  minHeight?: string;
};

function SectionLoader({
  minHeight = "min-h-64",
}: {
  minHeight?: string;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading section"
      className={`
        relative
        flex
        ${minHeight}
        items-center
        justify-center
        overflow-hidden
      `}
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-32
          w-32
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.08]
          blur-[55px]
          sm:h-36
          sm:w-36
          sm:blur-[65px]
        "
      />

      <div
        className="
          relative
          flex
          flex-col
          items-center
          gap-4
        "
      >
        <div
          aria-hidden="true"
          className="
            h-9
            w-9
            animate-spin
            rounded-full
            border-2
            border-white/10
            border-r-violet-400
            border-t-cyan-300
            shadow-[0_0_20px_rgba(34,211,238,0.14)]
            motion-reduce:animate-none
          "
        />

        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.3em]
            text-slate-500
          "
        >
          Loading Intelligence
        </span>
      </div>
    </div>
  );
}

function LazySection({
  children,
  minHeight,
}: LazySectionProps) {
  return (
    <Suspense
      fallback={
        <SectionLoader
          minHeight={minHeight}
        />
      }
    >
      {children}
    </Suspense>
  );
}

export default function Home() {
  return (
    <main
      id="home"
      className="
        relative
        min-h-screen
        overflow-x-clip
        bg-[#020617]
        text-white
      "
    >
      <SpaceBackground />

      <div
        className="
          relative
          z-10
        "
      >
        <Navbar />

        <Hero />

        <LazySection minHeight="min-h-[520px]">
          <Features />
        </LazySection>

        <LazySection minHeight="min-h-[620px]">
          <Performance />
        </LazySection>

        <LazySection minHeight="min-h-[560px]">
          <Extension />
        </LazySection>

        <LazySection minHeight="min-h-[650px]">
          <Pricing />
        </LazySection>

        <LazySection minHeight="min-h-[580px]">
          <About />
        </LazySection>

        <LazySection minHeight="min-h-[420px]">
          <FAQ />
        </LazySection>

        <LazySection minHeight="min-h-[520px]">
          <Footer />
        </LazySection>
      </div>
    </main>
  );
}