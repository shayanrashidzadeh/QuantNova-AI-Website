import { useMemo } from "react";

import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";


import HeroBackground from "./HeroBackground";

import HeroButtons from "./HeroButtons";


import logo from "../../assets/logo/quantnova-logo.webp";









export default function Hero(){


const {t}=useTranslation();








const stars = useMemo(()=>{


return Array.from({

length:80

}).map(()=>({


x:Math.random()*100,


y:Math.random()*100,


duration:4+Math.random()*5,


delay:Math.random()*5


}));


},[]);









return(


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
absolute
inset-0
z-0
pointer-events-none
"


>


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

1.5,

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

top:`${star.y}%`


}}



className="
absolute
h-[2px]
w-[2px]
rounded-full
bg-white
"


/>


))


}



</div>












<motion.div


animate={{


x:[

"-20%",

"120%"

],


opacity:[

0,

1,

0

]


}}



transition={{


duration:4,

repeat:Infinity,

repeatDelay:8


}}



className="
absolute
left-0
top-32
z-10
h-[2px]
w-60
rotate-45
bg-gradient-to-r
from-transparent
via-cyan-300
to-transparent
"


/>















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









<motion.div


initial={{


opacity:0,

scale:.6


}}



animate={{


opacity:1,

scale:1


}}



transition={{


duration:1


}}



className="
relative
flex
items-center
justify-center
"


>








<motion.div


animate={{

rotate:360

}}



transition={{


duration:25,

repeat:Infinity,

ease:"linear"


}}



className="
absolute
h-[280px]
w-[280px]
rounded-full
border
border-cyan-400/30
md:h-[350px]
md:w-[350px]
"


/>









<motion.div


animate={{


rotate:-360


}}



transition={{


duration:35,

repeat:Infinity,

ease:"linear"


}}



className="
absolute
h-[240px]
w-[240px]
rounded-full
border
border-violet-500/30
md:h-[310px]
md:w-[310px]
"


/>









<motion.div


animate={{


scale:[

1,

1.15,

1

],


opacity:[

.3,

.6,

.3

]


}}



transition={{


duration:5,

repeat:Infinity


}}



className="
absolute
h-72
w-72
rounded-full
bg-cyan-400/20
blur-[110px]
md:h-96
md:w-96
"


/>









<motion.img


src={logo}


alt="QuantNova AI"



animate={{


y:[

0,

-12,

0

],


scale:[

1,

1.05,

1

]


}}



transition={{


duration:5,

repeat:Infinity,

ease:"easeInOut"


}}



className="
relative
h-56
w-56
object-contain
drop-shadow-[0_0_90px_rgba(34,211,238,.9)]
will-change-transform
md:h-64
md:w-64
"


/>









</motion.div>














<motion.h1


initial={{


opacity:0,

y:35


}}



animate={{


opacity:1,

y:0


}}



transition={{


delay:.5


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


animate={{


opacity:[

.5,

1,

.5

]


}}



transition={{


duration:3,

repeat:Infinity


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

y:20


}}



animate={{


opacity:1,

y:0


}}



transition={{


delay:1


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

y:20


}}



animate={{


opacity:1,

y:0


}}



transition={{


delay:1.4


}}



className="
mt-8
"


>


<HeroButtons />


</motion.div>









</div>








</section>


)

}