import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'AuraStudio - Fotografía y Video Profesional',
  description: 'Estudio de fotografía y video profesional dedicado a inmortalizar tus momentos más preciados con un toque artístico y elegante.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} text-neutral-50 font-sans antialiased bg-gradient-to-b from-purple-500 to-pink-500`}>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 text-2xl font-semibold tracking-wider">
              <Image src="/fotos_portafolio/logos/logo.png" alt="Aura Studio Logo" width={40} height={40} className="h-10 w-10" />
              <span>AuraStudio</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/portafolio" className="hover:text-neutral-300 transition-colors">
                Portafolio
              </Link>
              <Link href="/servicios" className="hover:text-neutral-300 transition-colors">
                Servicios
              </Link>
              <Link href="/acerca-de" className="hover:text-neutral-300 transition-colors">
                Acerca De
              </Link>
              <Link href="/contacto" className="hover:text-neutral-300 transition-colors">
                Contacto
              </Link>
              <Link href="/login" className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                Login
              </Link>
            </nav>
            <button className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </header>

        <div className="pt-16">{children}</div>

        {/* Footer */}
        <footer id="contact" className="bg-neutral-950 py-12">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">AuraStudio</h3>
            <p className="text-neutral-400 mb-6">¿Listo para crear algo increíble? Contáctanos.</p>
            <a href="mailto:aurastudiodgo@gmail.com" className="bg-neutral-800 text-neutral-50 font-bold py-3 px-6 rounded-full hover:bg-neutral-700 transition-colors">
              aurastudiodgo@gmail.com
            </a>
            <div className="flex justify-center space-x-6 mt-8">
              <a href="https://www.instagram.com/aurastudio_dgo/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="https://www.facebook.com/share/1ALMuiqheq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="https://wa.me/5216741170415" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                WhatsApp
              </a>
            </div>
            <p className="text-neutral-500 mt-8 text-sm">© {new Date().getFullYear()} AuraStudio. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
