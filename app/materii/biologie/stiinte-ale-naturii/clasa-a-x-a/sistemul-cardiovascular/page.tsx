"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-stiinte-ale-naturii-10";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';

const page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Sistemul cardiovascular"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Funcțiile inimii"],
    [""],
    [""],
    [""],
    ["Circulația mică (pulmonară)", "Circulația mare (sistemică)"],
    ["Ritmul cardiac", "Tensiunea arterială"],
    [""]
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
                className="flex gap-12">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: ${h1}`}</h1>
                  <p>
                  Sistemul cardiovascular este esențial pentru menținerea vieții, deoarece asigură <strong>transportul oxigenului, nutrienților, hormonilor</strong> și al altor substanțe către celule, precum și <strong>eliminarea dioxidului de carbon și a reziduurilor</strong> metabolice. Componenta principală a sistemului este <strong>inima</strong>, alături de o rețea complexă de <strong>vase de sânge</strong>.
                  </p>
                  <H2 h2text="Structura și funcțiile inimii" indexH2={indexH2("Structura și funcțiile inimii")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Inima</strong> este un organ muscular, de mărimea unui pumn, situat în cavitatea toracică, între plămâni. Este <strong>pompa centrală</strong> a sistemului cardiovascular.
                  </p>
                  <H3 h3text="Funcțiile inimii:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile inimii")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile inimii")].findIndex(h3 => h3 === "Funcțiile inimii") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Pomparea sângelui</strong> spre plămâni (circulația mică),</li>
                        <li><strong>Pomparea sângelui</strong> oxigenat către toate organele (circulația mare),</li>
                        <li><strong>Menținerea presiunii arteriale</strong> constante.</li>
                  </ul>
                  <H2 h2text="Anatomia inimii" indexH2={indexH2("Anatomia inimii")} indexLectie={indexLectie}></H2>
                  <p>
                  Inima este formată din <strong>patru camere</strong>:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>2 atrii</strong> (superioare) – atriul drept și atriul stâng,</li>
                        <li><strong>2 ventricule</strong> (inferioare) – ventriculul drept și ventriculul stâng.</li>
                  </ul>
                  <p>
                  Între atrii și ventricule se află <strong>valve</strong>:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Valva atrioventriculară dreaptă</strong> (tricuspida),</li>
                        <li><strong>Valva atrioventriculară stângă</strong> (bicuspida sau mitrala).</li>
                  </ul>
                  <p>
                  La ieșirea din ventricule:
                  </p>
                  <ul
                    className={ulClass}>
                    <li><strong>Valva pulmonară</strong> – între ventriculul drept și artera pulmonară,</li>
                    <li><strong>Valva aortică</strong> – între ventriculul stâng și aortă.</li>
                  </ul>
                  <p>
                  Valvele asigură circulația <strong>unidirecțională</strong> a sângelui și previn refluxul.
                  </p>
                  <H2 h2text="Circulația sanguină și rolul sistemului cardiovascular" indexH2={indexH2("Circulația sanguină și rolul sistemului cardiovascular")} indexLectie={indexLectie}></H2>
                  <p>
                  Sistemul cardiovascular are ca rol principal <strong>transportul substanțelor vitale</strong> și <strong>menținerea homeostaziei</strong>. Circulația sângelui se realizează în două circuite:
                  </p>
                  <H2 h2text="Tipuri de vase sanguine" indexH2={indexH2("Tipuri de vase sanguine")} indexLectie={indexLectie}></H2>
                  <p>
                  Vasele de sânge sunt structuri tubulare prin care circulă sângele:
                  </p>
                  <table className={tableClass}>
                    <thead className={trClass}>
                        <th className="flex-25">Tip de vas</th>
                        <th className="flex-35">Funcție principală</th>
                        <th className="flex-45">Caracteristici</th>
                    </thead>
                    <tbody>
                        <tr className={trClass}>
                            <td className="flex-25">Artere</td>
                            <td className="flex-35">Transportă sângele de la inimă</td>
                            <td className="flex-45">Pereți groși, elastici, presiune mare</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-25">Vene</td>
                            <td className="flex-35">Transportă sângele spre inimă</td>
                            <td className="flex-45">Pereți subțiri, au valve</td>
                        </tr>
                        <tr className={trClass}>
                            <td className="flex-25">Capilare</td>
                            <td className="flex-35">Schimburi de gaze și substanțe cu țesuturile</td>
                            <td className="flex-45">Pereți foarte subțiri, un strat celular</td>
                        </tr>
                    </tbody>
                  </table>
                  <H2 h2text="Circulația mică și circulația mare" indexH2={indexH2("Circulația mică și circulația mare")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Circulația mică (pulmonară):" indexH3={h3s[h2s.findIndex(h2 => h2 === "Circulația mică și circulația mare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Circulația mică și circulația mare")].findIndex(h3 => h3 === "Circulația mică (pulmonară)") : -1}></H3>
                  <ul
                    className={ulClass}>
                    <li>Ventriculul drept → artera pulmonară → plămâni (oxigenare) → vene pulmonare → atriul stâng.</li>
                  </ul>
                  <H3 h3text="Circulația mare (sistemică):" indexH3={h3s[h2s.findIndex(h2 => h2 === "Circulația mică și circulația mare")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Circulația mică și circulația mare")].findIndex(h3 => h3 === "Circulația mare (sistemică)") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Ventriculul stâng → aortă → corp (oxigen și nutrienți) → vene cave → atriul drept.</li>
                  </ul>
                  <p>
                  Aceste două circuite funcționează <strong>simultan și sincronizat</strong>, asigurând un flux sanguin constant.
                  </p>
                  <H2 h2text="Reglarea ritmului cardiac și tensiunii arteriale" indexH2={indexH2("Reglarea ritmului cardiac și tensiunii arteriale")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Ritmul cardiac:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reglarea ritmului cardiac și tensiunii arteriale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reglarea ritmului cardiac și tensiunii arteriale")].findIndex(h3 => h3 === "Ritmul cardiac") : -1}></H3>
                  <p>
                  Este controlat de un sistem specializat:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Nodul sinoatrial</strong> – inițiază impulsul electric (pacemaker natural),</li>
                        <li><strong>Nodul atrioventricular</strong> – transmite impulsul către ventricule,</li>
                        <li><strong>Fibrele Purkinje</strong> – coordonează contracția ventriculară.</li>
                  </ul>
                  <p>
                  Activitatea cardiacă este reglată de:
                  </p>
                  <ul 
                    className={ulClass}>
                        <li><strong>Sistemul nervos autonom</strong> (simpatic – accelerează; parasimpatic – încetinește),</li>
                        <li><strong>Hormonii</strong> (adrenalină – crește ritmul),</li>
                        <li><strong>Factori externi</strong> (efort, stres, temperatură).</li>
                  </ul>
                  <H3 h3text="Tensiunea arterială:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Reglarea ritmului cardiac și tensiunii arteriale")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Reglarea ritmului cardiac și tensiunii arteriale")].findIndex(h3 => h3 === "Tensiunea arterială") : -1}></H3>
                  <p>
                  Reprezintă presiunea exercitată de sânge asupra pereților arteriali.
                  </p>
                  <p>
                  Valori normale:
                  </p>
                  <ul
                    className={ulClass}>
                        <li><strong>Sistolică</strong>: ~120 mmHg,</li>
                        <li><strong>Diastolică</strong>: ~80 mmHg.</li>
                  </ul>
                  <p>
                  Tensiunea este reglată prin:
                  </p>
                  <ul
                    className={ulClass}>
                        <li>Diametrul vaselor de sânge (vasodilatație/vasoconstricție),</li>
                        <li>Volumul de sânge pompat,</li>
                        <li>Activitatea rinichilor (reglarea volumului de lichide).</li>
                  </ul>
                  <p>
                  Inima pompează sângele prin două circuite: mica circulație (plămâni) și marea circulație (restul corpului). Vasele de sânge sunt: <strong>artere, vene și capilare</strong>, fiecare având un rol specific. Ritmul cardiac este reglat de <strong>nodurile specializate</strong> și de <strong>sistemul nervos autonom</strong>. Tensiunea arterială este un indicator esențial al sănătății sistemului cardiovascular.
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