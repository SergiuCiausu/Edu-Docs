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
  
  const h1 = "Comentariu: Ion de Liviu Rebreanu"

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
                    Liviu Rebreanu a fost un scriitor român, care și-a desfășurat activitatea literară în perioada interbelică. Opera sa vastă se remarcă, în special, prin întemeierea romanului modern, ilustrat în operele „Pădurea Spânzuraților”, „Ciuleandra” și „Adam și Eva”, fiind considerat cel mai mare creator de viață din literatura română.
                  </p>
                  <H2 h2text="Publicare" indexH2={indexH2("Publicare")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    „Ion” este un roman realist-obiectiv, fiind o operă literară cu valore semnificativă în literatura limbii române. Prima variantă a romanului este publicată în anul 1913, sub denumirea de „Zestrea”, reprezentând un proiect abandonat, dar reluat ulterior. Varianta finală a romanului a fost publicată în anul 1920.
                  </p>
                  <H2 h2text="Curent literar" indexH2={indexH2("Curent literar")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Realismul este curentul literar care se desfășoară începând cu secolul al XIX-lea, și care promovează o nouă viziune artistică, ca artă de manifestare a veridicității, originalității, observării tiparelor umane reprezentative și reliefării individului ca produs al societății în care trăiește. Această mișcare se caracterizează prin inserarea pasajelor descriptive amănunțite, având un stil impersonal, sobru, precis și concis.
                  </p>
                  <p>
                    Romanul „Ion” este o operă literară ce aparține realismului. Veridicitatea este trăsătura importantă a realismului, utilizată de prozatorul român pentru a exprima o societatea foarte apropiată de cea contemporană cu acesta prin personajele prezente în text. Prin extrapolarea semnificației veridicității, se poate observa dezvăluirea a unei alte laturi a personalității sale profund umane.
                  </p>
                  <p>
                    O altă trăsătură a realismului, prezentă în romanul lui Liviu Rebreanu, este reprezentată de relevarea impresiei realului prin limbajul naratorului. Acesta nu participă la acțiune și o prezintă în mod preponderent obiectiv, împletind problematica socială cu motive literare romantice, realiste și moderniste, recurente în operele lui Liviu Rebreanu.
                  </p>
                  <H2 h2text="Teme și motive" indexH2={indexH2("Teme și motive")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Tema romanului este constituită din prezentarea problematicii țăranului român, împletită cu temele secundare ce includ iubirea, moartea și familia. Laitmotivele literare ce susțin aceste teme sunt zestre, pământ, avere și țăran.
                  </p>
                  <H2 h2text="Specie literară" indexH2={indexH2("Specie literară")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Specia literară a acestei opere realiste este romanul interbelic, tradițional, realist-obiectiv, cu elemente de modernitate, social, doric, de mare întindere, caracterizat de o acțiune complexă, prezentată cu fraze ample, desfășurată pe planuri narative multiple și având un număr mare de personaje.
                  </p>
                  <H2 h2text="Semnificația titlului" indexH2={indexH2("Semnificația titlului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Titlul romanului este sintetic, fiind alcătuit dintr-un substantiv propriu, ce reprezintă numele personajului principal, fiind un simbol al unei categorii sociale dezavantajate din cauza lipsurilor materiale, dar înzestrate cu numeroase calități menite să sprijine progresul și recunoașterea colectivă.
                  </p>
                  <H2 h2text="Perspectiva narativă" indexH2={indexH2("Perspectiva narativă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Perspectiva narativă este heterodiegetică, relevă un narator extradiegetic, omniscient, și omniprezent, instanța narativă fiind obiectivă, deoarece relatarea întâmplărilor se face la persoana a III-a. Acesta dirijează din exterior personajele, posedând o cunoaștere superioară, fiind în instanța naratorului omnipotent. Focalizarea este concetrată pe coordonata externă.
                  </p>
                  <H2 h2text="Două secvențe relevante" indexH2={indexH2("Două secvențe relevante")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    O secvență relevantă a romanului este reprezentată de cea a horei duminicale, prilej pentru naratorul obiectiv de a realiza o radiografie a societății rurale, cu observații pertinente asupra conflictelor sociale. Întreaga colectivitate este prezentă în curtea casei Todosiei, iar hora, un aspect etnografic important pentru comunitate, se desfășoară pe ritmul jocului tradițional someșeana. Prezentarea colectivizării de la horă conține observații asupra claselor sociale: tinerii (flăcăi și fete) joacă și astfel se cunosc, în eventualitatea de a întemeia o familie, iar fetele nepoftite la joc, femeile mai în vârstă și copiii stau pe margine. Intelectualii satului sunt martori ai evenimentului, fără a interacționa cu oamenii de rând, țăranii mijlocași privesc de pe prispă, iar primarul și chiaburii discută despre treburile obștei.
                  </p>
                  <p>
                    O altă secvență relevantă a romanului este reprezentată de conturarea conflictului principal al romanului, și anume cel dintre Ion și Vasile Baciu. Ion era un tânăr harnic și priceput la toate, care confundă sărăcia cu lipsa demnității și cu privarea de un statul social pe care este convins că îl merită. Acesta își dorește căsătoria cu Ana, fiica lui Vasile Baciu, un bogătaș din sat, în timp ce inima lui Ion tânja după Florica, cea mai frumoasă și mai săracă fată din sat, însă dorința de parvenire îl determină să prioritizeze statutul social privilegiat. Ion o invită pe Ana la joc, ceea ce conduce la declanșarea conflictului care se construiește pe două coordonate: exterior, cel între Ion și Vasile Baciu, și interior, cel dintre cele două glasuri din mintea protagonistului.
                  </p>
                  <H2 h2text="Elemente de limbaj" indexH2={indexH2("Elemente de limbaj")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În ceea ce privește limbajul, Liviu Rebreanu preferă exprimarea directă, realist-obiectivă. Scrierea conține numeroase pasaje narative, în vederea redării detaliate a vieții țăranului român, inspirat de literatura universală, precum romanele lui Lev Tolstoi despre viața din mediul rural.
                  </p>
                  <H2 h2text="Concluzie" indexH2={indexH2("Concluzie")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    În cele din urmă, romanul „Ion” de Liviu Rebreanu este o capodoperă a literaturii române, fiind o operă rafinată, caracterizată de o acțiune complexă și de un număr mare de personaje, construită cu fraze ample, remarcabilă prin viziunea originală, bazată pe veridicate, a lui Liviu Rebreanu. Acesta se dovedește a fi un fin observator al psihologiei umane, trăsătură care se remarcă prin reușita de a ilustra viața din mediul rural.
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