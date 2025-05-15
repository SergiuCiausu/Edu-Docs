"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-romana-mate-info-10";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';

const page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);
  
  const h1 = "Comentariu: Moara cu noroc de Ioan Slavici"

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
              profil="mate info" 
              materie="limba și literatura română" 
              clasa={10} 
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
                    Ioan Slavici a fost un scriitor român, care și-a desfășurat activitatea literară în perioada marilor clasici ai literaturii. Opera sa vastă se remarcă prin crearea romanului realist-obiectiv „Mara” și prin integrarea elementelor de analiză psihologică în scrierile sale.
                  </p>
                  <H2 h2text="Publicare" indexH2={indexH2("Publicare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    „Moara cu noroc” este o nuvelă de factură psihologică, fiind o operă literară cu valore semnificativă în literatura limbii române, care a fost publicată în anul 1881, în volumul „Novele din popor” și prezintă destinul tragic al unei familii reprezentative pentru societatea românească a secolului a XIX-lea.
                  </p>
                  <H2 h2text="Curent literar" indexH2={indexH2("Curent literar")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Realismul este curentul literar care se desfășoară începând cu secolul al XIX-lea, și care promovează o nouă viziune artistică, ca artă de manifestare a veridicității, originalității, observării tiparelor umane reprezentative și reliefării individului ca produs al societății în care trăiește. Această mișcare se caracterizează prin inserarea pasajelor descriptive amănunțite, având un stil impersonal, sobru, precis și concis.
                  </p>
                  <p>
                    Nuvela „Moara cu noroc” este o operă literară ce aparține realismului. Veridicitatea este trăsătura importantă a realismului, utilizată de prozatorul român pentru a exprima o societatea foarte apropiată de cea contemporană cu acesta prin personajele prezente în text. Prin extrapolarea semnificației veridicității, se poate observa dezvăluirea a unei alte laturi a personalității sale profund umane.
                  </p>
                  <p>
                    O altă trăsătură a realismului, prezentă în romanul lui Ioan Slavici, este reprezentată de relevarea impresiei realului prin limbajul naratorului. Acesta nu participă la acțiune și o prezintă în mod preponderent obiectiv, împletind problematica socială cu motive literare romantice, realiste și moderniste, recurente în operele lui Ioan Slavici.
                  </p>
                  <H2 h2text="Teme și motive" indexH2={indexH2("Teme și motive")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Tema nuvelei psihologice „Moara cu noroc” este constituită din prezentarea consecințelor nefaste pe care le are setea de îmbogățire asupra destinului uman, în contrast cu tema familiei și a sorții schimbătoare. Motivele literare ce susțin această temă sunt: drumul, moara, hanul, crucea și focul.
                  </p>
                  <H2 h2text="Specie literară" indexH2={indexH2("Specie literară")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Specia literară a acestei opere realiste este nuvela psihologică, fiind un text epic de scurtă întindere, caracterizat de un conflict puternic, prezentat cu fraze ample, centrat în jurul personajului principal, dezvoltat pe două coordonate: exterior, prin prezentarea firului evenimentelor, și interior, prin detalierea implicațiilor întâmplărilor în planul conștiinței.
                  </p>
                  <H2 h2text="Semnificația titlului" indexH2={indexH2("Semnificația titlului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Titlul este analitic, fiind alcătuit dintr-o structură nominală ce conține un substantiv comun, articulat hotărât, ce reprezintă locul unde se desfășoară majoritatea acțiunii prezentate în nuvela psihologică, și un atribut substantival prepozițional, simbolizat de secvența „de noroc”, reprezentând una dintre calitățile perisabile ale hanului.
                  </p>
                  <H2 h2text="Perspectiva narativă" indexH2={indexH2("Perspectiva narativă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Perspectiva narativă este heterodiegetică, relevă un narator extradiegetic, omniscient, și omniprezent, instanța narativă fiind obiectivă, deoarece relatarea întâmplărilor se face la persoana a III-a. Acesta dirijează din exterior personajele, posedând o cunoaștere superioară, fiind în instanța naratorului omnipotent. Focalizarea este concetrată pe coordonata externă.
                  </p>
                  <p>
                    Romanul este alcătuit din 20 de capitole și se desfășoară într-un spațiu citadin, reprezentat de burghezia bucureșteană.
                  </p>
                  <H2 h2text="Două secvențe relevante" indexH2={indexH2("Două secvențe relevante")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ol className={olClass}>
                    <li>
                        <strong>întâlnirea dintre Ghiță și Lică Sămădăul</strong>
                        <ul className={ulClass}>
                            <li>Lică vrea să-l domine pe Ghiță</li>
                            <li>Ghiță se lasă dominat — dovedește slăbiciunea caracterului în relație cu interlocutorul</li>
                            <li>Lică ignoră cele două femei și formulează o întrebare generală către Ghiță din care dorește să afle informații despre porcarii săi — în esență, Lică vrea să știe dacă noul cârciumar îi va deveni informator</li>
                            <li>Ghiță răspunde evaziv, iar Lică se aprinde și apelează la intimidare și amenințare</li>
                            <li>Iar apoi Lică pleacă din han, însă aceasta a fost scânteia care a aprins conflictul dintre cei doi</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Ghiță se întoarce la han pentru a se răzbuna pe soția infidelă</strong>
                        <ul className={ulClass}>
                            <li>Deși o iubește pe Ana, este decis să-i aplice pedeapsa capitală</li>
                            <li>Dezorientarea și slăbiciunea de care dă dovadă Ghiță sunt evidente atunci când el nu reușește să formuleze un motiv plauzibil pentru faptele sale</li>
                            <li>Abia în aceste momente critice, Ghiță îi motivează plecarea de la han: astfel, comunicarea defectuoasă dintre soți conduce la o tragedie, bărbatul înfigând cuțitul în inima femeii, într-o scenă plină de dramatism</li>
                        </ul>
                    </li>
                  </ol>
                  <H2 h2text="Elemente de limbaj" indexH2={indexH2("Elemente de limbaj")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În ceea ce privește limbajul, Ioan Slavici preferă exprimarea clasică, sobră și concisă. Scrierea conține numeroase pasaje narative, compuse din fraze ample, în vederea redării detaliate a gândirii personajelor care le determină manifestările exterioare.
                  </p>
                  <H2 h2text="Concluzie" indexH2={indexH2("Concluzie")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În concluzie, nuvela psihologică „Moara cu noroc” de Ioan Slavici este o capodoperă a literaturii române, fiind o operă rafinată, caracterizată de o acțiune complexă și de un număr mare de personaje, construită cu fraze ample, remarcabilă prin viziunea originală, bazată pe veridicate, a lui Slavici. Acesta se dovedește a fi un fin observator al psihologiei umane, trăsătură care se remarcă prin reușita de a ilustra efectele ireversibile ale comunicării defectuoase.
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

export default page