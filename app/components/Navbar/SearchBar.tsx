"use client";

import React, { useState } from 'react'
import Image from 'next/image';

const SearchBar = ({ theme }: { theme: string }) => {

    const [isSearchBarFocused, setIsSearchBarFocused] = useState<boolean>(false);
  
    return (
        <div
            className="relative">
            <input type="text" name="search-bar" placeholder="Caută noțiuni..." className="pr-9 pl-9 py-2 search-bar appearance-none" onFocus={() => setIsSearchBarFocused(!isSearchBarFocused)} onBlur={() => setIsSearchBarFocused(false)}/>
            <Image src={`/search-icon-${theme === "dark" ? "dark" : "light"}.png`} alt="search-icon" width={12} height={12} className={`absolute top-3.5 left-4 ${isSearchBarFocused ? "opacity-0" : "opacity-50"}`}></Image>
        </div>
    )
}

export default SearchBar