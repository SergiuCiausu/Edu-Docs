"use client";

import Link from 'next/link';
import React from 'react'

export function replacementH2 ( h2text: string ) {
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

    const h2Id = h2text.replace(/[ăâîșțĂÂÎȘȚ]/g, (match) => replacements[match] || match).replace(/[^a-zA-Z0-9 -]/g, '').toLowerCase().trim().replace(/\s+/g, "-");
    return h2Id;
}

export const H2 = ({ h2text, indexH2, indexLectie }: { h2text: string, indexH2?: number, indexLectie?: number }) => {

  return (
    <div className="flex gap-2 items-center">
        <h2 id={`${replacementH2(h2text)}`}>{`${indexLectie >= 0 && indexH2 >= 0 ? `${indexLectie >= 0 ? indexLectie : ""}.${indexH2 >= 0 ? indexH2 + 1 : ""}. ` : ""}`}{h2text}</h2>
        <Link className="direct-link" href={`#${replacementH2(h2text)}`} aria-label={`Link direct către ${h2text}`} title={`Link direct către ${h2text}`}></Link>
    </div>
  )
}