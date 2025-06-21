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
                                After building a solid foundation in Civil Engineering with complex project management and analytical problem-solving, I discovered my passion for software development. This led me to complete an intensive full-stack development program while earning my MSc.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                                My engineering background brings unique strengths: systematic thinking, attention to detail, and experience managing complex technical requirements—skills that translate directly to building robust software solutions.
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
                            <p className="text-gray-700 text-sm sm:text-base">Stavanger resident with full work authorization</p>
                            <p className="text-gray-600 text-xs sm:text-sm mt-1">Open to opportunities nationwide + remote work</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 rounded-xl shadow-md">
                            <Languages className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mb-3" />
                            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Languages</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 text-sm sm:text-base">English</span>
                                    <span className="text-xs text-green-600 font-medium">Fluent</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 text-sm sm:text-base">Norwegian</span>
                                    <span className="text-xs text-blue-600 font-medium">Learning</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-xl shadow-md">
                            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mb-3" />
                            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Career Focus</h4>
                            <p className="text-gray-700 text-sm sm:text-base mb-2">Seeking junior developer or graduate positions</p>
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Full-stack</span>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Backend</span>
                                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Frontend</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:p-6 rounded-xl shadow-md">
                            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mb-3" />
                            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Availability</h4>
                            <p className="text-gray-700 text-sm sm:text-base">Available immediately</p>
                            <p className="text-gray-600 text-xs sm:text-sm mt-1">Ready for internships, junior roles, or graduate programs</p>
                        </div>
                    </div>
                </div>

                {/* Achievement Stats */}
                <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                        <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-lg sm:text-2xl font-bold text-gray-800">2+</p>
                        <p className="text-xs sm:text-sm text-gray-600">Years Learning</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
                        <div className="text-lg sm:text-2xl font-bold text-gray-800 mb-1">Full-Stack</div>
                        <p className="text-xs sm:text-sm text-gray-600">Projects Built</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                        <div className="text-lg sm:text-2xl font-bold text-gray-800 mb-1">Java</div>
                        <p className="text-xs sm:text-sm text-gray-600">Specialist</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                        <div className="text-lg sm:text-2xl font-bold text-gray-800 mb-1">Ready</div>
                        <p className="text-xs sm:text-sm text-gray-600">To Contribute</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;