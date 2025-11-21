"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            });

            if (res.ok) {
                setStatus("success");
                e.target.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 bg-darkBg relative border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-start"
                >
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let's Connect</h2>
                        <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-5 group">
                                <div className="p-4 bg-gray-900 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300 border border-gray-800">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Email</p>
                                    <a href={`mailto:${siteConfig.email}`} className="text-lg font-medium text-white hover:text-primary transition">
                                        {siteConfig.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 group">
                                <div className="p-4 bg-gray-900 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300 border border-gray-800">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                                    <p className="text-lg font-medium text-white">{siteConfig.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 group">
                                <div className="p-4 bg-gray-900 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300 border border-gray-800">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Location</p>
                                    <p className="text-lg font-medium text-white">{siteConfig.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-400">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-darkBg border border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-white"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-darkBg border border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-white"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-400">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-darkBg border border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none text-white"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full py-4 px-6 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-primary/20"
                            >
                                {status === "loading" ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>

                            {status === "success" && (
                                <p className="text-green-400 text-center text-sm bg-green-900/20 p-3 rounded border border-green-900/50">
                                    ✅ Message sent successfully!
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-red-400 text-center text-sm bg-red-900/20 p-3 rounded border border-red-900/50">
                                    ❌ Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
