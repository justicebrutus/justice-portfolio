import { Link } from "react-router-dom";
import { PROFILE, RESUME_PROJECTS } from "../data/portfolio";

export default function ResumePage() {
  return <article className="resume-page section-shell">
    <div className="resume-actions" aria-label="Résumé actions">
      <Link className="text-link" to="/">← Portfolio</Link>
      <a className="button button-primary" href="/Justice-Brutus-Resume.pdf" download>Download PDF</a>
      <button className="button button-secondary" type="button" onClick={() => window.print()}>Print résumé</button>
    </div>

    <header className="resume-header">
      <div><h1>{PROFILE.name}</h1><p className="resume-role">{PROFILE.role}</p></div>
      <address>
        <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        <span>{PROFILE.location}</span>
        <a href={PROFILE.portfolioUrl}>{PROFILE.portfolioUrl.replace("https://", "")}</a>
        <a href={PROFILE.github}>{PROFILE.github.replace("https://", "")}</a>
      </address>
    </header>

    <section className="resume-summary" aria-labelledby="summary-title">
      <h2 id="summary-title">Profile</h2>
      <p>{PROFILE.statement} {PROFILE.summary} I take work from product framing through frontend implementation, responsive QA, and release verification.</p>
    </section>

    <section className="resume-section resume-work" aria-labelledby="work-title">
      <h2 id="work-title">Selected engineering work</h2>
      <div className="resume-records">{RESUME_PROJECTS.map((project) => <article key={project.title}>
        <header><div><h3>{project.title}</h3><p>{project.subtitle}</p></div>{project.period && <span>{project.period}</span>}</header>
        <ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
      </article>)}</div>
    </section>

    <section className="resume-section" aria-labelledby="skills-title">
      <h2 id="skills-title">Technical capabilities</h2>
      <div className="skills-ledger">
        <div><strong>Frontend</strong><span>React, TypeScript, JavaScript, React Router, semantic HTML, modern CSS, responsive interface systems</span></div>
        <div><strong>Product UI</strong><span>Data-rich workflows, forms and validation, keyboard interaction, focus management, accessibility, reduced motion</span></div>
        <div><strong>Quality</strong><span>Vitest, Testing Library, browser QA, responsive testing, performance review, Vite, Git, GitHub, Vercel</span></div>
        <div><strong>Design</strong><span>Figma, Webflow, Squarespace</span></div>
      </div>
    </section>

    <section className="resume-section" aria-labelledby="experience-title">
      <h2 id="experience-title">Professional experience</h2>
      <div className="resume-jobs">
        <article className="resume-job">
          <header><div><h3>Filament Winding Operator · RS Poles</h3><p>Tilbury, Ontario</p></div><span>June 2025–Present</span></header>
          <ul><li>Execute production work where process discipline, equipment condition, accurate handoffs, and traceable records directly affect output quality.</li><li>Earned independent equipment-troubleshooting responsibility within 2.5 months through reliable execution and self-directed technical learning.</li></ul>
        </article>
        <article className="resume-job">
          <header><div><h3>Freelance Web Designer &amp; Developer</h3><p>Independent · Remote</p></div><span>2024</span></header>
          <ul><li>Designed and shipped e-commerce sites for two small retail clients — a model-kit / collectibles store and a cosmetics &amp; body-care brand — in Figma, Webflow, and Squarespace, from visual design through launch.</li></ul>
        </article>
      </div>
    </section>

    <section className="resume-section resume-education" aria-labelledby="education-title">
      <h2 id="education-title">Education &amp; Professional Development</h2>
      <div className="resume-jobs">
        <article className="resume-job">
          <header><div><h3>CS50x: Introduction to Computer Science</h3><p>Harvard University · edX</p></div><span>Completed 2026</span></header>
          <ul><li>Algorithms, data structures, and computer-science fundamentals in C, Python, SQL, and JavaScript.</li></ul>
        </article>
        <article className="resume-job">
          <header><div><h3>JavaScript Algorithms &amp; Data Structures</h3><p>freeCodeCamp</p></div><span>Self-paced</span></header>
        </article>
        <article className="resume-job">
          <header><div><h3>High School Diploma</h3><p>Chatham-Kent Secondary School</p></div><span>2019</span></header>
        </article>
      </div>
    </section>
  </article>;
}
