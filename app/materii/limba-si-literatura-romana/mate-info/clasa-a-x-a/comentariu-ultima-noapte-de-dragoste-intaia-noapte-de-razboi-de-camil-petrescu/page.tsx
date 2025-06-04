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
  
  const h1 = "Comentariu: Ultima noapte de dragoste, întâia noapte de război de Camil Petrescu"

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
                    Camil Petrescu a fost un scriitor român care și-a desfășurat activitatea în perioada interbelică, cu o activitate literară întinsă. Opera sa vastă se remarcă prin întemeierea romanului românesc modern, specie literară prezentă în „Ultima noapte de dragoste, întâia noapte de război” și „Patul lui Procust”.
                  </p>
                  <H2 h2text="Publicare" indexH2={indexH2("Publicare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    „Ultima noapte de dragoste, întâia noapte de război” este un roman subiectiv, de analiză psihologică, fiind o operă literară cu valore semnificativă în literatura limbii române, care a fost publicat în anul 1930, urmând principiile moderniste, formulate de Eugen Lovinescu.
                  </p>
                  <H2 h2text="Curent literar" indexH2={indexH2("Curent literar")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Modernismul este curentul literar care se desfășoară începând cu sfârșitul secolului al XIX-lea și care promovează o nouă viziune artistică, ca artă de manifestare a noutății absolute a creației prin care arta devine expresia rafinamentului formal și ideatic. Această mișcare se caracterizează prin utilizarea principiilor lui Eugen Lovinescu, care a avut marele merit de a fi adaptat, în perioada interbelică, trăsăturile modernismului universal la particularitățile culturale românești.
                  </p>
                  <p>
                    Romanul „Ultima noapte de dragoste, întâia noapte de război” este proză modernistă. Perspectiva narativă subiectivă, cu relatarea la persoana întâi, este o trăsătură importantă a modernismului, utilizată de scriitorul român în această operă pentru a exprima sentimentele puternice trăite de personaje. Prin extrapolarea semnificației anticalofilismului, se poate observa crearea unei povestiri profunde, în care predomină elemente de analiză psihologică, recurente în proza camilpetresciană.
                  </p>
                  <p>
                    O altă trăsătură a modernismului, prezentă în romanul „Ultima noapte de dragoste, întâia noapte de război”, este prezentarea mediului citadin prin reliefarea tipologiei intelectualului lucid cu o conștiință complexă. Personajul Ștefan Ghiorghidiu este înzestrat cu capacitatea de a analiza și de a se autoanaliza.
                  </p>
                  <H2 h2text="Teme și motive" indexH2={indexH2("Teme și motive")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Tema romanului modernist „Ultima noapte de dragoste, întâia noapte de război” este constituită din drama intelectualului lucid, în raport cu două experiențe capitale: iubirea și războiul. Motivele literare ce susțin această temă sunt: noapte, nevastă, monden și armată.
                  </p>
                  <H2 h2text="Specie literară" indexH2={indexH2("Specie literară")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Specia literară a acestei opere moderniste este romanul interbelic, subiectiv, social, ionic, modern, de analiză psihologică, de mare întindere, caracterizat de o acțiune complexă, prezentată cu fraze ample, desfășurată pe planuri narative multiple și având un număr mare de personaje.
                  </p>
                  <H2 h2text="Semnificația titlului" indexH2={indexH2("Semnificația titlului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Titlul romanului este analitic, …, ce reprezintă o dublă antiteză: ultima-întâia, dragoste-război, definind o aventură în planul cunoașterii absolute.
                  </p>
                  <H2 h2text="Perspectiva narativă" indexH2={indexH2("Perspectiva narativă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Perspectiva narativă este homodiegetică, relevă un narator intradiegetic, uniscient, și uniprezent, instanța narativă fiind subiectivă, deoarece relatarea întâmplărilor se face la persoana a I-a. Romanul se constituie ca o confesiune a personajului principal, Ștefan Gheorghidiu, care nu are acces la întregul univers informațional al personajelor, fiind în instanța naratorului unipotent. Focalizarea este concetrată pe coordonata internă.
                  </p>
                  <p>
                    Romanul este alcătuit din 20 de capitole și se desfășoară într-un spațiu citadin, reprezentat de burghezia bucureșteană.
                  </p>
                  <H2 h2text="Două secvențe relevante" indexH2={indexH2("Două secvențe relevante")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ol className={olClass}>
                    <li>
                        <strong>discuția de la popotă</strong>
                        <ul className={ulClass}>
                            <li>dintre camarazii de pe front, declanșată de un fapt divers, apărut în presă</li>
                            <li>evenimentul declanșează perspective contradictorii</li>
                            <li>Căpitanul Dimiu susține fapta bărbatului din știre</li>
                            <li>Corabu este intrigat de decizia capitală a soțului</li>
                            <li>Floroiu consideră că „dreptul la dragoste este sfânt”, aducând în discuție latura spirituală a femeii omorâte</li>
                            <li>Ștefan Gheorghidiu intervine vehement și pătimaș, amintind despre riscurile cu care iubirea vine la pachet</li>
                            <li>Ștefan Gheorghidiu prezintă o viziune particulară asupra iubirii, considerată o cale anevoioasă de cunoaștere</li>
                        </ul>
                    </li>
                    <li>
                        <strong>excursia la Odobești</strong>
                        <ul className={ulClass}>
                            <li>Ștefan Gheorghidiu și soția sa merg în excursia de la Odobești, organizată de verișoara Anișoara</li>
                            <li>Această excursie reprezintă o demascare a geloziei personajului principal</li>
                            <li>Soția acestuia îi oferă o atenție accentuată domnului G., un avocat obscur și dansator, foarte căutat de femei</li>
                            <li>Fiecare gest al femeii îi amplifica lui Ștefan Gheorghidiu suferința și dezamăgirea față de soția lui</li>
                            <li>Se stârnește un conflict interior în mintea protagonistului, care duce, într-un final, la decizia de a pune capăt relației</li>
                        </ul>
                    </li>
                  </ol>
                  <H2 h2text="Elemente de limbaj" indexH2={indexH2("Elemente de limbaj")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În ceea ce privește limbajul, Camil Petrescu preferă anticalofilismul, caracterizat de un stil impersonal, sobru, precis și concis. Scrierea conține numeroase pasaje narative, compuse din fraze ample, și analizarea psihologică a unei conștiințe lucide, caracterizată de complexitate, în vederea redării detaliate a monologului interior, introspectiv, format în mintea lui Ștefan Gheorghidiu.
                  </p>
                  <H2 h2text="Concluzie" indexH2={indexH2("Concluzie")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În cele din urmă, romanul psihologic „Ultima noapte de dragoste, întâia noapte de război” de Camil Petrescu este o capodoperă a literaturii române, fiind o operă rafinată, caracterizată de o acțiune complexă și de un număr mare de personaje, construită cu fraze ample, remarcabilă prin viziunea originală, bazată pe veridicate, a lui Petrescu. Acesta se dovedește a fi un fin observator al psihologiei umane, trăsătură care se remarcă prin reușita de a ilustra efectele ireversibile ale comunicării defectuoase.
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