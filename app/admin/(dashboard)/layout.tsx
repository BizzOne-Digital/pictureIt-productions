"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { collectionConfigs, collectionOrder } from "@/app/admin/config";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", background: "#0A0A0A", color: "#EEE", fontFamily: "Inter, sans-serif" }}>
      <aside style={{ width: 240, flexShrink: 0, background: "#111", borderRight: "1px solid #2A2A2A", padding: "24px 16px", position: "sticky", top: 0, height: "100vh" }}>
        <Link href="/admin" style={{ display: "block", color: "#C9A84C", fontFamily: "Playfair Display, serif", fontWeight: 800, fontSize: "1.1rem", marginBottom: 28, textDecoration: "none" }}>
          Picture It — Admin
        </Link>
        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Link href="/admin" style={{ padding: "10px 12px", borderRadius: 6, color: pathname === "/admin" ? "#0A0A0A" : "#CCC", background: pathname === "/admin" ? "#C9A84C" : "transparent", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}>
            Dashboard
          </Link>
          {collectionOrder.map(key => {
            const cfg = collectionConfigs[key];
            const href = `/admin/${key}`;
            const active = pathname === href;
            return (
              <Link key={key} href={href} style={{ padding: "10px 12px", borderRadius: 6, color: active ? "#0A0A0A" : "#CCC", background: active ? "#C9A84C" : "transparent", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}>
                {cfg.title}
              </Link>
            );
          })}
        </nav>
        <button onClick={handleLogout} style={{ marginTop: 32, width: "100%", background: "none", border: "1px solid #2A2A2A", color: "#999", borderRadius: 6, padding: "10px 12px", fontSize: "0.8rem", cursor: "pointer" }}>
          Log Out
        </button>
        <Link href="/" style={{ display: "block", marginTop: 12, textAlign: "center", color: "#666", fontSize: "0.75rem", textDecoration: "none" }}>
          ← View Site
        </Link>
      </aside>
      <main style={{ flex: 1, padding: "40px 48px", maxWidth: 1100 }}>{children}</main>
    </div>
  );
}
