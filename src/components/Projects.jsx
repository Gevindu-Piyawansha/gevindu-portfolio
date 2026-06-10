import {
  Github,
  ExternalLink,
  Star,
  Layers,
} from "lucide-react";

const projects = [
  {
    title: "BIM Development Projects",
    subtitle: "Revit · Navisworks · Dynamo · Inventor",
    description:
      "Ongoing self-initiated BIM practice developing coordinated 3D models, Dynamo automation scripts, and digital workflows aligned with ISO 19650 standards. Covers architectural, structural, and MEP modelling exercises across residential and infrastructure typologies.",
    technologies: ["Autodesk Revit", "Navisworks", "Dynamo", "Inventor", "ISO 19650"],
    links: {},
    highlights: [
      "3D Multi-discipline Modelling",
      "Dynamo Scripting & Automation",
      "ISO 19650 Information Workflows",
      "Clash Detection Practice",
    ],
    status: "In Progress",
    duration: "2025 – Present",
  },
  {
    title: "SCADA Digital Twin – Wastewater Treatment",
    subtitle: "Master's Thesis · Riga Technical University",
    description:
      "Developed a real-time monitoring and digital twin concept for municipal wastewater treatment plants. Integrates SCADA sensor data with BIM asset models for predictive maintenance, process optimisation, and operational cost reduction.",
    technologies: ["SCADA Systems", "IoT Sensors", "Digital Twin", "BIM", "Data Analytics", "Process Control"],
    links: {},
    highlights: [
      "Digital Twin Integration",
      "Real-time Sensor Monitoring",
      "Predictive Maintenance Model",
      "Process Optimisation",
    ],
    status: "Completed",
    duration: "2024 – 2025",
    company: "Riga Technical University, Latvia",
  },
  {
    title: "BIM Construction Project Manager",
    subtitle: "BIM-linked Web Application",
    description:
      "A construction project management web platform built to bridge BIM model data with real-time project tracking, resource scheduling, and reporting dashboards. Demonstrates integration of AEC digital workflows with modern web technologies.",
    technologies: ["TypeScript", "React", "Node.js", "BIM Data Integration", "Project Management"],
    links: {
      github: "https://github.com/Gevindu-Piyawansha/construction-project-manager",
      live: "https://construction-project-manager.vercel.app/",
    },
    highlights: [
      "BIM Data Integration",
      "Resource & Timeline Management",
      "AEC Reporting Dashboard",
      "Live Web Application",
    ],
    status: "In Progress",
    duration: "2024 – Present",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-br from-slate-50 to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
          Projects
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-700 mx-auto mb-4"></div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Self-initiated BIM work, academic research, and digital tools for the
          AEC sector
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Layers className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-sm text-teal-600">{project.subtitle}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 ml-2 ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="flex flex-col gap-0.5 text-xs text-gray-500 mb-3">
                {project.duration && <span>📅 {project.duration}</span>}
                {project.company && <span>🏢 {project.company}</span>}
              </div>

              <p className="text-gray-700 mb-4 text-sm leading-relaxed flex-1">
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
                    className="bg-gradient-to-r from-teal-50 to-blue-50 text-teal-800 px-3 py-1 rounded-full text-xs font-medium border border-teal-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {Object.keys(project.links).length > 0 && (
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 mt-auto">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-teal-600 hover:text-teal-800 text-sm font-medium transition-colors"
                    >
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
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
