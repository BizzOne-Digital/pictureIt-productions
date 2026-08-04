import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IconCheck } from "@/components/icons";
import { services, whyChooseUs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | Picture It Productions",
  description: "Digital Photobooth, 360 Video Booth, corporate events, and wedding photo experiences across Toronto & GTA.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="What We Offer" title="Elevating Every" gold="Occasion" subtitle="From intimate weddings to massive corporate galas, we bring meticulous detail and professional energy to every booking." />

      {/* SERVICES GRID */}
      <section style={{ padding: "40px 5% 100px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 100} className="service-card" style={{ padding: 0, overflow: "hidden" }}>
              <img src={s.image} alt={s.title} style={{ width: "100%", height: 180, objectFit: "cover" }} />
              <div style={{ padding: 28 }}>
                <div style={{ marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: 12, color: "var(--text)" }}>{s.title}</h3>
                <p style={{ color: "var(--text-body)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
                <ul style={{ listStyle: "none" }}>
                  {s.features.map((f, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10, color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                      <span style={{ flexShrink: 0, marginTop: 1 }}><IconCheck /></span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: "100px 5%", background: "var(--bg-soft)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ color: "#C9A84C", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Why Book With Us</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: 16, color: "var(--text)" }}>The Picture It <span className="gold-gradient">Difference</span></h2>
            <div className="section-divider" />
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {whyChooseUs.map((w, i) => (
              <Reveal key={i} delay={i * 100} className="service-card" style={{ textAlign: "center" }}>
                <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>{w.icon}</div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.05rem", fontWeight: 600, marginBottom: 12, color: "var(--text)" }}>{w.title}</h3>
                <p style={{ color: "var(--text-body)", fontSize: "0.85rem", lineHeight: 1.7 }}>{w.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORY SPLIT */}
      <section style={{ padding: "100px 5%", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 80, alignItems: "center" }} className="about-grid">
          <Reveal>
            <img src="/about-story.png" alt="360 photobooth setup" style={{ width: "100%", height: 460, objectFit: "cover", borderRadius: 8, border: "1px solid var(--border)" }} />
          </Reveal>
          <Reveal delay={150}>
            <p style={{ color: "#C9A84C", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Every Detail, Handled</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, marginBottom: 24, lineHeight: 1.2, color: "var(--text)" }}>A Centerpiece, Not Just a <span className="gold-gradient">Booth</span></h2>
            <p style={{ color: "var(--text-body)", lineHeight: 1.9, marginBottom: 20 }}>Whatever your celebration calls for — a sleek digital photobooth, a cinematic 360 video experience, or a fully branded corporate activation — our team designs every detail around your event.</p>
            <p style={{ color: "var(--text-body)", lineHeight: 1.9, marginBottom: 36 }}>From custom overlays and premium props to instant sharing and a dedicated attendant, we make sure your guests are entertained and your memories are captured in style.</p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/packages" className="btn-gold">View Packages</Link>
              <Link href="/contact" className="btn-outline">Get a Custom Quote</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 5%", background: "linear-gradient(135deg, #0A0A0A 0%, #1A1200 50%, #0A0A0A 100%)", borderTop: "1px solid #2A1A00", borderBottom: "1px solid #2A1A00" }}>
        <Reveal style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#C9A84C", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>Ready When You Are</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: 20, color: "#FFF" }}>Let&#39;s Plan Your <span className="gold-gradient">Next Event</span></h2>
          <p style={{ color: "#CCC", maxWidth: 500, margin: "0 auto 40px" }}>Tell us about your celebration and we&#39;ll help you choose the perfect experience.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://form.jotform.com/261114232818046" target="_blank" className="btn-gold">Book Now</a>
            <Link href="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
