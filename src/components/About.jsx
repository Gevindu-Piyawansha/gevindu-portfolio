import {
  User,
  MapPin,
  Languages,
  Wrench,
} from "lucide-react";

function About() {
  const bimTools = [
    "Autodesk Revit",
    "Navisworks",
    "Dynamo",
    "Inventor",
    "AutoCAD",
    "QGIS",
    "SewerGEMS",
    "MS Project",
    "ISO 19650",
    "RFI Management",
    "BOQ & QTO",
    "C# / MERN",
  ];

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
            BIM Engineer bridging civil engineering expertise with digital
            construction technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Main Story */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 sm:p-8 rounded-2xl shadow-lg">
              <User className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
                Journey
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                I'm a Civil Engineer and BIM-focused professional with 4+ years
                of experience in residential and infrastructure projects,
                spanning site execution, BIM modelling, and multidisciplinary
                coordination across Sri Lanka, Latvia, and Norway.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                My BIM journey began on the Iconic Galaxy High Rise and
                Canterbury Residencies projects, where I updated Revit models,
                managed RFIs, and coordinated across structural, MEP, and
                architectural disciplines — reducing design revisions by ~15%.
                At SIA Dream Property Management in Latvia, I expanded into BIM
                modelling for real estate and facility management.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                I hold an MSc in Civil Construction and Real Estate Management
                (GPA 8.46/10, Riga Technical University) and a BEng in Civil
                Engineering with Structural Design (First Class Honours,
                University of East London). I've since added 6 BIM Coordination
                & Revit certificates and am actively developing models and
                workflows using Revit, Navisworks, Dynamo, and ISO 19650
                standards. Currently based in Stavanger with full work
                authorization, I'm actively seeking BIM, engineering support,
                or construction project roles.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                Location & Work Rights
              </h4>
              <p className="text-gray-700 text-sm sm:text-base">
                Stavanger, Norway — full work authorization &amp; NAV
                arbeidstrening / lønnstilskudd eligible
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Languages className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                Languages
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-700 text-sm sm:text-base">Sinhala</span>
                  <span className="text-xs text-green-500 font-medium">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 text-sm sm:text-base">English</span>
                  <span className="text-xs text-green-400 font-medium">Fluent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 text-sm sm:text-base">Norwegian</span>
                  <span className="text-xs text-blue-600 font-medium">A2/B1 in progress</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                BIM &amp; AEC Tools
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {bimTools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-white text-teal-700 border border-teal-200 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
