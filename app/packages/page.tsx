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

      {/* INTRO + COLLAGE */}
      <section style={{ padding: "40px 5% 60px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="about-grid">
          <Reveal>
            <p style={{ color: "var(--text-body)", lineHeight: 1.9, marginBottom: 20 }}>Every package includes a professional on-site attendant, unlimited digital sharing, and a custom event template — no hidden fees, ever.</p>
            <p style={{ color: "var(--text-body)", lineHeight: 1.9 }}>Whether it&#39;s an intimate gathering or a full-scale corporate gala, there&#39;s a Picture It experience built for your celebration.</p>
          </Reveal>
          <Reveal delay={150}>
            <img src="/packages-collage.png" alt="Photobooth experiences" style={{ width: "100%", borderRadius: 8, border: "1px solid var(--border)" }} />
          </Reveal>
        </div>
      </section>

      {/* EVERY PACKAGE INCLUDES */}
      <section style={{ padding: "0 5% 40px", background: "var(--bg)" }}>
        <Reveal style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center", padding: "24px 32px", background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: 8 }}>
          {packageIncludes.map((p, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-body)", fontSize: "0.85rem" }}>
              {p.icon}{p.text}
            </span>
          ))}
        </Reveal>
      </section>

      <section style={{ padding: "40px 5% 60px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "stretch" }}>
            {packages.map((p, i) => (
              <Reveal key={i} delay={i * 100} className={`package-card ${p.featured ? "featured" : ""}`} style={{ height: "100%", display: "flex", flexDirection: "column", textAlign: "center" }}>
                {p.featured && (
                  <div style={{ position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", alignItems: "center", gap: 6, background: "linear-gradient(135deg, #C9A84C, #E8C97A)", color: "#0A0A0A", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 16px", borderRadius: "0 0 8px 8px" }}>
                    <IconSparkle /> Most Popular
                  </div>
                )}
                <div style={{ width: 56, height: 56, borderRadius: "50%", border: "1px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", margin: "8px auto 20px" }}>
                  <span style={{ transform: "scale(0.8)" }}>{p.icon}</span>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>{p.label}</p>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", fontWeight: 700, color: p.featured ? "#C9A84C" : "var(--text)", marginBottom: 4 }}>{p.name}</h3>
                <div style={{ margin: "20px 0", paddingBottom: 20, borderBottom: "1px solid var(--border)" }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "#C9A84C", fontFamily: "Playfair Display, serif" }}>{p.price}</span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginLeft: 8 }}>/ {p.duration}</span>
                </div>
                <ul style={{ listStyle: "none", marginBottom: 32, textAlign: "left", flex: 1 }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14, color: "var(--text-body)", fontSize: "0.875rem", lineHeight: 1.4 }}>
                      <span style={{ flexShrink: 0, display: "flex" }}>{f.icon}</span>{f.text}
                    </li>
                  ))}
                </ul>
                <a href={p.link} target="_blank" className={p.featured ? "btn-gold" : "btn-outline"} style={{ display: "block", textAlign: "center", marginTop: "auto" }}>{p.cta}</a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} style={{ marginTop: 48, padding: "32px 40px", background: "var(--bg-soft)", borderRadius: 8, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <span style={{ transform: "scale(1.1)" }}><IconCamera /></span>
              <div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.25rem", fontWeight: 700, marginBottom: 6, color: "var(--text)" }}>Need Something Completely <span className="gold-gradient">Custom?</span></h3>
                <p style={{ color: "var(--text-body)", fontSize: "0.875rem" }}>Every event is unique. Contact us for a personalized photobooth package tailored to your needs.</p>
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
                <span key={i} style={{ display: "flex", alignItems: "center", gap: 8, border: "1px solid var(--border)", borderRadius: 999, padding: "10px 20px", fontSize: "0.8rem", color: "var(--text-body)" }}>
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
