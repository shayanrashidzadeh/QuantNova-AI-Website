import { ReactNode, useMemo } from "react";
import { motion } from "framer-motion";


export default function AuroraBackground({
  children,
}: {
  children: ReactNode;
}) {



  const stars = useMemo(()=>{

    return Array.from({
      length:90
    }).map(()=>({

      left:`${Math.random()*100}%`,

      top:`${Math.random()*90}%`,

      duration:
        3 + Math.random()*5,

      delay:
        Math.random()*5

    }));

  },[]);




  const comets = [
    {
      top:"15%",
      left:"10%",
      delay:0
    },
    {
      top:"30%",
      left:"70%",
      delay:4
    },
    {
      top:"20%",
      left:"45%",
      delay:8
    }
  ];






  return (

    <div

      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#01030a]
      "

    >



      {/* SPACE BASE */}

      <div

        className="
        pointer-events-none
        absolute
        inset-0
        bg-[radial-gradient(ellipse_at_center,#111827_0%,#020617_45%,#000000_100%)]
        "

      />







      {/* PURPLE NEBULA */}


      <motion.div

        animate={{

          x:[
            -60,
            60,
            -60
          ],

          y:[
            -30,
            40,
            -30
          ]

        }}


        transition={{

          duration:35,

          repeat:Infinity,

          ease:"easeInOut"

        }}


        className="
        pointer-events-none
        absolute
        left-[-20%]
        top-[-15%]
        h-[700px]
        w-[700px]
        rounded-full
        bg-[radial-gradient(circle,rgba(124,58,237,.32),transparent_70%)]
        blur-3xl
        "

      />







      {/* CYAN NEBULA */}


      <motion.div


        animate={{

          x:[
            60,
            -60,
            60
          ]

        }}


        transition={{

          duration:40,

          repeat:Infinity,

          ease:"easeInOut"

        }}


        className="
        pointer-events-none
        absolute
        right-[-20%]
        top-[20%]
        h-[650px]
        w-[650px]
        rounded-full
        bg-[radial-gradient(circle,rgba(6,182,212,.25),transparent_70%)]
        blur-3xl
        "

      />







      {/* GALAXY ROTATION */}


      <motion.div


        animate={{
          rotate:360
        }}


        transition={{

          duration:120,

          repeat:Infinity,

          ease:"linear"

        }}


        className="
        pointer-events-none
        absolute
        left-1/2
        top-[25%]
        h-[600px]
        w-[600px]
        -translate-x-1/2
        rounded-full
        bg-[conic-gradient(from_0deg,transparent,rgba(124,58,237,.22),transparent,rgba(34,211,238,.18),transparent)]
        opacity-40
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
                1.4,
                1
              ]

            }}


            transition={{

              duration:star.duration,

              delay:star.delay,

              repeat:Infinity

            }}


            style={{

              left:star.left,

              top:star.top

            }}


            className="
            pointer-events-none
            absolute
            h-[2px]
            w-[2px]
            rounded-full
            bg-white
            "

          />


        ))
      }








      {/* COMETS */}


      {
        comets.map((item,index)=>(


          <motion.div


            key={index}


            initial={{

              x:-250,

              opacity:0

            }}


            animate={{

              x:700,

              opacity:[
                0,
                1,
                0
              ]

            }}


            transition={{

              duration:1.5,

              delay:item.delay,

              repeat:Infinity,

              repeatDelay:7

            }}


            style={{

              top:item.top,

              left:item.left

            }}


            className="
            pointer-events-none
            absolute
            h-[2px]
            w-56
            rotate-[-25deg]
            bg-gradient-to-r
            from-transparent
            via-white
            to-cyan-300
            "

          />


        ))
      }








      {/* PLANET */}


      <div

        className="
        pointer-events-none
        absolute
        left-1/2
        -bottom-[600px]
        h-[1100px]
        w-[1100px]
        -translate-x-1/2
        rounded-full
        bg-[radial-gradient(circle_at_top,rgba(34,211,238,.25),#020617_40%,black_70%)]
        "

      />








      {/* LIGHT HORIZON */}


      <motion.div


        animate={{

          opacity:[
            .2,
            .6,
            .2
          ]

        }}


        transition={{

          duration:8,

          repeat:Infinity

        }}


        className="
        pointer-events-none
        absolute
        bottom-[160px]
        left-1/2
        h-20
        w-[600px]
        -translate-x-1/2
        rounded-full
        bg-cyan-300/20
        blur-2xl
        "

      />








      {/* PAGE CONTENT */}


      <div

        className="
        relative
        z-20
        "

      >

        {children}

      </div>




    </div>

  );

}