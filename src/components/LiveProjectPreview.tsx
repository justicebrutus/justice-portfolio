import { useEffect, useRef, useState, type CSSProperties } from "react";

interface LiveProjectPreviewProps {
  href: string;
  label: string;
  pathLabel: string;
  posterSrc?: string;
  posterAlt?: string;
  previewHeight?: number;
  previewWidth?: number;
}

type PreviewStyle = CSSProperties & { "--preview-scale": number };

export default function LiveProjectPreview({
  href,
  label,
  pathLabel,
  posterSrc,
  posterAlt = "",
  previewHeight = 820,
  previewWidth = 1440,
}: LiveProjectPreviewProps) {
  const viewportRef = useRef<HTMLSpanElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateScale = () => setScale(viewport.clientWidth / previewWidth);
    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [previewWidth]);

  const style: PreviewStyle = {
    "--preview-scale": scale,
    aspectRatio: `${previewWidth} / ${previewHeight}`,
  };

  return (
    <a className="live-project-preview" href={href} target="_blank" rel="noreferrer" aria-label={`${label} — open live project`}>
      <span className="browser-frame-bar" aria-hidden="true"><i /><i /><i /><b>{pathLabel}</b></span>
      <span className="live-project-viewport" ref={viewportRef} style={style}>
        {posterSrc && <img className="live-project-poster" src={posterSrc} alt={posterAlt} width={previewWidth} height={previewHeight} />}
        <iframe src={href} title={`${label} live preview`} width={previewWidth} height={previewHeight} loading="lazy" tabIndex={-1} aria-hidden="true" />
        <span className="live-project-action" aria-hidden="true">Open live project ↗</span>
      </span>
    </a>
  );
}
