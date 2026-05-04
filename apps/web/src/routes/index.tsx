import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

const TITLE_TEXT = "Hiver Technology";

function HomeComponent() {
	return (
		<div className="container mx-auto max-w-3xl px-4 py-2">
			<pre className="overflow-x-auto font-mono text-sm">{TITLE_TEXT}</pre>
			<h1 className="mt-4 font-bold text-4xl">Welcome to Hiver Technology</h1>
		</div>
	);
}
