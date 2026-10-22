import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PhotoCard } from "@/components/photo-card";
import { JsonLd } from "@/components/visuals";
import { getPhoto, imageForServiceSlug } from "@/lib/images";
import { cityLocationEntries } from "@/lib/locations";
import { NATIONAL_PAGES, PHONE_DISPLAY, PHONE_E164, PILLAR_SLUG, SITE_NAME, absoluteUrl } from "@/lib/pages";
import { pageLinkLabel } from "@/lib/link-labels";
import { trimDescription, trimTitle } from "@/lib/seo-meta";

export const metadata: Metadata = {
  title: trimTitle("Septic Tank Services Ireland | Ireland Septic Solutions"),
  description: trimDescription(
    `Septic emptying, cleaning, and repair across Ireland. Ring ${PHONE_DISPLAY}—we will talk you through what you need.`,
  ),
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    q: "Not sure what you need?",
    a: "That is fine. Tell us what the system is doing and where you are—we will work out whether you need an empty, a clean, or a repair.",
  },
  {
    q: "Do you cover my part of Ireland?",
    a: "We work across the Republic. Give us your Eircode on " + PHONE_DISPLAY + " and we will tell you when we can get to you.",
  },
  {
    q: "What should I have ready?",
    a: "Your Eircode, how to reach the tank, and whether anything is backing up indoors or smelling outside.",
  },
];

const featured = NATIONAL_PAGES.filter((p) => p.slug === PILLAR_SLUG || p.priority === "High").slice(0, 6);

export default function HomePage() {
  const cities = cityLocationEntries();

  return (
    <main>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            url: absoluteUrl(),
            telephone: PHONE_E164,
            areaServed: "Ireland",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
        ]}
      />

      <PageHero
        variant="home"
        kicker="Across Ireland"
        title="Your septic tank, handled properly"
        lead={
          <p>
            Whether it is a routine empty before winter or a panic when the drains slow down, you can ring one number and speak to someone who knows rural systems—not a call centre reading a script.
          </p>
        }
        ctaLabel="Ring us"
        secondaryHref="/locations"
        secondaryLabel="Find your area"
      />

      <section className="editorial editorial--tint">
        <div className="wrap">
          <h2>What we do</h2>
          <p className="lede">Pick what sounds closest. If none of them fit, call anyway.</p>
          <ul className="photo-grid">
            {featured.map((page) => {
              const photo = getPhoto(imageForServiceSlug(page.slug));
              return (
                <li key={page.slug}>
                  <PhotoCard
                    href={`/${page.slug}`}
                    title={pageLinkLabel(page)}
                    subtitle={photo.caption}
                    imageKey={imageForServiceSlug(page.slug)}
                  />
                </li>
              );
            })}
            <li>
              <PhotoCard href="/services" title="See everything" subtitle="All services" imageKey="rural" />
            </li>
          </ul>
        </div>
      </section>

      <section className="editorial">
        <div className="wrap">
          <h2>Where you are</h2>
          <p className="lede">Five cities and every county—we start with the place name, not a long list of services.</p>
          <ul className="place-grid">
            {cities.map((c) => (
              <li key={c.href}>
                <Link href={c.href}>{c.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/locations">All counties</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="editorial editorial--tint">
        <div className="wrap faq-block">
          <h2>Quick answers</h2>
          {homeFaqs.map((faq) => (
            <details className="faq-details" key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
