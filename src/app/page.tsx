import Image from "next/image";
import Navbar from "@/components/commons/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/commons/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
