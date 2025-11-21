"use client"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { NavbarDemo } from "@/section/Navbar"

export default function Education(){
    const educationData = [
        {
            degree: "Bachelor of Technology in Computer Science and Artificial Intelligence",
            institution: "Newton School of Technology , Rishihood University",
            location: "Sonipat , Haryana , India",
            startDate: "August 2024",
            endDate: "Present",
            grade: "CGPA: 7.76/10",
            description: "Focused on software engineering, data structures, algorithms, and web development. Completed projects in machine learning and full-stack development.",
        },
        {
            degree: "Higher Secondary Education (12th Grade)",
            institution: "FIITJEE Junior College",
            location: "Visakhapatnam , Andhra Pradesh , India",
            startDate: "June 2022",
            endDate: "May 2024",
            grade: "Percentage: 93.3%",
            description: "PCM"
        } ,
        {
            degree: "Secondary School Education (10th Grade)",
            institution: "Visakha Valley School",
            location: "Visakhapatnam , Andhra Pradesh , India",
            startDate: "June 2012",
            endDate: "May 2022",
            grade: "Percentage: 85%"
        }
    ]

    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
            <NavbarDemo />
            <BackgroundBeams />
            
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 mb-4">
                        Education
                    </h1>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
                        My academic journey and qualifications
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-blue-500 transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {educationData.map((edu, index) => (
                            <div 
                                key={index}
                                className={`relative flex items-center ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex-col`}
                                style={{
                                    animation: `slideIn 0.6s ease-out ${index * 0.2}s both`
                                }}
                            >
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transform md:-translate-x-1/2 border-4 border-neutral-900 z-10 pulse-dot"></div>

                                <div className={`w-full md:w-[calc(50%-3rem)] ml-16 md:ml-0 ${
                                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                                }`}>
                                    <div className="group relative bg-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 md:p-8 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        <div className="relative z-10">
                                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4">
                                                <span className="text-emerald-400 text-sm font-medium">
                                                    {edu.startDate} - {edu.endDate}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                                                {edu.degree}
                                            </h3>

                                            <div className="flex items-center gap-2 text-neutral-300 mb-1">
                                                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                <span className="font-semibold">{edu.institution}</span>
                                            </div>

                                            <div className="flex items-center gap-2 text-neutral-400 mb-3">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="text-sm">{edu.location}</span>
                                            </div>

                                            <div className="inline-block bg-neutral-800/50 rounded-lg px-4 py-2 mb-4">
                                                <span className="text-emerald-400 font-semibold">{edu.grade}</span>
                                            </div>

                                            {edu.achievements && edu.achievements.length > 0 && (
                                                <div>
                                                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        Key Achievements
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {edu.achievements.map((achievement, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-neutral-400">
                                                                <span className="text-emerald-400 mt-1">•</span>
                                                                <span>{achievement}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fadeIn 0.8s ease-out;
                }

                .pulse-dot {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }

                @keyframes pulse {
                    0%, 100% {
                        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
                    }
                    50% {
                        box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
                    }
                }
            `}</style>
        </div>
    )
}