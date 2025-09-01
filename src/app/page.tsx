import Image from "next/image";
import Navbar from "@/components/commons/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/commons/Footer";
import Blocks from "@/components/sections/Blocks";
import TemplatesExplorer from "@/components/sections/TemplatesExplorer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="py-4 px-4 sm:px-6 lg:px-20 xl:px-28 mx-auto max-w-7xl">
        <Hero />
        <Blocks />
        <TemplatesExplorer />
        <Link href="/templates">
          <Button variant="outline">Browse all templates</Button>
        </Link>
      </main>
    </>
  );
}
