import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string; category?: string }[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
        default:
          break;
      }
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg/95 backdrop-blur-md transition-opacity duration-300">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full glass-subtle text-white hover:text-neon-purple transition-all duration-300"
        aria-label="Close modal"
      >
        <X size={24} />
      </button>

      {/* Navigation buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-subtle text-white hover:text-neon-purple hover:border-neon-purple/30 transition-all duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-subtle text-white hover:text-neon-purple hover:border-neon-purple/30 transition-all duration-300"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Image container */}
      <div className="relative max-w-[90vw] max-h-[90vh] overflow-hidden rounded-xl">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-[85vh] object-contain"
        />

        {/* Image info bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-bg to-transparent text-white">
          <p className="text-lg font-medium">{currentImage.alt}</p>
          {currentImage.category && (
            <p className="text-sm text-neon-purple">{currentImage.category}</p>
          )}
          <p className="text-sm text-gray-400 mt-1">
            {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;