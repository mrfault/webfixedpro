"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Category = "All" | "Web Design" | "E-Commerce" | "Landing Pages";

const categories: Category[] = ["All", "Web Design", "E-Commerce", "Landing Pages"];

type ProjectData = {
  id: number;
  title: string;
  category: string;
  description: string;
  image_url: string;
  project_url: string;
  tags: string[];
};

const fallbackProjects = [
  {
    id: 1,
    title: "Meridian Financial",
    category: "Web Design" as Category,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Atlas E-Commerce",
    category: "E-Commerce" as Category,
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Vertex SaaS",
    category: "Landing Pages" as Category,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Bloom Studio",
    category: "Web Design" as Category,
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop&q=80",
  },
  {
    id: 5,
    title: "NovaTech Store",
    category: "E-Commerce" as Category,
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=500&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Skyline Launch",
    category: "Landing Pages" as Category,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&q=80",
  },
];

type ResolvedProject = {
  id: number;
  title: string;
  category: Category;
  image: string;
  projectUrl: string;
};

function ProjectCard({ project }: { project: ResolvedProject }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className="group rounded-xl overflow-hidden border border-slate-100 bg-white hover:shadow-lg transition-shadow duration-200"
    >
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
        />
      </div>

      {/* Card body */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
            <p className="text-sm text-slate-500 mt-1">{project.category}</p>
          </div>
          <a
            href={project.projectUrl}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-150 flex-shrink-0 mt-0.5"
            aria-label={`View project: ${project.title}`}
          >
            View Project &rarr;
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio({ data }: { data?: ProjectData[] | null }) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const resolvedProjects: ResolvedProject[] = data
    ? data.map((p) => ({
        id: p.id,
        title: p.title,
        category: (categories.includes(p.category as Category) ? p.category : "Web Design") as Category,
        image: p.image_url,
        projectUrl: p.project_url || "#",
      }))
    : fallbackProjects.map((p) => ({ ...p, projectUrl: "#" }));

  const filtered =
    activeCategory === "All"
      ? resolvedProjects
      : resolvedProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4">
            Work
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Projects we&apos;re proud of.
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="flex flex-wrap gap-6 mb-12"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={isActive}
                className={`text-sm font-medium pb-1 transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? "text-slate-900 border-b-2 border-slate-900"
                    : "text-slate-400 hover:text-slate-600 border-b-2 border-transparent"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
