import {
  Code,
  Github,
  Database,
  ExternalLink,
  Star,
  Building2,
  Laptop,
} from "lucide-react";
import { useState } from "react";

const softwareProjects = [
  {
    title: "Construction Project Manager",
    subtitle: "Project Management Platform",
    description:
      "Comprehensive construction project management system for tracking projects, resources, and timelines with advanced reporting features.",
    technologies: ["TypeScript", "React", "Node.js", "Project Management"],
    links: {
      github:
        "https://github.com/Gevindu-Piyawansha/construction-project-manager",
    },
    highlights: [
      "Project Tracking",
      "Resource Management",
      "Timeline Planning",
      "Advanced Reporting",
    ],
    status: "In Progress",
    featured: true,
  },
  {
    title: "International Students Latvia",
    subtitle: "Full-Stack Marketplace Platform",
    description:
      "Full-stack platform for international students in Latvia to find apartments, food, cars, and peer-to-peer items. Built with C# .NET 8 Web API, React TypeScript, Tailwind CSS, and Firebase Firestore.",
    technologies: [
      "TypeScript",
      "React",
      "C# .NET 8",
      "Firebase Firestore",
      "Tailwind CSS",
      "Web API",
    ],
    links: {
      github:
        "https://github.com/Gevindu-Piyawansha/international-students-latvia",
    },
    highlights: [
      "Apartment Listings",
      "Marketplace Features",
      "Real-time Database",
      "Student Community Platform",
    ],
    status: "In Progress",
    featured: true,
  },
  {
    title: "Auto Wheel",
    subtitle: "Automotive Platform",
    description:
      "Comprehensive automotive platform for vehicle management, listings, and services with modern user interface and seamless experience.",
    technologies: ["JavaScript", "React", "REST API", "Database Management"],
    links: {
      github: "https://github.com/Gevindu-Piyawansha/Auto-Wheel",
    },
    highlights: [
      "Vehicle Listings",
      "Service Management",
      "User Dashboard",
      "Modern UI/UX",
    ],
    status: "In Progress",
    featured: true,
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Portfolio",
    description:
      "Modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
    technologies: ["JavaScript", "React", "Tailwind CSS", "Vite", "EmailJS"],
    links: {
      github: "https://github.com/Gevindu-Piyawansha/gevindu-portfolio",
    },
    highlights: [
      "Responsive Design",
      "Animations",
      "Contact Form",
      "Modern UI/UX",
    ],
    status: "Completed",
    featured: false,
  },
  {
    title: "Lost and Found Application",
    subtitle: "Full-Stack Web App",
    description:
      "React frontend with Spring Boot backend for managing lost and found items with secure authentication and real-time updates.",
    technologies: ["React", "Spring Boot", "MySQL", "JWT Auth", "REST API"],
    links: {
      frontend:
        "https://github.com/Gevindu-Piyawansha/lost-and-found-react-front-end",
      backend:
        "https://github.com/Gevindu-Piyawansha/lost-and-found-springboot-back-end",
    },
    highlights: [
      "JWT Authentication",
      "REST API",
      "Responsive UI",
      "CRUD Operations",
    ],
    status: "Completed",
    featured: false,
  },
  {
    title: "Course Registration System",
    subtitle: "Java Desktop App",
    description:
      "Comprehensive Java Swing application with MySQL backend for efficient course and student enrollment management.",
    technologies: ["Java", "Swing", "MySQL", "JDBC"],
    links: {
      github: "https://github.com/Gevindu-Piyawansha/CourseResistrationSystem",
    },
    highlights: [
      "Complex Business Logic",
      "Database Design",
      "Desktop UI",
      "Student Management",
    ],
    status: "Completed",
    featured: false,
  },
];

const civilProjects = [
  {
    title: "SCADA Wastewater Treatment Optimization",
    subtitle: "Master's Thesis Project",
    description:
      "Developing real-time monitoring solution for municipal wastewater treatment plants with IoT integration and predictive analytics for process optimization and cost reduction.",
    technologies: [
      "SCADA Systems",
      "IoT Sensors",
      "Data Analytics",
      "Process Control",
    ],
    links: {},
    highlights: [
      "Real-time Monitoring",
      "Process Optimization",
      "Predictive Maintenance",
      "Cost Reduction",
    ],
    status: "In Progress",
    featured: true,
    location: "Latvia",
    duration: "2024 - 2025",
    company: "Riga Technical University",
  },
];

function Projects() {
  const [activeTab, setActiveTab] = useState("software");

  const projects = activeTab === "software" ? softwareProjects : civilProjects;

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
          My Projects
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          A showcase of my work in both Software Development and Civil
          Engineering
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-md inline-flex">
            <button
              onClick={() => setActiveTab("software")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "software"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <Laptop className="w-5 h-5" />
              Software Development
            </button>
            <button
              onClick={() => setActiveTab("civil")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "civil"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <Building2 className="w-5 h-5" />
              Civil Engineering
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {activeTab === "software" ? (
                    <Code className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  ) : (
                    <Building2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-600">{project.subtitle}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {project.location && (
                <div className="flex flex-col gap-1 text-xs text-gray-500 mb-3">
                  <div className="flex gap-4">
                    <span>📍 {project.location}</span>
                    <span>📅 {project.duration}</span>
                  </div>
                  {project.company && <span>🏢 {project.company}</span>}
                </div>
              )}

              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                Key Highlights:
              </h4>
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
                    className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-800 px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {Object.keys(project.links).length > 0 && (
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                  {project.links.frontend && (
                    <a
                      href={project.links.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                    >
                      <Github className="w-4 h-4" /> Frontend
                    </a>
                  )}
                  {project.links.backend && (
                    <a
                      href={project.links.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                    >
                      <Database className="w-4 h-4" /> Backend
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                    >
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-green-600 hover:text-green-800 text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
