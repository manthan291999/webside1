"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Dynamically import Welcome Page (heavy 3D component)
const WelcomePage = dynamic(
    () => import("../components/WelcomePage"),
    {
        ssr: false,
        loading: () => (
            <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
                <div className="text-cyan font-mono animate-pulse">LOADING SYSTEM...</div>
            </div>
        )
    }
);

export default function HomeClient() {
    const [showWelcome, setShowWelcome] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Optional: Check if user has visited before
        // const hasVisited = localStorage.getItem('hasVisitedBefore');
        // if (hasVisited) setShowWelcome(false);
    }, []);

    const handleEnter = () => {
        setShowWelcome(false);
        // Optional: Remember that user has visited
        // localStorage.setItem('hasVisitedBefore', 'true');
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
                <div className="text-cyan font-mono animate-pulse">LOADING SYSTEM...</div>
            </div>
        );
    }

    return (
        <>
            {/* Welcome Page */}
            {showWelcome && <WelcomePage onEnter={handleEnter} />}

            {/* Main Content */}
            <main className={showWelcome ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
