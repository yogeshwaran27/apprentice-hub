"use client";

import { useEffect, useState } from "react";
export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const totalDuration = 3500;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, Math.max(0, elapsed / totalDuration));
      const eased = 1 - Math.pow(1 - t, 5);
      const pct = Math.min(100, Math.floor(eased * 100));
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setIsFadingOut(true), 400);
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-background transition-opacity duration-1000 ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className="absolute bottom-0 left-0 w-full bg-primary/20 transition-all duration-[50ms] ease-linear"
        style={{ height: `${progress}%` }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden pb-[5vh]">
        <span className="font-display text-[22vw] sm:text-[25vw] font-extrabold leading-none tracking-tighter text-foreground opacity-[0.04] tabular-nums whitespace-nowrap">
          {progress.toString().padStart(1, "0")}
          <span className="text-[14vw] sm:text-[18vw]">%</span>
        </span>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6 animate-fade-in">
        <div className="relative flex items-center justify-center rounded-3xl bg-primary shadow-[0_18px_60px_rgba(0,0,0,0.20)] border border-primary/20 px-8 py-5">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/15 via-transparent to-accent/20 opacity-80 blur-md" />
          <img
            src="/apprentice_hub_logo.svg"
            alt="ApprenticeHub"
            className="relative h-16 w-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
