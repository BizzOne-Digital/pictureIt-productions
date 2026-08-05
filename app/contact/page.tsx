import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IconPhone, IconMail, IconLocation } from "@/components/icons";
import { socialLinks, pageBanners } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | Picture It Productions",
  description: "Get in touch with Picture It Productions for your luxury photobooth and 360 video booth booking.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get In Touch" title="Contact" gold="Us" image={pageBanners.contact} />
      <section style={{ padding: "40px 5% 100px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "start" }} className="contact-grid">
          <Reveal>
            <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: 32, color: "var(--text)" }}>Ready to Book?</h3>
            {[
              { icon: <IconPhone />, label: "Phone", value: "647-703-2900", href: "tel:6477032900" },
              { icon: <IconMail />, label: "Email", value: "info@pictureitevents.ca", href: "mailto:info@pictureitevents.ca" },
              { icon: <IconLocation />, label: "Service Area", value: "Toronto & GTA, Canada", href: null },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16, padding: "20px 24px", background: "var(--bg-soft)", borderRadius: 8, border: "1px solid var(--border)" }}>
                {c.icon}
                <div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{c.label}</div>
                  {c.href ? <a href={c.href} style={{ color: "var(--text)", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500 }}>{c.value}</a> : <span style={{ color: "var(--text)", fontSize: "0.95rem" }}>{c.value}</span>}
                </div>
              </div>
            ))}
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} target="_blank" style={{ width: 44, height: 44, border: "1px solid var(--border)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", textDecoration: "none", transition: "all 0.3s" }}>{s.icon}</a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150} style={{ background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: 8, padding: 40 }}>
            <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.25rem", marginBottom: 24, color: "var(--text)" }}>Send a Message</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <input type="text" placeholder="Your Name" style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 4, padding: "12px 16px", color: "var(--text)", fontSize: "0.875rem", outline: "none", width: "100%" }} />
              <input type="email" placeholder="Email Address" style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 4, padding: "12px 16px", color: "var(--text)", fontSize: "0.875rem", outline: "none", width: "100%" }} />
            </div>
            <input type="tel" placeholder="Phone Number" style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 4, padding: "12px 16px", color: "var(--text)", fontSize: "0.875rem", outline: "none", width: "100%", marginBottom: 16 }} />
            <select style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 4, padding: "12px 16px", color: "var(--text-muted)", fontSize: "0.875rem", outline: "none", width: "100%", marginBottom: 16 }}>
              <option value="">Select Event Type</option>
              <option>Wedding</option>
              <option>Corporate Event</option>
              <option>Birthday / Party</option>
              <option>Brand Activation</option>
              <option>Other</option>
            </select>
            <textarea placeholder="Tell us about your event..." rows={4} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: 4, padding: "12px 16px", color: "var(--text)", fontSize: "0.875rem", outline: "none", width: "100%", resize: "vertical", marginBottom: 20 }} />
            <a href="mailto:info@pictureitevents.ca" className="btn-gold" style={{ display: "block", width: "100%", textAlign: "center", boxSizing: "border-box" }}>Send Message</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
