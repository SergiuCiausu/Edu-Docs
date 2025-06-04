"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-info-9";
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

  const h1 = "Limbaje de programare"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
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
              materie="informatică" 
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
                  <H2 h2text="Ce este un limbaj de programare?" indexH2={indexH2("Ce este un limbaj de programare?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Un <strong>limbaj de programare</strong> este un sistem de notație formală folosit pentru a da instrucțiuni unui calculator. Printr-un limbaj de programare, putem scrie programe care rezolvă probleme, manipulează date sau controlează hardware-ul.
                  </p>
                  <H2 h2text="Ce este C++?" indexH2={indexH2("Ce este C++?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  C++ este un limbaj de programare de nivel înalt, derivat din limbajul C, cu suport pentru <strong>programare procedurală</strong> și <strong>programare orientată pe obiecte</strong>. A fost dezvoltat de Bjarne Stroustrup în anii 1980 și este folosit extensiv în aplicații software, jocuri, sisteme de operare și în domenii tehnice și științifice.
                  </p>
                  <H2 h2text="Avantajele limbajului C++" indexH2={indexH2("Avantajele limbajului C++")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>Este rapid și eficient.</li>
                    <li>Permite <strong>control detaliat asupra memoriei</strong>.</li>
                    <li>Suportă <strong>programarea modulară și pe obiecte</strong>.</li>
                    <li>Este <strong>portabil</strong> – codul poate fi rulat pe diferite platforme.</li>
                    <li>Este <strong>compatibil cu C</strong>, ceea ce înseamnă că multe programe scrise în C pot fi compilate și în C++.</li>
                  </ul>
                  <H2 h2text="Componentele unui program C++" indexH2={indexH2("Componentele unui program C++")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un program simplu în C++ conține următoarele elemente de bază:
                  </p>
                  <div
                    className="code-container">
                    <p>
                        <code>{`#include <iostream>`}</code>
                    </p>
                    <p>
                        <code>using namespace std;</code>
                    </p>
                    <p>
                        <code>int main() {`{`}</code>
                    </p>
                    <p
                        className="flex flex-col gap-1">
                        <code className="pl-8">{`cout << "Salut, lume!";`}</code>
                        <code className="pl-8">return 0;</code>
                    </p>
                    <p>
                        <code>{`}`}</code>
                    </p>
                    <ul className={ulClass}>
                        <li><code>{`#include <iostream>`}</code> – permite folosirea funcțiilor de intrare/ieșire.</li>
                        <li><code>using namespace std;</code> – folosește spațiul de nume standard.</li>
                        <li><code>int main()</code> – punctul de pornire al programului.</li>
                        <li><code>{`cout <<`}</code> – instrucțiune de afișare.</li>
                        <li><code>return 0;</code> – încheie programul și transmite că s-a terminat cu succes.</li>
                    </ul>
                  </div>
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