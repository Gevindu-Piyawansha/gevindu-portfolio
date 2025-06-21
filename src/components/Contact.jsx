import { Mail, Phone, MapPin, Github, Linkedin, Calendar, Clock, MessageCircle, ExternalLink } from 'lucide-react';

function Contact() {
    const contactMethods = [
        {
            icon: Mail,
            label: "Email",
            value: "gevindu.piyawansha@gmail.com",
            href: "mailto:gevindu.piyawansha@gmail.com",
            description: "Best for detailed inquiries",
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+47 99875112",
            href: "tel:+4799875112",
            description: "Available during business hours",
            color: "text-green-600",
            bgColor: "bg-green-50"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Stavanger, Rogaland",
            href: null,
            description: "Open to relocation opportunities",
            color: "text-purple-600",
            bgColor: "bg-purple-50"
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            value: "View Portfolio",
            href: "https://github.com/Gevindu-Piyawansha",
            description: "Complete project showcase",
            color: "text-gray-800",
            bgColor: "bg-gray-50"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "Professional Profile",
            href: "https://www.linkedin.com/in/gevindu-piyawansha/",
            description: "Career background & connections",
            color: "text-blue-700",
            bgColor: "bg-blue-50"
        }
    ];

    const availability = {
        status: "Actively Seeking Opportunities",
        types: ["Junior Developer Positions", "Internship Programs", "Graduate Trainee Roles"],
        preferences: ["Full-time positions", "Remote or hybrid work", "Tech startups & established companies"]
    };

    return (
        <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                        Let's Connect
                    </h2>
                    <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                        Ready to contribute to innovative tech projects. Let's discuss how I can add value to your team.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <MessageCircle className="w-6 h-6 text-blue-600" />
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Get In Touch</h3>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
                                {contactMethods.map((method, index) => {
                                    const IconComponent = method.icon;
                                    const content = (
                                        <div className={`${method.bgColor} p-4 sm:p-6 rounded-xl hover:shadow-md transition-all duration-300 transform hover:scale-105 ${method.href ? 'cursor-pointer' : ''}`}>
                                            <div className="flex items-start gap-3 sm:gap-4">
                                                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${method.bgColor} rounded-lg flex items-center justify-center shadow-sm`}>
                                                    <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${method.color}`} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{method.label}</h4>
                                                    <p className={`${method.color} font-medium text-sm sm:text-base break-all`}>{method.value}</p>
                                                    <p className="text-gray-600 text-xs sm:text-sm mt-1">{method.description}</p>
                                                </div>
                                                {method.href && <ExternalLink className="w-4 h-4 text-gray-400" />}
                                            </div>
                                        </div>
                                    );

                                    return method.href ? (
                                        <a key={index} href={method.href} className="block">
                                            {content}
                                        </a>
                                    ) : (
                                        <div key={index}>
                                            {content}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Availability Status */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <Calendar className="w-6 h-6 text-green-600" />
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Availability</h3>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="font-semibold text-green-700 text-sm sm:text-base">{availability.status}</span>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Seeking:</h4>
                                    <ul className="space-y-1">
                                        {availability.types.map((type, index) => (
                                            <li key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                                {type}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Preferences:</h4>
                                    <ul className="space-y-1">
                                        {availability.preferences.map((pref, index) => (
                                            <li key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                                                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                                                {pref}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Professional Profiles */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <ExternalLink className="w-6 h-6 text-purple-600" />
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Professional Profiles</h3>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        {socialLinks.map((link, index) => {
                            const IconComponent = link.icon;
                            return (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${link.bgColor} p-4 sm:p-6 rounded-xl hover:shadow-md transition-all duration-300 transform hover:scale-105 block`}
                                >
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 ${link.bgColor} rounded-lg flex items-center justify-center shadow-sm`}>
                                            <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${link.color}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{link.label}</h4>
                                            <p className={`${link.color} font-medium text-sm sm:text-base`}>{link.value}</p>
                                            <p className="text-gray-600 text-xs sm:text-sm mt-1">{link.description}</p>
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-gray-400" />
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Work Authorization */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-600 font-bold text-lg">✓</span>
                            </div>
                            <span className="font-semibold text-gray-800 text-base sm:text-lg">Authorized to Work</span>
                        </div>
                        <div className="w-px h-6 bg-gray-300 hidden sm:block"></div>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Valid residence permit holder • Open to opportunities across the region
                        </p>
                    </div>
                </div>

                {/* Response Time */}
                <div className="text-center mt-8">
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700 text-sm">Typically responds within 24 hours</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;