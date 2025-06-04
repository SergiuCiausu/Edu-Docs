"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-info-11";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';
import { titluriCapitole } from '@/app/data/capitole-fizica-mate-info-capitole-10';

const Page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Grafuri"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Ce este un graf?", "Termeni esențiali"],
    ["Matricea de adiacență", "Lista de adiacență"],
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
              materie="informatică" 
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
                  <H2 h2text="Noțiuni fundamentale despre grafuri" indexH2={indexH2("Noțiuni fundamentale despre grafuri")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Ce este un graf?" indexH3={h3s[h2s.findIndex(h2 => h2 === "Noțiuni fundamentale despre grafuri")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Noțiuni fundamentale despre grafuri")].findIndex(h3 => h3 === "Ce este un graf?") : -1}></H3>
                  <p>
                  Un <strong>graf</strong> este o structură matematică formată din două mulțimi:
                  </p>
                  <ul className={ulClass}>
                    <li>o mulțime de noduri (vârfuri), notată cu n</li>
                    <li>o mulțime de muchii/arce, notată cu m, care leagă două vârfuri.</li>
                  </ul>
                  <p>
                  Tipuri de grafuri:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Graf neorientat</strong> – muchiile nu au direcție (ex: rețea de prietenii)</li>
                    <li><strong>Graf orientat</strong> – arcele au direcție (ex: linkuri web)</li>
                  </ul>
                  <H3 h3text="Termeni esențiali:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Noțiuni fundamentale despre grafuri")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Noțiuni fundamentale despre grafuri")].findIndex(h3 => h3 === "Termeni esențiali") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Gradul</strong> unui vârf: numărul de muchii incidente</li>
                    <li><strong>Lungimea unui drum</strong>: numărul de muchii/arce parcurse</li>
                    <li><strong>Ciclu</strong>: drum închis</li>
                    <li><strong>Graf conex</strong>: există un drum între orice două noduri</li>
                  </ul>
                  <H2 h2text="Reprezentarea grafurilor în memorie" indexH2={indexH2("Reprezentarea grafurilor în memorie")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Matricea de adiacență:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reprezentarea grafurilor în memorie")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reprezentarea grafurilor în memorie")].findIndex(h3 => h3 === "Matricea de adiacență") : -1}></H3>
                  <div className="code-container">
                    <p>
                        <code>
                        int a[100][100];
                        </code>
                    </p>
                  </div>
                  <p>
                  a[i][j] = 1 dacă există muchie/arcul între i și j
                  </p>
                  <H3 h3text="Lista de adiacență:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reprezentarea grafurilor în memorie")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reprezentarea grafurilor în memorie")].findIndex(h3 => h3 === "Lista de adiacență") : -1}></H3>
                  <div className="code-container">
                    <p>
                        <code>
                            {`int lista[100];`}
                        </code>
                    </p>
                  </div>
                  <p>
                  Pentru fiecare nod, reținem lista vecinilor
                  </p>
                  <p>
                  Lista de adiacență este eficientă în grafuri sparte (cu puține muchii)
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

export default Page