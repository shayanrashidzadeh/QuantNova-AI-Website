import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  TrendingUp,
  Zap,
  ShieldCheck,
} from "lucide-react";


const stats = [
  {
    title: "Balance",
    value: "$124,580",
    icon: Activity,
  },
  {
    title: "Win Rate",
    value: "97.4%",
    icon: TrendingUp,
  },
  {
    title: "AI Score",
    value: "98",
    icon: Brain,
  },
];


export default function DashboardMockup() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.9,
      }}

      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}

      transition={{
        duration: 1,
        ease: "easeOut",
      }}

      whileHover={{
        rotateX: -4,
        rotateY: 4,
        scale: 1.02,
      }}

      style={{
        transformStyle: "preserve-3d",
      }}

      className="
      relative
      w-full
      max-w-[650px]
      perspective-1000
      "
    >

      {/* Ambient Lights */}

      <div
        className="
        absolute
        -left-32
        top-20
        h-72
        w-72
        rounded-full
        bg-cyan-400/20
        blur-[120px]
        "
      />

      <div
        className="
        absolute
        -right-32
        bottom-10
        h-72
        w-72
        rounded-full
        bg-violet-500/20
        blur-[120px]
        "
      />


      {/* Main Glass Panel */}

      <div
        className="
        relative
        overflow-hidden
        rounded-[42px]
        border
        border-white/10
        bg-white/[0.06]
        backdrop-blur-3xl
        shadow-[0_50px_150px_rgba(0,0,0,0.65)]
        "
      >

        {/* Glass Reflection */}

        <div
          className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white/20
          via-transparent
          to-transparent
          opacity-40
          "
        />


        {/* Animated Border Glow */}

        <motion.div

          animate={{
            opacity:[0.3,0.8,0.3],
          }}

          transition={{
            duration:3,
            repeat:Infinity,
          }}

          className="
          pointer-events-none
          absolute
          inset-0
          rounded-[42px]
          border
          border-cyan-400/20
          "
        />


        {/* Header */}

        <div
          className="
          relative
          z-10
          flex
          items-center
          justify-between
          border-b
          border-white/10
          px-8
          py-6
          "
        >

          <div>

            <div className="flex items-center gap-3">

              <div
                className="
                h-3
                w-3
                rounded-full
                bg-emerald-400
                shadow-[0_0_20px_#34d399]
                "
              />

              <span
                className="
                text-sm
                font-semibold
                tracking-widest
                text-emerald-300
                "
              >
                LIVE AI ENGINE
              </span>

            </div>


            <h3
              className="
              mt-3
              text-3xl
              font-black
              text-white
              "
            >
              QuantNova AI
            </h3>


          </div>


          <div
            className="
            rounded-2xl
            bg-cyan-400/10
            p-4
            "
          >

            <Zap
              className="
              text-cyan-300
              "
            />

          </div>


        </div>        {/* Stats */}

        <div
          className="
          relative
          z-10
          grid
          grid-cols-3
          gap-4
          p-8
          "
        >

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div

                key={item.title}

                initial={{
                  opacity:0,
                  y:20,
                }}

                animate={{
                  opacity:1,
                  y:0,
                }}

                transition={{
                  delay:index * .15,
                }}

                whileHover={{
                  y:-8,
                  scale:1.04,
                }}

                className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-5
                backdrop-blur-xl
                "
              >

                <div
                  className="
                  mb-5
                  flex
                  items-center
                  justify-between
                  "
                >

                  <span
                    className="
                    text-xs
                    uppercase
                    tracking-wider
                    text-slate-400
                    "
                  >
                    {item.title}
                  </span>


                  <div
                    className="
                    rounded-2xl
                    bg-cyan-400/10
                    p-3
                    "
                  >

                    <Icon
                      size={20}
                      className="
                      text-cyan-300
                      "
                    />

                  </div>

                </div>


                <h3
                  className="
                  text-3xl
                  font-black
                  text-white
                  "
                >
                  {item.value}
                </h3>


                <div
                  className="
                  mt-4
                  h-1
                  overflow-hidden
                  rounded-full
                  bg-white/10
                  "
                >

                  <motion.div

                    initial={{
                      width:0,
                    }}

                    animate={{
                      width:
                        index === 0
                        ? "88%"
                        : index === 1
                        ? "97%"
                        : "98%",
                    }}

                    transition={{
                      duration:1.5,
                      delay:.4,
                    }}

                    className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    to-violet-500
                    "

                  />

                </div>


              </motion.div>

            );

          })}

        </div>



        {/* Main Chart Container */}

        <div
          className="
          relative
          z-10
          px-8
          pb-8
          "
        >

          <div
            className="
            relative
            overflow-hidden
            rounded-[34px]
            border
            border-white/10
            bg-[#050b16]/80
            p-6
            "
          >

            {/* Chart Header */}

            <div
              className="
              mb-6
              flex
              items-center
              justify-between
              "
            >

              <div>

                <p
                  className="
                  text-sm
                  text-slate-400
                  "
                >
                  BTC / USDT
                </p>


                <h3
                  className="
                  mt-2
                  text-4xl
                  font-black
                  text-white
                  "
                >
                  $124,847
                </h3>


                <span
                  className="
                  text-sm
                  font-bold
                  text-emerald-400
                  "
                >
                  +8.42% Today
                </span>

              </div>


              <div
                className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-400/20
                bg-emerald-400/10
                px-4
                py-2
                "
              >

                <div
                  className="
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                  "
                />


                <span
                  className="
                  text-xs
                  font-bold
                  text-emerald-300
                  "
                >
                  MARKET LIVE
                </span>


              </div>


            </div>            {/* Chart Area */}

            <div
              className="
              relative
              h-[260px]
              overflow-hidden
              rounded-3xl
              "
            >

              {/* Grid Background */}

              <div
                className="
                absolute
                inset-0
                bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]
                bg-[size:42px_42px]
                "
              />


              {/* Chart Glow */}

              <div
                className="
                absolute
                left-1/2
                top-1/2
                h-40
                w-40
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-400/20
                blur-[90px]
                "
              />


              <svg
                viewBox="0 0 700 260"
                className="
                absolute
                inset-0
                h-full
                w-full
                "
              >

                <defs>

                  <linearGradient
                    id="quantLine"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >

                    <stop
                      offset="0%"
                      stopColor="#22d3ee"
                    />

                    <stop
                      offset="50%"
                      stopColor="#38bdf8"
                    />

                    <stop
                      offset="100%"
                      stopColor="#8b5cf6"
                    />

                  </linearGradient>


                  <linearGradient
                    id="areaGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="0%"
                      stopColor="rgba(34,211,238,.35)"
                    />

                    <stop
                      offset="100%"
                      stopColor="rgba(139,92,246,0)"
                    />

                  </linearGradient>


                  <filter id="chartGlow">

                    <feGaussianBlur
                      stdDeviation="5"
                      result="blur"
                    />

                    <feMerge>

                      <feMergeNode in="blur" />

                      <feMergeNode in="SourceGraphic" />

                    </feMerge>

                  </filter>

                </defs>



                {/* Area */}

                <motion.path

                  initial={{
                    opacity:0,
                  }}

                  animate={{
                    opacity:1,
                  }}

                  transition={{
                    duration:2,
                  }}

                  d="
                  M0 210
                  C70 190 90 160 150 175
                  C210 190 240 120 300 140
                  C360 160 400 70 460 95
                  C520 120 580 45 700 30
                  L700 260
                  L0 260
                  Z
                  "

                  fill="url(#areaGradient)"

                />



                {/* Main AI Prediction Line */}

                <motion.path

                  initial={{
                    pathLength:0,
                  }}

                  animate={{
                    pathLength:1,
                  }}

                  transition={{
                    duration:2.5,
                    ease:"easeInOut",
                  }}

                  d="
                  M0 210
                  C70 190 90 160 150 175
                  C210 190 240 120 300 140
                  C360 160 400 70 460 95
                  C520 120 580 45 700 30
                  "

                  fill="none"

                  stroke="url(#quantLine)"

                  strokeWidth="5"

                  strokeLinecap="round"

                  filter="url(#chartGlow)"

                />



                {/* AI Target Point */}

                <motion.circle

                  cx="700"

                  cy="30"

                  r="8"

                  fill="#22d3ee"

                  animate={{

                    r:[8,14,8],

                    opacity:[.7,1,.7],

                  }}

                  transition={{

                    duration:2,

                    repeat:Infinity,

                  }}

                />


              </svg>



              {/* Floating Prediction */}

              <motion.div

                animate={{

                  y:[0,-8,0],

                }}

                transition={{

                  duration:3,

                  repeat:Infinity,

                }}

                className="
                absolute
                right-6
                top-6
                rounded-2xl
                border
                border-cyan-400/20
                bg-cyan-400/10
                px-4
                py-3
                backdrop-blur-xl
                "

              >

                <p
                  className="
                  text-xs
                  text-slate-400
                  "
                >
                  AI Forecast
                </p>


                <p
                  className="
                  mt-1
                  text-xl
                  font-black
                  text-cyan-300
                  "
                >
                  Bullish ↑
                </p>


              </motion.div>


            </div>            {/* Bottom Intelligence */}

            <div
              className="
              mt-6
              grid
              grid-cols-2
              gap-5
              "
            >


              {/* AI Signal Card */}

              <motion.div

                whileHover={{
                  y:-6,
                }}

                className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-6
                backdrop-blur-xl
                "

              >

                <div
                  className="
                  flex
                  items-center
                  gap-3
                  "
                >

                  <div
                    className="
                    rounded-2xl
                    bg-cyan-400/10
                    p-3
                    "
                  >

                    <Brain
                      size={22}
                      className="
                      text-cyan-300
                      "
                    />

                  </div>


                  <div>

                    <p
                      className="
                      text-xs
                      text-slate-400
                      "
                    >
                      AI Decision
                    </p>

                    <h4
                      className="
                      text-lg
                      font-bold
                      text-white
                      "
                    >
                      Smart Signal
                    </h4>

                  </div>

                </div>



                <div
                  className="
                  mt-6
                  flex
                  items-center
                  justify-between
                  "
                >

                  <span
                    className="
                    text-3xl
                    font-black
                    text-emerald-400
                    "
                  >
                    BUY
                  </span>


                  <div
                    className="
                    rounded-full
                    bg-emerald-400/10
                    px-4
                    py-2
                    "
                  >

                    <span
                      className="
                      text-sm
                      font-bold
                      text-emerald-300
                      "
                    >
                      98%
                    </span>

                  </div>


                </div>


                <p
                  className="
                  mt-4
                  text-sm
                  leading-6
                  text-slate-400
                  "
                >
                  Institutional accumulation detected.
                  Strong momentum continuation pattern.
                </p>


              </motion.div>





              {/* Market Intelligence Card */}


              <motion.div

                whileHover={{
                  y:-6,
                }}

                className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-6
                backdrop-blur-xl
                "

              >

                <div
                  className="
                  flex
                  items-center
                  gap-3
                  "
                >

                  <div
                    className="
                    rounded-2xl
                    bg-violet-400/10
                    p-3
                    "
                  >

                    <ShieldCheck
                      size={22}
                      className="
                      text-violet-300
                      "
                    />

                  </div>


                  <div>

                    <p
                      className="
                      text-xs
                      text-slate-400
                      "
                    >
                      Risk Engine
                    </p>


                    <h4
                      className="
                      text-lg
                      font-bold
                      text-white
                      "
                    >
                      Protected
                    </h4>

                  </div>


                </div>



                <div
                  className="
                  mt-6
                  flex
                  items-center
                  justify-between
                  "
                >

                  <span
                    className="
                    text-3xl
                    font-black
                    text-cyan-300
                    "
                  >
                    LOW
                  </span>


                  <ShieldCheck
                    size={34}
                    className="
                    text-cyan-300
                    "
                  />

                </div>


                <p
                  className="
                  mt-4
                  text-sm
                  leading-6
                  text-slate-400
                  "
                >
                  Dynamic risk management enabled.
                  Real-time volatility protection active.
                </p>


              </motion.div>


            </div>            {/* Bottom Market Pulse */}

            <div
              className="
              mt-5
              flex
              items-center
              justify-between
              rounded-3xl
              border
              border-white/10
              bg-gradient-to-r
              from-cyan-400/10
              via-transparent
              to-violet-500/10
              px-6
              py-5
              "
            >

              <div
                className="
                flex
                items-center
                gap-4
                "
              >

                <motion.div

                  animate={{
                    scale:[1,1.15,1],
                    opacity:[.7,1,.7],
                  }}

                  transition={{
                    duration:2,
                    repeat:Infinity,
                  }}

                  className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-emerald-400/10
                  "
                >

                  <Activity
                    className="
                    text-emerald-400
                    "
                  />

                </motion.div>


                <div>

                  <p
                    className="
                    text-xs
                    uppercase
                    tracking-widest
                    text-slate-400
                    "
                  >
                    Market Status
                  </p>


                  <h4
                    className="
                    mt-1
                    text-lg
                    font-bold
                    text-white
                    "
                  >
                    Institutional Flow Detected
                  </h4>


                </div>

              </div>



              <div
                className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-400/20
                bg-emerald-400/10
                px-5
                py-2
                "
              >

                <span
                  className="
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                  "
                />

                <span
                  className="
                  text-sm
                  font-bold
                  text-emerald-300
                  "
                >
                  ACTIVE
                </span>

              </div>


            </div>


          </div>


          {/* Reflection Overlay */}

          <div
            className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-40
            bg-gradient-to-b
            from-white/10
            to-transparent
            opacity-30
            "
          />


        </div>


               {/* External Floating AI Badge */}

        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          absolute
          -right-10
          top-24
          hidden
          rounded-3xl
          border
          border-cyan-400/20
          bg-[#07111d]/80
          px-5
          py-4
          backdrop-blur-xl
          lg:block
          "
        >

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-cyan-400/10 p-2">

              <Brain
                size={20}
                className="text-cyan-300"
              />

            </div>


            <div>

              <p className="text-xs text-slate-400">
                AI Engine
              </p>

              <p className="font-bold text-white">
                Optimized
              </p>

            </div>

          </div>

        </motion.div>


      </div>

    </motion.div>

  );
}