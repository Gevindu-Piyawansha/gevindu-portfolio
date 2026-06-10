import { SiAutodesk } from "react-icons/si";
import { useState } from "react";
import {
  Layers,
  Building2,
  MapPin,
  Ruler,
  HardHat,
  ClipboardCheck,
  FileText,
  Calculator,
  GitBranch,
  Database,
  Cpu,
  Shield,
} from "lucide-react";

const bimExperiences = [
  {
    title: "BIM Development (Self-Initiated)",
    company: "Independent Projects",
    location: "Stavanger, Norway",
    duration: "2025 – Present",
    project: "Revit, Navisworks, Dynamo, Inventor & ISO 19650",
    responsibilities: [
      "Developing BIM models and digital workflows using Revit, Navisworks, Dynamo, and Inventor",
      "Applying ISO 19650 standards for BIM information management and delivery",
      "Scripting Dynamo routines for automated model generation and data extraction",
      "Building a BIM-linked Construction Project Management web application to bridge models with project tracking dashboards",
    ],
  },
  {
    title: "Engineering Intern (BIM & Facility Management)",
    company: "SIA Dream Property Management",
    location: "Riga, Latvia",
    duration: "Jun 2024 – Nov 2024",
    project: "Master's Program Internship",
    responsibilities: [
      "Conducted property inspections, material assessments, and BIM modelling for real estate and facility management projects",
      "Performed data-driven market research and competitor analysis to support property planning decisions",
      "Documented existing building conditions for asset information model creation",
    ],
  },
  {
    title: "Site Civil Engineer (BIM & Coordination)",
    company: "Homelands Skyline (Pvt) Ltd",
    location: "Sri Lanka",
    duration: "May 2021 – Dec 2022",
    project: "Canterbury Residencies – 137-unit residential (1.4B LKR / ~48M NOK)",
    responsibilities: [
      "Updated Revit models and managed RFIs across structural, MEP, and architectural disciplines — reducing design revisions by ~15%",
      "Coordinated multidisciplinary BIM deliverables and ensured BIM execution plan compliance",
      "Performed quantity take-offs and material tracking linked to BIM model data",
      "Enforced QA/QC procedures aligned with BIM-based inspection checklists",
    ],
  },
  {
    title: "Trainee Civil Engineer (GIS & CAD Modelling)",
    company: "National Water Supply & Drainage Board",
    location: "Ratmalana, Sri Lanka",
    duration: "Sept 2019 – Feb 2020",
    project: "Ratmalana/Moratuwa Wastewater Disposal Project & multiple WWTPs",
    responsibilities: [
      "Modelled wastewater pipeline networks using AutoCAD, QGIS, and SewerGEMS",
      "Assisted with GIS mapping and CAD drafting for the Greater Colombo WWMIIP project",
      "Contributed to technical documentation and asset information records under senior design engineers",
    ],
  },
  {
    title: "Trainee Civil Engineer (Diploma Program)",
    company: "MAGA Engineering Pvt Ltd",
    location: "Kotte, Sri Lanka",
    duration: "Feb 2019 – Aug 2019",
    project: "Iconic Galaxy High Rise Building, Rajagiriya",
    responsibilities: [
      "Verified structural works against approved drawings and assisted with 3D documentation",
      "Recorded material testing data for quality databases and BIM-ready records",
      "Coordinated with consultants on drawing amendments and site clarifications",
    ],
  },
];

