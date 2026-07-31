import { useMemo } from "react";
import { motion } from "framer-motion";


export default function SpaceBackground(){



  const stars = useMemo(()=>{

    return Array.from({
      length:60
    }).map(()=>({

      x:Math.random()*100,

      y:Math.random()*100,

      size:
        Math.random()>0.9
        ? 2
        : 1,

      duration:
        4 + Math.random()*5,

      delay:
        Math.random()*4

    }));

  },[]);





  const dust = useMemo(()=>{

    return Array.from({
      length:25
    }).map(()=>({

      x:Math.random()*100,

      y:Math.random()*100

    }));

  },[]);






  return (

    <div

      className="
      absolute
      inset-0
      -z-0
      overflow-hidden
      pointer-events-none
      "

    >



      <div

        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-[#01030b]
        via-[#020617]
        to-black
        "

      />







      {/* CYAN NEBULA */}


      <motion.div

        animate={{

          x:[
            -40,
            40,
            -40
          ],

          scale:[
            1,
            1.08,
            1
          ]

        }}


        transition={{

          duration:45,

          repeat:Infinity,

          ease:"easeInOut"

        }}


        className="
        absolute
        left-[-180px]
        top-[-100px]
        h-[500px]
        w-[500px]
        rounded-full
        bg-cyan-500/10
        blur-[120px]
        "

      />







      {/* VIOLET NEBULA */}


      <motion.div


        animate={{

          x:[
            40,
            -40,
            40
          ],

          scale:[
            1,
            1.1,
            1
          ]

        }}


        transition={{

          duration:50,

          repeat:Infinity,

          ease:"easeInOut"

        }}



        className="
        absolute
        right-[-180px]
        bottom-[-100px]
        h-[550px]
        w-[550px]
        rounded-full
        bg-violet-600/10
        blur-[130px]
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







      {/* DUST */}


      {
        dust.map((item,index)=>(


          <motion.span


            key={index}


            animate={{

              opacity:[
                .1,
                .5,
                .1
              ]

            }}


            transition={{

              duration:
                4 + index % 3,

              repeat:Infinity

            }}



            style={{

              left:`${item.x}%`,

              top:`${item.y}%`

            }}



            className="
            absolute
            h-px
            w-px
            rounded-full
            bg-cyan-200
            "

          />


        ))
      }








      {/* AI CORE */}


      <motion.div


        animate={{

          scale:[
            1,
            1.1,
            1
          ],

          opacity:[
            .2,
            .45,
            .2
          ]

        }}


        transition={{

          duration:15,

          repeat:Infinity,

          ease:"easeInOut"

        }}



        className="
        absolute
        left-1/2
        top-[35%]
        h-[360px]
        w-[360px]
        -translate-x-1/2
        rounded-full
        bg-cyan-400/10
        blur-[100px]
        "

      />







      {/* CINEMA VIGNETTE */}


      <div

        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,transparent_25%,#01030b_90%)]
        "

      />


    </div>

  );

}