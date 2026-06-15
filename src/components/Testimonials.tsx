"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import Placeholder from "./Placeholder";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="bg-vino py-24 md:py-32"
      aria-label="Testimonios"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-dorado text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Testimonios
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-crema leading-snug">
            Lo que dicen quienes han trabajado conmigo
          </h2>
          <p className="text-crema/40 text-xs mt-4 italic">
            Los testimonios a continuación son de ejemplo — reemplazar con testimonios reales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="rounded-2xl bg-vino-osc/60 border border-crema/10 p-8 flex flex-col gap-6 backdrop-blur-sm"
            >
              <Quote className="text-dorado/50" size={28} aria-hidden="true" />
              <blockquote className="font-playfair text-crema/85 text-base leading-relaxed italic flex-1">
                {t.quote}
              </blockquote>
              <footer className="flex items-center gap-4">
                {/*
                  Para reemplazar el avatar placeholder con imagen real:
                  1. Elimina el componente <Placeholder>
                  2. Reemplaza con:
                     <Image src="/avatars/nombre.jpg" alt={t.avatarAlt} width={48} height={48} className="rounded-full object-cover w-12 h-12 flex-shrink-0" />
                */}
                <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
                  <Placeholder description={t.avatarAlt} ratio="1/1" />
                </div>
                <div>
                  <p className="font-semibold text-crema text-sm">{t.name}</p>
                  <p className="text-crema/50 text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