const siteExperiences = [
  {
    title: "Site Civil Engineer",
    company: "Homelands Skyline (Pvt) Ltd",
    location: "Sri Lanka",
    duration: "May 2021 – Dec 2022",
    project: "Canterbury Residencies – 137-unit residential project, Piliyandala",
    responsibilities: [
      "Managed full lifecycle site execution coordinating with architects, consultants, structural & MEP engineers",
      "Enforced on-site health & safety, inspected concrete, rebar, and formwork for specification compliance",
      "Prepared project schedules, monitored contractor performance, and tracked material procurement",
      "Managed design change requests and client communications throughout construction phases",
    ],
  },
  {
    title: "Site Civil Engineer",
    company: "Nikko Construction (Pvt) Ltd",
    location: "Sri Lanka",
    duration: "Mar 2020 – Apr 2021",
    project: "Luxury Residential Developments, Colombo District",
    responsibilities: [
      "Executed construction of luxury housing and condominium projects from planning to completion",
      "Reviewed technical drawings, ensuring materials and methods met design specifications",
      "Led multidisciplinary site teams maintaining productivity, quality standards, and site safety",
      "Prepared Bills of Quantities (BOQs) and managed design change requests with clients and consultants",
    ],
  },
  {
    title: "Trainee Civil Engineer",
    company: "MAGA Engineering Pvt Ltd",
    location: "Kotte, Sri Lanka",
    duration: "Feb 2019 – Aug 2019",
    project: "Iconic Galaxy High Rise Building, Rajagiriya",
    responsibilities: [
      "Conducted site inspections, material testing, and quality checks for high-rise building construction",
      "Verified concrete quality, rebar placement, and structural works against approved drawings",
      "Assisted with daily progress reports, contractor coordination, and project progress monitoring",
    ],
  },
  {
    title: "Trainee Civil Engineer",
    company: "National Water Supply & Drainage Board",
    location: "Ratmalana, Sri Lanka",
    duration: "Sept 2019 – Feb 2020",
    project: "Ratmalana/Moratuwa Wastewater Disposal Project",
    responsibilities: [
      "Supported design and planning of large-scale wastewater infrastructure",
      "Contributed to maintenance planning for pipeline networks and treatment plant operations",
      "Assisted senior engineers with on-site surveys and technical reporting",
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState("bim");

  const experiences = activeTab === "bim" ? bimExperiences : siteExperiences;

  return (
    <section
      id="experience"
      className="py-10 bg-gradient-to-br from-teal-50 to-blue-50 text-gray-800"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
        Experience
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        BIM coordination, digital modelling, and construction site management
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
            BIM &amp; Design
          </button>
          <button
            onClick={() => setActiveTab("site")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "site"
                ? "bg-gradient-to-r from-teal-600 to-blue-700 text-white shadow-lg"
                : "text-gray-600 hover:text-teal-600"
            }`}
          >
            <HardHat className="w-5 h-5" />
            Construction &amp; Site
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto px-6">
        {/* Tool Icons */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center w-full lg:w-2/5">
          {activeTab === "bim"
            ? [
                { icon: SiAutodesk, color: "text-red-600", label: "Revit" },
                { icon: SiAutodesk, color: "text-blue-600", label: "AutoCAD" },
                { icon: SiAutodesk, color: "text-orange-500", label: "Navisworks" },
                { icon: SiAutodesk, color: "text-yellow-500", label: "Inventor" },
                { icon: GitBranch, color: "text-purple-600", label: "Dynamo" },
                { icon: MapPin, color: "text-green-600", label: "QGIS" },
                { icon: Ruler, color: "text-cyan-600", label: "SewerGEMS" },
                { icon: Shield, color: "text-blue-700", label: "ISO 19650" },
                { icon: Layers, color: "text-teal-600", label: "BIM Coord." },
                { icon: FileText, color: "text-indigo-600", label: "RFI Mgmt" },
                { icon: Calculator, color: "text-gray-700", label: "BOQ / QTO" },
                { icon: Cpu, color: "text-green-700", label: "C# / MERN" },
              ].map(({ icon: Icon, color, label }, idx) => (
                <div
                  key={`${label}-${idx}`}
                  className="flex flex-col items-center justify-center space-y-1 p-1"
                >
                  <Icon
                    className={`text-3xl sm:text-4xl ${color} hover:scale-110 transition-transform duration-200`}
                  />
                  <span className="text-center text-[10px] sm:text-xs font-medium">
                    {label}
                  </span>
                </div>
              ))
            : [
                { icon: HardHat, color: "text-orange-600", label: "Site Mgmt" },
                { icon: ClipboardCheck, color: "text-purple-600", label: "QA / QC" },
                { icon: FileText, color: "text-indigo-600", label: "BOQ" },
                { icon: Calculator, color: "text-cyan-600", label: "Structural" },
                { icon: Building2, color: "text-gray-700", label: "Construction" },
                { icon: MapPin, color: "text-blue-500", label: "Surveying" },
                { icon: Shield, color: "text-green-700", label: "H&S" },
                { icon: Database, color: "text-teal-600", label: "Reporting" },
                { icon: Layers, color: "text-blue-600", label: "Coordination" },
                { icon: Ruler, color: "text-red-500", label: "Inspection" },
                { icon: FileText, color: "text-red-500", label: "Specs Review" },
                { icon: Calculator, color: "text-green-600", label: "Scheduling" },
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
              ))}
        </div>

        {/* Experience Timeline */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col space-y-6 w-full lg:w-3/5">
          {experiences.map((exp, index) => (
            <div key={index}>
              {index > 0 && (
                <div className="border-t border-teal-100 mb-6 pt-4"></div>
              )}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-teal-700 mb-2">
                  {exp.title}
                </h3>
                <p className="text-sm sm:text-sm font-semibold text-gray-700 mb-1">
                  {exp.company}
                </p>
                <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-500 mt-2 mb-3">
                  <span className="flex items-center gap-1">📍 {exp.location}</span>
                  <span className="flex items-center gap-1">📅 {exp.duration}</span>
                </div>
                {exp.project && (
                  <p className="text-xs sm:text-sm text-teal-600 font-semibold mt-3 mb-2 bg-teal-50 px-2 py-0.5 rounded-lg inline-block">
                    {exp.project}
                  </p>
                )}
                <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-sm">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 leading-normal">
                      <span className="text-teal-500 mt-1 text-base">•</span>
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
