import React from "react";
import { blocksGallery } from "@/lib/blocks.gallery";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Props {}

const Blocks = (props: Props) => {
  return (
    <div className="py-10">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-semibold mb-2">
          Beautifully designed blocks for every page.
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Choose from a growing collection of responsive, ready-to-use blocks —
          from hero sections to pricing tables. Each block is polished,
          accessible, and built to fit seamlessly into your landing pages.
        </p>
      </div>
      <div className="py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blocksGallery.map((block) => (
          <div
            key={block.slug}
            className="relative p-2 w-full aspect-[16/9] overflow-hidden rounded-xl border bg-gray-50"
          >
            <h4 className="px-4 font-bold mb-4 capitalize">{block.category}</h4>
            <Image
              src={block.src}
              width={1200}
              height={675}
              alt="image"
              className="border border-gray-100"
            />
          </div>
        ))}
      </div>
      <Button variant="outline">Browse for all blocks</Button>
    </div>
  );
};

export default Blocks;
