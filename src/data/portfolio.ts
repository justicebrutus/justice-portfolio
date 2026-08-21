export interface Profile { name: string; role: string; statement: string; summary: string; email: string; location: string; github: string; portfolioUrl: string; }
export interface EvidenceItem { value: string; label: string; detail: string; }
export interface ProjectSummary { id: "meridian" | "carryover" | "luxen" | "halo"; title: string; descriptor: string; summary: string; path?: string; liveUrl: string; repoUrl?: string; poster: string; video?: string; technologies: string[]; }
export interface CaseStudy extends ProjectSummary { year: string; responsibilities: string[]; problem: string; disclosure: string; evidence: EvidenceItem[]; decisions: Array<{ title: string; body: string }>; reflection: string; }
export interface ResumeEntry { title: string; subtitle: string; period?: string; bullets: string[]; }

export const PROFILE: Profile = {
  name: "Justice Brutus",
  role: "Frontend Developer & UI Engineer",
  statement: "I build interfaces that make complex products clear, credible, and usable.",
  summary: "React and TypeScript engineer focused on data-rich interfaces, accessible interaction, responsive systems, and verified releases.",
  email: "justicebrutus4@gmail.com",
  location: "Ontario, Canada",
  github: "https://github.com/justicebrutus",
  portfolioUrl: "https://justice-portfolio-nine.vercel.app",
};

export const MERIDIAN: CaseStudy = {
  id: "meridian",
  title: "Meridian Capital",
  descriptor: "Public institution + portfolio operating system",
  summary: "One fictional investment firm expressed across a complete editorial website and a connected five-workspace operating console.",
  path: "/work/meridian",
  liveUrl: "https://meridian-justice12.vercel.app",
  repoUrl: "https://github.com/justicebrutus/meridian-capital",
  poster: "/projects/meridian-overview.png",
  technologies: ["React", "TypeScript", "React Router", "Vitest", "Responsive systems"],
  year: "2026",
  responsibilities: ["Product definition", "Information architecture", "Visual direction", "Implementation review", "Release QA"],
  problem: "Make a fictional institution feel coherent and accountable across two very different jobs: explain its investment point of view publicly, then help a partner understand what needs a decision inside the portfolio.",
  disclosure: "Independent product case study. I led product definition, information architecture, visual direction, iterative review, and release QA, using AI-assisted development workflows to accelerate implementation. I remained accountable for requirements, trade-offs, code acceptance, and final quality.",
  evidence: [
    { value: "27", label: "routed views", detail: "Public story, case-study chapters, company records, reviews, and reports." },
    { value: "24", label: "canonical records", detail: "One typed portfolio dataset drives public claims and console decisions." },
    { value: "5", label: "console workspaces", detail: "Portfolio, Capital, Companies, Reviews, and Reports share local state." },
    { value: "46", label: "passing tests", detail: "Verified across ten unit and component test files in the current audited build." },
  ],
  decisions: [
    { title: "A system, not repeated pages", body: "Each public chapter has its own narrative structure while typography, rules, interaction conventions, and data remain recognizably Meridian." },
    { title: "One record behind every claim", body: "Portfolio totals, responsibility assignments, capital figures, and exceptions derive from canonical typed records instead of drifting copy." },
    { title: "Mobile as a different work mode", body: "Wide ledgers become readable records, sticky narratives return to document order, and key decisions remain available without horizontal scanning." },
    { title: "Motion with an exit", body: "Scroll effects clarify progress or sequence, reverse naturally, and yield to complete static reading under reduced motion." },
  ],
  reflection: "With real users, the next step would be role-based research with investment partners and founders, followed by a service-backed repository, authenticated permissions, multi-user conflict handling, and production observability. The current local workspace is intentionally a transparent demonstration boundary—not a simulated backend presented as production infrastructure.",
};

