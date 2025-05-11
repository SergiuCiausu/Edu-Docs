"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-chimie-9";
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

  const h1 = "Acizi și baze"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
    ["Acid sulfuric + hidroxid de sodiu", "Acid azotic + hidroxid de calciu"],
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
              materie="chimie" 
              clasa={9} 
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
                  <H2 h2text="Ce este o reacție de neutralizare?" indexH2={indexH2("Ce este o reacție de neutralizare?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O <strong>reacție de neutralizare</strong> este o reacție chimică între un <strong>acid și o bază</strong>, în urma căreia se formează <strong>o sare și apă</strong>.
                  </p>
                  <p>
                    Este o reacție exoterică – eliberează energie (căldură).
                  </p>
                  <H2 h2text="Exemplu general" indexH2={indexH2("Exemplu general")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        HCl(aq) + NaOH(aq) → NaCl(aq) + H<sub>2</sub>O(l)
                  </p>
                  <ul className={ulClass}>
                    <li>HCl = acid clorhidric</li>
                    <li>NaOH = hidroxid de sodiu (bază)</li>
                    <li>NaCl = clorură de sodiu (sare)</li>
                    <li>H₂O = apă</li>
                  </ul>
                  <H2 h2text="Scrierea ecuației ionice" indexH2={indexH2("Scrierea ecuației ionice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Toți compușii solubili se scriu în formă de ioni:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        H⁺ + Cl⁻ + Na⁺ + OH⁻ → Na⁺ + Cl⁻ + H₂O
                  </p>
                  <p>
                  Se elimină ionii spectatori (Na⁺, Cl⁻):
                  </p>
                  <p>
                    <strong>Ecuația netă:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        H⁺ + OH⁻ → H₂O
                  </p>
                  <p>
                  Aceasta este esența oricărei reacții de neutralizare.
                  </p>
                  <H2 h2text="Alte exemple de neutralizare" indexH2={indexH2("Alte exemple de neutralizare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Acid sulfuric + hidroxid de sodiu" indexH3={h3s[h2s.findIndex(h2 => h2 === "Alte exemple de neutralizare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Alte exemple de neutralizare")].findIndex(h3 => h3 === "Acid sulfuric + hidroxid de sodiu") : -1}></H3>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O
                  </p>
                  <H3 h3text="Acid azotic + hidroxid de calciu" indexH3={h3s[h2s.findIndex(h2 => h2 === "Alte exemple de neutralizare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Alte exemple de neutralizare")].findIndex(h3 => h3 === "Acid azotic + hidroxid de calciu") : -1}></H3>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O
                  </p>
                  <H2 h2text="Aplicabilitate în viața reală" indexH2={indexH2("Aplicabilitate în viața reală")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li><strong>Tratarea solurilor acide</strong>: se adaugă var (Ca(OH)₂) pentru neutralizarea acidității;</li>
                    <li><strong>Medicamente antiacide</strong>: conțin baze slabe (hidroxid de magneziu) care neutralizează excesul de acid gastric;</li>
                    <li><strong>Spălarea urmelor de acid cu soluții alcaline</strong> (în laboratoare);</li>
                    <li><strong>Tratarea apelor reziduale</strong>: pentru corectarea pH-ului.</li>
                  </ul>
                  <p>
                  Neutralizarea este completă doar când cantitatea de acid și bază sunt echimolare (raport 1:1 pentru H⁺ și OH⁻). Nu toate sărurile rezultate sunt solubile în apă (ex. BaSO₄ – precipitat). Neutralizarea poate fi monitorizată cu indicatori acido-bazici (ex: fenolftaleina devine incoloră → roz când pH-ul crește). Reacția de neutralizare este: acid + bază → sare + apă. 
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