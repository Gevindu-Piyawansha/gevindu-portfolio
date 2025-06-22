import { ChevronDown, Github, Linkedin } from 'lucide-react';
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
            class="w-full min-h-[70vh] bg-gradient-to-br from-slate-100 to-blue-100 relative overflow-hidden py-2"
        >


            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[size:50px_40px]"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col-reverse md:flex-row items-center justify-between min-h-[calc(0vh-6rem)] relative z-10 gap-16">

                {/* Left side - Text content */}
                <div className="flex flex-col justify-center items-center text-center w-full md:w-1/2 space-y-6 pl-8 pr-38">
                    <h1 className="whitespace-nowrap text-3xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 leading-tight">
                        Gevindu Piyawansha
                    </h1>

                    <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium">
                        Aspiring {roles[currentRole]}
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

                    <div className="flex gap-6 justify-center">
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


                </div>

                {/* Right side - Profile Photo with badge */}
                <div className="w-full md:w-1/2 flex justify-center items-center relative pl-25">
                    <div className="relative">
                        <img
                            src="/profile.jpg"
                            alt="Gevindu Piyawansha"
                            className="w-72 h-72 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover shadow-2xl border-4 border-white"
                        />

                    </div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
                <button
                    onClick={() => scrollToSection('about')}
                    className="w-4 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-md"
                    aria-label="Scroll to about section"
                >

                    <ChevronDown className="w-2 h-1 text-gray-900 -mt-1" />

                </button>
            </div>
        </section >
    );
}

export default Hero;
