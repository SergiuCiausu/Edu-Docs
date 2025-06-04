"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-chimie-9";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';

const Page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Reacții redox"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
    ["Acid sulfuric + hidroxid de sodiu", "Acid azotic + hidroxid de calciu"],
    [""],
  ]
  
  const [clickedLinkId, setClickedLinkId] = useState<string>(h1);

  const updateClickedLinkId = (newClickedLinkId: string) => {
    setClickedLinkId(newClickedLinkId);
  }

  const toc = h2s.map((h2, index) => {
    return {h2: h2, h3: h3s[index]};
  });

  const indexH2 = ( h2text: string ) => {
    return h2s.findIndex(h2 => h2 === h2text);
  }

  return (
    <div>
        <Navbar theme={theme} onThemeChange={setTheme}/>
        <section className="flex">
          <aside>
            <Sidebar 
              profil="mate info" 
              materie="chimie" 
              clasa={9} 
              titluri={titluri}
              isPageContent={true}
              clickedLink={clickedLinkId}
              onLinkClick={updateClickedLinkId}
            />
          </aside>
          <main
            className="flex-1">
            <div
              className="w-[1263px] mx-auto">
              <Breadcrumbs theme={theme}/>
              <div
                className="flex gap-12">
                <div
                  className="py-16 flex-1">
                  <h1>{`${titluri.length > 1 ? `Capitolul ${indexLectie}: ` : ""}${h1}`}</h1>
                  <H2 h2text="Ce sunt reacțiile redox?" indexH2={indexH2("Ce sunt reacțiile redox?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Reacțiile redox sunt reacții chimice în care are loc transfer de electroni între specii chimice. Aceste reacții implică <strong>două procese simultane</strong>:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Oxidare</strong> = pierdere de electroni (creștere a numărului de oxidare)</li>
                    <li><strong>Reducere</strong> = câștig de electroni (scădere a numărului de oxidare)</li>
                  </ul>
                  <p>
                  Redox = REDucere+OXidare
                  </p>
                  <H2 h2text="Numărul de oxidare (N.O.)" indexH2={indexH2("Numărul de oxidare (N.O.)")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Numărul de oxidare</strong> este o valoare ipotetică ce indică sarcina pe care un atom ar avea-o într-un compus, dacă legăturile ar fi 100% ionice.
                  </p>
                  <p>
                  Exemple:
                  </p>
                  <ul className={ulClass}>
                    <li>H → +1 (în majoritatea compușilor)</li>
                    <li>O → –2 (cu excepții: peroxizi –1)</li>
                    <li>Na → +1 în NaCl</li>
                    <li>Cl → –1 în NaCl</li>
                  </ul>
                  <H2 h2text="Exemplu simplu de reacție redox" indexH2={indexH2("Exemplu simplu de reacție redox")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                    Zn + Cu<sup>2+</sup> → Zn<sup>2+</sup> + Cu
                  </p>
                  <ul className={ulClass}>
                    <li>Zn: 0 → +2 → se oxidează (pierde electroni)</li>
                    <li>Cu²⁺: +2 → 0 → se reduce (câștigă electroni)</li>
                  </ul>
                  <p>
                    <strong>Reacții parțiale:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Oxidare: Zn → Zn<sup>2+</sup> + 2e<sup>-</sup></li>
                    <li>Reducere: Cu<sup>2+</sup> + 2e<sup>-</sup> → Cu</li>
                  </ul>
                  <H2 h2text="Caracteristici ale reacțiilor redox" indexH2={indexH2("Caracteristici ale reacțiilor redox")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>Au loc <strong>modificări de numere de oxidare</strong>;</li>
                    <li>Se pot scrie <strong>ecuatii ionice și parțiale</strong>;</li>
                    <li>Implică întotdeauna un <strong>agent oxidant</strong> și un <strong>agent reducător</strong>;</li>
                    <li>Sunt fundamentale în <strong>procese biologice, industriale, energetice</strong>.</li>
                  </ul>
                  <H2 h2text="Exemple din viața reală" indexH2={indexH2("Exemple din viața reală")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li><strong>Respirația celulară</strong>: Glucoza este oxidată pentru a elibera energie.</li>
                    <li><strong>Fotosinteza</strong>: CO₂ este redus pentru a forma glucide.</li>
                    <li><strong>Corodarea metalelor</strong>: Fierul se oxidează → rugină.</li>
                    <li><strong>Bateriile</strong>: reacții redox furnizează energie electrică.</li>
                    <li><strong>Albirea hainelor</strong>: implică substanțe oxidante (hipoclorit de sodiu).</li>
                  </ul>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[176px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={titluri.length > 1 ? indexLectie : -1} clickedLink={clickedLinkId} onLinkClick={updateClickedLinkId}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div> 
  )
}

export default Page