"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { hero, whatsappNumber, whatsappMessage } from "@/data/content";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease },
  }),
};

export default function Hero() {
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden flex items-center"
      aria-label="Inicio"
    >
      {/* Imagen de fondo full-bleed */}
      <Image
        src="/malume-hero.png"
        alt=""
        fill
        priority
        className="object-cover object-[90%_center] md:object-[60%_center]"
        sizes="100vw"
      />

      {/* Gradiente desktop — opaco izquierda (texto), transparente derecha (persona) */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, #F2EBE0 28%, rgba(242,235,224,0.88) 48%, rgba(242,235,224,0.3) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* Gradiente mobile — opaco arriba-izquierda (texto), transparente abajo-derecha (foto) */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(145deg, rgba(242,235,224,0.96) 20%, rgba(242,235,224,0.80) 45%, rgba(242,235,224,0.45) 70%, rgba(242,235,224,0.15) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-36 md:py-44">
        <div className="max-w-xl">

          <motion.p
            className="text-dorado text-xs font-bold uppercase tracking-[0.28em] mb-5"
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
          >
            Comunicación · Protocolo · Eventos
          </motion.p>

          <motion.h1
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-vino-osc mb-5"
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            className="font-playfair text-lg md:text-xl italic text-vino mb-5"
            initial="hidden"
            animate="visible"
            custom={0.35}
            variants={fadeUp}
          >
            {hero.tagline}
          </motion.p>

          <motion.p
            className="text-gris-txt/80 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
            initial="hidden"
            animate="visible"
            custom={0.45}
            variants={fadeUp}
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial="hidden"
            animate="visible"
            custom={0.55}
            variants={fadeUp}
          >
            {/* CTA primario — navy sólido */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-vino-osc px-7 py-3.5 text-sm font-bold text-crema hover:bg-vino transition-colors duration-200 shadow-lg"
              aria-label="Contactar a María Luisa Mercado por WhatsApp"
            >
              <MessageCircle size={17} aria-hidden="true" />
              {hero.ctaPrimary.label}
            </a>

            {/* CTA secundario — contorno navy */}
            <Link
              href={hero.ctaSecondary.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-vino-osc/30 px-7 py-3.5 text-sm font-semibold text-vino-osc hover:border-vino-osc hover:bg-vino-osc/5 transition-all duration-200"
            >
              {hero.ctaSecondary.label}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.a
        href="#sobre-mi"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-vino-osc/30 hover:text-vino transition-colors"
        animate={{ y: [0, 9, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        aria-label="Ir a la sección Sobre mí"
      >
        <ChevronDown size={30} />
      </motion.a>
    </section>
  );
}
