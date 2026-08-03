import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IconStar } from "@/components/icons";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Client Reviews | Picture It Productions",
  description: "See what our clients say about our luxury 360 video booth and mirror booth experiences.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow="Testimonials" title="What Our" gold="Clients Say" />
      <section style={{ padding: "40px 5% 100px", background: "#0A0A0A" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100} className="testimonial-card">
              <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>{[...Array(5)].map((_, j) => <IconStar key={j} />)}</div>
              <p style={{ color: "#AAA", fontSize: "0.95rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 24 }}>&#34;{t.quote}&#34;</p>
              <div style={{ borderTop: "1px solid #2A2A2A", paddingTop: 20 }}>
                <div style={{ fontWeight: 700, color: "#FFF", fontSize: "0.95rem" }}>{t.name}</div>
                <div style={{ color: "#C9A84C", fontSize: "0.75rem", marginTop: 4 }}>{t.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
