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

const page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Elemente de algebră"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Definiție", "Tipuri de matrici", "Operații cu matrici"],
    ["Determinantul unei matrici pătratice 2×2", "Determinantul unei matrici 3×3 (regula lui Sarrus)"],
    ["Metode de rezolvare"],
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
                  <H2 h2text="Matrice" indexH2={indexH2("Matrice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Definiție" indexH3={h3s[h2s.findIndex(h2 => h2 === "Matrice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Matrice")].findIndex(h3 => h3 === "Definiție") : -1}></H3>
                  <p>
                  O <strong>matrice</strong> este un tabel de numere reale (sau complexe) dispuse pe linii și coloane.
                  </p>
                  <p>
                    O matrice cu 𝑚 linii și 𝑛 coloane se notează cu 𝐴<sub>𝑚×𝑛</sub> și are forma:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula font-bold">
                        <span>𝐴 =</span>
                        <span className="text-[128px] font-thin">{`[`}</span>
                        <div
                            className="inline-flex flex-col gap-2 text-sm pt-2">
                                <div
                                    className="inline-flex gap-4">
                                    <span>𝑎<sub>11</sub></span>
                                    <span>𝑎<sub>12</sub></span>
                                    <span>...</span>
                                    <span>𝑎<sub>1𝑛</sub></span>
                                </div>
                                <div
                                    className="inline-flex gap-4">
                                    <span>𝑎<sub>21</sub></span>
                                    <span>𝑎<sub>22</sub></span>
                                    <span>...</span>
                                    <span>𝑎<sub>2𝑛</sub></span>
                                </div>
                                <div
                                    className="inline-flex gap-4 w-full">
                                    <div
                                        className="inline-flex flex-col flex-25">
                                        <span className="leading-1.25">.</span>
                                        <span className="leading-1.25">.</span>
                                        <span className="leading-1.25">.</span>
                                    </div>
                                    <div
                                        className="inline-flex flex-col flex-25">
                                        <span className="leading-1.25">.</span>
                                        <span className="leading-1.25">.</span>
                                        <span className="leading-1.25">.</span>
                                    </div>
                                    <div
                                        className="inline-flex flex-col flex-25 w-full">
                                        <div className="w-full inline-flex"><span className="leading-1.25">.</span></div>
                                        <div className="w-full inline-flex justify-center"><span className="leading-1.25">.</span></div>
                                        <div className="w-full inline-flex justify-end"><span className="leading-1.25">.</span></div>
                                    </div>
                                    <div
                                        className="inline-flex flex-col flex-25">
                                        <span className="leading-1.25">.</span>
                                        <span className="leading-1.25">.</span>
                                        <span className="leading-1.25">.</span>
                                    </div>
                                </div>
                                <div
                                    className="inline-flex gap-4">
                                    <span>𝑎<sub>𝑚1</sub></span>
                                    <span>𝑎<sub>𝑚2</sub></span>
                                    <span>...</span>
                                    <span>𝑎<sub>𝑚𝑛</sub></span>
                                </div>
                        </div>
                        <span className="text-[128px] font-thin">{`]`}</span>
                  </p>
                  <H3 h3text="Tipuri de matrici" indexH3={h3s[h2s.findIndex(h2 => h2 === "Matrice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Matrice")].findIndex(h3 => h3 === "Tipuri de matrici") : -1}></H3>
                  <ul className={ulClass}>
                    <li>
                        <strong>Matrice pătratică: 𝑚 = 𝑛</strong>
                    </li>
                    <li>
                        <strong>Matrice diagonală</strong>: doar elementele de pe diagonala principală pot fi nenule
                    </li>
                    <li>
                        <strong>Matrice identică 𝐼<sub>𝑛</sub></strong> : are 1 pe diagonala principală, 0 în rest
                    </li>
                    <li>
                        <strong>Matrice nulă</strong>: toate elementele sunt 0
                    </li>
                  </ul>
                  <H3 h3text="Operații cu matrici" indexH3={h3s[h2s.findIndex(h2 => h2 === "Matrice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Matrice")].findIndex(h3 => h3 === "Operații cu matrici") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Adunare/scădere</strong>: doar matrici de aceeași dimensiune</li>
                    <li><strong>Înmulțirea cu un scalar</strong>: fiecare element se înmulțește cu acel scalar</li>
                    <li><strong>Înmulțirea a două matrici</strong>: se poate face doar dacă numărul de coloane ale primei matrice este egal cu numărul de linii ale celei de-a doua</li>
                  </ul>
                  <H2 h2text="Determinanți" indexH2={indexH2("Determinanți")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Determinantul unei matrici pătratice 2×2" indexH3={h3s[h2s.findIndex(h2 => h2 === "Determinanți")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Determinanți")].findIndex(h3 => h3 === "Determinantul unei matrici pătratice 2×2") : -1}></H3>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula font-bold">
                        <span>Det(𝐴) = </span>
                        <span className="text-4xl font-extralight">|</span>
                        <div
                            className="inline-flex gap-4">
                                <div className="inline-flex flex-col gap-2">
                                    <span className="leading-4">𝑎</span>
                                    <span className="leading-4">𝑏</span>
                                </div>
                                <div className="inline-flex flex-col gap-2">
                                    <span className="leading-4">𝑐</span>
                                    <span className="leading-4">𝑑</span>
                                </div>
                        </div>
                        <span className="text-4xl font-extralight">|</span>
                        <span> = 𝑎𝑑 - 𝑏𝑐</span>
                  </p>
                  <H3 h3text="Determinantul unei matrici 3×3 (regula lui Sarrus)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Determinanți")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Determinanți")].findIndex(h3 => h3 === "Determinantul unei matrici 3×3 (regula lui Sarrus)") : -1}></H3>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula font-bold">
                        <span>Det(𝐴) = </span>
                        <span className="text-[64px] font-thin">{`|`}</span>
                        <div
                            className="inline-flex flex-col gap-2 text-sm pb-1">
                            <div
                                className="inline-flex gap-4">
                                <span>𝑎<sub>11</sub></span>
                                <span>𝑎<sub>12</sub></span>
                                <span>𝑎<sub>13</sub></span>
                            </div>
                            <div
                                className="inline-flex gap-4">
                                <span>𝑎<sub>21</sub></span>
                                <span>𝑎<sub>22</sub></span>
                                <span>𝑎<sub>23</sub></span>
                            </div>
                            <div
                                className="inline-flex gap-4">
                                <span>𝑎<sub>31</sub></span>
                                <span>𝑎<sub>32</sub></span>
                                <span>𝑎<sub>33</sub></span>
                            </div>
                        </div>
                        <span className="text-[64px] font-thin">{`|`}</span>
                        <span> = 
                            <span>𝑎<sub>11</sub> </span>
                            <span>𝑎<sub>22</sub> </span>
                            <span>𝑎<sub>33</sub> </span>
                             + 
                            <span>𝑎<sub>12</sub> </span>
                            <span>𝑎<sub>23</sub> </span>
                            <span>𝑎<sub>31</sub> </span>
                             + 
                            <span>𝑎<sub>13</sub> </span>
                            <span>𝑎<sub>21</sub> </span>
                            <span>𝑎<sub>32</sub> </span>
                             - (
                                <span>𝑎<sub>13</sub> </span> 
                                <span>𝑎<sub>22</sub> </span>
                                <span>𝑎<sub>31</sub> </span>
                                 + 
                                <span>𝑎<sub>11</sub> </span>
                                <span>𝑎<sub>23</sub> </span>
                                <span>𝑎<sub>32</sub> </span>
                                 + 
                                <span>𝑎<sub>12</sub> </span>
                                <span>𝑎<sub>21</sub> </span>
                                <span>𝑎<sub>33</sub> </span>
                            )
                        </span>
                  </p>
                  <H2 h2text="Sisteme de ecuații liniare" indexH2={indexH2("Sisteme de ecuații liniare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un <strong>sistem de ecuații liniare</strong> este un ansamblu de ecuații de forma:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula font-bold">
                        <span className="text-[196px] font-thin">{`{`}</span>
                        <div
                            className="inline-flex flex-col gap-4 pt-3">
                                    <span>𝑎<sub>11</sub> 𝑥<sub>1</sub> + 𝑎<sub>12</sub> 𝑥<sub>2</sub> + ... + 𝑎<sub>1𝑛</sub> 𝑥<sub>𝑛</sub> = 𝑏<sub>1</sub></span>
                                    <span>𝑎<sub>21</sub> 𝑥<sub>1</sub> + 𝑎<sub>22</sub> 𝑥<sub>2</sub> + ... + 𝑎<sub>2𝑛</sub> 𝑥<sub>𝑛</sub> = 𝑏<sub>2</sub></span>
                                <div
                                    className="inline-flex gap-8 w-full">
                                    <div
                                        className="inline-flex flex-col flex-25">
                                        <span className="leading-1.25">.</span>
                                        <span className="leading-1.25">.</span>
                                        <span className="leading-1.25">.</span>
                                    </div>
                                </div>
                                <span>𝑎<sub>𝑚1</sub> 𝑥<sub>1</sub> + 𝑎<sub>𝑚2</sub> 𝑥<sub>2</sub> + ... + 𝑎<sub>𝑚𝑛</sub> 𝑥<sub>𝑛</sub> = 𝑏<sub>𝑚</sub></span>
                        </div>
                  </p>
                  <H3 h3text="Metode de rezolvare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sisteme de ecuații liniare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sisteme de ecuații liniare")].findIndex(h3 => h3 === "Metode de rezolvare") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Metoda substituției</strong></li>
                    <li><strong>Metoda reducerii</strong></li>
                    <li>
                        <strong>Metoda matriceală (cu matricea inversabilă):</strong>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula font-bold">
                                𝐴𝑋 = 𝐵 ⇒ 𝑋 = 𝐴<sup>−1</sup> 𝐵
                        </p>
                    </li>
                    <li>
                        <strong>Regula lui Cramer</strong> (doar pentru sisteme cu număr egal de ecuații și necunoscute, cu determinant nenul):
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula font-bold">
                                <div
                                    className="inline-flex items-center gap-1 pt-2">
                                    𝑥<sub>𝑖</sub> =  
                                    <div
                                        className={fractie}>
                                        <p className="fractie-sus text-center">Det(𝐴<sub>𝑖</sub>)</p>
                                        <p className="fractie-jos text-center">Det(𝐴)</p>
                                    </div>
                                      , 𝑖 = 1, 2, ..., n
                                </div>
                        </p>
                    </li>
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

export default page