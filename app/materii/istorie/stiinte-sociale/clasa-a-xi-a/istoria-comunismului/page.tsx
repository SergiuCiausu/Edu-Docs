"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-istorie-11";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';
import { titluriCapitole } from '@/app/data/capitole-fizica-mate-info-capitole-10';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

const Page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Istoria comunismului"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
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
              profil="științe sociale" 
              materie="istorie" 
              clasa={11} 
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
                  <H2 h2text="Ideologia comunistă: origini, principii și răspândire" indexH2={indexH2("Ideologia comunistă: origini, principii și răspândire")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Comunismul</strong> este o ideologie politică și economică apărută în secolul al XIX-lea, ca reacție la inegalitățile sociale generate de capitalism. Fondatorii săi teoretici, <strong>Karl Marx</strong> și <strong>Friedrich Engels</strong>, au promovat ideea unei societăți fără clase sociale, fără proprietate privată și guvernată de principiul: „de la fiecare după capacități, fiecăruia după nevoi”.
                  </p>
                  <p>
                  Lucrarea de bază a ideologiei este <strong>Manifestul Partidului Comunist</strong> (1848), iar ideile marxiste au influențat profund mișcările muncitorești din Europa.
                  </p>
                  <p>
                  După Revoluția din 1917 din Rusia, comunismul a devenit un regim politic concret, odată cu instaurarea <strong>URSS</strong>, primul stat comunist din lume, condus de <strong>Vladimir Lenin</strong> și mai târziu de <strong>Iosif Stalin</strong>.
                  </p>
                  <H2 h2text="Instaurarea regimurilor comuniste în Europa Centrală și de Est" indexH2={indexH2("Instaurarea regimurilor comuniste în Europa Centrală și de Est")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  După <strong>Al Doilea Război Mondial</strong>, Europa a fost împărțită în două sfere de influență: occidentală (democratică) și sovietică (comunistă). În partea de est, cu sprijinul URSS, au fost impuse regimuri comuniste în:
                  </p>
                  <p>
                  Polonia, Cehoslovacia, Ungaria, Bulgaria, România, RDG (Germania de Est), Iugoslavia și Albania.
                  </p>
                  <p>
                  Aceste regimuri au fost instaurate prin alegeri falsificate, desființarea partidelor democratice și folosirea forței de represiune (Securitatea, miliția, armata, etc.). URSS a impus un model economic și politic controlat strict de partidul unic comunist.
                  </p>
                  <H2 h2text="Partidul Comunist Român: ascensiune și consolidare a puterii" indexH2={indexH2("Partidul Comunist Român: ascensiune și consolidare a puterii")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  În România, Partidul Comunist (PCR) era o formațiune marginală în perioada interbelică. După 1945, cu sprijinul trupelor sovietice, PCR a preluat treptat puterea:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>1946</strong> – alegeri falsificate;</li>
                    <li><strong>1947</strong> – abdicarea regelui Mihai și proclamarea Republicii Populare Române;</li>
                    <li><strong>1948</strong> – naționalizarea industriei și învățământului.</li>
                  </ul>
                  <p>
                  Liderii principali: <strong>Gheorghe Gheorghiu-Dej (1947–1965) și Nicolae Ceaușescu (1965–1989)</strong>.
                  </p>
                  <p>
                  PCR a devenit singurul partid politic legal, iar toate structurile statului au fost subordonate conducerii sale.
                  </p>
                   <H2 h2text="Politici economice și sociale în România comunistă: colectivizare, industrializare, represiune" indexH2={indexH2("Politici economice și sociale în România comunistă: colectivizare, industrializare, represiune")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                   <p>
                    <strong>
                    Colectivizarea agriculturii:
                    </strong>
                   </p>
                   <p>
                   Între 1949 și 1962, țăranii au fost forțați să renunțe la proprietățile lor, fiind integrați în cooperative agricole. Procesul a fost însoțit de violențe, arestări și deportări.
                   </p>
                   <p>
                    <strong>
                    Industrializarea forțată:
                    </strong>
                   </p>
                   <p>
                   Statul a investit masiv în industrie grea (siderurgie, petrochimie, construcții de mașini), în detrimentul bunurilor de larg consum. Economia planificată a dus la ineficiență, lipsuri cronice și un nivel de trai scăzut.
                   </p>
                   <p>
                    <strong>
                    Represiunea:
                    </strong>
                   </p>
                   <p>
                   Regimul comunist a folosit frica pentru a menține controlul: închisori politice <strong>(Sighet, Aiud, Pitești)</strong>, poliția politică <strong>(Securitatea)</strong>, cenzura presei și suprimarea oricărei forme de opoziție.
                   </p>
                   <H2 h2text="Rezistența anticomunistă și disidența" indexH2={indexH2("Rezistența anticomunistă și disidența")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                   <p>
                   Chiar și în condiții de teroare, au existat forme de <strong>rezistență</strong>:
                   </p>
                   <ul className={ulClass}>
                    <li><strong>Rezistența armată</strong> în munți (1948–1962), dusă de grupuri de partizani;</li>
                    <li><strong>Rezistența intelectuală și religioasă</strong>, prin scrieri clandestine, predici sau predare alternativă;</li>
                    <li><strong>Disidența</strong> unor intelectuali ca <strong>Paul Goma, Doina Cornea, Vladimir Tismăneanus</strong>, dar și a unor preoți sau foști deținuți politici.</li>
                   </ul>
                   <p>
                   Deși reprimată, această rezistență a păstrat vie conștiința libertății.
                   </p>
                   <H2 h2text="Căderea regimurilor comuniste și tranziția către democrație" indexH2={indexH2("Căderea regimurilor comuniste și tranziția către democrație")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                   <p>
                    <strong>Anul 1989</strong> a marcat prăbușirea regimurilor comuniste în Europa de Est:
                   </p>
                   <ul className={ulClass}>
                    <li>Ungaria, Polonia, RDG, Bulgaria, Cehoslovacia – au trecut pașnic la democrație.</li>
                    <li>România – <strong>singura țară unde regimul a fost înlăturat prin violență</strong>, în urma revoluției din decembrie 1989. Nicolae și Elena Ceaușescu au fost executați pe 25 decembrie.</li>
                   </ul>
                   <p>
                    <strong>Tranziția democratică</strong> a fost dificilă, marcată de instabilitate politică, probleme economice și transformări profunde ale societății.
                   </p>
                   <p>
                   Studierea istoriei comunismului este esențială pentru înțelegerea secolului XX. Comunismul a fost un regim totalitar, caracterizat prin lipsa libertăților, control absolut al statului și suferințe colective. Cunoașterea acestui trecut contribuie la prevenirea abuzurilor și la consolidarea valorilor democratice în societatea contemporană.
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