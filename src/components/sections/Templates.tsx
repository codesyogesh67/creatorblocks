import React from "react";
import { templatesGallery } from "@/lib/templates.gallery";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TemplateCard } from "./TemplateCard";

interface Props {}

const Templates = (props: Props) => {
  return (
    <div className="px-2 sm:px-4 md:px-10 lg:px-20 xl:px-28 max-w-7xl mx-auto py-2 md:py-32">
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
          {templatesGallery.map((t, i) => (
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
        <Button variant="outline">Browse all templates</Button>
      </div>
    </div>
  );
};

export default Templates;
