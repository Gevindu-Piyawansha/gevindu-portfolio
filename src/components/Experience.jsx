import { Briefcase, Code, Users, Target, Calendar, MapPin } from 'lucide-react';

function Experience() {
    const experiences = [
        {
            title: "Full-Stack Developer",
            company: "Personal Projects & Learning",
            location: "Remote/Stavanger",
            period: "2023 - Present",
            type: "Self-Directed Learning",
            icon: <Code className="w-6 h-6" />,
            description: "Intensive self-directed learning journey transitioning from Civil Engineering to Software Development, completing comprehensive full-stack development program.",
            achievements: [
                "Built multiple full-stack applications using React and Spring Boot",
                "Mastered modern development tools and methodologies",
                "Developed strong foundation in database design and API development",
                "Implemented responsive design and user experience principles"
            ],
            technologies: ["Java", "Spring Boot", "React", "MySQL", "REST APIs", "Git"],
            color: "from-blue-500 to-purple-600"
        },
        {
            title: "Civil Engineer",
            company: "Construction Industry",
            location: "Previous Role",
            period: "2018 - 2023",
            type: "Professional Experience",
            icon: <Briefcase className="w-6 h-6" />,
            description: "Led complex infrastructure projects from conception to completion, managing multidisciplinary teams and ensuring compliance with technical standards and safety regulations.",
            achievements: [
                "Managed projects worth millions, delivering on time and within budget",
                "Led cross-functional teams of 10+ professionals",
                "Developed systematic problem-solving methodologies",
                "Implemented quality assurance processes and risk management strategies"
            ],
            technologies: ["Project Management", "Technical Analysis", "Team Leadership", "Risk Assessment"],
            color: "from-green-500 to-blue-600",
            transferableHighlights: [
                "Project planning and execution",
                "Technical problem-solving",
                "Cross-functional team collaboration",
                "Quality assurance mindset"
            ]
        }
    ];

    return (
        <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Professional Experience</h2>
                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Combining technical expertise from engineering with modern software development skills
                    </p>
                </div>

                <div className="space-y-8 sm:space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${exp.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                                    {exp.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{exp.title}</h3>
                                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                                            {exp.type}
                                        </span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mb-3">
                                        <p className="font-medium text-gray-700">{exp.company}</p>
                                        <div className="flex items-center gap-4 text-sm">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {exp.period}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>

                            {/* Achievements */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-blue-600" />
                                    Key Achievements
                                </h4>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {exp.achievements.map((achievement, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{achievement}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Transferable Skills (for Civil Engineering) */}
                            {exp.transferableHighlights && (
                                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                                    <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">
                                        Transferable to Software Development:
                                    </h4>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                        {exp.transferableHighlights.map((skill, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                                                <span>{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Technologies */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">
                                    Technologies & Skills:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, idx) => (
                                        <span key={idx} className={`px-3 py-1 rounded-full text-sm font-medium ${index === 0
                                                ? 'bg-blue-100 text-blue-800'
                                                : 'bg-green-100 text-green-800'
                                            }`}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-12 sm:mt-16 text-center">
                    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
                        <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                            Ready to Bring Both Worlds Together
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            My unique combination of engineering rigor and fresh software development skills
                            brings a methodical, solution-oriented approach to development teams.
                            Ready to contribute from day one while continuing to grow and learn.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;