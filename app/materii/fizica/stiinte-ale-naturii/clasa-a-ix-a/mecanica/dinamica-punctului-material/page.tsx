"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-mecanica-9";
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

  const h1 = "Dinamica punctului material"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Tipuri de interacțiuni fundamentale"],
    ["Legea I – Inerția", "Legea a II-a – Dinamica", "Legea a III-a – Acțiunea și reacțiunea"],
    ["Forța de frecare", "Tensiunea în fir"],
    ["Dacă nu există frecare", "Dacă există frecare"]
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
              profil="științe ale naturii" 
              materie="fizică" 
              clasa={9} 
              capitol="mecanică"
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
                  <h1>{`Capitolul ${indexLectie}: ${h1}`}</h1>
                  <H2 h2text="Forța și interacțiunile fundamentale" indexH2={indexH2("Forța și interacțiunile fundamentale")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Forța</strong> este o mărime fizică vectorială ce exprimă interacțiunea dintre corpuri și efectele acestor interacțiuni: schimbarea stării de mișcare sau deformarea corpurilor.
                  </p>
                  <H3 h3text="Tipuri de interacțiuni fundamentale:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Forța și interacțiunile fundamentale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Forța și interacțiunile fundamentale")].findIndex(h3 => h3 === "Tipuri de interacțiuni fundamentale") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Gravitațională</strong>: între corpuri cu masă (ex: atracția Pământului).</li>
                    <li><strong>Electromagnetică</strong>: între sarcini electrice sau magneți.</li>
                    <li><strong>Nucleară tare</strong>: între nucleoni în interiorul nucleului atomic.</li>
                    <li><strong>Nucleară slabă</strong>: implicată în dezintegrarea radioactivă.</li>
                  </ul>
                  <H2 h2text="Legile mișcării – Legile lui Newton" indexH2={indexH2("Legile mișcării – Legile lui Newton")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Legea I – Inerția:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Legile mișcării – Legile lui Newton")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Legile mișcării – Legile lui Newton")].findIndex(h3 => h3 === "Legea I – Inerția") : -1}></H3>
                  <p>
                  Un corp își menține starea de repaus sau de mișcare rectilinie uniformă dacă asupra sa nu acționează forțe sau dacă rezultanta forțelor este nulă.
                  </p>
                  <p>
                  <strong>Implicație</strong>: absența unei forțe nu înseamnă că un corp se oprește.
                  </p>
                  <H3 h3text="Legea a II-a – Dinamica:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Legile mișcării – Legile lui Newton")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Legile mișcării – Legile lui Newton")].findIndex(h3 => h3 === "Legea a II-a – Dinamica") : -1}></H3>
                  <p>
                  Rezultanta forțelor care acționează asupra unui corp este egală cu produsul dintre masa corpului și accelerația produsă:
                  </p>
                  <div
                    className="inline-flex items-center justify-center gap-1 w-full">
                    <p
                        className="inline-flex items-end justify-center gap-1 w-full">
                        <Vector simbol="F" denumire="rez"/><strong><i className="mx-1">= m ⋅ </i></strong>
                        <Vector simbol="a"/>
                    </p>
                  </div>
                  <H3 h3text="Legea a III-a – Acțiunea și reacțiunea:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Legile mișcării – Legile lui Newton")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Legile mișcării – Legile lui Newton")].findIndex(h3 => h3 === "Legea a III-a – Acțiunea și reacțiunea") : -1}></H3>
                  <p>
                  Dacă un corp A acționează asupra unui corp B cu o forță, atunci corpul B va reacționa asupra corpului A cu o forță de aceeași mărime, dar de sens contrar.
                  </p>
                  <H2 h2text="Frecarea și tensiunea" indexH2={indexH2("Frecarea și tensiunea")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Forța de frecare:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Frecarea și tensiunea")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Frecarea și tensiunea")].findIndex(h3 => h3 === "Forța de frecare") : -1}></H3>
                  <p>
                  Opune rezistență mișcării relative dintre două suprafețe aflate în contact.
                  </p>
                  <p
                    className="inline-flex items-end justify-center gap-1 w-full">
                    <strong><i>F<sub>f</sub> = 𝜇 ⋅ 𝑁</i></strong>
                  </p>
                  <ul className={ulClass}>
                    <li>𝜇 este coeficientul de frecare</li>
                    <li>𝑁 este reacțiunea normală</li>
                  </ul>
                  <H3 h3text="Tensiunea în fir:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Frecarea și tensiunea")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Frecarea și tensiunea")].findIndex(h3 => h3 === "Tensiunea în fir") : -1}></H3>
                  <p>
                  Este forța transmisă printr-un fir întins care trage sau susține un obiect. Este întotdeauna orientată de-a lungul firului.
                  </p>
                  <H2 h2text="Mișcarea pe plan înclinat" indexH2={indexH2("Mișcarea pe plan înclinat")} indexLectie={indexLectie}></H2>
                  <p>
                  Când un corp se află pe un plan înclinat, greutatea sa se descompune în două componente:
                  </p>
                  <ul className={ulClass}>
                    <li>paralelă cu planul: <strong><i>G<sub>tg</sub> = G ⋅ sin α</i></strong></li>
                    <li>perpendiculară pe plan: <strong><i>G<sub>N</sub> = G ⋅ cos α</i></strong></li>
                  </ul>
                  <H3 h3text="Dacă nu există frecare:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mișcarea pe plan înclinat")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mișcarea pe plan înclinat")].findIndex(h3 => h3 === "Dacă nu există frecare") : -1}></H3>
                  <p
                    className="inline-flex items-end justify-center gap-1 w-full">
                        <strong><i>a = g ⋅ sin α</i></strong>
                  </p>
                  <H3 h3text="Dacă există frecare:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mișcarea pe plan înclinat")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mișcarea pe plan înclinat")].findIndex(h3 => h3 === "Dacă există frecare") : -1}></H3>
                  <p
                    className="inline-flex items-end justify-center gap-1 w-full">
                        <strong><i>a = g ⋅ (sin α − μ ⋅ cos α)</i></strong>
                  </p>
                  <p>
                  Dinamica studiază mișcarea corpurilor sub acțiunea forțelor. Legile lui Newton oferă baza teoretică pentru înțelegerea și modelarea mișcărilor din viața de zi cu zi și din știință. Analiza corectă a forțelor implicate permite prezicerea comportamentului obiectelor aflate în mișcare sau în repaus.
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

export default page