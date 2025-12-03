import {
  User,
  MapPin,
  Languages,
  Code2,
  Building2,
  Target,
  Lightbulb,
} from "lucide-react";

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
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Bridging the worlds of software development and civil engineering
            with a passion for building innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Main Story */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl shadow-lg">
              <User className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
                Journey
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Experienced Civil Engineer and BIM-Modeler with 4+ years on
                construction projects in Sri Lanka and Latvia. MSc in Civil
                Construction Management, BSc in Civil Engineering with
                Structural Design. Skilled in managing projects to meet
                technical, quality, and safety standards, and enhancing project
                efficiency through BIM workflows, drawing reviews, and design
                coordination.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                My background includes site engineering, technical coordination,
                and digital construction management for major residential,
                high-rise, and infrastructure projects. Proficient in Revit,
                Navisworks, AutoCAD, Civil 3D, QGIS, and SCADA systems. I
                develop BIM models and digital workflows to optimize
                construction efficiency and support project delivery.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                I am currently based in Stavanger, Norway, working part-time
                while studying Norwegian at the University of Stavanger. I am
                reliable, proactive, and a fast learner, eager to contribute
                engineering and BIM expertise to projects that create real,
                sustainable value. Software development (Java, C#, MERN) is a
                supporting skill I use to enhance digital workflows and project
                management.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                Location & Work Rights
              </h4>
              <p className="text-gray-700 text-sm sm:text-base">
                Stavanger, Norway resident with full work authorization
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                Technical Skills
              </h4>
              <p className="text-gray-700 text-sm sm:text-base">
                Construction Management, QA/QC, BIM (Revit, Navisworks, Civil
                3D), AutoCAD, SCADA, QGIS, Microsoft Office, SAP2000, SolidWorks
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                Leadership & Volunteering
              </h4>
              <p className="text-gray-700 text-sm sm:text-base">
                Batch Representative (UEL), Student Coordinator (ITUM), ATHWELA
                Charity Project, ASANI Fundraising Initiative
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                Certifications
              </h4>
              <p className="text-gray-700 text-sm sm:text-base">
                Associate Member, IIESL (AM 6355); Registered Member, ECSL
                (501812)
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Languages className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                Languages
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-700 text-sm sm:text-base">
                    Sinhala
                  </span>
                  <span className="text-xs text-green-500 font-medium">
                    Native
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 text-sm sm:text-base">
                    English
                  </span>
                  <span className="text-xs text-green-400 font-medium">
                    Fluent
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 text-sm sm:text-base">
                    Norwegian
                  </span>
                  <span className="text-xs text-blue-600 font-medium">
                    Learning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
