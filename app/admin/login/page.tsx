"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0A0A0A" }}>
      <form onSubmit={handleSubmit} style={{ width: 340, background: "#111", border: "1px solid #2A2A2A", borderRadius: 8, padding: 40 }}>
        <h1 style={{ fontFamily: "Playfair Display, serif", color: "#C9A84C", fontSize: "1.4rem", fontWeight: 700, marginBottom: 24, textAlign: "center" }}>Admin Login</h1>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoFocus
          style={{ width: "100%", background: "#1A1A1A", border: "1px solid #2A2A2A", borderRadius: 4, padding: "12px 16px", color: "#FFF", fontSize: "0.9rem", outline: "none", marginBottom: 16, boxSizing: "border-box" }}
        />
        {error && <p style={{ color: "#E05C5C", fontSize: "0.8rem", marginBottom: 16 }}>{error}</p>}
        <button type="submit" disabled={loading} className="btn-gold" style={{ width: "100%", textAlign: "center", border: "none", cursor: "pointer" }}>
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
}
