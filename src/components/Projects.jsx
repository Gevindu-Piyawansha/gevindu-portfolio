import { Code, Github, Database } from 'lucide-react';

const projects = [
    {
        title: 'Lost and Found Application',
        description: 'Full-stack web application with React frontend and Spring Boot backend. Features user authentication, RESTful API design, and database integration for managing lost and found items.',
        technologies: ['React', 'Spring Boot', 'MySQL', 'REST API', 'Authentication'],
        links: {
            frontend: 'https://github.com/Gevindu-Piyawansha/lost-and-found-react-front-end',
            backend: 'https://github.com/Gevindu-Piyawansha/lost-and-found-springboot-back-end'
        },
        highlights: ['User Authentication', 'Database Design', 'RESTful Architecture', 'Responsive UI']
    },
    {
        title: 'Course Registration System',
        description: 'Java Swing desktop application with MySQL backend for academic course management. Implements complex business logic for course prerequisites, enrollment validation, and academic record management.',
        technologies: ['Java', 'Swing', 'MySQL', 'JDBC', 'MVC Architecture'],
        links: {
            github: 'https://github.com/Gevindu-Piyawansha/CourseResistrationSystem'
        },
        highlights: ['Complex Business Logic', 'Database Design', 'Desktop UI', 'Academic Workflow']
    }
];

function Projects() {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <Code className="w-6 h-6 text-blue-600" />
                                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                            </div>

                            <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {project.highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                            {highlight}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6 flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                {project.links.frontend && (
                                    <a href={project.links.frontend} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                                        <Github className="w-4 h-4" />
                                        Frontend
                                    </a>
                                )}
                                {project.links.backend && (
                                    <a href={project.links.backend} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                                        <Database className="w-4 h-4" />
                                        Backend
                                    </a>
                                )}
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                                        <Github className="w-4 h-4" />
                                        View Code
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
