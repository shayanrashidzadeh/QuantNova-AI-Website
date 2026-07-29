import { motion } from "framer-motion";
import { ReactNode } from "react";


interface Props {
children: ReactNode;
}


export default function PageTransition({
children
}:Props){

return(

<motion.div

initial={{
opacity:0,
y:20,
filter:"blur(12px)"
}}

animate={{
opacity:1,
y:0,
filter:"blur(0px)"
}}

transition={{

duration:1,
ease:"easeOut"

}}

>

{children}

</motion.div>

)

}