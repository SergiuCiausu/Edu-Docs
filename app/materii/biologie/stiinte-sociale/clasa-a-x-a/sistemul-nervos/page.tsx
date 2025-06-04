"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-stiinte-ale-naturii-10";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Sistemul nervos"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Creierul", "Măduva spinării"],
    [""],
    [""],
    ["Arcul reflex"],
    ["Reflexe necondiționate", "Reflexe condiționate"],
    [""]
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
                className="flex gap-12">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: ${h1}`}</h1>
                  <p>
                  Sistemul nervos este principalul sistem de coordonare și reglare al organismului. Acesta permite perceperea informațiilor din mediu, transmiterea lor către centrii nervoși și generarea răspunsurilor adecvate prin controlul comportamentului și al funcțiilor interne.
                  </p>
                  <H2 h2text="Structura și funcțiile sistemului nervos" indexH2={indexH2("Structura și funcțiile sistemului nervos")} indexLectie={indexLectie}></H2>
                  <p>
                  Sistemul nervos este alcătuit din două mari componente:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Sistemul nervos central (SNC)</strong>: creierul și măduva spinării.</li>
                        <li><strong>Sistemul nervos periferic (SNP)</strong>: nervii și ganglionii nervoși.</li>
                  </ul>
                  <p>
                  Funcțiile principale ale sistemului nervos: 
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Senzorială</strong> – detectează stimuli interni și externi.</li>
                        <li><strong>Integrativă</strong> – analizează și interpretează informațiile.</li>
                        <li><strong>Motorie</strong> – transmite comenzi către mușchi și glande.</li>
                  </ul>
                  <H2 h2text="Componentele sistemului nervos central" indexH2={indexH2("Componentele sistemului nervos central")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Creierul" indexH3={h3s[h2s.findIndex(h2 => h2 === "Componentele sistemului nervos central")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Componentele sistemului nervos central")].findIndex(h3 => h3 === "Creierul") : -1}></H3>
                  <p>
                  Este centrul principal de procesare al informației și este format din:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Encefalul</strong>: cuprinde emisferele cerebrale, trunchiul cerebral și cerebelul.</li>
                        <li><strong>Funcții ale creierului</strong>: gândire, memorie, mișcare voluntară, echilibru, percepții senzoriale, vorbire etc.</li>
                  </ul>
                  <H3 h3text="Măduva spinării" indexH3={h3s[h2s.findIndex(h2 => h2 === "Componentele sistemului nervos central")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Componentele sistemului nervos central")].findIndex(h3 => h3 === "Măduva spinării") : -1}></H3>
                  <p>
                  Este localizată în canalul vertebral și are funcție dublă:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>De conducere</strong> – transmite impulsuri între corp și creier.</li>
                        <li><strong>De reflex</strong> – generează reacții rapide la stimuli prin reflexe.</li>
                  </ul>
                  <H2 h2text="Sistemul nervos periferic și funcțiile acestuia" indexH2={indexH2("Sistemul nervos periferic și funcțiile acestuia")} indexLectie={indexLectie}></H2>
                  <p>
                  Este format din:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Nervi cranieni</strong> (12 perechi) – legați de creier.</li>
                        <li><strong>Nervi spinali</strong> (31 perechi) – legați de măduva spinării.</li>
                  </ul>
                  <p>
                  Funcții:
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Leagă SNC de organele receptoare și efectorii (mușchi, glande).</li>
                        <li>Transmit impulsuri nervoase dinspre și către SNC.</li>
                  </ul>
                  <p>
                  Se împarte în:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Sistem somatic</strong> – controlează mișcările voluntare.</li>
                        <li><strong>Sistem vegetativ (autonom)</strong> – controlează funcțiile involuntare (respirație, digestie, bătăile inimii).</li>
                  </ul>
                  <H2 h2text="Neurotransmițători și rolul lor" indexH2={indexH2("Neurotransmițători și rolul lor")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Neurotransmițătorii</strong> sunt substanțe chimice care facilitează transmiterea impulsului nervos între neuroni sau de la neuroni la mușchi.
                  </p>
                  <p>
                  Exemple de neurotransmițători:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Acetilcolina</strong> – implicată în contracția musculară.</li>
                        <li><strong>Dopamina</strong> – reglează mișcarea, motivația și plăcerea.</li>
                        <li><strong>Serotonina</strong> – influențează starea de spirit, somnul, apetitul.</li>
                        <li><strong>Adrenalina/Noradrenalina</strong> – activează organismul în situații de stres.</li>
                  </ul>
                  <H2 h2text="Reacțiile și reflexele nervoase" indexH2={indexH2("Reacțiile și reflexele nervoase")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Reacțiile</strong> sunt răspunsuri la stimuli și pot fi:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Voluntare</strong> – controlate conștient (scrisul, vorbitul).</li>
                        <li><strong>Involuntare</strong> – reflexe automate (clipitul, retragerea mâinii de la un obiect fierbinte).</li>
                  </ul>
                  <H3 h3text="Arcul reflex" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reacțiile și reflexele nervoase")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reacțiile și reflexele nervoase")].findIndex(h3 => h3 === "Arcul reflex") : -1}></H3>
                  <p>
                  Este traseul parcurs de impulsul nervos într-un reflex:
                  </p>
                  <ol
                    className={olClass}>
                        <li>Receptorul – detectează stimulul.</li>
                        <li>Neuronul senzitiv – transmite impulsul spre SNC.</li>
                        <li>Centru nervos – analizează stimulul.</li>
                        <li>Neuronul motor – transmite comanda.</li>
                        <li>Efectorul – execută răspunsul (mușchi, glandă).</li>
                  </ol>
                  <H2 h2text="Reflexe condiționate și necondiționate" indexH2={indexH2("Reflexe condiționate și necondiționate")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Reflexe necondiționate" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reflexe condiționate și necondiționate")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reflexe condiționate și necondiționate")].findIndex(h3 => h3 === "Reflexe necondiționate") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Sunt <strong>înnăscute</strong>, prezente de la naștere (ex: reflexul de supt la sugari).</li>
                        <li>Se desfășoară automat, fără învățare.</li>
                  </ul>
                  <H3 h3text="Reflexe condiționate" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reflexe condiționate și necondiționate")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reflexe condiționate și necondiționate")].findIndex(h3 => h3 === "Reflexe condiționate") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Sunt <strong>învățate</strong>, dobândite prin experiență (ex: salivarea la sunetul unui clopoțel asociat cu hrana).</li>
                        <li>Necesită repetare și asociere.</li>
                  </ul>
                  <H2 h2text="Circuitele nervoase și transmiterea impulsurilor" indexH2={indexH2("Circuitele nervoase și transmiterea impulsurilor")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Neuronii</strong> sunt celule specializate care formează circuite nervoase complexe.
                  </p>
                  <p>
                  Transmiterea impulsului:
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Se face <strong>electric</strong> în interiorul neuronului.</li>
                        <li>Se face <strong>chimic</strong> între neuroni (la nivelul sinapselor), prin neurotransmițători.</li>
                  </ul>
                  <p>
                  O rețea de neuroni poate forma circuite pentru:
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Reglarea mișcărilor,</li>
                        <li>Perceperea durerii,</li>
                        <li>Generarea emoțiilor,</li>
                        <li>Controlul funcțiilor vegetative.</li>
                  </ul>
                  <p>
                  Sistemul nervos coordonează activitatea organismului prin reacții rapide și precise. Este format din componente centrale și periferice. Reflexele sunt răspunsuri automate, esențiale pentru supraviețuire. Neurotransmițătorii asigură comunicarea eficientă între neuroni. Circuitele nervoase formează baza tuturor funcțiilor nervoase complexe.
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