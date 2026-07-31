import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe2,
  Check,
  ChevronDown
} from "lucide-react";

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
  { code: "hi", name: "हिन्दी" },
  { code: "nl", name: "Nederlands" },
  { code: "pl", name: "Polski" },
  { code: "sv", name: "Svenska" },
  { code: "id", name: "Indonesia" },
  { code: "vi", name: "Tiếng Việt" },
  { code: "uk", name: "Українська" },
  { code: "ar", name: "العربية" }
];


const rtlLanguages = [
  "fa",
  "ar"
];


export default function LanguageSwitcher() {


  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const { i18n } = useTranslation();



  const currentCode =
    i18n.language?.split("-")[0] || "en";


  const current =
    languages.find(
      lang => lang.code === currentCode
    ) || languages[0];




  useEffect(() => {


    function handleClickOutside(
      event: MouseEvent
    ) {

      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(
          event.target as Node
        )
      ) {

        setOpen(false);

      }

    }


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };


  }, []);





  function changeLanguage(
    code:string
  ) {


    i18n.changeLanguage(code);


    localStorage.setItem(
      "quantnova-language",
      code
    );


    document.documentElement.dir =
      rtlLanguages.includes(code)
        ? "rtl"
        : "ltr";


    document.documentElement.lang = code;


    setOpen(false);

  }






  return (

    <div
      ref={wrapperRef}
      className="
      relative
      "
    >



      <button

        type="button"

        onClick={() =>
          setOpen(prev => !prev)
        }


        aria-label="Change language"


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
        shadow-[0_0_25px_rgba(34,211,238,.25)]
        transition
        hover:bg-white/15
        "
      >

        <Globe2 size={20}/>

      </button>







      <AnimatePresence>


        {open && (

          <motion.div


            initial={{
              opacity:0,
              y:-8,
              scale:.96
            }}


            animate={{
              opacity:1,
              y:0,
              scale:1
            }}


            exit={{
              opacity:0,
              y:-8,
              scale:.96
            }}


            transition={{
              duration:.18
            }}



            className="
            absolute
            right-0
            top-14
            z-[999999]
            w-72
            rounded-3xl
            border
            border-white/15
            bg-[#020617]/95
            p-4
            shadow-[0_25px_80px_rgba(0,0,0,.7)]
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


              <div
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

              </div>


            </div>





            <div
              className="
              max-h-[360px]
              space-y-1
              overflow-y-auto
              pr-1
              "
            >

              {
                languages.map(lang => (

                  <button

                    key={lang.code}

                    onClick={() =>
                      changeLanguage(lang.code)
                    }


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
                    transition
                    hover:bg-cyan-400/10
                    hover:text-cyan-300
                    "
                  >

                    <span>
                      {lang.name}
                    </span>


                    {
                      current.code === lang.code && (

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



          </motion.div>

        )}


      </AnimatePresence>


    </div>

  );

}