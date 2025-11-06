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
                Professional Journey
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                I'm a Civil Engineer and Aspiring Full-Stack Developer with a
                unique background. I've managed full-lifecycle projects valued
                up to 48M NOK in construction management, structural design, and
                QA/QC across Sri Lanka and Latvia, and have developed/developing
                full-stack software applications.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                A result-driven and proactive team player who enjoys integrating
                engineering knowledge with technology to make work more
                efficient and accurate. Skilled in digital and full-stack
                development for tech-driven engineering solutions using Java,
                React, and the MERN stack.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                Currently studying Norwegian at the University of Stavanger with
                full-time work rights in Norway. Ready to apply engineering
                insight and software skills to contribute to projects that
                create real, sustainable value for people and communities.
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
