"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import H3 from '@/app/components/PageContent/H3';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { titluri } from '@/app/data/capitole-bio-mate-info-9';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { ulClass } from '@/app/class/ul';

const page = () => {
  
  const { theme, setTheme } = useTheme();
  
    const [clickedLinkId, setClickedLinkId] = useState<string>("");
    
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const h2s = [
      "Clasificarea organismelor: regnuri și încadrarea principalelor grupe de plante și animale",
      "Caracteristici morfologice și fiziologice ale principalelor grupe de organisme"
    ]

    const h3s = [
      [""],
      [
        "Plante",
        "Animale",
        "Fungi",
        "Protiste și Monere"
      ]
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Diversitatea lumii vii") + 1;

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
                className="flex gap-12 relative">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: Diversitatea lumii vii`}</h1>
                  <H2 h2text="Clasificarea organismelor: regnuri și încadrarea principalelor grupe de plante și animale" indexH2={indexH2("Clasificarea organismelor: regnuri și încadrarea principalelor grupe de plante și animale")} indexLectie={indexLectie}></H2>
                  <p>Pentru a putea studia și înțelege mai bine multitudinea de 
                    forme de viață existente pe Pământ, oamenii de știință au 
                    dezvoltat sisteme de clasificare biologică. Clasificarea 
                    organismelor vii se bazează pe trăsături morfologice, fiziologice, 
                    genetice și ecologice comune. Aceste clasificări ne ajută să 
                    identificăm, denumim și grupăm organismele într-o ierarhie logică 
                    și coerentă.
                  </p>
                  <p>
                  Cel mai larg nivel de clasificare este regnul. În prezent, sunt acceptate 
                  cinci regnuri majore ale lumii vii:
                  </p>  
                  <ul
                    className={ulClass}>
                      <li><strong>Regnul Monera</strong> - cuprinde organismele unicelulare procariote, precum bacteriile.</li>
                      <li><strong>Regnul Protista</strong> - include organisme unicelulare eucariote, cum ar fi amibele și algele unicelulare.</li>
                      <li><strong>Regnul Fungi</strong> - cuprinde ciupercile, drojdiile și mucegaiurile, organisme eucariote, heterotrofe.</li>
                      <li><strong>Regnul Plantae (Plante)</strong> – include organisme eucariote, autotrofe, multicelulare, care realizează fotosinteza</li>
                      <li><strong>Regnul Animalia (Animale)</strong> – cuprinde organisme eucariote, heterotrofe, în majoritate pluricelulare, cu un nivel de organizare complex.</li>
                  </ul>
                  <p>
                  În cadrul fiecărui regn, organismele sunt grupate în categorii taxonomice: <strong>încrengătură, clasă, ordin, familie, gen și specie</strong>.
                  </p>
                  <p>
                  La plante, grupele principale includ:
                  </p>
                  <ul
                    className={ulClass}>
                      <li><strong>Algele</strong> – organisme simple, fotosintetizante, acvatice.</li>
                      <li><strong>Briofitele</strong> – mușchi, fără țesuturi conducătoare bine dezvoltate.</li>
                      <li><strong>Pteridofitele</strong> – ferigi, plante cu țesuturi conducătoare, dar fără semințe.</li>
                      <li><strong>Gimnospermele</strong> – plante cu semințe neprotejate de fruct.</li>
                      <li><strong>Angiospermele</strong> – plante cu flori și semințe protejate în fruct.</li>
                  </ul>
                  <p>
                  La animale, grupele importante sunt:
                  </p>
                  <ul
                    className={ulClass}>
                    <li><strong>Nevertebratele </strong>– animale fără coloană vertebrală (insecte, moluște, viermi, etc.)</li>
                    <li><strong>Vertebratele</strong> – animale cu coloană vertebrală (pești, amfibieni, reptile, păsări, mamifere).</li>
                  </ul>
                  <H2 h2text="Caracteristici morfologice și fiziologice ale principalelor grupe de organisme" indexH2={indexH2("Caracteristici morfologice și fiziologice ale principalelor grupe de organisme")} indexLectie={indexLectie}></H2>
                  <p>
                    <strong>Morfologia</strong> se referă la forma și structura exterioară a organismelor, în timp ce fiziologia studiază funcțiile vitale și procesele interne ale acestora.
                  </p>
                  <H3 h3text="Plante:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Caracteristici morfologice și fiziologice ale principalelor grupe de organisme")].findIndex(h3 => h3 === "Plante")}></H3>
                  <ul
                    className={ulClass}>
                      <li><strong>Morfologie</strong>: rădăcină, tulpină, frunze, flori, fructe – fiecare organ are roluri bine definite (absorbție, susținere, fotosinteză, reproducere).</li>
                      <li><strong>Fiziologie</strong>: realizarea fotosintezei, respirația celulară, transpirația, circulația sevei brute și elaborate.</li>
                  </ul>
                  <H3 h3text="Animale:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Caracteristici morfologice și fiziologice ale principalelor grupe de organisme")].findIndex(h3 => h3 === "Animale")}></H3>
                  <ul
                    className={ulClass}>
                      <li><strong>Morfologie</strong>: corpul este organizat în sisteme (digestiv, respirator, circulator, excretor, nervos, reproducător).</li>
                      <li><strong>Fiziologie</strong>: animalele consumă alți organizmi (heterotrofe), prezintă mobilitate, au sisteme nervoase dezvoltate și comportamente complexe.</li>
                  </ul>
                  <H3 h3text="Fungi:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Caracteristici morfologice și fiziologice ale principalelor grupe de organisme")].findIndex(h3 => h3 === "Fungi")}></H3>
                  <ul
                    className={ulClass}>
                      <li><strong>Morfologie</strong>: formă filamentoasă (micelii), lipsa clorofilei.</li>
                      <li><strong>Fiziologie</strong>: nutriție heterotrofă (saprofite sau parazite), reproducere prin spori.</li>
                  </ul>
                  <H3 h3text="Protiste și Monere:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Caracteristici morfologice și fiziologice ale principalelor grupe de organisme")].findIndex(h3 => h3 === "Protiste și Monere")}></H3>
                  <ul
                    className={ulClass}>
                      <li><strong>Morfologie</strong>: în general, forme simple, unicelulare.</li>
                      <li><strong>Fiziologie</strong>: pot fi autotrofe sau heterotrofe, unele se deplasează cu ajutorul cililor sau flagelilor.</li>
                  </ul>
                  <p>
                  Această diversitate morfologică și funcțională este o dovadă a adaptabilității organismelor vii la condițiile variate de viață, contribuind la menținerea echilibrului ecologic global.
                  </p>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={indexLectie} clickedLink={clickedLinkId}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div>
  )
}

export default page