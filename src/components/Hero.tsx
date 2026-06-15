"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { hero, whatsappNumber, whatsappMessage } from "@/data/content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Hero() {
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-vino-osc overflow-hidden flex items-center"
      aria-label="Inicio"
    >
      {/* Textura decorativa */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #C9A24B 0%, transparent 50%), radial-gradient(circle at 80% 20%, #C9A24B 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-40 grid md:grid-cols-2 gap-12 md:gap-20 items-center w-full">

        {/* Columna texto */}
        <div className="text-crema order-2 md:order-1">
          <motion.p
            className="text-dorado text-sm font-semibold uppercase tracking-[0.2em] mb-4"
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
          >
            Comunicación · Protocolo · Eventos
          </motion.p>

          <motion.h1
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-crema mb-6"
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            className="text-dorado font-playfair text-xl italic mb-6"
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
          >
            {hero.tagline}
          </motion.p>

          <motion.p
            className="text-crema/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial="hidden"
            animate="visible"
            custom={0.5}
            variants={fadeUp}
          >
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-dorado px-7 py-3.5 text-sm font-bold text-vino-osc hover:bg-dorado/90 transition-all hover:scale-105 shadow-lg"
              aria-label="Contactar a María Luisa por WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              {hero.ctaPrimary.label}
            </a>
            <Link
              href="/trayectoria"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-crema/30 px-7 py-3.5 text-sm font-semibold text-crema hover:border-dorado hover:text-dorado transition-all"
            >
              {hero.ctaSecondary.label}
              <ChevronDown size={16} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* Columna imagen */}
        <motion.div
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-lg">

            {/* Brillo dorado difuso detrás */}
            <div
              className="absolute inset-0 scale-110 rounded-full blur-3xl opacity-20"
              style={{ background: "radial-gradient(circle, #C9A24B, transparent 70%)" }}
              aria-hidden="true"
            />

            {/* Marco offset decorativo */}
            <div
              className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-dorado/40 z-0"
              aria-hidden="true"
            />

            {/* Imagen */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-dorado/20">
              <Image
                src="/maule-perfil.png"
                alt={hero.portraitAlt}
                width={500}
                height={500}
                priority
                className="w-full h-auto object-cover object-top"
              />
            </div>

            {/* Línea dorada lateral */}
            <div
              className="absolute -left-3 top-8 bottom-8 w-0.5 rounded-full z-20"
              style={{ background: "linear-gradient(to bottom, transparent, #C9A24B, transparent)" }}
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.button
        onClick={() => scrollTo("#sobre-mi")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-crema/40 hover:text-dorado transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Bajar a la sección Sobre mí"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
