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

  const h1 = "Polimerii"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Polimerizare prin adiție", "Polimerizare prin condensare"],
    [""],
    ["Proprietăți", "Aplicații"],
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
                  <H2 h2text="Ce sunt polimerii?" indexH2={indexH2("Ce sunt polimerii?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Polimerii</strong> sunt <strong>macromolecule</strong> obținute prin unirea repetată a unor unități structurale mici, numite <strong>monomeri</strong>.
                  </p>
                  <p>
                  Exemplu simplu:
                  </p>
                  <p>
                  Etena (CH₂=CH₂), un monomer, poate forma polietilenă ([-CH₂–CH₂-]ₙ), un polimer.
                  </p>
                  <H2 h2text="Tipuri de reacții de polimerizare" indexH2={indexH2("Tipuri de reacții de polimerizare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Polimerizare prin adiție" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de reacții de polimerizare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tipuri de reacții de polimerizare")].findIndex(h3 => h3 === "Polimerizare prin adiție") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Monomerii se unesc <strong>fără eliminare de molecule mici</strong>.</li>
                    <li>Necesită monomeri <strong>cu legături duble</strong> (ex: alchene).</li>
                  </ul>
                  <p>
                    <strong>Exemplu:</strong>
                  </p>
                  <p>
                  Etenă → Polietilenă
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <span>nCH<sub>2</sub> = CH<sub>2</sub> → [-CH<sub>2</sub>-CH<sub>2</sub>-]<sub>n</sub></span>
                  </p>
                  <H3 h3text="Polimerizare prin condensare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de reacții de polimerizare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tipuri de reacții de polimerizare")].findIndex(h3 => h3 === "Polimerizare prin condensare") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Monomerii se unesc cu <strong>eliminare de molecule mici</strong>, cum ar fi H₂O, HCl etc.</li>
                    <li>Necesită două sau mai multe grupe funcționale reactive.</li>
                  </ul>
                  <p>
                    <strong>Exemplu:</strong>
                  </p>
                  <p>
                  Acid dicarboxilic + diamine → Nailon + apă
                  </p>
                  <H2 h2text="Exemple de polimeri" indexH2={indexH2("Exemple de polimeri")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <div
                    className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-25">Polimer</th>
                            <th className="flex-25">Monomer(i)</th>
                            <th className="flex-25">Tip de polimerizare</th>
                            <th className="flex-25">Utilizării</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-25">Polietilenă</td>
                                <td className="flex-25">etena</td>
                                <td className="flex-25">adiție</td>
                                <td className="flex-25">ambalaje, pungi</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-25">Polistiren</td>
                                <td className="flex-25">stiren</td>
                                <td className="flex-25">adiție</td>
                                <td className="flex-25">ambalaje termoizolante</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-25">Nailon</td>
                                <td className="flex-25">diamine + acizi dicarboxilici</td>
                                <td className="flex-25">condensare</td>
                                <td className="flex-25">fibre textile, piese auto</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-25">Poliacetat de vinil</td>
                                <td className="flex-25">acetat de vinil</td>
                                <td className="flex-25">adiție</td>
                                <td className="flex-25">adezivi (ex. Aracet)</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-25">Policarbonat</td>
                                <td className="flex-25">bisfenol A + fosgen</td>
                                <td className="flex-25">condensare</td>
                                <td className="flex-25">lentile, CD-uri</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <H2 h2text="Proprietăți și aplicații ale polimerilor" indexH2={indexH2("Proprietăți și aplicații ale polimerilor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <H3 h3text="Proprietăți:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proprietăți și aplicații ale polimerilor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proprietăți și aplicații ale polimerilor")].findIndex(h3 => h3 === "Proprietăți") : -1}></H3>
                <ul className={ulClass}>
                    <li>Rezistență mecanică ridicată</li>
                    <li>Elasticitate (pentru elastomeri, ex: cauciuc sintetic)</li>
                    <li>Stabilitate chimică (nu reacționează ușor)</li>
                    <li>Izolație termică și electrică</li>
                </ul>
                <H3 h3text="Aplicații:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proprietăți și aplicații ale polimerilor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proprietăți și aplicații ale polimerilor")].findIndex(h3 => h3 === "Aplicații") : -1}></H3>
                <ul className={ulClass}>
                    <li><strong>Industrie alimentară</strong>: ambalaje, recipiente</li>
                    <li><strong>Construcții</strong>: țevi, materiale izolante</li>
                    <li><strong>Textile</strong>: fibre sintetice (nailon, poliester)</li>
                    <li><strong>Medicină</strong>: proteze, seringi de unică folosință</li>
                    <li><strong>Tehnologie</strong>: carcase pentru aparatură, componente electronice</li>
                </ul>
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