"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-elemente-ale-teoriei-relativitatii-restranse-12";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';
import Link from 'next/link';

const Page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Transformările lui Lorentz și consecințele acestora"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
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
              materie="fizică" 
              clasa={12} 
              capitol="elemente ale teoriei relativității restrânse"
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
                  <H2 h2text="Transformările lui Lorentz" indexH2={indexH2("Transformările lui Lorentz")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  În teoria relativității restrânse, pentru a descrie corect fenomenele fizice între două sisteme de referință în mișcare relativă cu viteză constantă, trebuie folosite <strong>transformările lui Lorentz</strong>.
                  </p>
                  <p>
                  Presupunem două sisteme de referință:
                  </p>
                  <ul className={ulClass}>
                    <li>𝑆: sistem de referință staționar</li>
                    <li>𝑆': sistem de referință care se deplasează față de 𝑆 cu viteza constantă 𝑣 pe direcția axei Ox.</li>
                  </ul>
                  <p>
                  Atunci transformările Lorentz sunt:
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong>𝑥′ <i>= </i> 𝛾(𝑥 - 𝑣𝑡)</strong>
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong>𝑡′ <i>= </i> 𝛾</strong><span className="text-3xl font-light">{`(`}</span>
                        <div
                            className="inline-flex gap-1 pt-2">
                            <strong>𝑡 -<span className="text-3xl font-light"> </span></strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>𝑣</strong></p>
                                <p className="fractie-jos text-center"><strong>𝑐<sup><i>2</i></sup></strong></p>
                            </div>
                            <strong>𝑥<span className="text-3xl font-light"> </span></strong>
                        </div>
                        <span className="text-3xl font-light">{`)`}</span> 
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong>𝑦′ <i>=  </i>𝑦</strong>
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong>𝑧′ <i>=  </i>𝑧</strong>
                  </p>
                  <ul className={ulClass}>
                    <li
                        className="flex items-center">
                        <span className="mr-2 text-l leading-none">•</span>
                        𝛾 <i>=  </i>
                        <div
                            className="inline-flex items-center gap-1 pt-7 px-2">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">1</p>
                                <p className="fractie-jos text-center inline-flex items-center"><span className="text-3xl font-extralight">√</span><span className="text-3xl font-light">{`(`}</span>1 -  
                                    <div
                                        className="inline-flex items-center gap-1 pl-1">
                                        <div
                                            className={fractie}> 
                                            <p className="fractie-sus text-center">𝑣<sup><i>2</i></sup></p>
                                            <p className="fractie-jos text-center">𝑐<sup><i>2</i></sup></p>
                                        </div>
                                    </div>
                                    <span className="text-3xl font-light pl-1">{` )`}</span>
                                </p>
                            </div>
                        </div>  
                        este factorul Lorentz;
                    </li>
                    <li>
                        𝑐 <i>= 3 ⋅ 10<sup>8</sup> m/s</i> = viteza luminii în vid.
                    </li>
                  </ul>
                  <p>
                  Spațiul și timpul nu mai sunt independente: schimbarea poziției influențează percepția timpului și invers.
                  </p>
                  <p>
                  La viteze mici (𝑣 ≪ 𝑐), 𝛾 ≈ 1 și transformările Lorentz se reduc la transformările clasice Galileiene.
                  </p> 
                  <H2 h2text="Compunerea relativistă a vitezelor" indexH2={indexH2("Compunerea relativistă a vitezelor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  În fizica clasică, vitezele se adună simplu: 𝑢 = 𝑢′ + 𝑣.
                  </p>
                  <p>
                  În relativitate, compunerea vitezelor este diferită și se face astfel:
                  </p>
                  <p>
                    <strong>Formula compunerii relativiste:</strong>
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong>𝑢 <i>=  </i></strong>
                        <div
                            className="inline-flex items-center gap-1 pt-7">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>𝑢′ + 𝑣</strong></p>
                                <p className="fractie-jos text-center">
                                    <div
                                        className="inline-flex items-center gap-1">
                                        <span><strong><i>1 </i>+ </strong></span>
                                        <div
                                            className={fractie}>
                                            <p className="fractie-sus text-center"><strong>𝑢′𝑣</strong></p>
                                            <p className="fractie-jos text-center"><strong>𝑐<sup><i>2</i></sup></strong></p>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                  </p>
                  <ul className={ulClass}>
                    <li>𝑢′ este viteza unui obiect în sistemul 𝑆'</li>
                    <li>𝑣 este viteza sistemului 𝑆' față de 𝑆</li>
                    <li>𝑢 este viteza obiectului în sistemul 𝑆</li>
                  </ul>
                  <p>
                  Dacă 𝑢′ și 𝑣 sunt ambele sub 𝑐, rezultatul 𝑢 va fi tot sub 𝑐.
                  </p>
                  <p>
                  Chiar și atunci când 𝑢′ = 𝑐, viteza luminii rămâne constantă 𝑐 în toate sistemele de referință — în acord cu postulatele relativității.
                  </p>
                  <div
                    className="pt-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-40">Concept</th>
                            <th className="flex-60">Conținut</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-40">Transformările Lorentz</td>
                                <td className="flex-60">Legătura dintre coordonatele spațiu-timp în mișcare</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-40">Factorul Lorentz 𝛾</td>
                                <td className="flex-60">Corectează efectele de dilatare și contracție</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-40">Compunerea relativistă a vitezelor</td>
                                <td className="flex-60">Asigură că nicio viteză nu depășește viteza luminii</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
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