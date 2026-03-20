/**
 * Sanity.io integration (opcional)
 *
 * Para habilitar:
 * 1. npm install next-sanity @sanity/image-url --legacy-peer-deps
 * 2. Crear .env.local con NEXT_PUBLIC_SANITY_PROJECT_ID y NEXT_PUBLIC_SANITY_DATASET
 *
 * Sin Sanity configurado, la página muestra proyectos de ejemplo.
 */

import type { Project } from "@/types/project";

export async function fetchProjects(): Promise<Project[]> {
  // Si next-sanity está instalado y configurado, intentar fetch
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  if (!projectId || projectId === "your-project-id") {
    return [];
  }

  try {
    const { createClient } = await import("next-sanity");
    const client = createClient({
      projectId,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
      apiVersion: "2024-01-01",
      useCdn: true,
    });
    const query = `*[_type == "project"] | order(order asc) { _id, title, slug, location, mainImage, images, description }`;
    return await client.fetch<Project[]>(query);
  } catch {
    return [];
  }
}
