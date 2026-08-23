"use client";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { collectionConfigs, FieldConfig } from "@/app/admin/config";
import { RegistryIcon } from "@/components/icons";

const inputStyle: React.CSSProperties = {
  width: "100%", background: "#1A1A1A", border: "1px solid #2A2A2A", borderRadius: 4,
  padding: "10px 12px", color: "#EEE", fontSize: "0.85rem", outline: "none", boxSizing: "border-box",
};
const labelStyle: React.CSSProperties = { display: "block", color: "#999", fontSize: "0.75rem", marginBottom: 6, fontWeight: 600 };

type FeatureItem = { heading?: string; iconKey?: string; text?: string };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Item = Record<string, any> & { _id?: string };

async function uploadFile(file: File): Promise<string> {
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
  const data = await res.json();
  return data.url as string;
}

function ImageField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [uploading, setUploading] = useState(false);
  return (
    <div>
      {value && <img src={value} alt="preview" style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 6, marginBottom: 8, border: "1px solid #2A2A2A" }} />}
      <input type="text" value={value || ""} onChange={e => onChange(e.target.value)} placeholder="/path/to/image.png or paste URL" style={{ ...inputStyle, marginBottom: 8 }} />
      <input
        type="file"
        accept="image/*"
        disabled={uploading}
        onChange={async e => {
          const file = e.target.files?.[0];
          if (!file) return;
          setUploading(true);
          try {
            const url = await uploadFile(file);
            onChange(url);
          } finally {
            setUploading(false);
          }
        }}
        style={{ fontSize: "0.8rem", color: "#999" }}
      />
      {uploading && <span style={{ color: "#C9A84C", fontSize: "0.75rem", marginLeft: 8 }}>Uploading...</span>}
    </div>
  );
}

function PackageFeaturesField({ value, onChange }: { value: FeatureItem[]; onChange: (v: FeatureItem[]) => void }) {
  const items = value || [];
  function update(i: number, patch: Partial<FeatureItem>) {
    const next = items.slice();
    next[i] = { ...next[i], ...patch };
    onChange(next);
  }
  function remove(i: number) {
    onChange(items.filter((_, idx) => idx !== i));
  }
  function addItem(isHeading: boolean) {
    onChange([...items, isHeading ? { heading: "New Section" } : { iconKey: "check", text: "New feature" }]);
  }
  function move(i: number, dir: -1 | 1) {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = items.slice();
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((it, i) => (
        <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", background: "#161616", padding: 8, borderRadius: 4, border: "1px solid #2A2A2A" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <button type="button" onClick={() => move(i, -1)} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: "0.7rem" }}>▲</button>
            <button type="button" onClick={() => move(i, 1)} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: "0.7rem" }}>▼</button>
          </div>
          {"heading" in it && it.heading !== undefined ? (
            <input value={it.heading || ""} onChange={e => update(i, { heading: e.target.value })} placeholder="Section heading" style={{ ...inputStyle, fontWeight: 700, color: "#C9A84C" }} />
          ) : (
            <>
              <span style={{ flexShrink: 0 }}><RegistryIcon name={it.iconKey || "check"} /></span>
              <input value={it.text || ""} onChange={e => update(i, { text: e.target.value })} placeholder="Feature text" style={inputStyle} />
            </>
          )}
          <button type="button" onClick={() => remove(i)} style={{ background: "none", border: "none", color: "#E05C5C", cursor: "pointer", fontSize: "1rem", flexShrink: 0 }}>✕</button>
        </div>
      ))}
      <div style={{ display: "flex", gap: 8 }}>
        <button type="button" onClick={() => addItem(false)} className="btn-outline" style={{ fontSize: "0.75rem", padding: "6px 14px" }}>+ Feature</button>
        <button type="button" onClick={() => addItem(true)} className="btn-outline" style={{ fontSize: "0.75rem", padding: "6px 14px" }}>+ Section Heading</button>
      </div>
    </div>
  );
}

