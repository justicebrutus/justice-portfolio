import ProjectScreen from "./components/ProjectScreen.jsx";

const PROJECTS = [
  {
    title: "Luxen Mix Analyzer",
    tag: "Audio · DSP · Zero dependencies",
    url: "https://luxen-mix-analyzer.vercel.app",
    repo: "https://github.com/justicebrutus/luxen-mix-analyzer",
    poster: "/posters/luxen.png",
    video: "/videos/luxen.mp4",
    blurb: "A browser audio workbench. Every number on screen comes from DSP I wrote by hand — a radix-2 FFT, ITU-R BS.1770-4 LUFS metering, a phase-vocoder retune, and spectral vocal/instrumental separation — with no libraries at all.",
    tech: ["Vanilla JS", "Web Audio API", "Canvas", "Hand-rolled FFT/LUFS"],
    notes: {
      problem: "An ambient accent colour cycles through the entire hue range, so contrast accessibility can't be checked by eye — it passes at some hues and fails at others.",
      fix: "Wrote a script that computes the real WCAG contrast ratio across every point in the cycle and set the colour's lightness floor to the worst case, so text always clears 4.5:1 no matter where the animation is.",
    },
  },
  {
    title: "Brand Kit Generator",
    tag: "AI orchestration · React product",
    url: "https://brand-kit-generator-five.vercel.app",
    repo: "https://github.com/justicebrutus/brand-kit-generator",
    poster: "/posters/brandkit.png",
    video: "/videos/brandkit.mp4",
    blurb: "Type one sentence and get a full brand system — a colour palette with computed WCAG contrast, a font pairing, a wordmark, a voice, a live website mockup, and a tailored PDF. The design engines are real client-side code; the copy is AI, orchestrated over a two-step chain.",
    tech: ["React", "Vite", "Tailwind", "Anthropic API", "jsPDF"],
    notes: {
      problem: "A single AI prompt trying to do brand strategy and copywriting at once produced vague, generic output — it wrote copy before deciding what the brand actually was.",
      fix: "Split it into a two-step chain: the AI defines the brand strategy first, then a second call writes copy conditioned on that strategy. I also code-split the PDF library so it only loads on download, and added a no-key local fallback so the app always works.",
    },
  },
  {
    title: "HALO",
    tag: "Creative technology · Motion",
    url: "https://halo-studio-pied.vercel.app",
    repo: "https://github.com/justicebrutus/halo-studio",
    poster: "/posters/halo.png",
    video: "/videos/halo.mp4",
    blurb: "A dark, cinematic studio site built around an interactive generative halo — a hand-written canvas particle system with sprite-based glow and cursor physics that visitors can retune live. Framer Motion scroll choreography, a starfield, and real performance tuning.",
    tech: ["React", "Framer Motion", "Canvas", "Vercel"],
    notes: {
      problem: "The particle halo froze the browser tab. The glow used ctx.shadowBlur — one of the most expensive canvas operations — recomputed per particle, every frame, at full retina resolution: tens of thousands of blur operations a second.",
      fix: "Pre-rendered the glow once to an offscreen sprite and stamped copies with drawImage() instead of recomputing the blur. Also capped the canvas resolution, reduced the particle count, and paused the render loop when the tab is hidden. Cache expensive work, never redo it in a hot loop.",
    },
  },
];

const SKILLS = {
  "Languages": ["JavaScript (ES6+)", "HTML5", "CSS3"],
  "Frameworks": ["React", "Vite", "Tailwind CSS", "Framer Motion"],
  "Platform": ["Web Audio API", "Canvas 2D", "Responsive layout"],
  "Engineering": ["DSP & algorithms", "AI orchestration", "Performance"],
  "Craft": ["Accessibility (WCAG AA)", "Design systems", "Git · Vercel"],
};

