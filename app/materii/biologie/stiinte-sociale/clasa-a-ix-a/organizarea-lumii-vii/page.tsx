"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-stiinte-ale-naturii-9";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Organizarea lumii vii") + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === "Organizarea lumii vii")].h3.map(header => header.text)

  const h3s = [
    ["Funcțiile vitale ale organismelor", "Structura celulară: celula ca unitate de viață"],
    ["Organisme unicelulare și pluricelulare", "Organite celulare și funcțiile lor"],
    ["Regnuri ale vieții (plante, animale, fungi, monere, protiste)"]
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
              profil="științe sociale" 
              materie="biologie" 
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
                  <h1>{`Capitolul ${indexLectie}: Organizarea lumii vii`}</h1>
                  <p>
                  Organizarea lumii vii este rezultatul unei evoluții complexe a materiei, în cadrul căreia s-au format structuri biologice din ce în ce mai organizate, de la molecule simple la organisme multicelulare sofisticate. Biologia studiază toate formele de viață, iar înțelegerea caracteristicilor comune ale organismelor vii este esențială pentru a înțelege diversitatea vieții.
                  </p>
                  <H2 h2text="Caracteristicile organismelor vii" indexH2={indexH2("Caracteristicile organismelor vii")} indexLectie={indexLectie}></H2>
                  <p>
                  Toate organismele vii, indiferent de mărime sau complexitate, au anumite caracteristici esențiale comune:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Organizarea celulară</strong> – toate organismele sunt formate din celule (una sau mai multe).</li>
                        <li><strong>Metabolismul</strong> – totalitatea proceselor chimice prin care organismele obțin și utilizează energie.</li>
                        <li><strong>Reproducerea</strong> – capacitatea de a produce alți indivizi asemănători.</li>
                        <li><strong>Creșterea și dezvoltarea</strong> – mărirea în dimensiuni și modificarea structurii.</li>
                        <li><strong>Răspunsul la stimuli</strong> – reacții la schimbările din mediul înconjurător.</li>
                        <li><strong>Homeostazia</strong> – menținerea unui mediu intern stabil.</li>
                        <li><strong>Evoluția</strong> – modificări ereditare care apar în timp și permit adaptarea la mediu.</li>
                  </ul>
                  <H3 h3text="Funcțiile vitale ale organismelor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Caracteristicile organismelor vii")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Caracteristicile organismelor vii")].findIndex(h3 => h3 === "Funcțiile vitale ale organismelor") : -1}></H3>
                  <p>
                  Funcțiile vitale sunt activitățile esențiale pentru supraviețuirea organismelor:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Nutriția</strong> – obținerea și utilizarea substanțelor nutritive (autotrofă sau heterotrofă).</li>
                        <li><strong>Respirația</strong> – eliberarea energiei din nutrienți.</li>
                        <li><strong>Excreția</strong> – eliminarea produselor reziduale rezultate din metabolism.</li>
                        <li><strong>Reproducerea</strong> – perpetuarea speciei.</li>
                        <li><strong>Răspunsul la stimuli</strong> – capacitatea organismului de a reacționa.</li>
                        <li><strong>Locomoția</strong> – deplasarea în mediul înconjurător (activă sau pasivă).</li>
                  </ul>
                  <H3 h3text="Structura celulară: celula ca unitate de viață" indexH3={h3s[h2s.findIndex(h2 => h2 === "Caracteristicile organismelor vii")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Caracteristicile organismelor vii")].findIndex(h3 => h3 === "Structura celulară: celula ca unitate de viață") : -1}></H3>
                  <p>
                  <strong>Celula</strong> este unitatea structurală și funcțională de bază a tuturor organismelor vii. Există două tipuri principale:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Celula procariotă</strong> – nu are nucleu delimitat (ex: bacterii).</li>
                        <li><strong>Celula eucariotă</strong> – are nucleu delimitat de o membrană (ex: plante, animale, fungi, protiste).</li>
                  </ul>
                  <p>
                  Toate celulele au următoarele componente comune:
                  </p>
                  <ul
                    className={ulClass}>
                    <li><strong>Membrană celulară</strong> – controlează schimburile dintre celulă și mediu.</li>
                    <li><strong>Citoplasmă</strong> – mediu intern fluid în care se află organitele.</li>
                    <li><strong>Material genetic (ADN)</strong> – poartă informația ereditară.</li>
                  </ul>
                  <H2 h2text="Niveluri de organizare ale materiei vii" indexH2={indexH2("Niveluri de organizare ale materiei vii")} indexLectie={indexLectie}></H2>
                  <p>
                  Organismele vii sunt organizate ierarhic în următoarele niveluri:
                  </p>
                  <ol
                    className={olClass}>
                        <li><strong>Nivel molecular</strong> – molecule organice și anorganice.</li>
                        <li><strong>Nivel celular</strong> – celula și organitele celulare.</li>
                        <li><strong>Nivel tisular</strong> – grupuri de celule specializate (țesuturi).</li>
                        <li><strong>Nivel de organ</strong> – structuri cu funcții specifice formate din țesuturi.</li>
                        <li><strong>Nivel de sistem de organe</strong> – ansambluri de organe care cooperează.</li>
                        <li><strong>Nivel de organism</strong> – un individ viu complet.</li>
                        <li><strong>Nivel populațional</strong> – indivizi ai aceleiași specii care trăiesc în aceeași zonă.</li>
                        <li><strong>Nivel ecosistemic și biosferic</strong> – relația cu mediul și între ecosisteme.</li>
                  </ol>
                  <H3 h3text="Organisme unicelulare și pluricelulare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Niveluri de organizare ale materiei vii")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Niveluri de organizare ale materiei vii")].findIndex(h3 => h3 === "Organisme unicelulare și pluricelulare") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Organismele unicelulare</strong> – formate dintr-o singură celulă (ex: bacterii, unele protiste).</li>
                        <li><strong>Organismele multicelulare</strong> – formate din mai multe celule diferențiate (ex: plante, animale, fungi).</li>
                  </ul>
                  <p>
                  Multicelularitatea permite specializarea celulelor și formarea de țesuturi, organe și sisteme.
                  </p>
                  <H3 h3text="Organite celulare și funcțiile lor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Niveluri de organizare ale materiei vii")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Niveluri de organizare ale materiei vii")].findIndex(h3 => h3 === "Organite celulare și funcțiile lor") : -1}></H3>
                  <p>
                  Organitele celulare sunt structuri specializate în interiorul celulei eucariote:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Nucleul</strong> – conține ADN și coordonează activitatea celulară.</li>
                        <li><strong>Mitocondriile</strong> – produc energia prin respirație celulară.</li>
                        <li><strong>Ribozomii</strong> – sintetizează proteine.</li>
                        <li><strong>Reticulul endoplasmatic</strong> – transportă substanțe în celulă.</li>
                        <li><strong>Aparatul Golgi </strong>– ambalează și exportă proteinele.</li>
                        <li><strong>Lizozomii</strong> – conțin enzime pentru digestia intracelulară.</li>
                        <li><strong>Cloroplastele</strong> (la plante) – realizează fotosinteza.</li>
                  </ul>
                  <H2 h2text="Clasificarea organismelor vii" indexH2={indexH2("Clasificarea organismelor vii")} indexLectie={indexLectie}></H2>
                  <p>
                  Pentru a înțelege diversitatea vieții, oamenii de știință clasifică organismele pe baza unor caracteristici comune, într-un sistem ierarhic:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Domenii</strong> (Bacteria, Archaea, Eukarya)</li>
                        <li><strong>Regnuri</strong></li>
                        <li><strong>Filum / Încrengătură</strong></li>
                        <li><strong>Clasă</strong></li>
                        <li><strong>Ordin</strong></li>
                        <li><strong>Familie</strong></li>
                        <li><strong>Gen</strong></li>
                        <li><strong>Specie</strong> – cea mai mică unitate de clasificare</li>
                  </ul>
                  <H3 h3text="Regnuri ale vieții (plante, animale, fungi, monere, protiste)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Clasificarea organismelor vii")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Clasificarea organismelor vii")].findIndex(h3 => h3 === "Regnuri ale vieții (plante, animale, fungi, monere, protiste)") : -1}></H3>
                  <p>
                  În sistemul celor 5 regnuri, organismele sunt grupate astfel:
                  </p>
                  <ol
                    className={olClass}>
                        <li><strong>Monera</strong> – bacterii și cianobacterii (procariote)</li>
                        <li><strong>Protista</strong> – alge, protozoare (eucariote, majoritatea unicelulare)</li>
                        <li><strong>Fungi</strong> – ciuperci, drojdii (heterotrofe, eucariote)</li>
                        <li><strong>Plantae</strong> – plante verzi (autotrofe, eucariote, multicelulare)</li>
                        <li><strong>Animalia</strong> – animale (heterotrofe, eucariote, multicelulare)</li>
                  </ol>
                  <p>
                  Organizarea lumii vii reflectă o complexitate crescută, pornind de la moleculele simple până la organismele multicelulare. Înțelegerea caracteristicilor comune ale vieții, a structurii celulare și a nivelurilor de organizare biologică ne permite să apreciem diversitatea și unitatea vieții de pe Pământ.
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