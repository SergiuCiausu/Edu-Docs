"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-istorie-9";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';
import { titluriCapitole } from '@/app/data/capitole-fizica-mate-info-capitole-10';

const Page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Civilizația medievală"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
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
              materie="istorie" 
              clasa={9} 
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
                  <H2 h2text="Demografie și economie" indexH2={indexH2("Demografie și economie")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>
                    Demografia:
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Populația Europei medievale a crescut lent până în secolul al XIV-lea, când a fost afectată grav de epidemii (ex. Ciuma Neagră – 1347–1352).</li>
                    <li>Majoritatea locuitorilor trăiau la sate; orașele erau mici, dar în dezvoltare.</li>
                  </ul>
                  <p>
                    <strong>
                    Economia:
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Agricultura</strong> era activitatea principală: folosirea plugului cu fier, rotația trienală, deschiderea de noi terenuri.</li>
                    <li><strong>Meșteșugurile</strong> s-au dezvoltat în orașe, organizate în <strong>bresle</strong>.</li>
                    <li><strong>Comerțul</strong> a renăscut începând cu secolul al XI-lea, cu târguri și drumuri comerciale importante (Drumul Mătăsii, Drumul Ambrei).</li>
                  </ul>
                  <H2 h2text="Ierarhia feudală" indexH2={indexH2("Ierarhia feudală")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Societatea medievală era feudală, ierarhizată strict:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Suveranul</strong> (regele/împăratul) – conducător suprem, dar adesea cu putere limitată de marii seniori.</li>
                    <li><strong>Nobilimea</strong> – stăpânea pământul și avea obligații militare.</li>
                    <li><strong>Clerul</strong> – avea autoritate spirituală și putere economică.</li>
                    <li><strong>Țăranii</strong> – lucrau pământurile și erau de cele mai multe ori dependenți de seniori (iobagi).</li>
                  </ul>
                  <p>
                    <strong>Relațiile de vasalitate</strong> (jurământ de credință între vasal și senior) au stat la baza ordinii politice și militare.
                  </p>
                  <H2 h2text="Europa romanică și Europa gotică" indexH2={indexH2("Europa romanică și Europa gotică")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Europa romanică</strong> (sec. X–XII):
                  </p>
                  <ul className={ulClass}>
                    <li>Cultura influențată de monahism și autoritatea Bisericii.</li>
                    <li>Arta era religioasă, cu <strong>biserici romane</strong>: ziduri groase, ferestre mici, plan cruciform, turnuri masive.</li>
                    <li>Manuscrise iluminate, sculpturi cu tematică biblică.</li>
                  </ul>
                  <p>
                    <strong>Europa gotică</strong> (sec. XII–XIV):
                  </p>
                  <ul className={ulClass}>
                    <li>Accent pe urbanizare și pe prestigiu religios/civic.</li>
                    <li><strong>Catedrale gotice</strong>: înalte, ferestre cu vitralii, bolți ogivale, contraforturi.</li>
                    <li>Orașele devin centre de cultură și comerț.</li>
                  </ul>
                  <H2 h2text="Arhitectura medievală românească" indexH2={indexH2("Arhitectura medievală românească")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  În spațiul românesc, arhitectura a evoluat sub influențe bizantine, romane și gotice:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Biserici ortodoxe</strong> construite din piatră sau cărămidă.</li>
                    <li>Exemple: Biserica Densuș, Curtea de Argeș (sec. XIV), mănăstiri fortificate în Transilvania.</li>
                  </ul>
                  <p>
                    <strong>Cetăți medievale</strong> ridicate pentru apărare: cetățile din Suceava, Alba Iulia, Deva, etc.
                  </p>
                  <H2 h2text="Influențe orientale în Europa" indexH2={indexH2("Influențe orientale în Europa")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>
                    Influențe bizantine:
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li>În artă, religie și administrație, mai ales în sud-estul Europei și Balcani.</li>
                    <li>Alfabetul chirilic, stilul iconografic, rit ortodox.</li>
                  </ul>
                  <p>
                    <strong>
                    Influențe islamice:
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Transmise prin contactele cu lumea arabă și Imperiul Otoman.</li>
                    <li>În matematică (algoritmi), medicină, arhitectură (elemente decorative), textile, ceramică.</li>
                  </ul>
                  <p>
                  Civilizația medievală europeană a fost un amestec de tradiții antice, creștine și orientale. Structurile sociale rigide, dar stabile, precum și dezvoltările economice și culturale, au pregătit terenul pentru transformările majore ale Renașterii și epocii moderne.
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

export default Page