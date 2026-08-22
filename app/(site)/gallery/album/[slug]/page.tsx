import { cookies } from "next/headers";
import { findAlbumBySlug, galleryStore } from "@/lib/content";
import AlbumUnlockForm from "./AlbumUnlockForm";

export const dynamic = "force-dynamic";

export default async function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const album = slug.trim() ? await findAlbumBySlug(slug) : null;

  if (!album) {
    return (
      <section style={{ padding: "160px 5% 100px", textAlign: "center", background: "var(--bg)" }}>
        <p style={{ color: "var(--text-muted)" }}>This album does not exist.</p>
      </section>
    );
  }

  const cookieStore = await cookies();
  const unlocked = !album.password || cookieStore.get(`album_access_${slug}`)?.value === album.password;

  if (!unlocked) {
    return <AlbumUnlockForm slug={slug} albumName={album.name} />;
  }

  const gallery = await galleryStore.list();
  const photos = gallery.filter(g => (g.album || "").trim().toLowerCase() === slug.trim().toLowerCase());

  return (
    <section style={{ padding: "160px 5% 100px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--text)" }}>{album.name}</h1>
          <div className="section-divider" />
        </div>
        {photos.length === 0 ? (
          <p style={{ color: "var(--text-muted)", textAlign: "center" }}>No photos in this album yet.</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {photos.map(p => (
              <div key={p._id} style={{ overflow: "hidden", borderRadius: 6 }}>
                <img src={p.url} alt="" className="gallery-img" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
