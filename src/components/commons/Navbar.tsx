"use client";

import React, { useState } from "react";
import { navbarLinks } from "@/components/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import MobileNavbar from "./MobileNavbar";

interface Props {}

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-black/10 shadow-md">
        <nav className="px-4 sm:px-6 md:px-6 lg:px-20 xl:px-28 mx-auto max-w-7xl">
          <div className="py-6 flex justify-between items-center">
            <Link href="/">
              <h2 className="font-bold">CreatorBlocks.com</h2>
            </Link>
            <ul className="hidden md:flex text-sm font-semibold">
              {navbarLinks.map((l) => (
                <Link key={l.label} href={l.href}>
                  <li className="hover:bg-gray-100 p-2 px-4 rounded-sm">
                    {l.label}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="hidden md:block space-x-2">
              <Button>Get Early Access</Button>
              <Button>Log in</Button>
            </div>
            <Bars3Icon
              onClick={() => setOpen(!open)}
              className="md:hidden cursor-pointer w-8 h-8 border border-black/10 shadow-sm rounded-xs p-1 hover:bg-black/10 hover:scale-[1.05] transition-all"
            />
          </div>
        </nav>
      </header>
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
      {/* {open && <MobileNavbar open={open} setOpen={setOpen} />} */}
      <MobileNavbar open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
