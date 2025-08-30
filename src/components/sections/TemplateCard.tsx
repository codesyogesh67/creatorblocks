// TemplateCard.tsx
import Image from "next/image";
import Link from "next/link";

type TemplateCardProps = {
  title: string;
  slug: string;
  href: string;
  src: string;
  alt: string;
  sectionsCount?: number;
  tags?: string[];
  priority?: boolean;
};

export function TemplateCard({
  title,
  href,
  src,
  alt,
  tags = [],
  sectionsCount,
  priority,
}: TemplateCardProps) {
  return (
    <Link
      href={href}
      aria-label={`Open template: ${title}`}
      className="group block rounded-xl border border-border bg-card overflow-hidden
                 hover:shadow-lg hover:-translate-y-0.5 transition"
    >
      {/* IMAGE AREA */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          priority={priority}
          placeholder={typeof src === "object" ? "blur" : undefined}
        />
      </div>

      {/* TEXT AREA */}
      <div className="p-4">
        <h3 className="font-semibold tracking-tight line-clamp-1">{title}</h3>

        <div className="mt-1 text-xs text-muted-foreground flex items-center gap-2">
          {typeof sectionsCount === "number" && (
            <span>{sectionsCount} sections</span>
          )}
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
