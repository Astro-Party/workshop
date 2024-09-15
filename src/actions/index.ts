import { defineAction } from "astro:actions";
import { db, eq, Idea } from "astro:db";
import { z } from "astro:schema";

export const server = {
	ideas: {
		save: defineAction({
			accept: "form",
			input: z.object({
				text: z.string(),
				good: z.coerce.boolean(),
			}),
			handler: async (input) => {
				await db.insert(Idea).values(input);

				return `Success! New ${input.good ? "good" : "bad"} idea added.`;
			},
		}),
		delete: defineAction({
			accept: "form",
			input: z.object({
				id: z.number(),
			}),
			handler: async (input) => {
				await db.delete(Idea).where(eq(Idea.id, input.id));
			},
		}),
	},
};
