"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-electricitate-si-magnetism-10";
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

  const h1 = "Curentul electric continuu"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Intensitatea curentului", "Tensiunea electrică", "Rezistența electrică"],
    [""],
    ["În serie", "În paralel"],
    ["Legea I a lui Kirchhoff (a nodurilor)", "Legea a II-a a lui Kirchhoff (a ochiurilor)"],
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
              clasa={10} 
              capitol="electricitate și magnetism"
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
                  <H2 h2text="Ce este curentul electric?" indexH2={indexH2("Ce este curentul electric?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Curentul electric continuu (CC)</strong> reprezintă <strong>deplasarea ordonată a sarcinilor electrice</strong> (de obicei electroni) într-un conductor, într-un singur sens, sub acțiunea unui <strong>câmp electric constant</strong>.
                  </p>
                  <H2 h2text="Mărimi fizice fundamentale" indexH2={indexH2("Mărimi fizice fundamentale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Intensitatea curentului" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mărimi fizice fundamentale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mărimi fizice fundamentale")].findIndex(h3 => h3 === "Intensitatea curentului") : -1}></H3>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                    <div
                        className="inline-flex items-center gap-1">
                        <strong><i>𝐼 = </i></strong>
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center"><strong><i>𝑞</i></strong></p>
                            <p className="fractie-jos text-center"><strong><i>𝑡</i></strong></p>
                        </div>
                    </div>  
                </p>
                <ul className={ulClass}>
                    <li>𝐼 = intensitatea curentului (amperi, A)</li>
                    <li>𝑞 = sarcina electrică (coulombi, C)</li>
                    <li>𝑡 = timpul (s)</li>
                </ul>
                <p>
                Interpretare: câtă sarcină trece printr-o secțiune a conductorului în fiecare secundă.
                </p>
                <H3 h3text="Tensiunea electrică" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mărimi fizice fundamentale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mărimi fizice fundamentale")].findIndex(h3 => h3 === "Tensiunea electrică") : -1}></H3>
                <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                    <div
                        className="inline-flex items-center gap-1">
                        <strong><i>𝑈 = </i></strong>
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center"><strong><i>𝑊</i></strong></p>
                            <p className="fractie-jos text-center"><strong><i>𝑞</i></strong></p>
                        </div>
                    </div>  
                </p>
                <ul className={ulClass}>
                    <li>𝑈 = tensiunea (volți, V)</li>
                    <li>𝑊 = lucrul mecanic efectuat de câmpul electric (J)</li>
                    <li>𝑞 = sarcina electrică (C)</li>
                </ul>
                <p>
                Tensiunea măsoară <strong>energia pe care o primește o unitate de sarcină</strong> în circuit.
                </p>
                <H3 h3text="Rezistența electrică" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mărimi fizice fundamentale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mărimi fizice fundamentale")].findIndex(h3 => h3 === "Rezistența electrică") : -1}></H3>
                <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                    <div
                        className="inline-flex items-center gap-1">
                        <strong><i>𝑅 = </i></strong>
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center"><strong><i>𝑈</i></strong></p>
                            <p className="fractie-jos text-center"><strong><i>𝐼</i></strong></p>
                        </div>
                    </div>  
                </p>
                <ul className={ulClass}>
                    <li>𝑅 = rezistența (ohmi, Ω)</li>
                    <li>𝑈 = tensiunea aplicată (V)</li>
                    <li>𝐼 = intensitatea curentului (A)</li>
                </ul>
                <p>
                Rezistența indică <strong>opoziția</strong> pe care un conductor o oferă trecerii curentului electric.
                </p>
                <H2 h2text="Legea lui Ohm" indexH2={indexH2("Legea lui Ohm")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <p>
                    <strong>Legea lui Ohm:</strong>
                </p>
                <p>
                <i>Intensitatea curentului electric care străbate un conductor este direct proporțională cu tensiunea aplicată și invers proporțională cu rezistența conductorului.</i>
                </p>
                <p>
                    <strong>
                    Ecuație:
                    </strong>
                </p>
                <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                    <div
                        className="inline-flex items-center gap-1">
                        <strong><i>𝐼 = </i></strong>
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center"><strong><i>𝑈</i></strong></p>
                            <p className="fractie-jos text-center"><strong><i>𝑅</i></strong></p>
                        </div>
                        <strong><i> sau 𝑈 = 𝑅 ⋅ 𝐼</i></strong>
                    </div>  
                </p>
                <H2 h2text="Gruparea rezistențelor" indexH2={indexH2("Gruparea rezistențelor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <H3 h3text="În serie:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Gruparea rezistențelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Gruparea rezistențelor")].findIndex(h3 => h3 === "În serie") : -1}></H3>
                <ul className={ulClass}>
                    <li>Curentul este același prin toate rezistențele.</li>
                    <li>Tensiunea totală este suma tensiunilor parțiale.</li>
                    <li>
                    Rezistența echivalentă:
                    <p
                        className="inline-flex items-center gap-1 w-full justify-center">
                        <strong><i>𝑅<sub>eq</sub> = 𝑅<sub>1</sub> + 𝑅<sub>2</sub> + ... + 𝑅<sub>n</sub></i></strong>
                    </p>
                    </li>
                </ul>
                <H3 h3text="În paralel:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Gruparea rezistențelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Gruparea rezistențelor")].findIndex(h3 => h3 === "În paralel") : -1}></H3>
                <ul className={ulClass}>
                    <li>Tensiunea este aceeași pe fiecare ramură.</li>
                    <li>Curentul total este suma curenților prin fiecare rezistență.</li>
                    <li>
                        Rezistența echivalentă:
                        <p
                            className="inline-flex items-center gap-1 w-full justify-center">
                               <div
                                className="inline-flex items-center gap-1">
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center"><strong><i>1</i></strong></p>
                                    <p className="fractie-jos text-center"><strong><i>𝑅<sub>eq</sub></i></strong></p>
                                </div>
                                <strong><i> = </i></strong>
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center"><strong><i>1</i></strong></p>
                                    <p className="fractie-jos text-center"><strong><i>𝑅<sub>1</sub></i></strong></p>
                                </div>
                                <strong><i> + </i></strong>
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center"><strong><i>1</i></strong></p>
                                    <p className="fractie-jos text-center"><strong><i>𝑅<sub>2</sub></i></strong></p>
                                </div>
                                <strong><i> + ... + </i></strong>
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center"><strong><i>1</i></strong></p>
                                    <p className="fractie-jos text-center"><strong><i>𝑅<sub>n</sub></i></strong></p>
                                </div>
                            </div>   
                        </p>
                    </li>
                </ul>
                <H2 h2text="Legile lui Kirchhoff" indexH2={indexH2("Legile lui Kirchhoff")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <H3 h3text="Legea I a lui Kirchhoff (a nodurilor):" indexH3={h3s[h2s.findIndex(h2 => h2 === "Legile lui Kirchhoff")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Legile lui Kirchhoff")].findIndex(h3 => h3 === "Legea I a lui Kirchhoff (a nodurilor)") : -1}></H3>
                <p>
                Suma curenților care intră într-un nod este egală cu suma curenților care ies din acel nod.
                </p>
                <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong><i>∑ 𝐼<sub>intrare</sub> = ∑ 𝐼<sub>ieșire</sub></i></strong>
                </p>
                <H3 h3text="Legea a II-a a lui Kirchhoff (a ochiurilor):" indexH3={h3s[h2s.findIndex(h2 => h2 === "Legile lui Kirchhoff")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Legile lui Kirchhoff")].findIndex(h3 => h3 === "Legea a II-a a lui Kirchhoff (a ochiurilor)") : -1}></H3>
                <p>
                În orice ochi închis dintr-un circuit, suma algebrică a tensiunilor este zero.
                </p>
                <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong><i>∑ 𝑈 = 0</i></strong>
                </p>
                <p>
                Se aplică pentru analiza circuitelor complexe cu mai multe surse și rezistențe.
                </p>
                <table className={tableClass}>
                    <thead className={trClass}>
                        <th className="flex-22">Mărime</th>
                        <th className="flex-22">Simbol</th>
                        <th className="flex-22">Unitate</th>
                        <th className="flex-34">Definiție</th>
                    </thead>
                    <tbody>
                        <tr className={trClass}>
                            <td className="flex-22">Intensitate</td>
                            <td className="flex-22">𝐼</td>
                            <td className="flex-22">Amperul (A)</td>
                            <td className="flex-34">Sarcina pe unitatea de timp</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-22">Tensiune</td>
                            <td className="flex-22">𝑈</td>
                            <td className="flex-22">Voltul (V)</td>
                            <td className="flex-34">Energie pe unitatea de sarcină</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-22">Rezistență</td>
                            <td className="flex-22">𝑅</td>
                            <td className="flex-22">Ohmul (Ω)</td>
                            <td className="flex-34">Opoziția la trecerea curentului</td>
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

export default page