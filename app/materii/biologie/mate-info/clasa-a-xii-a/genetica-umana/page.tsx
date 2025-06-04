"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import H3 from '@/app/components/PageContent/H3';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { titluri } from '@/app/data/capitole-bio-mate-info-12';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { ulClass, olClass } from '@/app/class/ul';

const Page = () => {
  
  const { theme, setTheme } = useTheme();
  
    const [clickedLinkId, setClickedLinkId] = useState<string>("");
    
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === "Genetica umană")].h3.map(header => header.text)

    const h3s = [
      ["Geni, cromozomi și ADN", "Alele și genotipuri"],
      ["Tipuri de moștenire", "Mutatii genetice"],
      ["Boli monogenice", "Boli cromozomiale", "Boli poligenice"],
      [""]
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Genetica umană") + 1;
    

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
                className="flex gap-12 relative">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: Genetica umană`}</h1>
                  <p>
                  Genetica este ramura biologiei care studiază <strong>ereditatea</strong> și <strong>variabilitatea</strong> organismelor vii. În contextul uman, genetica explică modul în care <strong>trăsăturile</strong> sunt transmise de la părinți la urmași, cum apar <strong>mutațiile genetice</strong>, dar și <strong>implicațiile</strong> medicale ale acestora.
                  </p>
                  <H2 h2text="Noțiuni fundamentale de genetică" indexH2={indexH2("Noțiuni fundamentale de genetică")} indexLectie={indexLectie}></H2>
                  <p>
                  Organismul uman este alcătuit din <strong>celule</strong>, fiecare conținând un <strong>nucleu</strong> în care se află <strong>materialul genetic</strong> – ADN-ul (acid dezoxiribonucleic).
                  </p>
                  <H3 h3text="Geni, cromozomi și ADN:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Noțiuni fundamentale de genetică")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Noțiuni fundamentale de genetică")].findIndex(h3 => h3 === "Geni, cromozomi și ADN") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Gena</strong> este unitatea de bază a eredității, o secvență de ADN care codifică o proteină.</li>
                        <li><strong>Cromozomii</strong> sunt structuri formate din ADN și proteine, aflate în nucleu.</li>
                        <li>Omul are <strong>46 de cromozomi</strong> (23 de perechi): 22 de perechi autosomale și o pereche de <strong>cromozomi sexuali</strong> (XX la femei, XY la bărbați).</li>
                  </ul>
                  <H3 h3text="Alele și genotipuri:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Noțiuni fundamentale de genetică")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Noțiuni fundamentale de genetică")].findIndex(h3 => h3 === "Alele și genotipuri") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Alele</strong> sunt variante ale aceleiași gene.</li>
                        <li><strong>Genotipul</strong> este totalitatea genelor unui individ.</li>
                        <li><strong>Fenotipul</strong> este expresia vizibilă a genotipului, influențată și de mediu.</li>
                  </ul>
                  <H2 h2text="Mecanismele eredității" indexH2={indexH2("Mecanismele eredității")} indexLectie={indexLectie}></H2>
                  <p>
                  Moștenirea trăsăturilor se face prin <strong>legile mendeliene</strong>, dar în cazul oamenilor intervin și alte mecanisme complexe:
                  </p>
                  <H3 h3text="Tipuri de moștenire:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mecanismele eredității")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mecanismele eredității")].findIndex(h3 => h3 === "Tipuri de moștenire") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Dominant-recesivă</strong>: o alelă dominantă maschează efectul celei recesive.</li>
                        <li><strong>Codominanță</strong>: ambele alele se exprimă simultan (ex: grupul de sânge AB).</li>
                        <li><strong>Moștenirea legată de sex</strong>: genele aflate pe cromozomii X și Y determină trăsături sau boli specifice sexului (ex: daltonism, hemofilie).</li>
                  </ul>
                  <H3 h3text="Mutatii genetice:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mecanismele eredității")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mecanismele eredității")].findIndex(h3 => h3 === "Mutatii genetice") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Sunt modificări în structura ADN-ului.</li>
                        <li>Pot fi <strong>ereditare</strong> (transmise de la părinți) sau <strong>dobândite</strong> (apar în timpul vieții).</li>
                        <li>Unele mutații nu au efect, altele pot cauza <strong>boli genetice</strong>.</li>
                  </ul>
                  <H2 h2text="Boli genetice și implicațiile lor" indexH2={indexH2("Boli genetice și implicațiile lor")} indexLectie={indexLectie}></H2>
                  <p>
                  Bolile genetice sunt afecțiuni cauzate de anomalii în materialul genetic. Acestea pot fi:
                  </p>
                  <H3 h3text="Boli monogenice" indexH3={h3s[h2s.findIndex(h2 => h2 === "Boli genetice și implicațiile lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Boli genetice și implicațiile lor")].findIndex(h3 => h3 === "Boli monogenice") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Sunt cauzate de mutații într-o singură genă.</li>
                        <li>Exemple: <strong>mucoviscidoza, anemia falciformă, hemofilia</strong>.</li>
                  </ul>
                  <H3 h3text="Boli cromozomiale" indexH3={h3s[h2s.findIndex(h2 => h2 === "Boli genetice și implicațiile lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Boli genetice și implicațiile lor")].findIndex(h3 => h3 === "Boli cromozomiale") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Implică modificări numerice sau structurale ale cromozomilor.</li>
                        <li>
                            Exemple:
                            <ul
                                className={ulClass}>
                                    <li><strong>Sindromul Down</strong> – trisomie 21 (3 copii ale cromozomului 21).</li>
                                    <li><strong>Sindromul Turner</strong> – absența unui cromozom X la fete (45,X).</li>
                                    <li><strong>Sindromul Klinefelter</strong> – un cromozom X suplimentar la băieți (47,XXY).</li>
                            </ul>
                        </li>
                  </ul>
                  <H3 h3text="Boli poligenice" indexH3={h3s[h2s.findIndex(h2 => h2 === "Boli genetice și implicațiile lor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Boli genetice și implicațiile lor")].findIndex(h3 => h3 === "Boli poligenice") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Sunt influențate de mai multe gene și de factori de mediu.</li>
                        <li>Exemple: <strong>diabetul zaharat, hipertensiunea, cancerul</strong>.</li>
                  </ul>
                  <H2 h2text="Implicațiile studiului geneticii:" indexH2={indexH2("Implicațiile studiului geneticii")} indexLectie={indexLectie}></H2>
                  <ul
                    className={ulClass}>
                        <li><strong>Diagnostic prenatal</strong> și depistarea timpurie a bolilor.</li>
                        <li><strong>Consiliere genetică</strong> pentru cupluri purtătoare de boli ereditare.</li>
                        <li><strong>Terapia genică</strong> – tehnică modernă prin care se încearcă corectarea genelor defecte.</li>
                        <li><strong>Etica în genetică</strong> – implică întrebări despre clonare, testare genetică, selecție embrionară etc.</li>
                  </ul>
                  <p>
                  Genetica umană oferă o perspectivă profundă asupra modului în care funcționează corpul nostru și cum se transmit caracteristicile ereditare. În același timp, ne ajută să înțelegem originea unor boli și să dezvoltăm metode de prevenire și tratament. În era biotehnologiilor, cunoașterea geneticii este esențială pentru progresul medicinei și protejarea sănătății umane.
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

export default Page