import { Code, MapPin, ChevronDown, Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

function Hero() {
    const [currentRole, setCurrentRole] = useState(0);
    const roles = [
        'Full-Stack Developer',
        'Problem Solver',
        'Team Collaborator',
        'Continuous Learner'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="min-h-[600px] flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100 text-center px-4 sm:px-6 relative overflow-visible pt-24"
        >


            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[size:50px_40px]"></div>
            </div>

            {/* Professional Avatar */}
            <div className="relative mb-8 flex justify-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl sm:text-4xl font-bold shadow-2xl">
                    GP
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* Name with enhanced typography */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 mb-2 leading-tight">
                Gevindu Piyawansha
            </h1>

            {/* Animated Role Subtitle */}
            <div className="h-8 sm:h-10 mb-6">
                <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium transition-all duration-500">
                    Aspiring {roles[currentRole]}
                </h2>
            </div>





            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                    onClick={() => scrollToSection('projects')}
                    className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md"
                >
                    View My Work
                </button>
                <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 sm:px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                    Get In Touch
                </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mb-12">
                <a
                    href="https://github.com/Gevindu-Piyawansha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-200 shadow-md"
                    aria-label="GitHub Profile"
                >
                    <Github className="w-5 h-5" />
                </a>
                <a
                    href="https://www.linkedin.com/in/gevindu-piyawansha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-200 shadow-md"
                    aria-label="LinkedIn Profile"
                >
                    <Linkedin className="w-5 h-5" />
                </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <button
                    onClick={() => scrollToSection('about')}
                    className="w-8 h-8 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center hover:bg-white/70 transition-colors"
                    aria-label="Scroll to about section"
                >
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                </button>
            </div>
        </section>
    );
}

export default Hero;
