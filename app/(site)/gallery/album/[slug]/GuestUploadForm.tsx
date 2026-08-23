"use client";
import { useState } from "react";

export default function GuestUploadForm({ slug }: { slug: string }) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  const [doneCount, setDoneCount] = useState(0);

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    setProgress({ done: 0, total: files.length });
    let succeeded = 0;
    for (let i = 0; i < files.length; i++) {
      try {
        const fd = new FormData();
        fd.append("slug", slug);
        fd.append("file", files[i]);
        const res = await fetch("/api/guest-upload", { method: "POST", body: fd });
        if (res.ok) succeeded++;
      } catch {
        // continue with remaining files
      }
      setProgress({ done: i + 1, total: files.length });
    }
    setUploading(false);
    setProgress(null);
    setDoneCount(succeeded);
    if (succeeded > 0) {
      setTimeout(() => window.location.reload(), 1200);
    }
  }

  return (
    <div style={{ maxWidth: 640, margin: "0 auto 48px", background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: 8, padding: 28, textAlign: "center" }}>
      <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.15rem", fontWeight: 700, marginBottom: 8, color: "var(--text)" }}>Share Your Photos</h3>
      <p style={{ color: "var(--text-body)", fontSize: "0.85rem", marginBottom: 16 }}>Have photos from the event? Upload them here to add to the album.</p>
      <input
        type="file"
        accept="image/*"
        multiple
        disabled={uploading}
        onChange={e => handleFiles(e.target.files)}
        style={{ fontSize: "0.85rem", color: "var(--text-body)" }}
      />
      {progress && <p style={{ color: "#C9A84C", fontSize: "0.8rem", marginTop: 12 }}>Uploading {progress.done} / {progress.total}...</p>}
      {!uploading && doneCount > 0 && <p style={{ color: "#C9A84C", fontSize: "0.8rem", marginTop: 12 }}>Thanks! {doneCount} photo{doneCount === 1 ? "" : "s"} uploaded.</p>}
    </div>
  );
}
