import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
  ArrowUp,
  Instagram,
  Send,
  Linkedin,
  Mail,
  Sparkles
} from "lucide-react";

import logo from "../../assets/logo/quantnova-logo.webp";







const columns = [

{
title:"Product",
links:[
"Features",
"AI Engine",
"Dashboard",
"Extension",
"Pricing"
]
},


{
title:"Company",
links:[
"About",
"Roadmap",
"Partners",
"Contact"
]
},


{
title:"Resources",
links:[
"Documentation",
"API",
"Support",
"Status"
]
}

];







const socials=[

Instagram,

Send,

Linkedin,

Mail

];








export default function Footer(){


const {t}=useTranslation();







const scrollTo=(id:string)=>{


const section=document.getElementById(id);


if(section){

section.scrollIntoView({

behavior:"smooth"

});

}


};







return(


<footer


id="contact"


className="
relative
overflow-hidden
border-t
border-white/10
pt-28
"


>









<div


className="
absolute
left-1/2
top-0
h-[450px]
w-[450px]
-translate-x-1/2
rounded-full
bg-cyan-400/10
blur-[160px]
"


/>









<div


className="
relative
mx-auto
max-w-7xl
px-5
md:px-6
"


>











<motion.div


initial={{

opacity:0,

y:40

}}



whileInView={{

opacity:1,

y:0

}}



viewport={{once:true}}



className="
rounded-[45px]
border
border-cyan-400/20
bg-white/[0.05]
p-8
text-center
backdrop-blur-3xl
md:p-12
"


>





<Sparkles

className="mx-auto text-cyan-300"

/>







<h2


className="
mt-5
text-4xl
font-black
text-white
md:text-5xl
"


>


{t("footer.title","Ready To Trade Smarter?")}


</h2>








<p


className="
mx-auto
mt-5
max-w-xl
text-slate-400
"


>


{t(
"footer.description",
"Experience next-generation AI intelligence built for modern traders."
)}


</p>








<button


onClick={()=>scrollTo("extension")}



className="
mt-8
rounded-2xl
bg-gradient-to-r
from-cyan-400
to-violet-600
px-8
py-4
font-black
text-white
shadow-[0_0_60px_rgba(34,211,238,.45)]
"


>


{t("footer.launch","Launch QuantNova")}


</button>








</motion.div>














<div


className="
mt-20
grid
gap-12
lg:grid-cols-4
"


>









<div>





<div


className="
flex
items-center
gap-4
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
border-white/10
bg-white/5
"


>


<img


src={logo}


alt="QuantNova AI"


className="
h-11
w-11
object-contain
"


/>


</div>








<div>


<h2 className="
text-2xl
font-black
text-white
">

QuantNova AI

</h2>




<p className="
text-xs
tracking-[0.4em]
text-cyan-300
">

BY SHAYAN

</p>


</div>


</div>










<p


className="
mt-6
leading-7
text-slate-400
"


>


{t(
"footer.brand",
"Next generation AI trading intelligence platform designed for smarter market decisions."
)}


</p>








<div


className="
mt-8
flex
gap-3
"


>


{


socials.map((Icon,index)=>(


<motion.a


key={index}


href="#"


whileHover={{

y:-5,

scale:1.1

}}



className="
rounded-xl
border
border-white/10
p-3
text-slate-300
transition
hover:border-cyan-400
hover:text-cyan-300
"


>


<Icon size={18}/>


</motion.a>


))


}



</div>







</div>









{

columns.map((column)=>(


<div key={column.title}>


<h3 className="
mb-6
text-lg
font-bold
text-white
">

{column.title}

</h3>






<div className="
space-y-4
">


{

column.links.map(link=>(


<button


key={link}


onClick={()=>{


const map:any={

Features:"features",

Extension:"extension",

Pricing:"pricing",

About:"about",

Contact:"contact"

};


if(map[link]) scrollTo(map[link]);


}}



className="
block
text-slate-400
transition
hover:translate-x-2
hover:text-cyan-300
"


>


{link}


</button>


))


}


</div>






</div>


))


}









</div>









<div


className="
mt-16
flex
flex-col
items-center
justify-between
gap-5
border-t
border-white/10
py-8
md:flex-row
"


>


<p className="
text-sm
text-slate-500
">


© 2026 QuantNova AI. Built by Shayan.


</p>








<button


onClick={()=>window.scrollTo({

top:0,

behavior:"smooth"

})}



className="
flex
items-center
gap-2
rounded-full
border
border-white/10
px-5
py-3
text-white
hover:border-cyan-400
"


>


{t("footer.top","Back To Top")}


<ArrowUp size={17}/>


</button>








</div>







</div>








</footer>


)

}