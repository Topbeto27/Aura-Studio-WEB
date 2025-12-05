"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = Array.from({ length: 20 }, (_, i) => ({
  src: `/fotos_portafolio/gallery${i + 1}.webp`,
  alt: `Gallery Image ${i + 1}`,
}));

export default function PortfolioPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'ArrowLeft') showPrevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);


  return (
    <main className="container mx-auto px-4 py-8">
      <h1 id="gallery" className="text-4xl font-bold text-center mb-12 text-white">
        Portafolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
              
            />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-neutral-300 transition-colors z-50"
          >
            &times;
          </button>
          
          <button
            onClick={showPrevImage}
            className="absolute left-4 sm:left-10 text-white text-3xl sm:text-5xl hover:text-neutral-300 transition-colors z-50"
          >
            &#8249;
          </button>
          
          <button
            onClick={showNextImage}
            className="absolute right-4 sm:right-10 text-white text-3xl sm:text-5xl hover:text-neutral-300 transition-colors z-50"
          >
            &#8250;
          </button>

          <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
            <Image
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                layout="fill"
                objectFit="contain"
                
                className="animate-fade-in-down"
            />
          </div>
        </div>
      )}
    </main>
  );
}
