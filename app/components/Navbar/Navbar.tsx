import React from "react";
import Image from 'next/image';
import "./navbar.css";
import "@/app/globals.css"
import NavLink from "./NavLinks";
import NavLinks from "./NavLinks";
import NavBtns from "./NavBtns";
import SearchBar from "./SearchBar";
import NavAccount from "./NavAccount";

const Navbar = ({ theme, onThemeChange, outOfContentArea }: { theme: string, onThemeChange: void, outOfContentArea?: boolean }) => {

  return (
    <header
        className="sticky top-0 overflow-y-auto">
        <nav
            className="flex items-center justify-between w-[1520px] mx-auto mb-2">
            <div
                className="flex items-center py-8">
                <ul>
                    <li className="nav-text mr-[89px]">Logo</li>
                </ul>
                <NavLinks />
            </div>
            <div
                className="flex items-center gap-16">
                <NavAccount theme={theme}/>
                <NavBtns theme={theme} onClick={onThemeChange} outOfContentArea={outOfContentArea}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar