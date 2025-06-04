"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-numere-reale-9";
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

  const h1 = "Ordinea numerelor reale"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    ["Reguli de comparare", "Compararea fracțiilor și zecimalelor"],
    ["Proprietatea de reflexivitate", "Proprietatea de antisimetrie", "Proprietatea de tranzitivitate"],
    ["Axa numerelor reale", "Exemplu"],
    ["Inegalități simple", "Inegalități compuse"],
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
              profil="științe sociale" 
              materie="matematică" 
              clasa={9} 
              capitol="utilizarea conceptelor, metodelor și procedeelor matematice"
              subCapitol="numere reale"
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
                  <H2 h2text="Relația de ordine" indexH2={indexH2("Relația de ordine")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Pentru orice două numere reale 𝑎 și 𝑏, există exact una dintre situațiile:
                  </p>
                  <ul className={ulClass}>
                    <li>𝑎 {`<`} 𝑏 (𝑎 este mai mic decât 𝑏)</li>
                    <li>𝑎 = 𝑏 (𝑎 este egal cu 𝑏)</li>
                    <li>𝑎 {`>`} 𝑏 (𝑎 este mai mare decât 𝑏)</li>
                  </ul>
                  <ul className={ulClass}>
                    <li>{`<`} — mai mic decât</li>
                    <li>{`≤`} — mai mic sau egal decât</li>
                    <li>{`>`} — mai mare decât</li>
                    <li>≥ — mai mare sau egal decât</li>
                  </ul>
                  <H2 h2text="Cum comparăm două numere reale" indexH2={indexH2("Cum comparăm două numere reale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Reguli de comparare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Cum comparăm două numere reale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Cum comparăm două numere reale")].findIndex(h3 => h3 === "Reguli de comparare") : -1}></H3>
                  <ul className={ulClass}>
                    <li>
                        <strong>Între două numere negative</strong>, cel cu modul mai mare este mai mic:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                            -7 {`<`} -3 pentru că 7 {`>`} 3
                        </p>
                    </li>
                    <li>
                        <strong>Între un număr negativ și un număr pozitiv</strong>, întotdeauna numărul negativ este mai mic:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                                -5 {`<`} 2
                        </p>
                    </li>
                    <li>
                        <strong>Între două numere pozitive</strong>, numărul cu valoare mai mică este mai mic:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                              3 {`<`} 8  
                        </p>
                    </li>
                  </ul>
                  <H3 h3text="Compararea fracțiilor și zecimalelor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Cum comparăm două numere reale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Cum comparăm două numere reale")].findIndex(h3 => h3 === "Compararea fracțiilor și zecimalelor") : -1}></H3>
                  <ul className={ulClass}>
                    <li
                    className="flex flex-col">
                        <div
                            className="inline-flex items-center">
                            <span className="mr-2 text-l leading-none">•</span>
                            Dacă au același numitor, comparăm numărătorii.
                        </div>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center">2</p>
                                    <p className="fractie-jos text-center">5</p>
                                </div>
                                <strong>  {`<`}  </strong>
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center">4</p>
                                    <p className="fractie-jos text-center">5</p>
                                </div>
                        </p>
                    </li>
                    <li
                        className="flex flex-col">
                        <div
                            className="inline-flex items-center">
                            <span className="mr-2 text-l leading-none">•</span>
                            Dacă nu au același numitor, aducem la același numitor sau transformăm în zecimale:
                        </div>
                        <p
                            className="inline-flex items-center justify-center gap-8 w-full">
                                <div
                                    className="inline-flex items-center">
                                    <div
                                        className={fractie}>
                                        <p className="fractie-sus text-center">3</p>
                                        <p className="fractie-jos text-center">4</p>
                                    </div>
                                      =  0,75
                                </div>
                                <div
                                    className="inline-flex items-center">
                                    <div
                                        className={fractie}>
                                            <p className="fractie-sus text-center">3</p>
                                            <p className="fractie-jos text-center">4</p>
                                    </div>
                                      =  0,625
                                </div>
                                <div
                                    className="inline-flex items-center">
                                ⇒ 0,625 {`<`} 0,75
                                </div>
                                <div
                                    className="inline-flex items-center">
                                ⇒  
                                    <div
                                        className={fractie}>
                                            <p className="fractie-sus text-center">5</p>
                                            <p className="fractie-jos text-center">8</p>
                                    </div>
                                    {`  <  `}
                                    <div
                                        className={fractie}>
                                            <p className="fractie-sus text-center">3</p>
                                            <p className="fractie-jos text-center">4</p>
                                    </div>
                                </div>
                        </p>
                    </li>
                  </ul>
                  <H2 h2text="Proprietățile relației de ordine" indexH2={indexH2("Proprietățile relației de ordine")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Proprietatea de reflexivitate" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proprietățile relației de ordine")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proprietățile relației de ordine")].findIndex(h3 => h3 === "Proprietatea de reflexivitate") : -1}></H3>
                  <p>
                  Orice număr real este egal cu el însuși:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <strong>𝑎 = 𝑎</strong>
                  </p>
                  <H3 h3text="Proprietatea de antisimetrie" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proprietățile relației de ordine")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proprietățile relației de ordine")].findIndex(h3 => h3 === "Proprietatea de antisimetrie") : -1}></H3>
                  <p>
                  Dacă 𝑎 ≤ 𝑏 și 𝑏 ≤ 𝑎, atunci 𝑎 = 𝑏.
                  </p>
                  <H3 h3text="Proprietatea de tranzitivitate" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proprietățile relației de ordine")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proprietățile relației de ordine")].findIndex(h3 => h3 === "Proprietatea de tranzitivitate") : -1}></H3>
                  <p>
                  Dacă 𝑎 ≤ 𝑏 și 𝑏 ≤ 𝑐, atunci 𝑎 ≤ 𝑐.
                  </p>
                  <H2 h2text="Reprezentarea numerelor reale pe axa numerelor" indexH2={indexH2("Reprezentarea numerelor reale pe axa numerelor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Axa numerelor reale" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reprezentarea numerelor reale pe axa numerelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reprezentarea numerelor reale pe axa numerelor")].findIndex(h3 => h3 === "Axa numerelor reale") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Este o linie dreaptă orientată spre dreapta.</li>
                    <li>Pe axă, numerelor mai mari le corespund puncte situate mai la dreapta, iar numerelor mai mici — puncte situate mai la stânga.</li>
                  </ul>
                  <H3 h3text="Exemplu" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reprezentarea numerelor reale pe axa numerelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reprezentarea numerelor reale pe axa numerelor")].findIndex(h3 => h3 === "Exemplu") : -1}></H3>
                  <p>
                  Pe axa numerelor:
                  </p>
                  <ul className={ulClass}>
                    <li>-4 se află mai la stânga decât 0</li>
                    <li>0 se află mai la stânga decât 3</li>
                    <li>3 se află mai la stânga decât 5,5</li>
                  </ul>
                  <p>
                  Ordinea este:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        -4 {`<`} 0 {`<`} 3 {`<`} 5,5
                  </p>
                  <H2 h2text="Inegalități și interpretarea lor" indexH2={indexH2("Inegalități și interpretarea lor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Inegalități simple" indexH3={h3s[h2s.findIndex(h2 => h2 === "Inegalități și interpretarea lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Inegalități și interpretarea lor")].findIndex(h3 => h3 === "Inegalități simple") : -1}></H3>
                  <p>
                  Exemplu:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                       𝑎 {`>`} 2 înseamnă că 𝑎 poate fi orice număr mai mare decât 2.
                  </p>
                  <H3 h3text="Inegalități compuse" indexH3={h3s[h2s.findIndex(h2 => h2 === "Inegalități și interpretarea lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Inegalități și interpretarea lor")].findIndex(h3 => h3 === "Inegalități compuse") : -1}></H3>
                  <p>
                  Exemplu:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        -3 {`<`} 𝑎 ≤ 5 înseamnă că 𝑎 este un număr între -3 și 5, inclusiv 5.
                  </p>
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