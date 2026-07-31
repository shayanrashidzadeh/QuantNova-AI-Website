import { useMemo } from "react";


export default function SpaceBackground(){


  const stars = useMemo(()=>{

    return Array.from({
      length:45
    }).map(()=>({

      x:Math.random()*100,
      y:Math.random()*100,

      size:
        Math.random()>0.85
        ? 2
        : 1,

      delay:
        Math.random()*5

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






      {/* CYAN GLOW */}


      <div

        className="
        absolute
        -left-40
        -top-32
        h-[420px]
        w-[420px]
        rounded-full
        bg-cyan-400/10
        blur-[90px]
        "

      />







      {/* VIOLET GLOW */}


      <div

        className="
        absolute
        -right-40
        bottom-0
        h-[450px]
        w-[450px]
        rounded-full
        bg-violet-500/10
        blur-[100px]
        "

      />







      {/* STARS */}


      {
        stars.map((star,index)=>(


          <span

            key={index}


            style={{

              left:`${star.x}%`,

              top:`${star.y}%`,

              width:`${star.size}px`,

              height:`${star.size}px`,

              animationDelay:`${star.delay}s`

            }}


            className="
            absolute
            rounded-full
            bg-white
            opacity-50
            animate-pulse
            "

          />


        ))
      }







      {/* CENTER AI LIGHT */}


      <div

        className="
        absolute
        left-1/2
        top-[35%]
        h-[300px]
        w-[300px]
        -translate-x-1/2
        rounded-full
        bg-cyan-400/10
        blur-[80px]
        "

      />








      {/* CINEMA VIGNETTE */}


      <div

        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,transparent_20%,#01030b_90%)]
        "

      />


    </div>

  );

}