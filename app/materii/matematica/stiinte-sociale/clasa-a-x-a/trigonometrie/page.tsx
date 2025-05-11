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

  const h1 = "Trigonometrie"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
    ["Exemplu 1", "Exemplu 2", "Exemplu 3"],
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
                  <H2 h2text="Ce sunt funcțiile trigonometrice?" indexH2={indexH2("Ce sunt funcțiile trigonometrice?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Funcțiile trigonometrice sunt definite pe cercul trigonometric și descriu raporturi între laturile unui triunghi dreptunghic. Ele se extind și pentru unghiuri generale (pozitive și negative), definite în radiani sau grade.
                  </p>
                  <p>
                  Definiții:
                  </p>
                  <p>
                  Fie un punct 𝑀 pe cercul trigonometric asociat unui unghi 𝑥, măsurat de la punctul 𝐴 (1,0).
                  </p>
                  <p>
                  Atunci:
                  </p>
                  <ul className={ulClass}>
                    <li>sin 𝑥 = ordinata punctului 𝑀</li>
                    <li>cos 𝑥 = abscisa punctului 𝑀</li>
                    <li
                        className="flex items-center">
                            <span className="mr-2 text-l leading-none">•</span>
                            <div
                                className="inline-flex items-center gap-1 pt-2">
                                tg 𝑥 =  
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center">sin 𝑥</p>
                                    <p className="fractie-jos text-center">cos 𝑥</p>
                                </div>
                                  (cos 𝑥 ≠ 0)
                            </div>
                    </li>
                    <li
                        className="flex items-center">
                        <span className="mr-2 text-l leading-none">•</span>
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            ctg 𝑥 =  
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">cos 𝑥</p>
                                <p className="fractie-jos text-center">sin 𝑥</p>
                            </div>
                              (sin 𝑥 ≠ 0)
                        </div>
                    </li>
                  </ul>
                  <H2 h2text="Graficele funcțiilor trigonometrice" indexH2={indexH2("Graficele funcțiilor trigonometrice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <div className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-10">Funcție</th>
                            <th className="flex-30">Domeniu</th>
                            <th className="flex-15">Codomeniu</th>
                            <th className="flex-15">Perioadă</th>
                            <th className="flex-30">Grafic - caracteristici</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-10">sin 𝑥</td>
                                <td className="flex-30">𝑅</td>
                                <td className="flex-15">[-1,1]</td>
                                <td className="flex-15">2𝜋</td>
                                <td className="flex-30">ondulator, trece prin origine</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-10">cos 𝑥</td>
                                <td className="flex-30">𝑅</td>
                                <td className="flex-15">[-1,1]</td>
                                <td className="flex-15">2𝜋</td>
                                <td className="flex-30">asemănător cu sin 𝑥, dar deplasat</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-10">tg 𝑥</td>
                                <td className="flex-30">  
                                    <div
                                        className="inline-flex items-center gap-1">
                                        𝑅 \ {`{`} 
                                        <div
                                            className={`${fractie} relative`}>
                                            <p className="fractie-sus text-center pt-2"><span className="text-xs">𝜋</span></p>
                                            <p className="fractie-jos text-center"><span className="text-xs">2</span></p>
                                        </div>
                                          + 𝑘𝜋{`}`}
                                    </div>
                                </td>
                                <td className="flex-15">𝑅</td>
                                <td className="flex-15">𝜋</td>
                                <td className="flex-30">are asimptote verticale</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-10">ctg 𝑥</td>
                                <td className="flex-30">𝑅 \ {`{𝑘𝜋}`}</td>
                                <td className="flex-15">𝑅</td>
                                <td className="flex-15">𝜋</td>
                                <td className="flex-30">similar cu tg 𝑥, dar inversat</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <H2 h2text="Identități trigonometrice fundamentale" indexH2={indexH2("Identități trigonometrice fundamentale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                    <ol className={olClass}>
                        <li>
                            <strong>Identitatea fundamentală:</strong>
                            <p
                                className="inline-flex items-center justify-center gap-1 w-full formula">
                                    <strong>sin<sup>2</sup> 𝑥 + cos<sup>2</sup> 𝑥 = 1</strong>
                            </p>
                        </li>
                        <li>
                            <strong>Tangenta și cotangenta:</strong>
                            <p
                                className="inline-flex items-center justify-center gap-1 w-full formula">
                                    <div
                                        className="inline-flex items-center gap-1 pt-2">
                                        tg 𝑥 =  
                                        <div
                                            className={fractie}>
                                            <p className="fractie-sus text-center">sin 𝑥</p>
                                            <p className="fractie-jos text-center">cos 𝑥</p>
                                        </div>
                                          , ctg 𝑥 =  
                                        <div
                                            className={fractie}>
                                            <p className="fractie-sus text-center">cos 𝑥</p>
                                            <p className="fractie-jos text-center">sin 𝑥</p>
                                        </div>
                                    </div>
                            </p>
                        </li>
                        <li>
                            <strong>Relații în funcție de unghiuri complementare și opuse:</strong>
                            <p
                                className="inline-flex items-center justify-center gap-1 w-full formula">
                                    sin (-𝑥) = -sin (𝑥), cos (-𝑥) = cos 𝑥
                            </p>
                            <p
                                className="inline-flex items-center justify-center gap-1 w-full formula">
                                sin (𝜋 - 𝑥) = sin 𝑥, cos (𝜋 - 𝑥)  = - cos 𝑥
                            </p>
                        </li>
                        <li>
                            <strong>Formule de dublu unghi:</strong>
                            <p
                                className="inline-flex items-center justify-center gap-1 w-full formula">
                                    sin (2𝑥) = 2 sin𝑥 cos 𝑥, cos (2𝑥) = cos<sup>2</sup> 𝑥 - sin<sup>2</sup> 𝑥
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