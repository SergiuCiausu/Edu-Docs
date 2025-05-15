"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-romana-mate-info-10";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';

const page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);
  
  const h1 = "Limba și literatura română în spațiul culturii. Devenirea cititorului"

  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
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
              materie="limba și literatura română" 
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
                  <h1>{`${titluri.length > 1 ? `Capitolul ${indexLectie}: ` : ""}${h1}`}</h1>
                  <H2 h2text="Ce este vocabularul?" indexH2={indexH2("Ce este vocabularul?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Vocabularul</strong> unei limbi reprezintă totalitatea cuvintelor folosite de vorbitorii acelei limbi. El este în continuă transformare și îmbogățire, reflectând evoluția culturii și societății.
                  </p>
                  <H2 h2text="Structura vocabularului limbii române" indexH2={indexH2("Structura vocabularului limbii române")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Vocabularul limbii române se împarte în mai multe categorii:
                  </p>
                  <p>
                    <strong>
                        Fondul principal lexical (FPL):
                    </strong>
                  </p>
                  <p>
                    Este format din cuvintele de bază, moștenite din limba latină sau formate pe teritoriul românesc. Exemple: mamă, apă, frate, lumină, inimă, mână.
                  </p>
                  <p>
                    <strong>
                        Fondul secundar (vocabularul derivat, compus, împrumutat):
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li>
                        <strong>Cuvinte derivate</strong>: formate prin adăugarea de prefixe și sufixe.
                        <p>
                            Exemple: florărie (de la floare), învățător (de la a învăța).
                        </p>
                    </li>
                    <li>
                        <strong>Cuvinte compuse</strong>: formate din alăturarea a două sau mai multe cuvinte.
                        <p>
                            Exemple: bunăvoință, apărare, mânăstire.
                        </p>
                    </li>
                    <li>
                        <strong>Cuvinte împrumutate</strong>: provin din alte limbi (franceză, engleză, greacă, maghiară etc.)
                        <p>
                            Exemple: telefon (din franceză), fotbal (din engleză), stilou (din franceză).
                        </p>
                    </li>
                  </ul>
                  <H2 h2text="Criterii de clasificare a cuvintelor din vocabular" indexH2={indexH2("Criterii de clasificare a cuvintelor din vocabular")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Cuvintele pot fi clasificate astfel:
                  </p>
                  <p>
                    <strong>
                        După origine:
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Moștenite din latină: tată, soare, frate.</li>
                    <li>Împrumutate: tren, telefon, computer.</li>
                    <li>Creații interne: înfrumuseța, răspândi.</li>
                  </ul>
                  <p>
                    <strong>
                        După frecvență și răspândire:
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Cuvinte uzuale: mâncare, școală, casă.</li>
                    <li>Cuvinte regionale (dialectale): fain (în Ardeal), oloi (pentru „ulei”).</li>
                    <li>Cuvinte arhaice sau învechite: domnie, călare, ispravă.</li>
                  </ul>
                  <p>
                    <strong>
                        După sfera de utilizare:
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Termeni generali: copil, munte, apă.</li>
                    <li>Termeni de specialitate: vector, ecuație, genotip.</li>
                  </ul>
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