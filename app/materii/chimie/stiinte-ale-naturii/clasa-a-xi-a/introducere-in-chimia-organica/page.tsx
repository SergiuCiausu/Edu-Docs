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

  const h1 = "Introducere în chimia organică"
  
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
                  <H2 h2text="Ce este chimia organică?" indexH2={indexH2("Ce este chimia organică?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Chimia organică este ramura chimiei care se ocupă cu studiul compușilor carbonului, cu excepția câtorva substanțe simple (ex: CO₂, CO, carbonați, cianuri). Acest domeniu include atât moleculele naturale (glucide, lipide, proteine) cât și cele sintetice (medicamente, plastice, combustibili).
                  </p>
                  <p>
                  Carbonul este un element unic datorită capacității sale de a forma <strong>patru legături covalente</strong> stabile și de a crea <strong>lanțuri lungi și ramificate</strong> – proprietate numită catenare.
                  </p>
                  <H2 h2text="Izomeria în chimia organică" indexH2={indexH2("Izomeria în chimia organică")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Izomeria este fenomenul prin care două sau mai multe substanțe au aceeași formulă moleculară, dar structuri diferite.
                  </p>
                  <p>
                    <strong>Tipuri de izomerie:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Izomerie structurală</strong> (de catenă, de poziție, de funcțiune): compușii au legături sau grupări funcționale diferite.</li>
                    <li><strong>Stereoizomerie</strong>: compușii au aceeași formulă structurală, dar o dispunere spațială diferită (ex: izomeria geometrică la alchene).</li>
                  </ul>
                  <p>
                  Exemplu:
                  </p>
                  <p>
                  Butan (C₄H₁₀) are doi izomeri de catenă:
                  </p>
                  <ul className={ulClass}>
                    <li>n-butan (lanț liniar)</li>
                    <li>izobutan (lanț ramificat)</li>
                  </ul>
                  <H2 h2text="Clasificarea compușilor organici" indexH2={indexH2("Clasificarea compușilor organici")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Compușii organici se clasifică în funcție de <strong>grupările funcționale</strong> pe care le conțin. Exemple:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Hidrocarburi</strong>: conțin doar carbon și hidrogen (ex: alcani, alchene, alchine, hidrocarburi aromatice).</li>
                    <li><strong>Compuși oxigenați</strong>: conțin oxigen (ex: alcooli, acizi carboxilici, cetone, aldehide).</li>
                    <li><strong>Compuși azotați</strong>: conțin azot (ex: amine, nitroderivați).</li>
                    <li><strong>Compuși halogenați</strong>: conțin halogeni (F, Cl, Br, I).</li>
                  </ul>
                  <H2 h2text="Legături chimice în compușii organici" indexH2={indexH2("Legături chimice în compușii organici")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li><strong>Legătura covalentă simplă</strong> (σ): atomii își pun în comun câte un electron (ex: în alcani).</li>
                    <li><strong>Legătura dublă</strong>: una σ + una π (ex: în alchene).</li>
                    <li><strong>Legătura triplă</strong>: una σ + două π (ex: în alchine).</li>
                  </ul>
                  <p>
                  Toate legăturile din compușii organici sunt covalente, electronii fiind distribuiți între atomi fără transfer complet.
                  </p>
                  <H2 h2text="Formele de reprezentare ale compușilor organici" indexH2={indexH2("Formele de reprezentare ale compușilor organici")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Pentru a descrie compușii organici, se folosesc mai multe tipuri de formule:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Formulă moleculară</strong> – indică numărul total de atomi (ex: C₂H₆O).</li>
                    <li><strong>Formulă structurală</strong> – arată cum sunt legați atomii între ei.</li>
                    <li><strong>Formulă de linie (schematică)</strong> – folosită frecvent pentru molecule mari; liniile reprezintă legături C-C, iar atomii de C și H se omit dacă sunt implicați într-un tipar repetitiv.</li>
                  </ul>
                  <p>
                  Exemplu pentru etanol:
                  </p>
                  <ul className={ulClass}>
                    <li>Moleculară: C₂H₆O</li>
                    <li>Structurală: CH₃–CH₂–OH</li>
                    <li>Linie: /OH</li>
                  </ul>
                  <div
                    className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-45">Concept</th>
                            <th className="flex-55">Exemplu</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-45">Izomerie</td>
                                <td className="flex-55">butan și izobutan</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-45">Legătură simplă</td>
                                <td className="flex-55">CH₄ (metan)</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-45">Legătură dublă</td>
                                <td className="flex55">C₂H₄ (etena)</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-45">Legătură triplă</td>
                                <td className="flex-55">C₂H₂ (etina)</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-45">Grupare funcțională</td>
                                <td className="flex-55">-OH (alcooli), -COOH (acizi)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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