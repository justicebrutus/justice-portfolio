import { Link } from "react-router-dom";
export default function NotFoundPage() { return <section className="not-found section-shell"><p className="eyebrow">404 · Off the record</p><h1>This route is not part of the portfolio.</h1><p>The page may have moved, or the address may be incomplete.</p><Link className="button button-primary" to="/">Return to selected work</Link></section>; }
