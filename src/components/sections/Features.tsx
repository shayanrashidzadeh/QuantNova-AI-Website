import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
  Brain,
  Zap,
  ShieldCheck,
  Activity
} from "lucide-react";






const icons = [

Brain,
Zap,
ShieldCheck,
Activity

];









export default function Features(){


const {t}=useTranslation();





const cards = t(
"features.cards",
{
returnObjects:true
}
) as {

title:string;
text:string;

}[];








return(


<section

id="features"

className="
relative
overflow-hidden
px-5
py-28
md:px-6
md:py-36
"

>









<motion.div

animate={{

scale:[
1,
1.2,
1
],

opacity:[
.2,
.5,
.2
]

}}

transition={{

duration:12,
repeat:Infinity

}}

className="
absolute
left-1/2
top-10
h-[600px]
w-[600px]
-translate-x-1/2
rounded-full
bg-cyan-400/10
blur-[180px]
"

/>









<div

className="
relative
mx-auto
max-w-7xl
text-center
"

>









<motion.p

initial={{

opacity:0,
y:20

}}

whileInView={{

opacity:1,
y:0

}}

viewport={{

once:true

}}

className="
text-sm
tracking-[0.5em]
text-cyan-300
"

>

{t("features.tag")}

</motion.p>









<motion.h2

initial={{

opacity:0,
y:30

}}

whileInView={{

opacity:1,
y:0

}}

viewport={{

once:true

}}

className="
mt-5
text-4xl
font-black
text-white
sm:text-5xl
lg:text-6xl
"

>

{t("features.title")}

</motion.h2>









<motion.p

initial={{

opacity:0,
y:20

}}

whileInView={{

opacity:1,
y:0

}}

viewport={{

once:true

}}

className="
mx-auto
mt-6
max-w-2xl
text-sm
leading-7
text-slate-400
sm:text-lg
"

>

{t("features.description")}

</motion.p>









<div

className="
mt-14
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
"

>







{

cards.map((item,index)=>{


const Icon = icons[index];



return(



<motion.div


key={item.title}



initial={{

opacity:0,
y:60

}}



whileInView={{

opacity:1,
y:0

}}



viewport={{

once:true

}}



transition={{

delay:index*.12,
duration:.7

}}



whileHover={{

y:-12,
scale:1.03

}}



className="
group
relative
overflow-hidden
rounded-[35px]
border
border-white/10
bg-white/[0.05]
p-7
text-left
backdrop-blur-3xl
shadow-[0_25px_70px_rgba(0,0,0,.35)]
"

>









<motion.div

animate={{

x:[
"-120%",
"220%"
]

}}

transition={{

duration:5,
repeat:Infinity,
delay:index

}}

className="
absolute
top-0
h-full
w-1/2
bg-gradient-to-r
from-transparent
via-white/10
to-transparent
skew-x-12
"

/>









<div

className="
absolute
inset-0
bg-gradient-to-br
from-cyan-400/10
via-transparent
to-violet-500/20
opacity-70
"

/>









<div

className="
relative
z-10
"

>









<div

className="
flex
h-16
w-16
items-center
justify-center
rounded-2xl
border
border-cyan-300/20
bg-gradient-to-br
from-cyan-400/20
to-violet-500/30
text-cyan-300
shadow-[0_0_45px_rgba(34,211,238,.35)]
"

>


<Icon size={28}/>


</div>









<h3

className="
mt-8
text-xl
font-black
text-white
md:text-2xl
"

>

{item.title}

</h3>









<p

className="
mt-4
text-sm
leading-7
text-slate-400
"

>

{item.text}

</p>









<div

className="
mt-8
h-[2px]
w-0
bg-gradient-to-r
from-cyan-400
to-violet-500
transition-all
duration-500
group-hover:w-full
"

/>









</div>







</motion.div>



)


})

}





</div>







</div>








</section>


)

}