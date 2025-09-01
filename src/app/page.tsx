import Image from "next/image";
import Hero from "@/components/sections/Hero";
import TemplatesExplorer from "@/components/sections/TemplatesExplorer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlockExplorer from "@/components/sections/BlocksExplorer";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="py-4 px-4 sm:px-6 lg:px-20 xl:px-28 mx-auto max-w-7xl">
        <Hero />
        <BlockExplorer />
        <Link href="/blocks">
          <Button variant="outline">Browse all blocks</Button>
        </Link>
        <TemplatesExplorer />
        <Link href="/templates">
          <Button variant="outline">Browse all templates</Button>
        </Link>
      </main>
    </>
  );
}
