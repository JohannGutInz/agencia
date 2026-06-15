"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BadgeCheck, Trophy, Globe, type LucideIcon } from "lucide-react";
import { recognitions } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  Award,
  BadgeCheck,
  Trophy,
  Globe,
};

export default function Recognition() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="bg-crema py-24 md:py-32"
      aria-label="Reconocimientos y membresías"
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
            Reconocimientos
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-vino leading-snug">
            Membresías, certificaciones y premios
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recognitions.map((r, i) => {
            const Icon = iconMap[r.icon] ?? Award;
            return (
              <motion.article
                key={r.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl border border-vino/10 bg-white hover:border-dorado/30 hover:shadow-md transition-all duration-300 group"
              >
                <div
                  className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-vino/8 group-hover:bg-dorado/10 transition-colors"
                  aria-hidden="true"
                >
                  <Icon className="text-vino group-hover:text-dorado transition-colors" size={28} />
                </div>
                <h3 className="font-playfair text-lg font-bold text-vino mb-3 leading-snug">
                  {r.title}
                </h3>
                <p className="text-gris-txt/60 text-sm leading-relaxed">
                  {r.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
