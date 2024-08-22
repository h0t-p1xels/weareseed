// Based on: https://ui.shadcn.com/docs/dark-mode/astro
import * as React from "react"
import { VscColorMode } from "react-icons/vsc"
import { Button } from "@/components/fragments/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/modules/dropdown-menu"

export function ModeToggle() {
	const [theme, setThemeState] = React.useState<
		"theme-light" | "dark" | "system"
	>("theme-light")

	React.useEffect(() => {
		const isDarkMode =
			document.documentElement.classList.contains("dark")
		setThemeState(isDarkMode ? "dark" : "theme-light")
	}, [])

	React.useEffect(() => {
		const isDark =
			theme === "dark" ||
			(theme === "system" &&
				window.matchMedia("(prefers-color-scheme: dark)")
					.matches)
		document.documentElement.classList[
			isDark ? "add" : "remove"
		]("dark")
	}, [theme])

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="hover:bg-seed-light-100 focus:bg-seed-light-100 data-[state=open]:bg-seed-light-100 dark:hover:bg-seed-dark-900 dark:focus:bg-seed-dark-900 dark:data-[state=open]:bg-seed-dark-900 cursor-pointer"
				>
					<VscColorMode className="h-[1.5rem] w-[1.5rem] scale-100 transition-all" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					onClick={() => setThemeState("system")}
					className="hover:bg-seed-tangerine-600 focus:bg-seed-tangerine-600 hover:text-seed-light-50 focus:text-seed-light-50 dark:hover:bg-seed-tangerine-600 dark:focus:bg-seed-tangerine-600 dark:hover:text-seed-light-50 dark:focus:text-seed-light-50"
				>
					Auto
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setThemeState("theme-light")}
					className="hover:bg-seed-tangerine-400 focus:bg-seed-tangerine-400 hover:text-seed-dark-950 focus:text-seed-dark-950 dark:hover:bg-seed-tangerine-400 dark:focus:bg-seed-tangerine-400 dark:hover:text-seed-dark-950 dark:focus:text-seed-dark-950"
				>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setThemeState("dark")}
					className="hover:bg-seed-tangerine-400 focus:bg-seed-tangerine-400 hover:text-seed-dark-950 focus:text-seed-dark-950 dark:hover:bg-seed-tangerine-400 dark:focus:bg-seed-tangerine-400 dark:hover:text-seed-dark-950 dark:focus:text-seed-dark-950"
				>
					Dark
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
