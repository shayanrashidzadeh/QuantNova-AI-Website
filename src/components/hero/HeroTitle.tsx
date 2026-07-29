import { motion } from "framer-motion";


export default function HeroTitle(){

return(

<motion.h1

initial={{
opacity:0,
y:40,
}}

animate={{
opacity:1,
y:0,
}}

transition={{
duration:1,
delay:.4,
ease:"easeOut",
}}

className="
relative
mt-10
text-6xl
font-black
tracking-tight
bg-gradient-to-r
from-white
via-cyan-300
to-violet-500
bg-clip-text
text-transparent
md:text-8xl
"

>

QuantNova AI

</motion.h1>

)

}