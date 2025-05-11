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

const page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Aplicații și tehnologii"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Undele electromagnetice – suportul comunicării", "Aplicații"],
    ["Lentile și oglinzi", "Instrumente optice"],
    ["Motoare electrice", "Generatoare electrice", "Transformatoare"],
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
                  <H2 h2text="Comunicarea prin unde" indexH2={indexH2("Comunicarea prin unde")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Undele electromagnetice – suportul comunicării" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comunicarea prin unde")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comunicarea prin unde")].findIndex(h3 => h3 === "Undele electromagnetice – suportul comunicării") : -1}></H3>
                  <p>
                  Tehnologiile moderne de comunicare folosesc <strong>unde electromagnetice</strong> pentru a transmite informații la distanță.
                  </p>
                  <H3 h3text="Aplicații:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comunicarea prin unde")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comunicarea prin unde")].findIndex(h3 => h3 === "Aplicații") : -1}></H3>
                  <p>
                    <strong>Radio</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Funcționează prin <strong>modulare</strong> (AM/FM) a undelor radio.</li>
                    <li>Informația sonoră este transformată în semnal electric, transmis sub formă de unde radio și convertită înapoi în sunet de difuzor.</li>
                  </ul>
                  <p>
                    <strong>Televiziune</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Transmite imagini și sunete codificate prin unde radio sau semnal digital.</li>
                    <li>Se utilizează frecvențe mai înalte decât radioul clasic.</li>
                  </ul>
                  <p>
                    <strong>Telefonie mobilă</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Utilizează unde de frecvență înaltă (microunde) pentru comunicare bidirecțională.</li>
                    <li>Fiecare telefon are o <strong>antenă internă</strong> care trimite/primește semnale către/de la <strong>turnuri de comunicație</strong>.</li>
                  </ul>
                  <p>
                  <strong>Notă</strong>: Semnalele sunt adesea codificate și comprimate digital pentru eficiență și securitate.
                  </p>
                  <H2 h2text="Dispozitive optice" indexH2={indexH2("Dispozitive optice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Lentile și oglinzi" indexH3={h3s[h2s.findIndex(h2 => h2 === "Dispozitive optice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Dispozitive optice")].findIndex(h3 => h3 === "Lentile și oglinzi") : -1}></H3>
                  <p>
                  <strong>Lentilele</strong> – obiecte transparente cu suprafețe curbate care <strong>refractă</strong> lumina pentru a forma imagini:
                  </p>
                  <table className={tableClass}>
                    <thead className={trClass}>
                        <th className="flex-23">Tip de lentilă</th>
                        <th className="flex-23">Comportament</th>
                        <th className="flex-54">Exemplu de utilizare</th>
                    </thead>
                    <tbody>
                        <tr className={trClass}>
                            <td className="flex-23">Convergentă</td>
                            <td className="flex-23">Concentrează razele</td>
                            <td className="flex-54">Lupă, ochelari de vedere de aproape</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-23">Divergentă</td>
                            <td className="flex-23">Împrăștie razele</td>
                            <td className="flex-54">Ochelari pentru miopie</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <strong>Oglinzile</strong> – reflectă lumina:
                </p>
                <table className={tableClass}>
                    <thead className={trClass}>
                        <th className="flex-33">Tip de oglindă</th>
                        <th className="flex-33">Imagine formată</th>
                        <th className="flex-33">Aplicații</th>
                    </thead>
                    <tbody>
                        <tr className={trClass}>
                            <td className="flex-33">Plană</td>
                            <td className="flex-33">Virtuală, dreaptă</td>
                            <td className="flex-33">Oglinzi de baie</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-33">Sferică</td>
                            <td className="flex-33">Reală/virtuală</td>
                            <td className="flex-33">Telescoape, faruri</td>
                        </tr>
                    </tbody>
                </table>
                <H3 h3text="Instrumente optice" indexH3={h3s[h2s.findIndex(h2 => h2 === "Dispozitive optice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Dispozitive optice")].findIndex(h3 => h3 === "Instrumente optice") : -1}></H3>
                <ul className={ulClass}>
                    <li><strong>Microscopul</strong> – mărește obiecte mici folosind un sistem de lentile convergente.</li>
                    <li><strong>Telescoapele</strong> – colectează și măresc imaginea corpurilor cerești.</li>
                    <li><strong>Aparatele foto</strong> – focalizează lumina pe un senzor/film fotografic pentru a obține imagini clare.</li>
                </ul>
                <p>
                    <strong>Principiu comun</strong>: formarea imaginilor prin refracția/reflexia controlată a luminii.
                </p>
                <H2 h2text="Sisteme electromagnetice" indexH2={indexH2("Sisteme electromagnetice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                <H3 h3text="Motoare electrice" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sisteme electromagnetice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sisteme electromagnetice")].findIndex(h3 => h3 === "Motoare electrice") : -1}></H3>
                <p>
                    <strong>Funcționare</strong>: Un <strong>curent electric</strong> într-un conductor plasat într-un câmp magnetic produce o <strong>forță mecanică</strong> – baza mișcării motoarelor.
                </p>
                <ul className={ulClass}>
                    <li>Electromotoare, ventilatoare, roboți, vehicule electrice.</li>
                </ul>
                <H3 h3text="Generatoare electrice" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sisteme electromagnetice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sisteme electromagnetice")].findIndex(h3 => h3 === "Generatoare electrice") : -1}></H3>
                <p>
                    <strong>Funcționare</strong>: Un conductor în mișcare într-un câmp magnetic produce curent electric prin inducție electromagnetică (Legea lui Faraday).
                </p>
                <ul className={ulClass}>
                    <li>Centrale electrice (hidro, termice, eoliene).</li>
                    <li>Alternatoare auto.</li>
                </ul>
                <H3 h3text="Transformatoare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sisteme electromagnetice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sisteme electromagnetice")].findIndex(h3 => h3 === "Transformatoare") : -1}></H3>
                <p>
                    <strong>Funcționare</strong>: Transformă tensiunea alternativă prin <strong>inducție</strong> între două bobine aflate pe același miez magnetic.
                </p>
                <p>
                Raportul tensiunii:
                </p>
                <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                    <div
                        className="inline-flex items-center gap-1">
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center"><strong>𝑈<sub><i>1</i></sub></strong></p>
                            <p className="fractie-jos text-center"><strong>𝑈<sub><i>2</i></sub></strong></p>
                        </div>
                        <strong><i> = </i></strong>
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center"><strong>𝑁<sub><i>1</i></sub></strong></p>
                            <p className="fractie-jos text-center"><strong>𝑁<sub><i>2</i></sub></strong></p>
                        </div>
                    </div>
                </p>
                <p>
                unde 𝑁<sub><i>1</i></sub>, 𝑁<sub><i>2</i></sub> sunt numărul de spire.
                </p>
                <ul className={ulClass}>
                    <li>Transportul energiei electrice la distanță;</li>
                    <li>Adaptarea tensiunii în rețele.</li>
                </ul>
                <table className={tableClass}>
                    <thead className={trClass}>
                        <th className="flex-20">Tehnologie</th>
                        <th className="flex-50">Principiu fizic</th>
                        <th className="flex-30">Aplicație</th>
                    </thead>
                    <tbody>
                        <tr className={trClass}>
                            <td className="flex-20">Radio și telefonie</td>
                            <td className="flex-50">Propagarea undelor electromagnetice</td>
                            <td className="flex-30">Comunicare fără fir</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-20">Microscop</td>
                            <td className="flex-50">Refracția luminii prin lentile</td>
                            <td className="flex-30">Observarea detaliilor</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-20">Motor electric</td>
                            <td className="flex-50">Interacțiunea curentului cu câmp magnetic</td>
                            <td className="flex-30">Mișcare controlată</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-20">Generator</td>
                            <td className="flex-50">Inducția electromagnetică</td>
                            <td className="flex-30">Producerea curentului</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-20">Transformator</td>
                            <td className="flex-50">Inducția între bobine</td>
                            <td className="flex-30">Schimbarea tensiunii</td>
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

export default page