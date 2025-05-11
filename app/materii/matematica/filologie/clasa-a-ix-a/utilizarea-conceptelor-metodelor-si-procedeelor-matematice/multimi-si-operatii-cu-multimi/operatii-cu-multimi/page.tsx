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

  const h1 = "Operații cu mulțimi"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    ["Enumerarea elementelor", "Descrierea prin proprietate caracteristică"],
    [""],
    [""],
    [""],
    ["Reuniunea mulțimilor", "Intersecția mulțimilor", "Diferența a două mulțimi", "Diferența simetrică", "Produsul cartezian"],
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
                  <H2 h2text="Introducere" indexH2={indexH2("Introducere")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Matematica este adesea considerată limbajul precis al științei, iar <strong>mulțimile</strong> sunt una dintre cele mai fundamentale idei ale sale. Conceptul de mulțime stă la baza întregii matematici moderne: funcțiile, relațiile, ecuațiile sau vectorii — toate se bazează, într-un fel, pe ideea de mulțime.
                  </p>
                  <p>
                  În această lecție vei învăța ce este o mulțime, cum să o notezi, cum să recunoști elementele unei mulțimi și cum să construiești mulțimi în funcție de diverse criterii.
                  </p>
                  <H2 h2text="Definiție" indexH2={indexH2("Definiție")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Definiție:</strong>
                  </p>
                  <p>
                  O <strong>mulțime</strong> este o colecție bine determinată de obiecte, numite <strong>elemente</strong> ale mulțimii.
                  </p>
                  <p>
                    <strong>Exemple:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Mulțimea anotimpurilor: {`{primăvară, vară, toamnă, iarnă}`}</li>
                    <li>Mulțimea cifrelor: {`{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}`}</li>
                    <li>Mulțimea vocalelor din limba română: {`{a, e, i, o, u}`}</li>
                  </ul>
                  <p>
                    <strong>Observație:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Elementele unei mulțimi sunt unice: un element nu poate apărea de două ori.</li>
                    <li>Ordinea elementelor nu contează: {`{1, 2, 3}`} și {`{3, 1, 2}`} sunt aceeași mulțime.</li>
                  </ul>
                  <p>
                  Între două sau mai multe mulțimi putem efectua diverse operații pentru a obține noi mulțimi.
                  </p>
                  <p>
                  În această lecție vom învăța principalele operații cu mulțimi:
                  </p>
                  <p>
                    <strong>Notații uzuale:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>∪ — reuniune</li>
                    <li>∩ — intersecție</li>
                    <li>∖ — diferență</li>
                    <li>Δ — diferență simetrică</li>
                  </ul>
                  <H2 h2text="Modalități de descriere a unei mulțimi" indexH2={indexH2("Modalități de descriere a unei mulțimi")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Există două metode principale pentru a descrie o mulțime:
                  </p>
                  <H3 h3text="Enumerarea elementelor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Modalități de descriere a unei mulțimi")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Modalități de descriere a unei mulțimi")].findIndex(h3 => h3 === "Enumerarea elementelor") : -1}></H3>
                  <p>
                  Se scriu toate elementele, separate prin virgulă, între acolade:
                  </p>
                  <p>
                  Ex: Mulțimea literelor A și B se scrie: {`{A, B}`}
                  </p>
                  <H3 h3text="Descrierea prin proprietate caracteristică" indexH3={h3s[h2s.findIndex(h2 => h2 === "Modalități de descriere a unei mulțimi")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Modalități de descriere a unei mulțimi")].findIndex(h3 => h3 === "Descrierea prin proprietate caracteristică") : -1}></H3>
                  <p>
                  Se descrie regula pe care o respectă toate elementele mulțimii:
                  </p>
                  <p>
                  Ex: Mulțimea numerelor pare mai mici decât 10:
                  </p>
                  <p>
                    <strong>{`{𝑥 ∈ ℕ | x < 10 și x este par}`}</strong>
                  </p>
                  <p>
                  Adică: {`{0, 2, 4, 6, 8}`}
                  </p>
                  <H2 h2text="Apartenența" indexH2={indexH2("Apartenența")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Simbolul <strong>∈</strong> se citește „aparține” și se folosește pentru a arăta că un element este în mulțime.
                  </p>
                  <p>
                  Exemple:
                  </p>
                  <ul className={ulClass}>
                    <li>3 ∈ {`{1, 2, 3, 4}`} (3 aparține mulțimii)</li>
                    <li>5 ∉ {`{1, 2, 3, 4}`} (5 nu aparține mulțimii)</li>
                  </ul>
                  <H2 h2text="Mulțimea vidă" indexH2={indexH2("Mulțimea vidă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Definiție:</strong>
                  </p>
                  <p>
                  Mulțimea care nu are niciun element se numește <strong>mulțime vidă</strong> și se notează cu simbolul <strong>∅</strong> sau cu { }.
                  </p>
                  <p>
                    <strong>Exemplu:</strong>
                  </p>
                  <p>
                  Mulțimea numerelor naturale mai mici decât 0 este mulțimea vidă: ∅.
                  </p>
                  <H2 h2text="Exemple și exerciții" indexH2={indexH2("Exemple și exerciții")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Exemple:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Scrie mulțimea literelor care formează cuvântul „matematică”.</li>
                    <li>Descrie prin proprietate caracteristică mulțimea {`{2, 4, 6, 8}`}.</li>
                  </ul>
                  <p>
                    <strong>Exerciții:</strong>
                  </p>
                  <ol className={olClass}>
                    <li>Scrie prin enumerare mulțimea numerelor naturale mai mici decât 5.</li>
                    <li>
                        Indică dacă afirmațiile sunt adevărate sau false:
                        <ul className={ulClass}>
                            <li>2 ∈ {`{1, 2, 3}`}</li>
                            <li>5 ∈ {`{1, 2, 3}`}</li>
                            <li>a ∈ {`{a, e, i, o, u}`}</li>
                            <li>z ∈ {`{a, e, i, o, u}`}</li>
                        </ul>
                    </li>
                  </ol>
                  <p>
                  O mulțime este o colecție de elemente bine determinate. Poți descrie o mulțime enumerând elementele sau printr-o regulă. ∈ înseamnă „aparține”, ∉ înseamnă „nu aparține”. Mulțimea fără elemente se numește mulțime vidă (∅).
                  </p>
                  <H2 h2text="Operații principale" indexH2={indexH2("Operații principale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Reuniunea mulțimilor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Operații principale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Operații principale")].findIndex(h3 => h3 === "Reuniunea mulțimilor") : -1}></H3>
                  <p>
                    <strong>Definiție:</strong>
                  </p>
                  <p>
                  Reuniunea mulțimilor 𝐴 și 𝐵, notată 𝐴∪𝐵, este mulțimea elementelor care aparțin cel puțin uneia dintre mulțimile 𝐴 sau 𝐵.
                  </p>
                  <p>
                    <strong>Formal:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <strong>𝐴∪𝐵 = {`{𝑥 ∣ 𝑥∈A sau 𝑥∈B}`}</strong>
                  </p>
                  <p>
                    <strong>Exemplu:</strong>
                  </p>
                  <p>
                  Dacă 𝐴 = {`{1, 2, 3}`} și 𝐵 = {`{3, 4, 5}`}, atunci:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        𝐴∪𝐵 = {`{1, 2, 3, 4, 5}`}
                  </p>
                  <H3 h3text="Intersecția mulțimilor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Operații principale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Operații principale")].findIndex(h3 => h3 === "Intersecția mulțimilor") : -1}></H3>
                  <p>
                    <strong>Definiție:</strong>
                  </p>
                  <p>
                  Intersecția mulțimilor 𝐴 și 𝐵, notată 𝐴∩𝐵, este mulțimea elementelor care aparțin simultan atât lui 𝐴, cât și lui 𝐵.
                  </p>
                  <p>
                    <strong>Formal:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                    <strong>𝐴∩𝐵 = {`{𝑥 ∣ 𝑥∈𝐴 și 𝑥∈𝐵}`}</strong>
                  </p>
                  <p>
                    <strong>Exemplu:</strong>
                  </p>
                  <p>
                  Pentru aceleași mulțimi 𝐴 = {`{1, 2, 3}`} și 𝐵 = {`{3, 4, 5}`}, avem:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        𝐴∩𝐵 = {`{3}`}
                  </p>
                  <H3 h3text="Diferența a două mulțimi" indexH3={h3s[h2s.findIndex(h2 => h2 === "Operații principale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Operații principale")].findIndex(h3 => h3 === "Diferența a două mulțimi") : -1}></H3>
                  <p>
                    <strong>Definiție:</strong>
                  </p>
                  <p>
                  Diferența dintre 𝐴 și 𝐵, notată 𝐴∖𝐵, este mulțimea elementelor care aparțin lui 𝐴, dar nu și lui 𝐵.
                  </p>
                  <p>
                    <strong>Formal:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                        <strong>𝐴∖𝐵={`{𝑥 ∣ 𝑥∈𝐴 și 𝑥∉𝐵}`}</strong>
                  </p>
                  <p>
                    <strong>Exemplu:</strong>
                  </p>
                  <p>
                    𝐴∖𝐵 = {`{1, 2}`}
                  </p>
                  <p>
                  (deoarece 1 și 2 sunt în 𝐴 și nu sunt în 𝐵).
                  </p>
                  <H3 h3text="Diferența simetrică" indexH3={h3s[h2s.findIndex(h2 => h2 === "Operații principale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Operații principale")].findIndex(h3 => h3 === "Diferența simetrică") : -1}></H3>
                  <p>
                    <strong>Definiție:</strong>
                  </p>
                  <p>
                  Diferența simetrică a două mulțimi 𝐴 și 𝐵, notată 𝐴Δ𝐵, este mulțimea elementelor care aparțin lui 𝐴 sau lui 𝐵, dar nu simultan ambelor.
                  </p>
                  <p>
                    <strong>Formal:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                       <strong>𝐴Δ𝐵 = (𝐴∖𝐵)∪(𝐵∖𝐴)</strong>
                  </p>
                  <p>
                    <strong>Exemplu:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                    𝐴Δ𝐵 = {`{1, 2, 4, 5}`}
                  </p>
                  <H3 h3text="Produsul cartezian" indexH3={h3s[h2s.findIndex(h2 => h2 === "Operații principale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Operații principale")].findIndex(h3 => h3 === "Produsul cartezian") : -1}></H3>
                  <p>
                    <strong>Definiție:</strong>
                  </p>
                  <p>
                  Produsul cartezian a două mulțimi 𝐴 și 𝐵, notat 𝐴×𝐵, este mulțimea tuturor perechilor ordonate (𝑎,𝑏), unde 𝑎∈𝐴 și 𝑏∈𝐵.
                  </p>
                  <p>
                    <strong>Formal:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                    <strong>𝐴×𝐵 = {`(a,b) ∣ 𝑎∈𝐴, 𝑏∈𝐵`}</strong> 
                  </p>
                  <p>
                    <strong>Exemplu:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                    𝐴×𝐵={`{(1,3),(1,4),(1,5),(2,3),(2,4),(2,5),(3,3),(3,4),(3,5)}`}
                  </p>
                  <H2 h2text="Observații importante" indexH2={indexH2("Observații importante")} indexLectie={titluri.length > 1 ? indexLectie : - 1}></H2>
                  <ul className={ulClass}>
                    <li>Reuniunea și intersecția sunt <strong>comutative și asociative</strong>.</li>
                    <li>
                        Pentru orice mulțime 𝐴:
                        <ul className={ulClass}>
                            <li>𝐴∪∅ = 𝐴</li>
                            <li>𝐴∩∅ = ∅</li>
                        </ul>
                    </li>
                    <li>Diferența nu este comutativă: în general, 𝐴∖𝐵 ≠ 𝐵∖𝐴</li>
                    <li>Produsul cartezian <strong>nu este comutativ</strong>: 𝐴×𝐵 ≠ 𝐵×𝐴</li>
                  </ul>
                  <H2 h2text="Exerciții propuse - operații cu mulțimi" indexH2={indexH2("Exerciții propuse - operații cu mulțimi")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ol className={olClass}>
                    <li>
                        Fie 𝐴 = {`{2, 4, 6}`} și 𝐵 = {`{3, 4, 5}`}. Calculați:
                        <ul className={ulClass}>
                            <li>𝐴∪𝐵</li>
                            <li>𝐴∩𝐵</li>
                            <li>𝐴∖𝐵</li>
                            <li>𝐵∖𝐴</li>
                            <li>𝐴Δ𝐵</li>
                            <li>𝐴×𝐵</li>
                        </ul>
                    </li>
                    <li>Demonstrați că pentru orice mulțimi 𝐴 și 𝐵, avem:</li>
                  </ol>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula">
                    (𝐴∩𝐵) ⊆ (𝐴∪𝐵)
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