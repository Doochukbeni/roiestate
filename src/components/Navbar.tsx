import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="border border-b border-gray-300 shadow-sm">
      <nav className="container flex items-center mx-auto justify-between py-4 px-6">
        <div>
          <Link href="/" className="flex items-center flex-wrap mx-0">
            <h1 className="text-zinc-500 tracking-tighter font-semibold text-2xl">
              Doo
            </h1>
            <span className="text-slate-800 text-2xl font-semibold">Homes</span>
          </Link>
        </div>
        <SearchBar />

        <div className="flex items-center">
          <ul className="hidden sm:flex items-center gap-6 ">
            <li>About</li>
            <li>Profile</li>
            <li>Contact</li>
          </ul>
          <Button variant="outline" size="sm" className="ml-3">
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
