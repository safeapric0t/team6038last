import React, { Suspense, useState, useLayoutEffect, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows, Html, useProgress } from '@react-three/drei';
import * as THREE from 'three';

interface RobotModelProps {
    modelPath: string;
}

function RobotModel({ modelPath }: RobotModelProps) {
    // Enable DRACO compression support
    // The decoder is hosted by Google by default
    const { scene } = useGLTF(modelPath, 'https://www.gstatic.com/draco/versioned/decoders/1.5.7/');

    useLayoutEffect(() => {
        if (scene) {
            const box = new THREE.Box3().setFromObject(scene);
            const size = new THREE.Vector3();
            box.getSize(size);
            const center = new THREE.Vector3();
            box.getCenter(center);

            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 4 / maxDim;
            scene.scale.setScalar(scale);

            scene.position.x = -center.x * scale;
            scene.position.y = -center.y * scale;
            scene.position.z = -center.z * scale;
        }
    }, [scene]);

    return <primitive object={scene} />;
}

function LoadingSpinner() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center gap-4 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 min-w-[200px]">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-neon-purple/20 rounded-full" />
                    <div
                        className="absolute inset-0 border-4 border-neon-purple rounded-full animate-spin border-t-transparent"
                        style={{ animationDuration: '0.8s' }}
                    />
                </div>
                <div className="flex flex-col items-center gap-1">
                    <p className="text-white font-bold text-lg">{Math.round(progress)}%</p>
                    <p className="text-gray-400 text-xs tracking-widest uppercase font-medium">Downloading Model</p>
                </div>
            </div>
        </Html>
    );
}

interface RobotViewerProps {
    modelPath: string;
    name: string;
}

const RobotViewer: React.FC<RobotViewerProps> = ({ modelPath, name }) => {
    const [zoom, setZoom] = useState(6);
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Simple Intersection Observer for Lazy Loading
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '100px' }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-neon-purple/20 bg-[#0a0a10] shadow-2xl shadow-purple-500/5"
        >
            {isInView ? (
                <Canvas
                    camera={{ position: [0, 2, zoom], fov: 45 }}
                    shadows
                    gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
                    dpr={[1, 2]} // Performance optimization: cap pixel ratio
                >
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.5} castShadow />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
                    <pointLight position={[10, -5, 5]} intensity={0.4} color="#06b6d4" />

                    <Suspense fallback={<LoadingSpinner />}>
                        <RobotModel modelPath={modelPath} />
                        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={15} blur={2.5} far={4} color="#a855f7" />
                        <Environment preset="city" />
                    </Suspense>

                    <OrbitControls
                        enablePan={false}
                        enableZoom={true}
                        minDistance={3}
                        maxDistance={25}
                        autoRotate
                        autoRotateSpeed={1}
                    />
                </Canvas>
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-neon-purple/20 border-t-neon-purple rounded-full animate-spin" />
                </div>
            )}

            {/* Controls overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="glass px-4 py-2">
                    <p className="text-white text-sm font-medium">{name}</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setZoom((z) => Math.min(z + 2, 20))}
                        className="glass w-10 h-10 flex items-center justify-center text-white hover:text-neon-purple transition-colors text-lg font-bold"
                        aria-label="Zoom out"
                    >
                        −
                    </button>
                    <button
                        onClick={() => setZoom((z) => Math.max(z - 2, 4))}
                        className="glass w-10 h-10 flex items-center justify-center text-white hover:text-neon-purple transition-colors text-lg font-bold"
                        aria-label="Zoom in"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Hint */}
            <div className="absolute top-4 right-4 glass px-3 py-1.5 opacity-60">
                <p className="text-gray-400 text-xs">🖱 Drag to rotate • Scroll to zoom</p>
            </div>
        </div>
    );
};

export default RobotViewer;
