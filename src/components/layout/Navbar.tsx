import { useState } from "react";
import { Sparkles, ArrowUpRight, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import logo from "../../assets/logo/quantnova-logo.webp";
import LanguageSwitcher from "../language/LanguageSwitcher";


const links = [
  {
    key:"features",
    target:"features"
  },
  {
    key:"ai",
    target:"performance"
  },
  {
    key:"extension",
    target:"extension"
  },
  {
    key:"about",
    target:"about"
  },
  {
    key:"pricing",
    target:"pricing"
  }
];



export default function Navbar(){


  const [open,setOpen] = useState(false);

  const {t} = useTranslation();



  const scrollToSection = (id:string)=>{


    const section =
      document.getElementById(id);


    if(section){

      section.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });

    }


    setOpen(false);

  };





  return (

    <nav

      className="
      fixed
      top-6
      left-1/2
      z-[9999]
      w-[92%]
      max-w-7xl
      -translate-x-1/2
      "

    >


      <div

        className="
        relative
        rounded-[34px]
        border
        border-white/10
        bg-[#020617]/90
        px-5
        py-4
        backdrop-blur-xl
        shadow-[0_25px_80px_rgba(0,0,0,.6)]
        md:px-7
        "

      >



        <div
          className="
          flex
          items-center
          justify-between
          "
        >



          <button

            onClick={()=>scrollToSection("hero")}

            className="
            flex
            items-center
            gap-3
            "

          >

            <div

              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-cyan-300/20
              bg-white/5
              "

            >

              <img

                src={logo}

                alt="QuantNova AI"

                className="
                h-10
                w-10
                object-contain
                "

              />

            </div>



            <div>

              <h1
                className="
                text-lg
                font-black
                text-white
                "
              >
                QuantNova AI
              </h1>


              <p
                className="
                text-[10px]
                font-bold
                tracking-[0.35em]
                text-cyan-300
                "
              >
                {t("hero.creator","BY SHAYAN")}
              </p>


            </div>


          </button>






          <div

            className="
            hidden
            items-center
            gap-7
            lg:flex
            "

          >

            {
              links.map(item=>(

                <button

                  key={item.key}

                  onClick={()=>scrollToSection(item.target)}

                  className="
                  text-sm
                  font-medium
                  text-slate-300
                  transition
                  hover:text-white
                  "

                >

                  {t(`navbar.${item.key}`)}

                </button>

              ))
            }


          </div>







          <div

            className="
            hidden
            items-center
            gap-4
            lg:flex
            "

          >

            <LanguageSwitcher />


            <button

              onClick={()=>scrollToSection("extension")}

              className="
              flex
              items-center
              gap-2
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-violet-600
              px-7
              py-3
              font-black
              text-white
              "

            >

              <Sparkles size={17}/>

              {t("navbar.launch")}

              <ArrowUpRight size={16}/>


            </button>


          </div>






          <button

            onClick={()=>setOpen(!open)}

            className="
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-3
            text-white
            lg:hidden
            "

          >

            {
              open
              ?
              <X size={22}/>
              :
              <Menu size={22}/>
            }


          </button>


        </div>







        {
          open && (


            <div

              className="
              mt-5
              rounded-3xl
              border
              border-white/10
              bg-[#020617]
              p-5
              lg:hidden
              "

            >


              <div className="mb-5">

                <LanguageSwitcher />

              </div>



              {
                links.map(item=>(

                  <button

                    key={item.key}

                    onClick={()=>scrollToSection(item.target)}

                    className="
                    block
                    w-full
                    rounded-xl
                    px-4
                    py-3
                    text-left
                    text-slate-300
                    hover:bg-white/5
                    "

                  >

                    {t(`navbar.${item.key}`)}

                  </button>

                ))
              }


            </div>


          )
        }




      </div>


    </nav>

  );

}