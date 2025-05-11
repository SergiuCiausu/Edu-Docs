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
  
  const h1 = "Textul epic. Povestirea. Particularitățile povestirii „Popa Tanda” de Ioan Slavici"

  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Trăsături ale povestirii:"],
    ["Structura narativă", "Personaje", "Naratorul", "Tema și mesajul"],
    ["Genul și specia literară", "Structura narativă", "Personajul principal și evoluția sa", "Naratorul și perspectiva narativă", "Teme și motive literare", "Stilul și limbajul", "Mesajul operei"],
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
                  <H2 h2text="Ce este povestirea?" indexH2={indexH2("Ce este povestirea?")} indexLectie={indexLectie}></H2>
                  <p>
                  Povestirea este o specie a genului epic în proză, de dimensiuni reduse sau medii, în care este relatată o întâmplare cu un număr restrâns de personaje, accentul căzând adesea pe caracterul personajelor și pe ideea morală transmisă.
                  </p>
                  <H3 h3text="Trăsături ale povestirii:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ce este povestirea?")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Ce este povestirea?")].findIndex(h3 => h3 === "Trăsături ale povestirii") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Relatarea unei întâmplări într-un cadru realist;</li>
                    <li>Narator omniscient sau martor;</li>
                    <li>Perspectivă narativă obiectivă sau subiectivă;</li>
                    <li>Accent pe caracterul personajelor;</li>
                    <li>Limbaj accesibil, cu rol în transmiterea mesajului.</li>
                  </ul>
                  <H2 h2text="Studiu de caz: Popa Tanda de Ioan Slavici" indexH2={indexH2("Studiu de caz: Popa Tanda de Ioan Slavici")} indexLectie={indexLectie}></H2>
                  <p>
                  Povestea urmărește transformarea lui preotului Trandafir, un om inițial moralist și critic, dar ineficient, care ajunge într-un sat sărăcăcios (Sărăceni) și reușește, prin muncă personală și prin exemplul dat, să schimbe în bine întreaga comunitate.
                  </p>
                  <H3 h3text="Structura narativă:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: Popa Tanda de Ioan Slavici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: Popa Tanda de Ioan Slavici")].findIndex(h3 => h3 === "Structura narativă") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Situația inițială</strong>: Popa Tanda este mustrat pentru predicile lui moralizatoare.</li>
                    <li><strong>Intrigă</strong>: Este mutat disciplinar într-un sat sărac.</li>
                    <li><strong>Desfășurarea acțiunii</strong>: Începe să muncească personal pentru a schimba satul.</li>
                    <li><strong>Punct culminant</strong>: Sătenii încep să îl urmeze și satul prosperă.</li>
                    <li><strong>Deznodământ</strong>: Popa Tanda este iubit și respectat, iar viața în sat se schimbă radical.</li>
                  </ul>
                  <H3 h3text="Personaje:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: Popa Tanda de Ioan Slavici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: Popa Tanda de Ioan Slavici")].findIndex(h3 => h3 === "Personaje") : -1}></H3>
                  <p>
                  <strong>Popa Tanda</strong> – personaj realist, complex:
                  </p>
                  <ul className={ulClass}>
                    <li>Inițial idealist, predicator;</li>
                    <li>Devine pragmatic, transformându-se într-un om de acțiune;</li>
                    <li>Evoluează dintr-un personaj pasiv într-un lider implicat în comunitate;</li>
                    <li>Simbol al puterii exemplului și al muncii personale.</li>
                  </ul>
                  <H3 h3text="Naratorul:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: Popa Tanda de Ioan Slavici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: Popa Tanda de Ioan Slavici")].findIndex(h3 => h3 === "Naratorul") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Omniscient (știe gândurile și trăirile personajelor);</li>
                    <li>Perspectivă obiectivă;</li>
                    <li>Ton blând, uneori ironic, dar cald și uman.</li>
                  </ul>
                  <H3 h3text="Tema și mesajul" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: Popa Tanda de Ioan Slavici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: Popa Tanda de Ioan Slavici")].findIndex(h3 => h3 === "Tema și mesajul") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Tema</strong>: munca și transformarea prin efort personal;</li>
                    <li><strong>Mesaj</strong>: Schimbarea reală începe cu propriul exemplu; cuvintele fără fapte sunt goale.</li>
                  </ul>
                  <p>
                  Povestirea este un text epic realist, cu accent pe ideea morală. „Popa Tanda” transmite ideea că faptele personale pot schimba lumea în mod concret. Personajul principal evoluează într-un mod verosimil, devenind un simbol al hărniciei și al implicării.
                  </p>
                  <H2 h2text="Comentariu literar: Particularitățile povestirii „Popa Tanda” de Ioan Slavici" indexH2={indexH2("Comentariu literar: Particularitățile povestirii „Popa Tanda” de Ioan Slavici")} indexLectie={indexLectie}></H2>
                  <p>
                  Povestirea <strong>„Popa Tanda” de Ioan Slavici</strong> este o creație epică realistă cu valențe moralizatoare, ce reflectă concepțiile despre viață și om promovate de autorul ardelean. Publicată în 1875, în revista <i>Convorbiri literare</i>, povestirea este reprezentativă pentru literatura ardelenească de inspirație rurală, axată pe valorile tradiționale, în special munca, credința și simțul comunității.
                  </p>
                  <H3 h3text="Genul și specia literară" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu literar: Particularitățile povestirii „Popa Tanda” de Ioan Slavici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu literar: Particularitățile povestirii „Popa Tanda” de Ioan Slavici")].findIndex(h3 => h3 === "Genul și specia literară") : -1}></H3>
                  <p>
                  Textul aparține <strong>genului epic</strong>, deoarece autorul relatează o serie de întâmplări prin intermediul unui narator omniscient și obiectiv. În centrul operei se află un personaj principal, Popa Trandafir, ale cărui acțiuni declanșează și susțin firul narativ. Din punctul de vedere al speciei literare, „Popa Tanda” este o <strong>povestire</strong>: o narațiune scurtă, cu o structură simplă, ce urmărește un singur fir narativ și un conflict central.
                  </p>
                  <H3 h3text="Structura narativă" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu literar: Particularitățile povestirii „Popa Tanda” de Ioan Slavici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu literar: Particularitățile povestirii „Popa Tanda” de Ioan Slavici")].findIndex(h3 => h3 === "Structura narativă") : -1}></H3>
                  <p>
                  Structura compozițională este clasică, fiind organizată în funcție de <strong>momentele subiectului</strong>:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Expozițiunea</strong> îl introduce pe protagonist – preotul Trandafir – și îl prezintă în contextul comunității în care slujește, fiind mustrat de tatăl său pentru predicile moralizatoare fără efect.</li>
                    <li><strong>Intriga</strong> apare în momentul în care Popa Trandafir este mutat disciplinar în satul Sărăceni.</li>
                    <li><strong>Desfășurarea acțiunii</strong> cuprinde etapele transformării personale și sociale prin care trece: înțelege că schimbarea vine din exemplul propriu, repară biserica, gospodăria, grădina și se implică activ în viața satului.</li>
                    <li><strong>Punctul culminant</strong> este momentul în care sătenii încep să-l urmeze, iar satul se transformă radical.</li>
                    <li><strong>Deznodământul</strong> prezintă o comunitate prosperă, unită și recunoscătoare, iar Popa Tanda devine un model de urmat.</li>
                  </ul>
                  <H3 h3text="Personajul principal și evoluția sa" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu literar: Particularitățile povestirii „Popa Tanda” de Ioan Slavici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu literar: Particularitățile povestirii „Popa Tanda” de Ioan Slavici")].findIndex(h3 => h3 === "Personajul principal și evoluția sa") : -1}></H3>
                  <p>
                  Popa Trandafir este un <strong>personaj realist</strong>, rotund, înzestrat cu trăsături umane autentice. Inițial, el este un predicator zelos, moralist, dar fără rezultate concrete. După mutarea sa în satul Sărăceni, personajul trece printr-o <strong>transformare interioară</strong> profundă, conștientizând faptul că nu cu vorba, ci cu fapta se pot influența oamenii. Acest proces de <strong>modelare a comunității prin exemplu personal</strong> reprezintă cheia succesului său ca preot și ca om. Astfel, Popa Tanda devine simbolul omului activ, al <strong>credinciosului practic</strong>, care îmbină spiritualitatea cu nevoile reale ale oamenilor.
                  </p>
                  <H3 h3text="Naratorul și perspectiva narativă" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu literar: Particularitățile povestirii „Popa Tanda” de Ioan Slavici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu literar: Particularitățile povestirii „Popa Tanda” de Ioan Slavici")].findIndex(h3 => h3 === "Naratorul și perspectiva narativă") : -1}></H3>
                  <p>
                  Narațiunea este realizată la persoana a III-a de un <strong>narator omniscient și obiectiv</strong>, care cunoaște gândurile și sentimentele personajelor. Deși obiectiv, naratorul nu este lipsit de <strong>subiectivitate afectivă</strong>, surprinsă în tonul cald, adesea ironic, dar și în simpatia discretă pentru personajul principal. <strong>Perspectiva narativă</strong> este una din <strong>exterior</strong>, dar pătrunde adesea în intimitatea gândurilor și a deciziilor lui Trandafir, fapt care favorizează empatia cititorului.
                  </p>
                  <H3 h3text="Teme și motive literare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu literar: Particularitățile povestirii „Popa Tanda” de Ioan Slavici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu literar: Particularitățile povestirii „Popa Tanda” de Ioan Slavici")].findIndex(h3 => h3 === "Teme și motive literare") : -1}></H3>
                  <p>
                  Tema principală este <strong>puterea transformatoare a muncii</strong> și a exemplului personal, dar și <strong>rolul spiritual și social al preotului în comunitatea rurală</strong>. Slavici promovează un <strong>ideal moral și etico-social</strong>, în care omul este definit prin responsabilitate, hărnicie și solidaritate. Alte teme secundare sunt: educația, schimbarea, religia aplicată în viața de zi cu zi și renașterea unei comunități.
                  </p>
                  <p>
                  Motivul <strong>preotului</strong> ca agent de transformare, al <strong>satului decăzut</strong> care renaște prin efort comun, precum și <strong>motivul înțelepciunii populare</strong> sunt esențiale în structura textului.
                  </p>
                  <H3 h3text="Stilul și limbajul" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu literar: Particularitățile povestirii „Popa Tanda” de Ioan Slavici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu literar: Particularitățile povestirii „Popa Tanda” de Ioan Slavici")].findIndex(h3 => h3 === "Stilul și limbajul") : -1}></H3>
                  <p>
                  Ioan Slavici folosește un <strong>stil sobru, limpede</strong>, marcat de o <strong>oralitate blândă</strong>, care amintește de tradiția povestirii populare. Limbajul este accesibil, cu fraze echilibrate, expresii colocviale și proverbe care întăresc mesajul moralizator. Descrierile nu sunt excesive, ci au un caracter <strong>funcțional</strong>, punând în evidență faptele și transformările esențiale.
                  </p>
                  <H3 h3text="Mesajul operei" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu literar: Particularitățile povestirii „Popa Tanda” de Ioan Slavici")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu literar: Particularitățile povestirii „Popa Tanda” de Ioan Slavici")].findIndex(h3 => h3 === "Mesajul operei") : -1}></H3>
                  <p>
                  „Popa Tanda” oferă o lecție de viață simplă și profundă: schimbarea nu vine prin critici sau vorbe goale, ci prin <strong>exemplu personal, muncă susținută și răbdare</strong>. Omul adevărat este cel care își asumă un rol activ în comunitate și contribuie la binele celorlalți.
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