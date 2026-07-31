import { useMemo } from "react";
import { motion } from "framer-motion";

import spaceBg from "../../assets/backgrounds/space-bg.webp";



export default function HeroBackground(){


  const stars = useMemo(()=>{

    return Array.from({
      length:35
    }).map(()=>({

      x:Math.random()*100,

      y:Math.random()*100,

      size:
        Math.random()>0.85
        ? 2
        : 1,

      duration:
        5 + Math.random()*5,

      delay:
        Math.random()*4

    }));

  },[]);





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


        initial={{
          opacity:0,
          scale:1.05
        }}


        animate={{
          opacity:1,
          scale:1
        }}


        transition={{
          duration:1.8,
          ease:"easeOut"
        }}


        className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        brightness-[0.3]
        contrast-[1.15]
        saturate-[1.2]
        "
      />







      <div

        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-[#01030b]/50
        via-[#020617]/80
        to-[#01030b]
        "

      />







      {/* AI CORE */}


      <motion.div

        animate={{

          scale:[
            1,
            1.08,
            1
          ],

          opacity:[
            .25,
            .45,
            .25
          ]

        }}


        transition={{

          duration:12,

          repeat:Infinity,

          ease:"easeInOut"

        }}


        className="
        absolute
        left-1/2
        top-[42%]
        h-[380px]
        w-[380px]
        -translate-x-1/2
        rounded-full
        bg-cyan-400/20
        blur-[90px]
        "

      />







      {/* VIOLET NEBULA */}


      <motion.div

        animate={{

          x:[
            -40,
            40,
            -40
          ]

        }}


        transition={{

          duration:35,

          repeat:Infinity,

          ease:"easeInOut"

        }}


        className="
        absolute
        left-[-120px]
        top-20
        h-[350px]
        w-[350px]
        rounded-full
        bg-violet-600/20
        blur-[100px]
        "

      />







      {/* PURPLE LIGHT */}


      <motion.div

        animate={{

          scale:[
            1,
            1.08,
            1
          ],

          opacity:[
            .15,
            .35,
            .15
          ]

        }}


        transition={{

          duration:15,

          repeat:Infinity

        }}


        className="
        absolute
        right-[-120px]
        bottom-10
        h-[330px]
        w-[330px]
        rounded-full
        bg-purple-500/20
        blur-[100px]
        "

      />








      {/* STARS */}


      {
        stars.map((star,index)=>(

          <motion.span

            key={index}


            animate={{

              opacity:[
                .2,
                .8,
                .2
              ],

              scale:[
                1,
                1.3,
                1
              ]

            }}


            transition={{

              duration:star.duration,

              delay:star.delay,

              repeat:Infinity

            }}


            style={{

              left:`${star.x}%`,

              top:`${star.y}%`,

              width:`${star.size}px`,

              height:`${star.size}px`

            }}


            className="
            absolute
            rounded-full
            bg-white
            "

          />


        ))
      }








      {/* ENERGY BEAM */}


      <motion.div

        animate={{

          x:[
            "-40%",
            "140%"
          ],

          opacity:[
            0,
            1,
            0
          ]

        }}


        transition={{

          duration:14,

          repeat:Infinity,

          ease:"easeInOut"

        }}


        className="
        absolute
        top-[35%]
        h-[2px]
        w-72
        rotate-12
        bg-gradient-to-r
        from-transparent
        via-cyan-300
        to-transparent
        "

      />







      <div

        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,transparent_20%,#01030b_100%)]
        "

      />



    </div>

  );

}