import { defineCollection, z } from "astro:content";

export const collections = {
	holidays: defineCollection({
		type: "content",
		schema: z.object({
			title: z.string(),
			image: z.object({
				src: z.string().url(),
				alt: z.string(),
				credit: z.string(),
			}),
			date: z.date(),
			tags: z.array(z.string()),
		}),
	}),
};
