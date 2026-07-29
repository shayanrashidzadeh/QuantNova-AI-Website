import { motion } from "framer-motion";

import {
  Check,
  Sparkles,
  Rocket,
  Crown,
  Zap
} from "lucide-react";





const plans = [

{
name:"Starter",
price:"$35",
icon:Rocket,
popular:false,

features:[
"Basic AI Analysis",
"Market Overview",
"Limited Signals",
"Email Support"
]

},



{
name:"Pro AI",
price:"$99",
icon:Sparkles,
popular:true,

features:[
"Advanced AI Engine",
"Unlimited Analysis",
"Smart Signals",
"Risk Management",
"Priority Updates"
]

},




{
name:"Elite Quant",
price:"$499",
icon:Crown,
popular:false,

features:[
"Full AI Assistant",
"Premium Indicators",
"Advanced Analytics",
"Private Community",
"24/7 Priority Support"
]

}

];









export default function Pricing(){



return(


<section

id="pricing"

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

duration:10,
repeat:Infinity

}}

className="
absolute
left-1/2
top-10
h-[550px]
w-[550px]
-translate-x-1/2
rounded-full
bg-cyan-400/10
blur-[170px]
"

/>







<div

className="
relative
mx-auto
max-w-7xl
"

>



<motion.p

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

viewport={{
once:true
}}

className="
text-center
text-sm
tracking-[0.5em]
text-cyan-300
"

>

PRICING

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
text-center
text-4xl
font-black
text-white
sm:text-5xl
"

>

Choose Your Intelligence Level

</motion.h2>







<p

className="
mx-auto
mt-5
max-w-xl
text-center
text-slate-400
"

>

Unlock next-generation AI trading intelligence.

</p>








<div

className="
mt-14
grid
gap-8
lg:grid-cols-3
"

>





{

plans.map((plan,index)=>{


const Icon = plan.icon;



return(


<motion.div


key={plan.name}


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

delay:index*.15,
duration:.7

}}



whileHover={{

y:-15,
scale:1.03

}}



className={`

relative
overflow-hidden
rounded-[45px]
border
p-8
backdrop-blur-3xl


${
plan.popular

?

`
border-cyan-400/50
bg-cyan-400/10
shadow-[0_0_100px_rgba(34,211,238,.35)]
lg:scale-105
`

:

`

border-white/10
bg-white/[0.05]

`

}

`

}



>




<div

className="
absolute
inset-0
bg-gradient-to-br
from-cyan-400/10
via-transparent
to-violet-600/20
"

/>









{
plan.popular && (


<div

className="
absolute
right-6
top-6
flex
items-center
gap-1
rounded-full
bg-gradient-to-r
from-cyan-400
to-violet-600
px-4
py-2
text-xs
font-black
text-white
"

>

<Zap size={13}/>

MOST POWERFUL

</div>


)

}









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
bg-gradient-to-br
from-cyan-400/20
to-violet-500/30
"

>

<Icon

size={30}

className="text-cyan-300"

/>

</div>








<h3

className="
mt-8
text-3xl
font-black
text-white
"

>

{plan.name}

</h3>







<div

className="
mt-8
"

>

<span

className="
text-5xl
font-black
text-white
"

>

{plan.price}

</span>


<span className="text-slate-400">

/ month

</span>


</div>









<div

className="
mt-10
space-y-5
"

>


{

plan.features.map(feature=>(


<div

key={feature}

className="
flex
items-center
gap-3
"

>


<div

className="
flex
h-6
w-6
items-center
justify-center
rounded-full
bg-cyan-400/10
"

>

<Check

size={14}

className="text-cyan-300"

/>

</div>




<span className="text-sm text-slate-300">

{feature}

</span>



</div>


))

}



</div>








<motion.button

whileHover={{
scale:1.05
}}

whileTap={{
scale:.95
}}


className={`
mt-12
w-full
rounded-2xl
py-4
font-black
text-white


${
plan.popular

?

`
bg-gradient-to-r
from-cyan-400
to-violet-600
shadow-[0_0_60px_rgba(34,211,238,.5)]
`

:

`
border
border-white/10
bg-white/5
`

}

`}

>

Get Started

</motion.button>






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