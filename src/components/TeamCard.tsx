import React from 'react';

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, role }) => {
  return (
    <div className="glass neon-border-hover overflow-hidden group max-w-sm w-full mx-auto">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Info */}
      <div className="p-5 text-center relative">
        {/* Accent bar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-neon-purple to-neon-cyan" />
        <h3 className="text-lg font-semibold text-white mt-1">{name}</h3>
        <p className="text-gray-400 text-sm mt-1">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;