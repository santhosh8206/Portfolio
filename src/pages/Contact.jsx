import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion";
// Icons
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ID", 
        "template_9t1ms4j", 
        form.current,
        "GbyB-0ACeddsyfYZr"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
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
  Contact
</motion.h3>

      {/* ICON LINKS */}
      <div className="flex justify-center gap-6 mb-12 text-4xl">
        {/* twitter */}
        <a
          href="https://x.com/SANTHOSH8206"
          className="text-blue-600 hover:scale-110 transition-transform"
        >
          <FaXTwitter />
        </a>
        {/* Mail */}
        <a
          href="https://www.instagram.com/call_me_v3sandy"
          className="text-blue-600 hover:scale-110 transition-transform"
        >
          <FaInstagram />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/santhosh-baskaran-350"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:scale-110 transition-transform"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/santhosh8206"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:scale-110 transition-transform"
        >
          <FaGithub />
        </a>
      </div>

      {/* FORM */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-lg rounded-xl p-8 max-w-lg mx-auto"
      >
        <div className="flex flex-col gap-4">
          <input
            name="user_name"
            type="text"
            className="border p-3 rounded-lg"
            placeholder="Your Name"
            required
          />

          <input
            name="user_email"
            type="email"
            className="border p-3 rounded-lg"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="5"
            className="border p-3 rounded-lg"
            placeholder="Your Message"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
