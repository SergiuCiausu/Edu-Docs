"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import H3 from '@/app/components/PageContent/H3';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { titluri } from '@/app/data/capitole-bio-mate-info-10';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { ulClass } from '@/app/class/ul';

const page = () => {
  
  const { theme, setTheme } = useTheme();
  
    const [clickedLinkId, setClickedLinkId] = useState<string>("");
    
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const h2s = [
      "Ecosisteme și biocenoze",
      "Relațiile dintre organisme și mediul lor",
      "Ciclurile biogeochimice",
      "Impactul activităților umane asupra mediului și măsuri de protecție"
    ]

    const h3s = [
      ["Ecosistemul", "Biocenoza"],
      ["Relații între organisme", "Relații cu mediul abiotic", "În mediul aerian (păsări, unele insecte)"],
      [""],
      ["Probleme", "Măsuri de conservare"]
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Ecologie și protecția mediului") + 1;

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
              clasa={10} 
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
                  <h1>{`Capitolul ${indexLectie}: Ecologie și protecția mediului`}</h1>
                  <p>
                  Ecologia este ramura biologiei care studiază interacțiunile dintre organismele vii și mediul lor de viață, precum și echilibrele fragile care se stabilesc în natură. Într-o lume afectată tot mai mult de schimbările climatice, poluare și pierderea biodiversității, înțelegerea principiilor ecologice este esențială pentru <strong>conservarea vieții pe Pământ</strong>.
                  </p>
                  <H2 h2text="Ecosisteme și biocenoze" indexH2={indexH2("Ecosisteme și biocenoze")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Ecosistemul" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ecosisteme și biocenoze")].findIndex(h3 => h3 === "Ecosistemul")}></H3>
                  <p>
                  Un <strong>ecosistem</strong> este o unitate funcțională alcătuită dintr-o <strong>biocenoză</strong> (totalitatea ființelor vii) și <strong>biotopul</strong> (componenta abiotică – sol, apă, aer, lumină, temperatură). Între aceste două componente există relații complexe de <strong>interdependență</strong>.
                  </p>
                  <p>
                  Exemple de ecosisteme: pădurea, pajiștea, lacul, reciful de corali, deșertul.
                  </p>
                  <H3 h3text="Biocenoza" indexH3={h3s[h2s.findIndex(h2 => h2 === "Ecosisteme și biocenoze")].findIndex(h3 => h3 === "Biocenoza")}></H3>
                  <p>
                  Biocenoza este formată din toate <strong>populațiile</strong> de organisme care trăiesc într-un anumit spațiu. Populațiile sunt grupuri de indivizi din aceeași specie care conviețuiesc în același habitat și se reproduc între ei.
                  </p>
                  <p>
                  În cadrul biocenozei, organismele se împart în:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Producători</strong> – plantele verzi, care realizează fotosinteza.</li>
                        <li><strong>Consumatori</strong> – animale ierbivore (consumatori primari), carnivore (consumatori secundari și terțiari).</li>
                        <li><strong>Dezcompozitori</strong> – bacterii și ciuperci care descompun materia organică moartă și închid ciclurile substanțelor.</li>
                  </ul>
                  <H2 h2text="Relațiile dintre organisme și mediul lor" indexH2={indexH2("Relațiile dintre organisme și mediul lor")} indexLectie={indexLectie}></H2>
                  <p>
                  Organismele nu trăiesc izolat, ci interacționează între ele și cu mediul înconjurător. Aceste relații pot fi:
                  </p>
                  <H3 h3text="Relații între organisme:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Relațiile dintre organisme și mediul lor")].findIndex(h3 => h3 === "Relații între organisme")}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Simbioză</strong> – asociere reciproc avantajoasă (ex: micoriza dintre ciuperci și rădăcinile plantelor).</li>
                        <li><strong>Comensalism</strong> – un organism beneficiază, celălalt nu este afectat (ex: peștii-pilot care însoțesc rechinii).</li>
                        <li><strong>Parazitism</strong> – unul beneficiază, celălalt este afectat (ex: păduchii, teniile).</li>
                        <li><strong>Prădător-pradă</strong> – relație de hrană între carnivore și ierbivore.</li>
                  </ul>
                  <H3 h3text="Relații cu mediul abiotic:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Relațiile dintre organisme și mediul lor")].findIndex(h3 => h3 === "Relații cu mediul abiotic")}></H3>
                  <p>
                  Organismele răspund la <strong>factorii abiotici</strong> precum temperatura, umiditatea, lumina, pH-ul, salinitatea etc. Aceste condiții influențează <strong>distribuția, comportamentul și adaptările</strong> organismelor.
                  </p>
                  <H2 h2text="Ciclurile biogeochimice" indexH2={indexH2("Ciclurile biogeochimice")} indexLectie={indexLectie}></H2>
                  <p>
                  Pentru ca ecosistemele să funcționeze durabil, materia și energia trebuie reciclate. Ciclurile biogeochimice descriu modul în care elementele chimice esențiale circulă prin biosferă:
                  </p>
                  <ul
                    className={ulClass}>
                    <li><strong>Ciclul carbonului </strong>– carbonul circulă între atmosferă, organisme și sol, fiind implicat în fotosinteză și respirație.</li>
                    <li><strong>Ciclul azotului</strong> – azotul este transformat de bacterii fixatoare și reciclat prin descompunere.</li>
                    <li><strong>Ciclul apei</strong> – implică evaporare, condensare, precipitații, infiltrare și curgere.</li>
                    <li><strong>Ciclul fosforului</strong> – implică rocile, solul, plantele și animalele, fără o componentă gazoasă importantă.</li>
                  </ul>
                  <p>
                  Aceste cicluri asigură <strong>continuitatea vieții</strong> și mențin <strong>echilibrul ecosistemelor</strong>.
                  </p>
                  <H2 h2text="Impactul activităților umane asupra mediului și măsuri de protecție" indexH2={indexH2("Impactul activităților umane asupra mediului și măsuri de protecție")} indexLectie={indexLectie}></H2>
                  <p>
                  Odată cu dezvoltarea industrială, impactul umanității asupra mediului a crescut semnificativ. Principalele probleme ecologice actuale sunt:
                  </p>
                  <H3 h3text="Probleme:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Impactul activităților umane asupra mediului și măsuri de protecție")].findIndex(h3 => h3 === "Probleme")}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Poluarea aerului, apei și solului</strong></li>
                        <li><strong>Defrișările și pierderea habitatelor</strong></li>
                        <li><strong>Schimbările climatice</strong> (efectul de seră, topirea ghețarilor)</li>
                        <li><strong>Extincția speciilor</strong></li>
                        <li><strong>Suprapopularea și urbanizarea excesivă</strong></li>
                  </ul>
                  <H3 h3text="Măsuri de conservare:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Impactul activităților umane asupra mediului și măsuri de protecție")].findIndex(h3 => h3 === "Măsuri de conservare")}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Protejarea speciilor și habitatelor naturale</strong> prin înființarea de arii protejate.</li>
                        <li><strong>Educarea ecologică</strong> – formarea unui comportament responsabil față de natură.</li>
                        <li><strong>Reciclarea și utilizarea sustenabilă</strong> a resurselor.</li>
                        <li><strong>Reducerea emisiilor de gaze cu efect de seră.</strong></li>
                        <li><strong>Utilizarea energiilor regenerabile</strong> (solar, eolian, hidro).</li>
                  </ul>
                  <p>
                  <strong>Conservarea biodiversității</strong> și a resurselor naturale nu este doar o responsabilitate a guvernelor, ci și a fiecărui individ.
                  </p>
                  <p>
                  Ecologia ne învață că fiecare organism are un rol bine definit într-un ecosistem și că echilibrul natural este fragil. Prin înțelegerea acestor relații și prin adoptarea unor măsuri de protecție a mediului, putem asigura <strong>un viitor sustenabil pentru toate formele de viață</strong> de pe Pământ.
                  </p>
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