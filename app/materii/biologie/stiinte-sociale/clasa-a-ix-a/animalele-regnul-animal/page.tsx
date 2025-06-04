"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-stiinte-ale-naturii-9";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Animalele – regnul animal") + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === "Animalele – regnul animal")].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Organisme unicelulare", "Organisme pluricelulare"],
    ["Sistemul digestiv", "Sistemul respirator", "Sistemul circulator", "Sistemul nervos", "Sistemul reproducător"],
    ["Reproducerea asexuată", "Reproducerea sexuată"],
    ["Oviparitate", "Ovoviviparitate", "Viviparitate"],
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
              profil="științe sociale" 
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
                  <h1>{`Capitolul ${indexLectie}: Animalele – regnul animal`}</h1>
                  <p>
                  Animalele sunt organisme pluricelulare, eucariote, heterotrofe, adaptate diverselor medii de viață. Acestea prezintă o mare varietate de forme, dimensiuni și niveluri de organizare, de la organisme simple, unicelulare, până la vertebrate complexe. În această lecție vom analiza structura și funcțiile animalelor, sistemele de organe și mecanismele lor de reproducere.
                  </p>
                  <H2 h2text="Structura și funcțiile animalelor" indexH2={indexH2("Structura și funcțiile animalelor")} indexLectie={indexLectie}></H2>
                  <p>
                  Animalele au o organizare internă complexă, formată din țesuturi și organe specializate. Funcțiile vitale sunt susținute de sisteme de organe care lucrează împreună pentru a menține echilibrul intern și a permite supraviețuirea în diferite condiții de mediu.
                  </p>
                  <H2 h2text="Tipuri de organisme animale (unicelulare și pluricelulare)" indexH2={indexH2("Tipuri de organisme animale (unicelulare și pluricelulare)")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Organisme unicelulare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de organisme animale (unicelulare și pluricelulare)")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tipuri de organisme animale (unicelulare și pluricelulare)")].findIndex(h3 => h3 === "Organisme unicelulare") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Formate dintr-o singură celulă (ex: <strong>protozoare</strong> precum amiba, parameciul).</li>
                        <li>Efectuează toate funcțiile vitale în interiorul aceleiași celule.</li>
                        <li>Se înmulțesc adesea asexuat, prin diviziune binară.</li>
                  </ul>
                  <H3 h3text="Organisme pluricelulare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de organisme animale (unicelulare și pluricelulare)")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tipuri de organisme animale (unicelulare și pluricelulare)")].findIndex(h3 => h3 === "Organisme pluricelulare") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Constituite din milioane sau miliarde de celule diferențiate.</li>
                        <li>Celulele formează țesuturi, organe și sisteme.</li>
                        <li>Exemple: viermi, insecte, pești, păsări, mamifere.</li>
                  </ul>
                  <H2 h2text="Sistemele de organe ale animalelor" indexH2={indexH2("Sistemele de organe ale animalelor")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Sistemul digestiv" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemele de organe ale animalelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemele de organe ale animalelor")].findIndex(h3 => h3 === "Sistemul digestiv") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Funcția: descompunerea alimentelor și absorbția nutrienților.</li>
                        <li>Poate fi incomplet (un singur orificiu – ex: planaria) sau complet (cu gură și anus – ex: mamifere).</li>
                  </ul>
                  <H3 h3text="Sistemul respirator" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemele de organe ale animalelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemele de organe ale animalelor")].findIndex(h3 => h3 === "Sistemul respirator") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Asigură schimbul de gaze (oxigen și dioxid de carbon).</li>
                        <li>Tipuri: respirație branhială (pești), traheală (insecte), pulmonară (mamifere).</li>
                  </ul>
                  <H3 h3text="Sistemul circulator" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemele de organe ale animalelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemele de organe ale animalelor")].findIndex(h3 => h3 === "Sistemul circulator") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Transportă oxigen, nutrienți, hormoni și deșeuri metabolice.</li>
                        <li>Poate fi deschis (ex: insecte) sau închis (ex: vertebrate).</li>
                  </ul>
                  <H3 h3text="Sistemul nervos" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemele de organe ale animalelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemele de organe ale animalelor")].findIndex(h3 => h3 === "Sistemul nervos") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Coordonează activitatea organismului și recepționează stimuli.</li>
                        <li>Poate fi difuz (ex: cnidari), inelar (ex: viermi) sau centralizat (ex: vertebrate).</li>
                  </ul>
                  <H3 h3text="Sistemul reproducător" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemele de organe ale animalelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemele de organe ale animalelor")].findIndex(h3 => h3 === "Sistemul reproducător") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Asigură perpetuarea speciei.</li>
                        <li>Poate funcționa pe cale asexuată sau sexuală, în funcție de specie.</li>
                  </ul>
                  <H2 h2text="Reproducerea animalelor" indexH2={indexH2("Reproducerea animalelor")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Reproducerea asexuată" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reproducerea animalelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reproducerea animalelor")].findIndex(h3 => h3 === "Reproducerea asexuată") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Implică un singur organism părinte.</li>
                        <li>Nu implică fecundație.</li>
                        <li>Forme: diviziune binară, înmugurire (ex: hidra), fragmentare (ex: planaria).</li>
                        <li>Produce indivizi identici genetic (cloni).</li>
                  </ul>
                  <H3 h3text="Reproducerea sexuată" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reproducerea animalelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reproducerea animalelor")].findIndex(h3 => h3 === "Reproducerea sexuată") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Implică două organisme de sex diferit.</li>
                        <li>Necesită fecundație (uniunea unui ovul cu un spermatozoid).</li>
                        <li>Asigură variabilitate genetică și adaptabilitate.</li>
                  </ul>
                  <H2 h2text="Tipuri de dezvoltare: ouă și viviparitate" indexH2={indexH2("Tipuri de dezvoltare: ouă și viviparitate")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Oviparitate" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de dezvoltare: ouă și viviparitate")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tipuri de dezvoltare: ouă și viviparitate")].findIndex(h3 => h3 === "Oviparitate") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Ouăle sunt depuse în mediul extern.</li>
                        <li>Embriogeneza are loc în afara corpului mamei.</li>
                        <li>Exemple: păsări, reptile, amfibieni, insecte.</li>
                  </ul>
                  <H3 h3text="Ovoviviparitate" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de dezvoltare: ouă și viviparitate")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tipuri de dezvoltare: ouă și viviparitate")].findIndex(h3 => h3 === "Ovoviviparitate") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Ouăle sunt reținute în corpul mamei până la eclozare.</li>
                        <li>Hrănirea embrionului se face din rezervele oului.</li>
                        <li>Exemple: unele specii de rechini, șerpi.</li>
                  </ul>
                  <H3 h3text="Viviparitate" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de dezvoltare: ouă și viviparitate")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tipuri de dezvoltare: ouă și viviparitate")].findIndex(h3 => h3 === "Viviparitate") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Embriogeneza are loc în uter, iar embrionul este hrănit direct de la mamă (prin placentă).</li>
                        <li>Exemplu: mamifere.</li>
                  </ul>
                  <p>
                  Animalele pot fi unicelulare sau multicelulare. Au sisteme de organe care realizează funcțiile vitale. Reproducerea poate fi asexuată (la organisme simple) sau sexuală (la organisme complexe). Tipul de dezvoltare variază de la depunerea ouălor la nașterea puilor vii.
                  </p>
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

export default Page