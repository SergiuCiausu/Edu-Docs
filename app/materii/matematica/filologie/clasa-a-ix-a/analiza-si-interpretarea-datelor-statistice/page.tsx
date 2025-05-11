"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-analiza-si-interpretarea-datelor-statistice-9";
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

  const h1 = "Analiza și interpretarea datelor statistice"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Tabele de frecvență", "Diagrame"],
    ["Media aritmetică", "Modul (moda)", "Mediana", "Dispersia (variabilitatea)"],
    ["Exemplul 1 – Note la un test", "Exemplul 2 – Vânzări zilnice"],
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
              profil="filologie" 
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
                  <strong>Statistica descriptivă</strong> se ocupă cu colectarea, organizarea, prezentarea și interpretarea datelor. Ea ne ajută să înțelegem fenomene reale prin numere și grafice. Este utilizată în economie, sănătate, sport, educație, sondaje etc.
                  </p>
                  <H2 h2text="Reprezentarea datelor" indexH2={indexH2("Reprezentarea datelor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Datele colectate sunt grupate și afișate pentru a evidenția modele sau tendințe.
                  </p>
                  <H3 h3text="Tabele de frecvență" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reprezentarea datelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reprezentarea datelor")].findIndex(h3 => h3 === "Tabele de frecvență") : -1}></H3>
                  <p>
                  Organizează datele într-o formă clară:
                  </p>
                  <div
                    className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-50">Valoare</th>
                            <th className="flex-50">Frecvență</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-50">5</td>
                                <td className="flex-50">3</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">6</td>
                                <td className="flex-50">5</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">7</td>
                                <td className="flex-50">2</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                  <ul className={ulClass}>
                    <li><strong>Frecvența</strong> = de câte ori apare o valoare</li>
                    <li><strong>Frecvența relativă</strong> = frecvență / total observații</li>
                  </ul>
                  <H3 h3text="Diagrame" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reprezentarea datelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reprezentarea datelor")].findIndex(h3 => h3 === "Diagrame") : -1}></H3>
                  <p>
                  Ajută la vizualizarea rapidă a datelor:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Diagrama cu bare</strong> – pentru valori discrete</li>
                    <li><strong>Diagrama circulară (pie chart)</strong> – pentru procente</li>
                    <li><strong>Histograma</strong> – pentru intervale de date</li>
                    <li><strong>Diagrama liniară</strong> – pentru evoluție în timp</li>
                  </ul>
                  <H2 h2text="Indicatori statistici" indexH2={indexH2("Indicatori statistici")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Aceștia descriu o mulțime de date printr-o singură valoare:
                  </p>
                  <H3 h3text="Media aritmetică" indexH3={h3s[h2s.findIndex(h2 => h2 === "Indicatori statistici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Indicatori statistici")].findIndex(h3 => h3 === "Media aritmetică") : -1}></H3>
                  <p>
                  Reprezintă valoarea medie:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                                <span className="mediu">𝑥</span> =  
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">𝑥<sub>1</sub> + 𝑥<sub>2</sub> + ... + 𝑥<sub>𝑛</sub></p>
                                <p className="fractie-jos text-center">𝑛</p>
                            </div>
                        </div>
                  </p>
                  <H3 h3text="Modul (moda)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Indicatori statistici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Indicatori statistici")].findIndex(h3 => h3 === "Modul (moda)") : -1}></H3>
                  <p>
                  Valoarea care apare cel mai frecvent într-un set de date.
                  </p>
                  <p>
                  Ex: în mulțimea {`{2, 4, 4, 5, 7}`}, moda este 4.
                  </p>
                  <H3 h3text="Mediana" indexH3={h3s[h2s.findIndex(h2 => h2 === "Indicatori statistici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Indicatori statistici")].findIndex(h3 => h3 === "Mediana") : -1}></H3>
                  <p>
                  Valoarea din mijloc după ordonarea datelor.
                  </p>
                  <ul className={ulClass}>
                    <li>Dacă numărul de elemente este impar, este exact valoarea de mijloc.</li>
                    <li>Dacă este par, este media celor două valori centrale.</li>
                  </ul>
                  <H3 h3text="Dispersia (variabilitatea)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Indicatori statistici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Indicatori statistici")].findIndex(h3 => h3 === "Dispersia (variabilitatea)") : -1}></H3>
                  <p>
                  Indică cât de răspândite sunt valorile față de medie.
                  </p>
                  <p>
                    <strong>Abaterea medie absolută:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <div
                            className="inline-flex items-center gap-1">
                                <strong>𝐴<i>M</i>𝐴 = </strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center pb-1"><strong>1</strong></p>
                                <p className="fractie-jos text-center"><strong>𝑛</strong></p>
                            </div>
                             
                            <div
                                className="inline-flex flex-col items-center">
                                <div><strong>𝑛</strong></div>
                                <div><strong><span className="text-6xl font-extralight">∑</span></strong></div>
                                <div><strong>𝑖 = 1</strong></div>
                            </div>
                            <div
                                className="pt-1">
                                <strong> ∣ 𝑥<sub>𝑖</sub> - <span className="mediu">𝑥</span> ∣</strong>
                            </div>
                        </div>
                  </p>
                  <p>
                    <strong>Dispersia (varianța):</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <div
                            className="inline-flex items-center gap-1">
                               <strong>𝜎<sup><i>2</i></sup> = </strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center pb-1"><strong>1</strong></p>
                                <p className="fractie-jos text-center"><strong>𝑛</strong></p>
                            </div>
                             
                            <div
                                className="inline-flex flex-col items-center">
                                <div><strong>𝑛</strong></div>
                                <div><strong><span className="text-6xl font-extralight">∑</span></strong></div>
                                <div><strong>𝑖 = 1</strong></div>
                            </div>
                            <div
                                className="pt-1">
                            <strong>  (𝑥<sub>𝑖</sub> - <span className="mediu">𝑥</span>)<sup>2</sup></strong>
                            </div>
                        </div>
                  </p>
                  <p>
                    <strong>Abaterea standard (deviația standard):</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <strong>𝜎 = <span>√𝜎<sup>2</sup></span></strong>
                  </p>
                  <H2 h2text="Interpretarea datelor în contexte reale" indexH2={indexH2("Interpretarea datelor în contexte reale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Statistica devine utilă când este aplicată în situații reale:
                  </p>
                  <H3 h3text="Exemplul 1 – Note la un test" indexH3={h3s[h2s.findIndex(h2 => h2 === "Interpretarea datelor în contexte reale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Interpretarea datelor în contexte reale")].findIndex(h3 => h3 === "Exemplul 1 – Note la un test") : -1}></H3>
                  <p>
                  Notele elevilor: {`{6, 7, 7, 8, 9, 6, 10, 7}`}
                  </p>
                  <ul className={ulClass}>
                    <li>
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                               Media = 
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center pb-1">6+7+7+8+9+6+10+7</p>
                                <p className="fractie-jos text-center">8</p>
                            </div>
                              = 7.5
                        </div>
                    </li>
                    <li>Moda = 7</li>
                    <li> 
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                               Mediana =
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center pb-1">7+7</p>
                                <p className="fractie-jos text-center">2</p>
                            </div>
                              = 7
                        </div>
                    </li>
                  </ul>
                  <p>
                  Interpretare: Majoritatea elevilor au luat 7; media arată un nivel general bun.
                  </p>
                  <H3 h3text="Exemplul 2 – Vânzări zilnice" indexH3={h3s[h2s.findIndex(h2 => h2 === "Interpretarea datelor în contexte reale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Interpretarea datelor în contexte reale")].findIndex(h3 => h3 === "Exemplul 2 – Vânzări zilnice") : -1}></H3>
                  <p>
                  Vânzări pe 7 zile (lei): {`{400, 550, 450, 500, 600, 550, 650}`}
                  </p>
                  <ul className={ulClass}>
                    <li>Media: 528,57 lei</li>
                    <li>Mediana: 550 lei</li>
                    <li>Dispersia: mică → datele sunt apropiate între ele</li>
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