import {
  Github,
  ExternalLink,
  Star,
  Building2,
  Layers,
} from "lucide-react";
import { useState } from "react";

const bimProjects = [
  {
    title: "BIM Development Projects",
    subtitle: "Revit · Navisworks · Dynamo · Inventor",
    description:
      "Ongoing self-initiated BIM practice developing coordinated 3D models, Dynamo automation scripts, and digital workflows aligned with ISO 19650 standards. Includes architectural, structural, and MEP modelling exercises.",
    technologies: ["Autodesk Revit", "Navisworks", "Dynamo", "Inventor", "ISO 19650"],
    links: {},
    highlights: [
      "3D Multi-discipline Modelling",
      "Dynamo Scripting",
      "ISO 19650 Workflows",
      "Clash Detection",
    ],
    status: "In Progress",
    featured: true,
    duration: "2025 – Present",
  },
  {
    title: "Canterbury Residencies – BIM Coordination",
    subtitle: "Revit · RFI Management · Multi-discipline Coordination",
    description:
      "Delivered BIM coordination for a 137-unit residential project (1.4B LKR / ~48M NOK). Updated Revit models, managed RFIs across structural, MEP, and architectural teams, and maintained the BIM Execution Plan — reducing design revisions by ~15%.",
    technologies: ["Autodesk Revit", "AutoCAD", "RFI Management", "BIM Execution Plan", "QA/QC"],
    links: {},
    highlights: [
      "~15% Revision Reduction",
      "Multi-discipline Coordination",
      "RFI Management",
      "BIM Execution Plan",
    ],
    status: "Completed",
    featured: true,
    location: "Sri Lanka",
    duration: "2021 – 2022",
    company: "Homelands Skyline (Pvt) Ltd",
  },
  {
    title: "Ratmalana/Moratuwa Wastewater Network",
    subtitle: "AutoCAD · QGIS · SewerGEMS",
    description:
      "GIS-integrated hydraulic network model for the Ratmalana/Moratuwa Wastewater Disposal Project. Modelled pipeline layouts, drainage catchments, and treatment plant infrastructure using AutoCAD, QGIS, and SewerGEMS under the Greater Colombo WWMIIP.",
    technologies: ["AutoCAD", "QGIS", "SewerGEMS", "GIS", "Asset Information"],
    links: {},
    highlights: [
      "GIS Pipeline Mapping",
      "Hydraulic Network Model",
      "Asset Information Records",
      "WWMIIP Support",
    ],
    status: "Completed",
    featured: false,
    location: "Sri Lanka",
    duration: "2019 – 2020",
    company: "National Water Supply & Drainage Board",
  },
  {
    title: "BIM Construction Project Manager",
    subtitle: "BIM-linked Web Application",
    description:
      "A construction project management web platform that bridges BIM model data with real-time project tracking, resource management, and reporting dashboards. Built to demonstrate integration of AEC digital workflows with modern web technologies.",
    technologies: ["TypeScript", "React", "Node.js", "BIM Data", "Project Management"],
    links: {
      github: "https://github.com/Gevindu-Piyawansha/construction-project-manager",
      live: "https://construction-project-manager.vercel.app/",
    },
    highlights: [
      "BIM Data Integration",
      "Resource Management",
      "Timeline Planning",
      "AEC Dashboard",
    ],
    status: "In Progress",
    featured: false,
  },
  {
    title: "Dream Property – BIM for FM",
    subtitle: "BIM Modelling · Facility Management",
    description:
      "Developed BIM models for real estate and facility management projects during master's internship at SIA Dream Property Management, Latvia. Included existing building documentation, material assessments, and asset data capture.",
    technologies: ["Autodesk Revit", "AutoCAD", "Facility Management", "Asset Documentation"],
    links: {},
    highlights: [
      "Existing Building Modelling",
      "Asset Information Capture",
      "Material Assessments",
      "FM-ready Models",
    ],
    status: "Completed",
    featured: false,
    location: "Latvia",
    duration: "2024",
    company: "SIA Dream Property Management",
  },
];

