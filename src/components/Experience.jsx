import { FaJava, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiAngular,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiAutodesk,
} from "react-icons/si";
import { useState } from "react";
import {
  Laptop,
  Building2,
  MapPin,
  Ruler,
  HardHat,
  ClipboardCheck,
  FileText,
  Calculator,
  Sheet,
} from "lucide-react";

const softwareExperiences = [
  {
    title: "Software Development (Supporting Skill)",
    company: "Independent / Personal Projects",
    location: "Stavanger/Sandnes, Rogaland, Norway",
    duration: "Nov 2024 - Present",
    project: "Remote - Freelance",
    responsibilities: [
      "Knowledgeable in software development (Java, C#, MERN) for digital workflows and project management.",
      "Built full stack applications to organize data and simplify project management.",
      "Software is used to enhance BIM and construction efficiency, not as a primary focus.",
    ],
  },

  {
    title: "MERN Industrial Expert Masterclass (Training)",
    company: "IDET - Institute of Digital Engineering Technology",
    location: "Sri Lanka",
    duration: "Oct 2025 - Present",
    project: "100 hours intensive training",
    responsibilities: [
      "Developing and deploying full-stack web applications",
      "MERN stack (MongoDB, Express.js, React, Node.js)",
      "Modern, industry-standard practices",
      "Full-stack development with React and Node.js",
    ],
  },
  {
    title:
      "DevOps / TechOps (Infrastructure-Operations) Industrial Expert Masterclass",
    company: "IDET - Institute of Digital Engineering Technology",
    location: "Sri Lanka",
    duration: "30 hours",
    responsibilities: [
      "Managing Linux infrastructure, automating workflows with DevOps tools(Jenkins, Ansible, etc.), and deploying containerized applications using Docker and Kubernetes",
    ],
  },

  {
    title: "Comprehensive Master Java Developer (Training)",
    company: "Institute of Software Engineering (IJSE)",
    location: "Sri Lanka",
    duration: "Nov 2024 - Jun 2025",
    responsibilities: [
      "Professional software engineering principles and practices",
      "Java and object-oriented programming",
      "Design patterns (MVC, Singleton, DAO, Factory, etc.)",
      "Database and network programming aligned with industry standards",
    ],
  },
];