function useAlbumOptions() {
  const [albums, setAlbums] = useState<Item[]>([]);
  useEffect(() => {
    fetch("/api/admin/galleryAlbums").then(r => r.json()).then(data => setAlbums(data.items || []));
  }, []);
  return albums;
}

function BulkGalleryUpload({ onDone }: { onDone: () => void }) {
  const albums = useAlbumOptions();
  const [album, setAlbum] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    setProgress({ done: 0, total: files.length });
    for (let i = 0; i < files.length; i++) {
      try {
        const url = await uploadFile(files[i]);
        await fetch("/api/admin/gallery", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url, album: album.trim() }),
        });
      } catch {
        // continue with remaining files even if one fails
      }
      setProgress({ done: i + 1, total: files.length });
    }
    setUploading(false);
    setProgress(null);
    onDone();
  }

  return (
    <div style={{ background: "#111", border: "1px solid #2A2A2A", borderRadius: 8, padding: 20, marginBottom: 24 }}>
      <label style={labelStyle}>Bulk Upload Photos</label>
      <p style={{ color: "#777", fontSize: "0.8rem", marginBottom: 12 }}>Select multiple photos at once — each becomes its own gallery item (this never replaces existing photos).</p>
      <select value={album} onChange={e => setAlbum(e.target.value)} style={{ ...inputStyle, marginBottom: 12 }}>
        <option value="">No album (general photos)</option>
        {albums.map(a => <option key={a._id} value={a.slug}>{a.name}</option>)}
      </select>
      {albums.length === 0 && (
        <p style={{ color: "#888", fontSize: "0.75rem", marginBottom: 12 }}>No albums yet — create one under &quot;Shareable Albums&quot; first if you want to group these photos.</p>
      )}
      <input
        type="file"
        accept="image/*"
        multiple
        disabled={uploading}
        onChange={e => handleFiles(e.target.files)}
        style={{ fontSize: "0.8rem", color: "#999" }}
      />
      {progress && <p style={{ color: "#C9A84C", fontSize: "0.8rem", marginTop: 8 }}>Uploading {progress.done} / {progress.total}...</p>}
    </div>
  );
}

