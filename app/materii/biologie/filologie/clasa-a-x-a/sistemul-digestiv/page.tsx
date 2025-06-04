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

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Sistemul digestiv"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Organele principale", "Glandele anexe"],
    [""],
    ["Digestia mecanică", "Digestia chimică"],
    [""],
    ["Controlul respirației", "Adaptări fiziologice"],
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
                  Sistemul digestiv este responsabil pentru transformarea alimentelor în substanțe nutritive absorbabile și pentru eliminarea reziduurilor nefolositoare. El cuprinde un lanț de organe care colaborează pentru desfășurarea proceselor de digestie și absorbție, esențiale pentru susținerea funcțiilor vitale ale organismului.
                  </p>
                  <H2 h2text="Structura organelor digestive" indexH2={indexH2("Structura organelor digestive")} indexLectie={indexLectie}></H2>
                  <p>
                  Tubul digestiv este format dintr-o succesiune de organe specializate, completat de glande anexe care secretă enzime și substanțe necesare digestiei.
                  </p>
                  <H3 h3text="Organele principale:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura organelor digestive")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura organelor digestive")].findIndex(h3 => h3 === "Organele principale") : -1}></H3>
                  <ul 
                    className={ulClass}>
                        <li><strong>Cavitatea bucală</strong></li>
                        <li><strong>Faringe și esofag</strong></li>
                        <li><strong>Stomac</strong></li>
                        <li><strong>Intestin subțire</strong> (duoden, jejun, ileon)</li>
                        <li><strong>Intestin gros</strong> (colon, rect)</li>
                  </ul>
                  <H3 h3text="Glandele anexe:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura organelor digestive")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura organelor digestive")].findIndex(h3 => h3 === "Glandele anexe") : -1}></H3>
                  <ul 
                    className={ulClass}>
                        <li><strong>Glandele salivare</strong></li>
                        <li><strong>Ficatul</strong></li>
                        <li><strong>Pancreasul</strong></li>
                  </ul>
                  <H2 h2text="Funcțiile fiecărui organ în procesul de digestie" indexH2={indexH2("Funcțiile fiecărui organ în procesul de digestie")} indexLectie={indexLectie}></H2>
                  <ul 
                    className={ulClass}>
                        <li><strong>Cavitatea bucală</strong> – realizează digestia mecanică prin masticație și digestia chimică inițială a amidonului cu ajutorul amilazei salivare.</li>
                        <li><strong>Faringele și esofagul</strong> – conduc bolul alimentar spre stomac prin deglutiție și peristaltism.</li>
                        <li><strong>Stomacul</strong> – se ocupă cu digestia proteică (prin pepsină) și amestecă alimentele cu sucul gastric, formând chimul gastric.</li>
                        <li><strong>Intestinul subțire</strong> – locul principal al digestiei și absorbției nutrienților, cu ajutorul enzimelor din sucul intestinal, biliar și pancreatic.</li>
                        <li><strong>Ficatul</strong> – produce bila, care emulsionează grăsimile, facilitând digestia lor.</li>
                        <li><strong>Pancreasul </strong>– secretă sucul pancreatic ce conține enzime esențiale: amilază, tripsină, lipază.</li>
                        <li><strong>Intestinul gros</strong> – absoarbe apa, vitaminele și sărurile minerale, formând materia fecală eliminată prin rect.</li>
                  </ul>
                  <H2 h2text="Procesele de digestie și absorbție a nutrienților" indexH2={indexH2("Procesele de digestie și absorbție a nutrienților")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Digestia mecanică:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procesele de digestie și absorbție a nutrienților")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Procesele de digestie și absorbție a nutrienților")].findIndex(h3 => h3 === "Digestia mecanică") : -1}></H3>
                  <ul 
                    className={ulClass}>
                        <li>Reprezintă <strong>fragmentarea fizică</strong> a alimentelor prin mestecare, amestecare și propulsie.</li>
                        <li>Se produce în cavitatea bucală, stomac și intestine.</li>
                  </ul>
                  <H3 h3text="Digestia chimică:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procesele de digestie și absorbție a nutrienților")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Procesele de digestie și absorbție a nutrienților")].findIndex(h3 => h3 === "Digestia chimică") : -1}></H3>
                  <p>
                  Reprezintă descompunerea enzimatică a macronutrienților în unități simple:
                  </p>
                  <ul 
                    className={ulClass}>
                        <li>Glucide → monozaharide (glucoză)</li>
                        <li>Proteine → aminoacizi</li>
                        <li>Lipide → acizi grași și glicerol</li>
                  </ul>
                  <p>
                  Aceasta se realizează cu ajutorul:
                  </p>
                  <ul 
                    className={ulClass}>
                        <li><strong>Enzimelor salivare</strong> (amilaza)</li>
                        <li><strong>Enzimelor gastrice</strong> (pepsina)</li>
                        <li><strong>Enzimelor pancreatice</strong> (amilaza, tripsina, lipaza)</li>
                        <li><strong>Enzimelor intestinale</strong></li>
                  </ul>
                  <H2 h2text="Absorbția nutrienților la nivelul intestinului subțire" indexH2={indexH2("Absorbția nutrienților la nivelul intestinului subțire")} indexLectie={indexLectie}></H2>
                  <ul 
                    className={ulClass}>
                        <li>
                            <strong>Intestinul subțire</strong> este adaptat pentru absorbția eficientă a nutrienților:
                            <ul
                                className={ulClass}>
                                    <li>Are <strong>vili intestinali</strong> și <strong>microvili</strong>, care măresc suprafața de absorbție.</li>
                                    <li>
                                    Substanțele rezultate din digestie pătrund în sânge sau în vasele limfatice:
                                        <ul 
                                            className={ulClass}>
                                                <li>Glucoza, aminoacizii → în sânge</li>
                                                <li>Acizii grași și glicerolul → în limfă</li>
                                        </ul>
                                    </li>
                            </ul>
                        </li>
                        <li>Nutrienții ajunși în sânge sunt transportați la celule, unde vor fi utilizați pentru producerea de energie, creștere sau reparare.</li>
                  </ul>
                  <p>
                  Sistemul digestiv transformă alimentele în nutrienți asimilabili și elimină reziduurile. Este format din organe principale (cavitate bucală, stomac, intestin subțire, intestin gros) și glande anexe (ficat, pancreas). Digestia cuprinde faze mecanice și chimice. Absorbția nutrienților are loc în intestinul subțire, prin vili și microvili.
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