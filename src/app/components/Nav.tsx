"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px clamp(24px, 4vw, 48px)",
        background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #E8E8E4" : "1px solid transparent",
        transition: "border-color 0.3s, background 0.3s",
      }}
    >
      <a
        href="/"
        style={{
          fontFamily: "var(--font-inter-tight)",
          fontWeight: 900,
          fontSize: "18px",
          letterSpacing: "-0.5px",
          color: "#0A0A0A",
          textDecoration: "none",
        }}
      >
        Orange<span style={{ color: "var(--orange)" }}>ssance</span>
      </a>

      <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
        {[
          ["Thesis", "#thesis"],
          ["Summit", "#summit"],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#666",
              textDecoration: "none",
            }}
          >
            {label}
          </a>
        ))}
        <a
          href="mailto:andre@orangessance.com"
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            background: "#0A0A0A",
            color: "#fff",
            padding: "10px 20px",
            textDecoration: "none",
          }}
        >
          Connect
        </a>
      </div>
    </nav>
  );
}
