import Reveal from "@/components/Reveal";

export default function PageHero({ eyebrow, title, gold, subtitle, image }: { eyebrow: string; title: string; gold: string; subtitle?: string; image: string }) {
  return (
    <section className="page-hero" style={{ position: "relative", overflow: "hidden", background: "#0A0A0A" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.6) 55%, rgba(10,10,10,0.85) 100%)" }} />
      </div>
      <Reveal style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", padding: "180px 5% 100px", textAlign: "center" }}>
        <p style={{ color: "#C9A84C", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>{eyebrow}</p>
        <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, marginBottom: 16, color: "#FFF" }}>
          {title} <span className="gold-gradient">{gold}</span>
        </h1>
        <div className="section-divider" />
        {subtitle && <p style={{ color: "#DDD", maxWidth: 560, margin: "16px auto 0", lineHeight: 1.8 }}>{subtitle}</p>}
      </Reveal>
    </section>
  );
}
