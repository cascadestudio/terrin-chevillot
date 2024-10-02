import { ProjectsIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export const projectType = defineType({
  name: "project",
  title: "Projets",
  description:
    "L'ordre des projets est modifiable et correspond à celui du site. Pour une expérience utilisateur optimale, seuls les 4 premiers projets seront affichés.",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .max(250)
          .warning(
            "La description dépasse 250 caractères et risque d'impacter négativement l'expérience utilisateur."
          ),
    }),
    orderRankField({ type: "project", newItemPosition: "before" }),
  ],
  orderings: [orderRankOrdering],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
