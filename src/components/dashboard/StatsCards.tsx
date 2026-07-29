import { motion } from "framer-motion";
import { Activity, TrendingUp, Brain } from "lucide-react";


const stats = [
  {
    title:"BALANCE",
    value:"$124,580",
    icon:Activity
  },
  {
    title:"WIN RATE",
    value:"97.4%",
    icon:TrendingUp
  },
  {
    title:"AI SCORE",
    value:"98",
    icon:Brain
  }
];


export default function StatsCards(){

return(

<div className="
grid
grid-cols-3
gap-5
">


{
stats.map((item,index)=>{

const Icon=item.icon;

return(

<motion.div

key={item.title}

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index*.15
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
p-6
"

>


<div className="
flex
justify-between
items-center
">

<p className="
text-xs
text-slate-400
">

{item.title}

</p>


<Icon
size={22}
className="
text-cyan-400
"
/>


</div>



<h3 className="
mt-5
text-3xl
font-black
text-white
">

{item.value}

</h3>



<div className="
mt-5
h-1
rounded-full
bg-gradient-to-r
from-cyan-400
to-violet-500
"/>


</motion.div>

)

})

}


</div>

)

}