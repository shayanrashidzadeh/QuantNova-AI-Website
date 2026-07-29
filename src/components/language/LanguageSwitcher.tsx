import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe2,
  Check,
  ChevronDown
} from "lucide-react";

import { useTranslation } from "react-i18next";



const languages = [

{code:"en",name:"English"},
{code:"fa",name:"فارسی"},
{code:"tr",name:"Türkçe"},
{code:"de",name:"Deutsch"},
{code:"fr",name:"Français"},
{code:"es",name:"Español"},
{code:"it",name:"Italiano"},
{code:"pt",name:"Português"},
{code:"ru",name:"Русский"},
{code:"zh",name:"中文"},
{code:"ja",name:"日本語"},
{code:"ko",name:"한국어"},
{code:"hi",name:"हिन्दी"},
{code:"nl",name:"Nederlands"},
{code:"pl",name:"Polski"},
{code:"sv",name:"Svenska"},
{code:"id",name:"Indonesia"},
{code:"vi",name:"Tiếng Việt"},
{code:"uk",name:"Українська"},
{code:"ar",name:"العربية"}

];



const rtlLanguages=[
"fa",
"ar"
];





export default function LanguageSwitcher(){


const [open,setOpen]=useState(false);


const {i18n}=useTranslation();



const currentCode =
i18n.language?.split("-")[0] || "en";



const current =
languages.find(
x=>x.code===currentCode
)
||
languages[0];




function changeLanguage(code:string){


i18n.changeLanguage(code);


localStorage.setItem(
"quantnova-language",
code
);



document.documentElement.dir =
rtlLanguages.includes(code)
?
"rtl"
:
"ltr";



document.documentElement.lang=code;


setOpen(false);

}






return(

<div
className="
relative
"
>



<button


type="button"


onClick={()=>setOpen(prev=>!prev)}


className="
flex
h-11
w-11
items-center
justify-center
rounded-full
border
border-cyan-400/30
bg-white/10
text-cyan-300
backdrop-blur-xl
shadow-[0_0_40px_rgba(34,211,238,.35)]
"

>


<Globe2 size={20}/>


</button>









<AnimatePresence>


{

open && (


<motion.div


initial={{
opacity:0,
y:-10
}}


animate={{
opacity:1,
y:0
}}


exit={{
opacity:0,
y:-10
}}



className="
fixed
right-6
top-20
z-[999999]
w-72
rounded-3xl
border
border-white/20
bg-[#020617]
p-4
shadow-[0_30px_120px_rgba(0,0,0,.9)]
"

>


<div

className="
mb-4
flex
items-center
justify-between
border-b
border-white/10
pb-3
text-white
"

>


<span className="font-bold">

Language

</span>


<div
className="
flex
items-center
gap-2
text-cyan-300
"

>

{current.name}

<ChevronDown size={15}/>

</div>



</div>








<div

className="
max-h-[420px]
space-y-1
overflow-y-auto
"

>


{

languages.map(lang=>(


<button


key={lang.code}


onClick={()=>changeLanguage(lang.code)}


className="
flex
w-full
items-center
justify-between
rounded-xl
px-4
py-3
text-sm
text-slate-300
hover:bg-cyan-400/10
hover:text-cyan-300
"

>


<span>

{lang.name}

</span>





{

current.code===lang.code &&

<Check
size={16}
className="text-cyan-300"
/>

}



</button>


))


}



</div>






</motion.div>


)


}



</AnimatePresence>




</div>

)

}