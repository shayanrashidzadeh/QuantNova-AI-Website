import {
  useEffect
} from "react";

import type {
  ReactNode
} from "react";

import Lenis from "lenis";





interface SmoothScrollProps {

  children: ReactNode;

}








export default function SmoothScroll({

children

}:SmoothScrollProps){





useEffect(()=>{



const lenis = new Lenis({


duration:0.8,


smoothWheel:true,


wheelMultiplier:0.85,


touchMultiplier:1.1,


});


let animationFrame:number;





const raf=(time:number)=>{


lenis.raf(time);


animationFrame=requestAnimationFrame(raf);


};







animationFrame=requestAnimationFrame(raf);






const handleVisibility=()=>{


if(document.hidden){


cancelAnimationFrame(animationFrame);


}

else{


animationFrame=requestAnimationFrame(raf);


}


};





document.addEventListener(

"visibilitychange",

handleVisibility

);








return()=>{


cancelAnimationFrame(animationFrame);


document.removeEventListener(

"visibilitychange",

handleVisibility

);



lenis.destroy();


};




},[]);








return <>{children}</>;

}