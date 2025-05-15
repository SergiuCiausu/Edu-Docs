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
  
  const h1 = "Textul dramatic – Schiță de teatru"

  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
    ["Date despre autor", "Publicare", "Curent literar", "Teme și motive", "Specie literară", "Semnificația titlului", "Două secvențe relevante", "Elemente de limbaj", "Concluzie"],
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
                  <h1>{`${titluri.length > 1 ? `Capitolul ${indexLectie}: ` : ""}${h1}`}</h1>
                  <H2 h2text="Ce este textul dramatic?" indexH2={indexH2("Ce este textul dramatic?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Textul dramatic este o specie a genului dramatic, scris <strong>pentru a fi reprezentat pe scenă</strong>. Acesta are o <strong>structură specifică</strong>, bazată pe <strong>dialog și didascalii</strong>, fără descriere sau narațiune, și este centrat pe conflictul dintre personaje.
                  </p>
                  <p>
                    Se adresează <strong>simultan ochiului și auzului</strong> – este gândit pentru a fi <strong>văzut și auzit</strong>, nu doar citit.
                  </p>
                  <H2 h2text="Trăsături specifice genului dramatic" indexH2={indexH2("Trăsături specifice genului dramatic")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li><strong>Prezența dialogului</strong> – personajele comunică între ele prin replici.</li>
                    <li><strong>Conflictul dramatic</strong> – motorul acțiunii, poate fi între personaje, între idei sau între personaje și societate.</li>
                    <li><strong>Didascaliile</strong> – indicații ale autorului despre decor, mimică, gesturi, costume, tonul replicilor etc.</li>
                    <li>
                        <strong>Structura internă:</strong>
                        <ul className={ulClass}>
                            <li>Expozițiunea – introducerea personajelor și a situației inițiale;</li>
                            <li>Intriga – evenimentul care declanșează acțiunea;</li>
                            <li>Desfășurarea acțiunii;</li>
                            <li>Punctul culminant – momentul de maximă tensiune;</li>
                            <li>Deznodământul – rezolvarea conflictului.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Organizarea în acte și scene</strong> – facilitează reprezentarea scenică.
                    </li>
                  </ul>
                  <H2 h2text="Studiu de caz: „O scrisoare pierdută” de Ion Luca Caragiale" indexH2={indexH2("Studiu de caz: „O scrisoare pierdută” de Ion Luca Caragiale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>„O scrisoare pierdută”</strong> este o comedie în patru acte, publicată în 1884 și pusă în scenă pentru prima dată în același an. Este o operă reprezentativă pentru <strong>realismul românesc</strong>, având ca temă <strong>viața politică din România secolului al XIX-lea</strong>.
                  </p>
                  <p>
                    <strong>Context:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Caragiale este unul dintre cei mai importanți dramaturgi români.</li>
                    <li>A fost membru al <strong>curentului realist</strong>, dar a introdus și elemente de <strong>satiră și absurd</strong>.</li>
                  </ul>
                  <H2 h2text="Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale" indexH2={indexH2("Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Date despre autor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].findIndex(h3 => h3 === "Date despre autor") : -1}></H3>
                  <p>
                    Ion Luca Caragiale a fost un scriitor român, care și-a desfășurat activitatea literară în perioada marilor clasici. Acesta a fost un dramaturg consacrat al literaturii române. Opera sa vastă se remarcă prin stilul comic, prezent în opere precum „O noapte furtunoasă”, „D'ale carnavalului”, „O scrisoare pierdută”, sau „Conu' Leonida față cu reacțiunea”.
                  </p>
                  <H3 h3text="Publicare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].findIndex(h3 => h3 === "Publicare") : -1}></H3>
                  <p>
                    Textul dramatic „O scrisoare pierdută” a fost publicat în anul 1885 în revista „Convorbiri literare”. Acesta fusese scris anterior încă din anul 1884, iar prima interpretare scenică a acestuia a fost realizată în noiembrie 1884.
                  </p>
                  <H3 h3text="Curent literar" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].findIndex(h3 => h3 === "Curent literar") : -1}></H3>
                  <p>
                    Această operă aparține curentului literar realism, care s-a desfășurat începând cu secolul al XIX-lea, în Europa, și care promovează o nouă viziune artistică, ca artă de manifestare a originalității, veridicității, observării tiparelor umane reprezentative și reliefării individului ca produs al societății în care trăiește. Această mișcare se caracterizează prin inserarea pasajelor descriptive amănunțite, având un stil impersonal, sobru, precis și concis.
                  </p>
                  <p>
                    „O scrisoare pierdută” este un text dramatic realist, iar veridicitatea este o trăsătură importantă a curentului, utilizată de dramaturgul român pentru a surprinde o societate foarte apropiată de cea în care a trăit acesta prin personajele prezente în text. Prin extrapolarea semnificației veridicității, se poate observa dezvăluirea unei alte laturi a personalității sale profund umane.
                  </p>
                  <p>
                    O altă trăsătură a realismului, prezentă și în această operă, este reprezentată de încadrarea personajelor într-o tipologie comică, utilizată de scriitorul român pentru a exprima o secvență de tipuri umane.
                  </p>
                  <H3 h3text="Teme și motive" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].findIndex(h3 => h3 === "Teme și motive") : -1}></H3>
                  <p>
                    Tema comediei este reprezentată de satirizarea moravurilor sociale, manifestată pe fondul luptelor politice, corelată cu motive literare, precum scrisoare, candidat, sau discurs.
                  </p>
                  <H3 h3text="Specie literară" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].findIndex(h3 => h3 === "Specie literară") : -1}></H3>
                  <p>
                    Specia literară a acestui text dramatic este comedia de moravuri, fiind capodopera scrierilor caragialiene. O sursă a comicului în această operă este contrastul dintre aparență și esență.
                  </p>
                  <H3 h3text="Semnificația titlului" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].findIndex(h3 => h3 === "Semnificația titlului") : -1}></H3>
                  <p>
                    Titlul este analitic, fiind alcătuit dintr-un substantiv comun, articulat nehotărât, „o scrisoare”, ce simbolizează un obiect de șantaj politic, o banală scrisoare amoroasă, care devine un bun de valoare pentru cine o deține. Aceasta este mereu „pierdută”, semn că nimeni nu este demn de statutul pe care și-l dorește.
                  </p>
                  <H3 h3text="Două secvențe relevante" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].findIndex(h3 => h3 === "Două secvențe relevante") : -1}></H3>
                  <p>
                    O secvență relevantă din textul dramatic „O scrisoare pierdută” o conturează descoperirea scrisorii de amor. Zaharia Trahanache află că Ștefan Tipătescu, prefectul orașului, i-a redactat o scrisoare lui Zoe Trahanache, soția lui Zaharia. Într-un limbaj de o familiaritate scandaloasă, îndrăgostitul o invită pe soția prietenului său la el acasă: „vino tu, la cocoșelul tău, care te adoră ca totdeauna și te sărută de o mie de ori”. Comicul de situație din această secvență este foarte sugestiv: soțul încornorat încearcă să-și calmeze amantul impulsiv, prin catalogarea scrisorii drept o „plastografie”, deși se remarca în mod evident scrisul lui Ștefan Tipătescu. Cetățeanul turmentat dezvăluie traseul pe care l-a urmat scrisoarea de la Zoe până la Nae Cațavencu. Prefectul dă ordin de arestare pentru șantajist și percheziționează casa acestuia în vederea căutării documentului.
                  </p>
                  <p>
                    Ședința electorală din sala primăriei reprezintă o altă secvență relevantă din opera „O scrisoare pierdută”. Pe durata ședinței, candidații și-au rostit discursurile, în încercarea de a convinge auditoriul de abilităție lor politice. În esență, acestea subliniază incultura și superficialitatea intelectuală.
                  </p>
                  <H3 h3text="Elemente de limbaj" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].findIndex(h3 => h3 === "Elemente de limbaj") : -1}></H3>
                  <p>
                    Elementele de limbaj din textul dramatic „O scrisoare pierdută” conferă stilul original, comic al autorului, denumit sugestiv „caragialism”. Acesta reprezintă și un mijloc de realizare a comicului. Se remarcă greșelile gramaticale izvorâte din incultura dovedită de personaje. Unele personaje se evidențiază și prin folosirea de stereotipii verbale, spre exemplu Zaharia Trahanache, care obișnuia să spună „ai puțintică răbdare”.
                  </p>
                  <H3 h3text="Concluzie" indexH3={h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Comentariu asupra textului dramatic „O scrisoare pierdută” de Ion Luca Caragiale")].findIndex(h3 => h3 === "Concluzie") : -1}></H3>
                  <p>
                    În concluzie, „O scrisoare pierdută” de Ion Luca Caragiale este o capodoperă a literaturii române, reprezentând o radiografie a inculturii societății acelor vremuri, fiind o comedie complexă și rafinată. Caragiale se dovedește a fi un fin observator al psihologiei umane prin tiparele reprezentative pe care a reușit să le ilustreze prin personajele prezente în text.
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