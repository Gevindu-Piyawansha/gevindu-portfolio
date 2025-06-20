import { Award, GraduationCap } from 'lucide-react';

function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Comprehensive Master Java Developer Diploma
                </h3>
                <p className="text-blue-600 font-medium mb-3">Institute of Java and Software Engineering (IJSE)</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Full-stack development program covering Java fundamentals, Spring Boot, React, database design, and modern software practices.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  MSc Civil Construction and Real Estate Management
                </h3>
                <p className="text-green-600 font-medium mb-3">Riga Technical University, Latvia</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Advanced degree in construction management and real estate development. Gained strong analytical and project management skills that support my software development career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
