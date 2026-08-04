"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconMenu, IconClose, IconChevronDown } from "@/components/icons";
import { mainNav, moreNav } from "@/lib/data";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "#0A0A0A", borderBottom: "1px solid #1A1A1A", padding: "0 5%" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <Image src="/logo.png" alt="Picture It Productions" width={52} height={52} style={{ objectFit: "contain" }} />
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ color: "#C9A84C", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.05em", fontFamily: "Playfair Display, serif" }}>PICTURE IT</div>
            <div style={{ color: "#888", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Productions</div>
          </div>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {mainNav.map(l => <Link key={l.label} href={l.href} className="nav-link">{l.label}</Link>)}
          <div className="nav-dropdown">
            <span className="nav-link" style={{ display: "inline-flex", alignItems: "center", gap: 4, cursor: "default" }}>
              More <span style={{ transform: "scale(0.7)" }}><IconChevronDown /></span>
            </span>
            <div className="nav-dropdown-menu">
              {moreNav.map(l => <Link key={l.label} href={l.href}>{l.label}</Link>)}
            </div>
          </div>
        </div>
        <a href="https://form.jotform.com/261114232818046" target="_blank" className="btn-gold desktop-nav" style={{ fontSize: "0.75rem", padding: "10px 24px" }}>Book Now</a>
        <button onClick={() => setMobileOpen(!mobileOpen)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }} className="mobile-btn">
          {mobileOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      {mobileOpen && (
        <div style={{ background: "#0A0A0A", borderTop: "1px solid #1A1A1A", padding: "24px 5%" }}>
          {mainNav.map(l => (
            <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)} style={{ display: "block", color: "#CCC", textDecoration: "none", padding: "14px 0", borderBottom: "1px solid #1A1A1A", fontSize: "0.9rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{l.label}</Link>
          ))}
          <button onClick={() => setMobileMoreOpen(!mobileMoreOpen)} style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", color: "#CCC", padding: "14px 0", borderBottom: "1px solid #1A1A1A", fontSize: "0.9rem", letterSpacing: "0.05em", textTransform: "uppercase", cursor: "pointer" }}>
            More <span style={{ transform: mobileMoreOpen ? "rotate(180deg)" : "none" }}><IconChevronDown /></span>
          </button>
          {mobileMoreOpen && moreNav.map(l => (
            <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)} style={{ display: "block", color: "#999", textDecoration: "none", padding: "12px 0 12px 16px", borderBottom: "1px solid #1A1A1A", fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{l.label}</Link>
          ))}
          <a href="https://form.jotform.com/261114232818046" target="_blank" className="btn-gold" style={{ display: "block", textAlign: "center", marginTop: 24 }}>Book Now</a>
        </div>
      )}
    </nav>
  );
}
