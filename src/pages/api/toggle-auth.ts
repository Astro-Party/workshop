import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = ({ cookies, redirect }) => {
	const loggedIn = cookies.get("logged-in")?.boolean();
	const newState = !loggedIn;

	cookies.set("logged-in", newState.toString(), { path: "/" });

	return redirect("/ideas", 302);
};
