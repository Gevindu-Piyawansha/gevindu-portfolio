import { User, MapPin, Languages, Briefcase, Calendar, Award } from 'lucide-react';

function About() {
    return (
        <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Passionate about creating efficient, scalable solutions through clean code and modern development practices
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Main Story */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl shadow-lg">
                            <User className="w-8 h-8 text-blue-600 mb-4" />
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Professional Journey</h3>
                            <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                                I’m a full-stack developer with strong Java backend skills and frontend expertise in React. I focus on building reliable, user-friendly applications while continuously improving my skills and adapting to new technologies.
                            </p>


                            {/* Key Strengths */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span>Problem-solving mindset</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span>Detail-oriented approach</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span>Project management skills</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span>Cross-functional collaboration</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 sm:p-6 rounded-xl shadow-md">
                            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mb-3" />
                            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Location & Work Rights</h4>
                            <p className="text-gray-700 text-sm sm:text-base">Stavanger, Norway resident with full work authorization</p>
                           
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 rounded-xl shadow-md">
                            <Languages className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mb-3" />
                            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Languages</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-gray-700 text-sm sm:text-base">Sinhala</span>
                                    <span className="text-xs text-green-500 font-medium">Native</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 text-sm sm:text-base">English</span>
                                    <span className="text-xs text-green-400 font-medium">Fluent</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 text-sm sm:text-base">Norwegian</span>
                                    <span className="text-xs text-blue-600 font-medium">Learning</span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

               
            </div>
        </section>
    );
}

export default About;