import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IconInstagram, IconGallery } from "@/components/icons";
import { pageBanners } from "@/lib/data";
import { galleryStore, galleryAlbumsStore } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery | Picture It Productions",
  description: "Browse our event photobooth and 360 video booth portfolio from weddings, corporate events, and celebrations.",
};

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const [gallery, albums] = await Promise.all([galleryStore.list(), galleryAlbumsStore.list()]);
  const generalPhotos = gallery.filter(g => !g.album);
  const albumCards = albums.map(a => ({
    ...a,
    cover: gallery.find(g => (g.album || "").trim().toLowerCase() === a.slug.trim().toLowerCase())?.url,
    count: gallery.filter(g => (g.album || "").trim().toLowerCase() === a.slug.trim().toLowerCase()).length,
  }));

  return (
    <>
      <PageHero eyebrow="Portfolio" title="Event" gold="Gallery" image={pageBanners.gallery} />

      {albumCards.length > 0 && (
        <section style={{ padding: "40px 5% 20px", background: "var(--bg)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: 24, color: "var(--text)" }}>Browse by Event</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
              {albumCards.map((a, i) => (
                <Reveal key={a._id} delay={i * 80}>
                  <Link href={`/gallery/album/${a.slug}`} style={{ display: "block", textDecoration: "none" }}>
                    <div style={{ position: "relative", height: 180, borderRadius: 8, overflow: "hidden", border: "1px solid var(--border)" }}>
                      {a.cover ? (
                        <img src={a.cover} alt={a.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      ) : (
                        <div style={{ width: "100%", height: "100%", background: "var(--bg-soft)" }} />
                      )}
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,10,0) 40%, rgba(10,10,10,0.85) 100%)" }} />
                      <div style={{ position: "absolute", bottom: 12, left: 14, right: 14 }}>
                        <div style={{ color: "#FFF", fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "1rem" }}>{a.name}</div>
                        <div style={{ color: "#CCC", fontSize: "0.75rem" }}>
                          {a.count} photo{a.count === 1 ? "" : "s"}{a.password ? " · Private" : ""}
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ padding: "40px 5% 60px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {albumCards.length > 0 && (
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: 24, color: "var(--text)", display: "flex", alignItems: "center", gap: 8 }}>
              <IconGallery /> More Photos
            </h2>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {generalPhotos.map((g, i) => (
              <Reveal key={g._id} delay={i * 80} style={{ overflow: "hidden", borderRadius: 6 }}>
                <img src={g.url} alt={`Event ${i + 1}`} className="gallery-img" />
              </Reveal>
            ))}
          </div>
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
            {gallery.concat(gallery.slice(0, 2)).map((g, i) => (
              <a key={`${g._id}-${i}`} href="https://www.instagram.com/pictureitevents.ca/" target="_blank" style={{ display: "block", overflow: "hidden", borderRadius: 6 }}>
                <img src={g.url} alt={`Instagram ${i + 1}`} style={{ width: "100%", height: 120, objectFit: "cover", transition: "transform 0.4s" }} className="gallery-img" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
