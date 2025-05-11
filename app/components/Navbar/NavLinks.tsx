import React from 'react'
import "./navbar.css";
import "@/app/globals.css"
import Link from 'next/link';
import { replacementH2 } from '../PageContent/H2';

const NavLinks = () => {

    const navLinks = ["Introducere", "Materii", "Ghiduri și activități", "Exerciții și probleme"];

  return (
    <ul
      className="flex items-center gap-8">
        {navLinks.map((link, index) => (
          <li key={index} className="nav-text select-none"><Link href={`/${replacementH2(link)}`}>{link}</Link></li>
      ))}
    </ul>
  )
}

export default NavLinks