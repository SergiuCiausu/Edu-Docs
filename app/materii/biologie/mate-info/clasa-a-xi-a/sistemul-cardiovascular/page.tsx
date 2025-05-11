"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import H3 from '@/app/components/PageContent/H3';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { titluri } from '@/app/data/capitole-bio-mate-info-11';
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

    const h2s = [
      "Structura și funcțiile inimii",
      "Circulația sanguină și rolul sistemului cardiovascular",
      "Vasele de sânge și circulația sângelui",
      "Circulația mică și mare",
      "Reglarea ritmului cardiac și tensiunii arteriale"
    ]

    const h3s = [
      ["Anatomia inimii (atrii, ventricule, valve)"],
      ["Roluri esențiale"],
      ["Tipuri de vase sanguine"],
      ["Circulația mică (pulmonară)", "Circulația mare (sistemică)"],
      ["Ritmul cardiac", "Tensiunea arterială"]
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Sistemul cardiovascular") + 1;

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
                className="flex gap-12 relative">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: Sistemul cardiovascular`}</h1>
                  <p>
                  <strong>Sistemul cardiovascular</strong> este responsabil de transportul sângelui, oxigenului, nutrienților, hormonilor și al altor substanțe esențiale către țesuturi și organe, precum și de eliminarea produselor reziduale. Acest sistem asigură menținerea homeostaziei și funcționarea optimă a organismului.
                  </p>
                  <H2 h2text="Structura și funcțiile inimii" indexH2={indexH2("Structura și funcțiile inimii")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Anatomia inimii (atrii, ventricule, valve)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile inimii")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile inimii")].findIndex(h3 => h3 === "Anatomia inimii (atrii, ventricule, valve)") : -1}></H3>
                  <p>
                  <strong>Inima</strong> este un organ muscular cavitar, de dimensiunea aproximativă a unui pumn, situat în cavitatea toracică, între cei doi plămâni, ușor deplasată spre stânga.
                  </p>
                  <p>
                  Inima este alcătuită din <strong>patru camere</strong>:
                  </p>
                  <ul
                    className={ulClass}>
                    <li><strong>Două atrii</strong> (drept și stâng) – camerele superioare care primesc sângele.</li>
                    <li><strong>Două ventricule</strong> (drept și stâng) – camerele inferioare care pompează sângele.</li>
                  </ul>
                  <p>
                  Între aceste camere se află <strong>valve</strong> care reglează direcția fluxului sanguin și împiedică întoarcerea sângelui:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Valva atrioventriculară dreaptă (tricuspidă)</strong></li>
                        <li><strong>Valva atrioventriculară stângă (mitrală sau bicuspidă)</strong></li>
                        <li><strong>Valvele semilunare</strong> (pulmonară și aortică)</li>
                  </ul>
                  <p>
                  <strong>Funcția principală a inimii</strong> este de a <strong>pompa sângele</strong> în sistemul circulator, asigurând astfel oxigenarea și hrănirea tuturor celulelor corpului.
                  </p>
                  <H2 h2text="Circulația sanguină și rolul sistemului cardiovascular" indexH2={indexH2("Circulația sanguină și rolul sistemului cardiovascular")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Roluri esențiale:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Circulația sanguină și rolul sistemului cardiovascular")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Circulația sanguină și rolul sistemului cardiovascular")].findIndex(h3 => h3 === "Roluri esențiale") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Transportul <strong>oxigenului</strong> și <strong>dioxidului de carbon</strong></li>
                        <li>Transportul <strong>nutrienților</strong> și <strong>hormonilor</strong></li>
                        <li>Eliminarea <strong>produselor metabolice</strong></li>
                        <li>Reglarea <strong>temperaturii corporale</strong></li>
                        <li><strong>Protecție imunologică</strong> (prin celule albe și anticorpi)</li>
                  </ul>
                  <p>
                  Sângele este pus în mișcare de inimă printr-un sistem complex de vase: <strong>artere, vene și capilare</strong>.
                  </p>
                  <H2 h2text="Vasele de sânge și circulația sângelui" indexH2={indexH2("Vasele de sânge și circulația sângelui")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Tipuri de vase sanguine" indexH3={h3s[h2s.findIndex(h2 => h2 === "Vasele de sânge și circulația sângelui")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Vasele de sânge și circulația sângelui")].findIndex(h3 => h3 === "Tipuri de vase sanguine") : -1}></H3>
                  <p>
                    <strong>1. Artere</strong>
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Transportă sângele <strong>de la inimă către țesuturi</strong>.</li>
                        <li>Au pereți groși și elastici pentru a rezista presiunii mari.</li>
                        <li>Exemple: artera aortă, artera pulmonară.</li>
                  </ul>
                  <p>
                    <strong>2. Vene</strong>
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Transportă sângele <strong>de la țesuturi spre inimă</strong>.</li>
                        <li>Pereți mai subțiri, presiune scăzută.</li>
                        <li>Conțin <strong>valve</strong> care previn refluxul sanguin.</li>
                        <li>Exemple: vena cavă, venele pulmonare.</li>
                  </ul>
                  <p>
                    <strong>3. Capilare</strong>
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Vase microscopice care leagă arterele de vene.</li>
                        <li>Pereți subțiri (un singur strat de celule) → permit schimburile de gaze, nutrienți și deșeuri între sânge și celule.</li>
                  </ul>
                  <H2 h2text="Circulația mică și mare" indexH2={indexH2("Circulația mică și mare")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Circulația mică (pulmonară)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Circulația mică și mare")].findIndex(h3 => h3 === "Circulația mică (pulmonară)")}></H3>
                  <ul
                    className={ulClass}>
                        <li>Transportă sângele <strong>neoxigenat</strong> de la <strong>ventriculul drept</strong> către <strong>plămâni</strong>, unde are loc schimbul de gaze.</li>
                        <li>Sângele <strong>oxigenat</strong> se întoarce în <strong>atriul stâng</strong>.</li>
                  </ul>
                  <H3 h3text="Circulația mare (sistemică)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Circulația mică și mare")].findIndex(h3 => h3 === "Circulația mare (sistemică)")}></H3>
                  <ul
                    className={ulClass}>
                        <li>Pornește din <strong>ventriculul stâng</strong> și transportă sângele oxigenat în tot corpul.</li>
                        <li>Sângele revine <strong>neoxigenat</strong> în <strong>atriul drept</strong>.</li>
                  </ul>
                  <p>
                  Aceste două circuite formează un sistem închis, în care sângele circulă continuu, fără contact direct cu țesuturile.
                  </p>
                  <H2 h2text="Reglarea ritmului cardiac și tensiunii arteriale" indexH2={indexH2("Reglarea ritmului cardiac și tensiunii arteriale")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Ritmul cardiac" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reglarea ritmului cardiac și tensiunii arteriale")].findIndex(h3 => h3 === "Ritmul cardiac")}></H3>
                  <p>
                  Ritmul contracțiilor inimii este reglat de un sistem propriu de conducere electrică, numit <strong>sistemul excitoconductor</strong>:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Nodul sinoatrial (SA)</strong> – inițiază impulsul electric („pacemaker-ul natural”).</li>
                        <li><strong>Nodul atrioventricular (AV)</strong> – transmite impulsul către ventricule.</li>
                        <li><strong>Fasciculul His și fibrele Purkinje</strong> – distribuie impulsul în mușchiul ventricular.</li>
                  </ul>
                  <H3 h3text="Tensiunea arterială" indexH3={h3s.length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reglarea ritmului cardiac și tensiunii arteriale")].findIndex(h3 => h3 === "Tensiunea arterială") : -1}></H3>
                  <p>
                  Este presiunea exercitată de sânge asupra pereților arteriali. Este exprimată prin două valori:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Sistolă</strong> – presiunea maximă în timpul contracției inimii.</li>
                        <li><strong>Diastolă</strong> – presiunea minimă în repausul inimii.</li>
                  </ul>
                  <p>
                    <strong>Reglarea tensiunii arteriale:</strong>
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Prin mecanisme <strong>nervoase</strong> (centri vasomotori din bulb).</li>
                        <li>Prin mecanisme <strong>hormonale</strong> (ex: adrenalina, angiotensina).</li>
                        <li>Prin reglarea <strong>volemiei</strong> (cantitatea de sânge circulant).</li>
                  </ul>
                  <p>
                  Sistemul cardiovascular joacă un rol esențial în menținerea vieții. Prin rețeaua complexă de vase și prin activitatea ritmică a inimii, sângele ajunge la fiecare celulă, oferindu-i oxigen și nutrienți, și eliminând deșeurile. Înțelegerea acestui sistem este crucială pentru sănătatea întregului organism și pentru prevenirea bolilor cardiovasculare, care reprezintă una dintre principalele cauze de mortalitate la nivel global.
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