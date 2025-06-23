import { FaJava, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import {
    SiTypescript, SiHtml5, SiCss3, SiAngular, SiMongodb,
    SiMysql, SiPostgresql, SiSpringboot
} from 'react-icons/si';

export default function Experience() {
    return (
        <section id="experience" className="py-12 bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800">
            <h2 className="text-3xl font-bold mb-8 text-center">EXPERIENCE</h2>

            <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto px-6">

                {/* Skill Icons */}
                <div className="grid grid-cols-4 gap-6 justify-items-center w-full md:w-1/2">
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
                            <span className="text-center">{label}</span>
                        </div>
                    ))}
                </div>

                {/* Experience Details */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl shadow-lg max-w-md w-full flex flex-col space-y-6 md:ml-auto md:pl-12 md:pr-12">
                    {/* Job 1 */}
                    <div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-1">Trainee Software Engineer, IJSE</h3>
                        <span className="text-sm italic text-gray-600">2024 - Present</span>
                        <ul className="mt-3 space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500">•</span>
                                <span>Both frontend and backend technologies</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500">•</span>
                                <span>Data Structures and Algorithms</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500">•</span>
                                <span>Databases</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500">•</span>
                                <span>Version Control</span>
                            </li>
                        </ul>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-blue-100"></div>

                    {/* Job 2 */}
                    <div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-1">Civil Engineer</h3>
                        <span className="text-sm italic text-gray-600">2018 - 2023</span>
                        <ul className="mt-3 space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500">•</span>
                                <span>Managed infrastructure projects</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500">•</span>
                                <span>Led multidisciplinary teams</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500">•</span>
                                <span>Ensured compliance with safety regulations</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500">•</span>
                                <span>Applied systematic problem solving</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
