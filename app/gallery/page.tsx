import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IconInstagram } from "@/components/icons";
import { galleryImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery | Picture It Productions",
  description: "Browse our event photobooth and 360 video booth portfolio from weddings, corporate events, and celebrations.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Event" gold="Gallery" />
      <section style={{ padding: "40px 5% 60px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {galleryImages.map((src, i) => (
            <Reveal key={i} delay={i * 80} style={{ overflow: "hidden", borderRadius: 6 }}>
              <img src={src} alt={`Event ${i + 1}`} className="gallery-img" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section style={{ padding: "20px 5% 100px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Reveal style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ color: "#C9A84C" }}><IconInstagram /></span>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text)" }}>Follow Us on Instagram</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>@pictureitevents.ca</div>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12 }} className="instagram-grid">
            {galleryImages.concat(galleryImages.slice(0, 2)).map((src, i) => (
              <a key={i} href="https://www.instagram.com/pictureitevents.ca/" target="_blank" style={{ display: "block", overflow: "hidden", borderRadius: 6 }}>
                <img src={src} alt={`Instagram ${i + 1}`} style={{ width: "100%", height: 120, objectFit: "cover", transition: "transform 0.4s" }} className="gallery-img" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
