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

const page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Algoritmi și structuri de control"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Exemple de domenii unde se aplică informatica"],
    [""],
    ["Hardware (componente fizice)", "Software (componente logice)"],
    [""],
    ["Etica în informatică presupune", "Securitatea informatică include"],
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
                  <H2 h2text="Ce este un algoritm?" indexH2={indexH2("Ce este un algoritm?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un <strong>algoritm</strong> este o succesiune finită de pași (instrucțiuni) clari și neambigui, care duc la rezolvarea unei probleme sau la obținerea unui rezultat dorit. Algoritmii sunt fundamentul informaticii și pot fi implementați în diverse limbaje de programare pentru a automatiza sarcinile.
                  </p>
                  <H2 h2text="Caracteristicile unui algoritm" indexH2={indexH2("Caracteristicile unui algoritm")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un algoritm trebuie să îndeplinească următoarele condiții:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Finitudine</strong> – algoritmul trebuie să se termine după un număr limitat de pași.</li>
                    <li><strong>Claritate</strong> – fiecare pas trebuie să fie clar și lipsit de ambiguitate.</li>
                    <li><strong>Determinism</strong> – pentru aceleași date de intrare, algoritmul trebuie să producă același rezultat.</li>
                    <li><strong>Eficiență</strong> – algoritmul trebuie să rezolve problema în timp și spațiu rezonabil.</li>
                  </ul>
                  <H2 h2text="Exemple de algoritmi simpli" indexH2={indexH2("Exemple de algoritmi simpli")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>
                        <strong>Algoritm pentru a calcula suma a două numere:</strong>
                        <ol className={olClass}>
                            <li>Citește numărul A</li>
                            <li>Citește numărul B</li>
                            <li>Calculează suma S = A + B</li>
                            <li>Afișează S</li>
                        </ol>
                    </li>
                    <li>
                        <strong>Algoritm pentru a verifica dacă un număr este par:</strong>
                        <ol className={olClass}>
                            <li>Citește numărul N</li>
                            <li>Dacă N % 2 = 0, afișează „Numărul este par”</li>
                            <li>Altfel, afișează „Numărul este impar”</li>
                        </ol>
                    </li>
                  </ul>
                  <H2 h2text="Domenii de aplicare ale algoritmilor" indexH2={indexH2("Domenii de aplicare ale algoritmilor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Algoritmii se aplică într-o gamă largă de domenii:
                  </p>
                  <ul className={ulClass}>
                    <li>Sortarea și căutarea datelor</li>
                    <li>Criptografie</li>
                    <li>Inteligență artificială</li>
                    <li>Jocuri și simulări</li>
                    <li>Medicină, economie, transport etc.</li>
                  </ul>
                  <H2 h2text="Importanța algoritmilor în informatică" indexH2={indexH2("Importanța algoritmilor în informatică")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  În orice program informatic, algoritmul este partea logică esențială. Un programator bun nu scrie doar cod, ci concepe mai întâi un algoritm clar, eficient și corect, pe care apoi îl implementează.
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