import Reveal from "@/components/Reveal";

export default function PageHero({ eyebrow, title, gold, subtitle }: { eyebrow: string; title: string; gold: string; subtitle?: string }) {
  return (
    <section style={{ padding: "160px 5% 60px", background: "#0A0A0A", textAlign: "center" }}>
      <Reveal>
        <p style={{ color: "#C9A84C", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>{eyebrow}</p>
        <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, marginBottom: 16 }}>
          {title} <span className="gold-gradient">{gold}</span>
        </h1>
        <div className="section-divider" />
        {subtitle && <p style={{ color: "#888", maxWidth: 560, margin: "16px auto 0", lineHeight: 1.8 }}>{subtitle}</p>}
      </Reveal>
    </section>
  );
}
