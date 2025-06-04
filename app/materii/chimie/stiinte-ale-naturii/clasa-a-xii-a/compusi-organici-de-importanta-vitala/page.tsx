"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-chimie-12";
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

  const h1 = "Compuși organici de importanță vitală"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    ["Aminoacizi", "Proteine"],
    ["Vitamine", "Enzime (fermenți)"],
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
              profil="științe ale naturii" 
              materie="chimie" 
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
                  <H2 h2text="Grăsimile (lipidele)" indexH2={indexH2("Grăsimile (lipidele)")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Definiție: Esteri ai acizilor grași cu glicerolul (triestergliceride).
                  </p>
                  <p>
                    <strong>Formulă generală:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <strong>Grăsime = Glicerol + 3 x Acid gras</strong>
                  </p>
                  <p>
                  Clasificare:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Saturate</strong> (fără legături duble – solide la temperatura camerei)</li>
                    <li><strong>Nesaturate</strong> (cu legături duble – lichide la temperatura camerei)</li>
                  </ul>
                  <p>
                  Proprietăți:
                  </p>
                  <ul className={ulClass}>
                    <li>Insolubile în apă</li>
                    <li>Solubile în solvenți organici</li>
                    <li>Densitate mai mică decât apa</li>
                  </ul>
                  <p>
                  Importanță:
                  </p>
                  <ul className={ulClass}>
                    <li>Rezervă energetică</li>
                    <li>Izolație termică și protecție</li>
                    <li>Materie primă pentru săpunuri (prin saponificare)</li>
                  </ul>
                  <H2 h2text="Hidrații de carbon (glucidele, zaharidele)" indexH2={indexH2("Hidrații de carbon (glucidele, zaharidele)")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Definiție: Compuși organici cu grupări funcționale aldehidice sau cetonice și multiple grupări hidroxil (OH).
                  </p>
                  <p>
                  Clasificare:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Monozaharide</strong>: glucoză, fructoză</li>
                    <li><strong>Dizaharide</strong>: zaharoză, lactoză</li>
                    <li><strong>Polizaharide</strong>: amidon, celuloză, glicogen</li>
                  </ul>
                  <p>
                  Proprietăți:
                  </p>
                  <ul className={ulClass}>
                    <li>Solubile în apă (cele simple)</li>
                    <li>Gust dulce (monozaharide și dizaharide)</li>
                    <li>Reduc glucoza aldehidică reacționând cu reactivul Tollens sau Fehling</li>
                  </ul>
                  <p>
                  Rol biologic:
                  </p>
                  <ul className={ulClass}>
                    <li>Sursă principală de energie</li>
                    <li>Material structural (ex: celuloza în plante)</li>
                  </ul>
                  <H2 h2text="Aminoacizii și proteinele" indexH2={indexH2("Aminoacizii și proteinele")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Aminoacizi" indexH3={h3s[h2s.findIndex(h2 => h2 === "Aminoacizii și proteinele")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Aminoacizii și proteinele")].findIndex(h3 => h3 === "Aminoacizi") : -1}></H3>
                  <p>
                  Definiție: Compuși care conțin cel puțin o grupare aminică (-NH₂) și o grupare carboxil (-COOH).
                  </p>
                  <p>
                    <strong>Formulă generală:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <strong>H<sub>2</sub>N - CHR - COOH</strong>
                  </p>
                  <p>
                    <strong>Roluri:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Unități structurale ale proteinelor</li>
                    <li>Participă în metabolism și sinteze enzimatice</li>
                  </ul>
                  <H3 h3text="Proteine" indexH3={h3s[h2s.findIndex(h2 => h2 === "Aminoacizii și proteinele")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Aminoacizii și proteinele")].findIndex(h3 => h3 === "Proteine") : -1}></H3>
                  <p>
                  Definiție: Polimeri naturali formați prin condensarea aminoacizilor (prin legături peptidice).
                  </p>
                  <p>
                    <strong>Structuri:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Primară: secvența aminoacizilor</li>
                    <li>Secundară, terțiară, cuaternară: organizarea tridimensională</li>
                  </ul>
                  <p>
                  Proprietăți:
                  </p>
                  <ul className={ulClass}>
                    <li>Coagulare prin temperatură sau pH</li>
                    <li>Denaturare (pierdere a formei → pierdere a funcției)</li>
                  </ul>
                  <p>
                  Roluri:
                  </p>
                  <ul className={ulClass}>
                    <li>Enzime</li>
                    <li>Hormoni</li>
                    <li>Transport (ex: hemoglobină)</li>
                    <li>Structură (colagen, keratină)</li>
                  </ul>
                  <H2 h2text="Vitamine și enzime (fermenți)" indexH2={indexH2("Vitamine și enzime (fermenți)")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Vitamine" indexH3={h3s[h2s.findIndex(h2 => h2 === "Vitamine și enzime (fermenți)")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Vitamine și enzime (fermenți)")].findIndex(h3 => h3 === "Vitamine") : -1}></H3>
                  <p>
                  Definiție: Substanțe organice esențiale în cantități mici pentru metabolism.
                  </p>
                  <p>
                    <strong>Clasificare:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Hidrosolubile: C, B₁, B₆, B₁₂</li>
                    <li>Liposolubile: A, D, E, K</li>
                  </ul>
                  <p>
                  Roluri:
                  </p>
                  <ul className={ulClass}>
                    <li>Cofactori în reacții enzimatice</li>
                    <li>Reglează funcțiile sistemelor biologice</li>
                  </ul>
                  <p>
                  Surse: alimente naturale (fructe, legume, produse animale)
                  </p>
                  <H3 h3text="Enzime (fermenți)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Vitamine și enzime (fermenți)")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Vitamine și enzime (fermenți)")].findIndex(h3 => h3 === "Enzime (fermenți)") : -1}></H3>
                  <p>
                  Definiție: Proteine specializate care catalizează reacțiile biochimice.
                  </p>
                  <p>
                    <strong>Proprietăți:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Selectivitate mare</li>
                    <li>Activitate la temperaturi moderate</li>
                    <li>Sunt afectate de pH, temperatură</li>
                  </ul>
                  <p>
                  Aplicații:
                  </p>
                  <ul className={ulClass}>
                    <li>Industria alimentară (fabricarea pâinii, brânzeturilor)</li>
                    <li>Biotehnologii medicale</li>
                  </ul>
                  <H2 h2text="Compușii macromoleculari sintetici" indexH2={indexH2("Compușii macromoleculari sintetici")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Definiție: Polimeri artificiali obținuți prin reacții de <strong>polimerizare</strong>.
                  </p>
                  <p>
                  Tipuri:
                  </p>
                  <ul className={ulClass}>
                    <li>Polietilenă (PE) – ambalaje</li>
                    <li>Polistiren (PS) – pahare, caserole</li>
                    <li>Poliamide (nailon) – textile</li>
                    <li>Poliesteri (PET) – sticle, fibre</li>
                  </ul>
                  <p>
                    <strong>Proprietăți:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Rezistență mecanică și chimică</li>
                    <li>Ușor modelabili</li>
                    <li>Non-biodegradabili (în majoritate)</li>
                  </ul>
                  <p>
                  Aplicații:
                  </p>
                  <ul className={ulClass}>
                    <li>Tehnologii moderne</li>
                    <li>Textile, ambalaje, construcții, medicină</li>
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