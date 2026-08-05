import Reveal from "@/components/Reveal";

export default function PageHero({ eyebrow, title, gold, subtitle, image }: { eyebrow: string; title: string; gold: string; subtitle?: string; image: string }) {
  return (
    <section style={{ padding: "120px 5% 60px", background: "var(--bg)", textAlign: "center" }}>
      <Reveal>
        <p style={{ color: "#C9A84C", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>{eyebrow}</p>
        <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, marginBottom: 16, color: "var(--text)" }}>
          {title} <span className="gold-gradient">{gold}</span>
        </h1>
        <div className="section-divider" />
        {subtitle && <p style={{ color: "var(--text-body)", maxWidth: 560, margin: "16px auto 0", lineHeight: 1.8 }}>{subtitle}</p>}
      </Reveal>
      <Reveal delay={150} style={{ maxWidth: 1100, margin: "40px auto 0" }}>
        <img src={image} alt={title} className="page-banner-img" style={{ width: "100%", height: 360, objectFit: "cover", borderRadius: 12, border: "1px solid var(--border)", boxShadow: "0 8px 30px rgba(20,18,10,0.08)" }} />
      </Reveal>
    </section>
  );
}
