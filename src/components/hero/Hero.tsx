import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import HeroBackground from "./HeroBackground";
import HeroButtons from "./HeroButtons";

import logo from "../../assets/logo/quantnova-logo.webp";




export default function Hero(){


  const {t}=useTranslation();




  return (

    <section

      id="hero"

      className="
      relative
      flex
      min-h-[850px]
      items-center
      justify-center
      overflow-hidden
      pt-28
      lg:min-h-screen
      "

    >



      <HeroBackground />






      <div

        className="
        relative
        z-20
        flex
        flex-col
        items-center
        px-6
        text-center
        "

      >






        {/* LOGO CORE */}


        <motion.div

          initial={{

            opacity:0,

            scale:.8

          }}


          animate={{

            opacity:1,

            scale:1

          }}


          transition={{

            duration:.8

          }}


          className="
          relative
          flex
          items-center
          justify-center
          "

        >




          {/* DESKTOP RINGS */}


          <div

            className="
            absolute
            hidden
            h-[340px]
            w-[340px]
            rounded-full
            border
            border-cyan-400/20
            lg:block
            "

          />



          <div

            className="
            absolute
            hidden
            h-[290px]
            w-[290px]
            rounded-full
            border
            border-violet-500/20
            lg:block
            "

          />






          {/* GLOW */}


          <div

            className="
            absolute
            h-72
            w-72
            rounded-full
            bg-cyan-400/20
            blur-[70px]
            "

          />







          <motion.img


            src={logo}


            alt="QuantNova AI"


            animate={{

              y:[
                0,
                -8,
                0
              ]

            }}


            transition={{

              duration:5,

              repeat:Infinity,

              ease:"easeInOut"

            }}



            className="
            relative
            h-52
            w-52
            object-contain
            drop-shadow-[0_0_50px_rgba(34,211,238,.7)]
            sm:h-60
            sm:w-60
            lg:h-64
            lg:w-64
            "

          />




        </motion.div>








        <motion.h1


          initial={{

            opacity:0,

            y:25

          }}



          animate={{

            opacity:1,

            y:0

          }}



          transition={{

            delay:.3

          }}



          className="
          mt-10
          bg-gradient-to-r
          from-white
          via-cyan-300
          to-violet-500
          bg-clip-text
          text-5xl
          font-black
          text-transparent
          sm:text-6xl
          lg:text-7xl
          "

        >

          {t("hero.title")}


        </motion.h1>







        <motion.p


          initial={{

            opacity:0

          }}


          animate={{

            opacity:1

          }}


          transition={{

            delay:.5

          }}



          className="
          mt-4
          text-sm
          tracking-[0.5em]
          text-cyan-300
          "

        >

          {t("hero.creator","BY SHAYAN")}


        </motion.p>








        <motion.p


          initial={{

            opacity:0,

            y:15

          }}


          animate={{

            opacity:1,

            y:0

          }}



          transition={{

            delay:.7

          }}



          className="
          mt-6
          max-w-xl
          text-base
          leading-8
          text-slate-300
          md:text-lg
          "

        >

          {t("hero.subtitle")}


        </motion.p>









        <motion.div


          initial={{

            opacity:0,

            y:15

          }}


          animate={{

            opacity:1,

            y:0

          }}



          transition={{

            delay:1

          }}



          className="
          mt-8
          "

        >

          <HeroButtons />


        </motion.div>





      </div>



    </section>

  );

}