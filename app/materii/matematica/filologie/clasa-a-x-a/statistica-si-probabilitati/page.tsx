"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-10";
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

  const h1 = "Statistica și probabilități"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Tabele", "Diagrame", "Histograme"],
    ["Experimente aleatorii", "Spațiul probabilistic", "Probabilitatea unui eveniment"],
    ["Ecuația cercului", "Poziții relative între o dreaptă și un cerc"],
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
                  <H2 h2text="Reprezentarea datelor" indexH2={indexH2("Reprezentarea datelor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Tabele:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reprezentarea datelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reprezentarea datelor")].findIndex(h3 => h3 === "Tabele") : -1}></H3>
                  <p>
                  Organizează datele în formă clară, sub formă de frecvențe absolute sau relative.
                  </p>
                  <div className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-50">Valoare</th>
                            <th className="flex-50">Frecvență</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-50">10</td>
                                <td className="flex-50">2</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">20</td>
                                <td className="flex-50">5</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">30</td>
                                <td className="flex-50">3</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                  <H3 h3text="Diagrame:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reprezentarea datelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reprezentarea datelor")].findIndex(h3 => h3 === "Diagrame") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Diagrame cu bare (pentru frecvențe)</li>
                    <li>Diagrame circulare (pentru proporții)</li>
                  </ul>
                  <H3 h3text="Histograme:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reprezentarea datelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reprezentarea datelor")].findIndex(h3 => h3 === "Histograme") : -1}></H3>
                  <p>
                  Folosite pentru a reprezenta distribuții pe intervale (grupări de date). Axe: <strong>valori pe orizontală</strong>, <strong>frecvențe</strong> pe verticală.
                  </p>
                  <H2 h2text="Probabilități – noțiuni fundamentale" indexH2={indexH2("Probabilități – noțiuni fundamentale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Experimente aleatorii:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Probabilități – noțiuni fundamentale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Probabilități – noțiuni fundamentale")].findIndex(h3 => h3 === "Experimente aleatorii") : -1}></H3>
                  <p>
                  Un experiment este aleatoriu dacă rezultatul nu poate fi prezis cu certitudine.
                  </p>
                  <p>
                  Ex: aruncarea unui zar sau a unei monede.
                  </p>
                  <H3 h3text="Spațiul probabilistic:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Probabilități – noțiuni fundamentale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Probabilități – noțiuni fundamentale")].findIndex(h3 => h3 === "Spațiul probabilistic") : -1}></H3>
                  <p>
                  Mulțimea tuturor rezultatelor posibile.
                  </p>
                  <p>
                  Ex: pentru un zar – 𝑆 = {`{1,2,3,4,5,6}`}
                  </p>
                  <H3 h3text="Probabilitatea unui eveniment:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Probabilități – noțiuni fundamentale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Probabilități – noțiuni fundamentale")].findIndex(h3 => h3 === "Probabilitatea unui eveniment") : -1}></H3>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            <strong>𝑃(𝐴) =  </strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>numărul de cazuri favorabile</strong></p>
                                <p className="fractie-jos text-center"><strong>numărul total de cazuri posibile</strong></p>
                            </div>
                        </div>
                  </p>
                  <ul className={ulClass}>
                    <li>0 ≤ 𝑃(𝐴) ≤ 1</li>
                    <li>Probabilitatea complementului: 𝑃(<span className="mediu">𝐴</span>) = 1 - 𝑃(𝐴)</li>
                    <li>Evenimente incompatibile: 𝑃(𝐴∪𝐵) = 𝑃(𝐴) + 𝑃(𝐵)</li>
                    <li>Evenimente independente: 𝑃(𝐴∩𝐵) = 𝑃(𝐴) ⋅ 𝑃(𝐵)</li>
                  </ul>
                  <H2 h2text="Aplicații în viața reală" indexH2={indexH2("Aplicații în viața reală")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li><strong>Sondaje de opinie</strong>: interpretarea mediei, modului și dispersiei pentru a înțelege tendințele.</li>
                    <li><strong>Jocuri de noroc</strong>: estimarea șanselor reale vs percepute.</li>
                    <li><strong>Asigurări</strong>: calcularea riscurilor pe baza distribuției evenimentelor.</li>
                    <li><strong>Date demografice</strong>: reprezentare vizuală a populației pe grupe de vârstă sau sex.</li>
                    <li><strong>Analiza performanței elevilor</strong>: utilizarea indicatorilor statistici pentru a identifica nivelul clasei.</li>
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