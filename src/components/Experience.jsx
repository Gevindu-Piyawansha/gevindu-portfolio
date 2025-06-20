import { Briefcase } from 'lucide-react';

function Experience() {
    return (
        <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
                </div>

                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                                CE
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Civil Engineer</h3>
                                <p className="text-blue-600 font-medium mb-3">Previous Career • Construction Industry</p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Managed complex construction projects, led multidisciplinary teams, and ensured compliance with technical and safety standards. Gained strong project management and analytical skills that now enhance my work as a software developer.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Project Management</span>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Problem Solving</span>
                                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Team Leadership</span>
                                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Technical Analysis</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
