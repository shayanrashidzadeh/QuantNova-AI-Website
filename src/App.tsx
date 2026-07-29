import {
  useEffect,
  useState,
  lazy,
  Suspense
} from "react";


import {
  motion,
  AnimatePresence
} from "framer-motion";


import SmoothScroll from "./components/effects/SmoothScroll";







const IntroLoader = lazy(() =>
  import("./components/intro/IntroLoader")
);



const Home = lazy(() =>
  import("./pages/Home")
);










function LoadingScreen(){


return(

<Suspense fallback={null}>

<IntroLoader />

</Suspense>

)

}









function PageLoader(){


return(

<div

className="
flex
min-h-screen
items-center
justify-center
bg-[#020617]
"

>


<div

className="
h-10
w-10
animate-spin
rounded-full
border-2
border-cyan-300
border-t-transparent
"

/>

</div>

)

}









export default function App(){



const [loading,setLoading]=useState(true);







useEffect(()=>{


const timer=setTimeout(()=>{


setLoading(false);


},6500);





return()=>{


clearTimeout(timer);


};


},[]);









return(


<SmoothScroll>


<AnimatePresence mode="wait">






{

loading && (


<motion.div


key="intro"


initial={{

opacity:1

}}



exit={{

opacity:0,
scale:1.02

}}



transition={{

duration:0.8,

ease:"easeInOut"

}}



className="
fixed
inset-0
z-[99999]
"

>


<LoadingScreen />


</motion.div>


)

}









{

!loading && (



<motion.main


key="website"


initial={{


opacity:0,

y:25


}}



animate={{


opacity:1,

y:0


}}



transition={{


duration:0.9,

ease:"easeOut"


}}



>


<Suspense fallback={<PageLoader />}>


<Home />


</Suspense>


</motion.main>


)

}





</AnimatePresence>


</SmoothScroll>


)

}