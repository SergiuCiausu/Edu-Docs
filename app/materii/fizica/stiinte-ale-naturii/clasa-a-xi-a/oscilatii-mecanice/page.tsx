"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-capitole-11";
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

  const h1 = "Oscilații mecanice"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Exemple din natură", "Caracteristici ale mișcării oscilatorii"],
    ["Pendulul gravitațional", "Pendulul elastic (oscilator armonic)"],
    ["Energie cinetică", "Energie potențială elastică (la pendulul elastic)", "Energia mecanică totală"],
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
              materie="fizică" 
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
                  <H2 h2text="Mișcarea oscilatorie - caracteristici generale" indexH2={indexH2("Mișcarea oscilatorie - caracteristici generale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Mișcarea oscilatorie</strong> este o mișcare periodică în jurul unei poziții de echilibru.
                  </p>
                  <H3 h3text="Exemple din natură" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mișcarea oscilatorie - caracteristici generale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mișcarea oscilatorie - caracteristici generale")].findIndex(h3 => h3 === "Exemple din natură") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Mișcarea unui pendul (ceasuri);</li>
                    <li>Vibrația unei corzi de chitară;</li>
                    <li>Bătăile inimii;</li>
                    <li>Mișcarea unui leagăn;</li>
                  </ul>
                  <H3 h3text="Caracteristici ale mișcării oscilatorii" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mișcarea oscilatorie - caracteristici generale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mișcarea oscilatorie - caracteristici generale")].findIndex(h3 => h3 === "Caracteristici ale mișcării oscilatorii") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Perioada (T)</strong> – timpul pentru o oscilație completă;</li>    
                    <li>
                        Frecvența (ν) – numărul de oscilații pe secundă:
                        <p
                            className="inline-flex items-center gap-1 w-full justify-center">
                                <div
                                    className="inline-flex items-center gap-1">
                                        <strong><i>ν = </i></strong>
                                    <div
                                        className={fractie}>
                                        <p className="fractie-sus text-center"><strong><i>1</i></strong></p>
                                        <p className="fractie-jos text-center"><strong>𝑇</strong></p>
                                    </div>
                                </div>
                        </p>
                    </li>
                    <li>
                    <strong>Amplitudinea (A)</strong> – deplasarea maximă față de poziția de echilibru.
                    </li>
                    <li><strong>Faza</strong> – unghiul care exprimă starea de oscilație la un moment dat.</li>
                    <li>
                        <strong>Ecuația mișcării armonice:</strong>
                        <p
                            className="inline-flex items-center gap-1 w-full justify-center">
                            <strong>𝑥(𝑡) = 𝐴 ⋅ <i>sin</i>(𝜔𝑡 + 𝜑<sub><i>0</i></sub>)</strong>
                        </p>
                        unde 𝜔 este pulsația, iar 𝜑<sub><i>0</i></sub> este faza inițială
                    </li>
                  </ul>
                  <H2 h2text="Pendulul gravitațional și elastic" indexH2={indexH2("Pendulul gravitațional și elastic")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Pendulul gravitațional" indexH3={h3s[h2s.findIndex(h2 => h2 === "Pendulul gravitațional și elastic")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Pendulul gravitațional și elastic")].findIndex(h3 => h3 === "Pendulul gravitațional") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Format dintr-o masă mică legată de un fir subțire și inextensibil;</li>
                    <li>Oscilează sub acțiunea forței gravitaționale;</li>
                  </ul>
                  <p>
                    <strong>Perioada pendulului gravitațional (pentru oscilații mici):</strong>
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <div
                            className="inline-flex items-center gap-1">
                                <strong>𝑇 <i>=  2</i>𝜋</strong><span className="text-7xl font-extralight">√</span>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>𝑙</strong></p>
                                <p className="fractie-jos text-center"><strong>𝑔</strong></p>
                            </div>
                        </div>
                  </p>
                  <ul className={ulClass}>
                    <li>𝑙 = lungimea firului,</li>
                    <li>𝑔 = accelerația gravitațională.</li>
                  </ul>
                  <H3 h3text="Pendulul elastic (oscilator armonic)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Pendulul gravitațional și elastic")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Pendulul gravitațional și elastic")].findIndex(h3 => h3 === "Pendulul elastic (oscilator armonic)") : -1}></H3>
                  <p>
                  Un corp legat de un arc ideal, care respectă legea lui Hooke:
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                    <strong>𝐹 <i>= -</i>𝑘 ⋅ 𝑥</strong>
                  </p>
                  <p>
                    cu 𝑘 - constanta elastică și 𝑥 = deformarea arcului
                  </p>
                  <p>
                    <strong>Perioada pendulului elastic:</strong>
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <div
                            className="inline-flex items-center gap-1">
                                <strong>𝑇 <i>= 2</i>𝜋</strong><span className="text-7xl font-extralight">√</span>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>𝑚</strong></p>
                                <p className="fractie-jos text-center"><strong>𝑘</strong></p>
                            </div>
                        </div>
                  </p>
                  <ul className={ulClass}>
                    <li>𝑚 = masa corpului;</li>
                    <li>𝑘 = constanta elastică a arcului.</li>
                  </ul>
                  <H2 h2text="Energie în oscilații" indexH2={indexH2("Energie în oscilații")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Într-un sistem oscilant ideal (fără frecare), <strong>energia totală se conservă</strong>.
                  </p>
                  <H3 h3text="Energie cinetică:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Energie în oscilații")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Energie în oscilații")].findIndex(h3 => h3 === "Energie cinetică") : -1}></H3>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <div
                            className="inline-flex items-center gap-1">
                                <span>𝐸<sub>𝑐</sub> <i>=</i></span>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">1</p>
                                <p className="fractie-jos text-center">2</p>
                            </div>
                                <span>𝑚𝑣<sup>2</sup></span>
                        </div>
                  </p>
                  <H3 h3text="Energie potențială elastică (la pendulul elastic):" indexH3={h3s[h2s.findIndex(h2 => h2 === "Energie în oscilații")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Energie în oscilații")].findIndex(h3 => h3 === "Energie potențială elastică (la pendulul elastic)") : -1}></H3>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <div
                            className="inline-flex items-center gap-1">
                                <span>𝐸<sub>𝑝</sub> <i>=</i></span>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">1</p>
                                <p className="fractie-jos text-center">2</p>
                            </div>
                                <span>𝑘𝑥<sup>2</sup></span>
                        </div>
                  </p>
                  <H3 h3text="Energia mecanică totală:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Energie în oscilații")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Energie în oscilații")].findIndex(h3 => h3 === "Energia mecanică totală") : -1}></H3>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <span>𝐸 <i>=</i> 𝐸<sub>𝑐</sub> + 𝐸<sub>𝑝</sub> <i>= constantă</i></span>
                  </p>
                  <p>
                  Energia se transformă alternativ din cinetică în potențială și invers pe parcursul oscilației.
                  </p>
                  <H2 h2text="Exemplu de problemă" indexH2={indexH2("Exemplu de problemă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un pendul gravitațional are lungimea de 1 m. Calculează perioada oscilațiilor.
                  </p>
                  <p>
                  Soluție:
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <div
                            className="inline-flex items-center gap-1">
                                𝑇 <i>= 2</i>𝜋<span className="text-7xl font-extralight">√</span>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">𝑙</p>
                                <p className="fractie-jos text-center">𝑔</p>
                            </div>
                                <i>= 2</i>𝜋<span className="text-7xl font-extralight">√</span>
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center">1</p>
                                    <p className="fractie-jos text-center">9.8</p>
                                </div>
                                <i>≈ 2</i>𝜋 ⋅ <i>0.32 ≈ 2.01s</i>
                        </div>
                  </p>
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-33">Concept</th>
                            <th className="flex-33">Formula</th>
                            <th className="flex-34">Observații</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-33">Perioada pendulului gravitațional</td>
                                <td className="flex-33">
                                    <div
                                        className="inline-flex items-center gap-1">
                                            <strong>𝑇 <i>=  2</i>𝜋</strong><span className="text-7xl font-extralight">√</span>
                                        <div
                                            className={fractie}>
                                            <p className="fractie-sus text-center"><strong>𝑙</strong></p>
                                            <p className="fractie-jos text-center"><strong>𝑔</strong></p>
                                        </div>
                                    </div>
                                </td>
                                <td className="flex-33">Valabil doar pentru oscilații mici</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-33">Perioada pendulului elastic</td>
                                <td className="flex-33">
                                    <div
                                        className="inline-flex items-center gap-1">
                                            <strong>𝑇 <i>= 2</i>𝜋</strong><span className="text-7xl font-extralight">√</span>
                                        <div
                                            className={fractie}>
                                            <p className="fractie-sus text-center"><strong>𝑚</strong></p>
                                            <p className="fractie-jos text-center"><strong>𝑘</strong></p>
                                        </div>
                                    </div>
                                </td>
                                <td className="flex-33">Mișcare armonică</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-33">Energie totală</td>
                                <td className="flex-33">
                                    <div
                                        className="inline-flex items-center gap-1">
                                            𝐸 <i>= </i>
                                        <div
                                            className={fractie}>
                                            <p className="fractie-sus text-center">1</p>
                                            <p className="fractie-jos text-center">2</p>
                                        </div>
                                        𝑘𝐴<sup>2</sup>
                                    </div>
                                </td>
                                <td className="flex-33">Se conservă</td>
                            </tr>
                        </tbody>
                    </table>
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