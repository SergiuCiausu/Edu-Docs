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
      "Organele digestive: structură și funcții",
      "Procesul de digestie și absorbție a nutrienților",
    ]

    const h3s = [
      ["Tubul digestiv", "Glandele anexe"],
      ["Etapele procesului digestiv"]
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Sistemul digestiv") + 1;

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
                  <h1>{`Capitolul ${indexLectie}: Sistemul digestiv`}</h1>
                  <p>
                    <strong>Sistemul digestiv</strong> este responsabil de transformarea alimentelor în substanțe nutritive simple, care pot fi absorbite în sânge și utilizate de celulele organismului. Acesta asigură digestia mecanică și chimică a alimentelor, absorbția nutrienților și eliminarea reziduurilor neutilizabile.
                  </p>
                  <H2 h2text="Organele digestive: structură și funcții" indexH2={indexH2("Organele digestive: structură și funcții")} indexLectie={indexLectie}></H2>
                  <p>
                  Sistemul digestiv este alcătuit din <strong>tubul digestiv</strong> și <strong>glandele anexe</strong>, fiecare componentă având roluri precise în procesul digestiei.
                  </p>
                  <H3 h3text="Tubul digestiv:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organele digestive: structură și funcții")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organele digestive: structură și funcții")].findIndex(h3 => h3 === "Tubul digestiv") : -1}></H3>
                  <ol
                    className={olClass}>
                    <li>
                        <strong>Cavitatea bucală</strong>
                        <ul
                            className={ulClass}>
                                <li>Primul segment al sistemului digestiv.</li>
                                <li>Aici are loc <strong>masticația</strong> (zdrobirea alimentelor cu ajutorul dinților) și <strong>insalivarea</strong> (amestecarea cu saliva).</li>
                                <li>Saliva conține <strong>amilază salivară</strong>, enzimă care începe digestia amidonului.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Faringele și esofagul</strong>
                        <ul
                            className={ulClass}>
                                <li>Conduc bolul alimentar spre stomac printr-un proces numit <strong>deglutiție</strong>.</li>
                                <li><strong>Esofagul</strong> este un tub muscular care realizează mișcări peristaltice.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Stomacul</strong>
                        <ul
                            className={ulClass}>
                            <li>Este un organ muscular, cu rol de rezervor și de digestie parțială.</li>
                            <li>Sucul gastric conține <strong>acid clorhidric</strong> și <strong>pepsină</strong>, care descompun proteinele.</li>
                            <li>Alimentele sunt transformate în <strong>chim gastric</strong>, o masă semi-lichidă.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Intestinul subțire</strong>
                        <ul
                            className={ulClass}>
                                <li>Format din <strong>duoden, jejun și ileon</strong>.</li>
                                <li>Este locul principal al digestiei și <strong>absorbției nutrienților</strong>.</li>
                                <li>Primește sucuri digestive de la pancreas și ficat.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Intestinul gros</strong>
                        <ul
                            className={ulClass}>
                                <li>Format din <strong>cec, colon și rect</strong>.</li>
                                <li>Aici are loc absorbția apei și formarea materiilor fecale.</li>
                                <li>Microflora intestinală participă la fermentarea resturilor alimentare.</li>
                        </ul>
                    </li>
                  </ol>
                  <H3 h3text="Glandele anexe:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organele digestive: structură și funcții")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organele digestive: structură și funcții")].findIndex(h3 => h3 === "Glandele anexe") : -1}></H3>
                  <ol
                    className={olClass}>
                        <li>
                            <strong>Glandele salivare</strong>
                            <ul
                                className={ulClass}>
                                    <li>Produc saliva, care conține enzime digestive și are rol de lubrifiere.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Ficatul</strong>
                            <ul
                                className={ulClass}>
                                    <li>Produce <strong>bila</strong>, un lichid care emulsionează grăsimile pentru o digestie mai eficientă.</li>
                                    <li>Are roluri importante în metabolism, detoxifiere și depozitarea glucozei sub formă de glicogen.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Pancreasul</strong>
                            <ul
                                className={ulClass}>
                                    <li>Secretă <strong>suc pancreatic</strong>, bogat în enzime care acționează asupra tuturor categoriilor de nutrienți (proteine, lipide, glucide).</li>
                                    <li>Are și funcție endocrină (insulină și glucagon).</li>
                            </ul>
                        </li>
                  </ol>
                  <H2 h2text="Procesul de digestie și absorbție a nutrienților" indexH2={indexH2("Procesul de digestie și absorbție a nutrienților")} indexLectie={indexLectie}></H2>
                  <p>
                  Digestia presupune transformarea alimentelor în molecule simple, absorbabile, prin <strong>procese mecanice și chimice</strong>.
                  </p>
                  <H3 h3text="Etapele procesului digestiv:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procesul de digestie și absorbție a nutrienților")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Procesul de digestie și absorbție a nutrienților")].findIndex(h3 => h3 === "Procesul de digestie și absorbție a nutrienților") : -1}></H3>
                  <ol
                    className={olClass}>
                        <li>
                            <strong>Digestia mecanică</strong>
                            <ul
                                className={ulClass}>
                                    <li>Include masticația, amestecarea și propulsarea alimentelor de-a lungul tubului digestiv.</li>
                                    <li>Ajută la fragmentarea și omogenizarea alimentelor pentru a facilita acțiunea enzimelor.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Digestia chimică</strong>
                            <ul
                                className={ulClass}>
                                    <li>
                                        Se realizează cu ajutorul enzimelor digestive care descompun macronutrienții:
                                        <ul
                                            className={ulClass}>
                                                <li><strong>Amilaza</strong> → carbohidrați (glucoză)</li>
                                                <li><strong>Pepsina, tripsina</strong> → proteine (aminoacizi)</li>
                                                <li><strong>Lipaza</strong> → lipide (acizi grași și glicerol)</li>
                                        </ul>
                                    </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Absorbția nutrienților</strong>
                            <ul
                                className={ulClass}>
                                    <li>Are loc în intestinul subțire, în special în jejun și ileon.</li>
                                    <li>Mucoasa intestinală este căptușită cu <strong>vili</strong> și <strong>microvili</strong>, care măresc suprafața de absorbție.</li>
                                    <li>Nutrienții ajung în sânge (glucoză, aminoacizi) sau în vasele limfatice (acizi grași).</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Eliminarea reziduurilor</strong>
                            <ul
                                className={ulClass}>
                                    <li>Substanțele neabsorbite trec în intestinul gros, unde se formează <strong>materiile fecale</strong>.</li>
                                    <li>Acestea sunt eliminate prin procesul de <strong>defecație</strong>.</li>
                            </ul>
                        </li>
                  </ol>
                  <p>
                  Sistemul digestiv este un ansamblu complex de organe care transformă alimentele în substanțe esențiale vieții. Prin funcțiile sale de digestie, absorbție și excreție, acest sistem contribuie decisiv la menținerea sănătății organismului și la furnizarea constantă de energie și materii prime pentru celule.
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