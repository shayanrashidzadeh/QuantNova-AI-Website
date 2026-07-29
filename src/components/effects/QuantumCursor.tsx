import {
  useEffect,
  useRef
} from "react";



export default function QuantumCursor(){



const coreRef = useRef<HTMLDivElement>(null);

const glowRef = useRef<HTMLDivElement>(null);





const mouse = useRef({

x:0,
y:0

});



const core = useRef({

x:0,
y:0

});



const ambient = useRef({

x:0,
y:0

});






useEffect(()=>{



const isTouch = window.matchMedia(

"(pointer:coarse)"

).matches;



if(isTouch){

return;

}





const handleMove=(e:MouseEvent)=>{


mouse.current.x=e.clientX;

mouse.current.y=e.clientY;


};





window.addEventListener(

"mousemove",

handleMove,

{

passive:true

}

);







let frame:number;





const animate=()=>{



core.current.x +=

(mouse.current.x-core.current.x)*0.2;



core.current.y +=

(mouse.current.y-core.current.y)*0.2;






ambient.current.x +=

(mouse.current.x-ambient.current.x)*0.08;



ambient.current.y +=

(mouse.current.y-ambient.current.y)*0.08;







if(coreRef.current){


coreRef.current.style.transform=

`
translate3d(
${core.current.x}px,
${core.current.y}px,
0
)
translate(-50%,-50%)
`;



}





if(glowRef.current){


glowRef.current.style.transform=

`
translate3d(
${ambient.current.x}px,
${ambient.current.y}px,
0
)
translate(-50%,-50%)
`;



}






frame=requestAnimationFrame(animate);


};






frame=requestAnimationFrame(animate);







return()=>{


window.removeEventListener(

"mousemove",

handleMove

);


cancelAnimationFrame(frame);



};


},[]);







return(

<>





<div

ref={coreRef}

className="
pointer-events-none
fixed
left-0
top-0
z-[99999]
h-16
w-16
rounded-full
bg-cyan-400/20
blur-3xl
will-change-transform
"

/>








<div

ref={glowRef}

className="
pointer-events-none
fixed
left-0
top-0
z-[99998]
h-36
w-36
rounded-full
bg-violet-500/15
blur-[65px]
will-change-transform
"

/>






</>

)

}