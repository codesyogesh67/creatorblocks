"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Boxes,
  CalendarClock,
  Code2,
  FileCode2,
  Layers,
  LibraryBig,
  MonitorSmartphone,
  Rocket,
  Sparkles,
} from "lucide-react";

type Props = {
  version?: string;
  updatedAt?: string; // e.g., "Aug 27, 2025"
  techStack?: string[];
  features?: string[];
  sections: string[];
};

export default function TemplateSpecs({
  version = "1.0.0",
  updatedAt = "Aug 27, 2025",
  techStack = [
    "Next.js 14+",
    "React 18",
    "shadcn/ui (latest)",
    "Tailwind CSS 3/4",
    "TypeScript",
    "Markdown & MDX",
    "Figma source",
  ],
  features = [
    "100+ reusable components",
    "10+ ready pages",
    "Block-based sections (plug & play)",
    "Responsive, mobile-first design",
    "SEO meta + sitemap",
    "Dark mode ready",
    "Docs powered by Starlight or MDX",
    "Blog & Changelog via MDX",
    "Content collections (CMS-friendly)",
    "Accessible by default (WCAG-minded)",
  ],
  sections,
}: Props) {
  return (
    <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        {/* Specs */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Sparkles className="size-4" /> Specs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Template Version</span>
              <Badge variant="secondary" className="font-mono">
                {version}
              </Badge>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Last Updated</span>
              <div className="inline-flex items-center gap-2">
                <CalendarClock className="size-4 text-muted-foreground" />
                <span>{updatedAt}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tech Stack */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Code2 className="size-4" /> Tech Stack
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {techStack.map((item) => (
              <Badge key={item} variant="outline" className="whitespace-nowrap">
                {item}
              </Badge>
            ))}
          </CardContent>
        </Card>

        {/* Quick Facts */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <LibraryBig className="size-4" /> Sections
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4 text-sm">
            {sections.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Features */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Rocket className="size-4" /> Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid list-disc gap-2 pl-5 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="leading-relaxed">
                {f}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
