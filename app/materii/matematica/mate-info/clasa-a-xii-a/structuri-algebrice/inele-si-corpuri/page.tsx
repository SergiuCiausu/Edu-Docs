"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-structuri-algebrice-12";
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

  const h1 = "Inele și corpuri"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    ["Exemplu 1: (𝑍, +, ⋅)", "Exemplu 2: (𝑄, +, ⋅)", "Exemplu 3: (𝑅, +, ⋅), (𝐶, +, ⋅)"],
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
              capitol="structuri algebrice" 
              clasa={12} 
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
                  <H2 h2text="Definirea unui inel" indexH2={indexH2("Definirea unui inel")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Definiție:</strong>
                  </p>
                  <p>
                    Un <strong>inel</strong> este o mulțime nevidă 𝑅, împreună cu două operații binare:
                  </p>
                  <ul className={ulClass}>
                    <li>adunarea: + : 𝑅×𝑅 → 𝑅</li>
                    <li>înmulțirea: ⋅ : 𝑅×𝑅 → 𝑅</li>
                  </ul>
                  <p>
                  astfel încât:
                  </p>
                  <ol className={olClass}>
                    <li>(𝑅, +) este un <strong>grup abelian</strong> (comutativ) cu element neutru 0;</li>
                    <li>
                        Înmulțirea este <strong>asociativă</strong>: 𝑎 ⋅ (𝑏 ⋅ 𝑐) = (𝑎 ⋅ 𝑏) ⋅ 𝑐;
                    </li>
                    <li>
                        Înmulțirea este <strong>distributivă</strong> față de adunare:
                    </li>
                    <p
                        className="inline-flex items-center justify-center gap-1 w-full formula">
                          <strong>𝑎 ⋅ (𝑏 + 𝑐) = 𝑎 ⋅ 𝑏 + 𝑎 ⋅ 𝑐</strong>
                    </p>
                  </ol>
                  <p>
                  Dacă în plus:
                  </p>
                  <ul className={ulClass}>
                    <li>∃ 1<sub>𝑅</sub> ∈ 𝑅 astfel încât 1<sub>𝑅</sub> ⋅ 𝑎 = 𝑎 ⋅ 1<sub>𝑅</sub> = 𝑎, pentru orice 𝑎 ∈ 𝑅 , spunem că inelul are <strong>element neutru pentru înmulțire</strong>;</li>
                    <li>Dacă înmulțirea este <strong>comutativă</strong>, inelul se numește inel comutativ.</li>
                  </ul>
                  <H2 h2text="Definirea unui corp" indexH2={indexH2("Definirea unui corp")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Definiție:</strong>
                  </p>
                  <p>
                  Un corp este un inel (𝐾, +, ⋅) comutativ cu 1 (neutru pentru înmulțire), în care fiecare element nenul are un invers multiplicativ.
                  </p>
                  <p>
                  Adică:
                  </p>
                  <ul className={ulClass}>
                    <li>(𝐾, +) este grup abelian</li>
                    <li>(𝐾\{0}, ⋅) este grup abelian;</li>
                    <li>Înmulțirea este distributivă față de adunare.</li>
                  </ul>
                  <H2 h2text="Exemple" indexH2={indexH2("Exemple")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Exemplu 1: (𝑍, +, ⋅)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Exemple")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Exemple")].findIndex(h3 => h3 === "Exemplu 1: (𝑍, +, ⋅)") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Inel comutativ cu 1;</li>
                    <li>Nu este corp, deoarece numai ±1 au invers multiplicativ în 𝑍.</li>
                  </ul>
                  <H3 h3text="Exemplu 2: (𝑄, +, ⋅)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Exemple")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Exemple")].findIndex(h3 => h3 === "Exemplu 2: (𝑄, +, ⋅)") : -1}></H3>
                  <p>
                    <div
                        className="inline-flex items-center gap-1">
                        <span>Este <strong>corp</strong>: orice fracție nenulă are inversul său {`(`}ex.:  </span>
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center leading-6">2</p>
                            <p className="fractie-jos text-center leading-5">3</p>
                        </div>
                        <span> → </span>
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center leading-6">3</p>
                            <p className="fractie-jos text-center leading-5">2</p>
                        </div>
                        <span>{`)`}</span>
                    </div>
                  </p>
                  <H3 h3text="Exemplu 3: (𝑅, +, ⋅), (𝐶, +, ⋅)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Exemple")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Exemple")].findIndex(h3 => h3 === "Exemplu 3: (𝑅, +, ⋅), (𝐶, +, ⋅)") : -1}></H3>
                  <p>
                  Ambele sunt <strong>corpuri</strong>.
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