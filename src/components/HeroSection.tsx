import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage = 'mainfoto.jpg',
}) => {
  return (
    <div
      className="relative h-[55vh] flex items-center justify-center text-center overflow-hidden"
      onClick={() => window.scrollTo({ top: window.innerHeight / 2, behavior: 'smooth' })}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/60 to-dark-bg" />
      <div className="absolute inset-0 gradient-mesh opacity-60" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight gradient-text">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="h-6 w-6 text-neon-purple/60" />
      </div>
    </div>
  );
};

export default HeroSection;
