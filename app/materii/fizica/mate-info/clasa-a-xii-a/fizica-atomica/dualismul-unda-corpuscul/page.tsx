"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-fizica-mate-info-fizica-atomica-12";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';
import Link from 'next/link';

const Page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Dualismul undă-corpuscul"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Efectul fotoelectric", "Interferența și difracția luminii"],
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
              profil="mate info" 
              materie="fizică" 
              clasa={12} 
              capitol="fizică atomică"
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
                  <H2 h2text="Introducere în conceptul de dualism" indexH2={indexH2("Introducere în conceptul de dualism")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  În fizica clasică, <strong>lumina</strong> era considerată <strong>o undă</strong> (teoria ondulatorie), în timp ce <strong>materia</strong> era privită ca formată din <strong>particule</strong>. Însă experimentele din secolul XX au arătat că <strong>ambele entități pot manifesta atât comportament de undă, cât și de particulă</strong> – ceea ce numim <strong>dualism undă-corpuscul</strong>.
                  </p>
                  <H2 h2text="Dualismul luminii" indexH2={indexH2("Dualismul luminii")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Efectul fotoelectric" indexH3={h3s[h2s.findIndex(h2 => h2 === "Dualismul luminii")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Dualismul luminii")].findIndex(h3 => h3 === "Efectul fotoelectric") : -1}></H3>
                  <p>
                  Efectul fotoelectric, descoperit de Heinrich Hertz și explicat de <strong>Albert Einstein</strong> în 1905, a arătat că lumina se comportă ca un flux de particule numite <strong>fotoni</strong>.
                  </p>
                  <ul className={ulClass}>
                    <li>Lumina cu frecvență sub o anumită valoare nu eliberează electroni, indiferent de intensitate;</li>
                    <li>Energia fotonilor este proporțională cu frecvența:</li>
                  </ul>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                        <strong>𝐸 <i>=</i>ℎ ⋅ 𝜈</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Acest fenomen <strong>nu putea fi explicat de teoria ondulatorie</strong>.</li>
                  </ul>
                  <p>
                  Concluzie: Lumina are <strong>comportament corpuscular</strong>.
                  </p>
                  <H3 h3text="Interferența și difracția luminii" indexH3={h3s[h2s.findIndex(h2 => h2 === "Dualismul luminii")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Dualismul luminii")].findIndex(h3 => h3 === "Interferența și difracția luminii") : -1}></H3>
                  <p>
                  Totuși, experimentele de <strong>interferență și difracție</strong> (Young, Fresnel) demonstrează că lumina se comportă și ca <strong>undă</strong>, cu:
                  </p>
                  <ul className={ulClass}>
                    <li>Interferențe constructive și distructive;</li>
                    <li>Răspândire după trecerea prin fante (difracție).</li>
                  </ul>
                  <p>
                  Concluzie: Lumina are și un caracter <strong>ondulatoriu</strong>.
                  </p>
                  <H2 h2text="Dualismul materiei" indexH2={indexH2("Dualismul materiei")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Fizicianul francez <strong>Louis de Broglie</strong> (1924) a emis ipoteza <strong>că și particulele de materie (ex: electronii)</strong> pot avea <strong>proprietăți ondulatorii</strong>.
                  </p>
                  <p>
                  Formula lui de Broglie:
                  </p>
                  <p
                    className="inline-flex items-center gap-1 w-full justify-center">
                    <div
                        className="inline-flex items-center gap-1">
                            <strong>𝜆 <i>=</i> </strong>
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center"><strong>ℎ</strong></p>
                            <p className="fractie-jos text-center"><strong>𝑝</strong></p>
                        </div>
                        <strong><i> = </i></strong>
                        <div
                            className={fractie}>
                            <p className="fractie-sus text-center"><strong>ℎ</strong></p>
                            <p className="fractie-jos text-center"><strong>𝑚𝑣</strong></p>
                        </div>
                    </div>
                  </p>
                  <ul className={ulClass}>
                    <li>𝜆 este lungimea de undă asociată particulei,</li>
                    <li>𝑝 este impulsul (momentul) particulei,</li>
                    <li>ℎ este constanta lui Planck.</li>
                  </ul>
                  <p>
                    <strong>Confirmare experimentală: Difracția electronilor</strong>
                  </p>
                  <p>
                  Experimentele Davisson–Germer și Thomson au arătat că electronii trimiși asupra unui cristal produc <strong>interferențe</strong> – fenomen tipic undelor.
                  </p>
                  <p>
                  Concluzie: <strong>Materia</strong> (la scară microscopică) are comportament <strong>ondulatoriu</strong>.
                  </p>
                  <H2 h2text="Implicații ale dualismului" indexH2={indexH2("Implicații ale dualismului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>Dualismul undă-corpuscul <strong>stă la baza mecanicii cuantice</strong>;</li>
                    <li>Este necesară o abordare probabilistică (ex: funcția de undă Ψ);</li>
                    <li>Nu mai putem vorbi despre traiectorii precise → <strong>Principiul nedeterminării</strong> al lui Heisenberg;</li>
                    <li>A dus la dezvoltarea <strong>modelului mecanico-cuantic</strong> al atomului, depășindu-l pe cel al lui Bohr.</li>
                  </ul>
                  <table className={tableClass}>
                    <thead className={trClass}>
                        <th className="flex-20">Entitate</th>
                        <th className="flex-35">Comportament de undă</th>
                        <th className="flex-45">Comportament de particulă</th>
                    </thead>
                    <tbody>
                        <tr className={trClass}>
                            <td className="flex-20">Lumină</td>
                            <td className="flex-35">Difracție, interferență</td>
                            <td className="flex-45">Efect fotoelectric (fotoni)</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-20">Electroni</td>
                            <td className="flex-35">Difracție, interferență</td>
                            <td className="flex-45">Impuls, coliziuni (particule)</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={titluri.length > 1 ? indexLectie : -1} clickedLink={clickedLinkId} onLinkClick={updateClickedLinkId}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div> 
  )
}

export default Page