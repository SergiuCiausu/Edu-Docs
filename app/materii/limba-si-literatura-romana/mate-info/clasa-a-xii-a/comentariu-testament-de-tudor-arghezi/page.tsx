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

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);
  
  const h1 = "Comentariu: Testament de Tudor Arghezi"

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
                    Tudor Arghezi a fost poet român, care și-a desfășurat activitatea literară în perioada interbelică. Opera sa vastă se remarcă, în special, prin revoluționarea limbajului poetic. Arghezi este întemeietorul esteticii urâtului, dezvoltată în volumele de versuri „Cuvinte potrivite”, „Flori de mucigai” și „Cărticica de seară”.
                  </p>
                  <H2 h2text="Publicare" indexH2={indexH2("Publicare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    „Testament” este o artă poetică modernă, fiind o operă cu valoare semnificativă în literatura limbii române, care deschide volumul de debut, „Cuvinte potrivite”, publicat în 1927.
                  </p>
                  <H2 h2text="Curent literar" indexH2={indexH2("Curent literar")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Modernismul este curentul literar care se desfășoară începând cu sfârșitul secolului al XIX-lea și care promovează o nouă viziune artistică, ca artă de manifestare a noutății absolute a creației prin care arta devine expresia rafinamentului formal și ideatic. Această mișcare se caracterizează prin utilizarea liricii lui Eugen Lovinescu, care a avut marele merit de a fi adaptat, în perioada interbelică, trăsăturile modernismului universal la particularitățile culturale românești.
                  </p>
                  <p>
                    Poezia „Testament” este o artă lirică modernistă. Ambiguitatea limbajului este o trăsătură importantă a modernismului, utilizată de poetul român în această poezie pentru a exprima sentimente puternice. Prin extrapolarea semnificației esteticii urâtului, se poate observa crearea unui lirism profund, reliefat prin utilizarea unor termeni nepoetici, precum „bube”, „mucegaiuri”, sau „noroi”.
                  </p>
                  <p>
                    O altă trăsătură a modernismului, prezentă în poezia „Testament”, este reprezentată de utilizarea persoanei I și a II-a. Eul liric participă direct la confesiune și o relevă în mod direct, împletind-o cu motive moderniste, recurente în lirica lui Tudor Arghezi.
                  </p>
                  <H2 h2text="Teme și motive" indexH2={indexH2("Teme și motive")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Tema poeziei „Testament” este constituită din creație, deoarece poetul își exprimă concepția despre menirea literaturii și despre rolul creatorului în societate. Textul este o artă poetică, axată pe dezvoltarea motivului cărții, fiind un laitmotiv al acesteia.
                  </p>
                  <H2 h2text="Specie literară" indexH2={indexH2("Specie literară")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Specia literară a acestei opere simboliste este lirismul subiectiv și derivă dintr-o meditație concepută ca un monolog adresat. Prin valorificarea esteticii urâtului, poetul reușește să transmită un lirism profund.
                  </p>
                  <H2 h2text="Semnificația titlului" indexH2={indexH2("Semnificația titlului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Titlul poeziei este sintetic, fiind alcătuit dintr-un substantiv comun, articulat nehotărât, având dublu sens. Denotativ, el desemnează un act juridic prin care o persoană își exprimă dorințele ce urmează a-i fi împlinite după moarte, în special în legătură cu încredințarea bunurilor materiale. În sens conotativ, reprezintă o metaforă a încredințării averii spirituale urmașilor, prin analogie cu „Testamentele” biblice prin care omenirea preia învățăturile sacre.
                  </p>
                  <H2 h2text="Relații de opoziție" indexH2={indexH2("Relații de opoziție")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Textul conține cinci unități strofice inegale și trei secvențe poetice care prezintă legătura dintre părinte și fiu, în primele două strofe, rolul creației, în următoarele două strofe, și demersul anevoios al creatorului, în ultima strofă.
                  </p>
                  <p>
                    Opoziția dintre instrumentele muncii brute și ale celei intelectuale este completată de antiteza dintre limba populară și cea literară, într-o asociere a contrariilor specific argheziană.
                  </p>
                  <H2 h2text="Două secvențe relevante" indexH2={indexH2("Două secvențe relevante")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    O secvență relevantă este reprezentată de incipitul textului, care constă într-o formulă testamentară din care se deduce excluderea oricărei alte moșteniri, în afara creației. Aceasta din urmă cumulează experiența de veacuri a omenirii, destinul unor generații cu o viață grea, și reprezintă o treaptă indispensabilă a progresului, exprimat, într-o manieră optimistă, prin metafora scării.
                  </p>
                  <p>
                    O altă secvență relevantă este reprezentată de unirea contrariilor care îndeplinește rolul social al creației și stigmatizarea răului. Creația ia naștere din revolta împotriva asupritorilor și devine „vioara” care face auzită vocea poporului, prin intermediul eului-reprezentant al său. „Stăpânul” surprins într-o ipostază grotească, o aluzie la nașterea tragediei antice, este fascinat de cântecul-protest al generațiilor asuprite, ceea ce denotă ignoranța în legătură cu mesajul transmis de artă și îndreptat împotriva sa.
                  </p>
                  <H2 h2text="Elemente de limbaj" indexH2={indexH2("Elemente de limbaj")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În ceea ce privește limbajul, Tudor Arghezi preferă expresivitatea deosebită, caracteristică poeziei moderne. Arghezi a fost apreciat pentru înnoirea limbajului prin alăturarea diverselor straturi ale limbii: utilizarea cuvintelor nepoetice cu valoare estetică, precum „bube”, „mucegaiuri”, sau „noroi” și îmbinarea arhaismelor și a neologismelor cu termeni de factură populară.
                  </p>
                  <H2 h2text="Concluzie" indexH2={indexH2("Concluzie")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În cele din urmă, poezia „Testament” de Tudor Arghezi este o capodoperă a literaturii române, fiind o operă rafinată, remarcabilă prin viziunea originală, bazată pe trăiri profunde, a lui Arghezi Tudor Arghezi se dovedește a fi un revoluționar al poeziei române.
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