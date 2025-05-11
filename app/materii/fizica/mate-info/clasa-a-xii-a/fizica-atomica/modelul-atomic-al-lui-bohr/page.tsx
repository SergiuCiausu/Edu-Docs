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

  const h1 = "Modelul atomic al lui Bohr"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Postulatul 1: Cuantificarea orbitelor", "Postulatul 2: Radiația și tranzițiile energetice"],
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
                  <H2 h2text="Context istoric" indexH2={indexH2("Context istoric")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  La începutul secolului XX, modelul atomic al lui Rutherford descria un nucleu pozitiv în jurul căruia electronii se roteau, dar nu explica stabilitatea atomului sau liniile spectrale observate la hidrogen.
                  </p>
                  <p>
                  În 1913, fizicianul danez <strong>Niels Bohr</strong> a propus un model atomic revoluționar, care a integrat idei din mecanica cuantică incipientă pentru a explica aceste fenomene.
                  </p>
                  <H2 h2text="Postulatele modelului Bohr" indexH2={indexH2("Postulatele modelului Bohr")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Modelul Bohr are la bază <strong>două postulate fundamentale</strong>:
                  </p>
                  <H3 h3text="Postulatul 1: Cuantificarea orbitelor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Postulatele modelului Bohr")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Postulatele modelului Bohr")].findIndex(h3 => h3 === "Postulatul 1: Cuantificarea orbitelor") : -1}></H3>
                  <p>
                  Electronul se poate roti în jurul nucleului doar pe <strong>anumite orbite circulare stabile</strong>, fără a emite energie. Aceste orbite corespund unor niveluri energetice bine definite.
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong>𝐿 = 𝑚 ⋅ 𝑣 ⋅ 𝑟 = 𝑛 ⋅ ℏ</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>𝐿 este momentul cinetic al electronului;</li>
                    <li>𝑛 este un număr întreg (numărul cuantic principal),</li>
                    <li
                        className="flex items-center">
                        <span className="mr-2 text-l leading-none">•</span>
                        ℏ = 
                        <div
                            className="inline-flex items-center gap-1">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">ℎ</p>
                                <p className="fractie-jos text-center"><i>2</i>𝜋</p>
                            </div>
                        </div>
                    
                     , constanta redusă Planck.
                    </li>
                  </ul>
                  <H3 h3text="Postulatul 2: Radiația și tranzițiile energetice" indexH3={h3s[h2s.findIndex(h2 => h2 === "Postulatele modelului Bohr")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Postulatele modelului Bohr")].findIndex(h3 => h3 === "Postulatul 2: Radiația și tranzițiile energetice") : -1}></H3>
                  <p>
                  Atunci când electronul <strong>trece de pe o orbită superioară pe una inferioară</strong>, atomul <strong>emite energie</strong> sub formă de foton. Invers, absorbția de energie permite trecerea pe o orbită superioară.
                  </p>
                  <div
                    className="inline-flex items-center justify-center gap-1 w-full">
                    <p
                        className="inline-flex items-end justify-center gap-1 w-full">
                        <Vector simbol="𝐸" denumire="foton" /><strong><i className="mx-1">= </i></strong>
                        <Vector simbol="𝐸" denumire="𝑖" /><strong><i> - </i></strong><Vector simbol="𝐸" denumire="𝑓" />
                        <strong><i> =  </i>ℎ ⋅ 𝜈</strong>
                    </p>
                  </div>
                  <H2 h2text="Explicația liniilor spectrale ale hidrogenului" indexH2={indexH2("Explicația liniilor spectrale ale hidrogenului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Modelul Bohr a reușit <strong>să explice spectrul de emisie al hidrogenului</strong>. Fiecare linie spectrală corespunde unei tranziții între două nivele energetice.
                  </p>
                  <p>
                  Exemplu:
                  </p>
                  <ul className={ulClass}>
                    <li>Tranzițiile către 𝑛 = 2 formează seria <strong>Balmer</strong> (vizibilă).</li>
                    <li>Tranzițiile către 𝑛 = 1 formează seria <strong>Lyman</strong> (ultraviolet).</li>
                    <li>Tranzițiile către 𝑛 = 3 formează seria <strong>Paschen</strong> (infraroșu).</li>
                  </ul>
                  <p>
                  Formula energiei orbitale pentru hidrogen:
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                    <div
                        className="inline-flex items-center gap-1">
                        <Vector simbol="𝐸" denumire="𝑛" /><strong><i> = </i></strong>    
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center"><strong><i>13.6</i></strong></p>
                            <p className="fractie-jos text-center"><strong>𝑛<sup><i>2</i></sup></strong></p>
                        </div>
                        <strong><i> eV</i></strong>
                    </div>
                </p>
                <p>
                Aceasta arată că energia devine mai puțin negativă pe măsură ce 𝑛 crește, iar electronul se îndepărtează de nucleu.
                </p>
                <H2 h2text="Limitările modelului Bohr" indexH2={indexH2("Limitările modelului Bohr")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <p>
                Deși inovator, modelul lui Bohr are mai multe limite:
                </p>
                <ul className={ulClass}>
                    <li>Funcționează <strong>doar pentru atomul de hidrogen</strong> sau sisteme cu un singur electron (ex: He⁺, Li²⁺);</li>
                    <li>Nu explică structura fină a liniilor spectrale;</li>
                    <li>Nu ține cont de principiile mecanicii cuantice moderne (ex: nedeterminarea lui Heisenberg);</li>
                    <li>Nu explică comportamentul atomilor în câmpuri electrice sau magnetice externe (efect Stark sau Zeeman).</li>
                </ul>
                <table className={tableClass}>
                    <thead className={trClass}>
                        <th className="flex-35">Concept</th>
                        <th className="flex-65">Esența sa</th>
                    </thead>
                    <tbody>
                        <tr className={trClass}>
                            <td className="flex-35">Orbită stabilă</td>
                            <td className="flex-65">Electronul se rotește fără a pierde energie</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-35">Cuantificarea energiei</td>
                            <td className="flex-65">Doar anumite niveluri energetice sunt permise</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-35">Emisie de fotoni</td>
                            <td className="flex-65">Are loc la tranziții între nivele energetice</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-35">Limita modelului</td>
                            <td className="flex-65">Nu explică atomii cu mai mulți electroni</td>
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