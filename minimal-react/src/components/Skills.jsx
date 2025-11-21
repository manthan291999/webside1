"use client";

import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

export default function Skills() {
    const categories = [
        { name: "Languages", items: siteConfig.skills.languages },
        { name: "Frameworks & Libraries", items: siteConfig.skills.frameworks },
        { name: "Tools & Platforms", items: siteConfig.skills.tools },
    ];

    return (
        <section id="skills" className="py-24 bg-darkBg relative">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Technical Arsenal
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {categories.map((category, idx) => (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-primary/50 transition-colors duration-300"
                            >
                                <h3 className="text-xl font-semibold mb-6 text-primary">{category.name}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {category.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700 hover:border-primary/30 hover:text-white transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
