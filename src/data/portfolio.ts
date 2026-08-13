export interface Profile { name: string; role: string; statement: string; summary: string; email: string; location: string; github: string; portfolioUrl: string; }
export interface EvidenceItem { value: string; label: string; detail: string; }
export interface ProjectSummary { id: "meridian" | "luxen" | "halo"; title: string; descriptor: string; summary: string; path?: string; liveUrl: string; repoUrl?: string; poster: string; video?: string; technologies: string[]; }
export interface CaseStudy extends ProjectSummary { year: string; responsibilities: string[]; problem: string; disclosure: string; evidence: EvidenceItem[]; decisions: Array<{ title: string; body: string }>; reflection: string; }
export interface ResumeEntry { title: string; subtitle: string; period?: string; bullets: string[]; }

export const PROFILE: Profile = {
  name: "Justice Brutus",
  role: "Product-focused Front-End Engineer",
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

export const LAB_PROJECTS: ProjectSummary[] = [
  { id: "luxen", title: "Luxen Mix Analyzer", descriptor: "Browser audio workbench", summary: "Hand-written FFT, loudness metering, retuning, and spectral separation in a zero-dependency browser instrument.", liveUrl: "https://luxen-mix-analyzer.vercel.app", repoUrl: "https://github.com/justicebrutus/luxen-mix-analyzer", poster: "/posters/luxen.png", video: "/videos/luxen.mp4", technologies: ["JavaScript", "Web Audio", "Canvas", "DSP"] },
  { id: "halo", title: "HALO", descriptor: "Interactive creative technology", summary: "A canvas particle system with cursor physics, cached glow sprites, responsive motion, and reduced-motion behavior.", liveUrl: "https://halo-studio-pied.vercel.app", repoUrl: "https://github.com/justicebrutus/halo-studio", poster: "/posters/halo.png", video: "/videos/halo.mp4", technologies: ["React", "Canvas", "Motion", "Performance"] },
];

export const RESUME_PROJECTS: ResumeEntry[] = [
  { title: "Meridian Capital — Independent product case study", subtitle: "React · TypeScript · React Router · Vitest", period: "2026", bullets: ["Architected and implemented a 27-route interface spanning an editorial investment-firm website and five connected portfolio-management workspaces.", "Created a shared typed data model powering 24 company records, capital tracking, review decisions, search and filtering, CSV exports, and print-ready reports.", "Built versioned local persistence with corruption recovery, keyboard-accessible workflows, reduced-motion support, and task-specific desktop, tablet, and mobile layouts.", "Verified core data and decision workflows with 46 automated tests, production builds, and browser QA across five target viewport sizes."] },
  { title: "Luxen Mix Analyzer — Browser audio workbench", subtitle: "JavaScript · Web Audio API · Canvas · DSP", bullets: ["Implemented a zero-dependency radix-2 FFT, loudness metering, phase-vocoder retuning, and spectral separation in a keyboard-operable browser instrument."] },
  { title: "HALO — Interactive canvas system", subtitle: "React · Canvas · Performance", bullets: ["Built a responsive particle system with cursor physics, cached glow sprites, performance controls, and reduced-motion behavior."] },
];
