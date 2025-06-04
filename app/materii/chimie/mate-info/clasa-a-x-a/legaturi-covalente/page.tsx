"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-chimie-10";
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

  const h1 = "Legături covalente"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    ["După numărul de electroni partajați", "După tipul atomilor implicați"],
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
              profil="mate info" 
              materie="chimie" 
              clasa={10} 
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
                  <H2 h2text="Ce este legătura covalentă?" indexH2={indexH2("Ce este legătura covalentă?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Legătura covalentă</strong> este o legătură chimică care se formează prin <strong>punerea în comun</strong> a unor electroni între doi atomi <strong>nemetalici</strong>, pentru a atinge configurația stabilă de tip gaz nobil.
                  </p>
                  <p>
                  Este caracterizată de:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Partajare de electroni;</strong></li>
                    <li>Apariția unei <strong>forțe de atracție</strong> între nucleele atomilor și perechea comună de electroni;</li>
                    <li>Stabilitate ridicată a moleculelor rezultate.</li>
                  </ul>
                  <H2 h2text="Tipuri de legături covalente" indexH2={indexH2("Tipuri de legături covalente")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="După numărul de electroni partajați" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de legături covalente")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tipuri de legături covalente")].findIndex(h3 => h3 === "După numărul de electroni partajați") : -1}></H3>
                  <div
                    className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-20">Tip legătură</th>
                            <th className="flex-60">Nr. de perechi partajate</th>
                            <th className="flex-20">Exemplu</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-20">Simplă</td>
                                <td className="flex-60">1 pereche</td>
                                <td className="flex-20">H–H, H–Cl</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20">Dublă</td>
                                <td className="flex-60">2 perechi</td>
                                <td className="flex-20">O=O, C=O</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20">Triplă</td>
                                <td className="flex-60">3 perechi</td>
                                <td className="flex-20">N≡N, C≡C</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <H3 h3text="După tipul atomilor implicați" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de legături covalente")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tipuri de legături covalente")].findIndex(h3 => h3 === "După tipul atomilor implicați") : -1}></H3>
                <ul className={ulClass}>
                    <li>
                        <strong>Legătură covalentă nepolară</strong>: între atomi identici sau cu electronegativitate apropiată → electronii sunt distribuiți uniform
                        <p>
                        Ex: H₂, Cl₂, O₂
                        </p>
                    </li>
                    <li>
                        <strong>Legătură covalentă polară</strong>: între atomi diferiți, cu electronegativitate diferită → electronii sunt deplasați către atomul mai electronegativ
                        <p>
                        Ex: HCl, H₂O
                        </p>
                    </li>
                </ul>
                <H2 h2text="Reprezentarea legăturilor covalente" indexH2={indexH2("Reprezentarea legăturilor covalente")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <p>
                Legătura covalentă poate fi reprezentată:
                </p>
                <ul className={ulClass}>
                    <li>
                        Prin formule Lewis (puncte pentru electroni), exemplu:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                                H:Cl sau H–Cl
                        </p>
                    </li>
                    <li>
                        Prin linii pentru fiecare pereche de electroni partajată:
                        <ul className={ulClass}>
                            <li>O legătură simplă → o linie (–)</li>
                            <li>Dublă → două linii (=)</li>
                            <li>Triplă → trei linii (≡)</li>
                        </ul>
                    </li>
                </ul>
                <H2 h2text="Condiții pentru formarea legăturii covalente" indexH2={indexH2("Condiții pentru formarea legăturii covalente")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <ul className={ulClass}>
                    <li>Diferența de electronegativitate între atomi este <strong>mai mică de 1,7</strong>;</li>
                    <li>Fiecare atom contribuie cu <strong>un electron nepereche</strong>;</li>
                    <li>Atomii caută să atingă <strong>configurația de octet (sau duet)</strong> stabilă.</li>
                </ul>
                <H2 h2text="Proprietățile substanțelor cu legături covalente" indexH2={indexH2("Proprietățile substanțelor cu legături covalente")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <div
                    className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-40">Caracteristică</th>
                            <th className="flex-60">Substanțe covalente</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-40">Agregare</td>
                                <td className="flex-60">Gazoasă, lichidă sau solidă (molecule mici)</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-40">Puncte de topire</td>
                                <td className="flex-60">Relativ joase</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-40">Solubilitate</td>
                                <td className="flex-60">În solvenți organici, rar în apă</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-40">Conductivitate</td>
                                <td className="flex-60">Nu conduc electric în stare solidă</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-40">Exemplu</td>
                                <td className="flex-60">H₂O, CO₂, CH₄, NH₃</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    <strong>Exemple de molecule covalente:</strong>
                </p>
                <ul className={ulClass}>
                    <li>Apa (H₂O) – legături polare, moleculă polară</li>
                    <li>Metanul (CH₄) – legături covalente nepolare</li>
                    <li>Oxigenul molecular (O₂) – legătură dublă nepolară</li>
                    <li>Amoniacul (NH₃) – legături polare, moleculă polară</li>
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

export default Page