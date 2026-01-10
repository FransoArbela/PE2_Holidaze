import { Link } from "react-router-dom"

const Login = () => {
	return (
		<div className=" h-full flex items-center justify-center p-4">
			<div className="flex flex-col gap-6 items-center justify-center">
				<h3>Login Page</h3>
				<div className=" flex flex-col gap-4 max-w-lg min-w-md p-4">
					<div className="flex flex-col w-full">
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							className=" bg-content-bg text-fg p-2 w-full"
							placeholder="Enter your email"
							id="email"
							name="email"
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							className=" bg-content-bg text-fg p-2 w-full"
							placeholder="Enter your password"
							id="password"
							name="password"
						/>
					</div>
					<div className="flex gap-1 items-center">
						<p className="text-sm">Don't have an account?</p>
						<Link to="/register" className="font-bold text-sm hover:underline">
							Register here
						</Link>
					</div>
				</div>
				<button
					type="button"
					className="bg-btn w-full hover:bg-btn-bg-hover hover:text-btn-text-hover cursor-pointer text-btn-text p-2 mt-4"
				>
					Login
				</button>
			</div>
		</div>
	)
}

export default Login
