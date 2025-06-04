"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-12";
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

  const h1 = "Primitive și integrale"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
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
              profil="mate info" 
              materie="matematică" 
              clasa={12} 
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
                  <H2 h2text="Noțiuni introductive" indexH2={indexH2("Noțiuni introductive")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>
                    Definiție:
                    </strong>
                  </p>
                  <p>
                  Fie 𝑓 : 𝐼 → 𝑅 o funcție continuă definită pe un interval 𝐼 ⊆ 𝑅. Se numește primitivă a funcției 𝑓 o funcție 𝐹 : 𝐼 → 𝑅 derivabilă pe 𝐼, astfel încât:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <strong>𝐹'(𝑥) = 𝑓(𝑥), ∀𝑥 ∈ 𝐼</strong>
                  </p>
                  <p>
                  Așadar, primitiva este funcția "inversă" procesului derivării.
                  </p>
                  <H2 h2text="Exemple" indexH2={indexH2("Exemple")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Exemplul 1:</strong>
                  </p>
                  <p>
                  Să găsim o primitivă a funcției 𝑓(𝑥) = 2𝑥.
                  </p>
                  <p>
                  Observăm că 𝐹(𝑥) = 𝑥<sup>2</sup> este derivabilă și 𝐹'(𝑥) = 2𝑥 = 𝑓(𝑥), deci:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <strong><span className="text-4xl font-normal">∫ </span>2𝑥𝑑𝑥 = 𝑥<sup>2</sup> + 𝐶</strong>
                  </p>
                  <p>
                    unde 𝐶 ∈ 𝑅 este constanta de integrare.
                  </p>
                  <p>
                    <strong>Exemplul 2:</strong>
                  </p>
                  <p>
                  Să determinăm o primitivă a funcției 𝑓(𝑥) = cos 𝑥.
                  </p>
                  <p>
                  Știm că (sin 𝑥)<sup>'</sup> = cos 𝑥, deci:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <strong><span className="text-4xl font-normal">∫</span> cos 𝑥𝑑𝑥 = sin 𝑥 + 𝐶</strong>
                  </p>
                  <H2 h2text="Proprietăți" indexH2={indexH2("Proprietăți")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ol className={olClass}>
                    <li>
                        Dacă 𝐹(𝑥) este o primitivă a funcției 𝑓(𝑥), atunci toate primitivele sunt de forma:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                                𝐹(𝑥) + 𝐶, 𝐶 ∈ 𝑅
                        </p>
                    </li>
                    <li>
                        Integrală nedefinită:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                                <span className="text-4xl font-extralight">∫ </span>𝑓(𝑥)𝑑𝑥 = 𝐹(𝑥) + 𝐶
                        </p>
                    </li>
                  </ol>
                  <H2 h2text="Tabel cu formule uzuale" indexH2={indexH2("Tabel cu formule uzuale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <div className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-50">Funcția 𝑓(𝑥)</th>
                            <th className="flex-50">Primitiva 𝐹(𝑥)</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-50">𝑎</td>
                                <td className="flex-50">𝑎𝑥 + 𝐶</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">𝑥<sup>𝑛</sup></td>
                                <td className="flex-50">
                                    <div
                                        className="inline-flex items-center gap-1 pt-2">
                                        <div
                                            className={fractie}>
                                            <p className="fractie-sus text-center">𝑥<sup>𝑛+1</sup></p>
                                            <p className="fractie-jos text-center">𝑛+1</p>
                                        </div>
                                        <span>   + 𝐶, 𝑛 ≠ -1</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">
                                    <div
                                        className="inline-flex items-center gap-1 pt-2">
                                        <div
                                            className={fractie}>
                                            <p className="fractie-sus text-center">1</p>
                                            <p className="fractie-jos text-center">𝑥</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="flex-50">
                                    ln 𝑥 + 𝐶
                                </td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">
                                    𝑒<sup>𝑥</sup>
                                </td>
                                <td className="flex-50">
                                    𝑒<sup>𝑥</sup> + 𝐶
                                </td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">cos 𝑥</td>
                                <td className="flex-50">
                                    sin 𝑥 + 𝐶
                                </td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-50">sin 𝑥</td>
                                <td className="flex-50">cos 𝑥 + 𝐶</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <H2 h2text="Observație geometrică" indexH2={indexH2("Observație geometrică")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                    <p>
                    Graficul oricărei primitive a funcției 𝑓 este o translație verticală a unei primitive particulare 𝐹, deoarece adăugarea constantei 𝐶 deplasează graficul fără a-i modifica forma.
                    </p>
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