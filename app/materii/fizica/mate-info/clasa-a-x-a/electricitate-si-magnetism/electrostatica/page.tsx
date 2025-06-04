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

const Page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Electrostatică"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    ["Intensitatea câmpului electric", "Ecuația potențialului electric"],
    ["Capacitatea electrică", "Energia electrică stocată"],
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
                  <H2 h2text="Ce este electrostatica?" indexH2={indexH2("Ce este electrostatica?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Electrostatica</strong> este ramura fizicii care studiază <strong>interacțiunile dintre sarcini electrice aflate în repaus</strong>.
                  </p>
                  <H2 h2text="Forța electrostatică (Legea lui Coulomb)" indexH2={indexH2("Forța electrostatică (Legea lui Coulomb)")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Legea lui Coulomb:</strong>
                  </p>
                  <p>
                  Două sarcini electrice punctiforme se atrag sau se resping cu o forță direct proporțională cu produsul sarcinilor și invers proporțională cu pătratul distanței dintre ele.
                  </p>
                  <p>
                    <strong>Ecuație:</strong>
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <div
                            className="inline-flex items-center gap-1">
                            <strong><i>𝐹 = 𝑘 ⋅ </i></strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong><i>|𝑞<sub>1</sub> ⋅ 𝑞<sub>2</sub>|</i></strong></p>
                                <p className="fractie-jos text-center"><strong><i>𝑟<sup>2</sup></i></strong></p>
                            </div>
                        </div>  
                  </p>
                  <ul className={ulClass}>
                    <li>𝐹 = forța electrostatică (N)</li>
                    <li>𝑞<sub>1</sub>, 𝑞<sub>2</sub> = sarcinile electrice (C)</li>
                    <li>𝑟 = distanța dintre sarcini (m)</li>
                    <li>𝑘 ≈ 9 ⋅ 10<sup>9</sup> Nm<sup>2</sup>/C<sup>2</sup></li>
                  </ul>
                  <p>
                  Forța este de <strong>atracție</strong> dacă sarcinile sunt de <strong>semn opus</strong>, și de <strong>respingere</strong> dacă sunt de <strong>același semn</strong>.
                  </p>
                  <H2 h2text="Câmpul și potențialul electric" indexH2={indexH2("Câmpul și potențialul electric")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Câmpul electric</strong> este o regiune a spațiului în care o sarcină electrică resimte o forță electrică.
                  </p>
                  <H3 h3text="Intensitatea câmpului electric:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Câmpul și potențialul electric")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Câmpul și potențialul electric")].findIndex(h3 => h3 === "Intensitatea câmpului electric") : -1}></H3>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <div
                            className="inline-flex items-center gap-1">
                            <strong><i><Vector simbol="𝐸" /> = </i></strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong><i><Vector simbol="𝐹" /></i></strong></p>
                                <p className="fractie-jos text-center"><strong><i>𝑞</i></strong></p>
                            </div>
                            <strong><i> sau 𝐸 = 𝑘 ⋅ </i></strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong><i>|𝑄|</i></strong></p>
                                <p className="fractie-jos text-center"><strong><i>𝑟<sup>2</sup></i></strong></p>
                            </div>
                        </div>   
                  </p>
                  <p>
                  Câmpul electric are <strong>direcție și sens</strong> (vectorial), reprezentat grafic prin <strong>linii de câmp</strong>.
                  </p>
                  <p>
                  <strong>Potențialul electric</strong> într-un punct este mărimea scalară care exprimă energia electrică pe unitatea de sarcină.
                  </p>
                  <H3 h3text="Ecuația potențialului electric" indexH3={h3s[h2s.findIndex(h2 => h2 === "Câmpul și potențialul electric")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Câmpul și potențialul electric")].findIndex(h3 => h3 === "Ecuația potențialului electric") : -1}></H3>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <div
                            className="inline-flex items-center gap-1">
                            <strong><i>𝑉 = </i></strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong><i>𝑊</i></strong></p>
                                <p className="fractie-jos text-center"><strong><i>𝑞</i></strong></p>
                            </div>
                        </div>   
                  </p>
                  <ul className={ulClass}>
                    <li>𝑉 = potențial electric (V)</li>
                    <li>𝑊 = lucrul efectuat pentru a aduce sarcina 𝑞 în acel punct (J)</li>
                  </ul>
                  <p>
                  <strong>Diferența de potențial</strong> între două puncte duce la apariția <strong>tensiunii electrice</strong>.
                  </p>
                  <H2 h2text="Condensatoare electrice" indexH2={indexH2("Condensatoare electrice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un condensator este un dispozitiv format din două armături conductoare separate de un dielectric, care <strong>stochează sarcină electrică</strong>.
                  </p>
                  <H3 h3text="Capacitatea electrică:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Condensatoare electrice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Condensatoare electrice")].findIndex(h3 => h3 === "Capacitatea electrică") : -1}></H3>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <div
                            className="inline-flex items-center gap-1">
                            <strong><i>𝐶 = </i></strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong><i>𝑄</i></strong></p>
                                <p className="fractie-jos text-center"><strong><i>𝑈</i></strong></p>
                            </div>
                        </div>   
                  </p>
                  <ul className={ulClass}>
                    <li>𝐶 = capacitatea condensatorului (farazi, F)</li>
                    <li>𝑄 = sarcina electrică (C)</li>
                    <li>𝑈 = tensiunea aplicată (V)</li>
                  </ul>
                  <p>
                  Capacitatea unui condensator depinde de:
                  </p>
                  <ul className={ulClass}>
                    <li>Suprafața armăturilo</li>
                    <li>Distanța dintre ele</li>
                    <li>Natura dielectricului</li>
                  </ul>
                  <H3 h3text="Energia electrică stocată:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Condensatoare electrice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Condensatoare electrice")].findIndex(h3 => h3 === "Energia electrică stocată") : -1}></H3>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <div
                            className="inline-flex items-center gap-1">
                            <strong><i>𝑊 = </i></strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong><i>1</i></strong></p>
                                <p className="fractie-jos text-center"><strong><i>2</i></strong></p>
                            </div>
                            <strong><i>𝐶𝑈<sup>2</sup></i></strong>
                        </div>   
                  </p>
                  <p>
                  <strong>Aplicații</strong>: condensatoarele sunt folosite în circuite electrice pentru filtrare, stocare de energie, temporizare și altele.
                  </p>
                  <table className={tableClass}>
                    <thead className={trClass}>
                        <th className="flex-40">Concept</th>
                        <th className="flex-60">Descriere</th>
                    </thead>
                    <tbody>
                        <tr className={trClass}>
                            <td className="flex-40">Forță electrostatică</td>
                            <td className="flex-60">Acționează între sarcini; atractivă sau repulsivă</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-40">Câmp electric</td>
                            <td className="flex-60">Regiunea în care o sarcină simte o forță</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-40">Potențial electric</td>
                            <td className="flex-60">Energie electrică pe unitate de sarcină</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-40">Condensator</td>
                            <td className="flex-60">Dispozitiv care stochează sarcină și energie electrică</td>
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