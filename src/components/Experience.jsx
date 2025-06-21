import { FaJava, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiHtml5, SiCss3, SiAngular, SiMongodb, SiMysql, SiPostgresql, SiSpringboot } from 'react-icons/si';

export default function ExperienceSection() {
    return (
        <section className="py-2 bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800">

            <h2 className="text-3xl font-bold mb-8 text-center">EXPERIENCE</h2>
            <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto px-6">
                {/* Left Column: Skill Icons */}
                <div className="grid grid-cols-4 gap-6 md:w-1/2">
                    {[
                        { icon: FaJava, color: 'text-yellow-500', label: 'Java' },
                        { icon: FaJs, color: 'text-yellow-400', label: 'JavaScript' },
                        { icon: SiTypescript, color: 'text-blue-500', label: 'TypeScript' },
                        { icon: SiHtml5, color: 'text-orange-600', label: 'HTML' },
                        { icon: SiCss3, color: 'text-blue-600', label: 'CSS' },
                        { icon: FaReact, color: 'text-cyan-400', label: 'React' },
                        { icon: SiAngular, color: 'text-red-600', label: 'Angular' },
                        { icon: FaNodeJs, color: 'text-green-600', label: 'Node' },
                        { icon: SiMysql, color: 'text-orange-500', label: 'MySQL' },
                        { icon: SiPostgresql, color: 'text-blue-700', label: 'PostgreSQL' },
                        { icon: SiMongodb, color: 'text-green-400', label: 'MongoDB' },
                        { icon: SiSpringboot, color: 'text-green-600', label: 'Spring Boot' }
                    ].map(({ icon: Icon, color, label }) => (
                        <div key={label} className="flex flex-col items-center space-y-2">
                            <Icon className={`text-5xl ${color}`} />
                            <span>{label}</span>
                        </div>
                    ))}
                </div>

                {/* Right side - experience details */}
                <div className="md:w-1/2 space-y-6 bg-white p-6 rounded-lg shadow-lg">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Trainee Software Engineer, IJSE</h3>
                        <span className="text-sm italic text-gray-600"> 2024 - Present</span>
                        <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
                            <li>Both frontend and backend technologies</li>
                            <li>Data Structures and Algorithms</li>
                            <li>Databases</li>
                            <li>Version Control</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Civil Engineer</h3>
                        <span className="text-sm italic text-gray-600">2018 - 2023</span>
                        <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
                            <li>Managed infrastructure projects</li>
                            <li>Led multidisciplinary teams</li>
                            <li>Ensured compliance with safety regulations</li>
                            <li>Applied systematic problem solving</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
