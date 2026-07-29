import { motion } from "framer-motion";


export default function QuantumBackground(){

return(

<div

className="
pointer-events-none
fixed
inset-0
z-[-2]
overflow-hidden
"

>


{/* CYAN ENERGY FIELD */}


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
1.15,
1
]

}}

transition={{

duration:25,
repeat:Infinity,
ease:"easeInOut"

}}

className="
absolute
left-[-200px]
top-[20%]
h-[650px]
w-[650px]
rounded-full
bg-cyan-400/10
blur-[180px]
"

/>








{/* VIOLET ENERGY FIELD */}



<motion.div

animate={{

x:[
"10%",
"-20%",
"10%"
],

y:[
"0%",
"-10%",
"0%"
],

scale:[

1,
1.2,
1

]

}}

transition={{

duration:30,
repeat:Infinity,
ease:"easeInOut"

}}

className="
absolute
right-[-250px]
top-[45%]
h-[700px]
w-[700px]
rounded-full
bg-violet-500/10
blur-[220px]
"

/>









{/* AI GRID */}


<div

className="
absolute
inset-0
opacity-[0.025]
bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
bg-[size:90px_90px]
"

/>









{/* FILM NOISE */}


<div

className="
absolute
inset-0
opacity-[0.04]
mix-blend-overlay
bg-[radial-gradient(circle_at_center,transparent_0,black_100%)]
"

/>





</div>

)

}