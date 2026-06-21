"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/sanity";
import { urlFor } from "@/lib/image";

interface ProjectGridProps {
  projects: Project[];
}

function getImageUrl(image: Project["mainImage"], width: number, height: number): string | null {
  const ref = image?.asset?._ref;
  if (!ref) return null;
  return urlFor(image)?.width(width).height(height).url() ?? null;
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  if (projects.length === 0) return null;

  return (
    <>
      <section id="proyectos" className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-light text-[#333333] tracking-[0.06em] text-center mb-16 uppercase">
            Nuestro Destacado
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {projects.map((project) => {
              const imageUrl = getImageUrl(project.mainImage, 800, 600);
              const label = project.location
                ? `${project.title} - ${project.location}`
                : project.title;

              return (
                <button
                  key={project._id}
                  type="button"
                  className="group relative aspect-[4/3] overflow-hidden bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#4a3728]/25 focus:ring-offset-2"
                  onClick={() => setLightboxProject(project)}
                >
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-neutral-300" />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                    <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-white font-medium text-sm tracking-wide block">
                        {label}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

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
              {getImageUrl(lightboxProject.mainImage, 1400, 900) ? (
                <Image
                  src={getImageUrl(lightboxProject.mainImage, 1400, 900)!}
                  alt={lightboxProject.title}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              ) : (
                <div className="absolute inset-0 bg-neutral-700" />
              )}
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
