"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-10";
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

  const h1 = "Funcții și ecuații"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
    ["Exemplu 1", "Exemplu 2", "Exemplu 3"],
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
              profil="științe ale naturii" 
              materie="matematică" 
              clasa={10} 
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
                  <H2 h2text="Ce este o funcție?" indexH2={indexH2("Ce este o funcție?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O <strong>funcție</strong> este o regulă care asociază fiecărui element 𝑥 dintr-o mulțime 𝐷 (domeniul de definiție) un singur element 𝑦 dintr-o mulțime 𝑌 (codomeniul).
                  </p>
                  <p>
                  Se notează:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <strong>𝑓 : 𝐷 → 𝑌, 𝑓(𝑥) = 𝑦</strong>
                  </p>
                  <p>
                  Exemple:
                  </p>
                  <ul className={ulClass}>
                    <li>𝑓(𝑥) = 𝑥<sup>2</sup> este o funcție de la 𝑅 la 𝑅<sub>+</sub>;</li>
                    <li>𝑓(𝑥) = <span>√𝑥</span>, definită pentru 𝑥 ≥ 0</li>
                    <li>𝑓(𝑥) = log<sub>2</sub>𝑥, definită pentru 𝑥 {`>`} 0</li>
                  </ul>
                  <H2 h2text="Tipuri de funcții importante" indexH2={indexH2("Tipuri de funcții importante")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <div className="px-5">
                        <table className={tableClass}>
                            <thead className={trClass}>
                                <th className="flex-20">Funcție</th>
                                <th className="flex-20">Ecuație</th>
                                <th className="flex-10">Domeniu	</th>
                                <th className="flex-10">Codomeniu</th>
                                <th className="flex-40">Observații</th>
                            </thead>
                            <tbody>
                                <tr className={trClass}>
                                    <td className="flex-20">Funcția radical</td>
                                    <td className="flex-20">𝑓(𝑥) = 𝑥<sup>𝑛</sup></td>
                                    <td className="flex-10">𝑅</td>
                                    <td className="flex-10">𝑅<sub>+</sub></td>
                                    <td className="flex-40">paritatea lui 𝑛 influențează semnul</td>
                                </tr>
                                <tr className={trClass}>
                                    <td className="flex-20">Funcția putere</td>
                                    <td className="flex-20 inline-flex items-center">
                                        𝑓(𝑥) =
                                        <div
                                            className="inline-flex items-center">
                                            <div
                                                className="inline-flex flex-col items-center relative">
                                                <div className="text-xs absolute top-0 right-2">𝑛</div>
                                                <div className="text-2xl">√</div>
                                            </div>𝑥
                                        </div>
                                    </td>
                                    <td className="flex-10">𝑅<sub>+</sub></td>
                                    <td className="flex-10">𝑅<sub>+</sub></td>
                                    <td className="flex-40">bine definită doar pentru 𝑥 ≥ 0 (dacă 𝑛 este par)</td>
                                </tr>
                                <tr className={trClass}>
                                    <td className="flex-20">Funcția exponențială</td>
                                    <td className="flex-20">𝑓(𝑥) = 𝑎<sup>𝑥</sup></td>
                                    <td className="flex-10">𝑅</td>
                                    <td className="flex-10">
                                        <div
                                            className="inline-flex items-center h-1 text-xl">
                                            𝑅
                                            <div
                                                className="inline-flex flex-col items-center justify-center">
                                                <div><sub>*</sub></div>
                                                <div><sup>+</sup></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="flex-40">𝑎 {`>`} 0, a ≠ 1</td>
                                </tr>
                                <tr className={trClass}>
                                    <td className="flex-20">Funcția logaritmică</td>
                                    <td className="flex-20">𝑓(𝑥) = log<sub>𝑎</sub>𝑥</td>
                                    <td className="flex-10">
                                        <div
                                            className="inline-flex items-center h-1 text-xl">
                                            𝑅
                                            <div
                                                className="inline-flex flex-col items-center justify-center">
                                                <div><sub>*</sub></div>
                                                <div><sup>+</sup></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="flex-10">𝑅</td>
                                    <td className="flex-40">inversa funcției exponențiale</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <H2 h2text="Reprezentarea grafică" indexH2={indexH2("Reprezentarea grafică")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                    <p>
                    Graficul unei funcții este mulțimea punctelor de forma (𝑥, 𝑓(𝑥)).
                    </p>
                    <p>
                    De exemplu, pentru 𝑓(𝑥) = 𝑥<sup>2</sup>, punctele (-2,4), (0,0), (2,4) aparțin graficului.
                    </p>
                    <p>
                    Graficul este o curbă continuă (parabolă, dreaptă, logaritmică, etc.), iar forma depinde de funcție.
                    </p>
                    <H2 h2text="Ecuații de forma f(x) = a și f(x) = g(x)" indexH2={indexH2("Ecuații de forma f(x) = a și f(x) = g(x)")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                    <H3 h3text="Exemplu 1:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ecuații de forma f(x) = a și f(x) = g(x)")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ecuații de forma f(x) = a și f(x) = g(x)")].findIndex(h3 => h3 === "Exemplu 1") : -1}></H3>
                    <p>
                    Rezolvă ecuația 𝑥<sup>2</sup> = 4
                    </p>
                    <p>
                    Soluții: 𝑥 = -2 sau 𝑥 = 2
                    </p>
                    <H3 h3text="Exemplu 2:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ecuații de forma f(x) = a și f(x) = g(x)")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ecuații de forma f(x) = a și f(x) = g(x)")].findIndex(h3 => h3 === "Exemplu 2") : -1}></H3>
                    <p>
                    Rezolvă ecuația 2<sup>𝑥</sup> = 8
                    </p>
                    <p>
                        Soluția: 𝑥 = 3
                    </p>
                    <H3 h3text="Exemplu 3:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ecuații de forma f(x) = a și f(x) = g(x)")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ecuații de forma f(x) = a și f(x) = g(x)")].findIndex(h3 => h3 === "Exemplu 3") : -1}></H3>
                    <p>
                    Rezolvă ecuația log<sub>2</sub>𝑥 = 3
                    </p>
                    <p>
                    Scriem în formă exponențială: 𝑥 = 2<sup>3</sup> = 8
                    </p>
                    <H2 h2text="Activitate aplicativă" indexH2={indexH2("Activitate aplicativă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                    <p>
                    Completează următorul tabel pentru funcția 𝑓(𝑥) = <span>√𝑥</span>
                    </p>
                    <div className="px-5">
                        <table className={tableClass}>
                            <thead className={trClass}>
                                <th className="flex-20">𝑥</th>
                                <th className="flex-20">0</th>
                                <th className="flex-20">1</th>
                                <th className="flex-20">4</th>
                                <th className="flex-20">9</th>
                            </thead>
                            <tbody>
                                <tr className={trClass}>
                                    <td className="flex-20">𝑓(𝑥)</td>
                                    <td className="flex-20">?</td>
                                    <td className="flex-20">?</td>
                                    <td className="flex-20">?</td>
                                    <td className="flex-20">?</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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