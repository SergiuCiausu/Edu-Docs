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

  const h1 = "Curentul alternativ"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    ["Formă generală", "Caracteristici"],
    ["Circuit R (rezistiv pur)", "Circuit L (inductiv pur)", "Circuit C (capacitiv pur)", "Circuit RLC serie"],
    ["Puterea instantanee", "Puterea activă", "Alte tipuri"],
    ["Principiu", "Raportul transformării"],
    [""]
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
                  <H2 h2text="Inducția electromagnetică" indexH2={indexH2("Inducția electromagnetică")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Inducția electromagnetică este fenomenul prin care <strong>într-un circuit se generează un curent electric</strong> atunci când <strong>fluxul magnetic prin acel circuit se modifică</strong>.
                  </p>
                  <p>
                    <strong>Flux magnetic:</strong>
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                    <strong><i>Φ = 𝐵 ⋅ 𝐴 ⋅ cos(𝜃)</i></strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Φ = fluxul magnetic (Weber, Wb)</li>
                    <li>𝐵 = inducția magnetică</li>
                    <li>𝐴 = aria circuitului</li>
                    <li
                        className="flex items-center">
                        <span className="mr-2 pt-2 text-l leading-none">•</span>
                        <div
                            className="inline-flex gap-1">
                            <div
                                className="inline-flex items-end gap-2">
                                𝜃 = unghiul dintre <Vector simbol="𝐵" /> și normală
                            </div>
                        </div>
                    </li>
                  </ul>
                  <H2 h2text="Legea lui Faraday" indexH2={indexH2("Legea lui Faraday")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Legea inducției electromagnetice (Faraday):</strong>
                  </p>
                  <p>
                  Tensiunea electromotoare indusă într-un circuit este proporțională cu viteza de variație a fluxului magnetic.
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                    <div
                      className="inline-flex items-center gap-1">
                        <strong><i>ε = -</i></strong>
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center"><strong><i>dΦ</i></strong></p>
                            <p className="fractie-jos text-center"><strong><i>d𝑡</i></strong></p>
                        </div>
                    </div>
                  </p>
                  <p>
                  Semnul „–” exprimă regula lui Lenz: <strong>sensul curentului indus se opune cauzei care l-a produs</strong>.
                  </p>
                  <H2 h2text="Curentul alternativ (CA)" indexH2={indexH2("Curentul alternativ (CA)")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Curentul alternativ</strong> este curentul electric care <strong>își schimbă periodic sensul</strong> și valoarea, de obicei sub formă de <strong>sinusoidă</strong>.
                  </p>
                  <H3 h3text="Formă generală:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Curentul alternativ (CA)")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Curentul alternativ (CA)")].findIndex(h3 => h3 === "Formă generală") : -1}></H3>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                      <strong><i>i(𝑡) = 𝐼<sub>𝑚𝑎𝑥</sub> ⋅  sin(𝜔𝑡 + 𝜑)</i></strong>
                  </p>
                  <ul className={ulClass}>
                    <li>𝐼<sub>𝑚𝑎𝑥</sub> = intensitatea maximă</li>
                    <li>𝜔 = pulsatia (rad/s)</li>
                    <li>𝑡 = timpul</li>
                    <li>𝜑 = faza inițială</li>
                  </ul>
                  <H3 h3text="Caracteristici" indexH3={h3s[h2s.findIndex(h2 => h2 === "Curentul alternativ (CA)")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Curentul alternativ (CA)")].findIndex(h3 => h3 === "Caracteristici") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Frecvența <strong>ν (Hz)</strong>: numărul de cicluri/secundă (în rețea, 50 Hz)</li>
                    <li
                      className="flex items-center">
                        <span className="mr-2 text-l leading-none">•</span>
                        Perioada 𝑇 = 
                        <div
                          className="inline-flex items-center gap-1">
                          <div
                              className={fractie}>
                              <p className="fractie-sus text-center">1</p>
                              <p className="fractie-jos text-center">ν</p>
                          </div>
                        </div>
                    </li>
                    <li
                      className="flex items-center">
                      <span className="mr-2 text-l leading-none">•</span>
                      <strong>Tensiune și curent eficace: </strong>
                      <div
                          className="inline-flex items-center gap-1">
                            <strong><i> 𝑈<sub>𝑒𝑓</sub> = </i></strong>
                          <div
                              className={fractie}>
                              <p className="fractie-sus text-center">𝑈<sub>𝑚𝑎𝑥</sub></p>
                              <p className="fractie-jos text-center">√2</p>
                          </div>
                          <strong><i> ; 𝐼<sub>𝑒𝑓</sub> = </i></strong>
                          <div
                              className={fractie}>
                              <p className="fractie-sus text-center">𝐼<sub>𝑚𝑎𝑥</sub></p>
                              <p className="fractie-jos text-center">√2</p>
                          </div>
                      </div>
                    </li>
                  </ul>
                  <H2 h2text="Circuite RLC în curent alternativ" indexH2={indexH2("Circuite RLC în curent alternativ")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Circuit R (rezistiv pur)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Circuite RLC în curent alternativ")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Circuite RLC în curent alternativ")].findIndex(h3 => h3 === "Circuit R (rezistiv pur)") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Curentul este în fază cu tensiunea.</li>
                    <li>Puterea activă este maximă.</li>
                  </ul>
                  <H3 h3text="Circuit L (inductiv pur)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Circuite RLC în curent alternativ")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Circuite RLC în curent alternativ")].findIndex(h3 => h3 === "Circuit L (inductiv pur)") : -1}></H3>
                  <ul className={ulClass}>
                    <li
                    className="flex items-center">
                      <span className="mr-2 text-l leading-none">•</span>
                      <span>Curentul <strong>întârzie</strong> față de tensiune cu </span>
                      <div
                          className="inline-flex items-center gap-1">
                          <div
                              className={fractie}>
                              <p className="fractie-sus text-center"><strong><i>𝜋</i></strong></p>
                              <p className="fractie-jos text-center"><strong><i>2</i></strong></p>
                          </div>
                      </div>
                    </li>
                  </ul>
                  <H3 h3text="Circuit C (capacitiv pur)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Circuite RLC în curent alternativ")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Circuite RLC în curent alternativ")].findIndex(h3 => h3 === "Circuit C (capacitiv pur)") : -1}></H3>
                  <ul className={ulClass}>
                    <li
                      className="flex items-center">
                      <span className="mr-2 text-l leading-none">•</span>
                      <span>Curentul <strong>devansează</strong> tensiunea cu </span>
                      <div
                          className="inline-flex items-center gap-1">
                          <div
                              className={fractie}>
                              <p className="fractie-sus text-center"><strong><i>𝜋</i></strong></p>
                              <p className="fractie-jos text-center"><strong><i>2</i></strong></p>
                          </div>
                      </div>
                    </li>
                  </ul>
                  <H3 h3text="Circuit RLC serie" indexH3={h3s[h2s.findIndex(h2 => h2 === "Circuite RLC în curent alternativ")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Circuite RLC în curent alternativ")].findIndex(h3 => h3 === "Circuit RLC serie") : -1}></H3>
                  <ul className={ulClass}>
                    <li>
                    Impedanța totală:
                      <p
                        className="inline-flex items-center gap-1 w-full justify-center">
                          <div
                            className="inline-flex items-center gap-1">
                            <strong><i>Z = {`√`}</i></strong><span className="text-3xl">{`[`}</span><strong><i>{`𝑅`}<sup>2</sup> + {`(𝜔L - `}</i></strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong><i>1</i></strong></p>
                                <p className="fractie-jos text-center"><strong><i>𝜔𝐶</i></strong></p>
                            </div>
                            <strong>{`)`}</strong><strong><i><sup>2</sup></i></strong><span className="text-3xl">{`]`}</span>
                      </div>
                      </p>
                    </li>
                    <li>
                      Rezonanță:
                      <p
                        className="inline-flex items-center gap-1 w-full justify-center">
                          <div
                            className="inline-flex items-center gap-1">
                            <strong><i>𝜔<sub>0</sub> = </i></strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong><i>1</i></strong></p>
                                <p className="fractie-jos text-center"><strong><i>√L𝐶</i></strong></p>
                            </div>
                            <strong><i> când X<sub>L</sub> = X<sub>C</sub></i></strong>
                          </div>
                      </p>
                    </li>
                  </ul>
                  <p>
                  La rezonanță, impedanța este minimă și curentul maxim
                  </p>
                  <H2 h2text="Puterea în curent alternativ" indexH2={indexH2("Puterea în curent alternativ")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Puterea instantanee:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Puterea în curent alternativ")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Puterea în curent alternativ")].findIndex(h3 => h3 === "Puterea instantanee") : -1}></H3>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                      <strong><i>𝑝(𝑡) = u(𝑡) ⋅ i(𝑡)</i></strong>
                  </p>
                  <H3 h3text="Puterea activă:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Puterea în curent alternativ")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Puterea în curent alternativ")].findIndex(h3 => h3 === "Puterea activă") : -1}></H3>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                      <strong><i>𝑃  = 𝑈<sub>𝑒𝑓</sub> ⋅ 𝐼<sub>𝑒𝑓</sub> ⋅ cos 𝜑</i></strong>
                  </p>
                  <ul className={ulClass}>
                    <li>cos 𝜑 este <strong>factorul de putere</strong>.</li>
                    <li>În circuitele pur rezistive, 𝜑 = 0, deci 𝑃 = 𝑈<sub>𝑒𝑓</sub> ⋅ 𝐼<sub>𝑒𝑓</sub></li>
                  </ul>
                  <H3 h3text="Alte tipuri" indexH3={h3s[h2s.findIndex(h2 => h2 === "Puterea în curent alternativ")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Puterea în curent alternativ")].findIndex(h3 => h3 === "Alte tipuri") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Putere reactivă: 𝑄 = 𝑈<sub>𝑒𝑓</sub> ⋅ 𝐼<sub>𝑒𝑓</sub> ⋅ sin 𝜑</li>
                    <li>Putere aparentă: 𝑆 = 𝑈<sub>𝑒𝑓</sub> ⋅ 𝐼<sub>𝑒𝑓</sub></li>
                  </ul>
                  <H2 h2text="Transformatorul" indexH2={indexH2("Transformatorul")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Transformatorul</strong> este un dispozitiv electric care modifică tensiunea curentului alternativ, fără a schimba frecvența.
                  </p>
                  <H3 h3text="Principiu" indexH3={h3s[h2s.findIndex(h2 => h2 === "Transformatorul")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Transformatorul")].findIndex(h3 => h3 === "Principiu") : -1}></H3>
                  <p>
                  Funcționează pe baza <strong>inducției electromagnetice</strong>, având două înfășurări: primară și secundară.
                  </p>
                  <H3 h3text="Raportul transformării" indexH3={h3s[h2s.findIndex(h2 => h2 === "Transformatorul")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Transformatorul")].findIndex(h3 => h3 === "Raportul transformării") : -1}></H3>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                      <div
                          className="inline-flex items-center gap-1">
                          <div
                              className={fractie}>
                              <p className="fractie-sus text-center"><strong><i>𝑈<sub>𝑆</sub></i></strong></p>
                              <p className="fractie-jos text-center"><strong><i>𝑈<sub>𝑃</sub></i></strong></p>
                          </div>
                          <strong><i> = </i></strong>
                          <div
                              className={fractie}>
                              <p className="fractie-sus text-center"><strong><i>𝑁<sub>𝑆</sub></i></strong></p>
                              <p className="fractie-jos text-center"><strong><i>𝑁<sub>𝑃</sub></i></strong></p>
                          </div>
                      </div>  
                  </p>
                  <ul className={ulClass}>
                    <li>𝑈<sub>𝑆</sub>, 𝑈<sub>𝑃</sub> = tensiunea secundară / primară</li>
                    <li>𝑁<sub>𝑆</sub>, 𝑁<sub>𝑃</sub> = numărul de spire</li>
                  </ul>
                  <p>
                  Aplicații: alimentarea locuințelor, surse de alimentare pentru dispozitive electronice.
                  </p>
                  <H2 h2text="Recapitulare" indexH2={indexH2("Recapitulare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <table className={tableClass}>
                    <thead className={trClass}>
                        <th className="flex-30">Concept</th>
                        <th className="flex-40">Simboluri/Legi</th>
                        <th className="flex-30">Observații</th>
                    </thead>
                    <tbody>
                        <tr className={trClass}>
                            <td className="flex-30">Inducție electromagnetică</td>
                            <td className="flex-40">
                              <div
                                className="inline-flex items-center gap-1">
                                  <strong><i>ε = -</i></strong>
                                  <div
                                      className={fractie}>
                                      <p className="fractie-sus text-center"><i>dΦ</i></p>
                                      <p className="fractie-jos text-center"><i>d</i>𝑡</p>
                                  </div>
                              </div>
                            </td>
                            <td className="flex-30">Curent generat de variația fluxului</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-30">Curent alternativ</td>
                            <td className="flex-40">i(𝑡) = 𝐼<sub>𝑚𝑎𝑥</sub> ⋅  sin(𝜔𝑡)</td>
                            <td className="flex-30">Variază sinusoidal</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-30">Putere activă</td>
                            <td className="flex-40">𝑃  = 𝑈<sub>𝑒𝑓</sub> ⋅ 𝐼<sub>𝑒𝑓</sub> ⋅ cos 𝜑</td>
                            <td className="flex-30">Eficiență maximă la 𝜑 = 0</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-30">Transformator</td>
                            <td className="flex-40">
                              <div
                                  className="inline-flex items-center gap-1">
                                  <div
                                      className={fractie}>
                                      <p className="fractie-sus text-center">𝑈<sub>𝑆</sub></p>
                                      <p className="fractie-jos text-center">𝑈<sub>𝑃</sub></p>
                                  </div>
                                  <strong><i> = </i></strong>
                                  <div
                                      className={fractie}>
                                      <p className="fractie-sus text-center">𝑁<sub>𝑆</sub></p>
                                      <p className="fractie-jos text-center">𝑁<sub>𝑃</sub></p>
                                  </div>
                              </div>  
                            </td>
                            <td className="flex-30">Modifică tensiunea</td>
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