import { getImagePaths } from '../../../lib/image-paths';
import ServiciosPageContent from './ServiciosPageContent';

// Define the structure for service data including image paths
interface Service {
    category: string;
    description: string;
    packages: any[]; // You might want to define a more specific type for packages
    image_folder: string;
    imagePaths: string[]; // Added property to store image paths
}

// Define the services array here so it's accessible by the server component
// This array should ideally be moved to a separate file or fetched from a DB
// but for this task, keeping it here to avoid further refactoring of data source.
const servicesData = [
  {
    category: "Retrato Profesional (Marca Personal y Redes sociales)",
    description: "Mejora tu presencia online con fotos que transmiten confianza y profesionalismo.",
    packages: [
      {
        name: 'Perfil Express',
        duration: '30 minutos (1 Locación)',
        photos: '3 fotos profesionales',
        outfits: '1 atuendo',
        premium_advantage: null,
      },
      {
        name: 'Marca Pro Completa',
        duration: '90 minutos (Hasta 3 Locaciones)',
        photos: '20 fotos versátiles',
        outfits: 'Ilimitado dentro del tiempo',
        premium_advantage: 'Más variedad de poses, estilos y la posibilidad de fotos "lifestyle" (en acción).',
      },
    ],
    image_folder: "retrato_profesional",
  },
  {
    category: "Foto Producto (E-commerce y Catálogos)",
    description: "Imágenes limpias y atractivas que convierten visitantes en compradores para tu tienda online.",
    packages: [
        {
            name: 'Fondo Blanco',
            photos: '15 fotos (1 ángulo por producto)',
            image_type: 'Fondo blanco puro, recorte fácil',
            premium_advantage: null,
        },
        {
            name: 'Lifestyle & Detalle',
            photos: '50 fotos (Múltiples ángulos + lifestyle)',
            image_type: 'Fondo blanco Y fotos contextuales (en uso, con props)',
            premium_advantage: 'Incluye tomas creativas que cuentan una historia, no solo fotos técnicas del producto.',
        },
    ],
    image_folder: "foto_producto",
  },
  {
    category: "Evento Social (Fiestas, Aniversarios, Inauguraciones)",
    description: "Capturamos los momentos auténticos para que puedas disfrutar de tu evento sin preocupaciones.",
    packages: [
        {
            name: 'Reportaje Esencial',
            duration: '1.5 horas',
            photos: '80-100 fotos editadas',
            premium_advantage: null,
        },
        {
            name: 'Cobertura Total VIP',
            duration: '4 horas',
            photos: '250+ fotos editadas',
            premium_advantage: 'Más tiempo para cubrir todos los momentos clave, más asistentes y más detalles del ambiente y la decoración.',
        },
    ],
    image_folder: "evento_social",
  },
  {
    category: "Fotografía Grupal (Empresas y Familias)",
    description: "Inmortaliza a tu equipo o a tu familia con imágenes profesionales y cohesivas.",
    packages: [
        {
            name: 'Foto de Equipo Rápida',
            duration: '30 minutos (1 pose grupal)',
            photos: '1 foto grupal + 1 individual por persona*',
            premium_advantage: null,
        },
        {
            name: 'Retratos Completos',
            duration: '90 minutos (Múltiples poses y estilos)',
            photos: '5 fotos grupales + 3 individuales por persona*',
            premium_advantage: 'Mayor variedad de fotos individuales, diferentes combinaciones de grupo y retoque de piel avanzado para todos.',
        },
    ],
    image_folder: "fotografia_grupal",
  },
  {
    category: "Sesión de Pareja (Compromisos, Aniversarios)",
    description: "Capturamos su conexión y amor en imágenes naturales y románticas.",
    packages: [
        {
            name: 'Mini Sesión Romance',
            duration: '30 minutos (1 Locación)',
            photos: '10 fotos con estilo romántico',
            premium_advantage: null,
        },
        {
            name: 'Historia de Amor',
            duration: '2 horas (Hasta 2 Locaciones)',
            photos: '50 fotos con retoque avanzado',
            premium_advantage: 'Mucha más variedad, tiempo para relajarse y capturar momentos íntimos, y retoque de piel profesional en todas las imágenes.',
        },
    ],
    image_folder: "sesion_pareja",
  },
];

export default async function ServiciosPage() {
    const servicesWithImages: Service[] = [];

    for (const service of servicesData) {
        const imagePaths = await getImagePaths(service.image_folder);
        servicesWithImages.push({
            ...service,
            imagePaths: imagePaths,
        });
    }

    return <ServiciosPageContent services={servicesWithImages} />;
}
