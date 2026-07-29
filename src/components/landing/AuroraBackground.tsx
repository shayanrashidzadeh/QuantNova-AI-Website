import { ReactNode } from "react";
import { motion } from "framer-motion";


export default function AuroraBackground({
  children,
}: {
  children: ReactNode;
}) {


  const stars = Array.from({ length: 180 });


  const comets = [
    {
      top:"15%",
      left:"10%",
      delay:0,
    },
    {
      top:"28%",
      left:"70%",
      delay:3,
    },
    {
      top:"20%",
      left:"45%",
      delay:6,
    },
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


      {/* Deep Space */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(ellipse_at_center,#111827_0%,#020617_45%,#000000_100%)]
        "
      />




      {/* Soft Purple Nebula */}

      <motion.div

        animate={{
          x:[-80,80,-80],
          y:[-40,60,-40],
          scale:[1,1.15,1],
        }}

        transition={{
          duration:35,
          repeat:Infinity,
          ease:"easeInOut",
        }}

        className="
        absolute
        left-[-20%]
        top-[-15%]
        h-[900px]
        w-[900px]
        rounded-full
        bg-[radial-gradient(circle,rgba(124,58,237,.35)_0%,rgba(124,58,237,.12)_35%,transparent_70%)]
        "
      />




      {/* Soft Cyan Nebula */}

      <motion.div

        animate={{
          x:[80,-80,80],
          y:[60,-40,60],
          scale:[1,1.2,1],
        }}

        transition={{
          duration:40,
          repeat:Infinity,
          ease:"easeInOut",
        }}

        className="
        absolute
        right-[-20%]
        top-[20%]
        h-[850px]
        w-[850px]
        rounded-full
        bg-[radial-gradient(circle,rgba(6,182,212,.25)_0%,rgba(6,182,212,.08)_40%,transparent_75%)]
        "
      />





      {/* Galaxy Center */}

      <motion.div

        animate={{
          rotate:360,
        }}

        transition={{
          duration:120,
          repeat:Infinity,
          ease:"linear",
        }}

        className="
        absolute
        left-1/2
        top-[25%]
        h-[700px]
        w-[700px]
        -translate-x-1/2
        rounded-full
        bg-[conic-gradient(from_0deg,transparent,rgba(124,58,237,.25),transparent,rgba(34,211,238,.2),transparent)]
        opacity-50
        "
      />





      {/* Stars */}

      {stars.map((_,i)=>(

        <motion.div

          key={i}

          animate={{
            opacity:[
              .15,
              .8,
              .15,
            ],

            scale:[
              1,
              1.5,
              1,
            ],
          }}

          transition={{
            duration:
              2+Math.random()*5,
            repeat:Infinity,
            delay:
              Math.random()*5,
          }}

          style={{
            left:`${Math.random()*100}%`,
            top:`${Math.random()*80}%`,
          }}

          className="
          absolute
          h-[2px]
          w-[2px]
          rounded-full
          bg-white
          "
        />

      ))}






      {/* Comets */}

      {comets.map((item,index)=>(

        <motion.div

          key={index}

          initial={{
            x:-250,
            opacity:0,
          }}

          animate={{
            x:700,
            opacity:[
              0,
              1,
              0,
            ],
          }}

          transition={{
            duration:1.3,
            delay:item.delay,
            repeat:Infinity,
            repeatDelay:5,
            ease:"easeOut",
          }}

          style={{
            top:item.top,
            left:item.left,
          }}

          className="
          absolute
          h-[2px]
          w-60
          rotate-[-25deg]
          bg-gradient-to-r
          from-transparent
          via-white
          to-cyan-300
          shadow-[0_0_25px_rgba(34,211,238,.8)]
          "
        />

      ))}







      {/* Planet Horizon */}

      <div
        className="
        absolute
        left-1/2
        -bottom-[600px]
        h-[1200px]
        w-[1200px]
        -translate-x-1/2
        rounded-full
        bg-[radial-gradient(circle_at_top,rgba(34,211,238,.35),rgba(15,23,42,1)_35%,black_70%)]
        "
      />



      <motion.div

        animate={{
          opacity:[
            .2,
            .7,
            .2,
          ],
        }}

        transition={{
          duration:8,
          repeat:Infinity,
        }}

        className="
        absolute
        bottom-[160px]
        left-1/2
        h-20
        w-[700px]
        -translate-x-1/2
        rounded-full
        bg-cyan-300/20
        "
      />





      {/* Content */}

      <div
        className="
        relative
        z-10
        "
      >

        {children}

      </div>


    </div>

  );
}