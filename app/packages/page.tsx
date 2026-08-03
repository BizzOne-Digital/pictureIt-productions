import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IconCamera, IconCalendar, IconSparkle } from "@/components/icons";
import { packages, addOns, packageIncludes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Packages & Pricing | Picture It Productions",
  description: "Photobooth and 360 video booth packages for weddings, corporate events, and celebrations across Toronto & GTA.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero eyebrow="Choose Your Experience" title="Packages Made for Every" gold="Celebration" subtitle="Premium photobooth experiences designed to capture memories that last a lifetime." />

      {/* EVERY PACKAGE INCLUDES */}
      <section style={{ padding: "0 5% 40px", background: "#0A0A0A" }}>
        <Reveal style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center", padding: "24px 32px", background: "#111", border: "1px solid #1A1A1A", borderRadius: 8 }}>
          {packageIncludes.map((p, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 8, color: "#AAA", fontSize: "0.85rem" }}>
              {p.icon}{p.text}
            </span>
          ))}
        </Reveal>
      </section>

      <section style={{ padding: "40px 5% 60px", background: "#0A0A0A" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "stretch" }}>
            {packages.map((p, i) => (
              <Reveal key={i} delay={i * 100} className={`package-card ${p.featured ? "featured" : ""}`} style={{ padding: 0, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                {p.featured && (
                  <div style={{ position: "absolute", top: 16, left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", alignItems: "center", gap: 6, background: "linear-gradient(135deg, #C9A84C, #E8C97A)", color: "#0A0A0A", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 999 }}>
                    <IconSparkle /> Most Popular
                  </div>
                )}
                <div style={{ position: "relative", height: 200, flexShrink: 0 }}>
                  <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.9) 100%)" }} />
                  <div style={{ position: "absolute", bottom: -28, left: "50%", transform: "translateX(-50%)", width: 56, height: 56, borderRadius: "50%", background: "#0A0A0A", border: "1px solid #C9A84C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ transform: "scale(0.8)" }}>{p.icon}</span>
                  </div>
                </div>
                <div style={{ padding: "40px 32px 32px", textAlign: "center", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", fontWeight: 700, color: p.featured ? "#C9A84C" : "#FFF", marginBottom: 6 }}>{p.name}</h3>
                  <p style={{ color: "#777", fontSize: "0.8rem", marginBottom: 20 }}>{p.label}</p>
                  <div style={{ marginBottom: 28 }}>
                    <p style={{ color: "#666", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>Starting From</p>
                    <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "#C9A84C", fontFamily: "Playfair Display, serif" }}>{p.price}</span>
                  </div>
                  <ul style={{ listStyle: "none", marginBottom: 32, textAlign: "left", flex: 1 }}>
                    {p.features.map((f, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14, color: "#AAA", fontSize: "0.875rem", lineHeight: 1.4 }}>
                        <span style={{ flexShrink: 0, display: "flex" }}>{f.icon}</span>{f.text}
                      </li>
                    ))}
                  </ul>
                  <a href={p.link} target="_blank" className={p.featured ? "btn-gold" : "btn-outline"} style={{ display: "block", textAlign: "center", marginTop: "auto" }}>{p.cta}</a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} style={{ marginTop: 48, padding: "32px 40px", background: "#111", borderRadius: 8, border: "1px solid #1A1A1A", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <span style={{ transform: "scale(1.1)" }}><IconCamera /></span>
              <div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.25rem", fontWeight: 700, marginBottom: 6 }}>Need Something Completely <span className="gold-gradient">Custom?</span></h3>
                <p style={{ color: "#888", fontSize: "0.875rem" }}>Every event is unique. Contact us for a personalized photobooth package tailored to your needs.</p>
              </div>
            </div>
            <a href="https://form.jotform.com/261114232818046" target="_blank" className="btn-gold" style={{ display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}>
              <IconCalendar /> Build Your Custom Package
            </a>
          </Reveal>

          <Reveal delay={400} style={{ marginTop: 56, textAlign: "center" }}>
            <p style={{ color: "#C9A84C", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24 }}>Popular Add-Ons</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              {addOns.map((a, i) => (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: 8, border: "1px solid #2A2A2A", borderRadius: 999, padding: "10px 20px", fontSize: "0.8rem", color: "#AAA" }}>
                  {a.icon}{a.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
