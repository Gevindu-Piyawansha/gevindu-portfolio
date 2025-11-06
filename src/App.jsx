import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      <Hero
        isContactModalOpen={isContactModalOpen}
        setIsContactModalOpen={setIsContactModalOpen}
      />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
