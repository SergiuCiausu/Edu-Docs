"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
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

  const h1 = "Cinematica punctului material"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
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
              profil="științe sociale" 
              materie="fizică" 
              clasa={9} 
              capitol="mecanică"
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
                  <H2 h2text="Ce este cinematica?" indexH2={indexH2("Ce este cinematica?")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Cinematica</strong> este partea mecanicii care se ocupă cu <strong>descrierea mișcării corpurilor</strong>, fără a studia cauzele acesteia. Elementul de bază studiat este <strong>punctul material</strong>, adică un corp idealizat cu dimensiuni neglijabile comparativ cu traiectoria parcursă.
                  </p>
                  <H2 h2text="Mărimi fizice scalare și vectoriale" indexH2={indexH2("Mărimi fizice scalare și vectoriale")} indexLectie={indexLectie}></H2>
                  <ul className={ulClass}>
                    <li><strong>Mărimi scalare</strong>: se caracterizează doar prin valoare numerică (modul) și unitate de măsură. Exemplu: masa (kg), temperatura (°C), timpul (s).</li>
                    <li><strong>Mărimi vectoriale</strong>: se caracterizează prin modul, direcție și sens. Exemplu: deplasarea, viteza, accelerația, forța.</li>
                  </ul>
                  <H2 h2text="Mișcarea rectilinie uniformă (MRU)" indexH2={indexH2("Mișcarea rectilinie uniformă (MRU)")} indexLectie={indexLectie}></H2>
                  <ul className={ulClass}>
                    <li>Mișcarea unui punct material de-a lungul unei drepte cu <strong>viteză constantă</strong>.</li>
                    <li>
                        <div
                            className="inline-flex items-center gap-1">
                            <strong>Ecuația mișcării: <i>x(t) = x<sub>0</sub> + v ⋅ t</i></strong>, unde:
                            <ul className={`${ulClass} flex gap-4 my-4`}>
                                <div
                                    className="flex flex-col gap-2">
                                    <li className="legenda"><i>x(t)</i> = poziția la momentul t</li>
                                    <li className="legenda"><i>x<sub>0</sub></i> = poziția inițială</li>
                                </div> 
                                <div
                                    className="flex flex-col gap-2">
                                    <li className="legenda"><i>v</i> = viteza constantă</li>
                                    <li className="legenda"><i>t</i> = timpul</li>
                                </div>
                            </ul>
                        </div>
                    </li>
                    <li>Graficul poziției în funcție de timp este o <strong>dreaptă</strong>.</li>
                  </ul>
                  <H2 h2text="Mișcarea rectilinie uniform accelerată (MRUA)" indexH2={indexH2("Mișcarea rectilinie uniform accelerată (MRUA)")} indexLectie={indexLectie}></H2>
                  <ul className={ulClass}>
                    <li>Mișcare în linie dreaptă cu <strong>accelerație constantă</strong>.</li>
                    <li><strong>Ecuația vitezei: <i>v(t) = v<sub>0</sub> + a ⋅ t</i></strong></li>
                    <li>
                        <strong className="inline-flex items-center gap-1">Ecuația poziției: 
                            <i> x(t) = x<sub>0</sub> + v<sub>0</sub> ⋅ t + </i>
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus"><i>1</i></p>
                                    <p className="fractie-jos"><i>2</i></p>
                                </div>
                            <i> a ⋅ t<sup>2</sup></i>
                        </strong>
                    </li>
                    <li>Graficul poziției este o <strong>parabolă</strong>, iar cel al vitezei – o <strong>dreaptă oblică</strong>.</li>
                  </ul>
                  <H2 h2text="Mișcarea circulară uniformă" indexH2={indexH2("Mișcarea circulară uniformă")} indexLectie={indexLectie}></H2>
                  <ul className={ulClass}>
                    <li>Traiectoria este un <strong>cerc</strong>, iar viteza are modul constant, dar direcția se schimbă continuu.</li>
                    <li>
                        <div
                            className="inline-flex items-center gap-1"><strong>Viteza unghiulară: <i>ω = </i></strong>
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus"><strong><i>θ</i></strong></p>
                                    <p className="fractie-jos"><strong><i>t</i></strong></p>
                                </div>
                            , unde:
                            <ul className={`${ulClass} flex gap-4 my-4`}>
                                <div
                                    className="flex flex-col gap-2">
                                    <li className="legenda"><i>ω</i> = viteza unghiulară</li>
                                    <li className="legenda"><i>θ</i> = unghiul parcurs</li>
                                </div>
                                <div
                                    className="flex flex-col gap-2">
                                    <li className="legenda"><i>t</i> = timpul</li>
                                </div>
                            </ul>
                        </div>

                    </li>
                    <li>Viteza liniară: <i>v= r ⋅ ω</i></li>
                  </ul>
                  <H2 h2text="Mișcarea relativă" indexH2={indexH2("Mișcarea relativă")} indexLectie={indexLectie}></H2>
                  <ul className={ulClass}>
                    <li>În cinematica clasică, mișcarea unui corp depinde de <strong>sistemul de referință</strong>.</li>
                    <li>
                        <div className="inline">
                            Dacă două sisteme de referință se mișcă unul față de altul cu viteză constantă, <strong>viteza relativă este</strong>: 
                            <div
                                className="inline-flex items-center justify-center gap-1 w-full">
                                <Vector simbol="v" denumire="relativă"/><i className="mx-1">=</i>
                                <Vector simbol="v" denumire="mobil"/> <i className="mx-1">-</i>
                                <Vector simbol="v" denumire="referință"/>
                            </div>
                        </div>
                    </li>
                    <li>Mișcarea relativă este esențială pentru înțelegerea mișcărilor simultane.</li>
                  </ul>
                  <p>
                  Cinematica oferă instrumente matematice și grafice pentru a descrie diverse tipuri de mișcare. În lipsa acțiunii forțelor, corpurile se pot deplasa în moduri previzibile, fie cu viteză constantă, fie accelerată, pe traiectorii rectilinii sau circulare.
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