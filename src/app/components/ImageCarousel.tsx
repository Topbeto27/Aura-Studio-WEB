"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  folder: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, folder }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="relative w-full h-64 my-4 flex items-center justify-center bg-gray-700 rounded-lg">
        <p className="text-gray-400">No images available for this package.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <div className="relative h-full overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className="absolute w-full h-full transition-opacity duration-500 ease-in-out"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`${folder} ${index + 1}`}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={showPrevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition z-10"
            aria-label="Previous Image"
          >
            &#10094;
          </button>
          <button
            onClick={showNextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition z-10"
            aria-label="Next Image"
          >
            &#10095;
          </button>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
