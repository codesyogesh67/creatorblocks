import React from "react";
import { Button } from "@/components/ui/button";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { SiShadcnui } from "react-icons/si";
import {
  SiTiktok,
  SiInstagram,
  SiYoutube,
  SiSpotify,
  SiBehance,
} from "react-icons/si";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center text-center">
      <div className="mb-1 font-mono">
        <span className="cursor-pointer rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
          🚀 10 new blocks this month 🔥 Updated weekly
        </span>
      </div>

      {/* <div className="font-mono text-sm text-muted-foreground">
          Trusted by <span className="font-semibold">50+ creators</span>
        </div> */}
      <h1 className="text-4xl md:text-7xl font-bold tracking-tight max-w-5xl mx-auto">
        Grow your presence, block by block.
      </h1>
      <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
        CreatorBlocks is a growing library of beautifully designed, responsive
        blocks and templates. Perfect for creators, artists, and small
        businesses who want to launch professional pages in minutes without
        starting from scratch.
      </p>
      <div className="mt-8 flex justify-center gap-2">
        <Button>Browse Blocks</Button>
        <Button variant="outline">Browse Templates</Button>
      </div>
      <div className="mt-4 font-bold">
        <span className="text-xs text-muted-foreground block mb-2 mt-2">
          Built with
        </span>
        <div className="flex justify-center gap-4 text-2xl text-muted-foreground">
          <FaReact className="hover:text-cyan-500 transition-colors" />
          <RiNextjsFill className="hover:text-black dark:hover:text-white transition-colors" />
          <RiTailwindCssFill className="hover:text-sky-500 transition-colors" />
          <SiShadcnui className="hover:text-purple-500 transition-colors" />
          <IoLogoVercel className="hover:text-black dark:hover:text-white transition-colors" />
        </div>
      </div>
      <div className="mt-6">
        <span className="text-xs text-muted-foreground block mb-2">
          Made for Creators of
        </span>
        <div className="flex justify-center gap-4 text-2xl text-muted-foreground">
          <SiTiktok className="hover:text-pink-500 transition-colors" />
          <SiInstagram className="hover:text-pink-400 transition-colors" />
          <SiYoutube className="hover:text-red-500 transition-colors" />
          <SiSpotify className="hover:text-green-500 transition-colors" />
          <SiBehance className="hover:text-blue-500 transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
