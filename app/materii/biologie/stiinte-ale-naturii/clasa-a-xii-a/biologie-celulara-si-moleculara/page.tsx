"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-stiinte-ale-naturii-12";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Biologie celulară și moleculară"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Membrana celulară", "Citoplasma", "Nucleul"],
    ["Procesele metabolice", "Enzimele"],
    ["Mitoza", "Meioza"]
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
              materie="biologie" 
              clasa={12} 
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
                  Biologia celulară și moleculară reprezintă baza înțelegerii vieții la nivel microscopic. Ea explorează structura și funcțiile celulei, procesele metabolice fundamentale și mecanismele de diviziune celulară care stau la baza dezvoltării și transmiterii eredității.
                  </p>
                  <H2 h2text="Structura și funcțiile celulei" indexH2={indexH2("Structura și funcțiile celulei")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Membrana celulară" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile celulei")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile celulei")].findIndex(h3 => h3 === "Membrana celulară") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Structură</strong>: Alcătuită dintr-un bistrat fosfolipidic în care sunt încorporate proteine, colesterol și glicolipide. Modelul acceptat este cel al mozaicului fluid.</li>
                    <li>
                        Funcții:
                        <ul className={ulClass}>
                            <li>Delimitează celula față de mediul extern.</li>
                            <li>Controlează schimburile celulei cu mediul (transport selectiv de substanțe).</li>
                            <li>Participă la recunoașterea celulară și la transmiterea semnalelor.</li>
                        </ul>
                    </li>
                  </ul>
                  <H3 h3text="Citoplasma" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile celulei")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile celulei")].findIndex(h3 => h3 === "Citoplasma") : -1}></H3>
                  <p>
                  <strong>Citoplasma</strong> este mediul intern al celulei, format din <strong>citosol</strong> și <strong>organite celulare</strong>:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Mitocondrii</strong> – locul producerii de ATP (energie).</li>
                    <li><strong>Reticul endoplasmatic rugos</strong> – sinteza proteinelor.</li>
                    <li><strong>Reticul endoplasmatic neted</strong> – sinteza lipidelor și detoxifiere.</li>
                    <li><strong>Aparatul Golgi</strong> – modifică și ambalează proteinele.</li>
                    <li><strong>Lizozomi</strong> – digestia celulară.</li>
                    <li><strong>Centrioli</strong> – rol în diviziunea celulară (la celulele animale).</li>
                    <li><strong>Ribozomi</strong> – sinteza proteinelor (pot fi liberi sau atașați RE rugos).</li>
                  </ul>
                  <H3 h3text="Nucleul" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile celulei")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile celulei")].findIndex(h3 => h3 === "Nucleul") : -1}></H3>
                  <ul className={ulClass}>
                    <li>
                        <strong>Structură:</strong>
                        <ul className={ulClass}>
                            <li>Învelit de o membrană dublă cu pori nucleari.</li>
                            <li>Conține <strong>nucleol</strong> (rol în formarea ribozomilor) și cromatină (ADN + proteine).</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Funcții:</strong>
                        <ul className={ulClass}>
                            <li>Coordonează activitatea celulară.</li>
                            <li>Conține informația genetică.</li>
                            <li>Participă la <strong>replicarea ADN-ului și transcrierea ARN-ului</strong>.</li>
                        </ul>
                    </li>
                  </ul>
                  <H2 h2text="Metabolismul celular" indexH2={indexH2("Metabolismul celular")} indexLectie={indexLectie}></H2>
                  <p>
                  Metabolismul este totalitatea reacțiilor chimice care au loc într-o celulă.
                  </p>
                  <H3 h3text="Procesele metabolice" indexH3={h3s[h2s.findIndex(h2 => h2 === "Metabolismul celular")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Metabolismul celular")].findIndex(h3 => h3 === "Procesele metabolice") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Anabolismul</strong> – Reacții de sinteză care necesită energie (ex: sinteza proteinelor).</li>
                    <li><strong>Catabolismul</strong> – Reacții de degradare care eliberează energie (ex: respirația celulară).</li>
                  </ul>
                  <H3 h3text="Enzimele" indexH3={h3s[h2s.findIndex(h2 => h2 === "Metabolismul celular")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Metabolismul celular")].findIndex(h3 => h3 === "Enzimele") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Structură</strong>: Proteine globulare, unele cu componentă neproteică (coenzimă sau ion metalic).</li>
                    <li>
                        <strong>Mecanism de acțiune:</strong>
                        <ul className={ulClass}>
                            <li>Enzima recunoaște substratul și formează <strong>complexul enzimă-substrat</strong>.</li>
                            <li>Are loc reacția chimică, apoi produsul este eliberat.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Factori care influențează activitatea enzimatică:</strong>
                        <ul className={ulClass}>
                            <li><strong>Temperatura</strong> (optimum enzimatic)</li>
                            <li><strong>pH-ul</strong></li>
                            <li><strong>Concentrația substratului</strong></li>
                            <li><strong>Inhibitori</strong> (pot fi competitivi sau necompetitivi)</li>
                        </ul>
                    </li>
                  </ul>
                  <H2 h2text="Diviziunea celulară" indexH2={indexH2("Diviziunea celulară")} indexLectie={indexLectie}></H2>
                  <p>
                  Diviziunea celulară este procesul prin care o celulă mamă dă naștere la două sau mai multe celule fiice.
                  </p>
                  <H3 h3text="Mitoza" indexH3={h3s[h2s.findIndex(h2 => h2 === "Diviziunea celulară")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Diviziunea celulară")].findIndex(h3 => h3 === "Mitoza") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Se realizează în celulele somatice.</li>
                    <li>Asigură <strong>creșterea, regenerarea și reproducerea asexuată</strong>.</li>
                    <li>
                        <strong>Etapele mitozei:</strong>
                        <ul className={ulClass}>
                            <li><strong>Profaza</strong>: condensarea cromozomilor, dispariția nucleolului și a membranei nucleare.</li>
                            <li><strong>Metafaza</strong>: alinierea cromozomilor în plan ecuatorial.</li>
                            <li><strong>Anafaza</strong>: separarea cromatidelor surori.</li>
                            <li><strong>Telofaza</strong>: refacerea membranei nucleare, despiralizarea cromatinei.</li>
                        </ul>
                    </li>
                    <li>Final: <strong>Citokineza</strong> – separarea citoplasmei.</li>
                  </ul>
                  <H3 h3text="Meioza" indexH3={h3s[h2s.findIndex(h2 => h2 === "Diviziunea celulară")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Diviziunea celulară")].findIndex(h3 => h3 === "Meioza") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Se realizează în celulele reproducătoare (germinale).</li>
                    <li>Conduce la formarea gametilor (ouă, spermatozoizi).</li>
                    <li>Asigură <strong>variabilitate genetică</strong> și menține constant numărul de cromozomi.</li>
                    <li>
                        <strong>Etape:</strong>
                        <ul className={ulClass}>
                            <li><strong>Meioza I</strong> (reducțională): profaza I (cu crossing-over), metafaza I, anafaza I, telofaza I.</li>
                            <li><strong>Meioza II</strong> (asemănătoare mitozei): rezultă patru celule haploide.</li>
                        </ul>
                    </li>
                  </ul>
                  <p>
                  Studiul celulei, al metabolismului și al diviziunii celulare oferă o bază fundamentală pentru înțelegerea funcționării organismului. Cunoașterea acestor procese ajută la explicarea dezvoltării, reproducerii și diversității vieții.
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