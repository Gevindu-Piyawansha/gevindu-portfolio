import { Award, GraduationCap, Calendar, MapPin, Star } from 'lucide-react';

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
      description: "Intensive full-stack development program covering enterprise Java technologies, modern frameworks, and industry best practices.",
      highlights: [
        "Full-Stack Web Development",
        "Spring Boot & Spring Framework",
        "React.js & Modern Frontend",
        "Database Design & Management",
        "RESTful API Development",
        "Software Engineering Principles"
      ],
      skills: ["Java", "Spring Boot", "React", "MySQL", "REST APIs", "Git"]
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
      description: "Advanced degree focusing on project management, strategic planning, and technical leadership in construction and real estate sectors.",
      highlights: [
        "Project Management Excellence",
        "Strategic Planning & Analysis",
        "Team Leadership & Coordination",
        "Quality Assurance & Control",
        "Risk Management",
        "International Standards Compliance"
      ],
      skills: ["Project Management", "Leadership", "Analytics", "Problem Solving"]
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Combining technical expertise with strong analytical foundations
          </p>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {education.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${edu.bgGradient} p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
                  {/* Icon and Basic Info */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${edu.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4 sm:space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                          {edu.title}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-white/70 text-gray-700 self-start sm:self-center">
                          {edu.type}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <p className="text-lg sm:text-xl font-semibold text-blue-700">
                          {edu.institution}
                        </p>
                        <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4 text-sm sm:text-base text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        Key Learning Areas:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                        {edu.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm sm:text-base text-gray-700 bg-white/50 px-3 py-2 rounded-lg">
                            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills Tags */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Relevant Skills:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-white/80 text-gray-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Certifications Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Committed to staying current with evolving technologies and industry best practices.
              Actively pursuing additional certifications in cloud technologies and modern development frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;