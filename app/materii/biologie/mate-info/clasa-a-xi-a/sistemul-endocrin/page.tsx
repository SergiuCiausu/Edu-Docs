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
import { ulClass } from '@/app/class/ul';

const Page = () => {
  
  const { theme, setTheme } = useTheme();
  
    const [clickedLinkId, setClickedLinkId] = useState<string>("");
    
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const h2s = [
      "Glandele endocrine: structură și funcții",
      "Mecanisme hormonale de reglare",
      "Tulburări hormonale frecvente"
    ]

    const h3s = [
      ["Hipotalamusul", "Hipofiza (glanda pituitară)", "Glanda tiroidă", "Glandele paratiroide", "Glandele suprarenale" , "Pancreasul endocrin" , "Glandele sexuale (gonadele)"],
      ["Exemplu de feedback negativ", "Receptori și organe-țintă"],
      [""]
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Sistemul endocrin") + 1;

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
                  <h1>{`Capitolul ${indexLectie}: Sistemul endocrin`}</h1>
                  <p>
                  Organismul uman funcționează ca un întreg coordonat prin două mari sisteme de reglare: <strong>sistemul nervos</strong> și <strong>sistemul endocrin</strong>. Dacă sistemul nervos acționează rapid și punctual, sistemul endocrin reglează procesele biologice prin acțiuni mai lente, dar de durată, folosind mesageri chimici – <strong>hormonii</strong>. Împreună, aceste două sisteme asigură menținerea <strong>homeostaziei</strong>, creșterea, dezvoltarea și adaptarea organismului la mediu.
                  </p>
                  <H2 h2text="Glandele endocrine: structură și funcții" indexH2={indexH2("Glandele endocrine: structură și funcții")} indexLectie={indexLectie}></H2>
                  <p>
                  <strong>Glandele endocrine</strong> sunt organe specializate care <strong>produc și eliberează hormoni</strong> direct în sânge, fără a avea canale de excreție, spre deosebire de glandele exocrine. Fiecare glandă secretă hormoni specifici, care acționează asupra anumitor organe-țintă.
                  </p>
                  <H3 h3text="Hipotalamusul" indexH3={h3s[h2s.findIndex(h2 => h2 === "Glandele endocrine: structură și funcții")].findIndex(h3 => h3 === "Hipotalamusul")}></H3>
                  <ul
                    className={ulClass}>
                        <li>Face parte din encefal, fiind situat sub talamus.</li>
                        <li>Are rol dublu: <strong>nervos</strong> și <strong>endocrin</strong>.</li>
                        <li>Produce <strong>hormoni de reglare</strong> care controlează activitatea hipofizei: factori de eliberare (RH) și inhibare (IH).</li>
                        <li>Secretă <strong>ocitocina</strong> și <strong>hormonul antidiuretic (ADH)</strong>, care sunt stocați și eliberați de hipofiza posterioară.</li>
                  </ul>
                  <H3 h3text="Hipofiza (glanda pituitară)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Glandele endocrine: structură și funcții")].findIndex(h3 => h3 === "Hipofiza (glanda pituitară)")}></H3>
                  <ul
                    className={ulClass}>
                    <li>Situată la baza creierului, este numită și „glanda conducătoare”.</li>
                    <li>Are două lobi: <strong>anterior (adenohipofiza)</strong> și <strong>posterior (neurohipofiza)</strong>.</li>
                    <li>
                        Produce hormoni care controlează alte glande endocrine:
                        <ul
                            className={ulClass}>
                                <li><strong>STH</strong> – hormonul de creștere.</li>
                                <li><strong>TSH</strong> – stimulează tiroida.</li>
                                <li><strong>ACTH</strong> – controlează glandele suprarenale.</li>
                                <li><strong>LH</strong> și <strong>FSH</strong> – reglează funcțiile gonadelor.</li>
                                <li><strong>Prolactina</strong> – stimulează secreția lactată.</li>
                        </ul>
                    </li>
                  </ul>
                  <H3 h3text="Glanda tiroidă" indexH3={h3s[h2s.findIndex(h2 => h2 === "Glandele endocrine: structură și funcții")].findIndex(h3 => h3 === "Glanda tiroidă")}></H3>
                  <ul
                    className={ulClass}>
                        <li>Situată în partea anterioară a gâtului.</li>
                        <li>
                        Produce:
                            <ul
                                className={ulClass}>
                                    <li><strong>Tiroxina (T4) și triiodotironina (T3)</strong> – reglează metabolismul.</li>
                                    <li><strong>Calcitonina</strong> – scade nivelul calciului din sânge.</li>
                            </ul>
                        </li>
                  </ul>
                  <H3 h3text="Glandele paratiroide" indexH3={h3s[h2s.findIndex(h2 => h2 === "Glandele endocrine: structură și funcții")].findIndex(h3 => h3 === "Glandele paratiroide")}></H3>
                  <ul
                    className={ulClass}>
                        <li>Sunt 4 mici glande situate în spatele tiroidei.</li>
                        <li>Produc <strong>parathormonul</strong>, care crește nivelul calciului în sânge, în opoziție cu calcitonina.</li>
                  </ul>
                  <H3 h3text="Glandele suprarenale" indexH3={h3s[h2s.findIndex(h2 => h2 === "Glandele endocrine: structură și funcții")].findIndex(h3 => h3 === "Glandele suprarenale")}></H3>
                  <ul
                    className={ulClass}>
                        <li>Situate deasupra rinichilor.</li>
                        <li>
                            Au două zone:
                            <ul
                                className={ulClass}>
                                    <li><strong>Cortexul suprarenal</strong> – produce hormoni steroizi: <strong>aldosteron</strong>, <strong>cortizol</strong> și <strong>hormoni sexuali</strong>.</li>
                                    <li><strong>Măduva suprarenală</strong> – produce <strong>adrenalină</strong> și <strong>noradrenalină</strong>, implicate în reacții de stres („luptă sau fugi”).</li>
                            </ul>
                        </li>
                  </ul>
                  <H3 h3text="Pancreasul endocrin" indexH3={h3s[h2s.findIndex(h2 => h2 === "Glandele endocrine: structură și funcții")].findIndex(h3 => h3 === "Pancreasul endocrin")}></H3>
                  <ul
                    className={ulClass}>
                        <li>Are rol mixt: exocrin (în digestie) și endocrin.</li>
                        <li>
                            Insulele Langerhans produc:
                            <ul
                                className={ulClass}>
                                    <li><strong>Insulina</strong> – scade glicemia.</li>
                                    <li><strong>Glucagonul</strong> – crește glicemia.</li>
                            </ul>
                        </li>
                        <li>Dezechilibrul lor este cauza principală a diabetului zaharat.</li>
                  </ul>
                  <H3 h3text="Glandele sexuale (gonadele)" indexH3={h3s[h2s.findIndex(h2 => h2 === "Glandele endocrine: structură și funcții")].findIndex(h3 => h3 === "Glandele sexuale (gonadele)")}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Ovarele</strong> (la femei): secretă <strong>estrogen</strong> și <strong>progesteron</strong> – controlează caracteristicile sexuale secundare feminine și ciclul menstrual.</li>
                        <li><strong>Testiculele</strong> (la bărbați): secretă <strong>testosteron</strong> – determină dezvoltarea caracteristicilor masculine.</li>
                  </ul>
                  <H2 h2text="Mecanisme hormonale de reglare" indexH2={indexH2("Mecanisme hormonale de reglare")} indexLectie={indexLectie}></H2>
                  <p>
                  Funcționarea sistemului endocrin este precis controlată prin mecanisme de <strong>feedback</strong> (retroacțiune), în special de tip <strong>negativ</strong>. Aceste mecanisme mențin echilibrul hormonal în organism și previn secreția excesivă sau insuficientă de hormoni.
                  </p>
                  <H3 h3text="Exemplu de feedback negativ:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mecanisme hormonale de reglare")].findIndex(h3 => h3 === "Exemplu de feedback negativ")}></H3>
                  <ul
                    className={ulClass}>
                        <li>Când nivelul de <strong>tiroxină</strong> (T4) din sânge este suficient, hipotalamusul și hipofiza <strong>reduc secreția de TSH</strong>, ceea ce duce la scăderea producției de hormoni tiroidieni.</li>
                        <li>Dacă nivelul de tiroxină este prea scăzut, se produce mai mult TSH pentru a stimula tiroida.</li>
                  </ul>
                  <H3 h3text="Receptori și organe-țintă:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mecanisme hormonale de reglare")].findIndex(h3 => h3 === "Receptori și organe-țintă")}></H3>
                  <ul
                    className={ulClass}>
                        <li>Fiecare hormon acționează <strong>specific</strong> asupra celulelor care au <strong>receptori compatibili</strong>.</li>
                        <li>Acest lucru permite reglarea precisă a funcțiilor: metabolism, creștere, reproducere, echilibru hidric și ionic etc.</li>
                  </ul>
                  <H2 h2text="Tulburări hormonale frecvente:" indexH2={indexH2("Tulburări hormonale frecvente")} indexLectie={indexLectie}></H2>
                  <table
                    className="w-full text-left flex flex-col justify-between">
                    <thead
                        className="w-full flex justify-between gap-8">
                        <th className="flex-25">Tulburare</th>
                        <th className="flex-35">Cauză</th>
                        <th className="flex-45">Efect</th>
                    </thead>
                    <tr
                        className="w-full flex justify-between gap-8">
                        <td className="flex-25">Gigantism / Nanism</td>
                        <td className="flex-35">Exces / deficit de STH în copilărie</td>
                        <td className="flex-45">Creștere exagerată / insuficientă</td>
                    </tr>
                    <tr
                        className="w-full flex justify-between gap-8">
                        <td className="flex-25">Diabet zaharat</td>
                        <td className="flex-35">Lipsa de insulină sau rezistență la insulină	</td>
                        <td className="flex-45">Creșterea glicemiei</td>
                    </tr>
                    <tr
                        className="w-full flex justify-between gap-8">
                        <td className="flex-25">Hipertiroidism</td>
                        <td className="flex-35">Exces de tiroxină</td>
                        <td className="flex-45">Metabolism accelerat, insomnie, pierdere în greutate</td>
                    </tr>
                    <tr
                        className="w-full flex justify-between gap-8">
                        <td className="flex-25">Hipotiroidism</td>
                        <td className="flex-35">Deficit de tiroxină</td>
                        <td className="flex-45">Oboseală, creștere în greutate, metabolism lent</td>
                    </tr>
                  </table>
                  <p>
                  Sistemul endocrin este o rețea complexă de glande care lucrează împreună pentru a menține echilibrul intern și a coordona procesele vitale ale organismului. Prin intermediul hormonilor, sistemul endocrin influențează creșterea, dezvoltarea, metabolismul și reproducerea. Interacțiunea sa strânsă cu sistemul nervos formează baza coordonării integrate a funcțiilor organismului.
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