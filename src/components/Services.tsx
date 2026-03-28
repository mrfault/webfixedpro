"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Palette,
  Code,
  ShoppingCart,
  TrendingUp,
  Layers,
  Headphones,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  palette: Palette,
  code: Code,
  "shopping-cart": ShoppingCart,
  "trending-up": TrendingUp,
  layers: Layers,
  headphones: Headphones,
};

type ServiceData = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const fallbackServices = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Beautiful, conversion-focused designs tailored to your brand and audience.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom-built websites using modern technologies for speed, security, and scalability.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Online stores that make buying effortless and drive revenue growth.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Performance",
    description:
      "Data-driven optimization to improve your search rankings and site speed.",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive, delightful digital experiences.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Dedicated support and maintenance to keep your website running flawlessly.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function Services({ data }: { data?: ServiceData[] | null }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const resolvedServices = data
    ? data.map((s) => ({
        icon: iconMap[s.icon] ?? Layers,
        title: s.title,
        description: s.description,
      }))
    : fallbackServices;

  return (
    <section
      id="services"
      className="bg-[#F8FAFC] py-24 lg:py-32"
    >
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
            Services
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-2xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Everything you need to launch and grow online.
          </h2>
          <p className="text-slate-500 text-base mt-4 max-w-xl">
            End-to-end web services designed to help your business thrive in the digital world.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {resolvedServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-blue-600" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mt-5">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed mt-3">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