const engineeringProjects = [
  {
    title: "SCADA Digital Twin – Wastewater Treatment",
    subtitle: "Master's Thesis Project",
    description:
      "Developing a real-time monitoring and digital twin solution for municipal wastewater treatment plants. Integrates SCADA sensor data with BIM asset models for predictive maintenance, process optimization, and cost reduction.",
    technologies: ["SCADA Systems", "IoT Sensors", "Digital Twin", "Data Analytics", "Process Control"],
    links: {},
    highlights: [
      "Digital Twin Integration",
      "Real-time Monitoring",
      "Predictive Maintenance",
      "Process Optimization",
    ],
    status: "In Progress",
    featured: true,
    location: "Latvia",
    duration: "2024 – 2025",
    company: "Riga Technical University",
  },
  {
    title: "Canterbury Residencies – Construction Management",
    subtitle: "Site Execution · QA/QC · Scheduling",
    description:
      "Full lifecycle site management for a 137-unit residential development (1.4B LKR). Coordinated multidisciplinary teams, enforced QA/QC procedures, managed contractor performance, and tracked project scheduling and material procurement.",
    technologies: ["MS Project", "BOQ", "QA/QC", "Site Management", "H&S"],
    links: {},
    highlights: [
      "137-unit Residential Project",
      "Multidisciplinary Coordination",
      "QA/QC Enforcement",
      "48M NOK Project Value",
    ],
    status: "Completed",
    featured: true,
    location: "Sri Lanka",
    duration: "2021 – 2022",
    company: "Homelands Skyline (Pvt) Ltd",
  },
  {
    title: "Iconic Galaxy High Rise – QA & Documentation",
    subtitle: "Structural Inspection · Material Testing",
    description:
      "Site inspections, material testing, and quality control for a high-rise building in Rajagiriya. Verified concrete, rebar, and structural works against approved drawings. Assisted with daily reporting and contractor coordination.",
    technologies: ["Structural Inspection", "Material Testing", "QA/QC", "AutoCAD"],
    links: {},
    highlights: [
      "High-rise Construction",
      "Structural Verification",
      "Material Testing",
      "Quality Control",
    ],
    status: "Completed",
    featured: false,
    location: "Sri Lanka",
    duration: "2019 – 2020",
    company: "MAGA Engineering Pvt Ltd",
  },
  {
    title: "Luxury Residential Developments",
    subtitle: "Construction Execution · BOQ Management",
    description:
      "Executed construction of luxury housing and condominium projects in Colombo District. Led site teams, reviewed technical drawings, prepared Bills of Quantities, and managed design change requests in coordination with clients and consultants.",
    technologies: ["BOQ", "Site Management", "Structural Works", "H&S", "Scheduling"],
    links: {},
    highlights: [
      "Luxury Condominiums",
      "BOQ Preparation",
      "Design Change Management",
      "Team Leadership",
    ],
    status: "Completed",
    featured: false,
    location: "Sri Lanka",
    duration: "2020 – 2021",
    company: "Nikko Construction (Pvt) Ltd",
  },
];

function Projects() {
  const [activeTab, setActiveTab] = useState("bim");

  const projects = activeTab === "bim" ? bimProjects : engineeringProjects;

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-br from-slate-50 to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
          Projects
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          BIM coordination, digital modelling, and construction project delivery
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-md inline-flex">
            <button
              onClick={() => setActiveTab("bim")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "bim"
                  ? "bg-gradient-to-r from-teal-600 to-blue-700 text-white shadow-lg"
                  : "text-gray-600 hover:text-teal-600"
              }`}
            >
              <Layers className="w-5 h-5" />
              BIM Projects
            </button>
            <button
              onClick={() => setActiveTab("engineering")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "engineering"
                  ? "bg-gradient-to-r from-teal-600 to-blue-700 text-white shadow-lg"
                  : "text-gray-600 hover:text-teal-600"
              }`}
            >
              <Building2 className="w-5 h-5" />
              Engineering Projects
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
                  {activeTab === "bim" ? (
                    <Layers className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  ) : (
                    <Building2 className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-sm text-teal-600">{project.subtitle}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {(project.location || project.duration) && (
                <div className="flex flex-col gap-1 text-xs text-gray-500 mb-3">
                  <div className="flex gap-4">
                    {project.location && <span>📍 {project.location}</span>}
                    {project.duration && <span>📅 {project.duration}</span>}
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
                    className="bg-gradient-to-r from-teal-50 to-blue-50 text-teal-800 px-3 py-1 rounded-full text-xs font-medium border border-teal-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {Object.keys(project.links).length > 0 && (
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
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
