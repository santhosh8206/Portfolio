// src/components/SkillsSection.jsx

import RotatingGlobe from "../componets/RotatingGlobe";
import {motion} from "framer-motion";

export default function SkillsSection() {


  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-center justify-between mb-4">
        <motion.h3
  className="
    text-4xl font-bold mb-4 
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
    bg-clip-text text-transparent
    bg-[length:200%_200%]
  "
  initial={{ opacity: 0, y: 40 }}  // smooth slide-up + fade
  animate={{
    opacity: 1,
    y: 0,
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    scale: [1, 1.02, 1]
  }}
  transition={{
    opacity: { duration: 0.8, ease: "easeOut" },
    y: { duration: 0.8, ease: "easeOut" },
    backgroundPosition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear"
    },
    scale: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }}
>
  Skills
</motion.h3>
      </div>

      <p className="text-gray-600 mb-6">
        Visualize my tech stack — toggle between a rotating logos globe and orbiting skill spheres.
      </p>

      <div className="bg-white dark:bg-gray-100 rounded-2xl p-4 ">
       <RotatingGlobe/>
      </div>
    </section>
  );
}
