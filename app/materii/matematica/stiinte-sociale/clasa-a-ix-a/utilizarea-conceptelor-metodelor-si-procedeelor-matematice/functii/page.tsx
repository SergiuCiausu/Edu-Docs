"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-utilizarea-conceptelor-metodelor-si-procedeelor-matematice-9";
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

  const h1 = "Funcții"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Domeniul de definiție", "Codomeniul"],
    ["Funcție injectivă", "Funcție surjectivă", "Funcție bijectivă"],
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
              profil="științe sociale" 
              materie="matematică" 
              clasa={9} 
              capitol="utilizarea conceptelor, metodelor și procedeelor matematice"
              subCapitol="funcții"
              isSubCapitolContent={true}
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
                  <H2 h2text="Definiția funcției" indexH2={indexH2("Definiția funcției")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O <strong>funcție</strong> este o corespondență care asociază fiecărui element dintr-o mulțime 𝐴 (numită domeniu de definiție) exact un singur element dintr-o altă mulțime 𝐵 (numită codomeniu).
                  </p>
                  <p>
                    <strong>Notație:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <strong>𝑓 : 𝐴 → 𝐵, 𝑓(𝑥) = 𝑦</strong>
                  </p>
                  <p>
                  Spunem că:
                  </p>
                  <ul className={ulClass}>
                    <li>𝑥 ∈ 𝐴 este argumentul (sau variabila);</li>
                    <li>𝑦 ∈ 𝐵 este imaginea lui 𝑥 prin funcția 𝑓;</li>
                    <li>𝑓(𝑥) se citește: „f de x”.</li>
                  </ul>
                  <p>
                    <strong>Exemplu:</strong>
                  </p>
                  <p>
                    𝑓(𝑥) = 𝑥<sup>2</sup> definește o funcție de la 𝑅 → 𝑅 cu 𝑓(2) = 4
                  </p>
                  <H2 h2text="Domeniul de definiție și codomeniul" indexH2={indexH2("Domeniul de definiție și codomeniul")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Domeniul de definiție" indexH3={h3s[h2s.findIndex(h2 => h2 === "Domeniul de definiție și codomeniul")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Domeniul de definiție și codomeniul")].findIndex(h3 => h3 === "Domeniul de definiție") : -1}></H3>
                  <p>
                  Este <strong>mulțimea tuturor valorilor</strong> pe care le poate lua 𝑥 astfel încât expresia 𝑓(𝑥) să fie definită.
                  </p>
                  <H3 h3text="Codomeniul" indexH3={h3s[h2s.findIndex(h2 => h2 === "Domeniul de definiție și codomeniul")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Domeniul de definiție și codomeniul")].findIndex(h3 => h3 === "Codomeniul") : -1}></H3>
                  <p>
                  Este <strong>mulțimea în care se află imaginile valorilor</strong> lui 𝑥.
                  </p>
                  <p>
                  Nu trebuie confundat cu <strong>mulțimea valorilor funcției</strong>, adică mulțimea tuturor valorilor pe care le ia efectiv 𝑓(𝑥).
                  </p>
                  <p>
                    <strong>Exemplu:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            𝑓(𝑥) =  
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">1</p>
                                <p className="fractie-jos text-center">𝑥</p>
                            </div>
                               ⇒ Domeniul: 𝑅 \ {0} (deoarece nu putem împărți la 0)
                        </div>
                  </p>
                  <H2 h2text="Tipuri de funcții" indexH2={indexH2("Tipuri de funcții")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Funcție injectivă" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de funcții")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tipuri de funcții")].findIndex(h3 => h3 === "Funcție injectivă") : -1}></H3>
                  <p>
                  O funcție 𝑓 : 𝐴 → 𝐵 este injectivă dacă valori diferite ale lui 𝑥 duc la valori diferite ale lui 𝑓(𝑥):
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <strong>∀𝑥<sub>1</sub>, 𝑥<sub>2</sub> ∈ 𝐴, 𝑓(𝑥<sub>1</sub>) = 𝑓(𝑥<sub>2</sub>) ⇒ 𝑥<sub>1</sub> = 𝑥<sub>2</sub></strong>
                  </p>
                  <p>
                    Exemplu:
                  </p>
                  <p>
                    𝑓(𝑥) = 2𝑥 este injectivă, deoarece 2𝑥<sub>1</sub> = 2𝑥<sub>2</sub> ⇒ 𝑥<sub>1</sub> = 𝑥<sub>2</sub>
                  </p>
                  <H3 h3text="Funcție surjectivă" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de funcții")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tipuri de funcții")].findIndex(h3 => h3 === "Funcție surjectivă") : -1}></H3>
                  <p>
                  O funcție este <strong>surjectivă</strong> dacă <strong>fiecare element din codomeniu</strong> este imaginea <strong>cel puțin a unui elemen</strong>t din domeniu.
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <strong>∀𝑦 ∈ 𝐵, ∃𝑥 ∈ 𝐴 astfel încât 𝑓(𝑥) = 𝑦</strong>
                  </p>
                  <p>
                    Exemplu:
                  </p>
                  <p>
                    𝑓(𝑥) = 𝑥<sup>3</sup> de la 𝑅 → 𝑅 este surjectivă.
                  </p>
                  <H3 h3text="Funcție bijectivă" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de funcții")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tipuri de funcții")].findIndex(h3 => h3 === "Funcție bijectivă") : -1}></H3>
                  <p>
                  O funcție este <strong>bijectivă</strong> dacă este <strong>simultan injectivă și surjectivă</strong>.
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        ⇒ Fiecare element din codomeniu este imaginea a exact unui element din domeniu
                  </p>
                  <p>
                    Exemplu:
                  </p>
                  <p>
                  𝑓(𝑥) = 𝑥 + 5 este o funcție bijectivă de la 𝑅 → 𝑅
                  </p>
                  <H2 h2text="Reprezentarea grafică a funcțiilor" indexH2={indexH2("Reprezentarea grafică a funcțiilor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Funcțiile pot fi reprezentate grafic în planul cartezian 𝑥𝑂𝑦, unde:
                  </p>
                  <ul className={ulClass}>
                    <li>Pe axa 𝑂𝑥 se reprezintă argumentele 𝑥;</li>
                    <li>Pe axa 𝑂𝑦 se reprezintă valorile 𝑓(𝑥).</li>
                  </ul>
                  <H2 h2text="Exemple și exerciții" indexH2={indexH2("Exemple și exerciții")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ol className={olClass}>
                    <li>
                        Determinați dacă funcția 𝑓(𝑥) = 𝑥<sup>2</sup> este injectivă pe 𝑅
                        <p>
                            Răspuns: Nu, deoarece 𝑓(2) = 𝑓(-2) = 4
                        </p>
                    </li>
                    <li>
                        Determinați domeniul de definiție al funcției:
                        <p
                            className="inline-flex items-center justify-center gap-1 w-full">
                              <div
                                className="inline-flex items-center gap-1 pt-2">
                                𝑓(𝑥) =  
                                <div
                                    className={fractie}>
                                    <p className="fractie-sus text-center">1</p>
                                    <p className="fractie-jos text-center">𝑥 - 3</p>
                                </div>
                                   ⇒ D<sub>𝑓</sub>: 𝑅 \ {3}
                            </div>  
                        </p>
                    </li>
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

export default Page