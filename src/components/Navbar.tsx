import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = async () => {
  const session = {};
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
          <Link
            href={"/sign-in"}
            className={cn(
              buttonVariants(),
              "ml-3 bg-zinc-300 text-slate-900 hover:text-slate-800 hover:bg-zinc-400 transition-colors"
            )}
          >
            {session ? "Sign out" : "Sign in"}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
