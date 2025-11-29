import { motion } from "framer-motion";
import { Home, User, FolderKanban, Mail, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { id: 1, icon: <Home size={22} />, label: "Home", link: "#hero" },
    { id: 2, icon: <User size={22} />, label: "About", link: "#about" },
    { id: 3, icon: <TrendingUp size={22} />, label: "Skills", link: "#skills" },
    { id: 4, icon: <FolderKanban size={22} />, label: "Projects", link: "#projects" },
    { id: 5, icon: <Mail size={22} />, label: "Contact", link: "#contact" },
  ];

  return (
    <aside
      className="
        fixed z-50 
        flex items-center 
        backdrop-blur-xl

        /* Desktop Sidebar (vertical) */
        md:flex-col md:w-20 md:right-0 md:top-1/4 md:h-auto md:py-6 md:gap-10

        /* Mobile Bottom Bar */
        max-md:bottom-0 max-md:left-0 max-md:right-0 
        max-md:w-full max-md:h-20
        max-md:flex-row max-md:justify-center max-md:gap-6
      "
    >
      {navItems.map((item) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <a
            href={item.link}
            className="w-12 h-12 rounded-full bg-white hover:bg-gray-200 
                     flex items-center justify-center shadow-md transition"
          >
            {item.icon}
          </a>

          {/* Tooltip */}
          {hovered === item.id && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="
                absolute whitespace-nowrap 
                text-sm bg-gray-900 text-white px-3 py-1 
                rounded-lg shadow-lg

                /* Desktop tooltip */
                md:right-20 md:top-1/2 md:-translate-y-1/2

                /* Mobile tooltip */
                max-md:left-1/2 max-md:-translate-x-1/2 max-md:bottom-14
              "
            >
              {item.label}
            </motion.div>
          )}
        </div>
      ))}
    </aside>
  );
}
