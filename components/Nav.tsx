"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IconMenu, IconClose } from "@/components/icons";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(10,10,10,0.97)" : "transparent", borderBottom: scrolled ? "1px solid #1A1A1A" : "none", backdropFilter: scrolled ? "blur(12px)" : "none", transition: "all 0.4s ease", padding: "0 5%" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <Image src="/logo.png" alt="Picture It Productions" width={52} height={52} style={{ objectFit: "contain" }} />
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ color: "#C9A84C", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.05em", fontFamily: "Playfair Display, serif" }}>PICTURE IT</div>
            <div style={{ color: "#888", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Productions</div>
          </div>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {navLinks.map(l => <Link key={l.label} href={l.href} className="nav-link">{l.label}</Link>)}
        </div>
        <a href="https://form.jotform.com/261114232818046" target="_blank" className="btn-gold desktop-nav" style={{ fontSize: "0.75rem", padding: "10px 24px" }}>Book Now</a>
        <button onClick={() => setMobileOpen(!mobileOpen)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }} className="mobile-btn">
          {mobileOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      {mobileOpen && (
        <div style={{ background: "#0A0A0A", borderTop: "1px solid #1A1A1A", padding: "24px 5%" }}>
          {navLinks.map(l => (
            <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)} style={{ display: "block", color: "#CCC", textDecoration: "none", padding: "14px 0", borderBottom: "1px solid #1A1A1A", fontSize: "0.9rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{l.label}</Link>
          ))}
          <a href="https://form.jotform.com/261114232818046" target="_blank" className="btn-gold" style={{ display: "block", textAlign: "center", marginTop: 24 }}>Book Now</a>
        </div>
      )}
    </nav>
  );
}
