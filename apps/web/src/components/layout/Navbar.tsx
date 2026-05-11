import {
  BarChart3,
  BookOpen,
  CalendarCheck,
  ChevronDown,
  ClipboardList,
  Code2,
  Database,
  Factory,
  Globe,
  GraduationCap,
  Heart,
  Landmark,
  type LucideIcon,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Monitor,
  MousePointer2,
  Newspaper,
  Palette,
  Plane,
  RefreshCw,
  Search,
  Settings2,
  Share2,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  UserCheck,
  UserPlus,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import logoUrl from "../../public/Hiver-logo-web-dark.svg";
import { ShinyButton } from "@/components/shiny-button";
import { ModeToggle } from "../mode-toggle";

// ─── types ───────────────────────────────────────────────────────────────────

type RichItem = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

type RichDropdownConfig = {
  label: string;
  exploreHref: string;
  exploreTitle: string;
  exploreDescription: string;
  sectionLabel: string;
  headerIcon: LucideIcon;
  items: RichItem[];
};

type SolutionGroup = {
  title: string;
  href: string;
  items: RichItem[];
};

// ─── data ────────────────────────────────────────────────────────────────────

const buildConfig: RichDropdownConfig = {
  label: "Build",
  exploreHref: "/services",
  exploreTitle: "Explore Build Services",
  exploreDescription: "Custom software and user experience work.",
  sectionLabel: "By technology",
  headerIcon: Code2,
  items: [
    {
      label: "Web Applications",
      href: "/services/web-applications",
      description: "Custom web apps built to scale",
      icon: Globe,
    },
    {
      label: "Mobile Apps",
      href: "/services/mobile-apps",
      description: "iOS and Android native experiences",
      icon: Smartphone,
    },
    {
      label: "Responsive Websites",
      href: "/services/responsive-websites",
      description: "Fast, beautiful sites on every device",
      icon: Monitor,
    },
    {
      label: "CRM Applications",
      href: "/services/crm",
      description: "Manage leads, clients and pipelines",
      icon: Database,
    },
    {
      label: "UI/UX Design",
      href: "/services/ui-ux-design",
      description: "Interfaces that convert and delight",
      icon: Palette,
    },
  ],
};

const marketingConfig: RichDropdownConfig = {
  label: "Marketing",
  exploreHref: "/services/digital-marketing",
  exploreTitle: "Explore Marketing",
  exploreDescription: "Campaigns, funnels, and paid growth systems.",
  sectionLabel: "By channel",
  headerIcon: TrendingUp,
  items: [
    {
      label: "Digital Marketing",
      href: "/services/digital-marketing",
      description: "Full-funnel campaigns that drive growth",
      icon: TrendingUp,
    },
    {
      label: "Email Marketing",
      href: "/services/email-marketing",
      description: "Sequences that nurture and convert",
      icon: Mail,
    },
    {
      label: "Social Media Marketing",
      href: "/services/social-media-marketing",
      description: "Content that builds audience and trust",
      icon: Share2,
    },
    {
      label: "Meta Ads Campaigns",
      href: "/services/meta-ads",
      description: "Targeted paid ads that perform",
      icon: Megaphone,
    },
    {
      label: "Landing Page Funnels",
      href: "/services/landing-page-funnels",
      description: "Pages optimised to capture leads",
      icon: MousePointer2,
    },
  ],
};

const seoConfig: RichDropdownConfig = {
  label: "SEO",
  exploreHref: "/services/seo",
  exploreTitle: "Explore SEO Services",
  exploreDescription: "Search visibility for websites and ecommerce.",
  sectionLabel: "By type",
  headerIcon: Search,
  items: [
    {
      label: "WordPress SEO",
      href: "/services/seo/wordpress",
      description: "SEO tailored for WordPress sites",
      icon: Globe,
    },
    {
      label: "Shopify SEO",
      href: "/services/seo/shopify",
      description: "Drive organic sales to your store",
      icon: ShoppingBag,
    },
    {
      label: "Ecommerce SEO",
      href: "/services/seo/ecommerce",
      description: "Product and category page rankings",
      icon: ShoppingCart,
    },
    {
      label: "Technical SEO",
      href: "/services/seo/technical",
      description: "Fix the foundations, boost rankings",
      icon: Code2,
    },
    {
      label: "Local SEO",
      href: "/services/seo/local",
      description: "Dominate your local search results",
      icon: MapPin,
    },
    {
      label: "SEO Audit",
      href: "/services/seo/audit",
      description: "Uncover what's holding your site back",
      icon: ClipboardList,
    },
  ],
};

const automationConfig: RichDropdownConfig = {
  label: "Automation",
  exploreHref: "/services/marketing-automation",
  exploreTitle: "Explore Automation",
  exploreDescription: "Follow-up, lifecycle, and CRM workflows.",
  sectionLabel: "By workflow",
  headerIcon: Zap,
  items: [
    {
      label: "Marketing Automation",
      href: "/services/marketing-automation",
      description: "Workflows that run while you sleep",
      icon: Zap,
    },
    {
      label: "Lead Nurturing Campaigns",
      href: "/services/lead-nurturing",
      description: "Automated sequences that warm prospects",
      icon: UserPlus,
    },
    {
      label: "Newsletter Campaigns",
      href: "/services/newsletter-campaigns",
      description: "Regular newsletters on autopilot",
      icon: Newspaper,
    },
    {
      label: "Abandoned Cart Automation",
      href: "/services/abandoned-cart-automation",
      description: "Win back customers automatically",
      icon: ShoppingCart,
    },
    {
      label: "CRM Follow-up Automation",
      href: "/services/crm-automation",
      description: "Never miss a follow-up again",
      icon: RefreshCw,
    },
  ],
};

const solutionGroups: SolutionGroup[] = [
  {
    title: "Products",
    href: "/products",
    items: [
      {
        label: "School Management",
        href: "/products/school-management",
        description: "Digital systems for schools",
        icon: GraduationCap,
      },
      {
        label: "Dental Management",
        href: "/products/dental-management",
        description: "Appointment and patient software",
        icon: Star,
      },
      {
        label: "Clinic Management",
        href: "/products/clinic-management",
        description: "End-to-end clinic operations",
        icon: Heart,
      },
      {
        label: "HR Software",
        href: "/products/hr-software",
        description: "Hire, manage and retain talent",
        icon: Users,
      },
      {
        label: "Employee Management",
        href: "/products/employee-management",
        description: "Track performance and attendance",
        icon: UserCheck,
      },
    ],
  },
  {
    title: "Industries",
    href: "/industries",
    items: [
      {
        label: "Education",
        href: "/industries/education",
        description: "Tech solutions for learning",
        icon: BookOpen,
      },
      {
        label: "Health",
        href: "/industries/health",
        description: "Digital health and clinic tools",
        icon: Heart,
      },
      {
        label: "Travel",
        href: "/industries/travel",
        description: "Booking and travel platforms",
        icon: Plane,
      },
      {
        label: "Banks & Finance",
        href: "/industries/finance",
        description: "Secure fintech solutions",
        icon: Landmark,
      },
      {
        label: "Ecommerce",
        href: "/industries/ecommerce",
        description: "Stores that sell and scale",
        icon: ShoppingBag,
      },
      {
        label: "Manufacturing",
        href: "/industries/manufacturing",
        description: "Operations and supply systems",
        icon: Factory,
      },
    ],
  },
  {
    title: "Use Cases",
    href: "/use-cases",
    items: [
      {
        label: "Lead Generation",
        href: "/use-cases/lead-generation",
        description: "Capture and qualify more leads",
        icon: Target,
      },
      {
        label: "Online Booking",
        href: "/use-cases/online-booking",
        description: "Smart scheduling for any business",
        icon: CalendarCheck,
      },
      {
        label: "Customer Retention",
        href: "/use-cases/customer-retention",
        description: "Keep customers coming back",
        icon: Star,
      },
      {
        label: "Operations Automation",
        href: "/use-cases/operations-automation",
        description: "Streamline repetitive work",
        icon: Settings2,
      },
      {
        label: "Reporting Dashboards",
        href: "/use-cases/reporting-dashboards",
        description: "Insights that drive decisions",
        icon: BarChart3,
      },
    ],
  },
];

const resourceLinks = [
  { label: "Works", href: "/works" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

// ─── desktop dropdown components ─────────────────────────────────────────────

function RichDropdown({ config }: { config: RichDropdownConfig }) {
  const HeaderIcon = config.headerIcon;
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 font-medium text-[15px] text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-800/60 dark:hover:text-white"
      >
        {config.label}
        <ChevronDown className="size-3.5 opacity-50 transition-transform duration-200 group-hover:rotate-180" />
      </button>

      <div className="invisible absolute top-full left-1/2 z-30 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-black/50">
          {/* Explore all header */}
          <a
            href={config.exploreHref}
            className="flex items-start gap-3 border-neutral-100 border-b p-4 transition-colors hover:bg-neutral-50 dark:border-neutral-800/70 dark:hover:bg-neutral-900"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
              <HeaderIcon className="size-4" />
            </span>
            <span>
              <span className="block font-semibold text-[14px] text-neutral-950 dark:text-white">
                {config.exploreTitle}
              </span>
              <span className="mt-0.5 block text-[12px] text-neutral-500 dark:text-neutral-400">
                {config.exploreDescription}
              </span>
            </span>
          </a>

          {/* Section label */}
          <p className="px-4 pt-3 pb-1.5 font-semibold text-[11px] text-neutral-400 uppercase tracking-wider dark:text-neutral-500">
            {config.sectionLabel}
          </p>

          {/* Items */}
          <div className="pb-2">
            {config.items.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-3 px-4 py-2.5 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
                >
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                    <Icon className="size-3.5" />
                  </span>
                  <span>
                    <span className="block font-medium text-[13px] text-neutral-800 dark:text-neutral-200">
                      {item.label}
                    </span>
                    <span className="block text-[12px] text-neutral-400 dark:text-neutral-500">
                      {item.description}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function SolutionsDropdown({ groups }: { groups: SolutionGroup[] }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 font-medium text-[15px] text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-800/60 dark:hover:text-white"
      >
        Solutions
        <ChevronDown className="size-3.5 opacity-50 transition-transform duration-200 group-hover:rotate-180" />
      </button>

      <div className="invisible absolute top-full left-1/2 z-30 w-[780px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-black/50">
          {/* Three-column grid */}
          <div className="grid grid-cols-3 divide-x divide-neutral-100 dark:divide-neutral-800">
            {groups.map((group) => (
              <div key={group.title} className="py-4">
                <p className="px-5 pb-2 font-semibold text-[11px] text-neutral-400 uppercase tracking-wider dark:text-neutral-500">
                  {group.title}
                </p>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-3 px-5 py-2.5 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/60"
                    >
                      <Icon className="mt-0.5 size-4 shrink-0 text-neutral-400 dark:text-neutral-500" />
                      <span>
                        <span className="block font-semibold text-[13px] text-neutral-800 dark:text-neutral-200">
                          {item.label}
                        </span>
                        <span className="block text-[12px] text-neutral-400 leading-snug dark:text-neutral-500">
                          {item.description}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── mobile components ────────────────────────────────────────────────────────

function MobileAccordion({
  title,
  items,
  isOpen,
  onToggle,
}: {
  title: string;
  items: RichItem[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2 font-medium text-[14px] text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-neutral-800/60 dark:hover:text-white"
      >
        {title}
        <ChevronDown
          className={`size-3.5 opacity-50 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-0.5 pt-1 pb-2 pl-3">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                    <Icon className="size-3" />
                  </span>
                  <span>
                    <span className="block font-medium text-[13px] text-neutral-700 dark:text-neutral-300">
                      {item.label}
                    </span>
                    <span className="block text-[11px] text-neutral-400 dark:text-neutral-500">
                      {item.description}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileSolutionsAccordion({
  groups,
  isOpen,
  onToggle,
}: {
  groups: SolutionGroup[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2 font-medium text-[14px] text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-neutral-800/60 dark:hover:text-white"
      >
        Solutions
        <ChevronDown
          className={`size-3.5 opacity-50 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-3 pt-1 pb-2 pl-3">
            {groups.map((group) => (
              <div key={group.title}>
                <a
                  href={group.href}
                  className="block rounded-lg px-3 py-1 font-semibold text-[11px] text-neutral-400 uppercase tracking-wider transition-colors hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300"
                >
                  {group.title}
                </a>
                <div className="grid gap-0.5">
                  {group.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="rounded-lg px-3 py-1.5 text-[13px] text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-800/60 dark:hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) =>
    setOpenSection((prev) => (prev === title ? null : title));

  return (
    <div className="relative flex items-center gap-2 lg:hidden">
      <ModeToggle />
      <div className="relative">
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          className="flex size-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors hover:bg-neutral-200 hover:text-neutral-950 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white"
        >
          <Menu className="size-4" />
        </button>

        {menuOpen && (
          <div className="absolute right-0 z-30 mt-3 max-h-[calc(100vh-6rem)] w-[min(86vw,24rem)] overflow-y-auto rounded-2xl border border-neutral-200 bg-white p-2 shadow-xl dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-black/50">
            <MobileAccordion
              title="Build"
              items={buildConfig.items}
              isOpen={openSection === "Build"}
              onToggle={() => toggleSection("Build")}
            />
            <MobileAccordion
              title="Marketing"
              items={marketingConfig.items}
              isOpen={openSection === "Marketing"}
              onToggle={() => toggleSection("Marketing")}
            />
            <MobileAccordion
              title="SEO"
              items={seoConfig.items}
              isOpen={openSection === "SEO"}
              onToggle={() => toggleSection("SEO")}
            />
            <MobileAccordion
              title="Automation"
              items={automationConfig.items}
              isOpen={openSection === "Automation"}
              onToggle={() => toggleSection("Automation")}
            />
            <MobileSolutionsAccordion
              groups={solutionGroups}
              isOpen={openSection === "Solutions"}
              onToggle={() => toggleSection("Solutions")}
            />
            <div className="my-1 border-neutral-200 border-t dark:border-neutral-800" />
            {resourceLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-lg px-3 py-2 font-medium text-[14px] text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-neutral-800/60 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 border-neutral-200 border-t pt-3 dark:border-neutral-800">
              <a
                href="/contact"
                className="flex w-full items-center justify-center rounded-full bg-neutral-950 px-4 py-2 font-medium text-[13px] text-white transition-colors duration-200 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100"
              >
                <Mail className="mr-2 size-3.5 opacity-70" />
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setIsScrolled(window.scrollY > 40));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-out ${
        isScrolled ? "px-4 pt-3 pb-2" : "px-0 pt-0 pb-0"
      } lg:px-4 lg:pt-3 lg:pb-2`}
    >
      <nav
        className={`relative w-full transition-all duration-300 ease-out ${
          isScrolled
            ? "mx-auto max-w-7xl rounded-full border border-neutral-200 bg-white/85 shadow-sm backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/85"
            : "rounded-none border-neutral-200 border-b bg-white dark:border-neutral-800 dark:bg-neutral-950"
        } lg:mx-auto lg:max-w-7xl lg:rounded-full lg:border lg:border-neutral-200 lg:bg-white/85 lg:shadow-sm lg:backdrop-blur-xl dark:lg:border-neutral-800 dark:lg:bg-neutral-950/85`}
      >
        <div
          className={`flex items-center justify-between gap-4 transition-all duration-300 ease-out ${
            isScrolled ? "px-4 py-2.5 sm:px-6" : "px-6 py-3.5 sm:px-8"
          }`}
        >
          <a href="/" className="flex shrink-0 items-center">
            <img
              src={logoUrl}
              alt="Hiver Technology"
              className={`w-auto object-contain transition-all duration-300 ease-out dark:invert ${isScrolled ? "h-7" : "h-9"}`}
            />
          </a>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex">
            <RichDropdown config={buildConfig} />
            <RichDropdown config={marketingConfig} />
            <RichDropdown config={seoConfig} />
            <RichDropdown config={automationConfig} />
            <SolutionsDropdown groups={solutionGroups} />
            {resourceLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3.5 py-1.5 font-medium text-[15px] text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-800/60 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <ModeToggle />
            <ShinyButton
              href="/contact"
              className="[--shiny-cta-padding-y:0.7rem] [--shiny-cta-padding-x:1.6rem] [--shiny-cta-font-size:0.95rem] [--shiny-cta-line-height:1] [--shiny-cta-bg:#0a0a0a] [--shiny-cta-bg-subtle:#222222] [--shiny-cta-fg:#ffffff] [--shiny-cta-highlight:#f59e0b] [--shiny-cta-highlight-subtle:#fbbf24] dark:[--shiny-cta-bg:#f5f5f5] dark:[--shiny-cta-bg-subtle:#e5e5e5] dark:[--shiny-cta-fg:#111111] font-semibold shadow-[0_10px_30px_rgba(245,158,11,0.25)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.35)]"
            >
              Hire Us
            </ShinyButton>
          </div>

          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
