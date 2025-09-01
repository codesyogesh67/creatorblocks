"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { CodePreview } from "./CodePreview";

type BlockItem = {
  title: string;
  shortDescription: string;
  src: string;
  alt: string;
  category?: string; // e.g. "Hero", "Pricing", "CTA"
  tags?: string[];
};

export const BlockDetail = ({ blockData }: { blockData: BlockItem }) => {
  const { title, shortDescription, src, alt, category, tags = [] } = blockData;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section className="py-2 pt-20 md:pt-32">
      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">{title}</h1>

        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap justify-center gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="max-w-2xl mx-auto text-muted-foreground mb-4">
          {shortDescription}
        </p>
      </div>
      {/* CODE PREVIEW */}
      <CodePreview code={`<section className="py-20">Hello</section>`} />

      {/* IMAGE PREVIEW */}
      <div className="mt-10 relative flex items-center justify-center bg-muted p-6 rounded-xl shadow-lg">
        <div className="relative aspect-[4/3] w-[70%] overflow-hidden rounded-md shadow-sm bg-neutral-200">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(min-width:1280px) 40vw, (min-width:768px) 60vw, 90vw"
            className="object-contain rounded-md"
          />
        </div>
      </div>
    </section>
  );
};
