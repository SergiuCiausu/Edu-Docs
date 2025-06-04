"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-stiinte-ale-naturii-9";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Dinamica populațiilor și ecosistemelor"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Populațiile biologice și factorii care le influențează", "Factori care influențează populațiile", "Parametri ai unei populații"],
    [""],
    ["Ecosistemul"],
    [""],
    ["Transferul de energie", "Ciclurile biogeochimice"],
  ]

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
                className="flex gap-12">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: ${h1}`}</h1>
                  <p>
                  Viața pe Pământ se desfășoară într-un sistem complex de relații între organisme și mediul în care trăiesc. Pentru a înțelege modul în care natura funcționează ca un întreg, este esențial să studiem populațiile, relațiile dintre organisme și ecosistemele din care fac parte.
                  </p>
                  <H2 h2text="Populațiile și relațiile dintre organisme" indexH2={indexH2("Populațiile și relațiile dintre organisme")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Populațiile biologice și factorii care le influențează" indexH3={h3s[h2s.findIndex(h2 => h2 === "Populațiile și relațiile dintre organisme")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Populațiile și relațiile dintre organisme")].findIndex(h3 => h3 === "Populațiile biologice și factorii care le influențează") : -1}></H3>
                  <p>
                  <strong>Populația biologică</strong> reprezintă un grup de indivizi din aceeași specie, care trăiesc într-un anumit areal, în același timp, și se pot reproduce între ei.
                  </p>
                  <H3 h3text="Factori care influențează populațiile:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Populațiile și relațiile dintre organisme")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Populațiile și relațiile dintre organisme")].findIndex(h3 => h3 === "Factori care influențează populațiile") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Factori biotici</strong>: prădători, paraziți, competitori, resurse alimentare.</li>
                        <li><strong>Factori abiotici</strong>: temperatura, lumină, apă, sol, climă.</li>
                  </ul>
                  <H3 h3text="Parametri ai unei populații:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Populațiile și relațiile dintre organisme")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Populațiile și relațiile dintre organisme")].findIndex(h3 => h3 === "Parametri ai unei populații") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Densitatea</strong> (număr de indivizi pe unitate de suprafață),</li>
                        <li><strong>Natalitatea</strong> (rata nașterilor),</li>
                        <li><strong>Mortalitatea</strong> (rata deceselor),</li>
                        <li><strong>Migrarea</strong> (emigrare/ imigrare).</li>
                  </ul>
                  <H2 h2text="Relațiile ecologice: competiție, simbioză, prădători" indexH2={indexH2("Relațiile ecologice: competiție, simbioză, prădători")} indexLectie={indexLectie}></H2>
                  <p>
                  Organismele interacționează unele cu altele în cadrul ecosistemelor. Aceste relații pot fi:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Competitivă</strong> – două sau mai multe specii concurează pentru aceleași resurse (ex: două specii de plante pentru lumină).</li>
                        <li>
                            <strong>Simbioză</strong> – colaborare între două specii:
                            <ul
                                className={ulClass}>
                                    <li><strong>Mutualism</strong> (ambele au beneficii – ex: ciupercile micorizice și rădăcinile plantelor),</li>
                                    <li><strong>Comensalism</strong> (una beneficiază, cealaltă nu e afectată – ex: păsările care urmează turmele de ierbivore),</li>
                                    <li><strong>Parazitism</strong> (una beneficiază, cealaltă e afectată – ex: tenie și om).</li>
                            </ul>
                        </li>
                        <li><strong>Prădător-pradă</strong> – una din specii (prădătorul) se hrănește cu cealaltă (prada).</li>
                  </ul>
                  <H2 h2text="Ecosisteme și biocenoze" indexH2={indexH2("Ecosisteme și biocenoze")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Ecosistemul" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ecosisteme și biocenoze")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ecosisteme și biocenoze")].findIndex(h3 => h3 === "Ecosistemul") : -1}></H3>
                  <p>
                  Un <strong>ecosistem</strong> este o unitate funcțională formată dintr-o <strong>biocenoză</strong> (totalitatea organismelor vii) și biotopul (mediul lor de viață – sol, apă, aer).
                  </p>
                  <p>
                  <strong>Biocenoza</strong> este alcătuită din:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Fitocenoză</strong> – totalitatea plantelor,</li>
                        <li><strong>Zoocenoză</strong> – totalitatea animalelor,</li>
                        <li><strong>Microbiocenoză</strong> – microorganismele.</li>
                  </ul>
                  <H2 h2text="Structura și funcțiile ecosistemelor" indexH2={indexH2("Structura și funcțiile ecosistemelor")} indexLectie={indexLectie}></H2>
                  <p>
                  Fiecare ecosistem are:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Producători</strong> – organisme autotrofe (plante, alge) care produc substanță organică prin fotosinteză.</li>
                        <li><strong>Consumatori</strong> – organisme heterotrofe care consumă substanță organică (ierbivore, carnivore, omnivore).</li>
                        <li><strong>Dezcompozitori</strong> – bacterii și ciuperci care descompun materia moartă și reciclează substanțele în sol.</li>
                  </ul>
                  <p>
                  Funcționarea ecosistemelor implică:
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Circulația substanțelor nutritive,</li>
                        <li>Fluxul de energie,</li>
                        <li>Reglarea populațiilor.</li>
                  </ul>
                  <H2 h2text="Transferul de energie și ciclurile biogeochimice" indexH2={indexH2("Transferul de energie și ciclurile biogeochimice")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Transferul de energie:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Transferul de energie și ciclurile biogeochimice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Transferul de energie și ciclurile biogeochimice")].findIndex(h3 => h3 === "Transferul de energie") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Energia solară este captată de producători.</li>
                        <li>Aceasta trece de la un nivel trofic la altul (lanț trofic).</li>
                        <li>La fiecare treaptă, se pierde energie sub formă de căldură → doar 10% se transferă mai departe.</li>
                  </ul>
                  <H3 h3text="Ciclurile biogeochimice:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Transferul de energie și ciclurile biogeochimice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Transferul de energie și ciclurile biogeochimice")].findIndex(h3 => h3 === "Ciclurile biogeochimice") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Ciclul carbonului</strong> – implică respirația, fotosinteza și descompunerea materiei.</li>
                        <li><strong>Ciclul azotului</strong> – include fixarea azotului atmosferic și reciclarea lui în sol.</li>
                        <li><strong>Ciclul apei</strong> – implică evaporarea, condensarea, precipitațiile și infiltrarea.</li>
                  </ul>
                  <p>Populațiile sunt afectate de factori biotici și abiotici și interacționează între ele în diverse moduri. Ecosistemele funcționează pe baza relațiilor dintre producători, consumatori și descompunători. Energia se transferă într-un lanț trofic, iar substanțele circulă în cicluri biogeochimice esențiale pentru viață.</p>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={indexLectie}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div>
  )
}

export default Page