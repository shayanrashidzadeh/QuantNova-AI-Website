import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
  Chrome,
  Brain,
  ScanLine,
  ShieldCheck,
  Sparkles,
  TrendingUp
} from "lucide-react";







const icons=[

ScanLine,

Brain,

ShieldCheck

];








export default function Extension(){



const {t}=useTranslation();







const featureItems=[


{
title:t("extension.cards.chart"),
icon:icons[0]
},


{
title:t("extension.cards.pattern"),
icon:icons[1]
},


{
title:t("extension.cards.risk"),
icon:icons[2]
}


];








const chart=[35,55,45,75,65,90];









return(


<section


id="extension"


className="
relative
overflow-hidden
px-5
py-28
md:px-6
md:py-36
"


>









<div


className="
absolute
right-0
top-40
h-72
w-72
rounded-full
bg-violet-500/10
blur-[120px]
md:h-[500px]
md:w-[500px]
"


/>












<div


className="
relative
mx-auto
max-w-7xl
grid
items-center
gap-12
lg:grid-cols-2
"


>









<motion.div


initial={{

opacity:0,

x:-40

}}



whileInView={{

opacity:1,

x:0

}}



viewport={{once:true}}



className="
flex
justify-center
"


>










<motion.div


animate={{

y:[

0,

-10,

0

]

}}



transition={{


duration:5,

repeat:Infinity,

ease:"easeInOut"


}}



className="
relative
h-[500px]
w-[310px]
rounded-[40px]
border
border-white/10
bg-white/[0.05]
p-5
backdrop-blur-3xl
shadow-[0_0_100px_rgba(34,211,238,.25)]
md:h-[560px]
md:w-[350px]
will-change-transform
"


>







<div


className="
absolute
inset-0
rounded-[40px]
bg-gradient-to-br
from-cyan-400/20
via-transparent
to-violet-600/30
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
items-center
justify-between
rounded-2xl
border
border-white/10
bg-black/40
p-4
"


>


<div


className="
flex
items-center
gap-3
"


>


<Chrome

size={22}

className="text-cyan-300"

/>





<div>


<p className="font-bold text-white">

QuantNova AI

</p>


<p className="text-xs text-emerald-300">

● {t("extension.connected")}

</p>


</div>


</div>





<Sparkles

size={18}

className="text-cyan-300"

/>


</div>









<div


className="
mt-6
h-52
rounded-3xl
border
border-white/10
bg-black/40
p-5
"


>


<div


className="
flex
h-full
items-end
gap-3
"


>


{


chart.map((item,index)=>(


<motion.div


key={index}



initial={{

height:0

}}



whileInView={{

height:`${item}%`

}}



viewport={{once:true}}



transition={{

delay:index*.07,

duration:.5

}}



className="
flex-1
rounded-t-xl
bg-gradient-to-t
from-cyan-400
to-violet-500
"


/>


))


}



</div>


</div>









<div


className="
mt-5
rounded-3xl
border
border-cyan-400/20
bg-cyan-400/10
p-5
"


>


<div


className="
flex
items-center
justify-between
"


>


<div>


<p className="
text-sm
text-slate-400
">

{t("extension.prediction")}

</p>



<h3 className="
mt-1
text-xl
font-black
text-white
">

{t("extension.signal")}

</h3>


</div>






<TrendingUp

className="text-emerald-400"

/>


</div>


</div>






</div>







</motion.div>









</motion.div>













<motion.div


initial={{

opacity:0,

x:40

}}



whileInView={{

opacity:1,

x:0

}}



viewport={{once:true}}



>


<div

className="
flex
items-center
gap-3
"

>


<Sparkles

className="text-cyan-300"

/>


<span

className="
font-semibold
text-cyan-300
"

>

{t("extension.tag")}

</span>


</div>










<h2


className="
mt-6
text-4xl
font-black
leading-tight
text-white
sm:text-5xl
"


>

{t("extension.title")}

</h2>








<p


className="
mt-6
text-base
leading-8
text-slate-400
md:text-lg
"


>

{t("extension.description")}

</p>









<div


className="
mt-8
space-y-4
"


>


{


featureItems.map((item)=>(


<motion.div


key={item.title}


whileHover={{

x:8

}}



className="
flex
items-center
gap-4
rounded-2xl
border
border-white/10
bg-white/[0.05]
p-5
backdrop-blur-xl
"


>


<item.icon

size={24}

className="text-cyan-300"

/>




<span className="font-medium text-white">

{item.title}

</span>



</motion.div>


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



className="
mt-10
flex
items-center
gap-3
rounded-2xl
bg-gradient-to-r
from-cyan-400
to-violet-600
px-8
py-4
font-bold
text-white
shadow-[0_0_60px_rgba(34,211,238,.45)]
"


>


<Chrome size={20}/>


{t("extension.button")}


</motion.button>






</motion.div>







</div>









</section>


)

}