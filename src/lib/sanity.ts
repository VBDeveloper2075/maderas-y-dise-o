/**
 * Sanity.io vía API HTTP (sin next-sanity) — compatible con Next.js 16 y Netlify.
 *
 * Variables en Netlify: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET
 */

export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; height: number; width: number };
}

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  location?: string;
  mainImage: SanityImage;
  images?: SanityImage[];
  description?: string;
}

const GROQ = `*[_type == "project"] | order(order asc) { _id, title, slug, location, mainImage, images, description }`;

export async function fetchProjects(): Promise<Project[]> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

  if (!projectId || projectId === "your-project-id") {
    return [];
  }

  const url = `https://${projectId}.apicdn.sanity.io/v2024-01-01/data/query/${dataset}?query=${encodeURIComponent(GROQ)}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      return [];
    }

    const data = (await res.json()) as { result?: Project[] };
    return data.result ?? [];
  } catch {
    return [];
  }
}
