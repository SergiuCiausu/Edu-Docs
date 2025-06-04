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
  
  const h1 = "Comentariu: Moromeții de Marin Preda"

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
                    Marin Preda a fost un scriitor român, care și-a desfășurat activitatea literară în perioada postbelică, fiind un reprezentant de seamă al acestei epoci. Opera sa vastă se remarcă prin scrierile de factură socială, trăsătură prezentă în capodoperele „Moromeții” și „Cel mai iubit dintre pământeni”
                  </p>
                  <H2 h2text="Publicare" indexH2={indexH2("Publicare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>2 volume, publicate la 12 ani distanță</li>
                    <li>primul în 1955, cel de-al doilea în 1967</li>
                  </ul>
                  <H2 h2text="Curent literar" indexH2={indexH2("Curent literar")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Realismul este curentul literar care se desfășoară începând cu secolului al XIX-lea, în Europa, și care promovează o nouă viziune artistică, ca artă de manifestare a originalității, veridicității, observarea tiparelor umane reprezentative și reliefarea individului ca produs al societății în care trăiește. Această mișcare se caracterizează prin inserarea pasajelor narative amănunțite, având un stil impersonal, sobru, precis și concis.
                  </p>
                  <p>
                    Romanul „Moromeții” este o operă realistă. Veridicatea este o trăsătură importantă a realismului, utilizată de scriitorul român pentru a exprima o societate foarte apropiată de cea contemporană cu acesta prin personajele prezente în text. Prin extrapolarea semnificației veridicității, se poate observa dezvăluirea unei alte laturi a personalității sale profund umane.
                  </p>
                  <p>
                    O altă trăsătură a realismului este reprezentată de relevarea impresiei realului prin limbajul naratorului. Acesta nu participă direct la acțiune și o prezintă în mod preponderent obiectiv, împletind-o cu elemente de problematică socială și cu motive realiste, recurente în scrierile lui Marin Preda.
                  </p>
                  <H2 h2text="Teme și motive" indexH2={indexH2("Teme și motive")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>Tema: prezentarea satului românesc din Câmpia Dunării</li>
                    <li>tema socială este asociată cu cea a timpului neiertător și cu cea a familiei</li>
                    <li>motive: țăran, sat, pământ, salcâm</li>
                    <li>Ilie Moromete este eroul central al romanului, fiind reprezentantul tipic al țărănimii patriarhale, o categorie socială aflată în declin</li>
                  </ul>
                  <H2 h2text="Specie literară" indexH2={indexH2("Specie literară")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Specia literară a acestei opere realiste este romanul realist, de factură psihologică, social, de dimensiuni mari, cu numeroase personaje simbolice, în care se prezintă existența oamenilor dintr-un sat de câmpie, raportată la cazul particular al destrămării familiei lui Ilie Moromete.
                  </p>
                  <H2 h2text="Semnificația titlului" indexH2={indexH2("Semnificația titlului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>sintetic, numele unei familii</li>
                    <li>se axează pe membrii acesteia, ca exponenți ai mediului rural, surprinși în pragul unor prefaceri sociale, de dinaintea celui de-Al Doilea Război Mondial</li>
                  </ul>
                  <H2 h2text="Perspectiva narativă" indexH2={indexH2("Perspectiva narativă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Narator omniscient, omniprezent, omnipotent, extradiegetic, heterodiegetic, focalizare externă, relatare la persoana a III-a, narator obiectiv, posedă cunoaștere superioară
                  </p>
                  <H2 h2text="Două secvențe relevante" indexH2={indexH2("Două secvențe relevante")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ol className={olClass}>
                    <li>
                        <strong>cina în familia Moromete</strong>
                        <ul className={ulClass}>
                            <li>Catrina era cu copiii ei lângă vatră: Tita, Ilinca, Niculae, iar fiii lui Ilie Moromete din prima căsătorie, Paraschiv, Nilă și Achim stăteau pe partea dinafară a tindei, ceea ce simbolizează intenția de a părăsi cu prima ocazie cina, semn care anticipează destrămarea familiei. </li>
                            <li>Legea nescrisă a superiorității și autorității paterne este sugerată de locul privilegiat pe care îl ocupă la masă liderul familiei, Ilie Moromete.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>incipitul volumului al doilea</strong>
                        <ul className={ulClass}>
                            <li>Incipitul volumului al doilea este reprezentat de o întrebare retorică: „În bine sau în rău se schimbase Moromete?”. Binele și răul marchează contradicția dintre autoritatea diminuată în sat a personajului și o stare de împlinire aparentă a sa.</li>
                            <li>Moromete parcă întinerise, făcând comerț cu porumb, iar fiii lui o duceau la fel de bine: Paraschiv se angajase ca sudor, Nilă era portar, iar Achim era comerciant, având propria sa afacere.</li>
                            <li>În esență, drama destrămării familiale rămăsese vie în conștiința lui Ilie Moromete care aștepta scrisori cu vești de la băieți și-și dorea totodată să refacă echilibrul pierdut.</li>
                        </ul>
                    </li>
                  </ol>
                  <H2 h2text="Elemente de limbaj" indexH2={indexH2("Elemente de limbaj")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În ceea ce privește limbajul, Marin Preda preferă limpezimea, precizia și concizia, îmbinate cu elemente de anticalofilism, iar măiestria acestuia devine evidentă prin modul în care combină, într-o manieră captivantă, gândurile și limbajul personajelor, în relație cu țesătura epică.
                  </p>
                  <H2 h2text="Concluzie" indexH2={indexH2("Concluzie")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În concluzie, romanul „Moromeții” este o capodoperă a literaturii române, reprezentând o radiografie a vieții țăranului român. Marin Preda se dovedește a fi un fin observator al psihologiei umane, trăsătură care se remarcă prin reușita de a ilustra efectele ireversibile ale comunicării defectuoase.
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