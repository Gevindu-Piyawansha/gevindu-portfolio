import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

function Hero() {
    const [currentRole, setCurrentRole] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_q8mxbzq',
            'template_coyg85x',
            {
                from_name: name,
                from_email: email,
                message: message,
            },
            '73jkaxIQjcnGN8pWm'
        )
            .then(() => {
                alert('Message sent!');
                setIsModalOpen(false);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('EmailJS error:', error);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <section
            id="hero"
            className="
                w-full min-h-[80vh] 
                bg-gradient-to-br from-slate-100 to-blue-100 
                relative overflow-hidden 
                pt-[200px] md:pt-[240px] 
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
                    justify-between
                    gap-12 md:gap-16 lg:gap-20
                    px-4 sm:px-6 lg:px-12
                    min-h-[80vh]
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

                        {/* Contact Me Button */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="
                                px-6 sm:px-8 py-3 rounded-full 
                                border border-blue-600 text-blue-600 font-semibold
                                bg-transparent 
                                hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white 
                                transition-all duration-300 shadow-sm
                            "
                        >
                            Contact Me
                        </button>
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
                <div className="w-full md:w-1/2 flex justify-center items-center relative px-6 mt-8 md:mt-0">
                    <img
                        src="/profile.jpg"
                        alt="Gevindu Piyawansha"
                        className="
                            w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80
                            rounded-full object-cover shadow-2xl border-4 border-white
                        "
                    />
                </div>
            </div>

            {/* Chevron Down Button */}
            <div className="flex justify-center mt-10">
                <button
                    onClick={() =>
                        document
                            .getElementById('about')
                            ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="
            w-12 h-6 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-centertext-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 shadow-sm animate-bounce"
                    aria-label="Scroll to About"
                >
                    <ChevronDown className="w-6 h-6" />
                </button>
            </div>



            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Me</h2>
                        <form onSubmit={handleSubmit} noValidate className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded text-black focus:outline-none focus:ring focus:ring-blue-200"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded text-black focus:outline-none focus:ring focus:ring-blue-200"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded text-black focus:outline-none focus:ring focus:ring-blue-200"
                                ></textarea>
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="
                                        px-4 py-2 rounded 
                                        bg-blue-600 text-white font-semibold 
                                        hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 
                                        transition-all duration-300 shadow
                                    "
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Hero;
