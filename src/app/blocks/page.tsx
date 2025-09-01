import React from "react";
import BlocksExplorer from "@/components/sections/BlocksExplorer";
import Link from "next/link";
import { BreadCrumbs } from "@/components/navigation/BreadCrumbs";

interface Props {}

const Blocks = (props: Props) => {
  return (
    <main className="py-4 px-4 sm:px-6 lg:px-20 xl:px-28 mx-auto max-w-7xl">
      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blocks", href: "/blocks" },
        ]}
      />
      <div>
        <BlocksExplorer />
      </div>
    </main>
  );
};

export default Blocks;
