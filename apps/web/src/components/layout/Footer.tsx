import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

const services = [
	{ label: "Web Applications", href: "/services/web-applications" },
	{ label: "Mobile Apps (iOS & Android)", href: "/services/mobile-apps" },
	{ label: "Responsive Websites", href: "/services/responsive-websites" },
	{ label: "CRM Web Applications", href: "/services/crm" },
	{ label: "UI/UX Design", href: "/services/ui-ux-design" },
	{ label: "Digital Marketing", href: "/services/digital-marketing" },
	{ label: "SEO Services", href: "/services/seo" },
];

const products = [
	{ label: "School Management", href: "/products/school-management" },
	{ label: "Dental Management", href: "/products/dental-management" },
	{ label: "Clinic Management", href: "/products/clinic-management" },
	{ label: "HR Software", href: "/products/hr-software" },
	{ label: "Employee Management", href: "/products/employee-management" },
];

const company = [
	{ label: "About", href: "/about" },
	{ label: "Team", href: "/team" },
	{ label: "Careers", href: "/careers" },
	{ label: "Insights", href: "/insights" },
	{ label: "Works", href: "/works" },
	{ label: "Support", href: "/support" },
];

const industries = [
	{ label: "Education", href: "/industries/education" },
	{ label: "Health", href: "/industries/health" },
	{ label: "Travel", href: "/industries/travel" },
	{ label: "Banks & Finance", href: "/industries/finance" },
	{ label: "Logistics", href: "/industries/logistics" },
	{ label: "Ecommerce", href: "/industries/ecommerce" },
	{ label: "Manufacturing", href: "/industries/manufacturing" },
	{ label: "Government", href: "/industries/government" },
	{ label: "Hotels", href: "/industries/hotels" },
	{ label: "Construction", href: "/industries/construction" },
];

const legal = [
	{ label: "Terms", href: "/terms" },
	{ label: "Privacy Policy", href: "/privacy" },
	{ label: "Cookies", href: "/cookies" },
];

function FooterColumn({
	title,
	items,
	cta,
}: {
	title: string;
	items: { label: string; href: string }[];
	cta?: { label: string; href: string };
}) {
	return (
		<div>
			<h3 className="mb-6 -ml-3 px-3 font-bold text-amber-500/70 text-xs uppercase tracking-[0.18em]">
				{title}
			</h3>
			<ul className="space-y-1">
				{items.map((item) => (
					<li key={item.label}>
						<a
							href={item.href}
							className="group -ml-3 flex w-full items-center rounded-lg px-3 py-2 text-[15px] text-amber-50/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
						>
							{item.label}
							<ChevronRight className="ml-2 size-3.5 opacity-50 transition-opacity group-hover:opacity-100" />
						</a>
					</li>
				))}
			</ul>
			{cta && (
				<div className="mt-8 -ml-3 px-3">
					<a
						href={cta.href}
						className="group inline-flex items-center rounded-full bg-amber-500/10 px-5 py-2.5 font-medium text-[14px] text-white transition-colors duration-200 hover:bg-amber-500/20"
					>
						{cta.label}
						<ChevronRight className="ml-1.5 size-3.5 opacity-60 transition-opacity group-hover:opacity-100" />
					</a>
				</div>
			)}
		</div>
	);
}

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<div className="bg-neutral-100 py-2.5 p-4">
			<footer className="relative mx-auto w-full  overflow-hidden rounded-[2rem] bg-gradient-to-b from-amber-900 via-[#170c03] to-[#0a0500] py-10 text-amber-50/80 shadow-2xl">
				<div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
					<FooterColumn
						title="Services"
						items={services}
						cta={{ label: "Get Started", href: "/contact" }}
					/>
					<FooterColumn title="Products" items={products} />
					<FooterColumn title="Company" items={company} />
					<FooterColumn title="Industries" items={industries} />
				</div>

				<div className="mx-auto flex max-w-[1300px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
					<div className="-ml-3 px-3">
						
						<p className="max-w-md text-[13px] text-amber-100/90 leading-relaxed">
							We believe continuous research helps us understand customer's
							needs, so we build things people truly enjoy.
						</p>
						<div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-medium text-[13px] text-amber-100/60">
							<span className="inline-flex items-center gap-1.5">
								<Mail className="size-3.5" />
								<a
									href="mailto:hivertechnology@gmail.com"
									className="transition-colors hover:text-white"
								>
									hivertechnology@gmail.com
								</a>
							</span>
							<span className="inline-flex items-center gap-1.5">
								<Phone className="size-3.5" />
								<a
									href="tel:+9779862537264"
									className="transition-colors hover:text-white"
								>
									+977-9862537264
								</a>
							</span>
							<span className="inline-flex items-center gap-1.5">
								<MapPin className="size-3.5" />
								Imadole, Lalitpur
							</span>
						</div>
						<p className="mt-4 font-medium text-[13px] text-amber-100/60">
							&copy;{year} Hiver Technology. All rights reserved
						</p>
					</div>

					<div className="flex flex-wrap items-center gap-2 px-3 font-medium text-[14px] text-white/90 sm:gap-3 md:justify-end">
						{legal.map((item, index) => (
							<span
								key={item.label}
								className="flex items-center gap-2 sm:gap-3"
							>
								{index > 0 && (
									<span className="text-[10px] text-white/40">&bull;</span>
								)}
								<a
									href={item.href}
									className="transition-colors hover:text-white"
								>
									{item.label}
								</a>
							</span>
						))}
					</div>
				</div>
			</footer>
		</div>
	);
}
