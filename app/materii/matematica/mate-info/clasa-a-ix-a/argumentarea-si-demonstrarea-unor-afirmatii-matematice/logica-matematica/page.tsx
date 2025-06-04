"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-argumentarea-si-demonstrarea-unor-afirmatii-matematice-9";
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

  const h1 = "Logica matematică"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
    ["Exemplu – Tabel pentru p ∧ q", "Exemplu – Tabel pentru p ⇒ q"],
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
              materie="matematică" 
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
                  <H2 h2text="Introducere" indexH2={indexH2("Introducere")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Logica matematică</strong> este o ramură a matematicii care studiază regulile gândirii corecte. Ea stă la baza oricărui raționament matematic riguros și este folosită în programare, demonstrații și inteligență artificială.
                  </p>
                  <H2 h2text="Propoziții logice" indexH2={indexH2("Propoziții logice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O propoziție logică este o enunțare care poate fi adevărată (A) sau falsă (F), dar nu ambele în același timp.
                  </p>
                  <p>
                    <strong>Exemple:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>„2 + 3 = 5” → propoziție logică (A)</li>
                    <li>„Este cald afară” → nu este propoziție logică (subiectivă)</li>
                  </ul>
                  <p>
                  Se notează de obicei cu litere mici: 𝑝, 𝑞, 𝑟
                  </p>
                  <H2 h2text="Conective logice" indexH2={indexH2("Conective logice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Conectivele logice sunt simboluri care leagă propoziții între ele:
                  </p>
                  <div className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-10">Simbol</th>
                            <th className="flex-10">Nume</th>
                            <th className="flex-50">Explicație</th>
                            <th className="flex-30">Exemplu</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-10">¬𝑝</td>
                                <td className="flex-10">negație</td>
                                <td className="flex-50">„nu p” (inversul valorii de adevăr)</td>
                                <td className="flex-30">Dacă 𝑝 = A, atunci ¬𝑝 = F</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-10">𝑝 ∧ 𝑞</td>
                                <td className="flex-10">conjuncție</td>
                                <td className="flex-50">„p și q” – adevărată doar dacă ambele sunt A</td>
                                <td className="flex-30">A doar dacă ambele sunt A</td>
                            </tr> 
                            <tr className={trClass}>
                                <td className="flex-10">𝑝 ∨ 𝑞</td>
                                <td className="flex-10">disjuncție</td>
                                <td className="flex-50">„p sau q” – adevărată dacă cel puțin una este A</td>
                                <td className="flex-30">A dacă cel puțin una este A</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-10">𝑝 ⇒ 𝑞</td>
                                <td className="flex-10">implicație</td>
                                <td className="flex-50">	„dacă p, atunci q” – falsă doar dacă p este A și q este F</td>
                                <td className="flex-30">A doar dacă nu avem A ⇒ F</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-10">𝑝 ⇔ 𝑞</td>
                                <td className="flex-10">echivalență</td>
                                <td className="flex-50">„p dacă și numai dacă q” – A dacă ambele au aceeași valoare</td>
                                <td className="flex-30">A când p și q sunt ambele A sau ambele F</td>
                            </tr> 
                        </tbody>
                    </table>
                  </div>
                  <H2 h2text="Tabele de adevăr" indexH2={indexH2("Tabele de adevăr")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>\
                  <p>
                  Un <strong>tabel de adevăr</strong> arată toate combinațiile posibile de valori pentru propoziții și rezultatul logic.
                  </p>
                  <H3 h3text="Exemplu – Tabel pentru 𝑝 ∧ 𝑞:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tabele de adevăr")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tabele de adevăr")].findIndex(h3 => h3 === "Exemplu – Tabel pentru p ∧ q") : -1}></H3>
                  <div className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-30">𝑝</th>
                            <th className="flex-30">𝑞</th>
                            <th className="flex-40">𝑝 ∧ 𝑞</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-30">A</td>
                                <td className="flex-30">A</td>
                                <td className="flex-40">A</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-30">A</td>
                                <td className="flex-30">F</td>
                                <td className="flex-40">F</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-30">F</td>
                                <td className="flex-30">A</td>
                                <td className="flex-40">F</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-30">F</td>
                                <td className="flex-30">F</td>
                                <td className="flex-40">F</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                  <H3 h3text="Exemplu – Tabel pentru p ⇒ q" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tabele de adevăr")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tabele de adevăr")].findIndex(h3 => h3 === "Exemplu – Tabel pentru p ⇒ q") : -1}></H3>
                  <div className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-30">𝑝</th>
                            <th className="flex-30">𝑞</th>
                            <th className="flex-40">𝑝 ⇒ 𝑞</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-30">A</td>
                                <td className="flex-30">A</td>
                                <td className="flex-40">A</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-30">A</td>
                                <td className="flex-30">F</td>
                                <td className="flex-40">F</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-30">F</td>
                                <td className="flex-30">A</td>
                                <td className="flex-40">A</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-30">F</td>
                                <td className="flex-30">F</td>
                                <td className="flex-40">A</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                  <p>
                  Observație: o implicație este <strong>falsă doar când presupunerea este adevărată și concluzia falsă</strong>.
                  </p>
                  <H2 h2text="Raționamente deductive" indexH2={indexH2("Raționamente deductive")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un <strong>raționament deductiv</strong> este o concluzie logică obținută pe baza unor premise adevărate.
                  </p>
                  <p>
                  Exemple:
                  </p>
                  <ol className={olClass}>
                    <li>
                        Premisă: Dacă plouă, atunci iau umbrela.
                        <p>
                        Premisă: Plouă.
                        </p>
                        <p>
                        Concluzie: Iau umbrela.
                        </p>
                        <p>
                        → valid (se numește <strong>Modus Ponens</strong>)
                        </p>
                    </li>
                    <li>
                        Premisă: Dacă învăț, iau notă bună.
                        <p>
                        Premisă: Nu iau notă bună.
                        </p>
                        <p>
                        Concluzie: Nu am învățat.
                        </p>
                        <p>
                        → valid (se numește <strong>Modus Tollens</strong>)
                        </p>
                    </li> 
                  </ol>
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