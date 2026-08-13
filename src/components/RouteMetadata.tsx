import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const metadata: Record<string, { title: string; description: string }> = {
  "/": { title: "Justice Brutus — Product-focused Front-End Engineer", description: "React and TypeScript product engineering focused on clear workflows, accessible interaction, and responsive systems." },
  "/work/meridian": { title: "Meridian Capital case study — Justice Brutus", description: "A 27-route institutional website and five-workspace portfolio operating system built as one coherent product." },
  "/resume": { title: "Résumé — Justice Brutus", description: "Product-focused front-end engineering work, technical capabilities, and operating experience." },
};
export default function RouteMetadata() { const { pathname } = useLocation(); useEffect(() => { const current = metadata[pathname] ?? { title: "Page not found — Justice Brutus", description: "The requested portfolio page could not be found." }; document.title = current.title; let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]'); if (!tag) { tag = document.createElement("meta"); tag.name = "description"; document.head.appendChild(tag); } tag.content = current.description; }, [pathname]); return null; }
