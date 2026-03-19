import React, { useState, useCallback, useEffect } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import ImageModal from '../components/ImageModal';
import GalleryImage from '../components/GalleryImage';
import MasonryGrid from '../components/MasonryGrid';
import { galleryImages, categories, featuredImages } from '../data/galleryData';
import { Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter((image) => image.category === activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else setColumns(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => setModalOpen(false), []);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  }, [filteredImages.length]);

  const goToPrev = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  }, [filteredImages.length]);

  return (
    <div className="min-h-screen bg-dark-bg pt-28 pb-16">
      {/* ═══ INLINE HEADER: No hero, compact ═══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-2">
              <Camera className="h-5 w-5 text-neon-purple" />
              <p className="text-neon-purple text-sm font-medium tracking-widest uppercase">Gallery</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white">
              Photo <span className="gradient-text">Collection</span>
            </h1>
            <p className="text-gray-400 mt-2 max-w-md">
              Browse through our carefully curated collection of photographs
              spanning various categories and styles.
            </p>
          </div>

          <div className="flex items-center gap-3 glass px-4 py-2 animate-fade-in-up-delay-1">
            <span className="text-gray-400 text-sm">{filteredImages.length} photos</span>
            <div className="w-px h-4 bg-gray-600" />
            <span className="text-gray-400 text-sm">{categories.length} categories</span>
          </div>
        </div>

        {/* Filters */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Gallery Grid */}
        <div className="mt-8">
          <MasonryGrid columns={columns} gap={24}>
            {filteredImages.map((image, index) => (
              <GalleryImage
                key={image.id}
                src={image.src}
                alt={image.alt}
                category={image.category}
                onClick={() => openModal(index)}
              />
            ))}
          </MasonryGrid>
        </div>
      </div>

      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        images={filteredImages}
        currentIndex={currentImageIndex}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </div>
  );
};

export default Gallery;