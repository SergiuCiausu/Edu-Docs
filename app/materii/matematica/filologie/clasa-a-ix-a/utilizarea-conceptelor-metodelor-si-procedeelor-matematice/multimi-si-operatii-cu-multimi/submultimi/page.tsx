"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-multimi-si-operatii-cu-multimi-capitole-9";
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

  const h1 = "Submulțimi și mulțimi finite și infinite"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Definiție", "Exemple", "Submulțimi proprii și improprii", "Numărul de submulțimi"],
    ["Mulțimi finite", "Mulțimi infinite", "Observații"],
    ["Exemple", "Exerciții propuse"],
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
              profil="filologie" 
              materie="matematică" 
              clasa={9} 
              capitol="utilizarea conceptelor, metodelor și procedeelor matematice"
              subCapitol="mulțimi și operații cu mulțimi"
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
                  <H2 h2text="Submulțimi" indexH2={indexH2("Submulțimi")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Definiție" indexH3={h3s[h2s.findIndex(h2 => h2 === "Submulțimi")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Submulțimi")].findIndex(h3 => h3 === "Definiție") : -1}></H3>
                  <p>
                  Fie două mulțimi 𝐴 și 𝐵.
                  </p>
                  <p>
                  Spunem că 𝐴 este <strong>submulțime</strong> a lui 𝐵 dacă <strong>orice element</strong> al lui 𝐴 este și element al lui 𝐵.
                  </p>
                  <p>
                  Se notează:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <strong>𝐴 ⊆ 𝐵</strong>
                  </p>
                  <H3 h3text="Exemple" indexH3={h3s[h2s.findIndex(h2 => h2 === "Submulțimi")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Submulțimi")].findIndex(h3 => h3 === "Exemple") : -1}></H3>
                  <ul className={ulClass}>
                    <li>
                        Dacă 𝐴 = {`{1, 2}`} și 𝐵 = {`{1, 2, 3}`}, atunci:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                                𝐴 ⊆ 𝐵
                        </p>
                    </li>
                    <li>
                        Mulțimea vidă ∅ este <strong>submulțime a oricărei mulțimi</strong>:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                                ∅ ⊆ 𝐴 pentru orice mulțime 𝐴
                        </p>
                    </li>
                    <li>
                        O mulțime este <strong>întotdeauna submulțime a ei însăși</strong>:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                            𝐴 ⊆ 𝐴
                        </p>
                    </li>
                  </ul>
                  <H3 h3text="Submulțimi proprii și improprii" indexH3={h3s[h2s.findIndex(h2 => h2 === "Submulțimi")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Submulțimi")].findIndex(h3 => h3 === "Submulțimi proprii și improprii") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Submulțime proprie</strong>: o submulțime care nu este egală cu mulțimea inițială. (ex: {`{1, 2}`} ⊂ {`{1, 2, 3}`})</li>
                    <li><strong>Submulțime improprie</strong>: mulțimea însăși sau mulțimea vidă.</li>
                  </ul>
                  <H3 h3text="Numărul de submulțimi" indexH3={h3s[h2s.findIndex(h2 => h2 === "Submulțimi")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Submulțimi")].findIndex(h3 => h3 === "Numărul de submulțimi") : -1}></H3>
                  <p>
                  O mulțime cu 𝑛 elemente are exact 2<sup>𝑛</sup> submulțimi.
                  </p>
                  <p>
                    <strong>Exemplu:</strong>
                  </p>
                  <p>
                    Mulțimea {`{a, b}`} are 2<sup>2</sup> = 4 submulțimi:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        ∅, {`{a}`}, {`{b}`}, {`{a, b}`}
                  </p>
                  <H2 h2text="Mulțimi finite și infinite" indexH2={indexH2("Mulțimi finite și infinite")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Mulțimi finite" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mulțimi finite și infinite")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mulțimi finite și infinite")].findIndex(h3 => h3 === "Mulțimi finite") : -1}></H3>
                  <p>
                    <strong>Definiție:</strong>
                  </p>
                  <p>
                  O mulțime este <strong>finită</strong> dacă are un <strong>număr finit de elemente</strong>.
                  </p>
                  <p>
                    <strong>Exemple:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>𝐴 = {`{1, 2, 3, 4}`} (are 4 elemente)</li>
                    <li>Mulțimea vocalelor limbii române {`{a, e, i, o ,u}`}</li>
                  </ul>
                  <H3 h3text="Mulțimi infinite" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mulțimi finite și infinite")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mulțimi finite și infinite")].findIndex(h3 => h3 === "Mulțimi infinite") : -1}></H3>
                  <p>
                    <strong>Definiție:</strong>
                  </p>
                  <p>
                  O mulțime este <strong>infinită</strong> dacă are <strong>infinit de multe elemente</strong>.
                  </p>
                  <p>
                    <strong>Exemple:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>
                        Mulțimea numerelor naturale:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                            ℕ = {`{0, 1, 2, 3,...}`}
                        </p>
                    </li>
                    <li>
                        Mulțimea numerelor întregi:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                            𝑍 = {`{..., -2, -1, 0, 1, 2,...}`}
                        </p>
                    </li>
                    <li>Mulțimea punctelor de pe o dreaptă.</li>
                  </ul>
                  <H3 h3text="Observații" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mulțimi finite și infinite")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mulțimi finite și infinite")].findIndex(h3 => h3 === "Observații") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Mulțimile finite pot fi complet enumerate.</li>
                    <li>Mulțimile infinite nu pot fi enumerate în totalitate, dar pot fi descrise printr-o regulă.</li>
                    <li>Există <strong>diferite tipuri de infinit</strong> (mai târziu în liceu vei învăța despre mulțimi numărabile și nenumerabile).</li>
                  </ul>
                  <H2 h2text="Exemple și exerciții" indexH2={indexH2("Exemple și exerciții")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Exemple:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Exemple și exerciții")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Exemple și exerciții")].findIndex(h3 => h3 === "Exemple") : -1}></H3>
                  <ol className={olClass}>
                    <li>Determinați toate submulțimile mulțimii {`{1, 2}`}</li>
                    <li>Verificați dacă {`{1, 3}`} ⊆ {`{1, 2, 3, 4}`} </li>
                    <li>Spuneți dacă mulțimea {`{𝑥 ∈ ℕ ∣ 𝑥<100}`} este finită sau infinită.</li>
                  </ol>
                  <H3 h3text="Exerciții propuse:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Exemple și exerciții")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Exemple și exerciții")].findIndex(h3 => h3 === "Exerciții propuse") : -1}></H3>
                  <ol className={olClass}>
                    <li>Câte submulțimi are mulțimea {`{a, b, c}`}?</li>
                    <li>Dați exemple de 2 mulțimi infinite și 2 mulțimi finite.</li>
                  </ol>
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

export default page