import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

const services = [
	{ label: "Web Applications", href: "/services/web-applications" },
	{ label: "Mobile Apps (iOS & Android)", href: "/services/mobile-apps" },
	{ label: "Wordpress Websites", href: "/services/wordpress-websites" },
	{ label: "CRM Web Applications", href: "/services/crm" },
	{ label: "Shopify Ecommerce", href: "/services/shopify-ecommerce" },
	{ label: "Figma Design", href: "/services/figma-design" },
];

const marketingServices = [
	{ label: "Digital Marketing", href: "/services/digital-marketing" },
	{ label: "Landing Page Funnels", href: "/services/landing-page-funnels" },
	{ label: "Lead Nurturing Campaigns", href: "/services/lead-nurturing" },
	{ label: "Meta Ads Campaigns", href: "/services/meta-ads" },
];

const emailMarketing = [
	{ label: "Email Marketing", href: "/services/email-marketing" },
	{ label: "Newsletter Campaigns", href: "/services/newsletter-campaigns" },
	{
		label: "Welcome Email Sequences",
		href: "/services/welcome-email-sequences",
	},
	{
		label: "Customer Win-back Campaigns",
		href: "/services/win-back-campaigns",
	},
];

const socialMarketing = [
	{ label: "Social Media Marketing", href: "/services/social-media-marketing" },
	{
		label: "Social Content Calendar",
		href: "/services/social-content-calendar",
	},
	{ label: "Meta Ads Campaigns", href: "/services/meta-ads" },
	{ label: "Social Campaign Reporting", href: "/services/social-reporting" },
];

const automationServices = [
	{ label: "Marketing Automation", href: "/services/marketing-automation" },
	{ label: "Lead Nurturing Campaigns", href: "/services/lead-nurturing" },
	{
		label: "Abandoned Cart Automation",
		href: "/services/abandoned-cart-automation",
	},
	{
		label: "Welcome Email Sequences",
		href: "/services/welcome-email-sequences",
	},
	{ label: "CRM Follow-up Automation", href: "/services/crm-automation" },
];

const seoServices = [
	{ label: "SEO Services", href: "/services/seo" },
	{ label: "WordPress SEO", href: "/services/seo/wordpress" },
	{ label: "Shopify SEO", href: "/services/seo/shopify" },
	{ label: "Ecommerce SEO", href: "/services/seo/ecommerce" },
	{ label: "Technical SEO", href: "/services/seo/technical" },
	{ label: "Local SEO", href: "/services/seo/local" },
	{ label: "On-page SEO", href: "/services/seo/on-page" },
	{ label: "Content SEO", href: "/services/seo/content" },
	{ label: "SEO Audit", href: "/services/seo/audit" },
	{ label: "Google Business Profile", href: "/services/seo/google-business" },
	{ label: "Link Building", href: "/services/seo/link-building" },
	{ label: "Analytics & Reporting", href: "/services/seo/reporting" },
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
		<div className="bg-neutral-100 p-4 py-2.5">
			<footer className="relative mx-auto w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-amber-900 via-[#170c03] to-[#0a0500] py-10 text-amber-50/80 shadow-2xl">
				<div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
					<FooterColumn title="Services" items={services} />
					<FooterColumn title="Marketing" items={marketingServices} />
					<FooterColumn title="Email Marketing" items={emailMarketing} />
					<FooterColumn title="Social Marketing" items={socialMarketing} />
					<FooterColumn
						title="Automations"
						items={automationServices}
						cta={{ label: "Get Started", href: "/contact" }}
					/>
					<FooterColumn title="SEO Services" items={seoServices} />
					<FooterColumn title="Company" items={company} />
					<FooterColumn title="Industries" items={industries} />
				</div>

				<div className="mx-auto flex max-w-[1300px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
					<div className="-ml-3 px-3">
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
