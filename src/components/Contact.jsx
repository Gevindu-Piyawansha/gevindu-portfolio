import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

function Contact() {
    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Connect</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
                    <p className="text-gray-600 text-lg">
                        Ready to contribute to Norway's tech industry. Let's discuss how I can add value to your team.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                        <div className="space-y-4">
                            <a href="mailto:gevindu.piyawansha@gmail.com" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors">
                                <Mail className="w-5 h-5" />
                                <span>gevindu.piyawansha@gmail.com</span>
                            </a>
                            <a href="tel:+4799875112" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors">
                                <Phone className="w-5 h-5" />
                                <span>+47 99875112</span>
                            </a>
                            <div className="flex items-center gap-4 text-gray-700">
                                <MapPin className="w-5 h-5" />
                                <span>Stavanger, Norway</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">Professional Profiles</h3>
                        <div className="space-y-4">
                            <a href="https://github.com/Gevindu-Piyawansha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors">
                                <Github className="w-5 h-5" />
                                <span>GitHub Portfolio</span>
                            </a>
                            <a href="https://www.linkedin.com/in/gevindu-piyawansha/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors">
                                <Linkedin className="w-5 h-5" />
                                <span>LinkedIn Profile</span>
                            </a>
                        </div>

                        <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                            <p className="text-sm text-gray-600 text-center">
                                🇳🇴 Norwegian residence permit holder<br />
                                Open to opportunities across Norway
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
