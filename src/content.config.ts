import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Un dossier par langue :
 *   src/content/projects/en/mon-projet.md
 *   src/content/projects/fr/mon-projet.md   (même nom de fichier !)
 */
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["ai", "web"]),
    tags: z.array(z.string()),
    year: z.number().optional(),
    link: z.string().url().optional(), // site en ligne
    repo: z.string().url().optional(), // dépôt GitHub
    order: z.number().default(99), // plus petit = affiché en premier
  }),
});

export const collections = { projects };
