import React from "react";
import { templatesGallery } from "@/lib/templates.gallery";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TemplateCard } from "./TemplateCard";

interface Props {
  limit?: number;
}

const TemplatesExplorer = ({ limit }: Props) => {
  const items =
    typeof limit === "number"
      ? templatesGallery.slice(0, limit)
      : templatesGallery;
  return (
    <div className="py-2 pt-20 md:pt-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold mb-2">
          Launch-ready templates for creators
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
          Pick from curated, production-ready templates built with Next.js,
          Tailwind, and shadcn/ui. Each template bundles polished blocks (hero,
          features, pricing, FAQ, and more) so you can customize and ship in
          minutes.
        </p>
      </div>
      <div>
        <div className="py-4 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <TemplateCard
              key={t.slug}
              title={t.title}
              slug={t.slug}
              href={t.href}
              src={t.src}
              alt={t.alt}
              sectionsCount={t.sections?.length}
              tags={t.tags}
              priority={i === 0} // only if it's above the fold
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatesExplorer;
