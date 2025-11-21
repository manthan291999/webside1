"use client";

import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-darkBg relative">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    Journey
                </h2>

                <div className="space-y-16">
                    {/* Experience */}
                    <div className="space-y-10">
                        <h3 className="text-2xl font-semibold flex items-center gap-3 mb-8 text-white">
                            <Briefcase className="text-primary" /> Professional Experience
                        </h3>
                        {siteConfig.experience.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative pl-8 border-l-2 border-gray-800 hover:border-primary transition-colors duration-300"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-darkBg border-2 border-primary" />
                                <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                    <span className="text-sm text-gray-400 font-medium flex items-center gap-1 bg-gray-900 px-2 py-1 rounded">
                                        <Calendar size={14} /> {exp.period}
                                    </span>
                                </div>
                                <div className="text-primary font-medium mb-4 flex items-center gap-2">
                                    {exp.company}
                                    <span className="text-gray-500 text-sm font-normal flex items-center gap-1">
                                        <MapPin size={12} /> {exp.location}
                                    </span>
                                </div>
                                <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed">
                                    {exp.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Education */}
                    <div className="space-y-10">
                        <h3 className="text-2xl font-semibold flex items-center gap-3 mb-8 text-white">
                            <span className="text-primary text-2xl">🎓</span> Education
                        </h3>
                        {siteConfig.education.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative pl-8 border-l-2 border-gray-800 hover:border-gray-600 transition-colors duration-300"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-darkBg border-2 border-gray-600" />
                                <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                    <span className="text-sm text-gray-400 font-medium bg-gray-900 px-2 py-1 rounded">
                                        {edu.year}
                                    </span>
                                </div>
                                <div className="text-gray-300 font-medium mb-4">
                                    {edu.institution}
                                </div>
                                <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed">
                                    {edu.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
