"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-chimie-11";
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

  const h1 = "Compușii oxigenați"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Alcoolii", "Fenolii"],
    [""],
    ["Oxidarea", "Reacția cu metale active (Na, K)", "Esterificarea"],
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
                  <H2 h2text="Structura și clasificare" indexH2={indexH2("Structura și clasificare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Alcoolii" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și clasificare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura și clasificare")].findIndex(h3 => h3 === "Alcoolii") : -1}></H3>
                  <p>
                  Sunt compuși organici care conțin una sau mai multe <strong>grupări hidroxil</strong> (-OH) legate de un atom de carbon saturat (hibridizare sp³).
                  </p>
                  <p>
                    <strong>Formula generală</strong>: R–OH
                  </p>
                  <p>
                    <strong>Clasificare în funcție de tipul atomului de carbon legat de –OH:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Alcool primar</strong>: –OH legat de un C care are alți 2 H (ex: etanol).</li>
                    <li><strong>Alcool secundar</strong>: –OH legat de un C care are un H și un C vecin.</li>
                    <li><strong>Alcool terțiar</strong>: –OH legat de un C care este legat de 3 atomi de C.</li>
                  </ul>
                  <p>
                    Exemple:
                  </p>
                  <ul className={ulClass}>
                    <li>CH₃–CH₂–OH (etanol) – alcool primar</li>
                    <li>CH₃–CH(OH)–CH₃ (propan-2-ol) – alcool secundar</li>
                    <li>(CH₃)₃C–OH (2-metilpropan-2-ol) – alcool terțiar</li>
                  </ul>
                  <H3 h3text="Fenolii" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și clasificare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura și clasificare")].findIndex(h3 => h3 === "Fenolii") : -1}></H3>
                  <p>
                  Sunt compuși care conțin o grupare –OH legată direct de un atom de carbon din <strong>nucleul aromatic</strong>.
                  </p>
                  <p>
                  Exemplu: C₆H₅OH – fenolul
                  </p>
                  <H2 h2text="Proprietăți fizice" indexH2={indexH2("Proprietăți fizice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li><strong>Puncte de fierbere</strong>: mari, din cauza legăturilor de hidrogen între molecule.</li>
                    <li>
                        <strong>Solubilitate:</strong>
                        <ul className={ulClass}>
                            <li>Alcoolii cu lanț scurt (C₁–C₄) sunt solubili în apă.</li>
                            <li>Fenolul are solubilitate moderată și miros înțepător.</li>
                        </ul>
                    </li>
                    <li><strong>Polaritate</strong>: moleculele de alcool sunt <strong>polare</strong>.</li>
                  </ul>
                  <H2 h2text="Reacții caracteristice" indexH2={indexH2("Reacții caracteristice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Oxidarea" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reacții caracteristice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reacții caracteristice")].findIndex(h3 => h3 === "Oxidarea") : -1}></H3>
                  <ul className={ulClass}>
                    <li>
                        <strong>Alcooli primari</strong> → aldehide → acizi carboxilici
                        <p>
                            Exemplu:
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                                <span>CH<sub>3</sub>CH<sub>2</sub>OH </span>
                                <div
                                    className="inline-flex flex-col items-center mx-1">
                                    <span className="leading-3 text-xs">[O]</span>
                                    <span className="leading-3">→</span>
                                </div>
                                <span>CH<sub>3</sub>CHO</span>
                                <div
                                    className="inline-flex flex-col items-center mx-1">
                                    <span className="leading-3 text-xs">[O]</span>
                                    <span className="leading-3">→</span>
                                </div>
                                <span>CH<sub>3</sub>COOH</span>
                        </p>
                    </li>
                    <li>
                        <strong>Alcooli secundari</strong> → cetone
                        <p>
                            Exemplu:
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                                <span>CH<sub>3</sub>CH(OH)CH<sub>3</sub></span>
                                <div
                                    className="inline-flex flex-col items-center mx-1">
                                    <span className="leading-3 text-xs">[O]</span>
                                    <span className="leading-3">→</span>
                                </div>
                                <span>CH<sub>3</sub>COCH<sub>3</sub></span>
                        </p>
                    </li>
                    <li><strong>Alcoolii terțiari</strong> nu se oxidează ușor.</li>
                  </ul>
                  <H3 h3text="Reacția cu metale active (Na, K)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reacții caracteristice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reacții caracteristice")].findIndex(h3 => h3 === "Reacția cu metale active (Na, K)") : -1}></H3>
                  <p>
                  Alcoolii și fenolii reacționează cu metale alcaline formând <strong>alcoolați și hidrogen</strong>:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                      <span>2CH<sub>3</sub>CH<sub>2</sub>OH + 2Na → 2CH<sub>3</sub>CH<sub>2</sub>ONa + H<sub>2</sub>↑</span>
                  </p>
                  <p>
                  Fenolul reacționează similar:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                      <div
                          className="inline-flex items-center gap-1 pt-2">
                          <span>C<sub>6</sub>H<sub>5</sub>OH + Na → C<sub>6</sub>H<sub>5</sub>ONa + </span> 
                          <div
                              className={fractie}>
                              <p className="fractie-sus text-center">1</p>
                              <p className="fractie-jos text-center">2</p>
                          </div>
                      </div>
                      <span>H<sub>2</sub>↑</span>
                  </p>
                  <H3 h3text="Esterificarea" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reacții caracteristice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reacții caracteristice")].findIndex(h3 => h3 === "Esterificarea") : -1}></H3>
                  <p>
                  Alcoolii reacționează cu acizi carboxilici în prezență de acid sulfuric (catalizator) formând <strong>esteri</strong>:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                      <span>CH<sub>3</sub>CH<sub>2</sub> + CH<sub>3</sub>COOH</span>
                      <div
                          className="inline-flex flex-col items-center mx-1">
                          <span className="leading-3 text-xs">H<sub>2</sub>SO<sub>4</sub></span>
                          <span className="leading-3">→</span>
                      </div>
                      <span>CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub> + H<sub>2</sub>O</span>
                  </p>
                  <H2 h2text="Diferențe cheie: Alcooli vs Fenoli" indexH2={indexH2("Diferențe cheie: Alcooli vs Fenoli")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <div
                    className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-20">Caracteristică</th>
                            <th className="flex-30">Alcooli</th>
                            <th className="flex-50">Fenoli</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-20">Legătura –OH</td>
                                <td className="flex-30">Legată de carbon saturat</td>
                                <td className="flex-50">Legată de nucleu aromatic</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20">Aciditate</td>
                                <td className="flex-30">Foarte slab acidici</td>
                                <td className="flex-50">Mai acizi decât alcoolii</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20">Reacție cu NaOH</td>
                                <td className="flex-30">Nu reacționează</td>
                                <td className="flex-50">Reacționează: C₆H₅OH + NaOH → C₆H₅ONa + H₂O</td>
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