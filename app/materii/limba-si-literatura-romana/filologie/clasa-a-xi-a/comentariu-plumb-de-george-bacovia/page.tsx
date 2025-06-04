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
  
  const h1 = "Comentariu: Plumb de George Bacovia"

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
                    Considerat cel mai însemnat poet simbolist al literaturii române, George Bacovia și-a desfășurat activitatea literară în perioada interbelică. Opera sa vastă se remarcă, în special, prin originalitatea liricii unei tristețiu iremediabile, prezentă în volumele sale de versuri, precum „Plumb”, „Scântei galbene”, sau „Comedii în fond”.
                  </p>
                  <H2 h2text="Publicare" indexH2={indexH2("Publicare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    „Plumb” este un poem simbolist, fiind o operă literară cu valore semnificativă în literatura limbii române, care a fost publicată în anul 1916, în fruntea volumului de debut.
                  </p>
                  <H2 h2text="Curent literar" indexH2={indexH2("Curent literar")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Simbolismul este curentul literar care se manifestă începând cu a doua jumătate a secolului al XIX-lea (19), în Franța, și care promovează o nouă viziune asupra poeziei, ca artă de a simți, bazată pe utilizarea simbolului plurivoc. Această mișcare se caracterizează prin crearea stării de spleen, asocierea stărilor sufletești sugerate, precum dezgustul, disperarea, apăsarea sufletească, oboseala psihică, spaima, sau dezolarea, prin prezența vocii poetice în ipostaza însinguratului, prin utilizarea cromaticii sugestive, prin muzicalitatea interioară și exterioară a versurilor, prin utilizarea repetiției cu rol de refren și prin prezența temelor și motivelor specifice, precum iubirea, natura, singurătatea, sau melancolia.
                  </p>
                  <p>
                    „Plumb” este un poem simbolist. Folosirea simbolului „plumb” este o trăsătură importantă a simbolismului, utilizată de poetul român pentru a sugera apăsarea emoțională, monotonia, angoasa, sau chiar moartea. Plumbul devine principala sursă generatoare a stării de spleen. Prin extrapolarea semnificației acestui material, se poate observa cum muzicalitatea versurilor și atmosfera generală sunt contaminate de tristețe și suferință.
                  </p>
                  <p>
                    O altă trăsătură a simbolismului care se regăsește în poezia Plumb este reprezentată de utilizarea sinesteziei. Întreg universul este perceput printr-o îmbinare de senzații tactile, vizuale și auditive, precum vântul, frigul, florile, sau scârțâielile.
                  </p>
                  <H2 h2text="Teme și motive" indexH2={indexH2("Teme și motive")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Tema poeziei „Plumb” este constituită din condiția creatorului într-o lume care-l desconsideră, în raport cu iubirea și moartea. Motivele literare ce susțin această temă sunt: plumb, floare, coroană, sicriu, amor.
                  </p>
                  <H2 h2text="Specie literară" indexH2={indexH2("Specie literară")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Specia literară a acestei opere simboliste este lirismul subiectiv, care derivă dintr-o exprimare monologată. Prin valorificare confesiunii elegiace a vocii poetice, poetul reușește să transmită o exprimare a sinelui și o presimțire a finalului vieții.
                  </p>
                  <H2 h2text="Semnificația titlului" indexH2={indexH2("Semnificația titlului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Titlul discursului liric „Plumb”, este unul sintetic, fiind alcătuit dintr-un substantic comun, articulat nehotărât, ce reprezintă laitmotivul textului. Acesta este repetat de 6 ori în poziții simetrice, având dublu sens: cel denotativ simbolizează un element chimic, metal maleabil, greu, de culoare cenușie-albăstruie, iar cel conotativ desemnează un simbol pentru apăsare, claustrare, monotonie și angoasă.
                  </p>
                  <H2 h2text="Relații de opoziție" indexH2={indexH2("Relații de opoziție")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Poezia este alcătuită din două catrene și două secvențe lirice, având în componența sa două planuri simetrice: universul exterior și cel interior, aflate în relație de opoziție. Simbolul plumb, reluat simetric, reprezintă liantul dintre cele două planuri.
                  </p>
                  <H2 h2text="Două secvențe relevante" indexH2={indexH2("Două secvențe relevante")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ol className={olClass}>
                    <li>
                        <strong>metafora-simbol „cavou”</strong>
                        <ul className={ulClass}>
                            <li>sintetizează determinările unui univers închis al societății mediocre</li>
                            <li>semnifică captivitatea într-un trup perisabil</li>
                            <li>utilizarea imperfectului, prin verbul „dormeau” din incipitul poeziei, sugerează o permanență a somnului care anticipează moartea</li>
                        </ul>
                    </li>
                    <li>
                        <strong>a doua secvență lirică</strong>
                        <ul className={ulClass}>
                            <li>prezintă tragismul existențial generat de anihilarea sentimentelor</li>
                            <li>lirismul interiorizat se axează pe prezentarea corespondentului sicrielor din prima secvență. De această dată, amorul este cufundat în somn într-o poziție nefirească, ceea ce sugerează sfârșitul existenței.</li>
                            <li>dramatismul este accentuat de strigătul disperat al vocii poetice care își are originea într-un obicei popular și exprimă iluzia revenirii la viață</li>
                        </ul>
                    </li>
                  </ol>
                  <H2 h2text="Elemente de limbaj" indexH2={indexH2("Elemente de limbaj")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În ceea ce privește limbajul, George Bacovia preferă utilizarea repetată a simbolurilor care oferă o sugestie pentru claustrare, apăsare și conturare a unei atmosfere sumbre, precum „plumbul”, alcătuit, din punct de vedere fonetic, din patru consoane și o singură vocală. Poezia conține numeroase alte simboluri de încremenire și stagnare, caracterizată de monotonie, în vederea redării detaliate a trăirilor mohorâte ale eului liric.
                  </p>
                  <H2 h2text="Concluzie" indexH2={indexH2("Concluzie")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În cele din urmă, poezia „Plumb” de George Bacovia este o capodoperă a literaturii române, fiind o operă rafinată, remarcabilă prin viziunea originală, bazată pe crearea stării de spleen, a lui Bacovia. Acesta se dovedește a fi un fin observator al psihologiei umane, trăsătură care se remarcă prin reușita de a ilustra concepția artistului desconsiderat despre viață, într-o manieră inedită și apăsătoare, având meritul de a fi creat un univers trist, deznădăjduit și sintetizat. Poemul își găsește pe deplin forma de manifestare artistică în ideologia curentului simbolist.
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