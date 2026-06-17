// =====================================================================
// ARCHIVO CENTRAL DE CONTENIDO
// Edita aquí texto, datos, servicios, logros, testimonios y galería.
// Los componentes leen desde este archivo; nunca hardcodees en ellos.
// =====================================================================

// --- NAV ---
export const navLinks = [
  { label: "Inicio",       href: "/" },
  { label: "Sobre mí",    href: "/#sobre-mi" },
  { label: "Servicios",   href: "/#servicios" },
  { label: "Trayectoria", href: "/trayectoria" },
  { label: "Galería",     href: "/galeria" },
  { label: "Contacto",    href: "/#contacto" },
];

export const whatsappNumber = "526673890109";
export const whatsappMessage = "Hola María Luisa, me gustaría conocer más sobre tus servicios.";

// --- HERO ---
export const hero = {
  name: "María Luisa Mercado Ponce",
  tagline: "Comunicación, relaciones públicas y eventos que dejan huella.",
  headline: "Convierto tu mensaje en presencia, tu evento en experiencia y tu marca en reputación.",
  subheadline:
    "Consultora especializada en relaciones públicas, protocolo y producción de eventos con más de tres décadas posicionando marcas, instituciones y líderes en México y el escenario internacional.",
  ctaPrimary: { label: "Hablemos por WhatsApp", href: "#contacto" },
  ctaSecondary: { label: "Ver trayectoria", href: "/trayectoria" },
  portraitAlt:
    "María Luisa Mercado Ponce, especialista en relaciones públicas y producción de eventos en Sinaloa, México",
};

// --- ABOUT ---
export const about = {
  heading: "Una carrera construida sobre cada evento que importa",
  bio: [
    "Con más de 34 años en el campo de la comunicación y 17 como productora de eventos, he acompañado a instituciones públicas, organismos internacionales y marcas privadas en los momentos que definen su historia: los que se recuerdan, los que transforman y los que generan conversación.",
    "Directora de Relaciones Públicas del Ayuntamiento de Culiacán, productora de eventos para el Senado de la República y la PROFEPA, disertante en foros internacionales y fundadora de IGA Comunicación Total Consultores: cada proyecto ha sido una oportunidad de demostrar que la comunicación bien ejecutada no solo informa — transforma.",
  ],
  philosophy:
    "Organizar eventos es nuestra pasión. Cada proyecto es un reto y una oportunidad para demostrar cuánto amas lo que haces; un lienzo en blanco en el que siempre puedes escribir historias exitosas e inolvidables.",
  philosophyAuthor: "— María Luisa Mercado Ponce",
};

// --- STATS (contadores) ---
export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 34, suffix: "+", label: "años en comunicación" },
  { value: 17, suffix: "+", label: "años en producción de eventos" },
  { value: 70, suffix: "+", label: "programas digitales producidos" },
  { value: 5,  suffix: "+", label: "países de audiencia" },
];

// --- SERVICES ---
export type Service = {
  id: string;
  icon: string; // nombre de ícono de lucide-react
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "comunicacion",
    icon: "MessageSquare",
    title: "Comunicación Estratégica",
    description:
      "Diseño de mensajes institucionales y corporativos que conectan con públicos clave, gestionan la narrativa y construyen reputación sostenible.",
  },
  {
    id: "imagen",
    icon: "Star",
    title: "Imagen Pública",
    description:
      "Asesoría integral de imagen personal e institucional: proyección visual, lenguaje corporal, comunicación no verbal y presencia en medios.",
  },
  {
    id: "rrpp",
    icon: "Handshake",
    title: "Relaciones Públicas y Protocolo",
    description:
      "Gestión de relaciones con medios, stakeholders e instituciones. Protocolo oficial, empresarial y social aplicado a cada contexto.",
  },
  {
    id: "capacitacion",
    icon: "GraduationCap",
    title: "Capacitación",
    description:
      "Talleres, seminarios y conferencias para equipos de comunicación, funcionarios públicos y profesionales que buscan elevar su presencia y efectividad.",
  },
  {
    id: "eventos",
    icon: "CalendarDays",
    title: "Producción de Eventos",
    description:
      "Planeación y producción de eventos presenciales, virtuales e híbridos: congresos, cumbres, ceremonias, lanzamientos y actos protocolarios.",
  },
];

