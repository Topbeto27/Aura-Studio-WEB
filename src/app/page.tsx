"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// SVGs for Social Icons - Deluxe Design
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

const carouselImages = [
    { src: '/fotos_portafolio/gallery13.webp', alt: 'Retrato profesional en exterior' },
    { src: '/fotos_portafolio/gallery14.webp', alt: 'Fotografía de producto con fondo oscuro' },
    { src: '/fotos_portafolio/gallery15.webp', alt: 'Evento social capturado en el momento' },
    { src: '/fotos_portafolio/gallery16.webp', alt: 'Fotografía de alimentos profesional' },
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="flex flex-col items-center gap-6">
          <div>
            <Image src="/fotos_portafolio/logos/logo-alt.webp" alt="Aura Studio Alternate Logo" width={200} height={200} className="w-40 h-40 md:w-48 md:h-48" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Capturamos la Esencia de tu Marca
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg text-neutral-300">
            Fotografía y video que no solo se ve, se siente. En Aura Studio, transformamos ideas en contenido visual que inspira y conecta.
          </p>
          <div>
            <Link href="/portafolio" className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg">
              Ver Portafolio
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-neutral-950">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Síguenos y Hablemos</h2>
            <div className="flex justify-center items-center space-x-6">
                <a href="https://www.instagram.com/aurastudio_dgo/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-transform transform hover:scale-110">
                    <InstagramIcon />
                    <span className="sr-only">Instagram</span>
                </a>
                <a href="https://www.facebook.com/share/1ALMuiqheq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-transform transform hover:scale-110">
                    <FacebookIcon />
                    <span className="sr-only">Facebook</span>
                </a>
                <a href="https://wa.me/5216741170415" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-transform transform hover:scale-110">
                    <WhatsAppIcon />
                    <span className="sr-only">WhatsApp</span>
                </a>
            </div>
        </div>
      </section>

      {/* "Nuestro Trabajo" Carousel Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-200 mb-10">Una Muestra de Nuestro Trabajo</h2>
          <div className="relative w-full max-w-3xl mx-auto h-96 rounded-lg overflow-hidden shadow-2xl">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="contain"
                  className="bg-neutral-800"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}