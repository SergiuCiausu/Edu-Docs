"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-chimie-10";
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

  const h1 = "Nemetalele"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
    ["În laborator", "Industrial"],
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
                  <H2 h2text="Generalități despre hidrogen" indexH2={indexH2("Generalități despre hidrogen")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li><strong>Simbol chimic</strong>: H</li>
                    <li><strong>Număr atomic</strong>: 1</li>
                    <li><strong>Masă atomică relativă</strong>: 1 u.a.m.</li>
                    <li><strong>Poziție în Tabelul periodic</strong>: grupa 1, perioada 1</li>
                    <li><strong>Configurație electronică</strong>: 1s¹</li>
                  </ul>
                  <p>
                  Hidrogenul este cel mai ușor și mai răspândit element din Univers, fiind prezent în stele (inclusiv Soarele), apă și compușii organici.
                  </p>
                  <H2 h2text="Proprietăți fizice ale hidrogenului" indexH2={indexH2("Proprietăți fizice ale hidrogenului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li><strong>Stare de agregare</strong>: gaz la temperatura camerei</li>
                    <li><strong>Culoare</strong>: incolor</li>
                    <li><strong>Miros</strong>: inodor</li>
                    <li><strong>Gust</strong>: insipid</li>
                    <li><strong>Solubilitate</strong>: foarte slab solubil în apă</li>
                    <li><strong>Densitate</strong>: cea mai mică dintre toate gazele</li>
                    <li><strong>Inflamabilitate</strong>: extrem de inflamabil – arde cu o flacără albastră-pală</li>
                  </ul>
                  <H2 h2text="Proprietăți chimice ale hidrogenului" indexH2={indexH2("Proprietăți chimice ale hidrogenului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>
                        Se combină cu <strong>oxigenul</strong>, formând apă:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                                2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O + Q
                        </p>
                    </li>
                    <li>
                        Reacționează cu <strong>metale active</strong> (ex. Na, K) formând hidruri ionice:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                                2Na + H<sub>2</sub> → 2NaH
                        </p>
                    </li>
                    <li>
                        Reacționează cu <strong>elemente nemetalice</strong>:
                        <ul className={ulClass}>
                            <li>
                                Cu <strong>clor</strong>:
                                <p
                                    className="inline-flex items-center justify-center gap-1 w-full">
                                        H<sub>2</sub> + Cl<sub>2</sub> → 2HCl
                                </p>
                            </li>
                            <li>
                                Cu <strong>azot</strong>, la temperatură înaltă și presiune ridicată (industria Haber-Bosch):
                                <p
                                    className="inline-flex items-center justify-center gap-1 w-full">
                                    N<sub>2</sub> + 3H<sub>2</sub> ⇌2NH<sub>3</sub>
                                </p>
                            </li>
                        </ul>
                    </li>
                  </ul>
                  <H2 h2text="Obținerea hidrogenului" indexH2={indexH2("Obținerea hidrogenului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="În laborator" indexH3={h3s[h2s.findIndex(h2 => h2 === "Obținerea hidrogenului")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Obținerea hidrogenului")].findIndex(h3 => h3 === "În laborator") : -1}></H3>
                  <ul className={ulClass}>
                    <li>
                        Prin reacția metalelor cu acizi:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                                Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub> ↑
                        </p>
                    </li>
                    <li>
                        Prin reacția metalelor cu apă (metale alcaline):
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                                2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub> ↑
                        </p>
                    </li>
                  </ul>
                  <H3 h3text="Industrial" indexH3={h3s[h2s.findIndex(h2 => h2 === "Obținerea hidrogenului")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Obținerea hidrogenului")].findIndex(h3 => h3 === "Industrial") : -1}></H3>
                  <ul className={ulClass}>
                    <li>
                        <strong>Prin reformarea gazului metan cu vapori de apă:</strong>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                                CH<sub>4</sub> + H<sub>2</sub>O → CO + 3H<sub>2</sub>
                        </p>
                    </li>
                    <li>
                        <strong>Prin electroliza apei:</strong>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                                2H<sub>2</sub>O → 2H<sub>2</sub> + O<sub>2</sub>
                        </p>
                    </li>
                  </ul>
                  <H2 h2text="Utilizări ale hidrogenului" indexH2={indexH2("Utilizări ale hidrogenului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <div
                    className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-30">Domeniu</th>
                            <th className="flex-70">Utilizare</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-30">Industrie chimică</td>
                                <td className="flex-70">Producerea amoniacului (NH₃), metanolului</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-30">Metalurgie</td>
                                <td className="flex-70">Atmosferă reducătoare</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-30">Energetică</td>
                                <td className="flex-70">Combustibil în celule de combustie</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-30">Aerospațial</td>
                                <td className="flex-70">Combustibil pentru rachete</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-30">Ecologie</td>
                                <td className="flex-70">Combustibil curat → hidrogen verde</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-30">Alimentație</td>
                                <td className="flex-70">Hidrogenare a grăsimilor vegetale</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                Hidrogenul este un gaz uşor, inflamabil, cu numeroase utilizări. Se obţine în laborator prin reacţia metalelor cu acizi sau apă și industrial prin reformare sau electroliză. Are proprietăţi chimice care îl fac util în sinteze și în tehnologii ecologice. 
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

export default page