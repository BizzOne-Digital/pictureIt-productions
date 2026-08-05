import Image from "next/image";
import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ padding: "60px 5% 32px", background: "#080808", borderTop: "1px solid #1A1A1A" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <Image src="/logo.png" alt="Picture It Productions" width={60} height={60} style={{ objectFit: "contain" }} />
              <div>
                <div style={{ color: "#C9A84C", fontWeight: 800, fontSize: "1rem", fontFamily: "Playfair Display, serif" }}>PICTURE IT</div>
                <div style={{ color: "#777", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "Playfair Display, serif" }}>Productions</div>
              </div>
            </div>
            <p style={{ color: "#555", fontSize: "0.875rem", lineHeight: 1.8, maxWidth: 260 }}>Luxury photobooth experiences for those who value elegance and high-quality memories.</p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} target="_blank" style={{ color: "#444", textDecoration: "none" }}>{s.icon}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: "#C9A84C", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>Explore</h4>
            {navLinks.map(l => (
              <Link key={l.label} href={l.href} style={{ display: "block", color: "#555", textDecoration: "none", fontSize: "0.875rem", marginBottom: 10 }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ color: "#C9A84C", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>Services</h4>
            {["360 Video Booth", "Mirror Booth", "Corporate Events", "Weddings", "Private Events"].map(l => (
              <Link key={l} href="/services" style={{ display: "block", color: "#555", textDecoration: "none", fontSize: "0.875rem", marginBottom: 10 }}>{l}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ color: "#C9A84C", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>Contact</h4>
            <div style={{ color: "#555", fontSize: "0.875rem", lineHeight: 2.2 }}>
              <a href="tel:6477032900" style={{ display: "block", color: "#555", textDecoration: "none" }}>647-703-2900</a>
              <a href="mailto:info@pictureitevents.ca" style={{ display: "block", color: "#555", textDecoration: "none" }}>info@pictureitevents.ca</a>
              <span>Toronto &amp; GTA, Canada</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1A1A1A", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "#333", fontSize: "0.75rem" }}>© 2026 Picture It Productions. All rights reserved.</p>
          <p style={{ color: "#333", fontSize: "0.75rem" }}>Website by <span style={{ color: "#C9A84C" }}>BizzOne Digital</span></p>
        </div>
      </div>
    </footer>
  );
}
