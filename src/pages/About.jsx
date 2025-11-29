import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-10">

      {/* Heading Animation */}
      <motion.h3
  className="
    text-4xl font-bold mb-8 
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
  About
</motion.h3>

      {/* Paragraph Animation */}
      <motion.p
        className="text-lg text-gray-700 leading-relaxed"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        I am a passionate Java Full Stack Developer with hands-on experience using modern tools, frameworks, and industry best practices. I enjoy collaborating with cross-functional teams and colleagues to build impactful, high-quality software solutions. I’m always eager to learn, grow, and contribute to innovative projects.
      </motion.p>

    </section>
  );
}
