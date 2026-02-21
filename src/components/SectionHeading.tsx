"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
      className={`mb-16 ${center ? "text-center" : ""}`}
    >
      {badge && (
        <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase bg-red/10 text-red border border-red/20 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
        {title}{" "}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-1 w-20 bg-gradient-red rounded-full ${center ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
