"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare,
  Star,
  Handshake,
  GraduationCap,
  CalendarDays,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Star,
  Handshake,
  GraduationCap,
  CalendarDays,
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="servicios"
      className="bg-crema py-24 md:py-32"
      aria-label="Servicios"
    >
      <div className="mx-auto max-w-7xl px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-dorado text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Servicios
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-vino max-w-2xl mx-auto leading-snug">
            Soluciones integrales de comunicación y eventos
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? MessageSquare;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group rounded-2xl border border-vino/10 bg-white p-8 hover:border-dorado/40 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-vino/8 group-hover:bg-vino/12 transition-colors"
                  aria-hidden="true"
                >
                  <Icon
                    className="text-vino group-hover:text-dorado transition-colors"
                    size={26}
                  />
                </div>
                <h3 className="font-playfair text-xl font-bold text-vino mb-3">
                  {service.title}
                </h3>
                <p className="text-gris-txt/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
