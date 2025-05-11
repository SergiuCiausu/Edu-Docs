"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-istorie-10";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';
import { titluriCapitole } from '@/app/data/capitole-fizica-mate-info-capitole-10';

const page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Economie, societate și organizare politică în Evul Mediu"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
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
              profil="filologie" 
              materie="istorie" 
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
                  <H2 h2text="Economia în societatea medievală" indexH2={indexH2("Economia în societatea medievală")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  În Evul Mediu, economia europeană a fost predominant agrară, fiind bazată pe exploatarea pământului. Marea majoritate a populației trăia la țară și lucra în cadrul <strong>moșiilor feudale</strong>. Activitatea economică era organizată în jurul domeniului feudal, care includea:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Rezerva seniorială (terra dominica)</strong> – terenul exploatat direct de senior;</li>
                    <li><strong>Terenurile țăranilor dependenți (terra servilis)</strong> – lucrate în schimbul unor obligații față de senior;</li>
                    <li><strong>Păduri, pășuni, mori, ateliere</strong> etc., care asigurau autosuficiența domeniului.</li>
                  </ul>
                  <H2 h2text="Tipuri de țăran medieval" indexH2={indexH2("Tipuri de țăran medieval")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Țăranii constituiau majoritatea populației și se împărțeau în:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Țărani liberi</strong>, care își lucrau propriul pământ, dar puteau avea și obligații față de seniori;</li>
                    <li><strong>Iobagi</strong> (șerbi), dependenți juridic și economic de seniori;</li>
                    <li><strong>Coloni</strong> – o categorie intermediară între oameni liberi și iobagi.</li>
                  </ul>
                  <p>
                  Aceștia plăteau taxe în natură, prestații (clacă) sau bani.
                  </p>
                  <H2 h2text="Apariția orașelor medievale" indexH2={indexH2("Apariția orașelor medievale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Începând cu <strong>secolele X–XI</strong>, în contextul creșterii demografice și dezvoltării comerțului, apar <strong>orașele medievale</strong>, numite <strong>burguri</strong> în spațiul germanic.
                  </p>
                  <p>
                  Factori ai apariției orașelor:
                  </p>
                  <ul className={ulClass}>
                    <li>Dezvoltarea schimburilor comerciale (piețe, târguri);</li>
                    <li>Specializarea meșteșugurilor (bresle);</li>
                    <li>Creșterea populației și nevoia de centre administrative și ecleziastice.</li>
                  </ul>
                  <H2 h2text="Organizarea orașelor" indexH2={indexH2("Organizarea orașelor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Orașele beneficiau de <strong>autonomie locală</strong>, prin chartere acordate de regi sau seniori, și se guvernau prin:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Sfatul orășenesc</strong> (format din patricieni);</li>
                    <li><strong>Magistratul</strong> (organ executiv);</li>
                    <li><strong>Judecătoria locală</strong>.</li>
                  </ul>
                  <p>
                  Meșteșugarii se organizau în <strong>bresle</strong>, iar comercianții în <strong>ghilde</strong>, care reglementau producția și prețurile.
                  </p>
                  <H2 h2text="Renașterea comerțului" indexH2={indexH2("Renașterea comerțului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Odată cu dezvoltarea orașelor, apare și o rețea comercială importantă în Europa:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Drumuri comerciale</strong> terestre și maritime;</li>
                    <li><strong>Piețe anuale</strong> celebre (Champagne, Flandra);</li>
                    <li>Organizarea târgurilor săptămânale;</li>
                    <li>Dezvoltarea <strong>banchetelor și băncilor</strong> în nordul Italiei.</li>
                  </ul>
                  <H2 h2text="Exemple de orașe medievale importante" indexH2={indexH2("Exemple de orașe medievale importante")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li><strong>Florența, Veneția, Genova</strong> – centre bancare și comerciale în Italia;</li>
                    <li><strong>Paris, Londra, Bruges, Lübeck</strong> – centre culturale și economice în Occident;</li>
                    <li>În spațiul românesc: <strong>Sibiu, Brașov, Sighișoara, Târgoviște</strong> – târguri sau orașe medievale cu rol administrativ și comercial.</li>
                  </ul>
                  <p>
                  Economia medievală europeană a fost profund marcată de structura feudală, dar începând cu secolele XI–XIII, orașele devin centre dinamice ale schimburilor comerciale, ale vieții sociale și culturale. Urbanizarea a contribuit la slăbirea sistemului feudal și a pregătit trecerea spre epoca modernă.
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