export const CARRYOVER: CaseStudy = {
  id: "carryover",
  title: "Carryover",
  descriptor: "Plant shift-continuity operating product",
  summary: "A role-aware operating record that carries unresolved conditions across shift change with explicit acknowledgement, assigned action, evidence, and closure.",
  path: "/work/carryover",
  liveUrl: "https://carryover-6m1z.vercel.app",
  repoUrl: "https://github.com/justicebrutus/carryover",
  poster: "/projects/carryover-overview.png",
  technologies: ["React", "TypeScript", "React Router", "Vitest", "Playwright", "PWA"],
  year: "2026",
  responsibilities: ["Product definition", "Workflow architecture", "Interface design", "Frontend implementation", "Release verification"],
  problem: "Shift handoffs fail when an unresolved condition becomes a paragraph instead of a responsibility transfer. Carryover makes preparation, incoming verification, ownership, evidence, and closure part of one legible record.",
  disclosure: "Independent fictional product case study. All plants, people, equipment, incidents, and records are invented. Carryover demonstrates interface and workflow design; it does not replace approved plant safety or production procedures.",
  evidence: [
    { value: "5", label: "workspaces", detail: "Overview, Handoffs, Issues, Actions, and Reports share one versioned record." },
    { value: "3", label: "role modes", detail: "Operator, shift supervisor, and plant manager permissions change available actions." },
    { value: "25", label: "unit tests", detail: "Migration, permissions, lifecycle, exports, recovery, and undo/redo history are covered." },
    { value: "105", label: "browser checks", detail: "Seven product checks in each of fifteen cells — three engines across five viewports — over real routes and the guided workflow." },
  ],
  decisions: [
    { title: "Transfer, not broadcast", body: "Outgoing preparation and incoming cross-check are separate sides of one immutable handoff record." },
    { title: "A guide that uses the product", body: "The recruiter journey never simulates success; it moves through real routes, forms, permissions, persistence, and audit events." },
    { title: "Proof before closure", body: "Actions require expected evidence, and parent issues cannot resolve until linked work is closed with a final note." },
    { title: "Local, but not disposable", body: "A typed repository boundary, V1 migration, corruption recovery, and deterministic seed state make the client-side boundary explicit and replaceable." },
    { title: "Depth beyond the happy path", body: "A ⌘K command palette, undo/redo time-travel over the operating record, cross-tab live sync, and an installable offline PWA are hand-built with zero added dependencies — the product stays usable offline and consistent across open tabs." },
  ],
  reflection: "A real plant deployment would require worker research, alignment with approved site procedures, authenticated identities, integration with maintenance and quality systems, offline resilience, and an incident-informed governance process. This release deliberately proves the workflow and frontend architecture without pretending those operational dependencies already exist.",
};

export const LAB_PROJECTS: ProjectSummary[] = [
  { id: "luxen", title: "Luxen Mix Analyzer", descriptor: "Browser audio workbench", summary: "Hand-written FFT, loudness metering, retuning, and spectral separation in a zero-dependency browser instrument.", liveUrl: "https://luxen-mix-analyzer.vercel.app", repoUrl: "https://github.com/justicebrutus/luxen-mix-analyzer", poster: "/posters/luxen.png", video: "/videos/luxen.mp4", technologies: ["JavaScript", "Web Audio", "Canvas", "DSP"] },
  { id: "halo", title: "HALO", descriptor: "Interactive creative technology", summary: "A canvas particle system with cursor physics, cached glow sprites, responsive motion, and reduced-motion behavior.", liveUrl: "https://halo-studio-pied.vercel.app", repoUrl: "https://github.com/justicebrutus/halo-studio", poster: "/posters/halo.png", video: "/videos/halo.mp4", technologies: ["React", "Canvas", "Motion", "Performance"] },
];

export const RESUME_PROJECTS: ResumeEntry[] = [
  { title: "Meridian Capital — Independent product case study", subtitle: "React · TypeScript · React Router · Vitest", period: "2026", bullets: ["Architected and implemented a 27-route interface spanning an editorial investment-firm website and five connected portfolio-management workspaces.", "Created a shared typed data model powering 24 company records, capital tracking, review decisions, search and filtering, CSV exports, and print-ready reports.", "Built versioned local persistence with corruption recovery, keyboard-accessible workflows, reduced-motion support, and task-specific desktop, tablet, and mobile layouts.", "Verified core data and decision workflows with 46 automated tests, production builds, and browser QA across five target viewport sizes."] },
  { title: "Carryover — Independent plant-operations product", subtitle: "React · TypeScript · React Router · Vitest · Playwright", period: "2026", bullets: ["Designed and implemented a role-aware shift-continuity workflow from observation through two-way handoff, action ownership, resolution evidence, and an immutable operating record.", "Built versioned local persistence with V1 migration, corruption recovery, deterministic seed state, direct record routes, CSV export, and print-ready shift briefs.", "Hand-built product-depth features with zero added dependencies: a ⌘K command palette, undo/redo time-travel over the record, cross-tab live sync, and an installable offline PWA.", "Verified the release with 25 unit tests and 105 browser cases across Chromium, Firefox, and WebKit at five responsive widths; Lighthouse scored 100 for performance, accessibility, and best practices."] },
  { title: "Luxen Mix Analyzer — Browser audio workbench", subtitle: "JavaScript · Web Audio API · Canvas · DSP", bullets: ["Implemented a zero-dependency radix-2 FFT, loudness metering, phase-vocoder retuning, and spectral separation in a keyboard-operable browser instrument."] },
  { title: "HALO — Creative-technology studio site", subtitle: "React · Canvas 2D · Framer Motion", bullets: ["Diagnosed a browser-freezing canvas animation caused by repeated per-particle blur inside the render loop; replaced it with a pre-rendered offscreen glow sprite reused via drawImage(), then capped backing resolution and paused animation when the tab is hidden — a full performance pass, not a single fix."] },
];
