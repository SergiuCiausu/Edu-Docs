"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/matematica/capitole-mate-mate-info-modelarea-matematica-a-unor-situatii-concrete-9";
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

  const h1 = "Proporționalitate și procente"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Definiție", "Exemplu"],
    ["Definiție", "Exemplu"],
    [""],
    ["Calculul procentului unei valori", "Exemplu", "Aflarea valorii inițiale după aplicarea unui procent"],
    ["Ex. 1 – Reducere procentuală", "Ex. 2 – Dobândă simplă", "Ex. 3 – Probleme cu muncitori și timp"],
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
              capitol="modelarea matematică a unor situații concrete"
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
                  <strong>Proporționalitatea</strong> este o relație între două mărimi care variază astfel încât raportul sau produsul lor rămâne constant. În viața de zi cu zi, folosim proporționalitatea pentru a înțelege concepte precum prețuri, viteze, concentrații sau distribuții echitabile.
                  </p>
                  <H2 h2text="Proporționalitate directă" indexH2={indexH2("Proporționalitate directă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Două mărimi sunt <strong>direct proporționale</strong> dacă atunci când una <strong>crește</strong>, cealaltă <strong>crește în aceeași proporție</strong> (și invers).
                  </p>
                  <H3 h3text="Definiție:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proporționalitate directă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proporționalitate directă")].findIndex(h3 => h3 === "Definiție") : -1}></H3>
                  <p>
                  Mărimile 𝑥 și 𝑦 sunt direct proporționale dacă:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>𝑥</strong></p>
                                <p className="fractie-jos text-center"><strong>𝑦</strong></p>
                            </div>
                            <strong>  = 𝑘 (constantă de proporționalitate)</strong>
                        </div>
                  </p>
                  <p>
                  sau:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <strong>𝑦 = 𝑘𝑥</strong>
                  </p>
                  <H3 h3text="Exemplu" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proporționalitate directă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proporționalitate directă")].findIndex(h3 => h3 === "Exemplu") : -1}></H3>
                  <p>
                  Dacă 3 mere costă 6 lei, cât costă 5 mere?
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">6</p>
                                <p className="fractie-jos text-center">3</p>
                            </div>
                              =  
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">𝑥</p>
                                <p className="fractie-jos text-center">5</p>
                            </div>
                              ⇒ 𝑥 =  
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">6 ⋅ 5</p>
                                <p className="fractie-jos text-center">3</p>
                            </div>
                              = 10 lei
                        </div>
                  </p>
                  <H2 h2text="Proporționalitate inversă" indexH2={indexH2("Proporționalitate inversă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Două mărimi sunt <strong>invers proporționale</strong> dacă atunci când una <strong>crește</strong>, cealaltă <strong>scade în aceeași proporție</strong>, și produsul lor este constant.
                  </p>
                  <H3 h3text="Definiție" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proporționalitate inversă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proporționalitate inversă")].findIndex(h3 => h3 === "Definiție") : -1}></H3>
                  <p>
                  Mărimile 𝑥 și 𝑦 sunt invers proporționale dacă:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <strong>𝑥 ⋅ 𝑦 = 𝑘</strong>
                  </p>
                  <H3 h3text="Exemplu" indexH3={h3s[h2s.findIndex(h2 => h2 === "Proporționalitate inversă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Proporționalitate inversă")].findIndex(h3 => h3 === "Exemplu") : -1}></H3>
                  <p>
                  Dacă 4 muncitori termină o lucrare în 6 zile, în câte zile o vor termina 6 muncitori?
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                                4 ⋅ 6 = 6 ⋅ 𝑥 ⇒ 𝑥 =  
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">24</p>
                                <p className="fractie-jos text-center">6</p>
                            </div>
                              = 4 zile
                        </div>
                  </p>
                  <H2 h2text="Proporții și regulă de trei simplă" indexH2={indexH2("Proporții și regulă de trei simplă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O <strong>proporție</strong> este o egalitate între două rapoarte:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                         <div
                            className="inline-flex items-center gap-1 pt-2">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>𝑎</strong></p>
                                <p className="fractie-jos text-center"><strong>𝑏</strong></p>
                            </div>
                              =  
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>𝑐</strong></p>
                                <p className="fractie-jos text-center"><strong>𝑑</strong></p>
                            </div>
                        </div>
                  </p>
                  <p>
                  Se poate rezolva folosind <strong>regula de trei simplă</strong>:
                  </p>
                  <ul className={ulClass}>
                    <li>directă → mărimile cresc/scad împreună</li>
                    <li>inversă → o mărime crește, cealaltă scade</li>
                  </ul>
                  <H2 h2text="Procente" indexH2={indexH2("Procente")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un <strong>procent</strong> este o fracție cu numitorul 100:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                                 <strong>𝑥% =  </strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>𝑥</strong></p>
                                <p className="fractie-jos text-center"><strong>100</strong></p>
                            </div>
                        </div>
                  </p>
                  <H3 h3text="Calculul procentului unei valori:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procente")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Procente")].findIndex(h3 => h3 === "Calculul procentului unei valori") : -1}></H3>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                                 Procent dintr-o valoare =   
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">𝑝</p>
                                <p className="fractie-jos text-center">100</p>
                            </div>
                              ⋅ 𝑉
                        </div>
                  </p>
                  <H3 h3text="Exemplu:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procente")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Procente")].findIndex(h3 => h3 === "Exemplu") : -1}></H3>
                  <p>
                  Cât este 20% din 250 lei?
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">20</p>
                                <p className="fractie-jos text-center">100</p>
                            </div>
                              ⋅ 250 = 50 lei
                        </div>
                  </p>
                  <H3 h3text="Aflarea valorii inițiale după aplicarea unui procent:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procente")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Procente")].findIndex(h3 => h3 === "Aflarea valorii inițiale după aplicarea unui procent") : -1}></H3>
                  <p>
                  Dacă 50 lei reprezintă 20%, atunci:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                                Valorea totală =  
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">50 ⋅ 100</p>
                                <p className="fractie-jos text-center">20</p>
                            </div>
                              = 250 lei
                        </div>
                  </p>
                  <H2 h2text="Aplicații în probleme reale" indexH2={indexH2("Aplicații în probleme reale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Ex. 1 – Reducere procentuală:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Aplicații în probleme reale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Aplicații în probleme reale")].findIndex(h3 => h3 === "Ex. 1 – Reducere procentuală") : -1}></H3>
                  <p>
                  Un produs costă 300 lei și are o reducere de 15%. Care este prețul redus?
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">15</p>
                                <p className="fractie-jos text-center">100</p>
                            </div>
                              ⋅ 300 = 45 ⇒ 300 - 45 = 255 lei
                        </div>
                  </p>
                  <H3 h3text="Ex. 2 – Dobândă simplă:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Aplicații în probleme reale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Aplicații în probleme reale")].findIndex(h3 => h3 === "Ex. 2 – Dobândă simplă") : -1}></H3>
                  <p>
                  Depunem 1.000 lei într-un cont cu dobândă de 5% pe an. Cât vom avea după un an?
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">5</p>
                                <p className="fractie-jos text-center">100</p>
                            </div>
                              ⋅ 1000 = 50 ⇒ Total: 1050 lei
                        </div>
                  </p>
                  <H3 h3text="Ex. 3 – Probleme cu muncitori și timp:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Aplicații în probleme reale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Aplicații în probleme reale")].findIndex(h3 => h3 === "Ex. 3 – Probleme cu muncitori și timp") : -1}></H3>
                  <p>
                  8 muncitori termină o lucrare în 12 zile. În câte zile o vor termina 6 muncitori?
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                                8 ⋅ 12 = 6 ⋅ 𝑥 ⇒ 𝑥 =  
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center">96</p>
                                <p className="fractie-jos text-center">6</p>
                            </div>
                              = 16 zile
                        </div>
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