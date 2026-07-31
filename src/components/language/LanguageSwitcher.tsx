import { useState, useEffect, useRef } from "react";
import { Globe2, Check, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";


const languages = [
  { code: "en", name: "English" },
  { code: "fa", name: "فارسی" },
  { code: "tr", name: "Türkçe" },
  { code: "de", name: "Deutsch" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
  { code: "it", name: "Italiano" },
  { code: "pt", name: "Português" },
  { code: "ru", name: "Русский" },
  { code: "zh", name: "中文" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
  { code: "ar", name: "العربية" }
];


const rtlLanguages = [
  "fa",
  "ar"
];



export default function LanguageSwitcher(){


  const [open,setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const { i18n } = useTranslation();



  const currentCode =
    i18n.language?.split("-")[0] || "en";


  const current =
    languages.find(
      item => item.code === currentCode
    ) || languages[0];





  useEffect(()=>{


    const handleClick = (e:MouseEvent)=>{


      if(
        wrapperRef.current &&
        !wrapperRef.current.contains(
          e.target as Node
        )
      ){

        setOpen(false);

      }


    };


    document.addEventListener(
      "mousedown",
      handleClick
    );


    return ()=>{

      document.removeEventListener(
        "mousedown",
        handleClick
      );

    };


  },[]);





  function changeLanguage(code:string){


    i18n.changeLanguage(code);


    localStorage.setItem(
      "quantnova-language",
      code
    );


    document.documentElement.lang = code;


    document.documentElement.dir =
      rtlLanguages.includes(code)
      ?
      "rtl"
      :
      "ltr";


    setOpen(false);

  }





  return (

    <div
      ref={wrapperRef}
      className="
      relative
      z-[999999]
      "
    >



      <button

        type="button"

        onClick={()=>setOpen(!open)}

        className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-cyan-400/40
        bg-white/10
        text-cyan-300
        transition
        hover:bg-white/20
        "
      >

        <Globe2 size={20}/>

      </button>





      {
        open && (


          <div

            className="
            absolute
            right-0
            top-14
            z-[999999]
            w-72
            rounded-3xl
            border
            border-white/20
            bg-[#020617]
            p-4
            shadow-2xl
            "

          >



            <div
              className="
              mb-3
              flex
              items-center
              justify-between
              border-b
              border-white/10
              pb-3
              "
            >

              <span
                className="
                text-sm
                font-bold
                text-white
                "
              >
                Language
              </span>


              <span
                className="
                flex
                items-center
                gap-1
                text-xs
                text-cyan-300
                "
              >

                {current.name}

                <ChevronDown size={14}/>

              </span>


            </div>





            <div
              className="
              max-h-80
              overflow-y-auto
              space-y-1
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
                      current.code === lang.code &&
                      (
                        <Check
                          size={16}
                          className="text-cyan-300"
                        />
                      )
                    }


                  </button>


                ))
              }


            </div>


          </div>


        )
      }



    </div>

  );

}