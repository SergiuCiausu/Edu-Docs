"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-romana-mate-info-11";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);
  
  const h1 = "Comentariu: Baltagul de Mihail Sadoveanu"

  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
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
              profil="științe sociale" 
              materie="limba și literatura română" 
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
                className="flex gap-12">
                <div
                  className="py-16 flex-1">
                  <h1>{`${titluri.length > 1 ? `Capitolul ${indexLectie}: ` : ""}${h1}`}</h1>
                  <H2 h2text="Date despre autor" indexH2={indexH2("Date despre autor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Mihail Sadoveanu a fost un scriitor român, care și-a desfășurat activitatea literară la granița dintre perioada interbelică și cea postbelică. Opera sa vastă se remarcă, în special, prin crearea romanului mitico-istoric, prezent în „Frații Jderi”, „Neamul Șoimăreștilor” și „Zodia Cancerului”.
                  </p>
                  <H2 h2text="Publicare" indexH2={indexH2("Publicare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    „Baltagul” este un roman realist-obiectiv, fiind o operă literară cu valore semnificativă în literatura limbii române, care a fost publicat în anul 1930 și reprezintă o intrepretare originală a mitului mioritic.
                  </p>
                  <H2 h2text="Curent literar" indexH2={indexH2("Curent literar")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Realismul este curentul literar care se desfășoară începând cu secolul al XIX-lea, și care promovează o nouă viziune artistică, ca artă de manifestare a veridicității, originalității, observării tiparelor umane reprezentative și reliefării individului ca produs al societății în care trăiește. Această mișcare se caracterizează prin inserarea pasajelor descriptive amănunțite, având un stil impersonal, sobru, precis și concis.
                  </p>
                  <p>
                    Romanul „Baltagul” aparține realismului mitic. Veridicitatea este o trăsătură importantă a realismului, utlizată de scriitorul român pentru a exprima o societate foarte apropiată de cea contemporană cu acesta prin personajele prezente în text. Prin extrapolarea semnificației veridicității, se poate observa dezvăluirea unei alte laturi a personalității sale profund umane.
                  </p>
                  <p>
                    O altă trăsătură a realismului, prezentă în romanul lui Mihail Sadoveanu, este reprezentată de relevarea impresiei realului prin limbajul naratorului. Acesta nu participă la acțiune și o prezintă în mod preponderent direct, împletind problematica socială cu motive realiste, recurente în scrierile lui Mihail Sadoveanu.
                  </p>
                  <H2 h2text="Teme și motive" indexH2={indexH2("Teme și motive")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Tema romanului Baltagul este constituită din prezentarea arhaică a vieții satului românesc. Motivele literare ce susțin această temă sunt: oieri, baltag, păstorit și transhumanță.
                  </p>
                  <H2 h2text="Specie literară" indexH2={indexH2("Specie literară")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Specia literară a acestei opere realiste este romanul interbelic, mitic, social, doric, cu elemente de modernitate, caracterizat de o acțiune complexă, de mare întindere, prezentată cu fraze ample desfășurată pe planuri narative multiple și având un număr mare de personaje. Această operă constituie un bildungsroman, fiind urmărită evoluția lui Gheorghiță.
                  </p>
                  <H2 h2text="Semnificația titlului" indexH2={indexH2("Semnificația titlului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Titlul romanului, „Baltagul”, este sintetic și simbolic, fiind alcătuit dintr-un substantiv comun, articulat hotărât, ce capătă un dublu rol atât ca armă a dreptății, cât și a crimei.
                  </p>
                  <H2 h2text="Perspectiva narativă" indexH2={indexH2("Perspectiva narativă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Perspectiva narativă este heterodiegetică, relevă un narator extradiegetic, omniscient, și omniprezent, instanța narativă fiind obiectivă, deoarece relatarea întâmplărilor se face la persoana a III-a. Acesta dirijează din exterior personajele, posedând o cunoaștere superioară, fiind în instanța naratorului omnipotent. Focalizarea este concetrată pe coordonata externă.
                  </p>
                  <p>
                    Romanul Baltagul conține 16 capitole și se desfășoară într-un spațiu vast, reprezentat de localități moldovenești.
                  </p>
                  <H2 h2text="Două secvențe relevante" indexH2={indexH2("Două secvențe relevante")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                   O secvență relevantă a romanului este reprezentată de cea a descoperii achiziției lui Nechifor la Vatra Dornei, unde acesta a cumpărat trei sute de oi și a vândut o sută dintre ele lui Calistrat Bogza și lui Ilie Cuțui. Odată coborâtă în râpă, Vitoria cercetează indiciile și, totodată, se preocupă de ritaulul pregătirii celui mort. Tenacitatea femeii se concentrează apoi pe datoria de mamă, prin rugămintea acesteia ca Gheorghiță să fie destul de curajos și puternic  pentru a priveghea osemintele tatălui. Astfel, Gheorghiță, deși temător la început, devine bărbatul familiei și dovedește neînfricare și maturitate.
                  </p>
                  <p>
                    O altă secvență reprezentativă este scena parastasului, care reprezintă chiar punctul culminant al romanului. În această scenă, Vitoria demască atât ucigașul soțului său, cât și pe complicele acestuia, iar femeia se dovedește a fi un fin observator al psihologiei umane. La praznic, Bogza își recunoaște fapta în fața comunității adunate, însă Vitoria nu-l poate ierta și lasă clemența în seama divinității.
                  </p>
                  <H2 h2text="Elemente de limbaj" indexH2={indexH2("Elemente de limbaj")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În ceea ce privește limbajul, Mihail Sadoveanu preferă exprimarea directă, popular-arhaică. Scrierea conține numeroase pasaje narative, compuse din fraze ample, în vederea redării detalitate a particularităților graiului moldovenesc și reconstituirea unei lumi guvernate pe baza unor legi nescrise.
                  </p>
                  <H2 h2text="Concluzie" indexH2={indexH2("Concluzie")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În cele din urmă, romanul „Baltagul” de Mihail Sadoveanu este o capodoperă a literaturii române, fiind o operă rafinată, caracterizată de o acțiune complexă și de un număr mare de personaje, construită cu fraze ample, remarcabilă prin viziunea originală, bazată pe veridicate, a lui Sadoveanu. Acesta se dovedește a fi un fin observator al psihologiei umane, trăsătură care se remarcă prin reușita de a ilustra arhaic viața satului românesc.
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