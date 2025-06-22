import React, { useState, useEffect } from 'react';

function Navbar() {
    const [activeSection, setActiveSection] = useState('hero');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = ['hero', 'about', 'experience', 'projects', 'education'];
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

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100'
                    : 'bg-white/70 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
                <div
                    className="text-3xl font-extrabold text-blue-600 cursor-pointer hover:opacity-80 transition pr-30"
                    onClick={() => scrollToSection('hero')}
                >
                    Portfolio
                </div>

                <div className="hidden md:flex space-x-10">
                    {[
                        { id: 'hero', label: 'Home' },
                        { id: 'about', label: 'About' },
                        { id: 'experience', label: 'Experience' },
                        { id: 'projects', label: 'Projects' },
                        { id: 'education', label: 'Education' }
                    ].map(section => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`relative px-3 py-2 text-base font-medium transition ${activeSection === section.id
                                    ? 'text-blue-700'
                                    : 'text-gray-600 hover:text-blue-600'
                                }`}
                        >
                            {section.label}
                            {activeSection === section.id && (
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-blue-600 transition-all duration-300"></div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
