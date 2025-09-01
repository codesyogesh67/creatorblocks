import React from "react";
import { navbarLinks } from "@/components/data";
import Link from "next/link";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="mt-20 border-t bg-muted/30">
      <div className="px-4 sm:px-6 md:px-6 lg:px-20 xl:px-28 mx-auto max-w-7xl py-8">
        <div className="flex flex-col md:flex-row justify-between ">
          <div>
            <h1 className="text-xl font-bold">CreatorBlocks.com</h1>
            <p className="mt-1 text-sm text-muted-foreground max-w-sm lg:max-w-lg">
              A growing library of ready-to-use blocks and templates for
              creators, artists, and small businesses.
            </p>
          </div>
          <nav className="mt-4">
            <ul className="flex flex-wrap  justify-start  md:justify-end gap-4 text-sm text-foreground">
              {navbarLinks.map((l) => (
                <Link key={l.label} href={l.href}>
                  <li className="text-sm hover:text-muted-foreground">
                    {l.label}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <div className="h-[1px] w-full my-6 bg-border " />
        <div className="flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CreatorBlocks. All rights reserved.
          </p>

          {/* Optional: socials */}
          <div className="flex items-center gap-3 text-muted-foreground">
            {/* Replace with your icons/links */}
            <Link href="#" className="text-sm hover:text-foreground">
              GitHub
            </Link>
            <span className="text-xs text-border">•</span>
            <Link href="#" className="text-sm hover:text-foreground">
              Twitter
            </Link>
            <span className="text-xs text-border">•</span>
            <Link href="#" className="text-sm hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
