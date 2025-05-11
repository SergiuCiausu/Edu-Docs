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

const page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Grupuri"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Exemplul 1: (𝑍, +)", "Exemplul 2: (𝑅\{0}, ⋅)", "Exemplul 3: (𝑀𝑛(𝑅), +)"],
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
                  <H2 h2text="Definirea unui grup" indexH2={indexH2("Definirea unui grup")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Definiție:</strong>
                  </p>
                  <p>
                  Un <strong>grup</strong> este o mulțime 𝐺 împreună cu o lege de compoziție internă ∘, adică o aplicație:
                  </p>
                  <p>
                    ∘ : 𝐺×𝐺 → 𝐺, (𝑎, 𝑏) ↦ 𝑎∘𝑏
                  </p>
                  <p>
                  astfel încât sunt îndeplinite următoarele patru proprietăți:
                  </p>
                  <ol className={olClass}>
                    <li><strong>Parte stabilă</strong>: ∀𝑎, 𝑏 ∈ 𝐺, 𝑎∘𝑏 ∈ 𝐺</li>
                    <li><strong>Asociativitate</strong>: ∀𝑎, 𝑏, 𝑐 ∈ 𝐺, (𝑎∘𝑏)∘𝑐 = 𝑎∘(𝑏∘𝑐)</li>
                    <li><strong>Element neutru:</strong> Există un element 𝑒 ∈ 𝐺 astfel încât ∀𝑎 ∈ 𝐺, 𝑎∘𝑒 = 𝑒∘𝑎 = 𝑎</li>
                    <li><strong>Element inversabil:</strong> ∀𝑎 ∈ 𝐺, există un element 𝑎<sup>-1</sup> ∈ 𝐺 astfel încât 𝑎∘𝑎<sup>-1</sup> = 𝑎<sup>-1</sup>∘𝑎 = 𝑒</li>
                  </ol>
                  <p>
                  Dacă, în plus, operația este comutativă, adică 𝑎∘𝑏 = 𝑏∘𝑎, pentru toate 𝑎, 𝑏 ∈ 𝐺, atunci grupul se numește <strong>abelian</strong>.
                  </p>
                  <H2 h2text="Exemple de grupuri" indexH2={indexH2("Exemple de grupuri")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Exemplul 1: (𝑍, +)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Exemple de grupuri")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Exemple de grupuri")].findIndex(h3 => h3 === "Exemplul 1: (𝑍, +)") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Mulțimea numerelor întregi cu adunarea.</li>
                    <li>Satisfac toate cele 4 condiții → este un grup <strong>abelian</strong>.</li>
                    <li>Element neutru: 0</li>
                    <li>Inversa: −𝑎, pentru orice  𝑎 ∈ 𝑍</li>
                  </ul>
                  <H3 h3text="Exemplul 2: (𝑅\{0}, ⋅)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Exemple de grupuri")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Exemple de grupuri")].findIndex(h3 => h3 === "Exemplul 2: (𝑅\{0}, ⋅)") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Mulțimea numerelor reale nenule cu înmulțirea.</li>
                    <li>Grup abelian.</li>
                    <li>Element neutru: 1</li>
                    <li
                        className="flex items-center">
                        <span className="mr-2 text-l leading-none">•</span>
                        <div
                            className="inline-flex items-center gap-1">
                            <span>Inversa:  </span>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center leading-6">1</p>
                                <p className="fractie-jos text-center leading-5">𝑎</p>
                            </div>
                            <span>  , pentru orice 𝑎 ≠ 0</span>
                        </div>
                    </li>
                  </ul>
                  <H3 h3text="Exemplul 3: (𝑀𝑛(𝑅), +)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Exemple de grupuri")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Exemple de grupuri")].findIndex(h3 => h3 === "Exemplul 3: (𝑀𝑛(𝑅), +)") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Matricile reale 𝑛 × 𝑛 cu adunarea matriceală.</li>
                    <li>Grup abelian.</li>
                    <li>Element neutru: matricea zero.</li>
                    <li>Inversa: −𝐴, pentru orice matrice 𝐴</li>
                  </ul>
                  <H2 h2text="Proprietăți fundamentale ale grupurilor" indexH2={indexH2("Proprietăți fundamentale ale grupurilor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ol className={olClass}>
                    <li>
                        <strong>Elementul neutru este unic.</strong>
                        <p>
                            Dacă 𝑒 și 𝑒′ sunt ambele elemente neutre, atunci 𝑒 = 𝑒′.
                        </p>
                    </li>
                    <li>
                        <strong>Inversul fiecărui element este unic.</strong>
                        <p>
                            Dacă 𝑎∘𝑏 = 𝑎∘𝑐 = 𝑒, atunci 𝑏 = 𝑐.
                        </p>
                    </li>
                    <li>
                        <strong>Legea reducerii:</strong>
                        <p>
                            Dacă 𝑎∘𝑏 = 𝑎∘𝑐, atunci 𝑏 = 𝑐 (grupul permite reducerea din stânga).
                        </p>
                    </li>
                    <li>
                        <strong>Inversul inversului:</strong>
                        <p>
                            (𝑎<sup>-1</sup>)<sup><sup>-1</sup></sup> = 𝑎
                        </p>
                    </li>
                    <li>
                        <strong>Inversul unui produs:</strong>
                        <p>
                            (𝑎∘𝑏)<sup>-1</sup> = 𝑏<sup>-1</sup> ∘ 𝑎<sup>-1</sup>
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

export default page