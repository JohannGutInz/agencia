"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats, type Stat } from "@/data/content";

function Counter({ stat, active }: { stat: Stat; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const steps = 40;
    const increment = stat.value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1500 / steps);
    return () => clearInterval(timer);
  }, [active, stat.value]);

  return (
    <div className="text-center">
      <p className="font-playfair text-5xl md:text-6xl font-bold text-crema mb-2 leading-none">
        {count}
        <span className="text-dorado">{stat.suffix}</span>
      </p>
      <p className="text-crema/55 text-xs uppercase tracking-widest font-medium mt-3">
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="bg-vino py-20 md:py-28"
      aria-label="Trayectoria en cifras"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          className="text-center text-dorado text-xs font-bold uppercase tracking-[0.25em] mb-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Trayectoria en cifras
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <Counter stat={stat} active={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
