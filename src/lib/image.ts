/**
 * Sanity image URL builder - Requiere @sanity/image-url instalado
 * Sin Sanity, ProjectGrid usa imágenes placeholder
 */

export function urlFor(source: { asset?: { _ref?: string }; _type?: string }) {
  try {
    const imageUrlBuilder = require("@sanity/image-url").default;
    const { createClient } = require("next-sanity");
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
    const client = createClient({ projectId, dataset });
    const builder = imageUrlBuilder(client);
    return builder.image(source);
  } catch {
    return {
      width: () => ({ height: () => ({ url: () => "" }) }),
      url: () => "",
    };
  }
}
