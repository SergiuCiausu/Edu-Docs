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
import { ulClass, olClass } from '@/app/class/ul';

const page = () => {
  
  const { theme, setTheme } = useTheme();
  
    const [clickedLinkId, setClickedLinkId] = useState<string>("");
    
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const h2s = [
      "Structura și funcțiile oaselor și articulațiilor",
      "Mușchii: tipuri și mecanisme de contracție",
    ]

    const h3s = [
      ["Sistemul osos", "Clasificarea oaselor", "Structura unui os lung", "Articulațiile", "Glandele suprarenale" , "Tipuri de articulații" , "Structura unei articulații mobile"],
      ["Tipuri de mușchi", "Structura mușchilor scheletici", "Mecanismul contracției musculare"],
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Sistemul locomotor") + 1;

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
                  <h1>{`Capitolul ${indexLectie}: Sistemul locomotor`}</h1>
                  <p>
                  Mișcarea este o funcție esențială a organismului, care permite deplasarea, manipularea obiectelor, menținerea posturii și exprimarea comportamentelor. <strong>Sistemul locomotor</strong> este responsabil de această funcție și este format din două componente principale: <strong>sistemul osos</strong> (pasiv) și <strong>sistemul muscular</strong> (activ). Acestea acționează împreună, sub control nervos, pentru a asigura mișcările voluntare și involuntare ale corpului.
                  </p>
                  <H2 h2text="Structura și funcțiile oaselor și articulațiilor" indexH2={indexH2("Structura și funcțiile oaselor și articulațiilor")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Sistemul osos" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile oaselor și articulațiilor")].findIndex(h3 => h3 === "Sistemul osos")}></H3>
                  <p>
                  <strong>Scheletul uman</strong> este alcătuit din aproximativ <strong>206 oase</strong> și reprezintă cadrul de rezistență al corpului. Acesta îndeplinește mai multe funcții:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Funcția de susținere</strong> – oferă suport pentru țesuturi și organe.</li>
                        <li><strong>Funcția de protecție</strong> – protejează organele vitale (ex: craniul protejează creierul, cutia toracică – inima și plămânii).</li>
                        <li><strong>Funcția de mișcare</strong> – oasele servesc drept pârghii pentru mușchi.</li>
                        <li><strong>Funcția hematopoietică</strong> – măduva osoasă roșie produce celule sanguine.</li>
                        <li><strong>Funcția metabolică</strong> – depozit de minerale, în special calciu și fosfor.</li>
                  </ul>
                  <H3 h3text="Clasificarea oaselor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile oaselor și articulațiilor")].findIndex(h3 => h3 === "Clasificarea oaselor")}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Oase lungi</strong> – ex: femurul, humerusul.</li>
                        <li><strong>Oase scurte</strong> – ex: oasele carpiene.</li>
                        <li><strong>Oase late</strong> – ex: scapula, oasele craniului.</li>
                        <li><strong>Oase neregulate</strong> – ex: vertebrele.</li>
                  </ul>
                  <H3 h3text="Structura unui os lung" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile oaselor și articulațiilor")].findIndex(h3 => h3 === "Structura unui os lung")}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Epifizele</strong> – capetele osoase, conțin măduvă roșie.</li>
                        <li><strong>Diafiza</strong> – partea centrală, conține măduvă galbenă.</li>
                        <li><strong>Periostul</strong> – membrană externă, bogată în vase și nervi, ajută la regenerare.</li>
                        <li><strong>Substanța compactă</strong> – oferă rezistență mecanică.</li>
                        <li><strong>Substanța spongioasă</strong> – conține spații în care se află măduva osoasă.</li>
                  </ul>
                  <H3 h3text="Articulațiile" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile oaselor și articulațiilor")].findIndex(h3 => h3 === "Articulațiile")}></H3>
                  <p>
                  <strong>Articulațiile</strong> sunt zonele de unire dintre două sau mai multe oase. Ele permit mobilitatea scheletului.
                  </p>
                  <p>
                    <strong>Tipuri de articulații:</strong>
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Fixe (sinartroze)</strong> – fără mișcare (ex: oasele craniului).</li>
                        <li><strong>Semimobile (amfiartroze)</strong> – mișcări limitate (ex: între vertebre).</li>
                        <li><strong>Mobile (diartroze)</strong> – permit mișcări ample (ex: genunchiul, umărul).</li>
                  </ul>
                  <p>
                    <strong>Structura unei articulații mobile:</strong>
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Suprafețele articulare</strong> – capătul osos acoperit cu cartilaj hialin.</li>
                        <li><strong>Capsula articulară</strong> – înconjoară articulația și secretă lichid sinovial.</li>
                        <li><strong>Lichidul sinovial</strong> – lubrifiază și hrănește cartilajul articular.</li>
                        <li><strong>Ligamentele</strong> – stabilizează articulația.</li>
                  </ul>
                  <H2 h2text="Mușchii: tipuri și mecanisme de contracție" indexH2={indexH2("Mușchii: tipuri și mecanisme de contracție")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Tipuri de mușchi" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mușchii: tipuri și mecanisme de contracție")].findIndex(h3 => h3 === "Tipuri de mușchi")}></H3>
                  <p>
                  <strong>Mușchii</strong> sunt organe specializate în <strong>contracție</strong> și <strong>producerea mișcării</strong>. Ei sunt clasificați în funcție de structură și control:
                  </p>
                  <p>
                    <strong>1. Mușchi scheletici (striați):</strong>
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Atașați de oase prin tendoane.</li>
                        <li>Control voluntar.</li>
                        <li>Fibre musculare lungi, multinucleate, cu aspect striat.</li>
                        <li>Exemple: biceps, triceps, cvadriceps.</li>
                  </ul>
                  <p>
                    <strong>2. Mușchi netezi:</strong>
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Se găsesc în pereții organelor interne (intestine, vase de sânge).</li>
                        <li>Control involuntar.</li>
                        <li>Fibre fusiforme, fără striații.</li>
                        <li>Mișcări lente, ritmice.</li>
                  </ul>
                  <p>
                    <strong>3. Mușchi cardiac:</strong>
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Formează peretele inimii.</li>
                        <li>Control involuntar.</li>
                        <li>Fibre striate, dar cu un singur nucleu.</li>
                        <li>Contracții ritmice și continue.</li>
                  </ul>
                  <H3 h3text="Structura mușchilor scheletici" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mușchii: tipuri și mecanisme de contracție")].findIndex(h3 => h3 === "Structura mușchilor scheletici")}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Fibră musculară</strong> – unitatea structurală de bază.</li>
                        <li><strong>Miofibrile</strong> – conțin filamente de actină și miozină, proteine responsabile de contracție.</li>
                        <li><strong>Sarcoplasma</strong> – citoplasma celulei musculare.</li>
                        <li><strong>Sarcoplasmic reticulum – depozitează ioni de calciu.</strong></li>
                  </ul>
                  <H3 h3text="Mecanismul contracției musculare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mușchii: tipuri și mecanisme de contracție")].findIndex(h3 => h3 === "Mecanismul contracției musculare")}></H3>
                  <p>
                  Contracția musculară se bazează pe interacțiunea dintre actină și miozină și necesită:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Semnal nervos</strong> – transmis de un neuron motor.</li>
                        <li><strong>Prezența calciului</strong> – eliberat în citoplasmă.</li>
                        <li><strong>Consum de ATP </strong>– energia necesară contracției.</li>
                  </ul>
                  <p>
                    <strong>Etape:</strong>
                  </p>
                  <ol
                    className={olClass}>
                        <li>Semnalul nervos ajunge la fibra musculară.</li>
                        <li>Se eliberează ioni de calciu.</li>
                        <li>Miozina se leagă de actină și „alunecă” pe ea.</li>
                        <li>Mușchiul se scurtează (contractă).</li>
                        <li>După semnal, calciul este reabsorbit, iar mușchiul se relaxează.</li>
                  </ol>
                  <p>
                  Sistemul locomotor permite organismului să se miște, să mențină postura și să reacționeze la stimuli externi. Prin colaborarea dintre oase, articulații și mușchi, organismul execută mișcări coordonate și eficiente. Îngrijirea corespunzătoare a acestui sistem – prin alimentație echilibrată, exerciții fizice și evitarea suprasolicitării – contribuie la menținerea sănătății și funcționalității corpului.
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