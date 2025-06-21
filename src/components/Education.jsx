import { Award, GraduationCap, Calendar, MapPin } from 'lucide-react';

function Education() {
  const education = [
    {
      title: "Comprehensive Master Java Developer Diploma",
      institution: "Institute of Java and Software Engineering (IJSE)",
      period: "2024",
      location: "Sri Lanka",
      type: "Professional Certification",
      icon: Award,
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      description: "Focused on enterprise Java, modern frameworks, and best practices."
    },
    {
      title: "MSc Civil Construction and Real Estate Management",
      institution: "Riga Technical University",
      period: "2019-2021",
      location: "Latvia",
      type: "Master's Degree",
      icon: GraduationCap,
      gradient: "from-green-500 to-blue-600",
      bgGradient: "from-green-50 to-blue-50",
      description: "Advanced project management and strategic planning in construction."
    }
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Combining technical expertise with strong analytical foundations.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, idx) => {
            const IconComponent = edu.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${edu.bgGradient} p-6 rounded-2xl shadow-md flex gap-6 items-center`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${edu.gradient} rounded-xl flex items-center justify-center shadow`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{edu.title}</h3>
                  <p className="text-blue-700 font-semibold">{edu.institution}</p>
                  <div className="flex gap-4 text-gray-600 text-sm mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-700">{edu.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
