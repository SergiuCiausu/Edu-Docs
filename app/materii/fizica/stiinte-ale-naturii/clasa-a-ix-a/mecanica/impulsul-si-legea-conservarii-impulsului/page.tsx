"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-mecanica-9";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Impulsul și legea conservării impulsului"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    ["Coliziuni elastice", "Coliziuni inelastice"],
    [""]
  ]

  const [clickedLinkId, setClickedLinkId] = useState<string>(h1);
  
  const updateClickedLinkId = (newClickedLinkId: string) => {
    setClickedLinkId(newClickedLinkId);
  }

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
              materie="fizică" 
              clasa={9} 
              capitol="mecanică"
              titluri={titluri}
              isPageContent={true}
              clickedLink={clickedLinkId}
              onLinkClick={updateClickedLinkId}
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
                  <H2 h2text="Impulsul mecanic" indexH2={indexH2("Impulsul mecanic")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Impulsul mecanic</strong> este o mărime vectorială ce caracterizează starea de mișcare a unui corp și se definește ca produsul dintre masa corpului și viteza acestuia.
                  </p>
                  <p>
                    <strong>Formula:</strong>
                  </p>
                  <p
                    className="inline-flex items-end justify-center gap-1 w-full">
                            <Vector simbol="p"/>
                            <strong><i className="mx-1">= m ⋅ </i></strong>
                            <Vector simbol="v"/>
                  </p>
                  <ul className={ulClass}>
                    <li
                        className="flex items-center">
                        <span className="mr-2 pt-2 text-l leading-none">•</span>
                        <div
                            className="inline-flex gap-1">
                            <div
                                className="inline-flex items-end gap-2">
                                <Vector simbol="p"/> 
                                este impulsul mecanic [kg · m/s]
                            </div>
                        </div>
                    </li>
                    <li>m este masa corpului [kg]</li> 
                    <li
                        className="flex items-center">
                        <span className="mr-2 pt-2 text-l leading-none">•</span>
                        <div
                            className="inline-flex items-end gap-2">
                            <Vector simbol="v"/> 
                            este viteza corpului [m/s]
                        </div>
                    </li>
                  </ul>
                  <p>
                  Impulsul este un vector, orientat în aceeași direcție cu viteza.
                  </p>
                  <H2 h2text="Legea conservării impulsului" indexH2={indexH2("Legea conservării impulsului")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Enunț</strong>: Într-un sistem izolat (fără forțe externe), <strong>impulsul total</strong> al sistemului se <strong>conservă</strong> în timpul interacțiunilor dintre corpurile componente:
                  </p>
                  <p
                    className="inline-flex items-end justify-center gap-1 w-full">
                        <Vector simbol="p" denumire="inițial" /> 
                        =
                        <Vector simbol="p" denumire="final" /> 
                  </p>
                  <p>
                        <strong className="inline-flex items-center justify-center gap-1 w-full">m<sub><sub>1</sub></sub> ⋅ <Vector simbol="v" denumire="1i" />  + m<sub><sub>2</sub></sub> ⋅ <Vector simbol="v" denumire="2i" /> = m<sub><sub>1</sub></sub> ⋅ <Vector simbol="v" denumire="1f" /> + m<sub><sub>2</sub></sub> ⋅ <Vector simbol="v" denumire="2f" /></strong>
                  </p>
                  <p>
                  Această lege este valabilă în toate sistemele izolate (ex: coliziuni, explozii).
                  </p>
                  <p>
                  Legea conservării impulsului este una dintre cele mai fundamentale legi ale fizicii și se aplică atât în mecanica clasică, cât și în fizica particulelor.
                  </p>
                  <H2 h2text="Coliziunile elastice și inelastice" indexH2={indexH2("Coliziunile elastice și inelastice")} indexLectie={indexLectie}></H2>
                  <p>
                  Coliziunile sunt interacțiuni de scurtă durată între corpuri, în urma cărora se modifică impulsurile și, uneori, și energiile cinetice.
                  </p>
                  <H3 h3text="Coliziuni elastice:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Coliziunile elastice și inelastice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Coliziunile elastice și inelastice")].findIndex(h3 => h3 === "Coliziuni elastice") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Se conservă <strong>impulsul</strong> și <strong>energia cinetică</strong>.</li>
                    <li>Exemple: ciocnirea bilelor de biliard, interacțiuni atomice.</li>
                  </ul>
                  <H3 h3text="Coliziuni inelastice:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Coliziunile elastice și inelastice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Coliziunile elastice și inelastice")].findIndex(h3 => h3 === "Coliziuni inelastice") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Se conservă <strong>impulsul</strong>, dar <strong>nu se conservă energia cinetică</strong>.</li>
                    <li>O parte din energia cinetică se transformă în alte forme de energie (termică, deformare).</li>
                    <li>Exemplu: două mașini care se lovesc și rămân unite după coliziune.</li>
                  </ul>
                  <H2 h2text="Exemplu de problemă:" indexH2={indexH2("Exemplu de problemă:")} indexLectie={indexLectie}></H2>
                  <p>
                  Două bile, A și B, de mase egale (1 kg), se deplasează una spre alta. Bilei A are viteza 3 m/s, iar B -2 m/s. După coliziune (perfect elastică), viteza bilei A devine -2 m/s. Care este viteza finală a bilei B?
                  </p>
                  <p>
                  Se aplică conservarea impulsului:
                  </p>
                  <p
                    className="inline-flex items-end justify-center gap-1 w-full">
                        <strong><i>p<sub>i</sub> = p<sub>f</sub> ⇒ 1⋅3 + 1⋅(−2) + 1⋅v<sub>B<sub>f</sub></sub> ⇒ 1 = -2 + v<sub>B<sub>f</sub></sub> ⇒ v<sub>B<sub>f</sub></sub> = 3 m/s</i></strong>
                  </p>
                  <p>
                  Studiul impulsului și al conservării acestuia este esențial pentru înțelegerea mișcărilor și interacțiunilor dintre corpuri. Coliziunile, frecvent întâlnite în viața de zi cu zi, pot fi explicate simplu prin aceste concepte. Aceste legi se regăsesc și la scară microscopică (particule subatomice) și în aplicații tehnologice moderne (rachete, airbaguri, roboți industriali).
                  </p>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={indexLectie} clickedLink={clickedLinkId} onLinkClick={updateClickedLinkId}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div>
  )
}

export default Page