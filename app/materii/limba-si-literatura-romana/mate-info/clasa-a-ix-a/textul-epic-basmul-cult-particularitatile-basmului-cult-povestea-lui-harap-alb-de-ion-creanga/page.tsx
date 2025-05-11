"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-romana-mate-info-9";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';

const page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);
  
  const h1 = "Textul epic. Basmul cult. Particularitățile basmului cult „Povestea lui Harap-Alb” de Ion Creangă"

  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Trăsături specifice ale basmului cult"],
    ["Structura compozițională", "Personaje", "Simboluri"],
    ["Date despre autor", "Publicare", "Curent literar", "Teme și motive", "Specie literară", "Semnificația titlului", "Perspectiva narativă", "Două secvențe relevante", "Elemente de limbaj", "Concluzie"],
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
              clasa={9} 
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
                  <h1>{`Capitolul ${indexLectie}: ${h1}`}</h1>
                  <H2 h2text="Ce este basmul?" indexH2={indexH2("Ce este basmul?")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Trăsături specifice ale basmului cult:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ce este basmul?")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ce este basmul?")].findIndex(h3 => h3 === "Trăsături specifice ale basmului cult") : -1}></H3>
                  <ol className={olClass}>
                    <li><strong>Prezența fantasticului</strong> – fapte, personaje, obiecte magice;</li>
                    <li><strong>Structură narativă fixă</strong> – situație inițială, încercări, conflict, deznodământ;</li>
                    <li><strong>Lupta dintre bine și rău</strong> – eroul trece prin probe dificile;</li>
                    <li><strong>Personaje tipice</strong> – erou, ajutoare, dușmani, împărați, zmei etc.;</li>
                    <li><strong>Final fericit</strong> – binele triumfă, echilibrul se restabilește.</li>
                  </ol>
                  <H2 h2text="Studiu de caz: Povestea lui Harap-Alb de Ion Creangă" indexH2={indexH2("Studiu de caz: Povestea lui Harap-Alb de Ion Creangă")} indexLectie={indexLectie}></H2>
                  <p>
                  Fiul mezin al craiului pornește într-o călătorie inițiatică pentru a deveni împărat. Pe drum, trece prin numeroase probe, este trădat de Spân, primește ajutor de la personaje fantastice (Gerilă, Setilă, etc.), învinge obstacolele și își recapătă identitatea și dreptul de împărat.
                  </p>
                  <H3 h3text="Structura compozițională:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: Povestea lui Harap-Alb de Ion Creangă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: Povestea lui Harap-Alb de Ion Creangă")].findIndex(h3 => h3 === "Structura compozițională") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Expozițiune</strong>: Craiul vrea să trimită pe cineva la fratele său, Împăratul Verde.</li>
                    <li><strong>Intrigă</strong>: Fiul mezin pleacă în căutarea destinului, este păcălit de Spân.</li>
                    <li><strong>Desfășurarea acțiunii</strong>: Probele și obstacolele (omorârea cerbului, recuperarea sării etc.).</li>
                    <li><strong>Punct culminant</strong>: Harap-Alb este omorât de Spân.</li>
                    <li><strong>Deznodământ</strong>: Este readus la viață de Sfânta Duminică, se face dreptate.</li>
                  </ul>
                  <H3 h3text="Personaje:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: Povestea lui Harap-Alb de Ion Creangă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: Povestea lui Harap-Alb de Ion Creangă")].findIndex(h3 => h3 === "Personaje") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Harap-Alb</strong> – eroul pozitiv, simbol al devenirii;</li>
                    <li><strong>Spânul</strong> – întruchiparea răului, minciunii și trădării;</li>
                    <li><strong>Gerilă, Setilă, Flămânzilă, Păsări-Lăți-Lungilă</strong> – ajutoare fantastice cu abilități simbolice;</li>
                    <li><strong>Craii și împărații</strong> – figuri ale autorității și înțelepciunii.</li>
                  </ul>
                  <H3 h3text="Simboluri:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: Povestea lui Harap-Alb de Ion Creangă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: Povestea lui Harap-Alb de Ion Creangă")].findIndex(h3 => h3 === "Simboluri") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Călătoria</strong> – maturizare, inițiere;</li>
                    <li><strong>Numele Harap-Alb</strong> – pierderea și redobândirea identității;</li>
                    <li><strong>Probele</strong> – dezvoltarea virtuților (curaj, răbdare, generozitate).</li>
                  </ul>
                  <p>
                  Basmul cult este o specie epică în proză cu elemente fantastice și structură fixă. „Povestea lui Harap-Alb” este o operă clasică a basmului cult românesc, care îmbină tradiția populară cu stilul unic al lui Creangă. Textul poate fi interpretat ca o alegorie a maturizării, în care eroul dobândește înțelepciune prin încercări.
                  </p>
                  <H2 h2text="Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă" indexH2={indexH2("Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Date despre autor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].findIndex(h3 => h3 === "Date despre autor") : -1}></H3>
                  <p>
                  <strong>Ion Creangă</strong> a fost un prozator român, care și-a desfășurat activitatea în <strong>perioada marilor clasici</strong>. Opera sa vastă se remarcă prin arta narativă, prezentă în basmele sale culte, precum <strong>„Dănilă Prepeleac”, „Soacra cu trei nurori”, „Capra cu trei iezi”</strong>, dar și în capodopera memorialistică <strong>„Amintiri din Copilărie”</strong>.
                  </p>
                  <H3 h3text="Publicare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].findIndex(h3 => h3 === "Publicare") : -1}></H3>
                  <p>
                  Basmul „Povestea lui Harap-Alb” este o operă literară cu valore semnificativă în literatura limbii române, <strong>publicată în anul 1877</strong> în revista <i>„Convorbiri literare”</i>.
                  </p>
                  <H3 h3text="Curent literar" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].findIndex(h3 => h3 === "Curent literar") : -1}></H3>
                  <p>
                  <strong>Realismul</strong> este curentul literar care s-a desfășurat începând cu secolul al XIX-lea, în Europa, și care promovează o nouă viziune artistică, <strong>ca artă de manifestare a originalității, veridicității, observării tiparelor umane reprezentative și reliefării individului ca produs al societății în care trăiește</strong>. Această mișcare se caracterizează prin inserarea pasajelor narative amănunțite, având un <strong>stil impersonal, sobru, precis și concis</strong>.
                  </p>
                  <p>
                  Basmul „Povestea lui Harap-Alb” de Ion Creangă este o operă realistă, iar o trăsătură importantă a curentului este <strong>veridicitatea</strong>, prezentă în acest discurs narativ, utilizată de scriitorul român pentru a exprima o societate foarte apropiată de cea contemporană cu acesta prin personajele prezente în basm. Prin extrapolarea semnificației veridicității, se poate observa <strong>dezvăluirea unei alte laturi a personalității sale profund umane</strong>.
                  </p>
                  <p>
                  O altă trăsătură a realismului care se găsește în basmul „Povestea lui Harap-Alb” este reprezentată de <strong>relevarea impresiei realului prin limbajul naratorului</strong>. Acesta nu participă la acțiune și o prezintă în mod preponderent obiectiv, împletind problematica socială cu motive literare realiste, recurente în proza lui Creangă.
                  </p>
                  <H3 h3text="Teme și motive" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].findIndex(h3 => h3 === "Teme și motive") : -1}></H3>
                  <p>
                  Tema basmului „Povestea lui Harap-Alb” este constituită din <strong>confruntarea dintre bine și rău</strong>, corelată cu motive literare, precum împăratul fără urmaș, superioritatea mezinului, călătoria și probele.
                  </p>
                  <H3 h3text="Specie literară" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].findIndex(h3 => h3 === "Specie literară") : -1}></H3>
                  <p>
                  Specia literară a acestei opere realiste este <strong>basmul cult</strong>, o scriere epică în proză, de dimensiuni reduse, cu numeroase personaje simbolice, în care se prezintă confruntarea dintre bine și rău, <strong>soluționată, de regulă, printr-un final fericit</strong>.
                  </p>
                  <H3 h3text="Semnificația titlului" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].findIndex(h3 => h3 === "Semnificația titlului") : -1}></H3>
                  <p>
                  Titlul basmului, „Povestea lui Harap-Alb”, este unul <strong>analitic și oximoronic</strong>, enunțând atât specia literară, prin substantivul comun, articulat hotărât, „povestea”, cât și numele protagonistului în cea de-a doua ipostază a formării sale, având semnificația de „slugă nobilă”.
                  </p>
                  <H3 h3text="Perspectiva narativă" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].findIndex(h3 => h3 === "Perspectiva narativă") : -1}></H3>
                  <p>
                  Perspectiva narativă este <strong>omniscientă și extradiegetică</strong>, instanța narativă fiind <strong>heterodiegetică</strong>, focalizarea fiind concentrată pe <strong>coordonata externă</strong>, naratorul fiind <strong>obiectiv</strong>, relatarea întâmplărilor realizându-se la <strong>persoana a III-a</strong>. Acesta posedă o <strong>cunoaștere superioară</strong>, fiind <strong>omniprezent și omnipotent</strong>.
                  </p>
                  <H3 h3text="Două secvențe relevante" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].findIndex(h3 => h3 === "Două secvențe relevante") : -1}></H3>
                  <p>
                  O secvență relevantă din „Povestea lui Harap-Alb” de Ion Creangă este reprezentată de <strong>proba milosteniei</strong>, prima încercare cu care tânărul fecior de crai se confruntă și pe care o trece cu bine datorită disponibilităților sufletești superioare dovedite în raport cu personajul supranatural cu rol de mentor, Sfânta Duminică. Această întâlnire inițială cu „baba gârbovită de bătrânețe” are valoare simbolică, deoarece aceasta știe mai multe decât spune, are capacitatea de a-i prevedea viitorul fiului de crai și îl asigură pe acesta că are o soartă privilegiată.
                  </p>
                  <p>
                  O altă secvență reprezentativă din acest basm o constituie <strong>punctul culminant al operei</strong>, care prezintă atât demascarea și pedepsirea Spânului, cât și moartea simbolică și renașterea eroului sub o nouă identitate. Moartea răufăcătorului este un simbol al încheierii inițierii. Fata împăratului Roș, îndrăgostită de tânărul nobil, face lumină cu privire la aflarea adevărului. Moartea simbolică a protagonistului, înfăptuită de calul cu care a călătorit, reprezintă revenirea la viață, cu ajutorul fetei, a tânărului format, capabil de a conduce o împărăție și de a întemeia o familie.
                  </p>
                  <H3 h3text="Elemente de limbaj" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].findIndex(h3 => h3 === "Elemente de limbaj") : -1}></H3>
                  <p>
                  În ceea ce privește limbajul, Ion Creangă preferă <strong>exprimarea populară bazată pe originalitate</strong>. Scrierea conține numeroase pasaje narative, construite cu fraze ample, bogată în regionalisme, expresii populare, ziceri și proverbe. Umorul conferă unicitatea stilului și se regăsește sub diferite forme de manifestare, printre care se numără <strong>ironia</strong> și <strong>tratarea comică a situațiilor tragice</strong>.
                  </p>
                  <H3 h3text="Concluzie" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu literar – Particularitățile basmului „Povestea lui Harap-Alb” de Ion Creangă")].findIndex(h3 => h3 === "Concluzie") : -1}></H3>
                  <p>
                  În concluzie, basmul cult „Povestea lui Harap-Alb” de Ion Creangă este o capodoperă a literaturii române, fiind caracterizat de triumful binelui în fața răului. Ion Creangă se dovedește a fi <strong>un ctitor al unor lumi fantastice</strong>, prin care reusește să facă referire la anumite aspecte atemporale ale realității.
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