import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";


interface Props {

children: ReactNode;

className?: string;

}



export default function AIHoverCard({
children,
className=""
}:Props){


const cardRef = useRef<HTMLDivElement>(null);


const [position,setPosition] = useState({

x:0,
y:0

});



const [rotate,setRotate] = useState({

x:0,
y:0

});





const handleMove=(e:React.MouseEvent)=>{


const card = cardRef.current;


if(!card) return;



const rect = card.getBoundingClientRect();


const x = e.clientX - rect.left;

const y = e.clientY - rect.top;



const centerX = rect.width / 2;

const centerY = rect.height / 2;



setPosition({

x,
y

});



setRotate({

x:(y-centerY)/15,

y:(centerX-x)/15

});


};






const reset=()=>{


setRotate({

x:0,
y:0

});


};




return(


<motion.div

ref={cardRef}


onMouseMove={handleMove}


onMouseLeave={reset}


animate={{

rotateX:rotate.x,

rotateY:rotate.y

}}



transition={{

type:"spring",

stiffness:180,

damping:18

}}



style={{

transformStyle:"preserve-3d"

}}



className={`
relative
overflow-hidden
${className}
`}

>



{/* MOUSE LIGHT */}


<div


className="
pointer-events-none
absolute
h-48
w-48
rounded-full
bg-cyan-400/20
blur-3xl
"

style={{

left:position.x-96,

top:position.y-96

}}


/>





{/* GLASS REFLECTION */}



<motion.div


animate={{

x:[
"-120%",
"250%"

]

}}



transition={{

duration:5,

repeat:Infinity,

ease:"linear"

}}



className="
pointer-events-none
absolute
inset-y-0
w-1/3
bg-gradient-to-r
from-transparent
via-white/10
to-transparent
skew-x-12
"

 />





<div

className="
relative
z-10
"

>

{children}


</div>



</motion.div>


)

}