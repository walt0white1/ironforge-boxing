"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const STATS = [
  { value: 500, suffix: "+", label: "Membres actifs" },
  { value: 15, suffix: "", label: "Titres remportés" },
  { value: 4, suffix: "", label: "Disciplines" },
  { value: 8, suffix: "+", label: "Années d'expérience" },
  { value: 30, suffix: "+", label: "Cours par semaine" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = Math.ceil(target / (duration / 16));
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            setCount(current);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl font-bold text-white">
      {count}
      <span className="text-red">{suffix}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Top/bottom lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-xs md:text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
