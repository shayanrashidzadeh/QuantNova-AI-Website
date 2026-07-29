import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";







export default function FAQ(){


const {t}=useTranslation();


const [active,setActive]=useState<number | null>(null);






const questions=t(

"faq.items",

{

returnObjects:true

}

) as Array<{

question:string;

answer:string;

}>;








return(


<section


id="faq"


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
max-w-5xl
"


>









<motion.div


initial={{

opacity:0,

y:30

}}



whileInView={{

opacity:1,

y:0

}}



viewport={{once:true}}



className="text-center"


>









<div


className="
flex
items-center
justify-center
gap-3
text-cyan-300
"


>


<Sparkles size={20}/>



<span


className="
text-sm
font-bold
tracking-[0.5em]
"


>


{t("faq.tag","FAQ")}


</span>



</div>










<h2


className="
mt-6
text-4xl
font-black
text-white
sm:text-5xl
"


>


{t(

"faq.title",

"Frequently Asked Questions"

)}


</h2>










<p


className="
mx-auto
mt-5
max-w-2xl
text-slate-400
"


>


{t(

"faq.description",

"Find answers about QuantNova AI and our trading technology."

)}


</p>









</motion.div>









<div


className="
mt-14
space-y-4
"


>









{


Array.isArray(questions) && questions.map((item,index)=>(


<motion.div


key={item.question}



initial={{

opacity:0,

y:20

}}



whileInView={{

opacity:1,

y:0

}}



viewport={{once:true}}



transition={{

delay:index*.05

}}



className="
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/[0.05]
backdrop-blur-3xl
"


>









<button


type="button"


onClick={()=>setActive(

active===index

?

null

:

index

)}



className="
flex
w-full
items-center
justify-between
gap-5
p-6
text-left
"


>









<span


className="
text-base
font-bold
text-white
md:text-lg
"


>


{item.question}


</span>










<motion.div


animate={{


rotate:

active===index

?

180

:

0


}}



transition={{


duration:.25


}}



>


<ChevronDown

size={22}

className="text-cyan-300"

/>


</motion.div>







</button>









<AnimatePresence initial={false}>


{


active===index && (


<motion.div


initial={{

height:0,

opacity:0

}}



animate={{

height:"auto",

opacity:1

}}



exit={{

height:0,

opacity:0

}}



transition={{

duration:.3

}}



className="overflow-hidden"


>


<p


className="
px-6
pb-6
leading-7
text-slate-400
"


>


{item.answer}


</p>


</motion.div>


)


}



</AnimatePresence>









</motion.div>


))


}









</div>







</div>







</section>


)

}