import { motion } from "framer-motion";


const particles = Array.from({
  length: 45
});


export default function QuantumAtmosphere(){

return(

<div

className="
pointer-events-none
fixed
inset-0
z-[-1]
overflow-hidden
"

>


{/* CYAN ENERGY */}


<motion.div

animate={{

x:[
"-10%",
"20%",
"-10%"
],

y:[
"0%",
"15%",
"0%"
],

scale:[
1,
1.2,
1

]

}}

transition={{

duration:18,
repeat:Infinity,
ease:"easeInOut"

}}

className="
absolute
left-[-200px]
top-[20%]
h-[500px]
w-[500px]
rounded-full
bg-cyan-400/10
blur-[180px]
"

/>







{/* VIOLET ENERGY */}


<motion.div

animate={{

x:[
"10%",
"-20%",
"10%"

],

y:[
"0%",
"-15%",
"0%"

],

scale:[
1,
1.3,
1

]

}}

transition={{

duration:22,
repeat:Infinity,
ease:"easeInOut"

}}

className="
absolute
right-[-200px]
top-[40%]
h-[600px]
w-[600px]
rounded-full
bg-violet-500/10
blur-[200px]
"

/>










{/* QUANTUM PARTICLES */}



{

particles.map((_,index)=>(


<motion.span

key={index}

initial={{

opacity:0

}}

animate={{

y:[
0,
-120,
0
],

x:[
0,
Math.random()*80-40,
0
],

opacity:[

0,
0.8,
0

],

scale:[

1,
1.8,
1

]

}}

transition={{

duration:
8+Math.random()*8,

repeat:Infinity,

delay:
Math.random()*5,

ease:"easeInOut"

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
bg-cyan-200
shadow-[0_0_15px_rgba(34,211,238,1)]
"

/>


))

}





{/* SOFT GRID */}


<div

className="
absolute
inset-0
opacity-[0.03]
bg-[linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)]
bg-[size:80px_80px]
"

/>




</div>


)

}