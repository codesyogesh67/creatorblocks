import React from "react";
import type { TemplateItem } from "@/lib/templates.gallery";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TemplateSpecs from "./TemplateSpecs";

interface Props {}

export const TemplateDetail = ({
  templateData,
}: {
  templateData: TemplateItem;
}) => {
  const { title, shortDescription, src, sections, tags } = templateData;
  return (
    <section className="py-2 pt-20 md:pt-32 mb-20">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">{title}</h1>
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
        <p className="max-w-2xl mx-auto text-muted-foreground mb-2">
          {shortDescription}
        </p>
        <p className="inline-block bg-green-200 p-2 rounded-md text-sm text-green-800">
          Get lifetime access to all{" "}
          <span className="font-semibold">templates</span> on the{" "}
          <Link
            href="/"
            className="underline text-green-900 hover:text-green-700"
          >
            premium plan
          </Link>
        </p>
        <div className="mt-8 flex justify-center gap-2">
          <Button>Buy Template</Button>
          <Button variant="outline">Preview Demo</Button>
        </div>
      </div>

      <div
        className="relative w-full aspect-[16/9] overflow-hidden rounded-xl 
      shadow-lg"
      >
        <div className="absolute inset-0 bg-neutral-200">
          <Image
            src={src}
            fill
            alt={`${title} preview`}
            priority
            sizes="(min-width: 1280px) 1024px, (min-width: 768px) 80vw, 100vw"
            className="
                     object-contain
                      rounded-xl
                     
                    
                    "
          />
        </div>
      </div>
      <TemplateSpecs sections={sections} />
    </section>
  );
};
