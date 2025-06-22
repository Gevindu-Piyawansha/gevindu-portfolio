import {
    Heart,
    Code,
    Github,
    Linkedin,
    Mail,
    Phone,
    ChevronUp,
} from 'lucide-react';

function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/Gevindu-Piyawansha',
            icon: Github,
            hoverColor: 'hover:text-gray-800',
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/gevindu-piyawansha/',
            icon: Linkedin,
            hoverColor: 'hover:text-blue-600',
        },
        {
            name: 'Email',
            href: 'mailto:gevindu.piyawansha@gmail.com',
            icon: Mail,
            hoverColor: 'hover:text-red-500',
        },
        {
            name: 'Phone',
            href: 'tel:+4799875112',
            icon: Phone,
            hoverColor: 'hover:text-green-600',
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                ></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Main Content */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12">
                    {/* Left Section */}
                    <div className="text-center lg:text-left flex-1">
                        <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                            Feel free to reach out
                        </h3>
                        <p className="text-gray-400 mb-6 flex items-center justify-center lg:justify-start gap-2">
                            <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                            Built with React & Tailwind CSS
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap">
                            {socialLinks.map((social, idx) => {
                                const IconComp = social.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target={
                                            social.href.startsWith('mailto:') ||
                                                social.href.startsWith('tel:')
                                                ? '_self'
                                                : '_blank'
                                        }
                                        rel={
                                            social.href.startsWith('mailto:') ||
                                                social.href.startsWith('tel:')
                                                ? undefined
                                                : 'noopener noreferrer'
                                        }
                                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 ${social.hoverColor} hover:bg-gray-600 transition-all duration-300 transform hover:scale-110`}
                                        aria-label={social.name}
                                    >
                                        <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="text-center lg:text-right text-gray-300 text-sm sm:text-base space-y-1 sm:space-y-2 flex-shrink-0">
                        <p className="flex items-center justify-center lg:justify-end gap-2">
                            <span>📧</span>
                            <span className="break-all">gevindu.piyawansha@gmail.com</span>
                        </p>
                        <p className="flex items-center justify-center lg:justify-end gap-2">
                            <span>📱</span>
                            <span>+47 99875112</span>
                        </p>
                        <p className="flex items-center justify-center lg:justify-end gap-2">
                            <span>📍</span>
                            <span>Stavanger, Norway</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                        <p className="text-gray-400 text-xs sm:text-sm">
                            © {currentYear} Gevindu Piyawansha. All rights reserved.
                        </p>

                        <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                            <span>Made with</span>
                            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-current" />
                            <span>for the tech community</span>
                        </div>
                    </div>
                </div>

                
            </div>
        </footer>
    );
}

export default Footer;
