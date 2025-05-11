"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-istorie-9";
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

  const h1 = "Moștenirea culturală a Antichității"
  
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
                  <H2 h2text="Arhitectura orientală" indexH2={indexH2("Arhitectura orientală")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Civilizațiile orientale – precum cea egipteană, mesopotamiană și persană – au creat monumente impresionante, reflectând puterea și credințele religioase ale societăților lor. În <strong>Egipt</strong>, marile <strong>piramide</strong> (ex: cele de la Gizeh) serveau drept morminte pentru faraoni. În <strong>Mesopotamia</strong>, templele în trepte numite <strong>ziggurat</strong> erau construite pentru a onora zeii. <strong>Palatele</strong> din Persia (ex: Persepolis) demonstrau rafinamentul artistic și tehnic al vremii.
                  </p>
                  <H2 h2text="Stilurile artei grecești" indexH2={indexH2("Stilurile artei grecești")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Grecii au dezvoltat trei stiluri arhitecturale principale:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Doric</strong> – simplu, robust, fără bază (ex: Templul Partenonului);</li>
                    <li><strong>Ionic</strong> – elegant, cu volute la capiteluri (ex: Templul Erechteion);</li>
                    <li><strong>Corintic</strong> – ornamentat, cu frunze de acant (folosit mai târziu și de romani).</li>
                  </ul>
                  <p>
                  Aceste stiluri reflectă echilibrul, simetria și idealul de frumusețe clasică.
                  </p>
                  <H2 h2text="Arta plastică greacă" indexH2={indexH2("Arta plastică greacă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Grecii au excelat în <strong>sculptură</strong>, reprezentând corpul uman cu realism și armonie. De la forme rigide arhaice (kouros și kore), la sculpturile clasice (Fidias, Policleitos), arta greacă a evoluat spre redarea expresivității și mișcării (ex: Discobolul lui Miron). Sculptura greacă a pus bazele esteticii occidentale.
                  </p>
                  <H2 h2text="Arta monumentală romană" indexH2={indexH2("Arta monumentală romană")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Romanii au preluat și adaptat elemente grecești și etrusce, dar au pus accent pe <strong>funcționalitate și durabilitate</strong>. Au construit <strong>amfiteatre</strong> (Colosseumul), <strong>apeducte, băi publice, arcuri de triumf și bazilici</strong>. Au folosit pentru prima dată pe scară largă betonul și bolta pentru construcții monumentale.
                  </p>
                  <H2 h2text="Modele și valori în educația greacă" indexH2={indexH2("Modele și valori în educația greacă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Educația greacă urmărea formarea cetățeanului ideal, prin cultivarea minții și a corpului. La <strong>Atena</strong>, accentul era pus pe <strong>retorică, filosofie și arte</strong>, în timp ce în <strong>Sparta</strong>, educația avea scop militar. Filosofii greci (Socrate, Platon, Aristotel) au influențat profund gândirea europeană.
                  </p>
                  <H2 h2text="Știința în Antichitate" indexH2={indexH2("Știința în Antichitate")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  În Antichitate au apărut fundamentele multor științe:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Matematica</strong>: Pitagora, Euclid</li>
                    <li><strong>Astronomia</strong>: Aristarchus din Samos (ipoteza heliocentrică), Ptolemeu</li>
                    <li><strong>Medicina</strong>: Hipocrate – „părintele medicinei”</li>
                    <li><strong>Geografia</strong>: Eratostene, care a calculat circumferința Pământului</li>
                  </ul>
                  <p>
                  Gândirea rațională și spiritul de cercetare științifică al grecilor și romanilor stau la baza culturii occidentale moderne.
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