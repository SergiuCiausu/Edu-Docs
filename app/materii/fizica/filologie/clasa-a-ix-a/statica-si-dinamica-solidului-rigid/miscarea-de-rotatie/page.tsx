"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-statica-si-dinamica-solidului-rigid-9";
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

  const h1 = "Mișcarea de rotație"
  
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
              profil="filologie" 
              materie="fizică" 
              clasa={9} 
              capitol="statica și dinamica solidului rigid"
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
                  <h1>{`Capitolul ${indexLectie}: ${h1}`}</h1>
                  <H2 h2text="Mișcarea de rotație uniformă" indexH2={indexH2("Mișcarea de rotație uniformă")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Mișcarea de rotație</strong> este mișcarea unui corp în jurul unei axe fixe, în care toate punctele corpului descriu cercuri concentrice.
                  </p>
                  <p>
                  <strong>Mișcarea de rotație uniformă</strong> înseamnă că viteza unghiulară 𝜔 este constantă.
                  </p>
                  <p>
                    <strong>Mărimi caracteristice:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Deplasare unghiulară 𝜃</strong>: unghiul (în radiani) cu care a fost rotit corpul.</li>
                    <li>
                        <div
                            className="inline-flex items-center gap-1">
                            <strong>
                                Viteză unghiulară 𝜔 =  
                            </strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus"><strong><i>𝑑𝜃</i></strong></p>
                                <p className="fractie-jos"><strong><i>𝑑𝑡</i></strong></p>
                            </div>
                            : cât de repede se rotește corpul.
                        </div>
                    </li>
                    <li>
                        <div
                            className="inline-flex items-center gap-1">
                            <strong>Accelerație unghiulară 𝛼 = </strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus"><strong><i>𝑑𝜔</i></strong></p>
                                <p className="fractie-jos"><strong><i>𝑑𝑡</i></strong></p>
                            </div>
                            : modificarea vitezei unghiulare în timp.
                        </div>
                    </li>
                  </ul>
                  <H2 h2text="Momentul de inerție" indexH2={indexH2("Momentul de inerție")} indexLectie={indexLectie}></H2>
                  <p>
                    <strong>Momentul de inerție 𝐼</strong> este mărimea fizică ce măsoară rezistența unui corp la schimbarea stării sale de rotație în jurul unei axe.
                  </p>
                  <p>
                  Formula generală:
                  </p>
                  <p
                    className="inline-flex items-end justify-center gap-1 w-full">
                        <strong><i>𝐼 = ∑ 𝑚<sub>i</sub> r<sub>i</sub><sup>2</sup></i></strong>
                  </p>
                  <ul className={ulClass}>
                    <li>𝑚<sub>𝑖</sub> este masa fiecărei particule a corpului,</li>
                    <li>𝑟<sub>𝑖</sub> este distanța acesteia față de axa de rotație.</li>
                  </ul>
                  <p>Este echivalentul masei în mișcarea de translație.</p>
                  <H2 h2text="Legea momentului cinetic" indexH2={indexH2("Legea momentului cinetic")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Momentul cinetic</strong> (sau impulsul unghiular) 𝐿 este mărimea fizică ce caracterizează starea de mișcare de rotație a unui corp.
                  </p>
                  <p
                    className="inline-flex items-end justify-center gap-1 w-full">
                        <strong><i>𝐿 = 𝐼 ⋅ 𝜔</i></strong>
                  </p>
                  <p>
                  <strong>Legea momentului cinetic</strong> (analogia celei de-a doua legi a lui Newton):
                  </p>
                  <p
                    className="inline-flex items-end justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1">
                            <strong><i>∑ M = </i></strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus"><strong><i>𝑑𝐿</i></strong></p>
                                <p className="fractie-jos"><strong><i>𝑑𝑡</i></strong></p>
                            </div>
                        </div>
                  </p>
                  <ul className={ulClass}>
                    <li>∑ M este momentul rezultant al forțelor externe aplicate.</li>
                  </ul>
                  <H2 h2text="Conservarea momentului cinetic" indexH2={indexH2("Conservarea momentului cinetic")} indexLectie={indexLectie}></H2>
                  <p>
                  Dacă momentul rezultant al forțelor externe este zero, atunci momentul cinetic se <strong>conservă</strong>:
                  </p>
                  <p
                    className="inline-flex items-end justify-center gap-1 w-full">
                        <strong><i>𝐿 = constant sau 𝐼<sub>1</sub> ⋅ 𝜔<sub>1</sub> = 𝐼<sub>2</sub> ⋅ 𝜔<sub>2</sub></i></strong>
                  </p>
                  <p>
                  Aplicații:
                  </p>
                  <ul className={ulClass}>
                    <li>Patinatoarea care își strânge brațele și se rotește mai repede.</li>
                    <li>Sistemele planetare și formarea stelelor (conservarea impulsului unghiular).</li>
                  </ul>
                  <H2 h2text="Exemplu practic:" indexH2={indexH2("Exemplu practic:")} indexLectie={indexLectie}></H2>
                  <p>
                  O roată cu momentul de inerție <i>𝐼 = 2 kg ⋅ 𝑚<sup>2</sup></i> se rotește cu 𝜔 = 3 𝑟𝑎𝑑/𝑠. Calculați momentul cinetic.
                  </p>
                  <p>
                    𝐿 = 𝐼 ⋅ 𝜔 = 2 ⋅ 3 = 6 kg ⋅ m<sup>2</sup>/s
                  </p>
                  <p>
                  Mișcarea de rotație introduce noțiuni fundamentale precum momentul de inerție și momentul cinetic, esențiale în studiul fenomenelor reale, de la roți și turbine până la galaxii. Înțelegerea acestor concepte ne ajută să analizăm și să prezicem comportamentul corpurilor aflate în rotație.
                  </p>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={indexLectie} clickedLink={clickedLinkId} onLinkClick={updateClickedLinkId}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div>
  )
}

export default Page