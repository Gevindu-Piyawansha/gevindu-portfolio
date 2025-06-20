import React, { useState, useEffect } from 'react';

function Navbar() {
    const [activeSection, setActiveSection] = useState('hero');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 overflow-x-hidden ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="w-full max-w-6xl mx-auto px-6 py-4 flex justify-between items-center overflow-x-hidden">
                <div
                    className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
                    onClick={() => scrollToSection('hero')}
                >
                    Gevindu Piyawansha
                </div>
                <div className="hidden md:flex space-x-8">
                    {['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'].map((section) => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={`capitalize transition-colors duration-200 ${activeSection === section ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                                }`}
                        >
                            {section === 'hero' ? 'Home' : section}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
