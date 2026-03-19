import React, { useState } from 'react';
import { Maximize2, Heart } from 'lucide-react';

interface GalleryImageProps {
  src: string;
  alt: string;
  category?: string;
  onClick: () => void;
}

const GalleryImage: React.FC<GalleryImageProps> = ({
  src,
  alt,
  category,
  onClick,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl transition-all duration-500 group border border-transparent hover:border-neon-purple/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
      style={{ opacity: isLoaded ? 1 : 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />

      {/* Overlay with actions */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-dark-bg/20 to-transparent flex flex-col justify-between p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <div className="self-end">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className={`p-2 rounded-full transition-all duration-300 ${isLiked
                ? 'bg-neon-pink text-white'
                : 'glass-subtle text-white hover:bg-neon-pink/20'
              }`}
            aria-label={isLiked ? 'Unlike' : 'Like'}
          >
            <Heart size={16} className={isLiked ? 'fill-white' : ''} />
          </button>
        </div>

        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-white font-medium truncate">{alt}</h3>
            {category && (
              <span className="text-neon-purple text-sm">{category}</span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="p-2 rounded-full glass-subtle text-white hover:bg-neon-purple/20 transition-all duration-300"
            aria-label="View full size"
          >
            <Maximize2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;