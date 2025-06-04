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
      "Noțiuni fundamentale de genetică",
      "Legile mendeliene ale eredității",
      "Tipuri de încrucișări și analiza rezultatelor",
      "Importanța geneticii în ameliorarea plantelor și animalelor",
    ]

    const h3s = [
      [""],
      ["Legea I: Legea uniformității hibrizilor din prima generație (F1)", "Legea a II-a: Legea segregării alelelor"],
      ["Monohibridare", "Dihibridare", "Alte tipuri de încrucișări"],
      ["Exemple în ameliorarea plantelor", "Exemple în ameliorarea animalelor"]
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Genetica și ereditatea") + 1;

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
                  <h1>{`Capitolul ${indexLectie}: Genetica și ereditatea`}</h1>
                  <p>
                  <strong>Genetica</strong> este ramura biologiei care studiază moștenirea caracterelor de la o generație la alta și <strong>variabilitatea organismelor</strong>. Încă din Antichitate, oamenii au observat asemănările dintre părinți și urmașii lor, însă abia în secolul XIX, odată cu experimentele realizate de <strong>Gregor Mendel</strong>, genetica a devenit o știință cu fundamente clare. Astăzi, genetica este esențială nu doar pentru înțelegerea organismelor vii, ci și pentru dezvoltarea agriculturii, medicinei și biotehnologiilor moderne.
                  </p>
                  <H2 h2text="Noțiuni fundamentale de genetică" indexH2={indexH2("Noțiuni fundamentale de genetică")} indexLectie={indexLectie}></H2>
                  <p>
                  La baza geneticii stau concepte cheie:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Gena</strong> este unitatea de bază a eredității. Este o secvență de ADN care codifică o anumită proteină sau caracter.</li>
                        <li><strong>Alelele</strong> sunt forme alternative ale aceleiași gene. De exemplu, o genă care determină culoarea florii poate avea o alelă pentru roșu și una pentru alb.</li>
                        <li><strong>Genotipul</strong> reprezintă totalitatea genelor unui individ.</li>
                        <li><strong>Fenotipul</strong> este expresia vizibilă a genotipului, influențată și de mediu (ex: culoarea ochilor).</li>
                        <li><strong>Homozigot</strong> înseamnă că un individ are două alele identice pentru o genă.</li>
                        <li><strong>Heterozigot</strong> înseamnă că are două alele diferite.</li>
                        <li><strong>Caracter dominant</strong> – se exprimă chiar dacă există o singură alelă dominantă.</li>
                        <li><strong>Caracter recesiv</strong> – se exprimă doar când ambele alele sunt recesive.</li>
                  </ul>
                  <H2 h2text="Legile mendeliene ale eredității" indexH2={indexH2("Legile mendeliene ale eredității")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Gregor Mendel</strong>, considerat părintele geneticii, a realizat experimente pe plante de mazăre și a formulat <strong>două legi fundamentale ale eredității</strong>:
                  </p>
                  <H3 h3text="Legea I: Legea uniformității hibrizilor din prima generație (F1)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Legile mendeliene ale eredității")].findIndex(h3 => h3 === "Legea I: Legea uniformității hibrizilor din prima generație (F1)")}></H3>
                  <p>
                  Când se încrucișează doi indivizi puri cu caractere contrastante, toți descendenții din generația F1 vor avea același <strong>fenotip</strong>, exprimând caracterul <strong>dominant</strong>.
                  </p>
                  <p>
                  Exemplu: plante cu flori roșii (RR) × plante cu flori albe (rr) → toți hibrizii vor avea flori roșii (Rr).
                  </p>
                  <H3 h3text="Legea a II-a: Legea segregării alelelor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Legile mendeliene ale eredității")].findIndex(h3 => h3 === "Legea a II-a: Legea segregării alelelor")}></H3>
                  <p>
                  La formarea gameților (celule sexuale), cele două alele ale unei gene se separă, astfel încât fiecare gamet conține o singură alelă. La fecundație, alelele se combină întâmplător, refăcând perechile.
                  </p>
                  <p>
                  Această lege explică de ce, în generația a doua (F2), apar din nou indivizi cu caractere recesive.
                  </p>
                  <H2 h2text="Tipuri de încrucișări și analiza rezultatelor" indexH2={indexH2("Tipuri de încrucișări și analiza rezultatelor")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Monohibridare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de încrucișări și analiza rezultatelor")].findIndex(h3 => h3 === "Monohibridare")}></H3>
                  <p>
                  Este încrucișarea în care se studiază un singur caracter.
                  </p>
                  <p>
                  Exemplu: culoarea florii → în F2 se obține un raport fenotipic de <strong>3:1</strong> (dominant:recesiv) și <strong>genotipic de 1:2:1</strong> (RR:Rr:rr).
                  </p>
                  <H3 h3text="Dihibridare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de încrucișări și analiza rezultatelor")].findIndex(h3 => h3 === "Dihibridare")}></H3>
                  <p>
                  Se studiază două caractere simultan. Exemplu: culoarea și forma seminței.
                  </p>
                  <p>
                  Raportul fenotipic în F2 este <strong>9:3:3:1</strong>, indicând combinații diverse ale caracterelor studiate.
                  </p>
                  <H3 h3text="Alte tipuri de încrucișări" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de încrucișări și analiza rezultatelor")].findIndex(h3 => h3 === "Alte tipuri de încrucișări")}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Intermediară</strong> – când nu există dominanță completă, iar hibrizii au un fenotip intermediar (ex: roșu × alb → roz).</li>
                        <li><strong>Codominanță</strong> – ambele alele se exprimă simultan (ex: grupa de sânge AB la om).</li>
                        <li><strong>Încrucișări de testare</strong> – folosite pentru a determina genotipul unui individ cu caracter dominant (se încrucișează cu un individ recesiv).</li>
                  </ul>
                  <H2 h2text="Importanța geneticii în ameliorarea plantelor și animalelor" indexH2={indexH2("Importanța geneticii în ameliorarea plantelor și animalelor")} indexLectie={indexLectie}></H2>
                  <p>
                  Aplicarea cunoștințelor de genetică în agricultură și zootehnie a dus la obținerea de <strong>specii mai productive, rezistente la boli sau adaptate la condiții extreme.</strong>
                  </p>
                  <H3 h3text="Exemple în ameliorarea plantelor:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Importanța geneticii în ameliorarea plantelor și animalelor")].findIndex(h3 => h3 === "Exemple în ameliorarea plantelor")}></H3>
                  <ul
                    className={ulClass}>
                        <li>Obținerea de <strong>soiuri hibride</strong> de porumb, grâu, orez.</li>
                        <li>Crearea de plante rezistente la dăunători sau la secetă.</li>
                        <li>Selectarea trăsăturilor dorite (culoare, mărime, gust).</li>
                  </ul>
                  <H3 h3text="Exemple în ameliorarea animalelor:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Importanța geneticii în ameliorarea plantelor și animalelor")].findIndex(h3 => h3 === "Exemple în ameliorarea animalelor")}></H3>
                  <ul
                    className={ulClass}>
                    <li>Îmbunătățirea raselor de bovine pentru <strong>lapte</strong> sau <strong>carne</strong>.</li>
                    <li>Obținerea de <strong>păsări ouătoare</strong> sau de <strong>găini de carne</strong> cu randament ridicat.</li>
                    <li>Folosirea inseminării artificiale și a selecției genetice.</li>
                  </ul>
                  <p>
                  Genetica modernă folosește și tehnici avansate, precum <strong>ingineria genetică</strong> sau <strong>editarea genelor</strong> (ex: CRISPR), pentru a modifica precis anumite caractere.
                  </p>
                  <p>
                  Genetica este esențială pentru înțelegerea modului în care caracteristicile sunt transmise și exprimate în organismele vii. De la legile simple ale lui Mendel până la tehnologiile moderne, genetica oferă un cadru științific solid pentru <strong>ameliorarea plantelor și animalelor</strong>, dar și pentru medicina personalizată și conservarea biodiversității.
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