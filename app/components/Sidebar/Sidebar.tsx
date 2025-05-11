"use client";

import React, { useEffect, useLayoutEffect, useReducer, useState } from 'react'
import "@/app/globals.css";
import "./sidebar.css";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { replacementH2 } from '../PageContent/H2';
import { replacementH3 } from '../PageContent/H3';

interface HeaderGroup {
  h2: Array<Object>,
  h3: Array<Object>
}

const Sidebar = ({ profil, materie, clasa, titluri, isPageContent, isClasaContent, isMaterieContent, capitol, isCapitolContent, subCapitol, isSubCapitolContent, clickedLink, onLinkClick }: 
  { 
    profil?: string, 
    materie?: string, 
    clasa?: number, 
    titluri: HeaderGroup[], 
    isPageContent?: boolean, 
    isClasaContent?: boolean, 
    isMaterieContent?: boolean, 
    capitol?: string,
    isCapitolContent?: boolean,
    subCapitol?: string,
    isSubCapitolContent?: boolean,
    clickedLink?: string,
    onLinkClick?: void
  }) => {

  const router = useRouter();
  const [clickedLinkId, setClickedLinkId] = useState<string>(clickedLink ? replacementH2(clickedLink) : "");
  const pathname = usePathname();
  const pageUrl = pathname.split("/");

  useEffect(() => {
      if(titluri.length > 0 && clickedLinkId === "") {
          titluri.map(sectiune => {
              const link = sectiune.h2[0].link;
              if (link === pageUrl[pageUrl.length - 1].trim()) {
                setClickedLinkId(link);
                return;
              }
            }
          )
        }
  }, [clickedLinkId, pathname])

  const clase = [
    {
      text: "Clasa a IX-a",
      link: "clasa-a-ix-a"
    },
    {
      text: "Clasa a X-a",
      link: "clasa-a-x-a"
    },
    {
      text: "Clasa a XI-a",
      link: "clasa-a-xi-a"
    },
    {
      text: "Clasa a XII-a",
      link: "clasa-a-xii-a"
    },
  ]

  const limbiStraine = [
    {
      nume: "Limba engleză",
      link: "limba-engleza"
  },
  {
      nume: "Limba franceză",
      link: "limba-franceza"
  },
  {
      nume: "Limba germană",
      link: "limba-germana"
  },
  {
      nume: "Limba italiană",
      link: "limba-italiana"
  },
  {
      nume: "Limba spaniolă",
      link: "limba-spaniola"
  },
  ]

  const handleLinkClick = (linkId: string, event: React.MouseEvent) => {
    event.preventDefault();

    const element = document.getElementById(linkId);
    onLinkClick(linkId)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const headerOffset = 150;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
      });
  }
  }

  const materieLink = replacementH2(materie ? materie : "");
  const profilLink = replacementH2(profil ? profil : "");
  const capitolLink = replacementH2(capitol ? capitol : "");
  const subCapitolLink = replacementH2(subCapitol ? subCapitol : "");
  

  return (
    <div className={`sidebar p-8 sticky h-[85vh] top-[135px] overflow-y-auto w-[308px]`}>
      <div>
        <p className="sidebar-header">
          {!isMaterieContent 
          ? <Link 
              href={`/materii/${materie === undefined ? "" : materieLink}`}>
                {materie === undefined 
                ? "Materii școlare" 
                : materie}
            </Link> 
          : `${materie === undefined 
                ? "Materii școlare" 
                : materieLink}`}
              {profil ? ", " : ""}
              {profil && !isClasaContent 
              ? <Link 
                href={`/materii/${materieLink}/${profilLink}`}>
                  {profil === "mate info" 
                  ? "mate-info" 
                  : profil}
                </Link> 
              : ""}
              {profil && isClasaContent 
              ? `${profil === "mate info" 
                ? "mate-info" 
                : profil}` 
              : ""}
              {capitol 
              ? ", " 
              : ""}
              {capitol && !isCapitolContent
              ? <Link 
                  href={`/materii/${materieLink}/${profilLink}/${capitol}`}>
                    {capitol}
                  </Link> 
              : `${subCapitol ? ", " : ""}`}
              {capitol && isCapitolContent
              ? capitol
              : `${subCapitol ? ", " : ""}`}
              {subCapitol && !isSubCapitolContent
              ? <Link 
                  href={`/materii/${materieLink}/${profilLink}/${capitol}/${subCapitol}`}>
                    {subCapitol}
                  </Link>
              : ""}
              {subCapitol && isSubCapitolContent
              ? subCapitol
              : ""}
              </p>
          <div>
          {((isPageContent && !isCapitolContent) || (!isPageContent && isCapitolContent)) && 
          <Link 
            href={`/materii/${materieLink}/${profilLink}/${clasa && clase[clasa - 9].link}`}>
              <p className="sidebar-clasa-header">
                {clasa && clase[clasa - 9].text}
              </p>
            </Link>}
          <div
            className={`flex flex-col gap-2`}>
            {titluri?.map((headerGroup: HeaderGroup, index: number) => {
              return (
                <div
                  className="flex flex-col gap-1">
                  <Link key={index} id={`h2id${index}`} href={`/materii/${materie === undefined ? "" : materieLink}/${profil ? profilLink : headerGroup.h2[0].link}/${profil ? `${clasa ? clase[clasa - 9].link : `${materie === "limbi străine" ? limbiStraine[index].link : clase[index].link}`}/${capitol ? `${capitolLink}/` : ""}${subCapitol ? `${subCapitolLink}/` : ""}${clasa ? headerGroup.h2[0].link : ""}` : ""}`} className={`${isPageContent ? "my-1" : ""}`}><p className="sidebar-link">{headerGroup.h2[0].text}</p></Link>
                  {headerGroup.h3.map((h3, indexH3) => (
                    (isPageContent && clickedLinkId === headerGroup.h2[0].link)
                    ? <Link key={indexH3} id={`h3id${indexH3}`} href={`/materii/${materie === undefined ? "" : materieLink}${profil ? `/${profilLink}` : ""}/${`${clasa ? clase[clasa - 9].link : clase[indexH3].link}/`}${clasa ? headerGroup.h2[0].link : ""}#${h3.link}`} className={`sidebar-link-h3 my-1 ${clickedLinkId === h3.link ? "underline" : ""}`} onClick={(event) => handleLinkClick(h3.link, event)}>{h3.text}</Link>
                    : ""
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar