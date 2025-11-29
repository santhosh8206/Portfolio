import Header from "../src/componets/Header";
import Footer from "./componets/Footer";

import Hero from "../src/pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Sidebar from "./componets/Sidebar";
import RotatingGlobe from "./componets/RotatingGlobe";
import SkillsSection from "./pages/SkillsSection";

export default function App() {
  return (
    <div className="bg-gray-100 text-gray-900">
     <Header/>
     <Sidebar/>
      <Hero />
      <About />
      <SkillsSection/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
