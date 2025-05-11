"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import H3 from '@/app/components/PageContent/H3';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { titluri } from '@/app/data/capitole-bio-mate-info-12';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { ulClass, olClass } from '@/app/class/ul';

const page = () => {
  
  const { theme, setTheme } = useTheme();
  
    const [clickedLinkId, setClickedLinkId] = useState<string>("");
    
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === "Ecologie și protecția mediului")].h3.map(header => header.text)

    const h3s = [
      [""],
      ["Tipuri de relații între organisme", "Adaptări la mediu"],
      ["Probleme majore"],
      ["Măsuri importante", "Legislație și acorduri internaționale"]
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Ecologie și protecția mediului") + 1;
    

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
              clasa={12} 
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
                  <h1>{`Capitolul ${indexLectie}: Ecologie și protecția mediului`}</h1>
                  <p>
                  Ecologia este ramura biologiei care studiază relațiile dintre organisme și mediul lor, iar protecția mediului se referă la ansamblul de măsuri prin care se asigură păstrarea echilibrului ecologic și conservarea biodiversității. În contextul actual al schimbărilor climatice și al degradării ecosistemelor, studiul ecologiei este esențial.
                  </p>
                  <H2 h2text="Ecosisteme și biocenoze" indexH2={indexH2("Ecosisteme și biocenoze")} indexLectie={indexLectie}></H2>
                  <p>
                  Un <strong>ecosistem</strong> este o unitate funcțională formată dintr-o comunitate de organisme vii (biocenoză) și mediul lor abiotic (biotop), aflate într-o permanentă interacțiune.
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Biocenoza</strong> este totalitatea organismelor care trăiesc într-un anumit habitat (plante, animale, microorganisme).</li>
                        <li><strong>Biotopul</strong> cuprinde condițiile fizico-chimice (sol, apă, aer, temperatură, lumină) ale mediului.</li>
                  </ul>
                  <p>
                  Exemple de ecosisteme:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Terestre</strong>: păduri, pajiști, deșerturi</li>
                        <li><strong>Acuatice</strong>: lacuri, râuri, oceane</li>
                  </ul>
                  <p>
                  Fiecare ecosistem are:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Lanțuri trofice</strong>: relații alimentare între organisme (producători → consumatori → descompunători)</li>
                        <li><strong>Cicluri ale materiei</strong> și <strong>fluxuri de energie</strong></li>
                  </ul>
                  <H2 h2text="Relațiile dintre organisme și mediul lor" indexH2={indexH2("Relațiile dintre organisme și mediul lor")} indexLectie={indexLectie}></H2>
                  <p>
                  Organismele nu trăiesc izolat, ci interacționează atât între ele, cât și cu factorii de mediu.
                  </p>
                  <H3 h3text="Tipuri de relații între organisme:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Relațiile dintre organisme și mediul lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Relațiile dintre organisme și mediul lor")].findIndex(h3 => h3 === "Tipuri de relații între organisme") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>
                            <strong>Relații intra- și interspecifice:</strong>
                            <ul
                                className={ulClass}>
                                    <li><strong>Competitivitate</strong> – pentru resurse (hrană, adăpost, lumină)</li>
                                    <li><strong>Prădător-pradă</strong></li>
                                    <li><strong>Parazitism</strong> – un organism trăiește pe seama altuia, afectându-l</li>
                                    <li><strong>Simbioză</strong> – colaborare benefică reciprocă (ex: micorizele)</li>
                                    <li><strong>Comensalism</strong> – un organism beneficiază, celălalt nu e afectat</li>
                            </ul>
                        </li>
                  </ul>
                  <H3 h3text="Adaptări la mediu:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Relațiile dintre organisme și mediul lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Relațiile dintre organisme și mediul lor")].findIndex(h3 => h3 === "Adaptări la mediu") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Structuri speciale (rădăcini adânci, frunze suculente)</li>
                        <li>Comportamente specifice (hibernare, migrație)</li>
                        <li>Reglarea fiziologică (termoreglare, fotosinteză adaptată luminii)</li>
                  </ul>
                  <H2 h2text="Impactul activităților umane asupra mediului" indexH2={indexH2("Impactul activităților umane asupra mediului")} indexLectie={indexLectie}></H2>
                  <p>
                  Activitățile umane pot modifica profund echilibrul ecosistemelor:
                  </p>
                  <H3 h3text="Probleme majore:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Impactul activităților umane asupra mediului")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Impactul activităților umane asupra mediului")].findIndex(h3 => h3 === "Probleme majore") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Poluarea</strong> aerului, apei și solului</li>
                        <li><strong>Defrișările</strong> și pierderea habitatelor</li>
                        <li><strong>Schimbările climatice</strong> – efect de seră, topirea ghețarilor</li>
                        <li><strong>Suprasolicitarea resurselor naturale</strong> (pescuit excesiv, agricultură intensivă)</li>
                        <li><strong>Urbanizarea accelerată</strong> – distrugerea ecosistemelor naturale</li>
                  </ul>
                  <p>
                  Consecințele:
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Scăderea biodiversității</li>
                        <li>Dezechilibre trofice</li>
                        <li>Creșterea incidenței bolilor</li>
                        <li>Degradarea calității vieții</li>
                  </ul>
                  <H2 h2text="Strategii de conservare și protecție a biodiversității" indexH2={indexH2("Strategii de conservare și protecție a biodiversității")} indexLectie={indexLectie}></H2>
                  <p>
                  Pentru a proteja mediul și a conserva diversitatea biologică, sunt necesare măsuri la nivel local, național și global.
                  </p>
                  <H3 h3text="Măsuri importante:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Strategii de conservare și protecție a biodiversității")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Strategii de conservare și protecție a biodiversității")].findIndex(h3 => h3 === "Măsuri importante") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Aria protejată</strong> – zone în care activitățile umane sunt limitate (parcuri naționale, rezervații)</li>
                        <li><strong>Reîmpăduriri și refacerea habitatelor degradate</strong></li>
                        <li><strong>Utilizarea rațională a resurselor</strong> – energie verde, reciclare, consum responsabil</li>
                        <li><strong>Educația ecologică</strong> – conștientizarea rolului fiecărei persoane în protejarea naturii</li>
                  </ul>
                  <H3 h3text="Legislație și acorduri internaționale:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Strategii de conservare și protecție a biodiversității")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Strategii de conservare și protecție a biodiversității")].findIndex(h3 => h3 === "Legislație și acorduri internaționale") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Convenția privind diversitatea biologică</li>
                        <li>Acordul de la Paris (privind schimbările climatice)</li>
                        <li>Directiva Habitate (UE)</li>
                  </ul>
                  <p>
                  Ecologia ne ajută să înțelegem interdependențele din natură și importanța fiecărei specii în menținerea echilibrului ecosistemelor. Protejarea mediului este o responsabilitate colectivă, iar acțiunile noastre de azi vor influența sănătatea planetei de mâine. Prin conservarea biodiversității, asigurăm resursele necesare generațiilor viitoare și menținem armonia dintre om și natură.
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