"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "../data/siteConfig";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (saved === "dark" || (!saved && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };

    if (!mounted) return null;

    const links = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-darkBg/80 backdrop-blur-md shadow-sm transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
            <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
                <Link href="/" className="text-2xl font-bold text-primary tracking-tighter">
                    {siteConfig.name}
                </Link>

                {/* Desktop */}
                <ul className="hidden md:flex space-x-6 items-center">
                    {links.map((l) => (
                        <li key={l.name}>
                            <Link href={l.href} className="hover:text-primary transition font-medium text-sm uppercase tracking-wide">
                                {l.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </li>
                </ul>

                {/* Mobile */}
                <div className="flex items-center md:hidden gap-4">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        className="p-2"
                        onClick={() => setOpen(!open)}
                        aria-label="Menu"
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {open && (
                    <ul className="absolute top-full left-0 w-full bg-white dark:bg-darkBg shadow-lg md:hidden border-t dark:border-gray-800">
                        {links.map((l) => (
                            <li key={l.name} className="border-b border-gray-100 dark:border-gray-800">
                                <Link
                                    href={l.href}
                                    className="block px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                                    onClick={() => setOpen(false)}
                                >
                                    {l.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    );
}
