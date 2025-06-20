import { Database, Globe, Code, Languages } from 'lucide-react';

const skills = {
  'Backend': ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'Maven', 'MySQL'],
  'Frontend': ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
  'Tools & Methods': ['Git & GitHub', 'Agile/Scrum', 'OOP', 'IntelliJ IDEA', 'Postman'],
  'Languages': ['English (Fluent)', 'Norwegian (Learning)', 'Sinhala (Native)']
};

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                {category === 'Backend' && <Database className="w-6 h-6 text-blue-600" />}
                {category === 'Frontend' && <Globe className="w-6 h-6 text-green-600" />}
                {category === 'Tools & Methods' && <Code className="w-6 h-6 text-purple-600" />}
                {category === 'Languages' && <Languages className="w-6 h-6 text-orange-600" />}
                <h3 className="font-semibold text-gray-800">{category}</h3>
              </div>
              <ul className="space-y-2">
                {skillList.map((skill, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    {skill}
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

export default Skills;
