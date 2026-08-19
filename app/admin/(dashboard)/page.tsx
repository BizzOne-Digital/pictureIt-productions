import Link from "next/link";
import { collectionConfigs, collectionOrder } from "@/app/admin/config";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Dashboard</h1>
      <p style={{ color: "#999", marginBottom: 32 }}>Manage the content shown on your website.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
        {collectionOrder.map(key => {
          const cfg = collectionConfigs[key];
          return (
            <Link key={key} href={`/admin/${key}`} style={{ display: "block", background: "#111", border: "1px solid #2A2A2A", borderRadius: 8, padding: 24, textDecoration: "none", color: "#EEE" }}>
              <div style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 700, color: "#C9A84C", marginBottom: 6 }}>{cfg.title}</div>
              <div style={{ color: "#888", fontSize: "0.8rem" }}>Manage {cfg.title.toLowerCase()}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
