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

  const h1 = "Popoare și spații în Antichitate"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Spațiul și contextul", "Caracteristici comune", "Exemple de popoare"],
    ["Spațiul european în Antichitate", "Civilizații europene importante", "Caracteristici"],
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
                  <p>
                  Antichitatea reprezintă o perioadă fundamentală în istoria omenirii, în care s-au format primele civilizații complexe, s-au conturat primele state organizate și s-au pus bazele marilor religii și culturi ale lumii. Împărțim Antichitatea în două mari arii geografico-culturale: Orientul Antic și Europa Antică.
                  </p>
                  <H2 h2text="Popoare din Orient" indexH2={indexH2("Popoare din Orient")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Spațiul și contextul" indexH3={h3s[h2s.findIndex(h2 => h2 === "Popoare din Orient")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Popoare din Orient")].findIndex(h3 => h3 === "Spațiul și contextul") : -1}></H3>
                  <p>
                  Orientul Antic cuprinde regiunile din jurul fluviilor Nil, Tigru, Eufrat și Indus – locuri în care s-au dezvoltat unele dintre cele mai vechi civilizații: Egiptul Antic, Mesopotamia, India Antică, Persia și China Antică.
                  </p>
                  <H3 h3text="Caracteristici comune:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Popoare din Orient")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Popoare din Orient")].findIndex(h3 => h3 === "Caracteristici comune") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Civilizații fluviatile: depindeau de râuri pentru agricultură.</li>
                    <li>Societăți teocratice: conducerea era asociată cu religia.</li>
                    <li>Scriere timpurie: cuneiformă, hieroglifică, ideografică.</li>
                    <li>Realizări în astronomie, matematică, arhitectură.</li>
                  </ul>
                  <H3 h3text="Exemple de popoare:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Popoare din Orient")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Popoare din Orient")].findIndex(h3 => h3 === "Exemple de popoare") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Egiptenii</strong>: trăiau pe Valea Nilului, au construit piramidele și au practicat o religie politeistă. Faraonul era considerat un zeu.</li>
                    <li><strong>Sumerienii, akkadienii, babilonienii, asirienii</strong> (Mesopotamia): au dezvoltat primul cod de legi scrise (Codul lui Hammurabi).</li>
                    <li><strong>Evrei (vechii israeliteni)</strong>: monoteismul lor a influențat marile religii abrahamice.</li>
                    <li><strong>Perșii</strong>: au construit un imperiu vast și o rețea de drumuri, fiind cunoscuți pentru toleranță religioasă.</li>
                    <li><strong>Indienii și chinezii antici</strong>: au contribuit cu religii (hinduism, budism), filosofii și invenții (hârtia, busola).</li>
                  </ul>
                  <H2 h2text="Popoare din Europa" indexH2={indexH2("Popoare din Europa")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Spațiul european în Antichitate" indexH3={h3s[h2s.findIndex(h2 => h2 === "Popoare din Europa")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Popoare din Europa")].findIndex(h3 => h3 === "Spațiul european în Antichitate") : -1}></H3>
                  <p>
                  În Europa, marile civilizații s-au dezvoltat în jurul Mării Mediterane. Primele forme de organizare s-au observat în Grecia și apoi în Roma antică.
                  </p>
                  <H3 h3text="Civilizații europene importante" indexH3={h3s[h2s.findIndex(h2 => h2 === "Popoare din Europa")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Popoare din Europa")].findIndex(h3 => h3 === "Civilizații europene importante") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Grecia Antică</strong>: compusă din cetăți-stat (poli) precum Atena, Sparta, Corint. Au inventat democrația (Atena), au dezvoltat filozofia, teatrul și arta.</li>
                    <li><strong>Romanii</strong>: au fondat un imperiu care a dominat Marea Mediterană. Au dezvoltat dreptul, rețeaua de drumuri, organizarea urbană și administrația.</li>
                    <li><strong>Celții, geții, dacii, germanii</strong>: popoare indo-europene care au trăit în nordul și centrul Europei, unele în contact direct cu Imperiul Roman.</li>
                  </ul>
                  <H3 h3text="Caracteristici:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Popoare din Europa")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Popoare din Europa")].findIndex(h3 => h3 === "Caracteristici") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Organizare politică variată: de la triburi la imperii.</li>
                    <li>Dezvoltare militară și politică semnificativă (mai ales Roma).</li>
                    <li>Puternic impact cultural asupra Europei moderne.</li>
                  </ul>
                  <p>
                  Popoarele din Orient și Europa au contribuit decisiv la formarea civilizației umane. Fiecare dintre ele a lăsat o moștenire durabilă în domenii precum religia, legea, scrierea, arta și organizarea politică. Studierea acestor civilizații ne ajută să înțelegem rădăcinile lumii moderne.
                  </p>
                  <H2 h2text="Termeni importanți" indexH2={indexH2("Termeni importanți")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li><strong>Teocrație</strong> – formă de guvernare în care conducătorul este și lider religios.</li>
                    <li><strong>Polis</strong> – oraș-stat grec autonom.</li>
                    <li><strong>Codul lui Hammurabi</strong> – una dintre cele mai vechi culegeri de legi.</li>
                    <li><strong>Democrație</strong> – formă de guvernare în care cetățenii participă la decizii.</li>
                    <li><strong>Monoteism</strong> – credință într-un singur zeu.</li>
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

export default page