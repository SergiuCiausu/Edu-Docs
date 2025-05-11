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

const page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Formarea popoarelor medievale"
  
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
              profil="mate info" 
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
                  <p>
                  După prăbușirea Imperiului Roman de Apus în 476 d.Hr., Europa a intrat într-o nouă etapă istorică – Evul Mediu. Această perioadă a fost marcată de migrații, amestecuri de populații și formarea unor noi entități etnice și politice. În paralel, în Orient și Nordul Africii s-au afirmat arabii și, ulterior, popoarele turcice, care au avut un rol esențial în conturarea echilibrului politico-religios din lumea medievală.  
                  </p>           
                  <H2 h2text="Popoarele europene" indexH2={indexH2("Popoarele europene")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>
                    Contextul istoric:
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Invaziile barbare din secolele III–V au dus la destrămarea autorității romane în Occident.</li>
                    <li>Popoarele germanice (vizigoții, ostrogoții, francii, anglii, saxonii, longobarzii etc.) au întemeiat regate pe teritoriile fostului Imperiu Roman.</li>
                  </ul>
                  <p>
                    <strong>
                    Etape ale formării popoarelor europene:
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Amestecul romano-germanic</strong>: Populațiile romanizate și cele germanice s-au contopit, dând naștere la noi identități etnice și culturale.</li>
                    <li><strong>Adoptarea creștinismului</strong>: A fost un factor unificator și un element de coeziune socială.</li>
                    <li><strong>Fărâmițarea politică și apariția feudelor</strong>: Conducătorii militari ai noilor popoare și-au întemeiat propriile structuri de putere.</li>
                  </ul>
                  <p>
                    <strong>
                    Exemple relevante:
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Francii</strong>: sub dinastia Merovingiană și apoi Carolingiană, au creat un imperiu puternic în Vestul Europei (Imperiul lui Carol cel Mare).</li>
                    <li><strong>Anglii și saxonii</strong>: s-au stabilit în Britania, punând bazele viitorului regat al Angliei.</li>
                    <li><strong>Slavii</strong>: au migrat spre Estul și Sud-Estul Europei, formând popoarele slave actuale.</li>
                  </ul>
                  <H2 h2text="Arabii și popoarele turcice" indexH2={indexH2("Arabii și popoarele turcice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>
                    Arabii:
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Origine</strong>: Semitici, locuitori ai Peninsulei Arabe.</li>
                    <li><strong>Islamul</strong> (apărut în secolul al VII-lea) a fost principalul factor de coeziune și expansiune.</li>
                    <li><strong>Cuceriri</strong>: În mai puțin de un secol de la moartea profetului Mahomed (632), arabii au cucerit un vast teritoriu: Orientul Mijlociu, Africa de Nord, Peninsula Iberică.</li>
                    <li>
                        <strong>Contribuții</strong>: 
                        <ul className={ulClass}>
                            <li>Răspândirea limbii arabe și a religiei islamice.</li>
                            <li>Dezvoltarea științelor și culturii: matematică, medicină, astronomie, filosofie.</li>
                        </ul>
                    </li>
                  </ul>
                  <p>
                    <strong>
                    Popoarele turcice:
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Origine</strong>: Asia Centrală; seminomazi, inițial de religie păgână, apoi islamizați.</li>
                    <li><strong>Migrarea spre vest</strong>: începând cu secolul al IX-lea.</li>
                    <li>
                        <strong>Rol istoric:</strong>
                        <ul className={ulClass}>
                            <li>Formarea unor puternice entități statale: Selgiucizii, Imperiul Otoman.</li>
                            <li>Cucerirea unor teritorii vaste în Orientul Apropiat, Anatolia și, ulterior, în Balcani.</li>
                        </ul>
                    </li>
                  </ul>
                  <p>
                  Formarea popoarelor medievale a fost un proces complex, influențat de migrații, cuceriri, religie și amestecuri culturale. Rezultatul a fost apariția identităților naționale și etnice ale Europei și Orientului Apropiat, care au stat la baza dezvoltării ulterioare a statelor moderne.
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