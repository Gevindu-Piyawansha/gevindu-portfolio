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
      "Ongoing self-initiated BIM practice developing coordinated 3D models, Dynamo automation scripts, and digital workflows aligned with ISO 19650 standards. Covers residential and infrastructure typologies.",
    technologies: ["Autodesk Revit", "Navisworks", "Dynamo", "Inventor", "ISO 19650"],
    links: {},
    highlights: [
      "3D Multi-discipline Modelling",
      "Dynamo Scripting & Automation",
      "ISO 19650 Information Workflows",
      "Clash Detection Practice",
    ],
    status: "In Progress",
    featured: true,
    duration: "2025 – Present",
  },
  {
    title: "Canterbury Residencies – BIM Coordination",
    subtitle: "Revit Model · RFI Management · Clash Detection",
    description:
      "Delivered a coordinated multi-discipline BIM model for a 137-unit residential development. Managed RFIs, maintained the BIM Execution Plan, and produced clash detection reports across structural, MEP, and architectural models — reducing design revisions by ~15%.",
    technologies: ["Autodesk Revit", "AutoCAD", "RFI Management", "BIM Execution Plan", "Clash Detection"],
    links: {},
    highlights: [
      "~15% Reduction in Design Revisions",
      "Multi-discipline BIM Model",
      "Clash Detection Reports",
      "BIM Execution Plan Compliance",
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
      "GIS-integrated hydraulic network model for the Ratmalana/Moratuwa Wastewater Disposal Project. Produced pipeline layout drawings, GIS catchment maps, and asset information records supporting the Greater Colombo WWMIIP.",
    technologies: ["AutoCAD", "QGIS", "SewerGEMS", "GIS", "Asset Information Modelling"],
    links: {},
    highlights: [
      "GIS Pipeline Layout",
      "Hydraulic Network Model",
      "Asset Information Records",
      "Infrastructure Documentation",
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
      "A construction project management web platform that bridges BIM model data with real-time project tracking, resource scheduling, and reporting dashboards. Demonstrates AEC digital workflow integration with modern web technologies.",
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
    featured: false,
    duration: "2024 – Present",
  },
  {
    title: "Dream Property – BIM for Facility Management",
    subtitle: "Existing Building Modelling · Asset Documentation",
    description:
      "Produced BIM models of existing properties for real estate and facility management use cases. Captured building geometry, material data, and asset information to support ongoing property management workflows.",
    technologies: ["Autodesk Revit", "AutoCAD", "Facility Management", "Asset Information Modelling"],
    links: {},
    highlights: [
      "Existing Building Modelling",
      "Asset Information Capture",
      "FM-ready BIM Deliverable",
      "Material & Condition Data",
    ],
    status: "Completed",
    featured: false,
    location: "Riga, Latvia",
    duration: "2024",
    company: "SIA Dream Property Management",
  },
];

const engineeringProjects = [
  {
    title: "SCADA Digital Twin – Wastewater Treatment",
    subtitle: "Master's Thesis · Riga Technical University",
    description:
      "Developed a real-time monitoring and digital twin concept for municipal wastewater treatment plants, integrating SCADA sensor data with BIM asset models for predictive maintenance, process optimisation, and cost reduction.",
    technologies: ["SCADA Systems", "IoT Sensors", "Digital Twin", "BIM", "Data Analytics", "Process Control"],
    links: {},
    highlights: [
      "Digital Twin Integration",
      "Real-time Sensor Monitoring",
      "Predictive Maintenance Model",
      "Process Optimisation",
    ],
    status: "Completed",
    featured: true,
    location: "Latvia",
    duration: "2024 – 2025",
    company: "Riga Technical University",
  },
  {
    title: "Canterbury Residencies – Construction Delivery",
    subtitle: "137-unit Residential Development",
    description:
      "Full lifecycle delivery of a 137-unit residential project valued at 1.4B LKR (~48M NOK). Managed site execution, multi-contractor coordination, QA/QC, material procurement, and project scheduling from foundation to handover.",
    technologies: ["MS Project", "BOQ & QTO", "QA/QC", "Site Management", "H&S Management"],
    links: {},
    highlights: [
      "48M NOK Project Value",
      "137 Residential Units",
      "Full Lifecycle Delivery",
      "Multi-contractor Coordination",
    ],
    status: "Completed",
    featured: true,
    location: "Sri Lanka",
    duration: "2021 – 2022",
    company: "Homelands Skyline (Pvt) Ltd",
  },
  {
    title: "Iconic Galaxy High Rise – QA & Documentation",
    subtitle: "Structural Inspection · Quality Control",
    description:
      "Delivered structural inspection, material testing, and quality control documentation for a high-rise building project in Rajagiriya. Verified concrete, rebar, and formwork against approved drawings and produced daily progress records.",
    technologies: ["Structural Inspection", "Material Testing", "QA/QC", "AutoCAD", "Technical Reporting"],
    links: {},
    highlights: [
      "High-rise Construction QA",
      "Concrete & Rebar Verification",
      "Material Testing Records",
      "Progress Documentation",
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
      "Executed construction of luxury housing and condominium projects in Colombo District from planning to completion. Prepared Bills of Quantities, led multidisciplinary site teams, and managed design change requests with clients and consultants.",
    technologies: ["BOQ Preparation", "Site Execution", "H&S Management", "Design Change Management"],
    links: {},
    highlights: [
      "Luxury Condominium Delivery",
      "BOQ & Cost Management",
      "Design Change Coordination",
      "Multidisciplinary Team Leadership",
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
        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-700 mx-auto mb-4"></div>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          BIM deliverables, digital modelling, and construction project outcomes
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
                  className={`px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 ml-2 ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {(project.location || project.duration) && (
                <div className="flex flex-col gap-0.5 text-xs text-gray-500 mb-3">
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
