"use client";

import { assets } from "@/assets/assets";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <img
          src={assets.menu_icon}
          className="w-5 cursor-pointer"
          alt="menu option"
        />
      </SheetTrigger>
      <SheetContent className="space-y-5">
        <SheetTitle className="text-gray-700 uppercase font-bold">
          Navigation
        </SheetTitle>
        <SheetDescription className="flex flex-col gap-5 font-semibold uppercase">
          <Link className="hover:text-gray-700" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-700" to="/collection">
            Collection
          </Link>
          <Link className="hover:text-gray-700" to="/about">
            About
          </Link>
          <Link className="hover:text-gray-700" to="/contact">
            Contact
          </Link>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