// --- TIMELINE ---
export type TimelineItem = {
  id: string;
  period: string;
  title: string;
  description: string;
};

export const timelineItems: TimelineItem[] = [
  {
    id: "ayuntamiento",
    period: "Gestión Municipal",
    title: "Directora de Relaciones Públicas del Ayuntamiento de Culiacán",
    description:
      "Coordinación de la comunicación institucional de uno de los municipios más importantes de México, gestionando imagen, medios y relaciones interinstitucionales.",
  },
  {
    id: "senado",
    period: "Producción Institucional",
    title: "Encuentro Nacional de Adopción — Senado de la República",
    description:
      "Producción del encuentro nacional de adopción convocado por el Senado de la República, articulando logística, protocolo y cobertura mediática a nivel federal.",
  },
  {
    id: "profepa",
    period: "Producción Ambiental",
    title: "Expo Ambiental — PROFEPA",
    description:
      "Producción de la Expo Ambiental de la Procuraduría Federal de Protección al Ambiente, posicionando la agenda ambiental a través del diseño de experiencias.",
  },
  {
    id: "seminario",
    period: "Formación Continua",
    title: "7+ ediciones del Seminario Internacional de RR.PP. y Protocolo",
    description:
      "Fundación y dirección del Seminario Internacional de Relaciones Públicas y Protocolo. La 7ª edición, «El Poder del Cambio», reunió a ponentes de la ONU, México y América Latina con participantes de toda la región.",
  },
  {
    id: "pandemia",
    period: "Transformación Digital",
    title: "70+ programas online con audiencia internacional",
    description:
      "Durante la pandemia, liderar la transición al entorno digital produciendo más de 70 programas online con alcance internacional, demostrando que la comunicación no se detiene.",
  },
  {
    id: "congresos",
    period: "Producción Internacional",
    title: "Congresos y foros internacionales",
    description:
      "Producción de congresos internacionales y participación como disertante en foros de relaciones públicas, protocolo y comunicación en México y el extranjero.",
  },
];

// --- GALLERY ---
export type GalleryItem = {
  id: string;
  alt: string;
  category: "eventos-híbridos" | "congresos" | "institucional" | "capacitación";
  ratio: "16/9" | "4/3" | "1/1";
  description: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    alt: "Producción de evento híbrido institucional con escenario y sistema de streaming",
    category: "eventos-híbridos",
    ratio: "16/9",
    description: "Evento híbrido institucional",
  },
  {
    id: "g2",
    alt: "Congreso internacional de relaciones públicas con presencia de ponentes internacionales",
    category: "congresos",
    ratio: "4/3",
    description: "Congreso internacional RR.PP.",
  },
  {
    id: "g3",
    alt: "Acto protocolario con autoridades institucionales y cobertura de medios",
    category: "institucional",
    ratio: "1/1",
    description: "Acto protocolario institucional",
  },
  {
    id: "g4",
    alt: "Seminario internacional de relaciones públicas y protocolo, edición presencial",
    category: "congresos",
    ratio: "4/3",
    description: "Seminario Internacional — edición presencial",
  },
  {
    id: "g5",
    alt: "Producción de programa online con audiencia internacional durante pandemia",
    category: "eventos-híbridos",
    ratio: "16/9",
    description: "Programa digital con audiencia internacional",
  },
  {
    id: "g6",
    alt: "Taller de capacitación en imagen pública y comunicación para funcionarios",
    category: "capacitación",
    ratio: "4/3",
    description: "Taller de imagen y comunicación",
  },
  {
    id: "g7",
    alt: "Expo Ambiental PROFEPA — montaje y producción del evento federal",
    category: "institucional",
    ratio: "16/9",
    description: "Expo Ambiental PROFEPA",
  },
  {
    id: "g8",
    alt: "Encuentro nacional presidido por el Senado de la República — producción integral",
    category: "institucional",
    ratio: "4/3",
    description: "Encuentro Nacional — Senado de la República",
  },
  {
    id: "g9",
    alt: "Conferencia magistral de María Luisa Mercado sobre protocolo empresarial",
    category: "capacitación",
    ratio: "1/1",
    description: "Conferencia magistral de protocolo",
  },
];

