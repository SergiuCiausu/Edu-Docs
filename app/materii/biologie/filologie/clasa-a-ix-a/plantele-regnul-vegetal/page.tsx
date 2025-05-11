"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-stiinte-ale-naturii-9";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';

const page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Plantele - regnul vegetal") + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === "Plantele - regnul vegetal")].h3.map(header => header.text)

  const h3s = [
    [""],
    ["Rădăcina", "Tulpina", "Frunza", "Floarea"],
    ["Ecuația fotosintezei"],
    [""],
    ["Reproducerea asexuată", "Reproducerea sexuată"],
    ["Adaptări pentru dispersie"]
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
              profil="filologie" 
              materie="biologie" 
              clasa={9} 
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
                  <h1>{`Capitolul ${indexLectie}: Plantele – regnul vegetal`}</h1>
                  <p>
                  Plantele sunt organisme eucariote, autotrofe, pluricelulare, esențiale pentru viața pe Pământ. Ele produc oxigen, formează baza lanțurilor trofice și contribuie la menținerea echilibrului ecologic. Această lecție oferă o imagine generală asupra structurii, funcțiilor și mecanismelor de reproducere ale plantelor.
                  </p>
                  <H2 h2text="Structura și funcțiile plantelor" indexH2={indexH2("Structura și funcțiile plantelor")} indexLectie={indexLectie}></H2>
                  <p>
                  Plantele prezintă o organizare specifică, cu țesuturi și organe adaptate diverselor funcții vitale: absorbția apei și a sărurilor minerale, susținerea mecanică, fotosinteza, reproducerea și dezvoltarea.
                  </p>
                  <H2 h2text="Organele plantelor: rădăcina, tulpina, frunza, floarea" indexH2={indexH2("Organele plantelor: rădăcina, tulpina, frunza, floarea")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Rădăcina" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organele plantelor: rădăcina, tulpina, frunza, floarea")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organele plantelor: rădăcina, tulpina, frunza, floarea")].findIndex(h3 => h3 === "Rădăcina") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Este organul subteran care fixează planta în sol și absoarbe apa și sărurile minerale.</li>
                        <li>Poate prezenta ramificații (radiculară, fasciculată).</li>
                        <li>Zone principale: zona de creștere, zona de absorbție, zona de transport.</li>
                  </ul>
                  <H3 h3text="Tulpina" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organele plantelor: rădăcina, tulpina, frunza, floarea")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organele plantelor: rădăcina, tulpina, frunza, floarea")].findIndex(h3 => h3 === "Tulpina") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Asigură susținerea plantei și transportul sevei brute (apă + săruri minerale) și elaborate (substanțe organice).</li>
                        <li>Prezintă noduri și internoduri, muguri și poate fi erbacee sau lemnoasă.</li>
                  </ul>
                  <H3 h3text="Frunza" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organele plantelor: rădăcina, tulpina, frunza, floarea")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organele plantelor: rădăcina, tulpina, frunza, floarea")].findIndex(h3 => h3 === "Frunza") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Principalul organ de <strong>fotosinteză, transpirație și respirație</strong>.</li>
                        <li>Are o <strong>lamă foliară, pețiol și nervuri</strong>.</li>
                        <li>Stomatele reglează schimburile gazoase.</li>
                  </ul>
                  <H3 h3text="Floarea" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organele plantelor: rădăcina, tulpina, frunza, floarea")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organele plantelor: rădăcina, tulpina, frunza, floarea")].findIndex(h3 => h3 === "Floarea") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Este organul de reproducere sexuată.</li>
                        <li>Conține părți sterile (sepale, petale) și fertile (stamine – partea masculină, pistil – partea feminină).</li>
                  </ul>
                  <H2 h2text="Fotosinteza și rolul plantei în ecosistem" indexH2={indexH2("Fotosinteza și rolul plantei în ecosistem")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Fotosinteza</strong> este procesul prin care plantele verzi transformă energia solară în energie chimică stocată în glucoză.
                  </p>
                  <H3 h3text="Ecuația fotosintezei:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Fotosinteza și rolul plantei în ecosistem")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Fotosinteza și rolul plantei în ecosistem")].findIndex(h3 => h3 === "Ecuația fotosintezei") : -1}></H3>
                  <p>
                    6CO<sub>2</sub> + 6H<sub>2</sub>O + lumină → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub>
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Se desfășoară în cloroplaste, cu ajutorul clorofilei.</li>
                        <li>Oxigenul eliberat este esențial pentru respirația organismelor.</li>
                        <li>Plantele contribuie la echilibrul atmosferic, fixarea carbonului și hrănirea altor viețuitoare.</li>
                  </ul>
                  <H2 h2text="Reproducerea plantelor" indexH2={indexH2("Reproducerea plantelor")} indexLectie={indexLectie}></H2>
                  <p>
                  Plantele se pot înmulți atât <strong>asexuat</strong> (fără implicarea gametilor), cât și <strong>sexuat</strong> (prin fecundația dintre gametul masculin și cel feminin).
                  </p>
                  <H2 h2text="Reproducerea asexuată și sexuată la plante" indexH2={indexH2("Reproducerea asexuată și sexuată la plante")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Reproducerea asexuată" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reproducerea asexuată și sexuată la plante")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reproducerea asexuată și sexuată la plante")].findIndex(h3 => h3 === "Reproducerea asexuată") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Are loc fără fecundație.</li>
                        <li>
                            Exemple:
                            <ul
                                className={ulClass}>
                                    <li><strong>Prin organe vegetative</strong>: rizomi (grâu), tuberculi (cartof), bulbi (ceapă).</li>
                                    <li><strong>Prin butași sau marcotaj.</strong></li>
                            </ul>
                        </li>
                        <li>Este rapidă, dar nu asigură diversitate genetică.</li>
                  </ul>
                  <H3 h3text="Reproducerea sexuată" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reproducerea asexuată și sexuată la plante")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reproducerea asexuată și sexuată la plante")].findIndex(h3 => h3 === "Reproducerea asexuată") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Implică formarea de flori, producerea de <strong>gameti</strong> și <strong>fecundația</strong>.</li>
                        <li>Fecundația duce la formarea <strong>seminței</strong> și a <strong>fructului</strong>.</li>
                        <li>Asigură variabilitate genetică și adaptabilitate.</li>
                  </ul>
                  <H2 h2text="Tipuri de semințe și adaptări pentru dispersie" indexH2={indexH2("Tipuri de semințe și adaptări pentru dispersie")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Semințele</strong> reprezintă unitățile de reproducere și răspândire ale plantelor. Ele pot fi:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Monocotiledonate</strong> (ex: porumb),</li>
                        <li><strong>Dicotiledonate</strong> (ex: fasole).</li>
                  </ul>
                  <H3 h3text="Adaptări pentru dispersie:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Tipuri de semințe și adaptări pentru dispersie")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Tipuri de semințe și adaptări pentru dispersie")].findIndex(h3 => h3 === "Adaptări pentru dispersie") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Prin vânt</strong>: semințe ușoare cu aripi (păpădie, tei).</li>
                        <li><strong>Prin apă</strong>: semințe plutitoare (nucă de cocos).</li>
                        <li><strong>Prin animale</strong>: prin ingerare sau agățare de blană (brusture, zmeură).</li>
                        <li><strong>Prin explozie mecanică</strong>: capsule care se deschid brusc (salcâm, mazăre).</li>
                  </ul>
                  <p>
                  Plantele sunt organisme autotrofe, esențiale pentru ecosistem. Organele lor sunt specializate în funcții precise: absorbție, transport, fotosinteză, reproducere. Fotosinteza produce oxigen și substanțe organice. Reproducerea poate fi asexuată sau sexuată, cu semințe adaptate la diferite metode de dispersie.
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

export default page