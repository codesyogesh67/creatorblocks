import React from "react";
import TemplatesExplorer from "@/components/sections/TemplatesExplorer";
import Link from "next/link";

interface Props {}

const Templates = (props: Props) => {
  return (
    <main className="py-4 px-4 sm:px-6 lg:px-20 xl:px-28 mx-auto max-w-7xl">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex items-center gap-1">
          <li>
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
          </li>
          <li aria-hidden className="px-1">
            /
          </li>
          <li className="text-foreground font-medium">Templates</li>
        </ol>
      </nav>
      <div>
        <TemplatesExplorer />
      </div>
    </main>
  );
};

export default Templates;
