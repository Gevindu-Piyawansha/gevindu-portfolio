import { useState } from "react";
import { Menu, X } from "lucide-react"; // or use any icon library

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div
          className="text-2xl font-extrabold text-blue-600 cursor-pointer hover:text-blue-700 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Portfolio
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          <a
            href="#about"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            About Me
          </a>
          <a
            href="#experience"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Projects
          </a>
          <a
            href="#education"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Education
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-4">
          <a
            href="#about"
            className="block text-gray-600 hover:text-blue-600 font-medium"
            onClick={toggleMenu}
          >
            {" "}
            About Me
          </a>
          <a
            href="#experience"
            className="block text-gray-600 hover:text-blue-600 font-medium"
            onClick={toggleMenu}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="block text-gray-600 hover:text-blue-600 font-medium"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#education"
            className="block text-gray-600 hover:text-blue-600 font-medium"
            onClick={toggleMenu}
          >
            Education
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
