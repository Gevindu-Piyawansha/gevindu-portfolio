import { Code, Github, Database, ExternalLink, Calendar, Users, Star } from 'lucide-react';

const projects = [
    {
        title: 'Lost and Found Application',
        subtitle: 'Full-Stack Web Application',
        description: 'Complete web application with React frontend and Spring Boot backend. Features secure user authentication, RESTful API design, and comprehensive database integration for managing lost and found items with real-time updates.',
        longDescription: 'This project demonstrates end-to-end development skills with modern web technologies. Implemented JWT authentication, role-based access control, and responsive design principles.',
        technologies: ['React', 'Spring Boot', 'MySQL', 'JWT Auth', 'REST API', 'Responsive UI'],
        links: {
            frontend: 'https://github.com/Gevindu-Piyawansha/lost-and-found-react-front-end',
            backend: 'https://github.com/Gevindu-Piyawansha/lost-and-found-springboot-back-end'
        },
        highlights: ['JWT Authentication', 'RESTful API Design', 'Database Optimization', 'Responsive UI/UX'],
        status: 'Completed',
        duration: '3 months',
        featured: true
    },
    {
        title: 'Course Registration System',
        subtitle: 'Desktop Application',
        description: 'Comprehensive Java Swing desktop application with MySQL backend for academic course management. Implements complex business logic for course prerequisites, enrollment validation, and academic record management.',
        longDescription: 'Built with MVC architecture pattern, this system handles complex academic workflows including prerequisite validation, capacity management, and grade tracking.',
        technologies: ['Java', 'Swing', 'MySQL', 'JDBC', 'MVC Pattern', 'Business Logic'],
        links: {
            github: 'https://github.com/Gevindu-Piyawansha/CourseResistrationSystem'
        },
        highlights: ['Complex Business Logic', 'Database Design', 'Desktop UI/UX', 'Academic Workflow'],
        status: 'Completed',
        duration: '2 months',
        featured: true
    },
    {
        title: 'Personal Portfolio Website',
        subtitle: 'React & Modern Web Tech',
        description: 'Responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode support, and optimized performance. Showcases modern web development practices.',
        longDescription: 'Self-developed portfolio demonstrating frontend skills, responsive design, and modern development practices. Includes performance optimization and accessibility features.',
        technologies: ['React', 'Tailwind CSS', 'Responsive Design', 'Performance Optimization'],
        links: {
            live: '#',
            github: '#'
        },
        highlights: ['Mobile-First Design', 'Performance Optimized', 'Accessibility', 'Modern UI/UX'],
        status: 'Ongoing',
        duration: '1 month',
        featured: false
    },
    {
        title: 'Weather Dashboard',
        subtitle: 'API Integration Project',
        description: 'Interactive weather application with real-time data from external APIs. Features location-based weather, forecasts, and responsive charts. Demonstrates API integration and data visualization skills.',
        longDescription: 'Practice project focusing on API consumption, error handling, and data presentation. Includes geolocation features and interactive weather maps.',
        technologies: ['JavaScript', 'REST APIs', 'Chart.js', 'Geolocation', 'Local Storage'],
        links: {
            github: '#',
            live: '#'
        },
        highlights: ['API Integration', 'Data Visualization', 'Error Handling', 'Geolocation'],
        status: 'Completed',
        duration: '2 weeks',
        featured: false
    }
];

function Projects() {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    const ProjectCard = ({ project, size = 'normal' }) => (
        <div className={`bg-gradient-to-br from-slate-50 to-blue-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 ${size === 'large' ? 'lg:col-span-2' : ''}`}>
            {/* Project Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                    <Code className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{project.title}</h3>
                        <p className="text-sm text-blue-600 font-medium">{project.subtitle}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.duration}
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                        {project.status}
                    </div>
                </div>
            </div>

            {/* Project Description */}
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                {size === 'large' ? project.longDescription : project.description}
            </p>

            {/* Key Features */}
            <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                            <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                            {highlight}
                        </div>
                    ))}
                </div>
            </div>

            {/* Technologies */}
            <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {tech}
                    </span>
                ))}
            </div>

            {/* Project Links */}
            <div className="flex flex-wrap gap-3">
                {project.links.frontend && (
                    <a href={project.links.frontend} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                        <Github className="w-4 h-4" />
                        Frontend
                    </a>
                )}
                {project.links.backend && (
                    <a href={project.links.backend} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                        <Database className="w-4 h-4" />
                        Backend
                    </a>
                )}
                {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                        <Github className="w-4 h-4" />
                        Source Code
                    </a>
                )}
                {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-600 hover:text-green-800 font-medium text-sm transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
}

export default Projects;
