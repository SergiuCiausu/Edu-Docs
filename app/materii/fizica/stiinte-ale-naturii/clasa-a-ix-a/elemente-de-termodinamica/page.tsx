"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-elemente-de-termodinamica-9";
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

  const h1 = "Elemente de termodinamică"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Temperatura", "Dilatarea termică"],
    ["Căldura (Q)", "Capacitatea calorică"],
    [""],
    [""],
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
              clasa={9} 
              capitol="elemente de termodinamică"
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
                  <H2 h2text="Temperatura și dilatarea termică" indexH2={indexH2("Temperatura și dilatarea termică")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Temperatura" indexH3={h3s[h2s.findIndex(h2 => h2 === "Temperatura și dilatarea termică")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Temperatura și dilatarea termică")].findIndex(h3 => h3 === "Temperatura") : -1}></H3>
                  <p>
                  Temperatura este mărimea fizică ce exprimă <strong>gradul de agitație al particulelor</strong> dintr-un corp. Ea se măsoară în <strong>Kelvin (K)</strong> în SI, dar și în <strong>Celsius (°C)</strong> în uzul comun.
                  </p>
                  <p>
                  Ex: 0°C = 273,15 K
                  </p>
                  <H3 h3text="Dilatarea termică" indexH3={h3s[h2s.findIndex(h2 => h2 === "Temperatura și dilatarea termică")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Temperatura și dilatarea termică")].findIndex(h3 => h3 === "Dilatarea termică") : -1}></H3>
                  <p>
                  Atunci când un corp este încălzit, particulele sale se mișcă mai intens și se depărtează unele de altele, determinând <strong>mărirea volumului</strong> corpului – fenomen numit <strong>dilatare termică</strong>.
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Dilatarea liniară</strong>: în cazul tijelor metalice, lungimea crește cu temperatura.</li>
                    <li><strong>Dilatarea volumică</strong>: lichidele (și unele solide) își modifică volumul odată cu temperatura.</li>
                  </ul>
                  <p
                    className="inline-flex items-end justify-center gap-1 w-full">
                    <strong><i>Δ𝐿 = 𝛼 ⋅ 𝐿<sub>0</sub> ⋅ Δ𝑇</i></strong>
                  </p>
                  <ul className={ulClass}>
                    <li>𝛼 este coeficientul de dilatare liniară</li>
                    <li>𝐿<sub>0</sub> este lungimea inițială</li>
                    <li>Δ𝑇 este variația de temperatură</li>
                  </ul>
                  <H2 h2text="Căldura și capacitatea calorică" indexH2={indexH2("Căldura și capacitatea calorică")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Căldura (Q)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Căldura și capacitatea calorică")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Căldura și capacitatea calorică")].findIndex(h3 => h3 === "Căldura (Q)") : -1}></H3>
                  <p>
                  Este <strong>energia transferată între două corpuri</strong> aflate la temperaturi diferite. Nu este o substanță, ci o <strong>formă de energie</strong>.
                  </p>
                  <p>
                  Se măsoară în <strong>Jouli (J)</strong>.
                  </p>
                  <H3 h3text="Capacitatea calorică" indexH3={h3s[h2s.findIndex(h2 => h2 === "Căldura și capacitatea calorică")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Căldura și capacitatea calorică")].findIndex(h3 => h3 === "Capacitatea calorică") : -1}></H3>
                  <p>
                  Reprezintă <strong>cantitatea de căldură</strong> necesară pentru a crește temperatura unui corp cu un grad.
                  </p>
                  <p
                    className="inline-flex items-end justify-center gap-1 w-full">
                        <strong><i>𝑄 = 𝑐 ⋅ 𝑚 ⋅ Δ𝑇</i></strong>
                  </p>
                  <ul className={ulClass}>
                    <li>𝑄 = cantitatea de căldură</li>
                    <li>𝑐 = căldura specifică (J/kg·°C)</li>
                    <li>𝑚 = masa</li>
                    <li>Δ𝑇 = variația temperaturii</li>
                  </ul>
                  <H2 h2text="Schimbul de căldură" indexH2={indexH2("Schimbul de căldură")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Căldura se transmite între corpurile cu temperaturi diferite prin trei mecanisme:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Conducție</strong>: prin contact direct (ex: metal încălzit la un capăt).</li>
                    <li><strong>Convecție</strong>: în lichide și gaze, datorită curenților interni (ex: aer cald care urcă).</li>
                    <li><strong>Radiație</strong>: prin unde electromagnetice (ex: razele solare încălzesc Pământul).</li>
                  </ul>
                  <H2 h2text="Primul principiu al termodinamicii" indexH2={indexH2("Primul principiu al termodinamicii")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Acest principiu afirmă conservarea energiei sub formă termică:
                  </p>
                  <strong><i>Δ𝑈 = 𝑄 − 𝐿</i></strong>
                  <ul className={ulClass}>
                    <li> este variația energiei interne</li>
                    <li>𝑄 este căldura primită de sistem</li>
                    <li>𝐿 este lucrul mecanic efectuat de sistem</li>
                  </ul>
                  <p>
                  Interpretare: energia internă a unui sistem se modifică prin căldura primită și lucrul mecanic efectuat.
                  </p>
                  <H2 h2text="Exemplu practic:" indexH2={indexH2("Exemplu practic:")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un corp de 2 kg este încălzit cu 1000 J. Dacă nu se face lucru mecanic, cu cât îi crește temperatura dacă 𝑐 = 500 J/kg ⋅ °C?
                  </p>
                  <p
                    className="inline-flex items-end justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1">
                            <strong><i>Δ𝑇 = </i></strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong><i>𝑄</i></strong></p>
                                <p className="fractie-jos text-center"><strong><i>𝑚 ⋅ 𝑐</i></strong></p>
                            </div>
                            <strong><i> = </i></strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong><i>1000</i></strong></p>
                                <p className="fractie-jos text-center"><strong><i>2 ⋅ 500</i></strong></p>
                            </div>
                            <strong><i> = 1°C</i></strong>
                        </div>
                  </p>
                  <p>
                  Termodinamica studiază procesele de transfer de energie sub formă de căldură, fiind esențială pentru înțelegerea funcționării motoarelor, centralelor electrice, și chiar a organismelor vii. În această lecție, am învățat cum se produce dilatarea, cum se măsoară căldura și cum se conservă energia internă într-un sistem.
                  </p>
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