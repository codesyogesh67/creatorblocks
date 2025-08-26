import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { navbarLinks } from "@/components/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const MobileNavbar = ({ open, setOpen }: Props) => {
  return (
    <div
      className={clsx(
        "px-4 md:hidden fixed z-40 top-0 right-0 bottom-0 bg-white w-[60%] shadow-md border-white/40",
        "transform transition-transform duration-400",
        open ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="py-6 flex justify-between items-center">
        <h4 className="font-semibold">Home</h4>
        <XMarkIcon
          onClick={() => setOpen(false)}
          className="w-6 h-6 cursor-pointer"
        />
      </div>
      <ul className="mt-4 flex flex-col space-y-4">
        {navbarLinks.map((l) => (
          <Link href={l.href} key={l.label}>
            <li className="hover:text-black/50">{l.label}</li>
          </Link>
        ))}
      </ul>
      <div className="mt-12 w-[80%] flex flex-col space-y-2 mx-auto">
        <Button>Get Early Access</Button>
        <Button>Log in</Button>
      </div>
    </div>
  );
};

export default MobileNavbar;
