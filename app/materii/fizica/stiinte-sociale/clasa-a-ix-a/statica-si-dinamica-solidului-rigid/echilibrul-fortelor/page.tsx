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

const page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Echilibrul forțelor"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
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
              profil="științe sociale" 
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
                  <H2 h2text="Condiții de echilibru pentru un punct material" indexH2={indexH2("Condiții de echilibru pentru un punct material")} indexLectie={indexLectie}></H2>
                  <p>
                  Un <strong>punct material</strong> este considerat în <strong>echilibru</strong> atunci când <strong>rezultanta tuturor forțelor</strong> care acționează asupra sa este zero.
                  </p>
                  <p>
                    <strong>Condiție de echilibru:</strong>
                  </p>
                  <p
                    className="inline-flex items-end justify-center gap-1 w-full">
                    <Vector simbol="R"/>
                    <strong><i> = </i></strong>
                    <Vector simbol="F" denumire="1"/>
                    <strong><i> + </i></strong>
                    <Vector simbol="F" denumire="2"/>
                    <strong><i> + ... + </i></strong>
                    <Vector simbol="F" denumire="n"/>
                    <strong><i> = </i></strong>
                    <Vector simbol="0"/>
                  </p>
                  <p>
                  Această condiție implică:
                  </p>
                  <ul className={ulClass}>
                    <li>Forțele sunt aplicate în același plan (plan paralel).</li>
                    <li>Nu există accelerație; punctul rămâne în repaus sau se mișcă rectiliniu uniform (după principiul I al lui Newton).</li>
                  </ul>
                  <H2 h2text="Momentele forțelor" indexH2={indexH2("Momentele forțelor")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Momentul</strong> unei forțe față de un punct (O) este o măsură a tendinței forței de a roti un corp în jurul acelui punct.
                  </p>
                  <p>
                  Definiție:
                  </p>
                  <p
                    className="inline-flex items-end justify-center gap-1 w-full">
                        <strong><i>M = 𝐹 ⋅ 𝑑</i></strong>
                  </p>
                  <ul className={ulClass}>
                    <li>𝐹 este intensitatea forței,</li>
                    <li>𝑑 este <strong>brațul forței</strong> – distanța de la punctul de aplicare la axa de rotație, măsurată perpendicular pe direcția forței.</li>
                  </ul>
                  <p>
                    <strong>Sensul momentului:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Pozitiv</strong> (sens trigonometric) – rotire spre stânga</li>
                    <li><strong>Negativ</strong> (sens orar) – rotire spre dreapta</li>
                  </ul>
                  <H2 h2text="Echilibrul solidului rigid" indexH2={indexH2("Echilibrul solidului rigid")} indexLectie={indexLectie}></H2>
                  <p>
                  Un <strong>solid rigid</strong> este în echilibru atunci când îndeplinește simultan două condiții fundamentale:
                  </p>
                  <ol className={olClass}>
                    <li>
                        <strong>Echilibru de translație:</strong>
                        <p
                            className="inline-flex items-end justify-center gap-1 w-full">
                                <Vector simbol="R"/>
                                <strong><i> = ∑</i></strong>
                                <Vector simbol="F" denumire="i"/>
                                <strong><i> = </i></strong>
                                <Vector simbol="0"/>
                        </p>
                    </li>
                    <li>
                        <strong>Echilibru de rotație:</strong>
                        <p
                            className="inline-flex items-end justify-center gap-1 w-full">
                                <strong><i>∑ M<sub>i</sub> = 0</i></strong>
                        </p>
                    </li>
                  </ol>
                  <p>
                  Aceasta înseamnă că:
                  </p>
                  <ul className={ulClass}>
                    <li>Forțele care acționează asupra solidului se anulează între ele vectorial.</li>
                    <li>Momentele acestor forțe față de un punct (sau axă) se anulează și ele.</li>
                  </ul>
                  <H2 h2text="Exemple de aplicații:" indexH2={indexH2("Exemple de aplicații:")} indexLectie={indexLectie}></H2>
                  <ol className={olClass}>
                    <li>O bară orizontală suspendată de două corzi, aflată în echilibru – se aplică ambele condiții.</li>
                    <li>O scară sprijinită de un perete fără a aluneca – forțele de reacțiune și greutatea trebuie analizate cu momente.</li>
                  </ol>
                  <p>
                  Echilibrul corpurilor este esențial în arhitectură, inginerie, biomecanică și multe alte domenii. Înțelegerea și aplicarea corectă a <strong>forțelor</strong> și a <strong>momentelor</strong> permite analiza sistemelor statice și previne colapsul structurilor.|
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

export default page