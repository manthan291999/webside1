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
                {/* Lighting Setup */}
                <hemisphereLight intensity={0.15} groundColor="black" />

                {/* Main Spotlight */}
                <spotLight
                    position={[-20, 50, 10]}
                    angle={0.12}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    shadow-mapSize={1024}
                    color="#ffffff"
                />

                {/* Cyan Accent Light */}
                <pointLight
                    position={[10, 10, 10]}
                    intensity={0.5}
                    color="#00f3ff"
                />

                {/* Purple Accent Light */}
                <pointLight
                    position={[-10, -10, -5]}
                    intensity={0.3}
                    color="#bc13fe"
                />

                {/* Ambient Fill */}
                <ambientLight intensity={0.1} />

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
