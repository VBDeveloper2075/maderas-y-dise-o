/**
 * URLs de imágenes de Sanity (solo @sanity/image-url, sin next-sanity).
 */

import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

const builder =
  projectId && projectId !== "your-project-id"
    ? imageUrlBuilder({ projectId, dataset })
    : null;

export function urlFor(source: SanityImageSource): ImageUrlBuilder | null {
  if (!builder) return null;
  return builder.image(source);
}
