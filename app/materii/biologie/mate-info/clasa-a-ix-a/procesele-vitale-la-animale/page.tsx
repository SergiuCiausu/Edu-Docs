"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import H3 from '@/app/components/PageContent/H3';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { titluri } from "@/app/data/capitole-bio-mate-info-9";
import { ulClass } from '@/app/class/ul';

const page = () => {

  const { theme, setTheme } = useTheme();

  const [clickedLinkId, setClickedLinkId] = useState<string>("");
  
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const h2s = [
      "Nutriția heterotrofă: tipuri de digestie",
      "Respirația la animale: tipuri de respirație",
      "Circulația la diferite grupe de animale",
      "Excreția și osmoreglarea",
      "Sistemul nervos și organele de simț",
      "Locomoția și structura sistemului muscular și osos",
      "Reproducerea și dezvoltarea la animale"
    ]

    const h3s = [
      [
        "Tipuri de digestie",
      ],
      [
        "Tipuri de respirație"
      ],
      [
        "Tipuri de circulație",
        "La vertebrate"
      ],
      [
        "Organe excretoare"
      ],
      [
        "Evoluția sistemului nervos",
        "Organele de simț"
      ],
      [
        "Tipuri de locomoție",
        "Sistemele implicate"
      ],
      [
        "Reproducerea",
        "Dezvoltarea"
      ],
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Procesele vitale la animale") + 1;

    const toc = h2s.map((h2, index) => {
      return {h2: h2, h3: h3s[index]};
    });
    
    console.log(toc)

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
                  <h1>{`Capitolul ${indexLectie}: Procesele vitale la animale`}</h1>
                  <p>
                  Animalele, ca organisme vii complexe, desfășoară o serie de procese biologice fundamentale care le asigură supraviețuirea, dezvoltarea, adaptarea și reproducerea. În această lecție vom explora principalele funcții vitale ale animalelor, de la nutriție și respirație până la reproducere.
                  </p>
                  <H2 h2text="Nutriția heterotrofă: tipuri de digestie" indexH2={indexH2("Nutriția heterotrofă: tipuri de digestie")} indexLectie={indexLectie}></H2>
                  <p>
                  Spre deosebire de plante, animalele sunt <strong>heterotrofe</strong>, adică nu își pot produce singure hrana, ci trebuie să o consume din mediul înconjurător. Hrana este transformată prin <strong>digestie</strong> în substanțe mai simple, care pot fi absorbite și utilizate de organism.
                  </p>
                  <H3 h3text="Tipuri de digestie:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Nutriția heterotrofă: tipuri de digestie")].findIndex(h3 => h3 === "Tipuri de digestie")}></H3>
                  <ul
                    className={ulClass}>
                      <li><strong>Digestie intracelulară</strong> – are loc în interiorul celulelor, specifică organismelor simple (ex: protozoare).</li>
                      <li><strong>Digestie extracelulară</strong> – are loc în cavități specializate (ex: stomac, intestin), specifică animalelor pluricelulare.</li>
                      <li><strong>Digestie mixtă</strong> – combină cele două tipuri, întâlnită la unele nevertebrate.</li>
                  </ul>
                  <p>
                  Organele implicate în digestie diferă în funcție de grupa de animale, însă scopul este același: <strong>transformarea 
                  substanțelor complexe</strong> în nutrienți simpli (glucoză, aminoacizi, acizi grași) care vor fi absorbiți în sânge sau hemolimfă.
                  </p>
                  <H2 h2text="Respirația la animale: tipuri de respirație" indexH2={indexH2("Respirația la animale: tipuri de respirație")} indexLectie={indexLectie}></H2>
                  <p>
                  Respirația este procesul prin care organismele obțin energie prin oxidarea substanțelor nutritive.
                  </p>
                  <H3 h3text="Tipuri de respirație:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Respirația la animale: tipuri de respirație")].findIndex(h3 => h3 === "Tipuri de respirație")}></H3>
                  <ul
                    className={ulClass}>
                      <li><strong>Respirație cutanată</strong> – schimbul de gaze se face prin piele (ex: râme, amfibieni).</li>
                      <li><strong>Respirație branhială</strong> – branhii captează oxigenul dizolvat în apă (ex: pești, amfibieni).</li>
                      <li><strong>Respirație traheală</strong> – sistem de trahei care transportă direct oxigenul la celule (ex: insecte).</li>
                      <li><strong>Respirație pulmonară</strong> – plămânii sunt organele specializate pentru schimbul de gaze cu aerul (ex: mamifere, păsări, reptile, unele amfibieni).</li>
                  </ul>
                  <p>
                  La toate tipurile de respirație, oxigenul este folosit pentru a produce ATP, iar dioxidul de carbon este eliminat ca produs secundar.
                  </p>
                  <H2 h2text="Circulația la diferite grupe de animale" indexH2={indexH2("Circulația la diferite grupe de animale")} indexLectie={indexLectie}></H2>
                  <p>
                  Circulația este procesul prin care sângele (sau hemolimfa) transportă oxigenul, nutrienții și hormonii către celule și elimină substanțele reziduale.
                  </p>
                  <H3 h3text="Tipuri de circulație:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Circulația la diferite grupe de animale")].findIndex(h3 => h3 === "Tipuri de circulație")}></H3>
                  <ul
                    className={ulClass}>
                      <li><strong>Circulație deschisă</strong> – sângele este pompat într-o cavitate unde intră în contact direct cu organele (ex: insecte).</li>
                      <li><strong>Circulație închisă</strong> – sângele circulă prin vase sanguine (ex: viermi inelați, vertebrate).</li>
                  </ul>
                  <H3 h3text="La vertebrate:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Circulația la diferite grupe de animale")].findIndex(h3 => h3 === "La vertebrate")}></H3>
                  <ul
                    className={ulClass}>
                      <li><strong>Pești</strong>: 1 circuit, 2 camere (inimă formată din atriu și ventricul).</li>
                      <li><strong>Amfibieni și reptile</strong>: 2 circuite, 3 camere (2 atrii și un ventricul).</li>
                      <li><strong>Păsări și mamifere</strong>: 2 circuite, 4 camere (2 atrii și 2 ventricule) – circulație complet dublă, separare totală a sângelui oxigenat de cel neoxigenat.</li>
                  </ul>
                  <H2 h2text="Excreția și osmoreglarea" indexH2={indexH2("Excreția și osmoreglarea")} indexLectie={indexLectie}></H2>
                  <p>
                  Excreția este procesul de eliminare a <strong>produselor de metabolism</strong> (ureea, acidul uric, amoniacul) și are un rol esențial în menținerea <strong>homeostaziei</strong>.
                  </p>
                  <H3 h3text="Organe excretoare:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Excreția și osmoreglarea")].findIndex(h3 => h3 === "Organe excretoare")}></H3>
                  <ul
                    className={ulClass}>
                      <li><strong>Protozoare</strong> – vacuole contractile.</li>
                      <li><strong>Anelide</strong> – metanefridii.</li>
                      <li><strong>Insecte</strong> – tuburi Malpighi.</li>
                      <li><strong>Pești și amfibieni</strong> – rinichi mezonefros.</li>
                      <li><strong>Reptile, păsări, mamifere</strong> – rinichi metanefros.</li>
                  </ul>
                  <p>
                  <strong>Osmoreglarea</strong> presupune menținerea echilibrului de apă și săruri în corp, adaptată în funcție de mediul de viață (apă dulce, sărată, terestru).
                  </p>
                  <H2 h2text="Sistemul nervos și organele de simț" indexH2={indexH2("Sistemul nervos și organele de simț")} indexLectie={indexLectie}></H2>
                  <p>
                  Sistemul nervos coordonează activitatea întregului organism și este responsabil de perceperea și reacția la stimuli.
                  </p>
                  <H3 h3text="Evoluția sistemului nervos:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemul nervos și organele de simț")].findIndex(h3 => h3 === "Evoluția sistemului nervos")}></H3>
                  <ul
                    className={ulClass}>
                      <li><strong>Difuz (cnidari)</strong> – fără creier sau ganglioni.</li>
                      <li><strong>Ganglionar (anelide, artropode)</strong> – ganglioni nervoși legați prin cordoane.</li>
                      <li><strong>Tubular (vertebrate)</strong> – sistem nervos central (SNC: creier și măduvă) și periferic.</li>
                  </ul>
                  <H3 h3text="Organele de simț:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemul nervos și organele de simț")].findIndex(h3 => h3 === "Organele de simț")}></H3>
                  <ul
                    className={ulClass}>
                      <li><strong>Simțuri de bază</strong>: vedere, auz, miros, gust, tact.</li>
                      <li><strong>Specializări diverse</strong>: ochi compuși (insecte), organe Jacobson (reptile), ureche internă (mamifere).</li>
                  </ul>
                  <H2 h2text="Locomoția și structura sistemului muscular și osos" indexH2={indexH2("Locomoția și structura sistemului muscular și osos")} indexLectie={indexLectie}></H2>
                  <p>
                  Locomoția permite animalelor să se deplaseze în căutarea hranei, partenerilor sau adăpostului.
                  </p>
                  <H3 h3text="Tipuri de locomoție:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Locomoția și structura sistemului muscular și osos")].findIndex(h3 => h3 === "Tipuri de locomoție")}></H3>
                  <ul
                    className={ulClass}>
                      <li><strong>Prin contracții musculare</strong> (protozoare, anelide).</li>
                      <li><strong>Înot</strong> (pești, cetacee).</li>
                      <li><strong>Zbor</strong> (păsări, insecte).</li>
                      <li><strong>Mers/târâre</strong> (mamifere, reptile, amfibieni).</li>
                  </ul>
                  <H3 h3text="Sistemele implicate:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Locomoția și structura sistemului muscular și osos")].findIndex(h3 => h3 === "Sistemele implicate")}></H3>
                  <ul
                    className={ulClass}>
                      <li><strong>Muscular</strong> – alcătuit din fibre musculare, tipuri: neted, striat, cardiac.</li>
                      <li><strong>Osos</strong> – la vertebrate, oferă suport și protecție; împreună cu mușchii formează aparatul locomotor.</li>
                  </ul>
                  <H2 h2text="Reproducerea și dezvoltarea la animale" indexH2={indexH2("Reproducerea și dezvoltarea la animale")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Reproducerea:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reproducerea și dezvoltarea la animale")].findIndex(h3 => h3 === "Reproducerea")}></H3>
                  <ul
                    className={ulClass}>
                      <li><strong>Asexuată</strong> – la organisme inferioare (diviziune, înmugurire, regenerare).</li>
                      <li><strong>Sexuată</strong> – implică gameti; fecundația poate fi internă (reptile, păsări, mamifere) sau externă (pești, amfibieni).</li>
                  </ul>
                  <H3 h3text="Dezvoltarea:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reproducerea și dezvoltarea la animale")].findIndex(h3 => h3 === "Dezvoltarea")}></H3>
                  <ul
                    className={ulClass}>
                      <li><strong>Directă</strong> – puii seamănă cu adulții (mamifere, reptile).</li>
                      <li><strong>Indirectă</strong> – cu stadii larvare (insecte, amfibieni).</li>
                  </ul>
                  <p>
                  Strategiile reproductive variază în funcție de mediu și complexitatea organismului.
                  </p>
                  <p>
                  Procesele vitale la animale reflectă adaptările evolutive ale acestora la diversele medii de viață. De la digestie și respirație la reproducere și coordonare nervoasă, fiecare funcție este esențială pentru menținerea vieții și perpetuarea speciei.
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