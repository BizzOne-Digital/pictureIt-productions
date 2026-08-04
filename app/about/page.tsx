import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { values, milestones } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Picture It Productions",
  description: "Learn about Picture It Productions — Toronto's luxury 360 video booth and mirror booth experience company.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our Story" title="Driven by a Passion for" gold="Captured Joy" />

      {/* STORY */}
      <section style={{ padding: "40px 5% 100px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 80, alignItems: "center" }} className="about-grid">
          <Reveal style={{ position: "relative" }}>
            <img src="/service-wedding.png" alt="About" style={{ width: "100%", height: 480, objectFit: "cover", borderRadius: 8 }} />
            <div style={{ position: "absolute", bottom: -24, right: -24, background: "linear-gradient(135deg, #C9A84C, #E8C97A)", borderRadius: 8, padding: "24px 32px", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "#0A0A0A", fontFamily: "Playfair Display, serif" }}>500+</div>
              <div style={{ fontSize: "0.7rem", color: "#0A0A0A", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>Luxury Events</div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p style={{ color: "var(--text-body)", lineHeight: 1.9, marginBottom: 20 }}>Founded with a vision to revolutionize the event photography industry, Picture It Productions blends cutting-edge technology with high-end luxury service. We believe every event tells a story.</p>
            <p style={{ color: "var(--text-body)", lineHeight: 1.9, marginBottom: 36 }}>From intimate weddings to massive corporate galas, we bring the same level of meticulous detail and professional energy to every booking. We are not just providing a booth — we are providing a centerpiece of entertainment.</p>
            <div style={{ display: "flex", gap: 48, marginBottom: 36, flexWrap: "wrap" }}>
              {[{ num: "500+", label: "Luxury Events" }, { num: "5 Star", label: "Rated" }, { num: "4+", label: "Years Experience" }, { num: "GTA", label: "Toronto & Area" }].map(s => (
                <div key={s.num}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#C9A84C", fontFamily: "Playfair Display, serif" }}>{s.num}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <a href="https://form.jotform.com/261114232818046" target="_blank" className="btn-gold">Book Your Event</a>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "100px 5%", background: "var(--bg-soft)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ color: "#C9A84C", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>What Drives Us</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: 16, color: "var(--text)" }}>Our Core <span className="gold-gradient">Values</span></h2>
            <div className="section-divider" />
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 100} className="service-card" style={{ textAlign: "center" }}>
                <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 600, marginBottom: 12, color: "var(--text)" }}>{v.title}</h3>
                <p style={{ color: "var(--text-body)", fontSize: "0.85rem", lineHeight: 1.7 }}>{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section style={{ padding: "100px 5%", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ color: "#C9A84C", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Our Journey</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: 16, color: "var(--text)" }}>Milestones Along the <span className="gold-gradient">Way</span></h2>
            <div className="section-divider" />
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32 }}>
            {milestones.map((m, i) => (
              <Reveal key={i} delay={i * 100} style={{ textAlign: "center" }}>
                <div className="step-number">{m.num}</div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>{m.title}</h3>
                <p style={{ color: "var(--text-body)", fontSize: "0.875rem", lineHeight: 1.7 }}>{m.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 5%", background: "linear-gradient(135deg, #0A0A0A 0%, #1A1200 50%, #0A0A0A 100%)", borderTop: "1px solid #2A1A00", borderBottom: "1px solid #2A1A00" }}>
        <Reveal style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#C9A84C", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>Join Our Story</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: 20, color: "#FFF" }}>Let&#39;s Create Your <span className="gold-gradient">Next Memory</span></h2>
          <p style={{ color: "#CCC", maxWidth: 500, margin: "0 auto 40px" }}>Become part of the 500+ luxury events we&#39;ve had the honor of capturing.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://form.jotform.com/261114232818046" target="_blank" className="btn-gold">Book Now</a>
            <Link href="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
