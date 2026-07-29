import { motion } from "framer-motion";


export default function Galaxy() {

  return (

    <motion.div

      animate={{
        rotate:360,
      }}

      transition={{
        duration:160,
        repeat:Infinity,
        ease:"linear",
      }}

      className="
      absolute
      left-1/2
      top-[15%]
      h-[900px]
      w-[900px]
      -translate-x-1/2
      rounded-full
      opacity-60
      "
    >


      {/* Main Spiral */}

      <div
        className="
        absolute
        inset-0
        rounded-full
        bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.8)_0%,rgba(34,211,238,.35)_12%,rgba(124,58,237,.25)_35%,transparent_65%)]
        "
      />



      {/* Purple Arm */}

      <div
        className="
        absolute
        left-[10%]
        top-[20%]
        h-[500px]
        w-[800px]
        rotate-[-25deg]
        rounded-full
        bg-[radial-gradient(ellipse,rgba(139,92,246,.45),transparent_65%)]
        "
      />



      {/* Cyan Arm */}

      <div
        className="
        absolute
        right-[5%]
        bottom-[15%]
        h-[400px]
        w-[750px]
        rotate-[35deg]
        rounded-full
        bg-[radial-gradient(ellipse,rgba(34,211,238,.35),transparent_65%)]
        "
      />



      {/* Core */}

      <motion.div

        animate={{
          scale:[
            1,
            1.15,
            1,
          ],
        }}

        transition={{
          duration:8,
          repeat:Infinity,
        }}

        className="
        absolute
        left-1/2
        top-1/2
        h-40
        w-40
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-white/40
        shadow-[0_0_120px_60px_rgba(34,211,238,.25)]
        "
      />


    </motion.div>

  );
}