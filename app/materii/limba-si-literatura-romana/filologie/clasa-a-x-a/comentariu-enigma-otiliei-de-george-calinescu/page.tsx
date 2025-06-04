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

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);
  
  const h1 = "Comentariu: Enigma Otiliei de George Călinescu"

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
              profil="filologie" 
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
                    George Călinescu a fost un critic și istoric literar, poet și dramaturg, care și-a desfășurat activitatea literară la granița dintre perioada interbelică și cea postbelică. Opera sa vastă se remarcă, în special, prin crearea realismului clasic, de tip balzacian, prezent în romanele „Cartea Nunții”, „Enigma Otiliei”, „Bietul Ioanide” și „Scrinul negru”.
                  </p>
                  <H2 h2text="Publicare" indexH2={indexH2("Publicare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Enigma Otiliei este un roman realist-obiectiv, fiind o operă literară cu valore semnificativă în literatura limbii române, care a fost publicat în 1938.
                  </p>
                  <H2 h2text="Curent literar" indexH2={indexH2("Curent literar")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Realismul este curentul literar care se desfășoară începând cu secolul al XIX-lea, și care promovează o nouă viziune artistică, ca artă de manifestare a veridicității, originalității, observării tiparelor umane reprezentative și reliefării individului ca produs al societății în care trăiește. Această mișcare se caracterizează prin inserarea pasajelor descriptive amănunțite, având un stil impersonal, sobru, precis și concis.
                  </p>
                  <p>
                    Romanul „Enigma Otiliei” este o operă literară ce aparține realismului. Veridicitatea este trăsătura importantă a realismului, utilizată de prozatorul român pentru a exprima o societatea foarte apropiată de cea contemporană cu acesta prin personajele prezente în text. Prin extrapolarea semnificației veridicității, se poate observa dezvăluirea a unei alte laturi a personalității sale profund umane.
                  </p>
                  <p>
                    O altă trăsătură a realismului, prezentă în romanul lui George Călinescu, este reprezentată de relevarea impresiei realului prin limbajul naratorului. Acesta nu participă la acțiune și o prezintă în mod preponderent obiectiv, împletind problematica socială cu motive literare romantice, realiste și moderniste, recurente în operele lui George Călinescu.
                  </p>
                  <H2 h2text="Teme și motive" indexH2={indexH2("Teme și motive")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Tema romanului este constituită din prezentarea vieții burgheziei bucureștene, împletită cu temele secundare ce includ moștenirea, paternitatea și iubirea. Motivele literare ce susțin aceste teme sunt: familia, căsătoria, orfanul, eternul feminin.
                  </p>
                  <H2 h2text="Specie literară" indexH2={indexH2("Specie literară")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Specia literară a acestei opere realiste este romanul interbelic, realist-obiectiv, citadin, social, doric, cu elemente de modernitate, de mare întindere, caracterizat de o acțiune complexă, prezentată cu fraze ample desfășurată pe planuri narative multiple și având un număr mare de personaje. Această operă constituie un bildungsroman, fiind urmărită evoluția vieții lui Felix.
                  </p>
                  <H2 h2text="Semnificația titlului" indexH2={indexH2("Semnificația titlului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Titlul romanului este analitic, fiind alcătuit dintr-un substantiv comun ce reprezintă o trăsătură importantă de caracter a protagonistei și un substantiv propriu, echivalent cu numele eroinei principale.
                  </p>
                  <H2 h2text="Perspectiva narativă" indexH2={indexH2("Perspectiva narativă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Perspectiva narativă este heterodiegetică, relevă un narator extradiegetic, omniscient, și omniprezent, instanța narativă fiind obiectivă, deoarece relatarea întâmplărilor se face la persoana a III-a. Acesta dirijează din exterior personajele, posedând o cunoaștere superioară, fiind în instanța naratorului omnipotent. Focalizarea este concetrată pe coordonata externă.
                  </p>
                  <p>
                    Romanul este alcătuit din 20 de capitole și se desfășoară într-un spațiu citadin, reprezentat de burghezia bucureșteană.
                  </p>
                  <H2 h2text="Două secvențe relevante" indexH2={indexH2("Două secvențe relevante")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    O secvență relevantă a romanului este reprezentată de cea a întâlnirii dintre Felix și Pascalopol. Felix află că moșierul generos i-a redat libertatea Otiliei, care s-a recăsătorit cu un conte. Deși aflat la bătrânețe, acesta afirmă că nu a reușit să-i descifreze enigma, „a fost o fată delicioasă, dar ciudată. Pentru mine e o enigmă.” Felix observă, într-o poză pe care Pascalopol o păstra permanent, cum fata exuberantă se maturizase și căpătase „un aer de platitudine feminină”. Amintirile tinereții îl determină să retrăiască nostalgic prima vizită de pe strada Antim, în finalul simetric al romanului.
                  </p>
                  <p>
                    O altă secvență reprezentativă este deznodământul romanului, care prezintă împlinirea profesională și familială a lui Felix, despărțirea lui Stănică și a Olimpiei, eșecul lui Titi și al Auricăi, în tentativele lor disperate de a-și întemeia fiecare câte o familie.
                  </p>
                  <H2 h2text="Elemente de limbaj" indexH2={indexH2("Elemente de limbaj")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În ceea ce privește limbajul, George Călinescu preferă exprimarea directă, realist-obiectivă. Scrierea conține numeroase pasaje descriptive, compuse din fraze ample, în vederea redării detalitate a străzii, a casei, a interioarelor și a tipologiilor umane ale burgheziei bucureștene.
                  </p>
                  <H2 h2text="Concluzie" indexH2={indexH2("Concluzie")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În cele din urmă, romanul „Enigma Otiliei” de George Călinescu este o capodoperă a literaturii române, fiind o operă rafinată, caracterizată de o acțiune complexă și de un număr mare de personaje, construită cu fraze ample, remarcabilă prin viziunea originală, bazată pe veridicate, a lui Călinescu. Acesta se dovedește a fi un fin observator al psihologiei umane, trăsătură care se remarcă prin reușita de a ilustra evoluția ființei umane pe parcursul vieții.
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