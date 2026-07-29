import { motion } from "framer-motion";
import {
  Activity,
  TrendingUp,
  Brain,
  ShieldCheck
} from "lucide-react";


const stats = [
{
title:"AI Accuracy",
value:"98.4%",
icon:Brain
},
{
title:"Win Rate",
value:"97.2%",
icon:TrendingUp
},
{
title:"AI Trades",
value:"12,847",
icon:Activity
},
{
title:"Risk Control",
value:"99%",
icon:ShieldCheck
},
];


const chart=[
35,55,42,75,60,90,72,95,80,110
];



export default function AIDashboard(){

return(

<section

className="
relative
px-5
py-28
md:px-6
md:py-32
"

>


<div

className="
absolute
left-1/2
top-20
h-72
w-72
-translate-x-1/2
rounded-full
bg-cyan-400/10
blur-[120px]
md:h-[500px]
md:w-[500px]
md:blur-[160px]
"

/>






<div

className="
relative
mx-auto
max-w-7xl
"

>




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
text-center
text-4xl
font-black
text-white
sm:text-5xl
"

>

AI Trading Intelligence

</motion.h2>






<p

className="
mx-auto
mt-5
max-w-xl
text-center
text-sm
text-slate-400
sm:text-base
"

>

Real-time AI market analysis and autonomous trading intelligence.

</p>








<motion.div

initial={{
opacity:0,
y:50,
scale:.96
}}

whileInView={{
opacity:1,
y:0,
scale:1
}}

viewport={{
once:true
}}

transition={{
duration:1
}}

className="
relative
mt-12
overflow-hidden
rounded-[35px]
border
border-white/10
bg-white/[0.06]
p-5
backdrop-blur-3xl
shadow-[0_0_90px_rgba(34,211,238,.15)]
md:mt-16
md:rounded-[45px]
md:p-8
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

duration:8,
repeat:Infinity,
ease:"linear"

}}

className="
absolute
top-0
h-full
w-1/3
bg-gradient-to-r
from-transparent
via-cyan-300/10
to-transparent
skew-x-12
"

/>








<div

className="
relative
z-10
flex
flex-col
gap-5
sm:flex-row
sm:items-center
sm:justify-between
"

>


<div>

<p

className="
text-sm
text-slate-400
"

>

Portfolio Balance

</p>


<h3

className="
mt-2
text-4xl
font-black
text-white
sm:text-5xl
"

>

$124,580

</h3>


</div>







<div

className="
flex
w-fit
items-center
gap-3
rounded-full
border
border-emerald-400/30
bg-emerald-400/10
px-5
py-3
text-sm
text-emerald-300
"

>

<span

className="
h-2
w-2
rounded-full
bg-emerald-400
animate-pulse
"

/>

AI ACTIVE

</div>




</div>









{/* CHART */}



<div

className="
relative
mt-8
h-52
overflow-hidden
rounded-3xl
border
border-white/10
bg-black/30
p-4
sm:h-64
md:mt-10
md:h-72
md:p-6
"

>


<div

className="
absolute
inset-0
bg-gradient-to-b
from-cyan-400/10
to-transparent
"

/>





<div

className="
relative
flex
h-full
items-end
gap-2
sm:gap-3
"

>


{

chart.map((value,index)=>(


<motion.div

key={index}

initial={{
height:0
}}

whileInView={{
height:`${value}%`
}}

transition={{

delay:index*.08,
duration:.8

}}

className="
relative
flex-1
rounded-t-xl
bg-gradient-to-t
from-cyan-400
via-blue-500
to-violet-500
"

>


<motion.span

animate={{

scale:[
1,
1.5,
1
]

}}

transition={{

duration:2,
repeat:Infinity

}}

className="
absolute
right-0
top-0
h-2
w-2
rounded-full
bg-white
shadow-[0_0_20px_white]
"

/>


</motion.div>


))

}


</div>


</div>








{/* STATS */}



<div

className="
mt-6
grid
grid-cols-1
gap-4
sm:grid-cols-2
lg:grid-cols-4
"

>


{

stats.map((item)=>(


<motion.div

key={item.title}

whileHover={{

y:-8,
scale:1.02

}}

className="
rounded-3xl
border
border-white/10
bg-black/30
p-5
shadow-[0_20px_50px_rgba(0,0,0,.25)]
"

>


<div

className="
flex
h-12
w-12
items-center
justify-center
rounded-2xl
bg-cyan-400/10
"

>

<item.icon

size={25}

className="
text-cyan-300
"

/>


</div>





<p

className="
mt-5
text-sm
text-slate-400
"

>

{item.title}

</p>




<h4

className="
mt-2
text-2xl
font-black
text-white
sm:text-3xl
"

>

{item.value}

</h4>





</motion.div>


))


}


</div>






</motion.div>





</div>


</section>

)

}