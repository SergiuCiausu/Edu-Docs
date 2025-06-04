"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-chimie-12";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';

const Page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Noțiuni de cinetică chimică"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
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
              profil="mate info" 
              materie="chimie" 
              clasa={12} 
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
                  <H2 h2text="Reacții lente și rapide" indexH2={indexH2("Reacții lente și rapide")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Viteza unei reacții chimice reprezintă <strong>modul în care concentrațiile reactanților sau produselor se modifică în timp</strong>.
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Reacții rapide</strong>: au loc în fracțiuni de secundă (ex: reacția acidului clorhidric cu hidroxid de sodiu).</li>
                    <li><strong>Reacții lente</strong>: durează minute, ore sau chiar ani (ex: ruginirea fierului, fermentația zaharurilor).</li>
                  </ul>
                  <p>
                    <strong>Exemplu:</strong>
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                    <span>NaOH(aq) + HCl(aq) → NaCl(aq) + H<sub>2</sub>O(l)</span>
                  </p>
                  <p>
                  Această reacție este rapidă – se observă imediat neutralizarea.
                  </p>
                  <H2 h2text="Viteza de reacție și legea vitezei" indexH2={indexH2("Viteza de reacție și legea vitezei")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Definiție:</strong>
                  </p>
                  <p>
                  Viteza de reacție (𝑣) este exprimată prin:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        <div
                            className="inline-flex items-center gap-1 pt-2">
                                <strong>𝑣 =  </strong>
                            <div
                                className={fractie}>
                                <p className="fractie-sus text-center"><strong>𝑑[𝐴]</strong></p>
                                <p className="fractie-jos text-center"><strong>𝑑𝑡</strong></p>
                            </div>
                        </div>
                  </p>
                  <p>
                  unde [𝐴] este concentrația unui reactant sau produs, iar 𝑑𝑡 este intervalul de timp.
                  </p>
                  <p>
                    <strong>Legea vitezei:</strong>
                  </p>
                  <p>
                  Pentru reacția:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full">
                        aA + bB → produși
                  </p>
                  <p>
                  legea vitezei se exprimă astfel:
                  </p>
                  <p
                    className="inline-flex items-center justify-center gap-1 w-full formula font-bold">
                    𝑣 = 𝑘[𝐴]<sup>𝑚</sup>[𝐵]<sup>𝑛</sup>
                  </p>
                  <ul className={ulClass}>
                    <li>𝑘 = constanta vitezei;</li>
                    <li>𝑚, 𝑛 = ordinele de reacție (experimentale, nu trebuie să coincidă cu coeficienții stoechiometrici),</li>
                    <li>[𝐴], [𝐵] = concentrațiile reactanților.</li>
                  </ul>
                  <H2 h2text="Factorii care influențează viteza de reacție" indexH2={indexH2("Factorii care influențează viteza de reacție")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Temperatura:</strong>
                    <ul className={ulClass}>
                        <li>Creșterea temperaturii → crește viteza reacției.</li>
                        <li>Explicație: particulele au energie cinetică mai mare → mai multe ciocniri eficiente.</li>
                    </ul>
                  </p>
                  <p>
                    <strong>Concentrația reactanților:</strong>
                  </p>
                  <p>
                  O concentrație mai mare → mai multe ciocniri pe unitatea de timp.
                  </p>
                  <p>
                    <strong>Presiunea (pentru gaze):</strong>
                  </p>
                  <p>
                  Presiunea mai mare → concentrație efectivă mai mare → reacție mai rapidă.
                  </p>
                  <p>
                    <strong>Catalizatori:</strong>
                  </p>
                  <ul className={ulClass}>
                    <li>Substanțe care <strong>accelerează reacția</strong> prin scăderea <strong>energiei de activare, fără a fi consumate</strong>.</li>
                    <li>Exemplu: <strong>enzimele</strong> sunt catalizatori biologici esențiali.</li>
                  </ul>
                  <p>
                    <strong>Suprafața de contact (pentru substanțe solide):</strong>
                  </p>
                  <p>
                  Un solid fin măcinat reacționează mai repede decât unul compact (ex: pulberea de zinc reacționează mai repede cu acid decât o bucată de zinc).
                  </p>
                  <H2 h2text="Mecanisme de reacție" indexH2={indexH2("Mecanisme de reacție")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O reacție chimică nu are loc dintr-o singură etapă, ci printr-o <strong>succesiune de etape elementare</strong>:
                  </p>
                  <ul className={ulClass}>
                    <li>Aceste etape formează <strong>mecanismul reacției</strong>.</li>
                    <li>Mecanismul explică modul în care <strong>reactanții se transformă în produși</strong>.</li>
                    <li>Reacția globală este suma reacțiilor elementare.</li>
                  </ul>
                  <p>
                    <strong>Etapa lentă = etapă determinantă:</strong>
                  </p>
                  <p>
                  Reacția globală este controlată de <strong>cea mai lentă etapă</strong>.
                  </p>
                  <p>
                    <strong>Specii intermediare:</strong>
                  </p>
                  <p>
                  Se formează temporar în timpul reacției și nu apar în ecuația globală (ex: radicali liberi, ioni).
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

export default Page