"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type Crumb = { label: string; href?: string };

export function BreadCrumbs({
  items,
  separator = "/",
  className = "",
}: {
  items: Crumb[];
  separator?: React.ReactNode;
  className?: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-sm text-muted-foreground ${className}`}
    >
      <ol className="flex items-center gap-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={`${item.label}-${i}`}
              className={isLast ? "text-foreground font-medium" : undefined}
            >
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              ) : (
                <span className="capitalize">{item.label}</span>
              )}
              {!isLast && (
                <span aria-hidden className="px-1">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
