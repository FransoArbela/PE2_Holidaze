import { useEffect, useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import { Link } from "react-router-dom"

export const Header = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)
	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark")
		} else {
			document.documentElement.classList.remove("dark")
		}
	}, [isDarkMode])

	return (
		<div className="flex flex-col justify-between mt-6 items-center">
			<h2 className="text-3xl font-bold color-text">Holidaze</h2>
			<nav className="color-text flex items-center gap-8 justify-center">
				<div className="flex space-x-4">
					<Link className="nav-link" to="/">
						Home
					</Link>
					<Link className="nav-link" to="/profile">
						Profile
					</Link>
					<Link className="nav-link" to="/venues">
						Venues
					</Link>
					<Link className="nav-link" to="/about">
						About
					</Link>
					<Link className="nav-link" to="/contact">
						Contact
					</Link>
					<Link className="nav-link" to="/login">
						Login
					</Link>
				</div>
				<div className="flex">
					{/* Dark mode toggle button */}
					<button
						type="button"
						className="cursor-pointer hover:transform hover:scale-130 transition-transform"
						onClick={() => setIsDarkMode(!isDarkMode)}
					>
						{isDarkMode ? <FaMoon /> : <FaSun />}
					</button>
				</div>
			</nav>
		</div>
	)
}
