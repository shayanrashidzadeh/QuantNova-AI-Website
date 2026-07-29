import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
  Code2,
  BrainCircuit,
  TrendingUp,
  Sparkles,
  Cpu,
  Globe2,
  Activity
} from "lucide-react";








const icons=[

Code2,

BrainCircuit,

TrendingUp

];



const statIcons=[

Activity,

Globe2,

Cpu

];










export default function About(){



const {t}=useTranslation();







const cards=t(

"about.cards",

{

returnObjects:true

}

) as {

title:string;

text:string;

}[];









const stats=[


{
value:"24/7",
text:t("about.stats.analysis")
},


{
value:"Global",
text:t("about.stats.markets")
},


{
value:"AI",
text:t("about.stats.powered")
}


];









return(


<section


id="about"


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
left-0
top-20
h-72
w-72
rounded-full
bg-violet-500/10
blur-[120px]
"


/>









<div


className="
relative
mx-auto
max-w-7xl
grid
items-center
gap-14
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



transition={{duration:.7}}



>









<div


className="
relative
rounded-[40px]
border
border-white/10
bg-white/[0.05]
p-6
backdrop-blur-3xl
shadow-[0_30px_90px_rgba(0,0,0,.4)]
md:p-8
"


>








<div


className="
absolute
inset-0
rounded-[40px]
bg-gradient-to-br
from-cyan-400/10
via-transparent
to-violet-500/20
"


/>










<div


className="
relative
"


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
text-sm
font-semibold
tracking-[0.3em]
text-cyan-300
"


>


{t("about.tag")}


</span>


</div>









<h3


className="
mt-6
text-3xl
font-black
text-white
md:text-4xl
"


>


{t("about.title")}


</h3>








<p


className="
mt-5
leading-8
text-slate-400
"


>


{t("about.description")}


</p>









<div


className="
mt-8
space-y-4
"


>


{


cards.map((item,index)=>{


const Icon=icons[index];


return(


<motion.div


key={item.title}


whileHover={{

x:8

}}



className="
flex
gap-4
rounded-2xl
border
border-white/10
bg-black/20
p-4
"


>






<div


className="
flex
h-12
w-12
shrink-0
items-center
justify-center
rounded-xl
bg-cyan-400/10
text-cyan-300
"


>


<Icon size={24}/>


</div>








<div>


<h4 className="font-bold text-white">


{item.title}


</h4>




<p


className="
mt-1
text-sm
text-slate-400
"


>


{item.text}


</p>



</div>







</motion.div>


)


})


}



</div>








</div>





</div>







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



transition={{duration:.7}}



className="
flex
justify-center
"


>









<div


className="
relative
flex
h-[360px]
w-[360px]
items-center
justify-center
sm:h-[430px]
sm:w-[430px]
"


>









<motion.div


animate={{

rotate:360

}}



transition={{


duration:30,

repeat:Infinity,

ease:"linear"


}}



className="
absolute
h-full
w-full
rounded-full
border
border-cyan-400/20
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
h-[75%]
w-[75%]
rounded-full
border
border-violet-500/30
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
h-36
w-36
items-center
justify-center
rounded-full
border
border-white/20
bg-white/10
backdrop-blur-xl
shadow-[0_0_80px_rgba(34,211,238,.7)]
"


>


<BrainCircuit

size={65}

className="text-cyan-300"

/>


</div>









<div


className="
absolute
bottom-0
grid
grid-cols-3
gap-2
"


>


{


stats.map((item,index)=>{


const Icon=statIcons[index];


return(


<div


key={item.text}


className="
rounded-2xl
border
border-white/10
bg-black/50
px-3
py-3
text-center
backdrop-blur-xl
"


>


<Icon

size={18}

className="mx-auto text-cyan-300"

/>




<h4 className="mt-2 font-black text-white">


{item.value}


</h4>





<p className="text-[10px] text-slate-400">


{item.text}


</p>




</div>


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