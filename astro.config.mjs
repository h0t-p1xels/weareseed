import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import webmanifest from "astro-webmanifest"

// docs: https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: true,
			nesting: true
		}),
		react(),
		webmanifest({
			// docs: https://github.com/alextim/astro-lib/tree/main/packages/astro-webmanifest#readme
			name: "SEED Studio", // required
			icon: "./public/favicon.svg", // Favicon file name using automatic icon generation mode
			short_name: "SEED",
			description:
				"SEED Studio - Creating value through innovative digital experiences.",
			start_url: "/", // index
			theme_color: "#fefefe", // seed-light-50
			background_color: "#0f172a", // seed-dark-950
			display: "standalone"
		})
	]
})
