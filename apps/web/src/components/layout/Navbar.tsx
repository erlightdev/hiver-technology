import {
	BarChart3,
	BriefcaseBusiness,
	Building2,
	ChevronDown,
	ChevronRight,
	Code2,
	Mail,
	Menu,
	Package,
	Search,
	Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";
import logoUrl from "../../public/Hiver-logo-web-dark.svg";
import { ModeToggle } from "../mode-toggle";

const buildServices = [
	{ label: "Web Applications", href: "/services/web-applications" },
	{ label: "Mobile Apps", href: "/services/mobile-apps" },
	{ label: "Responsive Websites", href: "/services/responsive-websites" },
	{ label: "CRM Applications", href: "/services/crm" },
	{ label: "UI/UX Design", href: "/services/ui-ux-design" },
];

const marketingServices = [
	{ label: "Digital Marketing", href: "/services/digital-marketing" },
	{ label: "Email Marketing", href: "/services/email-marketing" },
	{ label: "Social Media Marketing", href: "/services/social-media-marketing" },
	{ label: "Meta Ads Campaigns", href: "/services/meta-ads" },
	{ label: "Landing Page Funnels", href: "/services/landing-page-funnels" },
];

const seoServices = [
	{ label: "SEO Services", href: "/services/seo" },
	{ label: "WordPress SEO", href: "/services/seo/wordpress" },
	{ label: "Shopify SEO", href: "/services/seo/shopify" },
	{ label: "Ecommerce SEO", href: "/services/seo/ecommerce" },
	{ label: "Technical SEO", href: "/services/seo/technical" },
	{ label: "Local SEO", href: "/services/seo/local" },
	{ label: "SEO Audit", href: "/services/seo/audit" },
];

const automationServices = [
	{ label: "Marketing Automation", href: "/services/marketing-automation" },
	{ label: "Lead Nurturing Campaigns", href: "/services/lead-nurturing" },
	{ label: "Newsletter Campaigns", href: "/services/newsletter-campaigns" },
	{
		label: "Abandoned Cart Automation",
		href: "/services/abandoned-cart-automation",
	},
	{ label: "CRM Follow-up Automation", href: "/services/crm-automation" },
];

const products = [
	{ label: "School Management", href: "/products/school-management" },
	{ label: "Dental Management", href: "/products/dental-management" },
	{ label: "Clinic Management", href: "/products/clinic-management" },
	{ label: "HR Software", href: "/products/hr-software" },
	{ label: "Employee Management", href: "/products/employee-management" },
];

const industries = [
	{ label: "Education", href: "/industries/education" },
	{ label: "Health", href: "/industries/health" },
	{ label: "Travel", href: "/industries/travel" },
	{ label: "Banks & Finance", href: "/industries/finance" },
	{ label: "Ecommerce", href: "/industries/ecommerce" },
	{ label: "Manufacturing", href: "/industries/manufacturing" },
];

const useCases = [
	{ label: "Lead Generation", href: "/use-cases/lead-generation" },
	{ label: "Online Booking", href: "/use-cases/online-booking" },
	{ label: "Customer Retention", href: "/use-cases/customer-retention" },
	{ label: "Operations Automation", href: "/use-cases/operations-automation" },
	{ label: "Reporting Dashboards", href: "/use-cases/reporting-dashboards" },
];

const serviceGroups = [
	{
		title: "Build",
		description: "Custom software and user experience work.",
		href: "/services",
		icon: Code2,
		items: buildServices,
	},
	{
		title: "Marketing",
		description: "Campaigns, funnels, and paid growth systems.",
		href: "/services/digital-marketing",
		icon: BarChart3,
		items: marketingServices,
	},
	{
		title: "SEO",
		description: "Search visibility for websites and ecommerce.",
		href: "/services/seo",
		icon: Search,
		items: seoServices,
	},
	{
		title: "Automation",
		description: "Follow-up, lifecycle, and CRM workflows.",
		href: "/services/marketing-automation",
		icon: Workflow,
		items: automationServices,
	},
];

const solutionGroups = [
	{
		title: "Products",
		description: "Ready systems for operational teams.",
		href: "/products",
		icon: Package,
		items: products,
	},
	{
		title: "Industries",
		description: "Digital solutions for common business verticals.",
		href: "/industries",
		icon: Building2,
		items: industries,
	},
	{
		title: "Use Cases",
		description: "Popular outcomes we help teams deliver.",
		href: "/use-cases",
		icon: BriefcaseBusiness,
		items: useCases,
	},
];

const resourceLinks = [
	{ label: "Works", href: "/works" },
	{ label: "Insights", href: "/insights" },
	{ label: "About", href: "/about" },
];

type MenuGroup = {
	title: string;
	description: string;
	href: string;
	icon: typeof Code2;
	items: { label: string; href: string }[];
};

function MegaMenu({
	label,
	groups,
	feature,
}: {
	label: string;
	groups: MenuGroup[];
	feature: {
		title: string;
		description: string;
		href: string;
		action: string;
	};
}) {
	return (
		<div className="group relative">
			<button
				type="button"
				className="inline-flex items-center rounded-full px-3 py-1.5 font-medium text-[14px] text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
			>
				{label}
				<ChevronDown className="ml-1 size-3.5 opacity-60 transition-transform group-hover:rotate-180" />
			</button>

			<div className="invisible absolute top-full left-0 z-30 w-[min(92vw,980px)] pt-3 opacity-0 transition-all duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
				<div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl">
					<div className="grid lg:grid-cols-[1fr_15rem]">
						<div className="grid gap-2 p-3 md:grid-cols-2">
							{groups.map((group) => {
								const Icon = group.icon;

								return (
									<div key={group.title} className="rounded-2xl p-3">
										<a
											href={group.href}
											className="group/title mb-2 flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-neutral-100"
										>
											<span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-800">
												<Icon className="size-4" />
											</span>
											<span>
												<span className="flex items-center font-semibold text-neutral-950 text-sm">
													{group.title}
													<ChevronRight className="ml-1 size-3 opacity-45 transition-transform group-hover/title:translate-x-0.5" />
												</span>
												<span className="mt-1 block text-[12px] text-neutral-500 leading-relaxed">
													{group.description}
												</span>
											</span>
										</a>
										<div className="grid gap-0.5">
											{group.items.map((item) => (
												<a
													key={item.label}
													href={item.href}
													className="rounded-lg px-3 py-1.5 text-[13px] text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
												>
													{item.label}
												</a>
											))}
										</div>
									</div>
								);
							})}
						</div>

						<a
							href={feature.href}
							className="flex flex-col justify-between border-neutral-200 border-t bg-neutral-950 p-5 text-white transition-colors hover:bg-neutral-900 lg:border-t-0 lg:border-l"
						>
							<span>
								<span className="block font-semibold text-[15px]">
									{feature.title}
								</span>
								<span className="mt-2 block text-[13px] text-white/65 leading-relaxed">
									{feature.description}
								</span>
							</span>
							<span className="mt-8 inline-flex items-center font-medium text-[13px]">
								{feature.action}
								<ChevronRight className="ml-1.5 size-3.5 opacity-70" />
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

function MobileSection({
	title,
	groups,
}: {
	title: string;
	groups: MenuGroup[];
}) {
	return (
		<details className="group/mobile">
			<summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2 font-medium text-[14px] text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-950 [&::-webkit-details-marker]:hidden">
				{title}
				<ChevronDown className="size-3.5 opacity-60 transition-transform group-open/mobile:rotate-180" />
			</summary>
			<div className="grid gap-2 pb-2 pl-3">
				{groups.map((group) => (
					<div key={group.title}>
						<a
							href={group.href}
							className="block rounded-lg px-3 py-1.5 font-semibold text-[13px] text-neutral-800 transition-colors hover:bg-neutral-100"
						>
							{group.title}
						</a>
						<div className="grid gap-0.5 pl-2">
							{group.items.slice(0, 5).map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="rounded-lg px-3 py-1.5 text-[13px] text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
								>
									{item.label}
								</a>
							))}
						</div>
					</div>
				))}
			</div>
		</details>
	);
}

function MobileMenu() {
	return (
		<details className="group/menu relative lg:hidden">
			<summary className="flex size-9 cursor-pointer list-none items-center justify-center rounded-full bg-neutral-100 text-neutral-950 transition-colors hover:bg-neutral-200 [&::-webkit-details-marker]:hidden">
				<Menu className="size-4" />
			</summary>
			<div className="absolute right-0 z-30 mt-3 max-h-[calc(100vh-6rem)] w-[min(86vw,24rem)] overflow-y-auto rounded-2xl border border-neutral-200 bg-white p-2 shadow-xl">
				<MobileSection title="Services" groups={serviceGroups} />
				<MobileSection title="Solutions" groups={solutionGroups} />
				<div className="my-1 border-neutral-200 border-t" />
				{resourceLinks.map((item) => (
					<a
						key={item.label}
						href={item.href}
						className="block rounded-lg px-3 py-2 font-medium text-[14px] text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
					>
						{item.label}
					</a>
				))}
				<div className="mt-2 flex items-center justify-between gap-3 border-neutral-200 border-t pt-3">
					<ModeToggle />
					<a
						href="/contact"
						className="flex flex-1 items-center justify-center rounded-full bg-neutral-950 px-4 py-2 font-medium text-[13px] text-white transition-colors duration-200 hover:bg-neutral-800"
					>
						<Mail className="mr-2 size-3.5 opacity-70" />
						Contact
					</a>
				</div>
			</div>
		</details>
	);
}

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		let frame = 0;

		const handleScroll = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				setIsScrolled(window.scrollY > 24);
			});
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className="sticky top-0 z-50 bg-neutral-100/85 px-4 pt-3 pb-2 backdrop-blur">
			<nav
				className={`relative mx-auto w-full max-w-7xl origin-top rounded-full border border-neutral-200 bg-white/95 text-neutral-700 shadow-sm transition-all duration-300 ease-out will-change-transform ${
					isScrolled ? "scale-90 shadow-md" : "scale-100"
				}`}
			>
				<div
					className={`flex items-center justify-between gap-4 px-4 transition-all duration-300 ease-out sm:px-6 ${
						isScrolled ? "py-1.5" : "py-2.5"
					}`}
				>
					<a href="/" className="flex shrink-0 items-center">
						<img
							src={logoUrl}
							alt="Hiver Technology"
							className={`w-auto object-contain transition-all duration-300 ease-out ${
								isScrolled ? "h-8" : "h-9"
							}`}
						/>
					</a>

					<div className="hidden flex-1 items-center gap-0.5 pl-6 lg:flex">
						<MegaMenu
							label="Services"
							groups={serviceGroups}
							feature={{
								title: "Plan a service package",
								description:
									"Combine software, SEO, marketing, and automation into one practical growth roadmap.",
								href: "/contact",
								action: "Talk to us",
							}}
						/>
						<MegaMenu
							label="Solutions"
							groups={solutionGroups}
							feature={{
								title: "Need something specific?",
								description:
									"We can tailor systems for education, health, ecommerce, operations, and service teams.",
								href: "/works",
								action: "View work",
							}}
						/>
						{resourceLinks.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className="rounded-full px-3 py-1.5 font-medium text-[14px] text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
							>
								{item.label}
							</a>
						))}
					</div>

					<div className="hidden shrink-0 items-center gap-2 lg:flex">
						<ModeToggle />
						<a
							href="/contact"
							className="inline-flex items-center rounded-full bg-neutral-950 px-4 py-2 font-medium text-[13px] text-white transition-colors duration-200 hover:bg-neutral-800"
						>
							<Mail className="mr-2 size-3.5 opacity-70" />
							Contact
						</a>
					</div>

					<MobileMenu />
				</div>
			</nav>
		</header>
	);
}
