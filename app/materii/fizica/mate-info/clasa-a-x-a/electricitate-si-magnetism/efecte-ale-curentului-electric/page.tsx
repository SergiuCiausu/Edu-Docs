"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-electricitate-si-magnetism-10";
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

  const h1 = "Efecte ale curentului electric"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    ["Legea forței Lorentz (pentru un conductor)"],
    ["În serie", "În paralel"],
    ["Forța asupra unei sarcini în mișcare", "Interacțiunea dintre două fire paralele cu curent"],
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
              clasa={10} 
              capitol="electricitate și magnetism"
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
                  <H2 h2text="Efectul termic (Efectul Joule)" indexH2={indexH2("Efectul termic (Efectul Joule)")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Curentul care trece printr-un conductor determină încălzirea acestuia, fenomen cunoscut ca <strong>efect Joule</strong>.
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong><i>𝑄 = 𝑅 ⋅ 𝐼<sub>2</sub> ⋅ 𝑡</i></strong>
                  </p>
                  <ul className={ulClass}>
                    <li>𝑄 = cantitatea de căldură disipată (jouli, J)</li>
                    <li>𝑅 = rezistența conductorului (Ω)</li>
                    <li>𝐼 = intensitatea curentului (A)</li>
                    <li>𝑡 = timpul (s)</li>
                  </ul>
                  <p>
                  Aplicații: plite electrice, fier de călcat, becuri incandescente.
                  </p>
                  <H2 h2text="Efectul magnetic" indexH2={indexH2("Efectul magnetic")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Orice curent electric produce <strong>un câmp magnetic</strong> în jurul său. Acest efect a fost descoperit de <strong>Hans Christian Ørsted</strong> în 1820.
                  </p>
                  <ul className={ulClass}>
                    <li>Un conductor rectiliniu produce un câmp magnetic circular în jurul său.</li>
                    <li>Într-o <strong>bobină (solenoid)</strong>, liniile de câmp sunt asemănătoare cu cele ale unui magnet (dipol magnetic).</li>
                  </ul>
                  <p>
                  Aplicații: electromagneți, motoare electrice, relee.
                  </p>
                  <H2 h2text="Efectul mecanic (Forța electromagnetică)" indexH2={indexH2("Efectul mecanic (Forța electromagnetică)")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un conductor prin care trece curent și se află într-un câmp magnetic suferă o <strong>forță mecanică</strong>. Acesta este principiul de funcționare al <strong>motoarelor electrice</strong>.
                  </p>
                  <H3 h3text="Legea forței Lorentz (pentru un conductor):" indexH3={h3s[h2s.findIndex(h2 => h2 === "Efectul mecanic (Forța electromagnetică)")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Efectul mecanic (Forța electromagnetică)")].findIndex(h3 => h3 === "Legea forței Lorentz (pentru un conductor)") : -1}></H3>
                  <p
                    className="inline-flex items-end gap-1 w-full justify-center">
                        <Vector simbol="𝐹" />
                        <strong><i> = 𝐼 ⋅ </i></strong>
                        <Vector simbol="𝑙" />
                        <strong><i>x</i></strong>
                        <Vector simbol="𝐵" />
                  </p>
                  <ul className={ulClass}>
                    <li
                        className="flex items-center">
                        <span className="mr-2 pt-2 text-l leading-none">•</span>
                        <div
                            className="inline-flex gap-1">
                            <div
                                className="inline-flex items-end gap-2">
                                <Vector simbol="𝐹" />
                                = forța magnetică (N)
                            </div>
                        </div>
                    </li>
                    <li>𝐼 = intensitatea curentului (A)</li>
                    <li
                        className="flex items-center">
                        <span className="mr-2 pt-2 text-l leading-none">•</span>
                        <div
                            className="inline-flex gap-1">
                            <div
                                className="inline-flex items-end gap-2">
                                <Vector simbol="𝑙" />
                                = vectorul lungimii conductorului
                            </div>
                        </div>
                    </li>
                    <li
                        className="flex items-center">
                        <span className="mr-2 pt-2 text-l leading-none">•</span>
                        <div
                            className="inline-flex gap-1">
                            <div
                                className="inline-flex items-end gap-2">
                                <Vector simbol="𝐵" />
                                = inducția magnetică (T)
                            </div>
                        </div>
                    </li>
                  </ul>
                  <p>
                  <strong>Sensul forței</strong> se determină folosind <strong>regula mâinii stângi</strong> (pentru forțe magnetice asupra curentului).
                  </p>
                  <H2 h2text="Câmpul magnetic al curentului electric" indexH2={indexH2("Câmpul magnetic al curentului electric")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un conductor în care circulă curent produce un câmp magnetic. Proprietățile acestui câmp depind de forma conductorului:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Fir lung, rectiliniu</strong>: câmpul are linii circulare în jurul firului.</li>
                    <li><strong>Bobină</strong>: câmpul este asemănător celui al unui magnet, cu pol nord și sud.</li>
                  </ul>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                    <div
                        className="inline-flex items-center gap-1">
                            <strong><i>𝐵 = 𝜇 ⋅ </i></strong>
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center"><strong><i>𝐼</i></strong></p>
                            <p className="fractie-jos text-center"><strong><i>2𝜋𝑟</i></strong></p>
                        </div>
                    </div>
                  </p>
                  <ul className={ulClass}>
                    <li>𝐵 = inducția magnetică (T)</li>
                    <li>𝜇 = permeabilitatea mediului</li>
                    <li>𝑟 = distanța față de fir</li>
                  </ul>
                  <H2 h2text="Forțele electromagnetice și electrodinamice" indexH2={indexH2("Forțele electromagnetice și electrodinamice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Forța asupra unei sarcini în mișcare:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Forțele electromagnetice și electrodinamice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Forțele electromagnetice și electrodinamice")].findIndex(h3 => h3 === "Forța asupra unei sarcini în mișcare") : -1}></H3>
                  <p 
                    className="inline-flex items-end gap-1 w-full justify-center">
                            <Vector simbol="𝐹" />
                            <strong><i> = 𝑞 ⋅ </i></strong>
                            <Vector simbol="𝑣" />
                            <strong><i>x</i></strong>
                            <Vector simbol="𝐵" />
                  </p>
                  <ul className={ulClass}>
                    <li
                        className="flex items-center">
                        <span className="mr-2 pt-2 text-l leading-none">•</span>
                        <div
                            className="inline-flex gap-1">
                            <div
                                className="inline-flex items-end gap-2">
                                <Vector simbol="𝐹" />
                                = forța magnetică
                            </div>
                        </div>
                    </li>
                    <li>𝑞 = sarcina electrică</li>
                    <li
                        className="flex items-center">
                        <span className="mr-2 pt-2 text-l leading-none">•</span>
                        <div
                            className="inline-flex gap-1">
                            <div
                                className="inline-flex items-end gap-2">
                                <Vector simbol="𝑣" />
                                = viteza sarcinii
                            </div>
                        </div>
                    </li>
                    <li
                        className="flex items-center">
                        <span className="mr-2 pt-2 text-l leading-none">•</span>
                        <div
                            className="inline-flex gap-1">
                            <div
                                className="inline-flex items-end gap-2">
                                <Vector simbol="𝐵" />
                                = câmpul magnetic
                            </div>
                        </div>
                    </li>
                  </ul>
                  <H3 h3text="Interacțiunea dintre două fire paralele cu curent:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Forțele electromagnetice și electrodinamice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Forțele electromagnetice și electrodinamice")].findIndex(h3 => h3 === "Interacțiunea dintre două fire paralele cu curent") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Curent <strong>în același sens</strong> → firele se atrag.</li>
                    <li>Curent <strong>în sens opus</strong> → firele se resping.</li>
                  </ul>
                  <p>
                  Această forță este una <strong>electrodinamică</strong>, și se bazează pe câmpurile magnetice produse de fiecare fir.
                  </p>
                  <table className={tableClass}>
                    <thead className={trClass}>
                        <th className="flex-15">Efect</th>
                        <th className="flex-60">Descriere</th>
                        <th className="flex-25">Aplicații</th>
                    </thead>
                    <tbody>
                        <tr className={trClass}>
                            <td className="flex-15">Termic (Joule)</td>
                            <td className="flex-60">Încălzirea conductorului</td>
                            <td className="flex-25">Plite, radiatoare</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-15">Magnetic</td>
                            <td className="flex-60">Crearea unui câmp magnetic</td>
                            <td className="flex-25">Motoare, electromagneți</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-15">Mecanic</td>
                            <td className="flex-60">Forță asupra conductoarelor în câmp magnetic</td>
                            <td className="flex-25">Motoare, difuzoare</td>
                        </tr>
                    </tbody>
                </table>
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