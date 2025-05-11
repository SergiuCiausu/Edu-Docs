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

  const h1 = "Legături chimice. Legătură ionică"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
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
                  <H2 h2text="Ce este legătura chimică?" indexH2={indexH2("Ce este legătura chimică?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O <strong>legătură chimică</strong> este o forță care menține atomii împreună în molecule sau rețele cristaline. Legăturile chimice se formează pentru ca atomii să atingă o configurație stabilă de electroni, similară cu cea a gazelor nobile (configurație octet sau dublet).
                  </p>
                  <H2 h2text="Ionii – cum se formează?" indexH2={indexH2("Ionii – cum se formează?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un <strong>ion</strong> este un atom sau grup de atomi care a câștigat sau pierdut unul sau mai mulți electroni, căpătând sarcină electrică.
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Cation</strong> – ion cu sarcină pozitivă (ex: Na⁺, Ca²⁺) → rezultat al pierderii de electroni de către un metal;</li>
                    <li><strong>Anion</strong> – ion cu sarcină negativă (ex: Cl⁻, O²⁻) → rezultat al câștigării de electroni de către un nemetal.</li>
                  </ul>
                  <H2 h2text="Legătura ionică – definiție" indexH2={indexH2("Legătura ionică – definiție")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Legătura ionică</strong> este o legătură chimică formată între un <strong>metal</strong> (care cedează electroni) și un <strong>nemetal</strong> (care acceptă electroni), datorită <strong>atracției electrostatice</strong> dintre cationi și anioni.
                  </p>
                  <H2 h2text="Exemplu: Formarea NaCl (clorură de sodiu)" indexH2={indexH2("Exemplu: Formarea NaCl (clorură de sodiu)")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>Atomul de sodiu (Na): Z = 11 → 1s² 2s² 2p⁶ 3s¹ → pierde 1 electron → Na⁺</li>
                    <li>Atomul de clor (Cl): Z = 17 → 1s² 2s² 2p⁶ 3s² 3p⁵ → acceptă 1 electron → Cl⁻</li>
                  </ul>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        Na → Na<sup>+</sup> + e<sup>-</sup>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        Cl + e<sup>-</sup> → Cl<sup>-</sup>
                  </p>
                  <p>
                  Na⁺ și Cl⁻ se atrag → NaCl (cristal ionic)
                  </p>
                  <H2 h2text="Caracteristici ale substanțelor ionice" indexH2={indexH2("Caracteristici ale substanțelor ionice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>Formează <strong>rețele cristaline regulate</strong> (nu molecule izolate);</li>
                    <li>Sunt <strong>solide</strong> la temperatura camerei;</li>
                    <li>Au <strong>puncte de topire și fierbere mari</strong>;</li>
                    <li><strong>Conduc curentul electric</strong> în <strong>soluție apoasă</strong> sau în stare topită, dar nu în stare solidă;</li>
                    <li>Sunt <strong>solubile în apă</strong> și în alți solvenți polari.</li>
                  </ul>
                  <H2 h2text="Alte exemple de compuși ionici" indexH2={indexH2("Alte exemple de compuși ionici")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>MgO – magneziu + oxigen → Mg²⁺ și O²⁻</li>
                    <li>CaCl₂ – calciu + clor → Ca²⁺ și 2Cl⁻</li>
                    <li>Na₂O – sodiu + oxigen → 2Na⁺ și O²⁻</li>
                  </ul>
                  <H2 h2text="Comparativ – legătura ionică vs covalentă" indexH2={indexH2("Comparativ – legătura ionică vs covalentă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <div
                    className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-20">Caracteristică</th>
                            <th className="flex-35">Legătură ionică</th>
                            <th className="flex-45">Legătură covalentă</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-20">Participanți</td>
                                <td className="flex-35">Metal + nemetal</td>
                                <td className="flex-45">2 nemetalici</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20">Mecanism</td>
                                <td className="flex-35">Transfer de electroni</td>
                                <td className="flex-45">Partajare de electroni</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20">Formă</td>
                                <td className="flex-35">Rețele cristaline (ioni)</td>
                                <td className="flex-45">Molecule discrete</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20">Conductivitate</td>
                                <td className="flex-35">Doar în soluție/topitură</td>
                                <td className="flex-45">De regulă, nu conduce</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                Legătura ionică presupune transferul de electroni între un metal și un nemetal. Se formează ioni opuși care se atrag electrostatic. Substanțele ionice au proprietăți fizice și chimice caracteristice datorită structurii cristaline.
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