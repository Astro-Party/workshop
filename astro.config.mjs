import { defineConfig } from "astro/config";
import db from "@astrojs/db";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	output: "hybrid",
	integrations: [db(), react()],
	experimental: {
		serverIslands: true,
	},
});
