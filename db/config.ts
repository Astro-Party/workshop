import { column, defineDb, defineTable } from "astro:db";

// https://astro.build/db/config
export default defineDb({
	tables: {
		Idea: defineTable({
			columns: {
				id: column.number({ primaryKey: true }),
				text: column.text(),
				good: column.boolean(),
			},
		}),
	},
});
