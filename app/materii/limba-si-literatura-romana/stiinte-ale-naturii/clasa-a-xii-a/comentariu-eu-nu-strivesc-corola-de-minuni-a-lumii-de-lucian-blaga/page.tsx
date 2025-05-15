"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-romana-mate-info-12";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';

const page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);
  
  const h1 = "Comentariu: Eu nu strivesc corola de minuni a lumii de Lucian Blaga"

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
              profil="științe ale naturii" 
              materie="limba și literatura română" 
              clasa={12} 
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
                    Lucian Blaga a fost un poet, dramaturg și filozof român, care și-a desfășurat activitatea literară în perioada interbelică. Opera sa vastă se remarcă prin crearea unui sistem filozofic transpus liric, prezent în poezii precum „Poemele luminii”, „Pașii profetului”, sau „În marea trecere”.
                  </p>
                  <H2 h2text="Publicare" indexH2={indexH2("Publicare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    „Eu nu strivesc corola de minuni a lumii” este o artă poetică modernă, fiind o operă cu valoare semnificativă în literatura limbii române, care deschide volumul de debut, „Poemele luminii”, publicat în 1927.
                  </p>
                  <H2 h2text="Curent literar" indexH2={indexH2("Curent literar")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Modernismul este curentul literar care se desfășoară începând cu sfârșitul secolului al XIX-lea, care promovează o nouă viziune artistică, ca artă de manifestare a noutății absolute a creației prin care arta devine expresia rafinamentului formal și ideatic. Această mișcare se caracterizează prin utilizarea principiilor lirice ale lui Eugen Lovinescu, care are marele merit de a fi adaptat, în perioada interbelică, trăsăturile modernismului universal la particularitățile culturii românești.
                  </p>
                  <p>
                    Poezia „Eu nu strivesc corola de minuni a lumii” este o artă lirică modernistă. Ambiguitatea limbajului este o trăsătură importantă a modernismului, utilizată de scriitorul român pentru a exprima sentimente puternice. Prin extrapolarea semnificației influențelor expresioniste, se poate observa crearea unui lirism profund, reliefat prin afirmarea deplină a eului poetic și prin întoarcerea către mit și simbol.
                  </p>
                  <p>
                    O altă trăsătură a modernismului, prezentă în poezia „Eu nu strivesc corola de minuni a lumii”, este reprezentată de utilizarea persoanei I. Eul liric participă direct la confesiune și o relevă în mod direct, împletind-o cu motive moderniste, recurente în lirica lui Lucian Blaga.
                  </p>
                  <H2 h2text="Teme și motive" indexH2={indexH2("Teme și motive")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Tema poeziei „Eu nu strivesc corola de minuni a lumii” este constituită din condiția creatorului în raport cu lumina, metaforă revelatorie pentru cunoaștere, și cu misterele universului. Motivele ce susțin această temă sunt: lumina, florile, ochii, buzele, mormintele și luna.
                  </p>
                  <H2 h2text="Specie literară" indexH2={indexH2("Specie literară")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Specia literară a acestei opere moderniste este lirismul subiectiv și derivă dintr-o meditație concepută ca un mediu de contemplare. Prin valorificarea manierei luciferice de a cunoaște, poetul reușește să transmită o exprimare a sineului și o amplificare a misterelor universului.
                  </p>
                  <H2 h2text="Semnificația titlului" indexH2={indexH2("Semnificația titlului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Titlul poeziei este analitic, …, ce reprezintă modul în care, prin utilizarea pronumelui personal „eu” și a verbului la forma negativă „nu strivesc”, vocea poetică amplifică, prin negație, taina perfecțiunii universului, redată prin metafora revelatorie „corola de minuni a lumii” și aflată în conexiune cu noțiunea filozofică de „cunoaștere luciferică”.
                  </p>
                  <H2 h2text="Relații de opoziție" indexH2={indexH2("Relații de opoziție")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Textul conține o unitate strofică și trei secvențe lirice, axate pe opoziția dintre cele două tipuri de cunoaștere, numite metaforic „lumina mea” și „lumina altora”.
                  </p>
                  <H2 h2text="Două secvențe relevante" indexH2={indexH2("Două secvențe relevante")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ol className={olClass}>
                    <li>
                        <strong>incipitul textului</strong>
                        <ul className={ulClass}>
                            <li>În incipitul textului se reia titlul, accentuând ideea principală a poeziei, care se continuă prin prezentarea opțiunii creatorului de a proteja taina</li>
                            <li>Formele verbale negative „nu strivesc”, „nu ucid”, anulează o posibilă atitudine distructivă în raport cu taina</li>
                            <li>Drumul existențial, numit metaforic „calea”, este presărat cu miracole, precum „flori”, „ochi”, „buze”, „morminte”, jucând un rol important în alcătuirea „corolei de minuni a lumii”</li>
                        </ul>
                    </li>
                    <li>
                        <strong>a doua secvență lirică</strong>
                        <ul className={ulClass}>
                            <li>o frază amplă prin care se explică sursa dublei antiteze: eu și alții, respectiv „lumina mea” și „lumina altora”</li>
                            <li>Cunoașterea paradiziacă (lumina altora) exercită o acțiune distructivă asupra misterului</li>
                            <li>Verbele „sporesc” și „îmbogățesc” evidențiază amplificarea superlativă a tainei transformate în „ne-nțelesuri și mai mari”, sub ocrotirea luminii luciferice</li>
                        </ul>
                    </li>
                  </ol>
                  <H2 h2text="Elemente de limbaj" indexH2={indexH2("Elemente de limbaj")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În ceea ce privește limbajul, Lucian Blaga preferă exprimarea complexă și rafinată, caracteristică poeziei moderne. Se remarcă rolul central al metaforei „luminii” ca simbol al cunoașterii. Ideea de mister este exprimată printr-o varietate de cuvinte și sintagme din câmpul semantic al acestuia.
                  </p>
                  <H2 h2text="Prozodie" indexH2={indexH2("Prozodie")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>monobloc</li>
                    <li>20 de versuri libere</li>
                    <li>măsură variabilă</li>
                    <li>ritm interior</li>
                    <li>se utilizează tehnica ingambamentului, conferind o libertate sporită de exprimare a ideilor</li>
                  </ul>
                  <H2 h2text="Concluzie" indexH2={indexH2("Concluzie")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În cele din urmă, poezia „Eu nu strivesc corola de minuni a lumii” de Lucian Blaga este o capodoperă a literaturii române, fiind o operă rafinată, remarcabilă prin viziunea originală, bazată pe filozofie, a lui Blaga. Acesta se dovedește a fi un creator de imagini profunde, trăsătură care se remarcă prin reușita de a structura concepte filozofice în versuri.
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