import { defineCollection, z } from "astro:content";

// const ProjectsCollection = defineCollection({
//   type: "content",
//   schema: z.object({
//     name: z.string(),
//     service: z.string(),
//     imageUrl: z.string(),
//   }),
// });

const ServicesCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    heading: z.string(),
    heroImage: z.object({
      mobile: z.string(),
      desktop: z.string(),
    }),
    asideImage: z.string(),
  }),
});

export const collections = {
  // projects: ProjectsCollection,
  services: ServicesCollection,
};
