"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-fizica-atomica-12";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';
import Link from 'next/link';

const page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Spectre atomice"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
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
              profil="științe ale naturii" 
              materie="fizică" 
              clasa={12} 
              capitol="fizică atomică"
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
                  <H2 h2text="Ce sunt spectrele atomice?" indexH2={indexH2("Ce sunt spectrele atomice?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Spectrele atomice</strong> sunt reprezentări ale radiației electromagnetice emise sau absorbite de atomi. Aceste spectre oferă informații esențiale despre structura internă a atomilor și despre procesele energetice care au loc în interiorul lor.
                  </p>
                  <H2 h2text="Spectre de emisie și absorbție" indexH2={indexH2("Spectre de emisie și absorbție")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li><strong>Spectrul de emisie</strong> este ansamblul liniilor de lumină emise de un atom sau o substanță aflată într-o stare excitată. Acestea apar ca linii luminoase pe un fundal întunecat.</li>
                    <li><strong>Spectrul de absorbție</strong> este reprezentat de benzile întunecate (lipsa radiației) apărute într-un spectru continuu, atunci când o substanță absoarbe radiația de anumite frecvențe.</li>
                  </ul>
                  <p>
                  Exemplu: Hidrogenul gazos, când este excitat, emite lumină specifică (spectru de emisie); în schimb, dacă un fascicul de lumină albă trece printr-un gaz de hidrogen rece, el absoarbe anumite frecvențe (spectru de absorbție).
                  </p>
                  <H2 h2text="Clasificarea spectrelor" indexH2={indexH2("Clasificarea spectrelor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Spectrele se împart în trei categorii principale:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Spectru continuu</strong>: are toate frecvențele vizibile (ex: lumina soarelui sau a filamentului incandescent).</li>
                    <li><strong>Spectru de bandă</strong>: este alcătuit din benzi luminoase (caracteristic moleculelor).</li>
                    <li><strong>Spectru de linii (discret)</strong>: format din linii luminoase separate, caracteristic atomilor gazoși.</li>
                  </ul>
                  <H2 h2text="Legea seriilor spectrale ale hidrogenului" indexH2={indexH2("Legea seriilor spectrale ale hidrogenului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Fizicianul <strong>Johann Balmer</strong> a observat că liniile spectrale vizibile ale atomului de hidrogen se pot descrie printr-o formulă matematică:
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                      <div
                          className="inline-flex items-center gap-1">
                          <div
                              className={fractie}>
                              <p className="fractie-sus text-center"><strong><i>1</i></strong></p>
                              <p className="fractie-jos text-center pb-2"><strong>𝜆</strong></p>
                          </div>
                          <strong><i> = 𝑅 </i></strong><span className="text-4xl"><i>{`( `}</i></span>
                          <div
                              className={fractie}>
                              <p className="fractie-sus text-center"><strong><i>1</i></strong></p>
                              <p className="fractie-jos text-center pb-2"><strong>𝑛<i><sub>1</sub><sup>2</sup></i></strong></p>
                          </div>
                          <strong><i> - </i></strong>
                          <div
                              className={fractie}>
                              <p className="fractie-sus text-center"><strong><i>1</i></strong></p>
                              <p className="fractie-jos text-center pb-2"><strong>𝑛<i><sub>2</sub><sup>2</sup></i></strong></p>
                          </div>
                          <i><span className="text-4xl">{`)`}</span></i>
                      </div>  
                  </p>
                  <ul className={ulClass}>
                    <li>𝜆 = lungimea de undă a luminii emise;</li>
                    <li>𝑅 = constanta Rydberg;</li>
                    <li>𝑛<i><sub>1</sub></i>, 𝑛<i><sub>2</sub></i> = numere întregi (cu 𝑛<i><sub>2</sub></i> {`>`} 𝑛<i><sub>1</sub></i>)</li>
                  </ul>
                  <p>
                  Această lege a stat la baza dezvoltării <Link href="/materii/fizica/mate-info/clasa-a-xii-a/fizica-atomica/modelul-atomic-al-lui-bohr" className="in-page-link">modelului atomic al lui Bohr</Link>.
                  </p>
                  <H2 h2text="Analiza spectrală și aplicații" indexH2={indexH2("Analiza spectrală și aplicații")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Analiza spectrală</strong> constă în studiul spectrelor emise sau absorbite de substanțe pentru a determina compoziția lor chimică și proprietățile fizice.
                  </p>
                  <p>
                    <strong>Aplicații importante:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Astrofizică: identificarea compoziției stelelor;</li>
                    <li>Chimie: identificarea elementelor în probe necunoscute;</li>
                    <li>Mediu: detectarea poluanților prin spectroscopie;</li>
                    <li>Medicină: analiza sângelui sau a țesuturilor.</li>
                  </ul>
                  <table className={tableClass}>
                    <thead className={trClass}>
                        <th className="flex-25">Tip spectru</th>
                        <th className="flex-30">Cum se obține</th>
                        <th className="flex-45">Exemple</th>
                    </thead>
                    <tbody>
                        <tr className={trClass}>
                            <td className="flex-25">De emisie</td>
                            <td className="flex-30">Prin excitarea atomilor</td>
                            <td className="flex-45">Tuburi de descărcare, stele</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-25">De absorbție</td>
                            <td className="flex-30">Prin trecerea luminii printr-un gaz</td>
                            <td className="flex-45">Soarele (spectru cu linii întunecate)</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-25">Continuu</td>
                            <td className="flex-30">Radiație de la corpuri dense, fierbinți</td>
                            <td className="flex-45">Bec cu filament, Soarele (în întregime)</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-25">De bandă</td>
                            <td className="flex-30">De molecule</td>
                            <td className="flex-45">Flăcări colorate, gaze</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-25">Discret (de linii)</td>
                            <td className="flex-30">De la atomi gazoși</td>
                            <td className="flex-45">Spectrul de hidrogen, neon</td>
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

export default page