import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/visuals";
import {
  breadcrumbLabels,
  faqHeadingFor,
  faqsFor,
  h1For,
  heroLeadFor,
  internalLinksFor,
  introFor,
  pageSeoMeta,
  sectionsFor,
} from "@/lib/seo-content";
import { getPhoto, imageForServiceSlug } from "@/lib/images";
import {
  PAGES,
  PHONE_DISPLAY,
  PHONE_E164,
  PILLAR_SLUG,
  SITE_NAME,
  absoluteUrl,
  getPage,
  locationName,
} from "@/lib/pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getPage((await params).slug);
  if (!page) return {};
  const { title, description } = pageSeoMeta(page);
  return {
    title,
    description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: { title, description, url: absoluteUrl(page.slug), type: "website" },
  };
}

export default async function SeoPage({ params }: Props) {
  const page = getPage((await params).slug);
  if (!page) notFound();
  const place = locationName(page);
  const faqs = faqsFor(page);
  const sections = sectionsFor(page);
  const links = internalLinksFor(page);
  const isPillar = page.slug === PILLAR_SLUG;
  const isLocal = page.kind === "city" || page.kind === "county";
  const isNational = page.kind === "national";
  const fullIntro = introFor(page);
  const crumbs = breadcrumbLabels(page);
  const imageKey = imageForServiceSlug(page.slug);
  const inline = getPhoto(imageKey);

  const breadcrumbSchema = [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
    { "@type": "ListItem", position: 2, name: crumbs.hub, item: absoluteUrl(crumbs.hubPath.replace(/^\//, "")) },
  ];
  if (isLocal) {
    breadcrumbSchema.push({
      "@type": "ListItem",
      position: 3,
      name: crumbs.parent ?? place,
      item: absoluteUrl(page.kind === "city" ? `/${PILLAR_SLUG}-${place.toLowerCase()}` : `/${PILLAR_SLUG}-county-${place.toLowerCase().replace(/\s+/g, "-")}`),
    });
    breadcrumbSchema.push({
      "@type": "ListItem",
      position: 4,
      name: crumbs.current,
      item: absoluteUrl(page.slug),
    });
  } else {
    breadcrumbSchema.push({
      "@type": "ListItem",
      position: 3,
      name: crumbs.current,
      item: absoluteUrl(page.slug),
    });
  }

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: h1For(page),
      serviceType: page.keyword || "septic tank service",
      provider: { "@type": "Organization", name: SITE_NAME, telephone: PHONE_E164, url: absoluteUrl() },
      areaServed: page.area,
      url: absoluteUrl(page.slug),
      description: fullIntro,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbSchema,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  if (isLocal) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: PHONE_E164,
      url: absoluteUrl(page.slug),
      areaServed: page.kind === "county" ? { "@type": "AdministrativeArea", name: page.area } : { "@type": "City", name: place },
      description: fullIntro,
    });
  }

  const kicker = isLocal ? place : page.area.replace(" (National)", "");

  return (
    <main>
      <JsonLd data={schemas} />
      <nav className="breadcrumb wrap" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link href={crumbs.hubPath}>{crumbs.hub}</Link>
        {isLocal && crumbs.parent && (
          <>
            <span aria-hidden="true"> / </span>
            <span>{crumbs.parent}</span>
          </>
        )}
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{crumbs.current}</span>
      </nav>

      <PageHero
        kicker={kicker}
        title={h1For(page)}
        lead={<p>{heroLeadFor(page)}</p>}
        ctaLabel="Ring us"
        imageKey={isLocal ? "hero-local" : imageKey}
        secondaryHref={isPillar ? "/services" : isLocal ? "/locations" : `/${PILLAR_SLUG}`}
        secondaryLabel={isPillar ? "All services" : isLocal ? "More areas" : "Main line"}
      />

      <div className="wrap article-layout">
        <article className="article-body">
          <p className="intro-line">{fullIntro}</p>

          <figure>
            <div className="inline-photo">
              <Image
                src={inline.src}
                alt={inline.alt}
                fill
                sizes="(max-width: 900px) 100vw, 720px"
                loading="lazy"
              />
            </div>
            <figcaption className="figure-caption">
              {inline.caption}
              <span className="figure-credit"> ({inline.credit})</span>
            </figcaption>
          </figure>

          {sections.map((section) => (
            <section key={section.h2} className="content-section">
              <h2>{section.h2}</h2>
              {section.paragraphs.map((para) => (
                <p key={para.slice(0, 48)}>{para}</p>
              ))}
            </section>
          ))}

          {links.length > 0 && (
            <section className="content-section">
              <h2>{isNational ? `${page.keyword} across Ireland` : isLocal ? `More in ${place}` : "Related services"}</h2>
              <ul className="link-row">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.anchor}</Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="faq-block" aria-labelledby="faq-heading">
            <h2 id="faq-heading">{faqHeadingFor(page)}</h2>
            {faqs.map((faq) => (
              <div className="faq-item" key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </section>
        </article>

        <aside className="side-panel">
          <h2>Ring us</h2>
          <p>Tell us where you are and what is happening. We will give you a straight answer on timing.</p>
          <a className="btn btn-primary btn-block" href={`tel:${PHONE_E164}`}>
            <span className="btn-label">Call</span>
            <span className="btn-value">{PHONE_DISPLAY}</span>
          </a>
        </aside>
      </div>
    </main>
  );
}
