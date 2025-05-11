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
import { Inder } from 'next/font/google';

const page = () => {
  
  const { theme, setTheme } = useTheme();
  
    const [clickedLinkId, setClickedLinkId] = useState<string>("");
    
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const h2s = [
      "Organele reproducătoare masculine și feminine",
      "Gametogeneza, fecundația și dezvoltarea embrionară",
    ]

    const h3s = [
      ["Sistemul reproducător masculin", "Sistemul reproducător feminin"],
      ["Gametogeneza", "Fecundația", "Dezvoltarea embrionară"],
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Sistemul reproducător") + 1;

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
                  <h1>{`Capitolul ${indexLectie}: Sistemul reproducător`}</h1>
                  <p>
                  Reproducerea este procesul biologic prin care organismele își asigură perpetuarea speciei. La om, reproducerea este <strong>sexuată</strong>, implicând fuziunea a două celule sexuale – gametul masculin (spermatozoidul) și gametul feminin (ovulul).
                  </p>
                  <H2 h2text="Organele reproducătoare masculine și feminine" indexH2={indexH2("Organele reproducătoare masculine și feminine")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Sistemul reproducător masculin" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organele reproducătoare masculine și feminine")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organele reproducătoare masculine și feminine")].findIndex(h3 => h3 === "Sistemul reproducător masculin") : -1}></H3>
                  <p>
                  Este alcătuit din:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Testicule</strong> – organe pereche situate în scrot; produc spermatozoizi (gametul masculin) și testosteron (hormon sexual masculin).</li>
                        <li><strong>Epididim</strong> – tub lung și încolăcit situat deasupra fiecărui testicul, unde spermatozoizii se maturizează.</li>
                        <li><strong>Canale deferente</strong> – transportă spermatozoizii spre uretră.</li>
                        <li><strong>Vezicule seminale, prostata și glandele bulbouretrale</strong> – glande anexe care produc lichide ce se amestecă cu spermatozoizii formând lichidul seminal.</li>
                        <li><strong>Penis</strong> – organ copulator care permite depunerea spermei în tractul genital feminin.</li>
                  </ul>
                  <H3 h3text="Sistemul reproducător feminin" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organele reproducătoare masculine și feminine")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organele reproducătoare masculine și feminine")].findIndex(h3 => h3 === "Sistemul reproducător feminin") : -1}></H3>
                  <p>
                  Este alcătuit din:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Ovare</strong> – glande pereche situate în cavitatea abdominală; produc <strong>ovule</strong> (gametul feminin) și <strong>hormoni sexuali</strong> (estrogen și progesteron).</li>
                        <li><strong>Trompe uterine (oviducte)</strong> – conducte care fac legătura între ovare și uter; locul unde are loc <strong>fecundația</strong>.</li>
                        <li><strong>Uter</strong> – organ muscular în care se dezvoltă embrionul.</li>
                        <li><strong>Vagin</strong> – canal elastic care permite contactul sexual, eliminarea fluxului menstrual și nașterea.</li>
                        <li><strong>Vulva</strong> – totalitatea organelor genitale externe (labii, clitoris etc.).</li>
                  </ul>
                  <H2 h2text="Gametogeneza, fecundația și dezvoltarea embrionară" indexH2={indexH2("Gametogeneza, fecundația și dezvoltarea embrionară")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Gametogeneza" indexH3={h3s[h2s.findIndex(h2 => h2 === "Gametogeneza, fecundația și dezvoltarea embrionară")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Gametogeneza, fecundația și dezvoltarea embrionară")].findIndex(h3 => h3 === "Gametogeneza") : -1 }></H3>
                  <p>
                  Reprezintă procesul de formare a gametilor, prin diviziune <strong>meiotica</strong>:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Spermatogeneza</strong> – are loc în testicule și produce <strong>spermatozoizi</strong>.</li>
                        <li><strong>Ovogeneza</strong> – are loc în ovare și produce ovule.</li>
                  </ul>
                  <p>
                  Spre deosebire de bărbați, care produc continuu spermatozoizi din pubertate, femeile se nasc cu un număr finit de ovule în stare latentă, care se maturizează lunar în timpul ciclului menstrual.
                  </p>
                  <H3 h3text="Fecundația" indexH3={h3s[h2s.findIndex(h2 => h2 === "Gametogeneza, fecundația și dezvoltarea embrionară")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Gametogeneza, fecundația și dezvoltarea embrionară")].findIndex(h3 => h3 === "Fecundația") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Este procesul prin care un <strong>spermatozoid</strong> pătrunde și se unește cu un <strong>ovul</strong>, formând o <strong>celulă ou</strong> (zigot).</li>
                        <li>Are loc în <strong>trompa uterină</strong>.</li>
                        <li>După fecundație, zigotul începe să se dividă și formează o structură numită <strong>blastocist</strong>, care ajunge în uter și se implantează în mucoasa uterină.</li>
                  </ul>
                  <H3 h3text="Dezvoltarea embrionară" indexH3={h3s[h2s.findIndex(h2 => h2 === "Gametogeneza, fecundația și dezvoltarea embrionară")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Gametogeneza, fecundația și dezvoltarea embrionară")].findIndex(h3 => h3 === "Dezvoltarea embrionară") : -1 }></H3>
                  <p>
                  Se desfășoară în mai multe etape:
                  </p>
                  <ol
                    className={olClass}>
                        <li><strong>Embrion</strong> – în primele 8 săptămâni; se formează toate organele majore.</li>
                        <li><strong>Făt</strong> – din săptămâna a 9-a până la naștere; organele se dezvoltă și se maturizează.</li>
                        <li><strong>Placenta</strong> – organ temporar format între mamă și făt; asigură schimbul de substanțe nutritive, gaze și deșeuri.</li>
                        <li><strong>Cordonul ombilical</strong> – leagă fătul de placentă.</li>
                  </ol>
                  <p>
                  Nașterea are loc în urma contracțiilor uterine și este urmată de eliminarea placentei (delivrenta).
                  </p>
                  <p>
                  Sistemul reproducător este esențial pentru asigurarea continuității speciei umane. Organele sexuale și procesele biologice precum <strong>gametogeneza, fecundația și dezvoltarea embrionară</strong> sunt fin reglate hormonal și adaptate pentru succesul reproducerii. Înțelegerea acestor mecanisme este importantă atât din punct de vedere biologic, cât și pentru sănătatea și responsabilitatea reproductivă a fiecărui individ.
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