"use client";

import { useEffect, useState } from "react";
import "./PageLoader.css";

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
    <div className={`page-loader ${isFadingOut ? "fade-out" : ""}`}>
      
      <div
        className="progress-bg"
        style={{ height: `${progress}%` }}
      />

      <div className="grid-overlay" />

      <div className="big-percentage-wrapper">
        <span className="big-percentage">
          {progress}
          <span>%</span>
        </span>
      </div>

      <div className="loader-content">
        <div className="logo-box">
          <img
            src="/apprentice_hub_logo.svg"
            alt="ApprenticeHub"
            className="logo-img"
          />
        </div>
      </div>
    </div>
  );
}