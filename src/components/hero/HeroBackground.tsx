import { useMemo } from "react";
import { motion } from "framer-motion";

import spaceBg from "../../assets/backgrounds/space-bg.webp";








export default function HeroBackground(){





const stars = useMemo(()=>{


return Array.from({

length:70

}).map(()=>({


x:Math.random()*100,


y:Math.random()*100,


size:
Math.random()>0.9
?
2
:
1,


duration:
5+Math.random()*6,


delay:
Math.random()*5


}));


},[]);









return(


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

scale:1.08

}}



animate={{


opacity:1,

scale:1


}}



transition={{


duration:2.5,

ease:"easeOut"


}}



className="
absolute
inset-0
h-full
w-full
object-cover
brightness-[0.28]
contrast-[1.25]
saturate-[1.35]
will-change-transform
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

1.15,

1

],


opacity:[

.25,

.55,

.25

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
top-[42%]
h-[500px]
w-[500px]
-translate-x-1/2
rounded-full
bg-cyan-400/20
blur-[150px]
will-change-transform
"


/>












{/* VIOLET NEBULA */}



<motion.div


animate={{


x:[

-60,

60,

-60

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
top-20
h-[450px]
w-[450px]
rounded-full
bg-violet-600/20
blur-[160px]
will-change-transform
"


/>













{/* PURPLE LIGHT */}



<motion.div


animate={{


scale:[

1,

1.15,

1

],


opacity:[

.15,

.4,

.15

]


}}



transition={{


duration:18,

repeat:Infinity


}}



className="
absolute
right-[-160px]
bottom-10
h-[430px]
w-[430px]
rounded-full
bg-purple-500/20
blur-[160px]
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

.2,

.9,

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


left:`${star.x}%`,

top:`${star.y}%`,

width:`${star.size}px`,

height:`${star.size}px`


}}



className="
absolute
rounded-full
bg-white
shadow-[0_0_12px_rgba(255,255,255,.8)]
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


duration:12,

repeat:Infinity,

ease:"easeInOut"


}}



className="
absolute
top-[35%]
h-[2px]
w-80
rotate-12
bg-gradient-to-r
from-transparent
via-cyan-300
to-transparent
blur-[1px]
"


/>













{/* VIGNETTE */}



<div


className="
absolute
inset-0
bg-[radial-gradient(circle_at_center,transparent_20%,#01030b_100%)]
"


/>









</div>


)

}