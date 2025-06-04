"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-argumentarea-si-demonstrarea-unor-afirmatii-matematice-9";
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

  const h1 = "Demonstrații matematice"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    ["Demonstrația directă", "Demonstrația prin reducere la absurd", "Demonstrația prin contrapozitivă"],
    ["Ex. 1 – Divizibilitate", "Numere impare consecutive"],
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
                  <H2 h2text="Ce este o demonstrație matematică?" indexH2={indexH2("Ce este o demonstrație matematică?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O <strong>demonstrație matematică</strong> este un lanț de raționamente logice care arată că o afirmație este adevărată, plecând de la axiome, definiții și teoreme deja cunoscute.
                  </p>
                  <p>
                  Scopul unei demonstrații este <strong>certitudinea absolută</strong>, nu doar convingerea intuitivă.
                  </p>
                  <H2 h2text="Structura unei demonstrații" indexH2={indexH2("Structura unei demonstrații")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O demonstrație bine scrisă urmează o structură clară:
                  </p>
                  <ol className={olClass}>
                    <li><strong>Ipoteza</strong> – ceea ce se presupune adevărat (premisele).</li>
                    <li><strong>Teza</strong> – ceea ce trebuie demonstrat.</li>
                    <li><strong>Raționamentul</strong> – pașii logici și corelațiile între ipoteză și teza.</li>
                    <li><strong>Concluzia</strong> – încheierea demonstrației, arătând că teza este adevărată.</li>
                  </ol>
                  <H2 h2text="Tehnici de demonstrare" indexH2={indexH2("Tehnici de demonstrare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Demonstrația directă" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tehnici de demonstrare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tehnici de demonstrare")].findIndex(h3 => h3 === "Demonstrația directă") : -1}></H3>
                  <p>
                  Este metoda cea mai simplă. Se pornește de la ipoteză și, prin pași logici, se ajunge la teză.
                  </p>
                  <p>
                  Exemplu:
                  </p>
                  <p>
                  Demonstrează că dacă un număr par este înmulțit cu 2, rezultatul este divizibil cu 4.
                  </p>
                  <ul className={ulClass}>
                    <li>Ipoteză: 𝑛 = 2𝑘, cu 𝑘 ∈ 𝑍</li>
                    <li>Atunci: 2𝑛 = 4𝑘, deci divizibil cu 4</li>
                  </ul>
                  <p>
                  Teza este demonstrată direct.
                  </p>
                  <H3 h3text="Demonstrația prin reducere la absurd" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tehnici de demonstrare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tehnici de demonstrare")].findIndex(h3 => h3 === "Demonstrația prin reducere la absurd") : -1}></H3>
                  <p>
                  Presupunem că teza este falsă și arătăm că se ajunge la o contradicție logică.
                  </p>
                  <p>
                  Exemplu:
                  </p>
                  <p>
                  Demonstrează că <span>√2</span> nu este rațional.
                  </p>
                  <ul className={ulClass}>
                    <li
                      className="flex items-center">
                      <span className="mr-2 text-l leading-none">•</span>
                      <div
                        className="inline-flex items-center gap-1 pt-2">
                            Presupunem că este rațional: <span>√2</span> =  
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center">𝑎</p>
                            <p className="fractie-jos text-center">𝑏</p>
                        </div>
                          , 𝑎, 𝑏 ∈ 𝑍, fără factori comuni.
                    </div>
                    </li>
                    <li
                        className="flex items-center">
                        <span className="mr-2 text-l leading-none">•</span>
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                                Ridicăm la pătrat: 2 =  
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">𝑎<sup>2</sup></p>
                                <p className="fractie-jos text-center">𝑏<sup>2</sup></p>
                            </div>
                              ⇒ 𝑎<sup>2</sup> = 2𝑏<sup>2</sup>
                        </div>
                    </li>
                    <li>
                        Deci 𝑎<sup>2</sup> e par ⇒ 𝑎 = 2𝑘
                    </li>
                    <li>
                        Înlocuim: (2𝑘)<sup>2</sup> = 4𝑘<sup>2</sup> = 2𝑏<sup>2</sup> ⇒ 𝑏<sup>2</sup> = 2𝑘<sup>2</sup>
                    </li>
                    <li>
                    Contradicție: 𝑎 și 𝑏au factor comun 2.
                    </li>
                  </ul>
                  <p>
                    Deci <span>√2</span> NU este rațional.
                  </p>
                  <H3 h3text="Demonstrația prin contrapozitivă" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tehnici de demonstrare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tehnici de demonstrare")].findIndex(h3 => h3 === "Demonstrația prin contrapozitivă") : -1}></H3>
                  <p>
                  Se demonstrează implicația 𝑝 ⇒ 𝑞 arătând că ¬𝑞 ⇒ ¬𝑝 este adevărată.
                  </p>
                  <p>
                  Exemplu:
                  </p>
                  <p>
                  Demonstrează: „Dacă 𝑛<sup>2</sup> este impar, atunci și 𝑛 este impar.”
                  </p>
                  <ul className={ulClass}>
                    <li>Contrapozitivă: „Dacă 𝑛 este par, atunci 𝑛<sup>2</sup> este par.”</li>
                    <li>𝑛 = 2𝑘 ⇒ 4𝑘<sup>2</sup> ⇒ par</li>
                  </ul>
                  <p>
                  Contrapozitiva e adevărată ⇒ și implicația inițială e adevărată.
                  </p>
                  <H2 h2text="Exemple de demonstrații clasice" indexH2={indexH2("Exemple de demonstrații clasice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Ex. 1 – Divizibilitate" indexH3={h3s[h2s.findIndex(h2 => h2 === "Exemple de demonstrații clasice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Exemple de demonstrații clasice")].findIndex(h3 => h3 === "Ex. 1 – Divizibilitate") : -1}></H3>
                  <p>
                  Teoremă: Dacă un număr este divizibil cu 6, atunci este divizibil cu 2 și cu 3.
                  </p>
                  <ul className={ulClass}>
                    <li>Ipoteză: 𝑛 = 6𝑘</li>
                    <li>Atunci: 𝑛 = 2 ⋅ 3 ⋅ 𝑘</li>
                  </ul>
                  <H3 h3text="Ex. 2 – Numere impare consecutive" indexH3={h3s[h2s.findIndex(h2 => h2 === "Exemple de demonstrații clasice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Exemple de demonstrații clasice")].findIndex(h3 => h3 === "Ex. 2 – Numere impare consecutive") : -1}></H3>
                  <p>
                  Demonstrează că suma a două numere impare consecutive este divizibilă cu 4.
                  </p>
                  <ul className={ulClass}>
                    <li>𝑛 = 2𝑘 + 1, n + 2 = 𝑛 = 2𝑘 + 3</li>
                    <li>Suma: (2𝑘 + 1) + (2𝑘 + 3) = 4𝑘 + 4 = 4(𝑘 + 1)</li>
                  </ul>
                  <p>
                  Divizibil cu 4
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