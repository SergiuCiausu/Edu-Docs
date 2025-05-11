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

  const h1 = "Algebră"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Definiție", "Operații", "Teorema fundamentală a algebrei"],
    ["Definiție", "Operații"],
    ["Tipuri de inegalități", "Metode de rezolvare"],
    ["Definiție", "Tipuri", "Metode de rezolvare"]
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
                  <H2 h2text="Polinoame" indexH2={indexH2("Polinoame")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Definiție" indexH3={h3s[h2s.findIndex(h2 => h2 === "Polinoame")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Polinoame")].findIndex(h3 => h3 === "Definiție") : -1}></H3>
                  <p>
                  Un <strong>polinom</strong> este o expresie algebrică de forma:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        𝑃(𝑥) = 𝑎<sub>𝑛</sub>𝑥<sup>𝑛</sup> + 𝑎<sub>𝑛-1</sub>𝑥<sup>𝑛-1</sup> + ... + 𝑎<sub>1</sub>𝑥 + 𝑎<sub>0</sub>
                  </p>
                  <p>
                    unde coeficienții 𝑎<sub>i</sub> ∈ 𝑅, iar 𝑛 ∈ 𝑁 este gradul polinomului.
                  </p>
                  <H3 h3text="Operații" indexH3={h3s[h2s.findIndex(h2 => h2 === "Polinoame")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Polinoame")].findIndex(h3 => h3 === "Operații") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Adunare/scădere</strong>: se adună termenii de același grad.</li>
                    <li><strong>Înmulțire</strong>: fiecare termen dintr-un polinom se înmulțește cu fiecare termen din celălalt.</li>
                    <li><strong>Împărțire polinomială</strong>: algoritm asemănător cu împărțirea numerelor naturale.</li>
                    <li><strong>Factorizare</strong>: prin scoaterea factorului comun, grupare, formule de calcul prescurtat, teorema rădăcinilor raționale.</li>
                  </ul>
                  <H3 h3text="Teorema fundamentală a algebrei" indexH3={h3s[h2s.findIndex(h2 => h2 === "Polinoame")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Polinoame")].findIndex(h3 => h3 === "Teorema fundamentală a algebrei") : -1}></H3>
                  <p>
                  Orice polinom de grad 𝑛 ≥ 1, cu coeficienți complecși, are exact 𝑛 rădăcini (nu neapărat distincte) în 𝐶.
                  </p>
                  <H2 h2text="Fracții algebrice" indexH2={indexH2("Fracții algebrice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Definiție" indexH3={h3s[h2s.findIndex(h2 => h2 === "Fracții algebrice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Fracții algebrice")].findIndex(h3 => h3 === "Definiție") : -1}></H3>
                  <p>
                  O <strong>fracție algebrică</strong> este o expresie de forma:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>𝑃(𝑥)</strong></p>
                                <p className="fractie-jos text-center"><strong>𝑄(𝑥)</strong></p>
                            </div>
                        </div>
                  </p>
                  <p>
                    unde 𝑃(𝑥) și 𝑄(𝑥) sunt polinoame, iar 𝑄(𝑥) ≠ =
                  </p>
                  <H3 h3text="Operații" indexH3={h3s[h2s.findIndex(h2 => h2 === "Fracții algebrice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Fracții algebrice")].findIndex(h3 => h3 === "Operații") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Simplificare</strong>: se elimină factorii comuni din numărător și numitor.</li>
                    <li><strong>Adunare/scădere</strong>: se aduc la același numitor.</li>
                    <li><strong>Înmulțire</strong>: se înmulțesc numărătorii și numitorii între ei.</li>
                    <li><strong>Împărțire</strong>: se înmulțește prima fracție cu inversa celei de-a doua.</li>
                  </ul>
                  <p>
                  ATENȚIE: Domeniul de definiție exclude valorile pentru care numitorul devine 0.
                  </p>
                  <H2 h2text="Inegalități" indexH2={indexH2("Inegalități")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Tipuri de inegalități" indexH3={h3s[h2s.findIndex(h2 => h2 === "Inegalități")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Inegalități")].findIndex(h3 => h3 === "Tipuri de inegalități") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Liniare:</strong> 𝑎𝑥 + 𝑏 {`<`} 0</li>
                    <li><strong>De gradul II:</strong> 𝑎𝑥<sup>2</sup> + 𝑏𝑥 + 𝑐 ≥ 0</li>
                    <li><strong>Cu module:</strong> |𝑥 - 𝑎| {`<`} 𝑏</li>
                    <li><strong>Fracții algebrice</strong>: presupun studiul semnului expresiilor.</li>
                  </ul>
                  <H3 h3text="Metode de rezolvare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Inegalități")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Inegalități")].findIndex(h3 => h3 === "Metode de rezolvare") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Reprezentare pe axa reală;</strong></li>
                    <li><strong>Metoda semnelor</strong> (studiu de semn);</li>
                    <li><strong>Descompunere în factori;</strong></li>
                    <li><strong>Metoda grafică</strong> (pentru vizualizare).</li>
                  </ul>
                  <H2 h2text="Sisteme de ecuații" indexH2={indexH2("Sisteme de ecuații")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Definiție" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sisteme de ecuații")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sisteme de ecuații")].findIndex(h3 => h3 === "Definiție") : -1}></H3>
                  <p>
                  Un sistem de ecuații este un ansamblu de două sau mai multe ecuații care trebuie satisfăcute simultan.
                  </p>
                  <H3 h3text="Tipuri" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sisteme de ecuații")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sisteme de ecuații")].findIndex(h3 => h3 === "Tipuri") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Sisteme liniare</strong> (cu 2 sau 3 necunoscute);</li>
                    <li><strong>Sisteme neliniare</strong> (conțin cel puțin o ecuație neliniară).</li>
                  </ul>
                  <H3 h3text="Metode de rezolvare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sisteme de ecuații")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sisteme de ecuații")].findIndex(h3 => h3 === "Metode de rezolvare") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Substituția</strong>: se exprimă o necunoscută și se înlocuiește în cealaltă ecuație;</li>
                    <li><strong>Reducerea</strong>: se adună/scad ecuațiile pentru a elimina o necunoscută;</li>
                    <li><strong>Grafică</strong>: se trasează graficele și se caută punctul de intersecție;</li>
                    <li><strong>Determinantul (Regula lui Cramer)</strong>: aplicabil la sisteme liniare cu număr egal de ecuații și necunoscute.</li>
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