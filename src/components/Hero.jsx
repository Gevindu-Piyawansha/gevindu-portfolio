import { Github, Linkedin } from 'lucide-react';
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
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="
                w-full min-h-[80vh] 
                bg-gradient-to-br from-slate-100 to-blue-100 
                relative overflow-hidden 
                pt-[240px] md:pt-[240px] 
                pb-8 px-4 sm:px-6 lg:px-12
            "
        >
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[size:50px_40px]"></div>
            </div>

            <div
                className="
                    max-w-[1400px] mx-auto
                    flex flex-col-reverse md:flex-row
                    items-center md:items-center
                    justify-center md:justify-between
                    min-h-[80vh] md:min-h-screen
                    relative z-10
                    gap-12 md:gap-16 lg:gap-20
                    px-4 sm:px-6 lg:px-12
                "
            >
                {/* Left side - Text */}
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full md:w-1/2 space-y-6">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 leading-normal">
                        Gevindu Piyawansha
                    </h1>

                    <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium">
                        Aspiring {roles[currentRole]}
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button
                            onClick={() =>
                                document
                                    .getElementById('projects')
                                    ?.scrollIntoView({ behavior: 'smooth' })
                            }
                            className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md"
                        >
                            View My Work
                        </button>
                        <a
                            href="mailto:gevindu.piyawansha@gmail.com"
                            className="px-6 sm:px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="flex gap-6 justify-center md:justify-start mt-8">
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

                {/* Right side - Photo */}
                <div className="w-full md:w-1/2 flex justify-center items-center relative px-6 pt-16 sm:pt-12 md:pt-16">
                    <img
                        src="/profile.jpg"
                        alt="Gevindu Piyawansha"
                        className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-white"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
