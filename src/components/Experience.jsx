import { SiAutodesk } from "react-icons/si";
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
  Shield,
  Cpu,
} from "lucide-react";

const experiences = [
  {
    title: "BIM Development (Self-Initiated)",
    company: "Independent Projects",
    location: "Stavanger, Norway",
    duration: "2025 – Present",
    project: "Revit · Navisworks · Dynamo · Inventor · ISO 19650",
    responsibilities: [
      "Developing BIM models and digital workflows using Revit, Navisworks, Dynamo, and Inventor",
      "Applying ISO 19650 standards for BIM information management and delivery",
      "Scripting Dynamo routines for automated model generation and data extraction",
      "Building a BIM-linked Construction Project Management web application",
    ],
  },
  {
    title: "Engineering Intern",
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
    title: "Site Civil Engineer",
    company: "Homelands Skyline (Pvt) Ltd",
    location: "Sri Lanka",
    duration: "May 2021 – Dec 2022",
    project: "Canterbury Residencies – 137-unit residential (1.4B LKR / ~48M NOK), Piliyandala",
    responsibilities: [
      "Updated Revit models and managed RFIs across structural, MEP, and architectural disciplines — reducing design revisions by ~15%",
      "Coordinated multidisciplinary teams and ensured compliance with the BIM Execution Plan",
      "Managed full lifecycle site execution including QA/QC, health & safety, and specification compliance",
      "Performed quantity take-offs, material tracking, and contractor performance monitoring",
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
      "Prepared Bills of Quantities (BOQs) and managed design change requests with clients and consultants",
      "Led multidisciplinary site teams maintaining productivity, quality standards, and site safety",
    ],
  },
  {
    title: "Trainee Civil Engineer (Diploma Program)",
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
      "Conducted site inspections, material testing, and quality checks for high-rise construction",
      "Verified concrete quality, rebar placement, and structural works against approved drawings",
      "Assisted with daily progress reports, contractor coordination, and project progress monitoring",
    ],
  },
];

const tools = [
  { icon: SiAutodesk, color: "text-red-600", label: "Revit" },
  { icon: SiAutodesk, color: "text-blue-600", label: "AutoCAD" },
  { icon: SiAutodesk, color: "text-orange-500", label: "Navisworks" },
  { icon: SiAutodesk, color: "text-yellow-500", label: "Inventor" },
  { icon: GitBranch, color: "text-purple-600", label: "Dynamo" },
  { icon: MapPin, color: "text-green-600", label: "QGIS" },
  { icon: Ruler, color: "text-cyan-600", label: "SewerGEMS" },
  { icon: Shield, color: "text-blue-700", label: "ISO 19650" },
  { icon: Layers, color: "text-teal-600", label: "BIM Coord." },
  { icon: HardHat, color: "text-orange-600", label: "Site Mgmt" },
  { icon: ClipboardCheck, color: "text-purple-600", label: "QA / QC" },
  { icon: Calculator, color: "text-gray-700", label: "BOQ / QTO" },
  { icon: FileText, color: "text-indigo-600", label: "RFI Mgmt" },
  { icon: Building2, color: "text-gray-600", label: "Construction" },
  { icon: Cpu, color: "text-green-700", label: "C# / MERN" },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-10 bg-gradient-to-br from-teal-50 to-blue-50 text-gray-800"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
        Experience
      </h2>
      <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-700 mx-auto mb-4"></div>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        BIM coordination, digital modelling, and construction site management
      </p>

      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto px-6">
        {/* Tool Icons */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center w-full lg:w-2/5 lg:self-start lg:sticky lg:top-28">
          {tools.map(({ icon: Icon, color, label }, idx) => (
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
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col space-y-6 w-full lg:w-3/5">
          {experiences.map((exp, index) => (
            <div key={index}>
              {index > 0 && (
                <div className="border-t border-teal-100 mb-6 pt-4"></div>
              )}
              <h3 className="text-lg sm:text-xl font-bold text-teal-700 mb-1">
                {exp.title}
              </h3>
              <p className="text-sm font-semibold text-gray-700 mb-1">
                {exp.company}
              </p>
              <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-500 mt-2 mb-3">
                <span>📍 {exp.location}</span>
                <span>📅 {exp.duration}</span>
              </div>
              {exp.project && (
                <p className="text-xs sm:text-sm text-teal-600 font-semibold mb-2 bg-teal-50 px-2 py-0.5 rounded-lg inline-block">
                  {exp.project}
                </p>
              )}
              <ul className="mt-3 space-y-2 text-gray-700 text-sm">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 leading-normal">
                    <span className="text-teal-500 mt-1 text-base">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
