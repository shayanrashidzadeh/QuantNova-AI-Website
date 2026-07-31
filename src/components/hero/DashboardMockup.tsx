import { motion } from "framer-motion";
import {
  Activity,
  TrendingUp,
  Wallet,
  Target,
  Brain,
  ArrowUpRight,
} from "lucide-react";


const stats = [
  {
    title:"Balance",
    value:"$124,580",
    icon:Wallet,
  },
  {
    title:"PnL",
    value:"+12.48%",
    icon:TrendingUp,
  },
  {
    title:"Win Rate",
    value:"97%",
    icon:Target,
  },
  {
    title:"AI Score",
    value:"98",
    icon:Brain,
  },
];



export default function DashboardMockup(){


return (

<motion.div

initial={{
opacity:0,
y:25
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}


className="
relative
w-full
max-w-[520px]
"

>



<div

className="
overflow-hidden
rounded-[30px]
border
border-white/10
bg-white/[0.06]
shadow-[0_20px_60px_rgba(0,0,0,.35)]
"

>




{/* HEADER */}


<div

className="
flex
items-center
justify-between
border-b
border-white/10
px-6
py-5
"

>

<div>

<h3 className="
text-xl
font-black
text-white
">

Dashboard

</h3>


<p className="
text-sm
text-slate-400
">

AI Trading Overview

</p>


</div>



<div

className="
flex
items-center
gap-2
rounded-full
bg-emerald-500/10
px-3
py-2
"

>

<span className="
h-2
w-2
rounded-full
bg-emerald-400
"/>

<span className="
text-xs
font-bold
text-emerald-300
">

LIVE

</span>


</div>


</div>







{/* STATS */}


<div

className="
grid
grid-cols-2
gap-3
p-5
"

>


{
stats.map((item)=>{


const Icon=item.icon;


return (

<div

key={item.title}

className="
rounded-2xl
border
border-white/10
bg-white/[0.04]
p-4
"

>


<div className="
flex
justify-between
"

>


<div>

<p className="
text-xs
text-slate-400
">

{item.title}

</p>


<h3 className="
mt-2
text-2xl
font-black
text-white
">

{item.value}

</h3>


</div>



<div className="
rounded-xl
bg-cyan-400/20
p-3
">

<Icon
className="
h-5
w-5
text-cyan-300
"
/>


</div>


</div>


</div>


)


})
}



</div>







{/* CHART */}


<div className="
px-5
pb-5
">


<div className="
rounded-3xl
border
border-white/10
bg-[#07111d]
p-5
">


<div className="
mb-4
flex
justify-between
items-center
">


<div>

<h4 className="
font-bold
text-white
">

BTC / USDT

</h4>


<p className="
text-xs
text-slate-400
">

AI Smart Chart

</p>


</div>



<ArrowUpRight
className="
text-cyan-400
"
/>


</div>




<svg

viewBox="0 0 600 220"

className="
h-44
w-full
"

>


<path

d="
M0 170
C40 160 80 80 120 95
C160 110 180 50 240 60
C300 70 330 130 390 110
C430 95 480 40 520 55
C560 70 590 35 600 20
"

fill="none"

stroke="#22d3ee"

strokeWidth="5"

strokeLinecap="round"

/>


</svg>


</div>


</div>







{/* FOOTER */}


<div

className="
grid
grid-cols-2
gap-3
border-t
border-white/10
p-5
"

>


<div

className="
rounded-2xl
bg-white/[0.04]
p-4
"

>


<p className="
text-xs
text-slate-400
">

AI Confidence

</p>


<h2 className="
mt-2
text-4xl
font-black
text-cyan-300
">

98%

</h2>


</div>




<div

className="
rounded-2xl
bg-white/[0.04]
p-4
"

>


<div className="
flex
items-center
gap-2
">

<Activity
className="
text-emerald-400
"
/>

<span className="
text-sm
font-bold
text-white
">

Bullish

</span>


</div>


<p className="
mt-3
text-xs
leading-5
text-slate-400
">

AI detected continuation pattern.

</p>


</div>


</div>





</div>


</motion.div>


)

}