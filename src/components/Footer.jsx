import { Heart, Code, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/Gevindu-Piyawansha',
            icon: Github,
            hoverColor: 'hover:text-gray-800'
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/gevindu-piyawansha/',
            icon: Linkedin,
            hoverColor: 'hover:text-blue-600'
        },
        {
            name: 'Email',
            href: 'mailto:gevindu.piyawansha@gmail.com',
            icon: Mail,
            hoverColor: 'hover:text-red-500'
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId.replace('#', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-2">
                            <div className="mb-6">
                                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                                    Gevindu Piyawansha
                                </h3>
                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                    Full-Stack Developer passionate about creating innovative solutions.
                                    Combining strong engineering background with modern web technologies.
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                                <Code className="w-4 h-4" />
                                <span>Built with React & Tailwind CSS</span>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                                            rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                                            className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 ${social.hoverColor} hover:bg-gray-600 transition-all duration-300 transform hover:scale-110`}
                                            aria-label={social.name}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => scrollToSection(link.href)}
                                            className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm hover:underline text-left"
                                        >
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
                            <div className="space-y-3 text-sm">
                                <div className="text-gray-300">
                                    <p className="mb-1">📧 gevindu.piyawansha@gmail.com</p>
                                    <p className="mb-1">📱 +47 99875112</p>
                                    <p>📍 Stavanger, Rogaland</p>
                                </div>
                                <div className="mt-4 p-3 bg-gray-800 rounded-lg">
                                    <p className="text-green-400 text-xs font-medium mb-1">✅ Available for opportunities</p>
                                    <p className="text-gray-400 text-xs">Open to junior developer roles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
                                <p className="text-gray-400 text-sm">
                                    © {currentYear} Gevindu Piyawansha. All rights reserved.
                                </p>
                                <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
                                <div className="flex items-center gap-1 text-gray-400 text-sm">
                                    <span>Made with</span>
                                    <Heart className="w-4 h-4 text-red-500 fill-current" />
                                    <span>for the tech community</span>
                                </div>
                            </div>

                            {/* Back to Top Button */}
                            <button
                                onClick={scrollToTop}
                                className="group flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 transform hover:scale-105"
                                aria-label="Back to top"
                            >
                                <span className="text-gray-300 text-sm">Back to top</span>
                                <ArrowUp className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;