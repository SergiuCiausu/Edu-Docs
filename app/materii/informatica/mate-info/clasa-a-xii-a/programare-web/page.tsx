"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-info-12";
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

  const h1 = "Programare web"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Structura de bază a unei pagini HTML", "Etichete HTML uzuale"],
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
              clasa={12} 
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
                  <H2 h2text="Ce este HTML?" indexH2={indexH2("Ce este HTML?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>HTML</strong> (HyperText Markup Language) este limbajul standard utilizat pentru <strong>crearea și structurarea paginilor web</strong>. HTML folosește etichete (tag-uri) pentru a marca diferite tipuri de conținut (text, titluri, imagini, tabele etc.).
                  </p>
                  <p>
                  HTML nu este un limbaj de programare propriu-zis, ci un <strong>limbaj de marcare</strong>: definește structura și conținutul, nu comportamentul paginii web.
                  </p>
                  <H3 h3text="Structura de bază a unei pagini HTML" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ce este HTML?")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ce este HTML?")].findIndex(h3 => h3 === "Structura de bază a unei pagini HTML") : -1}></H3>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            {`<!DOCTYPE html>`}
                        </code>
                        <code>
                            {`<html>`}
                        </code>
                        <code
                            className="pl-4">
                                {`<head>`}
                        </code>
                        <code className="pl-8">
                            {`<title>Titlul paginii</title>`}
                        </code>
                        <code className="pl-4">
                            {`</head>`}
                        </code>
                        <code className="pl-4">
                            {`<body>`}
                        </code>
                        <code className="pl-8">
                            {`<h1>Bine ai venit!</h1>`}
                        </code>
                        <code className="pl-8">
                            {`<p>Aceasta este prima ta pagină web.</p>`}
                        </code>
                        <code className="pl-4">
                            {`</body>`}
                        </code>
                        <code>
                            {`</html>`}
                        </code>
                    </p>
                  </div>
                  <ul className={ulClass}>
                    <li>{`<!DOCTYPE html>: declară versiunea HTML5;`}</li>
                    <li>
                        {`<html>: elementul principal care conține întreaga pagină;`}
                    </li>
                    <li>
                        {`<head>: conține informații despre pagină (ex: titlu, stiluri);`}
                    </li>
                    <li>
                        {`<title>: textul care apare în bara de titlu a browserului;`}
                    </li>
                    <li>
                        {`<body>: conținutul vizibil al paginii.`}
                    </li>
                  </ul>
                  <H3 h3text="Etichete HTML uzuale" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ce este HTML?")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ce este HTML?")].findIndex(h3 => h3 === "Etichete HTML uzuale") : -1}></H3>
                  <p>
                    <strong>
                    Titluri
                    </strong>
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                        {`<h1>Titlu principal</h1>`}
                        </code>
                        <code>
                            {`<h2>Subtitlu</h2>`}
                        </code>
                    </p>
                  </div>
                  <p>
                    {`Se folosesc de la <h1> (cel mai important) la <h6> (cel mai mic).`}
                  </p>
                  <p>
                    <strong>
                    Paragraf
                    </strong>
                  </p>
                  <div className="code-container">
                    <p>
                        <code>
                            {`<p>Acesta este un paragraf de text.</p>`}
                        </code>
                    </p>
                  </div>
                  <p>
                    <strong>
                    Linkuri
                    </strong>
                  </p>
                  <div className="code-container">
                    <p>
                        <code>
                            {`<a href="https://www.google.com">Caută pe Google</a>`}
                        </code>
                    </p>
                  </div>
                  <p>
                    Atribute: href definește adresa web.
                  </p>
                  <p>
                    <strong>
                    Imagini
                    </strong>
                  </p>
                  <div className="code-container">
                    <p>
                        <code>
                            {`<img src="poza.jpg" alt="Descriere imagine">`}
                        </code>
                    </p>
                  </div>
                  <p>
                    <strong>
                    Liste
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li>
                        Listă ordonată:
                        <div className="code-container my-5">
                            <p
                                className="flex flex-col gap-1">
                                <code>
                                    {`<ol>`}
                                </code>
                                <code className="pl-4">
                                    {`<li>Primul</li>`}
                                </code>
                                <code className="pl-4">
                                    {`<li>Al doilea</li>`}
                                </code>
                                <code>
                                    {`</ol>`}
                                </code>
                            </p>
                        </div>
                    </li>
                    <li>
                        Listă neordonată:
                        <div className="code-container my-5">
                            <p
                                className="flex flex-col gap-1">
                                <code>
                                    {`<ul>`}
                                </code>
                                <code className="pl-4">
                                    {`<li>Element A</li>`}
                                </code>
                                <code className="pl-4">
                                    {`<li>Element B</li>`}
                                </code>
                                <code>
                                    {`</ul>`}  
                                </code>
                            </p>
                        </div>
                    </li>
                  </ul>
                  <p>
                    <strong>
                    Linie orizontală
                    </strong>
                  </p>
                  <div className="code-container">
                    <p>
                        <code>
                            {`<hr>`}
                        </code>
                    </p>
                  </div>
                  <p>
                    <strong>
                    Salt de linie
                    </strong>
                  </p>
                  <div className="code-container">
                    <p>
                        <code>
                            {`<br>`}
                        </code>
                    </p>
                  </div>
                  <H2 h2text="Observații importante:" indexH2={indexH2("Observații importante")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>{`Unele taguri nu au tag de închidere (<br>, <hr>, <img>);`}</li>
                    <li>HTML este <strong>insensibil la spații și enteruri</strong>, dar <strong>sensibil la cuibărie (nesting)</strong>: etichetele trebuie închise corect și ordonat.</li>
                  </ul>
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