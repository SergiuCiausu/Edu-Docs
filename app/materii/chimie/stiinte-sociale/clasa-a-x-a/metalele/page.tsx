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

  const h1 = "Metalele"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    ["Reactivitatea chimică variază de la un metal la altul", "Reacții caracteristice"],
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
              profil="științe sociale" 
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
                  <H2 h2text="Generalități despre metale" indexH2={indexH2("Generalități despre metale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Metalele reprezintă aproximativ 80% din elementele chimice și se găsesc în partea stângă și centrală a sistemului periodic. Sunt caracterizate prin capacitatea de a pierde electroni și de a forma ioni pozitivi (cationi) în reacții chimice.
                  </p>
                  <H2 h2text="Proprietăți fizice ale metalelor" indexH2={indexH2("Proprietăți fizice ale metalelor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <div
                    className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-20">Proprietate</th>
                            <th className="flex-80">Explicație</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-20"><strong>Luciu metalic</strong></td>
                                <td className="flex-80">Reflectă lumina – suprafață strălucitoare</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20"><strong>Maleabilitate</strong></td>
                                <td className="flex-80">Pot fi modelate în foi subțiri (ex: aur, aluminiu)</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20"><strong>Ductilitate</strong></td>
                                <td className="flex-80">Pot fi trase în fire (ex: cupru)</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20"><strong>Conductivitate</strong></td>
                                <td className="flex-80">Termică și electrică ridicată</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20"><strong>Puncte de topire</strong></td>
                                <td className="flex-80">De obicei ridicate (cu excepția metalelor alcaline)</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20"><strong>Densitate</strong></td>
                                <td className="flex-80">Variază de la scăzută (Li) la foarte mare (Os, Ir)</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20"><strong>Duritate</strong></td>
                                <td className="flex-80">Variază – cele mai dure: crom, wolfram</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <H2 h2text="Proprietăți chimice ale metalelor" indexH2={indexH2("Proprietăți chimice ale metalelor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <H3 h3text="Reactivitatea chimică variază de la un metal la altul" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proprietăți chimice ale metalelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proprietăți chimice ale metalelor")].findIndex(h3 => h3 === "Reactivitatea chimică variază de la un metal la altul") : -1}></H3>
                <ul className={ulClass}>
                    <li>Metale <strong>foarte reactive</strong>: Na, K, Ca</li>
                    <li>Metale <strong>moderate</strong>: Zn, Fe, Al</li>
                    <li>Metale <strong>puțin reactive</strong>: Cu, Hg</li>
                    <li>Metale <strong>nobile</strong>: Ag, Au, Pt</li>
                </ul>
                <H3 h3text="Reacții caracteristice" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proprietăți chimice ale metalelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proprietăți chimice ale metalelor")].findIndex(h3 => h3 === "Reacții caracteristice") : -1}></H3>
                <ol className={olClass}>
                    <li>
                        <strong>Cu oxigenul:</strong>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                            2Mg + O<sub>2</sub> → 2MgO
                        </p>
                    </li>
                    <li>
                        <strong>Cu apa (metalele foarte reactive):</strong>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                                2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub> ↑
                        </p>
                    </li>
                    <li>
                        <strong>Cu acizii:</strong>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                                Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub> ↑
                        </p>
                    </li>
                    <li>
                        <strong>Cu soluții de săruri ale altor metale (reacții de substituție):</strong>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                            Cu + 2AgNO<sub>3</sub> → Cu(NO<sub>3</sub>)<sub>2</sub> + 2Ag
                        </p>
                    </li>
                </ol>
                <H2 h2text="Activitatea chimică – Seria reactivității metalelor" indexH2={indexH2("Activitatea chimică – Seria reactivității metalelor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <p>
                Metalele pot fi ordonate într-o <strong>serie a reactivității</strong>, în funcție de capacitatea de a ceda electroni și de a reacționa. Exemple:
                </p>
                <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                    <strong>{`K > Ca > Na > Mg > Al > Zn > Fe > Sn > Pb > (H) > Cu > Hg > Ag > Au`}</strong>
                </p>
                <ul className={ulClass}>
                    <li>Metalele aflate <strong>deasupra hidrogenului</strong> pot disloca H din acizi.</li>
                    <li>Cele <strong>sub hidrogen</strong> (ex: Cu, Ag, Au) nu reacționează cu acizii diluați.</li>
                </ul>
                <H2 h2text="Aplicații practice" indexH2={indexH2("Aplicații practice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <ul className={ulClass}>
                    <li>Conductori electrici (Cu, Al)</li>
                    <li>Structuri metalice (Fe, Al)</li>
                    <li>Bijuterii, componente electronice (Au, Ag)</li>
                    <li>Reactivi în sinteze chimice (Zn, Mg)</li>
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