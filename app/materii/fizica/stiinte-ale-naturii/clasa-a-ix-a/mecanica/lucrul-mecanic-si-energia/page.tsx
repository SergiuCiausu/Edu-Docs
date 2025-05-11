"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-mecanica-9";
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

  const h1 = "Lucrul mecanic și energia"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    ["Energia cinetică", "Energia potențială gravitațională"],
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
              profil="științe ale naturii" 
              materie="fizică" 
              clasa={9} 
              capitol="mecanică"
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
                  <h1>{`Capitolul ${indexLectie}: ${h1}`}</h1>
                  <H2 h2text="Lucrul mecanic" indexH2={indexH2("Lucrul mecanic")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Lucrul mecanic</strong> este mărimea fizică scalară care exprimă transferul de energie între două corpuri prin acțiunea unei forțe.
                  </p>
                  <p>
                    <strong>Formula generală:</strong>
                  </p>
                  <p
                    className="inline-flex items-end justify-center gap-1 w-full">
                        <strong><i>𝐿 = 𝐹 ⋅ 𝑑 ⋅ cos 𝛼</i></strong>
                  </p>
                  <ul className={ulClass}>
                    <li>𝐿 este lucrul mecanic [Joule, J]</li>
                    <li>𝐹 este forța aplicată [Forța normală, N]</li>
                    <li>𝑑 este deplasarea [m]</li>
                    <li>𝛼 este unghiul dintre direcția forței și direcția deplasării</li>
                  </ul>
                  <p>
                    Dacă 𝛼 = 0<sup>∘</sup>: lucru pozitiv (forța favorizează mișcarea)
                  </p>
                  <p>Dacă 𝛼 = 90<sup>∘</sup>: lucru nul (forța nu influențează mișcarea)</p>
                  <p>Dacă 𝛼 = 180<sup>∘</sup>: lucru negativ (forța se opune mișcării)</p>
                  <H2 h2text="Puterea mecanică" indexH2={indexH2("Puterea mecanică")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Puterea mecanică</strong> exprimă viteza cu care se efectuează un lucru mecanic.
                  </p>
                  <p>
                    <strong>Formula:</strong>
                  </p>
                   <p
                    className="inline-flex items-center gap-1 w-full justify-center"><strong><i>P = </i></strong>
                        <div
                            className={fractie}>
                            <p className="fractie-sus"><strong><i>𝐿</i></strong></p>
                            <p className="fractie-jos"><strong><i>𝑡</i></strong></p>
                        </div>
                    </p>
                    <ul className={ulClass}>
                        <li>P este puterea mecanică [Watt, W]</li>
                        <li>𝐿 este lucrul mecanic [J]</li>
                        <li>𝑡 este timpul în care se efectuează lucrul [s]</li>
                    </ul>
                    <p>
                        <strong> 1 W = 1 J/s</strong>
                    </p>
                    <p>
                    Alte unități: kW, CP (cai putere, folosită la automobile)
                    </p>
                    <H2 h2text="Energia mecanică" indexH2={indexH2("Energia mecanică")} indexLectie={indexLectie}></H2>
                    <p>
                    Energia este capacitatea unui corp de a efectua lucru mecanic. În mecanică, analizăm două forme:
                    </p>
                    <H3 h3text="Energia cinetică:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Energia mecanică")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Energia mecanică")].findIndex(h3 => h3 === "Energia cinetică") : -1}></H3>
                    <p>
                    Reprezintă energia asociată mișcării unui corp.
                    </p>
                    <p
                        className="inline-flex items-end justify-center gap-1 w-full">
                            <div
                            className="inline-flex items-center gap-1">
                                <strong><i>E<sub>c</sub> = </i></strong>
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus"><strong><i>1</i></strong></p>
                                    <p className="fractie-jos"><strong><i>2</i></strong></p>
                                </div>
                                <strong><i>m𝑣<sup>2</sup></i></strong>
                            </div>
                    </p>
                    <ul className={ulClass}>
                        <li>m este masa corpului [kg]</li>
                        <li>𝑣 este viteza [m/s]</li>
                    </ul>
                    <H3 h3text="Energia potențială gravitațională:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Energia mecanică")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Energia mecanică")].findIndex(h3 => h3 === "Energia potențială gravitațională") : -1}></H3>
                    <p>
                    Reprezintă energia unui corp datorată poziției sale într-un câmp gravitațional.
                    </p>
                    <p
                        className="inline-flex items-end justify-center gap-1 w-full">
                                <strong><i>E<sub>p</sub> = m𝑔ℎ</i></strong>
                    </p>
                    <ul className={ulClass}>
                        <li>m este masa [kg]</li>
                        <li>𝑔 este accelerația gravitațională (9,81 m/s²)</li>
                        <li>ℎ este înălțimea față de un reper [m]</li>
                    </ul>
                    <H2 h2text="Legea conservării energiei mecanice" indexH2={indexH2("Legea conservării energiei mecanice")} indexLectie={indexLectie}></H2>
                    <p>
                    <strong>Enunț</strong>: În lipsa forțelor disipative (fricțiune, rezistență aer etc.), energia mecanică totală a unui sistem izolat rămâne constantă:
                    </p>
                    <p
                        className="inline-flex items-end justify-center gap-1 w-full">
                            <strong><i>E = E<sub>c</sub> + E<sub>p</sub> = constantă</i></strong>
                    </p>
                    <p>
                    Asta înseamnă că energia se poate transforma dintr-o formă în alta (ex: de la potențială la cinetică), dar suma lor rămâne aceeași.
                    </p>
                    <p>
                    Prin studiul lucrului mecanic și al energiei, înțelegem cum se transferă și transformă energia în natură. Aceste concepte ne ajută să explicăm atât fenomene naturale (căderea corpurilor, funcționarea unui leagăn), cât și tehnologii moderne (motoare, turbine, ascensoare).
                    </p>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={indexLectie} clickedLink={clickedLinkId} onLinkClick={updateClickedLinkId}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div>
  )
}

export default page