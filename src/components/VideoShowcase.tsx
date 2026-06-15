"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function VideoShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-vino-osc py-24 md:py-32" aria-label="Video institucional">
      <div className="mx-auto max-w-5xl px-6" ref={ref}>

        {/* Encabezado */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-dorado text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            En acción
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-crema leading-snug">
            Más de dos décadas construyendo<br className="hidden md:block" /> experiencias que trascienden
          </h2>
        </motion.div>

        {/* Marco decorativo + video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Borde dorado decorativo */}
          <div
            className="absolute -inset-[3px] rounded-2xl z-0"
            style={{ background: "linear-gradient(135deg, #C9A24B55, #6B1F3A33, #C9A24B55)" }}
            aria-hidden="true"
          />

          {/* Video */}
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-black">
            <video
              className="w-full aspect-video object-cover"
              controls
              preload="metadata"
            >
              <source src="/IGA.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Línea inferior */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="h-px w-12 bg-dorado/40" />
          <p className="text-crema/50 text-sm tracking-widest uppercase">
            IGA Comunicación Total Consultores
          </p>
          <div className="h-px w-12 bg-dorado/40" />
        </motion.div>

      </div>
    </section>
  );
}
