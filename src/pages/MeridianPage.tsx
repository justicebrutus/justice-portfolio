import { MERIDIAN } from "../data/portfolio";

const systemNodes = [
  ["Public narrative", "Thesis pages explain what Meridian believes and why."],
  ["Canonical portfolio", "Twenty-four typed records keep capital and company claims aligned."],
  ["Operating console", "Five workspaces turn the same record into attention, review, and reporting workflows."],
] as const;

export default function MeridianPage() {
  return <article className="case-study">
    <header className="case-hero section-shell"><div className="case-kicker"><span>Selected work / 01</span><span>Independent case study / {MERIDIAN.year}</span></div><h1>Meridian turns an investment thesis into an operating record.</h1><p>{MERIDIAN.problem}</p><div className="button-row"><a className="button button-primary" href={MERIDIAN.liveUrl} target="_blank" rel="noreferrer">Open Meridian ↗</a><a className="button button-secondary" href={`${MERIDIAN.liveUrl}/console`} target="_blank" rel="noreferrer">Open the console ↗</a><a className="text-link" href={MERIDIAN.repoUrl} target="_blank" rel="noreferrer">View source ↗</a></div></header>
    <section className="case-snapshot section-shell" aria-label="Project snapshot"><div><span>Role</span><strong>{MERIDIAN.responsibilities.join(" · ")}</strong></div><div><span>Stack</span><strong>{MERIDIAN.technologies.join(" · ")}</strong></div><div><span>Boundary</span><strong>Fictional product and data; client-side demonstration workspace</strong></div></section>
    <section className="section-shell case-problem" aria-labelledby="problem-title"><div><p className="eyebrow">The problem</p><h2 id="problem-title">Credibility had to survive a change in context.</h2></div><div className="long-copy"><p>A polished public site can explain what a firm believes. It cannot prove the firm knows what requires attention after the investment. A dense console can show the record, but without a coherent public narrative it feels like an isolated dashboard.</p><p>The challenge was to make both surfaces feel authored by the same institution while letting each solve a different job completely.</p></div></section>
    <section className="section-shell system-section" aria-labelledby="system-title"><header className="section-heading"><p className="eyebrow">System map</p><h2 id="system-title">Story becomes record. Record becomes decision.</h2></header><div className="system-map">{systemNodes.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="section-shell evidence-section" aria-labelledby="evidence-title"><header className="section-heading"><p className="eyebrow">Engineering evidence</p><h2 id="evidence-title">The scope is visible in the product.</h2></header><div className="evidence-grid">{MERIDIAN.evidence.map((item) => <article key={item.label}><strong>{item.value}</strong><span>{item.label}</span><p>{item.detail}</p></article>)}</div><p className="evidence-note">Verification: 46 tests across ten files and the production TypeScript/Vite build passed on August 13, 2026.</p></section>
    <section className="section-shell decision-section" aria-labelledby="decision-title"><header className="section-heading"><p className="eyebrow">Selected decisions</p><h2 id="decision-title">The interface follows the operating logic.</h2></header><div className="decision-grid">{MERIDIAN.decisions.map((decision, index) => <article key={decision.title}><span>0{index + 1}</span><h3>{decision.title}</h3><p>{decision.body}</p></article>)}</div></section>
    <section className="section-shell screen-study" aria-labelledby="screens-title">
      <header className="section-heading split-heading">
        <div><p className="eyebrow">Responsive evidence</p><h2 id="screens-title">One system, shown at working scale.</h2></div>
        <p>Each view is framed around the decision it supports. Desktop evidence stays large enough to inspect; mobile is shown at its native proportion instead of stretched into a generic screenshot grid.</p>
      </header>
      <div className="screen-evidence-stack">
        <figure className="evidence-plate evidence-plate-public">
          <div className="evidence-label"><span>01</span><strong>Public narrative</strong><p>A thesis-led public surface establishes the institution before the product asks for trust.</p></div>
          <div className="browser-frame"><div className="browser-frame-bar" aria-hidden="true"><i /><i /><i /><b>meridian-justice12.vercel.app</b></div><div className="screen-crop screen-crop-public"><img src="/projects/meridian-public.png" alt="Meridian public website hero on desktop" width="1440" height="900" /></div></div>
        </figure>
        <figure className="evidence-plate evidence-plate-console">
          <div className="evidence-label"><span>02</span><strong>Operating console</strong><p>The command centre leads with operating pressure, capital context, and the next review—not decorative metrics.</p></div>
          <div className="browser-frame"><div className="browser-frame-bar" aria-hidden="true"><i /><i /><i /><b>meridian-justice12.vercel.app / console</b></div><div className="screen-crop screen-crop-console"><img src="/projects/meridian-overview.png" alt="Meridian portfolio command centre on desktop" width="1440" height="900" /></div></div>
        </figure>
        <figure className="evidence-plate evidence-plate-mobile">
          <div className="evidence-label"><span>03</span><strong>Mobile record</strong><p>Wide ledgers become direct company records, with the same decisions preserved in a touch-first reading order.</p></div>
          <div className="device-stage"><div className="device-frame"><div className="device-speaker" aria-hidden="true" /><img src="/projects/meridian-mobile.png" alt="Meridian companies workspace on a mobile screen" width="390" height="844" /></div><div className="mobile-principle" aria-hidden="true"><span>Desktop</span><i>comparison</i><span>Mobile</span><i>sequence</i></div></div>
        </figure>
      </div>
    </section>
    <section className="section-shell reflection-section" aria-labelledby="reflection-title"><div><p className="eyebrow">Reflection</p><h2 id="reflection-title">A strong demo should make its boundary clear.</h2></div><div><p>{MERIDIAN.reflection}</p><p className="disclosure">{MERIDIAN.disclosure}</p></div></section>
    <footer className="section-shell case-actions"><p className="eyebrow">Explore the work</p><h2>From institutional story to partner decision.</h2><div className="button-row"><a className="button button-primary" href={MERIDIAN.liveUrl} target="_blank" rel="noreferrer">Open Meridian ↗</a><a className="button button-secondary" href={`${MERIDIAN.liveUrl}/console`} target="_blank" rel="noreferrer">Open the console ↗</a><a className="text-link" href={MERIDIAN.repoUrl} target="_blank" rel="noreferrer">View source ↗</a></div></footer>
  </article>;
}
