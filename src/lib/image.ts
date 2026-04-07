/**
 * URLs de imágenes de Sanity (solo @sanity/image-url, sin next-sanity).
 */

import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

const builder =
  projectId && projectId !== "your-project-id"
    ? imageUrlBuilder({ projectId, dataset })
    : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) {
    return {
      width: () => ({
        height: () => ({
          url: () => "",
        }),
      }),
    };
  }
  return builder.image(source);
}
