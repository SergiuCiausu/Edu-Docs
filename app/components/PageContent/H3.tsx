"use client";

import Link from 'next/link';
import React from 'react'

export function replacementH3 ( h3text: string ) {
    const replacements: { [key: string]: string } = {
        'ă': 'a',
        'â': 'a',
        'î': 'i',
        'ș': 's',
        'ț': 't',
        'Ă': 'A',
        'Â': 'A',
        'Î': 'I',
        'Ș': 'S',
        'Ț': 'T',
      };

    const h3Id = h3text.replace(/[ăâîșțĂÂÎȘȚ]/g, (match) => replacements[match] || match).replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase().trim().replace(/\s+/g, "-");
    return h3Id;
}

const H3 = ({ h3text, indexH3 }: { h3text: string, indexH3?: number }) => {
  return (
    <div className="flex gap-2 items-center">
        <h3 id={`${replacementH3(h3text)}`}>{`${indexH3 >= 0 ? `${indexH3 >= 0 ? indexH3 + 1 : ""}. ` : ""}`}{h3text}</h3>
        <Link className="direct-link direct-link-h3" href={`#${replacementH3(h3text)}`} aria-label={`Link direct către ${h3text}`} title={`Link direct către ${h3text}`}></Link>
    </div>
  )
}

export default H3