export default function App() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-[520px] grid-bg pointer-events-none" aria-hidden="true" />

      <main className="relative mx-auto max-w-[1000px] px-5">
        {/* Hero */}
        <header className="pt-16 pb-10 fade-up">
          <span className="font-ui text-[12px] tracking-[0.2em] uppercase text-accent font-semibold">Front-End &amp; Creative Developer</span>
          <h1 className="mt-3 font-display font-bold text-ink leading-[0.98] tracking-tight text-[clamp(2.6rem,7vw,4.6rem)]">
            Justice Brutus
          </h1>
          <p className="mt-5 font-ui text-[clamp(1.05rem,2.2vw,1.3rem)] text-body max-w-[54ch] leading-relaxed">
            I build complete, deployed web apps across very different domains — real-time audio DSP,
            AI-driven tooling, and cinematic motion. Below are three live ones. <b className="text-ink">Watch each
            in 30 seconds, or launch it live right here.</b>
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="mailto:justicebrutus4@gmail.com"
              className="rounded-full bg-accent hover:bg-accentink text-white font-ui font-semibold text-[14px] px-5 py-2.5 transition-colors">
              Get in touch
            </a>
            <a href="/Resume_FrontEnd_Creative.pdf" target="_blank" rel="noopener noreferrer"
              className="rounded-full border border-line hover:border-accent text-body hover:text-accent font-ui font-semibold text-[14px] px-5 py-2.5 transition-colors">
              Download PDF résumé
            </a>
            <a href="https://github.com/justicebrutus" target="_blank" rel="noopener noreferrer"
              className="font-ui text-[14px] text-mute hover:text-ink px-2">GitHub ↗</a>
          </div>
          <p className="mt-4 font-ui text-[13px] text-mute">justicebrutus4@gmail.com · 437-980-5878 · Windsor / Chatham-Kent, ON</p>
        </header>

        {/* Projects */}
        <section className="py-8">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] text-ink">Selected work</h2>
            <span className="font-ui text-[13px] text-mute">— three live, hand-built apps</span>
          </div>
          <div className="space-y-16">
            {PROJECTS.map((p, i) => (
              <div key={p.title} className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <ProjectScreen project={p} />
                </div>
                <div className={i % 2 ? "lg:order-1" : ""}>
                  <span className="font-ui text-[12px] tracking-[0.14em] uppercase text-accent font-semibold">{p.tag}</span>
                  <h3 className="mt-2 font-display font-bold text-[1.7rem] text-ink leading-tight">{p.title}</h3>
                  <p className="mt-3 font-ui text-[14.5px] text-body leading-relaxed">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="font-ui text-[12px] text-mute border border-line rounded-full px-2.5 py-1">{t}</span>
                    ))}
                  </div>
                  {p.notes && (
                    <details className="mt-4 group">
                      <summary className="cursor-pointer list-none font-ui text-[12.5px] font-semibold text-accent hover:text-accentink select-none">
                        <span className="inline-block transition-transform group-open:rotate-90 mr-1.5">▸</span>
                        The engineering behind it
                      </summary>
                      <div className="mt-3 pl-3 border-l-2 border-line space-y-2.5">
                        <p className="font-ui text-[13px] leading-relaxed text-body">
                          <span className="font-semibold text-ink">The problem — </span>{p.notes.problem}
                        </p>
                        <p className="font-ui text-[13px] leading-relaxed text-body">
                          <span className="font-semibold text-ink">The fix — </span>{p.notes.fix}
                        </p>
                      </div>
                    </details>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="py-14 border-t border-line mt-10">
          <h2 className="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] text-ink mb-6">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {Object.entries(SKILLS).map(([k, v]) => (
              <div key={k}>
                <span className="font-ui text-[12px] uppercase tracking-[0.12em] text-accent font-semibold">{k}</span>
                <p className="mt-1 font-ui text-[14px] text-body">{v.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience + Education */}
        <section className="py-6 border-t border-line grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h2 className="font-display font-bold text-[1.3rem] text-ink mb-3">Experience</h2>
            <p className="font-ui text-[14px] text-ink font-semibold">Filament Winding Operator — RS Poles</p>
            <p className="font-ui text-[12.5px] text-mute">Tilbury, ON · Jun 2025–Present</p>
            <p className="mt-1.5 font-ui text-[13.5px] text-body leading-relaxed">
              Trusted with independent equipment troubleshooting within 2.5 months — fast, self-directed technical learning.
            </p>
            <p className="mt-3 font-ui text-[13px] text-mute leading-relaxed">
              Earlier: Independent Audio Engineer (Luxen), Set-Up Technician (Nartech), Property Maintenance (Epstein).
            </p>
          </div>
          <div>
            <h2 className="font-display font-bold text-[1.3rem] text-ink mb-3">Education</h2>
            <p className="font-ui text-[14px] text-ink font-semibold">High School Diploma</p>
            <p className="font-ui text-[12.5px] text-mute">Chatham-Kent Secondary School, 2019</p>
            <p className="mt-1.5 font-ui text-[13.5px] text-body leading-relaxed">
              Self-directed study — front-end development, React, Web Audio, and DSP (ongoing).
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 text-center">
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.4rem)] text-ink leading-tight">
            Let's build something.
          </h2>
          <a href="mailto:justicebrutus4@gmail.com"
            className="inline-block mt-6 rounded-full bg-accent hover:bg-accentink text-white font-ui font-semibold text-[16px] px-8 py-3.5 transition-colors">
            justicebrutus4@gmail.com
          </a>
        </section>

        <footer className="py-8 border-t border-line text-center">
          <p className="font-ui text-[12px] text-mute">Built by Justice Brutus — this page is itself a React app, hand-coded and deployed.</p>
        </footer>
      </main>
    </div>
  );
}
