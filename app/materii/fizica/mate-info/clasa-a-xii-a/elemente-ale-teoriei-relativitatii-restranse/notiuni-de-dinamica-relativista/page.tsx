"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-elemente-ale-teoriei-relativitatii-restranse-12";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';
import Link from 'next/link';

const Page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Noțiuni de dinamică relativistă"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
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
              profil="mate info" 
              materie="fizică" 
              clasa={12} 
              capitol="elemente ale teoriei relativității restrânse"
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
                  <H2 h2text="Masa relativistă" indexH2={indexH2("Masa relativistă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>În teoria relativității restrânse, masa unui corp depinde de viteza sa în raport cu observatorul.</p>
                  <p>
                  Masa relativistă 𝑚 este dată de:
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong>𝑚 <i>=</i> 𝛾<span>𝑚<sub><i>0</i></sub></span></strong>
                  </p>
                  <ul className={ulClass}>
                    <li><span>𝑚<sub><i>0</i></sub></span> este <strong>masa de repaus</strong> a corpului (masa sa măsurată în propriul sistem de referință),</li>
                    <li
                        className="flex items-center">
                        <span className="mr-2 text-l leading-none">•</span>
                        𝛾 <i>=  </i>
                        <div
                            className="inline-flex items-center gap-1 pt-7 px-2">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">1</p>
                                <p className="fractie-jos text-center inline-flex items-center"><span className="text-3xl font-extralight">√</span><span className="text-3xl font-light">{`(`}</span>1 -  
                                    <div
                                        className="inline-flex items-center gap-1 pl-1">
                                        <div
                                            className={fractie}> 
                                            <p className="fractie-sus text-center">𝑣<sup><i>2</i></sup></p>
                                            <p className="fractie-jos text-center">𝑐<sup><i>2</i></sup></p>
                                        </div>
                                    </div>
                                    <span className="text-3xl font-light pl-1">{` )`}</span>
                                </p>
                            </div>
                        </div>  
                        este factorul Lorentz;
                    </li>
                    <li>𝑣 este viteza corpului;</li>
                    <li>
                        𝑐 <i>= 3 ⋅ 10<sup>8</sup> m/s</i> = viteza luminii în vid.
                    </li>
                    <p>
                    Pe măsură ce viteza unui obiect se apropie de 𝑐, masa sa relativistă crește, ceea ce face imposibilă accelerarea la viteza luminii.
                    </p>
                  </ul>
                  <H2 h2text="Impulsul relativist" indexH2={indexH2("Impulsul relativist")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Impulsul unui corp în mișcare relativistă nu mai este 𝑝 = 𝑚<sub>0</sub>𝑣, ci:
                  </p>
                  <p>
                  Impuls relativist:
                  </p>
                  <p
                    className="inline-flex items-end gap-1 w-full justify-center">
                        <Vector simbol="𝑝" />
                        <strong> <i>=</i> 𝛾<span>𝑚<sub><i>0</i></sub></span></strong>
                        <Vector simbol="𝑣" />
                  </p>
                  <p>
                  Această definiție asigură conservarea impulsului în toate sistemele de referință, indiferent de viteze.
                  </p>
                  <H2 h2text="Energia relativistă" indexH2={indexH2("Energia relativistă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  În relativitate, energia totală 𝐸 a unui corp este legată de masa sa prin celebra relație:
                  </p>
                  <p>
                  Energia totală:
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong>𝐸 <i>=</i> 𝛾𝑚<sub><i>0</i></sub>𝑐<sup><i>2</i></sup></strong>
                  </p>
                  <p>
                  Particularități:
                  </p>
                  <ul className={ulClass}>
                    <li>
                        <strong>Energia de repaus</strong> 𝐸<sub><i>0</i></sub> (pentru un corp în repaus) este:
                        <p
                            className="inline-flex items-center gap-1 w-full justify-center">
                            <span>𝐸<sub><i>0</i></sub></span> = <span>𝑚<sub><i>0</i></sub></span>𝑐<sup><i>2</i></sup>
                        </p>
                    </li>
                    <li>
                        <strong>Energia cinetică relativistă</strong> 𝐸<sub>𝑐</sub> este:
                        <p
                            className="inline-flex items-center gap-1 w-full justify-center">
                                𝐸<sub>𝑐</sub> = 𝐸 - <span>𝐸<sub><i>0</i></sub></span> = (𝛾 - 1)<span>𝑚<sub><i>0</i></sub></span>𝑐<sup><i>2</i></sup>
                        </p>
                    </li>
                  </ul>
                  <p>
                    <div
                        className="inline-flex items-center gap-1">
                        <strong>Observație:</strong> la viteze mici (𝑣 ≪ 𝑐), formula energiei cinetice relativiste se reduce la cea clasică: 𝐸<sub><i>𝑐</i></sub> ≈
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center">1</p>
                            <p className="fractie-jos text-center">2</p>
                        </div>
                        <span>𝑚<sub><i>0</i></sub></span>𝑣<sup>2</sup>
                    </div>
                  </p>
                  <H2 h2text="Relația fundamentală între energie, impuls și masă" indexH2={indexH2("Relația fundamentală între energie, impuls și masă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Toate aceste concepte sunt unite într-o formulă esențială a fizicii moderne:
                  </p>
                  <p>
                  Relația energie–impuls:
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong>𝐸<sup><i>2</i></sup> = (𝑝𝑐)<sup><i>2</i></sup> + (<span>𝑚<sub><i>0</i></sub></span>𝑐<sup><i>2</i></sup>)<sup><i>2</i></sup></strong>
                  </p>
                  <p>
                  Această relație permite calculul energiei chiar și pentru particule fără masă de repaus, cum este fotonul.
                  </p>
                  <div
                    className="pt-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-40">Concept</th>
                            <th className="flex-60">Formula</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-40">Masa relativistă</td>
                                <td className="flex-60">𝑚 <i>=</i> 𝛾<span>𝑚<sub><i>0</i></sub></span></td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-40">Impuls relativist</td>
                                <td className="flex-60">𝑝 <i>=</i> 𝛾<span>𝑚<sub><i>0</i></sub></span> 𝑣</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-40">Energia totală relativistă</td>
                                <td className="flex-60">𝐸 <i>=</i> 𝛾<span>𝑚<sub><i>0</i></sub></span> 𝑐<sup><i>2</i></sup></td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-40">Relația energie-impuls</td>
                                <td className="flex-60">𝐸<sup><i>2</i></sup> = (𝑝𝑐)<sup><i>2</i></sup> + (<span>𝑚<sub><i>0</i></sub></span>𝑐<sup><i>2</i></sup>)<sup><i>2</i></sup></td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
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