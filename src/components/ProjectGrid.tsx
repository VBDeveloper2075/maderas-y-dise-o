"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/types/project";

interface ProjectGridProps {
  projects: Project[];
}

// Helper: usa Sanity si hay asset válido, sino placeholder
function getImageUrl(project: Project, index: number): string {
  const ref = project.mainImage?.asset?._ref;
  if (ref && ref.length > 10) {
    try {
      const { urlFor } = require("@/lib/image");
      const url = urlFor(project.mainImage).width(800).height(600).url();
      if (url) return url;
    } catch {
      // Fallback si Sanity no está configurado
    }
  }
  return PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length];
}

// Proyectos de ejemplo cuando Sanity no está configurado
const FALLBACK_PROJECTS: Project[] = [
  {
    _id: "1",
    title: "Vestidor Inteligente",
    slug: { current: "vestidor-inteligente" },
    location: "Caseros",
    mainImage: {
      _type: "image",
      asset: { _ref: "", _type: "reference" },
    },
    description: "Vestidor con soluciones de almacenamiento optimizadas",
  },
  {
    _id: "2",
    title: "Cocina Integral",
    slug: { current: "cocina-integral" },
    location: "Tres de Febrero",
    mainImage: {
      _type: "image",
      asset: { _ref: "", _type: "reference" },
    },
    description: "Cocina a medida con isla central",
  },
  {
    _id: "3",
    title: "Escritorio Flotante",
    slug: { current: "escritorio-flotante" },
    location: "Caseros",
    mainImage: {
      _type: "image",
      asset: { _ref: "", _type: "reference" },
    },
    description: "Escritorio para espacio reducido",
  },
  {
    _id: "4",
    title: "Placard Modular",
    slug: { current: "placard-modular" },
    location: "Tres de Febrero",
    mainImage: {
      _type: "image",
      asset: { _ref: "", _type: "reference" },
    },
    description: "Placard con interiores personalizados",
  },
  {
    _id: "5",
    title: "Cama Rebatible",
    slug: { current: "cama-rebatible" },
    location: "Caseros",
    mainImage: {
      _type: "image",
      asset: { _ref: "", _type: "reference" },
    },
    description: "Solución para monoambiente",
  },
  {
    _id: "6",
    title: "Mesa de Comedor",
    slug: { current: "mesa-comedor" },
    location: "Tres de Febrero",
    mainImage: {
      _type: "image",
      asset: { _ref: "", _type: "reference" },
    },
    description: "Mesa de roble macizo",
  },
];

const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800",
  "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800",
  "https://images.unsplash.com/photo-1595428774223-ef52645120ce?q=80&w=800",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800",
  "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800",
];

function getProjectImage(project: Project, index: number): string {
  return getImageUrl(project, index);
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);
  const displayProjects = projects.length > 0 ? projects : FALLBACK_PROJECTS;

  return (
    <>
      <section id="proyectos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-light text-neutral-900 tracking-tight text-center mb-16">
            Proyectos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {displayProjects.map((project, index) => {
              const projectTitle = project.location
                ? `${project.title} - ${project.location}`
                : project.title;
              const imageUrl = getProjectImage(project, index);

              return (
                <button
                  key={project._id}
                  type="button"
                  className="group relative aspect-[4/3] overflow-hidden bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-900/20 focus:ring-offset-2"
                  onClick={() => setLightboxProject(project)}
                >
                  <Image
                    src={imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                    <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-white font-medium text-sm tracking-wide block">
                        {projectTitle}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxProject(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && setLightboxProject(null)}
          aria-label="Cerrar lightbox"
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2"
            onClick={() => setLightboxProject(null)}
            aria-label="Cerrar"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-neutral-800">
              <Image
                src={getProjectImage(lightboxProject, displayProjects.indexOf(lightboxProject))}
                alt={lightboxProject.title}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <p className="text-white text-center mt-4 font-medium">
              {lightboxProject.location
                ? `${lightboxProject.title} - ${lightboxProject.location}`
                : lightboxProject.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
