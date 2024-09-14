import { defineCollection, z } from "astro:content";

export const collections = {
	holidays: defineCollection({
		type: "content",
		schema: z.object({
			title: z.string(),
			image: z.string().url(),
			date: z.date(),
			tags: z.array(z.string()),
		}),
	}),
};
