import { motion } from "framer-motion";


const stars = Array.from({ length: 120 });


export default function Stars(){

return(

<div
className="
absolute
inset-0
pointer-events-none
overflow-hidden
"
>


{
stars.map((_,index)=>(

<motion.span

key={index}

animate={{

opacity:[
0.2,
1,
0.2
],

scale:[
1,
1.5,
1
]

}}

transition={{

duration:
2 + Math.random()*4,

repeat:Infinity,

delay:
Math.random()*5

}}

style={{

left:`${Math.random()*100}%`,
top:`${Math.random()*100}%`

}}

className="
absolute
h-[2px]
w-[2px]
rounded-full
bg-white
"

/>

))

}




{/* Shooting Star */}


<motion.div

initial={{
x:"-20%",
y:"-20%",
opacity:0
}}

animate={{

x:"120%",
y:"120%",

opacity:[
0,
1,
0
]

}}

transition={{

duration:2.5,
repeat:Infinity,
repeatDelay:8

}}

className="
absolute
left-20
top-10
h-[2px]
w-40
rotate-45
bg-gradient-to-r
from-transparent
via-white
to-transparent
"

/>



</div>

)

}