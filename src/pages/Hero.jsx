import profileImg from "../assets/_DSC0056a.jpg";
import { motion } from "framer-motion";

const text = "I'm Java Full Stack  Developer".split("");

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
    }
  })
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full max-w-screen-lg mx-auto px-6 py-20  mt-2 overflow-hidden"
    >
      {/* MAIN FLEX */}
      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* IMAGE WITH ROTATING RING */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">

            {/* ROTATING RING */}
            <div className="absolute w-58 h-58 md:w-66 md:h-66 rounded-full border-4 border-purple-400  animate-spin-slow z-30"></div>

            {/* PROFILE IMAGE */}
            <img
              src={profileImg}
              alt="Profile"
              className="w-56 h-56 md:w-64 md:h-64 rounded-full object-contain shadow-xl bg-white z-35"
            />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="text-center md:text-left md:w-1/2">

          {/* ANIMATED HEADING */}
          <motion.h2
            className="text-4xl md:text-5xl  font-extrabold mb-4 flex flex-wrap bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  bg-clip-text text-transparent  justify-center md:justify-start"
            initial="hidden"
            animate="visible"
          >
            {text.map((char, i) => (
              <motion.span key={i} custom={i} variants={letterAnimation}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-lg text-gray-700 mb-8"
          >
            I build modern web applications using React, Java & Spring Boot.
          </motion.p>

          {/* BUTTON */}
          <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700"
          >
            View My Work
          </motion.a>
        </div>
      </div>
    </section>
  );
}
