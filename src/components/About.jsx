import { User, MapPin, Languages, Briefcase } from 'lucide-react';

function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                            <User className="w-8 h-8 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-4">Professional Journey</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                After a successful career in Civil Engineering, I transitioned to software development, completing the Comprehensive Master Java Developer diploma (IJSE) alongside an MSc in Civil Construction and Real Estate Management from Riga Technical University.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                I bring strong analytical thinking, problem-solving abilities, and attention to detail to every project, now applying those skills in full-stack development.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl">
                            <MapPin className="w-6 h-6 text-green-600 mb-3" />
                            <h4 className="font-semibold text-gray-800 mb-2">Norwegian Residence</h4>
                            <p className="text-gray-700">Full work rights with Norwegian residence permit</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                            <Languages className="w-6 h-6 text-purple-600 mb-3" />
                            <h4 className="font-semibold text-gray-800 mb-2">Languages</h4>
                            <p className="text-gray-700">Fluent in English, currently learning Norwegian</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                            <Briefcase className="w-6 h-6 text-blue-600 mb-3" />
                            <h4 className="font-semibold text-gray-800 mb-2">Career Goals</h4>
                            <p className="text-gray-700">Seeking junior developer or internship roles, open to relocation within Norway</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
