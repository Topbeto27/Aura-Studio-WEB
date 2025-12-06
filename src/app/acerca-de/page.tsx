import Image from 'next/image';


const AcercaDePage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Acerca de Nosotros
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            En Aura Studio creemos que una gran imagen puede transformar por completo la forma en que tu marca o proyecto se presenta al mundo. Por eso trabajamos a tu lado como tu aliado creativo, acompañándote desde la idea inicial hasta la entrega final del material.
          </p>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 mt-4">
            Nos apasiona crear contenido visual que hable por ti: fotografía de producto que destaque lo mejor de tus piezas, retratos profesionales que transmitan credibilidad y personalidad, y cobertura de eventos que capture momentos auténticos.
          </p>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 mt-4">
            Utilizamos tecnología de alta calidad y un proceso de trabajo ágil —incluyendo una plataforma privada para que descargues tus archivos de forma cómoda y segura— para que tu experiencia sea tan profesional como los resultados.
          </p>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 mt-4">
            En Aura Studio, tu proyecto es personal para nosotros. Estamos aquí para ayudarte a mostrarlo con la calidad y esencia que merece.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden border-4 border-purple-500">
                <Image src="/fotos_portafolio/alberto.webp" alt="Alberto Ayala Guerrero" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Alberto Ayala Guerrero</h3>
              <p className="text-md text-gray-400">
                Productor audiovisual con enfoque dinámico en video y contenido creativo. Responsable de dirección visual y co-fundador de Aura Studio.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden border-4 border-pink-500">
                <Image src="/fotos_portafolio/jonathan.webp" alt="Jonathan Méndez" layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Jonathan Méndez</h3>
              <p className="text-md text-gray-400">
                Fotógrafo y editor especializado en retrato y producto. Enfocado en calidad, precisión y estilo moderno. Co-fundador de Aura Studio en Tepehuanes, Durango.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
                <h2 className="text-3xl font-bold mb-4 text-purple-400">Misión</h2>
                <p className="text-lg text-gray-300">
                Ofrecer servicios de fotografía y video de la más alta calidad, capturando momentos, productos y espacios con un estilo dinámico y profesional. Nuestro compromiso es brindar resultados que superen las expectativas de nuestros clientes, trabajando con precisión, creatividad y dedicación desde Tepehuanes, Durango, México.
                </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
                <h2 className="text-3xl font-bold mb-4 text-pink-500">Visión</h2>
                <p className="text-lg text-gray-300">
                Consolidarnos como uno de los estudios de fotografía y video más reconocidos del estado de Durango, distinguiéndonos por nuestra calidad, innovación y trato profesional. Buscamos expandir nuestros servicios, perfeccionar constantemente nuestras técnicas y convertirnos en un referente de excelencia visual en la región.
                </p>
            </div>
        </section>
      </main>
    </div>
  );
};

export default AcercaDePage;