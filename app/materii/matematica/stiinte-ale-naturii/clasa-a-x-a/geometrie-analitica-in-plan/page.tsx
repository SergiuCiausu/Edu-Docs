"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-10";
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

  const h1 = "Geometrie analitică în plan"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Coordonatele unui vector", "Operații cu vectori"],
    ["Forme ale ecuației", "Determinarea ecuației unei drepte"],
    [""],
    ["Ecuația cercului", "Poziții relative între o dreaptă și un cerc"],
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
              materie="matematică" 
              clasa={10} 
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
                  <H2 h2text="Vectori în plan" indexH2={indexH2("Vectori în plan")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un <strong>vector</strong> este un segment orientat, caracterizat printr-o <strong>direcție</strong>, un <strong>sens</strong> și o <strong>mărime</strong> (modul).
                  </p>
                  <H3 h3text="Coordonatele unui vector:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Vectori în plan")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Vectori în plan")].findIndex(h3 => h3 === "Coordonatele unui vector") : -1}></H3>
                  <p
                    className="inline-flex items-end gap-2">
                    <span>Dacă vectorul</span> 
                    <Vector simbol="𝐴𝐵"/>
                    <span>are originea în 𝐴 (𝑥<sub>1</sub>, 𝑦<sub>1</sub>) și extremitatea în 𝐵 (𝑥<sub>2</sub>, 𝑦<sub>2</sub>), atunci:</span>        
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <Vector simbol="𝐴𝐵"/>
                        <span>  = (𝑥<sub>2</sub> - 𝑥<sub>1</sub>, 𝑦<sub>2</sub> - 𝑦<sub>1</sub>)</span>
                  </p>
                  <H3 h3text="Operații cu vectori:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Vectori în plan")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Vectori în plan")].findIndex(h3 => h3 === "Operații cu vectori") : -1}></H3>
                  <ul className={ulClass}>
                    <li
                        className="flex items-end gap-1">
                        <span className="mr-2 text-l leading-none">•</span>
                        <strong>Adunare:  </strong>
                        <Vector simbol="𝑢"/> 
                        <span>+</span> 
                        <Vector simbol="𝑣"/> 
                        <span>= 𝑢<sub>1</sub> + 𝑣<sub>1</sub>, 𝑢<sub>2</sub> + 𝑣<sub>2</sub></span>
                    </li>
                    <li
                        className="flex items-end gap-1">
                        <span className="mr-2 text-l leading-none">•</span>
                        <strong>Înmulțire cu scalar:  𝜆 ⋅</strong>
                        <Vector simbol="𝑢"/> 
                        <span>= (𝜆𝑢<sub>1</sub> + 𝜆𝑢<sub>2</sub>)</span>
                    </li>
                    <li
                        className="flex items-center gap-1 pt-2">
                        <span className="mr-2 text-l leading-none">•</span>
                        <strong>Modulul vectorului:</strong>
                        <span>|</span>
                        <Vector simbol="𝑢"/> 
                        <span>
                             | = 
                        </span>
                        <span
                            className="inline-flex items-center">
                            <span className="text-4xl font-extralight">√</span>
                            (𝑢
                            <div
                                className="inline-flex flex-col justify-center text-xs">
                                <div><sub>2</sub></div>
                                <div><sup>1</sup></div>
                            </div>
                            + 
                            𝑢
                            <div
                                className="inline-flex flex-col justify-center text-xs">
                                <div><sub>2</sub></div>
                                <div><sup>2</sup></div>
                            </div>
                            )
                        </span>
                    </li>
                    <li
                        className="flex items-center gap-1 pt-2">
                        <span className="mr-2 text-l leading-none">•</span>
                        <strong>Produsul scalar:</strong>
                        <Vector simbol="𝑢"/> 
                        <span>⋅</span> 
                        <Vector simbol="𝑣"/> 
                        <span>= 𝑢<sub>1</sub>𝑣<sub>1</sub> + 𝑢<sub>2</sub>𝑣<sub>2</sub></span>
                    </li>
                  </ul>
                  <H2 h2text="Ecuația dreptei în plan" indexH2={indexH2("Ecuația dreptei în plan")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Forme ale ecuației:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ecuația dreptei în plan")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ecuația dreptei în plan")].findIndex(h3 => h3 === "Forme ale ecuației") : -1}></H3>
                  <ul className={ulClass}>
                    <li>
                        <strong>Ecuația generală:</strong>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                                <strong>𝐴𝑥 + 𝐵𝑦 + 𝐶 = 0, 𝐴, 𝐵 ≠ 0</strong>
                        </p>
                    </li>
                    <li>
                        <strong>Forma explicită:</strong>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                            <strong>𝑦 = 𝑚𝑥 + 𝑛</strong>, unde 𝑚 = panta dreptei și 𝑛 = ordonata la origine
                        </p>
                    </li>
                    <li>
                        <strong>Forma segmentară:</strong>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                            <div
                                className="inline-flex items-center gap-1 pt-2">
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center"><strong>𝑥</strong></p>
                                    <p className="fractie-jos text-center"><strong>𝑎</strong></p>
                                </div>
                                <strong>  +  </strong>
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center"><strong>𝑦</strong></p>
                                    <p className="fractie-jos text-center"><strong>𝑏</strong></p>
                                </div>
                                <strong>  = 1</strong>, (𝑎, 𝑏 ≠ 0)
                            </div>
                        </p>
                    </li>
                  </ul>
                  <H3 h3text="Determinarea ecuației unei drepte:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ecuația dreptei în plan")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ecuația dreptei în plan")].findIndex(h3 => h3 === "Determinarea ecuației unei drepte") : -1}></H3>
                  <p>
                  Prin două puncte: 𝐴 (𝑥<sub>1</sub>, 𝑦<sub>1</sub>), 𝐵 (𝑥<sub>2</sub>, 𝑦<sub>2</sub>)
                  </p>
                  <p>
                  Panta:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <div
                                className="inline-flex items-center gap-1 pt-2">
                                <strong>𝑚 =  </strong>
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center"><strong>𝑦<sub>2</sub> - 𝑦<sub>1</sub></strong></p>
                                    <p className="fractie-jos text-center"><strong>𝑥<sub>2</sub> - 𝑥<sub>1</sub></strong></p>
                                </div>
                            </div>
                  </p>
                  <p>
                  Ecuația:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <strong>𝑦 - 𝑦<sub>1</sub> = 𝑚(𝑥 - 𝑥<sub>1</sub>)</strong>
                  </p>
                  <H2 h2text="Poziții relative între drepte" indexH2={indexH2("Poziții relative între drepte")} indexLectie={titluri.length > 1 ? indexLectie : - 1}></H2>
                  <p>
                  Fie două drepte:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                    𝑑<sub>1</sub> : 𝑎<sub>1</sub>𝑥 + 𝑏<sub>1</sub>𝑦 + 𝑐<sub>1</sub> = 0, 𝑑<sub>2</sub> : 𝑎<sub>2</sub>𝑥 + 𝑏<sub>2</sub>𝑦 + 𝑐<sub>2</sub> = 0,
                  </p>
                  <p>
                  Cazuri:
                  </p>
                  <ul className={ulClass}>
                    <li>
                        <strong>Paralele:</strong>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                            <div
                                    className="inline-flex items-center gap-1 pt-2">
                                    <div
                                        className={fractie}>
                                        <p className="fractie-sus text-center"><strong>𝑎<sub>1</sub></strong></p>
                                        <p className="fractie-jos text-center"><strong>𝑎<sub>2</sub></strong></p>
                                    </div>
                                    <strong>  =  </strong>
                                    <div
                                        className={fractie}>
                                        <p className="fractie-sus text-center"><strong>𝑏<sub>1</sub></strong></p>
                                        <p className="fractie-jos text-center"><strong>𝑏<sub>2</sub></strong></p>
                                    </div>
                                    <strong> ,  </strong>
                                    <div
                                        className={fractie}>
                                        <p className="fractie-sus text-center"><strong>𝑎<sub>1</sub></strong></p>
                                        <p className="fractie-jos text-center"><strong>𝑎<sub>2</sub></strong></p>
                                    </div>
                                    <strong>  ≠  </strong>
                                    <div
                                        className={fractie}>
                                        <p className="fractie-sus text-center"><strong>𝑐<sub>1</sub></strong></p>
                                        <p className="fractie-jos text-center"><strong>𝑐<sub>2</sub></strong></p>
                                    </div>
                                </div>
                        </p>
                    </li>
                    <li>
                        <strong>Coincidente:</strong>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                            <div
                                    className="inline-flex items-center gap-1 pt-2">
                                    <div
                                        className={fractie}>
                                        <p className="fractie-sus text-center"><strong>𝑎<sub>1</sub></strong></p>
                                        <p className="fractie-jos text-center"><strong>𝑎<sub>2</sub></strong></p>
                                    </div>
                                    <strong>  =  </strong>
                                    <div
                                        className={fractie}>
                                        <p className="fractie-sus text-center"><strong>𝑏<sub>1</sub></strong></p>
                                        <p className="fractie-jos text-center"><strong>𝑏<sub>2</sub></strong></p>
                                    </div>
                                    <strong>  =  </strong>
                                    <div
                                        className={fractie}>
                                        <p className="fractie-sus text-center"><strong>𝑐<sub>1</sub></strong></p>
                                        <p className="fractie-jos text-center"><strong>𝑐<sub>2</sub></strong></p>
                                    </div>
                                </div>
                        </p>
                    </li>
                    <li>
                        <strong>Perpendiculare:</strong>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                                <strong>𝑚<sub>1</sub> ⋅ 𝑚<sub>2</sub> = -1</strong>
                        </p>
                    </li>
                    <li>
                        <strong>Concurente</strong>: se intersectează într-un singur punct (sistem compatibil și determinat)
                    </li>
                  </ul>
                  <H2 h2text="Cerc în plan" indexH2={indexH2("Cerc în plan")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Ecuația cercului:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Cerc în plan")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Cerc în plan")].findIndex(h3 => h3 === "Ecuația cercului") : -1}></H3>
                  <p>
                  Cercul cu centru în O(𝑥<sub>0</sub>, 𝑦<sub>0</sub>) și rază 𝑟 are ecuația:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                    <strong>(𝑥 - 𝑥<sub>0</sub>)<sup>2</sup> + (𝑦 - 𝑦<sub>0</sub>)<sup>2</sup> = 𝑟<sup>2</sup></strong>
                  </p>
                  <H3 h3text="Poziții relative între o dreaptă și un cerc:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Cerc în plan")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Cerc în plan")].findIndex(h3 => h3 === "Poziții relative între o dreaptă și un cerc") : -1}></H3>
                  <p>
                  Fie cercul:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                    (𝑥 - 𝑥<sub>0</sub>)<sup>2</sup> + (𝑦 - 𝑦<sub>0</sub>)<sup>2</sup> = 𝑟<sup>2</sup>
                  </p>
                  <p>
                  și dreapta:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                    𝐴𝑥 + 𝐵𝑦 + 𝐶 = 0
                  </p>
                  <p>
                    <strong>Se determină distanța de la centru la dreaptă:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            <strong>𝑑 =  </strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>|𝐴𝑥<sub>0</sub> + 𝐵𝑦<sub>0</sub> + 𝐶|</strong></p>
                                <p className="fractie-jos text-center"><strong><span className="text-4xl font-extralight">√(</span><span>𝐴<sup>2</sup> + 𝐵<sup>2</sup></span><span className="text-4xl font-extralight">)</span></strong></p>
                            </div>
                        </div>
                  </p>
                  <ul className={ulClass}>
                    <li>Dacă 𝑑 {`<`} 𝑟: dreapta <strong>intersectează</strong> cercul în două puncte.</li>
                    <li>Dacă 𝑑 {`=`} 𝑟: dreapta este <strong>tangentă</strong> la cerc.</li>
                    <li>Dacă 𝑑 {`>`} 𝑟: dreapta este <strong>exterioară</strong> cercului.</li>
                  </ul>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[176px] sticky overflow-y-auto">
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