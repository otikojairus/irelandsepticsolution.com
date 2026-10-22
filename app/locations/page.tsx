import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/visuals";
import { getPhoto } from "@/lib/images";
import { cityLocationEntries, countyLocationEntries } from "@/lib/locations";
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/pages";
import { trimDescription, trimTitle } from "@/lib/seo-meta";

export const metadata: Metadata = {
  title: trimTitle("Areas We Cover | Ireland Septic Solutions"),
  description: trimDescription(
    "Dublin, Cork, Galway, Limerick, Waterford, and counties across Ireland. Tap your area and call when you are ready.",
  ),
  alternates: { canonical: "/locations" },
};

const locFaqs = [
  {
    q: "My town is not in the list—can you still come?",
    a: "Very likely. Counties cover more than the town name on the sign. Ring " + PHONE_DISPLAY + " with your Eircode.",
  },
  {
    q: "Why do some places have several pages?",
    a: "You might land on emptying, cleaning, or repair depending on what you searched for. The number is always the same.",
  },
  {
    q: "Is Northern Ireland included?",
    a: "We are set up for the Republic. If you are near the border, call and we will advise.",
  },
];

export default function LocationsPage() {
  const cities = cityLocationEntries();
  const counties = countyLocationEntries();
  const photo = getPhoto("hero-local");

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: locFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />

      <header className="page-intro">
        <div className="wrap">
          <div className="inline-photo">
            <Image src={photo.src} alt={photo.alt} fill sizes="100vw" />
          </div>
          <p className="eyebrow">Areas</p>
          <h1>Find your part of Ireland</h1>
          <p className="lede">
            Choose the city or county that matches your Eircode. Each area has its own notes on access and weather—then ring {PHONE_DISPLAY} when you want a visit.
          </p>
          <a className="btn btn-primary" href={`tel:${PHONE_E164}`}>
            <span className="btn-value">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </header>

      <div className="wrap editorial">
        <section>
          <h2>Cities</h2>
          <ul className="place-grid">
            {cities.map((c) => (
              <li key={c.href}>
                <Link href={c.href}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginTop: "2.5rem" }}>
          <h2>Counties</h2>
          <ul className="place-grid">
            {counties.map((c) => (
              <li key={c.href}>
                <Link href={c.href}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="editorial editorial--tint">
        <div className="wrap faq-block">
          <h2>Before you call</h2>
          {locFaqs.map((faq) => (
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
