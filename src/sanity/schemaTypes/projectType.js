import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projet",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
