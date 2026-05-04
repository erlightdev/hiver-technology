import { Link } from "@tanstack/react-router";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
	const links = [
		{ to: "/", label: "Home" },
		{ to: "/about", label: "About" },
		{ to: "/docs", label: "Docs" },
	] as const;

	return (
		<nav className="w-full border-b bg-background">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
				<div className="flex items-center gap-6">
					<Link to="/" className="font-semibold text-lg">
						Hiver
					</Link>
					<div className="hidden items-center gap-4 text-sm md:flex">
						{links.map(({ to, label }) => (
							<Link key={to} to={to as any} className="hover:underline">
								{label}
							</Link>
						))}
					</div>
				</div>
				<div className="flex items-center gap-3">
					<ModeToggle />
					<Link
						to={"/login" as any}
						className="text-primary text-sm hover:underline"
					>
						Sign in
					</Link>
				</div>
			</div>
		</nav>
	);
}
