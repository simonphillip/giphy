import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import router from "next/router";

const SearchInput: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleOnSearchClick = () => {
    router.push(`/search?q=${searchValue}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleOnSearchClick();
    }
  };

  return (
    <div className="flex w-full mt-1 relative rounded-md shadow-sm border">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search..."
        id="search-input"
        className="rounded-l-md rounded-r-none py-3 w-full px-4"
      />
      <button
        className="border border-gray-100 px-4 bg-white hover:bg-gray-100"
        onClick={handleOnSearchClick}
        aria-label="Search icon"
      >
        <MagnifyingGlassIcon width={24} height={24} />
      </button>
    </div>
  );
};

export default SearchInput;
