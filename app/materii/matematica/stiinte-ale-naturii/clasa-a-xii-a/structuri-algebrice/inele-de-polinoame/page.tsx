"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-structuri-algebrice-12";
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

  const h1 = "Inele de polinoame"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
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
              profil="științe ale naturii" 
              materie="matematică"
              capitol="structuri algebrice" 
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
                  <H2 h2text="Inelele de polinoame" indexH2={indexH2("Inelele de polinoame")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Definiție:</strong>
                  </p>
                  <p>
                  Fie 𝐾 un corp comutativ (ex: 𝑄, 𝑅, 𝐶, 𝑍<sub>𝑝</sub>).
                  </p>
                  <p>
                  Un <strong>polinom</strong> cu coeficienți în 𝐾 este o expresie de forma:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <strong>𝑃(𝑥) = 𝑎<sub>𝑛</sub>𝑥<sup>𝑛</sup> + 𝑎<sub>𝑛−1</sub>𝑥<sup>𝑛−1</sup> + ⋯ + 𝑎<sub>1</sub>𝑥 + 𝑎<sub>0</sub>, 𝑎<sub>𝑖</sub> ∈ 𝐾, 𝑎<sub>𝑛</sub>≠ 0</strong>
                  </p>
                  <p>
                  Mulțimea tuturor acestor polinoame se notează cu 𝐾[𝑥] și formează un inel comutativ, cu:
                  </p>
                  <ul className={ulClass}>
                    <li>adunarea și înmulțirea polinoamelor ca operații;</li>
                    <li>elementul neutru pentru adunare: polinomul 0;</li>
                    <li>elementul neutru pentru înmulțire: 1.</li>
                  </ul>
                  <H2 h2text="Operații în K[x]" indexH2={indexH2("Operații în K[x]")} indexLectie={titluri.length > 1 ? indexLectie : -1 }></H2>
                  <ul className={ulClass}>
                    <li><strong>Adunare:</strong> Se adună coeficienții de același grad.</li>
                    <li><strong>Scădere:</strong> La fel ca adunarea, dar coeficienții se scad.</li>
                    <li><strong>Înmulțire:</strong> Se aplică distributivitatea.</li>
                  </ul>
                  <H2 h2text="Teorema împărțirii cu rest" indexH2={indexH2("Teorema împărțirii cu rest")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Teoremă:</strong>
                  </p>
                  <p>
                  Fie 𝐴(𝑥), 𝐵(𝑥) ∈ 𝐾[𝑥], cu 𝐵(𝑥) ≠ 0.
                  </p>
                  <p>
                  Atunci există polinoame unice 𝑄(𝑥), 𝑅(𝑥) ∈ 𝐾[𝑥] astfel încât:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <strong>𝐴(𝑥) = 𝐵(𝑥) ⋅ 𝑄(𝑥) + 𝑅(𝑥), cu deg(𝑅(𝑥)) {`<`} deg(𝐵(𝑥))</strong>
                  </p>
                  <p>
                  Analog împărțirii numerelor naturale cu rest.
                  </p>
                  <H2 h2text="Schema lui Horner" indexH2={indexH2("Schema lui Horner")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Metodă eficientă de:
                  </p>
                  <ul className={ulClass}>
                    <li>evaluare a unui polinom în 𝑥 = 𝑎;</li>
                    <li>împărțire a polinomului la 𝑥 − 𝑎.</li>
                  </ul>
                  <p>
                    <strong>Exemplu:</strong>
                  </p>
                  <p>
                    Fie 𝑃(𝑥) = 2𝑥<sup>3</sup> - 6𝑥<sup>2</sup> + 2𝑥 - 1, evaluăm 𝑃(3):
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex flex-col">
                            <div
                                className="inline-flex border-horner-b gap-2">
                                <div
                                    className="inline-flex flex-col flex-20 border-horner-r">
                                    <div>3</div>
                                    <div> </div>
                                </div>
                                <div
                                    className="inline-flex flex-col flex-80">
                                    <div
                                        className="inline-flex gap-4 justify-end">
                                        <div className="flex-25">2</div>
                                        <div className="flex-25">-6</div>
                                        <div className="flex-25">2</div>
                                        <div className="flex-25">-1</div>
                                    </div>
                                    <div
                                        className="inline-flex gap-4 justify-end">
                                        <div className="flex-25"> </div>
                                        <div className="flex-25">6</div>
                                        <div className="flex-25">0</div>
                                        <div className="flex-25">6</div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="inline-flex gap-2">
                                <div className="inline-flex border-horner-r">
                                    <div className="opacity-0">3</div>
                                </div>
                                <div
                                    className="inline-flex gap-4 justify-end">
                                    <div className="flex-25">2</div>
                                    <div className="flex-25"><span className="opacity-0">-</span>0</div>
                                    <div className="flex-25">2</div>
                                    <div className="flex-25">5</div>
                                </div>
                            </div>
                        </div>
                        <span className="ml-2">⇒ 𝑃(3) = 5</span>
                  </p>
                  <H2 h2text="Teorema lui Bézout" indexH2={indexH2("Teorema lui Bézout")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Teoremă:</strong>
                  </p>
                  <p>
                  Fie 𝑃(𝑥) ∈ 𝐾[𝑥] și 𝑎 ∈ 𝐾. Atunci:
                  </p>
                  <p>
                    𝑃(𝑎) = 0 ⟺ (𝑥 - 𝑎) | 𝑃(𝑥)
                  </p>
                  <p>
                  Deci: 𝑎 este rădăcină a polinomului ⟺ 𝑥 - 𝑎 este un divizor.
                  </p>
                  <H2 h2text="Divizibilitate în K[x]" indexH2={indexH2("Divizibilitate în K[x]")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>
                        Se spune că 𝐴(𝑥) divide 𝐵(𝑥) dacă există 𝑄(𝑥) ∈ 𝐾[𝑥] astfel încât:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                                𝐵(𝑥) = 𝐴(𝑥) ⋅ 𝑄(𝑥)
                        </p>
                    </li>
                    <li>
                        Divizibilitatea este folosită în:
                        <ul className={ulClass}>
                            <li>eliminarea factorilor comuni;</li>
                            <li>factorizare și simplificare de expresii.</li>
                        </ul>
                    </li>
                  </ul>
                  <H2 h2text="Polinoame ireductibile" indexH2={indexH2("Polinoame ireductibile")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p><strong>Definiție:</strong></p>
                  <p>
                  Un polinom 𝑃(𝑥) ∈ 𝐾[𝑥] este <strong>ireductibil</strong> dacă:
                  </p>
                  <ul className={ulClass}>
                    <li>are grad ≥ 1</li>
                    <li>nu poate fi scris ca produsul a două polinoame nenule, de grad mai mic, din 𝐾[𝑥]</li>
                  </ul>
                  <H2 h2text="Descompunerea în factori" indexH2={indexH2("Descompunerea în factori")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Fiecare polinom nenul din 𝐾[𝑥] se poate scrie ca un produs de factori ireductibili.
                  Această descompunere este unică, până la ordine și la factori unitari (constanți nenuli).
                  </p>
                  <p>
                  Exemplu în 𝑅[𝑥]:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        𝑃(𝑥) = 𝑥<sup>4</sup> - 1 = (𝑥<sup>2</sup> - 1)(𝑥<sup>2</sup> + 1) = (𝑥 - 1)(𝑥 + 1)(𝑥<sup>2</sup> + 1)
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

export default page