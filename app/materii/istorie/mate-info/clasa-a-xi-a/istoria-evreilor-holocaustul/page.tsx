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

const Page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Istoria evreilor. Holocaustul"
  
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
              profil="mate info" 
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
                  <H2 h2text="Originile și evoluția comunităților evreiești în Europa și în România" indexH2={indexH2("Originile și evoluția comunităților evreiești în Europa și în România")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Evreii reprezintă un popor cu o istorie veche de mii de ani, originar din Orientul Apropiat. După distrugerea celui de-al Doilea Templu din Ierusalim în anul 70 e.n., evreii au fost dispersați în întreaga lume (diaspora), stabilindu-se în diverse regiuni din Europa, Asia și Africa.
                  </p>
                  <p>
                  În Europa, comunitățile evreiești s-au dezvoltat în mai multe zone, în special în spațiul german, polonez, francez și spaniol, contribuind semnificativ la viața economică și culturală. Totuși, ele s-au confruntat adesea cu discriminări și persecuții.
                  </p>
                  <p>
                  În spațiul românesc, primele comunități evreiești sunt atestate încă din perioada antichității (Dobrogea). În evul mediu și epoca modernă, evreii s-au stabilit în Moldova, Țara Românească și, mai ales, în Transilvania. În perioada modernă, au contribuit la dezvoltarea urbană, economică și culturală a țării. De-a lungul timpului, au cunoscut perioade de toleranță, dar și episoade de antisemitism și excludere civică.
                  </p>
                  <H2 h2text="Antisemitismul: forme, cauze și consecințe" indexH2={indexH2("Antisemitismul: forme, cauze și consecințe")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Antisemitismul</strong> este o formă de ură și discriminare împotriva evreilor. El s-a manifestat în diferite forme de-a lungul istoriei:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Religios</strong>: în Evul Mediu, evreii erau acuzați că l-au ucis pe Iisus sau că profanează simboluri creștine.</li>
                    <li><strong>Economic</strong>: acuzați de îmbogățire nemeritată, de control financiar, mai ales în perioada modernă.</li>
                    <li><strong>Rasial</strong>: în secolul al XIX-lea și XX, antisemitismul a căpătat o formă pseudo-științifică, susținând că evreii sunt inferiori biologic.</li>
                  </ul>
                  <p>
                  Aceste idei au dus la <strong>legislație discriminatorie, pogromuri|</strong> (violențe în masă) și, în final, la Holocaust – cea mai gravă consecință a antisemitismului modern.
                  </p>
                  <H2 h2text="Holocaustul: politici de exterminare, lagăre de concentrare și mărturii ale supraviețuitorilor" indexH2={indexH2("Holocaustul: politici de exterminare, lagăre de concentrare și mărturii ale supraviețuitorilor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Holocaustul</strong> (Shoah în ebraică) desemnează exterminarea sistematică a aproximativ 6 milioane de evrei de către regimul nazist din Germania și aliații săi, între 1933–1945.
                  </p>
                  <p>
                  Etapele politicilor naziste:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>1933–1939</strong>: Izolarea evreilor din viața publică (legile de la Nürnberg).</li>
                    <li><strong>1939–1941</strong>: Ghetoizarea și deportarea evreilor în teritoriile ocupate.</li>
                    <li><strong>1941–1945</strong>: „Soluția finală” – exterminarea în masă, prin camere de gazare și execuții.</li>
                  </ul>
                  <p>
                  Lagăre importante:
                  </p>
                  <p>
                    <strong>Auschwitz-Birkenau, Treblinka, Belzec, Majdanek, Sobibor.</strong>
                  </p>
                  <p>
                  <strong>România</strong> a fost implicată în deportarea și uciderea evreilor în timpul regimului Antonescu, în special în <strong>Transnistria, Iași</strong> (pogromul din 1941) și prin alte măsuri represive.
                  </p>
                  <p>
                  Mărturiile supraviețuitorilor, precum <strong>Elie Wiesel</strong>, au devenit esențiale în păstrarea memoriei acestor crime.
                  </p>
                  <H2 h2text=" Reacții internaționale la Holocaust și impactul asupra drepturilor omului" indexH2={indexH2(" Reacții internaționale la Holocaust și impactul asupra drepturilor omului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  După al Doilea Război Mondial, <strong>Holocaustul a șocat lumea</strong>. Tribunalul de la <strong>Nürnberg</strong> (1945–1946) a judecat crimele împotriva umanității comise de naziști.
                  </p>
                  <p>
                  Urmări:
                  </p>
                  <ul className={ulClass}>
                    <li>Adoptarea <strong>Declarației Universale a Drepturilor Omului</strong> (ONU, 1948);</li>
                    <li>Crearea de instituții internaționale pentru protejarea drepturilor minorităților;</li>
                    <li>Condamnarea rasismului și discriminării prin legislații internaționale;</li>
                    <li>Recunoașterea Holocaustului ca fenomen unic în istorie.</li>
                  </ul>
                  <H2 h2text="Memoria Holocaustului: comemorări, educație și prevenirea genocidului" indexH2={indexH2("Memoria Holocaustului: comemorări, educație și prevenirea genocidului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Educația despre Holocaust este esențială pentru:
                  </p>
                  <ul className={ulClass}>
                    <li>Combaterea negării și minimalizării lui;</li>
                    <li>Promovarea toleranței și a drepturilor omului;</li>
                    <li>Prevenirea altor genociduri.</li>
                  </ul>
                  <p>
                  Ziua Internațională de Comemorare a Victimelor Holocaustului este <strong>27 ianuarie</strong>, ziua eliberării lagărului de la Auschwitz.
                  </p>
                  <p>
                  În România, studierea Holocaustului este obligatorie în liceu, iar institute precum Elie Wiesel contribuie la cercetarea și păstrarea memoriei.
                  </p>
                  <p>
                  Istoria evreilor și Holocaustul constituie un avertisment dur al istoriei recente. Studierea acestor evenimente ne ajută să înțelegem pericolele extremismului, ale urii și ale nepăsării. Doar prin educație și memorie putem construi o societate democratică, liberă de ură și discriminare.
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