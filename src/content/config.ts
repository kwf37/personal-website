import { z, defineCollection } from "astro:content";

const softwareCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      company: z.string(),
      startDate: z.date(),
      endDate: z.date().optional(),
      description: z.string(),
      logo: image(),
      logoAlt: z.string(),
      tags: z.array(z.string()),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  software: softwareCollection,
};
