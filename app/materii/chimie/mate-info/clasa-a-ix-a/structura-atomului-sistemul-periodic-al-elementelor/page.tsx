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

const Page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Structura atomului. Sistemul periodic al elementelor"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
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
              profil="mate info" 
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
                  <H2 h2text="Învelișul electronic și nivelurile energetice" indexH2={indexH2("Învelișul electronic și nivelurile energetice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Atomul este format dintr-un nucleu central (format din protoni și neutroni) și dintr-un <strong>înveliș electronic</strong> care conține <strong>electronii</strong>.
                  </p>
                  <p>
                    Electronii nu se află dispuși aleatoriu, ci se găsesc pe <strong>niveluri energetice</strong> distincte, numite și <strong>straturi electronice</strong>, notate cu <strong>K, L, M, N</strong>… sau prin <strong>numerele cuantice principale</strong> n = 1, 2, 3…
                  </p>
                  <p>
                  Fiecare nivel energetic poate găzdui un număr maxim de electroni, dat de formula:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <strong>Numărul maxim de electroni = 2𝑛<sup>2</sup></strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Nivelul K (n = 1): max. 2 electroni</li>
                    <li>Nivelul L (n = 2): max. 8 electroni</li>
                    <li>Nivelul M (n = 3): max. 18 electroni</li>
                  </ul>
                  <H2 h2text="Subniveluri energetice" indexH2={indexH2("Subniveluri energetice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Fiecare nivel energetic este divizat în subniveluri, notate cu literele <strong>s, p, d, f</strong>.
                  </p>
                  <p>
                  Acestea diferă prin forma orbitalilor și prin energia asociată.
                  </p>
                  <div
                    className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-20">Nivel (n)</th>
                            <th className="flex-35">Subniveluri existente</th>
                            <th className="flex-45">Număr maxim total de electroni</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-20">1</td>
                                <td className="flex-35">s</td>
                                <td className="flex-45">2</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20">2</td>
                                <td className="flex-35">s, p</td>
                                <td className="flex-45">8</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20">3</td>
                                <td className="flex-35">s, p, d</td>
                                <td className="flex-45">18</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20">4</td>
                                <td className="flex-35">s, p, d, f</td>
                                <td className="flex-45">32</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <H2 h2text="Orbitali atomici" indexH2={indexH2("Orbitali atomici")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <p>
                Un <strong>orbital</strong> este o regiune din spațiu unde probabilitatea de a găsi un electron este maximă.
                </p>
                <p>
                Fiecare subnivel conține un anumit număr de orbitali:
                </p>
                <ul className={ulClass}>
                    <li>s → 1 orbital (max. 2 electroni)</li>
                    <li>p → 3 orbitali (max. 6 electroni)</li>
                    <li>d → 5 orbitali (max. 10 electroni)</li>
                    <li>f → 7 orbitali (max. 14 electroni)</li>
                </ul>
                <H2 h2text="Principii de distribuție a electronilor" indexH2={indexH2("Principii de distribuție a electronilor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <p>
                Electronii se distribuie în orbitali conform a trei principii fundamentale:
                </p>
                <ol className={olClass}>
                    <li>
                        <strong>Principiul Aufbau (construcției)</strong>
                        <p>
                        Electronii ocupă mai întâi orbitali cu energie mai mică. Ordinea energiei este:
                        </p>
                        <p>
                            {`1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s …`}
                        </p>
                    </li>
                    <li>
                        <strong>Principiul excluziunii al lui Pauli</strong>
                        <p>
                        Într-un orbital pot exista <strong>cel mult 2 electroni cu spini opuși</strong>.
                        </p>
                    </li>
                    <li>
                        <strong>Regula lui Hund</strong>
                        <p>
                        Înainte ca un orbital să fie ocupat cu doi electroni, orbitali de energie egală se ocupă fiecare cu <strong>câte un electron cu spin paralel</strong>.
                        </p>
                    </li>
                </ol>
                <H2 h2text="Exemple de configurații electronice" indexH2={indexH2("Exemple de configurații electronice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <ul className={ulClass}>
                    <li><strong>Hidrogen</strong> (Z = 1): 1s¹</li>
                    <li><strong>Heliu</strong> (Z = 2): 1s²</li>
                    <li><strong>Oxigen</strong> (Z = 8): 1s² 2s² 2p⁴</li>
                    <li><strong>Sodiu</strong> (Z = 11): 1s² 2s² 2p⁶ 3s¹</li>
                </ul>
                <p>
                Observații:
                </p>
                <ul className={ulClass}>
                    <li>Electronii din ultimul nivel energetic se numesc <strong>electroni de valență</strong> – aceștia determină <strong>proprietățile chimice ale elementului</strong>.</li>
                    <li>Configurația electronică stă la baza poziției elementului în sistemul periodic (grupă și perioadă).</li>
                </ul>
                <p>
                Electronii sunt organizați în nivele, subniveluri și orbitali. Fiecare orbital poate primi maximum 2 electroni. Ordinea de umplere a orbitalilor respectă principiile fundamentale ale mecanicii cuantice.
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