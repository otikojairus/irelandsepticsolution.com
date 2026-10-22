import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/visuals";
import { getPhoto, imageForServiceSlug } from "@/lib/images";
import { NATIONAL_PAGES, PHONE_DISPLAY, PHONE_E164, blurbFor } from "@/lib/pages";
import { pageLinkLabel } from "@/lib/link-labels";
import { trimDescription, trimTitle } from "@/lib/seo-meta";

export const metadata: Metadata = {
  title: trimTitle("Our Services | Ireland Septic Solutions"),
  description: trimDescription(
    "Emptying, cleaning, maintenance, installs, and repairs for septic systems in Ireland. Call to book a visit.",
  ),
  alternates: { canonical: "/services" },
};

const indexFaqs = [
  {
    q: "Emptying vs cleaning—which do I need?",
    a: "Emptying removes waste; cleaning tackles buildup on the walls and baffles. If smells linger after a pump-out, cleaning is the next conversation.",
  },
  {
    q: "Can one visit cover more than one job?",
    a: "Often yes—tell us everything you are noticing so we allow enough time on site.",
  },
  {
    q: "How do I book?",
    a: "Pick the closest service below, then ring " + PHONE_DISPLAY + " with your Eircode.",
  },
];

export default function ServicesPage() {
  const hero = getPhoto("hero-service");

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: indexFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />

      <header className="page-intro">
        <div className="wrap">
          <div className="inline-photo">
            <Image src={hero.src} alt={hero.alt} fill sizes="100vw" priority />
          </div>
          <p className="eyebrow">Services</p>
          <h1>What we can help with</h1>
          <p className="lede">
            From a straightforward empty to a full system install—here is the full list. If your situation sounds like two of these, mention both when you call.
          </p>
          <a className="btn btn-primary" href={`tel:${PHONE_E164}`}>
            <span className="btn-value">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </header>

      <div className="wrap">
        <div className="service-list">
          {NATIONAL_PAGES.map((page) => {
            const key = imageForServiceSlug(page.slug);
            const img = getPhoto(key);
            return (
              <Link href={`/${page.slug}`} key={page.slug} className="service-row">
                <div className="service-row-thumb">
                  <Image src={img.src} alt={img.alt} fill sizes="120px" />
                </div>
                <div>
                  <h3>{pageLinkLabel(page)}</h3>
                  <p>{img.caption}</p>
                </div>
                <span className="service-row-arrow" aria-hidden="true">→</span>
              </Link>
            );
          })}
        </div>

        <section className="faq-block">
          <h2>Questions</h2>
          {indexFaqs.map((faq) => (
            <details className="faq-details" key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </section>
      </div>
    </main>
  );
}
