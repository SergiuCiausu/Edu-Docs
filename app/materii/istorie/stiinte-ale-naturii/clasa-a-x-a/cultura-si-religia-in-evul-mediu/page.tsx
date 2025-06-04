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

  const h1 = "Cultura și religia în Evul Mediu"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
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
              profil="științe ale naturii" 
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
                  <p>
                  Evul Mediu, perioadă cuprinsă aproximativ între secolele V și XV, a fost dominat de biserică în toate aspectele vieții culturale. Cultura medievală reflectă o viziune teocentrică, în care Dumnezeu era centrul lumii și al gândirii umane. În acest context, religia a influențat profund literatura, arta, învățământul și știința epocii.
                  </p>
                  <H2 h2text="Literatura medievală" indexH2={indexH2("Literatura medievală")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Literatura medievală s-a dezvoltat în două direcții:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Literatura religioasă</strong> – texte sacre, imnuri, predici, vieți de sfinți (hagiografii);</li>
                    <li><strong>Literatura laică</strong> – cronici, epopei cavalerești, balade populare, fabule.</li>
                  </ul>
                  <p>
                  Cele mai cunoscute opere:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>„Cântecul lui Roland”</strong> (Franța) – epopee cavalerescă;</li>
                    <li><strong>„Divina Comedie”</strong> – Dante Alighieri (Italia);</li>
                    <li><strong>„Beowulf”</strong> – poem epic anglo-saxon;</li>
                    <li><strong>Cruciada copiilor</strong>, relatată în cronici medievale, evidențiază spiritul religios al epocii.</li>
                  </ul>
                  <H2 h2text="Artele medievale" indexH2={indexH2("Artele medievale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Arhitectura</strong> este principalul mijloc de exprimare artistică:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Stilul romanic</strong> (sec. X–XII): ziduri groase, ferestre înguste, forme masive;</li>
                    <li><strong>Stilul gotic</strong> (sec. XII–XV): înălțimi mari, bolți ogivale, vitralii colorate (ex. Catedrala Notre-Dame din Paris).</li>
                  </ul>
                  <p>
                    <strong>Pictura și sculptura</strong> aveau un caracter religios:
                  </p>
                  <ul className={ulClass}>
                    <li>Fresce și icoane în biserici;</li>
                    <li>Sculpturi pe fațadele catedralelor, cu teme biblice și simboluri creștine.</li>
                  </ul>
                  <p>
                    <strong>Muzica:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Dezvoltarea <strong>cântării gregoriene</strong> în spațiul catolic;</li>
                    <li>Utilizarea muzicii în slujbele religioase și în curțile regale.</li>
                  </ul>
                  <H2 h2text="Învățământul și educația" indexH2={indexH2("Învățământul și educația")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  În Evul Mediu timpuriu, <strong>școala era organizată de biserică</strong>:
                  </p>
                  <ul className={ulClass}>
                    <li>Școli monastice, catedralice și episcopale;</li>
                    <li>Învățământ bazat pe <strong>„cele șapte arte liberale”</strong>: gramatică, logică, retorică, aritmetică, geometrie, muzică, astronomie.</li>
                  </ul>
                  <p>
                  În secolul al XII-lea apar <strong>universitățile medievale</strong>:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Universitatea din Bologna</strong> (Italia, 1088);</li>
                    <li><strong>Universitatea din Paris</strong> (sec. XII);</li>
                    <li>Alte centre: Oxford, Cambridge, Salamanca.</li>
                  </ul>
                  <p>
                  Profesorii și studenții făceau parte din <strong>biserica latină</strong> și purtau robe, respectând reguli stricte.
                  </p>
                  <H2 h2text="Știința și filosofia" indexH2={indexH2("Știința și filosofia")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Știința medievală era influențată de religie și gândirea antică:
                  </p>
                  <ul className={ulClass}>
                    <li>Se studiau lucrările lui <strong>Aristotel, Ptolemeu, Galen</strong>;</li>
                    <li>Gânditori arabi și evrei (Avicenna, Averroes, Maimonide) contribuie la păstrarea cunoștințelor clasice.</li>
                  </ul>
                  <p>
                  Filosofia medievală este dominată de:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Scholastică</strong> – metodă de argumentare logică a dogmelor creștine (Toma d’Aquino, Anselm de Canterbury);</li>
                    <li><strong>Misticismul</strong> – accent pe trăirea spirituală și contemplație.</li>
                  </ul>
                  <H2 h2text="Rolul religiei" indexH2={indexH2("Rolul religiei")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Creștinismul</strong> era temelia vieții sociale, culturale și politice:
                  </p>
                  <ul className={ulClass}>
                    <li>Biserica catolică domina Occidentul;</li>
                    <li>Biserica ortodoxă domina Bizanțul și lumea slavă.</li>
                  </ul>
                  <p>
                    Biserica controla educația, redactarea manuscriselor și răspândirea cunoașterii;
                  </p>
                  <p>
                    <strong>Clerul</strong> era principala categorie alfabetizată.
                  </p> 
                  <p>
                  Cultura și religia medievală au fost profund interconectate, reflectând o lume în care Dumnezeu era punctul de referință absolut. Deși influențată de dogme, această epocă a pus bazele unor universități, capodopere artistice și a păstrat vie moștenirea antică, pregătind terenul pentru <strong>Renaștere</strong>.
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