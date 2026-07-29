import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
  ArrowRight,
  Play,
  Sparkles
} from "lucide-react";








export default function HeroButtons(){



const {t}=useTranslation();








const scrollToPerformance=()=>{


const section=document.getElementById(
"performance"
);



if(section){


section.scrollIntoView({

behavior:"smooth",

block:"start"

});


}



};









return(


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


duration:.7,

delay:.3


}}



className="
flex
flex-wrap
items-center
justify-center
gap-5
"


>












<motion.button


type="button"



aria-label={t("hero.button")}



whileHover={{


scale:1.05,

y:-4


}}



whileTap={{


scale:.96


}}



className="
group
relative
flex
overflow-hidden
items-center
gap-3
rounded-full
bg-gradient-to-r
from-violet-500
via-blue-500
to-cyan-400
px-9
py-4
font-black
text-white
shadow-[0_0_70px_rgba(34,211,238,.45)]
"


>


<span


className="
relative
z-10
flex
items-center
gap-2
"


>


<Sparkles size={18}/>


{t("hero.button")}


</span>







<ArrowRight


size={18}


className="
relative
z-10
transition-transform
duration-300
group-hover:translate-x-2
"


/>







<motion.span


animate={{


x:[

"-150%",

"250%"

]


}}



transition={{


duration:3,

repeat:Infinity,

ease:"linear"


}}



className="
absolute
inset-y-0
left-0
w-1/3
bg-gradient-to-r
from-transparent
via-white/40
to-transparent
skew-x-12
"


/>






</motion.button>














<motion.button


type="button"



aria-label={t("hero.performance")}



onClick={scrollToPerformance}



whileHover={{


scale:1.05,

y:-4


}}



whileTap={{


scale:.96


}}



className="
group
flex
items-center
gap-3
rounded-full
border
border-white/20
bg-white/[0.07]
px-9
py-4
font-bold
text-white
backdrop-blur-3xl
transition
hover:border-cyan-300/50
hover:bg-white/[0.15]
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
bg-cyan-400/20
"


>


<Play


size={13}


className="
fill-cyan-300
text-cyan-300
"


/>


</div>





{t("hero.performance")}






</motion.button>








</motion.div>


)

}