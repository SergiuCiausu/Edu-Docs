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

const Page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Formarea popoarelor și statelor medievale"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Definiția etnogenezei", "Contextul istoric"],
    ["Etapele etnogenezei", "Dovezi ale etnogenezei"],
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
              profil="filologie" 
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
                  <H2 h2text="Etnogeneza românească" indexH2={indexH2("Etnogeneza românească")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Definiția etnogenezei" indexH3={h3s[h2s.findIndex(h2 => h2 === "Etnogeneza românească")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Etnogeneza românească")].findIndex(h3 => h3 === "Definiția etnogenezei") : -1}></H3>
                  <p>
                    <strong>Etnogeneza</strong> este procesul istoric complex prin care ia naștere un popor, prin contopirea și evoluția mai multor grupuri etnice, însoțită de formarea unei limbi comune, a unui teritoriu stabil și a unei conștiințe identitare.
                  </p>
                  <H3 h3text="Contextul istoric" indexH3={h3s[h2s.findIndex(h2 => h2 === "Etnogeneza românească")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Etnogeneza românească")].findIndex(h3 => h3 === "Contextul istoric") : -1}></H3>
                  <p>
                  Etnogeneza românească s-a desfășurat în spațiul carpato-danubiano-pontic, începând cu secolul al II-lea d.Hr., după cucerirea unei părți a Daciei de către Imperiul Roman sub împăratul Traian (anul 106), și s-a finalizat în jurul secolului al VIII-lea, când se conturează poporul român.
                  </p>
                  <H2 h2text="Factorii determinanți ai etnogenezei românești" indexH2={indexH2("Factorii determinanți ai etnogenezei românești")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ol className={olClass}>
                    <li>
                        <strong>Elementul daco-getic (autohton):</strong>
                        <ul className={ulClass}>
                            <li>Populație stabilă, numeroasă, cunoscută din izvoarele antice drept daci (sau geți);</li>
                            <li>Cultura și tradițiile acestora au fost păstrate în mare parte în mediul rural.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Elementul roman (colonizator):</strong>
                        <ul className={ulClass}>
                            <li>După cucerirea Daciei, romanii au adus coloniști din diverse provincii;</li>
                            <li>Limba latină vulgară a devenit principalul mijloc de comunicare;</li>
                            <li>Romanizarea s-a produs rapid în zonele urbane și administrative.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Elementul migrator (germani, slavi, avari etc.):</strong>
                        <ul className={ulClass}>
                            <li>Popoarele migratoare au tranzitat sau s-au stabilit temporar în regiune;</li>
                            <li>Influența lor a fost limitată la nivel lingvistic și cultural, fără a distruge fondul daco-roman.</li>
                        </ul>
                    </li>
                  </ol>
                  <H3 h3text="Etapele etnogenezei" indexH3={h3s[h2s.findIndex(h2 => h2 === "Factorii determinanți ai etnogenezei românești")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Factorii determinanți ai etnogenezei românești")].findIndex(h3 => h3 === "Etapele etnogenezei") : -1}></H3>
                  <ol className={olClass}>
                    <li>
                        <strong>Romanizarea (sec. II–III d.Hr.):</strong>
                        <ul className={ulClass}>
                            <li>Proces de adoptare a limbii, culturii și instituțiilor romane de către daci;</li>
                            <li>Formarea unui popor daco-roman cu o limbă neolatină.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Continuitatea daco-romană (sec. III–VIII):</strong>
                        <ul className={ulClass}>
                            <li>După retragerea administrației romane din Dacia (271), populația romanizată rămâne în teritoriu;</li>
                            <li>Cultura materială (ceramică, unelte, locuințe) dovedește continuitatea.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Slavizarea parțială (sec. VI–VIII):</strong>
                        <ul className={ulClass}>
                            <li>Slavii se așază în regiune, influențând limba română prin împrumuturi lexicale;</li>
                            <li>Populația daco-romană rămâne majoritară și își păstrează identitatea.</li>
                        </ul>
                    </li>
                  </ol>
                  <H3 h3text="Dovezi ale etnogenezei" indexH3={h3s[h2s.findIndex(h2 => h2 === "Factorii determinanți ai etnogenezei românești")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Factorii determinanți ai etnogenezei românești")].findIndex(h3 => h3 === "Dovezi ale etnogenezei") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Arheologice</strong>: ceramică, tipuri de locuințe, morminte, unelte;</li>
                    <li><strong>Lingvistice</strong>: limba română este de origine latină, cu influențe slave, grecești, maghiare etc.;</li>
                    <li><strong>Documentare</strong>: mențiuni în cronici bizantine (Theophylact Simocatta), arabe (Al-Masudi) și occidentale.</li>
                  </ul>
                  <p>
                  Etnogeneza românească este un proces unitar, care s-a desfășurat în <strong>nordul și sudul Dunării</strong>, confirmând <strong>continuitatea populației daco-romane și formarea timpurie a limbii și culturii românești</strong>. Acest proces a stat la baza constituirii poporului român și a statelor medievale românești.
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