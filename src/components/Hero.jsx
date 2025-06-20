import { Code, MapPin, ChevronDown } from 'lucide-react';

function Hero() {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100 text-center px-6 relative"
        >
            {/* Circular Avatar */}
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg">
                GP
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 mb-2">
                Gevindu Piyawansha
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl text-gray-700 mb-4 font-medium">
                Aspiring Full-Stack Developer
            </h2>

            {/* Skills and Location */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-6 text-gray-600 text-base sm:text-lg">
                <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-600" />
                    <span>Java • Spring Boot • React</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>Stavanger, Norway</span>
                </div>
            </div>

            {/* Description */}
            <p className="max-w-xl text-gray-700 text-base sm:text-lg mb-8 px-4 leading-relaxed">
                Civil Engineer turned Software Developer with Norwegian residence permit, seeking junior developer
                opportunities in Norway's thriving tech sector.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap justify-center">
                <button
                    onClick={() => scrollToSection('projects')}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-transform duration-200"
                >
                    View My Work
                </button>
                <button
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                    Get In Touch
                </button>
            </div>

            {/* Down Arrow */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-8 h-8 text-gray-400" />
            </div>
        </section>
    );
}

export default Hero;
