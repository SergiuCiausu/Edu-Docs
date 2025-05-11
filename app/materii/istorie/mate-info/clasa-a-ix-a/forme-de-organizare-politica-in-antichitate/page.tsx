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

  const h1 = "Forme de organizare politică în Antichitate"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
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
                  <H2 h2text="Monarhia egipteană" indexH2={indexH2("Monarhia egipteană")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Monarhia egipteană a fost una <strong>teocratică și absolutistă</strong>, în care faraonul era considerat un <strong>zeu viu și deținea puterea supremă</strong>. El era conducător politic, militar și religios. Statul egiptean era organizat ierarhic, cu o administrație complexă formată din scribi, preoți și funcționari. Faraonii au construit mari lucrări de infrastructură (diguri, canale, piramide) și au întreținut o armată puternică pentru a-și extinde și apăra teritoriul.
                  </p>
                  <H2 h2text="Democrația ateniană" indexH2={indexH2("Democrația ateniană")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Democrația s-a dezvoltat în <strong>polisul Atena</strong> în secolul al V-lea î.Hr., în timpul lui Pericle. A fost o formă de guvernare în care <strong>cetățenii liberi</strong> aveau dreptul să participe direct la luarea deciziilor în Adunarea poporului (Ekklesia). Alte instituții democratice includeau Consiliul celor 500 (Boule) și tribunalul popular (Heliaia). Democrația ateniană era <strong>directă, dar exclusivistă</strong> – erau excluși sclavii, femeile și metecii (străinii).
                  </p>
                  <H2 h2text="Republica și Imperiul Roman" indexH2={indexH2("Republica și Imperiul Roman")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  <strong>Republica Romană</strong> (509 î.Hr. – 27 î.Hr.) a fost o formă de guvernare în care puterea era deținută de instituții ca <strong>Senatul, magistrații și Adunările populare</strong>. Magistraturile erau funcții publice alese (ex. consuli, edili, cenzori), iar Senatul controla politica externă și bugetul.
                  </p>
                  <p>
                  <strong>Imperiul Roman</strong> a început în anul 27 î.Hr., când <strong>Octavian Augustus</strong> a devenit primul împărat. Imperiul era condus de un <strong>principe (princeps)</strong>, care concentra toate puterile în mâinile sale: legislativă, executivă, militară și religioasă. A fost o monarhie de tip <strong>autoritar</strong>, menținută prin armată, administrație eficientă și propagandă.
                  </p>
                  <H2 h2text="Regatul dac" indexH2={indexH2("Regatul dac")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  În spațiul carpato-danubiano-pontic, <strong>statul dac</strong> a atins forma sa de apogeu sub conducerea regelui <strong>Burebista</strong> (82–44 î.Hr.), care a unificat triburile geto-dace. Organizarea politică era <strong>monarhică</strong>, iar regele avea roluri militare, administrative și religioase. Ulterior, în timpul lui <strong>Decebal</strong> (87–106 d.Hr.), regatul a intrat în conflict cu Imperiul Roman, culminând cu războaiele daco-romane și cucerirea Daciei de către Traian în 106 d.Hr.
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