export const galleryCategories = [
  { id: "todos",           label: "Todos" },
  { id: "eventos-híbridos", label: "Eventos Híbridos" },
  { id: "congresos",       label: "Congresos" },
  { id: "institucional",   label: "Institucional" },
  { id: "capacitación",    label: "Capacitación" },
] as const;

// --- TESTIMONIALS ---
export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarAlt: string;
};

// Datos de ejemplo — reemplazar con testimonios reales
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "[Nombre — Testimonio de ejemplo]",
    role: "Director General",
    company: "[Institución — reemplazar]",
    quote:
      "\"La organización y el nivel de detalle que María Luisa aporta a cada proyecto son extraordinarios. Gracias a su trabajo, nuestro congreso fue reconocido como uno de los mejor producidos de la región.\"",
    avatarAlt: "Retrato de [Nombre], Director General de [Institución]",
  },
  {
    id: "t2",
    name: "[Nombre — Testimonio de ejemplo]",
    role: "Titular de Comunicación",
    company: "[Dependencia gubernamental — reemplazar]",
    quote:
      "\"Su capacidad para manejar protocolo oficial sin perder calidez humana es única. Cada evento que produjo para la institución reflejó exactamente la imagen que queríamos proyectar.\"",
    avatarAlt: "Retrato de [Nombre], Titular de Comunicación de [Dependencia]",
  },
  {
    id: "t3",
    name: "[Nombre — Testimonio de ejemplo]",
    role: "Participante",
    company: "Seminario Internacional RR.PP.",
    quote:
      "\"El seminario que dirige María Luisa transformó mi visión de las relaciones públicas. La calidad de los contenidos y la experiencia de aprendizaje no tienen comparación en el mercado hispanohablante.\"",
    avatarAlt: "Retrato de participante del Seminario Internacional de Relaciones Públicas",
  },
];

// --- RECOGNITION ---
export type Recognition = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const recognitions: Recognition[] = [
  {
    id: "academia",
    icon: "Award",
    title: "Académica de Número",
    description:
      "Academia de Relaciones Públicas y Protocolo de México — reconocimiento que se otorga a los profesionales de mayor trayectoria y contribución a la disciplina.",
  },
  {
    id: "meetings",
    icon: "BadgeCheck",
    title: "Meetings Specialist",
    description:
      "Certificación internacional como especialista en organización y gestión de reuniones, congresos y eventos corporativos.",
  },
  {
    id: "periodismo",
    icon: "Trophy",
    title: "Premio Estatal de Periodismo",
    description:
      "Reconocimiento estatal a la trayectoria y aportación al periodismo y la comunicación en Sinaloa.",
  },
  {
    id: "relaode",
    icon: "Globe",
    title: "Miembro de RELAODE",
    description:
      "Miembro activa de la Red Latinoamericana de Orientación y Desarrollo Empresarial y disertante en foros internacionales de relaciones públicas.",
  },
];

// --- CONTACT ---
export const contactInfo = {
  whatsapp: whatsappNumber,
  email: "malume50@hotmail.com",
  phone: "+52 667 716 8229",
  location: "Culiacán, Sinaloa · México",
};

// --- FOOTER ---
export const footerLinks = [
  // { label: "LinkedIn",  href: "https://www.linkedin.com/in/marialuisamercado" },
  { label: "Facebook",  href: "https://www.facebook.com/iga.comunicacion" },
  { label: "Instagram", href: "https://www.instagram.com/marialuisamercadoponce/" },
];
