"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
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
          <p className="text-dorado text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Testimonios
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-crema leading-snug">
            Lo que dicen quienes han trabajado conmigo
          </h2>
          <p className="text-crema/35 text-xs mt-4 italic">
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
              className="rounded-2xl bg-vino-osc/70 border border-crema/10 p-8 flex flex-col gap-6 backdrop-blur-sm"
            >
              <Quote className="text-dorado/60" size={26} aria-hidden="true" />
              <blockquote className="font-playfair text-crema/85 text-base leading-relaxed italic flex-1">
                {t.quote}
              </blockquote>
              <footer className="flex items-center gap-4 pt-2 border-t border-crema/10">
                {/* Avatar placeholder — reemplazar con <Image> real */}
                <div
                  className="w-11 h-11 flex-shrink-0 rounded-full bg-vino/50 border border-dorado/20 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="text-dorado/60 text-xs font-bold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-crema text-sm leading-tight">{t.name}</p>
                  <p className="text-crema/50 text-xs mt-0.5">
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
