"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import H3 from '@/app/components/PageContent/H3';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { titluri } from '@/app/data/capitole-bio-mate-info-11';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { ulClass, olClass } from '@/app/class/ul';
import { Inder } from 'next/font/google';

const page = () => {
  
  const { theme, setTheme } = useTheme();
  
    const [clickedLinkId, setClickedLinkId] = useState<string>("");
    
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const h2s = [
      "Structura rinichilor și a căilor urinare",
      "Formarea și eliminarea urinei",
      "Rolul sistemului excretor"
    ]

    const h3s = [
      ["Rinichii", "Structura unui nefron", "Căile urinare"],
      ["Filtrarea glomerulară", "Reabsorbția selectivă", "Secreția tubulară", "Urina finală", "Eliminarea urinei (micțiunea)"],
      [""]
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Sistemul excretor") + 1;

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
              materie="biologie" 
              clasa={11} 
              titluri={titluri} 
              isPageContent={true}  
            />
          </aside>
          <main
            className="flex-1">
            <div
              className="w-[1263px] mx-auto">
              <Breadcrumbs theme={theme}/>
              <div
                className="flex gap-12 relative">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: Sistemul excretor`}</h1>
                  <p>
                    <strong>Sistemul excretor</strong> are rolul de a elimina din organism substanțele nefolositoare sau toxice rezultate în urma metabolismului celular. Principalul organ excretor este <strong>rinichiul</strong>, care formează urina și reglează echilibrul hidroelectrolitic și acido-bazic al corpului.
                  </p>
                  <H2 h2text="Structura rinichilor și a căilor urinare" indexH2={indexH2("Structura rinichilor și a căilor urinare")} indexLectie={indexLectie}></H2>
                  <p>
                  Sistemul excretor uman este alcătuit din:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Două rinichi</strong></li>
                        <li><strong>Două uretere</strong></li>
                        <li><strong>O vezică urinară</strong></li>
                        <li><strong>Uretra</strong></li>
                  </ul>
                  <H3 h3text="Rinichii" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura rinichilor și a căilor urinare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura rinichilor și a căilor urinare")].findIndex(h3 => h3 === "Rinichii") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Sunt organe pereche, de formă boabe de fasole, localizați în cavitatea abdominală, de o parte și de alta a coloanei vertebrale.</li>
                        <li>Sunt înveliți de o capsulă fibroasă protectoare.</li>
                        <li>
                            Fiecare rinichi este alcătuit din două zone principale:
                            <ul
                                className={ulClass}>
                                    <li><strong>Cortexul renal (zona externă)</strong></li>
                                    <li><strong>Medulara renală (zona internă)</strong>, organizată în <strong>piramide renale</strong></li>
                            </ul>
                        </li>
                  </ul>
                  <p>
                  În interiorul fiecărui rinichi se află unități funcționale numite nefroni. Un rinichi uman conține aproximativ 1 milion de nefroni.
                  </p>
                  <H3 h3text="Structura unui nefron" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura rinichilor și a căilor urinare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura rinichilor și a căilor urinare")].findIndex(h3 => h3 === "Structura unui nefron") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Corpusculul renal (Malpighi)</strong>: alcătuit din <strong>glomerul</strong> (rețea de capilare) și <strong>capsula Bowman</strong></li>
                        <li><strong>Tubii renali</strong>: tub contort proximal, ansa Henle, tub contort distal</li>
                        <li>Urina formată este colectată în <strong>tubii colectori</strong>, care o duc spre bazinet.</li>
                  </ul>
                  <H3 h3text="Căile urinare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura rinichilor și a căilor urinare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura rinichilor și a căilor urinare")].findIndex(h3 => h3 === "Căile urinare") : -1}></H3>
                  <ol
                    className={olClass}>
                        <li><strong>Ureterele</strong>: conducte musculare care transportă urina de la rinichi la vezica urinară.</li>
                        <li><strong>Vezica urinară</strong>: organ muscular, cu rol de rezervor temporar pentru urină.</li>
                        <li><strong>Uretra</strong>: conduct prin care urina este eliminată din organism. Este mai scurtă la femei și mai lungă la bărbați.</li>
                  </ol>
                  <H2 h2text="Formarea și eliminarea urinei" indexH2={indexH2("Formarea și eliminarea urinei")} indexLectie={indexLectie}></H2>
                  <p>
                  Formarea urinei are loc în trei etape principale, realizate la nivelul nefronilor:
                  </p>
                  <H3 h3text="Filtrarea glomerulară" indexH3={h3s[h2s.findIndex(h2 => h2 === "Formarea și eliminarea urinei")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Formarea și eliminarea urinei")].findIndex(h3 => h3 === "Filtrarea glomerulară") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Se produce la nivelul <strong>glomerulului</strong> și al <strong>capsulei Bowman</strong>.</li>
                        <li>Plasma sanguină este filtrată sub presiune, rezultând <strong>urina primară</strong>, care conține apă, glucoză, săruri, uree și alte mici molecule.</li>
                  </ul>
                  <H3 h3text="Reabsorbția selectivă" indexH3={h3s[h2s.findIndex(h2 => h2 === "Formarea și eliminarea urinei")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Formarea și eliminarea urinei")].findIndex(h3 => h3 === "Reabsorbția selectivă") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Se produce în <strong>tubii contorți</strong> și <strong>ansa Henle</strong>.</li>
                        <li>Substanțele utile (glucoza, aminoacizi, săruri) sunt reabsorbite în sânge.</li>
                        <li>Apa este reabsorbită în funcție de necesitățile organismului, proces reglat hormonal (ex. ADH – hormon antidiuretic).</li>
                  </ul>
                  <H3 h3text="Secreția tubulară" indexH3={h3s[h2s.findIndex(h2 => h2 === "Formarea și eliminarea urinei")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Formarea și eliminarea urinei")].findIndex(h3 => h3 === "Secreția tubulară") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Se elimină în mod activ din sânge în urină anumite substanțe toxice (ex: ioni de hidrogen, amoniac, medicamente).</li>
                  </ul>
                  <H3 h3text="Urina finală" indexH3={h3s[h2s.findIndex(h2 => h2 === "Formarea și eliminarea urinei")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Formarea și eliminarea urinei")].findIndex(h3 => h3 === "Urina finală") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Are o compoziție controlată și conține <strong>uree, creatinină, amoniac, săruri și apă</strong>.</li>
                        <li>Este transportată de uretere spre <strong>vezica urinară</strong>, unde este stocată până la eliminare.</li>
                  </ul>
                  <H3 h3text="Eliminarea urinei (micțiunea)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Formarea și eliminarea urinei")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Formarea și eliminarea urinei")].findIndex(h3 => h3 === "Eliminarea urinei (micțiunea)") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Se produce prin contracția musculaturii vezicii urinare și relaxarea sfincterelor uretrei.</li>
                        <li>Este controlată voluntar (în mod normal), dar reflexul micțional poate deveni involuntar în anumite situații.</li>
                  </ul>
                  <H2 h2text="Rolul sistemului excretor" indexH2={indexH2("Rolul sistemului excretor")} indexLectie={indexLectie}></H2>
                  <ul
                    className={ulClass}>
                        <li>Elimină <strong>substanțele toxice</strong> și <strong>excesul de apă și săruri</strong></li>
                        <li>Menține <strong>homeostazia</strong> mediului intern (echilibru electrolitic și acido-bazic)</li>
                        <li>Contribuie la reglarea <strong>tensiunii arteriale</strong> prin secreția de <strong>renină</strong></li>
                        <li>Produce <strong>eritropoietină</strong>, un hormon implicat în stimularea producției de globule roșii</li>
                  </ul>
                  <p>
                  Sistemul excretor este esențial pentru menținerea echilibrului intern al organismului. Prin filtrarea sângelui și formarea urinei, rinichii elimină reziduurile metabolice și controlează volumul și compoziția lichidelor corporale. Cunoașterea structurii și funcționării sale permite înțelegerea modului în care organismul uman se menține sănătos și funcțional.
                  </p>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={indexLectie} clickedLink={clickedLinkId}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div>
  )
}

export default page