/** @type {import('tailwindcss').Config} */

// tailwind color generator: https://uicolors.app/create

export const darkMode = ["class"]
export const content = [
	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
]
export const theme = {
	colors: {
		"seed-tangerine": {
			50: "#fff7ec",
			100: "#ffedd3",
			200: "#ffd6a5",
			300: "#ffb96d",
			400: "#ff8f32",
			500: "#ff6f0a",
			600: "#ff5500",
			700: "#cc3b02",
			800: "#a12f0b",
			900: "#82290c",
			950: "#461104"
		},
		"seed-dark": {
			50: "#f4f4fb",
			100: "#e8e8f6",
			200: "#cccdeb",
			300: "#9fa4da",
			400: "#6c74c4",
			500: "#4952ae",
			600: "#373c92",
			700: "#2e3276",
			800: "#292c63",
			900: "#272953",
			950: "#06060d"
		},
		"seed-light": {
			50: "#fffbeb",
			100: "#fff6d7",
			200: "#ffe488",
			300: "#ffd04a",
			400: "#ffbb20",
			500: "#f99907",
			600: "#dd7202",
			700: "#b74f06",
			800: "#943c0c",
			900: "#7a310d",
			950: "#461802"
		}
	},
	fontFamily: {
		display: ["Inter Variable", "sans-serif"],
		body: ["Raleway Variable", "sans-serif"],
		symbol: ["Rammetto One", "system-ui"]
	},
	screens: {
		xs: "480px",
		// => @media (min-width: 480px) { ... }
		sm: "640px",
		// => @media (min-width: 640px) { ... }
		md: "768px",
		// => @media (min-width: 768px) { ... }
		lg: "1024px",
		// => @media (min-width: 1024px) { ... }
		xl: "1280px",
		// => @media (min-width: 1280px) { ... }
		xxl: "1536px"
		// => @media (min-width: 1536px) { ... }
	},
	container: {
		center: true,
		padding: "2rem",
		screens: {
			"2xl": "1400px"
		}
	},
	extend: {
		keyframes: {
			"accordion-down": {
				from: { height: "0" },
				to: {
					height: "var(--radix-accordion-content-height)"
				}
			},
			"accordion-up": {
				from: {
					height: "var(--radix-accordion-content-height)"
				},
				to: { height: "0" }
			}
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out"
		}
	}
}
export const plugins = [require("tailwindcss-animate")]