function RecoverMisplacedPhotos({ onDone }: { onDone: () => void }) {
  const albums = useAlbumOptions();
  const [ungroupedCount, setUngroupedCount] = useState<number | null>(null);
  const [howMany, setHowMany] = useState("");
  const [targetSlug, setTargetSlug] = useState("");
  const [working, setWorking] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/admin/gallery").then(r => r.json()).then(data => {
      const items: Item[] = data.items || [];
      const ungrouped = items.filter(p => !p.album || !p.album.trim());
      setUngroupedCount(ungrouped.length);
      setHowMany(String(ungrouped.length));
    });
  }, []);

  async function handleAssign() {
    const n = parseInt(howMany, 10);
    if (!n || n <= 0 || !targetSlug.trim()) return;
    setWorking(true);
    setMessage("");
    const res = await fetch("/api/admin/gallery");
    const data = await res.json();
    const items: Item[] = data.items || [];
    const ungrouped = items.filter(p => !p.album || !p.album.trim());
    ungrouped.sort((a, b) => (b.order ?? 0) - (a.order ?? 0));
    const toFix = ungrouped.slice(0, n);
    for (const photo of toFix) {
      await fetch(`/api/admin/gallery/${photo._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ album: targetSlug.trim() }),
      });
    }
    setWorking(false);
    setMessage(`Moved ${toFix.length} photo(s) into album "${targetSlug.trim()}".`);
    onDone();
  }

  if (ungroupedCount === 0) return null;

  return (
    <div style={{ background: "#1A140A", border: "1px solid #3A2A10", borderRadius: 8, padding: 20, marginBottom: 24 }}>
      <label style={{ ...labelStyle, color: "#E0A05C" }}>Recover Misplaced Photos</label>
      <p style={{ color: "#B99", fontSize: "0.8rem", marginBottom: 12 }}>
        {ungroupedCount === null ? "Checking..." : `${ungroupedCount} photo(s) currently have no album (they show under "More Photos" on the public Gallery page).`}
        {" "}If you uploaded photos before saving an album&apos;s Link Slug, they end up here — use this to move them into the correct album without re-uploading.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "flex-end" }}>
        <div>
          <label style={labelStyle}>Move the most recent</label>
          <input type="number" value={howMany} onChange={e => setHowMany(e.target.value)} style={{ ...inputStyle, width: 100 }} />
        </div>
        <div>
          <label style={labelStyle}>Into album</label>
          <select value={targetSlug} onChange={e => setTargetSlug(e.target.value)} style={{ ...inputStyle, width: 220 }}>
            <option value="">Choose an album...</option>
            {albums.map(a => <option key={a._id} value={a.slug}>{a.name}</option>)}
          </select>
        </div>
        <button type="button" onClick={handleAssign} disabled={working} className="btn-gold" style={{ border: "none", cursor: "pointer" }}>
          {working ? "Moving..." : "Move Photos"}
        </button>
      </div>
      {message && <p style={{ color: "#C9A84C", fontSize: "0.8rem", marginTop: 12 }}>{message}</p>}
    </div>
  );
}

function AlbumPhotosManager({ slug }: { slug: string }) {
  const [photos, setPhotos] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);

  const loadPhotos = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/admin/gallery");
    const data = await res.json();
    const all: Item[] = data.items || [];
    const normalizedSlug = slug.trim().toLowerCase();
    setPhotos(normalizedSlug ? all.filter(p => (p.album || "").trim().toLowerCase() === normalizedSlug) : []);
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    loadPhotos();
  }, [loadPhotos]);

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    setProgress({ done: 0, total: files.length });
    for (let i = 0; i < files.length; i++) {
      try {
        const url = await uploadFile(files[i]);
        await fetch("/api/admin/gallery", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url, album: slug }),
        });
      } catch {
        // continue with remaining files even if one fails
      }
      setProgress({ done: i + 1, total: files.length });
    }
    setUploading(false);
    setProgress(null);
    await loadPhotos();
  }

  async function handleRemove(id: string) {
    await fetch(`/api/admin/gallery/${id}`, { method: "DELETE" });
    await loadPhotos();
  }

  return (
    <div style={{ background: "#161616", border: "1px solid #2A2A2A", borderRadius: 6, padding: 16 }}>
      <p style={{ color: "#777", fontSize: "0.8rem", marginBottom: 12 }}>Select multiple photos at once for this album — each becomes its own photo, nothing gets replaced.</p>
      <input
        type="file"
        accept="image/*"
        multiple
        disabled={uploading}
        onChange={e => handleFiles(e.target.files)}
        style={{ fontSize: "0.8rem", color: "#999", marginBottom: 12 }}
      />
      {progress && <p style={{ color: "#C9A84C", fontSize: "0.8rem", marginBottom: 12 }}>Uploading {progress.done} / {progress.total}...</p>}
      {loading ? (
        <p style={{ color: "#888", fontSize: "0.8rem" }}>Loading photos...</p>
      ) : photos.length === 0 ? (
        <p style={{ color: "#888", fontSize: "0.8rem" }}>No photos in this album yet.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))", gap: 8 }}>
          {photos.map(p => (
            <div key={p._id} style={{ position: "relative" }}>
              <img src={p.url} alt="" style={{ width: "100%", height: 80, objectFit: "cover", borderRadius: 4, border: "1px solid #2A2A2A" }} />
              <button
                type="button"
                onClick={() => handleRemove(p._id!)}
                style={{ position: "absolute", top: 2, right: 2, background: "rgba(10,10,10,0.8)", border: "none", color: "#E05C5C", borderRadius: "50%", width: 20, height: 20, fontSize: "0.7rem", cursor: "pointer", lineHeight: 1 }}
              >✕</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Field({ field, value, onChange }: { field: FieldConfig; value: unknown; onChange: (v: unknown) => void }) {
  switch (field.kind) {
    case "text":
      return <input type="text" value={(value as string) || ""} onChange={e => onChange(e.target.value)} style={inputStyle} />;
    case "textarea":
      return <textarea value={(value as string) || ""} onChange={e => onChange(e.target.value)} rows={4} style={{ ...inputStyle, resize: "vertical" }} />;
    case "checkbox":
      return <input type="checkbox" checked={!!value} onChange={e => onChange(e.target.checked)} style={{ width: 18, height: 18 }} />;
    case "select":
      return (
        <select value={(value as string) || ""} onChange={e => onChange(e.target.value)} style={inputStyle}>
          {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      );
    case "image":
      return <ImageField value={value as string} onChange={onChange} />;
    case "lines":
      return (
        <textarea
          value={Array.isArray(value) ? (value as string[]).join("\n") : ""}
          onChange={e => onChange(e.target.value.split("\n"))}
          rows={5}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      );
    case "packageFeatures":
      return <PackageFeaturesField value={(value as FeatureItem[]) || []} onChange={onChange as (v: FeatureItem[]) => void} />;
    default:
      return null;
  }
}

export default function AdminCollectionPage() {
  const params = useParams();
  const collection = params.collection as string;
  const config = collectionConfigs[collection];

  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Item | null>(null);
  const [saving, setSaving] = useState(false);
  const [galleryVersion, setGalleryVersion] = useState(0);
  const [deletingAll, setDeletingAll] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch(`/api/admin/${collection}`);
    const data = await res.json();
    setItems(data.items || []);
    setLoading(false);
  }, [collection]);

  useEffect(() => {
    load();
    setEditing(null);
  }, [load]);

  if (!config) {
    return <p style={{ color: "#E05C5C" }}>Unknown collection.</p>;
  }

  function startNew() {
    const blank: Item = {};
    config.fields.forEach(f => {
      blank[f.name] = f.kind === "checkbox" ? false : f.kind === "lines" ? [] : f.kind === "packageFeatures" ? [] : "";
    });
    setEditing(blank);
  }

  async function handleSave() {
    if (!editing) return;
    setSaving(true);
    const { _id, ...data } = editing;
    try {
      if (_id) {
        await fetch(`/api/admin/${collection}/${_id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (collection === "galleryAlbums") {
          await load();
        } else {
          setEditing(null);
          await load();
        }
      } else {
        const res = await fetch(`/api/admin/${collection}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (collection === "galleryAlbums") {
          const { id } = await res.json();
          setEditing({ ...editing, _id: id });
          await load();
        } else {
          setEditing(null);
          await load();
        }
      }
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this item?")) return;
    await fetch(`/api/admin/${collection}/${id}`, { method: "DELETE" });
    await load();
  }

  async function handleDeleteAll() {
    const typed = prompt(`This will permanently delete all ${items.length} item(s) in "${config.title}". This cannot be undone.\n\nType DELETE to confirm:`);
    if (typed !== "DELETE") return;
    setDeletingAll(true);
    try {
      for (const item of items) {
        await fetch(`/api/admin/${collection}/${item._id}`, { method: "DELETE" });
      }
      await load();
    } finally {
      setDeletingAll(false);
    }
  }

  async function handleReorder(id: string, dir: "up" | "down") {
    await fetch(`/api/admin/${collection}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ __reorder: dir }),
    });
    await load();
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, gap: 12, flexWrap: "wrap" }}>
        <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.6rem", fontWeight: 700 }}>{config.title}</h1>
        {!editing && (
          <div style={{ display: "flex", gap: 12 }}>
            {items.length > 0 && (
              <button
                onClick={handleDeleteAll}
                disabled={deletingAll}
                style={{ background: "none", border: "1px solid #5A2A2A", color: "#E05C5C", borderRadius: 4, padding: "10px 18px", fontSize: "0.8rem", cursor: deletingAll ? "default" : "pointer" }}
              >
                {deletingAll ? "Deleting..." : `Delete All (${items.length})`}
              </button>
            )}
            <button onClick={startNew} className="btn-gold" style={{ border: "none", cursor: "pointer" }}>+ Add New</button>
          </div>
        )}
      </div>

      {collection === "gallery" && !editing && (
        <>
          <RecoverMisplacedPhotos key={galleryVersion} onDone={() => { setGalleryVersion(v => v + 1); load(); }} />
          <BulkGalleryUpload onDone={load} />
        </>
      )}

      {editing ? (
        <div style={{ background: "#111", border: "1px solid #2A2A2A", borderRadius: 8, padding: 24, maxWidth: 640 }}>
          {config.fields.map(field => (
            <div key={field.name} style={{ marginBottom: 18 }}>
              <label style={labelStyle}>{field.label}</label>
              <Field field={field} value={editing[field.name]} onChange={v => setEditing({ ...editing, [field.name]: v })} />
            </div>
          ))}
          {collection === "galleryAlbums" && (
            <div style={{ marginBottom: 18 }}>
              <label style={labelStyle}>Album Photos</label>
              {!editing._id ? (
                <p style={{ color: "#888", fontSize: "0.8rem" }}>Click &quot;Save&quot; below first, then you can bulk upload photos for this album right here.</p>
              ) : !editing.slug || !editing.slug.trim() ? (
                <p style={{ color: "#E0A05C", fontSize: "0.8rem" }}>Fill in the Link Slug above and click &quot;Save&quot; before uploading photos — without it, uploads can&apos;t be tied to this album.</p>
              ) : (
                <AlbumPhotosManager slug={editing.slug.trim()} />
              )}
            </div>
          )}
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <button onClick={handleSave} disabled={saving} className="btn-gold" style={{ border: "none", cursor: "pointer" }}>
              {saving ? "Saving..." : "Save"}
            </button>
            <button onClick={() => setEditing(null)} className="btn-outline" type="button">Cancel</button>
          </div>
        </div>
      ) : loading ? (
        <p style={{ color: "#888" }}>Loading...</p>
      ) : items.length === 0 ? (
        <p style={{ color: "#888" }}>Nothing here yet. Click &quot;Add New&quot; to create one.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {items.map((item, i) => (
            <div key={item._id} style={{ display: "flex", alignItems: "center", gap: 12, background: "#111", border: "1px solid #2A2A2A", borderRadius: 8, padding: "12px 16px" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <button onClick={() => handleReorder(item._id!, "up")} disabled={i === 0} style={{ background: "none", border: "none", color: i === 0 ? "#444" : "#888", cursor: i === 0 ? "default" : "pointer", fontSize: "0.7rem" }}>▲</button>
                <button onClick={() => handleReorder(item._id!, "down")} disabled={i === items.length - 1} style={{ background: "none", border: "none", color: i === items.length - 1 ? "#444" : "#888", cursor: i === items.length - 1 ? "default" : "pointer", fontSize: "0.7rem" }}>▼</button>
              </div>
              {collection === "gallery" && item.url && (
                <img src={item.url} alt="" style={{ width: 40, height: 40, objectFit: "cover", borderRadius: 4, flexShrink: 0 }} />
              )}
              <span style={{ flex: 1, color: "#EEE", fontSize: "0.9rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{config.summary(item)}</span>
              <button onClick={() => setEditing(item)} className="btn-outline" style={{ fontSize: "0.75rem", padding: "6px 14px" }}>Edit</button>
              <button onClick={() => handleDelete(item._id!)} style={{ background: "none", border: "1px solid #5A2A2A", color: "#E05C5C", borderRadius: 4, padding: "6px 14px", fontSize: "0.75rem", cursor: "pointer" }}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
