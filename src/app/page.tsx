import Image from "next/image";
import Navbar from "@/components/commons/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/commons/Footer";
import Blocks from "@/components/sections/Blocks";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Blocks />
      </main>
      <Footer />
    </>
  );
}
