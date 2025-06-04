"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-capitole-11";
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

  const h1 = "Unde mecanice"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Ecuația generală a unei unde plane", "Viteza de propagare a undei"],
    ["Tipuri", "Condiții pentru interferență", "Formula fazei diferenței"],
    ["Caracteristici", "Ecuația undei staționare"],
    ["Caracteristici ale sunetului", "Viteza sunetului"],
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
              profil="mate info" 
              materie="fizică" 
              clasa={11} 
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
                  <H2 h2text="Ecuația undei plane" indexH2={indexH2("Ecuația undei plane")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Unda mecanică</strong> este o perturbație care se propagă într-un mediu material, transportând energie fără transport de substanță.
                  </p>
                  <H3 h3text="Ecuația generală a unei unde plane:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ecuația undei plane")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ecuația undei plane")].findIndex(h3 => h3 === "Ecuația generală a unei unde plane") : -1}></H3>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong>𝑦(𝑥,𝑡) <i>=</i> 𝐴 ⋅ <i>sin (</i>𝑘𝑥 - 𝜔𝑡 + 𝜑<sub><i>0</i></sub><i>)</i></strong>
                  </p>
                  <ul className={ulClass}>
                    <li>𝑦(𝑥,𝑡): deplasarea particulei în poziția 𝑥 la momentul 𝑡</li>
                    <li>𝐴: amplitudinea undei</li>
                    <li>
                        
                        <div
                            className="inline-flex items-center gap-1">
                                𝑘 = 
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><i>2</i>𝜋</p>
                                <p className="fractie-jos text-center">𝜆</p>
                            </div>
                            : numărul de undă
                        </div>
                    </li>
                    <li>
                        𝜔 <i>= 2</i>𝜋ν: pulsatia unghiulară
                    </li>
                    <li>𝜆: lungimea de undă</li>
                    <li>ν: frecvența</li>
                    <li>𝜑<sub><i>0</i></sub> : faza inițială</li>
                  </ul>
                  <H3 h3text="Viteza de propagare a undei:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ecuația undei plane")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ecuația undei plane")].findIndex(h3 => h3 === "Viteza de propagare a undei") : -1}></H3>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong><i>v =</i> 𝜆 ⋅ ν</strong>
                  </p>
                  <H2 h2text="Interferența undelor" indexH2={indexH2("Interferența undelor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Interferența este fenomenul suprapunerii a două sau mai multe unde care se întâlnesc în același punct din spațiu.
                  </p>
                  <H3 h3text="Tipuri:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Interferența undelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Interferența undelor")].findIndex(h3 => h3 === "Tipuri") : -1}></H3>
                  <ul className={ulClass}>
                    <li>
                        <strong>Constructivă</strong>: vârf peste vârf → amplitudinea rezultată crește.
                    </li>
                    <li>
                        <strong>Distructivă</strong>: vârf peste vale → undele se anulează parțial sau total.
                    </li>
                  </ul>
                  <H3 h3text="Condiții pentru interferență:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Interferența undelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Interferența undelor")].findIndex(h3 => h3 === "Condiții pentru interferență") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Undele trebuie să fie <strong>coerente</strong> (aceeași frecvență și diferență de fază constantă).</li>
                    <li>Să aibă <strong>același tip de polarizare</strong> și <strong>amplitudine comparabilă</strong>.</li>
                  </ul>
                  <H3 h3text="Formula fazei diferenței:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Interferența undelor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Interferența undelor")].findIndex(h3 => h3 === "Formula fazei diferenței") : -1}></H3>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <div
                            className="inline-flex items-center gap-1">
                                <strong><i>Δ</i>𝜑 <i>=</i> 𝑘 ⋅ <i>Δ</i>𝑥 <i>=</i> </strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong><i>2</i>𝜋</strong></p>
                                <p className="fractie-jos text-center"><strong>𝜆</strong></p>
                            </div>
                            <strong> ⋅ <i>Δ</i>𝑥</strong>
                        </div>
                </p>
                <H2 h2text="Undele staționare" indexH2={indexH2("Undele staționare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <p>
                Apare prin suprapunerea a două unde cu aceeași frecvență, direcție opusă și amplitudine egală.
                </p>
                <H3 h3text="Caracteristici" indexH3={h3s[h2s.findIndex(h2 => h2 === "Undele staționare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Undele staționare")].findIndex(h3 => h3 === "Caracteristici") : -1}></H3>
                <ul className={ulClass}>
                    <li><strong>Noduri</strong>: puncte care nu se mișcă (amplitudine = 0).</li>
                    <li><strong>Ventri (burți)</strong>: puncte care oscilează cu amplitudine maximă.</li>
                </ul>
                <H3 h3text="Ecuația undei staționare:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Undele staționare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Undele staționare")].findIndex(h3 => h3 === "Ecuația undei staționare") : -1}></H3>
                <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong>𝑦(𝑥,𝑡) <i>= 2</i>𝐴 ⋅ <i>sin (</i>𝑘𝑥<i>)</i> ⋅ <i>cos (</i>𝜔𝑡<i>)</i></strong>
                </p>
                <p>
                Este o unda <strong>sinusoidală</strong> dar care nu se propagă — energia oscilează între poziții fixe.
                </p>
                <H2 h2text="Noțiuni de acustică" indexH2={indexH2("Noțiuni de acustică")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <p>
                <strong>Acustica</strong> este ramura fizicii care studiază propagarea undelor sonore.
                </p>
                <H3 h3text="Caracteristici ale sunetului:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Noțiuni de acustică")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Noțiuni de acustică")].findIndex(h3 => h3 === "Caracteristici ale sunetului") : -1}></H3>
                <ul className={ulClass}>
                    <li><strong>Intensitatea (I)</strong> – energia transportată pe unitatea de timp și de suprafață.</li>
                    <li><strong>Tăria sunetului</strong> – percepția psihologică a intensității (dB).</li>
                    <li><strong>Înălțimea sunetului</strong> – depinde de frecvență.</li>
                    <li><strong>Timbul</strong> – calitatea care distinge două sunete de frecvență și intensitate identice.</li>
                </ul>
                <p>
                Sunetul este:
                </p>
                <ul className={ulClass}>
                    <li><strong>Longitudinal</strong> în aer: particulele oscilează paralel cu direcția de propagare.</li>
                    <li><strong>Transversal</strong> în solide: oscilațiile sunt perpendiculare pe direcția undei.</li>
                </ul>
                <H3 h3text="Viteza sunetului:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Noțiuni de acustică")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Noțiuni de acustică")].findIndex(h3 => h3 === "Viteza sunetului") : -1}></H3>
                <ul className={ulClass}>
                    <li>În aer: ~343 m/s (la 20°C)</li>
                    <li>Mai mare în lichide și solide</li>
                </ul>
                <table className={tableClass}>
                    <thead className={trClass}>
                        <th className="flex-30">Concept</th>
                        <th className="flex-70">Formulă / Idei principale</th>
                    </thead>
                    <tbody>
                        <tr className={trClass}>
                            <td className="flex-30">Unda plană</td>
                            <td className="flex-70">
                                𝑦(𝑥,𝑡) <i>=</i> 𝐴 ⋅ <i>sin (</i>𝑘𝑥 - 𝜔𝑡<i>)</i>
                            </td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-30">Viteza undei</td>
                            <td className="flex-70">
                                <i>v</i> <i>=</i> 𝜆ν
                            </td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-30">Interferență</td>
                            <td className="flex-70">
                            Constructivă: faze egale; Distructivă: în opoziție
                            </td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-30">Undă staționară</td>
                            <td className="flex-70">
                            Are noduri și ventri, nu transportă energie
                            </td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-30">Sunetul</td>
                            <td className="flex-70">
                            Undă longitudinală, se propagă doar în medii materiale
                            </td>
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