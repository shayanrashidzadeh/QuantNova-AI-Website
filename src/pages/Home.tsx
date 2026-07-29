import {
  lazy,
  Suspense
} from "react";


import Navbar from "../components/layout/Navbar";

import Hero from "../components/hero/Hero";

import SpaceBackground from "../components/background/SpaceBackground";






const Features = lazy(() =>
  import("../components/sections/Features")
);


const Performance = lazy(() =>
  import("../components/sections/Performance")
);


const Extension = lazy(() =>
  import("../components/sections/Extension")
);


const About = lazy(() =>
  import("../components/sections/About")
);


const Pricing = lazy(() =>
  import("../components/sections/Pricing")
);


const FAQ = lazy(() =>
  import("../components/sections/FAQ")
);


const Footer = lazy(() =>
  import("../components/layout/Footer")
);









function SectionLoader(){


return(

<div

className="
flex
h-64
items-center
justify-center
"

>


<div

className="
h-9
w-9
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











function LazySection({

children

}:{

children:React.ReactNode

}){


return(

<Suspense fallback={<SectionLoader />}>

{children}

</Suspense>

)

}











export default function Home(){



return(


<main


className="
relative
min-h-screen
overflow-hidden
bg-[#020617]
"

>



<SpaceBackground />







<div

className="
relative
z-10
"

>


<Navbar />



<Hero />







<LazySection>

<Features />

</LazySection>






<LazySection>

<Performance />

</LazySection>






<LazySection>

<Extension />

</LazySection>






<LazySection>

<About />

</LazySection>






<LazySection>

<Pricing />

</LazySection>






<LazySection>

<FAQ />

</LazySection>






<LazySection>

<Footer />

</LazySection>







</div>






</main>


)

}