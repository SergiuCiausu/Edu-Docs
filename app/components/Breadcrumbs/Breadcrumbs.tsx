"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import "./breadcrumbs.css";
import Image from 'next/image';

const Breadcrumbs = ({ theme }: { theme: string }) => {

  const pathName = usePathname();
  const urls = pathName.slice(1, pathName.length).split("/");
  let path = "";

  return (
    <div
      className="flex flex-wrap items-center">
      <Link href="/" className={`breadcrumb flex items-center`} style={{ transform: "translateY(-2.5px)"}}><Image src={`/home-icon-${theme === "dark" ? "dark" : "light"}.png`} alt="home icon" width={16} height={14} style={{ transform: "translateY(2px)"}}></Image></Link>
      {urls.map((url, index) => {

          path += `/${url}`
        
        if (index < urls.length)
        { 
          return (
            <Link href={`${path}`} className={`breadcrumb`}>{url.charAt(0).toUpperCase() + url.slice(1, url.length)}</Link>
          )
        }
    })}
    </div>
  )
}

export default Breadcrumbs