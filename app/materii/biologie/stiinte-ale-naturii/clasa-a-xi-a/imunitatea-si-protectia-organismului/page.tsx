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

  const h1 = "Imunitatea și protecția organismului"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Componentele sistemului imunitar"],
    ["Imunitatea înnăscută (nespecifică)", "Imunitatea dobândită (specifică)"],
    ["Boli autoimune", "Imunodeficiențele"],
    ["Tipuri de vaccinuri", "Eficiența vaccinării"],
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
                  Organismul uman este expus zilnic la numeroase microorganisme și agenți patogeni. Pentru a se proteja, acesta dispune de un sistem complex de apărare – <strong>sistemul imunitar</strong>, care recunoaște, neutralizează și elimină factorii nocivi.
                  </p>
                  <H2 h2text="Sistemul imunitar" indexH2={indexH2("Sistemul imunitar")} indexLectie={indexLectie}></H2>
                  <p>
                  Sistemul imunitar este format dintr-o rețea de organe, celule și molecule specializate în apărarea organismului împotriva agenților patogeni precum bacterii, virusuri, fungi sau toxine.
                  </p>
                  <H3 h3text="Componentele sistemului imunitar:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemul imunitar")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemul imunitar")].findIndex(h3 => h3 === "Componentele sistemului imunitar") : -1}></H3>
                  <ul className={ulClass}>
                    <li>
                        <strong>Limfocitele</strong>: celule albe ale sângelui esențiale în răspunsul imunitar. Există două tipuri principale:
                        <ul className={ulClass}>
                            <li><strong>Limfocitele B</strong>: produc anticorpi.</li>
                            <li><strong>Limfocitele T</strong>: distrug celulele infectate și coordonează răspunsul imun.</li>
                        </ul>
                    </li>
                    <li><strong>Anticorpii</strong>: proteine specifice produse de limfocitele B, care se leagă de antigeni și facilitează neutralizarea lor.</li>
                    <li><strong>Fagocitele</strong> (ex: macrofage, neutrofile): celule care „înghit” și distrug agenții patogeni printr-un proces numit <strong>fagocitoză</strong>.</li>
                  </ul>
                  <H2 h2text="Mecanismele imunității" indexH2={indexH2("Mecanismele imunității")} indexLectie={indexLectie}></H2>
                  <p>
                  Există două tipuri principale de imunitate:
                  </p>
                  <H3 h3text="Imunitatea înnăscută (nespecifică):" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mecanismele imunității")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mecanismele imunității")].findIndex(h3 => h3 === "Imunitatea înnăscută (nespecifică)") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Este prezentă de la naștere.</li>
                    <li>Reacționează rapid și generalizat la orice agent patogen.</li>
                    <li>Include bariere fizice (pielea, mucoasele), secreții (saliva, lacrimile) și fagocite.</li>
                  </ul>
                  <H3 h3text="Imunitatea dobândită (specifică):" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mecanismele imunității")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mecanismele imunității")].findIndex(h3 => h3 === "Imunitatea dobândită (specifică)") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Se dezvoltă în timp, după contactul cu un agent patogen.</li>
                    <li>Are <strong>memorie imunologică</strong>, permițând un răspuns mai rapid și eficient la reinfectare.</li>
                    <li>Implică limfocitele B și T, și anticorpii specifici fiecărui agent infecțios.</li>
                  </ul>
                  <H2 h2text="Boli autoimune și imunodeficiențe" indexH2={indexH2("Boli autoimune și imunodeficiențe")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Boli autoimune:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Boli autoimune și imunodeficiențe")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Boli autoimune și imunodeficiențe")].findIndex(h3 => h3 === "Boli autoimune") : -1}></H3>
                  <p>
                  Apar când sistemul imunitar atacă propriile celule și țesuturi, percepându-le greșit ca pe agenți străini.
                  </p>
                  <p>
                  Exemple:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Lupus eritematos sistemic</strong></li>
                    <li><strong>Diabet zaharat de tip 1</strong></li>
                    <li><strong>Poliartrită reumatoidă</strong></li>
                  </ul>
                  <p>
                  Mecanismul bolilor autoimune presupune o <strong>defecțiune în recunoașterea „self”</strong>, ceea ce duce la inflamații cronice și distrugerea țesuturilor proprii.
                  </p>
                  <H3 h3text="Imunodeficiențele:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Boli autoimune și imunodeficiențe")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Boli autoimune și imunodeficiențe")].findIndex(h3 => h3 === "Imunodeficiențele") : -1}></H3>
                  <p>
                  Sunt tulburări ale sistemului imunitar în care acesta este incapabil să lupte eficient împotriva infecțiilor.
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Congenitale</strong>: prezente de la naștere (ex: agamaglobulinemia).</li>
                    <li><strong>Dobândite</strong>: apar în urma unor boli sau tratamente (ex: <strong>HIV/SIDA</strong>, tratamente imunosupresoare).</li>
                  </ul>
                  <H2 h2text="Vaccinarea și prevenirea bolilor infecțioase" indexH2={indexH2("Vaccinarea și prevenirea bolilor infecțioase")} indexLectie={indexLectie}></H2>
                  <p>
                  Vaccinarea este una dintre cele mai eficiente metode de prevenire a bolilor infecțioase. Ea determină formarea unui răspuns imun specific, <strong>fără a provoca boala</strong>.
                  </p>
                  <H3 h3text="Tipuri de vaccinuri:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Vaccinarea și prevenirea bolilor infecțioase")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Vaccinarea și prevenirea bolilor infecțioase")].findIndex(h3 => h3 === "Tipuri de vaccinuri") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Vaccinuri atenuate</strong> (virusuri sau bacterii slăbite): ex. vaccinul ROR (rujeolă-oreion-rubeolă).</li>
                    <li><strong>Vaccinuri inactivate</strong> (microorganisme moarte): ex. vaccinul anti-hepatită A.</li>
                    <li><strong>Vaccinuri subunitare</strong> (părți din agentul patogen): ex. vaccinul HPV.</li>
                    <li><strong>Vaccinuri ARNm</strong> (codifică o proteină a virusului): ex. unele vaccinuri împotriva COVID-19.</li>
                  </ul>
                  <H3 h3text="Eficiența vaccinării:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Vaccinarea și prevenirea bolilor infecțioase")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Vaccinarea și prevenirea bolilor infecțioase")].findIndex(h3 => h3 === "Eficiența vaccinării") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Oferă <strong>imunitate de lungă durată</strong>.</li>
                    <li>Contribuie la <strong>imunitatea de grup</strong>, protejând și persoanele nevaccinate.</li>
                    <li>A dus la <strong>eradicarea</strong> sau <strong>reducerea semnificativă</strong> a unor boli (ex: variola, poliomielita).</li>
                  </ul>
                  <p>
                  Sistemul imunitar protejează organismul prin celule precum limfocitele și fagocitele, și molecule precum anticorpii. Imunitatea poate fi înnăscută (rapidă, nespecifică) sau dobândită (specifică, cu memorie). Boli autoimune apar când sistemul imunitar atacă organismul propriu. Imunodeficiențele duc la o protecție scăzută împotriva infecțiilor. Vaccinarea este esențială pentru prevenirea bolilor infecțioase și menținerea sănătății publice.
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