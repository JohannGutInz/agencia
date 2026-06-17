"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { timelineItems } from "@/data/content";

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="trayectoria"
      className="bg-vino-osc py-24 md:py-32"
      aria-label="Trayectoria profesional"
    >
      <div className="mx-auto max-w-5xl px-6" ref={ref}>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px w-16 bg-dorado/50 mb-6" aria-hidden="true" />
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-crema leading-snug">
            Hitos que marcan una carrera
          </h2>
        </motion.div>

        <ol className="relative" aria-label="Línea de tiempo de logros">
          {/* Línea vertical */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, #C9A24B, transparent)" }}
            aria-hidden="true"
          />

          {timelineItems.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative flex md:items-center mb-12 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Punto */}
                <div
                  className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full border-2 border-dorado bg-vino-osc mt-1.5 md:mt-0 flex-shrink-0"
                  aria-hidden="true"
                />

                {/* Contenido */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <span className="text-dorado text-xs font-semibold uppercase tracking-widest block mb-1">
                    {item.period}
                  </span>
                  <h3 className="font-playfair text-lg font-bold text-crema mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-crema/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
