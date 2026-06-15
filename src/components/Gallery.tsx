"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Placeholder from "./Placeholder";
import { galleryItems, galleryCategories, type GalleryItem } from "@/data/content";

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<string>("todos");

  const filtered =
    active === "todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <section id="galeria" className="bg-crema py-24 md:py-32" aria-label="Galería de eventos">
      <div className="mx-auto max-w-7xl px-6" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-dorado text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Galería
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-vino leading-snug">
            Proyectos que hablan por sí mismos
          </h2>
        </motion.div>

        {/* Filtros de categoría */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          role="group"
          aria-label="Filtrar por categoría"
        >
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              aria-pressed={active === cat.id}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === cat.id
                  ? "bg-vino text-crema shadow-md"
                  : "border border-vino/20 text-vino/70 hover:border-vino/50 hover:text-vino"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item: GalleryItem, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="overflow-hidden rounded-xl"
              >
                {/*
                  Para reemplazar un placeholder con imagen real:
                  1. Elimina el componente <Placeholder>
                  2. Reemplaza con:
                     <Image src="/tu-imagen.jpg" alt={item.alt} width={800} height={600} className="w-full h-auto object-cover" />
                  3. El layout del grid no cambia.
                */}
                <Placeholder description={item.description} ratio={item.ratio} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-vino/40 mt-12 text-sm">
            No hay elementos en esta categoría todavía.
          </p>
        )}
      </div>
    </section>
  );
}
