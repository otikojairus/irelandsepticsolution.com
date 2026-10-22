import Image from "next/image";
import Link from "next/link";
import type { ImageKey } from "@/lib/images";
import { getPhoto } from "@/lib/images";

type PhotoCardProps = {
  href: string;
  title: string;
  subtitle?: string;
  imageKey: ImageKey;
};

export function PhotoCard({ href, title, subtitle, imageKey }: PhotoCardProps) {
  const photo = getPhoto(imageKey);
  return (
    <Link href={href} className="photo-card">
      <Image src={photo.src} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" className="photo-card-img" />
      <div className="photo-card-scrim" aria-hidden="true" />
      <div className="photo-card-text">
        <span className="photo-card-title">{title}</span>
        {subtitle && <span className="photo-card-sub">{subtitle}</span>}
      </div>
    </Link>
  );
}
