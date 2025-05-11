"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-info-10";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';
import { titluriCapitole } from '@/app/data/capitole-fizica-mate-info-capitole-10';

const page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Complexitatea algoritmilor"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Timpul de execuție", "Exemplu: căutare liniară vs căutare binară"],
    ["Caz favorabil, mediu și defavorabil", "Complexitate spațială", "Compararea algoritmilor", "De ce este importantă analiza complexității?"],
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
              materie="informatică" 
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
                  <H2 h2text="Exprimarea complexității" indexH2={indexH2("Exprimarea complexității")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Complexitatea unui algoritm</strong> măsoară <strong>eficiența</strong> acestuia în funcție de <strong>resursele consumate</strong>, în special:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Timpul de execuție</strong> (complexitate temporală)</li>
                    <li><strong>Spațiul de memorie</strong> (complexitate spațială)</li>
                  </ul>
                  <H3 h3text="Timpul de execuție" indexH3={h3s[h2s.findIndex(h2 => h2 === "Exprimarea complexității")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Exprimarea complexității")].findIndex(h3 => h3 === "Timpul de execuție") : -1}></H3>
                  <p>
                  Se exprimă în funcție de <strong>numărul de pași/operații</strong> executate în funcție de <strong>dimensiunea datelor de intrare</strong> (n).
                  </p>
                  <p>
                  De obicei, se folosește <strong>notația O</strong> („big O”) pentru a exprima complexitatea <strong>în cel mai rău caz</strong>:
                  </p>
                  <div
                    className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-20">Notare</th>
                            <th className="flex-35">Denumire</th>
                            <th className="flex-45">Exemplu</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-20">O(1)</td>
                                <td className="flex-35">constantă</td>
                                <td className="flex-45">accesarea unui element într-un vector</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20">O(log n)</td>
                                <td className="flex-35">logaritmică</td>
                                <td className="flex-45">căutare binară</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20">O(n)</td>
                                <td className="flex-35">liniară</td>
                                <td className="flex-45">parcurgerea unui vector</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20">O(n log n)</td>
                                <td className="flex-35">log-lineară</td>
                                <td className="flex-45">sortare eficientă (MergeSort)</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20">O(n²)</td>
                                <td className="flex-35">pătratică</td>
                                <td className="flex-45">sortare prin selecție, inserție</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-20">O(2ⁿ)</td>
                                <td className="flex-35">exponențială</td>
                                <td className="flex-45">probleme de tip backtracking</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <H3 h3text="Exemplu: căutare liniară vs căutare binară" indexH3={h3s[h2s.findIndex(h2 => h2 === "Exprimarea complexității")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Exprimarea complexității")].findIndex(h3 => h3 === "Exemplu: căutare liniară vs căutare binară") : -1}></H3>
                <ul className={ulClass}>
                    <li>Căutare liniară în vector neordonat → O(n)</li>
                    <li>Căutare binară în vector ordonat → O(log n)</li>
                </ul>
                <H2 h2text="Ce trebuie să mai știm?" indexH2={indexH2("Ce trebuie să mai știm?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <H3 h3text="Caz favorabil, mediu și defavorabil" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ce trebuie să mai știm?")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ce trebuie să mai știm?")].findIndex(h3 => h3 === "Caz favorabil, mediu și defavorabil") : -1}></H3>
                <p>
                Uneori, un algoritm poate avea performanțe diferite în funcție de datele de intrare:
                </p>
                <ul className={ulClass}>
                    <li><strong>Caz favorabil (Best Case)</strong> – cel mai scurt timp posibil</li>
                    <li><strong>Caz mediu (Average Case)</strong> – timpul mediu</li>
                    <li><strong>Caz defavorabil (Worst Case)</strong> – cel mai lung timp</li>
                </ul>
                <p>
                    Exemplu: Căutare liniară
                </p>
                <ul className={ulClass}>
                    <li>Best case: elementul căutat este primul → O(1)</li>
                    <li>Worst case: elementul e ultimul sau nu există → O(n)</li>
                </ul>
                <H3 h3text="Complexitate spațială" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ce trebuie să mai știm?")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ce trebuie să mai știm?")].findIndex(h3 => h3 === "Complexitate spațială") : -1}></H3>
                <p>
                Reprezintă <strong>cantitatea de memorie suplimentară</strong> utilizată de algoritm.
                </p>
                <p>
                Exemplu:
                </p>
                <ul className={ulClass}>
                    <li>Un algoritm care folosește doar câteva variabile → O(1)</li>
                    <li>Un algoritm care creează o copie a unui vector → O(n)</li>
                </ul>
                <H3 h3text="Compararea algoritmilor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ce trebuie să mai știm?")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ce trebuie să mai știm?")].findIndex(h3 => h3 === "Compararea algoritmilor") : -1}></H3>
                <p>
                Două algoritmi pot face același lucru, dar cu eficiență diferită.
                </p>
                <div
                    className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-40">Algoritm</th>
                            <th className="flex-60">Complexitate timp</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-40">Bule (BubbleSort)</td>
                                <td className="flex-60">O(n²)</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-40">MergeSort</td>
                                <td className="flex-60">O(n log n)</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-40">QuickSort</td>
                                <td className="flex-60">O(n²) worst case, O(n log n) medie</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <H3 h3text="De ce este importantă analiza complexității?" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ce trebuie să mai știm?")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ce trebuie să mai știm?")].findIndex(h3 => h3 === "De ce este importantă analiza complexității?") : -1}></H3>
                <ul className={ulClass}>
                    <li>Ne ajută să <strong>alegem cel mai potrivit algoritm</strong> pentru un anumit volum de date.</li>
                    <li>Permite <strong>optimizarea programelor</strong>.</li>
                    <li>Este <strong>esențială în competiții, interviuri și industrie</strong>.</li>
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