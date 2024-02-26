import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <form className="bg-slate-200 text-slate-700 p-2 rounded-lg flex items-center">
      <input
        type="text"
        className="bg-none focus:outline-none bg-transparent focus:ring-0"
        placeholder="Search..."
      />
      <Search className="text-2xl text-zinc-400" />
    </form>
  );
};

export default SearchBar;
