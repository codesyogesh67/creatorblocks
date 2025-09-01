// BlockCard.tsx
import Image from "next/image";
import Link from "next/link";

type BlockCardProps = {
  title: string;
  slug: string;
  href: string;
  src: string;
  alt: string;
  category?: string; // e.g. "Hero", "Feature", "CTA"
  tags?: string[];
  priority?: boolean;
};

export function BlockCard({
  title,
  href,
  src,
  alt,
  category,
  tags = [],
  priority,
}: BlockCardProps) {
  return (
    <Link
      href={href}
      aria-label={`Open block: ${title}`}
      className="group block rounded-xl border border-border bg-card overflow-hidden
     hover:shadow-lg hover:-translate-y-0.5 transition"
    >
      {/* IMAGE PREVIEW */}

      <div className="relative flex items-center justify-center bg-muted p-6">
        <div className="relative aspect-[4/3] w-[85%] overflow-hidden rounded-md shadow-sm">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width:1024px) 20vw, (min-width:640px) 30vw, 90vw"
            className="object-contain transition-transform duration-300"
            priority={priority}
            placeholder={typeof src === "object" ? "blur" : undefined}
          />
        </div>
      </div>

      {/* TEXT AREA */}
      <div className="p-4">
        <h3 className="font-semibold tracking-tight line-clamp-1">{title}</h3>

        <div className="mt-1 text-xs text-muted-foreground flex items-center gap-2">
          {category && <span className="capitalize">{category}</span>}

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-muted px-2 py-0.5 text-[11px]"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
