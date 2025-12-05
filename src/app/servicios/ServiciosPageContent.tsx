"use client";
import React from 'react';
import ImageCarousel from '../components/ImageCarousel';

// Define the structure for service data including image paths
interface Service {
    category: string;
    description: string;
    packages: any[]; // You might want to define a more specific type for packages
    image_folder: string;
    imagePaths: string[]; // This will now come from props
}

interface ServiciosPageContentProps {
    services: Service[];
}

const ServiciosPageContent: React.FC<ServiciosPageContentProps> = ({ services }) => {
    
    const handleWhatsAppRedirect = (packageName: string) => {
        const message = `Hola, me gustaría más información sobre el paquete ${packageName}.`;
        const whatsappUrl = `https://wa.me/526741170415?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-16 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Nuestros Servicios
        </h1>

        {services.map((service, index) => (
          <div key={index} className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-x-12 items-start">
            {/* Columna Izquierda (Imagen) - Sticky */}
            <div className="lg:sticky lg:top-24 w-full">
              <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                <ImageCarousel folder={service.image_folder} images={service.imagePaths} />
              </div>
            </div>

            {/* Columna Derecha (Contenido) */}
            <div className="mt-8 lg:mt-0">
              <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-3 text-white">{service.category}</h2>
                <p className="text-lg text-gray-400 max-w-3xl">{service.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.packages.map((pkg, pkgIndex) => (
                  <div key={pkgIndex} className={`p-8 rounded-xl border ${pkg.premium_advantage ? 'border-purple-500 bg-gray-800' : 'border-gray-700'}`}>
                    <h3 className={`text-2xl font-bold mb-5 ${pkg.premium_advantage ? 'text-purple-400' : 'text-white'}`}>{pkg.name}</h3>
                    <ul className="space-y-4 text-gray-300">
                      {pkg.duration && <li className="flex items-start"><span className="font-semibold mr-2 w-28">Duración Sesión:</span> <span>{pkg.duration}</span></li>}
                      {pkg.photos && <li className="flex items-start"><span className="font-semibold mr-2 w-28">Fotos Editadas:</span> <span>{pkg.photos}</span></li>}
                      {pkg.outfits && <li className="flex items-start"><span className="font-semibold mr-2 w-28">Cambios Vestuario:</span> <span>{pkg.outfits}</span></li>}
                      {pkg.image_type && <li className="flex items-start"><span className="font-semibold mr-2 w-28">Tipo de Imagen:</span> <span>{pkg.image_type}</span></li>}
                      {pkg.premium_advantage && <li className="flex items-start text-purple-300"><span className="font-semibold mr-2 w-28">Ventaja Premium:</span> <span>{pkg.premium_advantage}</span></li>}
                    </ul>
                    <button
                      onClick={() => handleWhatsAppRedirect(pkg.name)}
                      className="mt-8 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Solicitar Información
                    </button>
                  </div>
                ))}
              </div>
               {service.category === "Fotografía Grupal (Empresas y Familias)" && (
                <p className="text-sm text-gray-500 mt-6 text-center">*Max. 5 personas. Costo adicional por persona extra.</p>
               )}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ServiciosPageContent;
