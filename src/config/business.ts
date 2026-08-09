/**
 * Configuración centralizada de datos del negocio (Veterinaria Portex).
 * Para reutilizar como base en otras veterinarias, solo hay que modificar este archivo.
 */

export const business = {
  // Nombres
  name: 'Portex',
  fullName: 'Veterinaria Portex',
  tagline: 'Atención clínica de perros, gatos y animales no tradicionales',

  // Teléfono (formato internacional sin + ni espacios, para wa.me)
  phone: '5491171459657',
  phoneFormatted: '+54 9 11 7145-9657',

  // Mensajes prellenados de WhatsApp
  whatsappMessages: {
    general: 'Hola Portex! Quiero contactar con ustedes',
    turnoVeterinaria: 'Hola Portex! Quiero pedir turno para consulta veterinaria',
    consultarVeterinaria: 'Hola Portex! Quiero consultar por servicios veterinarios',
    consultarEspecialidad: (especialidad: string) => `Hola Portex! Quiero consultar por la especialidad: ${especialidad}`,
    comoLlegar: 'Hola Portex! Quiero saber cómo llegar a la clínica',
  },

  // Dirección
  address: {
    street: 'Cnel. Juan Francisco Seguí 5702',
    city: 'Isidro Casanova',
    region: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    // Para Google Maps / schema.org
    streetAddress: 'Cnel. Juan Francisco Seguí 5702',
    addressLocality: 'Isidro Casanova',
    addressRegion: 'Buenos Aires',
    // Texto completo para mostrar
    full: 'Cnel. Juan Francisco Seguí 5702, Isidro Casanova, Buenos Aires',
    short: 'Cnel. Juan Francisco Seguí 5702, Isidro Casanova',
    withCrossStreet: 'Cnel. Juan Francisco Seguí 5702 - Isidro Casanova, Buenos Aires',
  },

  // Redes sociales
  instagram: 'vetportex',
  instagramUrl: 'https://instagram.com/vetportex',
  whatsappUrl: 'https://wa.me/5491171459657',
  googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Cnel.+Juan+Francisco+Segu%C3%AD+5702,+Isidro+Casanova,+Buenos+Aires',
  googleMapsPlaceUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJwy_X0c_HvJURoUYcp4OIGQ4',

  // Horarios de atención - UN SOLO BLOQUE (clínica veterinaria)
  hours: {
    clinica: {
      name: 'Clínica Veterinaria',
      days: 'Lunes a Viernes',
      shortDays: 'Lun–Vie',
      ranges: ['09:30-13:00', '16:30-20:00'],
      // Índices de día (0=domingo, 1=lunes, ..., 6=sábado) para lógica JS
      dayIndices: [1, 2, 3, 4, 5],
      sabados: {
        days: 'Sábados',
        shortDays: 'Sáb',
        ranges: ['10:00-13:00'],
        dayIndices: [6],
      },
      domingos: {
        closed: true,
      },
      closedDays: 'Domingos y Feriados',
    },
  },

  // Google Maps Embed
  googleMapsEmbedUrl: 'https://www.google.com/maps?q=Cnel.+Juan+Francisco+Segu%C3%AD+5702,+Isidro+Casanova,+Buenos+Aires&output=embed',

  // Coordenadas geográficas
  geo: {
    lat: -34.6988044,
    lng: -58.5863139,
  },

  // Google Place ID
  googlePlaceId: 'ChIJwy_X0c_HvJURoUYcp4OIGQ4',

  // SEO / Schema.org
  seo: {
    author: 'Veterinaria Portex',
    businessName: 'Veterinaria Portex',
    alternateName: 'Portex Veterinaria',
    description: 'Veterinaria Portex en Isidro Casanova, Buenos Aires. Atención clínica de perros, gatos y animales no tradicionales. 18 especialidades médicas. ¡Pedí turno por WhatsApp!',
    priceRange: '$$',
    currenciesAccepted: 'ARS',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Transfer',
    areaServedRadius: '15000', // metros
    serviceType: [
      'Atención clínica de perros y gatos',
      'Atención clínica de animales no tradicionales',
      'Plan vacunal',
      'Certificado de salud',
      'Control antirrábico',
      'Colocación de microchip',
      'Análisis de laboratorio',
      'Ecografías',
      'Cardiología',
      'Nutrición',
      'Endocrinología',
      'Oftalmología',
      'Dermatología',
      'Gastroenterología',
      'Etología',
      'Traumatología',
      'Cirugías',
      'Kinesiología',
    ],
  },

  // Meta tags geo
  geoTags: {
    region: 'AR-B',
    placename: 'Isidro Casanova, Buenos Aires, Argentina',
    position: '-34.6988044;-58.5863139',
    icbm: '-34.6988044, -58.5863139',
  },

  // Open Graph address
  ogAddress: {
    phoneNumber: '5491171459657',
    streetAddress: 'Cnel. Juan Francisco Seguí 5702',
    locality: 'Isidro Casanova',
    region: 'Buenos Aires',
    postalCode: '',
    countryName: 'Argentina',
  },
} as const;

// Tipos derivados para TypeScript
export type Business = typeof business;
export type HoursConfig = typeof business.hours.clinica;
export type AddressConfig = typeof business.address;
export type WhatsAppMessages = typeof business.whatsappMessages;