/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description Search Article input component for the article page
 */

// use client
"use client";

// node_modules
import { useState } from "react";

const SearchArticleInput = () => {
  const [searchText, setSearchText] = useState<string>("");

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col my-5  md:h-2/3 m-auto" onSubmit={formSubmitHandler}>
      <input
        className="w-full p-3 rounded text-xl border-none text-gray-800 bg-gray-200 outline-gray-300"
        type="search"
        placeholder="Search for article"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default SearchArticleInput;
