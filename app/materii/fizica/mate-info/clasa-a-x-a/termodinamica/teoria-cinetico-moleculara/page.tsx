"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-termodinamica-10";
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

  const h1 = "Teoria cinetico-moleculară"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Cele trei ipoteze fundamentale"],
    [""],
    ["Exemple", "Observații"],
    ["Schimbări de stare"],
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
              materie="fizică" 
              clasa={10} 
              capitol="termodinamică"
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
                  <H2 h2text="Ce este teoria cinetico-moleculară?" indexH2={indexH2("Ce este teoria cinetico-moleculară?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Teoria cinetico-moleculară este un model științific care descrie <strong>structura și comportamentul materiei</strong> pe baza existenței <strong>particulelor (atomi sau molecule)</strong> aflate în <strong>mișcare continuă</strong>.
                  </p>
                  <H3 h3text="Cele trei ipoteze fundamentale:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ce este teoria cinetico-moleculară?")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ce este teoria cinetico-moleculară?")].findIndex(h3 => h3 === "Cele trei ipoteze fundamentale") : -1}></H3>
                  <ol className={olClass}>
                    <li><strong>Materia este formată din particule foarte mici</strong> (atomi sau molecule).</li>
                    <li><strong>Între particule există spații libere</strong> (chiar dacă nu le vedem).</li>
                    <li><strong>Particulele se mișcă continuu și dezordonat</strong> – această mișcare se numește <strong>agitație termică</strong>.</li>
                  </ol>
                  <H2 h2text="Agitația termică" indexH2={indexH2("Agitația termică")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Agitația termică</strong> este mișcarea continuă, dezordonată și aleatoare a particulelor dintr-un corp, cauzată de <strong>energia internă</strong> a acestuia.
                  </p>
                  <ul className={ulClass}>
                    <li>Mișcarea particulelor crește odată cu temperatura.</li>
                    <li>
                        Dovezi experimentale:
                        <ul className={ulClass}>
                            <li><strong>Mișcarea browniană</strong> – observată de Robert Brown în 1827, constă în mișcarea aleatoare a polenului într-un lichid, cauzată de ciocnirile cu moleculele lichidului.</li>
                        </ul>
                    </li>
                  </ul>
                  <H2 h2text="Difuzia" indexH2={indexH2("Difuzia")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Difuzia</strong> este <strong>fenomenul de pătrundere spontană a moleculelor unei substanțe printre moleculele alteia</strong>, fără a fi nevoie de un curent de aer sau agitare externă.
                  </p>
                  <H3 h3text="Exemple:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Difuzia")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Difuzia")].findIndex(h3 => h3 === "Exemple") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Mirosul unui parfum care se răspândește într-o cameră.</li>
                    <li>Zahărul care se dizolvă în apă fără a fi amestecat.</li>
                  </ul>
                  <H3 h3text="Observații" indexH3={h3s[h2s.findIndex(h2 => h2 === "Difuzia")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Difuzia")].findIndex(h3 => h3 === "Observații") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Difuzia este mai rapidă la temperaturi mai mari.</li>
                    <li>Este o dovadă a mișcării particulelor.</li>
                  </ul>
                  <H2 h2text="Stările de agregare ale materiei" indexH2={indexH2("Stările de agregare ale materiei")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Materia poate exista în mai multe <strong>stări de agregare</strong>, în funcție de modul de aranjare și mișcare a particulelor:
                  </p>
                  <table className={tableClass}>
                    <thead className={trClass}>
                        <th className="flex-20">Starea</th>
                        <th className="flex-60">Proprietăți</th>
                        <th className="flex-20">Exemple</th>
                    </thead>
                    <tbody>
                        <tr className={trClass}>
                            <td className="flex-20">Solidă</td>
                            <td className="flex-60">Particulele sunt foarte apropiate, ordonate, vibrații mici.</td>
                            <td className="flex-20">Gheață, metal</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-20">Lichidă</td>
                            <td className="flex-60">Particulele sunt apropiate, dar dezordonate, alunecă unele peste altele.</td>
                            <td className="flex-20">Apă, ulei</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-20">Gazoasă</td>
                            <td className="flex-60">Particulele sunt foarte îndepărtate, mișcare rapidă și dezordonată.</td>
                            <td className="flex-20">Aer, vapori</td>
                        </tr>
                    </tbody>
                </table>
                <H3 h3text="Schimbări de stare:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Stările de agregare ale materiei")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Stările de agregare ale materiei")].findIndex(h3 => h3 === "Schimbări de stare") : -1}></H3>
                <ul className={ulClass}>
                    <li><strong>Topire</strong> (solid → lichid)</li>
                    <li><strong>Solidificare</strong> (lichid → solid)</li>
                    <li><strong>Vaporizare</strong> (lichid → gaz)</li>
                    <li><strong>Condensare</strong> (gaz → lichid)</li>
                    <li><strong>Sublimare</strong> (solid → gaz)</li>
                    <li><strong>Depunere</strong> (gaz → solid)</li>
                </ul>
                <H2 h2text="Aplicații și exemple" indexH2={indexH2("Aplicații și exemple")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <ul className={ulClass}>
                    <li>Frigiderele folosesc principiile vaporizării și condensării pentru a răci.</li>
                    <li>Parfumurile se bazează pe difuzia rapidă a moleculelor aromatice.</li>
                    <li>Termometrele utilizează dilatarea lichidelor (o consecință a agitației termice).</li>
                </ul>
                <p>
                Teoria cinetico-moleculară explică materia prin particule aflate în mișcare continuă. Agitația termică este mișcarea aleatoare a particulelor, intensificată la temperaturi mai mari. Difuzia este un fenomen care confirmă mișcarea particulelor. Materia poate exista în mai multe stări de agregare, cu tranziții între ele.
                </p>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
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