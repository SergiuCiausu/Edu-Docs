"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import H3 from '@/app/components/PageContent/H3';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { titluri } from "@/app/data/capitole-bio-mate-info-9";
import { ulClass } from '@/app/class/ul';

const Page = () => {

  const { theme, setTheme } = useTheme();

  const [clickedLinkId, setClickedLinkId] = useState<string>("");
  
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const h2s = [
      "Nutriția autotrofă: fotosinteza",
      "Respirația la plante",
      "Circulația sevei brute și elaborate",
      "Transpirația și excreția",
      "Creșterea și dezvoltarea plantelor",
      "Reproducerea la plante: înmulțirea vegetativă și generativă"
    ]

    const h3s = [
      [
        ""
      ],
      [
        ""
      ],
      [
        ""
      ],
      [
        ""
      ],
      [
        ""
      ],
      [
        "Înmulțirea vegetativă",
        "Înmulțirea generativă"
      ],
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Procesele vitale la plante") + 1;

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
                className="flex gap-12 relative">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: Procesele vitale la plante`}</h1>
                  <p>Plantele sunt organisme autotrofe care joacă un rol esențial în menținerea echilibrului ecosistemelor. Prin intermediul proceselor vitale, ele își asigură supraviețuirea, dezvoltarea și reproducerea. În această lecție, vom analiza principalele funcții biologice care stau la baza vieții plantelor.</p>
                  <H2 h2text="Nutriția autotrofă: fotosinteza" indexH2={indexH2("Nutriția autotrofă: fotosinteza")} indexLectie={indexLectie}></H2>
                  <p>Nutriția autotrofă este procesul prin care plantele își 
                    produc singure substanțele nutritive, utilizând lumina solară 
                    pentru a transforma <strong>dioxidul de carbon (CO₂)</strong> și <strong>apa (H₂O)</strong> în 
                    <strong>glucoză </strong>și <strong>oxigen (O₂)</strong>. Acest proces are loc în <strong>cloroplaste</strong>, 
                    organite celulare ce conțin pigmentul verde numit <strong>clorofilă</strong>.
                  </p>
                  <p>
                    <strong>Ecuația fotosintezei</strong>
                  </p>
                  <p>6CO₂ + 6H₂O + lumină → C₆H₁₂O₆ + 6O₂</p>
                  <p>
                  Fotosinteza este vitală deoarece:
                  </p>
                  <ul
                    className={ulClass}>
                      <li>Plantele își produc hrana necesară;</li>
                      <li>Eliberează oxigenul în atmosferă;</li>
                      <li>Stă la baza lanțurilor trofice.</li>
                  </ul>
                  <H2 h2text="Respirația la plante" indexH2={indexH2("Respirația la plante")} indexLectie={indexLectie}></H2>
                  <p>
                  Respirația este procesul prin care plantele descompun glucoza 
                  obținută din fotosinteză pentru a produce <strong>energie</strong> sub formă de 
                  <strong> ATP</strong> (adenozin trifosfat), necesară desfășurării activităților 
                  celulare. Acest proces are loc în <strong>mitocondrii</strong>.
                  </p>
                  <p>Ecuația respirației celulare:</p>
                  <p>C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energie (ATP)</p>
                  <p>Respirația are loc <strong>zi și noapte</strong>, spre deosebire de fotosinteză, care se desfășoară doar în prezența luminii.</p>
                  <H2 h2text="Circulația sevei brute și elaborate" indexH2={indexH2("Circulația sevei brute și elaborate")} indexLectie={indexLectie}></H2>
                  <p>În plante există două tipuri de sevă:</p>
                  <ul
                    className={ulClass}>
                      <li><strong>Seva brută</strong>: este alcătuită din apă și săruri minerale absorbite din sol, care circulă de la rădăcină către frunze prin <strong>vasele conducătoare lemnoase (xilem)</strong>.</li>
                      <li><strong>Seva elaborată</strong>: este formată din zaharuri (în special glucoză) și alte substanțe organice rezultate în urma fotosintezei. Ea circulă de la frunze spre alte organe ale plantei prin <strong>vasele liberiene (floem)</strong>.</li>
                  </ul>
                  <p>
                  Această circulație asigură transportul substanțelor necesare în toate zonele plantei.
                  </p>
                  <H2 h2text="Transpirația și excreția" indexH2={indexH2("Transpirația și excreția")} indexLectie={indexLectie}></H2>
                  <ul
                    className={ulClass}>
                      <li>
                      <strong>Transpirația</strong> reprezintă eliminarea apei sub formă de vapori, în special prin stomate, aflate pe suprafața frunzelor. Acest proces ajută la:
                        <ul
                          className={ulClass}>
                          <li>răcirea plantei;</li>
                          <li>absorbția apei din sol prin efectul de sucțiune;</li>
                          <li>transportul sevei brute.</li>
                        </ul>
                      </li>
                      <li><strong>Excreția</strong> la plante constă în eliminarea substanțelor nefolositoare sau toxice, precum oxigenul rezultat din fotosinteză sau alte reziduuri, prin stomate, lenticele sau căderea frunzelor.</li>
                  </ul>
                  <H2 h2text="Creșterea și dezvoltarea plantelor" indexH2={indexH2("Creșterea și dezvoltarea plantelor")} indexLectie={indexLectie}></H2>
                  <p>
                  Creșterea plantelor este un proces ireversibil de <strong>mărire a volumului și masei</strong> acestora, determinat de diviziunea și alungirea celulelor.
                  </p>
                  <ul
                    className={ulClass}>
                      <li>Zonele de creștere activă se numesc meristeme și se găsesc la vârfurile rădăcinilor și tulpinilor.</li>
                      <li><strong>Dezvoltarea</strong>Dezvoltarea include diferențierea celulelor și apariția organelor vegetale (frunze, flori, fructe).</li>
                  </ul>
                  <p>
                  Creșterea este influențată de:
                  </p>
                  <ul
                    className={ulClass}>
                      <li>factorii interni (fitohormoni precum auxine, gibereline);</li>
                      <li>factorii externi (lumină, apă, temperatură, nutrienți).</li>
                  </ul>
                  <H2 h2text="Reproducerea la plante: înmulțirea vegetativă și generativă" indexH2={indexH2("Reproducerea la plante: înmulțirea vegetativă și generativă")} indexLectie={indexLectie}></H2>
                  <p>
                  Plantele se pot reproduce prin două modalități:
                  </p>
                  <H3 h3text="Înmulțirea vegetativă" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reproducerea la plante: înmulțirea vegetativă și generativă")].findIndex(h3 => h3 === "Înmulțirea vegetativă")}></H3>
                  <p>
                  Este o reproducere <strong>asexuată</strong>, în care o parte a plantei (rădăcină, tulpină sau frunză) formează o nouă plantă. Exemple:
                  </p>
                  <ul
                    className={ulClass}>
                      <li>Cartoful – tuberculi;</li>
                      <li>Ceapa – bulbi;</li>
                      <li>Căpșuna – stoloni.</li>
                  </ul>
                  <p>
                  Avantaje:
                  </p>
                  <ul
                    className={ulClass}>
                      <li>rapidă;</li>
                      <li>fidelă genetic plantei-mamă.</li>
                  </ul>
                  <H3 h3text="Înmulțirea generativă" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reproducerea la plante: înmulțirea vegetativă și generativă")].findIndex(h3 => h3 === "Înmulțirea generativă")}></H3>
                  <p>
                  Este o reproducere <strong>sexuată</strong>, ce implică formarea de <strong>gameți</strong> și are loc prin <strong>flori</strong>. 
                  După polenizare și fecundație, rezultă semințele care vor da naștere unei noi plante.
                  </p>
                  <p>Etapele sunt:</p>
                  <ul
                    className={ulClass}>
                      <li>formarea florilor → polenizare → fecundație → fructificare → germinarea seminței.</li>
                  </ul>
                  <p>Procesele vitale la plante demonstrează complexitatea și autonomia 
                    acestora. De la fotosinteză la reproducere, plantele sunt echipate 
                    cu mecanisme biologice esențiale nu doar pentru propria 
                    supraviețuire, ci și pentru echilibrul întregii biosfere. 
                    Înțelegerea acestor procese este fundamentală în studierea 
                    biologiei.
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