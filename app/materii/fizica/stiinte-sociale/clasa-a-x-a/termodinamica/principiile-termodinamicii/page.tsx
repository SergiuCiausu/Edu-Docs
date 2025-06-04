"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-termodinamica-10";
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

  const h1 = "Principiile termodinamicii"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Implicații"],
    ["Componente principale", "Randamentul unei mașini termice"],
    [""],
    [""],
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
              profil="științe sociale" 
              materie="fizică" 
              clasa={10} 
              capitol="termodinamică"
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
                  <h1>{`${titluri.length > 1 ? `Capitolul ${indexLectie}: ` : ""}${h1}`}</h1>
                  <H2 h2text="Primul principiu al termodinamicii" indexH2={indexH2("Primul principiu al termodinamicii")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Energia internă a unui sistem variază cu <strong>căldura primită</strong> și cu <strong>lucrul mecanic efectuat asupra sistemului</strong>.
                  </p>
                  <p>
                    <strong>
                    Ecuație:
                    </strong>
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong><i>Δ𝑈 = 𝑄 + 𝐿</i></strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Δ𝑈 = variația energiei interne</li>
                    <li>𝑄 = căldura primită de sistem</li>
                    <li>𝐿 = lucrul mecanic efectuat asupra sistemului</li>
                  </ul>
                  <p>
                  Dacă sistemul face lucru (de exemplu se dilată), atunci {`𝐿 < 0`}
                  </p>
                  <p>
                  Dacă asupra sistemului se face lucru (de exemplu e comprimat), atunci {`𝐿 > 0`}
                  </p>
                  <p>
                  Energia nu se pierde, doar se transformă: căldura și lucrul se pot converti unul în altul, dar suma totală se conservă.
                  </p>
                  <H2 h2text="Al doilea principiu al termodinamicii" indexH2={indexH2("Al doilea principiu al termodinamicii")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>
                    Formulare (enunț Kelvin–Planck):
                    </strong>
                  </p>
                  <p>
                  Este imposibilă realizarea unei mașini termice care să transforme în <strong>lucru mecanic toată căldura</strong> primită de la o sursă.
                  </p>
                  <H3 h3text="Implicații:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Al doilea principiu al termodinamicii")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Al doilea principiu al termodinamicii")].findIndex(h3 => h3 === "Implicații") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Procesele naturale (ex. răcirea, disiparea energiei) au un <strong>sens preferențial, ireversibil</strong>.</li>
                    <li>Apare noțiunea de <strong>entropie</strong>, care <strong>crește</strong> în procesele naturale (de exemplu: gazele care se difuzează, corpurile care se răcesc).</li>
                  </ul>
                  <H2 h2text="Mașini termice (motorul termic)" indexH2={indexH2("Mașini termice (motorul termic)")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O <strong>mașină termică</strong> este un dispozitiv care transformă energia termică în lucru mecanic.
                  </p>
                  <H3 h3text="Componente principale:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mașini termice (motorul termic)")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mașini termice (motorul termic)")].findIndex(h3 => h3 === "Componente principale") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Sursă caldă</strong> (temperatură înaltă): furnizează căldură 𝑄<sub>1</sub>​</li>
                    <li><strong>Agent de lucru</strong> (gazul din cilindru): efectuează un ciclu de transformări</li>
                    <li><strong>Sursă rece</strong> (temperatură joasă): primește căldura reziduală 𝑄<sub>2</sub></li>
                    <li><strong>Lucru mecanic produs</strong>: 𝐿 = 𝑄<sub>1</sub> − 𝑄<sub>2</sub></li>
                  </ul>
                  <H3 h3text="Randamentul unei mașini termice:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mașini termice (motorul termic)")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mașini termice (motorul termic)")].findIndex(h3 => h3 === "Randamentul unei mașini termice") : -1}></H3>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                       <div
                            className="inline-flex items-center gap-1">
                            <strong><i>η = </i></strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong><i>𝐿</i></strong></p>
                                <p className="fractie-jos text-center"><strong><i>𝑄<sub>1</sub></i></strong></p>
                            </div>
                            <strong><i> = </i></strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong><i>𝑄<sub>1</sub> - 𝑄<sub>2</sub></i></strong></p>
                                <p className="fractie-jos text-center"><strong><i>𝑄<sub>1</sub></i></strong></p>
                            </div>
                        </div>  
                  </p>
                  <p>
                  Randamentul este <strong>întotdeauna sub 100%</strong>, din cauza pierderilor și a principiului al doilea.
                  </p>
                  <ul className={ulClass}>
                    <li>Într-un <strong>motor cu aburi</strong>, aburul fierbinte dilată un piston și produce lucru mecanic.</li>
                    <li>Într-un <strong>motor Otto</strong> (benzina), amestecul aer–carburant se comprimă și explodează, generând energie.</li>
                  </ul>
                  <table className={tableClass}>
                    <thead className={trClass}>
                        <th className="flex-30">Concept</th>
                        <th className="flex-70">Descriere</th>
                    </thead>
                    <tbody>
                        <tr className={trClass}>
                            <td className="flex-30"><strong>Primul principiu</strong></td>
                            <td className="flex-70">Legea conservării energiei: căldura și lucrul contribuie la energia internă</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-30"><strong>Al doilea principiu</strong></td>
                            <td className="flex-70">Procesele au un sens ireversibil, nu toată căldura se transformă în lucru</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-30"><strong>Mașină termică</strong></td>
                            <td className="flex-70">Transformă căldura în lucru mecanic cu un anumit randament</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={titluri.length > 1 ? indexLectie : -1} clickedLink={clickedLinkId} onLinkClick={updateClickedLinkId}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div> 
  )
}

export default Page