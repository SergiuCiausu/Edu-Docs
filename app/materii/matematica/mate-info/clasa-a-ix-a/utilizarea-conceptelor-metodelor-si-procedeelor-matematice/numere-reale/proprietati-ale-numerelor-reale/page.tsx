"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-numere-reale-9";
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

  const h1 = "Proprietăți ale numerelor reale"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Proprietăți ale adunării", "Proprietăți ale înmulțirii", "Proprietăți ale adunării și înmulțirii"],
    ["Ordinea numerelor reale", "Operațiile cu semne"],
    [""],
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
              profil="mate info" 
              materie="matematică" 
              clasa={9} 
              capitol="utilizarea conceptelor, metodelor și procedeelor matematice"
              subCapitol="numere reale"
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
                  <H2 h2text="Introducere" indexH2={indexH2("Introducere")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Mulțimile numerelor reale, notată 𝑅, cuprind toate numerele pe care le putem întâlni în viața de zi cu zi: numere întregi, fracții, zecimale periodice sau nepersistentă, precum și numere iraționale.
                  </p>
                  <p>
                  În această lecție vom învăța proprietățile fundamentale ale numerelor reale și rolul acestora în operațiile matematice de bază.
                  </p>
                  <H2 h2text="Proprietăți generale ale numerelor reale" indexH2={indexH2("Proprietăți generale ale numerelor reale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Proprietăți ale adunării" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proprietăți generale ale numerelor reale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proprietăți generale ale numerelor reale")].findIndex(h3 => h3 === "Proprietăți ale adunării") : -1}></H3>
                  <ol className={olClass}>
                    <li>
                        <strong>Comutativitatea adunării:</strong>
                        <p>
                        Ordinea adunării nu influențează rezultatul.
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                                <strong>a + b = b + a</strong>
                        </p>
                    </li>
                    <li>
                        <strong>Asociativitatea adunării:</strong>
                        <p>
                        Gruparea nu influențează rezultatul adunării.
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                                <strong>(a + b) + c = a + (b + c)</strong>
                        </p>
                    </li>
                    <li>
                        <strong>Există un element neutru:</strong>
                        <p>
                        Există un număr real, 0, care nu schimbă valoarea unui alt număr atunci când este adunat:
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                            <strong>a + 0 = a</strong>
                        </p>
                    </li>
                    <li>
                        <strong>Există un element opus:</strong>
                        <p>
                        Fiecare număr real are un element opus, astfel încât suma lor este 0:
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                                <strong>a + (−a) = 0</strong>
                        </p>
                    </li>
                  </ol>
                  <H3 h3text="Proprietăți ale înmulțirii" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proprietăți generale ale numerelor reale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proprietăți generale ale numerelor reale")].findIndex(h3 => h3 === "Proprietăți ale înmulțirii") : -1}></H3>
                  <ol className={olClass}>
                    <li>
                        <strong>Comutativitatea înmulțirii:</strong>
                        <p>
                        Ordinea factorilor nu influențează rezultatul înmulțirii.
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                               <strong>a ⋅ b = b ⋅ a</strong> 
                        </p>
                    </li>
                    <li>
                        <strong>Asociativitatea înmulțirii:</strong>
                        <p>
                        Gruparea nu influențează rezultatul înmulțirii.
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                                <strong>(a ⋅ b) ⋅ c = a ⋅ (b ⋅ c)</strong>
                        </p>
                    </li>
                    <li>
                        <strong>Există un element neutru:</strong>
                        <p>
                        Există un număr real, 1, care nu schimbă valoarea unui alt număr atunci când este înmulțit:
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                               <strong>a ⋅ 1 = a</strong> 
                        </p>
                    </li>
                    <li>
                        <strong>Există un element invers:</strong>
                        <p>
                        Fiecare număr real nenul are un invers, astfel încât produsul lor este 1:
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                                <div
                                    className="inline-flex gap-1 pt-2">
                                    <strong>a ⋅ </strong>
                                    <div
                                        className={fractie}>
                                        <p className="fractie-sus text-center"><strong>1</strong></p>
                                        <p className="fractie-jos text-center"><strong>a</strong></p>
                                    </div>
                                    <strong> = 1 (a≠0)</strong>
                                </div>
                        </p>
                    </li>
                  </ol>
                  <H3 h3text="Proprietăți ale adunării și înmulțirii" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proprietăți generale ale numerelor reale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proprietăți generale ale numerelor reale")].findIndex(h3 => h3 === "Proprietăți ale adunării și înmulțirii") : -1}></H3>
                  <ol className={olClass}>
                    <li>
                        <strong>Distributivitatea înmulțirii față de adunare:</strong>
                        <p>
                        Înmulțirea se „distribuie” asupra adunării.
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                                <strong>a ⋅ (b + c) = a ⋅ b + a ⋅ c</strong>
                        </p>
                    </li>
                    <li>
                        <strong>Ordinea operațiilor:</strong>
                        <p>
                        În cadrul operațiilor de adunare și înmulțire, ordinea este importantă:
                        </p>
                        <ul className={ulClass}>
                            <li>În primul rând, se fac înmulțirile și împărțirile (în orice ordine), iar abia apoi se fac adunările și scăderile.</li>
                            <li>Pentru a clarifica ordinea operațiilor, se folosesc parantezele.</li>
                        </ul>
                    </li>
                  </ol>
                  <H2 h2text="Proprietăți ale numerelor reale în cadrul ordonării" indexH2={indexH2("Proprietăți ale numerelor reale în cadrul ordonării")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Ordinea numerelor reale" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proprietăți generale ale numerelor reale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proprietăți generale ale numerelor reale")].findIndex(h3 => h3 === "Ordinea numerelor reale") : -1}></H3>
                  <p>
                  Numerele reale sunt ordonate, adică putem stabili o relație de ordine între oricare două numere reale.
                  </p>
                  <ol className={olClass}>
                    <li>
                        <strong>Relația de ordine:</strong>
                        <p>
                        Dacă 𝑎 și 𝑏 sunt numere reale, atunci există una dintre următoarele relații:
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                                <strong>{`𝑎 < 𝑏, 𝑎 = 𝑏, 𝑎 > 𝑏`}</strong>
                        </p>
                    </li>
                    <li>
                        <strong>Reflexivitatea:</strong>
                        <p>
                        Orice număr real este mai mare sau egal cu el însuși:
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                                <strong>{`𝑎 ≤ 𝑎`}</strong>
                        </p>
                    </li>
                    <li>
                        <strong>Antisimetria:</strong>
                        <p>
                        Dacă {`𝑎 ≤ 𝑏`} și {`𝑏 ≤ 𝑎`}, atunci 𝑎 = 𝑏.
                        </p>
                    </li>
                    <li>
                        <strong>Tranzitivitatea:</strong>
                        <p>
                        Dacă {`𝑎 ≤ 𝑏`} și {`𝑏 ≤ 𝑐`}, atunci {`𝑎 ≤ 𝑐`}.
                        </p>
                    </li>
                  </ol>
                  <H3 h3text="Operațiile cu semne" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proprietăți ale numerelor reale în cadrul ordonării")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proprietăți ale numerelor reale în cadrul ordonării")].findIndex(h3 => h3 === "Operațiile cu semne") : -1}></H3>
                  <ol className={olClass}>
                    <li>
                        <strong>Semnul unui produs:</strong>
                        <p>
                        Produsul a două numere reale este pozitiv dacă ambele sunt pozitive sau ambele sunt negative:
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                                <strong>{`{𝑎 ⋅ 𝑏 > 0 dacă 𝑎 > 0 și 𝑏 > 0}`}</strong> 
                        </p>
                        <p>
                        sau
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                                <strong>{`{𝑎 ⋅ 𝑏 > 0 dacă 𝑎 < 0 și 𝑏 < 0}`}</strong> 
                        </p>
                        <p>
                        Produsul a două numere de semne opuse este negativ:
                        </p>
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full formula">
                                <strong>{`{𝑎 ⋅ 𝑏 < 0 dacă 𝑎 > 0 și 𝑏 < 0}`}</strong> 
                        </p>
                    </li>
                    <li>
                        <strong>Semnul unei sume:</strong>
                        <p>
                        Suma a două numere poate fi pozitivă, negativă sau 0, în funcție de semnele lor.
                        </p>
                    </li>
                  </ol>
                  <H2 h2text="Proprietăți ale numerelor reale în cadrul mulțimilor" indexH2={indexH2("Proprietăți ale numerelor reale în cadrul mulțimilor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ol className={olClass}>
                    <li>
                        <strong>Mulțimea numerelor raționale 𝑄:</strong>
                        <p>
                            <div
                                className="inline-flex items-center gap-1 pt-2">
                                Este mulțimea numerelor care pot fi scrise sub forma unui raport 
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center">𝑎</p>
                                    <p className="fractie-jos text-center">𝑏</p>
                                </div>
                                 unde 𝑎 și 𝑏 sunt numere întregi și 𝑏≠0
                            </div>
                        </p>
                    </li>
                    <li>
                        <strong>Mulțimea numerelor iraționale:</strong>
                        <p>
                            <div
                                className="inline-flex items-center gap-1 pt-2">
                                Este mulțimea numerelor care nu pot fi exprimate ca fracții 
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center">𝑎</p>
                                    <p className="fractie-jos text-center">𝑏</p>
                                </div>
                                 precum <span>√2</span>, 𝜋, 𝑒.
                            </div>
                        </p>
                    </li>
                    <li>
                        <strong>Mulțimea numerelor reale 𝑅:</strong>
                        <p>
                        Este unirea mulțimilor de numere raționale și iraționale.
                        </p>
                    </li>
                  </ol>
                  <H2 h2text="Exemple și exerciții" indexH2={indexH2("Exemple și exerciții")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Exemple:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Exemple și exerciții")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Exemple și exerciții")].findIndex(h3 => h3 === "Exemple") : -1}></H3>
                  <ol className={olClass}>
                    <li>
                        Calculați:
                        <ul className={ulClass}>
                            <li>3 + (-5)</li>
                            <li>4 ⋅ 2</li>
                            <li>(-7) ⋅ 3</li>
                        </ul>
                    </li>
                    <li>
                    Demonstrați că pentru orice 𝑎, 𝑏 ∈ 𝑅, avem:
                    <p
                        className="inline-flex items-center justify-center gap-1 w-full formula">
                            𝑎 ⋅ (𝑏 + 2) = 𝑎 ⋅ 𝑏 + 2𝑎
                    </p>
                    </li>
                  </ol>
                  <H3 h3text="Exerciții propuse:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Exemple și exerciții")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Exemple și exerciții")].findIndex(h3 => h3 === "Exerciții propuse") : -1}></H3>
                  <ol className={olClass}>
                    <li>Verificați proprietățile de comutativitate și asociativitate pentru adunare și înmulțire cu exemple numerice.</li>
                    <li>Demonstrati tranzitivitatea relației de ordine pentru numerele reale.</li>
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