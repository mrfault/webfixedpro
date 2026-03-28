"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

type TestimonialData = {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
};

const fallbackTestimonials = [
  {
    id: 1,
    quote:
      "WebFixedPro transformed our online presence completely. Our new website loads in under 2 seconds and our conversion rate doubled within the first month.",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "Greenleaf Co.",
    initials: "SM",
  },
  {
    id: 2,
    quote:
      "The team delivered a stunning e-commerce platform ahead of schedule. Their attention to detail and communication throughout the process was exceptional.",
    name: "James Parker",
    role: "Founder",
    company: "UrbanEdge",
    initials: "JP",
  },
  {
    id: 3,
    quote:
      "Working with WebFixedPro was the best investment we made for our startup. They understood our vision perfectly and built exactly what we needed.",
    name: "Emily Chen",
    role: "CTO",
    company: "DataPulse",
    initials: "EC",
  },
];

// Alias used in the render — will be replaced by API data when available
type ActiveTestimonial = typeof fallbackTestimonials[0];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: Math.min(count, 5) }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="text-amber-400"
          fill="#FBBF24"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export default function Testimonials({ data }: { data?: TestimonialData[] | null }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const activeTestimonials: ActiveTestimonial[] = data
    ? data.map((t) => ({
        id: t.id,
        quote: t.quote,
        name: t.name,
        role: t.role,
        company: t.company,
        initials: t.initials,
      }))
    : fallbackTestimonials;

  return (
    <section id="testimonials" className="bg-[#F8FAFC] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Loved by businesses nationwide.
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {activeTestimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm flex flex-col"
            >
              <StarRating count={(data?.find((d) => d.id === t.id)?.rating) ?? 5} />

              <blockquote className="text-slate-700 text-base leading-relaxed mt-4 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-100">
                <div
                  className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-sm font-semibold flex-shrink-0 select-none"
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
