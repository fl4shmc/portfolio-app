import type { ComponentType, SVGProps } from "react";
import { Mail, MessagesSquare, Languages, CalendarClock } from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/brand-icons";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export type CaseStudy = {
  id: string;
  index: string;
  title: string;
  summary: string;
  tags: string[];
  problem: string;
  solution: string;
  impact: string[];
  links: { label: string; href: string }[];
};

export type RemotePillar = {
  title: string;
  icon: IconType;
  description: string;
  items: string[];
};

export type TechSkill = {
  name: string;
  /** Relative visual weight from 1 (subtle) to 5 (prominent); drives base font size. */
  weight: number;
};

export const profile = {
  name: "Sasiru Hapuarachchi",
  monogram: "SH",
  role: "Full-Stack Engineer",
  location: "Colombo, Sri Lanka",
  email: "sasiru.tharinda@gmail.com",
  english: "Professional Working Proficiency",
  // The Hook: an international value proposition, not a generic title.
  timezone: "UTC+5:30",
  headline:
    "Hello, I'm Sasiru.\nI partner with teams worldwide to build high-performance, scalable applications.",
  subheadline:
    "Helping ambitious teams transform complex data into reliable, scalable software"
};

export const navLinks: NavLink[] = [
  { label: "About Me", href: "#about-me" },
  // { label: "Work", href: "#work" },
  // { label: "Remote", href: "#remote" },
  { label: "Connect", href: "#contact" }
];

export const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:sasiru.tharinda@gmail.com", icon: Mail },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sasiru-tharinda",
    icon: LinkedinIcon
  },
  { label: "GitHub", href: "https://github.com/fl4shmc", icon: GithubIcon },
  {
    label: "Medium",
    href: "https://medium.com/@sasiru.tharinda",
    icon: MediumIcon
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "ledger",
    index: "01",
    title: "Real-time payments ledger",
    summary:
      "Rebuilt a fintech settlement engine to handle spiky, high-concurrency traffic without data loss.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    problem:
      "A fintech client's monolithic settlement service buckled under load, dropping transactions during peak windows and forcing manual reconciliation.",
    solution:
      "Chose an event-sourced architecture with Postgres as the source of truth and Redis streams for buffering, over a heavier Kafka setup — cutting operational overhead while preserving auditability and exactly-once processing.",
    impact: [
      "Sustained 2k+ requests/min with zero dropped transactions",
      "Reduced settlement latency by 62% (1.8s to 680ms)",
      "Eliminated manual reconciliation, saving ~15 hrs/week"
    ],
    links: [
      { label: "Case study", href: "#" },
      { label: "GitHub", href: "https://github.com/" }
    ]
  },
  {
    id: "analytics",
    index: "02",
    title: "Self-serve analytics dashboard",
    summary:
      "Shipped a customer-facing analytics product that turned raw event data into instant insight.",
    tags: ["React", "TypeScript", "ClickHouse", "tRPC"],
    problem:
      "A SaaS platform's analytics were rendered server-side and took 8-12s to load, driving churn among data-heavy enterprise accounts.",
    solution:
      "Moved aggregation into ClickHouse and streamed pre-computed rollups to the client, choosing columnar storage over indexed Postgres for its order-of-magnitude read advantage on time-series queries.",
    impact: [
      "Optimized dashboard load times by 91% (9s to 780ms)",
      "Lifted feature adoption from 34% to 71% in one quarter",
      "Enabled 3 enterprise deals previously blocked on performance"
    ],
    links: [
      { label: "Case study", href: "#" },
      { label: "Live demo", href: "#" }
    ]
  },
  {
    id: "auth",
    index: "03",
    title: "Multi-tenant auth platform",
    summary:
      "Designed a secure, standards-based identity layer serving dozens of B2B tenants.",
    tags: ["Next.js", "OAuth 2.0", "Prisma", "Vercel"],
    problem:
      "A growing B2B product needed SSO, per-tenant roles, and audit logging, but its home-grown auth was insecure and impossible to extend.",
    solution:
      "Built an OIDC-compliant layer with short-lived tokens and per-tenant isolation, favoring a battle-tested spec over a bespoke session scheme to pass enterprise security reviews faster.",
    impact: [
      "Built an authenticated system handling 2k+ requests/min",
      "Passed SOC 2 access-control review on first attempt",
      "Cut new-tenant onboarding from days to under an hour"
    ],
    links: [
      { label: "Case study", href: "#" },
      { label: "GitHub", href: "https://github.com/" }
    ]
  },
  {
    id: "edge",
    index: "04",
    title: "Global content delivery at the edge",
    summary:
      "Cut time-to-first-byte worldwide for a media site with an edge-rendered architecture.",
    tags: ["Next.js", "Edge Functions", "Cloudflare", "ISR"],
    problem:
      "A media company's readers outside its origin region saw 3-4s page loads, hurting SEO and international ad revenue.",
    solution:
      "Adopted edge rendering with incremental static regeneration, choosing per-region caching over a single origin to keep content fresh without sacrificing latency.",
    impact: [
      "Improved global TTFB by 74% (2.9s to 750ms)",
      "Raised Core Web Vitals pass rate to 98%",
      "Grew international organic traffic by 40% in 3 months"
    ],
    links: [
      { label: "Case study", href: "#" },
      { label: "Live demo", href: "#" }
    ]
  }
];

export const techCloud = {
  title: "Technologies I love working with.",
  description: "A working set I use to bring great ideas to life."
};

export const techStack: TechSkill[] = [
  { name: ".NET", weight: 3 },
  { name: "Redis", weight: 1 },
  { name: "Microservices", weight: 3 },
  { name: "TypeScript", weight: 5 },
  { name: "ReactJS", weight: 4 },
  { name: "Continuous Integration", weight: 2 },
  { name: "Azure", weight: 3 },
  { name: "Entity Framework", weight: 3 },
  { name: "NextJS", weight: 4 },
  { name: "C#", weight: 3 },
  { name: "SQL Server", weight: 5 },
  { name: "PostgreSQL", weight: 4 },
  { name: "Docker", weight: 2 },
  { name: "Kubernetes", weight: 4 },
  { name: "Continuous Deployment", weight: 2 },
  { name: "ASP.NET MVC", weight: 3 },
];

export const remotePillars: RemotePillar[] = [
  {
    title: "Communication",
    icon: MessagesSquare,
    description:
      "Async-first by default. I document decisions, write clear PRs, and keep work visible without needing a meeting.",
    items: ["Slack", "Notion", "GitHub", "Linear", "Async video updates"]
  },
  {
    title: "Language",
    icon: Languages,
    description:
      "Comfortable leading standups, writing specs, and pairing with stakeholders across time zones.",
    items: ["English — Professional Working Proficiency", "Sinhala — Native"]
  },
  {
    title: "Availability",
    icon: CalendarClock,
    description:
      "Based in UTC+5:30 with a working window that overlaps the US East Coast through Central Europe.",
    items: [
      "Full-time remote & long-term contracts",
      "4+ hrs daily overlap: UTC-5 to UTC+3"
    ]
  }
];
