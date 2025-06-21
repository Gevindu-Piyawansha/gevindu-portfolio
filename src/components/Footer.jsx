import {
    Heart,
    Code,
    Github,
    Linkedin,
    Mail,
    Phone,
    ArrowUp,
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px- py-12 sm:py-2 flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Brand & Social */}
                <div className="flex flex-col justify-between md:flex-row md:items-center md:gap-8 w-full md:w-auto">
                    <div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 whitespace-nowrap">
                            Feel free to reach out
                        </h3>
                        <p className="text-gray-400 mb-6 flex items-center gap-2">
                            <Code className="w-5 h-5" />
                            Built with React & Tailwind CSS
                        </p>
                    </div>

                    <div className="flex gap-4 flex-wrap md:flex-nowrap">
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
                                    className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 ${social.hoverColor} hover:bg-gray-600 transition-all duration-300 transform hover:scale-110`}
                                    aria-label={social.name}
                                >
                                    <IconComp className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Contact Info - aligned right */}
                <div className="text-right text-gray-300 text-sm whitespace-nowrap w-full md:w-auto">
                    <p>📧 gevindu.piyawansha@gmail.com</p>
                    <p>📱 +47 99875112</p>
                    <p>📍 Stavanger, Norway</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-4 pt-4 max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm text-center sm:text-left">
                        © {currentYear} Gevindu Piyawansha. All rights reserved.
                    </p>
                    <div className="hidden sm:flex items-center gap-2 text-gray-400 text-sm">
                        <span>Made with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-current" />
                        <span>for the tech community</span>
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 transform hover:scale-105"
                        aria-label="Back to top"
                    >
                        <span className="text-gray-300 text-sm">Back to top</span>
                        <ArrowUp className="w-3 h-3 text-gray-300 group-hover:text-white transition-colors" />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
