"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-chimie-10";
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

  const h1 = "Noțiuni și legi fundamentale ale chimiei"
  
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
              profil="științe sociale" 
              materie="chimie" 
              clasa={10} 
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
                  <H2 h2text="Ce este legea conservării masei?" indexH2={indexH2("Ce este legea conservării masei?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Această lege a fost enunțată pentru prima dată în 1789 de <strong>Antoine Lavoisier</strong>, părintele chimiei moderne.
                  </p>
                  <p>
                  Formularea legii:
                  </p>
                  <p>
                  „Într-un sistem chimic izolat, masa totală a reactivilor este egală cu masa totală a produselor de reacție.”
                  </p>
                  <p>
                  Altfel spus, <strong>masa se conservă</strong> – nu se creează și nu se distruge materie într-o reacție chimică, ci doar se transformă.
                  </p>
                  <H2 h2text="Exemplu simplu" indexH2={indexH2("Exemplu simplu")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Reacție:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                    Mg + O<sub>2</sub> → MgO
                  </p>
                  <p>
                  Într-un sistem închis, dacă se ard 24 g de magneziu cu 16 g de oxigen, rezultă:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        Masa MgO = 24g + 16g = 40g
                  </p>
                  <p>
                  Aceasta confirmă că:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-fulls">
                    m<sub>reactivi</sub> = m<sub>produși</sub>
                  </p>
                  <H2 h2text="Implicații ale legii în chimie" indexH2={indexH2("Implicații ale legii în chimie")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Legea conservării masei:
                  </p>
                  <ul className={ulClass}>
                    <li>Este <strong>baza echilibrării ecuațiilor chimice</strong>;</li>
                    <li>Se aplică în toate reacțiile chimice, în special în cele desfășurate în <strong>sisteme închise</strong>;</li>
                    <li>Este <strong>fundamentală</strong> în calculul chimic (stoichiometrie);</li>
                    <li>Asigură predicția <strong>corectă a cantităților</strong> de substanță implicate într-un proces.</li>
                  </ul>
                  <H2 h2text="Aplicație practică – problemă" indexH2={indexH2("Aplicație practică – problemă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Enunț:</strong>
                  </p>
                  <p>
                  Se reacționează 10 g de zinc cu 20 g de acid clorhidric, obținându-se clorură de zinc și hidrogen gazos. După reacție, s-au colectat 1 g de hidrogen. Ce masă de clorură de zinc s-a format?
                  </p>
                  <p>
                    <strong>Rezolvare:</strong>
                  </p>
                  <p>
                    m<sub>reactivi</sub> = 10g + 20g = 30g
                  </p>
                  <p>
                    m<sub>produși</sub> = m<sub>ZnCl<sub>2</sub></sub> + 1g ⇒ m<sub>ZnCl<sub>2</sub></sub> = 30g - 1g = 29g
                  </p>
                  <H2 h2text="Verificare experimentală" indexH2={indexH2("Verificare experimentală")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un exemplu școlar clasic de verificare este reacția între sulfat de cupru și hidroxid de sodiu într-un balon Erlenmeyer închis.s
                  </p>
                  <p>
                  După reacție, masa totală rămâne constantă – elevii pot cântări înainte și după reacție.
                  </p>
                  <p>
                  Legea conservării masei afirmă că masa totală a reactivilor = masa totală a produșilor;
                  </p>
                  <p>
                  Este esențială pentru echilibrarea ecuațiilor și stoichiometrie;
                  </p>
                  <p>
                  Se aplică în toate reacțiile chimice, indiferent de tipul lor;
                  </p>
                  <p>
                  Confirmă că materia nu dispare, ci doar se transformă.
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