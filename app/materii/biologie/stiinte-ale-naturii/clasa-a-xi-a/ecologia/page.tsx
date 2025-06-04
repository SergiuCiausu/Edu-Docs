"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-stiinte-ale-naturii-11";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Ecologia"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Ecosistemul", "Biocenoza"],
    [""],
    ["Factori abiotici", "Factori biotici"],
    ["Populația biologică", "Dinamica populației", "Factori care influențează populațiile"],
    [""],
    ["Relații între specii"],
    [""],
    ["Impactul activităților umane", "Strategii de conservare"],
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
              profil="științe ale naturii" 
              materie="biologie" 
              clasa={11} 
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
                  Ecologia este ramura biologiei care studiază relațiile dintre organisme și mediul lor de viață. Această știință ne ajută să înțelegem cum funcționează natura și ce rol avem în protejarea ei.
                  </p>
                  <H2 h2text="Ecosisteme și biocenoze" indexH2={indexH2("Ecosisteme și biocenoze")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Ecosistemul" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ecosisteme și biocenoze")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ecosisteme și biocenoze")].findIndex(h3 => h3 === "Ecosistemul") : -1}></H3>
                  <p>
                  Un <strong>ecosistem</strong> este o unitate funcțională formată din:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Componenta biotică</strong> (toate organismele vii),</li>
                    <li><strong>Componenta abiotică</strong> (factori fizico-chimici: lumină, temperatură, apă, sol etc.).</li>
                  </ul>
                  <H3 h3text="Biocenoza" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ecosisteme și biocenoze")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ecosisteme și biocenoze")].findIndex(h3 => h3 === "Biocenoza") : -1}></H3>
                  <p>
                  <strong>Biocenoza</strong> reprezintă totalitatea organismelor vii care trăiesc într-un anumit habitat și interacționează între ele.
                  </p>
                  <H2 h2text="Structura și funcțiile ecosistemelor" indexH2={indexH2("Structura și funcțiile ecosistemelor")} indexLectie={indexLectie}></H2>
                  <p>
                  Ecosistemele au o <strong>structură</strong> organizată și îndeplinesc funcții esențiale:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Producția de materie organică</strong> (fotosinteza realizată de producători),</li>
                    <li><strong>Consumul materiei organice</strong> (de către erbivore, carnivore etc.),</li>
                    <li><strong>Degradarea materiei organice</strong>Degradarea materiei organice (de către descompunători).</li>
                  </ul>
                  <H2 h2text="Factorii de mediu" indexH2={indexH2("Factorii de mediu")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Factori abiotici:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Factorii de mediu")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Factorii de mediu")].findIndex(h3 => h3 === "Factori abiotici") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Lumină, temperatură, apă, sol, aer – influențează dezvoltarea organismelor.</li>
                  </ul>
                  <H3 h3text="Factori biotici:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Factorii de mediu")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Factorii de mediu")].findIndex(h3 => h3 === "Factori biotici") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Interacțiunile dintre organisme: prădători, paraziți, concurenți, simbionți.</li>
                  </ul>
                  <H2 h2text="Populațiile și dinamica lor" indexH2={indexH2("Populațiile și dinamica lor")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Populația biologică" indexH3={h3s[h2s.findIndex(h2 => h2 === "Populațiile și dinamica lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Populațiile și dinamica lor")].findIndex(h3 => h3 === "Populația biologică") : -1}></H3>
                  <p>
                  Reprezintă totalitatea indivizilor unei specii care trăiesc într-o anumită zonă și se pot reproduce între ei.
                  </p>
                  <H3 h3text="Dinamica populației" indexH3={h3s[h2s.findIndex(h2 => h2 === "Populațiile și dinamica lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Populațiile și dinamica lor")].findIndex(h3 => h3 === "Dinamica populației") : -1}></H3>
                  <p>
                  Include modificări ale:
                  </p>
                  <ul className={ulClass}>
                    <li>Numărului de indivizi;</li>
                    <li>Densității;</li>
                    <li>Distribuției în spațiu;</li>
                    <li>Structurii pe vârste și sexe.</li>
                  </ul>
                  <H3 h3text="Factori care influențează populațiile:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Populațiile și dinamica lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Populațiile și dinamica lor")].findIndex(h3 => h3 === "Factori care influențează populațiile") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Resursele alimentare;</li>
                    <li>Prădătorii;</li>
                    <li>Bolile;</li>
                    <li>Condițiile climatice;</li>
                    <li>Activitățile umane.</li>
                  </ul>
                  <H2 h2text="Modele de creștere a populațiilor" indexH2={indexH2("Modele de creștere a populațiilor")} indexLectie={indexLectie}></H2>
                  <ul className={ulClass}>
                    <li><strong>Creșterea în formă de J (exponențială)</strong> – populația crește rapid dacă are resurse nelimitate.</li>
                    <li><strong>Creșterea în formă de S (logistică)</strong> – creșterea este limitată de factori de mediu.</li>
                  </ul>
                  <H2 h2text="Comunități ecologice" indexH2={indexH2("Comunități ecologice")} indexLectie={indexLectie}></H2>
                  <p>
                  O <strong>comunitate ecologică</strong> cuprinde mai multe populații care conviețuiesc într-un spațiu comun și interacționează.
                  </p>
                  <H3 h3text="Relații între specii:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comunități ecologice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comunități ecologice")].findIndex(h3 => h3 === "Relații între specii") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Concurență</strong> – două specii luptă pentru aceleași resurse.</li>
                    <li><strong>Simbioză</strong> – colaborare reciproc avantajoasă (ex: ciuperci și rădăcini – micorize).</li>
                    <li><strong>Prădător-pradă</strong> – o specie se hrănește cu alta.</li>
                    <li><strong>Parazitism</strong> – un organism trăiește pe seama altuia.</li>
                  </ul>
                  <H2 h2text="Lanțuri trofice și piramide energetice" indexH2={indexH2("Lanțuri trofice și piramide energetice")} indexLectie={indexLectie}></H2>
                  <ul className={ulClass}>
                    <li><strong>Lanțul trofic</strong>: fluxul de energie și materie de la producători la consumatori și descompunători.</li>
                    <li><strong>Piramida trofică</strong>: reprezentare grafică a energiei sau biomasei la fiecare nivel trofic – energia scade de la bază spre vârf.</li>
                  </ul>
                  <H2 h2text="Protecția mediului" indexH2={indexH2("Protecția mediului")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Impactul activităților umane:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Protecția mediului")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Protecția mediului")].findIndex(h3 => h3 === "Impactul activităților umane") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Poluarea aerului, apei, solului,</li>
                    <li>Defrișări, urbanizare excesivă,</li>
                    <li>Schimbări climatice, pierderea habitatelor.</li>
                  </ul>
                  <H3 h3text="Strategii de conservare:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Protecția mediului")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Protecția mediului")].findIndex(h3 => h3 === "Strategii de conservare") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Crearea de arii protejate (rezervații, parcuri naționale);</li>
                    <li>Conservarea speciilor periclitate;</li>
                    <li>Educație ecologică;</li>
                    <li>Reutilizarea și reciclarea materialelor;</li>
                    <li>Promovarea dezvoltării durabile.</li>
                  </ul>
                  <p>
                  Ecologia studiază relațiile dintre organisme și mediu. Ecosistemele funcționează prin interacțiuni între componentele biotice și abiotice. Populațiile și comunitățile biologice sunt influențate de numeroși factori. Lanțurile trofice reflectă transferul de energie în natură. Activitatea umană afectează echilibrul ecologic, dar putem interveni prin strategii de conservare.
                  </p>
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