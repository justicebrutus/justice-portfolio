import { Link } from "react-router-dom";
import { LAB_PROJECTS, MERIDIAN, PROFILE } from "../data/portfolio";
import LiveProjectPreview from "../components/LiveProjectPreview";

const capabilityGroups = [
  ["Build", "React, TypeScript, JavaScript, React Router, semantic HTML, modern CSS"],
  ["Interaction", "Responsive systems, keyboard workflows, focus management, forms, reduced motion"],
  ["Quality", "Vitest, Testing Library, browser QA, content integrity, Vite, Git, Vercel"],
] as const;

const meridianBullets = [
  "Built a 27-route experience spanning an editorial institutional website and a five-workspace portfolio console.",
  "Designed one typed 24-company record to drive public claims, capital exceptions, reviews, filtering, and reporting.",
  "Implemented accessible interaction, responsive work modes, versioned local persistence, recovery, and automated tests.",
] as const;

export default function HomePage() {
  return <article className="portfolio-dossier section-shell">
    <header className="dossier-header" aria-labelledby="portfolio-title">
      <div className="dossier-identity">
        <p className="eyebrow">{PROFILE.name} · {PROFILE.location}</p>
        <h1 id="portfolio-title">{PROFILE.role}</h1>
        <p className="dossier-statement">{PROFILE.statement}</p>
      </div>
      <address className="dossier-contact">
        <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        <a href={PROFILE.github} target="_blank" rel="noreferrer">github.com/justicebrutus ↗</a>
        <Link to="/resume">Résumé / PDF →</Link>
      </address>
    </header>

    <section className="dossier-summary" aria-label="Professional summary">
      <h2>Profile</h2>
      <p>{PROFILE.summary} I take work from product framing through implementation, responsive QA, and release verification.</p>
      <dl>
        <div><dt>Primary focus</dt><dd>Product interface engineering</dd></div>
        <div><dt>Strongest work</dt><dd>Complex, data-rich workflows</dd></div>
        <div><dt>Current stack</dt><dd>React + TypeScript</dd></div>
      </dl>
    </section>

    <section id="selected-work" className="dossier-section flagship-record" aria-labelledby="meridian-title">
      <header className="record-section-heading"><span>01</span><div><p className="eyebrow">Selected product work</p><h2 id="meridian-title">Meridian Capital</h2></div></header>
      <div className="flagship-grid">
        <figure className="flagship-image">
          <LiveProjectPreview href={`${MERIDIAN.liveUrl}/console`} label="Meridian portfolio console" pathLabel="Meridian / Portfolio command centre" previewHeight={820} />
          <figcaption><strong>Portfolio operating system</strong><span>Decision context shown at an inspectable scale.</span></figcaption>
        </figure>
        <div className="flagship-copy">
          <p className="project-type">Independent product case study · 2026</p>
          <p className="project-intro">{MERIDIAN.summary}</p>
          <dl className="project-ledger">
            <div><dt>Role</dt><dd>Product definition, information architecture, visual direction, implementation review, release QA</dd></div>
            <div><dt>Stack</dt><dd>{MERIDIAN.technologies.slice(0, 4).join(" · ")}</dd></div>
          </dl>
          <ul className="project-outcomes">{meridianBullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          <div className="scope-line" aria-label="Verified Meridian scope">{MERIDIAN.evidence.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
          <div className="record-actions">
            <Link className="button button-primary" to={MERIDIAN.path!}>Read case study</Link>
            <a href={MERIDIAN.liveUrl} target="_blank" rel="noreferrer">Live project ↗</a>
            <a href={MERIDIAN.repoUrl} target="_blank" rel="noreferrer">Source ↗</a>
          </div>
        </div>
      </div>
    </section>

    <div className="dossier-columns">
      <section className="dossier-section" aria-labelledby="capabilities-title">
        <header className="record-section-heading"><span>02</span><div><p className="eyebrow">Capabilities</p><h2 id="capabilities-title">Frontend product delivery</h2></div></header>
        <div className="capability-records">{capabilityGroups.map(([title, detail]) => <div key={title}><h3>{title}</h3><p>{detail}</p></div>)}</div>
      </section>

      <section className="dossier-section" aria-labelledby="experience-title">
        <header className="record-section-heading"><span>03</span><div><p className="eyebrow">Professional experience</p><h2 id="experience-title">Operating discipline</h2></div></header>
        <article className="job-record"><div><h3>Filament Winding Operator</h3><p>RS Poles · Tilbury, Ontario</p></div><time>June 2025–Present</time><ul><li>Work where process discipline, equipment condition, and clear handoffs directly affect production output.</li><li>Earned independent equipment-troubleshooting responsibility within 2.5 months.</li></ul></article>
      </section>
    </div>

    <section className="dossier-section lab-record" aria-labelledby="lab-title">
      <header className="record-section-heading"><span>04</span><div><p className="eyebrow">Technical lab</p><h2 id="lab-title">Focused engineering range</h2></div></header>
      <div className="lab-records">{LAB_PROJECTS.map((project) => <article key={project.id}><div><h3>{project.title}</h3><p>{project.summary}</p></div><span>{project.technologies.join(" · ")}</span><div><a href={project.liveUrl} target="_blank" rel="noreferrer">Live ↗</a>{project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">Source ↗</a>}</div></article>)}</div>
    </section>

    <footer className="dossier-footer">
      <div><p className="eyebrow">Next step</p><h2>Résumé, source, or a direct conversation.</h2></div>
      <div className="record-actions"><Link className="button button-primary" to="/resume">Open résumé</Link><a href={`mailto:${PROFILE.email}`}>Email Justice</a><a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub ↗</a></div>
    </footer>
  </article>;
}
