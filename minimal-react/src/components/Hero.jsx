"use client";

import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";
import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
            {/* AI Background Effect */}
            <div className="absolute inset-0 -z-10 bg-darkBg">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                <div className="absolute top-0 left-0 right-0 h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-30 animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/20 blur-[100px] rounded-full opacity-20"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto z-10"
            >
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
                    AI Engineer & Full-Stack Developer
                </span>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 drop-shadow-sm">
                    {siteConfig.name}
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                    Building intelligent systems at the intersection of <span className="text-primary font-medium">AI</span> and <span className="text-accent font-medium">Engineering</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
                    >
                        View Projects
                    </a>
                    <a
                        href={siteConfig.resumeUrl}
                        download
                        className="px-8 py-3 border border-gray-700 text-gray-300 rounded-full font-medium hover:bg-gray-800 transition flex items-center gap-2 backdrop-blur-sm"
                    >
                        <Download size={18} />
                        Download Resume
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
}
