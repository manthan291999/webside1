"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from "./CanvasLoader";
import Computers from "./Computers";

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check for mobile device
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        // Update on resize
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
            className="!absolute inset-0"
        >
            <Suspense fallback={<CanvasLoader />}>
                {/* Lighting Setup - Bright enough to show textures */}
                <hemisphereLight intensity={0.8} groundColor="#0a0a15" />

                {/* Main Key Light - Bright white */}
                <directionalLight
                    position={[5, 10, 5]}
                    intensity={2}
                    color="#ffffff"
                    castShadow
                />

                {/* Fill Light */}
                <directionalLight
                    position={[-5, 5, -5]}
                    intensity={1}
                    color="#ffffff"
                />

                {/* Cyan Accent Light - Rim light effect */}
                <pointLight
                    position={[5, 5, 5]}
                    intensity={2}
                    color="#00f3ff"
                    distance={20}
                />

                {/* Purple Accent Light - Rim light effect */}
                <pointLight
                    position={[-5, 3, -3]}
                    intensity={1.5}
                    color="#bc13fe"
                    distance={15}
                />

                {/* Ambient Fill - Ensure nothing is pure black */}
                <ambientLight intensity={0.5} />

                {/* Main 3D Model */}
                <Computers isMobile={isMobile} />

                {/* Controls */}
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    autoRotate
                    autoRotateSpeed={0.5}
                />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
