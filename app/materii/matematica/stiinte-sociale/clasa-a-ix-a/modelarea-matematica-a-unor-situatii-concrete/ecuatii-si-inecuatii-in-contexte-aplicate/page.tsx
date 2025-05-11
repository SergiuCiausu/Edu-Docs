"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-modelarea-matematica-a-unor-situatii-concrete-9";
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

  const h1 = "Ecuații și inecuații în contexte aplicate"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Exemplul 1 – Costuri și venituri", "Exemplul 2 – Buget maxim"],
    ["Exemplul 3 – Perimetru", "Exemplul 4 – Arie"],
    ["Exemplul 5 – Situație practică"],
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
              materie="matematică" 
              clasa={9} 
              capitol="modelarea matematică a unor situații concrete"
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
                  <H2 h2text="Introducere" indexH2={indexH2("Introducere")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  În viața reală, multe situații pot fi descrise, analizate și rezolvate prin <strong>ecuații și inecuații</strong>. Folosirea acestor instrumente ne ajută să înțelegem și să prezicem comportamentul sistemelor economice, geometrice, sociale și tehnice.
                  </p>
                  <H2 h2text="Probleme de tip economic" indexH2={indexH2("Probleme de tip economic")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Ecuațiile și inecuațiile sunt utile pentru:
                  </p>
                  <ul className={ulClass}>
                    <li>stabilirea prețurilor</li>
                    <li>calcularea profitului</li>
                    <li>compararea ofertelor</li>
                    <li>optimizarea bugetului</li>
                  </ul>
                  <H3 h3text="Exemplul 1 – Costuri și venituri" indexH3={h3s[h2s.findIndex(h2 => h2 === "Probleme de tip economic")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Probleme de tip economic")].findIndex(h3 => h3 === "Exemplul 1 – Costuri și venituri") : -1}></H3>
                  <p>
                  <strong>Enunț</strong>: Un magazin vinde un produs cu 30 lei/bucată. Costul de achiziție este de 20 lei/buc. La câte produse vândute profitul ajunge la 500 lei?
                  </p>
                  <p>
                  Modelare cu ecuație:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        Profit = (Preț - Cost) ⋅ 𝑥 = 10𝑥
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        10𝑥 = 500 ⇒ 𝑥 = 50 produse
                  </p>
                  <H3 h3text="Exemplul 2 – Buget maxim" indexH3={h3s[h2s.findIndex(h2 => h2 === "Probleme de tip economic")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Probleme de tip economic")].findIndex(h3 => h3 === "Exemplul 2 – Buget maxim") : -1}></H3>
                  <p>
                  <strong>Enunț</strong>: Un elev vrea să cumpere cărți și caiete. O carte costă 40 lei, un caiet costă 10 lei. Are la dispoziție cel mult 150 lei. Câte cărți și caiete poate cumpăra?
                  </p>
                  <p>
                  Modelare cu inecuație:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        40𝑥 + 10𝑦 ≤ 150
                  </p>
                  <p>
                  Se rezolvă prin încercări sau grafic (reprezentarea zonei de soluții).
                  </p>
                  <H2 h2text="Probleme de tip geometric" indexH2={indexH2("Probleme de tip geometric")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Putem folosi ecuații pentru a afla dimensiuni necunoscute, perimetre, arii sau volume în funcție de anumite condiții.
                  </p>
                  <H3 h3text="Exemplul 3 – Perimetru" indexH3={h3s[h2s.findIndex(h2 => h2 === "Probleme de tip geometric")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Probleme de tip geometric")].findIndex(h3 => h3 === "Exemplul 3 – Perimetru") : -1}></H3>
                  <p>
                  <strong>Enunț</strong>: Lățimea unui dreptunghi este cu 3 cm mai mică decât lungimea. Dacă perimetrul este 34 cm, care sunt dimensiunile?
                  </p>
                  <p>
                  Modelare:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        Lungime = 𝑥, Lățime = 𝑥 - 3
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        P = 2(𝑥 + 𝑥 - 3) = 2(2𝑥 - 3) = 4𝑥 - 6
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        4𝑥 - 6 = 34 ⇒ 𝑥 = 10
                  </p>
                  <p>
                    Lungime = 10 cm, Lățime = 7 cm
                  </p>
                  <H3 h3text="Exemplul 4 – Arie" indexH3={h3s[h2s.findIndex(h2 => h2 === "Probleme de tip geometric")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Probleme de tip geometric")].findIndex(h3 => h3 === "Exemplul 4 – Arie") : -1}></H3>
                  <p>
                  <strong>Enunț</strong>: Aria unui triunghi este 60 cm². Baza este cu 4 cm mai mică decât înălțimea. Găsiți dimensiunile.
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                                𝐴 =  
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">𝑏 ⋅ ℎ</p>
                                <p className="fractie-jos text-center">2</p>
                            </div>
                              = 60, unde 𝑏 = ℎ - 4
                        </div>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">(ℎ - 4) ⋅ ℎ</p>
                                <p className="fractie-jos text-center">2</p>
                            </div>
                              = 60 ⇒ ℎ<sup>2</sup> - 4ℎ = 120 ⇒ ℎ<sup>2</sup> - 4ℎ - 120 = 0
                        </div>
                  </p>
                  <p>
                  Se rezolvă ecuația de gradul II → ℎ = 14 deci 𝑏 = 10
                  </p>
                  <H2 h2text="Modelarea cu ecuații și inecuații" indexH2={indexH2("Modelarea cu ecuații și inecuații")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Pași pentru modelare:</strong>
                  </p>
                  <ol className={olClass}>
                    <li>Definim necunoscutele (ex: „x = numărul de bilete”).</li>
                    <li>Exprimăm relațiile din problemă sub formă de ecuații sau inecuații.</li>
                    <li>Rezolvăm algebric.</li>
                    <li>Verificăm interpretarea în context.</li>
                  </ol>
                  <H3 h3text="Exemplul 5 – Situație practică" indexH3={h3s[h2s.findIndex(h2 => h2 === "Modelarea cu ecuații și inecuații")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Modelarea cu ecuații și inecuații")].findIndex(h3 => h3 === "Exemplul 5 – Situație practică") : -1}></H3>
                  <p>
                  <strong>Enunț</strong>: O firmă are un buget de cel mult 10.000 lei pentru promovare. Un anunț TV costă 2500 lei, un anunț online costă 500 lei. Firma dorește cel puțin 3 apariții TV. Ce combinații sunt posibile?
                  </p>
                  <p>
                  Modelare:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        2500𝑥 + 500𝑦 ≤ 10000, 𝑥 ≥ 3
                  </p>
                  <p>
                    Soluțiile sunt perechile (x, y) întregi care satisfac ambele condiții.
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