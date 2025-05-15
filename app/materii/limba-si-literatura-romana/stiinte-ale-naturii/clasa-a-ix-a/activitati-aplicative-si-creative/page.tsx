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
  
  const h1 = "Activități aplicative și creative"

  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
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
                  <H2 h2text="Redactarea de eseuri argumentative" indexH2={indexH2("Redactarea de eseuri argumentative")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Un <strong>eseu argumentativ</strong> este un text în care se prezintă o <strong>opinie</strong> despre un subiect, fiind susținută cu <strong>argumente</strong> clare și exemple relevante din textele literare studiate. Este important ca opinia să fie coerentă și susținută de dovezi din literatură.
                  </p>
                  <p>
                    <strong>Pași pentru redactarea unui eseu argumentativ:</strong>
                  </p>
                  <ol className={olClass}>
                    <li><strong>Introducere</strong> – prezentați tema eseului și punctul de vedere (opinia) pe care îl susțineți.</li>
                    <li><strong>Corpul eseului</strong> – expuneți argumentele care susțin opinia, folosind exemple din textele literare studiate.</li>
                    <li><strong>Concluzie</strong> – rezumați punctele forte ale argumentației și întăriți opinia exprimată.</li>
                  </ol>
                  <p>
                    <strong>Exemple de teme pentru eseuri:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>„Iubirea ideală în poezia lui Mihai Eminescu.”</li>
                    <li>„Ce rol joacă natura în creația eminesciană?”</li>
                    <li>„Lupta dintre bine și rău în «Moromeții» de Marin Preda.”</li>
                    <li>„Evoluția personajelor din «Baltagul» de Mihail Sadoveanu.”</li>
                  </ul>
                  <H2 h2text="Reinterpretări creative ale textelor" indexH2={indexH2("Reinterpretări creative ale textelor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Reinterpretarea unui text presupune <strong>recrearea unui fragment literar</strong> dintr-o perspectivă nouă, fie schimbând <strong>timpul, locul, personajele</strong>, fie oferind o <strong>nouă abordare</strong> a temei originale.
                  </p>
                  <p>
                    <strong>Exemple de activități creative:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Reîntoarcerea unui personaj în lumea modernă</strong>: Cum ar arăta un personaj din „Ion” de Liviu Rebreanu dacă ar trăi în prezent? Cum ar percepe el societatea actuală?</li>
                    <li><strong>Rescrierea unui final</strong>: Cum ar fi arătat un final diferit pentru „Luceafărul„ de Mihai Eminescu? Imaginați-vă că Cătălina îl alege pe Hyperion.</li>
                    <li><strong>Conversia unui text într-un alt gen literar</strong>: Transformați un fragment dintr-o nuvelă într-o dramă scurtă sau un poem.</li>
                  </ul>
                  <p>
                    <strong>Scopul acestei activități:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Dezvoltarea imaginației și a capacității de a gândi creativ;</li>
                    <li>Exersarea interpretării textelor literare din perspective diferite.</li>
                  </ul>
                  <H2 h2text="Lecturi suplimentare și fișe de lectură" indexH2={indexH2("Lecturi suplimentare și fișe de lectură")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Lectura suplimentară este un instrument esențial pentru aprofundarea cunoștințelor literare. În cadrul acestei lecții, elevii vor selecta și analiza lucrări complementare celor deja studiate, <strong>dezvoltându-și abilitățile de interpretare literară</strong>.
                  </p>
                  <p>
                    <strong>Activități pentru lecturi suplimentare:</strong>
                  </p>
                  <ol className={olClass}>
                    <li><strong>Lectură individuală</strong> – Elevii vor citi un fragment dintr-o lucrare literară completă (de exemplu, un roman sau o colecție de poezii).</li>
                    <li>
                        <strong>Fișe de lectură</strong> – După citirea textului, elevii vor completa o fișă de lectură care să conțină:
                        <ul className={ulClass}>
                            <li><strong>Titlul lucrării și autorul</strong></li>
                            <li><strong>Scurt rezumat al acțiunii</strong></li>
                            <li><strong>Personaje principale și rolul lor</strong></li>
                            <li><strong>Tema lucrării</strong></li>
                            <li><strong>Motivul dominant în text</strong></li>
                            <li><strong>Opinia personală asupra lucrării citite.</strong></li>
                        </ul>
                    </li>
                  </ol>
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