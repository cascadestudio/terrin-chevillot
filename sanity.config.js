"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./src/sanity/env";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { schema } from "./src/sanity/schemaTypes";
import { ProjectsIcon } from "@sanity/icons";
import { frFRLocale } from "@sanity/locale-fr-fr";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title("Terrin & Chevillot")
          .items([
            orderableDocumentListDeskItem({
              type: "project",
              title: "Projets",
              icon: ProjectsIcon,
              S,
              context,
            }),
          ]);
      },
    }),
    frFRLocale(),
  ],
});
