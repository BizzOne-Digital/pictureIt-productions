"use client";
import { useState } from "react";

export default function AlbumUnlockForm({ slug, albumName }: { slug: string; albumName: string }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/gallery-album-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, password }),
    });
    if (res.ok) {
      window.location.reload();
    } else {
      setError("Incorrect password");
      setLoading(false);
    }
  }

  return (
    <section style={{ padding: "160px 5% 100px", background: "var(--bg)", textAlign: "center" }}>
      <div style={{ maxWidth: 360, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.6rem", fontWeight: 700, marginBottom: 8, color: "var(--text)" }}>{albumName}</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>This album is password protected.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoFocus
            style={{ width: "100%", background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: 4, padding: "12px 16px", color: "var(--text)", fontSize: "0.9rem", outline: "none", marginBottom: 12, boxSizing: "border-box" }}
          />
          {error && <p style={{ color: "#C0392B", fontSize: "0.8rem", marginBottom: 12 }}>{error}</p>}
          <button type="submit" disabled={loading} className="btn-gold" style={{ width: "100%", border: "none", cursor: "pointer" }}>
            {loading ? "Checking..." : "View Album"}
          </button>
        </form>
      </div>
    </section>
  );
}
