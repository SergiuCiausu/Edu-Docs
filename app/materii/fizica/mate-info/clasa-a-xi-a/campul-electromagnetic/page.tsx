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

const page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Câmpul electromagnetic"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Câmpul electric", "Câmpul magnetic"],
    [""],
    ["Caracteristici"],
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
                  <H2 h2text="Câmpul electric și câmpul magnetic" indexH2={indexH2("Câmpul electric și câmpul magnetic")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Câmpul electric" indexH3={h3s[h2s.findIndex(h2 => h2 === "Câmpul electric și câmpul magnetic")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Câmpul electric și câmpul magnetic")].findIndex(h3 => h3 === "Câmpul electric") : -1}></H3>
                  <p>
                  <strong>Definiție</strong>: Câmpul electric este regiunea din spațiu în care o sarcină electrică este supusă unei forțe electrice.
                  </p>
                  <p>
                  Formula intensității câmpului electric:
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                      <div
                          className="inline-flex items-center gap-1">
                          <span className="pb-3"><Vector simbol="𝐸" /></span>
                          <strong><i> = </i></strong>
                          <div
                              className={fractie}>
                              <p className="fractie-sus text-center"><strong><Vector simbol="𝐹" denumire="𝑒" /></strong></p>
                              <p className="fractie-jos text-center pb-2"><strong>𝑞</strong></p>
                          </div>
                      </div>  
                  </p>
                  <ul className={ulClass}>
                    <li
                      className="flex items-center">
                        <span className="mr-2 text-l leading-none">•</span>
                        <div
                            className="inline-flex items-end gap-1">
                              <Vector simbol="𝐹" denumire="𝑒" /> este forța electrică;
                        </div>
                    </li>
                    <li>𝑞 este sarcina de probă</li>
                  </ul>
                  <p>
                  Se generează de sarcini electrice în repaus.
                  </p>
                  <H3 h3text="Câmpul magnetic" indexH3={h3s[h2s.findIndex(h2 => h2 === "Câmpul electric și câmpul magnetic")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Câmpul electric și câmpul magnetic")].findIndex(h3 => h3 === "Câmpul magnetic") : -1}></H3>
                  <p>
                  <strong>Definiție</strong>: Câmpul magnetic este regiunea din spațiu în care o sarcină electrică în mișcare sau un curent electric este supus(ă) unei forțe magnetice.
                  </p>
                  <p>
                  Formula forței magnetice (forța Lorentz):
                  </p>
                  <div
                    className="inline-flex items-center justify-center gap-1 w-full">
                    <p
                        className="inline-flex items-end justify-center gap-1 w-full">
                        <Vector simbol="𝐹" denumire="𝑚" /><strong><i className="mx-1">= 𝑞</i>⋅</strong>
                        <Vector simbol="𝑣"/><strong><i> x </i></strong><Vector simbol="𝐵"/>
                    </p>
                  </div>
                  <ul className={ulClass}>
                    <li
                      className="flex items-center">
                      <span className="mr-2 text-l leading-none">•</span>
                      <div
                          className="inline-flex items-end gap-1">
                            <Vector simbol="𝑣"/> este viteza sarcinii;
                      </div>
                    </li>
                    <li
                      className="flex items-center">
                      <span className="mr-2 text-l leading-none">•</span>
                      <div
                          className="inline-flex items-end gap-1">
                            <Vector simbol="𝐵"/> este inducția magnetică.
                      </div>
                    </li>
                  </ul>
                  <p>
                  Se generează de sarcini în mișcare (curent electric) sau magneți permanenți.
                  </p>
                  <p>
                    <strong>Interacțiunea câmpurilor:</strong>
                  </p>
                  <p>Câmpurile electric și magnetic <strong>sunt legate între ele</strong>: o variație a câmpului magnetic generează un câmp electric (inducție electromagnetică), iar un câmp electric variabil poate genera un câmp magnetic.</p>
                  <H2 h2text="Legea lui Faraday - inducția electromagnetică" indexH2={indexH2("Legea lui Faraday - inducția electromagnetică")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Fenomenul de inducție electromagnetică</strong> constă în apariția unui <strong>curent electric</strong> într-un circuit închis, atunci când <strong>fluxul magnetic</strong> prin acel circuit se modifică.
                  </p>
                  <p>
                    <strong>Fluxul magnetic:</strong>
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                      <strong>Φ<sub>𝐵</sub> = 𝐵 ⋅ 𝐴 ⋅ cos 𝜃</strong>
                  </p>
                  <p>
                    <strong>Legea lui Faraday:</strong>
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                      <strong><i>ε = -  </i></strong>
                      <div
                          className="inline-flex items-center gap-1">
                          <div
                              className={fractie}>
                              <p className="fractie-sus text-center"><strong>𝑑Φ<sub>𝐵</sub></strong></p>
                              <p className="fractie-jos text-center pb-2"><strong>𝑑𝑡</strong></p>
                          </div>
                      </div>  
                  </p>
                  <ul className={ulClass}>
                    <li>ε este tensiunea electromotoare indusă,</li>
                    <li>semnul „–” indică sensul dat de regula lui Lenz (curentul indus se opune variației fluxului care l-a generat).</li>
                  </ul>
                  <H2 h2text="Unda electromagnetică" indexH2={indexH2("Unda electromagnetică")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Undele electromagnetice</strong> sunt oscilații autoîntreținute ale câmpului electric și magnetic, care se propagă în spațiu.
                  </p>
                  <H3 h3text="Caracteristici" indexH3={h3s[h2s.findIndex(h2 => h2 === "Unda electromagnetică")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Unda electromagnetică")].findIndex(h3 => h3 === "Caracteristici") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Formate dintr-un câmp electric și unul magnetic <strong>perpendiculare</strong> unul pe altul și pe direcția de propagare.</li>
                    <li>Nu au nevoie de mediu material (se propagă și în vid).</li>
                    <li>Se propagă cu viteza luminii în vid:</li>
                  </ul>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                      <strong>𝑐 <i>=</i> 3 ⋅ 10<sup>8</sup> m/s</strong>
                  </p>
                  <p>
                  Relația de bază:
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                      <strong>𝑐 <i>=</i> 𝜆 ⋅ ν</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>𝜆 este lungimea de undă;</li>
                    <li>ν este frecvența.</li>
                  </ul>
                  <H2 h2text="Spectrul electromagnetic" indexH2={indexH2("Spectrul electromagnetic")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <table className={tableClass}>
                      <thead className={trClass}>
                          <th className="flex-30">Tip de undă</th>
                          <th className="flex-30">Lungime de undă</th>
                          <th className="flex-40">Aplicații</th>
                      </thead>
                      <tbody>
                          <tr className={trClass}>
                              <td className="flex-30">Unde radio</td>
                              <td className="flex-30">{`>1 m`}</td>
                              <td className="flex-40">Radio, TV, comunicații</td>
                          </tr>
                          <tr className={trClass}>
                              <td className="flex-30">Microunde</td>
                              <td className="flex-30">1 m – 1 mm</td>
                              <td className="flex-40">Gătit, radar, WiFi</td>
                          </tr>
                          <tr className={trClass}>
                              <td className="flex-30">Infraroșu</td>
                              <td className="flex-30">1 mm – 700 nm</td>
                              <td className="flex-40">Telecomenzi, termografie</td>
                          </tr>
                          <tr className={trClass}>
                              <td className="flex-30">Lumină vizibilă</td>
                              <td className="flex-30">700 – 400 nm</td>
                              <td className="flex-40">Vedere, iluminare</td>
                          </tr>
                          <tr className={trClass}>
                              <td className="flex-30">Ultraviolete</td>
                              <td className="flex-30">400 – 10 nm</td>
                              <td className="flex-40">Sterilizare, bronzare</td>
                          </tr>
                          <tr className={trClass}>
                              <td className="flex-30">Raze X</td>
                              <td className="flex-30">10 nm – 0.01 nm</td>
                              <td className="flex-40">Imagistică medicală</td>
                          </tr>
                          <tr className={trClass}>
                              <td className="flex-30">Raze gamma</td>
                              <td className="flex-30">{`< 0.01 nm`}</td>
                              <td className="flex-40">Tratament cancer, astronomie</td>
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