import { Database, Globe, Code, Languages, Wrench, Brain, Users, Target } from 'lucide-react';

const skillCategories = {
    'Backend Development': {
        icon: <Database className="w-6 h-6 text-blue-600" />,
        skills: [
            { name: 'Java', level: 85, description: 'Core language proficiency' },
            { name: 'Spring Boot', level: 80, description: 'RESTful APIs & microservices' },
            { name: 'Hibernate/JPA', level: 75, description: 'ORM and database integration' },
            { name: 'MySQL', level: 80, description: 'Database design & optimization' },
            { name: 'REST APIs', level: 85, description: 'API design & implementation' },
            { name: 'Maven', level: 70, description: 'Build automation & dependencies' }
        ],
        color: 'from-blue-500 to-blue-600'
    },
    'Frontend Development': {
        icon: <Globe className="w-6 h-6 text-green-600" />,
        skills: [
            { name: 'React', level: 80, description: 'Component-based development' },
            { name: 'JavaScript (ES6+)', level: 85, description: 'Modern JS features & patterns' },
            { name: 'HTML5 & CSS3', level: 90, description: 'Semantic markup & modern styling' },
            { name: 'Tailwind CSS', level: 85, description: 'Utility-first CSS framework' },
            { name: 'Responsive Design', level: 90, description: 'Mobile-first approach' },
            { name: 'React Hooks', level: 75, description: 'State management & effects' }
        ],
        color: 'from-green-500 to-green-600'
    },
    'Development Tools': {
        icon: <Wrench className="w-6 h-6 text-purple-600" />,
        skills: [
            { name: 'Git & GitHub', level: 85, description: 'Version control & collaboration' },
            { name: 'IntelliJ IDEA', level: 80, description: 'Professional IDE proficiency' },
            { name: 'VS Code', level: 85, description: 'Modern code editor mastery' },
            { name: 'Postman', level: 80, description: 'API testing & documentation' },
            { name: 'Chrome DevTools', level: 75, description: 'Debugging & performance analysis' },
            { name: 'npm/yarn', level: 70, description: 'Package management' }
        ],
        color: 'from-purple-500 to-purple-600'
    },
    'Professional Skills': {
        icon: <Brain className="w-6 h-6 text-orange-600" />,
        skills: [
            { name: 'Problem Solving', level: 95, description: 'Analytical & systematic approach' },
            { name: 'Agile/Scrum', level: 70, description: 'Iterative development practices' },
            { name: 'OOP Principles', level: 85, description: 'SOLID principles & design patterns' },
            { name: 'Testing', level: 70, description: 'Unit testing & debugging' },
            { name: 'Documentation', level: 80, description: 'Clear technical communication' },
            { name: 'Code Review', level: 75, description: 'Quality assurance practices' }
        ],
        color: 'from-orange-500 to-orange-600'
    }
};

const languages = [
    { name: 'English', level: 95, flag: '🇬🇧', description: 'Professional working proficiency' },
    { name: 'Norwegian', level: 40, flag: '🇳🇴', description: 'Currently learning (A2 level)' },
    { name: 'Sinhala', level: 100, flag: '🇱🇰', description: 'Native language' }
];

const softSkills = [
    { name: 'Team Collaboration', icon: <Users className="w-5 h-5" />, description: 'Cross-functional teamwork' },
    { name: 'Project Management', icon: <Target className="w-5 h-5" />, description: 'Planning & execution' },
    { name: 'Adaptability', icon: <Brain className="w-5 h-5" />, description: 'Quick learning & flexibility' },
    { name: 'Communication', icon: <Languages className="w-5 h-5" />, description: 'Clear technical communication' }
];

function Skills() {
    return (
        <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Technical Skills</h2>
                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Comprehensive full-stack development skills with focus on modern technologies and best practices
                    </p>
                </div>

                {/* Technical Skills Grid */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                    {Object.entries(skillCategories).map(([category, data], index) => (
                        <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                {data.icon}
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{category}</h3>
                            </div>

                            <div className="space-y-4">
                                {data.skills.map((skill, idx) => (
                                    <div key={idx} className="group">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-gray-800 text-sm sm:text-base">{skill.name}</span>
                                            <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                                            <div
                                                className={`bg-gradient-to-r ${data.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            {skill.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Languages Section */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mb-8 sm:mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Languages className="w-6 h-6 text-indigo-600" />
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Languages</h3>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {languages.map((lang, idx) => (
                            <div key={idx} className="text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                                <div className="text-2xl sm:text-3xl mb-2">{lang.flag}</div>
                                <h4 className="font-semibold text-gray-800 mb-2">{lang.name}</h4>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                    <div
                                        className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${lang.level}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-600">{lang.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                    <div className="text-center mb-8">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Professional Soft Skills</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Transferable skills from engineering background</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                        {softSkills.map((skill, idx) => (
                            <div key={idx} className="text-center p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:shadow-md transition-all duration-200">
                                <div className="text-blue-600 mb-3 flex justify-center">
                                    {skill.icon}
                                </div>
                                <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">{skill.name}</h4>
                                <p className="text-xs text-gray-600 leading-tight">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Learning Journey */}
                <div className="mt-8 sm:mt-12 text-center">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
                        <Code className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                            Continuous Learning Mindset
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                            Currently expanding skills in: Advanced Spring Security, Docker containerization,
                            and React testing frameworks. Always eager to learn new technologies and methodologies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;