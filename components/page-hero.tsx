import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ImageKey } from "@/lib/images";
import { getPhoto } from "@/lib/images";
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/pages";

type PageHeroProps = {
  kicker?: string;
  title: string;
  lead: ReactNode;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  variant?: "home" | "page";
  imageKey?: ImageKey;
};

export function PageHero({
  kicker,
  title,
  lead,
  ctaLabel = "Give us a ring",
  secondaryHref,
  secondaryLabel,
  variant = "page",
  imageKey = "hero-service",
}: PageHeroProps) {
  const photo = getPhoto(variant === "home" ? "hero-home" : imageKey);

  return (
    <section className={`cover-hero cover-hero--${variant}`}>
      <div className="cover-hero-media">
        <Image src={photo.src} alt={photo.alt} fill priority sizes="100vw" className="cover-hero-img" />
        <div className="cover-hero-scrim" aria-hidden="true" />
      </div>
      <div className="wrap cover-hero-content">
        {kicker && <p className="cover-kicker">{kicker}</p>}
        <h1>{title}</h1>
        <div className="cover-lead">{lead}</div>
        <div className="cover-actions">
          <a className="btn btn-light" href={`tel:${PHONE_E164}`}>
            <span className="btn-label">{ctaLabel}</span>
            <span className="btn-value">{PHONE_DISPLAY}</span>
          </a>
          {secondaryHref && secondaryLabel && (
            <Link className="btn btn-outline-light" href={secondaryHref}>{secondaryLabel}</Link>
          )}
        </div>
        <p className="cover-credit">{photo.caption} — {photo.credit}</p>
      </div>
    </section>
  );
}
