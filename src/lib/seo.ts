import type { Metadata } from "next";

const SITE_URL = "https://www.marialuisamercado.com";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "María Luisa Mercado | Relaciones Públicas, Protocolo y Producción de Eventos",
  description:
    "Especialista en relaciones públicas, protocolo, comunicación y producción de eventos en México. Más de 34 años de experiencia en eventos híbridos, congresos y diplomacia corporativa.",
  keywords: [
    "relaciones públicas México",
    "protocolo eventos",
    "producción de eventos Sinaloa",
    "comunicación corporativa",
    "eventos híbridos",
    "IGA Comunicación Total",
    "María Luisa Mercado",
    "capacitación relaciones públicas",
  ],
  authors: [{ name: "María Luisa Mercado Ponce" }],
  creator: "María Luisa Mercado Ponce",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "María Luisa Mercado Ponce",
    title:
      "María Luisa Mercado | Relaciones Públicas, Protocolo y Producción de Eventos",
    description:
      "Especialista en relaciones públicas, protocolo, comunicación y producción de eventos en México. Más de 34 años de experiencia en eventos híbridos, congresos y diplomacia corporativa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "María Luisa Mercado Ponce — Especialista en Relaciones Públicas y Producción de Eventos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "María Luisa Mercado | Relaciones Públicas, Protocolo y Producción de Eventos",
    description:
      "Especialista en relaciones públicas, protocolo, comunicación y producción de eventos en México.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "María Luisa Mercado Ponce",
      alternateName: "Malume",
      jobTitle: [
        "Especialista en Relaciones Públicas",
        "Productora de Eventos",
        "Consultora de Protocolo y Comunicación",
      ],
      description:
        "Profesional con más de 34 años de experiencia en comunicación, relaciones públicas, protocolo y producción de eventos en México y Latinoamérica.",
      url: SITE_URL,
      email: "malume50@hotmail.com",
      telephone: "+526677168229",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Culiacán",
        addressRegion: "Sinaloa",
        addressCountry: "MX",
      },
      worksFor: {
        "@type": "Organization",
        name: "IGA Comunicación Total Consultores",
        url: SITE_URL,
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Meetings Specialist",
          credentialCategory: "Certificación Profesional",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Académica de Número — Academia de Relaciones Públicas y Protocolo de México",
          credentialCategory: "Membresía Académica",
        },
      ],
      award: "Premio Estatal de Periodismo",
      memberOf: [
        {
          "@type": "Organization",
          name: "Academia de Relaciones Públicas y Protocolo de México",
        },
        {
          "@type": "Organization",
          name: "RELAODE — Red Latinoamericana de Orientación y Desarrollo Empresarial",
        },
      ],
      sameAs: ["https://www.linkedin.com/in/marialuisamercado"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "IGA Comunicación Total Consultores",
      url: SITE_URL,
      description:
        "Consultoría especializada en relaciones públicas, protocolo, comunicación institucional y producción de eventos en México.",
      provider: { "@id": `${SITE_URL}/#person` },
      areaServed: {
        "@type": "Country",
        name: "México",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Comunicación y Eventos",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Comunicación Estratégica" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Imagen Pública" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Relaciones Públicas y Protocolo" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Capacitación" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Producción de Eventos" } },
        ],
      },
    },
  ],
};
