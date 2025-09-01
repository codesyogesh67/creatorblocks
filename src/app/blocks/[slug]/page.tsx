"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BreadCrumbs } from "@/components/navigation/BreadCrumbs";
import { blocksGallery } from "@/lib/blocks.gallery";
import { BlockDetail } from "@/components/sections/BlockDetail";

interface Props {}

const page = (props: Props) => {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);

  const blockData = blocksGallery.find((t) =>
    t.href.endsWith(`/${segments[1]}`)
  );

  return (
    <div className="py-4 px-4 sm:px-6 lg:px-20 xl:px-28 mx-auto max-w-7xl">
      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blocks", href: "/blocks" },
          { label: segments[1], href: `/blocks/${segments[1]}` },
        ]}
      />
      <BlockDetail blockData={blockData} />
    </div>
  );
};

export default page;
