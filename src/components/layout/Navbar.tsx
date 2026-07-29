import { useState } from "react";

import {
  motion,
  AnimatePresence
} from "framer-motion";


import {
  Sparkles,
  ArrowUpRight,
  Menu,
  X
} from "lucide-react";


import { useTranslation } from "react-i18next";


import logo from "../../assets/logo/quantnova-logo.webp";


import LanguageSwitcher from "../language/LanguageSwitcher";







const links = [

{
key:"features",
target:"features"
},

{
key:"ai",
target:"performance"
},

{
key:"extension",
target:"extension"
},

{
key:"about",
target:"about"
},

{
key:"pricing",
target:"pricing"
}

];









export default function Navbar(){



const [open,setOpen]=useState(false);


const {t}=useTranslation();







const scrollToSection=(id:string)=>{


const section=document.getElementById(id);



if(section){


section.scrollIntoView({

behavior:"smooth",

block:"start"

});


}



setOpen(false);


};








return(


<motion.nav


initial={{

y:-80,

opacity:0

}}



animate={{

y:0,

opacity:1

}}



transition={{

duration:0.8,

ease:"easeOut"

}}



className="
fixed
top-6
left-1/2
z-[9999]
w-[92%]
max-w-7xl
-translate-x-1/2
"


>


<div


className="
relative
overflow-hidden
rounded-[34px]
border
border-white/10
bg-[#020617]/80
px-5
py-4
backdrop-blur-3xl
shadow-[0_30px_120px_rgba(0,0,0,.75)]
md:px-7
"


>


<div


className="
absolute
inset-0
bg-gradient-to-r
from-cyan-400/10
via-transparent
to-violet-500/10
pointer-events-none
"


/>









<div


className="
relative
z-10
flex
items-center
justify-between
"


>









<div


onClick={()=>scrollToSection("hero")}


className="
flex
cursor-pointer
items-center
gap-3
"


>







<motion.div


whileHover={{

scale:1.1,

rotate:6

}}


className="
relative
flex
h-12
w-12
items-center
justify-center
rounded-2xl
border
border-cyan-300/20
bg-white/5
"


>


<div


className="
absolute
inset-0
rounded-2xl
bg-cyan-400/30
blur-xl
"


/>



<img


src={logo}


alt="QuantNova AI Logo"


className="
relative
h-10
w-10
object-contain
"


/>


</motion.div>








<div>


<h1

className="
text-lg
font-black
text-white
md:text-xl
"

>

QuantNova AI

</h1>



<p

className="
text-[10px]
font-bold
tracking-[0.35em]
text-cyan-300
"

>

{t("hero.creator","BY SHAYAN")}

</p>


</div>







</div>













<div


className="
hidden
items-center
gap-7
lg:flex
"


>


{


links.map((item,index)=>(


<motion.button


key={item.key}


initial={{

opacity:0,

y:-10

}}



animate={{

opacity:1,

y:0

}}



transition={{

delay:index*.08

}}



whileHover={{

y:-3

}}



onClick={()=>scrollToSection(item.target)}



className="
group
relative
text-sm
font-medium
text-slate-300
hover:text-white
"


>


{t(`navbar.${item.key}`)}



<span


className="
absolute
bottom-[-8px]
left-0
h-[2px]
w-0
bg-gradient-to-r
from-cyan-300
to-violet-500
transition-all
duration-300
group-hover:w-full
"


/>



</motion.button>


))


}



</div>












<div


className="
hidden
items-center
gap-4
lg:flex
"


>


<LanguageSwitcher />





<motion.button


whileHover={{

scale:1.06

}}



whileTap={{

scale:.95

}}



onClick={()=>scrollToSection("extension")}



className="
flex
items-center
gap-2
rounded-full
bg-gradient-to-r
from-cyan-400
via-blue-500
to-violet-600
px-7
py-3
font-black
text-white
shadow-[0_0_70px_rgba(34,211,238,.45)]
"


>


<Sparkles size={17}/>


{t("navbar.launch")}


<ArrowUpRight size={16}/>


</motion.button>



</div>









<motion.button


whileTap={{

scale:.9

}}



onClick={()=>setOpen(!open)}


aria-label="Menu"


className="
rounded-xl
border
border-white/10
bg-white/5
p-3
text-white
lg:hidden
"


>


{

open ?

<X size={22}/>

:

<Menu size={22}/>

}


</motion.button>










</div>










<AnimatePresence>


{

open && (


<motion.div


initial={{

opacity:0,

y:-15

}}



animate={{

opacity:1,

y:0

}}



exit={{

opacity:0,

y:-15

}}



className="
mt-4
rounded-3xl
border
border-white/10
bg-[#020617]/95
p-5
backdrop-blur-3xl
lg:hidden
"


>


<LanguageSwitcher />




<div


className="
mt-5
space-y-2
"


>


{


links.map((item)=>(


<button


key={item.key}


onClick={()=>scrollToSection(item.target)}



className="
block
w-full
rounded-xl
px-4
py-3
text-left
text-slate-300
hover:bg-white/5
hover:text-cyan-300
"


>


{t(`navbar.${item.key}`)}


</button>


))


}






<button


onClick={()=>scrollToSection("extension")}


className="
mt-4
flex
w-full
items-center
justify-center
gap-2
rounded-2xl
bg-gradient-to-r
from-cyan-400
to-violet-600
py-4
font-black
text-white
"


>


<Sparkles size={17}/>


{t("navbar.launch")}


</button>




</div>





</motion.div>


)


}


</AnimatePresence>





</div>


</motion.nav>


)

}