import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import logo from "../../assets/logo/quantnova-logo.webp";








export default function IntroLoader(){


const {t}=useTranslation();







const stars = useMemo(()=>{

return Array.from({

length:90

}).map(()=>({

x:Math.random()*100,
y:Math.random()*100,
size:Math.random()>0.9 ? 2 : 1,
duration:4+Math.random()*5,
delay:Math.random()*4

}));

},[]);









const particles = useMemo(()=>{

return Array.from({

length:32

}).map((_,i)=>({

angle:(i/32)*Math.PI*2,
distance:150+Math.random()*170

}));

},[]);









return(


<motion.div


initial={{

opacity:1

}}


exit={{

opacity:0,
scale:1.05

}}


transition={{

duration:1,
ease:"easeInOut"

}}



className="
fixed
inset-0
z-[99999]
flex
items-center
justify-center
overflow-hidden
bg-[#01030b]
"

>









<motion.div

animate={{

scale:[
1,
1.25,
1
],

opacity:[
.25,
.6,
.25
]

}}

transition={{

duration:10,
repeat:Infinity,
ease:"easeInOut"

}}

className="
absolute
h-[650px]
w-[650px]
rounded-full
bg-gradient-to-r
from-cyan-400/20
via-violet-600/25
to-transparent
blur-[150px]
"

/>










{

stars.map((star,index)=>(


<motion.span

key={index}

animate={{

opacity:[
.15,
.9,
.15
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
top:`${star.y}%`,
width:`${star.size}px`,
height:`${star.size}px`

}}

className="
absolute
rounded-full
bg-white
shadow-[0_0_12px_white]
"

/>


))


}









{

particles.map((p,index)=>(


<motion.span

key={index}

initial={{

x:0,
y:0,
opacity:0

}}

animate={{

x:Math.cos(p.angle)*p.distance,

y:Math.sin(p.angle)*p.distance,

opacity:[
0,
1,
0
]

}}

transition={{

duration:2.5,
delay:.8,
ease:"easeOut"

}}

className="
absolute
h-[3px]
w-[3px]
rounded-full
bg-cyan-300
shadow-[0_0_20px_rgba(34,211,238,1)]
"

/>


))


}









<motion.div

animate={{

rotate:360

}}

transition={{

duration:18,
repeat:Infinity,
ease:"linear"

}}

className="
absolute
h-72
w-72
rounded-full
border
border-cyan-400/40
"

/>








<motion.div

animate={{

rotate:-360

}}

transition={{

duration:25,
repeat:Infinity,
ease:"linear"

}}

className="
absolute
h-56
w-56
rounded-full
border
border-violet-500/40
"

/>










<motion.div

initial={{

scale:.2,
opacity:0

}}

animate={{

scale:[
.2,
1,
1.05,
1
],

opacity:1

}}

transition={{

duration:1.8,
ease:"easeOut"

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

scale:[
1,
1.15,
1
]

}}

transition={{

duration:4,
repeat:Infinity

}}

className="
absolute
h-52
w-52
rounded-full
bg-cyan-400/30
blur-[90px]
"

/>








<div

className="
relative
flex
h-40
w-40
items-center
justify-center
rounded-[40px]
border
border-white/20
bg-white/5
backdrop-blur-xl
shadow-[0_0_120px_rgba(34,211,238,.8)]
"

>


<img

src={logo}

alt="QuantNova AI"

className="
h-28
w-28
object-contain
"

/>


</div>






</motion.div>









<div

className="
absolute
mt-[390px]
text-center
"

>







<motion.h1

initial={{

opacity:0,
y:20

}}

animate={{

opacity:1,
y:0

}}

transition={{

delay:1.5

}}

className="
text-5xl
font-black
text-white
"

>

QuantNova AI

</motion.h1>










<motion.p

initial={{

opacity:0

}}

animate={{

opacity:1

}}

transition={{

delay:1.9

}}

className="
mt-4
tracking-[0.5em]
text-cyan-300
"

>

{t("hero.creator","BY SHAYAN")}

</motion.p>









<motion.p

animate={{

opacity:[

.4,
1,
.4

]

}}

transition={{

duration:2,
repeat:Infinity

}}

className="
mt-8
text-sm
text-slate-400
"

>

{t("system.ready","SYSTEM READY")}

</motion.p>








</div>






</motion.div>


)

}