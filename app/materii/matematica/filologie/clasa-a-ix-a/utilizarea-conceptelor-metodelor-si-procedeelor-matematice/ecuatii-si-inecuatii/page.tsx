"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-utilizarea-conceptelor-metodelor-si-procedeelor-matematice-9";
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

  const h1 = "Ecuații și inecuații"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    ["Soluție prin formula generală (abc)"],
    [""],
    [""],
    [""],
    ["Metoda substituției", "Metoda reducerii", "Metoda grafică"],
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
              profil="filologie" 
              materie="matematică" 
              clasa={9} 
              capitol="utilizarea conceptelor, metodelor și procedeelor matematice"
              subCapitol="ecuații și inecuații"
              isSubCapitolContent={true}
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
                  <H2 h2text="Noțiuni introductive" indexH2={indexH2("Noțiuni introductive")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O <strong>ecuație</strong> este o egalitate matematică ce conține una sau mai multe necunoscute.
                  </p>
                  <p>
                  Scopul este <strong>să determinăm valorile necunoscutei (necunoscutelor)</strong> pentru care egalitatea este adevărată.
                  </p>
                  <p>
                  O <strong>inecuație</strong> exprimă o <strong>relație de ordine</strong> (ex. {`<, ≤, >, ≥`}) între expresii algebrice.
                  </p>
                  <p>
                  Scopul este să determinăm toate valorile necunoscutei care satisfac inegalitatea.
                  </p>
                  <H2 h2text="Ecuații de gradul I" indexH2={indexH2("Ecuații de gradul I")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O <strong>ecuație de gradul I cu o necunoscută</strong> are forma:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <strong>𝑎𝑥 + 𝑏 = 0, 𝑎≠0</strong>
                  </p>
                  <p>
                    Soluția:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            𝑥 =  - 
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">𝑏</p>
                                <p className="fractie-jos text-center">𝑎</p>
                            </div>
                        </div>
                  </p>
                  <p>
                    Exemplu:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            3𝑥 - 6 = 0 ⇒ 𝑥 =  
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">6</p>
                                <p className="fractie-jos text-center">3</p>
                            </div>
                              = 2
                        </div>
                  </p>
                  <H2 h2text="Ecuații de gradul II" indexH2={indexH2("Ecuații de gradul II")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Ecuația de forma:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <strong>𝑎𝑥<sup>2</sup> + 𝑏𝑥 + 𝑐 = 0, 𝑎≠0</strong>
                  </p>
                  <p>
                  este o ecuație de <strong>gradul al II-lea</strong>.
                  </p>
                  <H3 h3text="Soluție prin formula generală (abc)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ecuații de gradul II")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ecuații de gradul II")].findIndex(h3 => h3 === "Soluție prin formula generală (abc)") : -1}></H3>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <strong>Δ = 𝑏<sup>2</sup> − 4𝑎𝑐</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Dacă Δ {`>`} 0: două soluții reale distincte</li>
                    <li>Dacă Δ = 0: o soluție reală dublă</li>
                    <li>Dacă Δ {`<`} 0: nu are soluții reale</li>
                  </ul>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            <strong>𝑥<sub>1,2</sub> =  </strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>-𝑏 ± <span>√Δ</span></strong></p>
                                <p className="fractie-jos text-center"><strong>2𝑎</strong></p>
                            </div>
                        </div>
                  </p>
                  <p>
                  Exemplu:
                  </p>
                  <p>
                    𝑥<sup>2</sup> - 5𝑥 + 6 = 0 ⇒ Δ = 25 - 24 = 1 ⇒ 𝑥<sub>1</sub> = 3, 𝑥<sub>2</sub> = 2
                  </p>
                  <H2 h2text="Inecuații de gradul I" indexH2={indexH2("Inecuații de gradul I")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O <strong>inecuație de gradul I</strong> are forma:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <strong>𝑎𝑥 + 𝑏 {`<`} 0, sau {`≤, >, ≥`}</strong>
                  </p>
                  <p>
                  Se rezolvă exact ca o ecuație, dar:
                  </p>
                  <p>
                  <strong>Dacă înmulțim sau împărțim cu un număr negativ, se inversează sensul inegalității.</strong>
                  </p>
                  <p>
                  Exemplu:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                    -2𝑥 + 4 ≥ 0 ⇒ -2𝑥 ≥ -4 ⇒ 𝑥 ≤ 2
                  </p>
                  <H2 h2text="Inecuații de gradul II" indexH2={indexH2("Inecuații de gradul II")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Pentru inecuații de tipul:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                    <strong>𝑎𝑥<sup>2</sup> + 𝑏𝑥 + 𝑐 {`<`} 0, sau {`≤, >, ≥`}</strong>
                  </p>
                  <ol className={olClass}>
                    <li>Rezolvăm ecuația asociată: 𝑎𝑥<sup>2</sup> + 𝑏𝑥 + 𝑐 = 0</li>
                    <li>
                        Folosim <strong>semnul trinomului de gradul II</strong>:
                        <ul className={ulClass}>
                            <li>𝑎 {`>`} 0 ⇒ deschide în sus (U)</li>
                            <li>𝑎 {`<`} 0 ⇒ deschide în jos (∩)</li>
                        </ul>
                    </li>
                  </ol>
                  <p>
                    Exemplu:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        𝑥<sup>2</sup> - 5𝑥 + 6 {`>`} 0 ⇒ 𝑥 = 2, 𝑥 = 3 ⇒ 𝑥 ∈ (−∞,2) ∪ (3,∞)
                  </p>
                  <H2 h2text="Sisteme de ecuații liniare" indexH2={indexH2("Sisteme de ecuații liniare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Sistemul este un grup de ecuații care se rezolvă <strong>simultan</strong>.
                  </p>
                  <p>
                    Exemplu:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="flex items-center">
                            <div>
                                <span className="text-7xl font-thin">{`{`}</span>
                            </div>
                            <div
                                className="flex flex-col gap-1">
                                <div><strong><span>2𝑥 + 𝑦 = 5</span></strong></div>
                                <div><strong><span>𝑥 - 𝑦 = 1</span></strong></div>
                            </div>
                        </div>
                  </p>
                  <H2 h2text="Metode de rezolvare" indexH2={indexH2("Metode de rezolvare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Metoda substituției" indexH3={h3s[h2s.findIndex(h2 => h2 === "Metode de rezolvare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Metode de rezolvare")].findIndex(h3 => h3 === "Metoda substituției") : -1}></H3>
                  <ol className={olClass}>
                    <li>Se izolează una dintre necunoscute dintr-o ecuație.</li>
                    <li>Se înlocuiește în cealaltă.</li>
                  </ol>
                  <p>
                    𝑥 = 𝑦 + 1 ⇒ se înlocuiește în prima ecuație
                  </p>
                  <H3 h3text="Metoda reducerii" indexH3={h3s[h2s.findIndex(h2 => h2 === "Metode de rezolvare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Metode de rezolvare")].findIndex(h3 => h3 === "Metoda reducerii") : -1}></H3>
                  <p>
                  Se adună sau se scade ecuațiile pentru a elimina o necunoscută.
                  </p>
                  <p>
                    Exemplu:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="flex items-center">
                            <div>
                                <span className="text-7xl font-thin">{`{`}</span>
                            </div>
                            <div
                                className="flex flex-col gap-1">
                                <div><strong><span>𝑥 + 𝑦 = 5</span></strong></div>
                                <div><strong><span>𝑥 - 𝑦 = 3</span></strong></div>
                            </div>
                            <div>
                                <span>  ⇒ adunăm: 2𝑥 = 8 ⇒ 𝑥 = 4</span>
                            </div>
                        </div>
                  </p>
                  <H3 h3text="Metoda grafică" indexH3={h3s[h2s.findIndex(h2 => h2 === "Metode de rezolvare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Metode de rezolvare")].findIndex(h3 => h3 === "Metoda grafică") : -1}></H3>
                  <p>
                  Se desenează graficul fiecărei ecuații.
                  </p>
                  <p>
                  Punctul de <strong>intersecție</strong> este soluția sistemului.
                  </p>
                  <H2 h2text="Exerciții rezolvate" indexH2={indexH2("Exerciții rezolvate")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Ex. 1:</strong>
                  </p>
                  <p>
                    Rezolvă: 3𝑥 - 2 = 7 ⇒ 𝑥 = 3
                  </p>
                  <p>
                    <strong>Ex. 2:</strong>
                  </p>
                  <p>
                    Rezolvă: 𝑥<sup>2</sup> - 4𝑥 - 5 = 0 ⇒ 𝑥<sub>1</sub> = 5, 𝑥<sub>2</sub> = -1
                  </p>
                  <p>
                    <strong>Ex. 3:</strong>
                  </p>
                  <p>
                    Rezolvă: 𝑥<sup>2</sup> - 1 ≤ 0 ⇒ 𝑥 ∈ [-1, 1]
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