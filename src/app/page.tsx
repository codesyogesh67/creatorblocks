import Image from "next/image";
import Navbar from "@/components/commons/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/commons/Footer";
import Blocks from "@/components/sections/Blocks";
import Templates from "@/components/sections/Templates";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Blocks />
        <Templates />
      </main>
      <Footer />
    </>
  );
}
