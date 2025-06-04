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

  const h1 = "Derivata"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
    [""],
    ["Monotonie", "Extrem local (minim / maxim)", "Concavitate și puncte de inflexiune"],
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
                  <H2 h2text="Definirea derivatei" indexH2={indexH2("Definirea derivatei")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Se spune că o funcție 𝑓(𝑥) este derivabilă într-un punct 𝑥<sub>0</sub> ∈ 𝑅 dacă există limita:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                    <span>𝑓'(𝑥<sub className="text-xs">0</sub>) =   </span>
                    <div
                        className="inline-flex flex-col justify-center pt-3">
                        <span className="leading-4">lim</span>
                        <span className="text-base leading-0">𝑥→𝑥<sub className="text-xs">0</sub></span>        
                    </div>
                    <div
                        className="inline-flex items-center gap-1 pt-2">
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center">𝑓(𝑥) - 𝑓(𝑥<sub className="text-xs">0</sub>)</p>
                            <p className="fractie-jos text-center">𝑥 - 𝑥<sub className="text-xs">0</sub></p>
                        </div>
                    </div>
                  </p>
                  <p>
                  Această limită se numește derivata funcției 𝑓 în punctul 𝑥<sub className="text-xs">0</sub> și exprimă viteza de variație a funcției în acel punct.
                  </p>
                  <H2 h2text="Interpretare geometrică și practică" indexH2={indexH2("Interpretare geometrică și practică")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>Geometric: derivata într-un punct reprezintă <strong>panta tangentei</strong> la graficul funcției în acel punct.</li>
                    <li>Fizic: dacă 𝑓(𝑡) este poziția unui mobil în funcție de timp, atunci 𝑓'(𝑡) este viteza sa la momentul 𝑡.</li>
                  </ul>
                  <H2 h2text="Derivata funcțiilor uzuale" indexH2={indexH2("Derivata funcțiilor uzuale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <div className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-50">Funcție</th>
                            <th className="flex-50">Derivata</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-50">𝑓(𝑥) = 𝑐</td>
                                <td className="flex-50">𝑓'(𝑥) = 0</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">𝑓(𝑥) = 𝑥<sup>𝑛</sup></td>
                                <td className="flex-50">𝑓'(𝑥) = 𝑛𝑥<sup>𝑛-1</sup></td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">𝑓(𝑥) = √𝑥</td>
                                <td className="flex-50">
                                    <div
                                        className="inline-flex items-center gap-1 pt-2">
                                        𝑓'(𝑥) =
                                        <div
                                            className={fractie}>
                                            <p className="fractie-sus text-center">1</p>
                                            <p className="fractie-jos text-center">2√𝑥</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">
                                    <div
                                        className="inline-flex items-center gap-1 pt-2">
                                        𝑓(𝑥) =
                                        <div
                                            className={fractie}>
                                            <p className="fractie-sus text-center">1</p>
                                            <p className="fractie-jos text-center">𝑥</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="flex-50">
                                    <div
                                        className="inline-flex items-center gap-1 pt-2">
                                        𝑓'(𝑥) = -
                                        <div
                                            className={fractie}>
                                            <p className="fractie-sus text-center">1</p>
                                            <p className="fractie-jos text-center">𝑥<sup>2</sup></p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">𝑓(𝑥) = ln 𝑥</td>
                                <td className="flex-50">
                                    <div
                                        className="inline-flex items-center gap-1 pt-2">
                                        𝑓'(𝑥) =
                                        <div
                                            className={fractie}>
                                            <p className="fractie-sus text-center">1</p>
                                            <p className="fractie-jos text-center">𝑥</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">𝑓(𝑥) = 𝑒<sup>𝑥</sup></td>
                                <td className="flex-50">𝑓'(𝑥) = 𝑒<sup>𝑥</sup></td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">𝑓(𝑥) = 𝑛𝑒<sup>𝑥</sup></td>
                                <td className="flex-50">𝑓'(𝑥) = 𝑛𝑒<sup>𝑥</sup></td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">𝑓(𝑥) = 𝑛𝑒<sup>𝑛𝑥</sup></td>
                                <td className="flex-50">𝑓'(𝑥) = 𝑛<sup>2</sup>𝑒<sup>𝑛𝑥</sup></td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">𝑓(𝑥) = 𝑒<sup>-𝑛𝑥</sup></td>
                                <td className="flex-50">𝑓'(𝑥) = -𝑛𝑒<sup>-𝑛𝑥</sup></td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">𝑓(𝑥) = -𝑛𝑒<sup>-𝑛𝑥</sup></td>
                                <td className="flex-50">𝑓'(𝑥) = -𝑛<sup>2</sup>𝑒<sup>-𝑛𝑥</sup></td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">𝑓(𝑥) = sin 𝑥</td>
                                <td className="flex-50">𝑓'(𝑥) = cos 𝑥</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">𝑓(𝑥) = cos 𝑥</td>
                                <td className="flex-50">𝑓'(𝑥) = -sin 𝑥</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">𝑓(𝑥) = tg 𝑥</td>
                                <td className="flex-50">
                                    <div
                                        className="inline-flex items-center gap-1 pt-2">
                                        𝑓'(𝑥) =
                                        <div
                                            className={fractie}>
                                            <p className="fractie-sus text-center">1</p>
                                            <p className="fractie-jos text-center">cos<sup>2</sup>𝑥</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">𝑓(𝑥) = arcsin 𝑥</td>
                                <td className="flex-50">
                                    <div
                                        className="inline-flex items-center gap-1 pt-2">
                                        𝑓'(𝑥) =
                                        <div
                                            className={fractie}>
                                            <p className="fractie-sus text-center">1</p>
                                            <p className="fractie-jos text-center">√(1 - 𝑥<sup>2</sup>)</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">𝑓(𝑥) = arccos 𝑥</td>
                                <td className="flex-50">
                                    <div
                                        className="inline-flex items-center gap-1 pt-2">
                                        𝑓'(𝑥) = -
                                        <div
                                            className={fractie}>
                                            <p className="fractie-sus text-center">1</p>
                                            <p className="fractie-jos text-center">√(1 - 𝑥<sup>2</sup>)</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">𝑓(𝑥) = arctg 𝑥</td>
                                <td className="flex-50">  
                                    <div
                                        className="inline-flex items-center gap-1 pt-2">
                                        𝑓'(𝑥) =
                                        <div
                                            className={fractie}>
                                            <p className="fractie-sus text-center">1</p>
                                            <p className="fractie-jos text-center">1 + 𝑥<sup>2</sup></p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <p>
                    Pentru funcțiile de forma 𝑓(𝑥) = 𝑒<sup>𝑢(𝑥)</sup>, regula generală este:
                    </p>
                    <p
                        className="inline-flex items-center justify-center gap-1 w-full formula">
                            <strong>𝑓'(𝑥) = 𝑢'(𝑥) ⋅ 𝑒<sup>𝑢(𝑥)</sup></strong>
                    </p>
                    <H2 h2text="Reguli de derivare" indexH2={indexH2("Reguli de derivare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                    <ol className={olClass}>
                        <li>(𝑓 + 𝑔)' = 𝑓' + 𝑔'</li>
                        <li>(𝑐𝑓)' = 𝑐·𝑓' unde 𝑐 ∈ 𝑅</li>
                        <li>(𝑓𝑔)' = 𝑓'·𝑔 + 𝑓·𝑔'</li>
                        <li
                            className="flex items-center">
                            <span className="mr-2 text-l leading-none">•</span>
                            <div
                                className="inline-flex items-center gap-1 pt-2">
                                <span className="text-6xl font-extralight">{`(`}</span>
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center">𝑓</p>
                                    <p className="fractie-jos text-center">𝑔</p>
                                </div>
                                <span className="text-6xl font-extralight">{`)`}<sup className="text-4xl">'</sup></span>
                                <span>=  </span>
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center">𝑓'·𝑔 - 𝑓·𝑔'</p>
                                    <p className="fractie-jos text-center">𝑔<sup>2</sup></p>
                                </div>
                            </div>
                        </li>
                        <li>(𝑓∘𝑔)' = (𝑓'∘𝑔)·𝑔'</li>
                    </ol>
                    <H2 h2text="Aplicații ale derivatei" indexH2={indexH2("Aplicații ale derivatei")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                    <H3 h3text="Monotonie" indexH3={h3s[h2s.findIndex(h2 => h2 === "Aplicații ale derivatei")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Aplicații ale derivatei")].findIndex(h3 => h3 === "Monotonie") : -1}></H3>
                    <p>
                    Dacă:
                    </p>
                    <ul className={ulClass}>
                        <li>𝑓'(𝑥) {`>`} 0 → funcția este crescătoare</li>
                        <li>𝑓'(𝑥) {`<`} 0 → funcția este descrescătoare</li>
                    </ul>
                    <H3 h3text="Extrem local (minim / maxim)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Aplicații ale derivatei")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Aplicații ale derivatei")].findIndex(h3 => h3 === "Extrem local (minim / maxim)") : -1}></H3>
                    <p>
                        𝑓'(𝑥<sub className="text-xs">0</sub>) = 0 și semnul derivatei se schimbă în jurul lui 𝑥<sub className="text-xs">0</sub>, atunci:
                    </p>
                    <ul className={ulClass}>
                        <li>minim dacă derivata trece de la minus la plus</li>
                        <li>maxim dacă trece de la plus la minus</li>
                    </ul>
                    <H3 h3text="Concavitate și puncte de inflexiune" indexH3={h3s[h2s.findIndex(h2 => h2 === "Aplicații ale derivatei")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Aplicații ale derivatei")].findIndex(h3 => h3 === "Concavitate și puncte de inflexiune") : -1}></H3>
                    <p>
                    Derivata a doua 𝑓"(𝑥) ajută la determinarea:
                    </p>
                    <ul className={ulClass}>
                        <li>concavității graficului (pozitivă/negativă)</li>
                        <li>punctelor de inflexiune (𝑓"(𝑥) = 0 , cu schimbare de semn)</li>
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