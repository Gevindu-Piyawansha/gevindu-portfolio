import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 w-full overflow-x-hidden">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 w-full pt-20">
        {/* pt-20 adds padding so content doesn't hide under fixed Navbar */}
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
