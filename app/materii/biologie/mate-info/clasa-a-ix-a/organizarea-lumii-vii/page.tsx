"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-mate-info-9";
import { ulClass } from '@/app/class/ul';

const page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Organizarea lumii vii") + 1;

  const h2s = [
    "Proprietățile generale ale organismelor vii",
    "Nivelurile de organizare ale lumii vii"
  ]

  const h3s = [
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
              profil="mate info" 
              materie="biologie" 
              clasa={9} 
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
                  <h1>{`Capitolul ${indexLectie}: Organizarea lumii vii`}</h1>
                  <H2 h2text="Proprietățile generale ale organismelor vii" indexH2={indexH2("Proprietățile generale ale organismelor vii")} indexLectie={indexLectie}></H2>
                  <p>Organismele vii prezintă caracteristici fundamentale precum organizarea celulară, metabolismul, capacitatea de reproducere, 
                    creșterea și dezvoltarea, reacția la stimuli și adaptarea la mediu. Aceste proprietăți diferențiază organismele de materia anorganică 
                    și stau la baza diversității vieții pe Pământ.</p>
                  <H2 h2text="Nivelurile de organizare ale lumii vii" indexH2={indexH2("Nivelurile de organizare ale lumii vii")} indexLectie={indexLectie}></H2>
                  <p>Viața este organizată în structuri ierarhice, de la nivel molecular (ADN, proteine) 
                    la nivel celular, tisular, al organelor, sistemelor de organe și organismelor. 
                    Mai departe, organismele formează populații, ecosisteme și biosfera, interacționând în mod complex.</p>
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