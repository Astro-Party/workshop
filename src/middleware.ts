import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
	const loggedIn = context.cookies.get("logged-in")?.boolean();

	if (!loggedIn && context.url.pathname === "/ideas") {
		return context.redirect("/login");
	}

	if (loggedIn && context.url.pathname === "/login") {
		return context.redirect("/ideas");
	}

	return next();
});
