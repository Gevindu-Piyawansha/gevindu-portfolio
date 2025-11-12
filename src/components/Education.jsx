import {
  Award,
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  BadgeCheck,
} from "lucide-react";

function Education() {
  const education = [
    {
      title:
        "Master of Science - Civil Construction and Real Estate Management",
      institution: "Riga Technical University",
      period: "Mar 2023 - Jun 2025",
      location: "Latvia",
      type: "Master's Degree",
      icon: GraduationCap,
      gradient: "from-green-500 to-blue-600",
      bgGradient: "from-green-50 to-blue-50",
      description:
        "Final GPA: 8.46/10. Experienced in civil construction project planning, real estate development, and asset management, with expertise aligned to European professional standards (FIABCI, CEPI).",
    },
    {
      title: "Diploma - Comprehensive Master Java Developer",
      institution: "Institute of Software Engineering (IJSE)",
      period: "Nov 2024 - Jun 2025",
      location: "Sri Lanka",
      type: "Professional Diploma",
      icon: Award,
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      description:
        "Trained in professional software engineering principles with strong foundations in Java, object-oriented programming, design patterns (MVC, Singleton, DAO, Factory), and database/network programming.",
    },
    {
      title: "Sustainable Mobility Program (Erasmus+ Scholarship)",
      institution: "Riga Technical University & University of Pardubice",
      period: "Mar 2025 - May 2025",
      location: "Latvia & Czech Republic",
      type: "Certificate Program",
      icon: BadgeCheck,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      description:
        "Developed practical skills in sustainable transport planning, urban mobility solutions, and European best practices for environmental, social, and economic aspects of mobility.",
    },
    {
      title:
        "Bachelor of Engineering (Honors) - Civil Engineering with Structural Design",
      institution: "University of East London",
      period: "Nov 2019 - Jun 2021",
      location: "United Kingdom",
      type: "Bachelor's Degree",
      icon: GraduationCap,
      gradient: "from-red-500 to-orange-600",
      bgGradient: "from-red-50 to-orange-50",
      description:
        "Graduated with First Class Honors. Focused on structural design, highway engineering, construction engineering, and applied civil engineering principles.",
    },
    {
      title: "National Diploma in Technology - Civil Engineering Technology",
      institution: "Institute of Technology, University of Moratuwa",
      period: "Dec 2016 - Mar 2020",
      location: "Sri Lanka",
      type: "National Diploma",
      icon: GraduationCap,
      gradient: "from-teal-500 to-cyan-600",
      bgGradient: "from-teal-50 to-cyan-50",
      description:
        "Trained in civil engineering technology, construction methods, surveying, and project management.",
    },
  ];

  const courses = [
    {
      title: "MERN Industrial Expert Masterclass",
      institution: "IDET - Institute of Digital Engineering Technology",
      period: "Oct 2025 - Present",
      duration: "100 hours",
      location: "Sri Lanka",
      icon: BookOpen,
      gradient: "from-indigo-500 to-blue-600",
      bgGradient: "from-indigo-50 to-blue-50",
      description:
        "Proficient in developing and deploying full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js) with modern, industry-standard practices.",
    },
    {
      title:
        "DevOps / TechOps (Infrastructure-Operations) Industrial Expert Masterclass",
      institution: "IDET - Institute of Digital Engineering Technology",
      period: "Sept 2025 - Nov 2025",
      duration: "30 hours",
      location: "Sri Lanka",
      icon: BookOpen,
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      description:
        "Skilled in infrastructure and operations management with hands-on experience in Linux administration, shell scripting, DevOps tools (Jenkins, Ansible, Grafana), and containerization using Docker and Kubernetes.",
    },
    {
      title: "Introduction to Programming with C#",
      institution: "Microsoft",
      period: "Completed",
      duration: "30 hours",
      location: "Online",
      icon: BookOpen,
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      description:
        "Gained practical experience in C#, .NET Framework, using Microsoft Visual Studio, debugging, and applying programming concepts to build efficient, structured code.",
    },
  ];

  const certifications = [
    {
      title: "Associate Member",
      organization: "Institution of Engineers Sri Lanka (IIESL)",
      number: "AM 6355",
      icon: BadgeCheck,
      gradient: "from-yellow-500 to-amber-600",
    },
    {
      title: "Registered Member",
      organization: "Engineering Council of Sri Lanka (ECSL)",
      number: "501812",
      icon: BadgeCheck,
      gradient: "from-emerald-500 to-green-600",
    },
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Education Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Academic background combining engineering expertise with modern
            technology
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto mb-16">
          {education.map((edu, idx) => {
            const IconComponent = edu.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${edu.bgGradient} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col sm:flex-row gap-6 items-start`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${edu.gradient} rounded-xl flex items-center justify-center shadow flex-shrink-0`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {edu.title}
                  </h3>
                  <p className="text-blue-700 font-semibold">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600 text-sm mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Courses Section */}
        <div className="text-center mb-12 mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Courses
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Continuous learning and skill development in modern technologies
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto mb-16">
          {courses.map((course, idx) => {
            const IconComponent = course.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${course.bgGradient} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col sm:flex-row gap-6 items-start`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${course.gradient} rounded-xl flex items-center justify-center shadow flex-shrink-0`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {course.title}
                  </h3>
                  <p className="text-blue-700 font-semibold">
                    {course.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600 text-sm mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {course.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {course.location}
                    </span>
                    <span className="text-purple-600 font-semibold">
                      {course.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-12 mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Recognized professional memberships and certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex gap-4 items-center"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center shadow flex-shrink-0`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {cert.title}
                  </h3>
                  <p className="text-blue-700 font-medium text-sm">
                    {cert.organization}
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Reg. No: {cert.number}
                  </p>
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
