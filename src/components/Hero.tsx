"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const clientLogos = ["Vertex", "Meridian", "Atlas", "NovaTech", "Skyline"];

type HeroData = {
  badge_text: string;
  heading_line1: string;
  heading_line2: string;
  subtitle: string;
  cta_primary_text: string;
  cta_secondary_text: string;
  trust_text: string;
} | null;

export default function Hero({ data }: { data?: HeroData }) {
  const prefersReducedMotion = useReducedMotion();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6 max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 text-sm font-semibold text-slate-600 bg-white">
              {data?.badge_text || "Web Agency"}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants}>
            <h1
              className="font-extrabold text-slate-900 leading-tight tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
              }}
            >
              {data?.heading_line1 || "We build websites"}
              <br />
              <span className="text-blue-600">{data?.heading_line2 || "that drive results."}</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl"
          >
            {data?.subtitle || "WebFixedPro is a design and development studio specializing in high-performance websites, web apps, and digital experiences for ambitious businesses."}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-slate-900 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-slate-800 transition-colors duration-200 cursor-pointer"
            >
              {data?.cta_primary_text || "Start a Project"}
            </button>
            <button
              onClick={() => scrollTo("#portfolio")}
              className="bg-transparent border border-slate-300 text-slate-700 font-semibold text-base px-8 py-4 rounded-full hover:border-slate-400 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
            >
              {data?.cta_secondary_text || "See Our Work"}
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4 mt-2"
          >
            <p className="text-sm text-slate-400 font-medium">
              {data?.trust_text || "Trusted by 200+ businesses across the US"}
            </p>
            <div className="flex items-center gap-6 flex-wrap justify-center">
              {clientLogos.map((name) => (
                <span
                  key={name}
                  className="text-sm font-semibold text-slate-300 tracking-wide uppercase select-none"
                  aria-hidden="true"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        onClick={() => scrollTo("#services")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors duration-200 cursor-pointer"
        aria-label="Scroll to services"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{
            duration: 1.6,
            repeat: prefersReducedMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={22} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
}
