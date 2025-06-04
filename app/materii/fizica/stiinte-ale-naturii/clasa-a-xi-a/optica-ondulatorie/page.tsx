"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-capitole-11";
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

  const h1 = "Optică ondulatorie"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Condiții pentru interferență", "Experimentul Young cu două fante (1801)"],
    ["Exemple"],
    ["Tipuri de polarizare", "Metode de polarizare"],
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
              materie="fizică" 
              clasa={11} 
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
                  <H2 h2text="Interferența luminii" indexH2={indexH2("Interferența luminii")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Interferența luminii</strong> este fenomenul de suprapunere a două unde luminoase coerente, rezultând un model de alternanță de maxime și minime de lumină.
                  </p>
                  <H3 h3text="Condiții pentru interferență:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Interferența luminii")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Interferența luminii")].findIndex(h3 => h3 === "Condiții pentru interferență") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Surse coerente (aceeași frecvență, diferență de fază constantă);</li>
                    <li>Unde de aceeași polarizare;</li>
                  </ul>
                  <H3 h3text="Experimentul Young cu două fante (1801):" indexH3={h3s[h2s.findIndex(h2 => h2 === "Interferența luminii")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Interferența luminii")].findIndex(h3 => h3 === "Experimentul Young cu două fante (1801)") : -1}></H3>
                  <p>
                  O sursă de lumină monocromatică este trecută prin două fante apropiate → se obține un model de <strong>franje luminoase și întunecate</strong> pe un ecran.
                  </p>
                  <p>
                    <strong>Formula pentru distanța dintre franje:</strong>
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <div
                            className="inline-flex items-center gap-1">
                                <strong><i>Δ</i>𝑦 = </strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>𝜆 ⋅ 𝐿</strong></p>
                                <p className="fractie-jos text-center"><strong>𝑑</strong></p>
                            </div>
                        </div>
                  </p>
                  <ul className={ulClass}>
                    <li>𝜆 = lungimea de undă a luminii,</li>
                    <li>𝐿 = distanța de la fante la ecran,</li>
                    <li>𝑑 = distanța dintre fante.</li>
                  </ul>
                  <p>
                    <strong>Aplicații:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Determinarea lungimii de undă a luminii.</li>
                    <li>Testarea calității oglinzilor și lentilelor.</li>
                  </ul>
                  <H2 h2text="Difracția luminii" indexH2={indexH2("Difracția luminii")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Difracția</strong> este fenomenul de <strong>deviere a undelor luminoase</strong> atunci când trec pe lângă margini sau prin deschideri înguste, comparabile cu lungimea de undă.
                  </p>
                  <H3 h3text="Exemple:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Difracția luminii")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Difracția luminii")].findIndex(h3 => h3 === "Exemple") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Umbra difuză a unui obiect iluminat cu lumină coerentă.</li>
                    <li>Pattern-ul produs de o rețea de difracție (grating).</li>
                  </ul>
                  <p>
                    <strong>Condiție pentru difracție semnificativă:</strong>
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                    <strong>𝑎 <i>≈</i> 𝜆</strong>
                  </p>
                  <p>
                  unde 𝑎 este lățimea deschiderii, iar 𝜆 lungimea de undă. 
                  </p>
                  <p>
                    <strong>Pentru rețele de difracție:</strong>
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong>𝑑 ⋅ <i>sin</i>𝜃 = 𝑛 ⋅ 𝜆</strong>
                  </p>
                  <H2 h2text="Polarizarea luminii" indexH2={indexH2("Polarizarea luminii")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Polarizarea</strong> este fenomenul prin care vibrațiile câmpului electric al undei luminoase devin limitate într-un plan.
                  </p>
                  <H3 h3text="Tipuri de polarizare:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Polarizarea luminii")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Polarizarea luminii")].findIndex(h3 => h3 === "Tipuri de polarizare") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Naturală</strong>: lumina obișnuită, cu vibrații în toate direcțiile perpendiculare pe direcția de propagare.</li>
                    <li><strong>Liniară</strong>: vibrațiile au loc într-un singur plan.</li>
                    <li><strong>Circulară / eliptică</strong>: direcția câmpului electric descrie o spirală.</li>
                  </ul>
                  <H3 h3text="Metode de polarizare:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Polarizarea luminii")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Polarizarea luminii")].findIndex(h3 => h3 === "Metode de polarizare") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Prin <strong>filtrare</strong> (filtre polarizante).</li>
                    <li>Prin <strong>reflexie</strong> la unghiul lui Brewster:</li>
                  </ul>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <div
                            className="inline-flex items-center gap-1">
                                <strong><i>tg</i>𝜃<sub></sub>𝐵 <i>=</i> </strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>𝑛<sub><i>2</i></sub></strong></p>
                                <p className="fractie-jos text-center"><strong>𝑛<sub><i>1</i></sub></strong></p>
                            </div>
                        </div>
                  </p>
                  <ul className={ulClass}>
                    <li>Prin <strong>dublă refracție</strong> (ex: cristale de calcit).</li>
                    <li>Prin <strong>dispersie</strong> (în atmosferă: cerul este albastru polarizat).</li>
                  </ul>
                  <H2 h2text="Exemplu de problemă" indexH2={indexH2("Exemplu de problemă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O lumină cu lungimea de undă 𝜆 = 600 𝑛𝑚 trece prin două fante separate de 𝑑 = 0.5 𝑚𝑚. Distanța dintre fante și ecran este 𝐿 = 2 𝑚. Calculează distanța dintre două franje luminoase succesive.
                  </p>
                  <p>
                    <strong>Soluție:</strong>
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <div
                            className="inline-flex items-center gap-1">
                                <i>Δ</i>𝑦 = 
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">𝜆 ⋅ 𝐿</p>
                                <p className="fractie-jos text-center">𝑑</p>
                            </div>
                            <i> = </i>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">600 ⋅ 10<sup>-9</sup> ⋅ 2</p>
                                <p className="fractie-jos text-center">0.5 ⋅ 10<sup>-3</sup></p>
                            </div>
                            <i>
                             = 
                            </i>
                            2.4 𝑚𝑚
                        </div>
                  </p>
                  <table className={tableClass}>
                    <thead className={trClass}>
                        <th className="flex-20">Fenomen</th>
                        <th className="flex-45">Descriere</th>
                        <th className="flex-35">Aplicații principale</th>
                    </thead>
                    <tbody>
                        <tr className={trClass}>
                            <td className="flex-20">Interferența</td>
                            <td className="flex-45">Suprapunere de unde coerente</td>
                            <td className="flex-35">Măsurători optice, testare optică</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-20">Difracția</td>
                            <td className="flex-45">Deviarea undei în jurul obstacolelor</td>
                            <td className="flex-35">CD-uri, spectroscopie</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-20">Polarizarea</td>
                            <td className="flex-45">Vibrații limitate într-un plan</td>
                            <td className="flex-35">Ochelari, ecrane, foto</td>
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