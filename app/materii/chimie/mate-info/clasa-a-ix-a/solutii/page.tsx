"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-chimie-9";
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

  const h1 = "Soluții"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    ["Concentrația procentuală în masă (c%)", "Concentrația molară (molaritatea, M)"],
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
              clasa={9} 
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
                  <H2 h2text="Ce este o soluție?" indexH2={indexH2("Ce este o soluție?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O <strong>soluție</strong> este un amestec omogen format din două sau mai multe componente:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Solvent</strong> – componenta majoritară (de obicei lichidul, ex: apa);</li>
                    <li><strong>Solvat</strong> – componenta dizolvată (solid, lichid sau gaz).</li>
                  </ul>
                  <H2 h2text="Ce este concentrația?" indexH2={indexH2("Ce este concentrația?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Concentrația</strong> exprimă <strong>cât solvat</strong> este dizolvat într-o anumită cantitate de solvent sau soluție.
                  </p>
                  <p>
                  Este un mod de a măsura <strong>tăria</strong> unei soluții.
                  </p>
                  <H2 h2text="Tipuri de concentrație utilizate" indexH2={indexH2("Tipuri de concentrație utilizate")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Concentrația procentuală în masă (c%)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de concentrație utilizate")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tipuri de concentrație utilizate")].findIndex(h3 => h3 === "Concentrația procentuală în masă (c%)") : -1}></H3>
                  <p>
                  Reprezintă <strong>masa de solvat</strong> exprimată în procente (%) față de <strong>masa totală a soluției</strong>.
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                                <strong>c% =  </strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>𝑚<sub>solvat</sub></strong></p>
                                <p className="fractie-jos text-center"><strong>𝑚<sub>soluție</sub></strong></p>
                            </div>
                            <strong>⋅ 100</strong>
                        </div>
                  </p>
                  <ul className={ulClass}>
                    <li>𝑚<sub>solvat</sub> = masa de substanță dizolvată (g)</li>
                    <li>𝑚<sub>soluție</sub> = 𝑚<sub>solvat</sub> + 𝑚<sub>solvent</sub></li>
                  </ul>
                  <H3 h3text="Concentrația molară (molaritatea, M)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de concentrație utilizate")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tipuri de concentrație utilizate")].findIndex(h3 => h3 === "Concentrația molară (molaritatea, M)") : -1}></H3>
                  <p>
                  Reprezintă <strong>numărul de moli de solvat</strong> dizolvați într-un <strong>litru de soluție</strong>.
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>𝑛<sub>solvat</sub></strong></p>
                                <p className="fractie-jos text-center"><strong>𝑉<sub>soluție</sub></strong></p>
                            </div>
                        </div>
                  </p>
                  <ul className={ulClass}>
                    <li>𝑛<sub>solvat</sub> = numărul de moli de solut</li>
                    <li>𝑉<sub>soluție</sub> = volumul soluției (în litri, L)</li>
                  </ul>
                  <H2 h2text="Importanța cunoașterii concentrației" indexH2={indexH2("Importanța cunoașterii concentrației")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li><strong>Medicină</strong>: prepararea soluțiilor injectabile (ex: ser fiziologic 0,9%);</li>
                    <li><strong>Chimie analitică</strong>: dozarea exactă a reactivilor;</li>
                    <li><strong>Industrie alimentară</strong>: standardizarea rețetelor;</li>
                    <li><strong>Mediu</strong>: controlul concentrației poluanților în apă/aer.</li>
                  </ul>
                  <H2 h2text="Observații și greșeli frecvente" indexH2={indexH2("Observații și greșeli frecvente")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>Nu confunda <strong>masa soluției</strong> cu <strong>masa solventului</strong>;</li>
                    <li>Concentrația procentuală are întotdeauna unitatea %, în timp ce concentrația molară se exprimă în <strong>mol/L</strong>;</li>
                    <li>La calcule, verifică unitățile și conversiile (ex: mL → L, g → kg dacă e cazul).</li>
                  </ul>
                  <p>
                  Concentrația arată cât solut este prezent într-o cantitate de solvent sau soluție. Cele mai frecvente metode: procentuală în masă și molară. Formulele sunt esențiale pentru calcule și pregătirea corectă a soluțiilor.
                  </p>
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