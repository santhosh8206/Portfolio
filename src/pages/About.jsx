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
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: 1,
          y: 0,
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          scale: [1, 1.02, 1],
        }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut" },
          y: { duration: 0.8, ease: "easeOut" },
          backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        About
      </motion.h3>

      {/* About description */}
      <motion.p
        className="text-lg text-gray-700 leading-relaxed mb-10"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        I am a passionate Java Full Stack Developer with hands-on experience using
        modern tools, frameworks, and industry-standard best practices. I enjoy
        collaborating with teams to build impactful, high-quality software solutions.
        I am always eager to learn, explore new technologies, and contribute to
        meaningful projects.
      </motion.p>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Internship Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl shadow-lg border bg-white hover:shadow-xl transition-all"
        >
          <h4 className="text-2xl font-semibold text-blue-600 mb-3">
            Internship
          </h4>
          <p className="text-gray-700">
            Completed a Full Stack Development Internship at{" "}
            <span className="font-semibold text-gray-900">
              Izeon Innovative Solutions
            </span>,
            where I worked on real projects using Java, Spring Boot, REST APIs,
            and database integration. This experience improved my real-time problem-solving
            and strengthened my end-to-end development skills.
          </p>
        </motion.div>

        {/* Academic Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl shadow-lg border bg-white hover:shadow-xl transition-all"
        >
          <h4 className="text-2xl font-semibold text-purple-600 mb-3">
            Academic Details
          </h4>
          <p className="text-gray-700">
            Graduated from{" "}
            <span className="font-semibold text-gray-900">
              A.V.C College of Engineering
            </span>{" "}
            with a Bachelor's degree in{" "}
            <span className="font-semibold text-gray-900">
              Electronics and Communication Engineering (ECE)
            </span>.
            Built a strong foundation in programming, software concepts, and
            engineering fundamentals while participating in academic and technical
            activities.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
