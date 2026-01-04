"use client";

import { motion } from "framer-motion";

const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren: staggerChildren || 0.1,
            delayChildren: delayChildren || 0,
        },
    },
});

const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: type || "tween",
            delay: delay || 0,
            duration: duration || 0.5,
            ease: "easeOut",
        },
    },
});

const slideIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
        x: 0,
        y: 0,
        transition: {
            type: type || "tween",
            delay: delay || 0,
            duration: duration || 0.5,
            ease: [0.25, 0.25, 0.25, 0.75],
        },
    },
});

const zoomIn = (delay, duration) => ({
    hidden: {
        scale: 0,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "tween",
            delay: delay || 0,
            duration: duration || 0.5,
            ease: "easeOut",
        },
    },
});

const textVariant = (delay) => ({
    hidden: {
        y: -50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1.25,
            delay: delay || 0,
        },
    },
});

// Higher Order Component
const SectionWrapper = (Component, idName, className = "") => {
    function HOC(props) {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                id={idName}
                className={`relative z-10 ${className}`}
            >
                <Component {...props} />
            </motion.section>
        );
    }

    // Preserve display name for debugging
    HOC.displayName = `SectionWrapper(${Component.displayName || Component.name || "Component"})`;

    return HOC;
};

export { staggerContainer, fadeIn, slideIn, zoomIn, textVariant };
export default SectionWrapper;
