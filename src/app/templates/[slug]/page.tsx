"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BreadCrumbs } from "@/components/navigation/BreadCrumbs";
import { templatesGallery } from "@/lib/templates.gallery";
import { TemplateDetail } from "@/components/sections/TemplateDetail";

interface Props {}

const page = (props: Props) => {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);

  const templateData = templatesGallery.find((t) =>
    t.href.endsWith(`/${segments[1]}`)
  );

  return (
    <div className="py-4 px-4 sm:px-6 lg:px-20 xl:px-28 mx-auto max-w-7xl">
      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Templates", href: "/templates" },
          { label: segments[1], href: `/templates/${segments[1]}` },
        ]}
      />
      <TemplateDetail templateData={templateData} />
    </div>
  );
};

export default page;
