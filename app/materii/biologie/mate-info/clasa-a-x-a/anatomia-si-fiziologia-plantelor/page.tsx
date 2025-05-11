"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import H3 from '@/app/components/PageContent/H3';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { titluri } from '@/app/data/capitole-bio-mate-info-10';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { ulClass } from '@/app/class/ul';

const page = () => {
  
  const { theme, setTheme } = useTheme();
  
    const [clickedLinkId, setClickedLinkId] = useState<string>("");
    
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const h2s = [
      "Structura și funcțiile rădăcinii, tulpinii și frunzei",
      "Structura și funcțiile florii, fructului și seminței",
      "Procese fiziologice: fotosinteza, respirația, transpirația",
      "Creșterea și dezvoltarea plantelor",
    ]

    const h3s = [
      ["Rădăcina", "Tulpina", "Frunza"],
      ["Floarea", "Fructul", "Sămânța"],
      ["Fotosinteza", "Respirația", "Transpirația"],
      [""],
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Anatomia și fiziologia plantelor") + 1;

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
                className="flex gap-12 relative">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: Anatomia și fiziologia plantelor`}</h1>
                  <p>
                  Plantele reprezintă organisme autotrofe esențiale în ecosistemele planetei, având un rol vital în susținerea vieții prin fotosinteză și producerea de oxigen. Înțelegerea structurii și funcțiilor organelor plantelor, alături de procesele fiziologice pe care le realizează, constituie o bază solidă pentru studiul biologiei vegetale.
                  </p>
                    <H2 h2text="Structura și funcțiile rădăcinii, tulpinii și frunzei" indexH2={indexH2("Structura și funcțiile rădăcinii, tulpinii și frunzei")} indexLectie={indexLectie}></H2>
                    <H3 h3text="Rădăcina" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile rădăcinii, tulpinii și frunzei")].findIndex(h3 => h3 === "Rădăcina")}></H3>
                    <p>Rădăcina este organul subteran al plantei, având roluri esențiale în:</p>
                    <ul
                        className={ulClass}>
                            <li>fixarea plantei în sol,</li>
                            <li>absorbția apei și a sărurilor minerale,</li>
                            <li>depozitarea substanțelor de rezervă.</li>
                    </ul>
                    <p>
                    Structura tipică a rădăcinii include:
                    </p>
                    <ul
                        className={ulClass}>
                            <li><strong>epiderma</strong> (protecție și absorbție),</li>
                            <li><strong>cortexul</strong> (depozitare și transport),</li>
                            <li><strong>cilindrul central</strong>, unde se află vasele conducătoare (xilem și floem).</li>
                    </ul>
                    <H3 h3text="Tulpina" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile rădăcinii, tulpinii și frunzei")].findIndex(h3 => h3 === "Tulpina")}></H3>
                    <p>
                    Tulpina este organul aerian care susține frunzele, florile și fructele. Funcțiile sale principale sunt:
                    </p>
                    <ul
                        className={ulClass}>
                            <li>conducerea sevei brute (de la rădăcină la frunze) și a sevei elaborate (de la frunze spre restul plantei),</li>
                            <li>depozitarea de substanțe nutritive,</li>
                            <li>uneori, fotosinteză.</li>
                    </ul>
                    <p>Tulpinile pot fi erbacee sau lemnoase, iar structura internă include:</p>
                    <ul
                        className={ulClass}>
                            <li><strong>epiderma</strong> (protecție),</li>
                            <li><strong>țesuturi mecanice</strong> (susținere),</li>
                            <li><strong>țesuturi conducătoare</strong> (xilem – transportă apă și săruri minerale; floem – transportă substanțe organice).</li>
                    </ul>
                    <H3 h3text="Frunza" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile rădăcinii, tulpinii și frunzei")].findIndex(h3 => h3 === "Frunza")}></H3>
                    <p>
                    Frunza este principalul organ de fotosinteză și transpirație. Este formată din:
                    </p>
                    <ul
                        className={ulClass}>
                            <li><strong>epidermă</strong> (protecție, cu stomate pentru schimburi gazoase),</li>
                            <li><strong>mezofil</strong> (țesut fotosintetic),</li>
                            <li><strong>nervuri</strong> (conțin vase conducătoare).</li>
                    </ul>
                    <p>
                    Frunza are funcții importante:
                    </p>
                    <ul
                        className={ulClass}>
                        <li><strong>fotosinteza</strong> – producerea de substanțe organice,</li>
                        <li><strong>transpirația</strong> – eliminarea apei în exces,</li>
                        <li><strong>respirația</strong> – schimb de gaze.</li>
                    </ul>
                    <H2 h2text="Structura și funcțiile florii, fructului și seminței" indexH2={indexH2("Structura și funcțiile florii, fructului și seminței")} indexLectie={indexLectie}></H2>
                    <H3 h3text="Floarea" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile florii, fructului și seminței")].findIndex(h3 => h3 === "Floarea")}></H3>
                    <p>
                    Floarea este organul de reproducere al plantelor angiosperme. Este alcătuită din:
                    </p>
                    <ul
                        className={ulClass}>
                            <li><strong>sepale</strong> (protecție),</li>
                            <li><strong>petale</strong> (atragerea polenizatorilor),</li>
                            <li><strong>stamine</strong> (organe masculine, produc polen),</li>
                            <li><strong>carpel(e)</strong> sau pistil (organe feminine, conțin ovulul).</li>
                    </ul>
                    <p>
                    Funcția principală a florii este reproducerea prin polenizare și fecundație.
                    </p>
                    <H3 h3text="Fructul" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile florii, fructului și seminței")].findIndex(h3 => h3 === "Fructul")}></H3>
                    <p>
                    Fructul se dezvoltă din ovarul florii după fecundație și are rolul de a:
                    </p>
                    <ul
                        className={ulClass}>
                            <li>proteja semințele,</li>
                            <li>facilita răspândirea lor.</li>
                    </ul>
                    <p>
                    Există fructe simple (măr, prun), compuse (zmeură) și multiple (smochin).
                    </p>
                    <H3 h3text="Sămânța" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile florii, fructului și seminței")].findIndex(h3 => h3 === "Sămânța")}></H3>
                    <p>
                    Sămânța provine din ovulul fecundat. Conține: 
                    </p>
                    <ul
                        className={ulClass}>
                            <li><strong>embrionul</strong> (viitoarea plantă),</li>
                            <li><strong>endospermul</strong> (rezervă nutritivă),</li>
                            <li><strong>învelișul seminal</strong> (protecție).</li>
                    </ul>
                    <p>Este adaptată pentru <strong>germinare</strong> și începerea unui nou ciclu de viață vegetal.</p>
                    <H2 h2text="Procese fiziologice: fotosinteza, respirația, transpirația" indexH2={indexH2("Procese fiziologice: fotosinteza, respirația, transpirația")} indexLectie={indexLectie}></H2>
                    <H3 h3text="Fotosinteza" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procese fiziologice: fotosinteza, respirația, transpirația")].findIndex(h3 => h3 === "Fotosinteza")}></H3>
                    <p>
                    Proces fundamental în care plantele produc glucoză și oxigen din dioxid de carbon și apă, cu ajutorul luminii solare și clorofilei:
                    </p>
                    <p>
                        <strong>6 CO₂ + 6 H₂O —(lumină, clorofilă)→ C₆H₁₂O₆ + 6 O₂</strong>
                    </p>
                    <p>
                    Are loc în <strong>cloroplaste</strong>, în special în frunze.
                    </p>
                    <H3 h3text="Respirația" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procese fiziologice: fotosinteza, respirația, transpirația")].findIndex(h3 => h3 === "Respirația")}></H3>
                    <p>
                    Proces invers fotosintezei, prin care glucoza este descompusă pentru a produce <strong>energie (ATP)</strong>:
                    </p>
                    <p>
                    C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energie (ATP)
                    </p>
                    <p>
                    Are loc în <strong>mitocondrii</strong>, atât ziua, cât și noaptea.
                    </p>
                    <H3 h3text="Transpirația" indexH3={h3s[h2s.findIndex(h2 => h2 === "Procese fiziologice: fotosinteza, respirația, transpirația")].findIndex(h3 => h3 === "Transpirația")}></H3>
                    <p>
                    Eliminarea apei sub formă de vapori prin stomatele frunzei. Are rol în:
                    </p>
                    <ul
                        className={ulClass}>
                            <li>răcirea plantei;</li>
                            <li>transportul sevei brute;</li>
                            <li>menținerea presiunii osmotice.</li>
                    </ul>
                    <H2 h2text="Creșterea și dezvoltarea plantelor" indexH2={indexH2("Creșterea și dezvoltarea plantelor")} indexLectie={indexLectie}></H2>
                    <p>
                    Plantele cresc datorită diviziunii celulare în <strong>țesuturile meristematice</strong>. Creșterea poate fi:
                    </p>
                    <ul
                        className={ulClass}>
                            <li><strong>primară</strong> (alungirea rădăcinii și tulpinii),</li>
                            <li><strong>secundară</strong> (îngroșare, în plantele lemnoase).</li>
                    </ul>
                    <p>
                    <strong>Dezvoltarea</strong> implică:
                    </p>
                    <ul
                        className={ulClass}>
                            <li>diferențierea celulelor;</li>
                            <li>formarea organelor;</li>
                            <li>trecerea prin diferite etape: germinare, creștere, înflorire, fructificare, îmbătrânire.</li>
                    </ul>
                    <p>
                    Factorii interni (fitohormonii) și cei externi (lumina, temperatura, apa) influențează ritmul de creștere și dezvoltare.
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