"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]"
        >
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                </div>

                <p className="text-gray-400 mb-6 text-sm flex-grow leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs font-medium border border-gray-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <ul className="space-y-2 mb-6 border-t border-gray-800 pt-4">
                    {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-xs text-gray-500 flex items-start">
                            <span className="mr-2 text-primary">•</span>
                            {highlight}
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4 mt-auto">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition"
                        >
                            <Github size={18} /> Code
                        </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition"
                        >
                            <ExternalLink size={18} /> Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
