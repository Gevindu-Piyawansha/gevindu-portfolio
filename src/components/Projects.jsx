import { Code, Github, Database, ExternalLink, Star } from 'lucide-react';

const projects = [
    {
        title: 'Lost and Found Application',
        subtitle: 'Full-Stack Web App',
        description: 'React frontend with Spring Boot backend for managing lost and found items.',
        technologies: ['React', 'Spring Boot', 'MySQL', 'JWT Auth'],
        links: {
            frontend: 'https://github.com/Gevindu-Piyawansha/lost-and-found-react-front-end',
            backend: 'https://github.com/Gevindu-Piyawansha/lost-and-found-springboot-back-end'
        },
        highlights: ['JWT Authentication', 'REST API', 'Responsive UI'],
        status: 'Completed',
        featured: true
    },
    {
        title: 'Course Registration System',
        subtitle: 'Java Desktop App',
        description: 'Java Swing application with MySQL backend for course and enrollment management.',
        technologies: ['Java', 'Swing', 'MySQL', 'JDBC'],
        links: {
            github: 'https://github.com/Gevindu-Piyawansha/CourseResistrationSystem'
        },
        highlights: ['Complex Logic', 'Database Design', 'Desktop UI'],
        status: 'Completed',
        featured: true
    },
    // add more projects here...
];

function Projects() {
    return (
        <section id="projects" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <Code className="w-6 h-6 text-blue-600" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                                    <p className="text-sm text-blue-600">{project.subtitle}</p>
                                </div>
                            </div>

                            <p className="text-gray-700 mb-4 text-sm">{project.description}</p>

                            <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                            <ul className="list-none text-gray-700 text-sm mb-4 space-y-1">
                                {project.highlights.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>


                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {project.links.frontend && (
                                    <a
                                        href={project.links.frontend}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                                    >
                                        <Github className="w-4 h-4" /> Frontend
                                    </a>
                                )}
                                {project.links.backend && (
                                    <a
                                        href={project.links.backend}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                                    >
                                        <Database className="w-4 h-4" /> Backend
                                    </a>
                                )}
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                                    >
                                        <Github className="w-4 h-4" /> Source Code
                                    </a>
                                )}
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-green-600 hover:text-green-800 text-sm font-medium"
                                    >
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
