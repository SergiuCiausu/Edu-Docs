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

  const h1 = "Starea gazoasă"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
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
              profil="științe sociale" 
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
                  <H2 h2text="Ce este un gaz ideal?" indexH2={indexH2("Ce este un gaz ideal?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un <strong>gaz ideal</strong> este un model teoretic care ajută la descrierea comportamentului gazelor reale în condiții normale.
                  </p>
                  <p>
                  Presupunerile pentru un gaz ideal:
                  </p>
                  <ul className={ulClass}>
                    <li>Moleculele nu interacționează între ele (fără atracții/repulsii);</li>
                    <li>Volumul moleculelor este neglijabil față de volumul total ocupat de gaz;</li>
                    <li>Moleculele se mișcă aleatoriu și rectiliniu, coliziunile fiind perfect elastice.</li>
                  </ul>
                  <H2 h2text="Parametrii de stare ai unui gaz" indexH2={indexH2("Parametrii de stare ai unui gaz")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un gaz este caracterizat prin următorii parametri de stare:
                  </p>
                  <div
                    className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-50">Parametru</th>
                            <th className="flex-15">Simbol</th>
                            <th className="flex-35">Unitate în SI</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-50">Presiune</td>
                                <td className="flex-15">𝑝</td>
                                <td className="flex-35">Pascal (Pa)</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">Volum</td>
                                <td className="flex-15">𝑉</td>
                                <td className="flex-35">metru cub (m³)</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">Temperatura</td>
                                <td className="flex-15">𝑇</td>
                                <td className="flex-35">Kelvin (K)</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">Cantitatea de substanță</td>
                                <td className="flex-15">𝑛</td>
                                <td className="flex-35">mol</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">Constanta universală a gazelor</td>
                                <td className="flex-15">𝑅</td>
                                <td className="flex-35">8,314 J/(mol·K)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                Conversii utile:
                </p>
                <ul className={ulClass}>
                    <li>1 atm = 101 325 Pa</li>
                    <li>0 °C = 273,15 K</li>
                    <li>1 L = 10⁻³ m³</li>
                </ul>
                <H2 h2text="Ecuația de stare a gazelor ideale" indexH2={indexH2("Ecuația de stare a gazelor ideale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <p>
                Ecuația fundamentală care leagă parametrii unui gaz ideal este:
                </p>
                <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <strong>𝑝 ⋅ 𝑉 = 𝑛 ⋅ 𝑅 ⋅ 𝑇</strong>
                </p>
                <p>
                Această formulă se numește <strong>ecuația lui Clapeyron</strong> și poate fi utilizată pentru a calcula oricare dintre variabilele necunoscute, dacă celelalte sunt cunoscute.
                </p>
                <H2 h2text="Aplicații și forme derivate" indexH2={indexH2("Aplicații și forme derivate")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <p>
                Dacă masa gazului este cunoscută, putem folosi și:
                </p>
                <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                                <strong>𝑝 ⋅ 𝑉 =  </strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>𝑚</strong></p>
                                <p className="fractie-jos text-center"><strong>𝑀</strong></p>
                            </div>
                            <strong>𝑅 ⋅ 𝑇</strong>
                        </div>
                </p>
                <ul className={ulClass}>
                    <li>𝑚 = masa gazului (g sau kg)</li>
                    <li>𝑀 = masa molară (g/mol sau kg/mol)</li>
                </ul>
                <p>
                    <strong>Observații importante:</strong>
                </p>
                <ul className={ulClass}>
                    <li>Ecuația de stare este valabilă în <strong>condiții ideale</strong>. Gazele reale se apropie de acest comportament la <strong>presiuni joase și temperaturi ridicate</strong>.</li>
                    <li>Este o <strong>extensie matematică</strong> a legilor lui Boyle, Charles și Avogadro.</li>
                </ul>
                <p>
                Gazul ideal este un model teoretic util pentru înțelegerea comportamentului gazelor reale. Relația 𝑝 ⋅ 𝑉 = 𝑛 ⋅ 𝑅 ⋅ 𝑇 leagă presiunea, volumul, cantitatea de substanță și temperatura. Se folosesc unități standard (Pa, m³, K, mol) pentru aplicarea formulei.
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