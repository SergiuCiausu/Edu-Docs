"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-chimie-12";
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

  const h1 = "Reacții cu transfer de electroni"
  
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
              profil="mate info" 
              materie="chimie" 
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
                  <H2 h2text="Cupluri redox" indexH2={indexH2("Cupluri redox")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un <strong>cuplu redox</strong> este format din două specii chimice aflate în relație de oxidare-reducere, adică o specie oxidată și una redusă.
                  </p>
                  <p>
                  Exemplu:
                  </p>
                  <p>
                    Cu<sup>2+</sup>/Cu sau Fe<sup>3+</sup>/Fe<sup>2+</sup>
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Oxidant</strong>: acceptă electroni (se reduce)</li>
                    <li><strong>Reducător</strong>: cedează electroni (se oxidează)</li>
                  </ul>
                  <p>
                  O reacție redox implică <strong>transfer de electroni</strong> între un reducător și un oxidant:
                  </p>
                  <p>
                    <span>Zn + Cu<sup>2+</sup> → Zn<sup>2+</sup> + Cu</span>
                  </p>
                  <H2 h2text="Celule galvanice" indexH2={indexH2("Celule galvanice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O <strong>celulă galvanică</strong> (sau pilă voltaică) transformă <strong>energia chimică în energie electrică</strong>, pe baza reacțiilor redox spontane.
                  </p>
                  <p>
                    <strong>Componente:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Electrodul negativ (anod)</strong>: are loc oxidarea (pierdere de electroni).</li>
                    <li><strong>Electrodul pozitiv (catod)</strong>: are loc reducerea (acceptare de electroni).</li>
                    <li><strong>Punte salină</strong>: permite închiderea circuitului și menține neutralitatea electrică.</li>
                  </ul>
                  <p>
                  Exemplu de pilă Daniell:
                  </p>
                  <ul className={ulClass}>
                    <li>Anod: Zn → Zn²⁺ + 2e⁻</li>
                    <li>Catod: Cu²⁺ + 2e⁻ → Cu</li>
                  </ul>
                  <H2 h2text="Potențialul standard de reducere" indexH2={indexH2("Potențialul standard de reducere")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>Este o măsură a <strong>tendinței unei specii chimice de a se reduce</strong>.</li>
                    <li>Se notează 𝐸<sup>0</sup> și se măsoară în volți (V), față de electrodul standard cu hidrogen.</li>
                    <li>Cu cât 𝐸<sup>0</sup> este mai mare, cu atât speciile sunt <strong>oxidante mai puternice</strong>.</li>
                  </ul>
                  <p>
                  Tabelul potențialelor standard de reducere permite compararea forței oxidante și reducătoare a diferitelor cupluri redox.
                  </p>
                  <H2 h2text="Pile electrice și acumulatori" indexH2={indexH2("Pile electrice și acumulatori")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li><strong>Pile electrice</strong>: generează curent electric prin reacții redox spontane.</li>
                    <li><strong>Acumulatori</strong>: pile reversibile ce pot fi reîncărcate prin trecerea curentului electric în sens opus.</li>
                  </ul>
                  <p>
                  Exemple:
                  </p>
                  <ul className={ulClass}>
                    <li>Acumulatorul cu plumb: Pb / PbO₂ în soluție de H₂SO₄.</li>
                    <li>Bateria Li-ion: bazată pe reacții redox reversibile între Li și alte materiale.</li>
                  </ul>
                  <H2 h2text="Electroliza. Legile lui Faraday" indexH2={indexH2("Electroliza. Legile lui Faraday")} indexLectie={titluri.length > 1 ? indexLectie : -1|}></H2>
                  <p>
                    <strong>Electroliza</strong> este un proces ne-spontan în care energia electrică este folosită pentru a produce reacții chimice.
                  </p>
                  <p>
                  Se realizează într-o <strong>celulă electrolitică</strong> cu doi electrozi și o sursă de curent continuu.
                  </p>
                  <p>
                    <strong>Legile electrolizei (Faraday):</strong>
                  </p>
                  <ol className={olClass}>
                    <li><strong>Cantitatea de substanță</strong> eliberată la un electrod este proporțională cu cantitatea de electricitate trecută prin soluție.</li>
                    <li>Pentru aceeași cantitate de electricitate, <strong>masele substanțelor eliberate</strong> sunt proporționale cu <strong>echivalenții chimici</strong> ai acestora.</li>
                  </ol>
                  <p>
                  Formulă:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula font-bold">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                                <strong>𝑚 =  </strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>𝑀 ⋅ 𝐼 ⋅ 𝑡</strong></p>
                                <p className="fractie-jos text-center"><strong>𝑛 ⋅ 𝐹</strong></p>
                            </div>
                        </div>
                  </p>
                  <ul className={ulClass}>
                    <li>𝑚: masa substanței</li>
                    <li>𝑀: masa molară</li>
                    <li>𝐼: intensitatea curentului (A)</li>
                    <li>𝑡: timpul (s)</li>
                    <li>𝑛: număr de electroni transferați</li>
                    <li>𝐹: constanta lui Faraday (96500 C/mol)</li>
                  </ul>
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