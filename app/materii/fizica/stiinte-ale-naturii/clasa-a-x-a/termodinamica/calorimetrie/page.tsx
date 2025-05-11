"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-termodinamica-10";
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

  const h1 = "Calorimetrie"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    ["Capacitatea calorică (C)", "Căldura specifică (c)"],
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
              clasa={10} 
              capitol="termodinamică"
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
                  <H2 h2text="Ce este căldura?" indexH2={indexH2("Ce este căldura?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Căldura (Q)</strong> este <strong>energia transferată între două corpuri</strong> sau între un corp și mediul înconjurător din cauza <strong>unei diferențe de temperatură</strong>.
                  </p>
                  <p>
                  Căldura nu este o mărime de stare, ci o <strong>mărime de proces</strong> – adică ea apare doar în timpul unui proces termic.
                  </p>
                  <p>
                  <strong>Unitate de măsură în SI: joule (J)</strong>
                  </p>
                  <p>
                  (mai veche: caloria, unde 1 cal = 4,186 J)
                  </p>
                  <H2 h2text="Căldura ca mărime de proces" indexH2={indexH2("Căldura ca mărime de proces")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Căldura nu caracterizează o stare a unui corp, ci <strong>cantitatea de energie transferată</strong> în timpul unei schimbări de stare sau a unei variații de temperatură. Se notează cu <strong>Q</strong> și poate fi:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>{`Q > 0`}</strong> – energia este <strong>primită</strong> de corp (încălzire)</li>
                    <li><strong>{`Q < 0`}</strong> – energia este <strong>cedată</strong> de corp (răcire)</li>
                  </ul>
                  <H2 h2text="Capacitatea calorică și căldura specifică" indexH2={indexH2("Capacitatea calorică și căldura specifică")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Capacitatea calorică (C)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Capacitatea calorică și căldura specifică")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Capacitatea calorică și căldura specifică")].findIndex(h3 => h3 === "Capacitatea calorică (C)") : -1}></H3>
                  <p>
                  Este <strong>cantitatea de căldură necesară pentru a varia temperatura unui corp</strong> cu un grad Celsius (sau un Kelvin).
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <div
                            className="inline-flex items-center gap-1">
                            <strong><i>𝐶 = </i></strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus"><strong><i>𝑄</i></strong></p>
                                <p className="fractie-jos"><strong><i>Δ𝑇</i></strong></p>
                            </div>
                        </div> 
                  </p>
                  <p>
                  Unitate: J/K
                  </p>
                  <H3 h3text="Căldura specifică (c)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Capacitatea calorică și căldura specifică")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Capacitatea calorică și căldura specifică")].findIndex(h3 => h3 === "Căldura specifică (c)") : -1}></H3>
                  <p>
                  Este <strong>cantitatea de căldură necesară pentru a varia temperatura unui kilogram</strong> dintr-o substanță cu un grad Celsius.
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                    <strong><i>𝑄 = 𝑚 ⋅ 𝑐 ⋅ Δ𝑇</i></strong>
                  </p>
                  <ul className={ulClass}>
                    <li>𝑄 = cantitatea de căldură</li>
                    <li>𝑐 = căldura specifică (J/kg·°C)</li>
                    <li>𝑚 = masa</li>
                    <li>Δ𝑇 = variația temperaturii</li>
                  </ul>
                  <p>
                  Exemplu: Căldura specifică a apei = 4.186 J/(g·°C) sau 4186 J/(kg·K)
                  </p>
                  <H2 h2text="Calorimetria - calculul energiei transferate" indexH2={indexH2("Calorimetria - calculul energiei transferate")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Pentru procese de încălzire/răcire:
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                    <strong><i>𝑄 = 𝑚 ⋅ 𝑐 ⋅ Δ𝑇</i></strong>
                  </p>
                  <p>
                  Pentru schimbări de stare (topire, vaporizare etc.):
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong><i>𝑄 = 𝑚 ⋅ 𝜆 (pentru topire/solidificare)</i></strong>
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong><i>𝑄 = 𝑚 ⋅ 𝐿 (pentru vaporizare/condensare)</i></strong>
                  </p>
                  <ul className={ulClass}>
                    <li>𝜆 = căldura latentă de fuziune</li>
                    <li>𝐿 căldura latentă de vaporizare</li>
                  </ul>
                  <H2 h2text="Exemple de probleme:" indexH2={indexH2("Exemple de probleme:")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ol className={olClass}>
                    <li>
                        Câtă căldură este necesară pentru a încălzi 2 kg de apă de la 20°C la 80°C?
                        <p
                            className="inline-flex items-center gap-1 w-full justify-center">
                                𝑄 = 𝑚 ⋅ 𝑐 ⋅ Δ𝑇 = 2 ⋅ 4186 ⋅ (80 − 20) = 501,120 J
                        </p>
                    </li>
                    <li>
                        O bucată de gheață de 0.5 kg se topește complet la 0°C. Câtă energie este necesară?
                        𝑄 = 𝑚 ⋅ 𝜆 = 0.5 ⋅ 334,000 = 167,000 J
                    </li>
                  </ol>
                  <p>
                  Căldura este o formă de transfer de energie și se măsoară în jouli. Capacitatea calorică se referă la întregul corp, căldura specifică la 1 kg de substanță. Formula generală: 
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong><i>𝑄 = 𝑚 ⋅ 𝑐 ⋅ Δ𝑇</i></strong>
                  </p>
                  <p>
                  Se pot calcula și căldurile necesare pentru <strong>topire, vaporizare</strong> etc., folosind constantele termice ale substanței.
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

export default page