"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import H3 from '@/app/components/PageContent/H3';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { titluri } from '@/app/data/capitole-bio-mate-info-11';
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
      "Structura și funcțiile neuronului",
      "Organizarea sistemului nervos central și periferic",
      "Funcțiile senzoriale: analizatori și organe de simț"
    ]

    const h3s = [
      ["Componentele neuronului", "Tipuri de neuroni", "Sinapsa"],
      ["Sistemul nervos central (SNC)", "Sistemul nervos periferic (SNP)", "Subdiviziuni funcționale"],
      ["Ce este un analizator?", "Principalele organe de simț"]
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Sistemul nervos") + 1;

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
                className="flex gap-12 relative">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: Sistemul nervos`}</h1>
                  <p>
                  Sistemul nervos este unul dintre cele mai importante și complexe sisteme ale organismului uman. El controlează și coordonează activitatea tuturor celorlalte sisteme de organe, permițând răspunsuri rapide la stimuli interni și externi. Prin funcțiile sale fundamentale – receptarea, transmiterea și prelucrarea informațiilor – sistemul nervos asigură adaptarea organismului la mediu și menținerea homeostaziei.
                  </p>
                  <H2 h2text="Structura și funcțiile neuronului" indexH2={indexH2("Structura și funcțiile neuronului")} indexLectie={indexLectie}></H2>
                  <p>
                  Neuronul este unitatea structurală și funcțională a sistemului nervos. Fiecare neuron este specializat în <strong>receptarea, transmiterea și procesarea impulsurilor nervoase</strong>.
                  </p>
                  <H3 h3text="Componentele neuronului:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile neuronului")].findIndex(h3 => h3 === "Componentele neuronului")}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Corpul celular (soma)</strong> – conține nucleul și organitele celulare; este centrul de comandă al neuronului.</li>
                        <li><strong>Dendritele</strong> – prelungiri scurte și ramificate care primesc semnale de la alți neuroni.</li>
                        <li><strong>Axonul</strong> – prelungire unică, lungă, care transmite impulsul nervos de la corpul celular către alți neuroni sau organe efectoare (mușchi, glande).</li>
                  </ul>
                  <p>
                  Axonii pot fi acoperiți de o <strong>teacă de mielină</strong>, formată din celule gliale (în special celulele Schwann), care izolează și accelerează conducerea impulsurilor.
                  </p>
                  <H3 h3text="Tipuri de neuroni:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile neuronului")].findIndex(h3 => h3 === "Tipuri de neuroni")}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Neuroni senzoriali (receptori)</strong> – transmit informații de la receptori la sistemul nervos central.</li>
                        <li><strong>Neuroni motori (efectori)</strong> – conduc impulsuri de la sistemul nervos central spre organele efectoare.</li>
                        <li><strong>Neuroni de asociere (interneuroni)</strong> – fac legătura între neuronii senzoriali și cei motori, având rol în integrarea informațiilor.</li>
                  </ul>
                  <H3 h3text="Sinapsa:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile neuronului")].findIndex(h3 => h3 === "Sinapsa")}></H3>
                  <p>
                  Sinapsa este zona de comunicare dintre doi neuroni sau între un neuron și o celulă efectorie. Transmiterea sinaptică se face prin <strong>neurotransmițători</strong> (ex: acetilcolina, dopamina, serotonina).
                  </p>
                  <H2 h2text="Organizarea sistemului nervos central și periferic" indexH2={indexH2("Organizarea sistemului nervos central și periferic")} indexLectie={indexLectie}></H2>
                  <p>
                  Sistemul nervos este împărțit în două mari componente:
                  </p>
                  <H3 h3text="Sistemul nervos central (SNC)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organizarea sistemului nervos central și periferic")].findIndex(h3 => h3 === "Sistemul nervos central (SNC)")}></H3>
                  <p>
                  Include:
                  </p>
                  <ul
                    className={ulClass}>
                        <li>
                            <strong>Creierul</strong>: partea superioară a SNC, adăpostit în cutia craniană. Componente:
                            <ul
                                className={ulClass}>
                                    <li><strong>Telencefalul</strong> (emisferele cerebrale) – responsabil de gândire, memorie, voință.</li>
                                    <li><strong>Diencefalul</strong> – include talamusul și hipotalamusul, centre de integrare senzorială și reglare hormonală.</li>
                                    <li><strong>Trunchiul cerebral</strong> – controlează funcții vitale (respirație, bătăi cardiace).</li>
                                    <li><strong>Cerebelul</strong> – coordonează echilibrul și mișcările fine.</li>
                            </ul>
                        </li>
                        <li><strong>Măduva spinării</strong>: situată în canalul vertebral, coordonează reflexele și transmite impulsuri între creier și restul corpului.</li>
                  </ul>
                  <H3 h3text="Sistemul nervos periferic (SNP)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organizarea sistemului nervos central și periferic")].findIndex(h3 => h3 === "Sistemul nervos periferic (SNP)")}></H3>
                  <p>
                  Este format din:
                  </p>
                  <ul
                    className={ulClass}>
                        <li>
                            <strong>Nervi</strong>: fibre nervoase care leagă SNC de restul corpului. Se împart în:
                            <ul
                                className={ulClass}>
                                    <li><strong>Nervi cranieni</strong> (12 perechi) – emerg din trunchiul cerebral.</li>
                                    <li><strong>Nervi spinali</strong> (31 perechi) – ies din măduva spinării.</li>
                            </ul>
                        </li>
                        <li><strong>Ganglioni nervoși</strong>: aglomerări de corpuri neuronale în afara SNC.</li>
                  </ul>
                  <H3 h3text="Subdiviziuni funcționale:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organizarea sistemului nervos central și periferic")].findIndex(h3 => h3 === "Subdiviziuni funcționale")}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Sistemul nervos somatic</strong> – controlează activitatea mușchilor scheletici (voluntară).</li>
                        <li>
                            <strong>Sistemul nervos autonom </strong>– reglează activitățile involuntare (bătăile inimii, digestia), împărțit în:
                            <ul
                                className={ulClass}>
                                    <li><strong>Sistem simpatic</strong> – activează organismul („luptă sau fugi”).</li>
                                    <li><strong>Sistem parasimpatic</strong> – menține starea de repaus și conservare a energiei.</li>
                            </ul>
                        </li>
                  </ul>
                  <H2 h2text="Funcțiile senzoriale: analizatori și organe de simț" indexH2={indexH2("Funcțiile senzoriale: analizatori și organe de simț")} indexLectie={indexLectie}></H2>
                  <p>
                  Funcția senzorială a sistemului nervos constă în <strong>detectarea și interpretarea stimulilor</strong> din mediu prin intermediul analizatorilor și al organelor de simț.
                  </p>
                  <H3 h3text="Ce este un analizator?" indexH3={h3s[h2s.findIndex(h2 => h2 === "Funcțiile senzoriale: analizatori și organe de simț")].findIndex(h3 => h3 === "Ce este un analizator?")}></H3>
                  <p>
                  Un <strong>analizator</strong> este un sistem complex format din:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Receptorul</strong> – celula sau organul care detectează stimulul (ex: fotoreceptori pentru lumină).</li>
                        <li><strong>Calea nervoasă</strong> – transmite impulsul către creier.</li>
                        <li><strong>Centru nervos</strong> – zona din creier unde se interpretează informația.</li>
                  </ul>
                  <H3 h3text="Principalele organe de simț:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Funcțiile senzoriale: analizatori și organe de simț")].findIndex(h3 => h3 === "Principalele organe de simț")}></H3>
                  <ul
                    className={ulClass}>
                    <li><strong>Văzul</strong> – ochiul detectează lumina prin celulele fotoreceptoare (conuri și bastonașe); interpretarea are loc în lobul occipital.</li>
                    <li><strong>Auzul</strong> – urechea captează vibrațiile sonore; semnalele sunt interpretate în lobul temporal.</li>
                    <li><strong>Gustul</strong> – papilele gustative din limbă percep substanțele dizolvate; analizatorul gustativ este în lobul parietal.</li>
                    <li><strong>Mirosul</strong> – receptorii olfactivi sunt situați în mucoasa nazală; informația este procesată în lobul temporal.</li>
                    <li><strong>Tactil</strong> – pielea detectează presiunea, temperatura și durerea; analizatorul este situat în lobul parietal.</li>
                  </ul>
                  <p>
                  Sistemul nervos reprezintă rețeaua de comandă și control a organismului. Prin neuronii săi specializați, el receptează, integrează și răspunde la informații din mediul intern și extern. Organizarea sa complexă în sisteme centrale și periferice, împreună cu rețeaua de analizatori senzoriali, permite ființei umane să perceapă, să înțeleagă și să reacționeze la lumea înconjurătoare în mod rapid și eficient.
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