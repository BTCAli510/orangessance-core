"use client";

import { useEffect, useRef } from "react";
import Nav from "./components/Nav";
import Marquee from "./components/Marquee";

export default function Home() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Nav />

      {/* ── HERO ── */}
      <section
        style={{
          paddingTop: "160px",
          paddingBottom: "100px",
          paddingLeft: "clamp(24px, 4vw, 48px)",
          paddingRight: "clamp(24px, 4vw, 48px)",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p
          className="fade-up-1"
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "var(--orange)",
            marginBottom: "28px",
          }}
        >
          Oakland · Onchain · Everywhere
        </p>

        <h1
          className="fade-up-2"
          style={{
            fontFamily: "var(--font-inter-tight)",
            fontWeight: 900,
            fontSize: "clamp(52px, 7vw, 96px)",
            lineHeight: 0.96,
            letterSpacing: "-3px",
            maxWidth: "900px",
            color: "var(--text)",
          }}
        >
          Where Urban{" "}
          <span style={{ color: "var(--orange)" }}>Culture</span>
          <br />
          Meets{" "}
          <span style={{ color: "var(--blue)" }}>Decentralization</span>
        </h1>

        <p
          className="fade-up-3"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "20px",
            fontWeight: 300,
            color: "var(--muted)",
            maxWidth: "560px",
            marginTop: "36px",
            lineHeight: 1.6,
          }}
        >
          Narrative and culture are infrastructure. We build the invisible layer
          that moves people — from the streets of Oakland to the onchain
          frontier.
        </p>

        <div
          className="fade-up-4"
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "48px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#thesis"
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              background: "var(--text)",
              color: "#fff",
              padding: "16px 32px",
              textDecoration: "none",
              transition: "background 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.background = "var(--blue)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.background = "var(--text)")
            }
          >
            Our Thesis
          </a>
          <a
            href="https://basebloc.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "var(--muted)",
              textDecoration: "none",
              padding: "16px 0",
              borderBottom: "1px solid var(--border)",
              transition: "color 0.2s",
            }}
          >
            Explore BASEbloc.app →
          </a>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── THESIS ── */}
      <section
        id="thesis"
        className="reveal"
        style={{
          padding: "120px clamp(24px, 4vw, 48px)",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "80px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "var(--orange)",
              marginBottom: "20px",
            }}
          >
            The Thesis
          </p>
          <h2
            style={{
              fontFamily: "var(--font-inter-tight)",
              fontWeight: 900,
              fontSize: "clamp(36px, 4vw, 56px)",
              lineHeight: 1.0,
              letterSpacing: "-2px",
            }}
          >
            Narrative is the Rails
          </h2>
        </div>
        <div>
          <p
            style={{
              fontSize: "22px",
              fontWeight: 500,
              lineHeight: 1.5,
              marginBottom: "28px",
              borderLeft: "3px solid var(--orange)",
              paddingLeft: "24px",
            }}
          >
            "Culture without tech can't scale. Tech without culture can't
            onboard everyone."
          </p>
          <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: 1.8 }}>
            Web3 has invested billions in building the technical rails for
            decentralization — but without narrative and culture, adoption
            stalls. Orangessance exists to fill that gap: building the invisible
            layer of infrastructure that moves people.
            <br />
            <br />
            We're not first to market with new technology. We're first to market
            in solving the problem technology is making worse: too much noise,
            not enough signal.
          </p>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />

      {/* ── PILLARS ── */}
      <section
        style={{ background: "var(--light)", padding: "120px clamp(24px, 4vw, 48px)" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: "64px" }}>
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "var(--blue)",
                marginBottom: "16px",
              }}
            >
              What We Build
            </p>
            <h2
              style={{
                fontFamily: "var(--font-inter-tight)",
                fontWeight: 900,
                fontSize: "clamp(32px, 3.5vw, 48px)",
                letterSpacing: "-2px",
                lineHeight: 1.05,
              }}
            >
              Three Forces.
              <br />
              One Movement.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2px",
            }}
          >
            {[
              {
                num: "01",
                title: "Institutions",
                body: "Inside tracks to Coinbase and Base — the most important rails for crypto mass adoption. We operate where capital infrastructure and community trust converge.",
                tag: "BASEbloc.org · BASEbloc.app",
              },
              {
                num: "02",
                title: "Culture",
                body: "A credible cultural partner in Beast Mode with the power to move markets and minds. Long-standing trust, shared values, and lived experience in Oakland's most underrepresented communities.",
                tag: "Beast Mode · Fam 1st · Oakland XChange",
              },
              {
                num: "03",
                title: "Community",
                body: "Onchain coordination infrastructure that turns participation into identity, ownership, and governance. Every activation builds the compounding identity layer — coalition by coalition, city by city.",
                tag: "BASE Oakland bloc · Coalition 001",
              },
            ].map((p) => (
              <div
                key={p.num}
                className="reveal"
                style={{
                  background: "#fff",
                  padding: "48px 40px",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.transform =
                    "translateY(-4px)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)")
                }
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter-tight)",
                    fontWeight: 900,
                    fontSize: "80px",
                    color: "var(--border)",
                    lineHeight: 1,
                    marginBottom: "24px",
                    letterSpacing: "-4px",
                  }}
                >
                  {p.num}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-inter-tight)",
                    fontWeight: 800,
                    fontSize: "24px",
                    letterSpacing: "-0.5px",
                    marginBottom: "16px",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "15px",
                    lineHeight: 1.75,
                  }}
                >
                  {p.body}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    color: "var(--orange)",
                    marginTop: "28px",
                    display: "inline-block",
                  }}
                >
                  {p.tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUMMIT ── */}
      <section
        id="summit"
        style={{ padding: "120px clamp(24px, 4vw, 48px)", maxWidth: "1200px", margin: "0 auto" }}
      >
        <div
          className="reveal"
          style={{
            background: "var(--text)",
            padding: "clamp(48px, 6vw, 80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "80px",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "var(--orange)",
                marginBottom: "20px",
              }}
            >
              Flagship Event
            </p>
            <h2
              style={{
                fontFamily: "var(--font-inter-tight)",
                fontWeight: 900,
                fontSize: "clamp(32px, 3.5vw, 52px)",
                letterSpacing: "-2px",
                lineHeight: 1.0,
                color: "#fff",
                marginBottom: "24px",
              }}
            >
              MY CITY OUR MUSIC Summit
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "15px",
                lineHeight: 1.75,
              }}
            >
              The public reveal of BASE Oakland bloc. Produced by HipHopTV and
              Citiesabc at Henry J. Kaiser Center for the Arts. BASEbloc.app
              handles every activation onchain.
            </p>
            <a
              href="mailto:andre@orangessance.com"
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                background: "var(--orange)",
                color: "var(--text)",
                padding: "16px 32px",
                textDecoration: "none",
                marginTop: "40px",
                display: "inline-block",
                fontWeight: 700,
              }}
            >
              Request Access →
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {[
              ["Date", "May 23, 2026"],
              ["Venue", "Henry J. Kaiser Center, Oakland"],
              ["Produced By", "HipHopTV × Citiesabc"],
              ["Infrastructure", "BASEbloc.app — fully onchain"],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  borderLeft: "2px solid var(--orange)",
                  paddingLeft: "20px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "6px",
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter-tight)",
                    fontWeight: 800,
                    fontSize: "18px",
                    color: "#fff",
                    letterSpacing: "-0.3px",
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NOW ── */}
      <section
        style={{
          background: "var(--light)",
          padding: "120px clamp(24px, 4vw, 48px)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <div className="reveal">
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "var(--blue)",
                marginBottom: "16px",
              }}
            >
              Why Now
            </p>
            <h2
              style={{
                fontFamily: "var(--font-inter-tight)",
                fontWeight: 900,
                fontSize: "clamp(32px, 3.5vw, 48px)",
                letterSpacing: "-2px",
                lineHeight: 1.05,
                marginBottom: "24px",
              }}
            >
              The Moment
              <br />
              Is Here.
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "16px",
                lineHeight: 1.8,
              }}
            >
              The SEC has clarified that memecoins are not securities. Coinbase
              is in the S&P 500. Base has 1 billion people as its onboarding
              target. The cultural rails are the missing piece — and we're
              building them.
              <br />
              <br />
              You cannot burn a blockchain. This is infrastructure for the long
              game.
            </p>
          </div>

          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2px",
            }}
          >
            {[
              { n: "1B", label: "Base's onboarding target" },
              { n: "001", label: "Oakland — Coalition 001" },
              { n: "#1", label: "$BASE on Zora by volume" },
              { n: "∞", label: "Cities. Coalitions. Always." },
            ].map((s) => (
              <div
                key={s.label}
                style={{ background: "#fff", padding: "36px 32px" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter-tight)",
                    fontWeight: 900,
                    fontSize: "40px",
                    letterSpacing: "-2px",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ color: "var(--orange)" }}>{s.n}</span>
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    color: "var(--muted)",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "120px clamp(24px, 4vw, 48px)",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          className="reveal"
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "var(--orange)",
            marginBottom: "24px",
          }}
        >
          Power to the People. Onchain.
        </p>
        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-inter-tight)",
            fontWeight: 900,
            fontSize: "clamp(44px, 6vw, 80px)",
            letterSpacing: "-3px",
            lineHeight: 1.0,
            marginBottom: "24px",
          }}
        >
          Ready to Build
          <br />
          With Us?
        </h2>
        <p
          className="reveal"
          style={{
            color: "var(--muted)",
            fontSize: "18px",
            maxWidth: "480px",
            margin: "0 auto 48px",
            fontWeight: 300,
          }}
        >
          Culture without tech can't scale. Tech without culture can't onboard
          everyone. This is where they meet.
        </p>
        <div
          className="reveal"
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:andre@orangessance.com"
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              background: "var(--text)",
              color: "#fff",
              padding: "16px 32px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Get in Touch
          </a>
          <a
            href="https://basebloc.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "var(--muted)",
              textDecoration: "none",
              padding: "16px 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            Explore BASEbloc.app →
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "48px clamp(24px, 4vw, 48px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter-tight)",
            fontWeight: 900,
            fontSize: "16px",
            letterSpacing: "-0.5px",
          }}
        >
          Orange<span style={{ color: "var(--orange)" }}>ssance</span>
        </p>
        <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
          {[
            ["BASEbloc.org", "https://basebloc.org"],
            ["BASEbloc.app", "https://basebloc.app"],
            ["BASEoak.org", "https://baseoak.org"],
            ["BASEiq.app", "https://baseiq.app"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                color: "var(--muted)",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}
        </div>
        <p
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "10px",
            color: "var(--muted)",
          }}
        >
          © 2026 Orangessance. Oakland, CA
        </p>
      </footer>
    </main>
  );
}
