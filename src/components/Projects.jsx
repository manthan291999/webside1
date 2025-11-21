"use client";

import { siteConfig } from "../data/siteConfig";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-darkBg relative">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    Featured Projects
                </h2>
                <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
                    A showcase of my work in AI, Machine Learning, and Full-Stack Engineering.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {siteConfig.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
