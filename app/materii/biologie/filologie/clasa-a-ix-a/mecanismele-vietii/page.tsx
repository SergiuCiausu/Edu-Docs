"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-stiinte-ale-naturii-9";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Mecanismele vieții") + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === "Mecanismele vieții")].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Respirația celulară", "Fotosinteza"],
    [""],
    [""],
    [""],
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
              profil="filologie" 
              materie="biologie" 
              clasa={9} 
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
                  <h1>{`Capitolul ${indexLectie}: Mecanismele vieții`}</h1>
                  <p>
                  Organismele vii sunt caracterizate printr-o serie de procese fundamentale care susțin viața: metabolismul, respirația celulară, fotosinteza, sinteza proteinelor și transmiterea informației genetice. La baza acestor procese se află structura și funcționarea celulei.
                  </p>
                  <H2 h2text="Metabolismul celular" indexH2={indexH2("Metabolismul celular")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Metabolismul</strong> reprezintă totalitatea reacțiilor chimice care au loc în interiorul celulei. Aceste reacții sunt esențiale pentru producerea de energie, sinteza substanțelor necesare vieții și eliminarea reziduurilor.
                  </p>
                  <p>
                  Metabolismul este împărțit în două mari componente:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Anabolismul</strong> – procesele prin care celula construiește molecule complexe din substanțe simple (ex: sinteza proteinelor).</li>
                        <li><strong>Catabolismul</strong> – procesele de descompunere a substanțelor complexe în compuși mai simpli, cu eliberare de energie (ex: respirația celulară).</li>
                  </ul>
                  <H2 h2text="Procesele de respirație celulară și fotosinteză" indexH2={indexH2("Procesele de respirație celulară și fotosinteză")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Respirația celulară" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procesele de respirație celulară și fotosinteză")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Procesele de respirație celulară și fotosinteză")].findIndex(h3 => h3 === "Respirația celulară") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Proces catabolic prin care glucoza este descompusă în prezența oxigenului pentru a produce energie sub formă de ATP (adenozin trifosfat).</li>
                        <li>Formula generală: <strong>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>0 + energie(ATP)</strong></li>
                        <li>Are loc în mitocondrii.</li>
                        <li>
                            Tipuri:
                            <ul
                                className={ulClass}>
                                    <li><strong>Aerobă</strong> (cu oxigen) – eficientă energetic.</li>
                                    <li><strong>Anaerobă</strong> (fără oxigen) – produce mai puțin ATP.</li>
                            </ul>
                        </li>
                  </ul>
                  <H3 h3text="Fotosinteza" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procesele de respirație celulară și fotosinteză")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Procesele de respirație celulară și fotosinteză")].findIndex(h3 => h3 === "Fotosinteza") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Proces anabolic specific organismelor autotrofe (ex: plante verzi).</li>
                        <li>
                            Energia solară este captată de clorofilă și utilizată pentru a transforma dioxidul de carbon și apa în glucoză și oxigen: <strong>6CO<sub>2</sub> + 6H<sub>2</sub>O  + lumină solară → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub></strong>
                        </li>
                        <li>Are loc în <strong>cloroplaste</strong>.</li>
                        <li>Este procesul fundamental prin care energia solară este transformată în energie chimică utilizabilă.</li>
                  </ul>
                  <H2 h2text="Sinteza proteinelor" indexH2={indexH2("Sinteza proteinelor")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Proteinele</strong> sunt macromolecule esențiale pentru funcționarea celulelor, fiind implicate în structură, transport, enzime, hormoni etc.
                  </p>
                  <p>
                  Etapele sintezei proteinelor:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Transcripția</strong> – ADN-ul este copiat sub formă de ARN mesager (ARNm) în nucleu.</li>
                        <li><strong>Translația</strong> – ARNm este „citit” de ribozomi în citoplasmă pentru a asambla lanțul de aminoacizi (proteina), cu ajutorul ARN de transfer (ARNt).</li>
                  </ul>
                  <p>
                  Această secvență precisă de coduri genetice determină structura și funcția fiecărei proteine.
                  </p>
                  <H2 h2text="Genetica celulară" indexH2={indexH2("Genetica celulară")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Genetica celulară</strong> se ocupă cu studiul mecanismelor prin care informația genetică este stocată, transmisă și exprimată în celule.
                  </p>
                  <p>
                  Informația genetică este conținută în ADN, aflat în nucleul celulelor eucariote și în citoplasmă la procariote.
                  </p>
                  <H2 h2text="Structura și funcțiile ADN-ului" indexH2={indexH2("Structura și funcțiile ADN-ului")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>ADN-ul (acid dezoxiribonucleic)</strong> este molecula care poartă instrucțiunile pentru construirea și funcționarea organismului.
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Structura: dublu helix format din două catene de nucleotide.</li>
                        <li>
                            Fiecare nucleotidă conține:
                            <ul
                                className={ulClass}>
                                    <li>o bază azotată (Adenină, Timină, Citozină, Guanină);</li>
                                    <li>un zahăr (dezoxiriboză);</li>
                                    <li>un grup fosfat.</li>
                            </ul>
                        </li>
                        <li><strong>Legile complementarității</strong>: A se leagă cu T, C cu G.</li>
                  </ul>
                  <p>
                  Funcțiile ADN-ului:
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Păstrarea informației ereditare.</li>
                        <li>Autoreplicarea (înainte de diviziunea celulară).</li>
                        <li>Codarea proteinelor prin intermediarul ARN.</li>
                  </ul>
                  <H2 h2text="Moștenirea genetică: gene și cromozomi" indexH2={indexH2("Moștenirea genetică: gene și cromozomi")} indexLectie={indexLectie}></H2>
                  <ul
                    className={ulClass}>
                        <li><strong>Genele</strong> sunt unități funcționale ale eredității, adică secvențe de ADN care codifică proteine sau trăsături.</li>
                        <li><strong>Cromozomii</strong> sunt structuri condensate din ADN și proteine (histone), vizibile în timpul diviziunii celulare.</li>
                  </ul>
                  <p>
                  La om:
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Celulele somatice au 46 de cromozomi (23 perechi).</li>
                        <li>Celulele sexuale (gametele) au 23 de cromozomi, formând un set haploid.</li>
                  </ul>
                  <p>
                  Moștenirea trăsăturilor este guvernată de:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Dominanță și recesivitate;</strong></li>
                        <li><strong>Segregare genetică</strong> (legea lui Mendel),</li>
                        <li><strong>Distribuția independentă a genelor</strong>.</li>
                  </ul>
                  <p>
                  Metabolismul cuprinde toate reacțiile celulare, inclusiv fotosinteza și respirația.
                  </p>
                  <p>
                  Sinteza proteinelor implică transcripția și translația.
                  </p>
                  <p>
                  ADN-ul este baza eredității și conține gene organizate în cromozomi.
                  </p>
                  <p>
                  Aceste mecanisme asigură funcționarea, reproducerea și evoluția organismelor.
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

export default Page