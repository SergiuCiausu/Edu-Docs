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

  const h1 = "Compușii azotați"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Ce sunt aminele?", "Clasificarea aminelor"],
    ["Proprietăți fizice", "Bazicitate"],
    ["Alchilarea", "Acilarea"],
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
                  <H3 h3text="Ce sunt aminele?" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și clasificare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura și clasificare")].findIndex(h3 => h3 === "Ce sunt aminele?") : -1}></H3>
                  <p>
                  Aminele sunt compuși organici derivați ai amoniacului (NH₃), în care unul sau mai mulți atomi de hidrogen sunt înlocuiți cu grupări alchil (R) sau aril (Ar).
                  </p>
                  <p>
                    <strong>Gruparea funcțională</strong>: –NH₂ (amino)
                  </p>
                  <H3 h3text="Clasificarea aminelor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și clasificare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura și clasificare")].findIndex(h3 => h3 === "Clasificarea aminelor") : -1}></H3>
                  <ul className={ulClass}>
                    <li>
                      <strong>Amine primare</strong>: un atom de H înlocuit cu o grupare organică
                      <p>Exemplu: CH₃NH₂ (metilamină)</p>
                    </li>
                    <li>
                      <strong>Amine secundare</strong>: doi atomi de H înlocuiți
                      <p>
                      Exemplu: (CH₃)₂NH (dimetilamină)
                      </p>
                    </li>
                    <li>
                      <strong>Amine terțiare</strong>: toți cei trei atomi de H înlocuiți
                      <p>
                      Exemplu: (CH₃)₃N (trimetilamină)
                      </p>
                    </li>
                  </ul>
                  <H2 h2text="Proprietăți fizice și chimice" indexH2={indexH2("Proprietăți fizice și chimice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Proprietăți fizice" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proprietăți fizice și chimice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proprietăți fizice și chimice")].findIndex(h3 => h3 === "Proprietăți fizice") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Aminele cu masă moleculară mică sunt <strong>gaze sau lichide</strong> cu miros caracteristic.</li>
                    <li>Sunt <strong>polare</strong>, iar aminele primare și secundare pot forma <strong>legături de hidrogen</strong>, crescând punctele lor de fierbere.</li>
                    <li><strong>Solubilitate</strong>: Aminele cu lanțuri scurte sunt solubile în apă (se leagă prin legături de H cu apa).</li>
                  </ul>
                  <H3 h3text="Bazicitate" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proprietăți fizice și chimice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proprietăți fizice și chimice")].findIndex(h3 => h3 === "Bazicitate") : -1}></H3>
                  <p>
                  Aminele se comportă ca <strong>baze slabe</strong>, acceptând protoni (H⁺) de la acizi.
                  </p>
                  <p>
                  Exemplu:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                      <span>CH<sub>3</sub>NH<sub>2</sub> + HCl → CH<sub>3</sub>NH<sub>3</sub><sup>+</sup>Cl<sup>-</sup></span>
                  </p>
                  <p>
                  Bazicitatea aminelor este influențată de:
                  </p>
                  <ul className={ulClass}>
                    <li>Natura grupărilor legate de azot (efect inductiv)</li>
                    <li>Posibilitatea formării legăturilor de H</li>
                  </ul>
                  <H2 h2text="Reacții caracteristice" indexH2={indexH2("Reacții caracteristice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Alchilarea" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reacții caracteristice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reacții caracteristice")].findIndex(h3 => h3 === "Alchilarea") : -1}></H3>
                  <p>
                  Aminele reacționează cu haloalcani (compuși cu grupări –X: Cl, Br, I), formând amine de ordin superior.
                  </p>
                  <p>
                  Exemplu:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                      <span>CH<sub>3</sub>NH<sub>2</sub> + CH<sub>3</sub>Cl → CH<sub>3</sub>NHCH<sub>3 + HCl</sub></span>
                  </p>
                  <H3 h3text="Acilarea" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reacții caracteristice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reacții caracteristice")].findIndex(h3 => h3 === "Acilarea") : -1}></H3>
                  <p>
                  Aminele reacționează cu derivați ai acidului carboxilic (cloruri acide, anhidride) formând <strong>amide</strong>.
                  </p>
                  <p>
                  Exemplu:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                      <span>CH<sub>3</sub>NH<sub>2</sub> + CH<sub>3</sub>COCl → CH<sub>3</sub>NHCOCH<sub>3</sub> + HCl</span>
                  </p>
                  <p>
                  Acilarea este o reacție importantă în sinteza medicamentelor și a materialelor plastice.
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