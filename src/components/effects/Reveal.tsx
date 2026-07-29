import { motion } from "framer-motion";
import { ReactNode } from "react";


interface RevealProps {

children: ReactNode;

delay?: number;

direction?: "up" | "down" | "left" | "right";

}



export default function Reveal({

children,

delay = 0,

direction = "up"

}: RevealProps){



const variants = {

up:{
y:60,
x:0
},

down:{
y:-60,
x:0
},

left:{
x:60,
y:0
},

right:{
x:-60,
y:0
}

};



return(

<motion.div


initial={{

opacity:0,

...variants[direction],

scale:.96,

filter:"blur(18px)"

}}



whileInView={{

opacity:1,

x:0,

y:0,

scale:1,

filter:"blur(0px)"

}}



viewport={{

once:true,

amount:.2

}}



transition={{

duration:1,

delay,

ease:[
0.16,
1,
0.3,
1
]

}}


>

{children}


</motion.div>


)

}