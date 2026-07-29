import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
  TrendingUp,
  Target,
  BarChart3,
  Zap
} from "lucide-react";







const icons=[

TrendingUp,

Target,

BarChart3,

Zap

];








export default function Performance(){


const {t}=useTranslation();







const stats=[

{
title:t("performance.stats.monthly"),
value:"+42.8%"
},

{
title:t("performance.stats.win"),
value:"97.4%"
},

{
title:t("performance.stats.trades"),
value:"12,847"
},

{
title:t("performance.stats.score"),
value:"98/100"
}

];







const chart=[

20,
35,
28,
55,
45,
72,
62,
88,
75,
100

];








return(


<section


id="performance"


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
left-1/2
top-20
h-72
w-72
-translate-x-1/2
rounded-full
bg-violet-500/10
blur-[120px]
md:h-[550px]
md:w-[550px]
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









<motion.p


initial={{

opacity:0

}}



whileInView={{

opacity:1

}}



viewport={{once:true}}



className="
text-center
text-sm
tracking-[0.5em]
text-cyan-300
"


>


{t("performance.tag")}


</motion.p>









<motion.h2


initial={{

opacity:0,

y:25

}}



whileInView={{

opacity:1,

y:0

}}



viewport={{once:true}}



className="
mt-5
text-center
text-4xl
font-black
text-white
sm:text-5xl
"


>


{t("performance.title")}


</motion.h2>









<p


className="
mx-auto
mt-5
max-w-2xl
text-center
text-sm
leading-7
text-slate-400
sm:text-lg
"


>


{t("performance.description")}


</p>









<motion.div


initial={{

opacity:0,

y:40,

scale:.97

}}



whileInView={{

opacity:1,

y:0,

scale:1

}}



viewport={{once:true}}



transition={{

duration:.8

}}



className="
mt-12
overflow-hidden
rounded-[40px]
border
border-white/10
bg-white/[0.05]
p-5
backdrop-blur-3xl
shadow-[0_30px_80px_rgba(0,0,0,.35)]
md:p-8
"


>







<div


className="
grid
gap-6
lg:grid-cols-2
"


>









<div


className="
rounded-3xl
border
border-white/10
bg-black/30
p-5
md:p-8
"


>








<div


className="
flex
flex-col
gap-4
sm:flex-row
sm:items-center
sm:justify-between
"


>





<div>


<p className="text-sm text-slate-400">


{t("performance.prediction")}


</p>




<h3


className="
mt-2
text-xl
font-black
text-white
md:text-2xl
"


>


{t("performance.engine")}


</h3>


</div>








<div


className="
flex
items-center
gap-2
rounded-full
bg-emerald-400/10
px-4
py-2
text-sm
text-emerald-300
"


>


<span


className="
h-2
w-2
animate-pulse
rounded-full
bg-emerald-400
"


/>


{t("performance.live")}


</div>







</div>









<div


className="
mt-8
h-52
md:h-72
"


>


<div


className="
flex
h-full
items-end
gap-2
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

delay:index*.05,

duration:.5

}}



className="
flex-1
rounded-t-xl
bg-gradient-to-t
from-cyan-400
via-blue-500
to-violet-500
"


/>


))


}


</div>


</div>








</div>









<div


className="
grid
grid-cols-1
gap-4
sm:grid-cols-2
"


>


{


stats.map((item,index)=>{


const Icon=icons[index];



return(


<motion.div


key={item.title}


whileHover={{

y:-8,

scale:1.03

}}



className="
rounded-3xl
border
border-white/10
bg-black/30
p-5
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


<Icon

size={25}

className="text-cyan-300"

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






<h3


className="
mt-2
text-2xl
font-black
text-white
md:text-3xl
"


>


{item.value}


</h3>






</motion.div>


)


})


}



</div>








</div>







</motion.div>









</div>





</section>


)

}