"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-numere-reale-9";
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

  const h1 = "Operații cu numere reale"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Puteri cu exponent natural", "Puteri cu exponent 0"],
    ["Definiție", "Proprietăți", "Exemple"],
    ["Exemple", "Exerciții propuse"],
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
              clasa={9} 
              capitol="utilizarea conceptelor, metodelor și procedeelor matematice"
              subCapitol="numere reale"
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
                  <H2 h2text="Ridicarea la putere a numerelor reale" indexH2={indexH2("Ridicarea la putere a numerelor reale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Puteri cu exponent natural" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ridicarea la putere a numerelor reale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ridicarea la putere a numerelor reale")].findIndex(h3 => h3 === "Puteri cu exponent natural") : -1}></H3>
                  <ul className={ulClass}>
                    <li>
                        Pentru orice număr real 𝑎 și orice 𝑛 ∈ ℕ:
                    <p
                        className="inline-flex items-center justify-center gap-1 w-full formula">
                            <strong>𝑎<sup>𝑛</sup> = 𝑎 ⋅ 𝑎 ⋅ ... ⋅ 𝑎 (𝑛 factori)</strong>
                    </p>
                    </li>
                    <li>
                        Exemple:
                        <ul className={ulClass}>
                            <li>3<sup>4</sup> = 3 ⋅ 3 ⋅ 3 ⋅ 3 = 81</li>
                            <li>(-2)<sup>3</sup> = (-2) ⋅ (-2) ⋅ (-2) = -8</li>
                        </ul>
                    </li>
                  </ul>
                  <H3 h3text="Puteri cu exponent 0" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ridicarea la putere a numerelor reale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ridicarea la putere a numerelor reale")].findIndex(h3 => h3 === "Puteri cu exponent 0") : -1}></H3>
                  <p>
                  Pentru orice 𝑎≠0:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <strong>𝑎<sup>0</sup> = 1</strong>
                  </p>
                  <H2 h2text="Rădăcini pătrate și operații cu ele" indexH2={indexH2("Rădăcini pătrate și operații cu ele")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Definiție" indexH3={h3s[h2s.findIndex(h2 => h2 === "Rădăcini pătrate și operații cu ele")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Rădăcini pătrate și operații cu ele")].findIndex(h3 => h3 === "Definiție") : -1}></H3>
                  <p>
                  Rădăcina pătrată a unui număr real pozitiv 𝑎 este acel număr 𝑥≥0 astfel încât:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <strong>𝑥<sup>2</sup> = 𝑎</strong>
                  </p>
                  <p>
                  Se notează: <strong><span>√</span>𝑎</strong>
                  </p>
                  <H3 h3text="Proprietăți" indexH3={h3s[h2s.findIndex(h2 => h2 === "Rădăcini pătrate și operații cu ele")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Rădăcini pătrate și operații cu ele")].findIndex(h3 => h3 === "Proprietăți") : -1}></H3>
                  <ol className={olClass}>
                    <li><strong><span>√</span>(𝑎 ⋅ 𝑏) = <span>√</span>𝑎 ⋅ <span>√</span>𝑏, a,b ≥ 0</strong></li>
                    <li
                        className="flex items-center">
                        <span className="mr-2 text-l leading-none">2.</span>
                        <strong><span className="text-5xl font-extralight">√</span></strong>
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center"><strong>𝑎</strong></p>
                            <p className="fractie-jos text-center"><strong>𝑏</strong></p>
                        </div>
                        <strong>  =  </strong>
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center"><strong><span>√</span>𝑎</strong></p>
                            <p className="fractie-jos text-center"><strong><span>√</span>𝑏</strong></p>
                        </div>
                        <strong>, 𝑎 ≥ 0, 𝑏 {`>`} 0</strong>
                    </li>
                  </ol>
                  <H3 h3text="Exemple" indexH3={h3s[h2s.findIndex(h2 => h2 === "Rădăcini pătrate și operații cu ele")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Rădăcini pătrate și operații cu ele")].findIndex(h3 => h3 === "Exemple") : -1}></H3>
                  <ul className={ulClass}>
                    <li><span>√</span>9 = 3</li>
                    <li><span>√</span>25 = 5</li>
                    <li><span>√</span>(4 ⋅ 9) = <span>√</span>36 = 6</li>
                    <li
                        className="flex items-center">
                        <span className="mr-2 text-l leading-none">•</span>
                        <span className="text-5xl font-extralight">√</span>
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center">16</p>
                            <p className="fractie-jos text-center">25</p>
                        </div>
                          =  
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center">4</p>
                            <p className="fractie-jos text-center">5</p>
                        </div>
                    </li>
                  </ul>
                  <H2 h2text="Exemple și exerciții" indexH2={indexH2("Exemple și exerciții")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Exemple:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Exemple și exerciții")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Exemple și exerciții")].findIndex(h3 => h3 === "Exemple") : -1}></H3>
                  <ol className={olClass}>
                    <li>
                        Calculează:
                        <ul className={ulClass}>
                            <li>(-7) + 4</li>
                            <li>(-5) ⋅ (-6)</li>
                            <li
                                className="flex items-center">
                                <span className="mr-2 text-l leading-none">•</span>
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center">-8</p>
                                    <p className="fractie-jos text-center">2</p>
                                </div>
                            </li>
                            <li>
                                <span>√</span>49
                            </li>
                        </ul>
                    </li>
                    <li>
                        Verifică distributivitatea:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                            2 ⋅ (3 + 5) = 2 ⋅ 3 + 2 ⋅ 5
                        </p>
                    </li>
                  </ol>
                  <H3 h3text="Exerciții propuse:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Exemple și exerciții")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Exemple și exerciții")].findIndex(h3 => h3 === "Exerciții propuse") : -1}></H3>
                  <ol className={olClass}>
                    <li>
                        Efectuați și ordonați rezultatele:
                        <ul className={ulClass}>
                            <li>2 + (-5)</li>
                            <li>3 ⋅ (-4)</li>
                            <li
                                className="flex items-center">
                                <span className="mr-2 text-l leading-none">•</span>
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center">-12</p>
                                    <p className="fractie-jos text-center">-3</p>
                                </div>
                            </li>
                            <li>
                            <span>√</span>81
                            </li>
                        </ul>
                    </li>
                    <li>
                    Demonstrați proprietățile comutativității pentru adunare și înmulțire prin exemple numerice.
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