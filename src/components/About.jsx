import { User, Wrench } from "lucide-react";

const competencies = [
  {
    title: "BIM Modelling — LOD 100–350",
    description:
      "Architectural & structural BIM models for residential, commercial and industrial projects in accordance with ISO 19650.",
  },
  {
    title: "Clash Detection & Coordination",
    description:
      "Federated ARC/STR/MEP coordination in Navisworks with structured clash reports and resolution tracking.",
  },
  {
    title: "Automation — Dynamo & C#",
    description:
      "Custom scripts automating sheet setup, parameter management, tagging and documentation.",
  },
  {
    title: "4D Simulation",
    description:
      "Navisworks TimeLiner construction sequencing linking models to programme schedules.",
  },
  {
    title: "Construction Knowledge",
    description:
      "4+ years of site engineering — QA/QC, RFIs, inspections and multidisciplinary coordination on live projects.",
  },
  {
    title: "Quantities & Documentation",
    description:
      "Model-based take-offs, BOQs, drawing production and ISO 19650 information management.",
  },
];

const software = [
  { name: "Autodesk Revit", level: "Advanced", detail: "architectural & structural modelling, families, documentation" },
  { name: "Navisworks Manage", level: "Advanced", detail: "clash detection, federated coordination, 4D TimeLiner" },
  { name: "Tekla Structural Designer", level: "Advanced", detail: "structural analysis, design, and engineering workflows" },
  { name: "Dynamo", level: "Basic", detail: "workflow automation, parameter management" },
  { name: "AutoCAD", level: "Advanced", detail: "drafting, detailing and infrastructure design" },
  { name: "MS Project", level: "Intermediate", detail: "planning & scheduling" },
  { name: "QGIS / SewerGEMS", level: "Basic", detail: "infrastructure & GIS support" },
  { name: "Python / Java / MERN", level: "Intermediate", detail: "scripting, BIM data tools, full-stack development" },
];

const levelColor = {
  Advanced: "bg-teal-100 text-teal-800",
  Intermediate: "bg-blue-100 text-blue-800",
  Basic: "bg-gray-100 text-gray-700",
};

function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-700 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            BIM &amp; VDC Professional • Civil Engineer
          </p>
        </div>

        {/* Bio */}
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 sm:p-8 rounded-2xl shadow-lg mb-10 max-w-4xl mx-auto">
          <User className="w-8 h-8 text-teal-600 mb-4" />
          <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
            I am a Civil Engineer and BIM/VDC professional with 4+ years of experience across residential,
            high-rise and infrastructure projects in Sri Lanka and Europe, now based in Stavanger, Norway.
            I hold a Master's degree in Civil Engineering, am buildingSMART-certified (openBIM) and trained
            as an ISO 19650 Information Manager (Levels 1–3).
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            I build and coordinate models in Revit, Tekla Structural Designer and Navisworks, and use Dynamo
            and C# to automate modelling and documentation. My site engineering background means my models
            reflect how buildings are actually constructed — not just how they look.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="mb-14">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {competencies.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-teal-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-teal-700 font-semibold text-sm mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Software & Tools */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
            <Wrench className="w-6 h-6 text-teal-600" /> Software &amp; Tools
          </h3>
          <div className="max-w-4xl mx-auto space-y-3">
            {software.map((s) => (
              <div
                key={s.name}
                className="flex flex-col sm:flex-row sm:items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-5 py-3 shadow-sm"
              >
                <span className="font-semibold text-gray-800 w-52 flex-shrink-0 text-sm">{s.name}</span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${levelColor[s.level]}`}>
                  {s.level}
                </span>
                <span className="text-gray-500 text-sm">— {s.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
