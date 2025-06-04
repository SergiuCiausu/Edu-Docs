"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-chimie-12";
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

  const h1 = "Noțiuni de termochimie"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
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
              materie="chimie" 
              clasa={12} 
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
                  <H2 h2text="Ce este termochimia?" indexH2={indexH2("Ce este termochimia?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Termochimia</strong> este o ramură a chimiei fizice care studiază schimburile de energie termică în timpul reacțiilor chimice.
                  </p>
                  <p>
                  Toate reacțiile chimice sunt însoțite de <strong>variații de energie</strong>, sub formă de <strong>căldură</strong> (Q). Aceste variații reflectă <strong>diferența dintre energia produselor și energia reactanților</strong>.
                  </p>
                  <H2 h2text="Efecte termice în reacții chimice" indexH2={indexH2("Efecte termice în reacții chimice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Reacțiile chimice pot fi:
                  </p>
                  <ul className={ulClass}>
                    <li>
                        <strong>Exotermice</strong> – degajă căldură către mediul înconjurător.
                        <p>
                        Exemplu:
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                                <span>CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O, ΔH {`<`} 0</span>
                        </p>
                    </li>
                    <li>
                        <strong>Endotermice</strong> – absorb căldură din mediul înconjurător.
                        <p>
                        Exemplu:
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                                <span>CaCO<sub>3</sub> → CaO + CO<sub>2</sub>, ΔH {`>`} 0</span>
                        </p>
                    </li>
                  </ul>
                  <p>
                  Simbolul ΔH reprezintă <strong>variația entalpiei</strong>, adică cantitatea de căldură schimbată la presiune constantă.
                  </p>
                  <H2 h2text="Legea lui Hess" indexH2={indexH2("Legea lui Hess")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Legea lui Hess</strong>: Dacă o reacție chimică are loc în mai multe etape, variația totală de entalpie este suma variațiilor de entalpie ale etapelor intermediare, indiferent de calea urmată.
                  </p>
                  <p>
                    Aceasta permite <strong>calcularea indirectă</strong> a căldurii unei reacții, folosind date experimentale cunoscute.
                  </p>
                  <H2 h2text="Căldura de reacție" indexH2={indexH2("Căldura de reacție")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Căldura de combustie:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Căldura degajată la <strong>arderea completă</strong> a unei substanțe în oxigen.</li>
                    <li>Se exprimă în kJ/mol.</li>
                    <li>
                        Exemplu: arderea metanului:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                                <span>CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O, ΔH = -890kj/mol</span>
                        </p>
                    </li>
                  </ul>
                  <p>
                    <strong>Căldura de dizolvare:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Energia eliberată sau absorbită la dizolvarea unei substanțe într-un solvent</li>
                    <li>Poate fi <strong>exotermă</strong> (ex: dizolvarea NaOH) sau <strong>endotermă</strong> (ex: dizolvarea KNO₃).</li>
                  </ul>
                  <p>
                    <strong>Căldura de neutralizare:</strong>
                  </p>
                  <p>
                  Căldura eliberată la reacția dintre un acid și o bază:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <span>HCl + NaOH → NaCl + H<sub>2</sub>O, ΔH = -57kj/mol</span>
                  </p>
                  <H2 h2text="Energia în sistemele biologice" indexH2={indexH2("Energia în sistemele biologice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Reacțiile chimice din corpul uman (digestie, respirație celulară, sinteză de ATP) sunt <strong>reacții chimice însoțite</strong> de schimburi de energie.
                  </p>
                  <p>
                    Exemplu: Respirația celulară:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <span>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + energie</span>
                  </p>
                  <p>
                  Această reacție este <strong>exotermă</strong> și furnizează energia necesară pentru toate procesele celulare.
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

export default Page