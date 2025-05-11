"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import H3 from '@/app/components/PageContent/H3';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { titluri } from "@/app/data/capitole-bio-mate-info-9";
import { ulClass } from '@/app/class/ul';

const page = () => {

  const { theme, setTheme } = useTheme();

  const [clickedLinkId, setClickedLinkId] = useState<string>("");
  
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const h2s = [
      "Compoziția chimică a celulei",
      "Structura și funcțiile componentelor celulare"
    ]

    const h3s = [
      [
        "Substanțele anorganice din celulă",
        "Substanțele organice din celulă",
        "Importanța compoziției chimice a celulei"
      ],
      [
        "Membrana celulară",
        "Citoplasma și organitele celulare",
        "Nucleul - centrul de comandă al celulei"
      ]
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Celula - unitatea structurală și funcțională a lumii vii") + 1;

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
                className="flex gap-12 relative">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: Celula - unitatea structurală și funcțională a lumii vii`}</h1>
                  <H2 h2text="Compoziția chimică a celulei" indexLectie={indexLectie} indexH2={indexH2("Compoziția chimică a celulei")}></H2>
                  <p>Celula este unitatea fundamentală a tuturor organismelor vii, fiind 
                    formată dintr-o varietate de molecule esențiale pentru viață. 
                    Aceste molecule sunt grupate în două categorii principale: 
                    substanțe anorganice (apă, săruri minerale) și substanțe organice 
                    (glucide, lipide, proteine, acizi nucleici).
                  </p>
                  <H3 h3text="Substanțele anorganice din celulă" indexH3={h3s[h2s.findIndex(h2 => h2 === "Compoziția chimică a celulei")].findIndex(h3 => h3 === "Substanțele anorganice din celulă")}></H3>
                  <ul
                    className={ulClass}>
                    <li>
                      <strong>Apa</strong> - Reprezintă între 60-90% din masa totală a celulei și este esențială pentru desfășurarea reacțiilor biochimice. Apa are rol în:
                      <ul
                        className={ulClass}>
                        <li>Dizolvarea și transportul substanțelor;</li>
                        <li>Reglarea temperaturii celulare;</li>
                        <li>Participarea la reacții chimice (ex: hidroliza enzimatică).</li>
                      </ul>
                    </li>
                    <li><strong>Sărurile minerale</strong> - Se găsesc în formă dizolvată (ioni) sau sub formă solidă (depozite minerale). Exemple:</li>
                    <ul
                      className={ulClass}>
                        <li>Ionii de sodiu (Na⁺) și potasiu (K⁺) reglează echilibrul osmotic și transmiterea impulsurilor nervoase.</li>
                        <li>Calciul (Ca²⁺) este esențial în formarea oaselor și în coagularea sângelui.</li>
                        <li>Fosforul (P) intră în structura ATP-ului, molecula energetică a celulei.</li>
                    </ul>
                  </ul>
                  <H3 h3text="Substanțele organice din celulă" indexH3={h3s[h2s.findIndex(h2 => h2 === "Compoziția chimică a celulei")].findIndex(h3 => h3 === "Substanțele organice din celulă")}></H3>
                  <ul
                    className={ulClass}>
                      <li><strong>Glucidele (zaharurile)</strong> - Principala sursă de energie a celulei.</li>
                      <ul
                        className={ulClass}>
                        <li><strong>Monozaharidele</strong> (glucoza, fructoza) sunt zaharuri simple, rapid utilizabile.</li>
                        <li><strong>Polizaharidele</strong> (amidonul, glicogenul) sunt forme de depozitare a energiei.</li>
                      </ul>
                      <li>
                        <strong>Lipidele (grăsimile)</strong> - Molecule hidrofobe, care au rol de rezervă energetică și izolare termică.
                        <ul
                          className={ulClass}>
                          <li><strong>Fosfolipidele</strong> intră în alcătuirea membranei celulare.</li>
                          <li><strong>Trigliceridele</strong> sunt folosite pentru depozitarea energiei.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Proteinele</strong> - Molecule complexe formate din aminoacizi, având rol structural și funcțional.
                        <ul
                          className={ulClass}>
                            <li><strong>Enzimele</strong> (ex: amilaza, catalaza) accelerează reacțiile biochimice.</li>
                            <li><strong>Proteinele de transport</strong> (hemoglobina) transportă substanțe esențiale în organism.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Acizii nucleici</strong> (ADN și ARN) – Moleculele care conțin informația genetică.
                        <ul
                          className={ulClass}>
                            <li><strong>ADN-ul</strong> (acidul dezoxiribonucleic) codifică toate informațiile ereditare ale unui organism.</li>
                            <li><strong>ARN-ul</strong> (acidul ribonucleic) participă la sinteza proteinelor.</li>
                        </ul>
                      </li>
                  </ul>
                  <H3 h3text="Importanța compoziției chimice a celulei" indexH3={h3s[h2s.findIndex(h2 => h2 === "Compoziția chimică a celulei")].findIndex(h3 => h3 === "Importanța compoziției chimice a celulei")}></H3>
                  <p>Fiecare tip de substanță are un rol esențial în menținerea 
                    funcțiilor vitale ale celulei. Modificările compoziției chimice 
                    pot duce la tulburări metabolice sau chiar moarte celulară. 
                    Studierea acestor componente ajută la înțelegerea bolilor și la 
                    dezvoltarea tratamentelor medicale.
                  </p>
                  <H2 h2text="Structura și funcțiile componentelor celulare" indexH2={indexH2("Structura și funcțiile componentelor celulare")} indexLectie={indexLectie}></H2>
                  <p>Celula eucariotă este o unitate biologică extrem de complexă, 
                    organizată în compartimente specializate, fiecare având funcții 
                    specifice. Aceste structuri sunt esențiale pentru buna funcționare 
                    a organismului și sunt organizate în trei componente principale: 
                    <strong> membrana celulară, citoplasma și nucleul</strong>.
                  </p>
                  <H3 h3text="Membrana celulară" indexH3={h3s[indexH2("Structura și funcțiile componentelor celulare")].findIndex(h3 => h3 === "Membrana celulară")}></H3>
                  <p>Membrana celulară este o structură flexibilă ce delimitează celula și controlează schimburile de substanțe cu mediul extern. 
                    Este alcătuită dintr-un bistrat fosfolipidic, în care sunt inserate proteine, colesterol și glicoproteine.
                  </p>
                  <p>
                    Funcțiile membranei celulare:
                  </p>
                  <ul
                    className={ulClass}>
                      <li>Protejează conținutul celulei;</li>
                      <li>Reglează schimbul de substanțe prin transport pasiv (difuzie, osmoză) și transport activ (pompe ionice, endocitoză, exocitoză);</li>
                      <li>Conține receptori pentru semnale chimice (hormoni, neurotransmițători).</li>
                  </ul>
                  <H3 h3text="Citoplasma și organitele celulare" indexH3={h3s[indexH2("Structura și funcțiile componentelor celulare")].findIndex(h3 => h3 === "Citoplasma și organitele celulare")}></H3>
                  <p>Citoplasma este mediul intern al celulei, în care sunt dispersate 
                    organitele. Acestea sunt structuri specializate care îndeplinesc 
                    diverse funcții esențiale:
                  </p>
                  <ul
                    className={ulClass}>
                    <li><strong>Mitocondriile</strong> - Sunt „uzinele energetice” ale celulei, unde are loc respirația celulară și producerea de ATP.</li>
                    <li><strong>Reticulul endoplasmatic</strong> - Este un sistem de membrane implicat în sinteza și transportul proteinelor (reticul endoplasmatic rugos) și lipidelor (reticul endoplasmatic neted).</li>
                    <li><strong>Aparatul Golgi</strong> - Procesează, sortează și ambalează moleculele pentru a fi transportate în celulă sau în afara acesteia.</li>
                    <li><strong>Lizozomii</strong> - Conțin enzime care degradează substanțe inutile sau dăunătoare.</li>
                    <li><strong>Ribozomii</strong> - Responsabili pentru sinteza proteinelor, esențiale pentru creștere și reparare celulară.</li>
                  </ul>
                  <H3 h3text="Nucleul - centrul de comandă al celulei" indexH3={h3s[indexH2("Structura și funcțiile componentelor celulare")].findIndex(h3 => h3 === "Nucleul - centrul de comandă al celulei")}></H3>
                  <p>Nucleul este organitul care conține <strong>materialul genetic (ADN-ul)</strong> și coordonează toate activitățile celulare. 
                    Este delimitat de <strong>envelopa nucleară</strong>, care prezintă pori prin care se realizează schimburile de substanțe cu citoplasma.
                  </p>
                  <p>În nucleu se află:</p>
                  <ul
                    className={ulClass}>
                      <li><strong>Cromatina</strong>, formată din ADN și proteine, care se condensează în cromozomi în timpul diviziunii celulare.</li>
                      <li><strong>Nucleolul</strong>, unde sunt sintetizați ribozomii.</li>
                  </ul>
                  <p>Nucleul este esențial pentru <strong>creșterea, diviziunea și funcționarea celulară</strong>, având un 
                    rol crucial în ereditate și transmiterea informației genetice.</p>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={indexLectie} clickedLink={clickedLinkId}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div>
  )
}

export default page