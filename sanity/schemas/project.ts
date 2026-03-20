import { defineField, defineType } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Proyecto",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título del Proyecto",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Ubicación (ej: Caseros, Tres de Febrero)",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      title: "Imagen Principal",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Galería de Imágenes",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
    }),
    defineField({
      name: "order",
      title: "Orden de visualización",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Orden de visualización",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      location: "location",
      media: "mainImage",
    },
    prepare({ title, location, media }) {
      return {
        title: title || "Sin título",
        subtitle: location || "",
        media,
      };
    },
  },
});
