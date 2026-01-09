"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, Preload } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from "three";

// Robot Model Component
const RobotModel = ({ scale = 0.01 }) => {
    const groupRef = useRef();

    // Load the FBX model
    const fbx = useLoader(FBXLoader, "/robot.fbx");

    // Apply materials and setup
    useEffect(() => {
        if (fbx) {
            fbx.traverse((child) => {
                if (child.isMesh) {
                    // Enable shadows
                    child.castShadow = true;
                    child.receiveShadow = true;

                    // Ensure materials look good
                    if (child.material) {
                        child.material.metalness = 0.6;
                        child.material.roughness = 0.4;
                    }
                }
            });
        }
    }, [fbx]);

    // Auto-rotate the robot
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group ref={groupRef} scale={scale}>
            <primitive object={fbx} />
        </group>
    );
};

// Loading Fallback Component
const LoadingFallback = () => (
    <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
            <div className="w-16 h-16 border-4 border-cyan/30 border-t-cyan rounded-full animate-spin mx-auto mb-4" />
            <p className="text-cyan font-mono text-sm animate-pulse">Loading Robot...</p>
        </div>
    </div>
);

// Main RobotHero Component
const RobotHero = () => {
    return (
        <div className="w-full h-full min-h-[400px] md:min-h-[500px]">
            <Suspense fallback={<LoadingFallback />}>
                <Canvas
                    camera={{ position: [0, 1, 5], fov: 50 }}
                    dpr={[1, 2]}
                    gl={{ antialias: true, alpha: true }}
                    shadows
                >
                    {/* Lighting */}
                    <ambientLight intensity={0.4} />
                    <directionalLight
                        position={[5, 10, 5]}
                        intensity={1}
                        castShadow
                        shadow-mapSize={[2048, 2048]}
                        color="#ffffff"
                    />
                    <directionalLight
                        position={[-5, 5, -5]}
                        intensity={0.5}
                        color="#00f3ff"
                    />
                    <pointLight
                        position={[0, 5, 0]}
                        intensity={0.5}
                        color="#bc13fe"
                    />

                    {/* Robot Model */}
                    <RobotModel scale={0.01} />

                    {/* Environment for reflections */}
                    <Environment preset="city" />

                    {/* Orbit Controls - rotation only, no zoom */}
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={true}
                        autoRotate={false}
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={Math.PI / 2}
                    />

                    <Preload all />
                </Canvas>
            </Suspense>
        </div>
    );
};

export default RobotHero;
