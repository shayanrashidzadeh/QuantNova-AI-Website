import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import path from "node:path";
import { fileURLToPath } from "node:url";





const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);








export default defineConfig({



plugins:[

react(),

tailwindcss()

],







resolve:{


alias:{


"@":

path.resolve(

__dirname,

"./src"

)


}


},







server:{


host:true,


port:5173,


strictPort:true


},







build:{



target:"esnext",



cssMinify:true,



sourcemap:false,



chunkSizeWarningLimit:1200,






rollupOptions:{


output:{



manualChunks(id){



if(id.includes("node_modules")){



if(
id.includes("react") ||
id.includes("react-dom")
){


return "react-core";


}







if(
id.includes("framer-motion") ||
id.includes("lenis")
){


return "animation";


}







if(
id.includes("lucide-react")
){


return "icons";


}






if(
id.includes("i18next") ||
id.includes("react-i18next")
){


return "i18n";


}





}


}



}


}



},







optimizeDeps:{


include:[


"react",

"react-dom",

"framer-motion",

"lucide-react",

"lenis",

"i18next",

"react-i18next"


]


}






});