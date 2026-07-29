import { ReactNode } from "react";
import { motion } from "framer-motion";

import spaceBg from "../../assets/backgrounds/space-bg.png";



export default function SpaceBackground({

children,

}:{

children:ReactNode;

}){


return(

<div

className="
relative
min-h-screen
overflow-hidden
bg-black
"

>







{/* SPACE IMAGE */}



<motion.div

animate={{

scale:[
1,
1.05,
1
],

}}

transition={{

duration:35,
repeat:Infinity,
ease:"easeInOut"

}}

className="
absolute
inset-0
bg-cover
bg-center
bg-no-repeat
will-change-transform
pointer-events-none
"

style={{

backgroundImage:`url(${spaceBg})`

}}

/>








{/* DARK ATMOSPHERE */}



<div

className="
absolute
inset-0
bg-gradient-to-b
from-black/40
via-[#020617]/60
to-black
pointer-events-none
"

/>








{/* CYAN LIGHT */}



<motion.div

animate={{

opacity:[
0.2,
0.45,
0.2
],

scale:[
1,
1.2,
1
]

}}

transition={{

duration:12,
repeat:Infinity,
ease:"easeInOut"

}}

className="
absolute
left-1/2
top-1/4
h-[600px]
w-[600px]
-translate-x-1/2
rounded-full
bg-cyan-400/10
blur-[160px]
pointer-events-none
"

/>








{/* VIOLET DEPTH */}



<motion.div

animate={{

x:[
-40,
40,
-40
]

}}

transition={{

duration:30,
repeat:Infinity,
ease:"easeInOut"

}}

className="
absolute
right-[-150px]
bottom-[-100px]
h-[500px]
w-[500px]
rounded-full
bg-violet-600/10
blur-[150px]
pointer-events-none
"

/>









{/* VIGNETTE */}



<div

className="
absolute
inset-0
bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.9)_100%)]
pointer-events-none
"

/>








{/* CONTENT */}



<div

className="
relative
z-10
"

>

{children}

</div>





</div>


)

}