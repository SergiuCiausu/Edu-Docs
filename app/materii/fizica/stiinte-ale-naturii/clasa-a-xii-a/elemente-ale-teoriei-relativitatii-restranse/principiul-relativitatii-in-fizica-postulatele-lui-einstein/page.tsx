"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-elemente-ale-teoriei-relativitatii-restranse-12";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';
import Link from 'next/link';

const page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Principiul relativității în fizică. Postulatele lui Einstein"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Postulatul 1: Legile fizicii sunt aceleași în toate sistemele de referință inerțiale", "Postulatul 2: Viteza luminii în vid este aceeași pentru toți observatorii, indiferent de mișcarea sursei sau a observatorului"],
    [""],
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
              profil="științe ale naturii" 
              materie="fizică" 
              clasa={12} 
              capitol="elemente ale teoriei relativității restrânse"
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
                  <H2 h2text="Context istoric și limitele fizicii clasice" indexH2={indexH2("Context istoric și limitele fizicii clasice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Până la începutul secolului XX, fizica era dominată de conceptele <strong>mecanicii newtoniene</strong> și <strong>electromagnetismului lui Maxwell</strong>. Însă aceste două teorii nu erau compatibile în totalitate.
                  </p>
                  <p>
                  Problema majoră: ecuațiile lui Maxwell preziceau <strong>o viteză constantă a luminii</strong>, independentă de mișcarea observatorului — contrar așteptărilor din mecanica clasică.
                  </p>
                  <p>
                  Experimentul Michelson-Morley (1887) a demonstrat că <strong>viteza luminii este aceeași în toate direcțiile</strong>, indiferent de mișcarea Pământului, respingând ideea existenței unui „eter” ca mediu de propagare a luminii.
                  </p>
                  <H2 h2text="Teoria relativității restrânse – Albert Einstein" indexH2={indexH2("Teoria relativității restrânse – Albert Einstein")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Einstein a formulat <strong>două postulate fundamentale</strong> care stau la baza <strong>teoriei relativității restrânse</strong> (valabilă pentru sisteme care se deplasează rectiliniu, uniform, unele față de altele).
                  </p>
                  <H3 h3text="Postulatul 1: Legile fizicii sunt aceleași în toate sistemele de referință inerțiale" indexH3={h3s[h2s.findIndex(h2 => h2 === "Teoria relativității restrânse – Albert Einstein")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Teoria relativității restrânse – Albert Einstein")].findIndex(h3 => h3 === "Postulatul 1: Legile fizicii sunt aceleași în toate sistemele de referință inerțiale") : -1}></H3>
                  <p>
                  Nu există un sistem de referință absolut. Toate legile fizicii (inclusiv cele ale electromagnetismului) se aplică la fel într-un tren care se mișcă uniform ca și într-o stație.
                  </p>
                  <p>
                  Implicație: Nu poți distinge prin experimente mecanice dacă ești în repaus sau te deplasezi rectiliniu și uniform.
                  </p>
                  <H3 h3text="Postulatul 2: Viteza luminii în vid este aceeași pentru toți observatorii, indiferent de mișcarea sursei sau a observatorului" indexH3={h3s[h2s.findIndex(h2 => h2 === "Teoria relativității restrânse – Albert Einstein")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Teoria relativității restrânse – Albert Einstein")].findIndex(h3 => h3 === "Postulatul 2: Viteza luminii în vid este aceeași pentru toți observatorii, indiferent de mișcarea sursei sau a observatorului") : -1}></H3>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong>𝑐 <i>= 3 ⋅ 10<sup>8</sup>m/s</i></strong>
                  </p>
                  <p>
                  Implicație: Spre deosebire de viteza sunetului, viteza luminii nu se adună cu mișcarea sursei sau a observatorului. Acest postulat contrazice mecanica clasică și conduce la transformări fundamentale în conceptele de <strong>spațiu și timp</strong>.
                  </p>
                  <H2 h2text="Consecințele teoriei relativității restrânse" indexH2={indexH2("Consecințele teoriei relativității restrânse")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ol className={olClass}>
                    <li>
                      <strong>Dilatarea timpului</strong>: un ceas aflat în mișcare față de un observator ticăie mai încet:
                      <p
                        className="inline-flex items-center gap-1 w-full justify-center">
                           <div
                              className="inline-flex gap-1">
                                <span className="pt-4"><strong><i>Δ</i>𝑡 = </strong></span>
                              <div
                                  className={fractie}>
                                  <p className="fractie-sus text-center"><strong><i>Δ</i>𝑡<sub><i>0</i></sub></strong></p>
                                  <p className="fractie-jos text-center inline-flex items-center"><strong><i><span className="text-3xl font-medium">√</span><span className="text-3xl font-light">{`(`}</span>1 -  </i></strong>
                                    <div
                                      className="inline-flex items-center gap-1 pt-2">
                                        <div
                                          className={fractie}>
                                          <p className="fractie-sus text-center"><strong>𝑣<sup><i>2</i></sup></strong></p>
                                          <p className="fractie-jos text-center"><strong>𝑐<sup><i>2</i></sup></strong></p>
                                        </div>
                                    </div>
                                    <span className="text-3xl font-light"><strong><i>{`)`}</i></strong></span>
                                  </p>
                              </div>
                          </div>
                      </p>
                    </li>
                    <li>
                      <strong>Contracția lungimilor</strong>: un obiect în mișcare are lungimea măsurată mai mică în direcția mișcării:
                      <p
                        className="inline-flex items-center gap-1 w-full justify-center">
                          <strong>𝐿 <i>=</i> 𝐿<sub><i>0</i></sub> ⋅ <span className="text-3xl font-medium">√</span><span className="text-3xl font-light">{`(`}</span> 1 - </strong>
                          <div
                            className="inline-flex items-center gap-1 pt-2">
                              <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>𝑣<sup><i>2</i></sup></strong></p>
                                <p className="fractie-jos text-center"><strong>𝑐<sup><i>2</i></sup></strong></p>
                              </div>
                          </div>   
                          <span className="text-3xl font-light">{`)`}</span>               
                      </p>
                    </li>
                    <li><strong>Relativitatea simultaneității</strong>: două evenimente care sunt simultane într-un sistem nu sunt neapărat simultane într-un altul.</li>
                    <li>
                      <strong>Echivalența masă-energie:</strong>
                      <p
                        className="inline-flex items-center gap-1 w-full justify-center">
                          <strong>𝐸 <i>=</i> 𝑚𝑐<sup>2</sup></strong>
                      </p>
                      <p>
                      Această formulă exprimă faptul că masa și energia sunt interconectate și că o cantitate mică de masă poate fi transformată într-o cantitate mare de energie.
                      </p>
                    </li>
                  </ol>
                  <table className={tableClass}>
                      <thead className={trClass}>
                          <th className="flex-30">Concept</th>
                          <th className="flex-70">Interpretare relativistă</th>
                      </thead>
                      <tbody>
                          <tr className={trClass}>
                              <td className="flex-30">Viteza luminii</td>
                              <td className="flex-70">Constantă în toate sistemele inerțiale</td>
                          </tr>
                          <tr className={trClass}>
                              <td className="flex-30">Timpul</td>
                              <td className="flex-70">Nu este absolut – poate fi dilatat</td>
                          </tr>
                          <tr className={trClass}>
                              <td className="flex-30">Lungimea</td>
                              <td className="flex-70">Nu este absolută – poate fi contractată</td>
                          </tr>
                          <tr className={trClass}>
                              <td className="flex-30">Simultaneitatea</td>
                              <td className="flex-70">Depinde de sistemul de referință</td>
                          </tr>
                          <tr className={trClass}>
                              <td className="flex-30">Masă-energie</td>
                              <td className="flex-70">Sunt forme echivalente de existență</td>
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