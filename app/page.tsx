"use client";
import Link from "next/link";
import { IconStar, IconCamera, Icon360, IconHeart } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { steps, services, testimonials, galleryImages } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0A0A0A" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="/hero.png" alt="hero background" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.7) 55%, rgba(10,10,10,0.9) 100%)" }} />
        </div>
        <div style={{ position: "absolute", top: "10%", right: "8%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "160px 5% 100px" }} className="hero-grid">
          <div>
            <div className="animate-fade-in" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(201,168,76,0.4)", borderRadius: 999, padding: "8px 20px", marginBottom: 32 }}>
              <IconStar />
              <span style={{ color: "#C9A84C", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>5-Star Rated &nbsp;·&nbsp; 500+ Luxury Events</span>
            </div>
            <h1 className="animate-fade-in-up hero-title" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: 12 }}>
              Capture Moments.<br /><span className="shimmer-text">Create Memories.</span>
            </h1>
            <p className="animate-fade-in-up delay-200" style={{ fontSize: "1.15rem", color: "#CCCCCC", marginBottom: 16, fontStyle: "italic", fontFamily: "Playfair Display, serif" }}>Toronto&#39;s Premier Luxury Photobooth Experience</p>
            <p className="animate-fade-in-up delay-400" style={{ color: "#888", fontSize: "1rem", maxWidth: 560, lineHeight: 1.8, marginBottom: 32 }}>Luxury 360 Video Booth and Mirror Booth experiences designed to elevate your celebration into a high-end cinematic memory.</p>
            <div className="animate-fade-in-up delay-400" style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 40 }}>
              {[{ i: <IconCamera />, l: "Instant Digital Sharing" }, { i: <Icon360 />, l: "Custom Event Templates" }, { i: <IconHeart />, l: "Unlimited Photos & GIFs" }].map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ transform: "scale(0.55)", transformOrigin: "center" }}>{f.i}</span>
                  <span style={{ color: "#AAA", fontSize: "0.85rem" }}>{f.l}</span>
                </div>
              ))}
            </div>
            <div className="animate-fade-in-up delay-600" style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <a href="https://form.jotform.com/261114232818046" target="_blank" className="btn-gold">Book a Session</a>
              <div>
                <div style={{ color: "#C9A84C", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>Special Offer</div>
                <div style={{ color: "#888", fontSize: "0.85rem" }}>10% off your first booking</div>
              </div>
            </div>
            <div className="animate-fade-in-up delay-800" style={{ display: "flex", gap: 48, marginTop: 56, paddingTop: 40, borderTop: "1px solid #1A1A1A", flexWrap: "wrap" }}>
              {[{ num: "500+", label: "Luxury Events" }, { num: "5 Star", label: "Rated" }, { num: "100%", label: "Instant Sharing" }, { num: "GTA", label: "Toronto & Area" }].map(s => (
                <div key={s.num}>
                  <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#C9A84C", fontFamily: "Playfair Display, serif" }}>{s.num}</div>
                  <div style={{ color: "#666", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section style={{ padding: "100px 5%", background: "#0D0D0D" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 60, alignItems: "center" }} className="quote-grid">
          <Reveal>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, marginBottom: 8 }}>Check Availability & Get a <span className="gold-gradient">Custom Quote</span></h2>
            <p style={{ color: "#888", marginBottom: 32 }}>Let&#39;s make your event unforgettable.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <input type="text" placeholder="Your Name" style={{ background: "#1A1A1A", border: "1px solid #2A2A2A", borderRadius: 4, padding: "12px 16px", color: "#CCC", fontSize: "0.875rem", outline: "none", width: "100%" }} />
              <input type="email" placeholder="Email Address" style={{ background: "#1A1A1A", border: "1px solid #2A2A2A", borderRadius: 4, padding: "12px 16px", color: "#CCC", fontSize: "0.875rem", outline: "none", width: "100%" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <input type="tel" placeholder="Phone Number" style={{ background: "#1A1A1A", border: "1px solid #2A2A2A", borderRadius: 4, padding: "12px 16px", color: "#CCC", fontSize: "0.875rem", outline: "none", width: "100%" }} />
              <input type="date" placeholder="Event Date" style={{ background: "#1A1A1A", border: "1px solid #2A2A2A", borderRadius: 4, padding: "12px 16px", color: "#CCC", fontSize: "0.875rem", outline: "none", width: "100%" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <select style={{ background: "#1A1A1A", border: "1px solid #2A2A2A", borderRadius: 4, padding: "12px 16px", color: "#666", fontSize: "0.875rem", outline: "none", width: "100%" }}>
                <option value="">Event Type</option>
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Birthday / Party</option>
                <option>Brand Activation</option>
                <option>Other</option>
              </select>
              <input type="text" placeholder="Event Location" style={{ background: "#1A1A1A", border: "1px solid #2A2A2A", borderRadius: 4, padding: "12px 16px", color: "#CCC", fontSize: "0.875rem", outline: "none", width: "100%" }} />
            </div>
            <textarea placeholder="Tell us about your event..." rows={4} style={{ background: "#1A1A1A", border: "1px solid #2A2A2A", borderRadius: 4, padding: "12px 16px", color: "#CCC", fontSize: "0.875rem", outline: "none", width: "100%", resize: "vertical", marginBottom: 20 }} />
            <button className="btn-gold" style={{ width: "100%", textAlign: "center" }} onClick={() => window.open("mailto:info@pictureitevents.ca", "_blank")}>Get My Free Quote</button>
            <p style={{ color: "#666", fontSize: "0.8rem", textAlign: "center", marginTop: 16 }}>We typically respond within 30 minutes!</p>
          </Reveal>
          <Reveal delay={150} className="quote-image-col" style={{ position: "relative" }}>
            <img src="/homeabout.png" alt="Event guests" style={{ width: "100%", height: 480, objectFit: "cover", borderRadius: 8, border: "1px solid #2A2A2A" }} />
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ padding: "100px 5%", background: "#0A0A0A" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ color: "#C9A84C", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>What We Offer</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: 16 }}>Elevating Every <span className="gold-gradient">Occasion</span></h2>
            <div className="section-divider" />
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24, marginBottom: 40 }}>
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 100} className="service-card">
                <div style={{ marginBottom: 20 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: "#777", fontSize: "0.9rem", lineHeight: 1.7 }}>{s.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: "center" }}>
            <Link href="/services" className="btn-outline">View All Services</Link>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "100px 5%", background: "#0A0A0A" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ color: "#C9A84C", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>The Process</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: 16 }}>How It <span className="gold-gradient">Works</span></h2>
            <div className="section-divider" />
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32 }}>
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 100} style={{ textAlign: "center" }}>
                <div className="step-number">{s.num}</div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: "#777", fontSize: "0.875rem", lineHeight: 1.7 }}>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section style={{ padding: "100px 5%", background: "#0D0D0D" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ color: "#C9A84C", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Testimonials</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: 16 }}>What Our <span className="gold-gradient">Clients Say</span></h2>
            <div className="section-divider" />
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 40 }}>
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 100} className="testimonial-card">
                <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>{[...Array(5)].map((_, j) => <IconStar key={j} />)}</div>
                <p style={{ color: "#AAA", fontSize: "0.95rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 24 }}>&#34;{t.quote}&#34;</p>
                <div style={{ borderTop: "1px solid #2A2A2A", paddingTop: 20 }}>
                  <div style={{ fontWeight: 700, color: "#FFF", fontSize: "0.95rem" }}>{t.name}</div>
                  <div style={{ color: "#C9A84C", fontSize: "0.75rem", marginTop: 4 }}>{t.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: "center" }}>
            <Link href="/reviews" className="btn-outline">Read More Reviews</Link>
          </Reveal>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section style={{ padding: "100px 5%", background: "#0A0A0A" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ color: "#C9A84C", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Portfolio</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: 16 }}>Event <span className="gold-gradient">Gallery</span></h2>
            <div className="section-divider" />
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
            {galleryImages.map((src, i) => (
              <Reveal key={i} delay={i * 80} style={{ overflow: "hidden", borderRadius: 6 }}>
                <img src={src} alt={`Event ${i + 1}`} className="gallery-img" />
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: "center" }}>
            <Link href="/gallery" className="btn-outline">View Full Gallery</Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 5%", background: "linear-gradient(135deg, #0A0A0A 0%, #1A1200 50%, #0A0A0A 100%)", borderTop: "1px solid #2A1A00", borderBottom: "1px solid #2A1A00" }}>
        <Reveal style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#C9A84C", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>Limited Dates Available</p>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: 20 }}>Make Your Event <span className="gold-gradient">Unforgettable</span></h2>
          <p style={{ color: "#888", maxWidth: 500, margin: "0 auto 40px" }}>Limited dates available for 2026. Secure your luxury experience today.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://form.jotform.com/261114232818046" target="_blank" className="btn-gold">Book Now</a>
            <Link href="/packages" className="btn-outline">View Packages</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
