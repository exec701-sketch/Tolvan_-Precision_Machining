import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { photos, type PhotoKey } from "@/content/images";

/** True when the photo file exists in public/. Checked at build time (server component). */
export function hasPhoto(key: PhotoKey) {
  return fs.existsSync(path.join(process.cwd(), "public", photos[key].src));
}

type PhotoProps = {
  name: PhotoKey;
  className?: string;
  sizes?: string;
  caption?: string;
};

/** Square-cornered photo with an optional mono caption. Renders nothing until the file exists. */
export function Photo({ name, className = "", sizes = "(min-width: 1024px) 50vw, 100vw", caption }: PhotoProps) {
  if (!hasPhoto(name)) return null;
  const p = photos[name];
  return (
    <figure className={className}>
      <Image src={p.src} alt={p.alt} width={p.width} height={p.height} sizes={sizes} className="block h-auto w-full" />
      {caption && <figcaption className="mt-3 font-mono text-sm text-steel-700">{caption}</figcaption>}
    </figure>
  );
}
