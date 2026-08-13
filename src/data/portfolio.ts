export interface Profile { name: string; role: string; statement: string; summary: string; email: string; location: string; github: string; portfolioUrl: string; }
export interface EvidenceItem { value: string; label: string; detail: string; }
export interface ProjectSummary { id: "meridian" | "carryover" | "luxen" | "halo"; title: string; descriptor: string; summary: string; path?: string; liveUrl: string; repoUrl?: string; poster: string; video?: string; technologies: string[]; }
export interface CaseStudy extends ProjectSummary { year: string; responsibilities: string[]; problem: string; disclosure: string; evidence: EvidenceItem[]; decisions: Array<{ title: string; body: string }>; reflection: string; }
export interface ResumeEntry { title: string; subtitle: string; period?: string; bullets: string[]; }

export const PROFILE: Profile = {
  name: "Justice Brutus",
  role: "Product-focused Front-End Engineer",
  statement: "I build interfaces that make complex products clear, credible, and usable.",
  summary: "React and TypeScript product engineering with accessible interaction, responsive systems, and end-to-end release ownership.",
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
  descriptor: "Shift continuity for the work that cannot be dropped",
  summary: "A fictional plant-operations product that turns unresolved conditions into acknowledged, assigned, evidence-backed work across shifts.",
  path: "/work/carryover",
  liveUrl: "https://github.com/justicebrutus/carryover",
  repoUrl: "https://github.com/justicebrutus/carryover",
  poster: "/projects/carryover-overview.png",
  technologies: ["React", "TypeScript", "Domain modeling", "Local persistence", "Vitest"],
  year: "2026",
  responsibilities: ["Product definition", "Industrial workflow modeling", "Interface architecture", "Implementation", "Release QA"],
  problem: "Shift changes create a dangerous gap between what one person observed and what the next person must protect. Carryover makes the continuity decision, acknowledgement, ownership, evidence, and updated record one traceable path.",
  disclosure: "Independent fictional product case study. All plants, people, equipment, incidents, actions, and records are invented and unrelated to any real employer.",
  evidence: [
    { value: "5", label: "workspaces", detail: "Overview, Handoffs, Issues, Actions, and Reports support one continuity journey." },
    { value: "3", label: "role previews", detail: "Operator, supervisor, and manager controls change available demonstration actions." },
    { value: "13", label: "passing tests", detail: "Domain transitions, recovery, permissions, filtering, and CSV behavior are verified." },
    { value: "1", label: "operating record", detail: "Conditions, actions, evidence, and immutable audit entries remain connected." },
  ],
  decisions: [
    { title: "Continuity before metrics", body: "The overview starts with unresolved operating pressure and the incoming priority, not decorative dashboard totals." },
    { title: "Closure requires proof", body: "Actions cannot close without meaningful resolution evidence, and required approvals remain visible waiting states." },
    { title: "Permissions without theatre", body: "Role preview changes product behavior while stating clearly that it is not authentication or security enforcement." },
    { title: "Mobile becomes action order", body: "Desktop comparison tables become direct condition records and decision sequences on narrow screens." },
  ],
  reflection: "A real deployment would need authenticated roles, site-specific equipment taxonomy, attachment storage, offline conflict handling, integrations with maintenance systems, and operator research conducted on the floor. The current local adapter keeps those boundaries visible and replaceable.",
};

export const LAB_PROJECTS: ProjectSummary[] = [
  { id: "luxen", title: "Luxen Mix Analyzer", descriptor: "Browser audio workbench", summary: "Hand-written FFT, loudness metering, retuning, and spectral separation in a zero-dependency browser instrument.", liveUrl: "https://luxen-mix-analyzer.vercel.app", repoUrl: "https://github.com/justicebrutus/luxen-mix-analyzer", poster: "/posters/luxen.png", video: "/videos/luxen.mp4", technologies: ["JavaScript", "Web Audio", "Canvas", "DSP"] },
  { id: "halo", title: "HALO", descriptor: "Interactive creative technology", summary: "A canvas particle system with cursor physics, cached glow sprites, responsive motion, and reduced-motion behavior.", liveUrl: "https://halo-studio-pied.vercel.app", repoUrl: "https://github.com/justicebrutus/halo-studio", poster: "/posters/halo.png", video: "/videos/halo.mp4", technologies: ["React", "Canvas", "Motion", "Performance"] },
];

export const RESUME_PROJECTS: ResumeEntry[] = [
  { title: "Meridian Capital — Product case study", subtitle: "React · TypeScript · React Router · Vitest", period: "2026", bullets: ["Built a 27-route product experience spanning an editorial institutional website and a five-workspace portfolio console.", "Designed one typed 24-company record to drive portfolio claims, responsibility mapping, capital exceptions, reviews, filters, CSV reporting, and responsive company records.", "Implemented accessible interaction, reduced-motion behavior, versioned local persistence and recovery, and an automated suite covering core data and decision workflows."] },
  { title: "Carryover — Plant-operations product case study", subtitle: "React · TypeScript · React Router · Vitest", period: "2026", bullets: ["Modeled an end-to-end shift-continuity workflow connecting observations, carryover decisions, acknowledgement, assigned actions, resolution evidence, and audit history.", "Built responsive Overview, Handoffs, Issues, Actions, and Reports workspaces with role-aware demonstration controls, versioned local recovery, printing, and CSV export.", "Verified domain transitions, permissions, filters, persistence recovery, and exports with 13 passing tests and a production TypeScript build."] },
  { title: "Luxen Mix Analyzer — Technical lab", subtitle: "JavaScript · Web Audio API · Canvas", bullets: ["Implemented a zero-dependency radix-2 FFT, loudness metering, phase-vocoder retuning, and spectral separation in a keyboard-operable browser interface."] },
];
