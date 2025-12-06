"use client";

import { motion, Variants } from 'framer-motion';

// Icons
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  );
  
  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
  
  const WhatsAppIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
    },
  },
};

const contactOptions = [
    { 
        name: 'Instagram', 
        icon: <InstagramIcon />, 
        href: 'https://www.instagram.com/aurastudio_dgo/',
        handle: '@aurastudio_dgo',
        cta: 'Síguenos'
    },
    { 
        name: 'Facebook', 
        icon: <FacebookIcon />, 
        href: 'https://www.facebook.com/share/1ALMuiqheq/?mibextid=wwXIfr',
        handle: 'Aura Studio',
        cta: 'Visítanos'
    },
    { 
        name: 'WhatsApp', 
        icon: <WhatsAppIcon />, 
        href: 'https://wa.me/5216741170415',
        handle: '+52 674 117 0415',
        cta: 'Escríbenos'
    },
    { 
        name: 'Email', 
        icon: <MailIcon />, 
        href: 'mailto:aurastudiodgo@gmail.com',
        handle: 'aurastudiodgo@gmail.com',
        cta: 'Envíanos un correo'
    },
]

export default function ContactPage() {
  return (
    <div className="bg-neutral-900 min-h-screen text-white flex items-center justify-center -mt-16">
      <motion.div 
        className="container mx-auto px-4 py-16 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            variants={itemVariants}
        >
          Hablemos.
        </motion.h1>
        <motion.p 
            className="max-w-xl mx-auto text-lg text-neutral-300 mb-12"
            variants={itemVariants}
        >
          Estamos listos para darle vida a tu próximo proyecto. Elige tu forma de contacto preferida.
        </motion.p>
        
        <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
        >
          {contactOptions.map((option) => (
            <motion.a
              key={option.name}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-800/50 p-8 rounded-2xl group hover:bg-neutral-800 transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex justify-center mb-4 text-indigo-400">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold mb-1">{option.name}</h3>
              <p className="text-neutral-400 mb-4">{option.handle}</p>
              <span className="font-semibold text-indigo-400 group-hover:underline">
                {option.cta} &rarr;
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
