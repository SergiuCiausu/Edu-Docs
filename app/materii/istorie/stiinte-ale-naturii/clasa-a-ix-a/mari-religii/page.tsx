"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-istorie-9";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';
import { titluriCapitole } from '@/app/data/capitole-fizica-mate-info-capitole-10';

const page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Mari religii"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
    [""],
  ]
  
  const [clickedLinkId, setClickedLinkId] = useState<string>(h1);

  const updateClickedLinkId = (newClickedLinkId: string) => {
    setClickedLinkId(newClickedLinkId);
  }

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
              materie="istorie" 
              clasa={9} 
              titluri={titluri}
              isPageContent={true}
              clickedLink={clickedLinkId}
              onLinkClick={updateClickedLinkId}
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
                  <p>
                  Religia a avut un rol esențial în formarea civilizațiilor și valorilor culturale ale lumii. Religia influențează modul de viață, organizarea socială și chiar arta și arhitectura. În Antichitate și Evul Mediu, religia era adesea legată de autoritatea politică, oferind legitimitate conducătorilor. În această lecție vom explora patru religii majore: <strong>iudaismul, creștinismul, islamul și budismul</strong>, analizând originea, credințele de bază și impactul istoric al acestora.
                  </p>
                  <div
                    className="px-5">
                    <table className={tableClass}>
                        <thead className={trClass}>
                            <th className="flex-10">Denumire</th>
                            <th className="flex-20">Origine</th>
                            <th className="flex-15">Carte sacră</th>
                            <th className="flex-20">Credințe</th>
                            <th className="flex-5">Simbol</th>
                            <th className="flex-15">Loc de cult</th>
                            <th className="flex-15">Răspândire</th>
                        </thead>
                        <tbody>
                            <tr className={trClass}>
                                <td className="flex-10">Iudaism</td>
                                <td className="flex-20">Iudaismul este una dintre cele mai vechi religii monoteiste, apărută în Orientul Apropiat, în urmă cu aproximativ 4000 de ani, în regiunea Canaanului (astăzi Israel și Palestina)</td>
                                <td className="flex-15">Tora (primele cinci cărți ale Vechiului Testament)</td>
                                <td className="flex-20">
                                    <ul className={ulClass}>
                                        <li>Existența unui singur Dumnezeu, atotputernic și atotștiutor.</li>
                                        <li>Legământul dintre Dumnezeu și poporul evreu.</li>
                                        <li>Respectarea Legii mozaice (inclusiv cele 10 Porunci).</li>
                                    </ul>
                                </td>
                                <td className="flex-5">Steaua lui David</td>
                                <td className="flex-15">Sinagoga</td>
                                <td className="flex-15">Comunități evreiești există în întreaga lume, dar cele mai mari sunt în Israel și SUA</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-10">Creștinism</td>
                                <td className="flex-20">S-a născut în secolul I d.Hr. în Palestina, din iudaism, avându-l ca întemeietor pe Isus din Nazaret (Iisus Hristos)</td>
                                <td className="flex-15">Biblia (Vechiul Testament + Noul Testament)</td>
                                <td className="flex-20">
                                    <ul className={ulClass}>
                                        <li>Isus este Fiul lui Dumnezeu și Mântuitorul omenirii.</li>
                                        <li>Mântuirea se obține prin credință, iubire și fapte bune.</li>
                                        <li>Învierea și viața veșnică.</li>
                                    </ul>
                                </td>
                                <td className="flex-5">Crucea</td>
                                <td className="flex-15">Biserica</td>
                                <td className="flex-15">Este cea mai larg răspândită religie în lume, cu principalele ramuri: catolicism, ortodoxie și protestantism</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-10">Islamul</td>
                                <td className="flex-20">Islamul a apărut în secolul al VII-lea în Peninsula Arabică, fondator fiind profetul Mahomed</td>
                                <td className="flex-15">Coranul</td>
                                <td className="flex-20">
                                    <ul className={ulClass}>
                                        <li>Există un singur Dumnezeu (Allah).</li>
                                        <li>Mahomed este ultimul și cel mai important profet.</li>
                                        <li>Cele cinci stâlpi ai credinței: credința, rugăciunea, caritatea, postul (Ramadan), pelerinajul la Mecca.</li>
                                    </ul>
                                </td>
                                <td className="flex-5">Semiluna</td>
                                <td className="flex-15">Moscheea</td>
                                <td className="flex-15">Religie dominantă în Orientul Mijlociu, Africa de Nord, Asia de Sud și de Sud-Est</td>
                            </tr>
                            <tr className={trClass}>
                                <td className="flex-10">Budismul</td>
                                <td className="flex-20">Apărut în India, în secolul al VI-lea î.Hr., fondator fiind Siddhartha Gautama (Buddha)</td>
                                <td className="flex-15">Tripitaka (Trei Coșuri)</td>
                                <td className="flex-20">
                                    <ul className={ulClass}>
                                        <li>Viața este suferință, cauzată de dorință.</li>
                                        <li>Scopul vieții este eliberarea de suferință și atingerea nirvanei.</li>
                                        <li>Reîncarnarea și karma.</li>
                                        <li>Practici: meditație, compasiune, moderație.</li>
                                    </ul>
                                </td>
                                <td className="flex-5">Roata Dharma</td>
                                <td className="flex-15">Templul budist</td>
                                <td className="flex-15">Larg răspândit în Asia: India, China, Japonia, Thailanda, Nepal</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                Aceste religii au influențat profund cultura, istoria și societatea în regiunile în care s-au dezvoltat. Înțelegerea lor este esențială pentru înțelegerea moștenirii spirituale a omenirii și pentru cultivarea respectului față de diversitatea culturală și religioasă.
                </p>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[176px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={titluri.length > 1 ? indexLectie : -1} clickedLink={clickedLinkId} onLinkClick={updateClickedLinkId}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div> 
  )
}

export default page