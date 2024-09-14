import { db, Idea } from "astro:db";

export default async function () {
	await db.insert(Idea).values([
		{ id: 1, text: "Set up a dinner for friends", good: true },
		{ id: 2, text: "Eat an entire block of cheese", good: false },
	]);
}
