import { projects } from "../../data/projects";
import ProjectCard from "../componets/ProjectCard";
import TiltWrapper from "../componets/TiltWrapper";
import { motion } from "framer-motion";

// animation variants
const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20"
    >
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
  Projects
</motion.h3>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((proj) => (
          <motion.div key={proj.id} variants={cardVariant}>
            <TiltWrapper>
              <ProjectCard {...proj} />
            </TiltWrapper>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
