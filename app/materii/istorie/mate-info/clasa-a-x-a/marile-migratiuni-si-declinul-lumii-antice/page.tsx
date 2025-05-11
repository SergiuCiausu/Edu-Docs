"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-istorie-10";
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

  const h1 = "Marile migrațiuni și declinul lumii antice"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
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
              clasa={10} 
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
                  <H2 h2text="Criza societății antice și formele ei de manifestare" indexH2={indexH2(" Criza societății antice și formele ei de manifestare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  În secolul al III-lea d.Hr., Imperiul Roman intră într-o perioadă de criză profundă, care afectează toate aspectele vieții: politică, economică, socială și militară. Această criză este cauzată de:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Instabilitate politică</strong>: schimbări frecvente ale împăraților, deseori prin uzurpare, și fragmentarea autorității centrale;</li>
                    <li><strong>Criza economică</strong>: scăderea producției agricole, depopularea satelor, inflația generată de devalorizarea monedei;</li>
                    <li><strong>Insecuritate</strong>: atacuri repetate ale popoarelor migratoare la granițele imperiului;</li>
                    <li><strong>Slăbirea armatei</strong>: scăderea disciplinei și a loialității, recrutarea de mercenari străini;</li>
                    <li><strong>Declin urban</strong>: orașele se depopulează, meșteșugurile și comerțul intră în regres.</li>
                  </ul>
                  <p>
                  Încercările unor împărați, precum Dioclețian (284–305) și Constantin cel Mare (306–337), de a salva imperiul prin reforme administrative, fiscale și religioase (inclusiv legalizarea creștinismului) au avut doar un succes temporar.
                  </p>
                  <H2 h2text="Marile migrațiuni și declinul lumii antice" indexH2={indexH2("Marile migrațiuni și declinul lumii antice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Marile migrațiuni</strong> au fost mișcări masive de populații barbare (germani, huni, slavi, alani, vandali etc.) care au invadat și traversat teritoriile Imperiului Roman începând cu sfârșitul secolului al IV-lea.
                  </p>
                  <p>
                    <strong>
                    Cauzele migrațiilor:
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Presiunea exercitată de hunii asiatici asupra triburilor germanice;</li>
                    <li>Atractivitatea economică a provinciilor romane;</li>
                    <li>Slăbirea forței militare a imperiului.</li>
                  </ul>
                  <p>
                    <strong>
                    Etapele migrațiilor:
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li>376: Vizigoții trec Dunărea și cer azil în Imperiul Roman.</li>
                    <li>378: Bătălia de la Adrianopol – romanii sunt înfrânți de vizigoți.</li>
                    <li>410: Vizigoții conduși de Alaric jefuiesc Roma.</li>
                    <li>455: Vandalii jefuiesc Roma din nou.</li>
                    <li>476: Odoacru, conducător barbar, îl detronează pe Romulus Augustulus, ultimul împărat roman din Apus.</li>
                  </ul>
                  <H2 h2text="Căderea Imperiului Roman de Apus. Epoca Medievală" indexH2={indexH2("Căderea Imperiului Roman de Apus. Epoca Medievală")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Anul <strong>476 d.Hr.</strong> este considerat <strong>momentul simbolic al căderii Imperiului Roman de Apus</strong> și al începutului Evului Mediu. După acest moment:
                  </p>
                  <ul className={ulClass}>
                    <li>Se formează <strong>regate barbare</strong> pe teritoriile fostului imperiu (regatul vizigot, regatul franc, regatul ostrogot etc.);</li>
                    <li>Cultura romană se păstrează în parte, fiind asimilată de noii stăpâni;</li>
                    <li>Biserica creștină rămâne o instituție puternică și unificatoare;</li>
                    <li>În <strong>Răsărit</strong>, Imperiul Roman continuă să existe sub forma <strong>Imperiului Bizantin</strong>, cu capitala la Constantinopol.</li>
                  </ul>
                  <p>
                  Criza internă a Imperiului Roman și presiunea migrațiilor barbare au condus la destrămarea treptată a unei civilizații care a dominat lumea timp de secole. Căderea Romei nu a însemnat dispariția totală a moștenirii antice, ci transformarea acesteia într-o nouă epocă – <strong>Evul Mediu european</strong>.
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