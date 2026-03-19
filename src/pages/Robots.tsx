import React from 'react';
import RobotViewer from '../components/RobotViewer';
import { Cpu, Wrench, Calendar, ChevronDown } from 'lucide-react';

interface RobotSection {
  name: string;
  season: string;
  description: string;
  modelPath: string;
  specs: { label: string; value: string }[];
  image: string;
}

const robots: RobotSection[] = [
  {
    name: '2025 Season Robot',
    season: '2025',
    description: 'Built for the 2025 competition season. Name: "Bumblebee"',
    modelPath: '/models/robot2025.glb',
    specs: [
      { label: 'Season', value: '2025' },
      { label: 'Name', value: 'Bumblebee' },
      { label: 'Drive', value: 'Swerve Drive' },
    ],
    image: '/images/robot2025.jpg',
  },
  {
    name: '2024 Season Robot',
    season: '2024',
    description: 'Built for the 2024 competition season.',
    modelPath: '/models/robot2024.glb',
    specs: [
      { label: 'Season', value: '2024' },
      { label: 'Name', value: 'TBD' },
      { label: 'Drive', value: 'Tank Drive' },
    ],
    image: '/images/robot2024.jpg',
  },
];

const Robots = () => {
  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      {/* ═══ HERO: Full text, no image ═══ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute inset-0 bg-grid opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 mb-6 animate-fade-in-up">
            <Cpu className="h-4 w-4 text-neon-purple" />
            <span className="text-gray-400 text-sm">Our Machines</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white animate-fade-in-up">
            Our <span className="gradient-text">Robots</span>
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-lg mx-auto animate-fade-in-up-delay-1">
            Explore our robots in interactive 3D. Drag to rotate, scroll to zoom.
          </p>
          <ChevronDown className="h-6 w-6 text-neon-purple/50 mx-auto mt-8 animate-bounce" />
        </div>
      </div>

      {/* ═══ ROBOT SECTIONS: Full-width per robot ═══ */}
      {robots.map((robot, i) => (
        <section
          key={robot.season}
          className={`py-20 relative ${i % 2 === 1 ? '' : ''}`}
        >
          {/* Subtle separator */}
          {i > 0 && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />
          )}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Robot Title Row */}
            <div className={`flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-neon-cyan" />
                  <span className="text-neon-cyan text-sm font-medium tracking-widest uppercase">{robot.season}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white">{robot.name}</h2>
                <p className="text-gray-400 mt-2">{robot.description}</p>
              </div>

              {/* Specs pills */}
              <div className="flex flex-wrap gap-3">
                {robot.specs.map((spec) => (
                  <div key={spec.label} className="glass px-4 py-2 flex items-center gap-2">
                    <Wrench className="h-3 w-3 text-neon-purple" />
                    <span className="text-xs text-gray-400">{spec.label}:</span>
                    <span className="text-xs text-white font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3D Viewer */}
            <div className="animate-fade-in-up">
              <RobotViewer modelPath={robot.modelPath} name={robot.name} />
            </div>

            {/* Fallback image below */}
            <div className="mt-6 glass neon-border-hover p-4 flex items-center gap-4 max-w-md">
              <img
                src={robot.image}
                alt={robot.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <p className="text-white text-sm font-medium">{robot.name}</p>
                <p className="text-gray-500 text-xs mt-1">
                  If the 3D model is not loading, place your <code className="text-neon-purple">.glb</code> file in <code className="text-neon-purple">public/models/</code>
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Robots;
