"use client";

import React, { useEffect, useRef, useState } from 'react'
import { replacementH2 } from './H2'
import { replacementH3 } from './H3'
import "./toc.css";
import Link from 'next/link';

interface Toc {
    h2: string,
    h3: Array<string>
}

interface HeaderGroup {
    h2: string,
    h3: Array<string>
}

const TableOfContents = ({ toc, indexLectie, clickedLink, onLinkClick }: { toc: Toc[], indexLectie?: number, clickedLink?: string, onLinkClick?: void }) => {

    const [clickedLinkId, setClickedLinkId] = useState<string>(toc.findIndex(heading => replacementH2(heading.h2) === clickedLink) === -1 ? "" : replacementH2(clickedLink));

    useEffect(() => {
        if (toc.length > 0 && clickedLinkId === "") {
            setClickedLinkId(replacementH2(toc[0].h2));
        }
        if (toc.findIndex(heading => replacementH2(heading.h2) === clickedLink) !== -1 ) {
            setClickedLinkId(clickedLink);
        }
    }, [clickedLinkId, clickedLink]);

    const handleLinkClick = (linkId: string, event: React.MouseEvent) => {
        event.preventDefault();

        setClickedLinkId(linkId);
        onLinkClick(linkId);

        const element = document.getElementById(linkId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });

            const headerOffset = 150;
            const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        }
        
    };

  return (
    <div>
        <p className="toc-header">Puncte importante din această pagină</p>
        { 
            toc.map((headerGroup: HeaderGroup, index: number) => {
            let linkId = replacementH2(headerGroup.h2);
            return (
                <div>
                    <button key={index} className="text-left my-1">
                        <Link className={`toc-link${clickedLinkId === linkId ? " toc-link-underline" : ""}`} href={`#${linkId}`} id={linkId} onClick={(event) => handleLinkClick(linkId, event)}>{`${indexLectie >= 0 ? `${indexLectie}.${index + 1}. ` : ""}`}{headerGroup.h2}</Link>
                    </button>
                    <div
                        className="flex flex-col">
                        {
                            headerGroup.h3.map((h3: string, indexH3: number) => {
                                let linkIdH3 = replacementH3(h3);
                                return (
                                    <button key={indexH3} className="text-left px-4 my-1">
                                        <Link className={`toc-link${clickedLinkId === linkIdH3 ? " toc-link-underline" : ""}`} href={`#${linkIdH3}`}  onClick={(event) => handleLinkClick(linkIdH3, event)}>{h3}</Link>
                                    </button>
                                )
                        })}
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default TableOfContents;