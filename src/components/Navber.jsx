"use client";

import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import MobileNav from "./MobileNav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const Navber = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/" className="w-36 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={assets.logo}
          alt="Forever icon"
        />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {/* HOME */}
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <h3 className="uppercase">Home</h3>
          <hr className=" w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>

        {/* COLLECTION */}
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <h3 className="uppercase">Collection</h3>
          <hr className=" w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>

        {/* ABOUT */}
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <h3 className="uppercase">About</h3>
          <hr className=" w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>

        {/* CONTACT */}
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <h3 className="uppercase">Contact</h3>
          <hr className=" w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="search icon"
        />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt="profile icon"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="flex flex-col items-start gap-2">
              <Link to="/">My Profile</Link>
              <Link to="/">Orders</Link>
              <Button
                className="font-semibold -px-4  hover:no-underline"
                variant="link"
              >
                Log Out
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* BUSKET */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5"
            alt="busket icon"
          />
          <p className=" absolute -right-[5px] -bottom-[5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            0
          </p>
        </Link>

        {/* MOBILE NAV MENU ITEM */}
        <MobileNav />
      </div>
    </div>
  );
};

export default Navber;
