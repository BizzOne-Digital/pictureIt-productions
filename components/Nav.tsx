"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconMenu, IconClose, IconPhone, IconMail } from "@/components/icons";
import { mainNav } from "@/lib/data";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "#0A0A0A", borderBottom: "1px solid #1A1A1A", padding: "0 5%" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 84 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <Image src="/logo.png" alt="Picture It Productions" width={68} height={68} style={{ objectFit: "contain" }} />
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ color: "#C9A84C", fontWeight: 800, fontSize: "1.05rem", letterSpacing: "0.05em", fontFamily: "Playfair Display, serif" }}>PICTURE IT</div>
            <div style={{ color: "#999", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "Playfair Display, serif" }}>Productions</div>
          </div>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {mainNav.map(l => <Link key={l.label} href={l.href} className="nav-link">{l.label}</Link>)}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }} className="desktop-nav">
          <a href="https://form.jotform.com/261114232818046" target="_blank" className="btn-gold" style={{ fontSize: "0.75rem", padding: "10px 24px" }}>Book Now</a>
          <div className="nav-contact-inline" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <a href="tel:6477032900" style={{ display: "flex", alignItems: "center", gap: 8, color: "#CCC", textDecoration: "none", fontSize: "0.8rem" }}><IconPhone /> 647-703-2900</a>
            <a href="mailto:info@pictureitevents.ca" style={{ display: "flex", alignItems: "center", gap: 8, color: "#CCC", textDecoration: "none", fontSize: "0.8rem" }}><IconMail /> info@pictureitevents.ca</a>
          </div>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }} className="mobile-btn">
          {mobileOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      {mobileOpen && (
        <div style={{ background: "#0A0A0A", borderTop: "1px solid #1A1A1A", padding: "24px 5%" }}>
          {mainNav.map(l => (
            <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)} style={{ display: "block", color: "#CCC", textDecoration: "none", padding: "14px 0", borderBottom: "1px solid #1A1A1A", fontSize: "0.9rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{l.label}</Link>
          ))}
          <a href="https://form.jotform.com/261114232818046" target="_blank" className="btn-gold" style={{ display: "block", textAlign: "center", marginTop: 24 }}>Book Now</a>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
            <a href="tel:6477032900" style={{ display: "flex", alignItems: "center", gap: 8, color: "#CCC", textDecoration: "none", fontSize: "0.9rem" }}><IconPhone /> 647-703-2900</a>
            <a href="mailto:info@pictureitevents.ca" style={{ display: "flex", alignItems: "center", gap: 8, color: "#CCC", textDecoration: "none", fontSize: "0.9rem" }}><IconMail /> info@pictureitevents.ca</a>
          </div>
        </div>
      )}
    </nav>
  );
}
