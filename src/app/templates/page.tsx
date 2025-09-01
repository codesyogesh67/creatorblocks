import React from "react";
import TemplatesExplorer from "@/components/sections/TemplatesExplorer";
import Link from "next/link";
import { BreadCrumbs } from "@/components/navigation/BreadCrumbs";

interface Props {}

const Templates = (props: Props) => {
  return (
    <main className="py-4 px-4 sm:px-6 lg:px-20 xl:px-28 mx-auto max-w-7xl">
      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Templates", href: "/templates" },
        ]}
      />
      <div>
        <TemplatesExplorer />
      </div>
    </main>
  );
};

export default Templates;
