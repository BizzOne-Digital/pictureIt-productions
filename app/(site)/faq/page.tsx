import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IconChevronDown } from "@/components/icons";
import { pageBanners } from "@/lib/data";
import { faqsStore } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ | Picture It Productions",
  description: "Frequently asked questions about our luxury photobooth and 360 video booth services.",
};

export const dynamic = "force-dynamic";

export default async function FaqPage() {
  const faqs = await faqsStore.list();
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently Asked" gold="Questions" image={pageBanners.faq} />
      <section style={{ padding: "40px 5% 100px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {faqs.map((f, i) => (
            <Reveal key={f._id} delay={i * 80}>
              <details className="faq-item">
                <summary>{f.q}<IconChevronDown /></summary>
                <p>{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
