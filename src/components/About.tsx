"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { about } from "@/data/content";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="bg-crema py-24 md:py-32" aria-label="Sobre mí">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start" ref={ref}>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-dorado text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Sobre mí
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-vino mb-8 leading-snug">
              {about.heading}
            </h2>
            {about.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-gris-txt/80 text-base md:text-lg leading-relaxed mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Filosofía */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Línea acento: gold → navy */}
            <div
              className="absolute -left-4 top-0 bottom-0 w-1 rounded-full"
              style={{ background: "linear-gradient(to bottom, #C9A24B, #1B3A5C)" }}
              aria-hidden="true"
            />
            <blockquote className="pl-8">
              <p className="font-playfair text-xl md:text-2xl italic text-vino leading-relaxed mb-6">
                &ldquo;{about.philosophy}&rdquo;
              </p>
              <footer className="text-xs font-bold text-dorado uppercase tracking-widest">
                {about.philosophyAuthor}
              </footer>
            </blockquote>

            {/* Tarjeta IGA */}
            <div
              className="mt-12 rounded-2xl p-8 border border-vino/10"
              style={{ background: "linear-gradient(135deg, rgba(27,58,92,0.04), rgba(201,162,75,0.08))" }}
            >
              <p className="font-playfair text-vino text-lg font-semibold">
                IGA Comunicación Total Consultores
              </p>
              <p className="text-gris-txt/60 text-sm mt-2 leading-relaxed">
                Consultoría especializada en comunicación, relaciones públicas,
                protocolo y producción de eventos.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
