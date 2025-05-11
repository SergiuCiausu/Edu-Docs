"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-stiinte-ale-naturii-10";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';

const page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Sistemul locomotor"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Oasele"],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""]
  ]

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
              materie="biologie" 
              clasa={10} 
              titluri={titluri}
              isPageContent={true}
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
                  <h1>{`Capitolul ${indexLectie}: ${h1}`}</h1>
                  <p>
                  Sistemul locomotor este responsabil de <strong>susținerea corpului, protejarea organelor interne și realizarea mișcărilor</strong>. Acesta este format din <strong>sistemul osos</strong> (scheletul) și <strong>sistemul muscular</strong>, care lucrează împreună pentru a permite mișcarea coordonată și controlată a organismului.
                  </p>
                  <H2 h2text="Structura oaselor și articulațiilor" indexH2={indexH2("Structura oaselor și articulațiilor")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Oasele" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura oaselor și articulațiilor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura oaselor și articulațiilor")].findIndex(h3 => h3 === "Oasele") : -1}></H3>
                  <p>
                  Oasele sunt structuri rigide, formate din țesut osos, care alcătuiesc scheletul uman. Ele sunt compuse din:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Substanță intercelulară mineralizată</strong> (calciu și fosfor),</li>
                        <li><strong>Celule osoase</strong> (osteoblaste, osteocite, osteoclaste),</li>
                        <li><strong>Periost</strong> – membrană externă ce conține vase de sânge și nervi.</li>
                  </ul>
                  <H2 h2text="Tipuri de oase și funcțiile acestora" indexH2={indexH2("Tipuri de oase și funcțiile acestora")} indexLectie={indexLectie}></H2>
                  <p>
                  Oasele se clasifică în funcție de formă:
                  </p>
                  <table
                    className={tableClass}>
                    <thead
                        className={trClass}>
                        <th className="flex-25">Tip de os</th>
                        <th className="flex-35">Exemplu</th>
                        <th className="flex-45">Funcții principale</th>
                    </thead>
                    <tbody>
                        <tr
                            className={trClass}>
                            <td className="flex-25">Lungi</td>
                            <td className="flex-35">Humerus, femur</td>
                            <td className="flex-45">Susținere, mișcare</td>
                        </tr>
                        <tr
                            className={trClass}>
                            <td className="flex-25">Scurte</td>
                            <td className="flex-35">Carpiene (încheietura mâinii)</td>
                            <td className="flex-45">Stabilitate, mobilitate limitată</td>
                        </tr>
                        <tr
                            className={trClass}>
                            <td className="flex-25">Late</td>
                            <td className="flex-35">Omoplat, stern, oasele craniului</td>
                            <td className="flex-45">Protecție (organe vitale)</td>
                        </tr>
                        <tr
                            className={trClass}>
                            <td className="flex-25">Neregulate</td>
                            <td className="flex-35">Vertebre, oasele feței</td>
                            <td className="flex-45">Protecție, susținere, mișcare</td>
                        </tr>
                        <tr
                            className={trClass}>
                            <td className="flex-25">Sesamoide</td>
                            <td className="flex-35">Rotulă</td>
                            <td className="flex-45">Protejează tendoanele, reduc frecarea</td>
                        </tr>
                    </tbody>
                  </table>
                  <H2 h2text="Articulațiile și mișcările acestora" indexH2={indexH2("Articulațiile și mișcările acestora")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Articulațiile</strong> sunt puncte de unire între două sau mai multe oase. Ele permit mobilitate în funcție de tipul și forma lor:
                  </p>
                  <table
                    className={tableClass}>
                        <thead
                            className={trClass}>
                            <th className="flex-25">Tip de articulație</th>
                            <th className="flex-35">Exemplu</th>
                            <th className="flex-45">Mișcări permise</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-25">Fixă</td>
                                <td className="flex-35">Craniul</td>
                                <td className="flex-45">Fără mișcare</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-25">Semimobilă</td>
                                <td className="flex-35">Coloana vertebrală</td>
                                <td className="flex-45">Mișcări limitate</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-25">Mobilă</td>
                                <td className="flex-35">Genunchi, umăr</td>
                                <td className="flex-45">Flexie, extensie, rotație etc.</td>
                            </tr>
                        </tbody>
                  </table>
                  <p>
                  Elemente componente ale articulațiilor mobile:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Cartilaj articular</strong> – reduce frecarea,</li>
                        <li><strong>Capsulă articulară</strong> – închide articulația,</li>
                        <li><strong>Lichid sinovial</strong> – lubrifiere,</li>
                        <li><strong>Ligamente</strong> – stabilizează oasele.</li>
                  </ul>
                  <H2 h2text="Mușchii și mecanismul contracției musculare" indexH2={indexH2("Mușchii și mecanismul contracției musculare")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Structura mușchilor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mușchii și mecanismul contracției musculare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mușchii și mecanismul contracției musculare")].findIndex(h3 => h3 === "Structura mușchilor") : -1}></H3>
                  <p>
                  Mușchii sunt alcătuiți din fibre musculare, fiecare conținând miofibrile cu două tipuri de filamente:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Actină</strong> (subțiri),</li>
                        <li><strong>Miozină </strong> (groase).</li>
                  </ul>
                  <p>
                  Contracția apare prin <strong>alunecarea filamentelor de actină peste cele de miozină</strong>, consumând <strong>ATP</strong> și necesitând <strong>ioni de calciu</strong>.
                  </p>
                  <H2 h2text="Tipuri de mușchi și funcțiile acestora" indexH2={indexH2("Tipuri de mușchi și funcțiile acestora")} indexLectie={indexLectie}></H2>
                  <table
                    className={tableClass}>
                    <thead
                        className={trClass}>
                        <th className="flex-25">Tip de mușchi</th>
                        <th className="flex-35">Caracteristici</th>
                        <th className="flex-45">Exemplu</th>
                    </thead>
                    <tbody>
                        <tr className={trClass}>
                            <td className="flex-25"><strong>Mușchi striați</strong> (scheletici)</td>
                            <td className="flex-35">Contracție voluntară, rapidă</td>
                            <td className="flex-45">Biceps, cvadriceps</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-25"><strong>Mușchi netezi</strong></td>
                            <td className="flex-35">Contracție involuntară, lentă</td>
                            <td className="flex-45">Pereții vaselor, tub digestiv</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-25"><strong>Mușchi cardiac</strong></td>
                            <td className="flex-35">Striat dar involuntar, contracție ritmică</td>
                            <td className="flex-45">Inima</td>
                        </tr>
                    </tbody>
                  </table>
                  <H2 h2text="Mecanismul contracției musculare" indexH2={indexH2("Mecanismul contracției musculare")} indexLectie={indexLectie}></H2>
                  <ol
                    className={olClass}>
                        <li>Impulsul nervos ajunge la fibra musculară.</li>
                        <li>Se eliberează <strong>ioni de Ca²⁺</strong>, care permit formarea punților între actină și miozină.</li>
                        <li>Miozina se deplasează pe actină, scurtând sarcomerul → <strong>contracție</strong>.</li>
                        <li>După consumul de ATP, mușchiul se <strong>relaxează</strong>.</li>
                  </ol>
                  <p>
                  Sistemul locomotor este format din <strong>oase, articulații și mușchi</strong>. Oasele susțin și protejează corpul; articulațiile permit mișcarea. Mușchii realizează mișcările prin <strong>contracție</strong> și <strong>relaxare</strong>, acționând asupra oaselor prin intermediul <strong>tendoanelor</strong>. Mișcarea rezultă din colaborarea coordonată a sistemelor osos, articular și muscular, sub controlul sistemului nervos.
                  </p>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={indexLectie}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div>
  )
}

export default page