const civilExperiences = [
  {
    title: "Crew Member (Current Work)",
    company: "McDonald's, Egon & Foodora",
    location: "Stavanger, Norway",
    duration: "Jun 2025 - Present",
    project: "While learning Norwegian language",
    responsibilities: [
      "Maintaining work continuity in Norway",
      "Ensuring efficiency, quality, and adherence to standards",
      "Working in a high-pressure environment",
      "Team coordination and workflow management",
    ],
  },
  {
    title: "Intern",
    company: "Dream Property Management",
    location: "Riga, Latvia",
    duration: "Jun 2024 - Nov 2024",
    responsibilities: [
      "Assisted with property inspections and documentation",
      "Evaluation of building materials",
      "Conducted real estate market research",
      "Competitor analysis",
    ],
  },
  {
    title: "Site Engineer",
    company: "Homelands Construction (Pvt) Ltd",
    location: "Sri Lanka",
    duration: "May 2021 - Dec 2022",
    project:
      "Canterbury Residencies (1.4B LKR / ~4.1M EUR / ~48M NOK), Piliyandala",
    responsibilities: [
      "Managed structural and construction activities",
      "Ensured technical accuracy, safety, and compliance with design specifications",
      "Coordinated multidisciplinary teams and stakeholders",
      "Delivered high-quality outcomes within schedule and budget",
    ],
  },
  {
    title: "Site Engineer",
    company: "Nikko Construction (Pvt) Ltd",
    location: "Sri Lanka",
    duration: "Mar 2021 - Apr 2021",
    project: "Housings and Condominiums, Colombo District",
    responsibilities: [
      "Managed construction operations",
      "Performed quality inspections on structural works",
      "Handled BOQs and material procurement planning",
      "Construction supervision",
    ],
  },
  {
    title: "Undergraduate Engineer Trainee",
    company: "National Water Supply & Drainage Board",
    location: "Ratmalana, Sri Lanka",
    duration: "Feb 2019 - Feb 2020",
    project: "Ratmalana/Moratuwa Wastewater Disposal Project & Multiple WWTPs",
    responsibilities: [
      "Supported wastewater treatment planning and infrastructure design",
      "Used QGIS, AutoCAD, and Sewer GEM for pipeline and network layout",
      "Operation & Maintenance Office projects",
      "Greater Colombo WWMIIP project support",
    ],
  },
  {
    title: "Undergraduate Engineer Trainee",
    company: "MAGA Engineering Pvt Ltd",
    location: "Kotte, Sri Lanka",
    duration: "Feb 2019 - Feb 2020",
    project: "Iconic Galaxy High Rise Building, Rajagiriya",
    responsibilities: [
      "Conducted field inspections for structural concrete works",
      "Material testing and quality control",
      "Assisted in daily reporting",
      "Coordination with suppliers, engineers and consultants",
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState("civil");

  const experiences =
    activeTab === "civil" ? civilExperiences : softwareExperiences;

  return (
    <section
      id="experience"
      className="py-10 bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
        Experience
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        My journey in Software Development and Civil Engineering
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

      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto px-6">
        {/* Skill Icons - Show for both tabs */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center w-full lg:w-2/5">
          {activeTab === "civil"
            ? [
                { icon: SiAutodesk, color: "text-red-600", label: "AutoCAD" },
                { icon: MapPin, color: "text-green-600", label: "QGIS" },
                { icon: Ruler, color: "text-blue-600", label: "SewerGEM" },
                {
                  icon: HardHat,
                  color: "text-orange-600",
                  label: "Site Management",
                },
                {
                  icon: ClipboardCheck,
                  color: "text-purple-600",
                  label: "Quality Control",
                },
                { icon: FileText, color: "text-indigo-600", label: "BOQ" },
                {
                  icon: Calculator,
                  color: "text-cyan-600",
                  label: "Structural Analysis",
                },
                { icon: Sheet, color: "text-green-700", label: "MS Excel" },
                {
                  icon: Building2,
                  color: "text-gray-700",
                  label: "Construction",
                },
                { icon: MapPin, color: "text-blue-500", label: "Surveying" },
                { icon: HardHat, color: "text-yellow-600", label: "Safety" },
                {
                  icon: FileText,
                  color: "text-red-500",
                  label: "Documentation",
                },
                // BIM and Digital Construction
                { icon: SiAutodesk, color: "text-blue-600", label: "Revit" },
                {
                  icon: SiAutodesk,
                  color: "text-green-600",
                  label: "Navisworks",
                },
                {
                  icon: SiAutodesk,
                  color: "text-purple-600",
                  label: "Civil 3D",
                },
                { icon: Sheet, color: "text-pink-600", label: "SCADA" },
              ].map(({ icon: Icon, color, label }, idx) => (
                <div
                  key={`${label}-${idx}`}
                  className="flex flex-col items-center justify-center space-y-2 p-2"
                >
                  <Icon
                    className={`text-4xl sm:text-5xl ${color} hover:scale-110 transition-transform duration-200`}
                  />
                  <span className="text-center text-xs sm:text-sm font-medium">
                    {label}
                  </span>
                </div>
              ))
            : [
                { icon: FaJava, color: "text-yellow-500", label: "Java" },
                { icon: FaJs, color: "text-yellow-400", label: "JavaScript" },
                {
                  icon: SiTypescript,
                  color: "text-blue-500",
                  label: "TypeScript",
                },
                { icon: SiHtml5, color: "text-orange-600", label: "HTML" },
                { icon: SiCss3, color: "text-blue-600", label: "CSS" },
                { icon: FaReact, color: "text-cyan-400", label: "React" },
                { icon: SiAngular, color: "text-red-600", label: "Angular" },
                { icon: FaNodeJs, color: "text-green-600", label: "Node" },
                { icon: SiMysql, color: "text-orange-500", label: "MySQL" },
                {
                  icon: SiPostgresql,
                  color: "text-blue-700",
                  label: "PostgreSQL",
                },
                { icon: SiMongodb, color: "text-green-400", label: "MongoDB" },
                {
                  icon: SiSpringboot,
                  color: "text-green-600",
                  label: "Spring Boot",
                },
              ].map(({ icon: Icon, color, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center space-y-1 p-1"
                >
                  <Icon
                    className={`text-3xl sm:text-4xl ${color} hover:scale-110 transition-transform duration-200`}
                  />
                  <span className="text-center text-[10px] sm:text-xs font-medium">
                    {label}
                  </span>
                </div>
              ))}
        </div>

        {/* Experience Timeline */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col space-y-6 w-full lg:w-3/5">
          {experiences.map((exp, index) => (
            <div key={index}>
              {index > 0 && (
                <div className="border-t border-blue-100 mb-6 pt-4"></div>
              )}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-700 mb-2">
                  {exp.title}
                </h3>
                <p className="text-sm sm:text-sm font-semibold text-gray-700 mb-1">
                  {exp.company}
                </p>
                <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-500 mt-2 mb-3">
                  <span className="flex items-center gap-1">
                    📍 {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    📅 {exp.duration}
                  </span>
                </div>
                {exp.project && (
                  <p className="text-xs sm:text-sm text-purple-600 font-semibold mt-3 mb-2 bg-purple-50 px-2 py-0.5 rounded-lg inline-block">
                    {exp.project}
                  </p>
                )}
                <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-sm">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 leading-normal"
                    >
                      <span className="text-blue-500 mt-1 text-base">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
