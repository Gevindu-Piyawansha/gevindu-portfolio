import React, { useState, useEffect } from 'react';

function Navbar() {
    const [activeSection, setActiveSection] = useState('hero');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
            const current = sections.find(section => {
                const el = document.getElementById(section);
                if (!el) return false;
                const rect = el.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = sectionId => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-100/90 backdrop-blur-md shadow-md' : 'bg-transparent'
                }`}
            style={{ height: '64px' }}
        >
            {/* Use the exact same container width class as Hero */}
            <div className="max-w-4xl mx-auto px-6 py-4 flex justify-center items-center h-full">
                {/* Left brand text with margin-right auto */}
                <div
                    className="text-4xl font-bold text-blue-800 cursor-pointer mr-12"
                    onClick={() => scrollToSection('hero')}
                >
                    Portfolio
                </div>

                {/* Centered menu */}
                <div className="hidden md:flex space-x-8">
                    {['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'].map(section => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={`capitalize transition-colors duration-200 ${activeSection === section ? 'text-blue-600 font-semibold bg-gray-200 rounded-md px-3 py-1' : 'text-gray-600 hover:text-blue-600'
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
