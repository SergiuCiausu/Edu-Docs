"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-11";
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

  const h1 = "Limite și continuitate"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    ["Metoda de substituție directă", "Metoda de factorizare", "Raționalizare"],
    [""]
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
              materie="matematică" 
              clasa={11} 
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
                  <H2 h2text="Noțiunea de limită" indexH2={indexH2("Noțiunea de limită")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Se spune că o funcție 𝑓(𝑥) are limită finită 𝐿 în punctul 𝑎 ∈ 𝑅, dacă, pe măsură ce 𝑥 se apropie de 𝑎, valorile funcției 𝑓(𝑥) se apropie de 𝐿. Notăm:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                    <div
                        className="inline-flex flex-col justify-center">
                        <span>lim</span>
                        <span className="text-base leading-0">𝑥→𝑎</span>        
                    </div>
                    𝑓(𝑥) = 𝐿
                  </p>
                  <p>
                  Aceasta înseamnă că, pentru orice vecinătate a lui 𝐿 putem găsi o vecinătate a lui 𝑎 astfel încât toate valorile lui 𝑓(𝑥) pentru 𝑥 din acea vecinătate (cu excepția poate a punctului 𝑎) să se afle în vecinătatea lui 𝐿.
                  </p>
                  <H2 h2text="Exemple simple" indexH2={indexH2("Exemple simple")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Exemplul 1:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex flex-col justify-center">
                            <span>lim</span>
                            <span className="text-xs leading-0.5">𝑥→2</span>        
                        </div>
                    (3𝑥 + 1) = 3 ⋅ 2 + 1 = 7
                  </p>
                  <p>
                    <strong>Exemplul 2:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex flex-col justify-center">
                            <span>lim</span>
                            <span className="text-xs leading-0.5">𝑥→1</span>        
                        </div>
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">𝑥<sup>2</sup> - 1</p>
                                <p className="fractie-jos text-center">𝑥 - 1</p>
                            </div>
                        </div>
                  </p>
                  <p>
                  Rezolvăm:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                    <div
                        className="inline-flex items-center gap-1 pt-2">
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center">𝑥<sup>2</sup> - 1</p>
                            <p className="fractie-jos text-center">𝑥 - 1</p>
                        </div>
                          =  
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center">(𝑥 - 1)(𝑥 + 1)</p>
                            <p className="fractie-jos text-center">𝑥 - 1</p>
                        </div>
                          =  𝑥 + 1 (𝑥 ≠ 1)
                    </div>  
                  </p>
                  <p>
                  Deci:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex flex-col justify-center">
                            <span>lim</span>
                            <span className="text-xs leading-0.5">𝑥→1</span>        
                        </div>
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">𝑥<sup>2</sup> - 1</p>
                                <p className="fractie-jos text-center">𝑥 - 1</p>
                            </div>
                        </div>
                          =  
                        <div
                            className="inline-flex flex-col justify-center">
                            <span>lim</span>
                            <span className="text-xs leading-0.5">𝑥→1</span>        
                        </div>
                        (𝑥 + 1) = 2
                  </p>
                  <H2 h2text="Metode de calcul al limitelor" indexH2={indexH2("Metode de calcul al limitelor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Metoda de substituție directă" indexH3={h3s[h2s.findIndex(h2 => h2 === "Metode de calcul al limitelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Metode de calcul al limitelor")].findIndex(h3 => h3 === "Metoda de substituție directă") : -1}></H3>
                  <p>
                  Dacă funcția este continuă în acel punct, înlocuim direct:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                    <div
                        className="inline-flex flex-col justify-center">
                        <span>lim</span>
                        <span className="text-base leading-0">𝑥→𝑎</span>        
                    </div>
                    𝑓(𝑥) = 𝑓(𝑎)
                  </p>
                  <H3 h3text="Metoda de factorizare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Metode de calcul al limitelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Metode de calcul al limitelor")].findIndex(h3 => h3 === "Metoda de factorizare") : -1}></H3>
                  <p>
                    <div
                        className="inline-flex items-center gap-1 pt-2">
                        Se folosește când forma este de tip 
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center">0</p>
                            <p className="fractie-jos text-center">0</p>
                        </div>
                    </div>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <div
                            className="inline-flex flex-col justify-center">
                            <span>lim</span>
                            <span className="text-base leading-0">𝑥→𝑎</span>        
                        </div>
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">𝑓(𝑥)</p>
                                <p className="fractie-jos text-center">𝑔(𝑥)</p>
                            </div>
                              prin factorizare și simplificare
                        </div>
                  </p>
                  <H3 h3text="Raționalizare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Metode de calcul al limitelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Metode de calcul al limitelor")].findIndex(h3 => h3 === "Raționalizare") : -1}></H3>
                  <p>
                  Utilă când avem rădăcini:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                    <div
                        className="inline-flex flex-col justify-center">
                        <span>lim</span>
                        <span className="text-base leading-0">𝑥→𝑎</span>        
                    </div>
                    <div
                        className="inline-flex items-center gap-1 pt-2">
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center">√𝑥 - √𝑎</p>
                            <p className="fractie-jos text-center">𝑥 - 𝑎</p>
                        </div>
                          
                    </div>
                  </p>
                  <H2 h2text="Forme de nedeterminare" indexH2={indexH2("Forme de nedeterminare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Cele mai întâlnite forme:
                  </p>
                  <ul className={ulClass}>
                    <li
                        className="flex items-center">
                        <span className="mr-2 text-l leading-none">•</span>
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">0</p>
                                <p className="fractie-jos text-center">0</p>
                            </div>
                        </div>
                    </li>
                    <li
                        className="flex items-center">
                        <span className="mr-2 text-l leading-none">•</span>
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">∞</p>
                                <p className="fractie-jos text-center">∞</p>
                            </div>
                        </div>
                    </li>
                    <li>∞ - ∞</li>
                    <li>0 ⋅ ∞</li>
                  </ul>
                  <p>
                  Acestea necesită transformări algebrice pentru a fi rezolvate.
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