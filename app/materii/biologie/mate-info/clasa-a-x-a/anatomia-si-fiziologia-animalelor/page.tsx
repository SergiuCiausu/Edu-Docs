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
      "Structura și funcțiile sistemelor de organe la diferite grupe de animale",
      "Adaptări morfologice și fiziologice la mediul de viață",
    ]

    const h3s = [
      ["Sistemul digestiv", "Sistemul respirator", "Sistemul circulator", "Sistemul excretor", "Sistemul nervos", "Sistemul reproducător"],
      ["În mediul acvatic", "În mediul terestru", "În mediul aerian (păsări, unele insecte)"],
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Anatomia și fiziologia animalelor") + 1;

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
                  <h1>{`Capitolul ${indexLectie}: Anatomia și fiziologia animalelor`}</h1>
                  <p>
                  Organismele animale prezintă o diversitate remarcabilă din punct de vedere al structurii și funcționării interne. Sistemele lor biologice sunt adaptate în mod specific la mediul de viață și la complexitatea funcțiilor necesare supraviețuirii. Studiul anatomiei și fiziologiei animale ne permite să înțelegem cum funcționează aceste organisme, de la cele simple la cele mai evoluate, și cum interacționează organele pentru a susține viața.
                  </p>
                  <H2 h2text="Structura și funcțiile sistemelor de organe la diferite grupe de animale" indexH2={indexH2("Structura și funcțiile sistemelor de organe la diferite grupe de animale")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Sistemul digestiv" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile sistemelor de organe la diferite grupe de animale")].findIndex(h3 => h3 === "Sistemul digestiv")}></H3>
                  <p>
                  Funcția sa principală este transformarea hranei în substanțe nutritive utilizabile și eliminarea resturilor nedigerabile. Structura sistemului digestiv variază în funcție de complexitatea organismului:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>La nevertebrate simple</strong> (ex: hidre), digestia este atât extracelulară, cât și intracelulară, într-o cavitate gastrovasculară.</li>
                        <li><strong>La insecte</strong>, tubul digestiv este diferențiat în stomac, intestin și anexat de glande digestive (ficatul gastric).</li>
                        <li><strong>La vertebrate</strong>, sistemul digestiv este compus din: gură, esofag, stomac, intestin subțire și gros, glande anexe (ficat, pancreas).</li>
                  </ul>
                  <p>
                  Fiziologia digestivă implică secreția de enzime, absorbția nutrienților și coordonarea prin sistemul nervos și endocrin.
                  </p>
                  <H3 h3text="Sistemul respirator" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile sistemelor de organe la diferite grupe de animale")].findIndex(h3 => h3 === "Sistemul respirator")}></H3>
                  <p>
                  Este responsabil de schimbul de gaze între organism și mediu:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Respirația cutanată</strong> apare la animale cu pielea umedă și subțire (ex: viermi, amfibieni).</li>
                        <li><strong>Branhii</strong> la pești și unele nevertebrate acvatice asigură absorbția oxigenului dizolvat în apă.</li>
                        <li><strong>Trahei la insecte</strong> – un sistem de tuburi ramificate care transportă aerul direct la celule.</li>
                        <li><strong>Plămâni la amfibieni, reptile, păsări și mamifere</strong> – permit respirația aeriană și sunt adaptați volumului crescut de oxigen necesar organismelor complexe.</li>
                  </ul>
                  <H3 h3text="Sistemul circulator" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile sistemelor de organe la diferite grupe de animale")].findIndex(h3 => h3 === "Sistemul circulator")}></H3>
                  <p>
                  Transportă oxigen, nutrienți, hormoni și deșeuri metabolice:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Sistemul deschis</strong> – sângele circulă parțial în vase, apoi liber în cavități (ex: insecte).</li>
                        <li><strong>Sistemul închis</strong> – sângele circulă doar prin vase (ex: anelide, vertebrate).</li>
                  </ul>
                  <p>
                  La vertebrate:
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Inima poate avea 2 camere (pești), 3 camere (amfibieni, reptile) sau 4 camere (păsări, mamifere).</li>
                        <li>Există circulație simplă (pești) sau dublă (mamifere).</li>
                  </ul>
                  <H3 h3text="Sistemul excretor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile sistemelor de organe la diferite grupe de animale")].findIndex(h3 => h3 === "Sistemul excretor")}></H3>
                  <p>
                  Elimină produșii toxici rezultați din metabolism:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>La protozoare și unele nevertebrate</strong>: excreția se face prin difuziune.</li>
                        <li><strong>La anelide</strong>: excreția se face prin nefridii.</li>
                        <li><strong>La insecte</strong>: tuburi Malpighi.</li>
                        <li><strong>La vertebrate</strong>: rinichii filtrează sângele și formează urina.</li>
                  </ul>
                  <p>
                  Fiziologic, sistemul excretor contribuie la osmoreglare (echilibrul apei și sărurilor) și la menținerea homeostaziei.
                  </p>
                  <H3 h3text="Sistemul nervos" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile sistemelor de organe la diferite grupe de animale")].findIndex(h3 => h3 === "Sistemul nervos")}></H3>
                  <p>
                  Controlează și coordonează funcțiile organismului:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Sistem nervos difuz</strong> (cnidari): o rețea de celule nervoase fără centri specializați.</li>
                        <li><strong>Lanț nervos ganglionar</strong> (insecte, anelide): ganglioni conectați prin cordoane longitudinale.</li>
                        <li><strong>Sistem nervos centralizat</strong> (vertebrate): format din creier și măduva spinării, cu nervi periferici.</li>
                  </ul>
                  <p>
                  Funcțional, sistemul nervos permite reacții rapide la stimuli, coordonarea mișcărilor, simțurilor și funcțiilor vitale.
                  </p>
                  <H3 h3text="Sistemul reproducător" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile sistemelor de organe la diferite grupe de animale")].findIndex(h3 => h3 === "Sistemul reproducător")}></H3>
                  <p>
                  Asigură perpetuarea speciei:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Reproducerea asexuată</strong> – prezentă la unele nevertebrate (ex: înmugurirea la hidre).</li>
                        <li><strong>Reproducerea sexuată</strong> – implică gameți masculini și feminini; poate fi externă (pești, amfibieni) sau internă (reptile, mamifere).</li>
                  </ul>
                  <p>
                  La vertebrate, sistemul reproducător este alcătuit din:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>gonade</strong> (testicule, ovare);</li>
                        <li><strong>canale genitale</strong>;</li>
                        <li><strong>organe anexe</strong> (prostata, uterul etc.).</li>
                  </ul>
                  <H2 h2text="Adaptări morfologice și fiziologice la mediul de viață" indexH2={indexH2("Adaptări morfologice și fiziologice la mediul de viață")} indexLectie={indexLectie}></H2>
                  <p>
                  Animalele s-au adaptat în mod spectaculos la diferite medii de viață: apă, sol, aer.
                  </p>
                  <H3 h3text="În mediul acvatic:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Adaptări morfologice și fiziologice la mediul de viață")].findIndex(h3 => h3 === "În mediul acvatic")}></H3>
                  <ul
                    className={ulClass}>
                        <li>Corp fusiform, înotătoare, branhii.</li>
                        <li>Excreție de amoniac (substanță solubilă).</li>
                        <li>Reproducere frecvent externă.</li>
                  </ul>
                  <H3 h3text="În mediul terestru:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Adaptări morfologice și fiziologice la mediul de viață")].findIndex(h3 => h3 === "În mediul terestru")}></H3>
                  <ul
                    className={ulClass}>
                        <li>Plămâni adaptați respirației aeriene.</li>
                        <li>Excreție de uree sau acid uric (mai puțină apă pierdută).</li>
                        <li>Piele groasă, solzi, pene sau blană pentru protecție.</li>
                  </ul>
                  <H3 h3text="În mediul aerian (păsări, unele insecte):" indexH3={h3s[h2s.findIndex(h2 => h2 === "Adaptări morfologice și fiziologice la mediul de viață")].findIndex(h3 => h3 === "În mediul aerian (păsări, unele insecte)")}></H3>
                  <ul
                    className={ulClass}>
                        <li>Schelet ușor, musculatură puternică.</li>
                        <li>Sistem respirator foarte eficient (saci aerieni).</li>
                        <li>Metabolism intens pentru zbor.</li>
                  </ul>
                  <p>
                  Diversitatea adaptărilor structurale și funcționale reflectă complexitatea vieții animale și strategiile evolutive adoptate pentru supraviețuire. Înțelegerea anatomiei și fiziologiei animale oferă o perspectivă completă asupra funcționării organismelor vii și a relației lor cu mediul înconjurător.
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