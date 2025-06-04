"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import H3 from '@/app/components/PageContent/H3';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { titluri } from '@/app/data/capitole-bio-mate-info-10';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { ulClass } from '@/app/class/ul';

const Page = () => {
  
  const { theme, setTheme } = useTheme();
  
    const [clickedLinkId, setClickedLinkId] = useState<string>("");
    
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const h2s = [
      "Principiile clasificării biologice",
      "Caracteristicile și diversitatea microorganismelor",
      "Caracteristicile și diversitatea regnului Protista",
      "Caracteristicile și diversitatea regnului Fungi",
      "Caracteristicile și diversitatea regnului Plantae",
      "Caracteristicile și diversitatea regnului Animalia"
    ]

    const h3s = [
      [""],
      [""],
      [""],
      [""],
      ["Clasificare"],
      ["Clasificare"],
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Clasificarea și diversitatea organismelor vii") + 1;

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
              clasa={10} 
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
                  <h1>{`Capitolul ${indexLectie}: Clasificarea și diversitatea organismelor vii`}</h1>
                  <H2 h2text="Principiile clasificării biologice" indexH2={indexH2("Principiile clasificării biologice")} indexLectie={indexLectie}></H2>
                  <p>
                  Clasificarea biologică este ramura biologiei care se ocupă cu organizarea organismelor vii în categorii sistematice, în funcție de asemănările și diferențele lor. Scopul acestei clasificări este de a facilita identificarea, înțelegerea și studiul diversității biologice.
                  </p>
                  <p>
                  <strong>Taxonomia</strong> este știința care definește, denumește și clasifică organismele. Clasificarea modernă se bazează pe următoarele principii:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Ierarhia taxonomică</strong> – organismele sunt organizate în grupe ierarhice: domeniu, regn, încrengătură (filum), clasă, ordin, familie, gen și specie.</li>
                        <li><strong>Nomenclatura binară</strong> – fiecare specie are o denumire științifică formată din două cuvinte în limba latină: genul și epitetul specific <i>(ex. Homo sapiens)</i>.</li>
                        <li><strong>Filogenia</strong> – clasificarea reflectă relațiile evolutive dintre organisme.</li>
                  </ul>
                  <H2 h2text="Caracteristicile și diversitatea microorganismelor" indexH2={indexH2("Caracteristicile și diversitatea microorganismelor")} indexLectie={indexLectie}></H2>
                  <p>
                  Microorganismele sunt organisme microscopice, adesea unicelulare, care includ bacteriile, arheele și unele fungi și protiste. Ele se găsesc peste tot în natură și joacă un rol esențial în ecosisteme:
                  </p>
                  <ul
                    className={ulClass}>
                    <li><strong>Bacteriile</strong> – sunt procariote, fără nucleu definit, prezente în sol, apă și în organisme. Unele sunt benefice <i>(ex. Lactobacillus)</i>, altele patogene <i>(ex. Salmonella)</i>.</li>
                    <li><strong>Arheele</strong> – asemănătoare bacteriilor, dar cu structură chimică diferită; trăiesc adesea în medii extreme (termofile, halofile).</li>
                    <li><strong>Importanța microorganismelor</strong> – fixarea azotului, fermentație, degradarea deșeurilor, rol medical și biotehnologic.</li>
                  </ul>
                  <H2 h2text="Caracteristicile și diversitatea regnului Protista" indexH2={indexH2("Caracteristicile și diversitatea regnului Protista")} indexLectie={indexLectie}></H2>
                  <p>
                  Regnul Protista cuprinde organisme eucariote (cu nucleu delimitat), în general unicelulare, dar și forme pluricelulare simple. Ele trăiesc mai ales în medii acvatice.
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Protiste autotrofe</strong> – precum algele unicelulare (Chlorella, Euglena) care pot realiza fotosinteza.</li>
                        <li><strong>Protiste heterotrofe</strong> – precum Amoeba sau Paramecium, care se hrănesc prin fagocitoză.</li>
                        <li><strong>Protiste mixotrofe</strong> – cum e Euglena, care combină fotosinteza cu ingestia de substanțe organice. – cum e Euglena, care combină fotosinteza cu ingestia de substanțe organice.</li>
                  </ul>
                  <p>
                  Protistele au importanță ecologică (în lanțurile trofice acvatice) și medicală (ex. Plasmodium – agentul malariei).
                  </p>
                  <H2 h2text="Caracteristicile și diversitatea regnului Fungi" indexH2={indexH2("Caracteristicile și diversitatea regnului Fungi")} indexLectie={indexLectie}></H2>
                  <p>
                  Fungi (ciupercile) sunt eucariote, majoritatea pluricelulare, care trăiesc ca saprofite sau parazite. Spre deosebire de plante, nu au clorofilă și nu pot realiza fotosinteza.
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Structura</strong> – corpul ciupercilor este format din hife (filamente) ce formează miceliul.</li>
                        <li><strong>Nutriția</strong> – este heterotrofă prin absorbție.</li>
                        <li><strong>Reproducerea</strong> – se face asexuat (prin spori) și sexuat.</li>
                  </ul>
                  <p>
                  Exemple: <i>Agaricus</i> (ciuperca de pădure), <i>Penicillium</i> (ciupercă microscopică, producătoare de antibiotice).
                  </p>
                  <H2 h2text="Caracteristicile și diversitatea regnului Plantae" indexH2={indexH2("Caracteristicile și diversitatea regnului Plantae")} indexLectie={indexLectie}></H2>
                  <p>
                  Plantele sunt organisme eucariote pluricelulare, autotrofe (fotosintetizează), cu pereți celulari din celuloză și pigment clorofilian.
                  </p>
                  <H3 h3text="Clasificare:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Caracteristicile și diversitatea regnului Plantae")].findIndex(h3 => h3 === "Clasificare")}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Briofite</strong> – ex. mușchi;</li>
                        <li><strong>Pteridofite</strong> – ex. ferigi;</li>
                        <li><strong>Gimnosperme</strong> – ex. conifere;</li>
                        <li><strong>Angiosperme</strong> – plante cu flori și semințe în fruct (majoritatea speciilor vegetale).</li>
                  </ul>
                  <p>
                  Plantele sunt vitale pentru echilibrul ecosistemelor, fiind producători primari și surse de hrană, oxigen și materii prime.
                  </p>
                  <H3 h3text="Caracteristicile și diversitatea regnului Animalia" indexH3={h3s[h2s.findIndex(h2 => h2 === "Caracteristicile și diversitatea regnului Plantae")].findIndex(h3 => h3 === "Clasificare")}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Nevertebrate</strong> – ex. insecte, moluște, viermi, crustacee;</li>
                        <li><strong>Vertebrate</strong> – pești, amfibieni, reptile, păsări, mamifere.</li>
                  </ul>
                  <p>
                  Fiecare grup prezintă adaptări specifice mediului de viață (acvatic, terestru, aerian) și modului de nutriție.
                  </p>
                  <p>
                  Clasificarea biologică ne ajută să înțelegem diversitatea extraordinară a vieții de pe Pământ. De la microorganisme invizibile la plante și animale complexe, fiecare regn are roluri ecologice și importanță științifică semnificativă. Studiul acestor categorii ne oferă o privire de ansamblu asupra evoluției, adaptării și interdependenței vieții pe planetă.
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

export default Page