// BlockExplorer.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlockCard } from "./BlockCard";
// Adjust this import path to wherever you store your blocks data
import { blocksGallery } from "@/lib/blocks.gallery";

type Props = {
  title?: string;
  subtitle?: string;
};

const BlockExplorer: React.FC<Props> = ({
  title = "Production-ready blocks for your pages",
  subtitle = "Drop-in sections for hero, features, pricing, FAQ, footer, and more. Built with Tailwind and shadcn/ui—easy to customize and reuse.",
}) => {
  return (
    <section className="py-2 pt-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold mb-2">{title}</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
          {subtitle}
        </p>
      </div>

      <div className="py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blocksGallery.map((b, i) => (
          <BlockCard
            key={b.slug}
            title={b.title}
            slug={b.slug}
            href={b.href}
            src={b.src}
            alt={b.alt}
            category={b.category} // e.g., "Hero", "Features", "CTA"
            tags={b.tags} // e.g., ["dark", "saas", "minimal"]
            priority={i < 3} // prioritize first row for LCP
          />
        ))}
      </div>
    </section>
  );
};

export default BlockExplorer;
