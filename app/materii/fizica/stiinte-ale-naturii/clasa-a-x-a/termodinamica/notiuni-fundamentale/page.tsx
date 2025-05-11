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

const page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Noțiuni fundamentale"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Ce este temperatura?", "Unități de măsură și instrumente", "Ce este echilibrul termic?", "Principiul zeroului termodinamic"],
    ["Ce este un proces termodinamic?", "Tipuri de procese termodinamice", "Reprezentarea grafică (diagrama P-V)", "Aplicații în viața reală"],
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
                  <H2 h2text="Temperatura și echilibrul termic" indexH2={indexH2("Temperatura și echilibrul termic")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Ce este temperatura?" indexH3={h3s[h2s.findIndex(h2 => h2 === "Temperatura și echilibrul termic")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Temperatura și echilibrul termic")].findIndex(h3 => h3 === "Ce este temperatura?") : -1}></H3>
                  <p>
                  <strong>Temperatura</strong> este o mărime fizică scalară care exprimă <strong>gradul de agitație al particulelor</strong> dintr-un corp. Cu cât particulele unui corp se mișcă mai rapid, cu atât temperatura sa este mai mare.
                  </p>
                  <p>
                  Temperatura este o măsură a energiei cinetice medii a particulelor.
                  </p>
                  <H3 h3text="Unități de măsură și instrumente" indexH3={h3s[h2s.findIndex(h2 => h2 === "Temperatura și echilibrul termic")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Temperatura și echilibrul termic")].findIndex(h3 => h3 === "Unități de măsură și instrumente") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Unitatea de măsură în SI: Kelvin (K)</strong></li>
                    <li>
                        Alte unități uzuale: <strong>Celsius (°C), Fahrenheit (°F)</strong>
                        <p>
                        Relația dintre Kelvin și Celsius:
                        </p>
                        <p
                            className="inline-flex items-end justify-center gap-1 w-full">
                            <strong><i>𝑇(K)=𝑡(°C) + 273,15</i></strong>
                        </p>
                    </li>
                    <li>
                        <strong>Instrument de măsurare: Termometrul</strong>
                    </li>
                  </ul>
                  <H3 h3text="Ce este echilibrul termic?" indexH3={h3s[h2s.findIndex(h2 => h2 === "Temperatura și echilibrul termic")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Temperatura și echilibrul termic")].findIndex(h3 => h3 === "Ce este echilibrul termic?") : -1}></H3>
                  <p>
                  Două corpuri aflate în contact termic ajung, în timp, la aceeași temperatură – acest fenomen se numește <strong>echilibru termic</strong>.
                  </p>
                  <p>
                  Echilibrul termic apare atunci când <strong>nu mai există transfer de energie termică</strong> între două corpuri aflate în contact.
                  </p>
                  <H3 h3text="Principiul zeroului termodinamic" indexH3={h3s[h2s.findIndex(h2 => h2 === "Temperatura și echilibrul termic")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Temperatura și echilibrul termic")].findIndex(h3 => h3 === "Principiul zeroului termodinamic") : -1}></H3>
                  <p>
                  Dacă două sisteme sunt în echilibru termic cu un al treilea sistem, atunci ele sunt în echilibru termic și între ele.
                  </p>
                  <p>
                  Acest principiu stă la baza <strong>funcționării termometrelor</strong>: dacă un termometru este în echilibru termic cu un corp, atunci temperatura afişată de termometru este aceeași cu cea a corpului.
                  </p>
                  <ol className={olClass}>
                    <li><strong>Mâinile reci pe o cană fierbinte</strong> → se încălzesc deoarece există transfer de căldură până la atingerea echilibrului termic.</li>
                    <li><strong>Două pahare cu apă la temperaturi diferite puse împreună într-un recipient</strong> → în timp, ajung la aceeași temperatură.</li>
                  </ol>
                  <p>
                    <strong>Experiment</strong>: Măsurarea temperaturii unor lichide diferite folosind un termometru digital și observarea echilibrului termic între două lichide.
                  </p>
                  <p>
                  Temperatura este o măsură a energiei cinetice a particulelor. Se măsoară în Kelvin, dar și în °C sau °F. Echilibrul termic înseamnă egalizarea temperaturii între două corpuri. Principiul zeroului termodinamic permite folosirea termometrelor.
                  </p>
                  <H2 h2text="Procese termodinamice" indexH2={indexH2("Procese termodinamice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Ce este un proces termodinamic?" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procese termodinamice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Procese termodinamice")].findIndex(h3 => h3 === "Ce este un proces termodinamic?") : -1}></H3>
                  <p>
                  Un <strong>proces termodinamic</strong> este o <strong>transformare prin care un sistem trece de la o stare de echilibru la alta</strong>, în urma unui <strong>schimb de energie</strong> (căldură sau lucru mecanic) cu mediul exterior.
                  </p>
                  <p>
                  În cadrul fiecărui proces, cel puțin una dintre mărimile de stare (presiune, volum, temperatură) se modifică.
                  </p>
                  <H3 h3text="Tipuri de procese termodinamice" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procese termodinamice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Procese termodinamice")].findIndex(h3 => h3 === "Tipuri de procese termodinamice") : -1}></H3>
                  <p>
                    <strong>1. Proces izoterm (T = const.)</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Temperatura rămâne constantă.</li>
                    <li>Presiunea și volumul variază.</li>
                    <li>Exemplu: compresia lentă a unui gaz într-un piston menținut la temperatură constantă.</li>
                    <li>
                        Ecuație caracteristică:
                        <p
                            className="inline-flex items-end justify-center gap-1 w-full">
                            <strong><i>p ⋅ V = constant (Legea lui Boyle–Mariotte)</i></strong>
                        </p>
                    </li>
                  </ul>
                  <p>
                    <strong>2. Proces izobar (p = const.)</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Presiunea rămâne constantă.</li>
                    <li>Temperatura și volumul variază.</li>
                    <li>Exemplu: încălzirea apei într-un vas deschis.</li>
                    <li>
                        Ecuație caracteristică:
                        <p
                            className="inline-flex items-end justify-center gap-1 w-full">
                            <div
                                className="inline-flex items-center gap-1">
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus"><strong><i>V</i></strong></p>
                                    <p className="fractie-jos"><strong><i>𝑇</i></strong></p>
                                </div>
                                <strong><i> = constant (Legea lui Charles)</i></strong>
                            </div>
                        </p>
                    </li>
                  </ul>
                  <p>
                    <strong>Proces izocor (V = const.)</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Volumul rămâne constant.</li>
                    <li>Presiunea și temperatura variază.</li>
                    <li>Exemplu: încălzirea unui gaz într-un recipient închis rigid.</li>
                    <li>
                        Ecuație caracteristică:
                        <p
                            className="inline-flex items-end justify-center gap-1 w-full">
                                <div
                                    className="inline-flex items-center gap-1">
                                    <div
                                        className={fractie}>
                                        <p className="fractie-sus"><strong><i>p</i></strong></p>
                                        <p className="fractie-jos"><strong><i>𝑇</i></strong></p>
                                    </div>
                                    <strong><i> = constant (Legea lui Gay–Lussac)</i></strong>
                                </div>
                        </p>
                    </li>
                  </ul>
                  <p>
                    <strong>4. Proces adiabatic (Q = 0)</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Nu are loc schimb de căldură cu exteriorul (sistem izolat termic).</li>
                    <li>Exemplu: compresia rapidă a unui gaz într-o seringă izolată.</li>
                    <li>
                        Ecuație caracteristică (pentru gaze ideale):
                        <p
                            className="inline-flex items-end justify-center gap-1 w-full">
                            <div
                                className="inline-flex items-center gap-1">
                                <strong><i>p ⋅ V<sup>γ</sup> = constant, γ = </i></strong>
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus"><strong><i>C<sub>p</sub></i></strong></p>
                                    <p className="fractie-jos"><strong><i>C<sub>v</sub></i></strong></p>
                                </div>
                            </div>
                        </p>
                    </li>
                  </ul>
                  <H3 h3text="Reprezentarea grafică (diagrama P-V)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procese termodinamice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Procese termodinamice")].findIndex(h3 => h3 === "Reprezentarea grafică (diagrama P-V)") : -1}></H3>
                  <p>
                  Fiecare tip de proces are o curbă caracteristică pe diagrama presiune–volum:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Izotermă</strong>: curbă hiperbolică</li>
                    <li><strong>Izobară</strong>: linie orizontală</li>
                    <li><strong>Izocoră</strong>: linie verticală</li>
                    <li><strong>Adiabată</strong>: curbă asemănătoare cu izoterma, dar mai abruptă</li>
                  </ul>
                  <H3 h3text="Aplicații în viața reală" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procese termodinamice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Procese termodinamice")].findIndex(h3 => h3 === "Aplicații în viața reală") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Motoarele termice și frigiderele funcționează pe baza succesiunii acestor procese.</li>
                    <li>În fizica atmosferică, procesele adiabate explică răcirea aerului în timpul urcării pe munte.</li>
                  </ul>
                  <p>
                  Un proces termodinamic modifică starea unui sistem prin schimb de energie. Procesul poate fi izoterm, izobar, izocor sau adiabatic. Fiecare proces are ecuații și reprezentări grafice proprii.
                  </p>
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

export default page