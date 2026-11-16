import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type ViewportVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  label: string;
};

export function ViewportVideo({
  src,
  poster,
  className,
  label,
}: ViewportVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (
      !video ||
      prefersReducedMotion ||
      typeof IntersectionObserver === "undefined"
    ) {
      return;
    }

    let isInView = false;
    const syncPlayback = () => {
      if (isInView && document.visibilityState !== "hidden") {
        // Native controls remain available if the browser blocks autoplay.
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        isInView = entry.isIntersecting && entry.intersectionRatio >= 0.2;
        syncPlayback();
      },
      { threshold: 0.2 },
    );

    observer.observe(video);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, [src, prefersReducedMotion]);

  return (
    <video
      key={src}
      ref={videoRef}
      className={className}
      poster={poster}
      controls
      muted
      playsInline
      loop
      preload="none"
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
