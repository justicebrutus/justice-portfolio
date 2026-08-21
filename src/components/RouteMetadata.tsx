import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const metadata: Record<string, { title: string; description: string }> = {
  "/": { title: "Justice Brutus — Frontend Developer & UI Engineer", description: "React and TypeScript product engineering focused on clear workflows, accessible interaction, and responsive systems." },
  "/work/meridian": { title: "Meridian Capital case study — Justice Brutus", description: "A 27-route institutional website and five-workspace portfolio operating system built as one coherent product." },
  "/work/carryover": { title: "Carryover case study — Justice Brutus", description: "A role-aware plant shift-continuity product built around preparation, verification, ownership, evidence, and closure." },
  "/resume": { title: "Résumé — Justice Brutus", description: "Frontend development and UI engineering work, technical capabilities, and operating experience." },
};

export default function RouteMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const current = metadata[pathname] ?? { title: "Page not found — Justice Brutus", description: "The requested portfolio page could not be found." };
    document.title = current.title;
    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = current.description;
  }, [pathname]);
  return null;
}
