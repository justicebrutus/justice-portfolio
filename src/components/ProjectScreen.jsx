// ProjectScreen.jsx — a browser-framed screen per project with three states:
// poster (default) → video (your 15-30s clip) → live (the real app embedded).
import { useState } from "react";

export default function ProjectScreen({ project }) {
  const [mode, setMode] = useState("poster");   // poster | video | live
  const [videoMissing, setVideoMissing] = useState(false);
  const host = project.url.replace(/^https?:\/\//, "");

  return (
    <div>
      <div className="rounded-2xl border border-line bg-card overflow-hidden shadow-[0_30px_60px_-40px_rgba(20,19,24,0.35)]">
        {/* browser bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-line bg-paper">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 flex-1 truncate font-ui text-[12px] text-mute">{host}</span>
          <a href={project.url} target="_blank" rel="noopener noreferrer"
            className="font-ui text-[12px] font-semibold text-accent hover:text-accentink">Open ↗</a>
        </div>

        {/* screen */}
        <div className="relative aspect-[16/10] bg-ink/5">
          {mode === "poster" && (
            <button onClick={() => { setMode("video"); }} className="group absolute inset-0 w-full h-full">
              <img src={project.poster} alt={`${project.title} preview`} className="w-full h-full object-cover" />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="grid place-items-center h-16 w-16 rounded-full bg-white/95 text-ink shadow-lg group-hover:scale-105 transition-transform">
                  <span className="ml-1 text-[22px]">▶</span>
                </span>
                <span className="font-ui text-[13px] font-semibold text-white">Watch the 30-second tour</span>
              </span>
            </button>
          )}

          {mode === "video" && (
            videoMissing ? (
              <div className="absolute inset-0 grid place-items-center text-center px-6">
                <div>
                  <p className="font-ui text-[14px] text-mute">Video coming soon — meanwhile:</p>
                  <button onClick={() => setMode("live")} className="mt-2 rounded-full bg-accent text-white font-ui text-[13px] font-semibold px-4 py-2">⚡ Try it live</button>
                </div>
              </div>
            ) : (
              <video src={project.video} poster={project.poster} controls autoPlay playsInline
                onError={() => setVideoMissing(true)}
                className="absolute inset-0 w-full h-full object-cover bg-black" />
            )
          )}

          {mode === "live" && (
            <iframe src={project.url} title={`${project.title} — live`} loading="lazy"
              className="absolute inset-0 w-full h-full bg-white" />
          )}
        </div>
      </div>

      {/* controls */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button onClick={() => setMode("video")}
          className={`font-ui text-[13px] font-semibold px-3.5 py-2 rounded-full transition-colors ${mode === "video" ? "bg-accent text-white" : "border border-line text-body hover:border-accent hover:text-accent"}`}>
          ▶ Watch
        </button>
        <button onClick={() => setMode("live")}
          className={`font-ui text-[13px] font-semibold px-3.5 py-2 rounded-full transition-colors ${mode === "live" ? "bg-accent text-white" : "border border-line text-body hover:border-accent hover:text-accent"}`}>
          ⚡ Try it live
        </button>
        {mode !== "poster" && (
          <button onClick={() => setMode("poster")}
            className="font-ui text-[13px] text-mute hover:text-ink px-2 py-2">reset</button>
        )}
        <div className="ml-auto flex items-center gap-4">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer"
              className="font-ui text-[13px] font-semibold text-mute hover:text-ink">View source ↗</a>
          )}
          <a href={project.url} target="_blank" rel="noopener noreferrer"
            className="font-ui text-[13px] font-semibold text-accent hover:text-accentink">Open full app ↗</a>
        </div>
      </div>
    </div>
  );
}
