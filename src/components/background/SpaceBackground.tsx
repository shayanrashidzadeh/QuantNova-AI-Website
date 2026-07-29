import { useMemo } from "react";
import { motion } from "framer-motion";








export default function SpaceBackground(){





const stars = useMemo(()=>{


return Array.from({

length:80

}).map(()=>({


x:Math.random()*100,


y:Math.random()*100,


size:Math.random()>0.9 ? 2 : 1,


duration:4+Math.random()*6,


delay:Math.random()*5


}));


},[]);







const dust = useMemo(()=>{


return Array.from({

length:35

}).map(()=>({


x:Math.random()*100,


y:Math.random()*100


}));


},[]);









return(


<div


className="
absolute
inset-0
overflow-hidden
pointer-events-none
z-0
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

-50,

50,

-50

],


scale:[

1,

1.1,

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
left-[-200px]
top-[-100px]
h-[600px]
w-[600px]
rounded-full
bg-cyan-500/10
blur-[140px]
will-change-transform
"


/>









{/* VIOLET NEBULA */}


<motion.div


animate={{


x:[

60,

-60,

60

],


scale:[

1,

1.12,

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
right-[-200px]
bottom-[-100px]
h-[650px]
w-[650px]
rounded-full
bg-violet-600/10
blur-[150px]
will-change-transform
"


/>









{/* STARS */}



{


stars.map((star,index)=>(


<motion.span


key={index}


animate={{


opacity:[

.25,

.9,

.25

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


left:`${star.x}%`,

top:`${star.y}%`,

width:`${star.size}px`,

height:`${star.size}px`


}}



className="
absolute
rounded-full
bg-white
shadow-[0_0_10px_rgba(255,255,255,.8)]
"


/>


))


}









{/* ENERGY DUST */}



{


dust.map((item,index)=>(


<motion.span


key={index}


animate={{


opacity:[

.15,

.6,

.15

]


}}



transition={{


duration:5+index%4,

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

1.15,

1

],


opacity:[

.2,

.5,

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
h-[420px]
w-[420px]
-translate-x-1/2
rounded-full
bg-cyan-400/10
blur-[120px]
will-change-transform
"


/>









{/* FINAL CINEMA */}



<div


className="
absolute
inset-0
bg-[radial-gradient(circle_at_center,transparent_25%,#01030b_90%)]
"


/>








</div>


)

}