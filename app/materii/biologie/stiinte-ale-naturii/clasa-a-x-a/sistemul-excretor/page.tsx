"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-stiinte-ale-naturii-10";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';

const page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Sistemul excretor"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Rinichii", "Nefronul – unitatea structurală și funcțională a rinichiului", "Căile urinare"],
    [""],
    ["Filtrarea glomerulară", "Reabsorbția tubulară", "Secreția tubulară"],
    [""],
    ["Circulația mică (pulmonară)", "Circulația mare (sistemică)"],
    ["Ritmul cardiac", "Tensiunea arterială"],
    [""]
  ]

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
              materie="biologie" 
              clasa={10} 
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
                className="flex gap-12">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: ${h1}`}</h1>
                  <p>
                  Organismul uman produce constant substanțe reziduale rezultate din metabolismul celular. Pentru menținerea echilibrului intern (homeostaziei), aceste substanțe trebuie eliminate eficient. Sistemul excretor este responsabil pentru filtrarea sângelui, formarea și eliminarea urinei.
                  </p>
                  <H2 h2text="Structura rinichilor și a căilor urinare" indexH2={indexH2("Structura rinichilor și a căilor urinare")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Rinichii" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura rinichilor și a căilor urinare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura rinichilor și a căilor urinare")].findIndex(h3 => h3 === "Rinichii") : -1}></H3>
                  <ul 
                    className={ulClass}>
                        <li>Sunt două organe în formă de bob de fasole, localizate în partea inferioară a spatelui, de o parte și de alta a coloanei vertebrale.</li>
                        <li>Fiecare rinichi are aproximativ 11–12 cm lungime și este învelit într-o capsulă fibroasă protectoare.</li>
                        <li>
                            La nivel intern, se disting două regiuni:
                            <ul 
                                className={ulClass}>
                                    <li><strong>Cortexul renal</strong> (partea exterioară)</li>
                                    <li><strong>Medulara renală</strong> (partea interioară), care conține piramidele renale</li>
                            </ul>
                        </li>
                  </ul>
                  <H3 h3text="Nefronul – unitatea structurală și funcțională a rinichiului" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura rinichilor și a căilor urinare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura rinichilor și a căilor urinare")].findIndex(h3 => h3 === "Nefronul – unitatea structurală și funcțională a rinichiului") : -1}></H3>
                  <ul 
                    className={ulClass}>
                    <li>Fiecare rinichi conține aproximativ 1 milion de <strong>nefroni</strong>.</li>
                    <li>
                        Fiecare nefron este format din:
                        <ul 
                            className={ulClass}>
                            <li><strong>Glomerul</strong> (rețea de capilare)</li>
                            <li><strong>Capsula Bowman</strong></li>
                            <li><strong>Tub contort proximal</strong></li>
                            <li><strong>Ansa Henle</strong></li>
                            <li><strong>Tub contort distal</strong></li>
                            <li><strong>Tub colector</strong></li>
                        </ul>
                    </li>
                  </ul>
                  <H3 h3text="Căile urinare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura rinichilor și a căilor urinare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura rinichilor și a căilor urinare")].findIndex(h3 => h3 === "Căile urinare") : -1}></H3>
                  <ul 
                    className={ulClass}>
                        <li><strong>Ureterele</strong> – două tuburi care conduc urina de la rinichi la vezica urinară.</li>
                        <li><strong>Vezica urinară</strong> – organ cavitar muscular, în formă de sac, în care se acumulează urina.</li>
                        <li><strong>Uretra</strong> – tub prin care urina este eliminată în exterior. La bărbați este mai lungă decât la femei și are și funcție reproductivă.</li>
                  </ul>
                  <H2 h2text="Funcțiile rinichilor și formarea urinei" indexH2={indexH2("Funcțiile rinichilor și formarea urinei")} indexLectie={indexLectie}></H2>
                  <p>
                  Rinichii îndeplinesc mai multe funcții esențiale:
                  </p>
                  <ul 
                    className={ulClass}>
                    <li><strong>Filtrarea sângelui</strong> – eliminarea substanțelor toxice (uree, acid uric, creatinină)</li>
                    <li><strong>Reglarea compoziției ionice a plasmei</strong> – echilibrul de sodiu, potasiu, calciu etc.</li>
                    <li><strong>Reglarea volumului și presiunii sângelui</strong> – prin excreția apei și a sărurilor</li>
                    <li><strong>Menținerea echilibrului acido-bazic</strong></li>
                    <li><strong>Producerea de hormoni</strong> – cum ar fi <strong>eritropoietina</strong> (stimulează formarea celulelor roșii) și renina (reglează tensiunea arterială)</li>
                  </ul>
                  <H2 h2text="Filtrarea sângelui și procesul de formare a urinei" indexH2={indexH2("Filtrarea sângelui și procesul de formare a urinei")} indexLectie={indexLectie}></H2>
                  <p>
                  Formarea urinei are loc în trei etape:
                  </p>
                  <H3 h3text="Filtrarea glomerulară"></H3>
                  <ul 
                    className={ulClass}>
                        <li>Are loc la nivelul glomerulului, unde presiunea sângelui determină trecerea plasmei (fără proteine) în capsula Bowman.</li>
                        <li>Se formează <strong>urina primară</strong>, conținând apă, glucoză, aminoacizi, săruri, uree etc.</li>
                  </ul>
                  <H3 h3text="Reabsorbția tubulară" indexH3={h3s[h2s.findIndex(h2 => h2 === "Filtrarea sângelui și procesul de formare a urinei")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Filtrarea sângelui și procesul de formare a urinei")].findIndex(h3 => h3 === "Reabsorbția tubulară") : -1}></H3>
                  <ul 
                    className={ulClass}>
                    <li>În tubii nefronului, substanțele utile (apă, glucoză, ioni) sunt reabsorbite înapoi în sânge.</li>
                    <li>Are loc în funcție de necesitățile organismului și este controlată hormonal.</li>
                  </ul>
                  <H3 h3text="Secreția tubulară" indexH3={h3s[h2s.findIndex(h2 => h2 === "Filtrarea sângelui și procesul de formare a urinei")].length >1 ? h3s[h2s.findIndex(h2 => h2 === "Filtrarea sângelui și procesul de formare a urinei")].findIndex(h3 => h3 === "Secreția tubulară") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Unele substanțe (ioni de hidrogen, amoniac, medicamente) sunt secretate activ din sânge în urină.</li>
                  </ul>
                  <p>
                  <strong>Rezultatul final – urina finală – conține apă, uree, creatinină, ioni în exces și alte substanțe toxice.</strong>
                  </p>
                  <p>
                  Sistemul excretor este format din: rinichi, uretere, vezică urinară și uretră. Rinichii filtrează sângele și formează urina prin <strong>filtrare glomerulară, reabsorbție și secreție tubulară</strong>. Urina este eliminată prin căile urinare, contribuind la menținerea homeostaziei.
                  </p>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={indexLectie}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div>
  )
}

export default page