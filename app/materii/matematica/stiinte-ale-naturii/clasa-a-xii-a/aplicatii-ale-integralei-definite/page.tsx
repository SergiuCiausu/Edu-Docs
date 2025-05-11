"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-12";
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

  const h1 = "Aplicații ale integralei definite"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Teorie", "Exemplu"],
    ["Teorie", "Exemplu"],
    ["Teorie", "Exemplu"],
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
                  <H2 h2text="Calculul ariei unei suprafețe plane" indexH2={indexH2("Calculul ariei unei suprafețe plane")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Teorie:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Calculul ariei unei suprafețe plane")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Calculul ariei unei suprafețe plane")].findIndex(h3 => h3 === "Teorie") : -1}></H3>
                  <p>
                  Fie o funcție continuă 𝑓 :[𝑎, 𝑏] → 𝑅, pozitivă pe intervalul [𝑎, 𝑏]. Aria regiunii plane cuprinse între graficul funcției, axa Ox și liniile verticale 𝑥 = 𝑎 și 𝑥 = 𝑏 este dată de:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula font-bold">
                        <span>𝐴 = </span>
                        <div
                            className="inline-flex h-full gap-1">
                            <div className="h-full text-5xl font-extralight pt-1">∫</div>
                            <div>
                                <div>𝑏</div>
                                <div>𝑎</div>
                            </div>
                        </div>
                        <span> 𝑓(𝑥)𝑑𝑥</span>
                  </p>
                  <p>
                  Dacă funcția este negativă, atunci aria este dată de valoarea absolută a integralei:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula font-bold">
                    <span>𝐴 = </span><span className="text-5xl font-thin pt-2">|</span>
                    <div
                        className="inline-flex h-full gap-1">
                        <div className="h-full text-5xl font-extralight pt-1">∫</div>
                        <div>
                            <div>𝑏</div>
                            <div>𝑎</div>
                        </div>
                    </div>
                    <span> 𝑓(𝑥)𝑑𝑥</span><span className="text-5xl font-thin pt-2">|</span>
                  </p>
                  <H3 h3text="Exemplu:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Calculul ariei unei suprafețe plane")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Calculul ariei unei suprafețe plane")].findIndex(h3 => h3 === "Exemplu") : -1}></H3>
                  <p>
                  Să se calculeze aria dintre graficul funcției 𝑓(𝑥) = 𝑥<sup>2</sup> și axa Ox, pentru 𝑥 ∈ [0, 2]:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <span>𝐴 = </span>
                        <div
                            className="inline-flex h-full gap-1">
                            <div className="h-full text-5xl font-extralight pt-1">∫</div>
                            <div>
                                <div className="mb-4">2</div>
                                <div>0</div>
                            </div>
                        </div>
                        <span> 𝑥<sup>2</sup>𝑑𝑥 = </span>
                        <div
                            className="inline-flex items-center gap-1">
                            <span className="text-5xl font-extralight">{`[`}</span>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">𝑥<sup>3</sup></p>
                                <p className="fractie-jos text-center">3</p>
                            </div>
                            <div
                                className="inline-flex h-full">
                                <div className="h-full text-5xl font-extralight pt-2">{`]`}</div>
                                <div className="h-full inline-flex flex-col justify-between">
                                    <div className="mb-4">2</div>
                                    <div>0</div>
                                </div>
                            </div>
                        </div>
                        <span>= </span>
                        <div
                            className="inline-flex items-center gap-1">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">8</p>
                                <p className="fractie-jos text-center">3</p>
                            </div>
                        </div>
                  </p>
                  <H2 h2text="Determinarea volumului unui corp de rotație" indexH2={indexH2("Determinarea volumului unui corp de rotație")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Teorie" indexH3={h3s[h2s.findIndex(h2 => h2 === "Determinarea volumului unui corp de rotație")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Determinarea volumului unui corp de rotație")].findIndex(h3 => h3 === "Teorie") : -1}></H3>
                  <p>
                  Fie 𝑓 : [𝑎, 𝑏] → 𝑅<sub>+</sub> o funcție continuă. Volumul solidului obținut prin rotirea graficului funcției în jurul axei Ox este:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula font-bold">
                        𝑉 = 𝜋
                        <div
                            className="inline-flex h-full gap-1">
                            <div className="h-full text-5xl font-extralight pt-1">∫</div>
                            <div>
                                <div>𝑏</div>
                                <div>𝑎</div>
                            </div>
                        </div>
                        <span> [𝑓(𝑥)]<sup>2</sup>𝑑𝑥</span>
                  </p>
                  <H3 h3text="Exemplu" indexH3={h3s[h2s.findIndex(h2 => h2 === "Determinarea volumului unui corp de rotație")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Determinarea volumului unui corp de rotație")].findIndex(h3 => h3 === "Exemplu") : -1}></H3>
                  <p>
                  Să se determine volumul generat prin rotirea graficului funcției 𝑓(𝑥) = √𝑥 pe intervalul [0, 1] în jurul axei Ox.
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <span>𝑉 = 𝜋</span>
                        <div
                            className="inline-flex h-full gap-1">
                            <div className="h-full text-5xl font-extralight pt-1">∫</div>
                            <div>
                                <div className="mb-4">1</div>
                                <div>0</div>
                            </div>
                        </div>
                        <span> 𝑥𝑑𝑥 = 𝜋 </span>
                        <div
                            className="inline-flex items-center gap-1">
                            <span className="text-5xl font-extralight">{`[`}</span>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">𝑥<sup>2</sup></p>
                                <p className="fractie-jos text-center">2</p>
                            </div>
                            <div
                                className="inline-flex h-full">
                                <div className="h-full text-5xl font-extralight pt-2">{`]`}</div>
                                <div className="h-full inline-flex flex-col justify-between">
                                    <div className="mb-4">1</div>
                                    <div>0</div>
                                </div>
                            </div>
                        </div>
                        <span>= </span>
                        <div
                            className="inline-flex items-center gap-1">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">𝜋</p>
                                <p className="fractie-jos text-center">2</p>
                            </div>
                        </div>
                  </p>
                  <H2 h2text="Calculul unor limite de șiruri folosind integrala definită" indexH2={indexH2("Calculul unor limite de șiruri folosind integrala definită")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Teorie" indexH3={h3s[h2s.findIndex(h2 => h2 === "Calculul unor limite de șiruri folosind integrala definită")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Calculul unor limite de șiruri folosind integrala definită")].findIndex(h3 => h3 === "Teorie") : -1}></H3>
                  <p>
                  Anumite șiruri definite prin sume pot fi estimate sau demonstrate ca având limite, folosind integrala unei funcții. Metoda tipică implică trecerea la o integrală Riemann:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula font-bold">
                        <div
                            className="inline-flex flex-col justify-center">
                            <span>lim</span>
                            <span className="text-xs leading-0.5">𝑛→∞</span>        
                        </div>
                        <div
                            className="inline-flex flex-col items-center">
                            <div className="leading-3 text-base"><strong>𝑛</strong></div>
                            <div><strong><span className="text-6xl font-extralight">∑</span></strong></div>
                            <div className="text-base"><strong>𝑘 = 1</strong></div>
                        </div>
                        <div
                            className="inline-flex items-center gap-1">
                            <div><strong><span className="text-8xl font-extralight">​</span></strong></div>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center text-xs">
                                    <div
                                        className="inline-flex items-center gap-1 pb-2">
                                        <span>𝑓</span>
                                        <span className="text-3xl font-light">{`(`}</span>
                                        <div
                                            className={fractie}>
                                            <p className="fractie-sus text-center leading-5">𝑘</p>
                                            <p className="fractie-jos text-center leading-3">𝑛</p>
                                        </div>
                                        <span className="text-3xl font-light">{`)`}</span>
                                    </div>
                                </p>
                                <p className="fractie-jos text-center">𝑛</p>
                            </div>
                        </div>
                        <span> = </span>
                        <div
                            className="inline-flex h-full gap-1">
                            <div className="h-full text-5xl font-extralight pt-1">∫</div>
                            <div>
                                <div className="text-base mb-5">1</div>
                                <div className="text-base">0</div>
                            </div>
                        </div>
                        <span> 𝑓(𝑥)𝑑𝑥</span>
                  </p>
                  <p>
                  Aceasta este o legătură între sumă și integrala definită (o aplicație a metodei trapezelor sau a sumei Riemann).
                  </p>
                  <H3 h3text="Exemplu" indexH3={h3s[h2s.findIndex(h2 => h2 === "Calculul unor limite de șiruri folosind integrala definită")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Calculul unor limite de șiruri folosind integrala definită")].findIndex(h3 => h3 === "Exemplu") : -1}></H3>
                  <p>
                  Să se calculeze limita:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex flex-col justify-center">
                            <span>lim</span>
                            <span className="text-xs leading-0.5">𝑛→∞</span>        
                        </div>
                        <div
                            className="inline-flex flex-col items-center">
                            <div className="leading-3 text-base">𝑛</div>
                            <div><span className="text-6xl font-extralight">∑</span></div>
                            <div className="text-base">𝑘 = 1</div>
                        </div>
                        <div
                            className="inline-flex items-center gap-1">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center text-xs leading-5">1</p>
                                <p className="fractie-jos text-center leading-4">𝑛</p>
                            </div>
                            <span className="text-5xl font-extralight">{`(`}</span>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center text-xs leading-5">𝑘</p>
                                <p className="fractie-jos text-center leading-4">𝑛</p>
                            </div>
                            <span className="text-5xl font-extralight">{`)`}</span>
                        </div>
                        <sup className="pb-4">2</sup>
                  </p>
                  <p>
                  Observăm că este o sumă Riemann pentru funcția 𝑓(𝑥) = 𝑥<sup>2</sup> pe intervalul [0, 1]:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex flex-col justify-center">
                            <span>lim</span>
                            <span className="text-xs leading-0.5">𝑛→∞</span>        
                        </div>
                        <div
                            className="inline-flex flex-col items-center">
                            <div className="leading-3 text-base">𝑛</div>
                            <div><span className="text-6xl font-extralight">∑</span></div>
                            <div className="text-base">𝑘 = 1</div>
                        </div>
                        <div
                            className="inline-flex items-center gap-1">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center leading-5">1</p>
                                <p className="fractie-jos text-center leading-4">𝑛</p>
                            </div>
                            <span className="text-5xl font-extralight">{`(`}</span>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center leading-5">𝑘</p>
                                <p className="fractie-jos text-center leading-4">𝑛</p>
                            </div>
                            <span className="text-5xl font-extralight">{`)`}</span>
                        </div>
                        <sup className="pb-4">2</sup>
                        <span> = </span>
                        <div
                            className="inline-flex h-full gap-1">
                            <div className="h-full text-5xl font-extralight pt-1">∫</div>
                            <div>
                                <div className="mb-4">1</div>
                                <div>0</div>
                            </div>
                        </div>
                        <span> 𝑥<sup>2</sup>𝑑𝑥 = </span>
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center leading-5">1</p>
                                <p className="fractie-jos text-center leading-6">3</p>
                            </div>
                        </div>
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