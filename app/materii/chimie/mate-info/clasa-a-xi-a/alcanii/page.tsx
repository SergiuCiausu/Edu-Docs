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

  const h1 = "Alcanii"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
    [""],
    ["Halogenarea (reacție de substituție)", "Combustia"],
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
                  <H2 h2text="Definirea și formula generală" indexH2={indexH2("Definirea și formula generală")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Alcanii</strong> sunt hidrocarburi saturate, adică molecule formate doar din atomi de carbon și hidrogen, în care toți atomii de carbon sunt uniți prin <strong>legături simple σ</strong> (sigma).
                  </p>
                  <p>
                    <strong>Formula generală a alcanilor:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        C<sub>n</sub>H<sub>2n+2</sub>, n≥1
                  </p>
                  <p>
                  Exemple:
                  </p>
                  <ul className={ulClass}>
                    <li>Metan (CH₄)</li>
                    <li>Etan (C₂H₆)</li>
                    <li>Propan (C₃H₈)</li>
                  </ul>
                  <H2 h2text="Nomenclatura IUPAC" indexH2={indexH2("Nomenclatura IUPAC")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Denumirea alfanilor se face astfel:
                  </p>
                  <ol className={olClass}>
                    <li>Se identifică <strong>lanțul principal</strong> (cel mai lung lanț continuu de atomi de carbon).</li>
                    <li>Se numerotează lanțul începând din partea cea mai apropiată de o ramificație.</li>
                    <li>Se denumesc <strong>substituenții</strong> (ramificațiile) și se precizează poziția fiecărei ramuri.</li>
                  </ol>
                  <p>
                  Exemplu:
                  </p>
                  <p>
                  CH₃–CH(CH₃)–CH₂–CH₃
                  </p>
                  <p>
                  → 2-metilbutan
                  </p>
                  <H2 h2text="Izomeria alcanilor" indexH2={indexH2("Izomeria alcanilor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Începând cu <strong>butanul (C₄H₁₀)</strong>, alcanii prezintă:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Izomerie de catenă</strong>: lanțuri liniare și ramificate.</li>
                    <li><strong>Izomerie de poziție</strong>: pentru substituenți sau grupări funcționale (la derivați ai alfanilor).</li>
                  </ul>
                  <p>
                  Exemplu:
                  </p>
                  <p>
                  C₄H₁₀ → butan și izobutan (2-metilpropan)
                  </p>
                  <H2 h2text="Proprietăți fizice" indexH2={indexH2("Proprietăți fizice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>
                        <strong>Stare de agregare:</strong>
                        <ul className={ulClass}>
                            <li>C₁–C₄: gaze (ex: metan, etan)</li>
                            <li>C₅–C₁₇: lichide</li>
                            <li>C₁₈+: solide</li>
                        </ul>
                    </li>
                    <li><strong>Puncte de fierbere</strong>: cresc cu masa moleculară.</li>
                    <li><strong>Insolubili în apă</strong>, dar solubili în solvenți organici.</li>
                    <li><strong>Densitate</strong>: {`<1 g/cm³`} (mai mici decât apa)</li>
                  </ul>
                  <H2 h2text="Reacții caracteristice" indexH2={indexH2("Reacții caracteristice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Halogenarea (reacție de substituție)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reacții caracteristice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reacții caracteristice")].findIndex(h3 => h3 === "Reacții caracteristice") : -1}></H3>
                  <p>
                  Alcanii reacționează cu halogeni (Cl₂, Br₂) sub acțiunea luminii (fotoliză).
                  </p>
                  <p>
                  Exemplu – clorurarea metanului:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <span>CH<sub>4</sub> + Cl<sub>2</sub></span>
                        <div
                            className="inline-flex flex-col items-center">
                            <span className="leading-3 text-xs">hv</span>
                            <span className="leading-3">→</span>
                        </div>
                        <span>CH<sub>3</sub>Cl + HCl</span>
                  </p>
                  <p>
                  Poate continua în etape, formându-se și diclor-, triclor-, sau tetraclor-metani.
                  </p>
                  <H3 h3text="Combustia" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reacții caracteristice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reacții caracteristice")].findIndex(h3 => h3 === "Combustia") : -1}></H3>
                  <p>
                  Arderea alfanilor în exces de oxigen produce CO₂ și H₂O, eliberând energie.
                  </p>
                  <p>
                  Reacția generală:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                     <div
                        className="inline-flex items-center gap-1 pt-2">
                            <strong>C<sub>n</sub>H<sub>2n+2</sub> +  </strong>
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center"><strong>3n + 1</strong></p>
                            <p className="fractie-jos text-center"><strong>2</strong></p>
                        </div>
                        <strong> O<sub>2</sub> → nCO<sub>2</sub> + (n+1)H<sub>2</sub>O + Q</strong>
                    </div>
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