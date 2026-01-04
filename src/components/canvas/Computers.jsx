"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Fallback Geometry - Futuristic floating shapes when no model is loaded
const FallbackGeometry = ({ isMobile }) => {
    const groupRef = useRef();
    const mainRef = useRef();
    const ring1Ref = useRef();
    const ring2Ref = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.2;
        }
        if (mainRef.current) {
            mainRef.current.rotation.x += delta * 0.3;
            mainRef.current.rotation.z += delta * 0.1;
        }
        if (ring1Ref.current) {
            ring1Ref.current.rotation.x += delta * 0.5;
        }
        if (ring2Ref.current) {
            ring2Ref.current.rotation.z += delta * 0.3;
        }
    });

    const scale = isMobile ? 0.6 : 1;

    return (
        <group ref={groupRef} scale={scale}>
            {/* Central Icosahedron */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh ref={mainRef} position={[0, 0, 0]}>
                    <icosahedronGeometry args={[1.2, 1]} />
                    <MeshDistortMaterial
                        color="#00f3ff"
                        attach="material"
                        distort={0.3}
                        speed={2}
                        roughness={0.2}
                        metalness={0.8}
                        emissive="#00f3ff"
                        emissiveIntensity={0.3}
                    />
                </mesh>
            </Float>

            {/* Orbiting Ring 1 */}
            <mesh ref={ring1Ref} position={[0, 0, 0]}>
                <torusGeometry args={[2, 0.02, 16, 100]} />
                <meshStandardMaterial
                    color="#bc13fe"
                    emissive="#bc13fe"
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.8}
                />
            </mesh>

            {/* Orbiting Ring 2 */}
            <mesh ref={ring2Ref} position={[0, 0, 0]} rotation={[Math.PI / 3, 0, 0]}>
                <torusGeometry args={[2.5, 0.015, 16, 100]} />
                <meshStandardMaterial
                    color="#00f3ff"
                    emissive="#00f3ff"
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.6}
                />
            </mesh>

            {/* Floating Particles/Small Spheres */}
            {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const radius = 1.8;
                return (
                    <Float key={i} speed={1.5 + i * 0.2} floatIntensity={0.5}>
                        <mesh
                            position={[
                                Math.cos(angle) * radius,
                                Math.sin(angle) * 0.5,
                                Math.sin(angle) * radius,
                            ]}
                        >
                            <sphereGeometry args={[0.08, 16, 16]} />
                            <meshStandardMaterial
                                color={i % 2 === 0 ? "#00f3ff" : "#bc13fe"}
                                emissive={i % 2 === 0 ? "#00f3ff" : "#bc13fe"}
                                emissiveIntensity={1}
                            />
                        </mesh>
                    </Float>
                );
            })}

            {/* Glowing Core */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial
                    color="#ffffff"
                    emissive="#00f3ff"
                    emissiveIntensity={0.8}
                    transparent
                    opacity={0.3}
                />
            </mesh>
        </group>
    );
};

// Main Computer Model Component
const Computers = ({ isMobile }) => {
    const [modelLoaded, setModelLoaded] = useState(false);
    const [modelError, setModelError] = useState(false);

    // Try to load the GLTF model
    useEffect(() => {
        // Check if model exists by attempting to load it
        const checkModel = async () => {
            try {
                const response = await fetch("/models/desktop_pc/scene.gltf", { method: "HEAD" });
                if (response.ok) {
                    setModelLoaded(true);
                } else {
                    setModelError(true);
                }
            } catch {
                setModelError(true);
            }
        };
        checkModel();
    }, []);

    // If model failed to load or doesn't exist, show fallback
    if (modelError || !modelLoaded) {
        return <FallbackGeometry isMobile={isMobile} />;
    }

    // This would load the actual model if it exists
    return <ComputerModel isMobile={isMobile} />;
};

// Actual GLTF Model Component
const ComputerModel = ({ isMobile }) => {
    const { scene } = useGLTF("/models/desktop_pc/scene.gltf");
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    return (
        <mesh ref={meshRef}>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1} color="#00f3ff" position={[0, 2, 2]} />
            <pointLight intensity={0.5} color="#bc13fe" position={[-2, 1, -1]} />
            <primitive
                object={scene}
                scale={isMobile ? 0.5 : 0.75}
                position={isMobile ? [0, -2.5, -1.5] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

export default Computers;
